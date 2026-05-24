// Generate the four thread emblems (Civ / War / Art / Music) for the app home,
// in the same flat single-color silhouette style as the civ emblems.
//   node --env-file=.env.local scripts/gen-thread-icons.mjs
// Self-contained: generate → key transparent → trim → webp into public/thread-icons/.
import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { GoogleGenAI } from '@google/genai'
import sharp from 'sharp'

const MODEL = 'gemini-3-pro-image-preview'
const OUT = join(process.cwd(), 'public', 'thread-icons')
if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true })
const CHROMA_MIN = 40

const THREADS = [
  { kind: 'civ', label: 'civilizations', subject: 'a classical columned temple building with a triangular pediment, seen straight from the front (like the Parthenon)', color: '#d97706' },
  { kind: 'war', label: 'war', subject: 'two crossed swords forming an X', color: '#b44d3b' },
  { kind: 'art', label: 'art', subject: "an artist's oval painter's palette with a single brush", color: '#7c3aed' },
  { kind: 'music', label: 'music', subject: 'a classical lyre, a small U-shaped stringed harp', color: '#1d4ed8' },
]

function prompt(label, subject, color) {
  return [
    `A minimalist flat ICON emblem representing ${label}: ${subject}.`,
    `Style: a single solid fill color ${color}, clean smooth vector silhouette, bold simple shapes, centered with generous margin.`,
    `Fully TRANSPARENT background (PNG alpha) — no background fill, no scene, no ground line, no frame.`,
    `No text, no letters, no numbers. No gradient, no shading, no 3D, no drop shadow, no outline stroke — one flat color silhouette only.`,
    `Pictogram / app-icon style, instantly recognizable, like a clean modern symbol.`,
  ].join(' ')
}

async function generateImage(ai, p) {
  const r = await ai.models.generateContent({ model: MODEL, contents: p, config: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio: '1:1' } } })
  for (const part of r?.candidates?.[0]?.content?.parts ?? []) {
    const inline = part.inlineData ?? part.inline_data
    if (inline?.data) return Buffer.from(inline.data, 'base64')
  }
  throw new Error(`no image (finish=${r?.candidates?.[0]?.finishReason})`)
}

async function keyTrimWebp(pngBytes, outPath) {
  const { data, info } = await sharp(pngBytes).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2]
    if (Math.max(r, g, b) - Math.min(r, g, b) < CHROMA_MIN) data[i + 3] = 0
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .trim({ threshold: 10 })
    .resize(256, 256, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 90, alphaQuality: 92 })
    .toFile(outPath)
}

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
if (!apiKey) { console.error('Missing GEMINI_API_KEY'); process.exit(1) }
const ai = new GoogleGenAI({ apiKey })

for (const t of THREADS) {
  try {
    const bytes = await generateImage(ai, prompt(t.label, t.subject, t.color))
    const out = join(OUT, `${t.kind}.webp`)
    await keyTrimWebp(bytes, out)
    console.log(`${t.kind} ✓ → ${out}`)
  } catch (e) { console.log(`${t.kind} ✗ ${e.message}`) }
}
