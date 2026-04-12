'use client'

import { useState, useCallback } from 'react'
import type { NarrativeChapter, TlEvent, GlossaryEntry } from '@/lib/types'
import { ChapterAccordion } from './chapter-accordion'
import { EventSheet } from './event-sheet'
import { GlossarySheet } from './glossary-sheet'

interface NarrativeReaderProps {
  civilizationId: string
  chapters: NarrativeChapter[]
  events: TlEvent[]
  glossary: GlossaryEntry[]
}

export function NarrativeReader({ civilizationId, chapters, events, glossary }: NarrativeReaderProps) {
  const [activeEvent, setActiveEvent] = useState<TlEvent | null>(null)
  const [activeGlossary, setActiveGlossary] = useState<GlossaryEntry | null>(null)
  const [openChapter, setOpenChapter] = useState<number | null>(null)

  const eventMap = new Map(events.map(e => [e.id, e]))
  const glossaryMap = new Map(glossary.map(g => [g.wikiSlug, g]))

  const handleClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement
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
  }, [eventMap, glossaryMap])

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="reading-content" onClick={handleClick}>
        {chapters.map(ch => (
          <ChapterAccordion
            key={ch.slug}
            chapter={ch}
            civilizationId={civilizationId}
            chapterEvents={ch.eventIds.map(id => eventMap.get(id)).filter((e): e is TlEvent => !!e)}
            open={openChapter === ch.number}
            hidden={openChapter !== null && openChapter !== ch.number}
            onExpand={() => setOpenChapter(ch.number)}
            onCollapse={() => setOpenChapter(null)}
          />
        ))}
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
    </>
  )
}
