// Phase-1 SAFE apply (backlog #1). Consumes the resolver report and splits
// its live-validated old->new map into:
//   autoSafe  — same subject by construction: equal after percent-decode +
//               diacritic-fold + punctuation/underscore, WITH parenthetical
//               text retained (pure encoding/punctuation repair). Applied.
//   needsReview — everything else (parenthetical-strip, spelling change, etc.):
//               a subject judgment. NOT applied; kept as a triage hint only.
//
// Rationale: lint-links checks liveness, not subject. "Title exists" != "right
// article" (disambiguation pages / homonyms). Only the encoding-equivalent
// class is safe to auto-apply under the strict-correctness bar.

import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const ROOT = process.cwd()
const REPORT = join(ROOT, 'audits', 'dead-slugs-resolution-2026-05-17.json')
const CONTENT = join(ROOT, 'content')

const dec = s => { try { return decodeURIComponent(s.replace(/_/g, ' ')) } catch { return s.replace(/_/g, ' ') } }
// keep ALL letters/digits (including any inside parentheses); drop only
// diacritics + punctuation/space. Parenthetical *content* is preserved, so a
// disambiguator-strip is NOT equivalent.
const key = s => dec(s).normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/[^a-z0-9]+/g, '')

const rep = JSON.parse(readFileSync(REPORT, 'utf8'))
const autoSafe = {}
const needsReview = {}
for (const [oldS, newS] of Object.entries(rep.resolved)) {
  if (key(oldS) === key(newS)) autoSafe[oldS] = newS
  else needsReview[oldS] = newS
}

// apply ONLY autoSafe across .glossary-links-*.json
const files = readdirSync(CONTENT).filter(f => f.startsWith('.glossary-links-') && f.endsWith('.json'))
let edits = 0
const touched = []
for (const f of files) {
  const p = join(CONTENT, f)
  const data = JSON.parse(readFileSync(p, 'utf8'))
  let c = 0
  for (const arr of Object.values(data)) {
    if (!Array.isArray(arr)) continue
    for (const g of arr) {
      if (g && typeof g.wikiSlug === 'string' && autoSafe[g.wikiSlug]) { g.wikiSlug = autoSafe[g.wikiSlug]; c++ }
    }
  }
  if (c) { writeFileSync(p, JSON.stringify(data, null, 2) + '\n'); edits += c; touched.push(`${f} (${c})`) }
}

rep.autoSafe = autoSafe
rep.autoSafeCount = Object.keys(autoSafe).length
rep.needsReview = needsReview                 // machine SUGGESTION only — unverified subject
rep.needsReviewCount = Object.keys(needsReview).length
rep.appliedRefs = edits
rep.filesTouched = touched.sort()
rep.note = 'autoSafe = encoding/punctuation-equivalent only (same subject by construction). needsReview = live but subject-risky; inline-triage with matchText, do NOT trust blindly. residue = no live candidate found.'
writeFileSync(REPORT, JSON.stringify(rep, null, 2) + '\n')

console.log(`autoSafe (applied): ${rep.autoSafeCount} slugs · ${edits} refs · ${touched.length} files`)
console.log(`needsReview (NOT applied, triage hint): ${rep.needsReviewCount}`)
console.log(`residue (no candidate): ${rep.residue.length}`)
console.log(`\nautoSafe sample:`)
Object.entries(autoSafe).slice(0, 20).forEach(([a, b]) => console.log(`  ${a}  ->  ${b}`))
