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
    <div className="max-w-prose mx-auto px-5">
      <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm -mx-5 px-5 pt-3 pb-2 border-b-2" style={{ borderBottomColor: 'var(--accent)' }}>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-1 text-sm hover:opacity-80 transition-opacity" style={{ color: 'var(--accent-text)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {narrative.label}
          </Link>
          <div className="flex items-center gap-1">
            <TextSizeControl />
            <DarkModeToggle />
          </div>
        </div>
      </div>

      <div className="pt-4 pb-8">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--accent-text)' }}>{narrative.label}</h1>
        <p className="text-sm text-foreground/60 mt-1 mb-6">
          {narrative.chapters.length} chapters
        </p>

        <div className="reading-content">
          {narrative.chapters.map(ch => (
            <ChapterAccordion key={ch.slug} chapter={ch} />
          ))}
        </div>
      </div>
    </div>
  )
}
