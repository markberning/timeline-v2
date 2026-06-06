'use client'

// "How the War Was Fought" — the sixth lane. NOT a place and NOT the causes: the
// MILITARY / STRATEGIC through-line that ties the ~46 battle dossiers into one war
// with a plan, a learning curve, and a logic. Five chronological chapters (1861 →
// 1865), read from the shared roster (CHAPTERS in src/lib/civil-war-roster.ts).
// REDESIGN (feat/war-redesign): war-skin chrome (editorial header + masthead + hero)
// with the numbered chapter spine, mirroring the home's Story tab. Stone WAR_ACCENT
// (the calm war-level parent, outside the five theatre hues).

import '../war-skin.css'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { WarHeader, WAR_ICONS } from '@/components/mode/war-header'
import { civilWarCrumbs } from '@/components/mode/theatre-page'
import { WAR_STORY_COLOR } from '@/lib/wars/layer-colors'
import { CHAPTERS } from '@/lib/civil-war-roster'

export default function HowTheWarWasFoughtPage() {
  const spine = [...CHAPTERS].sort((a, b) => (a.year !== b.year ? a.year - b.year : a.m - b.m))
  return (
    <div className="war-skin rd-land" style={{ ['--accent' as string]: 'var(--warstory)' } as React.CSSProperties}>
      <WarHeader backHref="/war-civil-war" />
      <WarBreadcrumb crumbs={civilWarCrumbs({ theatre: 'howfought' })} accent={WAR_STORY_COLOR.dark} bare />

      <div className="p-mast">
        <div className="p-eyebrow">The Civil War story</div>
        <h1 className="p-mast-title p-serif">How the War<br />Happened</h1>
        <p className="p-stand">Read these five chapters and you have read the war. They carry the whole thing, from the first shot at Fort Sumter to the surrender at Appomattox: how two unready nations raised armies, how each battle bent the strategy, how casualties and broken supply lines wore the South down, and how a war to save the Union became a war to end slavery. This is the spine the rest of the section hangs on. Every chapter opens a door into the battles it set in motion and the upheavals off the field that drove them, so you can read straight through as one story or follow any thread as far down as it goes.</p>
      </div>
      <div className="p-heroband">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/war-img/how-the-war-was-fought-hero.jpg" alt="" />
      </div>
      <div className="p-credit">“Battle of Chattanooga” · Thure de Thulstrup (L. Prang &amp; Co.) · 1880 · public domain</div>

      <div className="p-page" style={{ paddingBottom: 12 }}>
        <p className="p-lead">The war as its commanders saw it, 1861 to 1865.</p>
        {spine.map((c, i) => {
          const yr = (c.date.match(/\d{4}/) || [''])[0]
          return c.href
            ? <a className="p-chap" key={c.id} href={c.href}>
                <span className="no p-mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="bd"><b className="p-serif">{c.short ?? c.name}</b><span>{c.hook}</span></span>
                <span className="yr p-mono">{yr}</span>
              </a>
            : <div className="p-chap" key={c.id} style={{ opacity: .55 }}>
                <span className="no p-mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="bd"><b className="p-serif">{c.short ?? c.name}</b><span>{c.hook}</span></span>
                <span className="yr p-mono">Soon</span>
              </div>
        })}
      </div>
      <div className="bp-foot">
        <a href="/war-civil-war">
          <span>Part of <b className="p-serif">the American Civil War</b><span className="sub">All battles &amp; theatres</span></span>
          <span className="arr">{WAR_ICONS.arr}</span>
        </a>
      </div>
    </div>
  )
}
