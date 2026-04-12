'use client'

import { useCallback, useMemo, useRef, useState } from 'react'
import {
  NAVIGATOR_TLS,
  REGION_ORDER,
  type NavigatorRegion,
  type NavigatorTl,
  compressedPixelToYear,
  compressedYearToPixel,
  compressedTotalWidth,
} from '@/lib/navigator-tls'
import { TlSwimlanes } from './tl-swimlanes'
import { ZoneToggles } from './zone-toggles'

const ROW_HEIGHT = 45
const AXIS_HEIGHT = 28
const HEADER_HEIGHT = 88

const MIN_PPY = 0.005
const MAX_PPY = 8
const ZOOM_STEP = 1.5

function sortTls(tls: NavigatorTl[]): NavigatorTl[] {
  return [...tls].sort((a, b) => a.startYear - b.startYear || a.endYear - b.endYear)
}

export function TlNavigator() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [pixelsPerYear, setPixelsPerYear] = useState<number>(0.18)
  const [enabledZones, setEnabledZones] = useState<Set<NavigatorRegion>>(
    () => new Set<NavigatorRegion>(REGION_ORDER),
  )
  const toggleZone = useCallback((r: NavigatorRegion) => {
    setEnabledZones(prev => {
      const next = new Set(prev)
      if (next.has(r)) next.delete(r); else next.add(r)
      return next
    })
  }, [])

  const sortedTls = useMemo(
    () => sortTls(NAVIGATOR_TLS.filter(tl => enabledZones.has(tl.region))),
    [enabledZones],
  )

  const zoomBy = useCallback((factor: number) => {
    const el = scrollRef.current
    if (!el) return
    setPixelsPerYear(prev => {
      const next = Math.min(MAX_PPY, Math.max(MIN_PPY, prev * factor))
      if (next === prev) return prev
      // Preserve the year at horizontal viewport center under the compressed
      // mapping.
      const visibleWidth = el.clientWidth
      const centerPx = el.scrollLeft + visibleWidth / 2
      const yearAtCenter = compressedPixelToYear(centerPx, prev)
      const newCenterPx = compressedYearToPixel(yearAtCenter, next)
      const newScrollLeft = Math.max(0, newCenterPx - visibleWidth / 2)
      requestAnimationFrame(() => { el.scrollLeft = newScrollLeft })
      return next
    })
  }, [])

  const fitAll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    // compressedTotalWidth is linear in ppy — solve directly.
    const widthAtUnit = compressedTotalWidth(1)
    const next = el.clientWidth / widthAtUnit
    setPixelsPerYear(Math.max(MIN_PPY, next))
    requestAnimationFrame(() => { el.scrollLeft = 0 })
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0a0a0c',
        color: '#e5e5e5',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div
        style={{
          height: HEADER_HEIGHT,
          flexShrink: 0,
          padding: '10px 12px',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          background: '#0d0d10',
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.03em' }}>Timeline Navigator</div>
          <div style={{ flex: 1 }} />
          <button style={zoomBtn} onClick={() => zoomBy(ZOOM_STEP)}>+</button>
          <button style={zoomBtn} onClick={() => zoomBy(1 / ZOOM_STEP)}>−</button>
          <button style={zoomBtn} onClick={fitAll}>fit</button>
        </div>
        <ZoneToggles enabled={enabledZones} onToggle={toggleZone} />
      </div>

      {/* Scrolling swimlanes area */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <TlSwimlanes
          tls={sortedTls}
          pixelsPerYear={pixelsPerYear}
          rowHeight={ROW_HEIGHT}
          axisHeight={AXIS_HEIGHT}
        />
      </div>
    </div>
  )
}

const zoomBtn: React.CSSProperties = {
  width: 30,
  height: 26,
  borderRadius: 5,
  border: '1px solid rgba(255,255,255,0.18)',
  background: 'transparent',
  color: '#e5e5e5',
  fontSize: 14,
  fontWeight: 700,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 1,
}
