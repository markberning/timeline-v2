// Work hub — the leaf of School › Thinker › Work. Shows the work, a "read it"
// button (live once the work read ships), and the section breakdown. Section reads
// arrive through the pipeline in Phase 2; until then sections list with "Soon".

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PhiHub, workCrumbs, type HubRow } from '@/components/philosophy/phi-chrome'
import { WORKS, workById, thinkerById, schoolById } from '@/lib/philosophy-data'

export function generateStaticParams() {
  return Object.keys(WORKS).map(workId => ({ workId }))
}

export async function generateMetadata({ params }: { params: Promise<{ workId: string }> }): Promise<Metadata> {
  const { workId } = await params
  const w = workById(workId)
  if (!w) return { title: 'Philosophy · Stuff Happened' }
  return { title: `${w.title} · Philosophy · Stuff Happened`, description: w.blurb }
}

export default async function WorkHubPage({ params }: { params: Promise<{ workId: string }> }) {
  const { workId } = await params
  const w = workById(workId)
  if (!w) notFound()
  const t = thinkerById(w.thinker)!
  const s = schoolById(t.school)!

  const rows: HubRow[] = w.sections.map((sec, i) => ({
    glyph: String(i + 1), tint: s.color, square: true,
    title: sec.title, hook: sec.blurb,
    href: sec.read ? `/philosophy/work/${w.id}/${sec.id}` : `/philosophy/work/${w.id}`,
    badge: sec.read ? 'read' : 'soon',
  }))

  return (
    <PhiHub
      crumbs={workCrumbs(w.id, t.id)}
      accent={s.color}
      eyebrow={`Work · ${t.name}`}
      title={w.title}
      meta={`${w.year} · ${w.form}`}
      blurb={w.blurb}
      glyph={w.year.replace(/[^\d]/g, '').slice(0, 4) || '·'}
      stats={w.stats}
      readButton={{
        href: `/philosophy/work/${w.id}/read`,
        title: 'Read it',
        sub: w.read ? 'The whole work, in the house voice — no Greek required' : 'The read is on the way',
        soon: !w.read,
      }}
      diagram={w.diagram}
      spine={w.spine}
      cast={w.cast}
      passages={w.passages}
      rowsLabel={w.sections.length ? 'Inside the work' : undefined}
      rows={rows}
      note={(!w.read && w.sections.length === 0) ? 'The full read is being built. Meet the thinker first, above.' : undefined}
      footerEra={{ href: `/philosophy/thinker/${t.id}`, label: `Back to ${t.name}` }}
    />
  )
}
