import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllNarrativeIds, getNarrative } from '@/lib/data'
import { ChapterListItem } from '@/components/chapter-list-item'
import { DarkModeToggle } from '@/components/dark-mode-toggle'

interface PageProps {
  params: Promise<{ civilizationId: string }>
}

export async function generateStaticParams() {
  return getAllNarrativeIds().map(id => ({ civilizationId: id }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { civilizationId } = await params
  const narrative = getNarrative(civilizationId)
  return {
    title: `${narrative.label} | Stuff Happened`,
    description: `${narrative.chapters.length} chapters on ${narrative.label}`,
  }
}

export default async function CivilizationPage({ params }: PageProps) {
  const { civilizationId } = await params
  const narrative = getNarrative(civilizationId)

  return (
    <div className="max-w-prose mx-auto px-5 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <Link href="/" className="text-sm text-foreground/40 hover:text-foreground/60 transition-colors">
            Stuff Happened
          </Link>
          <h1 className="text-2xl font-bold mt-1">{narrative.label}</h1>
          <p className="text-sm text-foreground/50 mt-1">
            {narrative.chapters.length} chapters
          </p>
        </div>
        <DarkModeToggle />
      </div>

      <div>
        {narrative.chapters.map(ch => (
          <ChapterListItem
            key={ch.slug}
            civilizationId={civilizationId}
            number={ch.number}
            title={ch.title}
            slug={ch.slug}
            summary={ch.summary}
            dateRange={ch.dateRange}
          />
        ))}
      </div>
    </div>
  )
}
