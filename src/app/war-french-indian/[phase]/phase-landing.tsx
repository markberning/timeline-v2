'use client'

// French and Indian War — the PHASE landing UI (client; calls warCrumbs). Each phase
// is the hub for its battles and, once authored, its story chapter. Battles render
// "Soon" until each is built through the gated pipeline. Driven by the FRENCH_INDIAN
// config.

import '../../war-civil-war/war-skin.css'
import { WarHeader, WAR_ICONS } from '@/components/mode/war-header'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN as W } from '@/lib/wars/french-indian'

const phaseLanes = W.lanes.filter(l => l.kind === 'phase')

export function PhaseLanding({ phase }: { phase: string }) {
  const idx = phaseLanes.findIndex(l => l.id === phase)
  const lane = phaseLanes[idx]
  if (!lane) return null
  const chapter = W.chapters.find(c => c.id === phase)
  const battles = W.battles.filter(b => b.theatre === phase).sort((a, b) => (a.year * 100 + a.m) - (b.year * 100 + b.m))
  const accent = lane.color?.dark ?? W.accent

  return (
    <div className="war-skin" style={{ ['--accent' as string]: accent } as React.CSSProperties}>
      <WarHeader backHref={W.routeBase} title={W.name} />
      <WarBreadcrumb crumbs={warCrumbs(W, { lane: phase })} accent={accent} bare />

      <div className="p-mast">
        <div className="p-eyebrow">Phase {idx + 1}{chapter ? ` · ${chapter.date}` : ''}</div>
        <h1 className="p-mast-title p-serif">{lane.label}</h1>
        <p className="p-stand">The story of this phase is on its way. For now, here are the battles it turns on.</p>
      </div>

      <div className="p-page">
        <div className="p-sechead">
          <h2 className="p-label">Battles</h2>
          <span className="ct">{battles.length} battle{battles.length !== 1 ? 's' : ''}</span>
        </div>
        <div className="p-tl">
          {battles.map(b => {
            const dot = lane.color?.dot
            const row = (
              <>
                <span className="bh"><b className="p-serif">{b.name}</b><span className="th" style={{ color: dot }}>{b.mo} {b.year}</span></span>
                <span className="place">{b.place}</span>
                <span className="note">{b.hook ?? <span className="fi-soon">Soon</span>}</span>
              </>
            )
            const cls = 'p-bt' + (b.size === 'l' || b.size === 'xl' ? ' key' : '') + (b.href ? '' : ' fi-dim')
            return b.href
              ? <a className={cls} key={b.id} href={b.href} style={{ ['--dot' as string]: dot }}>{row}</a>
              : <div className={cls} key={b.id} style={{ ['--dot' as string]: dot }}>{row}</div>
          })}
        </div>
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
