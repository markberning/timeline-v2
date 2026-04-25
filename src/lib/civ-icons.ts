/**
 * Maps TL IDs to icon filenames in /public/icons/.
 * TLs with a direct icon file (same name as TL ID) need no entry here —
 * only chain-shared overrides are listed.
 */
const SHARED_ICON: Record<string, string> = {
  // Nubian chain — each has own icon now, kush still falls back
  // (kingdom-of-kush has own icon, no override needed)

  // Islamic chain
  'umayyad-caliphate': 'umayyad-caliphate',

  // Steppe chain — each has own icon now, timurid shares mongol
  'timurid-empire': 'mongol-empire',

  // Japan chain
  'japanese-economic-miracle': 'meiji-japan',

  // Korea chain
  'korean-modern': 'joseon-korea',

  // Russian chain — each has own icon now

  // Andean chain — each has own icon now

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
