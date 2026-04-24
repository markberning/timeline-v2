import { NAVIGATOR_TLS, type NavigatorRegion } from './navigator-tls'

export interface AccentColors {
  base: string      // decorative: borders, progress bar
  text: string      // text on white bg (light mode) — passes WCAG AA 4.5:1
  badge: string     // badge bg for white text — passes WCAG AA 3:1
}

// ----------------------------------------------------------------------
// Region-driven accent system.
//
// Every TL in the same region gets the same accent color. One color per
// region, used everywhere: reader drop caps, prose links, blockquote
// borders, cross-link highlights, chain pills, civ list accents.
//
// Region color families:
//   Near East  → amber (#d97706)
//   Africa     → rust red (#b44d3b)
//   Asia       → violet (#7c3aed)
//   Europe     → blue (#1d4ed8)
//   Americas   → forest green (#047857)
//
// Contrast: every `text` color passes WCAG AA (≥4.5:1) on white;
// every `badge` color passes AA-large (≥3:1) with white text.
// In dark mode, CSS overrides text/badge to use the base color directly.
// ----------------------------------------------------------------------

const REGION_ACCENT_COLORS: Record<NavigatorRegion, AccentColors> = {
  'near-east': { base: '#d97706', text: '#92400e', badge: '#b45309' },
  'africa':    { base: '#b44d3b', text: '#7c2d12', badge: '#a3392a' },
  'asia':      { base: '#7c3aed', text: '#5b21b6', badge: '#6d28d9' },
  'europe':    { base: '#1d4ed8', text: '#1e3a8a', badge: '#1d4ed8' },
  'americas':  { base: '#047857', text: '#064e3b', badge: '#047857' },
}

const DEFAULT_COLORS: AccentColors = { base: '#6b7280', text: '#4b5563', badge: '#6b7280' }

// Fast lookup: tlId → region
const TL_REGION = new Map<string, NavigatorRegion>(
  NAVIGATOR_TLS.map(t => [t.id, t.region])
)

export function getAccentColors(tlId: string): AccentColors {
  const region = TL_REGION.get(tlId)
  if (region) return REGION_ACCENT_COLORS[region]
  return DEFAULT_COLORS
}

// Backwards compat
export function getAccentColor(tlId: string): string {
  return getAccentColors(tlId).base
}
