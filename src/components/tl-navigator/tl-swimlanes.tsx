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

const BREAK_BAR_COUNT = 3   // top N rows get the dark gap + dot/line/text marker
const BG_COLOR = '#0a0a0c'  // matches the page background so the gap reads as a hole in the bar
const LABEL_GAP_WIDTH = 18  // narrow dark gap punched through the bar
const GAP_PRE_PAD = 4       // px of bar color visible to the left of the gap
const LINE_EXTEND_DOWN = 22 // px the white line extends past the bar bottom into next row

function formatYearsCount(n: number): string {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k yrs`
  return `${n} yrs`
}

/**
 * One marker per "group" of adjacent top-N rows that share a bar-left
 * (i.e. share a startYear). The marker punches dark holes through each
 * bar in the group, runs a single white line down through the entire
 * group, and shows ONE years label below the bottom row of the group.
 */
interface GapGroupProps {
  left: number
  groupTop: number     // y of the first bar's top in swimlanes-container coords
  groupBottom: number  // y of the last bar's bottom in swimlanes-container coords
  rowTops: number[]    // y of each row's bar top (relative to swimlanes container)
  barHeight: number
  gapWidth: number
  years: number
}

function GapGroup({ left, groupTop, groupBottom, rowTops, barHeight, gapWidth, years }: GapGroupProps) {
  const lineEndY = groupBottom + LINE_EXTEND_DOWN
  return (
    <div
      style={{
        position: 'absolute',
        left,
        top: groupTop,
        width: gapWidth,
        height: lineEndY - groupTop + 14,
        zIndex: 6,
        pointerEvents: 'none',
      }}
    >
      {/* One dark "hole" rect per bar in the group */}
      {rowTops.map((rt, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            left: 0,
            top: rt - groupTop,
            width: gapWidth,
            height: barHeight,
            background: BG_COLOR,
          }}
        />
      ))}
      {/* Tiny dot at the top of the first bar */}
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
      {/* Vertical white line from dot down through every bar and into the row below */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 5,
          height: lineEndY - groupTop - 5,
          width: 1,
          marginLeft: -0.5,
          background: '#fff',
        }}
      />
      {/* Horizontal years label below the line, in the swim lane after the group */}
      <div
        style={{
          position: 'absolute',
          left: -18,
          right: -18,
          top: lineEndY - groupTop + 1,
          textAlign: 'center',
          fontSize: 9,
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '0.02em',
          lineHeight: 1,
          fontVariantNumeric: 'tabular-nums',
          textShadow: '0 0 3px #000, 0 0 2px #000',
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

  // Group consecutive top-N rows that share a bar-left into a single marker.
  // Each group renders one shared dot/line/label, with dark holes punched
  // through every bar in the group at the same X position.
  const groups = useMemo(() => {
    interface Group {
      left: number
      rowTops: number[]
      groupTop: number
      groupBottom: number
      years: number
    }
    const out: Group[] = []
    const limit = Math.min(BREAK_BAR_COUNT, tls.length)
    for (let i = 0; i < limit; i++) {
      const tl = tls[i]
      const barLeft = compressedYearToPixel(tl.startYear, pixelsPerYear)
      const left = barLeft + GAP_PRE_PAD
      const barTop = axisHeight + i * rowHeight + 4
      const barBottom = barTop + (rowHeight - 8)
      const compressedYears = COMPRESSION_ZONES
        .filter(z => z.start >= tl.startYear && z.end <= tl.endYear)
        .reduce((sum, z) => sum + (z.end - z.start), 0)

      const last = out[out.length - 1]
      if (last && Math.abs(last.left - left) < 0.5 && last.years === compressedYears) {
        last.rowTops.push(barTop)
        last.groupBottom = barBottom
      } else {
        out.push({
          left,
          rowTops: [barTop],
          groupTop: barTop,
          groupBottom: barBottom,
          years: compressedYears,
        })
      }
    }
    return out
  }, [tls, pixelsPerYear, rowHeight, axisHeight])

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
          // When the row has a gap, push the label text past the gap so it
          // doesn't sit on top of the dark hole.
          const labelLeft = useGap
            ? barLeft + GAP_PRE_PAD + LABEL_GAP_WIDTH + 6
            : barLeft + 8

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
              {/* Label */}
              <div
                title={`${tl.label} · ${datesText}`}
                style={{
                  position: 'absolute',
                  left: labelLeft,
                  top: 0,
                  height: rowHeight,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
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
                <span style={{ opacity: 0.6 }}>·</span>
                <span>{datesText}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Gap markers — rendered as a separate layer above the rows so the
          line + label can extend visually past the row borders into the
          swim lane below the group. */}
      {groups.map((g, idx) => (
        <GapGroup
          key={idx}
          left={g.left}
          groupTop={g.groupTop}
          groupBottom={g.groupBottom}
          rowTops={g.rowTops}
          barHeight={rowHeight - 8}
          gapWidth={LABEL_GAP_WIDTH}
          years={g.years}
        />
      ))}
    </div>
  )
}
