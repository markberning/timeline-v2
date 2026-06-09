'use client'

// F&I "The War Story" — the five phases read as one connected spine. The French and
// Indian War has no geographic theatres; its phases ARE the story chapters (each
// phase's narrative), so this is the F&I analogue of the Civil War's "How the War
// Happened" landing. No dedicated story hero yet (born-verified rule — a missing
// image beats a wrong one), so it opens on the masthead.

import '../../war-civil-war/war-skin.css'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { WarHeader, WAR_ICONS } from '@/components/mode/war-header'
import { warCrumbs } from '@/components/mode/theatre-page'
import { WAR_STORY_COLOR } from '@/lib/wars/layer-colors'
import { FRENCH_INDIAN as W } from '@/lib/wars/french-indian'

export default function FrenchIndianStoryPage() {
  const spine = [...W.chapters].sort((a, b) => (a.year !== b.year ? a.year - b.year : a.m - b.m))
  return (
    <div className="war-skin rd-land" style={{ ['--accent' as string]: 'var(--warstory)' } as React.CSSProperties}>
      <WarHeader backHref="/war-french-indian" title={W.name} />
      <WarBreadcrumb crumbs={warCrumbs(W, { lane: 'fi-story' })} accent={WAR_STORY_COLOR.dark} bare />

      <div className="p-mast">
        <div className="p-eyebrow">The French &amp; Indian story</div>
        <h1 className="p-mast-title p-serif">How the War<br />Happened</h1>
        <p className="p-stand">The French and Indian War in five phases, 1754 to 1763. A backwoods clash in the Ohio Country escalated into a war for the continent: three years of British disaster, the turn under William Pitt, the conquest of Canada, and a peace whose costs and broken promises lit the fuse to the Revolution. Read straight through as one story, or drop into any phase and follow it down to its battles.</p>
      </div>

      <div className="p-page" style={{ paddingBottom: 12 }}>
        <p className="p-lead">The war as it unfolded, 1754 to 1763.</p>
        {spine.map((c, i) => {
          const yr = (c.date.match(/\d{4}/) || [''])[0]
          return c.href
            ? <a className="p-chap" key={c.id} href={c.href}>
                <span className="no p-mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="bd"><b className="p-serif">{c.short ?? c.name}</b><span>{c.hook ?? ''}</span></span>
                <span className="yr p-mono">{yr}</span>
              </a>
            : <div className="p-chap" key={c.id} style={{ opacity: .55 }}>
                <span className="no p-mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="bd"><b className="p-serif">{c.short ?? c.name}</b><span>{c.hook ?? ''}</span></span>
                <span className="yr p-mono">Soon</span>
              </div>
        })}
      </div>
      <div className="bp-foot">
        <a href="/war-french-indian">
          <span>Part of <b className="p-serif">the French &amp; Indian War</b><span className="sub">Every phase &amp; chapter</span></span>
          <span className="arr">{WAR_ICONS.arr}</span>
        </a>
      </div>
    </div>
  )
}
