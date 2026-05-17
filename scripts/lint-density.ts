/**
 * lint-density.ts — events-per-chapter density gate.
 *
 * The product bar (user-locked): every chapter surfaces 10–15 events to the
 * reader. "Events" = distinct eventIds linked into the chapter via
 * content/.event-links-{tl}.json (the parser dedups by eventId, so distinct
 * eventIds is exactly what the reader gets). A chapter with no entry at all
 * counts as 0 — the worst case, and the one the audit found shipping
 * (scientific-revolution Ch1 = 0, avg 3.5/ch).
 *
 * Severity:  < MIN (10) → ERROR (thin chapter, the real defect)
 *            > MAX (15) → WARN  (bloated; "don't force it" allows some flex)
 *
 * Legacy civs are grandfathered via audits/density-baseline.json so this gate
 * does NOT break the existing corpus build (same pattern as
 * audits/link-lint-baseline.json). Any civ NOT in the baseline — i.e. all 17
 * new civs — is held to the band with zero tolerance.
 *
 * Usage:
 *   tsx scripts/lint-density.ts                  # report every civ
 *   tsx scripts/lint-density.ts --tl=goryeo-korea
 *   tsx scripts/lint-density.ts --strict         # exit 1 on non-grandfathered ERROR
 *   tsx scripts/lint-density.ts --write-baseline  # snapshot current low chapters
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '..')
const NARR = join(ROOT, 'narratives')
const CONTENT = join(ROOT, 'content')
const BASELINE = join(ROOT, 'audits', 'density-baseline.json')

const MIN = 10
const MAX = 15

const args = process.argv.slice(2)
const onlyTl = args.find(a => a.startsWith('--tl='))?.slice(5)
const strict = args.includes('--strict')
const writeBaseline = args.includes('--write-baseline')

// Grandfathered (tl → [chapterNumbers]) whose low density predates this gate.
// A (tl,ch) here is downgraded ERROR→WARN. New civs never appear here.
const baseline: Record<string, number[]> = existsSync(BASELINE)
  ? JSON.parse(readFileSync(BASELINE, 'utf-8'))
  : {}

function chapterNumbers(tl: string): string[] {
  const md = readFileSync(join(NARR, `${tl}.md`), 'utf-8')
  const re = /^# Chapter (\d+)\s*[—-]/gm
  const out: string[] = []
  let m: RegExpExecArray | null
  while ((m = re.exec(md))) out.push(m[1])
  return out
}

const tls = (onlyTl ? [onlyTl] : readdirSync(NARR)
  .filter(f => f.endsWith('.md'))
  .map(f => f.replace('.md', '')))
  .filter(tl => existsSync(join(NARR, `${tl}.md`)))
  .sort()

type Row = { tl: string; ch: string; n: number; sev: 'ERROR' | 'WARN' }
const rows: Row[] = []
const snapshot: Record<string, number[]> = {}
let errCount = 0
let warnCount = 0

for (const tl of tls) {
  let chs: string[]
  try { chs = chapterNumbers(tl) } catch { console.error(`  ✗ ${tl}: no narrative`); errCount++; continue }
  const ev: Record<string, { eventId: string }[]> =
    existsSync(join(CONTENT, `.event-links-${tl}.json`))
      ? JSON.parse(readFileSync(join(CONTENT, `.event-links-${tl}.json`), 'utf-8'))
      : {}

  const counts = chs.map(ch => ({ ch, n: new Set((ev[ch] ?? []).map(e => e.eventId)).size }))
  const ns = counts.map(c => c.n)
  const min = ns.length ? Math.min(...ns) : 0
  const max = ns.length ? Math.max(...ns) : 0
  const avg = ns.length ? (ns.reduce((a, b) => a + b, 0) / ns.length) : 0
  const grandfathered = new Set(baseline[tl] ?? [])

  const bad: number[] = []
  for (const { ch, n } of counts) {
    if (n < MIN) {
      const isGf = grandfathered.has(Number(ch))
      const sev: 'ERROR' | 'WARN' = isGf ? 'WARN' : 'ERROR'
      rows.push({ tl, ch, n, sev })
      sev === 'ERROR' ? errCount++ : warnCount++
      bad.push(Number(ch))
      ;(snapshot[tl] ??= []).push(Number(ch))
    } else if (n > MAX) {
      rows.push({ tl, ch, n, sev: 'WARN' })
      warnCount++
    }
  }
  const flag = bad.length ? ` ⚠ ${bad.length} chapter(s) below ${MIN}` : ''
  console.log(`${tl}: ${ns.length}ch · events/ch min ${min} / max ${max} / avg ${avg.toFixed(1)}${flag}`)
}

for (const r of rows.filter(r => r.sev === 'ERROR'))
  console.log(`  ✗ ${r.tl} ch${r.ch}: ${r.n} events (< ${MIN})`)

console.log(`\nlint-density: ${tls.length} civs · ${errCount} ERROR · ${warnCount} WARN  (band ${MIN}–${MAX})`)

if (writeBaseline) {
  for (const k of Object.keys(snapshot)) snapshot[k] = [...new Set(snapshot[k])].sort((a, b) => a - b)
  writeFileSync(BASELINE, JSON.stringify(snapshot, null, 0) + '\n')
  console.log(`wrote ${BASELINE} (${Object.keys(snapshot).length} grandfathered civs)`)
}

if (strict && errCount > 0) { console.error('STRICT: non-grandfathered density errors present'); process.exit(1) }
