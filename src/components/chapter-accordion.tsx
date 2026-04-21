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
  const [mapExists, setMapExists] = useState<boolean | null>(null)
  const [justCollapsed, setJustCollapsed] = useState(false)
  const [summaryOpen, setSummaryOpen] = useState(false)
  // Measured page-nav height used for sticky header top + scroll offset.
  const [navHeight, setNavHeight] = useState(48)
  const headerRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const [mapScrolledPast, setMapScrolledPast] = useState(false)
  const savedScrollY = useRef(0)
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const nav = document.querySelector('[data-top-nav]') as HTMLElement | null
    if (nav) setNavHeight(Math.ceil(nav.getBoundingClientRect().height))
  }, [])

  // Track when the full-size map scrolls out of view
  useEffect(() => {
    if (!open || mapExists !== true) { setMapScrolledPast(false); return }
    const el = mapRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setMapScrolledPast(!entry.isIntersecting),
      { threshold: 0 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [open, mapExists])

  const mapSrc = `/maps/${civilizationId}/chapter-${chapter.number}.webp`

  useEffect(() => {
    let cancelled = false
    const img = new window.Image()
    img.onload = () => { if (!cancelled) setMapExists(true) }
    img.onerror = () => { if (!cancelled) setMapExists(false) }
    img.src = mapSrc
    return () => { cancelled = true }
  }, [mapSrc])

  function openLightbox() {
    savedScrollY.current = window.scrollY
    setShowMapLightbox(true)
  }

  function closeLightbox() {
    setShowMapLightbox(false)
    requestAnimationFrame(() => {
      window.scrollTo({ top: savedScrollY.current, behavior: 'auto' })
    })
  }

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
    setSummaryOpen(false)
    onExpand()
  }

  function estimateReadingTime(html: string): number {
    const text = html.replace(/<[^>]+>/g, ' ')
    const words = text.trim().split(/\s+/).length
    return Math.max(1, Math.round(words / 200))
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
      else setSummaryOpen(!summaryOpen)
      return
    }
    if (!open) return
    const swipeRight = dx > 60 && Math.abs(dx) > Math.abs(dy) * 1.5
    if (swipeRight) collapse()
  }

  function formatYearRange(): string {
    if (chapterEvents.length === 0) return ''
    const years = chapterEvents.map(e => e.year)
    const startYear = Math.min(...years)
    const endYear = Math.max(...years)
    const fmt = (y: number) => {
      const abs = Math.abs(y).toLocaleString()
      return y <= 0 ? `${abs} BCE` : `${abs} CE`
    }
    return `${fmt(startYear)} – ${fmt(endYear)}`
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
        className="sticky z-10 transition-colors duration-[1200ms] -mx-8 px-8"
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
          className="w-full text-left pt-5 pb-2 flex gap-3 items-baseline touch-manipulation cursor-pointer select-none"
        >
          <span
            className="text-[0.85em] font-bold shrink-0 tabular-nums"
            style={{ color: 'var(--accent)' }}
          >
            {String(chapter.number).padStart(2, '0')}
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <h2 className="text-xl font-semibold font-[family-name:var(--font-lora)]">
                  {chapter.title}
                  <span className={`inline-block text-foreground/50 text-2xl font-bold transition-transform duration-200 ml-1.5 ${summaryOpen ? 'rotate-90 translate-x-1' : ''}`}>
                    &#x203A;
                  </span>
                </h2>
                {chapter.dateRange && (
                  <p className="text-[0.75em] text-foreground/50 mt-0.5 italic font-[family-name:var(--font-lora)]">{chapter.dateRange}</p>
                )}
              </div>
              {chapterEvents.length > 0 && (() => {
                const years = chapterEvents.map(e => e.year)
                const startYear = Math.min(...years)
                const endYear = Math.max(...years)
                const fmtAbs = (y: number) => Math.abs(y).toLocaleString()
                const suffix = endYear <= 0 ? 'BCE' : 'CE'
                return (
                  <div className="shrink-0 text-right text-xs text-foreground/40 leading-tight mt-0.5">
                    <div>{fmtAbs(startYear)}</div>
                    <div className="text-[0.7em] my-px">↓</div>
                    <div>{fmtAbs(endYear)} {suffix}</div>
                  </div>
                )
              })()}
            </div>
          </div>
        </div>

        {/* Summary expanded state */}
        {!open && summaryOpen && chapter.summaryBullets && chapter.summaryBullets.length > 0 && (
          <div className="pb-5 pl-10">
            <button
              onClick={expand}
              className="mt-3 w-full py-4 px-5 text-left rounded-lg transition-colors hover:opacity-90 flex items-center gap-3"
              style={{ backgroundColor: 'var(--accent)', color: 'white' }}
            >
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold tracking-wide uppercase flex items-center gap-1.5">
                  <span className="inline-block w-3.5 h-3.5 rounded-[3px] bg-white/30" />
                  Read the Full Chapter
                </div>
                <div className="text-base font-semibold mt-1 font-[family-name:var(--font-lora)]">{chapter.title}</div>
                <div className="text-sm opacity-70 mt-0.5">
                  Chapter {chapter.number} · {chapterEvents.length} events
                </div>
                {formatYearRange() && (
                  <div className="text-sm opacity-70 mt-0.5">
                    {formatYearRange()}
                  </div>
                )}
              </div>
              <div className="shrink-0 w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center">
                <span className="text-lg leading-none">›</span>
              </div>
            </button>

            {chapter.summaryBullets && chapter.summaryBullets.length > 0 && (
              <div className="mt-4">
                <div className="text-xs font-semibold tracking-[0.15em] text-foreground/40 uppercase">
                  Summary · for review
                </div>
                <div className="mt-2 border-l-[2.5px] pl-4" style={{ borderColor: 'var(--accent)' }}>
                  <ul className="space-y-2 list-disc list-outside pl-5 text-[0.82em]">
                    {chapter.summaryBullets.map((html, i) => (
                      <li
                        key={i}
                        className="leading-snug text-foreground"
                        dangerouslySetInnerHTML={{ __html: html }}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Collapsed — just the header row, no extra content */}
        {!open && !summaryOpen && <div className="pb-2" />}
      </div>

      {open && (
        <div className="pb-8" onTouchStart={onBodyTouchStart} onTouchEnd={onBodyTouchEnd}>
          {/* Chapter map — only mount when the probe in useEffect confirmed
              the file exists, so civs without maps don't reserve layout space. */}
          {mapExists === true && (
            <div
              ref={mapRef}
              className="mb-6 rounded-lg overflow-hidden bg-foreground/5 cursor-pointer"
              style={{ aspectRatio: '1408 / 768' }}
              onClick={(e) => { e.stopPropagation(); openLightbox() }}
            >
              <img
                src={mapSrc}
                alt={`Map for Chapter ${chapter.number}: ${chapter.title}`}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Mini map thumbnail — appears when full map scrolls out of view */}
          {mapExists === true && mapScrolledPast && (
            <div
              className="fixed bottom-4 right-4 z-30 rounded-lg overflow-hidden shadow-lg border border-foreground/10 cursor-pointer transition-opacity hover:opacity-90"
              style={{ width: '100px', aspectRatio: '1408 / 768' }}
              onClick={(e) => { e.stopPropagation(); openLightbox() }}
            >
              <img
                src={mapSrc}
                alt="Map"
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
                className="flex-1 py-3 text-base font-semibold rounded-lg transition-colors hover:opacity-80"
                style={{ color: 'var(--accent-text)', backgroundColor: 'color-mix(in srgb, var(--accent) 20%, transparent)' }}
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
          onClose={() => closeLightbox()}
        />
      )}
    </section>
  )
}
