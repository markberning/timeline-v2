// Generate a unique flat emblem for every civ via Gemini (same model as maps).
//   node --env-file=.env.local scripts/gen-icons-all.mjs
// Writes raw PNGs to public/icons-gen-raw/; key-icons.mjs then keys+trims them
// into public/icons-gen/. Skips civs already finalised in public/icons-gen/.
import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { readFileSync } from 'node:fs'
import { GoogleGenAI } from '@google/genai'

const MODEL = 'gemini-3-pro-image-preview'
const RAW = join(process.cwd(), 'public', 'icons-gen-raw')
const FINAL = join(process.cwd(), 'public', 'icons-gen')
if (!existsSync(RAW)) mkdirSync(RAW, { recursive: true })

const REGION_COLORS = { 'near-east': '#d97706', africa: '#b44d3b', asia: '#7c3aed', europe: '#1d4ed8', americas: '#047857' }
// Derive id→region from navigator-tls.ts (source of truth) so a new civ is NEVER
// missing from the map and silently falls back to the gold default (#8a7a66) —
// that bug shipped 3 gold emblems in the wave-2 build. No ephemeral /tmp file.
const navSrc = readFileSync(join(process.cwd(), 'src', 'lib', 'navigator-tls.ts'), 'utf8')
const regions = {}
for (const m of navSrc.matchAll(/id:\s*'([^']+)'[^}]*?region:\s*'([^']+)'/g)) regions[m[1]] = m[2]

const SUBJECTS = {
  'medieval-japan': 'a horned samurai kabuto helmet',
  'islamic-persia': 'a brass Persian astrolabe',
  'muscovite-russia': "Monomakh's Cap, the fur-trimmed gold crown of the tsars",
  'age-of-exploration': 'a Portuguese caravel sailing ship under a triangular lateen sail',
  'atlantic-slave-trade': 'the white seaward facade of Elmina Castle, the West African coastal fort',
  'latin-american-independence': "the Sun of May, a bold radiant golden sun with a calm face and alternating straight and wavy rays",
  'al-andalus': 'the Alhambra palace with its towers', 'ancestral-puebloans': 'a multi-storey cliff-dwelling (Cliff Palace)',
  'ancient-china': 'a Houmuwu ding bronze ritual vessel on four legs', 'ancient-greece': 'the Parthenon temple with columns',
  'ancient-israel': 'a seven-branched menorah lampstand', 'ancient-korea': 'the Cheomseongdae stone observatory tower',
  'ancient-nubia': 'a steep narrow Nubian pyramid', 'ancient-rome': 'the Colosseum amphitheatre',
  'andean-kingdoms': 'a Tumi ceremonial crescent knife', 'anglo-saxon-england': 'the Sutton Hoo face helmet',
  'antebellum-america': 'a Greek-revival plantation mansion with columns (Monticello)', 'assyrian-empire': 'a winged human-headed bull lamassu',
  'asuka-nara-japan': 'a giant seated Great Buddha statue (Daibutsu)', 'aztec-empire': 'the round Aztec sun stone calendar',
  'byzantine-empire': 'the Hagia Sophia domed basilica', 'carthage': 'the sign of Tanit symbol',
  'celtic-cultures': 'an ornate Celtic high cross', 'chinese-revolution': 'the Tiananmen gate tower',
  'civil-rights-era': 'the Lincoln Memorial', 'dai-viet': 'the One Pillar Pagoda on its single column',
  'delhi-sultanate': 'the tall fluted Qutb Minar tower', 'early-american-republic': 'Independence Hall with its clock tower',
  'early-andean-civilizations': 'an ancient stepped adobe pyramid (Caral)', 'early-dynastic-egypt': 'the Step Pyramid of Djoser',
  'early-medieval-europe': 'an illuminated Celtic gospel cross (Book of Kells)', 'edo-japan': 'Himeji Castle with curved roofs',
  'elamite-civilization': 'the Chogha Zanbil ziggurat', 'enlightenment': 'an open book with a radiant sun',
  'germanic-tribes': 'an ornate eagle fibula brooch', 'gokturk-khaganate': 'a carved runic memorial stele (Orkhon)',
  'goryeo-korea': 'an elegant Goryeo celadon vase', 'gupta-empire': 'a serene seated Gupta Buddha statue',
  'han-dynasty': 'a galloping bronze horse (Flying Horse of Gansu)', 'heian-japan': 'the Phoenix Hall of Byodo-in',
  'high-medieval-europe': 'a Gothic cathedral with a rose window', 'hittite-empire': 'the Lion Gate of Hattusa',
  'inca-empire': 'the Machu Picchu mountain citadel', 'indus-valley': 'the Priest-King bust of Mohenjo-daro',
  'industrial-revolution': 'an early steam locomotive', 'islamic-golden-age': 'the spiral minaret of Samarra',
  'japanese-economic-miracle': 'a Shinkansen bullet train', 'joseon-korea': 'the Gyeongbokgung palace gate',
  'khmer-empire': 'the towers of Angkor Wat', 'kievan-rus': 'an Orthodox cathedral with onion domes',
  'kingdom-of-aksum': 'a tall carved Aksum obelisk stele', 'kingdom-of-kush': 'the steep pyramids of Meroe',
  'korean-modern': 'the N Seoul Tower', 'late-egypt': 'the pylon gateway of an Egyptian temple (Edfu)',
  'late-medieval-europe': 'a medieval walled castle with towers', 'majapahit': 'a split candi-bentar temple gateway',
  'mali-empire': 'the Great Mosque of Djenne mudbrick mosque', 'maurya-empire': 'the four-lion capital of Ashoka',
  'maya-civilization': 'the El Castillo step-pyramid of Chichen Itza', 'medieval-india': 'a tall South Indian temple gopuram tower',
  'meiji-japan': 'Mount Fuji', 'mesopotamia': 'the great ziggurat of Ur',
  'middle-horizon-empires': 'the Gate of the Sun (Tiwanaku)', 'ming-dynasty': 'a Great Wall of China watchtower',
  'minoan-civilization': 'a Minoan snake goddess figurine', 'mississippian-culture': 'the great earthen mound of Cahokia',
  'modern-india': 'the Gateway of India arch', 'mongol-empire': 'a Mongol mounted archer on horseback',
  'mughal-empire': 'the Taj Mahal', 'mycenaean-civilization': 'the gold funerary Mask of Agamemnon',
  'new-kingdom-egypt': 'the golden funerary mask of Tutankhamun', 'old-kingdom-egypt': 'the Great Pyramid of Giza',
  'olmec-civilization': 'a colossal Olmec stone head', 'ottoman-empire': 'a great Ottoman mosque with minarets (Blue Mosque)',
  'persian-empire': 'the Faravahar winged symbol', 'phoenicia': 'a Phoenician sailing galley ship',
  'polynesian-voyagers': 'a Moai statue', 'post-maurya-kingdoms': 'the great hemispherical Sanchi stupa',
  'prehistoric-japan': 'a Jomon dogu clay figurine', 'qin-dynasty': 'a Terracotta Army warrior',
  'qing-dynasty': 'the round Temple of Heaven hall', 'reconstruction': 'the United States Capitol dome',
  'renaissance-italy': "Michelangelo's David statue", 'rise-of-china': 'the Oriental Pearl Tower of Shanghai',
  'roaring-twenties': 'an art-deco skyscraper (Chrysler Building)', 'russian-empire': "Saint Basil's Cathedral with colourful domes",
  'safavid-persia': 'a blue-tiled Persian mosque dome', 'scientific-revolution': 'an armillary sphere',
  'scythians': 'a Scythian gold stag plaque', 'shang-dynasty': 'a Sanxingdui bronze mask',
  'six-dynasties': 'a giant carved cliff Buddha (Yungang)', 'songhai-empire': 'the mudbrick Tomb of Askia pyramid',
  'soviet-union': 'a hammer and sickle emblem', 'srivijaya': 'the Borobudur stupa',
  'swahili-coast': 'a wooden dhow with a triangular sail', 'tang-song-china': 'a tall multi-tiered brick pagoda',
  'teotihuacan': 'the Pyramid of the Sun', 'the-goths': 'the domed Mausoleum of Theodoric',
  'timurid-empire': 'a grand tiled iwan portal (Registan)', 'umayyad-caliphate': 'the Dome of the Rock',
  'uyghur-steppe': 'a carved standing steppe stele', 'vedic-period': 'a sacred fire altar with rising flames',
  'vendel-scandinavia': 'a crested Vendel-age helmet', 'viking-age': 'a Viking longship with a dragon prow',
  'xiongnu-huns': 'an Ordos bronze plaque of confronted animals', 'yuan-dynasty': 'a blue-and-white porcelain vase',
  'zapotec-civilization': 'the stepped platforms of Monte Alban', 'zhou-dynasty': 'a rack of bronze ritual bells (bianzhong)',
}

function prompt(label, subject, color) {
  return [
    `A minimalist flat ICON emblem representing ${label}: ${subject}.`,
    `Style: a single solid fill color ${color}, clean smooth vector silhouette, bold simple shapes, centered with generous margin.`,
    `Fully TRANSPARENT background (PNG alpha) — no background fill, no scene, no ground line, no frame.`,
    `No text, no letters, no numbers. No gradient, no shading, no 3D, no drop shadow, no outline stroke — one flat color silhouette only.`,
    `Pictogram / app-icon style, instantly recognizable, like a clean modern landmark icon.`,
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

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
if (!apiKey) { console.error('Missing GEMINI_API_KEY'); process.exit(1) }
const ai = new GoogleGenAI({ apiKey })

const ids = Object.keys(SUBJECTS)
let done = 0, made = 0
for (const id of ids) {
  done++
  if (existsSync(join(FINAL, `${id}.png`)) || existsSync(join(RAW, `${id}.png`))) { continue }
  const subject = SUBJECTS[id]
  const color = REGION_COLORS[regions[id]] || '#8a7a66'
  try {
    const bytes = await generateImage(ai, prompt(id, subject, color))
    writeFileSync(join(RAW, `${id}.png`), bytes)
    made++
    console.log(`[${done}/${ids.length}] ${id} ✓ (${(bytes.length / 1024).toFixed(0)} KB)`)
  } catch (e) { console.log(`[${done}/${ids.length}] ${id} ✗ ${e.message}`) }
}
console.log(`Generated ${made} new icons.`)
