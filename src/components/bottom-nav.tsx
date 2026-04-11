'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface BottomNavProps {
  civilizationId: string
  prevChapter: { slug: string; title: string } | null
  nextChapter: { slug: string; title: string } | null
}

export function BottomNav({ civilizationId, prevChapter, nextChapter }: BottomNavProps) {
  const router = useRouter()

  function navigate(href: string) {
    window.scrollTo(0, 0)
    router.push(href)
  }

  return (
    <nav className="mx-auto max-w-prose px-5 pb-16 pt-10 border-t border-foreground/10">
      <div className="flex justify-between gap-6">
        <button
          onClick={() => navigate(
            prevChapter
              ? `/${civilizationId}/${prevChapter.slug}`
              : `/${civilizationId}`
          )}
          className="flex items-center gap-3 min-h-[56px] py-3 text-left flex-1 min-w-0"
        >
          <span className="text-foreground/30 text-xl shrink-0">&larr;</span>
          <span className="min-w-0">
            <span className="block text-xs text-foreground/40 uppercase tracking-wide">
              {prevChapter ? 'Previous' : 'Back to'}
            </span>
            <span className="block text-[var(--accent)] font-medium truncate">
              {prevChapter ? prevChapter.title : 'All Chapters'}
            </span>
          </span>
        </button>

        <button
          onClick={() => navigate(
            nextChapter
              ? `/${civilizationId}/${nextChapter.slug}`
              : `/${civilizationId}`
          )}
          className="flex items-center gap-3 min-h-[56px] py-3 text-right flex-1 min-w-0 justify-end"
        >
          <span className="min-w-0">
            <span className="block text-xs text-foreground/40 uppercase tracking-wide">
              {nextChapter ? 'Next' : 'Back to'}
            </span>
            <span className="block text-[var(--accent)] font-medium truncate">
              {nextChapter ? nextChapter.title : 'All Chapters'}
            </span>
          </span>
          <span className="text-foreground/30 text-xl shrink-0">&rarr;</span>
        </button>
      </div>
    </nav>
  )
}
