// Static-export build orchestrator.
//
// `output: 'export'` in next.config.ts refuses to build anything that
// needs a server runtime — route handlers, server actions, middleware.
// Our dev-only image-curation tools at /api/review and /api/candidates
// use `NextRequest` + filesystem writes, which would make `next build`
// fail. Rather than delete them (they're useful in `next dev`), this
// script moves src/app/api/ out of the app tree for the duration of
// the build and restores it in a finally block.
//
// Run via `npm run build`; parse is triggered automatically via the
// `prebuild` lifecycle script before this executes.

import { existsSync, renameSync, mkdirSync, rmSync, readFileSync, statSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { join } from 'node:path'

const ROOT = process.cwd()
const STASH_ROOT = join(ROOT, '.dev-stash')

// Dev-only routes that can't be statically exported. /api/* are route
// handlers; /candidates and /review are `force-dynamic` image curation
// tools that hit Wikimedia live and write to the local filesystem.
const STASH_TARGETS = [
  { from: 'src/app/api',        to: join(STASH_ROOT, 'api') },
  { from: 'src/app/candidates', to: join(STASH_ROOT, 'candidates') },
  { from: 'src/app/review',     to: join(STASH_ROOT, 'review') },
]

mkdirSync(STASH_ROOT, { recursive: true })

const stashed = []
for (const { from, to } of STASH_TARGETS) {
  const src = join(ROOT, from)
  if (existsSync(src)) {
    renameSync(src, to)
    stashed.push({ src, dest: to })
    console.log(`[build-static] stashed ${from}`)
  }
}

let exitCode = 0
try {
  const result = spawnSync('node_modules/.bin/next', ['build'], {
    stdio: 'inherit',
    cwd: ROOT,
    env: process.env,
  })
  exitCode = result.status ?? 1
} finally {
  for (const { src, dest } of stashed) {
    if (existsSync(dest)) {
      renameSync(dest, src)
      console.log(`[build-static] restored ${src}`)
    }
  }
  if (existsSync(STASH_ROOT)) rmSync(STASH_ROOT, { recursive: true, force: true })
}

// Shipped-page regression guard. Every hasContent:true civ MUST have a real
// page in out/. This is the single check that prevents the recurring "civ
// groups turned off in prod" regression; wiring it into the build makes it
// fail-closed — a build missing a shipped civ cannot be deployed, and nobody
// has to remember to run it. (ship-check is per-civ and pre-build, so it is
// the wrong home; this was the one genuinely valuable part of the discarded
// promote.mjs.) Only runs if next build itself succeeded.
if (exitCode === 0) {
  const navSrc = readFileSync(join(ROOT, 'src/lib/navigator-tls.ts'), 'utf8')
  const shipped = [...navSrc.matchAll(/id:\s*'([a-z0-9-]+)'[^}]*hasContent:\s*true/g)].map((m) => m[1])
  const missing = []
  for (const id of shipped) {
    const p = join(ROOT, 'out', id, 'index.html')
    if (!existsSync(p) || statSync(p).size < 20000) {
      missing.push(`${id}${existsSync(p) ? ` (thin ${statSync(p).size}b)` : ' (absent)'}`)
    }
  }
  if (missing.length) {
    console.error(`\n[build-static] ✗ SHIPPED-PAGE GUARD FAILED: ${missing.length}/${shipped.length} hasContent civ(s) missing or thin in out/:`)
    console.error(`  ${missing.join(', ')}`)
    console.error('  This is exactly the "civ turned off in prod" regression — refusing the build.')
    exitCode = 1
  } else {
    console.log(`[build-static] ✓ shipped-page guard: all ${shipped.length} hasContent civs rendered in out/`)
  }
}

process.exit(exitCode)
