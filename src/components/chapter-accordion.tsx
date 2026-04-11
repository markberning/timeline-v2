'use client'

import { useState, useRef } from 'react'
import type { NarrativeChapter } from '@/lib/types'

interface ChapterAccordionProps {
  chapter: NarrativeChapter
  civilizationId: string
  initialOpen?: boolean
}

export function ChapterAccordion({ chapter, civilizationId, initialOpen = false }: ChapterAccordionProps) {
  const [open, setOpen] = useState(initialOpen)
  const [mapMinimized, setMapMinimized] = useState(false)
  const [mapExists, setMapExists] = useState(true)
  const headerRef = useRef<HTMLButtonElement>(null)

  const mapSrc = `/maps/${civilizationId}/chapter-${chapter.number}.png`

  function collapse() {
    if (!headerRef.current) return
    const offsetBefore = headerRef.current.getBoundingClientRect().top
    setOpen(false)
    requestAnimationFrame(() => {
      if (!headerRef.current) return
      const offsetAfter = headerRef.current.getBoundingClientRect().top
      window.scrollBy(0, offsetAfter - offsetBefore)
    })
  }

  function toggle() {
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
        className="w-full text-left py-5 flex gap-3 items-start sticky top-[40px] z-10 bg-background scroll-mt-[40px]"
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
        </div>
      </button>

      {open && (
        <div className="pb-8">
          {/* Chapter map */}
          {mapExists && !mapMinimized && (
            <div
              className="mb-6 rounded-lg overflow-hidden bg-foreground/5 cursor-pointer"
              onClick={(e) => { e.stopPropagation(); setMapMinimized(true) }}
            >
              <img
                src={mapSrc}
                alt={`Map for Chapter ${chapter.number}: ${chapter.title}`}
                className="w-full"
                onError={() => setMapExists(false)}
              />
            </div>
          )}
          {mapExists && mapMinimized && (
            <button
              onClick={(e) => { e.stopPropagation(); setMapMinimized(false) }}
              className="mb-6 w-full py-2 text-xs text-foreground/50 hover:text-foreground/80 transition-colors border border-foreground/10 rounded-lg"
            >
              Show map
            </button>
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

    </section>
  )
}
