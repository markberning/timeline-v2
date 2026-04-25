/**
 * Maps TL IDs to icon filenames in /public/icons/.
 * TLs with a direct icon file (same name as TL ID) need no entry here —
 * only chain-shared overrides are listed.
 */
const SHARED_ICON: Record<string, string> = {
  // Egypt chain → all share early-dynastic sphinx
  'old-kingdom-egypt': 'early-dynastic-egypt',
  'new-kingdom-egypt': 'early-dynastic-egypt',
  'late-egypt': 'early-dynastic-egypt',

  // Nubian chain
  'kingdom-of-kush': 'ancient-nubia',

  // Islamic chain
  'al-andalus': 'umayyad-caliphate',

  // Indian chain (pre-Islamic) — vedic + maurya have own, rest share indus
  'post-maurya-kingdoms': 'indus-valley',
  'gupta-empire': 'indus-valley',
  'medieval-india': 'indus-valley',

  // Chinese chain — all share ancient-china
  'shang-dynasty': 'ancient-china',
  'zhou-dynasty': 'ancient-china',
  'qin-dynasty': 'ancient-china',
  'han-dynasty': 'ancient-china',
  'six-dynasties': 'ancient-china',

  // Chinese modern
  'rise-of-china': 'chinese-revolution',

  // Steppe chain — timurid shares mongol
  'timurid-empire': 'mongol-empire',

  // Japan chain
  'edo-japan': 'ancient-japan',
  'japanese-economic-miracle': 'meiji-japan',

  // Korea chain
  'joseon-korea': 'ancient-korea',
  'korean-modern': 'ancient-korea',

  // Greco-Roman
  'mycenaean-civilization': 'ancient-greece',

  // Mississippian
  'mississippian-culture': 'ancestral-puebloans',

  // Andean chain
  'andean-kingdoms': 'early-andean-civilizations',
  'middle-horizon-empires': 'early-andean-civilizations',

  // West African chain
  'songhai-empire': 'mali-empire',

  // US chain
  'antebellum-america': 'early-american-republic',
  'reconstruction': 'early-american-republic',
  'roaring-twenties': 'early-american-republic',
  'civil-rights-era': 'early-american-republic',
}

/** Set of icon files that actually exist in /public/icons/ */
const EXISTING_ICONS = new Set([
  'ancestral-puebloans', 'ancient-china', 'ancient-greece', 'ancient-israel',
  'ancient-japan', 'ancient-korea', 'ancient-nubia', 'ancient-rome',
  'assyrian-empire', 'aztec-empire', 'byzantine-empire', 'carthage',
  'celtic-cultures', 'chinese-revolution', 'dai-viet', 'delhi-sultanate',
  'early-american-republic', 'early-andean-civilizations', 'early-dynastic-egypt',
  'elamite-civilization', 'enlightenment', 'gokturk-khaganate', 'hittite-empire',
  'inca-empire', 'indus-valley', 'industrial-revolution', 'islamic-golden-age',
  'khmer-empire', 'kievan-rus', 'kingdom-of-aksum', 'majapahit', 'mali-empire',
  'maurya-empire', 'maya-civilization', 'medieval-europe', 'meiji-japan',
  'mesopotamia', 'ming-dynasty', 'minoan-civilization', 'modern-india',
  'mongol-empire', 'mughal-empire', 'olmec-civilization', 'ottoman-empire',
  'persian-empire', 'phoenicia', 'polynesian-voyagers', 'qing-dynasty',
  'renaissance-italy', 'russian-empire', 'safavid-persia', 'scientific-revolution',
  'scythians', 'soviet-union', 'srivijaya', 'tang-song-china', 'teotihuacan',
  'umayyad-caliphate', 'vedic-period', 'viking-age', 'xiongnu-huns',
  'yuan-dynasty', 'zapotec-civilization',
])

/** Returns the icon path for a TL, or null if no icon exists. */
export function getCivIconPath(tlId: string): string | null {
  const iconId = SHARED_ICON[tlId] ?? tlId
  if (!EXISTING_ICONS.has(iconId)) return null
  return `/icons/${iconId}.png`
}

/** Returns the icon ID (basename without extension) for a TL. */
export function getCivIconId(tlId: string): string {
  return SHARED_ICON[tlId] ?? tlId
}
