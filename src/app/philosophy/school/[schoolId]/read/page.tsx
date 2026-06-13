// School deep read — "the whole tradition". Renders the shared PhilosophyReader
// from the school reads registry. Only schools with a shipped read are generated;
// the hub shows the "Read the tradition" button only for those, so this route is
// never reached for an unbuilt school.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PhilosophyReader } from '@/components/philosophy-reader'
import { schoolCrumbs } from '@/components/philosophy/phi-chrome'
import { schoolById, type SchoolId } from '@/lib/philosophy-data'
import { SCHOOL_READS, SCHOOL_READ_IDS } from '../../_reads'

export function generateStaticParams() {
  return SCHOOL_READ_IDS.map(schoolId => ({ schoolId }))
}

export async function generateMetadata({ params }: { params: Promise<{ schoolId: string }> }): Promise<Metadata> {
  const { schoolId } = await params
  const s = schoolById(schoolId)
  return { title: `${s?.name ?? 'A tradition'} — the whole tradition · Philosophy · Stuff Happened`, description: s?.oneLine }
}

export default async function SchoolReadPage({ params }: { params: Promise<{ schoolId: string }> }) {
  const { schoolId } = await params
  const entry = SCHOOL_READS[schoolId]
  if (!entry) notFound()
  return <PhilosophyReader narr={entry.narr} eyebrow={entry.eyebrow} backHref={`/philosophy/school/${schoolId}`} crumbs={schoolCrumbs(schoolId as SchoolId)} />
}
