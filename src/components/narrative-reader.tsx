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
  const [hasHighlight, setHasHighlight] = useState(false)
  const swipeStart = useRef<{ x: number; y: number } | null>(null)

  const eventMap = new Map(events.map(e => [e.id, e]))
  const glossaryMap = new Map(glossary.map(g => [g.wikiSlug, g]))
  const crossLinkMap = new Map(crossLinks.map(cl => [cl.id, cl]))

  // Remember which civ was last viewed so the home page can highlight it
  useEffect(() => {
    localStorage.setItem('last-viewed-civ', civilizationId)
  }, [civilizationId])

  // Load saved progress on mount + handle search highlight
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const ch = params.get('chapter')
    const hl = params.get('highlight')
    const snippet = params.get('snippet')

    if (ch) {
      const n = parseInt(ch, 10)
      if (!isNaN(n) && chapters.some(c => c.number === n)) {
        setOpenChapter(n)

        if (hl) {
          setHasHighlight(true)
          const timer = setTimeout(() => {
            const container = document.querySelector('[data-chapter-content]') as HTMLElement | null
            if (!container) return

            const snippetLower = snippet?.toLowerCase()
            const termLower = hl.toLowerCase()
            const paragraphs = container.querySelectorAll('p')

            // Find the paragraph containing the snippet (best match), or fall back to first term match
            let target: Element | null = null
            if (snippetLower) {
              for (const p of paragraphs) {
                if (p.textContent?.toLowerCase().includes(snippetLower)) { target = p; break }
              }
            }
            if (!target) {
              for (const p of paragraphs) {
                if (p.textContent?.toLowerCase().includes(termLower)) { target = p; break }
              }
            }
            if (!target) return

            // Find the exact text node containing the search term and create a Range around it
            const walker = document.createTreeWalker(target, NodeFilter.SHOW_TEXT)
            let textNode: Text | null = null
            let charIdx = -1
            while ((textNode = walker.nextNode() as Text | null)) {
              const idx = textNode.textContent?.toLowerCase().indexOf(termLower) ?? -1
              if (idx !== -1) { charIdx = idx; break }
            }

            if (!textNode || charIdx === -1) {
              // Fallback: scroll to paragraph
              target.scrollIntoView({ behavior: 'auto', block: 'center' })
              return
            }

            // Create a range around the matched word
            const range = document.createRange()
            range.setStart(textNode, charIdx)
            range.setEnd(textNode, charIdx + hl.length)
            const rangeRect = range.getBoundingClientRect()

            // Scroll the word into view
            target.scrollIntoView({ behavior: 'auto', block: 'center' })

            requestAnimationFrame(() => {
              const rect = range.getBoundingClientRect()
              if (rect.width === 0 || rect.height === 0) return

              // Highlight just the line containing the word (full width, line height)
              const pRect = target!.getBoundingClientRect()
              const overlay = document.createElement('div')
              overlay.style.cssText = `position:fixed;top:${rect.top - 2}px;left:${pRect.left - 4}px;width:${pRect.width + 8}px;height:${rect.height + 4}px;background:rgba(217,119,6,0.2);border-radius:3px;pointer-events:none;z-index:50;transition:opacity 0.5s ease;`
              document.body.appendChild(overlay)
              setTimeout(() => { overlay.style.opacity = '0'; setTimeout(() => overlay.remove(), 500) }, 5000)
            })
          }, 1200)
          return () => clearTimeout(timer)
        }
        return
      }
    }
    const progress = loadProgress(civilizationId)
    if (progress && chapters.some(c => c.number === progress.chapter)) {
      setSavedProgress(progress)
    }
  }, [chapters, civilizationId])

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
              suppressScrollOnOpen={hasHighlight}
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
