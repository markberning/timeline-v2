// Apply human inline-triage decisions for ONE civ (backlog #1 Phase 2).
// Reads audits/slug-decisions/<civ>.json = { "<deadSlug>": "<newSlug>" | null }
//   string -> set wikiSlug to the (subject-verified, canonical) new slug
//   null   -> DROP: remove that glossary entry entirely (term -> plain text;
//             the narrative inline-defines it per WRITING-RULES)
// Civ-scoped on purpose: matchText judgment is per-civ; a shared dead slug in
// another civ gets that civ's own contextual decision.
//
// usage: node scripts/apply-slug-decisions.mjs <civId>

import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const civ = process.argv[2]
if (!civ) { console.error('usage: node scripts/apply-slug-decisions.mjs <civId>'); process.exit(1) }
const ROOT = process.cwd()
const decisions = JSON.parse(readFileSync(join(ROOT, 'audits', 'slug-decisions', `${civ}.json`), 'utf8'))
const gp = join(ROOT, 'content', `.glossary-links-${civ}.json`)
const g = JSON.parse(readFileSync(gp, 'utf8'))

let fixed = 0, dropped = 0
const unseen = new Set(Object.keys(decisions))
for (const [ch, arr] of Object.entries(g)) {
  const keep = []
  for (const e of arr) {
    if (e && typeof e.wikiSlug === 'string' && Object.prototype.hasOwnProperty.call(decisions, e.wikiSlug)) {
      unseen.delete(e.wikiSlug)
      const dec = decisions[e.wikiSlug]
      if (dec === null) { dropped++; continue }            // DROP entry
      e.wikiSlug = dec; fixed++; keep.push(e)               // retarget
    } else keep.push(e)
  }
  g[ch] = keep
}
writeFileSync(gp, JSON.stringify(g, null, 2) + '\n')
console.log(`${civ}: ${fixed} retargeted, ${dropped} dropped`)
if (unseen.size) console.log(`WARNING: decisions not found in glossary: ${[...unseen].join(', ')}`)
