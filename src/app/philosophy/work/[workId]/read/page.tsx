// Work deep read — "read it in the house voice". Renders the shared PhilosophyReader
// from the work reads registry. Only works with a shipped read are generated; the
// hub's "Read it" button is live only when the work's `read` flag is set, so this
// route is never reached for an unbuilt work.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PhilosophyReader } from '@/components/philosophy-reader'
import { workCrumbs } from '@/components/philosophy/phi-chrome'
import { workById } from '@/lib/philosophy-data'
import { WORK_READS, WORK_READ_IDS } from '../../_reads'

export function generateStaticParams() {
  return WORK_READ_IDS.map(workId => ({ workId }))
}

export async function generateMetadata({ params }: { params: Promise<{ workId: string }> }): Promise<Metadata> {
  const { workId } = await params
  const w = workById(workId)
  return { title: `${w?.title ?? 'A work'} — read it · Philosophy · Stuff Happened`, description: w?.blurb }
}

export default async function WorkReadPage({ params }: { params: Promise<{ workId: string }> }) {
  const { workId } = await params
  const entry = WORK_READS[workId]
  const w = workById(workId)
  if (!entry || !w) notFound()
  return <PhilosophyReader narr={entry.narr} eyebrow={entry.eyebrow} backHref={`/philosophy/work/${workId}`} crumbs={workCrumbs(workId, w.thinker)} />
}
