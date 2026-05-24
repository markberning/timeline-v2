'use client'

import { useState, useRef, useEffect } from 'react'
import { SORTED_CIVS } from '@/lib/chronology-data'
import { TL_CHAINS } from '../../../reference-data/tl-chains'
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

  // Deep-link from a Civ reader's breadcrumb: ?chain=<id> solos that chain and
  // jumps to its first built civ; ?area=<region> jumps to that region's first
  // built civ. Runs before the generic scroll-to-active effect and wins.
  useEffect(() => {
    if (typeof window === 'undefined') return
    const p = new URLSearchParams(window.location.search)
    const chainId = p.get('chain')
    const area = p.get('area')
    let target: string | null = null
    if (chainId) {
      const chain = TL_CHAINS.find(c => c.id === chainId)
      if (chain) {
        setSoloChainId(chainId)
        const first = chain.entries.find(e => SORTED_CIVS.some(c => c.id === e.timelineId && c.hasContent))
          ?? chain.entries[0]
        target = first?.timelineId ?? null
      }
    } else if (area) {
      target = SORTED_CIVS.find(c => c.region === area && c.hasContent)?.id
        ?? SORTED_CIVS.find(c => c.region === area)?.id
        ?? null
    }
    if (target) {
      setActiveCivId(target)
      const id = target
      requestAnimationFrame(() => {
        listRef.current?.querySelector(`[data-civ-id="${id}"]`)?.scrollIntoView({ block: 'start' })
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // On mount, scroll the list to the initial active civ.
  // On reload, force the list to the top instead of restoring scroll position.
  useEffect(() => {
    if (!listRef.current) return
    // A ?chain= / ?area= deep-link owns the initial scroll (effect above).
    const dl = new URLSearchParams(window.location.search)
    if (dl.get('chain') || dl.get('area')) return
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
    <div className="flex flex-col flex-1 min-h-0 bg-background text-foreground">
      <ChronologyHeader isDesktop={isDesktop} ribbonMode={ribbonMode} onRibbonModeChange={setRibbonMode} onSearchOpen={() => setSearchOpen(true)} />
      <CivIconsStrip />

      {isDesktop ? (
        <div className="flex-1 min-h-0 flex">
          {/* LEFT — selected civ on top, chain list below */}
          <div className="w-[38%] min-w-[320px] max-w-[460px] flex flex-col min-h-0 border-r border-foreground/10">
            <DetailPane activeCivId={activeCivId} onSelect={setActiveCivId} />
          </div>
          {/* RIGHT — timeline ribbon (tall column) */}
          <div className="flex-1 min-w-0 min-h-0 flex flex-col overflow-hidden">
            <TimelineRibbon
              mode="packed"
              side
              activeCivId={activeCivId}
              onSelect={setActiveCivId}
              scrollRef={ribbonScrollRef}
              ribbonMode={ribbonMode}
              onRibbonModeChange={setRibbonMode}
              soloChainId={soloChainId}
              onChainSolo={setSoloChainId}
            />
          </div>
        </div>
      ) : (
        <>
          <TimelineRibbon
            mode="swim"
            activeCivId={activeCivId}
            onSelect={setActiveCivId}
            scrollRef={ribbonScrollRef}
            ribbonMode={ribbonMode}
            onRibbonModeChange={setRibbonMode}
            soloChainId={soloChainId}
            onChainSolo={setSoloChainId}
          />
          <CivList
            activeCivId={activeCivId}
            onActiveCivChange={setActiveCivId}
            listRef={listRef}
            soloChainId={soloChainId}
            onChainSolo={setSoloChainId}
          />
        </>
      )}

      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  )
}
