'use client'

// American Revolution — the PHASE chapter (client; <BattleSectionReader> calls
// warCrumbs). Each phase IS a war-story chapter: authored, gated prose rendered through
// the SAME shared reader the Civil War and F&I story chapters use, so the
// cross-references to battles and off-the-battlefield chapters are between-paragraph
// "Read the full story" pill buttons (no battle timeline). Prose comes from
// phase-narratives.ts (generated from the gated -final.md by
// scripts/_build-rev-phases.mjs). A phase not yet authored shows a brief placeholder,
// never a battle list.

import '../../war-civil-war/war-skin.css'
import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'
import { WarHeader, WAR_ICONS } from '@/components/mode/war-header'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION as W } from '@/lib/wars/revolution'
import { PHASE_NARR } from '../phase-narratives'

const phaseLanes = W.lanes.filter(l => l.kind === 'phase')

export function PhaseLanding({ phase }: { phase: string }) {
  const idx = phaseLanes.findIndex(l => l.id === phase)
  const lane = phaseLanes[idx]
  if (!lane) return null
  const chapter = W.chapters.find(c => c.id === phase)
  const accent = lane.skinVar ? `var(${lane.skinVar})` : (lane.color?.dark ?? W.accent)
  const narr: Narr | undefined = PHASE_NARR[phase]

  // Authored phase → the full gated chapter, rendered like a war-story chapter.
  if (narr) {
    return (
      <BattleSectionReader
        sections={{ main: narr }}
        id="main"
        slug={phase}
        battleName={chapter?.name ?? lane.label}
        date={chapter?.date}
        theatreId={phase}
        battleId={phase}
        theatreHref={W.routeBase}
        accent={accent}
        endHref={W.routeBase}
        endKicker={`End of ${chapter?.name ?? lane.label}`}
        endLabel={`Back to ${W.name}`}
      />
    )
  }

  // Not yet authored → a brief placeholder (no battle list / no timeline).
  return (
    <div className="war-skin" style={{ ['--accent' as string]: accent } as React.CSSProperties}>
      <WarHeader backHref={W.routeBase} title={W.name} />
      <WarBreadcrumb crumbs={warCrumbs(W, { lane: phase, battleId: phase })} accent={accent} bare />

      <div className="p-mast">
        <div className="p-eyebrow">Phase {idx + 1}{chapter ? ` · ${chapter.date}` : ''}</div>
        <h1 className="p-mast-title p-serif">{lane.label}</h1>
        <p className="p-stand">This chapter of the story is on its way.</p>
      </div>

      <div className="bp-foot">
        <a href={W.routeBase}>
          <span>Part of <b className="p-serif">{W.name}</b><span className="sub">All phases &amp; battles</span></span>
          <span className="arr">{WAR_ICONS.arr}</span>
        </a>
      </div>
    </div>
  )
}
