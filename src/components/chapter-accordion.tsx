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
  nextChapterNumber: number | null
  onExpand: () => void
  onCollapse: () => void
  onReadNext: () => void
}

export function ChapterAccordion({ chapter, civilizationId, chapterEvents, open, hidden, nextChapterNumber, onExpand, onCollapse, onReadNext }: ChapterAccordionProps) {
  const [showMapLightbox, setShowMapLightbox] = useState(false)
  // null = probing; true = map exists; false = 404. Only render the map
  // slot when true, so civs without maps never reserve empty space that
  // later collapses and throws off the chapter open scroll position.
  const [mapExists, setMapExists] = useState<boolean | null>(null)
  const [justCollapsed, setJustCollapsed] = useState(false)
  // Measured page-nav height used for sticky header top + scroll offset.
  const [navHeight, setNavHeight] = useState(48)
  const headerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const nav = document.querySelector('[data-top-nav]') as HTMLElement | null
    if (nav) setNavHeight(Math.ceil(nav.getBoundingClientRect().height))
  }, [])

  const mapSrc = `/maps/${civilizationId}/chapter-${chapter.number}.webp`

  useEffect(() => {
    let cancelled = false
    const img = new window.Image()
    img.onload = () => { if (!cancelled) setMapExists(true) }
    img.onerror = () => { if (!cancelled) setMapExists(false) }
    img.src = mapSrc
    return () => { cancelled = true }
  }, [mapSrc])

  function collapse() {
    onCollapse()
    setJustCollapsed(true)
    // Scroll the section (which has scrollMarginTop: navHeight) so the
    // chapter header lands just below the sticky top nav rather than
    // flush to y=0 behind it.
    requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
    setTimeout(() => setJustCollapsed(false), 1500)
  }

  function expand() {
    onExpand()
  }

  // On expand: scroll to the top of the document. Because siblings are
  // hidden (display:none) when one chapter is open, the opened chapter is
  // always the first visible chapter in the flow and sits right below the
  // page h1 + "N chapters" subtitle. scrollY=0 shows the sticky nav, the
  // h1, the subtitle, and the opened chapter header stacked naturally —
  // same answer whether this was a user tap or a cross-link auto-expand.
  useEffect(() => {
    if (!open) return
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
    requestAnimationFrame(() => {
      requestAnimationFrame(scrollToTop)
    })
    const t1 = setTimeout(scrollToTop, 300)
    return () => clearTimeout(t1)
  }, [open])

  const pointerStart = useRef<{ x: number; y: number } | null>(null)

  function onHeaderPointerDown(e: React.PointerEvent) {
    pointerStart.current = { x: e.clientX, y: e.clientY }
  }

  function onHeaderPointerUp(e: React.PointerEvent) {
    // If the tap landed on an inline link inside a summary bullet, let
    // the click delegation in narrative-reader handle it — don't toggle
    // the chapter. Covers event, glossary, and cross-cultural links.
    const t = e.target as HTMLElement
    if (t.closest('.event-link') || t.closest('.glossary-link') || t.closest('.cross-link')) return
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
    <section
      ref={sectionRef}
      id={`chapter-${chapter.number}`}
      className={`border-b border-foreground/10 last:border-b-0 ${hidden ? 'hidden' : ''}`}
      style={{ scrollMarginTop: `${navHeight}px` }}
    >
      <div
        ref={headerRef}
        className="sticky z-10 transition-colors duration-[1200ms]"
        style={{
          top: `${navHeight}px`,
          backgroundColor: justCollapsed ? 'color-mix(in srgb, var(--accent) 15%, var(--background))' : 'var(--background)',
        }}
      >
        {/* Clickable header row — only this area toggles the chapter. */}
        <div
          role="button"
          tabIndex={0}
          onPointerDown={onHeaderPointerDown}
          onPointerUp={onHeaderPointerUp}
          className="w-full text-left pt-5 pb-2 flex gap-3 items-start touch-manipulation cursor-pointer select-none"
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
          </div>
        </div>

        {/* Non-clickable preview content — outside the pointer zone so text is selectable. */}
        {!open && (
          <div className="pb-5 pl-10">
            {chapter.summaryBullets && chapter.summaryBullets.length > 0 ? (
              <>
                <ul className="mt-1 space-y-2 list-disc list-outside pl-5 text-[0.95em]">
                  {chapter.summaryBullets.map((html, i) => (
                    <li
                      key={i}
                      className="leading-snug text-foreground"
                      dangerouslySetInnerHTML={{ __html: html }}
                    />
                  ))}
                </ul>
                <button
                  onClick={onExpand}
                  className="mt-5 w-full py-3 text-base font-semibold rounded-lg border-2 hover:bg-foreground/5 transition-colors"
                  style={{ color: 'var(--accent-text)', borderColor: 'var(--accent-text)' }}
                >
                  Read Chapter {chapter.number} →
                </button>
              </>
            ) : (
              <>
                {chapter.summary && (
                  <p className="text-foreground mt-1">{chapter.summary}</p>
                )}
                {chapterEvents.length > 0 && (
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
                <button
                  onClick={onExpand}
                  className="mt-5 w-full py-3 text-base font-semibold rounded-lg border-2 hover:bg-foreground/5 transition-colors"
                  style={{ color: 'var(--accent-text)', borderColor: 'var(--accent-text)' }}
                >
                  Read Chapter {chapter.number} →
                </button>
              </>
            )}
          </div>
        )}
      </div>

      {open && (
        <div className="pb-8" onTouchStart={onBodyTouchStart} onTouchEnd={onBodyTouchEnd}>
          {/* Chapter map — only mount when the probe in useEffect confirmed
              the file exists, so civs without maps don't reserve layout space. */}
          {mapExists === true && (
            <div
              className="mb-6 rounded-lg overflow-hidden bg-foreground/5 cursor-pointer"
              style={{ aspectRatio: '1408 / 768' }}
              onClick={(e) => { e.stopPropagation(); setShowMapLightbox(true) }}
            >
              <img
                src={mapSrc}
                alt={`Map for Chapter ${chapter.number}: ${chapter.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <article
            className="prose dark:prose-invert max-w-none px-0 font-[family-name:var(--font-lora)] drop-cap"
            dangerouslySetInnerHTML={{ __html: chapter.contentHtml }}
          />

          <div className="mt-6 pt-4 border-t border-foreground/10 flex items-center gap-3">
            <button
              onClick={collapse}
              aria-label={`Close Chapter ${chapter.number}`}
              className="shrink-0 w-11 h-11 flex items-center justify-center rounded-lg text-foreground/50 hover:text-foreground/80 hover:bg-foreground/5 transition-colors text-2xl"
            >
              ×
            </button>
            {nextChapterNumber !== null && (
              <button
                onClick={onReadNext}
                className="flex-1 py-3 text-base font-semibold rounded-lg border-2 hover:bg-foreground/5 transition-colors"
                style={{ color: 'var(--accent-text)', borderColor: 'var(--accent-text)' }}
              >
                Read Chapter {nextChapterNumber} →
              </button>
            )}
          </div>
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
