// maps-build.mjs — gated map pipeline for one TL.
//
// Since 2026-06-04 this gate does NOT generate or AI-QA maps — Gemini map
// generation is retired for cost control (see audits/map-generation-disabled.md).
// It now verifies that a real / period public-domain map exists on disk for every
// chapter, fail-closed, so a civ can't ship with a missing map.
//
//   lint-map-prompt (ERROR → abort)
//   → verify a map file exists for every "## Chapter N" in the prompt
//   → any missing → write MAP-FAILURES-<tlId>.txt + exit 1 (add a real map by hand)
//   → all present → optimize-maps (PNG→WebP)  [skip with --no-optimize]
//
//   node scripts/maps-build.mjs <tlId> [--no-optimize]

import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
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

// 2. Map generation + AI-QA are RETIRED (cost control, 2026-06-04 — see
//    audits/map-generation-disabled.md). This gate no longer calls Gemini. It
//    verifies a real / period public-domain map exists on disk for every chapter.
step('verify maps present (generation retired — no Gemini)')
const promptPath = join('map-prompts', `${tlId}.md`)
const expected = existsSync(promptPath)
  ? [...readFileSync(promptPath, 'utf8').matchAll(/^##\s*Chapter\s+(\d+)/gim)].map((m) => Number(m[1]))
  : []
const mapDir = join('public/maps', tlId)
const hasMap = (n) => existsSync(join(mapDir, `chapter-${n}.png`)) || existsSync(join(mapDir, `chapter-${n}.webp`))
const missing = expected.filter((n) => !hasMap(n))

if (expected.length === 0) {
  console.log(`  no "## Chapter N" prompts at ${promptPath} — nothing to verify against (skipping).`)
} else {
  console.log(`  ${expected.length - missing.length}/${expected.length} chapter maps present` +
    (missing.length ? ` · MISSING ${missing.map((n) => `ch${n}`).join(' ')}` : ''))
}

if (missing.length > 0) {
  const path = `MAP-FAILURES-${tlId}.txt`
  writeFileSync(path, missing.map((n) => `ch${n}\tMISSING\tno map on disk — add a real / public-domain map`).join('\n') + '\n')
  console.error(`\n✗ ${missing.length} chapter map(s) missing. Wrote ${path}.`)
  console.error('  Gemini map generation is retired (cost). Add a real / period public-domain map at')
  console.error(`  public/maps/${tlId}/chapter-N.(png|webp) for each. See audits/map-generation-disabled.md.`)
  process.exit(1)
}

// 3. All present → optimize any stray PNGs (free, deterministic).
if (!noOptimize) {
  step('optimize-maps')
  run('node', ['scripts/optimize-maps.mjs'])
}
console.log(`\n✓ maps-build ${tlId}: ${expected.length || 'all'} chapter map(s) present (real / public-domain; no generation).`)
