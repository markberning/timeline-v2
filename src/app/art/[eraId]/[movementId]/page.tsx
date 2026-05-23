// Art Movement page (server component). Cubism is the only authored movement;
// every other (eraId, movementId) pair that resolves still renders a graceful
// "coming soon" body in the client component below. Only the authored movements
// are statically generated; anything else 404s (dynamicParams false).

import { ART_MOVEMENT_CONTENT } from '@/lib/art-content'
import { ArtMovementPage } from './art-movement-page'

export const dynamicParams = false

export async function generateStaticParams() {
  return Object.values(ART_MOVEMENT_CONTENT).map(m => ({ eraId: m.eraId, movementId: m.id }))
}

interface PageProps {
  params: Promise<{ eraId: string; movementId: string }>
}

export default async function ArtMovement({ params }: PageProps) {
  const { eraId, movementId } = await params
  return <ArtMovementPage eraId={eraId} movementId={movementId} />
}
