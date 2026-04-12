'use client'

import { useMemo } from 'react'
import type { NavigatorTl } from '@/lib/navigator-tls'
import {
  REGION_COLORS,
  TIME_MIN,
  TIME_MAX,
  COMPRESSION_ZONES,
  compressedYearToPixel,
  compressedTotalWidth,
} from '@/lib/navigator-tls'

const BREAK_WIDTH = 16   // pixel width of the squiggly break gap between bar segments
const BREAK_BAR_COUNT = 3  // top N rows that get break markers

function SquiggleBreak({ left, top, width, height }: { left: number; top: number; width: number; height: number }) {
  // Two parallel wavy vertical lines, scaled to fit the bar height
  return (
    <svg
      style={{ position: 'absolute', left, top, width, height, pointerEvents: 'none', zIndex: 3 }}
      viewBox="0 0 16 24"
      preserveAspectRatio="none"
    >
      <path
        d="M 5 0 Q 1 3, 5 6 T 5 12 T 5 18 T 5 24"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M 11 0 Q 7 3, 11 6 T 11 12 T 11 18 T 11 24"
        stroke="rgba(255,255,255,0.85)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  )
}

interface Props {
  tls: NavigatorTl[]               // pre-filtered AND pre-sorted by start year
  pixelsPerYear: number
  rowHeight: number
  axisHeight: number
}

function formatYearShort(y: number): string {
  const abs = Math.abs(Math.round(y))
  return y < 0 ? `${abs} BCE` : `${abs} CE`
}

// Nice-number tick interval so labels stay ~80px apart
function tickInterval(pixelsPerYear: number, minSpacingPx = 80): number {
  const raw = minSpacingPx / pixelsPerYear
  const NICE = [1, 2, 5, 10, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000, 10000]
  for (const n of NICE) if (n >= raw) return n
  return 10000
}

export function TlSwimlanes({ tls, pixelsPerYear, rowHeight, axisHeight }: Props) {
  const trackWidth = Math.max(1, Math.round(compressedTotalWidth(pixelsPerYear)))

  const ticks = useMemo(() => {
    const interval = tickInterval(pixelsPerYear)
    const first = Math.ceil(TIME_MIN / interval) * interval
    const out: number[] = []
    for (let y = first; y <= TIME_MAX; y += interval) {
      // Skip ticks that fall inside a compression zone — they'd bunch up
      // uselessly behind the break markers.
      const inZone = COMPRESSION_ZONES.some(z => y > z.start && y < z.end)
      if (!inZone) out.push(y)
    }
    return out
  }, [pixelsPerYear])

  return (
    <div style={{ position: 'relative', width: trackWidth }}>
      {/* Sticky time axis at top */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 4,
          height: axisHeight,
          width: trackWidth,
          background: '#0d0d10',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        {ticks.map(y => {
          const left = compressedYearToPixel(y, pixelsPerYear)
          return (
            <div
              key={y}
              style={{
                position: 'absolute',
                left,
                top: 0,
                bottom: 0,
                width: 1,
                background: 'rgba(255,255,255,0.08)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 4,
                  top: 4,
                  fontSize: 10,
                  color: '#888',
                  fontVariantNumeric: 'tabular-nums',
                  whiteSpace: 'nowrap',
                }}
              >
                {formatYearShort(y)}
              </div>
            </div>
          )
        })}
      </div>

      {/* Rows */}
      <div>
        {tls.map((tl, i) => {
          const color = REGION_COLORS[tl.region]
          const barLeft = compressedYearToPixel(tl.startYear, pixelsPerYear)
          const barRight = compressedYearToPixel(tl.endYear, pixelsPerYear)
          const barWidth = Math.max(4, barRight - barLeft)
          const bgStripe = i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'
          const labelText = `${tl.label} · ${formatYearShort(tl.startYear)} – ${formatYearShort(tl.endYear)}`

          // For the top BREAK_BAR_COUNT rows, split the bar at each compression
          // zone the bar fully spans and render a squiggly break in the gap.
          const useBreaks = i < BREAK_BAR_COUNT
          const crossings = useBreaks
            ? COMPRESSION_ZONES
                .filter(z => z.start >= tl.startYear && z.end <= tl.endYear)
                .map(z => {
                  const sPx = compressedYearToPixel(z.start, pixelsPerYear)
                  const ePx = compressedYearToPixel(z.end, pixelsPerYear)
                  return { mid: (sPx + ePx) / 2 }
                })
            : []

          // Build segment list — bar split into chunks separated by break gaps
          const segments: Array<{ left: number; width: number; first: boolean; last: boolean }> = []
          let cursor = barLeft
          crossings.forEach((c, idx) => {
            const segRight = c.mid - BREAK_WIDTH / 2
            if (segRight > cursor) {
              segments.push({ left: cursor, width: segRight - cursor, first: idx === 0, last: false })
            }
            cursor = c.mid + BREAK_WIDTH / 2
          })
          if (barLeft + barWidth > cursor) {
            segments.push({ left: cursor, width: (barLeft + barWidth) - cursor, first: crossings.length === 0, last: true })
          }
          if (segments.length > 0) segments[segments.length - 1].last = true

          return (
            <div
              key={tl.id}
              style={{
                position: 'relative',
                height: rowHeight,
                background: bgStripe,
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                width: trackWidth,
              }}
            >
              {/* Bar segments */}
              {segments.map((s, idx) => (
                <div
                  key={idx}
                  style={{
                    position: 'absolute',
                    left: s.left,
                    top: 4,
                    height: rowHeight - 8,
                    width: Math.max(0, s.width),
                    background: color,
                    opacity: 0.88,
                    borderTop: '1px solid rgba(255,255,255,0.18)',
                    borderBottom: '1px solid rgba(255,255,255,0.18)',
                    borderLeft: s.first ? '1px solid rgba(255,255,255,0.18)' : 'none',
                    borderRight: s.last ? '1px solid rgba(255,255,255,0.18)' : 'none',
                    borderTopLeftRadius: s.first ? 3 : 0,
                    borderBottomLeftRadius: s.first ? 3 : 0,
                    borderTopRightRadius: s.last ? 3 : 0,
                    borderBottomRightRadius: s.last ? 3 : 0,
                    boxSizing: 'border-box',
                  }}
                />
              ))}
              {/* Squiggle break markers */}
              {crossings.map((c, idx) => (
                <SquiggleBreak
                  key={`brk-${idx}`}
                  left={c.mid - BREAK_WIDTH / 2}
                  top={4}
                  width={BREAK_WIDTH}
                  height={rowHeight - 8}
                />
              ))}
              {/* Label — starts at bar left, extends past the bar as needed */}
              <div
                title={labelText}
                style={{
                  position: 'absolute',
                  left: barLeft + 8,
                  top: 0,
                  height: rowHeight,
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#f1f1f4',
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  zIndex: 4,
                }}
              >
                {labelText}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
