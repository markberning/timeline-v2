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

/** Civs with a unique generated emblem in /public/icons-gen/ (the full set). */
export const GEN_ICONS = new Set<string>(["al-andalus", "ancestral-puebloans", "ancient-china", "ancient-greece", "ancient-israel", "ancient-korea", "ancient-nubia", "ancient-rome", "andean-kingdoms", "anglo-saxon-england", "antebellum-america", "assyrian-empire", "asuka-nara-japan", "aztec-empire", "byzantine-empire", "carthage", "celtic-cultures", "chinese-revolution", "civil-rights-era", "dai-viet", "delhi-sultanate", "early-american-republic", "early-andean-civilizations", "early-dynastic-egypt", "early-medieval-europe", "edo-japan", "elamite-civilization", "enlightenment", "germanic-tribes", "gokturk-khaganate", "goryeo-korea", "gupta-empire", "han-dynasty", "heian-japan", "high-medieval-europe", "hittite-empire", "inca-empire", "indus-valley", "industrial-revolution", "islamic-golden-age", "japanese-economic-miracle", "joseon-korea", "khmer-empire", "kievan-rus", "kingdom-of-aksum", "kingdom-of-kush", "korean-modern", "late-egypt", "late-medieval-europe", "majapahit", "mali-empire", "maurya-empire", "maya-civilization", "medieval-india", "meiji-japan", "mesopotamia", "middle-horizon-empires", "migration-period", "ming-dynasty", "minoan-civilization", "mississippian-culture", "modern-india", "mongol-empire", "mughal-empire", "mycenaean-civilization", "new-kingdom-egypt", "old-kingdom-egypt", "olmec-civilization", "ottoman-empire", "persian-empire", "phoenicia", "polynesian-voyagers", "post-maurya-kingdoms", "prehistoric-japan", "qin-dynasty", "qing-dynasty", "reconstruction", "renaissance-italy", "rise-of-china", "roaring-twenties", "russian-empire", "safavid-persia", "scientific-revolution", "scythians", "shang-dynasty", "six-dynasties", "songhai-empire", "soviet-union", "srivijaya", "swahili-coast", "tang-song-china", "teotihuacan", "the-goths", "timurid-empire", "umayyad-caliphate", "uyghur-steppe", "vedic-period", "vendel-scandinavia", "viking-age", "xiongnu-huns", "yuan-dynasty", "zapotec-civilization", "zhou-dynasty"])

/**
 * Preferred civ emblem: the unique generated emblem if one exists, otherwise
 * the legacy /icons set. Used by the home cards and the reader header.
 */
export function getCivEmblemPath(tlId: string): string | null {
  if (GEN_ICONS.has(tlId)) return `/icons-gen/${tlId}.webp`
  return getCivIconPath(tlId)
}
