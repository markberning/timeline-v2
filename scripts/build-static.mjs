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

import { existsSync, renameSync, mkdirSync, rmSync } from 'node:fs'
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

process.exit(exitCode)
