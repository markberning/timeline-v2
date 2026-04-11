import Link from 'next/link'

interface BottomNavProps {
  civilizationId: string
  prevChapter: { slug: string; title: string } | null
  nextChapter: { slug: string; title: string } | null
}

export function BottomNav({ civilizationId, prevChapter, nextChapter }: BottomNavProps) {
  return (
    <nav className="mx-auto max-w-prose px-5 pb-12 pt-8 border-t border-foreground/10">
      <div className="flex justify-between gap-4">
        {prevChapter ? (
          <Link
            href={`/${civilizationId}/${prevChapter.slug}`}
            className="flex flex-col items-start min-h-[48px] justify-center"
          >
            <span className="text-sm text-foreground/50">Previous</span>
            <span className="text-[var(--accent)] font-medium">{prevChapter.title}</span>
          </Link>
        ) : (
          <Link
            href={`/${civilizationId}`}
            className="flex flex-col items-start min-h-[48px] justify-center"
          >
            <span className="text-sm text-foreground/50">Back to</span>
            <span className="text-[var(--accent)] font-medium">All Chapters</span>
          </Link>
        )}

        {nextChapter ? (
          <Link
            href={`/${civilizationId}/${nextChapter.slug}`}
            className="flex flex-col items-end min-h-[48px] justify-center text-right"
          >
            <span className="text-sm text-foreground/50">Next</span>
            <span className="text-[var(--accent)] font-medium">{nextChapter.title}</span>
          </Link>
        ) : (
          <Link
            href={`/${civilizationId}`}
            className="flex flex-col items-end min-h-[48px] justify-center text-right"
          >
            <span className="text-sm text-foreground/50">Back to</span>
            <span className="text-[var(--accent)] font-medium">All Chapters</span>
          </Link>
        )}
      </div>
    </nav>
  )
}
