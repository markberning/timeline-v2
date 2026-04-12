'use client'

import { useEffect, useRef, useState } from 'react'
import type { TlEvent } from '@/lib/types'
import { CATEGORY_META } from '@/lib/categories'
import { Lightbox } from './lightbox'

interface EventSheetProps {
  event: TlEvent | null
  onClose: () => void
  onInnerLinkClick?: (e: React.MouseEvent) => void
}

function formatYear(year: number, endYear?: number): string {
  const fmt = (y: number) => y < 0 ? `${Math.abs(y)} BCE` : `${y} CE`
  if (endYear != null && endYear !== year) {
    return `${fmt(year)} – ${fmt(endYear)}`
  }
  return fmt(year)
}

export function EventSheet({ event, onClose, onInnerLinkClick }: EventSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const [imgError, setImgError] = useState(false)
  const [showLightbox, setShowLightbox] = useState(false)
  const pointerStart = useRef<{ x: number; y: number } | null>(null)

  function onHeaderPointerDown(e: React.PointerEvent) {
    pointerStart.current = { x: e.clientX, y: e.clientY }
  }
  function onHeaderPointerUp(e: React.PointerEvent) {
    const start = pointerStart.current
    pointerStart.current = null
    if (!start) return
    const dx = e.clientX - start.x
    const dy = e.clientY - start.y
    const swipeDown = dy > 40 && Math.abs(dy) > Math.abs(dx)
    if (swipeDown) onClose()
  }

  useEffect(() => {
    setImgError(false)
    setShowLightbox(false)
    // Scroll sheet to top when event changes
    if (sheetRef.current) sheetRef.current.scrollTop = 0
  }, [event])

  useEffect(() => {
    if (!event) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [event, onClose])

  if (!event) return null

  const cat = CATEGORY_META[event.category]
  const showImage = event.thumbnailUrl && !imgError

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30"
        onClick={onClose}
      />
      {/* Sheet */}
      <div
        ref={sheetRef}
        className="fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-2xl shadow-lg max-h-[60vh] overflow-y-auto animate-slide-up"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 16px)' }}
      >
        {/* Header bar: drag handle + close */}
        <div
          className="flex items-center justify-between px-5 pt-3 pb-2 sticky top-0 bg-background rounded-t-2xl z-10 touch-none cursor-grab active:cursor-grabbing"
          onPointerDown={onHeaderPointerDown}
          onPointerUp={onHeaderPointerUp}
          onClick={() => onClose()}
        >
          <div className="w-8" />
          <div className="w-9 h-1 rounded-full bg-foreground/20" />
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center text-foreground/40 hover:text-foreground/70 transition-colors text-lg"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Category color bar */}
        <div
          className="h-0.5 mx-5"
          style={{ backgroundColor: cat?.base ?? '#6b7280' }}
        />

        {/* Image + caption */}
        {showImage && (
          <figure className="mt-3 mx-5" style={{ width: 'calc(100% - 40px)' }}>
            <div
              className="relative bg-foreground/5 rounded-lg cursor-pointer overflow-hidden"
              onClick={() => setShowLightbox(true)}
            >
              <img
                src={event.thumbnailUrl}
                alt={event.imageCaption || event.label}
                loading="lazy"
                onError={() => setImgError(true)}
                className="w-full rounded-lg"
              />
            </div>
            {event.imageCaption && (
              <figcaption className="text-xs text-foreground/50 mt-1.5 leading-snug italic">
                {event.imageCaption}
              </figcaption>
            )}
          </figure>
        )}

        <div className="px-5 pt-3 pb-6" onClick={onInnerLinkClick}>
          {/* Category label */}
          {cat && (
            <span
              className="text-xs font-medium uppercase tracking-wide"
              style={{ color: cat.base }}
            >
              {cat.label}
            </span>
          )}

          {/* Event name + year */}
          <h3 className="text-lg font-bold mt-1">{event.label}</h3>
          <p className="text-sm text-foreground/60 mt-0.5">
            {formatYear(event.year, event.endYear)}
          </p>

          {/* Description */}
          {event.description && (
            <p className="mt-3 leading-relaxed">
              {event.description}
            </p>
          )}

          {/* Detail sections */}
          {event.details && event.details.length > 0 && (
            <div className="mt-4 space-y-4">
              {event.details.map((detail, i) => (
                <div key={i}>
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/50 mb-1">
                    {detail.label}
                  </h4>
                  <p className="text-foreground/80 leading-relaxed text-[0.9em]">
                    {detail.text}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Wikipedia extract */}
          {event.wikiExtract && (
            <div className="mt-4 pt-4 border-t border-foreground/10">
              <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground/50 mb-1">
                Wikipedia
              </h4>
              <p
                className="text-foreground/70 leading-relaxed text-[0.9em]"
                dangerouslySetInnerHTML={{ __html: event.wikiExtract }}
              />
            </div>
          )}

          {/* Wikipedia link */}
          {event.wikiSlug && (
            <a
              href={`https://en.wikipedia.org/wiki/${event.wikiSlug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm font-medium text-foreground/50 hover:text-foreground/80 transition-colors"
            >
              Read more on Wikipedia →
            </a>
          )}
        </div>
      </div>

      {showLightbox && event.thumbnailUrl && (
        <Lightbox
          src={event.thumbnailUrl}
          alt={event.imageCaption || event.label}
          onClose={() => setShowLightbox(false)}
        />
      )}
    </>
  )
}
