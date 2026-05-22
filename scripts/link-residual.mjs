#!/usr/bin/env node
/**
 * link-residual.mjs — close a civ's residual coverage gaps in one shot.
 *
 * After the chapter agents run + sweep-merge + sweep-verify, a swept civ usually has
 * a small residual of NEW GATE gaps: demonyms and entities that recur in chapters the
 * (possibly stale) worklist didn't flag, plus the civ's own-name adjective. This turn
 * I hand-wrote the same cross-chapter "find a free unowned prose occurrence and add a
 * glossary link" snippet for gokturk / emep / viking / mesopotamia. This script IS that
 * snippet, parameterised — the deciding (term → slug) stays a coordinator judgement
 * (born-verify each slug first), the mechanical applying is automated. Matches the
 * pipeline's decide-vs-do split (audits/link-pipeline.md).
 *
 * Input: audits/link-suggest/<tl>.residual.json
 *   {
 *     "glossary": [["Demonym or Term", "Wikipedia_Slug"], ...],   // born-verified slugs
 *     "waivers":  [[chapterNumber, "Exact Term"], ...]            // own-name/locator only
 *   }
 * For each glossary [term, slug]: in EVERY chapter, if the term has a free, exact-case,
 * word-boundary occurrence in the PROSE (heading lines stripped) that no existing
 * glossary/cross/event link already owns, add { matchText, term, wikiSlug }. Skips
 * (never overwrites) owned spans, so it can't create the overlap drops you'd then have
 * to clean up. Reports adds + per-term skips.
 *
 * Dry-run by default; --apply writes. Then re-run sweep-verify <tl> --fix-drops.
 *
 * Usage: node scripts/link-residual.mjs <tlId> [--apply]
 */
import fs from 'fs'

const tl = process.argv[2]
if (!tl || tl.startsWith('--')) { console.error('usage: node scripts/link-residual.mjs <tlId> [--apply]'); process.exit(2) }
const APPLY = process.argv.includes('--apply')

const planP = `audits/link-suggest/${tl}.residual.json`
if (!fs.existsSync(planP)) {
  console.error(`no ${planP}\nCreate it: { "glossary": [["Term","Slug"],...], "waivers": [[ch,"Term"],...] }`)
  console.error('(slugs must be born-verified first — link-residual only APPLIES, it does not decide.)')
  process.exit(2)
}
const plan = JSON.parse(fs.readFileSync(planP, 'utf8'))
const G = plan.glossary || []
const W = plan.waivers || []

const narrP = `narratives/${tl}.md`
if (!fs.existsSync(narrP)) { console.error(`no narrative ${narrP}`); process.exit(2) }
const narr = fs.readFileSync(narrP, 'utf8')
const marks = [...narr.matchAll(/^# Chapter\s+(\d+)\b/gm)]
const chapters = marks.map(m => +m[1])
const prose = (n) => {
  for (let i = 0; i < marks.length; i++) if (+marks[i][1] === n) {
    const t = narr.slice(marks[i].index, i + 1 < marks.length ? marks[i + 1].index : narr.length)
    return t.split('\n').filter(l => !/^#{1,6}\s/.test(l)).join('\n')   // PROSE only — no heading/title fragments
  }
  return ''
}
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const findCase = (mt, n) => { const m = new RegExp(`(?<![\\p{L}\\p{N}_])(${esc(mt)})(?![\\p{L}\\p{N}_])`, 'iu').exec(prose(n)); return m ? m[1] : null }

const gP = `content/.glossary-links-${tl}.json`
const cP = `content/.cross-links-${tl}.json`
const eP = `content/.event-links-${tl}.json`
const wP = `content/.link-waivers-${tl}.json`
const load = (p) => { try { return JSON.parse(fs.readFileSync(p)) } catch { return {} } }
const gloss = load(gP), cross = load(cP), events = load(eP), waiv = load(wP)
const owner = (ch) => {
  const o = new Set()
  for (const x of (gloss[ch] || [])) o.add((x.matchText || '').trim())
  for (const x of (cross[ch] || [])) o.add((x.matchText || '').trim())
  for (const x of (events[ch] || [])) o.add((x.matchText || '').trim())
  return o
}

const added = []
const skipped = []
const ownerCache = new Map()
const o = (ch) => { if (!ownerCache.has(ch)) ownerCache.set(ch, owner(ch)); return ownerCache.get(ch) }

for (const [term, slug] of G) {
  let hit = 0
  for (const ch of chapters) {
    const k = String(ch)
    const real = findCase(term, ch)
    if (!real) continue
    if (o(k).has(real)) { skipped.push(`ch${k} "${real}" (already owned)`); continue }
    gloss[k] = gloss[k] || []
    gloss[k].push({ matchText: real, term, wikiSlug: slug })
    o(k).add(real); added.push({ ch: k, matchText: real, slug }); hit++
  }
  if (!hit && !skipped.some(s => s.includes(`"${term}"`))) skipped.push(`"${term}" — no free prose occurrence in any chapter`)
}

let aw = 0
for (const [ch, term] of W) {
  const k = String(ch); waiv[k] = waiv[k] || []
  if (!waiv[k].includes(term)) { waiv[k].push(term); aw++ }
}

console.log(`\n=== link-residual ${tl} ${APPLY ? '(APPLY)' : '(dry-run)'} ===`)
console.log(`would add ${added.length} glossary link(s), ${aw} waiver(s).\n`)
for (const a of added) console.log(`  + ch${a.ch}  "${a.matchText}" → ${a.slug}`)
if (skipped.length) { console.log(`\n  skipped:`); for (const s of skipped) console.log(`    · ${s}`) }

if (APPLY) {
  fs.writeFileSync(gP, JSON.stringify(gloss, null, 2) + '\n')
  fs.writeFileSync(wP, JSON.stringify(waiv, null, 2) + '\n')
  console.log(`\n✓ wrote ${gP} + ${wP}`)
  console.log(`NEXT: node scripts/sweep-verify.mjs ${tl} --fix-drops`)
} else {
  console.log(`\n(dry-run — re-run with --apply to write.)`)
}
