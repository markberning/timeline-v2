import { TIME_MAX, TIME_MIN } from './navigator-tls'

export interface Viewport {
  pixelsPerYear: number
  panOffsetPx: number
  containerWidth: number
}

export const MIN_PPY = 0.01
export const MAX_PPY = 5

export function yearToPixel(year: number, v: Viewport): number {
  return year * v.pixelsPerYear + v.panOffsetPx
}

export function pixelToYear(px: number, v: Viewport): number {
  return (px - v.panOffsetPx) / v.pixelsPerYear
}

export function getVisibleYearRange(v: Viewport): [number, number] {
  return [pixelToYear(0, v), pixelToYear(v.containerWidth, v)]
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n))
}

/**
 * Zoom anchored to a pixel position — the year under `anchorX` stays fixed.
 * Ported from v1 timeline/src/lib/zoom.ts.
 */
export function applyZoom(v: Viewport, factor: number, anchorX: number): Viewport {
  const anchorYear = pixelToYear(anchorX, v)
  const newPPY = clamp(v.pixelsPerYear * factor, MIN_PPY, MAX_PPY)
  const newPan = anchorX - anchorYear * newPPY
  return { ...v, pixelsPerYear: newPPY, panOffsetPx: newPan }
}

/**
 * Clamp pan so the user can't scroll past the absolute time bounds by more
 * than half a viewport. Keeps orientation without jailing them.
 */
export function clampPan(v: Viewport): Viewport {
  const slack = v.containerWidth * 0.5
  const minPan = v.containerWidth - TIME_MAX * v.pixelsPerYear - slack
  const maxPan = -TIME_MIN * v.pixelsPerYear + slack
  return { ...v, panOffsetPx: clamp(v.panOffsetPx, minPan, maxPan) }
}

/** Initial viewport: center on given year with given visible span. */
export function makeInitialViewport(containerWidth: number, centerYear: number, visibleSpanYears: number): Viewport {
  const pixelsPerYear = containerWidth / visibleSpanYears
  const panOffsetPx = containerWidth / 2 - centerYear * pixelsPerYear
  return { pixelsPerYear, panOffsetPx, containerWidth }
}

export function formatYear(year: number): string {
  const y = Math.round(year)
  if (y === 0) return '1 BCE'
  if (y < 0) return `${Math.abs(y)} BCE`
  return `${y} CE`
}
