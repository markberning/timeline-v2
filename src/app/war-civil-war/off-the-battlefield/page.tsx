'use client'

// The fifth "theatre" — Off the Battlefield. NOT a place and NOT a battle
// theatre: no army face-off, no geography map. It holds the locked non-battle
// theme sections (causes → how it was fought → what it became → the reckoning),
// the war beyond the firing line. Reads the THEMES from the shared roster
// (src/lib/civil-war-roster.ts) — the same sections placed on the home spine.
// Palette: green (mockup ACCENTS.green). Every section is "Soon" — the theme
// pages aren't written yet. No Timeline/Dossier toggle (it's a subject list, not
// a two-view battle theatre) — breadcrumb only, the timeline spine.

import { WarBreadcrumb, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { BattleCard, CordTimeline } from '@/components/mode/war-battle-card'
import { civilWarCrumbs } from '@/components/mode/theatre-page'
import { THEMES } from '@/lib/civil-war-roster'

const ACCENT = ACCENTS.green
const MUTED = 'color-mix(in srgb, var(--foreground) 70%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 12%, transparent)'

const TYPE_LABEL: Record<string, string> = { CAUSE: 'Cause', POLITICS: 'Politics', SOCIETY: 'Society', AFTERMATH: 'Aftermath', BATTLE: 'Battle' }

// Non-battle header — a clean accent banner, not the battle GenericHero (this
// "theatre" is a subject, not a place).
function Header() {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', background: `linear-gradient(150deg, ${alpha(ACCENT, 0.22)}, ${alpha(ACCENT, 0.05)} 60%, transparent)`, borderBottom: `1px solid ${BORDER}`, padding: '24px 18px 22px' }}>
      <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.6, fontWeight: 700, color: ACCENT, textTransform: 'uppercase' }}>War · the war beyond the battles</div>
      <h1 style={{ margin: '8px 0 0', fontFamily: SERIF, fontSize: 30, lineHeight: 1.04, letterSpacing: -0.5, fontWeight: 500 }}>Off the Battlefield</h1>
      <div style={{ marginTop: 6, fontFamily: SANS, fontSize: 12.5, letterSpacing: 0.3, color: MUTED }}>Causes · society · technology · diplomacy · aftermath</div>
      <p style={{ margin: '14px 0 0', fontFamily: SERIF, fontSize: 15.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', maxWidth: 380 }}>
        Battles decide who holds the field. They don’t explain why four million people were enslaved, how a rifled musket changed everything, or what the war did to the people who never fired a shot. These are those threads.
      </p>
    </div>
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
            The threads off the firing line, in the order they shaped the war. Section pages are coming; for now, this is the map of what’s here.
          </p>
          <CordTimeline>
            {spine.map(t => <BattleCard key={t.id} size={t.size} accent={ACCENT} dateTop={String(t.year)} title={t.name} sub={`${t.date} · ${TYPE_LABEL[t.type] || t.type}`} hook={t.hook} href={t.href} soon={!t.href} />)}
          </CordTimeline>
        </div>
      </div>
    </div>
  )
}
