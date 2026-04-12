'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  NAVIGATOR_TLS,
  REGION_ORDER,
  type NavigatorRegion,
  type NavigatorTl,
  compressedPixelToYear,
  compressedYearToPixel,
  compressedTotalWidth,
} from '@/lib/navigator-tls'
import { STONE_THEME } from '@/lib/navigator-themes'
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

  const theme = STONE_THEME

  // Lock document scroll/overscroll while the navigator is mounted so the
  // page body can't rubber-band, drag the fixed navigator around, or trap
  // touches outside the swimlane scroll container.
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const prev = {
      htmlOverflow: html.style.overflow,
      htmlHeight: html.style.height,
      bodyOverflow: body.style.overflow,
      bodyHeight: body.style.height,
      bodyOverscroll: body.style.overscrollBehavior,
      bodyTouchAction: body.style.touchAction,
    }
    html.style.overflow = 'hidden'
    html.style.height = '100%'
    body.style.overflow = 'hidden'
    body.style.height = '100%'
    body.style.overscrollBehavior = 'none'
    body.style.touchAction = 'none'
    return () => {
      html.style.overflow = prev.htmlOverflow
      html.style.height = prev.htmlHeight
      body.style.overflow = prev.bodyOverflow
      body.style.height = prev.bodyHeight
      body.style.overscrollBehavior = prev.bodyOverscroll
      body.style.touchAction = prev.bodyTouchAction
    }
  }, [])

  const toggleZone = useCallback((r: NavigatorRegion) => {
    setEnabledZones(prev => {
      const next = new Set(prev)
      if (next.has(r)) next.delete(r); else next.add(r)
      return next
    })
  }, [])

  const soloZone = useCallback((r: NavigatorRegion) => {
    setEnabledZones(prev => {
      if (prev.size === 1 && prev.has(r)) return new Set<NavigatorRegion>(REGION_ORDER)
      return new Set<NavigatorRegion>([r])
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
    const widthAtUnit = compressedTotalWidth(1)
    const next = el.clientWidth / widthAtUnit
    setPixelsPerYear(Math.max(MIN_PPY, next))
    requestAnimationFrame(() => { el.scrollLeft = 0 })
  }, [])

  const zoomBtn: React.CSSProperties = {
    width: 30,
    height: 26,
    borderRadius: 5,
    border: theme.zoomBtn.border,
    background: theme.zoomBtn.bg,
    color: theme.zoomBtn.color,
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1,
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: theme.appBg,
        color: theme.textPrimary,
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
          borderBottom: `1px solid ${theme.headerBorder}`,
          background: theme.headerBg,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.03em' }}>Timeline Navigator</div>
          <div style={{ flex: 1 }} />
          <button style={zoomBtn} onClick={() => zoomBy(ZOOM_STEP)}>+</button>
          <button style={zoomBtn} onClick={() => zoomBy(1 / ZOOM_STEP)}>−</button>
          <button style={zoomBtn} onClick={fitAll}>fit</button>
        </div>
        <ZoneToggles enabled={enabledZones} onToggle={toggleZone} onSolo={soloZone} theme={theme} />
      </div>

      {/* Scrolling swimlanes area */}
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x pan-y',
          overscrollBehavior: 'contain',
        }}
      >
        <TlSwimlanes
          tls={sortedTls}
          pixelsPerYear={pixelsPerYear}
          rowHeight={theme.rowHeight ?? ROW_HEIGHT}
          axisHeight={AXIS_HEIGHT}
          theme={theme}
        />
      </div>
    </div>
  )
}
