// Make the generated emblem background transparent: the silhouette is a single
// saturated color, the "background" is a low-chroma checkerboard/white the model
// drew. Drop low-chroma pixels to alpha 0, then trim to the shape.
import sharp from 'sharp'
import { readdirSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const SRC = join(process.cwd(), 'public', 'icons-gen-raw')
const DST = join(process.cwd(), 'public', 'icons-gen')
if (!existsSync(DST)) mkdirSync(DST, { recursive: true })
const CHROMA_MIN = 40 // below this = gray/white background

for (const f of readdirSync(SRC).filter(f => f.endsWith('.png'))) {
  const path = join(SRC, f)
  const out = join(DST, f)
  const { data, info } = await sharp(path).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    const chroma = Math.max(r, g, b) - Math.min(r, g, b)
    if (chroma < CHROMA_MIN) data[i + 3] = 0
  }
  const keyed = await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer()
  await sharp(keyed).trim().toFile(out)
  console.log('keyed + trimmed', f)
}
