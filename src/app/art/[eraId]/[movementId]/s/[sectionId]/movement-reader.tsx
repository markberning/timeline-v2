'use client'

// Thin client wrapper: builds the movement-section breadcrumb and hands the
// generic ArtNarrativeReader the movement's sections + authored prose.

import { ArtNarrativeReader } from '@/components/mode/art-reader'
import { artMovementCrumbs, type Crumb } from '@/components/mode/art-chrome'
import { ART_MOVEMENT_CONTENT } from '@/lib/art-content'
import { MOVEMENT_NARRATIVES } from './movement-narratives'

export function ArtMovementSectionReader({ movementId, sectionId }: { movementId: string; sectionId: string }) {
  const mv = ART_MOVEMENT_CONTENT[movementId]
  const narratives = MOVEMENT_NARRATIVES[movementId]
  const base = `/art/${mv.eraId}/${mv.id}`
  const section = mv.sections.find(s => s.id === sectionId) ?? mv.sections[0]

  // Breadcrumb: the movement crumb becomes a plain ancestor link, then the
  // chapter title is the active leaf.
  const movementCrumbs = artMovementCrumbs(mv.eraId, mv.era, mv.id, mv.name)
  const crumbs: Crumb[] = [
    ...movementCrumbs.slice(0, -1),
    { ...movementCrumbs[movementCrumbs.length - 1], active: false, href: base },
    { label: section.title, active: true },
  ]

  return (
    <ArtNarrativeReader
      crumbs={crumbs}
      accent={mv.accent}
      eyebrowPrefix={mv.name}
      sections={mv.sections}
      currentId={sectionId}
      narratives={narratives}
      baseHref={`${base}/s`}
      backHref={base}
      backLabel={`Back to ${mv.name}`}
    />
  )
}
