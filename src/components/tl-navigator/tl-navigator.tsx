'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  NAVIGATOR_TLS,
  REGION_ORDER,
  type NavigatorRegion,
  type NavigatorTl,
} from '@/lib/navigator-tls'
import { STONE_THEME } from '@/lib/navigator-themes'
import { TlFlow } from './tl-flow'
import { ZoneToggles } from './zone-toggles'

const ROW_HEIGHT_FALLBACK = 56
const HEADER_HEIGHT = 88

function sortTls(tls: NavigatorTl[]): NavigatorTl[] {
  return [...tls].sort((a, b) => a.startYear - b.startYear || a.endYear - b.endYear)
}

export function TlNavigator() {
  const [enabledZones, setEnabledZones] = useState<Set<NavigatorRegion>>(
    () => new Set<NavigatorRegion>(REGION_ORDER),
  )

  const theme = STONE_THEME

  // Lock the document while the navigator is mounted. iOS Safari will
  // rubber-band the body even when the only content is a position:fixed
  // child, dragging the entire navigator around the screen — the only
  // reliable defense is to pin html + body in place with position:fixed.
  useEffect(() => {
    const html = document.documentElement
    const body = document.body
    const prev = {
      htmlOverflow: html.style.overflow,
      htmlHeight: html.style.height,
      bodyOverflow: body.style.overflow,
      bodyHeight: body.style.height,
      bodyWidth: body.style.width,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyOverscroll: body.style.overscrollBehavior,
      bodyTouchAction: body.style.touchAction,
    }
    html.style.overflow = 'hidden'
    html.style.height = '100%'
    body.style.overflow = 'hidden'
    body.style.height = '100%'
    body.style.width = '100%'
    body.style.position = 'fixed'
    body.style.top = '0'
    body.style.left = '0'
    body.style.right = '0'
    body.style.overscrollBehavior = 'none'
    body.style.touchAction = 'none'
    return () => {
      html.style.overflow = prev.htmlOverflow
      html.style.height = prev.htmlHeight
      body.style.overflow = prev.bodyOverflow
      body.style.height = prev.bodyHeight
      body.style.width = prev.bodyWidth
      body.style.position = prev.bodyPosition
      body.style.top = prev.bodyTop
      body.style.left = prev.bodyLeft
      body.style.right = prev.bodyRight
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

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '100svh',
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
        </div>
        <ZoneToggles enabled={enabledZones} onToggle={toggleZone} onSolo={soloZone} theme={theme} />
      </div>

      <TlFlow
        tls={sortedTls}
        rowHeight={theme.rowHeight ?? ROW_HEIGHT_FALLBACK}
        theme={theme}
      />
    </div>
  )
}
