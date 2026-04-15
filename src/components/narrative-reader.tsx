'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import type { NarrativeChapter, TlEvent, GlossaryEntry, CrossLink } from '@/lib/types'
import { ChapterAccordion } from './chapter-accordion'
import { EventSheet } from './event-sheet'
import { GlossarySheet } from './glossary-sheet'
import { CrossLinkSheet } from './cross-link-sheet'

interface NarrativeReaderProps {
  civilizationId: string
  chapters: NarrativeChapter[]
  events: TlEvent[]
  glossary: GlossaryEntry[]
  crossLinks: CrossLink[]
}

export function NarrativeReader({ civilizationId, chapters, events, glossary, crossLinks }: NarrativeReaderProps) {
  const router = useRouter()
  const [activeEvent, setActiveEvent] = useState<TlEvent | null>(null)
  const [activeGlossary, setActiveGlossary] = useState<GlossaryEntry | null>(null)
  const [activeCrossLink, setActiveCrossLink] = useState<CrossLink | null>(null)
  const [openChapter, setOpenChapter] = useState<number | null>(null)
  const swipeStart = useRef<{ x: number; y: number } | null>(null)

  const eventMap = new Map(events.map(e => [e.id, e]))
  const glossaryMap = new Map(glossary.map(g => [g.wikiSlug, g]))
  const crossLinkMap = new Map(crossLinks.map(cl => [cl.id, cl]))

  // Auto-expand a chapter when arriving via ?chapter=N (from a cross-link jump).
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const ch = params.get('chapter')
    if (ch) {
      const n = parseInt(ch, 10)
      if (!isNaN(n) && chapters.some(c => c.number === n)) {
        setOpenChapter(n)
      }
    }
  }, [chapters])

  const handleClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    const crossLinkEl = target.closest('.cross-link') as HTMLElement | null
    if (crossLinkEl) {
      e.preventDefault()
      e.stopPropagation()
      const id = crossLinkEl.dataset.crossId
      if (id) {
        const cl = crossLinkMap.get(id)
        if (cl) setActiveCrossLink(cl)
      }
      return
    }
    const eventLink = target.closest('.event-link') as HTMLElement | null
    if (eventLink) {
      e.preventDefault()
      e.stopPropagation()
      const eventId = eventLink.dataset.eventId
      if (eventId) {
        const event = eventMap.get(eventId)
        if (event) setActiveEvent(event)
      }
      return
    }
    const glossaryLink = target.closest('.glossary-link') as HTMLElement | null
    if (glossaryLink) {
      e.preventDefault()
      e.stopPropagation()
      const slug = glossaryLink.dataset.wikiSlug
      if (slug) {
        const entry = glossaryMap.get(slug)
        if (entry) setActiveGlossary(entry)
      }
    }
  }, [eventMap, glossaryMap, crossLinkMap])

  function onTouchStart(e: React.TouchEvent) {
    if (openChapter !== null) return
    if (e.touches.length !== 1) { swipeStart.current = null; return }
    swipeStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  function onTouchEnd(e: React.TouchEvent) {
    const s = swipeStart.current
    swipeStart.current = null
    if (!s || openChapter !== null) return
    const t = e.changedTouches[0]
    const dx = t.clientX - s.x
    const dy = t.clientY - s.y
    if (dx > 80 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      router.push('/')
    }
  }

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className="reading-content"
        onClick={handleClick}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {chapters.map((ch, i) => {
          const next = chapters[i + 1]
          return (
            <ChapterAccordion
              key={ch.slug}
              chapter={ch}
              civilizationId={civilizationId}
              chapterEvents={ch.eventIds.map(id => eventMap.get(id)).filter((e): e is TlEvent => !!e)}
              open={openChapter === ch.number}
              hidden={openChapter !== null && openChapter !== ch.number}
              nextChapterNumber={next ? next.number : null}
              onExpand={() => setOpenChapter(ch.number)}
              onCollapse={() => setOpenChapter(null)}
              onReadNext={() => next && setOpenChapter(next.number)}
            />
          )
        })}
      </div>

      <EventSheet
        event={activeEvent}
        onClose={() => setActiveEvent(null)}
        onInnerLinkClick={handleClick}
      />
      <GlossarySheet
        entry={activeGlossary}
        onClose={() => setActiveGlossary(null)}
        onInnerLinkClick={handleClick}
      />
      <CrossLinkSheet
        crossLink={activeCrossLink}
        onClose={() => setActiveCrossLink(null)}
      />
    </>
  )
}
