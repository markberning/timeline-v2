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
// The row whose vertical center is closest to (and above) this line wins.
const ACTIVATION_FRAC = 0.20
// A new candidate must hold for this many ms before we commit.
const SETTLE_MS = 250

export function CivList({ activeCivId, onActiveCivChange, listRef }: CivListProps) {
  const rowEls = useRef<Map<string, HTMLDivElement>>(new Map())
  const committed = useRef<string | null>(activeCivId)
  const candidate = useRef<string | null>(null)
  const candidateTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rafId = useRef<number>(0)

  // Keep committed ref in sync with prop
  useEffect(() => { committed.current = activeCivId }, [activeCivId])

  const commit = useCallback(
    (id: string) => {
      committed.current = id
      candidate.current = null
      onActiveCivChange(id)
    },
    [onActiveCivChange]
  )

  // Scroll-based activation: rAF-throttled, deterministic
  useEffect(() => {
    const container = listRef.current
    if (!container) return

    function onScroll() {
      cancelAnimationFrame(rafId.current)
      rafId.current = requestAnimationFrame(() => {
        const containerRect = container!.getBoundingClientRect()
        const activationY = containerRect.top + container!.clientHeight * ACTIVATION_FRAC

        // Find the row whose top edge is above the activation line
        // and whose bottom edge is closest to it (= the row "at" the line)
        let bestId: string | null = null
        let bestTop = -Infinity

        rowEls.current.forEach((el, id) => {
          const rect = el.getBoundingClientRect()
          // Row must have its top above the activation line
          if (rect.top <= activationY && rect.top > bestTop) {
            bestTop = rect.top
            bestId = id
          }
        })

        if (!bestId || bestId === committed.current) {
          // Same as current — cancel any pending switch
          if (candidateTimer.current) {
            clearTimeout(candidateTimer.current)
            candidateTimer.current = null
          }
          candidate.current = null
          return
        }

        if (bestId === candidate.current) return // already waiting

        // New candidate — start settle timer
        candidate.current = bestId
        if (candidateTimer.current) clearTimeout(candidateTimer.current)
        const idToCommit = bestId
        candidateTimer.current = setTimeout(() => {
          commit(idToCommit)
          candidateTimer.current = null
        }, SETTLE_MS)
      })
    }

    container.addEventListener('scroll', onScroll, { passive: true })
    // Initial check
    onScroll()
    return () => {
      container.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId.current)
      if (candidateTimer.current) clearTimeout(candidateTimer.current)
    }
  }, [listRef, commit])

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
            {/* Fixed 16px left padding always present.
                Active accent is an inset box-shadow — zero layout shift. */}
            <div
              className="pl-4"
              style={{
                boxShadow: isActive ? `inset 3px 0 0 ${color}` : 'none',
              }}
            >
              <div
                className="text-[10px] font-bold uppercase tracking-[0.12em]"
                style={{ color: isActive ? color : 'var(--foreground)', opacity: isActive ? 1 : 0.35 }}
              >
                {chainLabel}
              </div>
              <div
                className="text-lg font-[family-name:var(--font-lora)] mt-0.5"
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
      <div className="h-[60vh]" />
    </div>
  )
}
