import Link from 'next/link'

interface ChapterListItemProps {
  civilizationId: string
  number: number
  title: string
  slug: string
  summary: string
  dateRange: string
}

export function ChapterListItem({
  civilizationId,
  number,
  title,
  slug,
  summary,
  dateRange,
}: ChapterListItemProps) {
  return (
    <Link
      href={`/${civilizationId}/${slug}`}
      className="block py-4 border-b border-foreground/10 last:border-b-0"
    >
      <div className="flex items-baseline gap-3">
        <span
          className="text-sm font-bold shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white"
          style={{ backgroundColor: 'var(--accent)' }}
        >
          {number}
        </span>
        <div className="min-w-0">
          <h3 className="font-semibold truncate">{title}</h3>
          {dateRange && (
            <p className="text-xs text-foreground/40 mt-0.5">{dateRange}</p>
          )}
          {summary && (
            <p className="text-sm text-foreground/60 mt-1">{summary}</p>
          )}
        </div>
      </div>
    </Link>
  )
}
