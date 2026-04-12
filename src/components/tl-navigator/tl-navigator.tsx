'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  NAVIGATOR_TLS,
  REGION_ORDER,
  TIME_MAX,
  TIME_MIN,
  type NavigatorRegion,
  type NavigatorTl,
} from '@/lib/navigator-tls'
import { TlSwimlanes } from './tl-swimlanes'
import { ZoneToggles } from './zone-toggles'

const ROW_HEIGHT = 30
const AXIS_HEIGHT = 28
const HEADER_HEIGHT = 88
const FOLLOW_LEFT_FRACTION = 0.15  // topmost row's start year sits 15% from viewport left

const MIN_PPY = 0.005
const MAX_PPY = 8
const ZOOM_STEP = 1.5
const TOTAL_YEARS = TIME_MAX - TIME_MIN

function sortTls(tls: NavigatorTl[]): NavigatorTl[] {
  return [...tls].sort((a, b) => a.startYear - b.startYear || a.endYear - b.endYear)
}

export function TlNavigator() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [pixelsPerYear, setPixelsPerYear] = useState<number>(0.18)
  const [enabledZones, setEnabledZones] = useState<Set<NavigatorRegion>>(
    () => new Set<NavigatorRegion>(REGION_ORDER),
  )
  const [followMode, setFollowMode] = useState<boolean>(false)

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
      // Preserve the year at horizontal viewport center.
      const visibleWidth = el.clientWidth
      const centerPx = el.scrollLeft + visibleWidth / 2
      const yearAtCenter = TIME_MIN + centerPx / prev
      const newCenterPx = (yearAtCenter - TIME_MIN) * next
      const newScrollLeft = Math.max(0, newCenterPx - visibleWidth / 2)
      requestAnimationFrame(() => { el.scrollLeft = newScrollLeft })
      return next
    })
  }, [])

  const fitAll = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const next = el.clientWidth / TOTAL_YEARS
    setPixelsPerYear(Math.max(MIN_PPY, next))
    requestAnimationFrame(() => { el.scrollLeft = 0 })
  }, [])

  // Follow mode: on vertical scroll, slide horizontal scroll so a year
  // interpolated between the topmost and next row's start years sits at
  // FOLLOW_LEFT_FRACTION of the viewport width. The fractional interpolation
  // makes horizontal motion continuous with vertical motion, so the slide
  // feels buttery instead of snapping at each row boundary.
  useEffect(() => {
    if (!followMode) return
    const el = scrollRef.current
    if (!el) return

    let raf = 0
    const update = () => {
      raf = 0
      if (!el) return
      const fracIndex = Math.max(0, el.scrollTop / ROW_HEIGHT)
      const i0 = Math.min(sortedTls.length - 1, Math.floor(fracIndex))
      const i1 = Math.min(sortedTls.length - 1, i0 + 1)
      const tl0 = sortedTls[i0]
      const tl1 = sortedTls[i1]
      if (!tl0) return
      const frac = fracIndex - i0
      const targetYear = tl0.startYear + (tl1.startYear - tl0.startYear) * frac
      const targetYearPx = (targetYear - TIME_MIN) * pixelsPerYear
      const targetScrollLeft = Math.max(0, targetYearPx - el.clientWidth * FOLLOW_LEFT_FRACTION)
      if (Math.abs(el.scrollLeft - targetScrollLeft) > 0.5) {
        el.scrollLeft = targetScrollLeft
      }
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(update)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    update()  // snap to initial position on enable
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [followMode, sortedTls, pixelsPerYear])

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
          <button
            style={{ ...zoomBtn, width: 56, borderColor: followMode ? '#7c3aed' : zoomBtn.border?.toString().slice(-18) || 'rgba(255,255,255,0.18)', background: followMode ? 'rgba(124,58,237,0.22)' : 'transparent' }}
            onClick={() => setFollowMode(f => !f)}
            title="Follow mode: as you scroll down, horizontal scroll slides so new TLs keep entering from the right"
          >
            follow
          </button>
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
