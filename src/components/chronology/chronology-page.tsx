'use client'

import { useState, useRef, useEffect } from 'react'
import { SORTED_CIVS } from '@/lib/chronology-data'
import { ChronologyHeader } from './chronology-header'
import { TimelineRibbon } from './timeline-ribbon'
import { CivList } from './civ-list'
import { DetailPane } from './detail-pane'

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

// Default to the first civ with content
const defaultCiv = SORTED_CIVS.find(c => c.hasContent)?.id ?? SORTED_CIVS[0]?.id ?? null

export function ChronologyPage() {
  const isDesktop = useIsDesktop()
  const [activeCivId, setActiveCivId] = useState<string | null>(defaultCiv)
  const ribbonScrollRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col h-dvh bg-background text-foreground">
      <ChronologyHeader isDesktop={isDesktop} />

      <TimelineRibbon
        mode={isDesktop ? 'packed' : 'swim'}
        activeCivId={activeCivId}
        onSelect={setActiveCivId}
        scrollRef={ribbonScrollRef}
      />

      {isDesktop ? (
        <DetailPane activeCivId={activeCivId} onSelect={setActiveCivId} />
      ) : (
        <CivList
          activeCivId={activeCivId}
          onActiveCivChange={setActiveCivId}
          listRef={listRef}
        />
      )}
    </div>
  )
}
