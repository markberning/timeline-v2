// ship-check.mjs — the gate before flipping hasContent: true.
//
// One deterministic command that must pass before a civ ships. It aggregates
// the per-gate checks so "is this civ ready" is a yes/no, not a judgement
// call. Re-running the billable vision QA here would be wasteful, so map
// quality is verified by its ARTIFACT (no MAP-FAILURES file + 1:1 map count),
// which maps-build.mjs only leaves clean on an all-PASS run.
//
// Usage:  node scripts/ship-check.mjs <tlId>
// Exit 0 = clear to flip hasContent: true. Non-zero = blocked (reasons listed).

import { execFileSync } from 'node:child_process'
import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const tlId = process.argv[2]
if (!tlId) { console.error('Usage: node scripts/ship-check.mjs <tlId>'); process.exit(2) }

const ROOT = process.cwd()
const results = []
const check = (name, fn) => {
  try { const detail = fn(); results.push({ name, ok: true, detail: detail || '' }) }
  catch (e) { results.push({ name, ok: false, detail: String(e?.message || e).split('\n')[0] }) }
}
const sh = (cmd, args) => execFileSync(cmd, args, { cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' })

// 1. Narrative exists.
const narrPath = join(ROOT, 'narratives', `${tlId}.md`)
check('narrative present', () => {
  if (!existsSync(narrPath)) throw new Error(`missing narratives/${tlId}.md`)
  return `${[...readFileSync(narrPath, 'utf8').matchAll(/^# Chapter \d+/gm)].length} chapters`
})
const chapterNums = existsSync(narrPath)
  ? [...readFileSync(narrPath, 'utf8').matchAll(/^# Chapter (\d+)/gm)].map(m => Number(m[1]))
  : []

// 2. Maps: 1:1 with chapters, and no QA-failure artifact (G4/G5).
// A chapter the map-prompt EXPLICITLY declares map-less ("No map for this
// chapter") is an authored skip (legacy/thematic chapters where a geographic
// map would not serve the content) — honor it rather than demand a pointless map.
const mapSkip = (() => {
  const pp = join(ROOT, 'map-prompts', `${tlId}.md`)
  if (!existsSync(pp)) return new Set()
  const txt = readFileSync(pp, 'utf8')
  const blocks = txt.split(/^#{1,3}\s+Chapter\s+(\d+)/gm)
  const skip = new Set()
  for (let i = 1; i < blocks.length; i += 2) {
    if (/no map for this chapter/i.test(blocks[i + 1] || '')) skip.add(Number(blocks[i]))
  }
  return skip
})()
check('maps 1:1 with chapters', () => {
  const dir = join(ROOT, 'public/maps', tlId)
  if (!existsSync(dir)) throw new Error(`no public/maps/${tlId}/`)
  const have = new Set(readdirSync(dir).filter(f => /^chapter-\d+\.(webp|png)$/.test(f)).map(f => Number(f.match(/\d+/)[0])))
  const missing = chapterNums.filter(n => !have.has(n) && !mapSkip.has(n))
  if (missing.length) throw new Error(`missing maps for ch ${missing.join(', ')}`)
  const skipNote = mapSkip.size ? ` (${mapSkip.size} authored map-less: ch ${[...mapSkip].join(', ')})` : ''
  return `${have.size} maps${skipNote}`
})
check('map QA passed (no MAP-FAILURES artifact)', () => {
  if (existsSync(join(ROOT, `MAP-FAILURES-${tlId}.txt`)))
    throw new Error(`MAP-FAILURES-${tlId}.txt present — vision QA gate failed; resolve + re-run maps-build`)
  return 'clean'
})
check('event-popup QA passed (no EVENT-FAILURES artifact)', () => {
  const p = join(ROOT, `EVENT-FAILURES-${tlId}.txt`)
  if (existsSync(p) && readFileSync(p, 'utf8').trim())
    throw new Error(`EVENT-FAILURES-${tlId}.txt present — popup coherence gate (G10) failed; resolve + re-run audit-events`)
  return 'clean'
})
check('cross-link QA passed (no CROSSLINK-FAILURES artifact)', () => {
  const p = join(ROOT, `CROSSLINK-FAILURES-${tlId}.txt`)
  if (existsSync(p) && readFileSync(p, 'utf8').trim())
    throw new Error(`CROSSLINK-FAILURES-${tlId}.txt present — cross-link coherence gate (G11) failed; resolve + re-run audit-crosslinks`)
  return 'clean'
})
check('glossary QA passed (no GLOSSARY-FAILURES artifact)', () => {
  const p = join(ROOT, `GLOSSARY-FAILURES-${tlId}.txt`)
  if (existsSync(p) && readFileSync(p, 'utf8').trim())
    throw new Error(`GLOSSARY-FAILURES-${tlId}.txt present — glossary coherence gate (G12) failed; resolve + re-run audit-glossary`)
  return 'clean'
})

// 3. Links 0-ERROR (G2).
check('lint:links --strict', () => { sh('npx', ['tsx', 'scripts/lint-links.ts', `--tl=${tlId}`, '--strict']); return '0 ERROR' })

// 3b. Born-verified: no NEW wrong-subject/dead link or bad/recycled photo
// vs audits/fix-links-baseline.json (the legacy 100 grandfathered).
check('fix-links --strict (born-verified)', () => { sh('node', ['scripts/fix-links.mjs', `--tl=${tlId}`, '--strict']); return 'no new wrong/dead/recycled' })

// 4. Density in band (G1) — new civs are not grandfathered.
check('lint-density --strict', () => { sh('npx', ['tsx', 'scripts/lint-density.ts', `--tl=${tlId}`, '--strict']); return '10–15/ch' })

// 4b. Chapter intros present + lighter-than-chapter (G13). Forward-looking
// framing card before each chapter; the load-bearing rule is the TOTAL
// word cap (an intro that grows into a second wall defeats its purpose).
// Legacy civs grandfathered in audits/intro-baseline.json (no intros yet);
// a civ NOT in the baseline is zero-tolerance, same model as density.
check('lint-intros --strict', () => { sh('npx', ['tsx', 'scripts/lint-intros.ts', `--tl=${tlId}`, '--strict']); return 'intros present + within budget' })

// 5. Link coverage triaged (G3) — multi-signal under-linking detector.
// Flags named people/places/jargon introduced in prose but linked nowhere
// (pronunciation gloss · foreign-term gloss · corpus cross-reference ·
// inline-definition · recurrence · bold). Legacy 102 grandfathered per
// (civ,chapter,term) in audits/link-coverage-baseline.json; a GATE hit NOT in
// the baseline fails — so new civs are zero-tolerance and new gaps in old
// civs block. Triage each: link it, or waive in .link-waivers-<tl>.json.
check('link-coverage --strict', () => { sh('npx', ['tsx', 'scripts/link-coverage.ts', `--tl=${tlId}`, '--strict']); return 'no new uncovered terms' })

// 5b. Event-popup 2-part "explore further" card (G14). Every surfaced event
// carries description + a non-empty "Explore further" details entry (CLAUDE
// step 0; celtic ch1 reference pilot). Shape only — born-verified facts are a
// creation step, and the popup photo is gated by fix-links --strict (step 13).
// Legacy civs grandfathered in audits/event-card-baseline.json; a civ NOT in
// the baseline (every new civ + every swept civ) is zero-tolerance.
check('lint-event-cards --strict', () => { sh('npx', ['tsx', 'scripts/lint-event-cards.ts', `--tl=${tlId}`, '--strict']); return '2-part cards present' })

// 5c. Event-popup photo coverage (G15). Each chapter must clear a coverage
// floor (≥70% of its surfaced events carry a viewed image) so a civ can't ship
// with mostly-blank chapters (the carthage failure mode: over-rejection left
// 20–60% of a chapter imageless instead of using a representative born-verified
// artifact — see CLAUDE step 13 preference order). Legacy civs grandfathered in
// audits/event-photo-baseline.json; a civ NOT in the baseline (new + swept) is
// held to the floor. Reads parsed content, so it runs after the parse above.
check('lint-event-photos --strict', () => { sh('npx', ['tsx', 'scripts/lint-event-photos.ts', `--tl=${tlId}`, '--strict']); return 'photo coverage ≥ floor' })

// 6. Chapter flow (G6) — no Persona-D WEAK/REWRITE, no "no" build dependency.
check('audit: no WEAK/REWRITE, no broken build-dependency', () => {
  const a = join(ROOT, 'audits', `${tlId}.audit.md`)
  if (!existsSync(a)) throw new Error(`missing audits/${tlId}.audit.md (run the 5-persona audit)`)
  const txt = readFileSync(a, 'utf8')
  const weak = (txt.match(/Grade:\s*(WEAK|REWRITE)/gi) || []).length
  const noBuild = (txt.match(/Build dependency:\s*no\b/gi) || []).length
  if (weak || noBuild) throw new Error(`${weak} WEAK/REWRITE chapter(s), ${noBuild} broken build-dependency boundary(ies) — must-fix`)
  return 'flow clean'
})

// 7. Backward cross-civ disposition recorded (G7) — heuristic: the audit must
//    address it; "deferred" backward items without a reason are blocked.
check('backward cross-civ pass dispositioned', () => {
  const a = join(ROOT, 'audits', `${tlId}.audit.md`)
  const txt = existsSync(a) ? readFileSync(a, 'utf8') : ''
  if (!/backward/i.test(txt)) throw new Error('audit has no backward cross-civ section')
  // Block the known bad pattern: "deferred" adjacent to "backward" with no "reason:".
  const bad = /backward[\s\S]{0,200}defer(red)?(?![\s\S]{0,80}reason)/i.test(txt)
  if (bad) throw new Error('backward findings appear deferred without a recorded reason (G7)')
  return 'dispositioned'
})

// ---- report ----
const failed = results.filter(r => !r.ok)
console.log(`\nship-check ${tlId}`)
for (const r of results) console.log(`  ${r.ok ? '✓' : '✗'} ${r.name}${r.detail ? ` — ${r.detail}` : ''}`)
if (failed.length) {
  console.error(`\n✗ BLOCKED: ${failed.length} gate(s) failed. Do NOT flip hasContent: true.`)
  process.exit(1)
}
console.log(`\n✓ CLEAR: ${tlId} passes all gates. Safe to flip hasContent: true.`)
