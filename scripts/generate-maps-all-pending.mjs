// Runs generate-maps.mjs sequentially for every TL in the pending list.
// Skips chapters that already exist on disk (handled by generate-maps.mjs).
//
// Usage:
//   node --env-file=.env.local scripts/generate-maps-all-pending.mjs

import { spawnSync } from 'node:child_process'

const PENDING = [
  'gupta-empire',
  'byzantine-empire',
  'aztec-empire',
  'viking-age',
  'mongol-empire',
  'islamic-golden-age',
  'ottoman-empire',
  'safavid-persia',
  'medieval-india',
  'tang-song-china',
  'edo-japan',
  'joseon-korea',
  'middle-horizon-empires',
  'mali-empire',
  'gokturk-khaganate',
  'delhi-sultanate',
  'yuan-dynasty',
  'meiji-japan',
  'inca-empire',
  'songhai-empire',
  'timurid-empire',
  'early-medieval-europe',
  'high-medieval-europe',
  'late-medieval-europe',
  'mughal-empire',
  'ming-dynasty',
  'korean-modern',
  'japanese-economic-miracle',
  'umayyad-caliphate',
  'renaissance-italy',
]

const t0 = Date.now()
const results = []

for (const tl of PENDING) {
  console.log(`\n========== ${tl} ==========`)
  const r = spawnSync('node', ['scripts/generate-maps.mjs', tl], {
    stdio: 'inherit',
  })
  results.push({ tl, code: r.status })
}

const elapsed = ((Date.now() - t0) / 60000).toFixed(1)
console.log(`\n========== Summary (${elapsed} min) ==========`)
for (const { tl, code } of results) {
  console.log(`  ${code === 0 ? '✓' : '✗'} ${tl} (exit ${code})`)
}
const failed = results.filter((r) => r.code !== 0)
if (failed.length > 0) {
  console.log(`\n${failed.length} TLs had failures — inspect logs and re-run those individually.`)
}
