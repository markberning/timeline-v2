'use client'

import { useState, useRef } from 'react'
import type { NarrativeChapter, TlEvent } from '@/lib/types'
import { Lightbox } from './lightbox'

interface ChapterAccordionProps {
  chapter: NarrativeChapter
  civilizationId: string
  chapterEvents: TlEvent[]
  initialOpen?: boolean
}

export function ChapterAccordion({ chapter, civilizationId, chapterEvents, initialOpen = false }: ChapterAccordionProps) {
  const [open, setOpen] = useState(initialOpen)
  const [showMapLightbox, setShowMapLightbox] = useState(false)
  const [mapExists, setMapExists] = useState(true)
  const [justCollapsed, setJustCollapsed] = useState(false)
  const headerRef = useRef<HTMLButtonElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const mapSrc = `/maps/${civilizationId}/chapter-${chapter.number}.png`

  function collapse() {
    setOpen(false)
    setJustCollapsed(true)
    requestAnimationFrame(() => {
      headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    setTimeout(() => setJustCollapsed(false), 1500)
  }

  function onTouchStart(e: React.TouchEvent) {
    if (e.touches.length !== 1) { touchStart.current = null; return }
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    if (dx > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      collapse()
    }
  }

  function toggle(e: React.MouseEvent) {
    if ((e.target as HTMLElement).closest('.event-link')) return
    if (open) {
      collapse()
    } else {
      setOpen(true)
      setTimeout(() => {
        headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 50)
    }
  }


  return (
    <section id={`chapter-${chapter.number}`} className="border-b border-foreground/10 last:border-b-0">
      <button
        ref={headerRef}
        onClick={toggle}
        className="w-full text-left py-5 flex gap-3 items-start sticky top-[40px] z-10 scroll-mt-[40px] transition-colors duration-[1200ms]"
        style={{ backgroundColor: justCollapsed ? 'color-mix(in srgb, var(--accent) 15%, var(--background))' : 'var(--background)' }}
      >
        <span
          className="text-sm font-bold shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white mt-0.5"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          {chapter.number}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-semibold">{chapter.title}</h2>
            <span className={`text-foreground/30 text-lg shrink-0 transition-transform duration-200 ${open ? 'rotate-90' : ''}`}>
              &#x203A;
            </span>
          </div>
          {chapter.dateRange && (
            <p className="text-[0.75em] text-foreground/60 mt-0.5">{chapter.dateRange}</p>
          )}
          {!open && chapter.summary && (
            <p className="text-foreground mt-2">{chapter.summary}</p>
          )}
          {!open && chapterEvents.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {chapterEvents.map(ev => (
                <span
                  key={ev.id}
                  className="event-link event-chip text-[0.7em] px-2 py-0.5 rounded-full border"
                  data-event-id={ev.id}
                  data-category={ev.category}
                >
                  {ev.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </button>

      {open && (
        <div className="pb-8" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {/* Chapter map */}
          {mapExists && (
            <div
              className="mb-6 rounded-lg overflow-hidden bg-foreground/5 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setShowMapLightbox(true) }}
            >
              <img
                src={mapSrc}
                alt={`Map for Chapter ${chapter.number}: ${chapter.title}`}
                className="w-full"
                onError={() => setMapExists(false)}
              />
            </div>
          )}

          <article
            className="prose dark:prose-invert max-w-none px-0"
            dangerouslySetInnerHTML={{ __html: chapter.contentHtml }}
          />

          <button
            onClick={collapse}
            className="mt-6 w-full py-3 text-sm text-foreground/50 hover:text-foreground/80 transition-colors border-t border-foreground/10"
          >
            Close Chapter {chapter.number}
          </button>
        </div>
      )}

      {showMapLightbox && (
        <Lightbox
          src={mapSrc}
          alt={`Map for Chapter ${chapter.number}: ${chapter.title}`}
          onClose={() => setShowMapLightbox(false)}
        />
      )}
    </section>
  )
}
