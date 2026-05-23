'use client'

// The fifth "theatre" — Off the Battlefield. NOT a place and NOT a battle
// theatre: no army face-off, no geography map. It holds the locked non-battle
// theme sections (causes → how it was fought → what it became → the hard edge →
// the reckoning), the war beyond the firing line. Reads the THEMES from the
// shared roster (src/lib/civil-war-roster.ts) — the same sections placed on the
// home spine. Palette: green (mockup ACCENTS.green). Every section is "Soon" —
// the theme pages aren't written yet. Same Timeline/Dossier toggle as the battle
// theatres, for consistency.

import { WarChrome, SANS, SERIF, ACCENTS, alpha, useWarView } from '@/components/mode/war-chrome'
import { BattleCard, CordTimeline } from '@/components/mode/war-battle-card'
import { civilWarCrumbs } from '@/components/mode/theatre-page'
import { THEMES, type Theme } from '@/lib/civil-war-roster'

const ACCENT = ACCENTS.green
const MUTED = 'color-mix(in srgb, var(--foreground) 70%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 45%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 12%, transparent)'

// Theme phases, in narrative order, with a one-line framing for each group.
const PHASE_SECTIONS: { phase: string; label: string; note: string }[] = [
  { phase: 'causes', label: 'What caused it', note: 'The country arguing its way to the cliff edge.' },
  { phase: 'hard', label: 'How it was fought', note: 'The machinery, the diplomacy, and the home front behind the firing line.' },
  { phase: 'turning', label: 'What it became', note: 'The war’s meaning changes — emancipation, and Black soldiers in Union blue.' },
  { phase: 'total', label: 'The hard edge', note: 'Prison camps, no-quarter killings, and the savage irregular war.' },
  { phase: 'after', label: 'The reckoning', note: 'Assassination, and the unfinished work that becomes Reconstruction.' },
]

const TYPE_LABEL: Record<string, string> = { CAUSE: 'Cause', POLITICS: 'Politics', SOCIETY: 'Society', AFTERMATH: 'Aftermath', BATTLE: 'Battle' }

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || FAINT }}>{children}</div>
}

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

function SoonChip() {
  return (
    <span style={{ flexShrink: 0, fontFamily: SANS, fontSize: 8, fontWeight: 700, letterSpacing: 0.7, textTransform: 'uppercase', padding: '2px 6px', borderRadius: 999, color: FAINT, border: `1px solid ${BORDER}` }}>Soon</span>
  )
}

function ThemeCard({ t }: { t: Theme }) {
  return (
    <div style={{ display: 'block', position: 'relative', padding: '13px 14px', borderRadius: 9, border: `1px solid ${BORDER}`, background: 'color-mix(in srgb, var(--foreground) 4%, transparent)', opacity: 0.86 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap', minWidth: 0 }}>
          <span style={{ fontFamily: SANS, fontSize: 9, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color: ACCENT }}>{TYPE_LABEL[t.type] || t.type}</span>
          <span style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>{t.date}</span>
        </div>
        <SoonChip />
      </div>
      <div style={{ marginTop: 5, fontFamily: SERIF, fontSize: 17, lineHeight: 1.15, letterSpacing: -0.2 }}>{t.name}</div>
      <div style={{ marginTop: 5, fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.45, color: MUTED }}>{t.hook}</div>
    </div>
  )
}

export default function OffTheBattlefieldPage() {
  const [view, setView] = useWarView()
  const spine = [...THEMES].sort((a, b) => (a.year !== b.year ? a.year - b.year : a.m - b.m))
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarChrome crumbs={civilWarCrumbs({ theatre: 'offfield' })} view={view} onView={setView} accent={ACCENT} />
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <Header />
        {view === 'dossier' ? (
          <div style={{ padding: '4px 0 16px' }}>
            {PHASE_SECTIONS.map(sec => {
              const items = THEMES.filter(t => t.phase === sec.phase)
              if (!items.length) return null
              return (
                <section key={sec.phase} style={{ padding: '18px 16px 4px', borderTop: `1px solid ${BORDER}` }}>
                  <Eyebrow color={ACCENT}>{sec.label}</Eyebrow>
                  <div style={{ marginTop: 4, marginBottom: 12, fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, lineHeight: 1.4, color: FAINT }}>{sec.note}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {items.map(t => <ThemeCard key={t.id} t={t} />)}
                  </div>
                </section>
              )
            })}
          </div>
        ) : (
          <div style={{ padding: '8px 0 20px' }}>
            <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.6, margin: '8px 16px 4px', color: 'color-mix(in srgb, var(--foreground) 78%, transparent)' }}>
              The threads off the firing line, in the order they shaped the war. Section pages are coming; for now, this is the map of what’s here.
            </p>
            <CordTimeline>
              {spine.map(t => <BattleCard key={t.id} size={t.size} accent={ACCENT} dateTop={String(t.year)} title={t.name} sub={`${t.date} · ${TYPE_LABEL[t.type] || t.type}`} hook={t.hook} soon />)}
            </CordTimeline>
          </div>
        )}
      </div>
    </div>
  )
}
