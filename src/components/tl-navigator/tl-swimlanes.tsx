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

const BREAK_BAR_COUNT = 3  // top N rows get a dark gap before the label text
const BG_COLOR = '#0a0a0c' // matches the page background so the gap reads as a hole in the bar
const LABEL_GAP_WIDTH = 50 // pixel width of the dark gap (holds dot, line, horizontal years text)
const GAP_PRE_PAD = 4      // px of bar color visible to the left of the gap

function formatYearsCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k yrs`
  return `${n} yrs`
}

interface DotLineGapProps {
  years: number
  width: number
  height: number
}

function DotLineGap({ years, width, height }: DotLineGapProps) {
  return (
    <div
      style={{
        position: 'relative',
        width,
        height,
        background: BG_COLOR,
        flexShrink: 0,
      }}
    >
      {/* Tiny dot at the top center */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 2,
          width: 4,
          height: 4,
          marginLeft: -2,
          borderRadius: '50%',
          background: '#fff',
        }}
      />
      {/* Long vertical line from dot down to just above the text */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 5,
          bottom: 12,
          width: 1,
          marginLeft: -0.5,
          background: '#fff',
        }}
      />
      {/* Horizontal years text at the bottom of the gap */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 1,
          textAlign: 'center',
          fontSize: 9,
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '0.02em',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
          textShadow: '0 0 2px #000',
        }}
      >
        {formatYearsCount(years)}
      </div>
    </div>
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
          const datesText = `${formatYearShort(tl.startYear)} – ${formatYearShort(tl.endYear)}`
          const useGap = i < BREAK_BAR_COUNT
          // Total years compressed within this bar's span — what the gap "represents"
          const compressedYears = useGap
            ? COMPRESSION_ZONES
                .filter(z => z.start >= tl.startYear && z.end <= tl.endYear)
                .reduce((sum, z) => sum + (z.end - z.start), 0)
            : 0

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
              {/* Label — gap (if any) sits before the text. Because the gap is
                  anchored to the bar's left edge, two rows whose bars start at
                  the same year (e.g. Ancient China & Indus Valley at -7000)
                  get gaps in the same X position automatically. */}
              <div
                title={`${tl.label} · ${datesText}${useGap ? ` (~${compressedYears.toLocaleString()} yrs compressed)` : ''}`}
                style={{
                  position: 'absolute',
                  left: barLeft + GAP_PRE_PAD,
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
                {useGap && (
                  <DotLineGap
                    years={compressedYears}
                    width={LABEL_GAP_WIDTH}
                    height={rowHeight - 6}
                  />
                )}
                <span>{tl.label}</span>
                <span style={{ opacity: 0.6 }}>·</span>
                <span>{datesText}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
