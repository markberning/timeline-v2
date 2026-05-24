// Era-level narrative section (server). The era's own chaptered read — the
// broadest altitude of the Art drilldown. Only authored eras (Modern) generate
// section routes; the `/s/` segment keeps these from colliding with [movementId].

import { ART_ERA_CONTENT } from '@/lib/art-content'
import { ArtEraSectionReader } from './era-reader'

export const dynamicParams = false

// Every registered era is an authored one, so emit a section route per chapter.
// Gating on plain data — not the 'use client' narratives module — keeps this a
// pure server component (required for output: export).
export async function generateStaticParams() {
  const out: { eraId: string; sectionId: string }[] = []
  for (const era of Object.values(ART_ERA_CONTENT)) {
    for (const s of era.sections) out.push({ eraId: era.id, sectionId: s.id })
  }
  return out
}

interface PageProps {
  params: Promise<{ eraId: string; sectionId: string }>
}

export default async function EraSection({ params }: PageProps) {
  const { eraId, sectionId } = await params
  return <ArtEraSectionReader eraId={eraId} sectionId={sectionId} />
}
