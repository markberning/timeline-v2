#!/usr/bin/env node
/**
 * link-apply.mjs — auto-write the PROVABLY-SAFE slice of REUSE links only.
 *
 * Context: ~40% of every civ's coverage gaps are "REUSE-high" — the exact term is
 * already a born-verified glossary link in another civ. But REUSE is NOT a quality
 * guarantee: the source corpus includes legacy links that can be the WRONG SUBJECT
 * for a same-named thing (Mansur→a Mughal painter, Antioch→the ancient-Greek city in
 * a Crusades chapter). fix-links can't catch that class; only a lead-read can. So an
 * agent normally confirms every REUSE.
 *
 * This script auto-writes ONLY the narrow slice where a same-name/wrong-subject mixup
 * is near-impossible, leaving everything else to the agents:
 *   - decision REUSE, conf 'high'      (link-suggest found exactly ONE slug for the
 *                                        term across the whole corpus — no ambiguity)
 *   - term is ≥2 words                  (excludes single-word person/place homonyms,
 *                                        the riskiest class — e.g. "Antioch", "Mansur")
 *   - slug linked in ≥2 DISTINCT civs   (independent consensus, not one legacy guess)
 *   - a clean, exact-case, plain word-boundary occurrence exists in the chapter body
 *   - that span isn't already owned by an existing glossary/cross/event link
 *
 * Everything it writes still passes the FULL gate stack afterward (lint-links,
 * fix-links, audit-reuse-links, coverage, snapshot) — so a bad auto-write is blocked
 * before commit; worst case is a technically-correct-but-could-be-tighter link, the
 * same quality floor as a rushed agent row. Every written link is printed for eyeball.
 *
 * Dry-run by default; pass --apply to write. Emits audits/link-suggest/<tl>.applied.json
 * (the (chapter,term) rows it took) so link-split.mjs can exclude them from agent work.
 *
 * Usage: node scripts/link-apply.mjs <tlId> [--apply] [--min-civs=2]
 */
import fs from 'fs'

const tl = process.argv[2]
if (!tl || tl.startsWith('--')) { console.error('usage: node scripts/link-apply.mjs <tlId> [--apply] [--min-civs=2]'); process.exit(2) }
const APPLY = process.argv.includes('--apply')
const minCivsArg = process.argv.find(a => a.startsWith('--min-civs='))
const MIN_CIVS = minCivsArg ? parseInt(minCivsArg.split('=')[1], 10) : 2

const suggestP = `audits/link-suggest/${tl}.json`
if (!fs.existsSync(suggestP)) { console.error(`no ${suggestP} — run: node scripts/link-suggest.mjs --tl=${tl}`); process.exit(2) }
const narrP = `narratives/${tl}.md`
if (!fs.existsSync(narrP)) { console.error(`no narrative ${narrP}`); process.exit(2) }

const rows = JSON.parse(fs.readFileSync(suggestP, 'utf8'))

// ── chapter bodies (raw markdown between `# Chapter N` headers) ───────────────
const narr = fs.readFileSync(narrP, 'utf8')
const bodies = new Map()  // chapterNumber(string) -> raw text
{
  const re = /^# Chapter\s+(\d+)\b/gm
  const marks = [...narr.matchAll(re)]
  for (let i = 0; i < marks.length; i++) {
    const ch = marks[i][1]
    const start = marks[i].index
    const end = i + 1 < marks.length ? marks[i + 1].index : narr.length
    // PROSE only: drop heading lines (`#`, `##`, …) so a term that lives only in the
    // chapter title isn't auto-linked as a title fragment — it gets deferred instead.
    const prose = narr.slice(start, end).split('\n').filter(l => !/^#{1,6}\s/.test(l)).join('\n')
    bodies.set(ch, prose)
  }
}

// ── matchText extraction mirroring the parser EXACTLY ────────────────────────
// parse-narratives.ts replaces with a CASE-SENSITIVE ('u') Unicode word-boundary
// regex; lint validates case-insensitively. To satisfy both we must hand back the
// body's EXACT-CASE substring. Find the term case-insensitively, return what's there.
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const cleanTerm = (t) => String(t)
  .replace(/\s+Ch$/i, '')                 // "(… Ch N)" detection artifact
  .replace(/^[*\s]+/, '')                 // leading "* " advisory marker / spaces
  .replace(/[`*_]/g, '')                  // markdown emphasis markers
  .replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}'’)]+$/gu, '')  // trim edge punctuation (lint rule)
  .replace(/\s+/g, ' ')
  .trim()

function findExactCase(term, body) {
  const re = new RegExp(`(?<![\\p{L}\\p{N}_])(${escapeRe(term)})(?![\\p{L}\\p{N}_])`, 'iu')
  const m = re.exec(body)
  return m ? m[1] : null   // exact-case substring as it appears in the body
}

// ── existing links (don't overwrite a span an existing link owns) ────────────
const gP = `content/.glossary-links-${tl}.json`
const cP = `content/.cross-links-${tl}.json`
const eP = `content/.event-links-${tl}.json`
const load = (p) => { try { return JSON.parse(fs.readFileSync(p)) } catch { return {} } }
const gloss = load(gP), cross = load(cP), events = load(eP)
const ownerFor = (ch) => {
  const o = new Map()
  for (const e of (gloss[ch] || [])) o.set((e.matchText || '').trim(), 'glossary')
  for (const e of (cross[ch] || [])) o.set((e.matchText || '').trim(), 'cross')
  for (const e of (events[ch] || [])) o.set((e.matchText || '').trim(), 'event')
  return o
}

// ── decide ───────────────────────────────────────────────────────────────────
const written = []     // { ch, matchText, term, slug, sourceCivs }
const deferred = []    // { ch, term, why }   (REUSE-high left for the agents)
const applied = []     // { chapter, term }   (suppress in link-split)

const ownerCache = new Map()
const owner = (ch) => { if (!ownerCache.has(ch)) ownerCache.set(ch, ownerFor(ch)); return ownerCache.get(ch) }

for (const r of rows) {
  if (r.decision !== 'REUSE' || r.conf !== 'high') continue
  const ch = String(r.chapter)
  const term = cleanTerm(r.term)
  const words = term.split(/\s+/).filter(Boolean)
  const reason = (w) => { deferred.push({ ch, term, why: w }); }

  if (words.length < 2) { reason('single word (homonym risk → agent)'); continue }
  if (words.length > 6) { reason('>6 words (matchText bar → agent)'); continue }
  if (term.includes(',')) { reason('contains comma (matchText bar → agent)'); continue }
  if ((r.sourceCivs ?? 0) < MIN_CIVS) { reason(`only ${r.sourceCivs ?? 0} source civ(s) < ${MIN_CIVS} (→ agent)`); continue }
  const body = bodies.get(ch)
  if (!body) { reason(`chapter ${ch} not in narrative (→ agent)`); continue }
  const matchText = findExactCase(term, body)
  if (!matchText) { reason('no clean word-boundary occurrence in body (→ agent)'); continue }
  if (owner(ch).has(matchText)) { applied.push({ chapter: r.chapter, term: r.term }); continue }  // already linked — nothing to do, suppress from agents

  // safe slice — write it
  gloss[ch] = gloss[ch] || []
  gloss[ch].push({ matchText, term, wikiSlug: r.slug })
  owner(ch).set(matchText, 'glossary')
  written.push({ ch, matchText, term, slug: r.slug, sourceCivs: r.sourceCivs })
  applied.push({ chapter: r.chapter, term: r.term })
}

// ── report ────────────────────────────────────────────────────────────────────
console.log(`\n=== link-apply ${tl} ${APPLY ? '(APPLY)' : '(dry-run — pass --apply to write)'} ===`)
console.log(`safe-slice criteria: REUSE conf=high · ≥2 words · ≥${MIN_CIVS} source civs · clean exact-case body match · unowned span\n`)
console.log(`would write ${written.length} glossary link(s); ${deferred.length} REUSE-high deferred to agents.\n`)
for (const w of written) console.log(`  + ch${w.ch}  "${w.matchText}"  → ${w.slug}   (${w.sourceCivs} civs)`)
if (deferred.length) {
  console.log(`\n  deferred to agents (NOT auto-written — need a lead-read):`)
  const byWhy = {}
  for (const d of deferred) (byWhy[d.why] = byWhy[d.why] || []).push(`ch${d.ch} "${d.term}"`)
  for (const why of Object.keys(byWhy)) console.log(`    [${byWhy[why].length}] ${why}: ${byWhy[why].slice(0, 8).join(', ')}${byWhy[why].length > 8 ? ' …' : ''}`)
}

if (APPLY) {
  fs.writeFileSync(gP, JSON.stringify(gloss, null, 2) + '\n')
  fs.writeFileSync(`audits/link-suggest/${tl}.applied.json`, JSON.stringify(applied, null, 2) + '\n')
  console.log(`\n✓ wrote ${written.length} links to ${gP}`)
  console.log(`✓ wrote ${applied.length} suppression rows to audits/link-suggest/${tl}.applied.json`)
  console.log(`\nNEXT: eyeball the list above, then run audit-reuse-links + sweep-verify (full gate stack re-checks every auto-written link).`)
} else {
  console.log(`\n(dry-run — nothing written. Re-run with --apply to commit these to ${gP}.)`)
}
