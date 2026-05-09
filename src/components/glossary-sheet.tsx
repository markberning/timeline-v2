'use client'

import { useEffect, useRef } from 'react'
import type { GlossaryEntry } from '@/lib/types'

interface GlossarySheetProps {
  entry: GlossaryEntry | null
  onClose: () => void
  onInnerLinkClick?: (e: React.MouseEvent) => void
}

export function GlossarySheet({ entry, onClose, onInnerLinkClick }: GlossarySheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null)
  const pointerStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    if (sheetRef.current) sheetRef.current.scrollTop = 0
  }, [entry])

  useEffect(() => {
    if (!entry) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [entry, onClose])

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

  if (!entry) return null

  return (
    <>
      <div className="fixed inset-0 z-[55] bg-black/30" onClick={onClose} />
      <div
        ref={sheetRef}
        className="fixed bottom-0 inset-x-0 mx-auto max-w-prose w-full z-[60] rounded-t-2xl shadow-lg max-h-[55vh] overflow-y-auto animate-slide-up border-t border-foreground/10"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 16px)', backgroundColor: 'var(--surface)' }}
      >
        <div
          className="flex items-center justify-between px-5 pt-3 pb-2 sticky top-0 rounded-t-2xl z-10 touch-none cursor-grab active:cursor-grabbing"
          style={{ backgroundColor: 'var(--surface)' }}
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

        <div className="h-0.5 mx-5 bg-foreground/20" />

        <div className="px-5 pt-3 pb-6" onClick={onInnerLinkClick}>
          <span className="text-xs font-medium uppercase tracking-wide text-foreground/40">
            {entry.type}
          </span>
          <h3 className="text-lg font-bold mt-1">{entry.term}</h3>

          {entry.wikiExtract && (
            <p
              className="mt-3 leading-relaxed text-[0.95em] text-foreground/80"
              dangerouslySetInnerHTML={{ __html: entry.wikiExtract }}
            />
          )}

          {entry.wikiSlug && (
            <a
              href={`https://en.wikipedia.org/wiki/${entry.wikiSlug}`}
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
