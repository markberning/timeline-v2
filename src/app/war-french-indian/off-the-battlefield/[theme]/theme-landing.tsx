'use client'

// French and Indian War — an off-the-battlefield THEME chapter (client; renders the
// gated prose through the SAME shared <BattleSectionReader> the phase chapters and the
// Civil War theme sections use, so cross-references are between-paragraph "Read the full
// story" pills. Prose comes from theme-narratives.ts (generated from the gated
// fi-<slug>-final.md by scripts/_build-fi-themes.mjs). An unbuilt theme shows a brief
// placeholder, never a 404.

import '../../../war-civil-war/war-skin.css'
import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'
import { WarHeader, WAR_ICONS } from '@/components/mode/war-header'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN as W } from '@/lib/wars/french-indian'
import { THEME_NARR } from '../theme-narratives'

const OTBF_HREF = '/war-french-indian/off-the-battlefield'
const slugOf = (href?: string) => href?.split('/').pop() ?? ''
const offfield = W.lanes.find(l => l.kind === 'offfield')
const ACCENT = offfield?.color?.dark ?? W.accent

export function ThemeLanding({ slug }: { slug: string }) {
  const theme = W.themes.find(t => slugOf(t.href) === slug)
  if (!theme) return null
  const narr: Narr | undefined = THEME_NARR[slug]

  // Built + gated → the full chapter, rendered like a Civil War theme section.
  if (narr) {
    return (
      <BattleSectionReader
        sections={{ main: narr }}
        id="main"
        slug={slug}
        battleName={theme.name}
        date={theme.date}
        theatreId="offfield"
        battleId={theme.id}
        theatreHref={OTBF_HREF}
        accent={ACCENT}
        endHref={OTBF_HREF}
        endKicker="Back to the threads"
        endLabel="Back to Off the Battlefield"
      />
    )
  }

  // Not yet authored → a brief placeholder (never a 404).
  return (
    <div className="war-skin" style={{ ['--accent' as string]: ACCENT } as React.CSSProperties}>
      <WarHeader backHref={OTBF_HREF} title={W.name} />
      <WarBreadcrumb crumbs={warCrumbs(W, { lane: 'offfield', battleId: theme.id })} accent={ACCENT} bare />

      <div className="p-mast">
        <div className="p-eyebrow">Off the Battlefield{theme.date ? ` · ${theme.date}` : ''}</div>
        <h1 className="p-mast-title p-serif">{theme.name}</h1>
        <p className="p-stand">This thread is on its way.</p>
      </div>

      <div className="bp-foot">
        <a href={OTBF_HREF}>
          <span>Part of <b className="p-serif">Off the Battlefield</b><span className="sub">The war beyond the battles</span></span>
          <span className="arr">{WAR_ICONS.arr}</span>
        </a>
      </div>
    </div>
  )
}
