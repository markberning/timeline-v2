// Art Artist page (server component). Picasso is the only authored artist;
// every other artist id still builds and renders a graceful "coming soon" body.
// All authored artist ids are statically generated; anything else 404s
// (dynamicParams false). The interactive body lives in the client component.

import { ART_ARTIST_CONTENT } from '@/lib/art-content'
import { ArtArtistPage } from './art-artist-page'

export const dynamicParams = false

export async function generateStaticParams() {
  return Object.values(ART_ARTIST_CONTENT).map(a => ({ artistId: a.id }))
}

interface PageProps {
  params: Promise<{ artistId: string }>
}

export default async function ArtArtist({ params }: PageProps) {
  const { artistId } = await params
  return <ArtArtistPage artistId={artistId} />
}
