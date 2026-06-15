// Thinker hub — the mid level of School › Thinker › Work. Shows the thinker, a
// "walk the whole system" deep-read button (live where a read has shipped, else
// "Soon"), and the list of their major works. Reads the spine + the reads registry.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PhiHub, thinkerCrumbs, type HubRow } from '@/components/philosophy/phi-chrome'
import { THINKERS, thinkerById, schoolById, worksOfThinker, ERA_NAME } from '@/lib/philosophy-data'
import { WORK_ICONS } from '@/lib/philosophy-icon-labels'
import { hasRead } from '../_reads'

export function generateStaticParams() {
  return Object.keys(THINKERS).map(thinkerId => ({ thinkerId }))
}

export async function generateMetadata({ params }: { params: Promise<{ thinkerId: string }> }): Promise<Metadata> {
  const { thinkerId } = await params
  const t = thinkerById(thinkerId)
  if (!t) return { title: 'Philosophy · Stuff Happened' }
  return { title: `${t.name} · Philosophy · Stuff Happened`, description: t.epithet }
}

export default async function ThinkerHubPage({ params }: { params: Promise<{ thinkerId: string }> }) {
  const { thinkerId } = await params
  const t = thinkerById(thinkerId)
  if (!t) notFound()
  const s = schoolById(t.school)!
  const works = worksOfThinker(t.id)
  const read = hasRead(t.id)

  const rows: HubRow[] = works.map(w => ({
    glyph: w.year.match(/\d{1,4}/)?.[0] ?? '·',
    iconId: WORK_ICONS.has(w.id) ? w.id : undefined,
    tint: s.color, square: true,
    title: w.title, sub: `${w.year} · ${w.form}`, hook: w.blurb,
    href: `/philosophy/work/${w.id}`,
    badge: w.read ? 'read' : 'soon',
  }))

  return (
    <PhiHub
      crumbs={thinkerCrumbs(t.id)}
      accent={s.color}
      eyebrow={`Thinker · ${s.name}`}
      title={t.name}
      meta={`${t.dates} · ${s.name}`}
      blurb={t.epithet}
      iconId={t.id}
      readButton={read
        ? {
            href: `/philosophy/thinker/${t.id}/system`,
            title: `Walk ${t.name}’s whole system`,
            sub: 'The ideas in order, start to finish, as one long read',
          }
        : {
            href: `/philosophy/${t.era}`,
            title: `How ${t.name} fits into the story`,
            sub: `Read ${ERA_NAME[t.era]}, where ${t.name} appears`,
          }}
      rowsLabel={works.length ? 'The works' : undefined}
      rows={rows}
      footerEra={read ? { href: `/philosophy/${t.era}`, label: `Read ${t.name} in context: ${ERA_NAME[t.era]}` } : undefined}
    />
  )
}
