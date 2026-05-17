// maps-build.mjs — gated map pipeline for one TL.
//
// Converts the documented "generate → spot-audit every thumbnail → regen the
// bad ones → optimize" loop into an automated, fail-closed command, so map
// quality cannot rest on an agent remembering to look.
//
//   lint-map-prompt (ERROR → abort, before any billable call)
//   → generate-maps                (missing chapters only; resumable)
//   → audit-maps   (vision QA gate)
//   → for each FAIL: delete it, regen --chapter N, re-audit   (≤ MAX_ROUNDS)
//   → still failing → write MAP-FAILURES-<tlId>.txt + exit 1
//   → all PASS → optimize-maps (PNG→WebP)  [skip with --no-optimize]
//
// Must be run so generate-maps can see the key:
//   node --env-file=.env.local scripts/maps-build.mjs <tlId> [--no-optimize] [--rounds N]

import { execFileSync } from 'node:child_process'
import { existsSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const args = process.argv.slice(2)
const tlId = args.find((a) => !a.startsWith('--'))
const noOptimize = args.includes('--no-optimize')
const roundsIdx = args.indexOf('--rounds')
const MAX_ROUNDS = roundsIdx >= 0 ? Number(args[roundsIdx + 1]) : 3
if (!tlId) { console.error('Usage: node --env-file=.env.local scripts/maps-build.mjs <tlId> [--no-optimize] [--rounds N]'); process.exit(2) }

const run = (cmd, cmdArgs, opts = {}) =>
  execFileSync(cmd, cmdArgs, { stdio: opts.capture ? ['inherit', 'pipe', 'inherit'] : 'inherit', encoding: 'utf8', ...opts })

const step = (s) => console.log(`\n=== ${s} ===`)

// 1. Prompt lint — abort before spending money on a known-bad prompt.
step('lint-map-prompt')
try { run('node', ['scripts/lint-map-prompt.mjs', tlId, '--strict']) }
catch { console.error('ABORT: map prompt has ERRORs — fix map-prompts before generating.'); process.exit(1) }

// 2. Initial generation (resumable: skips chapters that already exist).
step('generate-maps (initial)')
run('node', ['scripts/generate-maps.mjs', tlId])

// 3. Audit → regen loop.
let round = 0
let failures = []
while (round <= MAX_ROUNDS) {
  step(`audit-maps (round ${round})`)
  let report
  try {
    const out = run('node', ['scripts/audit-maps.mjs', tlId, '--json', '--report-only'], { capture: true })
    report = JSON.parse(out.slice(out.indexOf('{')))
  } catch (e) {
    console.error('ABORT: audit-maps could not run:', e?.message || e)
    process.exit(1)
  }
  failures = report.results.filter((r) => r.verdict !== 'PASS')
  console.log(`round ${round}: ${report.total - failures.length}/${report.total} PASS` +
    (failures.length ? ` · FAIL ${failures.map((f) => `ch${f.ch}(${f.defects.join(',')})`).join(' ')}` : ''))
  if (failures.length === 0) break
  if (round === MAX_ROUNDS) break
  round++
  step(`regen ${failures.length} failed chapter(s) (round ${round})`)
  for (const f of failures) {
    for (const ext of ['png', 'webp']) {
      const p = join('public/maps', tlId, `chapter-${f.ch}.${ext}`)
      if (existsSync(p)) rmSync(p)
    }
    run('node', ['scripts/generate-maps.mjs', tlId, '--chapter', String(f.ch)])
  }
}

if (failures.length > 0) {
  const path = `MAP-FAILURES-${tlId}.txt`
  writeFileSync(path, failures.map((f) => `ch${f.ch}\t${f.verdict}\t${f.defects.join('; ')}\t${f.notes}`).join('\n') + '\n')
  console.error(`\n✗ ${failures.length} chapter(s) still failing after ${MAX_ROUNDS} rounds. Wrote ${path}.`)
  console.error('  Add a "**SPECIFIC REMINDERS for this chapter:**" block naming the exact defect to those chapters in map-prompts, then re-run.')
  process.exit(1)
}

// 4. All PASS → optimize (only this TL has fresh PNGs).
if (!noOptimize) {
  step('optimize-maps')
  run('node', ['scripts/optimize-maps.mjs'])
}
console.log(`\n✓ maps-build ${tlId}: all chapters PASS the locked acceptance criteria.`)
