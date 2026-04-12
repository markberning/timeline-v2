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
  const contentHeight = axisHeight + tls.length * rowHeight

  const ticks = useMemo(() => {
    const interval = tickInterval(pixelsPerYear)
    const first = Math.ceil(TIME_MIN / interval) * interval
    const out: number[] = []
    for (let y = first; y <= TIME_MAX; y += interval) {
      // Skip ticks that fall inside a compression zone — they'd bunch up
      // uselessly and overlap the break markers.
      const inZone = COMPRESSION_ZONES.some(z => y > z.start && y < z.end)
      if (!inZone) out.push(y)
    }
    return out
  }, [pixelsPerYear])

  const breakStripes = useMemo(
    () =>
      COMPRESSION_ZONES.map(z => {
        const left = compressedYearToPixel(z.start, pixelsPerYear)
        const right = compressedYearToPixel(z.end, pixelsPerYear)
        return { zone: z, left, width: Math.max(4, right - left) }
      }),
    [pixelsPerYear],
  )

  return (
    <div style={{ position: 'relative', width: trackWidth, minHeight: contentHeight }}>
      {/* Break stripes — one per compression zone, running the full content
          height underneath the axis and rows. Hatched background signals
          "compressed gap" and flanking borders act as the visual ">{  {<"
          marker the user asked for. */}
      {breakStripes.map(({ zone, left, width }) => (
        <div
          key={`break-${zone.start}`}
          style={{
            position: 'absolute',
            left,
            top: 0,
            width,
            height: contentHeight,
            background:
              'repeating-linear-gradient(135deg, rgba(255,255,255,0.06) 0 4px, transparent 4px 8px)',
            borderLeft: '1px dashed rgba(255,255,255,0.28)',
            borderRight: '1px dashed rgba(255,255,255,0.28)',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
      ))}

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
      <div style={{ position: 'relative', zIndex: 2 }}>
        {tls.map((tl, i) => {
          const color = REGION_COLORS[tl.region]
          const barLeft = compressedYearToPixel(tl.startYear, pixelsPerYear)
          const barRight = compressedYearToPixel(tl.endYear, pixelsPerYear)
          const barWidth = Math.max(4, barRight - barLeft)
          const bgStripe = i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent'
          const labelText = `${tl.label} · ${formatYearShort(tl.startYear)} – ${formatYearShort(tl.endYear)}`
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
              {/* Colored duration bar */}
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
