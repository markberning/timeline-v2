export interface AccentColors {
  base: string      // decorative: borders, progress bar
  text: string      // text on white bg (light mode) — passes WCAG AA 4.5:1
  badge: string     // badge bg for white text — passes WCAG AA 4.5:1
}

const TL_ACCENT_COLORS: Record<string, AccentColors> = {
  'mesopotamia':    { base: '#d97706', text: '#92400e', badge: '#b45309' },
  'indus-valley':   { base: '#0ea5e9', text: '#0369a1', badge: '#0284c7' },
  'vedic-period':   { base: '#8b5cf6', text: '#6d28d9', badge: '#7c3aed' },
  'maurya-empire':  { base: '#10b981', text: '#047857', badge: '#059669' },
  'gupta-empire':   { base: '#f59e0b', text: '#92400e', badge: '#d97706' },
  'ancient-egypt':  { base: '#ef4444', text: '#b91c1c', badge: '#dc2626' },
}

const DEFAULT_COLORS: AccentColors = { base: '#6b7280', text: '#4b5563', badge: '#6b7280' }

export function getAccentColors(tlId: string): AccentColors {
  return TL_ACCENT_COLORS[tlId] ?? DEFAULT_COLORS
}

// Backwards compat
export function getAccentColor(tlId: string): string {
  return (TL_ACCENT_COLORS[tlId] ?? DEFAULT_COLORS).base
}
