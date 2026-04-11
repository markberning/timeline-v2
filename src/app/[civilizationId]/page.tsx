import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllNarrativeIds, getNarrative } from '@/lib/data'
import { ChapterAccordion } from '@/components/chapter-accordion'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { TextSizeControl } from '@/components/text-size-control'

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
      <div className="flex items-center justify-between mb-6">
        <div>
          <Link href="/" className="text-sm text-foreground/40 hover:text-foreground/60 transition-colors">
            &larr; Stuff Happened
          </Link>
          <h1 className="text-2xl font-bold mt-1">{narrative.label}</h1>
          <p className="text-sm text-foreground/50 mt-1">
            {narrative.chapters.length} chapters
          </p>
        </div>
        <div className="flex items-center gap-1">
          <TextSizeControl />
          <DarkModeToggle />
        </div>
      </div>

      <div>
        {narrative.chapters.map(ch => (
          <ChapterAccordion key={ch.slug} chapter={ch} />
        ))}
      </div>
    </div>
  )
}
