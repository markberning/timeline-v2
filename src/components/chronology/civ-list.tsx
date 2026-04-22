'use client'

import { useRef, useEffect, useCallback } from 'react'
import { REGION_COLORS, REGION_LABELS } from '@/lib/navigator-tls'
import { SORTED_CIVS, CIV_CHAIN_MAP, formatYearRange } from '@/lib/chronology-data'

interface CivListProps {
  activeCivId: string | null
  onActiveCivChange: (id: string) => void
  listRef: React.RefObject<HTMLDivElement | null>
}

const ACTIVATION_FRAC = 0.20
const SCROLL_END_MS = 300

export function CivList({ activeCivId, onActiveCivChange, listRef }: CivListProps) {
  const rowEls = useRef<Map<string, HTMLDivElement>>(new Map())
  const visualActiveId = useRef<string | null>(activeCivId)
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafId = useRef<number>(0)

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
  }, [listRef, applyVisualActive, onActiveCivChange])

  useEffect(() => {
    if (activeCivId) applyVisualActive(activeCivId)
  }, [activeCivId, applyVisualActive])

  const setRowRef = useCallback((id: string, el: HTMLDivElement | null) => {
    if (el) rowEls.current.set(id, el)
    else rowEls.current.delete(id)
  }, [])

  return (
    <div ref={listRef} className="flex-1 overflow-y-auto overflow-x-hidden px-5 pt-2" style={{ overscrollBehaviorY: 'contain' }}>
      {SORTED_CIVS.map(civ => {
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
              !civ.hasContent ? 'opacity-35' : ''
            }`}
            style={{ '--row-color': color } as React.CSSProperties}
          >
            <div className="civ-row-inner pl-4 flex items-center gap-3">
              <div className="flex-1 min-w-0">
                {/* Chain + position */}
                <div className="civ-row-chain text-[10px] font-bold uppercase tracking-[0.12em]">
                  {chainLabel}
                  {chainPosition && (
                    <span className="civ-row-chain-pos ml-1.5 font-normal">{chainPosition}</span>
                  )}
                </div>

                {/* Civ title */}
                <div className="civ-row-label text-lg font-[family-name:var(--font-lora)] mt-0.5">
                  {civ.label}
                </div>

                {/* Date range */}
                <div className="text-xs text-foreground/40 mt-0.5 tabular-nums">
                  {formatYearRange(civ.startYear, civ.endYear)}
                </div>
              </div>

              {/* Small enter pill — right side, shown on active via CSS */}
              {civ.hasContent && (
                <button
                  className="civ-row-enter shrink-0 px-3 py-1.5 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: color }}
                  onClick={(e) => {
                    e.stopPropagation()
                    window.location.href = `/${civ.id}/`
                  }}
                >
                  Read →
                </button>
              )}
            </div>
          </div>
        )
      })}
      <div className="h-[60vh]" />
    </div>
  )
}
