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
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // IntersectionObserver: detect which row is near the top
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
      if (!civId) return

      // Debounce to prevent rapid flicker during fast scrolling
      if (debounceTimer.current) clearTimeout(debounceTimer.current)
      debounceTimer.current = setTimeout(() => onActiveCivChange(civId), 60)
    },
    [onActiveCivChange]
  )

  useEffect(() => {
    const container = listRef.current
    if (!container) return

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: container,
      rootMargin: '-15% 0px -80% 0px', // activation zone near top
      threshold: 0,
    })

    const obs = observerRef.current
    rowRefs.current.forEach(el => obs.observe(el))

    return () => obs.disconnect()
  }, [handleIntersect, listRef])

  // Register row refs for the observer
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
            className={`py-3 border-b border-foreground/5 transition-colors duration-200 ${
              civ.hasContent ? 'cursor-pointer' : 'opacity-40'
            }`}
            style={{
              borderLeftWidth: isActive ? 3 : 0,
              borderLeftColor: isActive ? color : 'transparent',
              paddingLeft: isActive ? 12 : 0,
            }}
            onClick={() => handleTap(civ)}
          >
            <div
              className="text-[10px] font-bold uppercase tracking-[0.12em]"
              style={{ color: isActive ? color : 'var(--foreground)', opacity: isActive ? 1 : 0.35 }}
            >
              {chainLabel}
            </div>
            <div
              className={`text-lg font-[family-name:var(--font-lora)] mt-0.5 ${
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
        )
      })}
      {/* Bottom padding so last items can scroll into the activation zone */}
      <div className="h-[60vh]" />
    </div>
  )
}
