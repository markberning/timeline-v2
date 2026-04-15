'use client'

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { NavigatorTl } from '@/lib/navigator-tls'
import type { NavigatorTheme } from '@/lib/navigator-themes'

interface Props {
  tls: NavigatorTl[]              // pre-filtered AND pre-sorted by start year
  rowHeight: number
  theme: NavigatorTheme
}

const MIN_BAR = 36
const TARGET_MAX_FRAC = 0.7
const MAX_INDENT_FRAC = 0.3          // scroll-dependent diagonal contribution
const H_GAP_SCALE = 0.38             // px of horizontal offset per sqrt(year-gap)
const ENTRY_ZONE_FRAC = 0.33         // bottom third of viewport is the fly-in zone
const ENTRY_X_FRAC = 0.85            // new rows start at 85% of viewport width
const FRICTION = 0.94
const MIN_VELOCITY = 0.05

function formatYearRange(start: number, end: number): string {
  const startBce = start < 0
  const endBce = end < 0
  const sa = Math.abs(Math.round(start))
  const ea = Math.abs(Math.round(end))
  if (startBce && endBce) return `${sa}–${ea} BCE`
  if (!startBce && !endBce) return `${sa}–${ea} CE`
  return `${sa} BCE – ${ea} CE`
}

export function TlFlow({ tls, rowHeight, theme }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 })

  // All scroll state lives in refs so we never re-render React on scroll.
  const scrollOffsetRef = useRef(0)
  const velocityRef = useRef(0)
  const lastTouchYRef = useRef(0)
  const lastTouchTimeRef = useRef(0)
  const isTouchingRef = useRef(false)
  const momentumRafRef = useRef(0)

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    setViewportSize({ width: el.clientWidth, height: el.clientHeight })
    const ro = new ResizeObserver(() => {
      setViewportSize({ width: el.clientWidth, height: el.clientHeight })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Per-row horizontal anchor: raw cumulative sqrt(year-gap). Vertical
  // rhythm is uniform (i * rowHeight); the year-gap signal rides in
  // horizontal offset only.
  const rowLayout = useMemo(() => {
    const n = tls.length
    const cumGap = new Array<number>(n).fill(0)
    for (let i = 1; i < n; i++) {
      const gap = Math.max(0, tls[i].startYear - tls[i - 1].startYear)
      cumGap[i] = cumGap[i - 1] + Math.sqrt(gap)
    }
    const totalHeight = n * rowHeight
    return { cumGap, totalHeight }
  }, [tls, rowHeight])

  // Bar width per TL: sqrt-compressed duration, normalized so the longest
  // TL fills ~70% of the viewport width. Constant per scroll.
  const barWidths = useMemo(() => {
    if (tls.length === 0 || viewportSize.width === 0) return new Array(tls.length).fill(MIN_BAR)
    const sqrts = tls.map(tl => Math.sqrt(Math.max(1, tl.endYear - tl.startYear)))
    const maxSqrt = Math.max(...sqrts)
    const targetMax = viewportSize.width * TARGET_MAX_FRAC
    const scale = maxSqrt > 0 ? targetMax / maxSqrt : 0
    return sqrts.map(s => Math.max(MIN_BAR, s * scale))
  }, [tls, viewportSize.width])

  const barRefs = useRef<(HTMLDivElement | null)[]>([])
  useEffect(() => {
    barRefs.current.length = tls.length
  }, [tls.length])

  // Single update + listener setup pass. Re-runs whenever sizing or
  // content changes; the touch/wheel handlers + render closure all read
  // the latest values from this scope.
  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el || viewportSize.width === 0 || viewportSize.height === 0) return

    const vh = viewportSize.height
    const vw = viewportSize.width
    const halfRow = rowHeight / 2
    const bottomPadding = rowHeight  // breathing room below last row
    const maxScroll = Math.max(0, rowLayout.totalHeight - vh + bottomPadding)

    // Clamp existing scroll into the new bounds
    if (scrollOffsetRef.current > maxScroll) scrollOffsetRef.current = maxScroll
    if (scrollOffsetRef.current < 0) scrollOffsetRef.current = 0

    const maxIndent = vw * MAX_INDENT_FRAC
    const settleEndY = vh * (1 - ENTRY_ZONE_FRAC)
    const entryX = vw * ENTRY_X_FRAC
    const entryZoneSpan = vh - settleEndY
    const cumGap = rowLayout.cumGap
    const n = tls.length
    const lastIdx = n - 1

    const render = () => {
      const scrollOffset = scrollOffsetRef.current
      // Topmost visible row index (fractional) — vertical spacing is
      // uniform again, so scrollOffset / rowHeight works directly.
      const topIdx = scrollOffset / rowHeight
      const i0 = Math.max(0, Math.min(lastIdx, Math.floor(topIdx)))
      const i1 = Math.min(lastIdx, i0 + 1)
      const frac = Math.max(0, Math.min(1, topIdx - i0))
      const anchorCum = cumGap[i0] * (1 - frac) + cumGap[i1] * frac

      for (let i = 0; i < n; i++) {
        const bar = barRefs.current[i]
        if (!bar) continue
        const y = i * rowHeight - scrollOffset
        const rowCenterY = y + halfRow
        const diagonalX = (rowCenterY / vh) * maxIndent
        const gapX = (cumGap[i] - anchorCum) * H_GAP_SCALE
        const naturalX = diagonalX + gapX
        let x = naturalX
        if (rowCenterY > settleEndY) {
          const raw = (rowCenterY - settleEndY) / entryZoneSpan
          const progress = raw > 1 ? 1 : raw
          const eased = progress * progress
          x = naturalX + (entryX - naturalX) * eased
        }
        bar.style.transform = `translate3d(${x}px, ${y}px, 0)`
      }
    }

    render()

    const stopMomentum = () => {
      if (momentumRafRef.current) {
        cancelAnimationFrame(momentumRafRef.current)
        momentumRafRef.current = 0
      }
    }

    const startMomentum = () => {
      stopMomentum()
      const step = () => {
        velocityRef.current *= FRICTION
        scrollOffsetRef.current += velocityRef.current
        if (scrollOffsetRef.current < 0) {
          scrollOffsetRef.current = 0
          velocityRef.current = 0
        } else if (scrollOffsetRef.current > maxScroll) {
          scrollOffsetRef.current = maxScroll
          velocityRef.current = 0
        }
        render()
        if (Math.abs(velocityRef.current) > MIN_VELOCITY) {
          momentumRafRef.current = requestAnimationFrame(step)
        } else {
          momentumRafRef.current = 0
        }
      }
      momentumRafRef.current = requestAnimationFrame(step)
    }

    const onTouchStart = (e: TouchEvent) => {
      stopMomentum()
      isTouchingRef.current = true
      lastTouchYRef.current = e.touches[0].clientY
      lastTouchTimeRef.current = performance.now()
      velocityRef.current = 0
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isTouchingRef.current) return
      e.preventDefault()
      const y = e.touches[0].clientY
      const t = performance.now()
      const dy = y - lastTouchYRef.current
      const dt = t - lastTouchTimeRef.current
      scrollOffsetRef.current -= dy
      if (scrollOffsetRef.current < 0) scrollOffsetRef.current = 0
      else if (scrollOffsetRef.current > maxScroll) scrollOffsetRef.current = maxScroll
      if (dt > 0) velocityRef.current = -dy * (16.67 / dt)
      lastTouchYRef.current = y
      lastTouchTimeRef.current = t
      render()
    }

    const onTouchEnd = () => {
      if (!isTouchingRef.current) return
      isTouchingRef.current = false
      if (Math.abs(velocityRef.current) > MIN_VELOCITY) startMomentum()
    }

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      stopMomentum()
      scrollOffsetRef.current += e.deltaY
      if (scrollOffsetRef.current < 0) scrollOffsetRef.current = 0
      else if (scrollOffsetRef.current > maxScroll) scrollOffsetRef.current = maxScroll
      render()
    }

    el.addEventListener('touchstart', onTouchStart, { passive: false })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: false })
    el.addEventListener('touchcancel', onTouchEnd, { passive: false })
    el.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      stopMomentum()
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      el.removeEventListener('touchcancel', onTouchEnd)
      el.removeEventListener('wheel', onWheel)
    }
  }, [tls, barWidths, rowLayout, viewportSize, rowHeight])

  return (
    <div
      ref={containerRef}
      style={{
        flex: 1,
        position: 'relative',
        overflow: 'hidden',
        touchAction: 'none',
        background: theme.appBg,
      }}
    >
      {tls.map((tl, i) => {
        const regionColor = theme.regionColors[tl.region]
        const barW = barWidths[i] ?? MIN_BAR
        // Initial inline transform — guarantees the first paint after the
        // viewport is measured already shows each row in its correct
        // position, even if any layout-effect race would otherwise show a
        // stacked-at-(0,0) frame.
        let initialTransform: string | undefined
        if (viewportSize.width > 0 && viewportSize.height > 0 && rowLayout.cumGap[i] !== undefined) {
          const so = scrollOffsetRef.current
          const vh = viewportSize.height
          const vw = viewportSize.width
          const y = i * rowHeight - so
          const rowCenterY = y + rowHeight / 2
          const maxIndent = vw * MAX_INDENT_FRAC
          const lastIdx = rowLayout.cumGap.length - 1
          const topIdx = so / rowHeight
          const ai0 = Math.max(0, Math.min(lastIdx, Math.floor(topIdx)))
          const ai1 = Math.min(lastIdx, ai0 + 1)
          const afrac = Math.max(0, Math.min(1, topIdx - ai0))
          const anchorCum = rowLayout.cumGap[ai0] * (1 - afrac) + rowLayout.cumGap[ai1] * afrac
          const diagonalX = (rowCenterY / vh) * maxIndent
          const gapX = (rowLayout.cumGap[i] - anchorCum) * H_GAP_SCALE
          const naturalX = diagonalX + gapX
          const settleEndY = vh * (1 - ENTRY_ZONE_FRAC)
          let x = naturalX
          if (rowCenterY > settleEndY) {
            const raw = (rowCenterY - settleEndY) / (vh - settleEndY)
            const progress = raw > 1 ? 1 : raw
            const eased = progress * progress
            const entryX = vw * ENTRY_X_FRAC
            x = naturalX + (entryX - naturalX) * eased
          }
          initialTransform = `translate3d(${x}px, ${y}px, 0)`
        }
        return (
          <div
            key={tl.id}
            ref={el => { barRefs.current[i] = el }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: rowHeight,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              gap: 2,
              willChange: 'transform',
              pointerEvents: 'none',
              transform: initialTransform,
            }}
          >
            <div
              style={{
                height: theme.bar.accentWidth ?? 3,
                width: 1,
                background: regionColor,
                transformOrigin: 'left center',
                transform: `scaleX(${barW})`,
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 13,
                fontWeight: 600,
                color: theme.label.color,
                textShadow: theme.label.shadow,
                whiteSpace: 'nowrap',
                paddingLeft: 1,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: regionColor,
                  flexShrink: 0,
                }}
              />
              <span>{tl.label}</span>
              <span style={{ opacity: 0.35 }}>·</span>
              <span style={{ opacity: 0.5, fontWeight: 400, fontSize: 11 }}>
                {formatYearRange(tl.startYear, tl.endYear)}
              </span>
            </div>
            {tl.subtitle && (
              <div
                style={{
                  fontSize: 11,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: theme.label.color,
                  opacity: 0.55,
                  whiteSpace: 'nowrap',
                  paddingLeft: 14,
                }}
              >
                {tl.subtitle}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
