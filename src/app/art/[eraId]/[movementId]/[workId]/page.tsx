// Art Work page (server component). Les Demoiselles d'Avignon is the only
// authored work; only authored works are statically generated, anything else
// 404s (dynamicParams false).

import { ART_WORK_CONTENT } from '@/lib/art-content'
import { ArtWorkPage } from './art-work-page'

export const dynamicParams = false

export async function generateStaticParams() {
  return Object.values(ART_WORK_CONTENT).map(w => ({ eraId: w.eraId, movementId: w.movementId, workId: w.id }))
}

interface PageProps {
  params: Promise<{ eraId: string; movementId: string; workId: string }>
}

export default async function ArtWork({ params }: PageProps) {
  const { eraId, movementId, workId } = await params
  return <ArtWorkPage eraId={eraId} movementId={movementId} workId={workId} />
}
