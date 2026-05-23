// Art Section reader (server component). Five sibling narrative chapters for
// Les Demoiselles d'Avignon; only those section ids are statically generated,
// anything else 404s (dynamicParams false).

import { DEMOISELLES } from '@/lib/art-content'
import { ArtSectionReader } from './art-section-reader'

export const dynamicParams = false

export async function generateStaticParams() {
  return DEMOISELLES.sections.map(s => ({ eraId: 'mod', movementId: 'cubism', workId: 'demoiselles', sectionId: s.id }))
}

interface PageProps {
  params: Promise<{ eraId: string; movementId: string; workId: string; sectionId: string }>
}

export default async function ArtSection({ params }: PageProps) {
  const { eraId, movementId, workId, sectionId } = await params
  return <ArtSectionReader eraId={eraId} movementId={movementId} workId={workId} sectionId={sectionId} />
}
