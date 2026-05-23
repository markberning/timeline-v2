// art-data.ts — data for the Art vertical (Phase 2 mode).
//
// Scope: WESTERN art for v1; worldwide expansion is deferred "much later".
// Every entity carries a `region` field (='western' for now) so that later
// expansion is additive, not a re-architecture. See audits/art-vertical.md.
//
// Hierarchy (the drilldown spine): Era → Movement → Work → Section narratives.
// Artist is a parallel level reachable from a Movement or a Work.
//
// Front door = the Era Hub (browse by era) + the Climb tree (one-hop influence
// lens), ported from the original mockup (samples/Historica.zip → art.jsx).

export type ArtRegion = 'western' // worldwide expansion adds more later

// The Art vertical's identity colour (the violet accent), used for the
// breadcrumb leaf, the front-door chrome, and the Modern era / Cubism.
export const ART_ACCENT = '#7c3aed'

// The five region accents, reused as era/movement band hues (same palette the
// Civ and War verticals use).
export const ART_ACCENTS = {
  blue: '#1d4ed8',
  amber: '#d97706',
  rust: '#b44d3b',
  violet: '#7c3aed',
  green: '#047857',
} as const

// ─────────────────────────────────────────────────────────────
// Eras — the front-door spine (8, Prehistoric → Contemporary)
// ─────────────────────────────────────────────────────────────
export interface ArtEra {
  id: string
  name: string
  range: string
  hook: string
  palette: [string, string, string]
  region: ArtRegion
}

export const ART_ERAS: ArtEra[] = [
  { id: 'pre', name: 'Prehistoric', range: '40,000–3,000 BCE', hook: 'Hands and horses on a cave wall, somewhere in France.', palette: ['#6b4423', '#a06a3b', '#1d1410'], region: 'western' },
  { id: 'anc', name: 'Ancient', range: '3000 BCE–500 CE', hook: 'Egypt, Greece, Rome — and a remarkable number of urns.', palette: ['#c97a3b', '#7b3b1c', '#1a0e07'], region: 'western' },
  { id: 'med', name: 'Medieval', range: '500–1400', hook: 'Mostly church business. Mostly gold.', palette: ['#c89b2a', '#7a1422', '#1c0a08'], region: 'western' },
  { id: 'ren', name: 'Renaissance', range: '1400–1600', hook: 'Math meets paint. Faces start looking back.', palette: ['#3a4a8b', '#7a5a32', '#0e1224'], region: 'western' },
  { id: 'bar', name: 'Baroque', range: '1600–1750', hook: 'Drama, candlelight, and Caravaggio in a bad mood.', palette: ['#8a1c1c', '#c79338', '#0d0606'], region: 'western' },
  { id: 'nro', name: 'Neoclassical & Romantic', range: '1750–1850', hook: 'Reason vs. feelings. Feelings win the second half.', palette: ['#7e8b6c', '#d8c9a8', '#1a1d18'], region: 'western' },
  { id: 'mod', name: 'Modern', range: '1850–1970', hook: 'Painters break the picture and put it back wrong on purpose.', palette: ['#1c1c1c', '#d6cf3f', '#bf2f25'], region: 'western' },
  { id: 'con', name: 'Contemporary', range: '1970–today', hook: 'Anything goes. The wall label is half the work.', palette: ['#ff3e7f', '#1f1f1f', '#7adff0'], region: 'western' },
]

// "Jump to the famous stuff" chips on the Era Hub — fast lanes to marquee
// material. `eraId` is where the chip lands until deeper pages exist.
export interface ArtChip {
  label: string
  eraId: string
}

export const ART_CHIPS: ArtChip[] = [
  { label: 'Impressionism', eraId: 'mod' },
  { label: 'The Renaissance', eraId: 'ren' },
  { label: 'Picasso & Cubism', eraId: 'mod' },
]

// ─────────────────────────────────────────────────────────────
// Climb tree — the influence lens ("Climbing the tree")
// ─────────────────────────────────────────────────────────────
// v1 sample centred on Cubism: 3 parents up, 3 children down, re-centre on tap.
// A full influence graph (every movement keyed by id) is a follow-up; for now
// this renders the one fully-designed slice.
export interface ClimbNode {
  name: string
  range: string
  tag?: string
  palette: [string, string, string]
}

export interface ClimbGraph {
  current: {
    id: string
    name: string
    range: string
    era: string
    hook: string
    palette: [string, string, string]
    accent: string
    label: string
  }
  parents: ClimbNode[]
  children: ClimbNode[]
}

export const ART_CLIMB: ClimbGraph = {
  current: {
    id: 'cubism',
    name: 'Cubism',
    range: '1907–1922',
    era: 'Modern',
    hook: 'Pablo and Georges decide a face has, what, six sides?',
    palette: ['#c0a06c', '#3d3a2e', '#8a6b3a'],
    accent: ART_ACCENTS.amber,
    label: 'Picasso, Les Demoiselles d’Avignon',
  },
  parents: [
    { name: 'Cézanne', range: '1860s–90s', tag: 'Painter', palette: ['#5a7042', '#8a7848', '#1c1a12'] },
    { name: 'African art', range: 'long tradition', tag: 'Influence', palette: ['#7a3b1c', '#c08a3a', '#1a0e07'] },
    { name: 'Post-Impressionism', range: '1886–1905', tag: 'Movement', palette: ['#1c6a8a', '#d68a2a', '#0a1620'] },
  ],
  children: [
    { name: 'Futurism', range: '1909–44', tag: 'Movement', palette: ['#bf2f25', '#1c1c1c', '#d6cf3f'] },
    { name: 'Constructivism', range: '1915–40', tag: 'Movement', palette: ['#c01c1c', '#1c1c1c', '#d6d6d6'] },
    { name: 'Abstract art', range: '1910–', tag: 'Movement', palette: ['#3a4a8b', '#d6cf3f', '#1a1a1a'] },
  ],
}

// hex (#rrggbb) + alpha → rgba()
export function artAlpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  return `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${a})`
}
