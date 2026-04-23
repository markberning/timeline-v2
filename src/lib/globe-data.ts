import { NAVIGATOR_TLS } from './navigator-tls'
import { getAccentColors } from './accent-colors'

export interface GlobeCiv {
  id: string
  label: string
  subtitle: string
  region: string
  startYear: number
  endYear: number
  hasContent: boolean
  centroid: [number, number] // [lng, lat]
  color: string
  altOffset: number // unique per-civ altitude offset to prevent z-fighting
  geometry: { type: 'Polygon'; coordinates: number[][][] }
}

// Catmull-Rom spline interpolation for smooth polygon boundaries.
// Takes angular control points and generates smooth curves between them.
// segsPerEdge=4 with 10 control points → 40 smooth vertices.
function smooth(coords: [number, number][], segsPerEdge = 4): [number, number][] {
  const n = coords.length
  const out: [number, number][] = []
  for (let i = 0; i < n; i++) {
    const p0 = coords[(i - 1 + n) % n]
    const p1 = coords[i]
    const p2 = coords[(i + 1) % n]
    const p3 = coords[(i + 2) % n]
    for (let s = 0; s < segsPerEdge; s++) {
      const t = s / segsPerEdge
      const t2 = t * t
      const t3 = t2 * t
      out.push([
        0.5 * ((-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3
             + (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2
             + (-p0[0] + p2[0]) * t
             + 2 * p1[0]),
        0.5 * ((-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3
             + (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2
             + (-p0[1] + p2[1]) * t
             + 2 * p1[1]),
      ])
    }
  }
  return out
}

function poly(coords: [number, number][]): { type: 'Polygon'; coordinates: number[][][] } {
  const s = smooth(coords)
  return { type: 'Polygon', coordinates: [[...s, s[0]]] }
}

function centroidOf(coords: [number, number][]): [number, number] {
  const n = coords.length
  return [
    coords.reduce((s, c) => s + c[0], 0) / n,
    coords.reduce((s, c) => s + c[1], 0) / n,
  ]
}

// Approximate historical territorial extents — [longitude, latitude] pairs.
// More control points on larger territories and complex coastlines; the
// Catmull-Rom spline fills in smooth curves between them.
const TERRITORIES: Record<string, [number, number][]> = {
  // ── Near East ──

  // Mesopotamia: Persian Gulf marshes → Euphrates → upper Tigris → Zagros edge
  'mesopotamia': [
    [44, 29], [42.5, 29.5], [42, 31], [42, 33], [42.5, 34.5],
    [43.5, 35.5], [44.5, 37], [46, 36.5], [47.5, 36], [48.5, 34.5],
    [48.5, 32.5], [48, 31], [47.5, 29.5], [46, 28.5],
  ],

  // Elam: Khuzestan lowland → Zagros highlands → Fars
  'elamite-civilization': [
    [48.5, 28.5], [48, 30], [48, 32], [49, 33.5], [50.5, 34.5],
    [52.5, 34.5], [54.5, 33], [55, 31], [54, 29.5], [52, 28.5],
    [50, 28],
  ],

  // Assyrian Empire: upper Tigris heartland → NE Syria → SE Turkey
  'assyrian-empire': [
    [38.5, 33.5], [38, 35], [38, 36.5], [39.5, 37.5], [41.5, 38],
    [43.5, 38], [45.5, 37.5], [47, 36], [47, 34.5], [45.5, 33.5],
    [43, 33], [40.5, 33],
  ],

  // Hittite Empire: central Anatolian plateau
  'hittite-empire': [
    [29.5, 36], [28.5, 37.5], [28.5, 39], [29.5, 40.5], [31.5, 41],
    [34, 41.5], [36.5, 41], [38, 40], [38, 38.5], [37, 37.5],
    [35, 36.5], [32.5, 36],
  ],

  // Persian Empire: Zagros → Caspian coast → Kopet Dag → Baluchistan → Gulf
  'persian-empire': [
    [44, 26.5], [43.5, 29], [43, 32], [44, 35], [46, 37],
    [48.5, 38], [51, 38.5], [54, 38], [57, 37.5], [60, 37],
    [63, 35.5], [65.5, 33], [65.5, 30], [64, 27.5], [61, 26],
    [57, 25], [53, 24.5], [49, 25], [46, 25.5],
  ],

  // ── Africa ──

  // Ancient Nubia: 1st Cataract → 4th Cataract, Nile corridor
  'ancient-nubia': [
    [31, 16.5], [30, 18], [30, 20], [30.5, 22], [31.5, 23.5],
    [33, 23.5], [34.5, 22], [35, 20], [34.5, 18], [33.5, 17],
  ],

  // Early Dynastic Egypt: Delta triangle → narrow Nile valley to Aswan
  'early-dynastic-egypt': [
    [30.5, 23.5], [29.5, 25], [29.5, 27], [30, 29], [30, 30.5],
    [31, 31.5], [32, 31.5], [32.5, 30.5], [33, 28.5], [33, 26.5],
    [32.5, 25], [32, 24],
  ],

  // Old Kingdom Egypt: pyramid heartland, slightly wider oasis influence
  'old-kingdom-egypt': [
    [30.5, 23.5], [29, 25.5], [29, 27.5], [29.5, 29.5], [30, 31],
    [31.5, 31.5], [33, 31], [34, 29.5], [34, 27.5], [33.5, 25.5],
    [33, 24], [31.5, 23.5],
  ],

  // New Kingdom Egypt: south into Nubia + Sinai + coastal Canaan
  'new-kingdom-egypt': [
    [30.5, 19.5], [28.5, 22], [28, 25], [28, 27.5], [29.5, 30],
    [30, 31.5], [31.5, 32], [33, 31.5], [35, 30.5], [36, 28.5],
    [36, 26], [35.5, 23.5], [34.5, 21.5], [33, 20],
  ],

  // Kingdom of Kush: Napata/Meroe region, central Sudan
  'kingdom-of-kush': [
    [31.5, 12.5], [30, 14], [29.5, 16], [29.5, 18], [30.5, 20],
    [31.5, 21.5], [33, 22.5], [35, 22], [36.5, 20.5], [37, 18],
    [36.5, 15.5], [35, 13.5], [33.5, 12.5],
  ],

  // ── South Asia ──

  // Indus Valley: delta → Punjab → Rajasthan edge → Gujarat coast
  'indus-valley': [
    [66.5, 22], [66, 24.5], [66, 27], [67, 29.5], [68.5, 31],
    [70.5, 32], [72.5, 31], [74, 29.5], [75, 27], [74.5, 24.5],
    [73, 22], [70.5, 21], [68, 21],
  ],

  // Vedic Period: Saraswati/Punjab → Ganges-Yamuna Doab → Bihar
  'vedic-period': [
    [73.5, 22], [73, 25], [73, 27.5], [74.5, 29.5], [76.5, 31],
    [79, 30.5], [82, 29.5], [85, 28], [87, 26], [87, 24],
    [85, 22.5], [82, 21.5], [78.5, 21],
  ],

  // Maurya Empire: Hindu Kush → Himalayas → Bengal → Deccan → Gujarat
  'maurya-empire': [
    [66.5, 20], [66, 24], [66.5, 28], [68, 31], [70, 33.5],
    [73, 35], [77, 34.5], [81, 32], [84, 30], [87.5, 27.5],
    [90, 25], [89.5, 22], [89, 19], [87, 16], [84, 12.5],
    [80, 9.5], [77, 8.5], [74, 9.5], [71, 12], [68, 16],
  ],

  // ── East Asia ──

  // Ancient China: Yellow River core — Wei valley → North China Plain
  'ancient-china': [
    [105, 32.5], [104, 35], [104, 37.5], [106, 39.5], [109, 40.5],
    [112, 40.5], [115, 39.5], [117, 37.5], [116, 35.5], [114, 33.5],
    [111, 32], [108, 31.5],
  ],

  // Shang Dynasty: central Yellow River — Anyang/Zhengzhou heartland
  'shang-dynasty': [
    [107.5, 31], [106.5, 33.5], [106, 36], [108, 38.5], [110.5, 39.5],
    [113.5, 39], [116, 38], [117.5, 36], [117.5, 33.5], [116, 31.5],
    [113, 30.5], [110, 30.5],
  ],

  // Zhou Dynasty: wider — Yangtze included, from Shaanxi to the coast
  'zhou-dynasty': [
    [104.5, 27.5], [103, 30.5], [102, 33.5], [103, 37], [105, 39.5],
    [109, 41], [113.5, 41], [117, 40], [119.5, 38], [120, 35.5],
    [119.5, 32.5], [118, 30], [115.5, 28], [111, 27], [107.5, 27],
  ],

  // Qin Dynasty: unified China — Great Wall to Guangdong
  'qin-dynasty': [
    [100.5, 23], [99.5, 27], [99.5, 31], [101, 35], [103.5, 38.5],
    [107, 41], [111, 42], [115.5, 42], [119, 40.5], [121, 38],
    [122, 35], [122, 32], [121.5, 29], [120, 26], [117.5, 23],
    [113, 21], [109, 20], [105, 20.5], [102, 22],
  ],

  // Ancient Korea: peninsula from Yalu/Tumen to southern coast
  'ancient-korea': [
    [125.5, 33.5], [124.5, 35.5], [124.5, 37.5], [125, 39.5],
    [126, 41], [127.5, 42.5], [129, 42.5], [130, 41], [130, 39],
    [129.5, 37], [129, 35.5], [128, 34], [126.5, 33.5],
  ],

  // ── Europe ──

  // Minoan: Crete — west cape → north coast → east cape → south coast
  'minoan-civilization': [
    [23.5, 35.3], [24, 35.6], [25, 35.7], [25.8, 35.5], [26.3, 35.3],
    [26.3, 35], [25.5, 34.8], [24.8, 34.8], [24, 34.9], [23.5, 35],
  ],

  // Mycenaean: Peloponnese → Attica → Boeotia → Thessaly
  'mycenaean-civilization': [
    [21.5, 36.5], [21, 37.5], [21, 38.5], [21.5, 39.5], [22.5, 40],
    [24, 40], [25, 39.5], [25, 38.5], [24, 37.5], [23, 37],
    [22.5, 36.5],
  ],

  // ── Americas ──

  // Early Andean: Peruvian coast + adjacent highlands
  'early-andean-civilizations': [
    [-81, -6], [-79.5, -4], [-78, -4.5], [-76, -6], [-74, -8],
    [-72, -10.5], [-70, -13.5], [-70.5, -16], [-72, -18],
    [-75, -18.5], [-78, -17], [-80, -14], [-81, -11], [-81.5, -8],
  ],

  // Olmec: Gulf Coast lowlands — Tres Zapotes to La Venta
  'olmec-civilization': [
    [-97.5, 17], [-97.5, 18.5], [-97, 19.5], [-96, 19.5],
    [-94.5, 19], [-93.5, 18.5], [-93, 17.5], [-94, 16.5],
    [-95.5, 16.5],
  ],
}

// Explicit layer order for overlapping regions. Higher number = rendered on top.
// Within each geographic cluster, smaller/earlier territories go on top so they
// stay visible when overlapping with larger empires underneath.
const LAYER_ORDER: Record<string, number> = {
  // China: Qin (huge) on bottom → Ancient China (small core) on top
  'qin-dynasty':      1,
  'zhou-dynasty':     2,
  'shang-dynasty':    3,
  'ancient-china':    4,
  // India: Maurya (huge) on bottom → Indus (small) on top
  'maurya-empire':    1,
  'vedic-period':     2,
  'indus-valley':     3,
  // Egypt: New Kingdom (largest) on bottom → Early Dynastic (narrowest) on top
  'new-kingdom-egypt':     1,
  'old-kingdom-egypt':     2,
  'early-dynastic-egypt':  3,
  // Nubia/Kush
  'kingdom-of-kush':  1,
  'ancient-nubia':    2,
  // Near East: Persian (huge) on bottom → smaller territories on top
  'persian-empire':          1,
  'mesopotamia':             2,
  'elamite-civilization':    3,
  'assyrian-empire':         4,
  'hittite-empire':          5,
}

export const GLOBE_CIVS: GlobeCiv[] = NAVIGATOR_TLS
  .filter(tl => tl.hasContent && TERRITORIES[tl.id])
  .map(tl => {
    const coords = TERRITORIES[tl.id]
    const layer = LAYER_ORDER[tl.id] ?? 0
    return {
      id: tl.id,
      label: tl.label,
      subtitle: tl.subtitle ?? '',
      region: tl.region,
      startYear: tl.startYear,
      endYear: tl.endYear,
      hasContent: !!tl.hasContent,
      centroid: centroidOf(coords),
      color: getAccentColors(tl.id).base,
      altOffset: layer * 0.0003,
      geometry: poly(coords),
    }
  })
