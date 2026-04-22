'use client'

import { useRef, useEffect, useCallback } from 'react'
import { REGION_COLORS, REGION_LABELS } from '@/lib/navigator-tls'
import { SORTED_CIVS, CIV_CHAIN_MAP, formatYearRange } from '@/lib/chronology-data'

interface CivListProps {
  activeCivId: string | null
  onActiveCivChange: (id: string) => void
  listRef: React.RefObject<HTMLDivElement | null>
}

// Activation point: 20% down from the top of the list container.
const ACTIVATION_FRAC = 0.20
// After scroll stops for this long, commit the active civ to React state
// (which updates the ribbon). During scrolling we only do lightweight DOM
// class toggles — no React re-renders, no ribbon updates.
const SCROLL_END_MS = 300

export function CivList({ activeCivId, onActiveCivChange, listRef }: CivListProps) {
  const rowEls = useRef<Map<string, HTMLDivElement>>(new Map())
  const visualActiveId = useRef<string | null>(activeCivId)
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafId = useRef<number>(0)

  // Sync visual ref when React state changes (e.g. initial mount)
  useEffect(() => { visualActiveId.current = activeCivId }, [activeCivId])

  // ── Direct DOM styling — no React re-render needed ──
  const applyVisualActive = useCallback((newId: string | null) => {
    const prevId = visualActiveId.current
    if (newId === prevId) return

    // Deactivate previous
    if (prevId) {
      const prevEl = rowEls.current.get(prevId)
      if (prevEl) prevEl.removeAttribute('data-active')
    }
    // Activate new
    if (newId) {
      const newEl = rowEls.current.get(newId)
      if (newEl) newEl.setAttribute('data-active', 'true')
    }
    visualActiveId.current = newId
  }, [])

  // Scroll-based activation: rAF-throttled, DOM-only during scroll
  useEffect(() => {
    const container = listRef.current
    if (!container) return

    function onScroll() {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        // If at or near the top (including iOS rubber-band), always pick
        // the first civ. This prevents the bounce-back from landing on
        // the second row.
        if (container!.scrollTop < 20) {
          const firstId = SORTED_CIVS[0]?.id
          if (firstId) {
            applyVisualActive(firstId)
            if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current)
            scrollEndTimer.current = setTimeout(() => {
              onActiveCivChange(firstId)
            }, SCROLL_END_MS)
          }
          return
        }

        const containerRect = container!.getBoundingClientRect()
        const activationY = containerRect.top + container!.clientHeight * ACTIVATION_FRAC

        // Find the row whose top is above the activation line and closest to it
        let bestId: string | null = null
        let bestTop = -Infinity

        rowEls.current.forEach((el, id) => {
          const top = el.getBoundingClientRect().top
          if (top <= activationY && top > bestTop) {
            bestTop = top
            bestId = id
          }
        })

        if (!bestId) return

        // Lightweight DOM toggle — instant, no React
        applyVisualActive(bestId)

        // Defer the React state update (ribbon sync) until scroll stops
        if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current)
        scrollEndTimer.current = setTimeout(() => {
          onActiveCivChange(bestId!)
        }, SCROLL_END_MS)
      })
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      container.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current)
    }
  }, [listRef, applyVisualActive, onActiveCivChange])

  // Apply initial visual state after mount
  useEffect(() => {
    if (activeCivId) applyVisualActive(activeCivId)
  }, [activeCivId, applyVisualActive])

  const setRowRef = useCallback((id: string, el: HTMLDivElement | null) => {
    if (el) rowEls.current.set(id, el)
    else rowEls.current.delete(id)
  }, [])

  function handleTap(civ: typeof SORTED_CIVS[0]) {
    if (civ.hasContent) {
      window.location.href = `/${civ.id}/`
    }
  }

  return (
    <div ref={listRef} className="flex-1 overflow-y-auto overflow-x-hidden px-5 pt-2" style={{ overscrollBehaviorY: 'contain' }}>
      {SORTED_CIVS.map(civ => {
        const color = REGION_COLORS[civ.region]
        const chainInfo = CIV_CHAIN_MAP.get(civ.id)
        const chainLabel = chainInfo?.chain.shortLabel ?? REGION_LABELS[civ.region]

        return (
          <div
            key={civ.id}
            ref={el => setRowRef(civ.id, el)}
            data-civ-id={civ.id}
            data-region-color={color}
            className={`civ-row py-3 border-b border-foreground/5 ${
              civ.hasContent ? 'cursor-pointer' : 'opacity-40'
            }`}
            style={{ '--row-color': color } as React.CSSProperties}
            onClick={() => handleTap(civ)}
          >
            <div className="civ-row-inner pl-4">
              <div className="civ-row-chain text-[10px] font-bold uppercase tracking-[0.12em]">
                {chainLabel}
              </div>
              <div className="civ-row-label text-lg font-[family-name:var(--font-lora)] mt-0.5">
                {civ.label}
              </div>
              <div className="text-xs text-foreground/40 mt-0.5 tabular-nums">
                {formatYearRange(civ.startYear, civ.endYear)}
              </div>
            </div>
          </div>
        )
      })}
      <div className="h-[60vh]" />
    </div>
  )
}
