/**
 * repair-links.ts — conservative, deterministic repair of curated link
 * matchText that the parser silently drops (not found in the chapter body).
 *
 * It NEVER guesses. A fix is applied only if the rewritten matchText actually
 * `\b`-matches the correct chapter body via the EXACT regex the parser uses
 * (mirror of scripts/parse-narratives.ts replaceOutsideAnchors).
 *
 * Rules (each candidate must pass matchesBody before being accepted):
 *   R-UNESCAPE   literal backslash artifacts in matchText  → unescape
 *   R-TRIM       substring present but \b fails on edge punct/markdown → trim
 *   R-MOVE       phrase \b-matches exactly ONE other chapter → relocate entry
 *                (glossary always; event/cross only on a unique target chapter)
 *   R-SHRINK     non-ASCII at a boundary → drop the boundary token if a
 *                meaningful ASCII-bounded sub-span still matches
 * Anything not repaired by these is left untouched and reported as
 * "needs-curation" (the agent pass / gate baseline).
 *
 * Usage:
 *   tsx scripts/repair-links.ts                  # dry-run, all civs, report
 *   tsx scripts/repair-links.ts --tl=al-andalus  # one civ
 *   tsx scripts/repair-links.ts --apply          # write the files
 *   tsx scripts/repair-links.ts --apply --tl=... # write one civ
 */
import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '..')
const NARR = join(ROOT, 'narratives')
const CONTENT = join(ROOT, 'content')
const args = process.argv.slice(2)
const onlyTl = args.find(a => a.startsWith('--tl='))?.slice(5)
const apply = args.includes('--apply')

function matchesBody(mt: string, body: string): boolean {
  const escaped = mt.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  try { return new RegExp(`\\b(${escaped})\\b`, 'i').test(body) } catch { return false }
}
const sane = (s: string) => s.trim().length >= 3 && /[A-Za-z]/.test(s)

function chapters(tl: string): Map<string, string> {
  const md = readFileSync(join(NARR, `${tl}.md`), 'utf-8')
  const re = /^# Chapter (\d+)\s*[—-]\s*.*$/gm
  const marks: { n: string; idx: number }[] = []
  let m: RegExpExecArray | null
  while ((m = re.exec(md))) marks.push({ n: m[1], idx: m.index })
  const out = new Map<string, string>()
  for (let i = 0; i < marks.length; i++)
    out.set(marks[i].n, md.slice(marks[i].idx, marks[i + 1]?.idx ?? md.length))
  return out
}

type Cand = { mt: string; rule: string }
function candidates(mt: string): Cand[] {
  const c: Cand[] = []
  if (/\\/.test(mt)) c.push({ mt: mt.replace(/\\(["\\])/g, '$1').replace(/^["']+|["']+$/g, ''), rule: 'R-UNESCAPE' })
  const trimmed = mt.replace(/^[^\w]+/, '').replace(/[^\w'’]+$/, '')
  if (trimmed !== mt) c.push({ mt: trimmed, rule: 'R-TRIM' })
  // non-ASCII boundary: drop the offending leading/trailing whitespace-token
  if (/^[^\x00-\x7F]/.test(mt)) { const w = mt.replace(/^\S+\s*/, ''); if (w) c.push({ mt: w, rule: 'R-SHRINK' }) }
  if (/[^\x00-\x7F]$/.test(mt)) { const w = mt.replace(/\s*\S+$/, ''); if (w) c.push({ mt: w, rule: 'R-SHRINK' }) }
  return c.filter(x => sane(x.mt))
}

type Fix = { tl: string; kind: string; fromCh: string; toCh: string; rule: string; old: string; neu: string }
const fixes: Fix[] = []
const unfixable: { tl: string; kind: string; ch: string; mt: string }[] = []

function repairFile(tl: string, kind: 'event' | 'glossary' | 'cross', chs: Map<string, string>) {
  const path = join(CONTENT, `.${kind}-links-${tl}.json`)
  if (!existsSync(path)) return
  const orig = readFileSync(path, 'utf-8')
  const data: Record<string, any[]> = JSON.parse(orig)
  let dirty = false
  for (const ch of Object.keys(data)) {
    const body = chs.get(ch)
    const keep: any[] = []
    for (const e of data[ch]) {
      const mt: string = e.matchText
      if (body && matchesBody(mt, body)) { keep.push(e); continue }
      // try in-place candidate rewrites against the assigned chapter
      let done = false
      if (body) for (const cand of candidates(mt)) {
        if (matchesBody(cand.mt, body)) {
          fixes.push({ tl, kind, fromCh: ch, toCh: ch, rule: cand.rule, old: mt, neu: cand.mt })
          e.matchText = cand.mt; keep.push(e); dirty = done = true; break
        }
      }
      if (done) continue
      // R-MOVE: exact phrase \b-matches exactly one OTHER chapter
      const hits = [...chs.entries()].filter(([n, b]) => n !== ch && matchesBody(mt, b)).map(([n]) => n)
      if (hits.length === 1) {
        const to = hits[0]
        fixes.push({ tl, kind, fromCh: ch, toCh: to, rule: 'R-MOVE', old: mt, neu: mt })
        ;(data[to] ??= []).push(e); dirty = true; continue
      }
      unfixable.push({ tl, kind, ch, mt })
      keep.push(e) // leave it; the gate baseline grandfathers it
    }
    data[ch] = keep
  }
  if (dirty && apply) writeFileSync(path, emit(kind, data, orig))
}

// Re-emit preserving the file's original style (event = one entry/line;
// glossary & cross = expanded 2-space, which is plain JSON.stringify).
function emit(kind: string, data: Record<string, any[]>, orig: string): string {
  if (kind !== 'event') return JSON.stringify(data, null, 2) + (orig.endsWith('\n') ? '\n' : '')
  const lines = ['{']
  const keys = Object.keys(data)
  keys.forEach((k, ki) => {
    lines.push(`  ${JSON.stringify(k)}: [`)
    data[k].forEach((e, ei) => {
      lines.push(`    ${JSON.stringify(e)}${ei < data[k].length - 1 ? ',' : ''}`)
    })
    lines.push(`  ]${ki < keys.length - 1 ? ',' : ''}`)
  })
  lines.push('}')
  return lines.join('\n') + (orig.endsWith('\n') ? '\n' : '')
}

const tls = (onlyTl ? [onlyTl] : readdirSync(NARR)
  .filter(f => f.endsWith('.md')).map(f => f.replace('.md', '')))
  .filter(tl => existsSync(join(NARR, `${tl}.md`))).sort()

for (const tl of tls) {
  let chs: Map<string, string>
  try { chs = chapters(tl) } catch { continue }
  for (const k of ['event', 'glossary', 'cross'] as const) repairFile(tl, k, chs)
}

const byRule = fixes.reduce<Record<string, number>>((a, f) => (a[f.rule] = (a[f.rule] || 0) + 1, a), {})
const unfixByKind = unfixable.reduce<Record<string, number>>((a, u) => (a[u.kind] = (a[u.kind] || 0) + 1, a), {})
console.log(`\nrepair-links (${apply ? 'APPLIED' : 'DRY-RUN'}) · ${tls.length} civs`)
console.log(`  fixable:   ${fixes.length}`, JSON.stringify(byRule))
console.log(`  unfixable: ${unfixable.length}`, JSON.stringify(unfixByKind), '(left in place; need curation)')
const ftl = fixes.reduce<Record<string, number>>((a, f) => (a[f.tl] = (a[f.tl] || 0) + 1, a), {})
console.log('  top fixed TLs:', Object.entries(ftl).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([t, n]) => `${t}:${n}`).join(' '))
if (!apply) {
  console.log('\n  sample fixes:')
  for (const f of fixes.slice(0, 14))
    console.log(`   [${f.rule}] ${f.tl} ${f.kind} ch${f.fromCh}${f.toCh !== f.fromCh ? `→ch${f.toCh}` : ''}: ${JSON.stringify(f.old)} → ${JSON.stringify(f.neu)}`)
}
