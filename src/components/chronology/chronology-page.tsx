'use client'

import { useState, useRef, useEffect } from 'react'
import { SORTED_CIVS } from '@/lib/chronology-data'
import { ChronologyHeader } from './chronology-header'
import { CivIconsStrip } from './civ-icons-strip'
import { TimelineRibbon } from './timeline-ribbon'
import { CivList } from './civ-list'
import { DetailPane } from './detail-pane'
import { SearchOverlay } from './search-overlay'

function useIsDesktop(): boolean {
  const [desktop, setDesktop] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 1024px)')
    setDesktop(mql.matches)
    const handler = (e: MediaQueryListEvent) => setDesktop(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])
  return desktop
}

const defaultCiv = SORTED_CIVS.find(c => c.hasContent)?.id ?? SORTED_CIVS[0]?.id ?? null

function isReload(): boolean {
  if (typeof window === 'undefined') return false
  const entries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[]
  return entries[0]?.type === 'reload'
}

function getInitialCiv(): string | null {
  if (typeof window === 'undefined') return defaultCiv
  if (isReload()) return defaultCiv
  const last = localStorage.getItem('last-viewed-civ')
  if (last && SORTED_CIVS.some(c => c.id === last)) return last
  return defaultCiv
}

export function ChronologyPage() {
  const isDesktop = useIsDesktop()
  const [activeCivId, setActiveCivId] = useState<string | null>(getInitialCiv)
  const [ribbonMode, setRibbonMode] = useState<'timeline' | 'chains'>('timeline')
  const [soloChainId, setSoloChainId] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const ribbonScrollRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  // On mount, scroll the list to the initial active civ.
  // On reload, force the list to the top instead of restoring scroll position.
  useEffect(() => {
    if (!listRef.current) return
    if (isReload()) {
      // rAF defers past the browser's own scroll restoration on reload
      requestAnimationFrame(() => {
        listRef.current?.scrollTo({ top: 0, behavior: 'auto' })
      })
      return
    }
    const id = activeCivId
    if (!id) return
    const row = listRef.current.querySelector(`[data-civ-id="${id}"]`) as HTMLElement | null
    if (row) {
      requestAnimationFrame(() => {
        row.scrollIntoView({ block: 'start' })
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col h-dvh bg-background text-foreground">
      <ChronologyHeader isDesktop={isDesktop} ribbonMode={ribbonMode} onRibbonModeChange={setRibbonMode} onSearchOpen={() => setSearchOpen(true)} />
      <CivIconsStrip />

      <TimelineRibbon
        mode={isDesktop ? 'packed' : 'swim'}
        activeCivId={activeCivId}
        onSelect={setActiveCivId}
        scrollRef={ribbonScrollRef}
        ribbonMode={ribbonMode}
        onRibbonModeChange={setRibbonMode}
        soloChainId={soloChainId}
        onChainSolo={setSoloChainId}
      />

      {isDesktop ? (
        <DetailPane activeCivId={activeCivId} onSelect={setActiveCivId} />
      ) : (
        <CivList
          activeCivId={activeCivId}
          onActiveCivChange={setActiveCivId}
          listRef={listRef}
          soloChainId={soloChainId}
          onChainSolo={setSoloChainId}
        />
      )}

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  )
}
