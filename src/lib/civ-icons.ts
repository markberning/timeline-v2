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

  // Greco-Roman — minoan has own, mycenaean shares ancient-greece, byzantine has own
  'mycenaean-civilization': 'ancient-greece',

  // Mississippian shares ancestral-puebloans
  'mississippian-culture': 'ancestral-puebloans',

  // Andean chain — all share early-andean
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

/** Returns the icon path for a TL, or null if none exists. */
export function getCivIconPath(tlId: string): string | null {
  const iconId = SHARED_ICON[tlId] ?? tlId
  return `/icons/${iconId}.png`
}

/** Returns the icon ID (basename without extension) for a TL. */
export function getCivIconId(tlId: string): string {
  return SHARED_ICON[tlId] ?? tlId
}
