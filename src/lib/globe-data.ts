import { NAVIGATOR_TLS } from './navigator-tls'
import { getAccentColors } from './accent-colors'

export interface GlobeCiv {
  id: string
  label: string
  subtitle: string
  startYear: number
  endYear: number
  hasContent: boolean
  centroid: [number, number] // [lng, lat]
  color: string
  geometry: { type: 'Polygon'; coordinates: number[][][] }
}

function poly(coords: [number, number][]): { type: 'Polygon'; coordinates: number[][][] } {
  return { type: 'Polygon', coordinates: [[...coords, coords[0]]] }
}

function centroidOf(coords: [number, number][]): [number, number] {
  const n = coords.length
  return [
    coords.reduce((s, c) => s + c[0], 0) / n,
    coords.reduce((s, c) => s + c[1], 0) / n,
  ]
}

// Approximate historical territorial extents — [longitude, latitude] pairs.
// Overlapping civs (e.g. China sequence) have distinct boundaries reflecting
// each period's actual territory, so they shift as you nudge the globe.
const TERRITORIES: Record<string, [number, number][]> = {
  // ── Near East ──

  // Mesopotamia: Tigris-Euphrates valley, southern Iraq to upper Syria
  'mesopotamia': [
    [42, 29.5], [42, 33], [43, 35.5], [44.5, 37], [47, 36],
    [48.5, 34], [48.5, 31], [47, 29], [44, 28.5],
  ],

  // Elam: southwestern Iran (Khuzestan + highlands toward Fars)
  'elamite-civilization': [
    [48, 29], [48, 32.5], [50, 34.5], [53, 34.5], [55, 32],
    [54, 29], [51, 28],
  ],

  // Assyrian Empire: upper Tigris, NE Syria, SE Turkey
  'assyrian-empire': [
    [38, 34], [38, 37], [40, 38], [43.5, 38], [46.5, 37],
    [47, 35], [44.5, 33.5], [40.5, 33],
  ],

  // Hittite Empire: central Anatolia heartland
  'hittite-empire': [
    [29, 36.5], [28.5, 39.5], [30.5, 41], [34.5, 41.5], [37.5, 40],
    [38, 38], [36, 37], [32, 36],
  ],

  // Persian Empire: Iran proper — Cyrus to Sassanids
  'persian-empire': [
    [44, 26], [43, 31], [44, 36], [48, 38], [56, 38],
    [63, 36], [66, 32], [63, 26], [56, 24], [48, 25],
  ],

  // ── Africa ──

  // Ancient Nubia: upper Nile, northern Sudan
  'ancient-nubia': [
    [30.5, 18], [30, 21.5], [31.5, 24], [34, 23], [35, 20.5],
    [34, 17.5], [32, 16.5],
  ],

  // Early Dynastic Egypt: Nile Delta + narrow valley to First Cataract
  'early-dynastic-egypt': [
    [29.5, 24], [29.5, 28], [30, 31], [31.5, 31.5], [33, 30],
    [33, 26.5], [32, 24], [30.5, 23],
  ],

  // Old Kingdom Egypt: pyramid heartland, slightly wider
  'old-kingdom-egypt': [
    [29, 24.5], [29, 28.5], [29.5, 31], [32, 31.5], [34, 30],
    [34, 27], [33, 24], [30.5, 23.5],
  ],

  // New Kingdom Egypt: imperial extent — deeper into Nubia + Sinai
  'new-kingdom-egypt': [
    [28, 21], [28, 27.5], [29.5, 31.5], [32, 32], [35, 30.5],
    [36, 27.5], [35, 23.5], [33.5, 20.5], [30.5, 19],
  ],

  // Kingdom of Kush: Napata + Meroe, deeper into Sudan
  'kingdom-of-kush': [
    [30, 13], [29.5, 17.5], [31, 21.5], [33.5, 22.5], [36.5, 20.5],
    [37, 16], [35, 13], [32, 12],
  ],

  // ── South Asia ──

  // Indus Valley: Indus basin — Harappa/Mohenjo-daro + Gujarat
  'indus-valley': [
    [66, 23.5], [66, 28], [68, 31], [71, 32], [74, 29.5],
    [75, 26], [73, 22], [69.5, 21],
  ],

  // Vedic Period: Indo-Gangetic plain, east of Indus into Bihar
  'vedic-period': [
    [73, 23], [73, 29], [76, 31.5], [81, 30], [86, 27],
    [87, 24], [84, 21.5], [78, 21],
  ],

  // Maurya Empire: most of the Indian subcontinent
  'maurya-empire': [
    [66, 21], [66, 28.5], [70, 34], [77, 35], [84, 30],
    [90, 25.5], [89, 18], [84, 11], [78, 8], [73, 10], [68, 16],
  ],

  // ── East Asia ──

  // Ancient China: Yellow River core (Neolithic heartland)
  'ancient-china': [
    [104, 33.5], [104, 38.5], [108, 41], [114, 40], [117, 37],
    [115, 33.5], [110, 31.5],
  ],

  // Shang Dynasty: Yellow River corridor, slightly wider + south
  'shang-dynasty': [
    [107, 31.5], [106, 36.5], [109, 39.5], [114, 39], [118, 36],
    [117, 32], [112, 30.5],
  ],

  // Zhou Dynasty: reaches the Yangtze, wider east-west
  'zhou-dynasty': [
    [104, 28], [102, 34], [104, 39.5], [109, 41], [117, 40],
    [120, 36], [119, 30.5], [114, 27], [108, 27],
  ],

  // Qin Dynasty: unified China — large territory
  'qin-dynasty': [
    [100, 23], [99, 31], [102, 37], [107, 41.5], [115, 42],
    [121, 39], [122, 34], [121, 28], [117, 22], [109, 19.5], [103, 21],
  ],

  // Ancient Korea: Korean peninsula
  'ancient-korea': [
    [125, 34], [124.5, 37], [125, 40], [127, 42.5], [129.5, 42.5],
    [130, 38.5], [129, 35], [127, 33.5],
  ],

  // ── Europe ──

  // Minoan: island of Crete
  'minoan-civilization': [
    [23.5, 34.8], [23.5, 35.5], [25, 35.8], [26.3, 35.4],
    [26.3, 35], [25, 34.7], [24, 34.6],
  ],

  // Mycenaean: Peloponnese + southern mainland Greece
  'mycenaean-civilization': [
    [21, 36.5], [20.5, 38.5], [21.5, 39.5], [24, 40],
    [25, 38.5], [24.5, 37], [23, 36.5], [21.5, 36],
  ],

  // ── Americas ──

  // Early Andean: coastal Peru + highlands
  'early-andean-civilizations': [
    [-81, -6], [-79, -3], [-76, -5], [-72, -9], [-70, -14],
    [-72, -18], [-76, -18.5], [-80, -14], [-81.5, -9],
  ],

  // Olmec: Gulf Coast Mexico (Veracruz / Tabasco)
  'olmec-civilization': [
    [-97, 17], [-97.5, 19.5], [-96, 20], [-93.5, 19],
    [-93, 17.5], [-94.5, 16.5],
  ],
}

export const GLOBE_CIVS: GlobeCiv[] = NAVIGATOR_TLS
  .filter(tl => tl.hasContent && TERRITORIES[tl.id])
  .map(tl => {
    const coords = TERRITORIES[tl.id]
    return {
      id: tl.id,
      label: tl.label,
      subtitle: tl.subtitle ?? '',
      startYear: tl.startYear,
      endYear: tl.endYear,
      hasContent: !!tl.hasContent,
      centroid: centroidOf(coords),
      color: getAccentColors(tl.id).base,
      geometry: poly(coords),
    }
  })
