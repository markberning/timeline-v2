'use client'

import { useRef, useEffect, useCallback, useMemo } from 'react'
import { REGION_COLORS, REGION_LABELS } from '@/lib/navigator-tls'
import { SORTED_CIVS, CIV_CHAIN_MAP, formatYearRange } from '@/lib/chronology-data'
import { CHAIN_COLORS } from '@/lib/accent-colors'
import type { NavigatorTl } from '@/lib/navigator-tls'
import { TL_CHAINS } from '../../../reference-data/tl-chains'

interface CivListProps {
  activeCivId: string | null
  onActiveCivChange: (id: string) => void
  listRef: React.RefObject<HTMLDivElement | null>
  soloChainId: string | null
  onChainSolo: (id: string | null) => void
}

const ACTIVATION_FRAC = 0.20
const SCROLL_END_MS = 300

export function CivList({ activeCivId, onActiveCivChange, listRef, soloChainId, onChainSolo }: CivListProps) {
  const rowEls = useRef<Map<string, HTMLDivElement>>(new Map())
  const visualActiveId = useRef<string | null>(activeCivId)
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafId = useRef<number>(0)
  // When an external source (bar tap) sets the active civ, suppress
  // scroll-based detection until the programmatic scroll settles.
  const externalLockUntil = useRef<number>(0)

  // Compute filtered + reordered civs when a chain is solo'd
  const soloChain = useMemo(() => {
    if (!soloChainId) return null
    return TL_CHAINS.find(c => c.id === soloChainId) ?? null
  }, [soloChainId])

  const displayCivs: NavigatorTl[] = useMemo(() => {
    if (!soloChain) return SORTED_CIVS
    const civById = new Map(SORTED_CIVS.map(c => [c.id, c]))
    return soloChain.entries
      .map(e => civById.get(e.timelineId))
      .filter((c): c is NavigatorTl => c !== undefined)
  }, [soloChain])

  useEffect(() => { visualActiveId.current = activeCivId }, [activeCivId])

  const applyVisualActive = useCallback((newId: string | null) => {
    const prevId = visualActiveId.current
    if (newId === prevId) return
    if (prevId) {
      const prevEl = rowEls.current.get(prevId)
      if (prevEl) prevEl.removeAttribute('data-active')
    }
    if (newId) {
      const newEl = rowEls.current.get(newId)
      if (newEl) newEl.setAttribute('data-active', 'true')
    }
    visualActiveId.current = newId
  }, [])

  useEffect(() => {
    const container = listRef.current
    if (!container) return

    function onScroll() {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        // Skip scroll detection while a bar-tap scroll is settling
        if (Date.now() < externalLockUntil.current) return

        if (container!.scrollTop < 20) {
          const firstId = displayCivs[0]?.id
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
        applyVisualActive(bestId)

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
  }, [listRef, applyVisualActive, onActiveCivChange, displayCivs])

  // When activeCivId changes externally (e.g. bar tap), update visual + scroll to row
  useEffect(() => {
    if (!activeCivId) return
    applyVisualActive(activeCivId)
    const el = rowEls.current.get(activeCivId)
    if (el && listRef.current) {
      const containerRect = listRef.current.getBoundingClientRect()
      const rowRect = el.getBoundingClientRect()
      if (rowRect.top < containerRect.top || rowRect.top > containerRect.top + containerRect.height * 0.3) {
        // Lock out scroll detection while the programmatic scroll runs
        externalLockUntil.current = Date.now() + 800
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [activeCivId, applyVisualActive, listRef])

  const setRowRef = useCallback((id: string, el: HTMLDivElement | null) => {
    if (el) rowEls.current.set(id, el)
    else rowEls.current.delete(id)
  }, [])

  // Scroll to top when chain filter changes
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [soloChainId, listRef])

  const soloColor = soloChain
    ? (CHAIN_COLORS[soloChain.id]?.base ?? '#6b7280')
    : null

  return (
    <div ref={listRef} className="flex-1 overflow-y-auto overflow-x-hidden px-5 pt-2" style={{ overscrollBehaviorY: 'contain' }}>
      {/* Chain filter header */}
      {soloChain && (
        <div
          className="flex items-center gap-2 px-1 sticky top-0 z-10 border-b border-foreground/10"
          style={{ backgroundColor: 'var(--background)', marginTop: -8, paddingTop: 10, paddingBottom: 8 }}
        >
          <div
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: soloColor! }}
          />
          <span className="text-[13px] font-bold flex-1" style={{ color: soloColor! }}>
            {soloChain.label}
          </span>
          <span className="text-[11px] text-foreground/40 mr-1">
            {displayCivs.length} TL{displayCivs.length !== 1 ? 's' : ''}
          </span>
          <button
            className="text-[11px] font-bold uppercase tracking-wider opacity-40 cursor-pointer px-2 py-1"
            onClick={() => onChainSolo(null)}
          >
            ✕
          </button>
        </div>
      )}

      {displayCivs.map(civ => {
        const color = REGION_COLORS[civ.region]
        const chainInfo = CIV_CHAIN_MAP.get(civ.id)
        const chainLabel = chainInfo?.chain.shortLabel ?? REGION_LABELS[civ.region]
        const chainPosition = chainInfo ? `${chainInfo.index + 1}/${chainInfo.total}` : null

        return (
          <div
            key={civ.id}
            ref={el => setRowRef(civ.id, el)}
            data-civ-id={civ.id}
            className={`civ-row py-3 border-b border-foreground/5 ${
              civ.hasContent ? 'cursor-pointer active:opacity-80' : 'opacity-35'
            }`}
            style={{ '--row-color': color } as React.CSSProperties}
            onClick={() => civ.hasContent && (window.location.href = `/${civ.id}/`)}
          >
            <div className="civ-row-inner pl-4 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                {/* Chain + position */}
                <div className="civ-row-chain text-[11px] font-bold uppercase tracking-[0.12em]">
                  {chainLabel}
                  {chainPosition && (
                    <span className="civ-row-chain-pos ml-1.5">{chainPosition}</span>
                  )}
                </div>

                {/* Civ title */}
                <div className="civ-row-label text-[18px] font-[family-name:var(--font-lora)] mt-0.5 leading-snug">
                  {civ.label}
                </div>

                {/* Subtitle */}
                {civ.subtitle && (
                  <div className="text-[14px] text-foreground/55 dark:text-foreground/70 mt-0.5 italic font-[family-name:var(--font-lora)] leading-snug">
                    {civ.subtitle}
                  </div>
                )}

                {/* Date range */}
                <div className="text-[13px] text-foreground/35 dark:text-foreground/50 mt-0.5 tabular-nums">
                  {formatYearRange(civ.startYear, civ.endYear)}
                </div>
              </div>

              {/* Small enter pill — right side, shown on active via CSS */}
              {civ.hasContent && (
                <div className="civ-row-enter shrink-0 px-3 py-1.5 rounded-full text-xs font-bold text-white" style={{ backgroundColor: color }}>
                  Read →
                </div>
              )}
            </div>
          </div>
        )
      })}
      <div className="h-[60vh]" />
    </div>
  )
}
