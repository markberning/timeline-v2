'use client'

import { useMemo } from 'react'
import type { NavigatorTl } from '@/lib/navigator-tls'
import {
  TIME_MIN,
  TIME_MAX,
  COMPRESSION_ZONES,
  compressedYearToPixel,
  compressedTotalWidth,
} from '@/lib/navigator-tls'
import type { NavigatorTheme } from '@/lib/navigator-themes'

interface Props {
  tls: NavigatorTl[]               // pre-filtered AND pre-sorted by start year
  pixelsPerYear: number
  rowHeight: number
  axisHeight: number
  theme: NavigatorTheme
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

export function TlSwimlanes({ tls, pixelsPerYear, rowHeight, axisHeight, theme }: Props) {
  const trackWidth = Math.max(1, Math.round(compressedTotalWidth(pixelsPerYear)))

  const ticks = useMemo(() => {
    const interval = tickInterval(pixelsPerYear)
    const first = Math.ceil(TIME_MIN / interval) * interval
    const out: number[] = []
    for (let y = first; y <= TIME_MAX; y += interval) {
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
          background: theme.axisBg,
          borderBottom: `1px solid ${theme.axisBottomBorder}`,
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
                background: theme.axisGridLine,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  left: 4,
                  top: 4,
                  fontSize: 12,
                  color: theme.axisText,
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
          const regionColor = theme.regionColors[tl.region]
          const barLeft = compressedYearToPixel(tl.startYear, pixelsPerYear)
          const barRight = compressedYearToPixel(tl.endYear, pixelsPerYear)
          const barWidth = Math.max(4, barRight - barLeft)
          const bgStripe = i % 2 === 0 ? theme.rowStripe : 'transparent'
          const datesText = `${formatYearShort(tl.startYear)} – ${formatYearShort(tl.endYear)}`

          // Bar fill differs by style
          const isFilled = theme.bar.style === 'filled'
          const barFill = isFilled ? regionColor : (theme.bar.fill ?? regionColor)
          const isSplit = theme.rowLayout === 'split'
          const barLaneHeight = Math.floor(rowHeight / 3)
          const barTop = isSplit ? 0 : 4
          const barHeight = isSplit ? barLaneHeight : rowHeight - 8
          const labelTop = isSplit ? barLaneHeight : 0
          const labelHeight = isSplit ? rowHeight - barLaneHeight : rowHeight
          const labelLeft = isSplit ? barLeft + 2 : barLeft + 8
          const labelFontSize = isSplit ? 13 : 13

          return (
            <div
              key={tl.id}
              style={{
                position: 'relative',
                height: rowHeight,
                background: bgStripe,
                borderBottom: `1px solid ${theme.rowBorder}`,
                width: trackWidth,
              }}
            >
              {/* Bar */}
              {theme.bar.style === 'line' ? (
                <div
                  style={{
                    position: 'absolute',
                    left: barLeft,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    gap: 2,
                    pointerEvents: 'none',
                  }}
                >
                  <div
                    style={{
                      height: theme.bar.accentWidth ?? 3,
                      width: barWidth,
                      background: regionColor,
                      borderRadius: theme.bar.radius,
                    }}
                  />
                  <div
                    title={`${tl.label} · ${datesText}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 600,
                      color: theme.label.color,
                      textShadow: theme.label.shadow,
                      whiteSpace: 'nowrap',
                      paddingLeft: 1,
                    }}
                  >
                    <span
                      style={{
                        width: 7,
                        height: 7,
                        borderRadius: '50%',
                        background: regionColor,
                        flexShrink: 0,
                      }}
                    />
                    <span>{tl.label}</span>
                    <span style={{ opacity: 0.35 }}>·</span>
                    <span style={{ opacity: 0.5, fontWeight: 400, fontSize: 11 }}>{datesText}</span>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    position: 'absolute',
                    left: barLeft,
                    top: barTop,
                    height: barHeight,
                    width: barWidth,
                    background: barFill,
                    opacity: theme.bar.opacity,
                    borderRadius: theme.bar.radius,
                    border: theme.bar.border,
                    boxShadow: theme.bar.shadow,
                    boxSizing: 'border-box',
                    overflow: 'hidden',
                  }}
                >
                  {/* stripe-left accent */}
                  {theme.bar.style === 'stripe-left' && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: theme.bar.accentWidth ?? 4,
                        background: regionColor,
                      }}
                    />
                  )}
                  {/* carved: thin colored top edge */}
                  {theme.bar.style === 'carved' && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: theme.bar.accentWidth ?? 3,
                        background: regionColor,
                        opacity: 0.85,
                      }}
                    />
                  )}
                </div>
              )}
              {/* Label (skipped for line style — rendered inline with the line) */}
              {theme.bar.style !== 'line' && <div
                title={`${tl.label} · ${datesText}`}
                style={{
                  position: 'absolute',
                  left: labelLeft,
                  top: labelTop,
                  height: labelHeight,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  fontSize: labelFontSize,
                  fontWeight: 600,
                  color: isSplit ? theme.textPrimary : theme.label.color,
                  textShadow: isSplit ? 'none' : theme.label.shadow,
                  whiteSpace: 'nowrap',
                  pointerEvents: 'none',
                }}
              >
                <span>{tl.label}</span>
                <span style={{ opacity: 0.6 }}>·</span>
                <span>{datesText}</span>
              </div>}
            </div>
          )
        })}
      </div>
    </div>
  )
}
