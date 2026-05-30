// Measured per-image crops (fractions of W×H) for matted ACW prints/mounts whose mats
// carry caption writing — eyeball-measured from the source, deterministic. Writes
// <name>-crop.jpg previews; does NOT overwrite. Usage: node scripts/_crop-explicit.mjs
import sharp from 'sharp'
const DIR = 'public/war-img'

// l/t/r/b = fractional edges of the kept rectangle (r,b are the far edges)
const JOBS = [
  { f: 'antietam-hero.jpg',                 l: 0.035, t: 0.030, r: 0.965, b: 0.905 },
  { f: 'gettysburg-hero.jpg',               l: 0.035, t: 0.030, r: 0.963, b: 0.900 },
  { f: 'prisons-hero-issuing-rations.jpg',  l: 0.245, t: 0.238, r: 0.760, b: 0.650 },
  { f: 'assassination-fords-theatre.jpg',   l: 0.158, t: 0.156, r: 0.842, b: 0.722 },
]

for (const j of JOBS) {
  const src = `${DIR}/${j.f}`, base = j.f.replace(/\.[a-z]+$/i, '')
  const m = await sharp(src).metadata()
  const left = Math.round(m.width * j.l), top = Math.round(m.height * j.t)
  const width = Math.round(m.width * j.r) - left, height = Math.round(m.height * j.b) - top
  await sharp(src).extract({ left, top, width, height }).toFile(`${DIR}/${base}-crop.jpg`)
  console.log(`${j.f}: ${m.width}x${m.height} -> ${width}x${height}`)
}
