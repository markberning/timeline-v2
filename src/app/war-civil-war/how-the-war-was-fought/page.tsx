'use client'

// "How the War Was Fought" — the sixth lane. NOT a place and NOT the causes: the
// MILITARY / STRATEGIC through-line that ties the ~46 battle dossiers into one war
// with a plan, a learning curve, and a logic. Five chronological chapters (1861 →
// 1865) read from the shared roster (CHAPTERS in src/lib/civil-war-roster.ts).
// Stone WAR_ACCENT (the calm war-level parent, outside the five theatre hues). No
// Timeline/Dossier toggle — it's a reading arc, breadcrumb only.

import { useState } from 'react'
import { WarBreadcrumb, SANS, SERIF, WAR_ACCENT } from '@/components/mode/war-chrome'
import { BattleCard, CordTimeline } from '@/components/mode/war-battle-card'
import { civilWarCrumbs } from '@/components/mode/theatre-page'
import { CHAPTERS } from '@/lib/civil-war-roster'

const ACCENT = WAR_ACCENT

function Header() {
  const [failed, setFailed] = useState(false)
  const PAL = ['#3a342a', '#23201a', '#0a0806']
  return (
    <>
      <div style={{ position: 'relative', height: 248, overflow: 'hidden', background: PAL[2] }}>
        {failed
          ? <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${PAL[0]}, ${PAL[1]} 55%, ${PAL[2]})` }} />
          : <img src="/war-img/civil-war-hero.jpg" alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', transform: 'scale(1.16)', transformOrigin: 'center', filter: 'sepia(0.16) saturate(0.9) contrast(1.04)' }} />}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 26%, rgba(8,8,8,0.9) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '16px 18px', color: '#fff' }}>
          <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.6, fontWeight: 700, color: `color-mix(in srgb, ${ACCENT} 60%, white)`, textTransform: 'uppercase', textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}>War · the military story</div>
          <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontSize: 30, lineHeight: 1.04, letterSpacing: -0.5, fontWeight: 500, textShadow: '0 2px 12px rgba(0,0,0,0.55)' }}>How the War Was Fought</h1>
          <div style={{ marginTop: 5, fontFamily: SANS, fontSize: 12.5, letterSpacing: 0.3, color: 'rgba(255,255,255,0.8)' }}>Strategy · command · the whole war, year by year</div>
        </div>
      </div>
      <div style={{ padding: '7px 16px 0', fontFamily: SANS, fontSize: 10, letterSpacing: 0.2, color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>Storming Fort Wagner · Kurz &amp; Allison · public domain</div>
      <p style={{ margin: '14px 16px 4px', fontFamily: SERIF, fontSize: 15.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)' }}>
        The battle pages tell you what happened on each field. The theme pages tell you why the war was fought. This is the connective tissue between them — the military story as one through-line: how the war was planned, how each win and loss bent the strategy, how supply and casualties were borne, and how Lincoln and Davis learned to run a war. Each chapter links down into the battles it sets in motion.
      </p>
    </>
  )
}

export default function HowTheWarWasFoughtPage() {
  const spine = [...CHAPTERS].sort((a, b) => (a.year !== b.year ? a.year - b.year : a.m - b.m))
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarBreadcrumb crumbs={civilWarCrumbs({ theatre: 'howfought' })} accent={ACCENT} />
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <Header />
        <div style={{ padding: '8px 0 20px' }}>
          <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.6, margin: '8px 16px 4px', color: 'color-mix(in srgb, var(--foreground) 78%, transparent)' }}>
            Five chapters, 1861 to 1865 — the war as its commanders saw it unfold.
          </p>
          <CordTimeline>
            {spine.map((c, i) => <BattleCard key={c.id} size={c.size} accent={ACCENT} dateTop={String(c.year)} title={c.short ?? c.name} sub={`Chapter ${i + 1} · ${c.date}`} hook={c.hook} href={c.href} imageUrl={c.img} stack={c.stack} fit={!!c.img} soon={!c.href} />)}
          </CordTimeline>
        </div>
      </div>
    </div>
  )
}
