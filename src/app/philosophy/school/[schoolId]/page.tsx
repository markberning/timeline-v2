// School hub — the top level of School › Thinker › Work. Shows the camp's claim
// and the list of its thinkers. "Independent" is a real school here: the home of
// the giants who founded none and joined none.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PhiHub, schoolCrumbs, type HubRow } from '@/components/philosophy/phi-chrome'
import { SCHOOLS, schoolById, thinkersOfSchool, type SchoolId } from '@/lib/philosophy-data'
import { hasRead } from '../../thinker/_reads'
import { hasSchoolRead } from '../_reads'

export function generateStaticParams() {
  return SCHOOLS.map(s => ({ schoolId: s.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ schoolId: string }> }): Promise<Metadata> {
  const { schoolId } = await params
  const s = schoolById(schoolId)
  if (!s) return { title: 'Philosophy · Stuff Happened' }
  return { title: `${s.name} · Philosophy · Stuff Happened`, description: s.oneLine }
}

export default async function SchoolHubPage({ params }: { params: Promise<{ schoolId: string }> }) {
  const { schoolId } = await params
  const s = schoolById(schoolId)
  if (!s) notFound()
  const thinkers = thinkersOfSchool(s.id as SchoolId)

  const rows: HubRow[] = thinkers.map(t => ({
    glyph: t.glyph, iconId: t.id, tint: s.color,
    title: t.name, sub: t.dates, hook: t.epithet,
    href: `/philosophy/thinker/${t.id}`,
    badge: hasRead(t.id) ? 'read' : undefined,
  }))

  return (
    <PhiHub
      crumbs={schoolCrumbs(s.id as SchoolId)}
      accent={s.color}
      eyebrow="School"
      title={s.name}
      meta={s.range}
      blurb={s.oneLine}
      glyph={s.name[0]}
      note={s.id === 'indep' ? 'These thinkers founded no school and joined none. They are listed together only because they refused every other label: the source, the loner, the dynamite.' : undefined}
      readButton={hasSchoolRead(s.id) ? {
        href: `/philosophy/school/${s.id}/read`,
        title: `The whole ${s.name} story`,
        sub: 'The tradition across the centuries, in the house voice',
      } : undefined}
      rowsLabel="The thinkers"
      rows={rows}
    />
  )
}
