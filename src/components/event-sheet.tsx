'use client'

import { useEffect, useRef } from 'react'
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
        className="fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-2xl shadow-lg max-h-[50vh] overflow-y-auto animate-slide-up"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 16px)' }}
      >
        {/* Category color bar */}
        <div
          className="h-1 rounded-t-2xl"
          style={{ backgroundColor: cat?.base ?? '#6b7280' }}
        />

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
            <p className="mt-3 text-foreground/80 leading-relaxed">
              {event.description}
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
              Wikipedia →
            </a>
          )}
        </div>
      </div>
    </>
  )
}
