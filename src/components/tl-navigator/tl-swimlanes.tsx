'use client'

import { useMemo } from 'react'
import type { NavigatorTl } from '@/lib/navigator-tls'
import { REGION_COLORS, REGION_LABELS, TIME_MIN, TIME_MAX } from '@/lib/navigator-tls'

interface Props {
  tls: NavigatorTl[]               // pre-filtered and sort-ready
  pixelsPerYear: number
  nameColWidth: number
  rowHeight: number
  axisHeight: number
}

function formatYearShort(y: number): string {
  const abs = Math.abs(Math.round(y))
  return y < 0 ? `${abs}bc` : `${abs}ad`
}

// Nice-number tick interval so labels stay ~80px apart
function tickInterval(pixelsPerYear: number, minSpacingPx = 80): number {
  const raw = minSpacingPx / pixelsPerYear
  const NICE = [1, 2, 5, 10, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000, 10000]
  for (const n of NICE) if (n >= raw) return n
  return 10000
}

export function TlSwimlanes({ tls, pixelsPerYear, nameColWidth, rowHeight, axisHeight }: Props) {
  const totalYears = TIME_MAX - TIME_MIN
  const trackWidth = Math.max(1, Math.round(totalYears * pixelsPerYear))

  const sorted = useMemo(
    () => [...tls].sort((a, b) => a.startYear - b.startYear || a.endYear - b.endYear),
    [tls],
  )

  const ticks = useMemo(() => {
    const interval = tickInterval(pixelsPerYear)
    const first = Math.ceil(TIME_MIN / interval) * interval
    const out: number[] = []
    for (let y = first; y <= TIME_MAX; y += interval) out.push(y)
    return out
  }, [pixelsPerYear])

  return (
    <div style={{ position: 'relative', width: nameColWidth + trackWidth }}>
      {/* Sticky time axis at top */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 4,
          height: axisHeight,
          background: '#0d0d10',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          display: 'flex',
          width: nameColWidth + trackWidth,
        }}
      >
        {/* Sticky name-col corner (blank) */}
        <div
          style={{
            position: 'sticky',
            left: 0,
            zIndex: 5,
            width: nameColWidth,
            height: axisHeight,
            flexShrink: 0,
            background: '#0d0d10',
            borderRight: '1px solid rgba(255,255,255,0.08)',
          }}
        />
        {/* Axis track */}
        <div
          style={{
            position: 'relative',
            width: trackWidth,
            height: axisHeight,
            flexShrink: 0,
          }}
        >
          {ticks.map(y => {
            const left = (y - TIME_MIN) * pixelsPerYear
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
      </div>

      {/* Rows */}
      <div>
        {sorted.map((tl, i) => {
          const color = REGION_COLORS[tl.region]
          const barLeft = (tl.startYear - TIME_MIN) * pixelsPerYear
          const barWidth = Math.max(2, (tl.endYear - tl.startYear) * pixelsPerYear)
          const bgStripe = i % 2 === 0 ? 'rgba(255,255,255,0.015)' : 'transparent'
          return (
            <div
              key={tl.id}
              style={{
                display: 'flex',
                height: rowHeight,
                background: bgStripe,
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                width: nameColWidth + trackWidth,
              }}
            >
              {/* Sticky name column */}
              <div
                style={{
                  position: 'sticky',
                  left: 0,
                  zIndex: 2,
                  width: nameColWidth,
                  flexShrink: 0,
                  height: rowHeight,
                  background: '#0a0a0c',
                  borderRight: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 10px',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 2,
                    background: color,
                    flexShrink: 0,
                  }}
                  title={REGION_LABELS[tl.region]}
                />
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#e5e5e5',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tl.label}
                </div>
              </div>

              {/* Track with bar */}
              <div
                style={{
                  position: 'relative',
                  width: trackWidth,
                  flexShrink: 0,
                  height: rowHeight,
                }}
              >
                <div
                  title={`${tl.label} (${formatYearShort(tl.startYear)}–${formatYearShort(tl.endYear)})`}
                  style={{
                    position: 'absolute',
                    left: barLeft,
                    top: 4,
                    height: rowHeight - 8,
                    width: barWidth,
                    background: color,
                    opacity: 0.82,
                    borderRadius: 3,
                    border: '1px solid rgba(255,255,255,0.15)',
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    padding: barWidth > 60 ? '0 8px' : 0,
                    fontSize: 10,
                    fontWeight: 600,
                    color: '#fff',
                    textShadow: '0 1px 2px rgba(0,0,0,0.6)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {barWidth > 60 && `${formatYearShort(tl.startYear)} – ${formatYearShort(tl.endYear)}`}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
