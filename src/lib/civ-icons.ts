/**
 * Maps TL IDs to icon filenames in /public/icons/.
 * TLs with a direct icon file (same name as TL ID) need no entry here —
 * only chain-shared overrides are listed.
 */
const SHARED_ICON: Record<string, string> = {
  // Egypt chain → sphinx icon
  'old-kingdom-egypt': 'early-dynastic-egypt',
  'new-kingdom-egypt': 'early-dynastic-egypt',
  'late-egypt': 'early-dynastic-egypt',

  // Nubian chain
  'kingdom-of-kush': 'ancient-nubia',

  // Islamic chain
  'umayyad-caliphate': 'islamic-golden-age',
  'al-andalus': 'islamic-golden-age',

  // Persian chain
  'safavid-persia': 'persian-empire',

  // Indian chain (pre-Islamic)
  'vedic-period': 'indus-valley',
  'maurya-empire': 'indus-valley',
  'post-maurya-kingdoms': 'indus-valley',
  'gupta-empire': 'indus-valley',
  'medieval-india': 'indus-valley',

  // Chinese chain (early)
  'shang-dynasty': 'ancient-china',
  'zhou-dynasty': 'ancient-china',
  'qin-dynasty': 'ancient-china',
  'han-dynasty': 'ancient-china',
  'six-dynasties': 'ancient-china',

  // Chinese modern
  'rise-of-china': 'chinese-revolution',

  // Steppe chain
  'xiongnu-huns': 'scythians',
  'gokturk-khaganate': 'scythians',
  'mongol-empire': 'scythians',
  'timurid-empire': 'scythians',

  // Japan chain
  'edo-japan': 'ancient-japan',
  'meiji-japan': 'ancient-japan',
  'japanese-economic-miracle': 'ancient-japan',

  // Korea chain
  'joseon-korea': 'ancient-korea',
  'korean-modern': 'ancient-korea',

  // Greco-Roman chain
  'minoan-civilization': 'ancient-greece',
  'mycenaean-civilization': 'ancient-greece',
  'byzantine-empire': 'ancient-rome',

  // Russian chain
  'soviet-union': 'russian-empire',

  // Andean chain
  'andean-kingdoms': 'early-andean-civilizations',
  'middle-horizon-empires': 'early-andean-civilizations',

  // West African chain
  'songhai-empire': 'mali-empire',

  // US chain
  'early-american-republic': 'early-american-republic',
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
