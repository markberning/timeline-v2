'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import type { NavigatorTl } from '@/lib/navigator-tls'
import type { NavigatorTheme } from '@/lib/navigator-themes'

interface Props {
  tls: NavigatorTl[]              // pre-filtered AND pre-sorted by start year
  rowHeight: number
  axisHeight: number
  theme: NavigatorTheme
}

const MAX_TICKS = 10
const NICE_INTERVALS = [1, 2, 5, 10, 25, 50, 100, 200, 250, 500, 1000, 2000, 2500, 5000, 10000]

function formatYear(y: number): string {
  const abs = Math.abs(Math.round(y))
  return y < 0 ? `${abs} BCE` : `${abs} CE`
}

function tickInterval(spanYears: number, maxTicks: number): number {
  const raw = spanYears / maxTicks
  for (const n of NICE_INTERVALS) if (n >= raw) return n
  return 10000
}

export function TlFlow({ tls, rowHeight, axisHeight, theme }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 })

  // Measure the scroll container — width drives bar widths, height drives
  // how many rows fit in a window.
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const measure = () => {
      setViewportSize({
        width: el.clientWidth,
        height: Math.max(0, el.clientHeight - axisHeight),
      })
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [axisHeight])

  const viewportRows = Math.max(1, Math.floor(viewportSize.height / rowHeight))

  // Per-row snapshot: if row i is the topmost visible, what is the range
  // [start, end] of the visible window? End is the max endYear in the
  // window so long-runners don't overflow. Start is just tls[i].startYear
  // (the list is sorted ascending).
  const snapshots = useMemo(() => {
    const n = tls.length
    const starts = new Array<number>(n)
    const ends = new Array<number>(n)
    for (let i = 0; i < n; i++) {
      const j1 = Math.min(n, i + viewportRows)
      let maxEnd = -Infinity
      let minStart = Infinity
      for (let j = i; j < j1; j++) {
        const tl = tls[j]
        if (tl.endYear > maxEnd) maxEnd = tl.endYear
        if (tl.startYear < minStart) minStart = tl.startYear
      }
      starts[i] = minStart === Infinity ? 0 : minStart
      ends[i] = maxEnd === -Infinity ? 1 : maxEnd
    }
    return { starts, ends }
  }, [tls, viewportRows])

  // DOM refs we touch on every scroll frame
  const barRefs = useRef<(HTMLDivElement | null)[]>([])
  const lineRefs = useRef<(HTMLDivElement | null)[]>([])
  const tickRefs = useRef<(HTMLDivElement | null)[]>([])
  const tickLabelRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    barRefs.current.length = tls.length
    lineRefs.current.length = tls.length
  }, [tls.length])

  // Scroll-driven layout updates. Native scroll handles the vertical
  // position of the rows; we just rewrite each bar's horizontal transform
  // and the tick positions/labels per frame.
  useEffect(() => {
    const el = scrollRef.current
    if (!el || viewportSize.width === 0 || snapshots.starts.length === 0) return

    let pending = false

    const update = () => {
      pending = false
      const scrollTop = el.scrollTop
      const topIdx = Math.max(0, scrollTop / rowHeight)
      const lastSnap = snapshots.starts.length - 1
      const i0 = Math.max(0, Math.min(lastSnap, Math.floor(topIdx)))
      const i1 = Math.min(lastSnap, i0 + 1)
      const f = Math.max(0, Math.min(1, topIdx - i0))

      const rangeStart = snapshots.starts[i0] * (1 - f) + snapshots.starts[i1] * f
      const rangeEnd = snapshots.ends[i0] * (1 - f) + snapshots.ends[i1] * f
      const span = Math.max(1, rangeEnd - rangeStart)
      const w = viewportSize.width

      for (let i = 0; i < tls.length; i++) {
        const bar = barRefs.current[i]
        const line = lineRefs.current[i]
        if (!bar || !line) continue
        const tl = tls[i]
        const left = ((tl.startYear - rangeStart) / span) * w
        const width = Math.max(2, ((tl.endYear - tl.startYear) / span) * w)
        bar.style.transform = `translate3d(${left}px, 0, 0)`
        line.style.transform = `scaleX(${width})`
      }

      const interval = tickInterval(span, MAX_TICKS)
      const firstTick = Math.ceil(rangeStart / interval) * interval
      let used = 0
      for (let y = firstTick; y <= rangeEnd && used < MAX_TICKS; y += interval) {
        const tickNode = tickRefs.current[used]
        const labelNode = tickLabelRefs.current[used]
        if (tickNode) {
          const x = ((y - rangeStart) / span) * w
          tickNode.style.transform = `translate3d(${x}px, 0, 0)`
          tickNode.style.display = 'block'
        }
        if (labelNode) labelNode.textContent = formatYear(y)
        used++
      }
      for (let k = used; k < MAX_TICKS; k++) {
        const tickNode = tickRefs.current[k]
        if (tickNode) tickNode.style.display = 'none'
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
  }, [tls, snapshots, rowHeight, viewportSize])

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
      {/* Sticky time axis */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 4,
          height: axisHeight,
          background: theme.axisBg,
          borderBottom: `1px solid ${theme.axisBottomBorder}`,
        }}
      >
        {Array.from({ length: MAX_TICKS }).map((_, k) => (
          <div
            key={k}
            ref={el => { tickRefs.current[k] = el }}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: 1,
              background: theme.axisGridLine,
              willChange: 'transform',
            }}
          >
            <div
              ref={el => { tickLabelRefs.current[k] = el }}
              style={{
                position: 'absolute',
                left: 4,
                top: 4,
                fontSize: 12,
                color: theme.axisText,
                fontVariantNumeric: 'tabular-nums',
                whiteSpace: 'nowrap',
              }}
            />
          </div>
        ))}
      </div>

      {/* Tall content with rows */}
      <div style={{ position: 'relative', height: tls.length * rowHeight, width: '100%' }}>
        {tls.map((tl, i) => {
          const regionColor = theme.regionColors[tl.region]
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
                  ref={el => { lineRefs.current[i] = el }}
                  style={{
                    height: theme.bar.accentWidth ?? 3,
                    width: 1,
                    background: regionColor,
                    transformOrigin: 'left center',
                    willChange: 'transform',
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
