// Per-item emblems for the discovery feed: each war, each art era, each music
// main category — same flat single-color silhouette style as the thread icons.
//   node --env-file=.env.local scripts/gen-section-icons.mjs [war|art|music|all]
// Wars in rust, art eras in violet, music in blue. Writes keyed+trimmed webp to
// public/{war,art,music}-icons/. Skips any that already exist.
import { existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { GoogleGenAI } from '@google/genai'
import sharp from 'sharp'

const MODEL = 'gemini-3-pro-image-preview'
const CHROMA_MIN = 40
const ACCENT = { war: '#b44d3b', art: '#7c3aed', music: '#1d4ed8' }

// keyed by the data id used in app-feed (WAR_EVENTS.id / ART_ERAS.id / music slug)
const SETS = {
  war: {
    color: ACCENT.war,
    items: {
      fi: 'a flintlock musket crossed with a tomahawk',
      rev: 'a colonial tricorne hat',
      12: 'a tall three-masted sailing frigate',
      mex: 'an adobe mission church facade with a curved gable',
      cw: 'two crossed cannons',
      sp: 'a steam-era ironclad battleship',
      ww1: 'a WWI biplane fighter',
      ww2: 'a military tank',
      kor: 'a swept-wing jet fighter',
      vn: 'a Huey military helicopter',
      gw: 'a cruise missile',
      wot: 'a military reconnaissance drone',
    },
  },
  art: {
    color: ACCENT.art,
    items: {
      pre: 'a prehistoric cave-painting hand stencil',
      anc: 'a Greek amphora vase',
      med: 'a Gothic stained-glass rose window',
      ren: 'the Vitruvian Man figure inside a circle',
      bar: 'an ornate Baroque scroll cartouche flourish',
      nro: 'a Neoclassical temple pediment on columns',
      mod: 'an abstract composition of overlapping geometric shapes',
      con: 'a dripping paint splatter',
    },
  },
  music: {
    color: ACCENT.music,
    items: {
      baroque: 'a harpsichord',
      classical: 'a violin',
      romantic: 'a grand piano',
      opera: 'theatrical comedy and tragedy masks',
      jazz: 'a saxophone',
      blues: 'a harmonica',
      rock: 'an electric guitar',
      hiphop: 'a DJ turntable with a record',
    },
  },
}

function prompt(subject, color) {
  return [
    `A minimalist flat ICON emblem: ${subject}.`,
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

const which = process.argv[2] || 'all'
const sets = which === 'all' ? Object.keys(SETS) : [which]
for (const set of sets) {
  const { color, items } = SETS[set]
  const dir = join(process.cwd(), 'public', `${set}-icons`)
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
  for (const [id, subject] of Object.entries(items)) {
    const out = join(dir, `${id}.webp`)
    if (existsSync(out)) { console.log(`${set}/${id} — exists, skip`); continue }
    try {
      const bytes = await generateImage(ai, prompt(subject, color))
      await keyTrimWebp(bytes, out)
      console.log(`${set}/${id} ✓`)
    } catch (e) { console.log(`${set}/${id} ✗ ${e.message}`) }
  }
}
