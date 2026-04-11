'use client'

import { useState, useCallback } from 'react'
import type { NarrativeChapter, TlEvent } from '@/lib/types'
import { ChapterAccordion } from './chapter-accordion'
import { EventSheet } from './event-sheet'

interface NarrativeReaderProps {
  chapters: NarrativeChapter[]
  events: TlEvent[]
}

export function NarrativeReader({ chapters, events }: NarrativeReaderProps) {
  const [activeEvent, setActiveEvent] = useState<TlEvent | null>(null)

  // Build event lookup once
  const eventMap = new Map(events.map(e => [e.id, e]))

  const handleClick = useCallback((e: React.MouseEvent) => {
    const link = (e.target as HTMLElement).closest('.event-link') as HTMLElement | null
    if (link) {
      e.preventDefault()
      e.stopPropagation()
      const eventId = link.dataset.eventId
      if (eventId) {
        const event = eventMap.get(eventId)
        if (event) setActiveEvent(event)
      }
    }
  }, [eventMap])

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div className="reading-content" onClick={handleClick}>
        {chapters.map(ch => (
          <ChapterAccordion key={ch.slug} chapter={ch} />
        ))}
      </div>

      <EventSheet
        event={activeEvent}
        onClose={() => setActiveEvent(null)}
      />
    </>
  )
}
