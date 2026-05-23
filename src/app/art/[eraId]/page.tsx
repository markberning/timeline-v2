// Art Era page (server component). The Modern era is the only authored era;
// every other era id still builds and renders a graceful "coming soon" body.
// All 8 era ids are statically generated; anything else 404s (dynamicParams
// false). The interactive body lives in the client component below.

import { ART_ERAS } from '@/lib/art-data'
import { ArtEraPage } from './art-era-page'

export const dynamicParams = false

export async function generateStaticParams() {
  return ART_ERAS.map(e => ({ eraId: e.id }))
}

interface PageProps {
  params: Promise<{ eraId: string }>
}

export default async function ArtEra({ params }: PageProps) {
  const { eraId } = await params
  return <ArtEraPage eraId={eraId} />
}
