// One-shot: convert public/maps/**/*.png to WebP (quality 85) in place
// and delete the original PNGs. Run once when adding new maps.
//
// Stats from the first run: 56 MB -> 4-8 MB total across all chapters.

import { readdirSync, statSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'
import sharp from 'sharp'

const ROOT = 'public/maps'

function walk(dir) {
  const out = []
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) out.push(...walk(full))
    else if (name.toLowerCase().endsWith('.png')) out.push(full)
  }
  return out
}

const pngs = walk(ROOT)
console.log(`Found ${pngs.length} PNGs to convert`)

let totalIn = 0
let totalOut = 0

for (const png of pngs) {
  const webp = png.replace(/\.png$/i, '.webp')
  const inBytes = statSync(png).size
  totalIn += inBytes
  await sharp(png).webp({ quality: 85 }).toFile(webp)
  const outBytes = statSync(webp).size
  totalOut += outBytes
  unlinkSync(png)
  console.log(`  ${png}  ${(inBytes / 1024).toFixed(0)}K  →  ${webp}  ${(outBytes / 1024).toFixed(0)}K`)
}

console.log(`\nTotal: ${(totalIn / 1024 / 1024).toFixed(1)} MB  →  ${(totalOut / 1024 / 1024).toFixed(1)} MB  (${((1 - totalOut / totalIn) * 100).toFixed(0)}% reduction)`)
