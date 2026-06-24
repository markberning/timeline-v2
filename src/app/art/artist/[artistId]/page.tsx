// Art Artist page (server component). Two kinds of authored artist:
//   heavy — Picasso (ART_ARTIST_CONTENT), the full Lifeline page.
//   light — every other featured artist (ART_ARTIST_LIGHT), a small portrait +
//           vitals + "why" blurb + work links + Wikipedia.
// Any other id still builds and renders a graceful "coming soon" body. All
// authored ids (the union of both registries) are statically generated;
// anything else 404s (dynamicParams false). The bodies live in client components.

import { ART_ARTIST_CONTENT, ART_ARTIST_LIGHT } from '@/lib/art-content'
import { ArtArtistPage } from './art-artist-page'
import { ArtArtistLightPage } from './art-artist-light-page'

export const dynamicParams = false

export async function generateStaticParams() {
  const ids = new Set<string>()
  for (const a of Object.values(ART_ARTIST_CONTENT)) ids.add(a.id)
  for (const a of Object.values(ART_ARTIST_LIGHT)) ids.add(a.id)
  return [...ids].map(artistId => ({ artistId }))
}

interface PageProps {
  params: Promise<{ artistId: string }>
}

export default async function ArtArtist({ params }: PageProps) {
  const { artistId } = await params
  if (ART_ARTIST_CONTENT[artistId]) return <ArtArtistPage artistId={artistId} />
  if (ART_ARTIST_LIGHT[artistId]) return <ArtArtistLightPage artistId={artistId} />
  // Unauthored id — the heavy body carries the tasteful "coming soon" fallback.
  return <ArtArtistPage artistId={artistId} />
}
