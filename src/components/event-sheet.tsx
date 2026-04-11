'use client'

import { useEffect, useRef, useState } from 'react'
import type { TlEvent } from '@/lib/types'
import { CATEGORY_META } from '@/lib/categories'

interface EventSheetProps {
  event: TlEvent | null
  onClose: () => void
}

function formatYear(year: number, endYear?: number): string {
  const fmt = (y: number) => y < 0 ? `${Math.abs(y)} BCE` : `${y} CE`
  if (endYear != null && endYear !== year) {
    return `${fmt(year)} – ${fmt(endYear)}`
  }
  return fmt(year)
}

export function EventSheet({ event, onClose }: EventSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const [imgError, setImgError] = useState(false)

  useEffect(() => {
    setImgError(false)
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
        className="fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-2xl shadow-lg max-h-[70vh] overflow-y-auto animate-slide-up"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 16px)' }}
      >
        {/* Category color bar */}
        <div
          className="h-1 rounded-t-2xl"
          style={{ backgroundColor: cat?.base ?? '#6b7280' }}
        />

        {/* Image */}
        {showImage && (
          <div className="relative w-full max-h-[200px] overflow-hidden bg-foreground/5">
            <img
              src={event.thumbnailUrl}
              alt={event.label}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full object-cover max-h-[200px]"
            />
          </div>
        )}

        <div className="px-5 pt-4 pb-6">
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

          {/* Wikipedia extract */}
          {event.wikiExtract && (
            <p className="mt-3 text-foreground/70 leading-relaxed text-[0.9em]">
              {event.wikiExtract}
            </p>
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
    </>
  )
}
