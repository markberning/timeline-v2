'use client'

// The fifth "theatre" — Off the Battlefield. NOT a place and NOT a battle
// theatre: no army face-off, no geography map. It holds the locked non-battle
// theme sections (causes → how it was fought → what it became → the reckoning),
// the war beyond the firing line. Reads the THEMES from the shared roster
// (src/lib/civil-war-roster.ts) — the same sections placed on the home spine.
// Palette: green (mockup ACCENTS.otbf). All 17 sections are built and live (the
// arc runs causes → hard war → turning point → total war → aftermath). No
// Timeline/Dossier toggle (it's a subject list, not a two-view battle theatre) —
// breadcrumb only, the timeline spine.

import { useState } from 'react'
import { WarBreadcrumb, SANS, SERIF, ACCENTS } from '@/components/mode/war-chrome'
import { BattleCard, CordTimeline } from '@/components/mode/war-battle-card'
import { civilWarCrumbs } from '@/components/mode/theatre-page'
import { THEMES } from '@/lib/civil-war-roster'

const ACCENT = ACCENTS.otbf

const TYPE_LABEL: Record<string, string> = { CAUSE: 'Cause', POLITICS: 'Politics', SOCIETY: 'Society', AFTERMATH: 'Aftermath', BATTLE: 'Battle' }

// Non-battle hero — a full-bleed period image for the subject (Nast's
// "Emancipation," the era's great emblem of the war's social transformation),
// with the title overlaid, then the framing paragraph below.
function Header() {
  const [failed, setFailed] = useState(false)
  const PAL = ['#3a342a', '#23201a', '#0a0806']
  return (
    <>
      <div style={{ position: 'relative', height: 248, overflow: 'hidden', background: PAL[2] }}>
        {failed
          ? <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${PAL[0]}, ${PAL[1]} 55%, ${PAL[2]})` }} />
          : <img src="/war-img/off-the-battlefield-hero.jpg" alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 32%', transform: 'scale(1.04)', transformOrigin: 'center', filter: 'sepia(0.16) saturate(0.9) contrast(1.04)' }} />}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0) 26%, rgba(8,8,8,0.9) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '16px 18px', color: '#fff' }}>
          <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.6, fontWeight: 700, color: `color-mix(in srgb, ${ACCENT} 45%, white)`, textTransform: 'uppercase', textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}>War · the war beyond the battles</div>
          <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontSize: 30, lineHeight: 1.04, letterSpacing: -0.5, fontWeight: 500, textShadow: '0 2px 12px rgba(0,0,0,0.55)' }}>Off the Battlefield</h1>
          <div style={{ marginTop: 5, fontFamily: SANS, fontSize: 12.5, letterSpacing: 0.3, color: 'rgba(255,255,255,0.8)' }}>Causes · society · technology · diplomacy · aftermath</div>
        </div>
      </div>
      <div style={{ padding: '7px 16px 0', fontFamily: SANS, fontSize: 10, letterSpacing: 0.2, color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>Thomas Nast, “Emancipation” (Harper’s Weekly, 1863) · public domain</div>
      <p style={{ margin: '14px 16px 4px', fontFamily: SERIF, fontSize: 15.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)' }}>
        Battles decide who holds the field. They don’t explain why four million people were enslaved, how a rifled musket changed everything, or what the war did to the people who never fired a shot. These are those threads.
      </p>
    </>
  )
}

export default function OffTheBattlefieldPage() {
  const spine = [...THEMES].sort((a, b) => (a.year !== b.year ? a.year - b.year : a.m - b.m))
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarBreadcrumb crumbs={civilWarCrumbs({ theatre: 'offfield' })} accent={ACCENT} />
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <Header />
        <div style={{ padding: '8px 0 20px' }}>
          <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.6, margin: '8px 16px 4px', color: 'color-mix(in srgb, var(--foreground) 78%, transparent)' }}>
            The threads off the firing line, in the order they shaped the war — from the cotton economy that caused it to the reckoning that followed.
          </p>
          <CordTimeline>
            {/* `fit` = never-crop, card-sizes-to-image (whole picture, ≤ ~56vw for
                landscape/near-square on top; clearly-tall portraits go image-left).
                Applied to every card (all 17 sections now have a hero image).
                Orientation comes from each theme's `stack` flag. */}
            {spine.map(t => <BattleCard key={t.id} size={t.size} accent={ACCENT} dateTop={String(t.year)} title={t.short ?? t.name} sub={`${t.date} · ${TYPE_LABEL[t.type] || t.type}`} hook={t.hook} href={t.href} imageUrl={t.img} stack={t.stack} fit={!!t.img} soon={!t.href} />)}
          </CordTimeline>
        </div>
      </div>
    </div>
  )
}
