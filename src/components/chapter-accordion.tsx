'use client'

import { useState, useRef, useEffect } from 'react'
import type { NarrativeChapter, TlEvent } from '@/lib/types'
import { Lightbox } from './lightbox'

interface ChapterAccordionProps {
  chapter: NarrativeChapter
  civilizationId: string
  chapterEvents: TlEvent[]
  open: boolean
  hidden: boolean
  onExpand: () => void
  onCollapse: () => void
}

export function ChapterAccordion({ chapter, civilizationId, chapterEvents, open, hidden, onExpand, onCollapse }: ChapterAccordionProps) {
  const [showMapLightbox, setShowMapLightbox] = useState(false)
  const [mapExists, setMapExists] = useState(true)
  const [justCollapsed, setJustCollapsed] = useState(false)
  const headerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const mapSrc = `/maps/${civilizationId}/chapter-${chapter.number}.png`

  function collapse() {
    onCollapse()
    setJustCollapsed(true)
    requestAnimationFrame(() => {
      headerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    setTimeout(() => setJustCollapsed(false), 1500)
  }

  function expand() {
    onExpand()
  }

  // After sibling chapters are hidden and the body is mounted, scroll section to top.
  useEffect(() => {
    if (!open) return
    function scrollToSection() {
      const el = sectionRef.current
      if (!el) return
      const targetY = el.offsetTop - 40
      window.scrollTo({ top: targetY, behavior: 'auto' })
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToSection)
    })
    const t1 = setTimeout(scrollToSection, 300)
    return () => clearTimeout(t1)
  }, [open])

  const pointerStart = useRef<{ x: number; y: number } | null>(null)

  function onHeaderPointerDown(e: React.PointerEvent) {
    pointerStart.current = { x: e.clientX, y: e.clientY }
  }

  function onHeaderPointerUp(e: React.PointerEvent) {
    if ((e.target as HTMLElement).closest('.event-link')) return
    const start = pointerStart.current
    pointerStart.current = null
    const dx = start ? e.clientX - start.x : 0
    const dy = start ? e.clientY - start.y : 0
    const moved = Math.abs(dx) > 10 || Math.abs(dy) > 10
    if (!moved) {
      if (open) collapse()
      else expand()
      return
    }
    if (!open) return
    const swipeRight = dx > 60 && Math.abs(dx) > Math.abs(dy) * 1.5
    if (swipeRight) collapse()
  }

  function onBodyTouchStart(e: React.TouchEvent) {
    if (e.touches.length !== 1) { touchStart.current = null; return }
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  function onBodyTouchEnd(e: React.TouchEvent) {
    if (!touchStart.current) return
    const t = e.changedTouches[0]
    const dx = t.clientX - touchStart.current.x
    const dy = t.clientY - touchStart.current.y
    touchStart.current = null
    if (!open) return
    const swipeRight = dx > 60 && Math.abs(dx) > Math.abs(dy) * 1.5
    if (swipeRight) collapse()
  }


  return (
    <section ref={sectionRef} id={`chapter-${chapter.number}`} className={`border-b border-foreground/10 last:border-b-0 ${hidden ? 'hidden' : ''}`}>
      <div
        ref={headerRef}
        role="button"
        tabIndex={0}
        onPointerDown={onHeaderPointerDown}
        onPointerUp={onHeaderPointerUp}
        className="w-full text-left py-5 flex gap-3 items-start sticky top-[40px] z-10 scroll-mt-[40px] transition-colors duration-[1200ms] touch-manipulation cursor-pointer select-none"
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
          {!open && chapter.summaryBullets && chapter.summaryBullets.length > 0 ? (
            <>
              <ul className="mt-3 space-y-2 list-disc list-outside pl-5 text-[0.95em]">
                {chapter.summaryBullets.map((html, i) => (
                  <li
                    key={i}
                    className="leading-snug text-foreground"
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                ))}
              </ul>
              <button
                onClick={(e) => { e.stopPropagation(); onExpand() }}
                className="mt-5 w-full py-3 text-base font-semibold rounded-lg border-2 hover:bg-foreground/5 transition-colors"
                style={{ color: 'var(--accent-text)', borderColor: 'var(--accent-text)' }}
              >
                Read Chapter →
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>

      {open && (
        <div className="pb-8" onTouchStart={onBodyTouchStart} onTouchEnd={onBodyTouchEnd}>
          {/* Chapter map */}
          {mapExists && (
            <div
              className="mb-6 rounded-lg overflow-hidden bg-foreground/5 cursor-pointer"
              style={{ aspectRatio: '1408 / 768' }}
              onClick={(e) => { e.stopPropagation(); setShowMapLightbox(true) }}
            >
              <img
                src={mapSrc}
                alt={`Map for Chapter ${chapter.number}: ${chapter.title}`}
                className="w-full h-full object-cover"
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
