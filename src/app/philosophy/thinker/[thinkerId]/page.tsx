// Thinker hub — the mid level of School › Thinker › Work. Shows the thinker, a
// "walk the whole system" deep-read button (live where a read has shipped, else
// "Soon"), and the list of their major works. Reads the spine + the reads registry.

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PhiHub, thinkerCrumbs, type HubRow } from '@/components/philosophy/phi-chrome'
import { THINKERS, thinkerById, schoolById, worksOfThinker, ERA_NAME } from '@/lib/philosophy-data'
import { WORK_ICONS, THINKER_ICONS, THINKER_ICON_LABELS } from '@/lib/philosophy-icon-labels'
import { hasRead, THINKER_READS } from '../_reads'

const plain = (s: string) => s.replace(/\*+/g, '').replace(/`/g, '')

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

  // The enriched "dossier" hub, assembled from the read's own gated material
  // (throughline lead + the break + chapter outline). Lights up for any thinker
  // with a shipped read; thinkers without one fall back to the lean layout.
  const narr = THINKER_READS[t.id]?.narr
  const richMeta = [t.dates, s.name, ERA_NAME[t.era], works.length ? `${works.length} works` : null]
    .filter(Boolean).join('  ·  ')

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
      meta={narr ? richMeta : `${t.dates} · ${s.name}`}
      blurb={narr?.throughline ?? t.epithet}
      glyph={t.glyph}
      iconId={THINKER_ICONS.has(t.id) ? t.id : undefined}
      iconCaption={THINKER_ICON_LABELS[t.id]}
      breakBlock={narr ? { before: plain(narr.brk.beforeLabel), after: plain(narr.brk.afterLabel) } : undefined}
      outline={narr ? narr.chapters.map(c => ({ num: c.num, title: plain(c.title) })) : undefined}
      outlineLabel={narr ? 'Inside the walk-through' : undefined}
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
