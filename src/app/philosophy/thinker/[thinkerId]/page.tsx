// Thinker hub — the mid level of School › Thinker › Work. Shows the thinker, a
// "walk the whole system" deep-read button (live where a read has shipped, else
// "Soon"), and the list of their major works. Reads the spine + the reads registry.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PhiHub, thinkerCrumbs, type HubRow } from '@/components/philosophy/phi-chrome'
import { THINKERS, thinkerById, schoolById, worksOfThinker, ERA_NAME } from '@/lib/philosophy-data'
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
    glyph: w.year.replace(/[^\d]/g, '').slice(0, 4) || '·',
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
      stats={[
        { value: String(works.length), label: works.length === 1 ? 'Key work' : 'Key works' },
        { value: t.dates.split('–')[0].trim().replace('c.', ''), label: 'From' },
        { value: s.name.split(' ')[0], label: 'School' },
      ]}
      readButton={{
        href: `/philosophy/thinker/${t.id}/system`,
        title: `Walk ${t.name}’s whole system`,
        sub: read ? 'The ideas in order, start to finish — one long read' : 'The deep read is on the way',
        soon: !read,
      }}
      rowsLabel={works.length ? 'The works' : undefined}
      rows={rows}
      note={!read
        ? `${t.name} doesn’t have a standalone deep read yet. For now their ideas are covered inside the era story (${ERA_NAME[t.era]}, linked below), set in their place in the larger argument. A dedicated read is on the way.`
        : (works.length === 0 ? `${t.name}’s major works will appear here as the reads are built.` : undefined)}
      footerEra={{ href: `/philosophy/${t.era}`, label: read ? `Read ${t.name} in context: ${ERA_NAME[t.era]}` : `Go to the era story: ${ERA_NAME[t.era]}` }}
    />
  )
}
