import sharp from 'sharp'
import { readdirSync, unlinkSync, statSync } from 'node:fs'
import { join } from 'node:path'
const DIR = join(process.cwd(), 'public', 'icons-gen')
let before = 0, after = 0, n = 0
for (const f of readdirSync(DIR).filter(f => f.endsWith('.png'))) {
  const png = join(DIR, f)
  before += statSync(png).size
  const webp = png.replace(/\.png$/, '.webp')
  await sharp(png).resize(256, 256, { fit: 'inside', withoutEnlargement: true }).webp({ quality: 88, alphaQuality: 90 }).toFile(webp)
  after += statSync(webp).size
  unlinkSync(png)
  n++
}
console.log(`${n} icons: ${(before/1e6).toFixed(1)}MB PNG -> ${(after/1e6).toFixed(2)}MB WebP`)
