'use client'

// Revolution "The War Story" — the six phases read as one connected spine. Like the
// F&I war, the Revolution has a single battle lane; its PHASES are the story chapters,
// so this is the Revolution's "How the War Happened" landing. No dedicated story hero
// yet (born-verified rule — a missing image beats a wrong one), so it opens on the
// masthead.

import '../../war-civil-war/war-skin.css'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { WarHeader, WAR_ICONS } from '@/components/mode/war-header'
import { warCrumbs } from '@/components/mode/theatre-page'
import { WAR_STORY_COLOR } from '@/lib/wars/layer-colors'
import { REVOLUTION as W } from '@/lib/wars/revolution'

export default function RevolutionStoryPage() {
  const spine = [...W.chapters].sort((a, b) => (a.year !== b.year ? a.year - b.year : a.m - b.m))
  return (
    <div className="war-skin rd-land" style={{ ['--accent' as string]: 'var(--warstory)' } as React.CSSProperties}>
      <WarHeader backHref="/war-revolution" title={W.name} />
      <WarBreadcrumb crumbs={warCrumbs(W, { lane: 'rev-story' })} accent={WAR_STORY_COLOR.dark} bare />

      <div className="p-mast">
        <div className="p-eyebrow">The Revolution story</div>
        <h1 className="p-mast-title p-serif">How the War<br />Happened</h1>
        <p className="p-stand">The American Revolution in six phases, 1775 to 1783. A shot outside Boston became a siege, a declaration, and a war the rebels nearly lost on the fields around New York; the turn at Saratoga pulled France in and made it a world war; the fighting went south, turned neighbor against neighbor, and ended in a trap at Yorktown that only an allied fleet could close. Read straight through as one story, or drop into any phase and follow it down to its battles.</p>
      </div>

      <div className="p-page" style={{ paddingBottom: 12 }}>
        <p className="p-lead">The war as it unfolded, 1775 to 1783.</p>
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
        <a href="/war-revolution">
          <span>Part of <b className="p-serif">the American Revolution</b><span className="sub">Every phase &amp; chapter</span></span>
          <span className="arr">{WAR_ICONS.arr}</span>
        </a>
      </div>
    </div>
  )
}
