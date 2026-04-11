'use client'

import { useState, useRef, useEffect } from 'react'
import type { NarrativeChapter } from '@/lib/types'

interface ChapterAccordionProps {
  chapter: NarrativeChapter
  initialOpen?: boolean
}

export function ChapterAccordion({ chapter, initialOpen = false }: ChapterAccordionProps) {
  const [open, setOpen] = useState(initialOpen)
  const contentRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLButtonElement>(null)

  function toggle() {
    const next = !open
    setOpen(next)
    // If opening, scroll the header into view after a brief delay for the content to render
    if (next && headerRef.current) {
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
        className="w-full text-left py-5 flex gap-3 items-start scroll-mt-[72px]"
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
            <p className="text-xs text-foreground/40 mt-0.5">{chapter.dateRange}</p>
          )}
          {!open && chapter.summary && (
            <p className="text-sm text-foreground/60 mt-2">{chapter.summary}</p>
          )}
        </div>
      </button>

      {open && (
        <div ref={contentRef} className="pb-8">
          <article
            className="prose prose-lg dark:prose-invert max-w-none px-0"
            dangerouslySetInnerHTML={{ __html: chapter.contentHtml }}
          />
        </div>
      )}
    </section>
  )
}
