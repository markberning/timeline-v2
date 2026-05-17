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
check('maps 1:1 with chapters', () => {
  const dir = join(ROOT, 'public/maps', tlId)
  if (!existsSync(dir)) throw new Error(`no public/maps/${tlId}/`)
  const have = new Set(readdirSync(dir).filter(f => /^chapter-\d+\.(webp|png)$/.test(f)).map(f => Number(f.match(/\d+/)[0])))
  const missing = chapterNums.filter(n => !have.has(n))
  if (missing.length) throw new Error(`missing maps for ch ${missing.join(', ')}`)
  return `${have.size} maps`
})
check('map QA passed (no MAP-FAILURES artifact)', () => {
  if (existsSync(join(ROOT, `MAP-FAILURES-${tlId}.txt`)))
    throw new Error(`MAP-FAILURES-${tlId}.txt present — vision QA gate failed; resolve + re-run maps-build`)
  return 'clean'
})

// 3. Links 0-ERROR (G2).
check('lint:links --strict', () => { sh('npx', ['tsx', 'scripts/lint-links.ts', `--tl=${tlId}`, '--strict']); return '0 ERROR' })

// 4. Density in band (G1) — new civs are not grandfathered.
check('lint-density --strict', () => { sh('npx', ['tsx', 'scripts/lint-density.ts', `--tl=${tlId}`, '--strict']); return '10–15/ch' })

// 5. Link coverage triaged (G3) — bolded-unlinked must be linked or waived.
check('link-coverage --strict', () => { sh('npx', ['tsx', 'scripts/link-coverage.ts', `--tl=${tlId}`, '--strict']); return 'all bolded terms triaged' })

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
