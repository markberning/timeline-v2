'use client'

import { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import {
  NAVIGATOR_TLS,
  REGION_ORDER,
  type NavigatorRegion,
  type NavigatorTl,
  TIME_MIN,
  TIME_MAX,
} from '@/lib/navigator-tls'
import {
  applyZoom,
  clampPan,
  getVisibleYearRange,
  makeInitialViewport,
  pixelToYear,
  yearToPixel,
  formatYear,
  type Viewport,
} from '@/lib/navigator-coords'
import { RegionBand, assignLanes } from './region-band'

const LANE_HEIGHT = 22
const LANE_PADDING = 6
const TAP_THRESHOLD_PX = 8
const WHEEL_ZOOM_FACTOR = 0.0015

function dist(a: Touch, b: Touch): number {
  const dx = a.clientX - b.clientX
  const dy = a.clientY - b.clientY
  return Math.hypot(dx, dy)
}

export function TlNavigator() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [viewport, setViewport] = useState<Viewport | null>(null)

  // Initialize viewport once we know container width
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const init = (w: number) => {
      if (w <= 0) return
      // Start showing ~2000 years centered on -4000 BCE — only Mesopotamia + Indus initially
      const v = clampPan(makeInitialViewport(w, -4000, 2000))
      setViewport({ ...v, containerWidth: w })
    }
    init(el.clientWidth)

    const ro = new ResizeObserver(() => {
      const w = el.clientWidth
      if (w <= 0) return
      setViewport(prev => {
        if (!prev) {
          const v = clampPan(makeInitialViewport(w, -4000, 2000))
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

  // ── Group TLs by region + compute which regions are visible ──
  const byRegion = useMemo(() => {
    const map: Record<NavigatorRegion, NavigatorTl[]> = {
      'near-east': [], 'africa': [], 'asia': [], 'europe': [], 'americas': [],
    }
    for (const tl of NAVIGATOR_TLS) map[tl.region].push(tl)
    return map
  }, [])

  const { visibleRegions, laneCounts } = useMemo(() => {
    if (!viewport) return { visibleRegions: new Set<NavigatorRegion>(), laneCounts: {} as Record<NavigatorRegion, number> }
    const [vs, ve] = getVisibleYearRange(viewport)
    const vis = new Set<NavigatorRegion>()
    const lanes: Record<NavigatorRegion, number> = {
      'near-east': 0, 'africa': 0, 'asia': 0, 'europe': 0, 'americas': 0,
    }
    for (const r of REGION_ORDER) {
      const inView = byRegion[r].filter(tl => tl.endYear >= vs && tl.startYear <= ve)
      if (inView.length > 0) {
        vis.add(r)
        // Compute lanes for VISIBLE subset so band shrinks when TLs leave
        const assigned = assignLanes(inView)
        const maxLane = Math.max(0, ...Array.from(assigned.values()))
        lanes[r] = maxLane + 1
      }
    }
    return { visibleRegions: vis, laneCounts: lanes }
  }, [viewport, byRegion])

  // Hover year indicator
  const [hoverYear, setHoverYear] = useState<number | null>(null)
  const onMouseMoveYear = (e: React.MouseEvent) => {
    if (!viewport || !containerRef.current || viewport.pixelsPerYear <= 0) return
    const rect = containerRef.current.getBoundingClientRect()
    const y = pixelToYear(e.clientX - rect.left, viewport)
    if (Number.isFinite(y)) setHoverYear(y)
  }

  const [vs, ve] = viewport ? getVisibleYearRange(viewport) : [TIME_MIN, TIME_MAX]

  return (
    <div
      ref={containerRef}
      onWheel={onWheel}
      onPointerDown={onPointerDown}
      onPointerMove={(e) => { onPointerMove(e); onMouseMoveYear(e) }}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onMouseLeave={() => setHoverYear(null)}
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
      {/* Header */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          padding: '12px 14px 10px',
          color: '#e5e5e5',
          pointerEvents: 'none',
          zIndex: 10,
          background: 'linear-gradient(to bottom, rgba(10,10,12,0.92), rgba(10,10,12,0))',
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.03em' }}>Timeline Navigator</div>
        <div style={{ fontSize: 10, color: '#888', marginTop: 2, fontVariantNumeric: 'tabular-nums' }}>
          {formatYear(vs)} — {formatYear(ve)}
          {hoverYear != null && <span style={{ marginLeft: 12, color: '#bbb' }}>● {formatYear(hoverYear)}</span>}
        </div>
      </div>

      {/* Bands */}
      {viewport && (
        <div
          style={{
            position: 'absolute',
            top: 52,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {REGION_ORDER.map(r => (
            <RegionBand
              key={r}
              region={r}
              tls={byRegion[r]}
              viewport={viewport}
              visibleLaneCount={laneCounts[r] ?? 0}
              isVisible={visibleRegions.has(r)}
              laneHeight={LANE_HEIGHT}
              lanePadding={LANE_PADDING}
            />
          ))}
        </div>
      )}

      {/* Center crosshair for hover year */}
      {hoverYear != null && viewport && (
        <div
          style={{
            position: 'absolute',
            top: 52,
            bottom: 0,
            width: 1,
            background: 'rgba(255,255,255,0.12)',
            left: yearToPixel(hoverYear, viewport),
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  )
}
