// Apply triage decisions for ONE civ (backlog #1 Phase 2).
// Reads audits/slug-decisions/<civ>.json = { "<deadSlug>": "<newSlug>" | null }
//   string -> retarget: set wikiSlug to the subject-verified canonical slug
//   null   -> BLURB-PENDING: keep the entry, clear wikiSlug (""), to be filled
//             with an authored house-voice `definition` (events-style). NOT
//             dropped — every term keeps its glossary affordance.
// usage: node scripts/apply-slug-decisions.mjs <civId>

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const civ = process.argv[2]
if (!civ) { console.error('usage: node scripts/apply-slug-decisions.mjs <civId>'); process.exit(1) }
const ROOT = process.cwd()
const decisions = JSON.parse(readFileSync(join(ROOT, 'audits', 'slug-decisions', `${civ}.json`), 'utf8'))
const gp = join(ROOT, 'content', `.glossary-links-${civ}.json`)
const g = JSON.parse(readFileSync(gp, 'utf8'))

let retargeted = 0, blurbPending = 0
const unseen = new Set(Object.keys(decisions))
for (const arr of Object.values(g)) {
  for (const e of arr) {
    if (e && typeof e.wikiSlug === 'string' && Object.prototype.hasOwnProperty.call(decisions, e.wikiSlug)) {
      unseen.delete(e.wikiSlug)
      const dec = decisions[e.wikiSlug]
      if (dec === null) { e.wikiSlug = ''; blurbPending++ }   // awaiting authored definition
      else { e.wikiSlug = dec; retargeted++ }                  // retarget to verified article
    }
  }
}
writeFileSync(gp, JSON.stringify(g, null, 2) + '\n')
console.log(`${civ}: ${retargeted} retargeted, ${blurbPending} blurb-pending`)
if (unseen.size) console.log(`WARNING: decisions not found in glossary: ${[...unseen].join(', ')}`)
