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

interface ReadingProgress {
  chapter: number
  scrollPct: number
  timestamp: number
}

function loadProgress(tlId: string): ReadingProgress | null {
  try {
    const raw = localStorage.getItem(`reading-progress-${tlId}`)
    if (!raw) return null
    const p = JSON.parse(raw) as ReadingProgress
    // Expire after 90 days
    if (Date.now() - p.timestamp > 90 * 24 * 60 * 60 * 1000) return null
    // Don't show if user dismissed and hasn't scrolled since
    const dismissedAt = localStorage.getItem(`reading-dismissed-${tlId}`)
    if (dismissedAt && p.timestamp <= Number(dismissedAt)) return null
    return p
  } catch { return null }
}

function saveProgress(tlId: string, chapter: number, scrollPct: number) {
  localStorage.setItem(`reading-progress-${tlId}`, JSON.stringify({ chapter, scrollPct, timestamp: Date.now() }))
}

function dismissProgress(tlId: string) {
  localStorage.setItem(`reading-dismissed-${tlId}`, String(Date.now()))
}

export function NarrativeReader({ civilizationId, chapters, events, glossary, crossLinks }: NarrativeReaderProps) {
  const router = useRouter()
  const [activeEvent, setActiveEvent] = useState<TlEvent | null>(null)
  const [activeGlossary, setActiveGlossary] = useState<GlossaryEntry | null>(null)
  const [activeCrossLink, setActiveCrossLink] = useState<CrossLink | null>(null)
  const [openChapter, setOpenChapter] = useState<number | null>(null)
  const [savedProgress, setSavedProgress] = useState<ReadingProgress | null>(null)
  const [resumeDismissed, setResumeDismissed] = useState(false)
  const pendingScrollPct = useRef<number | null>(null)
  const swipeStart = useRef<{ x: number; y: number } | null>(null)

  const eventMap = new Map(events.map(e => [e.id, e]))
  const glossaryMap = new Map(glossary.map(g => [g.wikiSlug, g]))
  const crossLinkMap = new Map(crossLinks.map(cl => [cl.id, cl]))

  // Remember which civ was last viewed so the home page can highlight it
  useEffect(() => {
    localStorage.setItem('last-viewed-civ', civilizationId)
  }, [civilizationId])

  const highlightTermRef = useRef<string | null>(null)

  // Load saved progress on mount
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const ch = params.get('chapter')
    const hl = params.get('highlight')
    if (hl) highlightTermRef.current = hl
    if (ch) {
      const n = parseInt(ch, 10)
      if (!isNaN(n) && chapters.some(c => c.number === n)) {
        setOpenChapter(n)
        return
      }
    }
    const progress = loadProgress(civilizationId)
    if (progress && chapters.some(c => c.number === progress.chapter)) {
      setSavedProgress(progress)
    }
  }, [chapters, civilizationId])

  // After chapter opens with a highlight term, find and scroll to the match.
  // Uses a ref (not state) so no re-render is triggered. Injects a visible
  // overlay div positioned over the matching paragraph.
  useEffect(() => {
    if (!highlightTermRef.current || openChapter === null) return
    const term = highlightTermRef.current
    highlightTermRef.current = null

    const timer = setTimeout(() => {
      const container = document.querySelector('[data-chapter-content]') as HTMLElement | null
      if (!container) return

      const termLower = term.toLowerCase()
      const paragraphs = container.querySelectorAll('p')
      for (const p of paragraphs) {
        if (!p.textContent?.toLowerCase().includes(termLower)) continue

        // Inject a highlight overlay as a sibling div
        const overlay = document.createElement('div')
        overlay.setAttribute('data-search-highlight', '1')
        overlay.style.cssText = `
          position: absolute;
          left: -8px;
          right: -8px;
          top: -4px;
          bottom: -4px;
          background: rgba(217, 119, 6, 0.2);
          border-left: 3px solid #d97706;
          border-radius: 4px;
          pointer-events: none;
          transition: opacity 0.5s ease;
          z-index: 1;
        `
        // Make the paragraph a positioning context
        const prevPosition = p.style.position
        p.style.position = 'relative'
        p.appendChild(overlay)

        // Scroll to it
        p.scrollIntoView({ behavior: 'smooth', block: 'center' })

        // Fade out after 5 seconds
        setTimeout(() => {
          overlay.style.opacity = '0'
          setTimeout(() => {
            overlay.remove()
            p.style.position = prevPosition
          }, 500)
        }, 5000)

        break
      }
    }, 800)

    return () => clearTimeout(timer)
  }, [openChapter])

  // Auto-save scroll position while reading (debounced)
  useEffect(() => {
    if (openChapter === null) return
    let timeout: ReturnType<typeof setTimeout>
    function onScroll() {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const pct = docHeight > 0 ? window.scrollY / docHeight : 0
        saveProgress(civilizationId, openChapter!, Math.min(1, pct))
      }, 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    // Save immediately when chapter opens
    onScroll()
    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', onScroll)
    }
  }, [openChapter, civilizationId])

  // Restore scroll position after chapter expands
  useEffect(() => {
    if (openChapter === null || pendingScrollPct.current === null) return
    const pct = pendingScrollPct.current
    pendingScrollPct.current = null
    // Wait for the chapter content to render and the scroll-to-top effect to finish
    const t = setTimeout(() => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      window.scrollTo({ top: docHeight * pct, behavior: 'auto' })
    }, 400)
    return () => clearTimeout(t)
  }, [openChapter])

  function resumeReading() {
    if (!savedProgress) return
    pendingScrollPct.current = savedProgress.scrollPct
    setOpenChapter(savedProgress.chapter)
    setSavedProgress(null)
    setResumeDismissed(false)
  }

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
      {savedProgress && !resumeDismissed && openChapter === null && (() => {
        const ch = chapters.find(c => c.number === savedProgress.chapter)
        if (!ch) return null
        const pct = Math.round(savedProgress.scrollPct * 100)
        return (
          <div className="mb-4 rounded-lg py-3 px-4 flex items-center gap-3 cursor-pointer hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--accent)', color: 'white' }} onClick={resumeReading}>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold">Continue Reading</div>
              <div className="text-sm opacity-80 mt-0.5 font-[family-name:var(--font-lora)]">
                Ch {ch.number}: {ch.title} · {pct}%
              </div>
            </div>
            <div className="shrink-0 w-9 h-9 rounded-full border-2 border-white/40 flex items-center justify-center">
              <span className="text-lg leading-none">›</span>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setResumeDismissed(true); dismissProgress(civilizationId) }}
              className="shrink-0 text-white/50 hover:text-white text-lg"
              aria-label="Dismiss"
            >
              ×
            </button>
          </div>
        )
      })()}
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
              nextChapterTitle={next ? next.title : null}
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
