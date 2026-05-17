/**
 * link-coverage.ts — link-COVERAGE detector (the missing per-civ step).
 *
 * lint-links.ts validates entries that EXIST. It cannot see a link that was
 * never created. Under-production of links is exactly what forced the
 * corpus-wide sweep; this detector folds that sweep's 3-pass logic into the
 * per-civ pipeline so a new civ ships comprehensive on the first pass.
 *
 * Per chapter, flag terms that look like they should be linked but are not
 * covered by any event/glossary/cross matchText and are not explicitly waived:
 *   Pass A — author-bolded **terms** with no link of any type  [GATED]
 *   Pass B — Capitalised proper nouns / proper-noun phrases     [advisory]
 *
 * Pass A is the precise under-production signal: the author bolded a term
 * (deliberate emphasis) yet it carries no link. --strict fails on uncovered
 * Pass A only. Pass B is inherently noisy (every capitalised word) so it is
 * printed as a curation hint, never gated.
 *
 * Triage every Pass-A hit: add a link, or waive it in
 * content/.link-waivers-{tl}.json  ({ "<chapter>": ["Term", ...] }) for things
 * deliberately left unlinked (modern country names, universal basics).
 *
 * Heuristic ⇒ a per-civ curation gate, NOT a corpus prebuild gate.
 *
 * Usage:
 *   tsx scripts/link-coverage.ts --tl=goryeo-korea
 *   tsx scripts/link-coverage.ts --tl=goryeo-korea --strict   # exit 1 if any
 *   tsx scripts/link-coverage.ts --tl=goryeo-korea --ch=3
 */
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'

const ROOT = join(__dirname, '..')
const NARR = join(ROOT, 'narratives')
const CONTENT = join(ROOT, 'content')

const args = process.argv.slice(2)
const tl = args.find(a => a.startsWith('--tl='))?.slice(5)
const onlyCh = args.find(a => a.startsWith('--ch='))?.slice(5)
const strict = args.includes('--strict')
if (!tl) { console.error('Usage: tsx scripts/link-coverage.ts --tl=<civ> [--ch=N] [--strict]'); process.exit(2) }

// Words that are Capitalised but not link-worthy on their own.
const STOP = new Set([
  'The', 'A', 'An', 'And', 'But', 'Or', 'For', 'In', 'On', 'At', 'By', 'To', 'Of', 'As', 'If',
  'This', 'That', 'These', 'Those', 'It', 'Its', 'He', 'She', 'They', 'We', 'His', 'Her', 'Their',
  'When', 'Where', 'While', 'Then', 'There', 'Here', 'Now', 'Not', 'No', 'Yes', 'So', 'Yet',
  'Chapter', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday', 'Sunday',
])

function chapters(): Map<string, { title: string; body: string }> {
  const md = readFileSync(join(NARR, `${tl}.md`), 'utf-8')
  const out = new Map<string, { title: string; body: string }>()
  const re = /^# Chapter (\d+)\s*[—-]\s*(.*)$/gm
  const marks: { n: string; title: string; idx: number }[] = []
  let m: RegExpExecArray | null
  while ((m = re.exec(md))) marks.push({ n: m[1], title: m[2].trim(), idx: m.index })
  for (let i = 0; i < marks.length; i++)
    out.set(marks[i].n, { title: marks[i].title, body: md.slice(marks[i].idx, marks[i + 1]?.idx ?? md.length) })
  return out
}

function loadJson<T>(p: string): T | null {
  return existsSync(p) ? JSON.parse(readFileSync(p, 'utf-8')) as T : null
}

const gloss = loadJson<Record<string, { matchText: string }[]>>(join(CONTENT, `.glossary-links-${tl}.json`)) ?? {}
const ev = loadJson<Record<string, { matchText: string }[]>>(join(CONTENT, `.event-links-${tl}.json`)) ?? {}
const cx = loadJson<Record<string, { matchText: string }[]>>(join(CONTENT, `.cross-links-${tl}.json`)) ?? {}
const waivers = loadJson<Record<string, string[]>>(join(CONTENT, `.link-waivers-${tl}.json`)) ?? {}

const chs = chapters()
let total = 0

for (const [ch, { body }] of [...chs].sort((a, b) => Number(a[0]) - Number(b[0]))) {
  if (onlyCh && ch !== onlyCh) continue
  const linked = [
    ...(gloss[ch] ?? []), ...(ev[ch] ?? []), ...(cx[ch] ?? []),
  ].map(x => x.matchText.toLowerCase())
  const waived = new Set((waivers[ch] ?? []).map(s => s.toLowerCase()))
  const norm = (s: string) => s.toLowerCase().replace(/[’']s$/, '').trim()
  const covered = (term: string) => {
    const t = norm(term)
    if (waived.has(t) || waived.has(term.toLowerCase())) return true
    return linked.some(l => l === t || l.includes(t) || t.includes(l))
  }

  const gatedA: string[] = []
  const adviseB: string[] = []
  const seen = new Set<string>()

  // Pass A (GATED): bolded terms with no link of any type.
  for (const m of body.matchAll(/\*\*([^*]+?)\*\*/g)) {
    const term = m[1].replace(/[`*_]/g, '').trim()
    if (term.length < 3 || /^\d+$/.test(term)) continue
    const k = norm(term)
    if (!covered(term) && !seen.has(k)) { seen.add(k); gatedA.push(term) }
  }

  // Pass B (advisory): Capitalised proper-noun phrases (skip header line).
  const prose = body.replace(/^# Chapter .*$/m, '')
  for (const m of prose.matchAll(/(?<![.?!]\s)\b\p{Lu}[\p{L}’'-]+(?:\s+\p{Lu}[\p{L}’'-]+)*/gu)) {
    const term = m[0].replace(/[’']s$/, '').trim()
    const first = term.split(/\s+/)[0]
    if (STOP.has(first) && !term.includes(' ')) continue
    if (term.length < 4) continue
    const k = norm(term)
    if (!covered(term) && !seen.has(k)) { seen.add(k); adviseB.push(term) }
  }

  if (gatedA.length === 0 && adviseB.length === 0) continue
  console.log(`\n--- ch${ch} ---`)
  if (gatedA.length) console.log(`  GATED (bolded, unlinked): ${gatedA.join(' · ')}`)
  if (adviseB.length) console.log(`  advisory (proper nouns):  ${adviseB.join(' · ')}`)
  total += gatedA.length
}

console.log(`\nlink-coverage ${tl}: ${total} uncovered BOLDED term(s) [gated] — link each or waive in content/.link-waivers-${tl}.json`)
if (strict && total > 0) { console.error('STRICT: untriaged bolded-but-unlinked terms'); process.exit(1) }
