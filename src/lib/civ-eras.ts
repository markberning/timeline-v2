// Era bands for the redesigned Civ home timeline view. A civ belongs to the
// band its start year falls in. Bands are contiguous, so a simple
// first-band-whose-end-exceeds-the-year lookup assigns each civ.

export interface EraBand {
  id: string
  label: string
  start: number // signed year (negative = BCE)
  end: number
}

export const ERA_BANDS: EraBand[] = [
  { id: 'pre', label: 'Pre-history', start: -100000, end: -3000 },
  { id: 'ant', label: 'Antiquity', start: -3000, end: 500 },
  { id: 'med', label: 'Medieval', start: 500, end: 1500 },
  { id: 'em', label: 'Early Modern', start: 1500, end: 1800 },
  { id: 'mod', label: 'Modern', start: 1800, end: 3000 },
]

export function eraOfYear(year: number): EraBand {
  return ERA_BANDS.find(e => year < e.end) ?? ERA_BANDS[ERA_BANDS.length - 1]
}
