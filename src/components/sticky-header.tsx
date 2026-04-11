'use client'

import { useEffect, useRef, useState } from 'react'
import { ChapterProgress } from './chapter-progress'
import { DarkModeToggle } from './dark-mode-toggle'

interface StickyHeaderProps {
  civilizationLabel: string
  chapterNumber: number
  chapterTitle: string
  dateRange: string
}

export function StickyHeader({
  civilizationLabel,
  chapterNumber,
  chapterTitle,
  dateRange,
}: StickyHeaderProps) {
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    let ticking = false
    const threshold = 10

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const currentY = window.scrollY
        if (currentY > lastScrollY.current + threshold && currentY > 80) {
          setHidden(true)
        } else if (currentY < lastScrollY.current - threshold) {
          setHidden(false)
        }
        lastScrollY.current = currentY
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-transform duration-200 ease-out ${
        hidden ? '-translate-y-[calc(100%-3px)]' : 'translate-y-0'
      }`}
    >
      <div className="max-w-prose mx-auto px-5">
        <div className="flex items-center justify-between gap-2 pt-3 pb-1">
          <span className="text-sm font-medium text-foreground/60 truncate">
            {civilizationLabel}
          </span>
          <div className="flex items-center gap-2 shrink-0">
            {dateRange && (
              <span className="text-xs text-foreground/40">
                {dateRange}
              </span>
            )}
            <DarkModeToggle />
          </div>
        </div>
        <div className="pb-2 truncate text-sm font-semibold">
          Chapter {chapterNumber} — {chapterTitle}
        </div>
      </div>
      <ChapterProgress />
    </header>
  )
}
