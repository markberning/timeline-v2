// Movement-level narrative section (server). The movement's own chaptered read,
// one altitude above the Work read. Only authored movements (Cubism) generate
// section routes; the `/s/` segment keeps these from colliding with [workId].

import { ART_MOVEMENT_CONTENT } from '@/lib/art-content'
import { ArtMovementSectionReader } from './movement-reader'

export const dynamicParams = false

// Every registered movement is an authored one (the registry only holds built
// movements), so emit a section route per chapter. Gating on plain data here —
// not the 'use client' narratives module — keeps this a pure server component.
export async function generateStaticParams() {
  const out: { eraId: string; movementId: string; sectionId: string }[] = []
  for (const mv of Object.values(ART_MOVEMENT_CONTENT)) {
    for (const s of mv.sections) out.push({ eraId: mv.eraId, movementId: mv.id, sectionId: s.id })
  }
  return out
}

interface PageProps {
  params: Promise<{ eraId: string; movementId: string; sectionId: string }>
}

export default async function MovementSection({ params }: PageProps) {
  const { movementId, sectionId } = await params
  return <ArtMovementSectionReader movementId={movementId} sectionId={sectionId} />
}
