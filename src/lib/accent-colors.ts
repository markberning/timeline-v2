export const TL_ACCENT_COLORS: Record<string, string> = {
  'mesopotamia': '#d97706',
  'indus-valley': '#0ea5e9',
  'vedic-period': '#8b5cf6',
  'maurya-empire': '#10b981',
  'gupta-empire': '#f59e0b',
  'ancient-egypt': '#ef4444',
}

export function getAccentColor(tlId: string): string {
  return TL_ACCENT_COLORS[tlId] ?? '#a1a1aa'
}
