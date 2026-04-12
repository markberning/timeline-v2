export type NavigatorRegion = 'near-east' | 'africa' | 'asia' | 'europe' | 'americas'

export interface NavigatorTl {
  id: string
  label: string
  region: NavigatorRegion
  startYear: number
  endYear: number
  isReal?: boolean
}

export const REGION_ORDER: NavigatorRegion[] = [
  'near-east',
  'africa',
  'asia',
  'europe',
  'americas',
]

export const REGION_LABELS: Record<NavigatorRegion, string> = {
  'near-east': 'Near East',
  'africa': 'Africa',
  'asia': 'Asia',
  'europe': 'Europe',
  'americas': 'Americas',
}

export const REGION_COLORS: Record<NavigatorRegion, string> = {
  'near-east': '#c2410c',
  'africa': '#a16207',
  'asia': '#7c3aed',
  'europe': '#1d4ed8',
  'americas': '#047857',
}

export const NAVIGATOR_TLS: NavigatorTl[] = [
  // ── NEAR EAST ──
  { id: 'mesopotamia', label: 'Mesopotamia', region: 'near-east', startYear: -5000, endYear: -539, isReal: true },
  { id: 'elamite-civilization', label: 'Elam', region: 'near-east', startYear: -3200, endYear: -539 },
  { id: 'hittite-empire', label: 'Hittite Empire', region: 'near-east', startYear: -1700, endYear: -1178 },
  { id: 'assyrian-empire', label: 'Assyrian Empire', region: 'near-east', startYear: -2025, endYear: -609 },
  { id: 'persian-empire', label: 'Persian Empire', region: 'near-east', startYear: -550, endYear: 651 },
  { id: 'islamic-golden-age', label: 'Islamic Golden Age', region: 'near-east', startYear: 750, endYear: 1258 },
  { id: 'safavid-persia', label: 'Safavid Persia', region: 'near-east', startYear: 1501, endYear: 1736 },
  { id: 'ottoman-empire', label: 'Ottoman Empire', region: 'near-east', startYear: 1299, endYear: 1922 },

  // ── AFRICA ──
  { id: 'ancient-nubia', label: 'Ancient Nubia', region: 'africa', startYear: -3500, endYear: -1070 },
  { id: 'early-dynastic-egypt', label: 'Early Dynastic Egypt', region: 'africa', startYear: -3100, endYear: -2686 },
  { id: 'old-kingdom-egypt', label: 'Old Kingdom Egypt', region: 'africa', startYear: -2686, endYear: -2181 },
  { id: 'new-kingdom-egypt', label: 'New Kingdom Egypt', region: 'africa', startYear: -1550, endYear: -1069 },
  { id: 'late-egypt', label: 'Late Egypt', region: 'africa', startYear: -664, endYear: -332 },
  { id: 'kingdom-of-kush', label: 'Kingdom of Kush', region: 'africa', startYear: -1070, endYear: 350 },
  { id: 'kingdom-of-aksum', label: 'Kingdom of Aksum', region: 'africa', startYear: 80, endYear: 940 },
  { id: 'mali-empire', label: 'Mali Empire', region: 'africa', startYear: 1226, endYear: 1670 },
  { id: 'songhai-empire', label: 'Songhai Empire', region: 'africa', startYear: 1464, endYear: 1591 },

  // ── ASIA (South) ──
  { id: 'indus-valley', label: 'Indus Valley', region: 'asia', startYear: -7000, endYear: -1300, isReal: true },
  { id: 'vedic-period', label: 'Vedic Period', region: 'asia', startYear: -1500, endYear: -322, isReal: true },
  { id: 'maurya-empire', label: 'Maurya Empire', region: 'asia', startYear: -345, endYear: -185, isReal: true },
  { id: 'post-maurya-kingdoms', label: 'Post-Maurya Kingdoms', region: 'asia', startYear: -185, endYear: 320 },
  { id: 'gupta-empire', label: 'Gupta Empire', region: 'asia', startYear: 300, endYear: 550, isReal: true },
  { id: 'medieval-india', label: 'Medieval India', region: 'asia', startYear: 550, endYear: 1206 },
  { id: 'delhi-sultanate', label: 'Delhi Sultanate', region: 'asia', startYear: 1206, endYear: 1526 },
  { id: 'mughal-empire', label: 'Mughal Empire', region: 'asia', startYear: 1526, endYear: 1857 },
  { id: 'modern-india', label: 'Modern India', region: 'asia', startYear: 1857, endYear: 2024, isReal: true },

  // ── ASIA (East) ──
  { id: 'ancient-china', label: 'Ancient China', region: 'asia', startYear: -7000, endYear: -1600 },
  { id: 'shang-dynasty', label: 'Shang Dynasty', region: 'asia', startYear: -1600, endYear: -1046 },
  { id: 'zhou-dynasty', label: 'Zhou Dynasty', region: 'asia', startYear: -1046, endYear: -256 },
  { id: 'qin-dynasty', label: 'Qin Dynasty', region: 'asia', startYear: -221, endYear: -206 },
  { id: 'han-dynasty', label: 'Han Dynasty', region: 'asia', startYear: -206, endYear: 220 },
  { id: 'six-dynasties', label: 'Six Dynasties', region: 'asia', startYear: 220, endYear: 589 },
  { id: 'tang-song-china', label: 'Tang & Song China', region: 'asia', startYear: 618, endYear: 1279 },
  { id: 'yuan-dynasty', label: 'Yuan Dynasty', region: 'asia', startYear: 1271, endYear: 1368 },
  { id: 'ming-dynasty', label: 'Ming Dynasty', region: 'asia', startYear: 1368, endYear: 1644 },
  { id: 'qing-dynasty', label: 'Qing Dynasty', region: 'asia', startYear: 1644, endYear: 1912 },
  { id: 'chinese-revolution', label: 'Chinese Revolution', region: 'asia', startYear: 1912, endYear: 1976 },
  { id: 'rise-of-china', label: 'Rise of China', region: 'asia', startYear: 1976, endYear: 2024 },

  // ── ASIA (Japan/Korea/SE) ──
  { id: 'ancient-japan', label: 'Ancient Japan', region: 'asia', startYear: -300, endYear: 1185 },
  { id: 'edo-japan', label: 'Edo Japan', region: 'asia', startYear: 1603, endYear: 1868 },
  { id: 'meiji-japan', label: 'Meiji Japan', region: 'asia', startYear: 1868, endYear: 1912 },
  { id: 'japanese-economic-miracle', label: 'Japanese Economic Miracle', region: 'asia', startYear: 1945, endYear: 2024 },
  { id: 'ancient-korea', label: 'Ancient Korea', region: 'asia', startYear: -2333, endYear: 935 },
  { id: 'joseon-korea', label: 'Joseon Korea', region: 'asia', startYear: 1392, endYear: 1910 },
  { id: 'korean-modern', label: 'Modern Korea', region: 'asia', startYear: 1910, endYear: 2024 },
  { id: 'srivijaya', label: 'Srivijaya', region: 'asia', startYear: 650, endYear: 1377 },
  { id: 'khmer-empire', label: 'Khmer Empire', region: 'asia', startYear: 802, endYear: 1431 },

  // ── EUROPE ──
  { id: 'minoan-civilization', label: 'Minoan', region: 'europe', startYear: -2700, endYear: -1450 },
  { id: 'mycenaean-civilization', label: 'Mycenaean', region: 'europe', startYear: -1600, endYear: -1100 },
  { id: 'ancient-greece', label: 'Ancient Greece', region: 'europe', startYear: -800, endYear: -146 },
  { id: 'ancient-rome', label: 'Ancient Rome', region: 'europe', startYear: -753, endYear: 476 },
  { id: 'byzantine-empire', label: 'Byzantine Empire', region: 'europe', startYear: 330, endYear: 1453 },
  { id: 'medieval-europe', label: 'Medieval Europe', region: 'europe', startYear: 476, endYear: 1400 },
  { id: 'renaissance-italy', label: 'Renaissance Italy', region: 'europe', startYear: 1300, endYear: 1600 },
  { id: 'scientific-revolution', label: 'Scientific Revolution', region: 'europe', startYear: 1543, endYear: 1687 },
  { id: 'enlightenment', label: 'Enlightenment', region: 'europe', startYear: 1685, endYear: 1815 },
  { id: 'industrial-revolution', label: 'Industrial Revolution', region: 'europe', startYear: 1760, endYear: 1900 },
  { id: 'russian-empire', label: 'Russian Empire', region: 'europe', startYear: 1721, endYear: 1917 },
  { id: 'soviet-union', label: 'Soviet Union', region: 'europe', startYear: 1922, endYear: 1991 },

  // ── AMERICAS ──
  { id: 'early-andean-civilizations', label: 'Early Andean', region: 'americas', startYear: -3000, endYear: -200 },
  { id: 'olmec-civilization', label: 'Olmec', region: 'americas', startYear: -1500, endYear: -400 },
  { id: 'maya-civilization', label: 'Maya', region: 'americas', startYear: -2000, endYear: 1697 },
  { id: 'andean-kingdoms', label: 'Andean Kingdoms', region: 'americas', startYear: -200, endYear: 500 },
  { id: 'middle-horizon-empires', label: 'Tiwanaku & Wari', region: 'americas', startYear: 500, endYear: 1000 },
  { id: 'aztec-empire', label: 'Aztec Empire', region: 'americas', startYear: 1345, endYear: 1521 },
  { id: 'inca-empire', label: 'Inca Empire', region: 'americas', startYear: 1438, endYear: 1533 },
  { id: 'early-american-republic', label: 'Early US Republic', region: 'americas', startYear: 1776, endYear: 1828 },
  { id: 'antebellum-america', label: 'Antebellum America', region: 'americas', startYear: 1828, endYear: 1865 },
  { id: 'reconstruction', label: 'Reconstruction', region: 'americas', startYear: 1865, endYear: 1877 },
  { id: 'roaring-twenties', label: 'Roaring Twenties', region: 'americas', startYear: 1900, endYear: 1929 },
  { id: 'civil-rights-era', label: 'Civil Rights Era', region: 'americas', startYear: 1954, endYear: 1968 },
]

export const TIME_MIN = -7000
export const TIME_MAX = 2050

/**
 * Compression zones collapse long prehistoric stretches where nothing is
 * happening on the TL list. Each zone compresses to `factor` × its natural
 * visual width so the first four ancient TLs (Ancient China / Indus / Meso /
 * Nubia) pull in closer to the dense post-3500 BCE cluster.
 *
 * Zones MUST be:
 *  - non-overlapping
 *  - sorted by start ascending
 *  - placed just inside the gap so no TL's start/end year falls inside
 */
export interface CompressionZone {
  start: number
  end: number
  factor: number  // 0..1, how much of the natural width to keep
}

export const COMPRESSION_ZONES: CompressionZone[] = [
  // Between Indus/Ancient China (-7000) and Mesopotamia (-5000)
  { start: -6900, end: -5200, factor: 0.18 },
  // Between Mesopotamia (-5000) and Ancient Nubia (-3500)
  { start: -4900, end: -3700, factor: 0.22 },
]

/**
 * Convert year → pixel using the piecewise compressed mapping. For each
 * compression zone the caller has walked past (fully or partially), the
 * natural pixel distance is reduced by `(1 - factor) * overlap * ppy`.
 */
export function compressedYearToPixel(year: number, pixelsPerYear: number): number {
  let px = (year - TIME_MIN) * pixelsPerYear
  for (const z of COMPRESSION_ZONES) {
    if (year <= z.start) break
    const overlap = Math.min(year, z.end) - z.start
    if (overlap <= 0) continue
    px -= overlap * (1 - z.factor) * pixelsPerYear
  }
  return px
}

/**
 * Inverse of compressedYearToPixel — walks forward through zones, draining
 * pixels as we go, so zoom can preserve a year under the viewport center.
 */
export function compressedPixelToYear(px: number, pixelsPerYear: number): number {
  let cursorYear = TIME_MIN
  let remaining = px
  for (const z of COMPRESSION_ZONES) {
    const linearLen = (z.start - cursorYear) * pixelsPerYear
    if (remaining <= linearLen) {
      return cursorYear + remaining / pixelsPerYear
    }
    remaining -= linearLen
    cursorYear = z.start
    const compressedLen = (z.end - z.start) * z.factor * pixelsPerYear
    if (remaining <= compressedLen) {
      return cursorYear + remaining / (pixelsPerYear * z.factor)
    }
    remaining -= compressedLen
    cursorYear = z.end
  }
  return cursorYear + remaining / pixelsPerYear
}

/** Total pixel width of the timeline at a given zoom. */
export function compressedTotalWidth(pixelsPerYear: number): number {
  return compressedYearToPixel(TIME_MAX, pixelsPerYear)
}
