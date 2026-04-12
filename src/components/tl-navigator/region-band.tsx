'use client'

import type { NavigatorTl, NavigatorRegion } from '@/lib/navigator-tls'
import { REGION_LABELS, REGION_COLORS } from '@/lib/navigator-tls'
import type { Viewport } from '@/lib/navigator-coords'
import { SpanBar } from './span-bar'

interface Props {
  region: NavigatorRegion
  tls: NavigatorTl[]  // all TLs in this region (not just visible)
  viewport: Viewport
  visibleLaneCount: number  // computed by parent from visible TLs
  isVisible: boolean
  laneHeight: number
  lanePadding: number
}

// Greedy lane assignment: each TL goes in the lowest-index lane whose last
// occupant ends before this TL starts.
export function assignLanes(tls: NavigatorTl[]): Map<string, number> {
  const lanes: number[] = []  // end year of last occupant per lane
  const assignment = new Map<string, number>()
  const sorted = [...tls].sort((a, b) => a.startYear - b.startYear)
  for (const tl of sorted) {
    let placed = false
    for (let i = 0; i < lanes.length; i++) {
      if (lanes[i] <= tl.startYear) {
        lanes[i] = tl.endYear
        assignment.set(tl.id, i)
        placed = true
        break
      }
    }
    if (!placed) {
      lanes.push(tl.endYear)
      assignment.set(tl.id, lanes.length - 1)
    }
  }
  return assignment
}

export function RegionBand({
  region,
  tls,
  viewport,
  visibleLaneCount,
  isVisible,
  laneHeight,
  lanePadding,
}: Props) {
  const lanes = assignLanes(tls)
  const color = REGION_COLORS[region]

  // Band height animates: 0 when no lanes visible, else laneCount * laneHeight + padding.
  const bandHeight = isVisible ? visibleLaneCount * laneHeight + lanePadding * 2 + 18 : 0

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: bandHeight,
        opacity: isVisible ? 1 : 0,
        overflow: 'hidden',
        transition: 'height 320ms cubic-bezier(.2,.8,.2,1), opacity 260ms ease',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* Region label */}
      <div
        style={{
          position: 'absolute',
          left: 10,
          top: 6,
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: color,
          pointerEvents: 'none',
          zIndex: 2,
          textShadow: '0 1px 2px rgba(0,0,0,0.8)',
        }}
      >
        {REGION_LABELS[region]}
      </div>

      {tls.map(tl => {
        const lane = lanes.get(tl.id) ?? 0
        const top = 18 + lanePadding + lane * laneHeight
        return (
          <SpanBar
            key={tl.id}
            tl={tl}
            viewport={viewport}
            top={top}
            height={laneHeight - 4}
            color={color}
          />
        )
      })}
    </div>
  )
}
