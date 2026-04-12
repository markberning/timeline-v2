'use client'

import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import {
  NAVIGATOR_TLS,
  REGION_ORDER,
  type NavigatorRegion,
  TIME_MIN,
  TIME_MAX,
} from '@/lib/navigator-tls'
import {
  applyZoom,
  clampPan,
  getVisibleYearRange,
  makeInitialViewport,
  formatYear,
  type Viewport,
} from '@/lib/navigator-coords'
import { TlDotTrack } from './tl-dot-track'
import { ZoneToggles } from './zone-toggles'

const TAP_THRESHOLD_PX = 8
const WHEEL_ZOOM_FACTOR = 0.0015
const HEADER_HEIGHT = 84        // room for title + toggle pills
const AXIS_Y = HEADER_HEIGHT + 20
const ROW_HEIGHT = 18
const ROW_GAP = 14

function dist(a: Touch, b: Touch): number {
  const dx = a.clientX - b.clientX
  const dy = a.clientY - b.clientY
  return Math.hypot(dx, dy)
}

export function TlNavigator() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [viewport, setViewport] = useState<Viewport | null>(null)
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

  // Initialize viewport once we know container width.
  // Start view: 5000 BCE → 2050 CE so nearly everything is visible, and user can
  // zoom in wherever they want.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const init = (w: number) => {
      if (w <= 0) return
      const v = clampPan(makeInitialViewport(w, -1500, 7500))
      setViewport({ ...v, containerWidth: w })
    }
    init(el.clientWidth)

    const ro = new ResizeObserver(() => {
      const w = el.clientWidth
      if (w <= 0) return
      setViewport(prev => {
        if (!prev) {
          const v = clampPan(makeInitialViewport(w, -1500, 7500))
          return { ...v, containerWidth: w }
        }
        return clampPan({ ...prev, containerWidth: w })
      })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Gesture state (refs — no re-renders for in-flight gestures)
  // axis: null until the user moves far enough to commit to horizontal (pan) or vertical (zoom)
  const pointerRef = useRef<{
    down: boolean
    startX: number; startY: number
    lastX: number; lastY: number
    anchorX: number  // pixel X where the gesture started — used as zoom anchor for vertical drags
    axis: 'x' | 'y' | null
    moved: boolean
  }>({
    down: false, startX: 0, startY: 0, lastX: 0, lastY: 0, anchorX: 0, axis: null, moved: false,
  })
  const touchRef = useRef<{ dist: number; mid: number } | null>(null)

  const AXIS_COMMIT_PX = 6
  const VERTICAL_ZOOM_FACTOR = 0.008  // per-pixel zoom rate for single-finger up/down drag

  const setV = useCallback((updater: (v: Viewport) => Viewport) => {
    setViewport(prev => prev ? clampPan(updater(prev)) : prev)
  }, [])

  // ── Wheel (desktop) ──
  const onWheel = useCallback((e: React.WheelEvent) => {
    if (!containerRef.current) return
    e.preventDefault()
    const rect = containerRef.current.getBoundingClientRect()
    const anchorX = e.clientX - rect.left
    const factor = 1 - e.deltaY * WHEEL_ZOOM_FACTOR * (e.ctrlKey ? 3 : 1)
    setV(v => applyZoom(v, factor, anchorX))
  }, [setV])

  // ── Mouse drag pan (desktop mouse — horizontal pan only, wheel handles zoom) ──
  const onPointerDown = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return  // touches handled separately
    const rect = containerRef.current?.getBoundingClientRect()
    const anchorX = rect ? e.clientX - rect.left : 0
    pointerRef.current = {
      down: true,
      startX: e.clientX, startY: e.clientY,
      lastX: e.clientX, lastY: e.clientY,
      anchorX,
      axis: 'x',  // mouse drag is always pan
      moved: false,
    }
    ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return
    const p = pointerRef.current
    if (!p.down) return
    const dx = e.clientX - p.lastX
    p.lastX = e.clientX
    if (Math.abs(e.clientX - p.startX) > TAP_THRESHOLD_PX || Math.abs(e.clientY - p.startY) > TAP_THRESHOLD_PX) {
      p.moved = true
    }
    if (p.moved) setV(v => ({ ...v, panOffsetPx: v.panOffsetPx + dx }))
  }, [setV])

  const onPointerUp = useCallback((e: React.PointerEvent) => {
    if (e.pointerType === 'touch') return
    pointerRef.current.down = false
  }, [])

  // ── Touch gestures (pan + pinch) — attached via native listener for passive:false ──
  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        const t = e.touches[0]
        const rect = el.getBoundingClientRect()
        pointerRef.current = {
          down: true,
          startX: t.clientX, startY: t.clientY,
          lastX: t.clientX, lastY: t.clientY,
          anchorX: t.clientX - rect.left,
          axis: null,  // decided on first significant move
          moved: false,
        }
        touchRef.current = null
      } else if (e.touches.length === 2) {
        const [a, b] = [e.touches[0], e.touches[1]]
        const rect = el.getBoundingClientRect()
        touchRef.current = {
          dist: dist(a, b),
          mid: (a.clientX + b.clientX) / 2 - rect.left,
        }
        pointerRef.current.down = false
      }
    }

    const onTouchMove = (e: TouchEvent) => {
      // Two-finger pinch: zoom + pan by pinch midpoint
      if (e.touches.length === 2 && touchRef.current) {
        e.preventDefault()
        const [a, b] = [e.touches[0], e.touches[1]]
        const rect = el.getBoundingClientRect()
        const newDist = dist(a, b)
        const factor = newDist / touchRef.current.dist
        const newMid = (a.clientX + b.clientX) / 2 - rect.left
        const panDelta = newMid - touchRef.current.mid
        setV(v => {
          const zoomed = applyZoom(v, factor, newMid)
          return { ...zoomed, panOffsetPx: zoomed.panOffsetPx + panDelta }
        })
        touchRef.current = { dist: newDist, mid: newMid }
        return
      }

      // Single-finger: axis-locked — horizontal = pan, vertical = zoom
      if (e.touches.length === 1 && pointerRef.current.down) {
        e.preventDefault()
        const p = pointerRef.current
        const t = e.touches[0]
        const dx = t.clientX - p.lastX
        const dy = t.clientY - p.lastY
        p.lastX = t.clientX
        p.lastY = t.clientY

        // Decide axis once the user has moved past the commit threshold
        if (p.axis === null) {
          const totalDx = Math.abs(t.clientX - p.startX)
          const totalDy = Math.abs(t.clientY - p.startY)
          if (Math.max(totalDx, totalDy) < AXIS_COMMIT_PX) return
          p.axis = totalDx >= totalDy ? 'x' : 'y'
          p.moved = true
        }

        if (p.axis === 'x') {
          setV(v => ({ ...v, panOffsetPx: v.panOffsetPx + dx }))
        } else {
          // Vertical drag: drag DOWN (positive dy) zooms OUT, drag UP zooms IN.
          // Anchor the zoom at the finger's current X so the year under it stays put.
          const rect = el.getBoundingClientRect()
          const anchorX = t.clientX - rect.left
          const factor = 1 - dy * VERTICAL_ZOOM_FACTOR
          setV(v => applyZoom(v, factor, anchorX))
        }
      }
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2) touchRef.current = null
      if (e.touches.length === 0) pointerRef.current.down = false
    }

    el.addEventListener('touchstart', onTouchStart, { passive: false })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd)
    el.addEventListener('touchcancel', onTouchEnd)
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      el.removeEventListener('touchcancel', onTouchEnd)
    }
  }, [setV])

  // TLs from enabled zones only
  const enabledTls = useMemo(
    () => NAVIGATOR_TLS.filter(tl => enabledZones.has(tl.region)),
    [enabledZones],
  )

  const [vs, ve] = viewport ? getVisibleYearRange(viewport) : [TIME_MIN, TIME_MAX]

  return (
    <div
      ref={containerRef}
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      style={{
        position: 'fixed',
        inset: 0,
        overflow: 'hidden',
        background: '#0a0a0c',
        touchAction: 'none',
        cursor: pointerRef.current.down && pointerRef.current.moved ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
    >
      {/* Header: title + zone toggles */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '10px 12px',
          color: '#e5e5e5',
          zIndex: 10,
          background: 'linear-gradient(to bottom, rgba(10,10,12,0.95), rgba(10,10,12,0.75) 70%, rgba(10,10,12,0))',
          pointerEvents: 'none',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 8 }}>
          <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.03em' }}>Timeline Navigator</div>
          <div style={{ fontSize: 10, color: '#888', fontVariantNumeric: 'tabular-nums' }}>
            {formatYear(vs)} — {formatYear(ve)}
          </div>
        </div>
        <ZoneToggles enabled={enabledZones} onToggle={toggleZone} />
      </div>

      {/* Dot track */}
      {viewport && (
        <TlDotTrack
          tls={enabledTls}
          viewport={viewport}
          axisY={AXIS_Y}
          rowHeight={ROW_HEIGHT}
          rowGap={ROW_GAP}
        />
      )}
    </div>
  )
}
