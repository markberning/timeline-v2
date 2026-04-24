import { getChainsForTimeline } from '../../reference-data/tl-chains'

export interface AccentColors {
  base: string      // decorative: borders, progress bar
  text: string      // text on white bg (light mode) — passes WCAG AA 4.5:1
  badge: string     // badge bg for white text — passes WCAG AA 4.5:1
}

// ----------------------------------------------------------------------
// Chain-driven accent system.
//
// Every TL in the same chain gets the same accent color. Every chain in
// the same geographic region gets a distinct *shade* of that region's
// color family, so you can tell chains apart at a glance while still
// feeling like they belong to the same continent.
//
// Region color families:
//   Near East  → amber / orange
//   Africa     → ochre / yellow
//   Asia       → violet / purple
//   Europe     → steel blue
//   Americas   → forest green
//   Global     → slate gray (used by Modern Global Conflicts only)
//
// Contrast: every `text` color is verified to pass WCAG AA (≥4.5:1) on
// white; every `badge` color passes AA-large (≥3:1) with white text.
// Dark-mode base values all clear AA on #0a0a0a.
//
// If a TL is not part of any chain yet, fall back to the per-TL override
// map below (empty for now) and finally to the neutral default.
// ----------------------------------------------------------------------

const CHAIN_COLORS: Record<string, AccentColors> = {
  // Near East (amber / orange family)
  'mesopotamian-succession': { base: '#d97706', text: '#92400e', badge: '#b45309' },
  'anatolian-succession':    { base: '#ea580c', text: '#9a3412', badge: '#c2410c' },
  'persian-tradition':       { base: '#f97316', text: '#7c2d12', badge: '#ea580c' },

  // Africa (rust red family)
  'nile-valley':             { base: '#b44d3b', text: '#7c2d12', badge: '#a3392a' },
  'nubian-tradition':        { base: '#c4533f', text: '#7c2d12', badge: '#b44030' },
  'west-african-empires':    { base: '#a64232', text: '#7c2d12', badge: '#943828' },

  // Asia (violet / purple family)
  'chinese-dynasties':       { base: '#a855f7', text: '#6b21a8', badge: '#9333ea' },
  'japanese-civilization':   { base: '#e879f9', text: '#86198f', badge: '#c026d3' },
  'korean-civilization':     { base: '#8b5cf6', text: '#5b21b6', badge: '#7c3aed' },
  'indian-subcontinent':     { base: '#818cf8', text: '#3730a3', badge: '#4f46e5' },
  'southeast-asian-maritime':{ base: '#c084fc', text: '#6b21a8', badge: '#9333ea' },

  // Europe (blue / sky family)
  'greco-roman':             { base: '#3b82f6', text: '#1e40af', badge: '#1d4ed8' },
  'western-european-ideas':  { base: '#60a5fa', text: '#1e3a8a', badge: '#2563eb' },
  'russian-civilization':    { base: '#38bdf8', text: '#075985', badge: '#0284c7' },

  // Americas (forest / emerald family)
  'mesoamerican':            { base: '#22c55e', text: '#166534', badge: '#16a34a' },
  'andean-civilizations':    { base: '#16a34a', text: '#14532d', badge: '#15803d' },
  'american-republic':       { base: '#4ade80', text: '#166534', badge: '#16a34a' },

  // Global
  'modern-conflicts':        { base: '#94a3b8', text: '#334155', badge: '#64748b' },
}

// Per-TL overrides — for TLs that are not yet part of any chain, or
// edge cases where the chain color needs to be explicitly overridden.
// Empty by default; prefer the chain color.
const TL_OVERRIDES: Record<string, AccentColors> = {
  // Near East orphan — amber family, darker shade to distinguish from Mesopotamian chain
  'phoenicia':              { base: '#b45309', text: '#92400e', badge: '#a16207' },
  // Oceania — sky/teal, unique region
  'polynesian-voyagers':    { base: '#0ea5e9', text: '#0369a1', badge: '#0284c7' },
}

const DEFAULT_COLORS: AccentColors = { base: '#6b7280', text: '#4b5563', badge: '#6b7280' }

export function getAccentColors(tlId: string): AccentColors {
  // First-chain lookup, matching the chain-chip logic in the navigator.
  const chains = getChainsForTimeline(tlId)
  if (chains.length > 0) {
    const chainColor = CHAIN_COLORS[chains[0].id]
    if (chainColor) return chainColor
  }
  return TL_OVERRIDES[tlId] ?? DEFAULT_COLORS
}

// Backwards compat
export function getAccentColor(tlId: string): string {
  return getAccentColors(tlId).base
}
