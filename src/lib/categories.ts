export interface CategoryMeta {
  label: string
  base: string   // vibrant color — dark mode text, decorative use
  text: string   // darkened for light mode text (WCAG AA on white)
}

// Contrast verified 2026-04-11
// text on #ffffff: all ≥ 4.5:1 (AA)
// base on #0a0a0a: all ≥ 4.5:1 (AA)
export const CATEGORY_META: Record<string, CategoryMeta> = {
  rulers:       { label: 'Rulers',              base: '#f59e0b', text: '#92400e' },
  wars:         { label: 'Wars & Battles',      base: '#ef4444', text: '#b91c1c' },
  architecture: { label: 'Art & Architecture',  base: '#8b5cf6', text: '#6d28d9' },
  religion:     { label: 'Religion',            base: '#06b6d4', text: '#0e7490' },
  science:      { label: 'Science & Medicine',  base: '#10b981', text: '#047857' },
  trade:        { label: 'Trade & Economy',     base: '#f97316', text: '#c2410c' },
  people:       { label: 'Famous People',       base: '#ec4899', text: '#be185d' },
  writing:      { label: 'Literature & Writing', base: '#a78bfa', text: '#6d28d9' },
}
