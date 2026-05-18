// apply-decisions.mjs — COORDINATOR single-writer. Applies /tmp/decisions/*.json
// (overlaid with /tmp/suspect-fixes.json) into the repo source of truth:
//   event retarget  → reference-data/<tl>.json events[id].wikiSlug = newSlug
//   event blurb     → delete that event's wikiSlug (description renders alone)
//   gloss retarget  → content/.glossary-links-<tl>.json entries[term].wikiSlug = newSlug
//   gloss blurb     → that entry: wikiSlug="" + definition=<authored copy>
//   keep            → no change (original link was a false alarm, already fine)
// --dry prints the plan; without it, writes the files.

import { readFileSync, writeFileSync, existsSync, readdirSync } from 'node:fs'

const dry = process.argv.includes('--dry')
const dir = (process.argv.find((a) => a.startsWith('--dir=')) || '').split('=')[1] || '/tmp/decisions'
const fixesArg = (process.argv.find((a) => a.startsWith('--fixes=')) || '').split('=')[1]
const fixesPath = fixesArg === undefined ? '/tmp/suspect-fixes.json' : fixesArg // pass --fixes= (empty) to skip
const fixes = new Map()
if (fixesPath) for (const x of JSON.parse(readFileSync(fixesPath, 'utf8'))) fixes.set(`${x.tl}::${x.id}`, x)

const byTl = new Map()
for (const f of readdirSync(dir)) {
  if (!f.endsWith('.json')) continue
  const arr = JSON.parse(readFileSync(`${dir}/${f}`, 'utf8'))
  for (const d of arr) {
    const fx = fixes.get(`${d.tl}::${d.id}`)
    if (fx) { // overlay the safety-sweep verdict
      if (fx.verdict === 'blurb') { d.action = 'blurb'; d.definition = fx.definition; delete d.newSlug; delete d.newTitle }
      else { d.action = 'retarget'; d.newSlug = fx.newSlug; d.newTitle = fx.newTitle } // 'ok' or corrected
    }
    if (!byTl.has(d.tl)) byTl.set(d.tl, [])
    byTl.get(d.tl).push(d)
  }
}

const stat = { evRe: 0, evBl: 0, glRe: 0, glBl: 0, keep: 0, miss: 0 }
const misses = []
for (const [tl, decs] of [...byTl].sort()) {
  const refPath = `reference-data/${tl}.json`
  const glPath = `content/.glossary-links-${tl}.json`
  const ref = existsSync(refPath) ? JSON.parse(readFileSync(refPath, 'utf8')) : null
  const gl = existsSync(glPath) ? JSON.parse(readFileSync(glPath, 'utf8')) : null
  const evById = ref ? Object.fromEntries((ref.events || []).map((e) => [e.id, e])) : {}

  for (const d of decs) {
    if (d.action === 'keep') { stat.keep++; continue }
    if (d.kind === 'event') {
      const e = evById[d.id]
      if (!e) { stat.miss++; misses.push(`${tl} event ${d.id} (not in reference-data)`); continue }
      if (d.action === 'retarget') { e.wikiSlug = d.newSlug; stat.evRe++ }
      else if (d.action === 'blurb') { delete e.wikiSlug; stat.evBl++ }
    } else { // glossary — match every chapter entry with this term + old slug
      if (!gl) { stat.miss++; misses.push(`${tl} glossary ${d.id} (no glossary-links file)`); continue }
      let hit = 0
      for (const ch of Object.keys(gl)) for (const en of gl[ch]) {
        if (en.term !== d.term) continue
        if (d.action === 'retarget') { en.wikiSlug = d.newSlug; delete en.definition; hit++ }
        else if (d.action === 'blurb') { en.wikiSlug = ''; en.definition = d.definition; hit++ }
      }
      if (!hit) { stat.miss++; misses.push(`${tl} glossary "${d.term}" (no entry matched)`) }
      else if (d.action === 'retarget') stat.glRe++; else stat.glBl++
    }
  }
  if (!dry) {
    if (ref) writeFileSync(refPath, JSON.stringify(ref, null, 2) + '\n')
    if (gl) writeFileSync(glPath, JSON.stringify(gl, null, 2) + '\n')
  }
}

console.log(`${dry ? '[DRY] ' : ''}applied across ${byTl.size} civs:`)
console.log(`  event   retarget ${stat.evRe}   blurb ${stat.evBl}`)
console.log(`  glossary retarget ${stat.glRe}   blurb ${stat.glBl}`)
console.log(`  keep (false alarms left alone) ${stat.keep}`)
console.log(`  UNMATCHED ${stat.miss}`)
for (const m of misses.slice(0, 30)) console.log(`    - ${m}`)
if (misses.length > 30) console.log(`    …and ${misses.length - 30} more`)
