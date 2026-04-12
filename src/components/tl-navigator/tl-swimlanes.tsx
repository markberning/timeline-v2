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

const BREAK_BAR_COUNT = 3  // top N rows get a dark gap between name and dates
const BG_COLOR = '#0a0a0c' // matches the page background so the gap reads as a hole in the bar
const LABEL_GAP_WIDTH = 16 // pixel width of the dark gap

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
          const datesText = `${formatYearShort(tl.startYear)} – ${formatYearShort(tl.endYear)}`
          const useGap = i < BREAK_BAR_COUNT

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
              {/* Solid colored duration bar */}
              <div
                style={{
                  position: 'absolute',
                  left: barLeft,
                  top: 4,
                  height: rowHeight - 8,
                  width: barWidth,
                  background: color,
                  opacity: 0.88,
                  borderRadius: 3,
                  border: '1px solid rgba(255,255,255,0.18)',
                  boxSizing: 'border-box',
                }}
              />
              {/* Label — flex row with optional dark gap between name and dates.
                  The gap is the same color as the page bg and a hair taller
                  than the bar so it visually punches a hole in the colored bar. */}
              <div
                title={`${tl.label} · ${datesText}`}
                style={{
                  position: 'absolute',
                  left: barLeft + 8,
                  top: 0,
                  height: rowHeight,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 11,
                  fontWeight: 600,
                  color: '#f1f1f4',
                  textShadow: '0 1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.6)',
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                  zIndex: 4,
                }}
              >
                <span>{tl.label}</span>
                {useGap ? (
                  <div
                    style={{
                      width: LABEL_GAP_WIDTH,
                      height: rowHeight - 6,
                      background: BG_COLOR,
                      flexShrink: 0,
                    }}
                  />
                ) : (
                  <span style={{ opacity: 0.6 }}>·</span>
                )}
                <span>{datesText}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
