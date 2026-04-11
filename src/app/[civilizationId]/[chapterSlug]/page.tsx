import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllNarrativeIds, getNarrative, getChapter } from '@/lib/data'
import { StickyHeader } from '@/components/sticky-header'
import { ProseContent } from '@/components/prose-content'
import { BottomNav } from '@/components/bottom-nav'

interface PageProps {
  params: Promise<{ civilizationId: string; chapterSlug: string }>
}

export async function generateStaticParams() {
  const ids = getAllNarrativeIds()
  const params: { civilizationId: string; chapterSlug: string }[] = []

  for (const id of ids) {
    const narrative = getNarrative(id)
    for (const ch of narrative.chapters) {
      params.push({ civilizationId: id, chapterSlug: ch.slug })
    }
  }

  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { civilizationId, chapterSlug } = await params
  const data = getChapter(civilizationId, chapterSlug)
  if (!data) return { title: 'Not Found' }

  return {
    title: `Chapter ${data.chapter.number} — ${data.chapter.title} | ${data.narrative.label}`,
    description: data.chapter.summary || `${data.narrative.label}, Chapter ${data.chapter.number}`,
  }
}

export default async function ChapterPage({ params }: PageProps) {
  const { civilizationId, chapterSlug } = await params
  const data = getChapter(civilizationId, chapterSlug)
  if (!data) notFound()

  const { chapter, narrative, prevChapter, nextChapter } = data

  return (
    <>
      <StickyHeader
        civilizationLabel={narrative.label}
        chapterNumber={chapter.number}
        chapterTitle={chapter.title}
        dateRange={chapter.dateRange}
      />
      <main className="pt-[72px]">
        <ProseContent contentHtml={chapter.contentHtml} />
        <BottomNav
          civilizationId={civilizationId}
          prevChapter={prevChapter}
          nextChapter={nextChapter}
        />
      </main>
    </>
  )
}
