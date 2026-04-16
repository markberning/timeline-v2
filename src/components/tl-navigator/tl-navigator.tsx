'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  NAVIGATOR_TLS,
  REGION_ORDER,
  type NavigatorRegion,
  type NavigatorTl,
} from '@/lib/navigator-tls'
import { STONE_THEME } from '@/lib/navigator-themes'
import { TL_CHAINS } from '../../../reference-data/tl-chains'
import { TlFlow } from './tl-flow'
import { ZoneToggles } from './zone-toggles'
import { OfflineLibrarySheet } from './offline-library-sheet'

const ROW_HEIGHT_FALLBACK = 72
const HEADER_HEIGHT = 88

function sortTls(tls: NavigatorTl[]): NavigatorTl[] {
  return [...tls].sort((a, b) => a.startYear - b.startYear || a.endYear - b.endYear)
}

export function TlNavigator() {
  const [enabledZones, setEnabledZones] = useState<Set<NavigatorRegion>>(
    () => new Set<NavigatorRegion>(REGION_ORDER),
  )
  const [soloChainId, setSoloChainId] = useState<string | null>(null)
  const [libraryOpen, setLibraryOpen] = useState(false)

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
      body.style.touchAction = 'pan-y'
      body.style.overscrollBehavior = 'auto'
      body.style.overflow = 'visible'
      body.style.height = ''
      body.style.width = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.position = 'static'
      html.style.overflow = 'visible'
      html.style.height = ''
      void body.offsetHeight
      window.scrollTo(0, 1)
      window.scrollTo(0, 0)
      body.style.touchAction = prev.bodyTouchAction
      body.style.overscrollBehavior = prev.bodyOverscroll
      body.style.overflow = prev.bodyOverflow
      body.style.position = prev.bodyPosition
      html.style.overflow = prev.htmlOverflow
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

  // Pass all tls always; TlFlow handles zone filtering + chain solo animation.
  const allSortedTls = useMemo(() => sortTls(NAVIGATOR_TLS), [])

  const activeChain = useMemo(
    () => (soloChainId ? TL_CHAINS.find(c => c.id === soloChainId) ?? null : null),
    [soloChainId],
  )
  const activeChainCount = useMemo(() => {
    if (!activeChain) return 0
    const known = new Set(NAVIGATOR_TLS.map(t => t.id))
    return activeChain.entries.filter(e => known.has(e.timelineId)).length
  }, [activeChain])

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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.03em' }}>Stuff Happened — A Timeline App</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button
              onClick={() => setLibraryOpen(true)}
              aria-label="Offline library"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 30,
                height: 26,
                padding: 0,
                borderRadius: 999,
                border: `1px solid ${theme.headerBorder}`,
                background: 'rgba(255,255,255,0.06)',
                color: theme.textPrimary,
                opacity: 0.75,
                cursor: 'pointer',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                <path d="M12 10v6 m-2.5-2.5L12 16l2.5-2.5" />
              </svg>
            </button>
            <a
              href="https://v1.stuffhappened.com"
              style={{
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: '0.04em',
                padding: '4px 10px',
                borderRadius: 999,
                border: `1px solid ${theme.headerBorder}`,
                background: 'rgba(255,255,255,0.06)',
                color: theme.textPrimary,
                opacity: 0.75,
                textDecoration: 'none',
                pointerEvents: 'auto',
              }}
            >
              v1 ↗
            </a>
          </div>
        </div>
        {activeChain ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <button
              onClick={(e) => { e.stopPropagation(); setSoloChainId(null) }}
              onPointerDown={(e) => e.stopPropagation()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '5px 10px 5px 10px',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.02em',
                borderRadius: 999,
                border: `1px solid ${theme.toggle.offBorder}`,
                background: 'rgba(255,255,255,0.06)',
                color: theme.textPrimary,
                cursor: 'pointer',
              }}
            >
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
              </svg>
              <span>{activeChain.label}</span>
              <span style={{ opacity: 0.5, fontWeight: 400 }}>·</span>
              <span style={{ opacity: 0.7, fontWeight: 400 }}>{activeChainCount} timelines</span>
              <span style={{ opacity: 0.5, fontSize: 13, marginLeft: 2 }}>×</span>
            </button>
          </div>
        ) : (
          <ZoneToggles enabled={enabledZones} onToggle={toggleZone} onSolo={soloZone} theme={theme} />
        )}
      </div>

      <TlFlow
        tls={allSortedTls}
        enabledZones={enabledZones}
        rowHeight={theme.rowHeight ?? ROW_HEIGHT_FALLBACK}
        theme={theme}
        soloChainId={soloChainId}
        onChainSolo={setSoloChainId}
      />
      {libraryOpen && (
        <OfflineLibrarySheet
          tls={allSortedTls}
          theme={theme}
          onClose={() => setLibraryOpen(false)}
        />
      )}
    </div>
  )
}
