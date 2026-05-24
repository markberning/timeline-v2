'use client'

// Thin client wrapper: builds the era-section breadcrumb and hands the generic
// ArtNarrativeReader the era's sections + authored prose.

import { ArtNarrativeReader } from '@/components/mode/art-reader'
import { artEraCrumbs, type Crumb } from '@/components/mode/art-chrome'
import { ART_ERA_CONTENT } from '@/lib/art-content'
import { ERA_NARRATIVES } from './era-narratives'

export function ArtEraSectionReader({ eraId, sectionId }: { eraId: string; sectionId: string }) {
  const era = ART_ERA_CONTENT[eraId]
  const narratives = ERA_NARRATIVES[eraId]
  const base = `/art/${era.id}`
  const section = era.sections.find(s => s.id === sectionId) ?? era.sections[0]

  // Breadcrumb: the era crumb becomes a plain ancestor link, then the chapter
  // title is the active leaf.
  const eraCrumbs = artEraCrumbs(era.id, era.name)
  const crumbs: Crumb[] = [
    ...eraCrumbs.slice(0, -1),
    { ...eraCrumbs[eraCrumbs.length - 1], active: false, href: base },
    // current-chapter leaf is a dropdown to jump to any other chapter
    {
      label: section.title,
      active: true,
      currentLabel: section.title,
      options: era.sections.map(s => ({ label: s.title, href: `${base}/s/${s.id}` })),
    },
  ]

  return (
    <ArtNarrativeReader
      crumbs={crumbs}
      accent={era.accent}
      eyebrowPrefix={era.name}
      sections={era.sections}
      currentId={sectionId}
      narratives={narratives}
      baseHref={`${base}/s`}
      backHref={base}
      backLabel={`Back to the ${era.name} era`}
    />
  )
}
