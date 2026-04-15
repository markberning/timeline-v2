'use client'

import { useEffect, useRef, useState } from 'react'
import type { CrossLink } from '@/lib/types'

interface CrossLinkSheetProps {
  crossLink: CrossLink | null
  onClose: () => void
}

export function CrossLinkSheet({ crossLink, onClose }: CrossLinkSheetProps) {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    if (typeof document === 'undefined') return
    const update = () => setIsDark(document.documentElement.classList.contains('dark'))
    update()
    const obs = new MutationObserver(update)
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
    return () => obs.disconnect()
  }, [])

  const sheetRef = useRef<HTMLDivElement>(null)
  const pointerStart = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    if (sheetRef.current) sheetRef.current.scrollTop = 0
  }, [crossLink])

  useEffect(() => {
    if (!crossLink) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [crossLink, onClose])

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

  if (!crossLink) return null

  const accent = isDark ? crossLink.targetColorDark : crossLink.targetColorLight

  function jumpToTarget() {
    window.location.href = `/${crossLink!.targetTl}?chapter=${crossLink!.targetChapter}`
  }

  return (
    <>
      <div className="fixed inset-0 z-[55] bg-black/30" onClick={onClose} />
      <div
        ref={sheetRef}
        className="fixed bottom-0 left-0 right-0 z-[60] rounded-t-2xl shadow-lg max-h-[60vh] overflow-y-auto animate-slide-up border-t border-foreground/10"
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

        <div className="h-0.5 mx-5" style={{ backgroundColor: accent, opacity: 0.4 }} />

        <div className="px-5 pt-3 pb-6">
          <span className="text-xs font-medium uppercase tracking-wide" style={{ color: accent }}>
            Meanwhile in {crossLink.targetLabel}
          </span>
          <h3 className="text-lg font-bold mt-1">
            Chapter {crossLink.targetChapter}: {crossLink.targetChapterTitle}
          </h3>

          <p className="mt-3 leading-relaxed text-[0.95em] text-foreground/85">
            {crossLink.blurb}
          </p>

          <button
            onClick={jumpToTarget}
            className="mt-5 w-full py-3 text-base font-semibold rounded-lg border-2 transition-colors hover:bg-foreground/5"
            style={{ color: accent, borderColor: accent }}
          >
            Read {crossLink.targetLabel} Ch {crossLink.targetChapter} →
          </button>
        </div>
      </div>
    </>
  )
}
