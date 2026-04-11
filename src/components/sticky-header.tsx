'use client'

import Link from 'next/link'
import { ChapterProgress } from './chapter-progress'
import { DarkModeToggle } from './dark-mode-toggle'

interface StickyHeaderProps {
  civilizationId: string
  civilizationLabel: string
  chapterNumber: number
  chapterTitle: string
  dateRange: string
}

export function StickyHeader({
  civilizationId,
  civilizationLabel,
  chapterNumber,
  chapterTitle,
  dateRange,
}: StickyHeaderProps) {

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm"
      style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}
    >
      <div className="max-w-prose mx-auto px-2">
        <div className="flex items-center gap-1 pt-2 pb-0.5">
          <Link
            href={`/${civilizationId}`}
            className="flex items-center gap-1 min-h-[36px] px-2 -ml-2 text-foreground/50 hover:text-foreground/80 transition-colors shrink-0"
            aria-label="Back to chapter list"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span className="text-sm font-medium">{civilizationLabel}</span>
          </Link>
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            {dateRange && (
              <span className="text-xs text-foreground/40">
                {dateRange}
              </span>
            )}
            <DarkModeToggle />
          </div>
        </div>
        <div className="pb-1.5 px-2 truncate text-sm font-semibold">
          Chapter {chapterNumber} — {chapterTitle}
        </div>
      </div>
      <ChapterProgress />
    </header>
  )
}
