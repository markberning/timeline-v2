/**
 * sweep-apply.mjs — apply a swept civ's per-chapter agent outputs into the civ's
 * reference-data + caption/rejection override files. The final merge step of the
 * event-upgrade sweep (after card agents + sweep-photos + vision pick).
 *
 * Sweep chain: sweep-bundle.mjs (prep) → card agents → sweep-photos.mjs (gather) →
 *   vision pick → THIS (apply) → npm run parse → G14/G15/fix-links → commit.
 *
 * Reads <out>/ch*.json (default /tmp/<tlId>-out), each:
 *   { chapter, cards: [ { eventId, description, exploreFurther,
 *                         photo: { decision: 'override'|'keep'|'reject'|'todo',
 *                                  commonsFile?, caption?, reason? } } ] }
 * Writes:
 *   reference-data/<tlId>.json     — event.description, event.details, event.commonsFile
 *   content/.caption-overrides.json
 *   content/.image-rejections.json
 *
 * Usage:
 *   node scripts/sweep-apply.mjs <tlId> [--out <dir>] [--dry]
 *     --out <dir>  card-output dir (default /tmp/<tlId>-out)
 *     --dry        report what would change; write nothing
 *
 * Chapter count is auto-discovered from the ch*.json files present — a missing
 * chapter is reported, never silently skipped (this is what stranded elamite ch7).
 */

import fs from 'fs'
import { join } from 'path'

const ROOT = join(import.meta.dirname, '..')
const argv = process.argv.slice(2)
const tl = argv.find(a => !a.startsWith('--'))
if (!tl) { console.error('usage: node scripts/sweep-apply.mjs <tlId> [--out <dir>] [--dry]'); process.exit(1) }
const opt = (name, def) => { const i = argv.indexOf(`--${name}`); return i >= 0 ? argv[i + 1] : def }
const DRY = argv.includes('--dry')
const OUT_DIR = opt('out', `/tmp/${tl}-out`)

const refPath = join(ROOT, 'reference-data', `${tl}.json`)
const capPath = join(ROOT, 'content', '.caption-overrides.json')
const rejPath = join(ROOT, 'content', '.image-rejections.json')

if (!fs.existsSync(refPath)) { console.error(`no reference-data: ${refPath}`); process.exit(1) }
if (!fs.existsSync(OUT_DIR)) { console.error(`no card-output dir: ${OUT_DIR}`); process.exit(1) }

const d = JSON.parse(fs.readFileSync(refPath, 'utf8'))
const all = [...(d.events || [])]
if (Array.isArray(d.spans)) for (const s of d.spans) if (Array.isArray(s.events)) all.push(...s.events)
const byId = new Map(all.map(e => [e.id, e]))
const caps = fs.existsSync(capPath) ? JSON.parse(fs.readFileSync(capPath, 'utf8')) : {}
const rej = fs.existsSync(rejPath) ? JSON.parse(fs.readFileSync(rejPath, 'utf8')) : {}

// Discover chapter files; report gaps in the 1..max range so a stall is visible.
const chFiles = fs.readdirSync(OUT_DIR).filter(f => /^ch\d+\.json$/.test(f))
const present = new Set(chFiles.map(f => Number(f.match(/\d+/)[0])))
const maxCh = present.size ? Math.max(...present) : 0
const gaps = []
for (let i = 1; i <= maxCh; i++) if (!present.has(i)) gaps.push(i)

let nCards = 0, nOver = 0, nReject = 0, nCap = 0, nTodo = 0
const missing = [], badCard = []
for (let ch = 1; ch <= maxCh; ch++) {
  const p = join(OUT_DIR, `ch${ch}.json`)
  if (!fs.existsSync(p)) continue
  const out = JSON.parse(fs.readFileSync(p, 'utf8'))
  for (const card of out.cards || []) {
    const e = byId.get(card.eventId)
    if (!e) { missing.push(card.eventId); continue }
    if (!card.description || !card.exploreFurther) { badCard.push(card.eventId); continue }
    e.description = card.description.trim()
    e.details = [{ label: 'Explore further', text: card.exploreFurther.trim() }]
    nCards++
    const ph = card.photo || {}
    if ((ph.decision === 'override' || ph.decision === 'keep') && ph.commonsFile) {
      e.commonsFile = ph.commonsFile.replace(/^File:/i, '').trim(); nOver++
      delete rej[card.eventId]
      if (ph.caption) { caps[card.eventId] = ph.caption.trim(); nCap++ }
    } else if (ph.decision === 'reject') {
      if (e.commonsFile) delete e.commonsFile
      rej[card.eventId] = ph.reason || 'no apt born-verified photo'; nReject++
      delete caps[card.eventId]
    } else if (ph.decision === 'todo') {
      // rate-limited / photo pending — leave commonsFile + rejection untouched,
      // do NOT mark rejected. Surface it so the gap is re-run, not lost.
      nTodo++
    } else if (ph.caption) { caps[card.eventId] = ph.caption.trim(); nCap++ }
  }
}

if (!DRY) {
  fs.writeFileSync(refPath, JSON.stringify(d, null, 2) + '\n')
  fs.writeFileSync(capPath, JSON.stringify(caps, null, 2) + '\n')
  fs.writeFileSync(rejPath, JSON.stringify(rej, null, 2) + '\n')
}

console.log(`${DRY ? '[dry] would apply' : 'applied'}: ${nCards} cards · ${nOver} photos · ${nReject} rejections · ${nTodo} photos-pending · ${nCap} captions`)
if (gaps.length) console.log(`⚠ MISSING chapter outputs (gaps in 1..${maxCh}): ${gaps.join(', ')} — re-run those before shipping`)
if (nTodo) console.log(`⚠ ${nTodo} photo(s) marked todo/pending (rate-limited?) — re-run sweep-photos + pick, then re-apply`)
if (missing.length) console.log(`⚠ card eventIds not found in reference-data: ${missing.join(', ')}`)
if (badCard.length) console.log(`⚠ cards missing description/exploreFurther (skipped): ${badCard.join(', ')}`)
