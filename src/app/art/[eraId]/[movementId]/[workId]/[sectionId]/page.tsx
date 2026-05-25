// Art Section reader (server component). The narrative chapters of every
// authored artwork are statically generated; anything else 404s (dynamicParams
// false). Generic over ART_WORK_CONTENT, so adding a work needs no change here.

import { ART_WORK_CONTENT } from '@/lib/art-content'
import { ArtSectionReader } from './art-section-reader'

export const dynamicParams = false

export async function generateStaticParams() {
  return Object.values(ART_WORK_CONTENT).flatMap(w =>
    w.sections.map(s => ({ eraId: w.eraId, movementId: w.movementId, workId: w.id, sectionId: s.id })),
  )
}

interface PageProps {
  params: Promise<{ eraId: string; movementId: string; workId: string; sectionId: string }>
}

export default async function ArtSection({ params }: PageProps) {
  const { eraId, movementId, workId, sectionId } = await params
  return <ArtSectionReader eraId={eraId} movementId={movementId} workId={workId} sectionId={sectionId} />
}
