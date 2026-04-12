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

function formatYear(y: number): string {
  const abs = Math.abs(Math.round(y))
  return y < 0 ? `${abs} BCE` : `${abs} CE`
}

export function TlFlow({ tls, rowHeight, theme }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 })

  // Synchronous initial measurement so the first paint already has the
  // correct viewport — no flash of bars stacked at x=0.
  useLayoutEffect(() => {
    const el = scrollRef.current
    if (!el) return
    setViewportSize({ width: el.clientWidth, height: el.clientHeight })
    const ro = new ResizeObserver(() => {
      setViewportSize({ width: el.clientWidth, height: el.clientHeight })
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Bar width per TL: sqrt-compressed duration, normalized so the longest
  // TL fills ~70% of the viewport width. Constant for the lifetime of this
  // tls + viewport combination — never recomputed during scroll.
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

  // Per-frame: only one composited transform write per visible row.
  // useLayoutEffect so the initial positions are written before paint.
  useLayoutEffect(() => {
    const el = scrollRef.current
    if (!el || viewportSize.width === 0 || viewportSize.height === 0) return

    let pending = false

    const update = () => {
      pending = false
      const scrollTop = el.scrollTop
      const vh = viewportSize.height
      const vw = viewportSize.width
      const halfRow = rowHeight / 2

      for (let i = 0; i < tls.length; i++) {
        const bar = barRefs.current[i]
        if (!bar) continue
        const rowCenterY = i * rowHeight + halfRow - scrollTop
        const barW = barWidths[i] ?? MIN_BAR
        const t = rowCenterY / vh
        const x = t * (vw - barW)
        bar.style.transform = `translate3d(${x}px, 0, 0)`
      }
    }

    const onScroll = () => {
      if (pending) return
      pending = true
      requestAnimationFrame(update)
    }

    update()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
    }
  }, [tls, barWidths, rowHeight, viewportSize])

  return (
    <div
      ref={scrollRef}
      style={{
        flex: 1,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        touchAction: 'pan-y',
        overscrollBehavior: 'none',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', height: tls.length * rowHeight, width: '100%' }}>
        {tls.map((tl, i) => {
          const regionColor = theme.regionColors[tl.region]
          const barW = barWidths[i] ?? MIN_BAR
          return (
            <div
              key={tl.id}
              style={{
                position: 'absolute',
                top: i * rowHeight,
                left: 0,
                right: 0,
                height: rowHeight,
                pointerEvents: 'none',
              }}
            >
              <div
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
                    {formatYear(tl.startYear)} – {formatYear(tl.endYear)}
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
            </div>
          )
        })}
      </div>
    </div>
  )
}
