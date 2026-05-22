'use client'

// BATTLE dossier (Gettysburg) — faithful port of the War Drilldown handoff.
// Dossier view: hero · collapsible At-a-glance (stat strip + armies face-off +
// casualties bar) · outcome pill · fishhook map (approximate) · commanders
// strip · numbered 5-section list. Timeline view: hero + hook + section cards.
// Maps approximate per direction; sections link to the reader (standalone for
// now). Palette = mockup (Civil War violet, Union blue, Confederate rust).

import { useState } from 'react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { WarChrome, SANS, SERIF, ACCENTS, CIVIL_WAR_ACCENT as ACCENT, alpha, type View } from '@/components/mode/war-chrome'

const CRUMBS = [
  { label: 'War', href: '/' },
  { label: 'American Civil War', href: '/war-civil-war' },
  { label: 'Eastern Theatre', href: '/war-civil-war/eastern' },
  { label: 'Gettysburg' },
]

const HERO_IMG = 'https://commons.wikimedia.org/wiki/Special:FilePath/Thure%20de%20Thulstrup%20-%20L.%20Prang%20and%20Co.%20-%20Battle%20of%20Gettysburg%20-%20Restoration%20by%20Adam%20Cuerden.jpg?width=900'
const HERO_PAL = ['#3a2a1c', '#7a1422', '#100506']

const ARMIES = [
  { side: 'Union', label: 'Army of the Potomac', size: '93,921', commander: 'Maj. Gen. G. G. Meade', motto: 'Three days from command', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of Northern Virginia', size: '71,699', commander: 'Gen. R. E. Lee', motto: 'Second invasion of the North', color: ACCENTS.rust },
]
const CAS = { union: 23055, csa: 28063, civ: 1 }
const FIGURES = [
  { name: 'R. E. Lee', role: 'Cmdr., CSA', side: 'C' }, { name: 'J. Longstreet', role: 'Lt. Gen., CSA', side: 'C' },
  { name: 'G. Pickett', role: 'Div., CSA', side: 'C' }, { name: 'G. Meade', role: 'Cmdr., Potomac', side: 'U' },
  { name: 'W. Hancock', role: 'Corps, Union', side: 'U' }, { name: 'J. Buford', role: 'Cav., Union', side: 'U' },
  { name: 'J. Chamberlain', role: 'Col., 20th Maine', side: 'U' },
]
const SECTIONS = [
  { id: 'setting', eyebrow: 'Lay of the land', title: 'How they got there', blurb: 'Lee marches north. The armies converge blindly toward a Pennsylvania crossroads town with ten roads.', cas: null, day: null },
  { id: 'mcpherson', eyebrow: 'Day 1 · July 1', title: 'McPherson’s Ridge', blurb: 'Heth blunders into Buford. Reynolds is killed. By evening the Union has been pushed back to Cemetery Hill.', cas: 15500, day: 1 },
  { id: 'hooks', eyebrow: 'Day 2 · July 2', title: 'The Hooks', blurb: 'Longstreet swings around to hit the Union left. The 20th Maine holds at the end of the line.', cas: 19500, day: 2 },
  { id: 'pickett', eyebrow: 'Day 3 · July 3', title: 'Pickett’s Charge', blurb: 'Twelve thousand five hundred men across three-quarters of a mile of open ground. About half do not come back.', cas: 15000, day: 3 },
  { id: 'aftermath', eyebrow: 'Aftermath', title: 'The retreat & the Address', blurb: 'Lee withdraws south through ten days of rain. Five months later Lincoln dedicates the cemetery in two minutes.', cas: null, day: null },
]
const DAY_COLOR: Record<number, string> = { 1: ACCENTS.amber, 2: ACCENTS.violet, 3: ACCENTS.rust }
const SECTION_HREF = '/war-pilot-preview' // standalone reader stand-in for now
const num = (n: number) => n.toLocaleString('en-US')

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{children}</div>
}

function HeroImg() {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
      {failed
        ? <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${HERO_PAL[0]}, ${HERO_PAL[1]} 55%, ${HERO_PAL[2]})` }} />
        : <img src={HERO_IMG} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'absolute', top: 10, right: 12, fontFamily: SANS, fontSize: 9, color: 'rgba(255,255,255,0.7)', background: 'rgba(0,0,0,0.4)', padding: '3px 7px', borderRadius: 4 }}>Thure de Thulstrup, 1887 · chromolithograph</div>
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
        <Eyebrow color={ACCENT}>Battle · Eastern Theatre battles · 5 of 8</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Gettysburg</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>July 1–3, 1863 · Adams County, Pennsylvania</div>
      </div>
    </div>
  )
}

function CasualtiesBar() {
  const total = CAS.union + CAS.csa + CAS.civ
  const seg = (v: number, c: string) => <div style={{ width: `${(v / total) * 100}%`, background: c, height: '100%' }} />
  return (
    <div>
      <div style={{ display: 'flex', height: 10, borderRadius: 5, overflow: 'hidden', marginBottom: 8 }}>
        {seg(CAS.union, ACCENTS.blue)}{seg(CAS.csa, ACCENTS.rust)}{seg(CAS.civ, 'color-mix(in srgb, var(--foreground) 30%, transparent)')}
      </div>
      <div style={{ display: 'flex', gap: 16, fontFamily: SANS, fontSize: 11, color: 'color-mix(in srgb, var(--foreground) 65%, transparent)' }}>
        <span><span style={{ color: ACCENTS.blue }}>■</span> Union {num(CAS.union)}</span>
        <span><span style={{ color: ACCENTS.rust }}>■</span> Confederacy {num(CAS.csa)}</span>
      </div>
    </div>
  )
}

function AtAGlance() {
  const [open, setOpen] = useState(true)
  return (
    <section style={{ borderTop: '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)', borderBottom: '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)', padding: '14px 16px' }}>
      <button onClick={() => setOpen(o => !o)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: 0, color: 'inherit' }}>
        <Eyebrow color={ACCENT}>At a glance</Eyebrow>
        <span style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease', opacity: 0.5, fontSize: 12 }}>▾</span>
      </button>
      {open && (
        <div style={{ marginTop: 14 }}>
          {/* stat strip */}
          <div style={{ display: 'flex', marginBottom: 18 }}>
            {[['Duration', '3 days'], ['Casualties', '51k'], ['Winner', 'Union']].map(([k, v], i) => (
              <div key={k} style={{ flex: 1, textAlign: 'center', borderLeft: i ? '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)' : 'none' }}>
                <div style={{ fontFamily: SERIF, fontSize: 18 }}>{v}</div>
                <Eyebrow>{k}</Eyebrow>
              </div>
            ))}
          </div>
          {/* armies face-off */}
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, marginBottom: 18, position: 'relative' }}>
            {ARMIES.map((a, i) => (
              <div key={a.side} style={{ flex: 1, textAlign: i ? 'right' : 'left', paddingRight: i ? 0 : 18, paddingLeft: i ? 18 : 0 }}>
                <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: a.color }}>{a.side}</div>
                <div style={{ fontFamily: SERIF, fontSize: 15, marginTop: 2 }}>{a.label}</div>
                <div style={{ fontFamily: SANS, fontSize: 12, color: 'color-mix(in srgb, var(--foreground) 60%, transparent)', marginTop: 3 }}>{a.size} · {a.commander}</div>
                <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)', marginTop: 3 }}>{a.motto}</div>
              </div>
            ))}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 26, height: 26, borderRadius: 999, background: 'var(--background)', border: '1px solid color-mix(in srgb, var(--foreground) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SERIF, fontStyle: 'italic', fontSize: 12, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>vs</div>
          </div>
          <CasualtiesBar />
        </div>
      )}
    </section>
  )
}

function OutcomePill() {
  return (
    <div style={{ padding: '14px 16px' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, border: `1px solid ${alpha(ACCENT, 0.4)}`, background: alpha(ACCENT, 0.08), borderRadius: 999, padding: '7px 14px' }}>
        <span style={{ color: ACCENT, fontWeight: 700 }}>✓</span>
        <span style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: ACCENT }}>Outcome</span>
        <span style={{ fontFamily: SERIF, fontSize: 14 }}>Union victory · CSA high-water mark</span>
      </div>
    </div>
  )
}

// Approximate fishhook diagram (recognizable, not pixel-exact).
function Fishhook() {
  return (
    <div style={{ padding: '0 16px 8px' }}>
      <Eyebrow color={ACCENT}>The battlefield</Eyebrow>
      <div style={{ position: 'relative', height: 220, marginTop: 10, borderRadius: 6, background: 'color-mix(in srgb, var(--foreground) 4%, transparent)', border: '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)', overflow: 'hidden' }}>
        {/* Seminary Ridge (CSA) — left vertical bar */}
        <div style={{ position: 'absolute', left: '24%', top: '14%', bottom: '14%', width: 6, borderRadius: 3, background: alpha(ACCENTS.rust, 0.7) }} />
        <div style={{ position: 'absolute', left: '20%', top: '6%', fontFamily: SANS, fontSize: 8.5, color: ACCENTS.rust }}>SEMINARY RDG · CSA</div>
        {/* Cemetery Ridge (Union) — right vertical bar + curl to Culp's Hill */}
        <div style={{ position: 'absolute', left: '64%', top: '20%', bottom: '14%', width: 6, borderRadius: 3, background: alpha(ACCENTS.blue, 0.8) }} />
        <div style={{ position: 'absolute', left: '58%', top: '14%', width: '14%', height: 6, borderRadius: 3, background: alpha(ACCENTS.blue, 0.8) }} />
        <div style={{ position: 'absolute', left: '72%', top: '8%', fontFamily: SANS, fontSize: 8.5, color: ACCENTS.blue }}>CEMETERY RDG · USA</div>
        {/* Pickett's Charge — dashed arrow across the open ground */}
        <div style={{ position: 'absolute', left: '31%', top: '52%', width: '32%', height: 0, borderTop: `2px dashed ${alpha(ACCENTS.rust, 0.9)}` }} />
        <div style={{ position: 'absolute', left: '62%', top: 'calc(52% - 4px)', width: 0, height: 0, borderLeft: `7px solid ${alpha(ACCENTS.rust, 0.9)}`, borderTop: '4px solid transparent', borderBottom: '4px solid transparent' }} />
        <div style={{ position: 'absolute', left: '34%', top: '56%', fontFamily: SANS, fontSize: 8.5, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>Pickett’s Charge, Jul 3</div>
        {/* engagement dots, color-coded by day */}
        {[[1, '28%', '34%'], [1, '30%', '70%'], [2, '40%', '78%'], [2, '52%', '74%'], [2, '60%', '30%'], [3, '50%', '50%']].map(([d, l, top], i) => (
          <div key={i} style={{ position: 'absolute', left: l as string, top: top as string, width: 9, height: 9, borderRadius: 999, background: DAY_COLOR[d as number], border: '1px solid rgba(0,0,0,0.3)' }} />
        ))}
        {/* town circle */}
        <div style={{ position: 'absolute', left: '44%', top: '24%', width: 12, height: 12, borderRadius: 999, border: '1.5px solid color-mix(in srgb, var(--foreground) 45%, transparent)' }} />
        <div style={{ position: 'absolute', left: '47%', top: '20%', fontFamily: SANS, fontSize: 8, color: 'color-mix(in srgb, var(--foreground) 50%, transparent)' }}>town</div>
      </div>
      <div style={{ display: 'flex', gap: 14, marginTop: 8, fontFamily: SANS, fontSize: 10.5, color: 'color-mix(in srgb, var(--foreground) 60%, transparent)' }}>
        {[[1, 'Day 1'], [2, 'Day 2'], [3, 'Day 3']].map(([d, l]) => (
          <span key={l as string}><span style={{ color: DAY_COLOR[d as number] }}>●</span> {l}</span>
        ))}
      </div>
    </div>
  )
}

function CommandersStrip() {
  return (
    <div style={{ padding: '14px 0 14px 16px' }}>
      <Eyebrow color={ACCENT}>Commanders</Eyebrow>
      <div style={{ display: 'flex', gap: 14, overflowX: 'auto', marginTop: 10, paddingBottom: 4 }}>
        {FIGURES.map(f => {
          const ring = f.side === 'U' ? ACCENTS.blue : ACCENTS.rust
          return (
            <div key={f.name} style={{ flexShrink: 0, width: 64, textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, margin: '0 auto', borderRadius: 999, background: 'linear-gradient(135deg, #3a2e21, #1c1814)', border: `2px solid ${ring}`, boxShadow: `0 0 0 2px var(--background)` }} />
              <div style={{ fontFamily: SERIF, fontSize: 11.5, marginTop: 6, lineHeight: 1.15 }}>{f.name}</div>
              <div style={{ fontFamily: SANS, fontSize: 8.5, color: 'color-mix(in srgb, var(--foreground) 50%, transparent)', marginTop: 1 }}>{f.role}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function SectionsList() {
  return (
    <div style={{ padding: '6px 16px 40px' }}>
      <Eyebrow color={ACCENT}>The narrative · 5 sections</Eyebrow>
      <div style={{ position: 'relative', marginTop: 12 }}>
        <div style={{ position: 'absolute', left: 13, top: 8, bottom: 8, width: 1, background: 'color-mix(in srgb, var(--foreground) 18%, transparent)' }} />
        {SECTIONS.map((s, i) => (
          <a key={s.id} href={SECTION_HREF} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{ position: 'relative', paddingLeft: 40, paddingBottom: 14 }}>
              <div style={{ position: 'absolute', left: 0, top: 2, width: 27, height: 27, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SANS, fontSize: 12, fontWeight: 700, background: i === 0 ? ACCENT : 'var(--background)', color: i === 0 ? '#fff' : 'color-mix(in srgb, var(--foreground) 60%, transparent)', border: `1px solid ${i === 0 ? ACCENT : 'color-mix(in srgb, var(--foreground) 25%, transparent)'}`, zIndex: 1 }}>{i + 1}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                <Eyebrow color={s.day ? DAY_COLOR[s.day] : ACCENT}>{s.eyebrow}</Eyebrow>
                {s.cas && <span style={{ fontFamily: SANS, fontSize: 10, color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{num(s.cas)} cas.</span>}
              </div>
              <div style={{ fontFamily: SERIF, fontSize: 17, marginTop: 2 }}>{s.title}</div>
              <div style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.5, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)', marginTop: 2 }}>{s.blurb}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function GettysburgPage() {
  const [view, setView] = useState<View>('dossier')
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarChrome crumbs={CRUMBS} view={view} onView={setView} accent={ACCENT} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '8px 16px 0' }}><DarkModeToggle /></div>
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <HeroImg />
        {view === 'dossier' ? (
          <>
            <AtAGlance />
            <OutcomePill />
            <Fishhook />
            <CommandersStrip />
            <SectionsList />
          </>
        ) : (
          <div style={{ padding: '16px 16px 40px' }}>
            <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.6, margin: '0 0 18px', color: 'color-mix(in srgb, var(--foreground) 78%, transparent)' }}>
              Three days of disaster for Lee. The Confederacy never reaches this far north again.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SECTIONS.map((s, i) => (
                <a key={s.id} href={SECTION_HREF} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div style={{ border: `1px solid ${i === 0 ? alpha(ACCENT, 0.5) : 'color-mix(in srgb, var(--foreground) 14%, transparent)'}`, borderRadius: 8, padding: 14, background: 'color-mix(in srgb, var(--foreground) 3%, transparent)' }}>
                    <Eyebrow color={s.day ? DAY_COLOR[s.day] : ACCENT}>{s.eyebrow}</Eyebrow>
                    <div style={{ fontFamily: SERIF, fontSize: 18, marginTop: 3 }}>{s.title}</div>
                    <div style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.5, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)', marginTop: 3 }}>{s.blurb}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
