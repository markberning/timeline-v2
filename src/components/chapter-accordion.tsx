'use client'

import { useState, useRef, useCallback } from 'react'
import type { NarrativeChapter } from '@/lib/types'

interface ChapterAccordionProps {
  chapter: NarrativeChapter
  initialOpen?: boolean
}

export function ChapterAccordion({ chapter, initialOpen = false }: ChapterAccordionProps) {
  const [open, setOpen] = useState(initialOpen)
  const headerRef = useRef<HTMLButtonElement>(null)

  function collapse() {
    if (!headerRef.current) return
    // Remember where the header is on screen before content disappears
    const offsetBefore = headerRef.current.getBoundingClientRect().top
    setOpen(false)
    // After React removes the content, adjust scroll so header stays in place
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

  const handleContentTap = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest('a, button, input, select, textarea')) return
    collapse()
  }, [])

  return (
    <section id={`chapter-${chapter.number}`} className="border-b border-foreground/10 last:border-b-0">
      <button
        ref={headerRef}
        onClick={toggle}
        className="w-full text-left py-5 flex gap-3 items-start sticky top-0 z-10 bg-background scroll-mt-0"
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
            <p className="text-[0.75em] text-foreground/40 mt-0.5">{chapter.dateRange}</p>
          )}
          {!open && chapter.summary && (
            <p className="text-foreground mt-2">{chapter.summary}</p>
          )}
        </div>
      </button>

      {open && (
        <div className="pb-8 cursor-pointer" onClick={handleContentTap}>
          <article
            className="prose dark:prose-invert max-w-none px-0"
            dangerouslySetInnerHTML={{ __html: chapter.contentHtml }}
          />
        </div>
      )}
    </section>
  )
}
