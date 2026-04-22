'use client'

import { useRef, useEffect, useCallback } from 'react'
import { REGION_COLORS, REGION_LABELS } from '@/lib/navigator-tls'
import { SORTED_CIVS, CIV_CHAIN_MAP, formatYearRange } from '@/lib/chronology-data'

interface CivListProps {
  activeCivId: string | null
  onActiveCivChange: (id: string) => void
  listRef: React.RefObject<HTMLDivElement | null>
}

export function CivList({ activeCivId, onActiveCivChange, listRef }: CivListProps) {
  const rowRefs = useRef<Map<string, HTMLDivElement>>(new Map())
  // Hysteresis: track the pending candidate and only commit after it's been
  // stable for SETTLE_MS. This prevents ping-ponging between two rows at
  // the boundary.
  const pendingId = useRef<string | null>(null)
  const settleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const committedId = useRef<string | null>(activeCivId)
  const SETTLE_MS = 180

  const observerRef = useRef<IntersectionObserver | null>(null)

  const handleIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      // Find the topmost intersecting entry
      let topEntry: IntersectionObserverEntry | null = null
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        if (!topEntry || entry.boundingClientRect.top < topEntry.boundingClientRect.top) {
          topEntry = entry
        }
      }
      if (!topEntry) return
      const civId = (topEntry.target as HTMLElement).dataset.civId
      if (!civId || civId === committedId.current) {
        // Already committed — cancel any pending switch
        if (settleTimer.current) clearTimeout(settleTimer.current)
        pendingId.current = null
        return
      }

      if (civId === pendingId.current) return // already waiting on this one

      // New candidate: start the settle timer
      pendingId.current = civId
      if (settleTimer.current) clearTimeout(settleTimer.current)
      settleTimer.current = setTimeout(() => {
        committedId.current = civId
        pendingId.current = null
        onActiveCivChange(civId)
      }, SETTLE_MS)
    },
    [onActiveCivChange]
  )

  // Keep committedId in sync if parent changes activeCivId externally
  useEffect(() => {
    committedId.current = activeCivId
  }, [activeCivId])

  useEffect(() => {
    const container = listRef.current
    if (!container) return

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: container,
      rootMargin: '-15% 0px -80% 0px',
      threshold: 0,
    })

    const obs = observerRef.current
    rowRefs.current.forEach(el => obs.observe(el))

    return () => obs.disconnect()
  }, [handleIntersect, listRef])

  const setRowRef = useCallback((id: string, el: HTMLDivElement | null) => {
    if (el) {
      rowRefs.current.set(id, el)
      observerRef.current?.observe(el)
    } else {
      const prev = rowRefs.current.get(id)
      if (prev) observerRef.current?.unobserve(prev)
      rowRefs.current.delete(id)
    }
  }, [])

  function handleTap(civ: typeof SORTED_CIVS[0]) {
    if (civ.hasContent) {
      window.location.href = `/${civ.id}/`
    }
  }

  return (
    <div ref={listRef} className="flex-1 overflow-y-auto overflow-x-hidden px-5">
      {SORTED_CIVS.map(civ => {
        const isActive = civ.id === activeCivId
        const color = REGION_COLORS[civ.region]
        const chainInfo = CIV_CHAIN_MAP.get(civ.id)
        const chainLabel = chainInfo?.chain.shortLabel ?? REGION_LABELS[civ.region]

        return (
          <div
            key={civ.id}
            ref={el => setRowRef(civ.id, el)}
            data-civ-id={civ.id}
            className={`py-3 border-b border-foreground/5 ${
              civ.hasContent ? 'cursor-pointer' : 'opacity-40'
            }`}
            onClick={() => handleTap(civ)}
          >
            {/* Fixed-width left accent — no layout shift on active toggle.
                The 15px pl is always reserved; active state fills the
                left 3px with color via box-shadow inset. */}
            <div
              className="pl-4 transition-[box-shadow] duration-200"
              style={{
                boxShadow: isActive ? `inset 3px 0 0 ${color}` : 'inset 3px 0 0 transparent',
              }}
            >
              <div
                className="text-[10px] font-bold uppercase tracking-[0.12em] transition-colors duration-200"
                style={{ color: isActive ? color : 'var(--foreground)', opacity: isActive ? 1 : 0.35 }}
              >
                {chainLabel}
              </div>
              <div
                className={`text-lg font-[family-name:var(--font-lora)] mt-0.5 transition-colors duration-200 ${
                  isActive ? 'italic' : ''
                }`}
                style={{ color: isActive ? color : 'var(--foreground)' }}
              >
                {civ.label}
              </div>
              <div className="text-xs text-foreground/40 mt-0.5 tabular-nums">
                {formatYearRange(civ.startYear, civ.endYear)}
              </div>
            </div>
          </div>
        )
      })}
      {/* Bottom padding so last items can scroll into the activation zone */}
      <div className="h-[60vh]" />
    </div>
  )
}
