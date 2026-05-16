export type NavigatorRegion = 'near-east' | 'africa' | 'asia' | 'europe' | 'americas'

export interface NavigatorTl {
  id: string
  label: string
  subtitle?: string
  region: NavigatorRegion
  startYear: number
  endYear: number
  isReal?: boolean
  hasContent?: boolean
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
  'near-east': '#d97706',
  'africa': '#b44d3b',
  'asia': '#7c3aed',
  'europe': '#1d4ed8',
  'americas': '#047857',
}

export const NAVIGATOR_TLS: NavigatorTl[] = [
  // ── NEAR EAST ──
  { id: 'mesopotamia', label: 'Mesopotamia', subtitle: "Iraq's first cities and cuneiform", region: 'near-east', startYear: -5000, endYear: -539, isReal: true, hasContent: true },
  { id: 'elamite-civilization', label: 'Elam', subtitle: "southwest Iran's overlooked rival", region: 'near-east', startYear: -3100, endYear: -500, hasContent: true },
  { id: 'assyrian-empire', label: 'Assyrian Empire', subtitle: "northern Iraq's siege specialists", region: 'near-east', startYear: -2500, endYear: -609, hasContent: true },
  { id: 'hittite-empire', label: 'Hittite Empire', subtitle: "Anatolia's bronze-age forgotten superpower", region: 'near-east', startYear: -2500, endYear: -700, hasContent: true },
  { id: 'phoenicia', label: 'Phoenicia', subtitle: "Lebanon's alphabet-inventing sea traders", region: 'near-east', startYear: -1500, endYear: -300, hasContent: true },
  { id: 'ancient-israel', label: 'Ancient Israel', subtitle: "the Hebrew kingdoms and the First Temple", region: 'near-east', startYear: -1020, endYear: -586, hasContent: true },
  { id: 'persian-empire', label: 'Persian Empire', subtitle: "Iran's first world empire", region: 'near-east', startYear: -559, endYear: 651, hasContent: true },
  { id: 'umayyad-caliphate', label: 'Rashidun & Umayyad', subtitle: "Islam's century of conquest, Medina to Damascus", region: 'near-east', startYear: 632, endYear: 750, hasContent: true },
  { id: 'islamic-golden-age', label: 'Islamic Golden Age', subtitle: 'Baghdad to Córdoba, science and trade', region: 'near-east', startYear: 750, endYear: 1258, hasContent: true },
  { id: 'ottoman-empire', label: 'Ottoman Empire', subtitle: "Turkey's six-century juggernaut", region: 'near-east', startYear: 1299, endYear: 1922, hasContent: true },
  { id: 'safavid-persia', label: 'Safavid Persia', subtitle: "Iran's Shia revolution", region: 'near-east', startYear: 1501, endYear: 1736, hasContent: true },

  // ── AFRICA ──
  { id: 'ancient-nubia', label: 'Ancient Nubia', subtitle: 'upper Nile rival to Egypt', region: 'africa', startYear: -3800, endYear: -1070, hasContent: true },
  { id: 'early-dynastic-egypt', label: 'Early Egypt', subtitle: 'from Saharan herders to the first pharaohs', region: 'africa', startYear: -5000, endYear: -2686, hasContent: true },
  { id: 'old-kingdom-egypt', label: 'Old Kingdom Egypt', subtitle: 'the great pyramids rise', region: 'africa', startYear: -2686, endYear: -2055, hasContent: true },
  { id: 'new-kingdom-egypt', label: 'New Kingdom Egypt', subtitle: 'empire, chariots, and Tut', region: 'africa', startYear: -2055, endYear: -1069, hasContent: true },
  { id: 'kingdom-of-kush', label: 'Kingdom of Kush', subtitle: "Sudan's Black pharaohs", region: 'africa', startYear: -1070, endYear: 350, hasContent: true },
  { id: 'carthage', label: 'Carthage', subtitle: "Hannibal's Mediterranean trade empire", region: 'africa', startYear: -814, endYear: -146, hasContent: true },
  { id: 'late-egypt', label: 'Late Egypt', subtitle: 'pharaohs under foreign rule', region: 'africa', startYear: -664, endYear: -332, hasContent: true },
  { id: 'kingdom-of-aksum', label: 'Kingdom of Aksum', subtitle: "Ethiopia's Red Sea trade empire", region: 'africa', startYear: 80, endYear: 940, hasContent: true },
  { id: 'mali-empire', label: 'Mali Empire', subtitle: "west Africa's gold, salt, and Mansa Musa", region: 'africa', startYear: 1235, endYear: 1670, hasContent: true },
  { id: 'songhai-empire', label: 'Songhai Empire', subtitle: "Timbuktu's last great ruler", region: 'africa', startYear: 1464, endYear: 1591, hasContent: true },

  // ── ASIA (South) ──
  { id: 'indus-valley', label: 'Indus Valley', subtitle: "Pakistan's brick cities and lost script", region: 'asia', startYear: -3300, endYear: -1300, isReal: true, hasContent: true },
  { id: 'vedic-period', label: 'Vedic Period', subtitle: "northern India's sacred hymns", region: 'asia', startYear: -1500, endYear: -322, isReal: true, hasContent: true },
  { id: 'maurya-empire', label: 'Maurya Empire', subtitle: "India's first unifier, Buddhism's patron", region: 'asia', startYear: -322, endYear: -185, isReal: true, hasContent: true },
  { id: 'post-maurya-kingdoms', label: 'Post-Maurya Kingdoms', subtitle: "India's centuries of fragmentation", region: 'asia', startYear: -185, endYear: 320, isReal: true, hasContent: true },
  { id: 'gupta-empire', label: 'Gupta Empire', subtitle: "India's classical golden age", region: 'asia', startYear: 320, endYear: 550, isReal: true, hasContent: true },
  { id: 'medieval-india', label: 'Medieval India', subtitle: 'temple kingdoms and Hindu revival', region: 'asia', startYear: 550, endYear: 1206, hasContent: true },
  { id: 'delhi-sultanate', label: 'Delhi Sultanate', subtitle: 'Islam takes northern India', region: 'asia', startYear: 1206, endYear: 1526, hasContent: true },
  { id: 'mughal-empire', label: 'Mughal Empire', subtitle: 'Persianate India and the Taj Mahal', region: 'asia', startYear: 1526, endYear: 1857, hasContent: true },
  { id: 'modern-india', label: 'Modern India', subtitle: 'Raj to republic', region: 'asia', startYear: 1857, endYear: 2024, isReal: true, hasContent: true },

  // ── ASIA (East) ──
  { id: 'ancient-china', label: 'Ancient China', subtitle: 'Yellow River neolithic roots', region: 'asia', startYear: -7000, endYear: -1600, hasContent: true },
  { id: 'shang-dynasty', label: 'Shang Dynasty', subtitle: "China's first oracle bones", region: 'asia', startYear: -1600, endYear: -1046, hasContent: true },
  { id: 'zhou-dynasty', label: 'Zhou Dynasty', subtitle: 'Confucius and the Warring States', region: 'asia', startYear: -1046, endYear: -256, hasContent: true },
  { id: 'qin-dynasty', label: 'Qin Dynasty', subtitle: 'China unified by terror and law', region: 'asia', startYear: -356, endYear: -206, hasContent: true },
  { id: 'han-dynasty', label: 'Han Dynasty', subtitle: "China's silk-road golden age", region: 'asia', startYear: -206, endYear: 220, hasContent: true },
  { id: 'six-dynasties', label: 'Six Dynasties', subtitle: 'China divided north and south', region: 'asia', startYear: 220, endYear: 589, hasContent: true },
  { id: 'tang-song-china', label: 'Sui, Tang & Song China', subtitle: "from Grand Canal to cosmopolitan peak", region: 'asia', startYear: 581, endYear: 1279, hasContent: true },
  { id: 'yuan-dynasty', label: 'Yuan Dynasty', subtitle: 'Mongol-ruled China', region: 'asia', startYear: 1271, endYear: 1368, hasContent: true },
  { id: 'ming-dynasty', label: 'Ming Dynasty', subtitle: 'Forbidden City and the treasure fleet', region: 'asia', startYear: 1368, endYear: 1644, hasContent: true },
  { id: 'qing-dynasty', label: 'Qing Dynasty', subtitle: "China's last Manchu empire", region: 'asia', startYear: 1644, endYear: 1912, hasContent: true },
  { id: 'chinese-revolution', label: 'Chinese Revolution', subtitle: 'Mao reshapes China', region: 'asia', startYear: 1912, endYear: 1976, hasContent: true },
  { id: 'rise-of-china', label: 'Rise of China', subtitle: "Deng's reforms to superpower", region: 'asia', startYear: 1976, endYear: 2024, hasContent: true },

  // ── ASIA (Steppe) ──
  { id: 'scythians', label: 'Scythians', subtitle: "gold-clad horse nomads of the Pontic steppe", region: 'asia', startYear: -800, endYear: -200, hasContent: true },
  { id: 'xiongnu-huns', label: 'Xiongnu & Huns', subtitle: "the steppe rivals who haunted China and Rome", region: 'asia', startYear: -209, endYear: 469, hasContent: true },
  { id: 'gokturk-khaganate', label: 'Göktürk Khaganate', subtitle: "the first people to call themselves Turk", region: 'asia', startYear: 552, endYear: 744, hasContent: true },
  { id: 'mongol-empire', label: 'Mongol Empire', subtitle: "Genghis Khan's conquest of Eurasia", region: 'asia', startYear: 1206, endYear: 1368, hasContent: true },
  { id: 'timurid-empire', label: 'Timurid Empire', subtitle: "Tamerlane's Central Asian renaissance", region: 'asia', startYear: 1370, endYear: 1507, hasContent: true },

  // ── ASIA (Japan/Korea/SE) ──
  { id: 'prehistoric-japan', label: 'Prehistoric Japan', subtitle: "Jomon foragers, Yayoi rice, Kofun tombs", region: 'asia', startYear: -14000, endYear: 538, hasContent: true },
  { id: 'asuka-nara-japan', label: 'Asuka & Nara Japan', subtitle: "Buddhism arrives, Yamato consolidates, Nara temples rise", region: 'asia', startYear: 538, endYear: 794, hasContent: true },
  { id: 'heian-japan', label: 'Heian Japan', subtitle: "courtly literature, Fujiwara regency, the warrior class rising", region: 'asia', startYear: 794, endYear: 1185, hasContent: true },
  { id: 'edo-japan', label: 'Edo Japan', subtitle: 'isolation under the shoguns', region: 'asia', startYear: 1603, endYear: 1868, hasContent: true },
  { id: 'meiji-japan', label: 'Meiji Japan', subtitle: 'Japan races to industrialize', region: 'asia', startYear: 1868, endYear: 1912, hasContent: true },
  { id: 'japanese-economic-miracle', label: 'Japanese Economic Miracle', subtitle: "postwar Japan's boom", region: 'asia', startYear: 1945, endYear: 1991, hasContent: true },
  { id: 'ancient-korea', label: 'Ancient Korea', subtitle: 'mythic Korea to Silla unification', region: 'asia', startYear: -2333, endYear: 935, hasContent: true },
  { id: 'joseon-korea', label: 'Joseon Korea', subtitle: "Confucian Korea's long dynasty", region: 'asia', startYear: 1392, endYear: 1910, hasContent: true },
  { id: 'korean-modern', label: 'Modern Korea', subtitle: 'colonization, war, and split', region: 'asia', startYear: 1910, endYear: 2024, hasContent: true },
  { id: 'srivijaya', label: 'Srivijaya', subtitle: "Sumatra's maritime Buddhist empire", region: 'asia', startYear: 650, endYear: 1377, hasContent: true },
  { id: 'khmer-empire', label: 'Khmer Empire', subtitle: "Cambodia's Angkor Wat builders", region: 'asia', startYear: 802, endYear: 1431, hasContent: true },
  { id: 'dai-viet', label: 'Đại Việt', subtitle: "Vietnam's thousand-year independence", region: 'asia', startYear: 939, endYear: 1804, hasContent: true },
  { id: 'majapahit', label: 'Majapahit', subtitle: "Java's golden age archipelago empire", region: 'asia', startYear: 1293, endYear: 1527, hasContent: true },

  // ── EUROPE ──
  { id: 'minoan-civilization', label: 'Minoan', subtitle: "Crete's bull-leaping palace culture", region: 'europe', startYear: -7000, endYear: -1100, hasContent: true },
  { id: 'mycenaean-civilization', label: 'Mycenaean', subtitle: "Greece's bronze-age warlords", region: 'europe', startYear: -1600, endYear: -1100, hasContent: true },
  { id: 'ancient-greece', label: 'Ancient Greece', subtitle: 'philosophy, drama, democracy', region: 'europe', startYear: -800, endYear: -146, hasContent: true },
  { id: 'ancient-rome', label: 'Ancient Rome', subtitle: "the Mediterranean's grand experiment", region: 'europe', startYear: -753, endYear: 476, hasContent: true },
  { id: 'celtic-cultures', label: 'Celtic Cultures', subtitle: "druids, torcs, and iron-age Europe", region: 'europe', startYear: -800, endYear: -50, hasContent: true },
  { id: 'germanic-tribes', label: 'Germanic Tribes', subtitle: "Rome's barbarian frontier", region: 'europe', startYear: -113, endYear: 375, hasContent: false },
  { id: 'the-goths', label: 'The Goths', subtitle: 'Scandza to the sack of Rome', region: 'europe', startYear: 150, endYear: 554, hasContent: false },
  { id: 'migration-period', label: 'The Migration Period', subtitle: "the Völkerwanderung's peoples on the move", region: 'europe', startYear: 375, endYear: 568, hasContent: false },
  { id: 'anglo-saxon-england', label: 'Anglo-Saxon England', subtitle: 'adventus Saxonum to Lindisfarne', region: 'europe', startYear: 410, endYear: 793, hasContent: false },
  { id: 'vendel-scandinavia', label: 'The Vendel Age', subtitle: 'the world that built the longship', region: 'europe', startYear: 550, endYear: 793, hasContent: false },
  { id: 'byzantine-empire', label: 'Byzantine Empire', subtitle: 'the Roman empire that lasted', region: 'europe', startYear: 330, endYear: 1453, hasContent: true },
  { id: 'early-medieval-europe', label: 'Early Medieval Europe', subtitle: 'fall of Rome to Charlemagne, then the Viking-Magyar-Saracen shock', region: 'europe', startYear: 476, endYear: 1000, hasContent: true },
  { id: 'high-medieval-europe', label: 'High Medieval Europe', subtitle: 'urban revival, Crusades, cathedrals, universities', region: 'europe', startYear: 1000, endYear: 1300, hasContent: true },
  { id: 'late-medieval-europe', label: 'Late Medieval Europe', subtitle: 'Black Death, Hundred Years War, end of an era', region: 'europe', startYear: 1300, endYear: 1500, hasContent: true },
  { id: 'al-andalus', label: 'Al-Andalus', subtitle: "Islamic Spain's seven-century flowering", region: 'europe', startYear: 711, endYear: 1492, hasContent: true },
  { id: 'viking-age', label: 'Viking Age', subtitle: "Scandinavia's raiders, traders, and settlers", region: 'europe', startYear: 793, endYear: 1066, hasContent: true },
  { id: 'kievan-rus', label: "Kievan Rus'", subtitle: "east Slavic river kingdoms before Russia", region: 'europe', startYear: 882, endYear: 1240, hasContent: true },
  { id: 'renaissance-italy', label: 'Renaissance Italy', subtitle: 'the city-state art revival', region: 'europe', startYear: 1300, endYear: 1600, hasContent: true },
  { id: 'scientific-revolution', label: 'Scientific Revolution', subtitle: 'Galileo to Newton', region: 'europe', startYear: 1543, endYear: 1687, hasContent: true },
  { id: 'enlightenment', label: 'Enlightenment', subtitle: 'reason takes the throne', region: 'europe', startYear: 1685, endYear: 1815, hasContent: true },
  { id: 'russian-empire', label: 'Russian Empire', subtitle: "the Romanovs' eastern colossus", region: 'europe', startYear: 1721, endYear: 1917, hasContent: true },
  { id: 'industrial-revolution', label: 'Industrial Revolution', subtitle: 'steam, factories, and cities', region: 'europe', startYear: 1760, endYear: 1900, hasContent: true },
  { id: 'soviet-union', label: 'Soviet Union', subtitle: "communism's superpower experiment", region: 'europe', startYear: 1922, endYear: 1991, hasContent: true },

  // ── AMERICAS & OCEANIA ──
  { id: 'early-andean-civilizations', label: 'Early Andean', subtitle: "Peru's pre-Inca temple builders", region: 'americas', startYear: -3500, endYear: -200, hasContent: true },
  { id: 'polynesian-voyagers', label: 'Polynesian Voyagers', subtitle: "the Pacific's star-navigating wayfinders", region: 'americas', startYear: -1500, endYear: 1500, hasContent: true },
  { id: 'olmec-civilization', label: 'Olmec', subtitle: "Mexico's mother culture, colossal stone heads", region: 'americas', startYear: -1500, endYear: -400, hasContent: true },
  { id: 'zapotec-civilization', label: 'Zapotec', subtitle: "Oaxaca's mountaintop scribes", region: 'americas', startYear: -1500, endYear: 1521, hasContent: true },
  { id: 'ancestral-puebloans', label: 'Ancestral Puebloans', subtitle: "Mesa Verde and Chaco Canyon's cliff builders", region: 'americas', startYear: -100, endYear: 1300, hasContent: true },
  { id: 'teotihuacan', label: 'Teotihuacan', subtitle: "the Americas' first great metropolis", region: 'americas', startYear: -100, endYear: 550, hasContent: true },
  { id: 'maya-civilization', label: 'Maya', subtitle: "Guatemala and Yucatán's stargazer kingdoms", region: 'americas', startYear: -1000, endYear: 1697, hasContent: true },
  { id: 'andean-kingdoms', label: 'Andean Kingdoms', subtitle: "Peru's regional cultures (Moche, Nazca)", region: 'americas', startYear: -200, endYear: 500, hasContent: true },
  { id: 'middle-horizon-empires', label: 'Tiwanaku & Wari', subtitle: 'highland Andean empires before the Inca', region: 'americas', startYear: 500, endYear: 1000, hasContent: true },
  { id: 'mississippian-culture', label: 'Mississippian', subtitle: "Cahokia's mound-building chiefdoms", region: 'americas', startYear: 800, endYear: 1600 },
  { id: 'aztec-empire', label: 'Aztec Empire', subtitle: "Mexico's lake-city war state", region: 'americas', startYear: 1345, endYear: 1521, hasContent: true },
  { id: 'inca-empire', label: 'Inca Empire', subtitle: "the Andes' road-builders", region: 'americas', startYear: 1438, endYear: 1533, hasContent: true },
  { id: 'early-american-republic', label: 'Early US Republic', subtitle: 'the new nation finds its feet', region: 'americas', startYear: 1776, endYear: 1828 },
  { id: 'antebellum-america', label: 'Antebellum America', subtitle: 'expansion and the slavery crisis', region: 'americas', startYear: 1828, endYear: 1865 },
  { id: 'reconstruction', label: 'Reconstruction', subtitle: 'the South after the Civil War', region: 'americas', startYear: 1865, endYear: 1877 },
  { id: 'roaring-twenties', label: 'Roaring Twenties', subtitle: 'jazz, autos, and the boom', region: 'americas', startYear: 1918, endYear: 1929 },
  { id: 'civil-rights-era', label: 'Civil Rights Era', subtitle: 'the Black freedom struggle', region: 'americas', startYear: 1954, endYear: 1968 },
]

export const TIME_MIN = -7000
export const TIME_MAX = 2050

/**
 * Compression zones squish long prehistoric stretches where nothing is
 * happening on the TL list, so the first four ancient TLs (Ancient China /
 * Indus / Meso / Nubia) pull in closer to the dense post-3500 BCE cluster.
 *
 * Zones MUST be:
 *  - non-overlapping
 *  - sorted by start ascending
 *  - placed just inside the gap so no TL's start/end year falls inside
 */
export interface CompressionZone {
  start: number
  end: number
  factor: number  // 0..1, fraction of natural width to keep
}

export const COMPRESSION_ZONES: CompressionZone[] = [
  // Between Indus/Ancient China (-7000) and Mesopotamia (-5000)
  { start: -6900, end: -5200, factor: 0.18 },
  // Between Mesopotamia (-5000) and Ancient Nubia (-3500)
  { start: -4900, end: -3700, factor: 0.22 },
]

/** Year → pixel using the piecewise compressed mapping. */
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

/** Inverse of compressedYearToPixel — used by zoom to preserve center year. */
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

export function compressedTotalWidth(pixelsPerYear: number): number {
  return compressedYearToPixel(TIME_MAX, pixelsPerYear)
}
