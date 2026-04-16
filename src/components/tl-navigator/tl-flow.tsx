'use client'

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { NavigatorRegion, NavigatorTl } from '@/lib/navigator-tls'
import type { NavigatorTheme } from '@/lib/navigator-themes'
import { TL_CHAINS } from '../../../reference-data/tl-chains'
import { useAllOfflineStatus, downloadTl, deleteTl } from '@/lib/offline'

interface Props {
  tls: NavigatorTl[]                 // ALL tls, sorted by start year (not zone-filtered)
  enabledZones: Set<NavigatorRegion>
  rowHeight: number
  theme: NavigatorTheme
  soloChainId: string | null
  onChainSolo: (chainId: string | null) => void
}

const MIN_BAR = 36
const TARGET_MAX_FRAC = 0.7
const MAX_INDENT_FRAC = 0.3
const H_GAP_SCALE = 0.38
const ENTRY_ZONE_FRAC = 0.33
const ENTRY_X_FRAC = 0.85
const FRICTION = 0.94
const MIN_VELOCITY = 0.05
const TAP_MOVE_THRESHOLD = 10
const TAP_TIME_THRESHOLD = 500

const SOLO_ANIM_MS = 650
const SOLO_LEFT_PAD_FRAC = 0.06
const SOLO_STACK_TOP_PAD = 16

function formatYearRange(start: number, end: number): string {
  const startBce = start < 0
  const endBce = end < 0
  const sa = Math.abs(Math.round(start))
  const ea = Math.abs(Math.round(end))
  if (startBce && endBce) return `${sa}–${ea} BCE`
  if (!startBce && !endBce) return `${sa}–${ea} CE`
  return `${sa} BCE – ${ea} CE`
}

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
}

export function TlFlow({ tls, enabledZones, rowHeight, theme, soloChainId, onChainSolo }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const offlineStatus = useAllOfflineStatus()
  // Mirror live offline status into a ref so the tap-handler closures
  // inside the layout effect can read current values without forcing
  // the effect to re-run (and re-attach touch listeners) on every
  // progress tick.
  const offlineStatusRef = useRef(offlineStatus)
  offlineStatusRef.current = offlineStatus
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 })
  // Kept as state (not ref) so the soloLayout useMemo recomputes when it
  // changes. Stays set during the exit animation and clears on completion.
  const [activeChainId, setActiveChainId] = useState<string | null>(null)

  // Scroll refs — flow has its own offset, chain-solo has its own.
  const flowScrollRef = useRef(0)
  const soloScrollRef = useRef(0)
  const velocityRef = useRef(0)
  const lastTouchYRef = useRef(0)
  const lastTouchTimeRef = useRef(0)
  const isTouchingRef = useRef(false)
  const momentumRafRef = useRef(0)

  const touchStartXRef = useRef(0)
  const touchStartYRef = useRef(0)
  const touchStartTimeRef = useRef(0)
  const touchMovedRef = useRef(false)
  const wasMomentumRef = useRef(false)

  // Chain-solo animation state (0 = full flow, 1 = fully soloed).
  const soloProgressRef = useRef(0)
  const soloDirRef = useRef<0 | 1>(0)
  const soloAnimStartRef = useRef<number | null>(null)
  const soloAnimRafRef = useRef(0)
  // Kick-handle assigned by the main layout effect. The prop-change
  // useEffect calls this to start the animation, since useEffect runs
  // AFTER useLayoutEffect on the same render — the layout effect alone
  // can't see freshly-updated refs.
  const kickSoloAnimRef = useRef<() => void>(() => {})

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

  // Flow-mode visible rows: row indices allowed by the zone filter,
  // plus the cumGap walked over only those visible rows.
  const flowLayout = useMemo(() => {
    const visibleIdxs: number[] = []
    for (let i = 0; i < tls.length; i++) {
      if (enabledZones.has(tls[i].region)) visibleIdxs.push(i)
    }
    const n = visibleIdxs.length
    const cumGap = new Array<number>(n).fill(0)
    for (let i = 1; i < n; i++) {
      const prev = tls[visibleIdxs[i - 1]]
      const cur = tls[visibleIdxs[i]]
      const gap = Math.max(0, cur.startYear - prev.startYear)
      cumGap[i] = cumGap[i - 1] + Math.sqrt(gap)
    }
    const visIdxByRow = new Map<number, number>()
    visibleIdxs.forEach((rowIdx, vi) => visIdxByRow.set(rowIdx, vi))
    return { visibleIdxs, cumGap, visIdxByRow, totalHeight: n * rowHeight }
  }, [tls, enabledZones, rowHeight])

  // Primary chain for each row (first chain containing it) — used for chip.
  const rowChainInfo = useMemo(() => {
    const byId = new Map<string, number>()
    tls.forEach((tl, i) => byId.set(tl.id, i))
    const perRow = new Map<number, { chainId: string; shortLabel: string; index: number; total: number }>()
    for (const chain of TL_CHAINS) {
      chain.entries.forEach((e, ei) => {
        const rowIdx = byId.get(e.timelineId)
        if (rowIdx === undefined) return
        if (perRow.has(rowIdx)) return
        perRow.set(rowIdx, {
          chainId: chain.id,
          shortLabel: chain.shortLabel,
          index: ei,
          total: chain.entries.length,
        })
      })
    }
    return perRow
  }, [tls])

  // Ordered member list for the currently active chain (during enter,
  // hold, and exit animation). Stays set through the exit tween.
  const soloLayout = useMemo(() => {
    if (!activeChainId) return { order: [] as number[], soloIdxByRow: new Map<number, number>(), stackHeight: 0 }
    const chain = TL_CHAINS.find(c => c.id === activeChainId)
    if (!chain) return { order: [] as number[], soloIdxByRow: new Map<number, number>(), stackHeight: 0 }
    const byId = new Map<string, number>()
    tls.forEach((tl, i) => byId.set(tl.id, i))
    const order: number[] = []
    for (const e of chain.entries) {
      const idx = byId.get(e.timelineId)
      if (idx !== undefined) order.push(idx)
    }
    const soloIdxByRow = new Map<number, number>()
    order.forEach((rowIdx, si) => soloIdxByRow.set(rowIdx, si))
    return { order, soloIdxByRow, stackHeight: order.length * rowHeight }
  }, [tls, activeChainId, rowHeight])

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

  // React to soloChainId prop changes: configure the animation refs and
  // kick the rAF loop directly via kickSoloAnimRef. The layout effect is
  // what assigns kickSoloAnimRef.current, so by the time this useEffect
  // runs it already points at the current render's startSoloAnim closure.
  useEffect(() => {
    if (soloChainId && soloChainId !== activeChainId) {
      setActiveChainId(soloChainId)
      soloScrollRef.current = 0
      soloDirRef.current = 1
      soloAnimStartRef.current = performance.now() - soloProgressRef.current * SOLO_ANIM_MS
      kickSoloAnimRef.current()
    } else if (!soloChainId && activeChainId) {
      // Begin exit — keep activeChainId set until animation completes so
      // the chain's solo layout stays valid through the tween.
      soloDirRef.current = 0
      soloAnimStartRef.current = performance.now() - (1 - soloProgressRef.current) * SOLO_ANIM_MS
      kickSoloAnimRef.current()
    }
  }, [soloChainId, activeChainId])

  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el || viewportSize.width === 0 || viewportSize.height === 0) return

    const vh = viewportSize.height
    const vw = viewportSize.width
    const halfRow = rowHeight / 2
    const bottomPadding = rowHeight
    const flowMaxScroll = Math.max(0, flowLayout.totalHeight - vh + bottomPadding)
    const soloStackHeight = soloLayout.stackHeight
    const soloStackCenter = soloStackHeight > 0 && soloStackHeight < vh
      ? (vh - soloStackHeight) / 2
      : SOLO_STACK_TOP_PAD
    const soloMaxScroll = Math.max(0, soloStackHeight - vh + bottomPadding)
    const soloLeftPad = vw * SOLO_LEFT_PAD_FRAC

    if (flowScrollRef.current > flowMaxScroll) flowScrollRef.current = flowMaxScroll
    if (flowScrollRef.current < 0) flowScrollRef.current = 0
    if (soloScrollRef.current > soloMaxScroll) soloScrollRef.current = soloMaxScroll
    if (soloScrollRef.current < 0) soloScrollRef.current = 0

    const maxIndent = vw * MAX_INDENT_FRAC
    const settleEndY = vh * (1 - ENTRY_ZONE_FRAC)
    const entryX = vw * ENTRY_X_FRAC
    const entryZoneSpan = vh - settleEndY

    const render = () => {
      const flowScroll = flowScrollRef.current
      const soloScroll = soloScrollRef.current
      const rawProgress = soloProgressRef.current
      const t = easeInOut(rawProgress)

      const fn = flowLayout.visibleIdxs.length
      const flowTopIdx = flowScroll / rowHeight
      const fi0 = Math.max(0, Math.min(Math.max(0, fn - 1), Math.floor(flowTopIdx)))
      const fi1 = Math.min(Math.max(0, fn - 1), fi0 + 1)
      const ffrac = Math.max(0, Math.min(1, flowTopIdx - fi0))
      const flowAnchorCum = (flowLayout.cumGap[fi0] ?? 0) * (1 - ffrac) + (flowLayout.cumGap[fi1] ?? 0) * ffrac

      for (let i = 0; i < tls.length; i++) {
        const bar = barRefs.current[i]
        if (!bar) continue
        const vi = flowLayout.visIdxByRow.get(i)
        const si = soloLayout.soloIdxByRow.get(i)
        const inFlow = vi !== undefined
        const inSolo = si !== undefined

        if (!inFlow && !inSolo) {
          bar.style.opacity = '0'
          bar.style.visibility = 'hidden'
          continue
        }

        // Flow target
        let flowX: number
        let flowY: number
        let flowOpacity: number
        if (inFlow) {
          const vind = vi as number
          flowY = vind * rowHeight - flowScroll
          const rowCenterY = flowY + halfRow
          const diagonalX = (rowCenterY / vh) * maxIndent
          const gapX = ((flowLayout.cumGap[vind] ?? 0) - flowAnchorCum) * H_GAP_SCALE
          let nx = diagonalX + gapX
          if (rowCenterY > settleEndY) {
            const raw = (rowCenterY - settleEndY) / entryZoneSpan
            const progress = raw > 1 ? 1 : raw
            const eased = progress * progress
            nx = nx + (entryX - nx) * eased
          }
          flowX = nx
          flowOpacity = 1
        } else {
          // Chain member outside the current zone filter — parked
          // off-screen right. When solo kicks in, it slides in from there.
          flowX = vw + 80
          flowY = halfRow
          flowOpacity = 0
        }

        // Solo target
        let soloX: number
        let soloY: number
        let soloOpacity: number
        if (inSolo) {
          const sind = si as number
          soloY = sind * rowHeight + soloStackCenter - soloScroll
          soloX = soloLeftPad
          soloOpacity = 1
        } else {
          // Non-member: slide off to the right and fade.
          soloX = flowX + vw * 1.1
          soloY = flowY
          soloOpacity = 0
        }

        const x = flowX + (soloX - flowX) * t
        const y = flowY + (soloY - flowY) * t
        const opT = flowOpacity + (soloOpacity - flowOpacity) * t
        const baseAlpha = tls[i].hasContent ? 1 : 0.35
        const op = opT * baseAlpha

        bar.style.transform = `translate3d(${x}px, ${y}px, 0)`
        bar.style.opacity = String(op)
        bar.style.visibility = op > 0.01 ? 'visible' : 'hidden'
      }
    }

    const isAnimating = () => soloAnimRafRef.current > 0

    const startSoloAnim = () => {
      if (soloAnimRafRef.current) cancelAnimationFrame(soloAnimRafRef.current)
      const step = () => {
        const start = soloAnimStartRef.current ?? performance.now()
        const elapsed = performance.now() - start
        const raw = Math.min(1, Math.max(0, elapsed / SOLO_ANIM_MS))
        if (soloDirRef.current === 1) {
          soloProgressRef.current = raw
        } else {
          soloProgressRef.current = 1 - raw
        }
        render()
        if (raw < 1) {
          soloAnimRafRef.current = requestAnimationFrame(step)
        } else {
          soloAnimRafRef.current = 0
          if (soloDirRef.current === 0) {
            // Exit complete — drop the active chain so flow mode owns it again.
            setActiveChainId(null)
          }
        }
      }
      soloAnimRafRef.current = requestAnimationFrame(step)
    }

    // Expose startSoloAnim to the prop-change useEffect, which runs AFTER
    // this layout effect and needs to kick the animation directly.
    kickSoloAnimRef.current = startSoloAnim

    // If an animation was in flight before this layout effect re-ran (e.g.
    // the old one was cancelled by cleanup during a viewport resize),
    // resume it. Otherwise just draw the current frame.
    if (soloAnimStartRef.current !== null && soloAnimRafRef.current === 0) {
      const wantsEnter = soloDirRef.current === 1
      const atTarget = wantsEnter ? soloProgressRef.current >= 1 : soloProgressRef.current <= 0
      if (!atTarget) startSoloAnim()
      else render()
    } else {
      render()
    }

    const stopMomentum = () => {
      if (momentumRafRef.current) {
        cancelAnimationFrame(momentumRafRef.current)
        momentumRafRef.current = 0
      }
    }

    const inSoloMode = () => soloProgressRef.current >= 0.99 && activeChainId !== null

    const startMomentum = () => {
      stopMomentum()
      const solo = inSoloMode()
      const step = () => {
        velocityRef.current *= FRICTION
        if (solo) {
          soloScrollRef.current += velocityRef.current
          if (soloScrollRef.current < 0) { soloScrollRef.current = 0; velocityRef.current = 0 }
          else if (soloScrollRef.current > soloMaxScroll) { soloScrollRef.current = soloMaxScroll; velocityRef.current = 0 }
        } else {
          flowScrollRef.current += velocityRef.current
          if (flowScrollRef.current < 0) { flowScrollRef.current = 0; velocityRef.current = 0 }
          else if (flowScrollRef.current > flowMaxScroll) { flowScrollRef.current = flowMaxScroll; velocityRef.current = 0 }
        }
        render()
        if (Math.abs(velocityRef.current) > MIN_VELOCITY) {
          momentumRafRef.current = requestAnimationFrame(step)
        } else momentumRafRef.current = 0
      }
      momentumRafRef.current = requestAnimationFrame(step)
    }

    const onTouchStart = (e: TouchEvent) => {
      wasMomentumRef.current = momentumRafRef.current > 0
      stopMomentum()
      isTouchingRef.current = true
      const t0 = e.touches[0]
      lastTouchYRef.current = t0.clientY
      lastTouchTimeRef.current = performance.now()
      touchStartXRef.current = t0.clientX
      touchStartYRef.current = t0.clientY
      touchStartTimeRef.current = lastTouchTimeRef.current
      touchMovedRef.current = false
      velocityRef.current = 0
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!isTouchingRef.current) return
      e.preventDefault()
      const y = e.touches[0].clientY
      const x = e.touches[0].clientX
      const now = performance.now()
      const dy = y - lastTouchYRef.current
      const dt = now - lastTouchTimeRef.current
      if (!touchMovedRef.current) {
        const distX = x - touchStartXRef.current
        const distY = y - touchStartYRef.current
        if (distX * distX + distY * distY > TAP_MOVE_THRESHOLD * TAP_MOVE_THRESHOLD) {
          touchMovedRef.current = true
        }
      }
      if (isAnimating()) {
        // Swallow scroll input during the solo transition.
        lastTouchYRef.current = y
        lastTouchTimeRef.current = now
        return
      }
      if (inSoloMode()) {
        soloScrollRef.current -= dy
        if (soloScrollRef.current < 0) soloScrollRef.current = 0
        else if (soloScrollRef.current > soloMaxScroll) soloScrollRef.current = soloMaxScroll
      } else {
        flowScrollRef.current -= dy
        if (flowScrollRef.current < 0) flowScrollRef.current = 0
        else if (flowScrollRef.current > flowMaxScroll) flowScrollRef.current = flowMaxScroll
      }
      if (dt > 0) velocityRef.current = -dy * (16.67 / dt)
      lastTouchYRef.current = y
      lastTouchTimeRef.current = now
      render()
    }

    const onTouchEnd = () => {
      if (!isTouchingRef.current) return
      isTouchingRef.current = false
      if (
        !touchMovedRef.current &&
        !wasMomentumRef.current &&
        !isAnimating() &&
        performance.now() - touchStartTimeRef.current < TAP_TIME_THRESHOLD
      ) {
        const rect = el.getBoundingClientRect()
        const touchY = touchStartYRef.current - rect.top

        // Chip tap first — hit-test via elementFromPoint.
        const hit = document.elementFromPoint(touchStartXRef.current, touchStartYRef.current)
        const chipEl = hit && (hit as Element).closest ? (hit as Element).closest('[data-chain-chip]') as HTMLElement | null : null
        if (chipEl) {
          const chainId = chipEl.getAttribute('data-chain-id')
          if (chainId) {
            onChainSolo(soloChainId === chainId ? null : chainId)
            return
          }
        }

        // Offline download button tap — hit-test before row nav so tapping
        // the cloud icon never also triggers a navigation.
        const offlineEl = hit && (hit as Element).closest ? (hit as Element).closest('[data-offline-btn]') as HTMLElement | null : null
        if (offlineEl) {
          const tlId = offlineEl.getAttribute('data-tl-id')
          if (tlId) {
            const cur = offlineStatusRef.current[tlId]?.status ?? 'none'
            if (cur === 'downloaded') deleteTl(tlId)
            else if (cur !== 'downloading') downloadTl(tlId)
            return
          }
        }

        // Row nav tap
        if (inSoloMode()) {
          const contentY = touchY + soloScrollRef.current - soloStackCenter
          const sindex = Math.floor(contentY / rowHeight)
          if (sindex >= 0 && sindex < soloLayout.order.length) {
            const rowIdx = soloLayout.order[sindex]
            const tl = tls[rowIdx]
            if (tl && tl.hasContent) {
              window.location.href = `/${tl.id}`
              return
            }
          }
        } else {
          const contentY = touchY + flowScrollRef.current
          const vindex = Math.floor(contentY / rowHeight)
          if (vindex >= 0 && vindex < flowLayout.visibleIdxs.length) {
            const rowIdx = flowLayout.visibleIdxs[vindex]
            const tl = tls[rowIdx]
            if (tl && tl.hasContent) {
              window.location.href = `/${tl.id}`
              return
            }
          }
        }
      }
      if (Math.abs(velocityRef.current) > MIN_VELOCITY && !isAnimating()) startMomentum()
    }

    // Desktop mouse support: pointerup with pointerType === 'mouse' runs the
    // same tap/hit-test logic as onTouchEnd without touching the touch flow.
    // Touch devices also emit pointer events, but we filter to mouse so the
    // existing touchstart/end path stays the sole handler for touch.
    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return
      if (isAnimating()) return
      const rect = el.getBoundingClientRect()
      const clickY = e.clientY - rect.top

      const hit = document.elementFromPoint(e.clientX, e.clientY)
      const chipEl = hit && (hit as Element).closest ? (hit as Element).closest('[data-chain-chip]') as HTMLElement | null : null
      if (chipEl) {
        const chainId = chipEl.getAttribute('data-chain-id')
        if (chainId) {
          onChainSolo(soloChainId === chainId ? null : chainId)
          return
        }
      }

      const offlineEl = hit && (hit as Element).closest ? (hit as Element).closest('[data-offline-btn]') as HTMLElement | null : null
      if (offlineEl) {
        const tlId = offlineEl.getAttribute('data-tl-id')
        if (tlId) {
          const cur = offlineStatus[tlId]?.status ?? 'none'
          if (cur === 'downloaded') deleteTl(tlId)
          else if (cur !== 'downloading') downloadTl(tlId)
          return
        }
      }

      if (inSoloMode()) {
        const contentY = clickY + soloScrollRef.current - soloStackCenter
        const sindex = Math.floor(contentY / rowHeight)
        if (sindex >= 0 && sindex < soloLayout.order.length) {
          const rowIdx = soloLayout.order[sindex]
          const tl = tls[rowIdx]
          if (tl && tl.hasContent) {
            window.location.href = `/${tl.id}`
            return
          }
        }
      } else {
        const contentY = clickY + flowScrollRef.current
        const vindex = Math.floor(contentY / rowHeight)
        if (vindex >= 0 && vindex < flowLayout.visibleIdxs.length) {
          const rowIdx = flowLayout.visibleIdxs[vindex]
          const tl = tls[rowIdx]
          if (tl && tl.hasContent) {
            window.location.href = `/${tl.id}`
            return
          }
        }
      }
    }

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      stopMomentum()
      if (isAnimating()) return
      if (inSoloMode()) {
        soloScrollRef.current += e.deltaY
        if (soloScrollRef.current < 0) soloScrollRef.current = 0
        else if (soloScrollRef.current > soloMaxScroll) soloScrollRef.current = soloMaxScroll
      } else {
        flowScrollRef.current += e.deltaY
        if (flowScrollRef.current < 0) flowScrollRef.current = 0
        else if (flowScrollRef.current > flowMaxScroll) flowScrollRef.current = flowMaxScroll
      }
      render()
    }

    el.addEventListener('touchstart', onTouchStart, { passive: false })
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    el.addEventListener('touchend', onTouchEnd, { passive: false })
    el.addEventListener('touchcancel', onTouchEnd, { passive: false })
    el.addEventListener('pointerup', onPointerUp)
    el.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      stopMomentum()
      if (soloAnimRafRef.current) {
        cancelAnimationFrame(soloAnimRafRef.current)
        soloAnimRafRef.current = 0
      }
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      el.removeEventListener('touchcancel', onTouchEnd)
      el.removeEventListener('pointerup', onPointerUp)
      el.removeEventListener('wheel', onWheel)
    }
  }, [tls, barWidths, flowLayout, soloLayout, viewportSize, rowHeight, soloChainId, activeChainId, onChainSolo])

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
        const chain = rowChainInfo.get(i)
        const offline = tl.hasContent ? (offlineStatus[tl.id]?.status ?? 'none') : 'none'
        const offlineDone = offlineStatus[tl.id]?.done ?? 0
        const offlineTotal = offlineStatus[tl.id]?.total ?? 0
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
              gap: 0,
              willChange: 'transform, opacity',
              pointerEvents: 'none',
              opacity: 0,
              visibility: 'hidden',
            }}
          >
            <div
              style={{
                height: theme.bar.accentWidth ?? 3,
                width: 1,
                background: regionColor,
                transformOrigin: 'left center',
                transform: `scaleX(${barW})`,
                marginBottom: 6,
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 7,
                fontSize: 15,
                lineHeight: 1.15,
                fontWeight: 600,
                color: theme.label.color,
                textShadow: theme.label.shadow,
                whiteSpace: 'nowrap',
                paddingLeft: 1,
              }}
            >
              <span
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: regionColor,
                  flexShrink: 0,
                }}
              />
              <span>{tl.label}</span>
              {chain && (
                <span
                  data-chain-chip="1"
                  data-chain-id={chain.chainId}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 14,
                    fontWeight: 500,
                    color: theme.label.color,
                    opacity: 0.85,
                    marginLeft: 36,
                    padding: '4px 12px',
                    borderRadius: 999,
                    border: `1px solid ${theme.headerBorder}`,
                    background: 'rgba(255,255,255,0.07)',
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                  }}
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span>
                    {chain.shortLabel} {chain.index + 1}/{chain.total}
                  </span>
                </span>
              )}
              {tl.hasContent && (
                <span
                  data-offline-btn="1"
                  data-tl-id={tl.id}
                  aria-label={
                    offline === 'downloaded' ? 'Remove offline download'
                    : offline === 'downloading' ? 'Downloading for offline'
                    : offline === 'error' ? 'Offline download failed, tap to retry'
                    : 'Download for offline reading'
                  }
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 28,
                    height: 28,
                    marginLeft: 10,
                    borderRadius: 999,
                    pointerEvents: 'auto',
                    cursor: 'pointer',
                    color:
                      offline === 'downloaded' ? 'var(--accent, #fbbf24)'
                      : offline === 'error' ? '#f87171'
                      : theme.label.color,
                    opacity:
                      offline === 'none' ? 0.55
                      : offline === 'downloading' ? 0.85
                      : 1,
                    transition: 'opacity 150ms, color 150ms',
                  }}
                >
                  {offline === 'downloaded' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      <path d="m9 12 2 2 4-4" stroke="var(--background, #22201e)" fill="none" strokeWidth="2" />
                    </svg>
                  ) : offline === 'error' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      <path d="m10 11 4 4 m0-4-4 4" />
                    </svg>
                  ) : offline === 'downloading' ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      <circle cx="12" cy="14" r="2" fill="currentColor" />
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite" />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                      <path d="M12 10v6 m-2.5-2.5L12 16l2.5-2.5" />
                    </svg>
                  )}
                  {offline === 'downloading' && offlineTotal > 0 && (
                    <span
                      style={{
                        marginLeft: 6,
                        fontSize: 11,
                        fontWeight: 500,
                        opacity: 0.8,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {Math.round((offlineDone / offlineTotal) * 100)}%
                    </span>
                  )}
                </span>
              )}
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                paddingLeft: 16,
                whiteSpace: 'nowrap',
                lineHeight: 1.15,
                marginTop: 2,
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  color: theme.label.color,
                  opacity: 0.5,
                  fontWeight: 400,
                }}
              >
                {formatYearRange(tl.startYear, tl.endYear)}
              </span>
            </div>
            {tl.subtitle && (
              <div
                style={{
                  fontSize: 13,
                  lineHeight: 1.15,
                  marginTop: 2,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: theme.label.color,
                  opacity: 0.55,
                  whiteSpace: 'nowrap',
                  paddingLeft: 16,
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
