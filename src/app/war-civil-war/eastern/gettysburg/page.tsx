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
import { BattleCard, CordTimeline, type CardSize } from '@/components/mode/war-battle-card'

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
const TL_META: Record<string, { size: CardSize; date: string; palette: [string, string, string] }> = {
  setting: { size: 'm', date: '1863', palette: ['#3a2e21', '#2a221c', '#0a0806'] },
  mcpherson: { size: 'l', date: 'Jul 1', palette: ['#7a3b1c', '#3a2820', '#0e0805'] },
  hooks: { size: 'l', date: 'Jul 2', palette: ['#5a5034', '#3a3020', '#100c08'] },
  pickett: { size: 'xl', date: 'Jul 3', palette: ['#7a1422', '#3a1208', '#0a0606'] },
  aftermath: { size: 'm', date: 'Jul →', palette: ['#3a2e21', '#2a221c', '#0a0806'] },
}
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
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: SANS, fontSize: 11, fontWeight: 600, color: ACCENT }}>
          {open ? 'Hide' : 'Show'}
          <span style={{ width: 22, height: 22, borderRadius: 999, border: `1px solid ${alpha(ACCENT, 0.55)}`, background: alpha(ACCENT, 0.1), display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, lineHeight: 1, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}>▾</span>
        </span>
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

// Per-day explanations shown below the map; also drive the interactive filter.
const DAYS = [
  { n: 1, title: 'Day 1 · July 1', sub: 'McPherson’s Ridge', text: 'Confederate divisions marching in from the northwest blunder into Union cavalry along McPherson’s Ridge. Both armies rush troops toward the sound of the guns; Gen. Reynolds is killed early. By evening the outnumbered Union forces are driven back through the town — but they rally onto the high ground south of it, the hills and ridges that form the fishhook.' },
  { n: 2, title: 'Day 2 · July 2', sub: 'The hooks', text: 'Lee strikes both ends of the fishhook at once. On the south, Longstreet’s men tear into Devil’s Den, the Wheatfield, the Peach Orchard, and Little Round Top — where Chamberlain’s 20th Maine holds the very end of the Union line. On the northern barb, Ewell claws at Culp’s Hill. The line bends everywhere and breaks nowhere.' },
  { n: 3, title: 'Day 3 · July 3', sub: 'Pickett’s Charge', text: 'After the largest artillery bombardment of the war, Lee gambles on the center. Roughly 12,500 men — Pickett’s Charge — step off across three-quarters of a mile of open ground toward the Angle on Cemetery Ridge. Canister and rifle fire shred them; the handful who reach the wall (the “high-water mark”) are killed or captured. The charge fails, and Lee’s invasion with it.' },
]

// Interactive SVG fishhook battlefield diagram — tap a day to spotlight its
// attacks; per-day text below. Themeable, offline, no deps. Not to scale.
function Fishhook() {
  const MONO = 'var(--font-geist-mono)'
  const fg = 'var(--foreground)'
  const blue = ACCENTS.blue, rust = ACCENTS.rust
  const [active, setActive] = useState(0) // 0 = all days
  const dayOp = (n: number) => (active === 0 || active === n ? 1 : 0.12)
  const TOWN = { x: 150, y: 64 }
  const roads = [-40, -10, 35, 80, 120, 160, 205, 250, 300]
  type Anchor = 'start' | 'middle' | 'end'
  const Lbl = ({ x, y, children, color, op = 0.62, size = 7.5, anchor = 'start' as Anchor }: { x: number; y: number; children: string; color?: string; op?: number; size?: number; anchor?: Anchor }) => (
    <text x={x} y={y} fontFamily={MONO} fontSize={size} fill={color || fg} opacity={color ? 1 : op} textAnchor={anchor}>{children}</text>
  )
  const grp: React.CSSProperties = { transition: 'opacity 220ms ease' }
  return (
    <div style={{ padding: '0 16px 8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Eyebrow color={ACCENT}>The battlefield · the fishhook</Eyebrow>
        <span style={{ fontFamily: MONO, fontSize: 9, color: 'color-mix(in srgb, var(--foreground) 42%, transparent)' }}>tap a day · not to scale</span>
      </div>
      <svg viewBox="0 0 360 300" style={{ width: '100%', height: 'auto', marginTop: 10, borderRadius: 6, background: 'color-mix(in srgb, var(--foreground) 4%, transparent)', border: '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)' }}>
        <defs>
          {([['amber', ACCENTS.amber], ['violet', ACCENTS.violet], ['rust', ACCENTS.rust]] as const).map(([id, c]) => (
            <marker key={id} id={`ah-${id}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5.5" markerHeight="5.5" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" fill={c} />
            </marker>
          ))}
        </defs>

        {/* roads radiating from town */}
        {roads.map((deg, i) => { const r = deg * Math.PI / 180; return <line key={i} x1={TOWN.x} y1={TOWN.y} x2={TOWN.x + Math.cos(r) * 26} y2={TOWN.y + Math.sin(r) * 26} stroke={fg} strokeOpacity={0.16} strokeWidth={1.2} /> })}

        {/* Confederate lines (rust): Seminary Ridge + outer arc north of town */}
        <path d="M92,92 C118,66 168,62 224,92" fill="none" stroke={rust} strokeWidth={2.5} strokeDasharray="5 4" opacity={0.85} />
        <path d="M92,92 L98,250" fill="none" stroke={rust} strokeWidth={4} strokeLinecap="round" />
        {/* Union fishhook (blue): Culp's Hill barb → Cemetery Hill → ridge → Round Tops */}
        <path d="M196,114 C206,96 188,86 168,92 C160,95 165,104 164,112 L161,234 L156,250" fill="none" stroke={blue} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />

        {/* Round Tops */}
        <path d="M150,250 l6,-9 l6,9 z" fill={fg} opacity={0.32} />
        <path d="M153,273 l7,-11 l7,11 z" fill={fg} opacity={0.28} />

        {/* town */}
        <circle cx={TOWN.x} cy={TOWN.y} r={6} fill="var(--background)" stroke={fg} strokeOpacity={0.6} strokeWidth={1.4} />

        {/* static terrain labels */}
        <Lbl x={132} y={50} color="color-mix(in srgb, var(--foreground) 62%, transparent)">GETTYSBURG</Lbl>
        <Lbl x={202} y={118}>Culp’s Hill</Lbl>
        <Lbl x={172} y={86}>Cemetery Hill</Lbl>
        <Lbl x={167} y={182}>Cemetery Ridge</Lbl>
        <Lbl x={32} y={176}>Seminary Ridge</Lbl>

        {/* Day 1 — amber */}
        <g opacity={dayOp(1)} style={grp}>
          <line x1="48" y1="42" x2="118" y2="60" stroke={ACCENTS.amber} strokeWidth={2.4} markerEnd="url(#ah-amber)" />
          {[[58, 46], [86, 55]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={ACCENTS.amber} stroke="rgba(0,0,0,0.3)" strokeWidth={0.8} />)}
          <Lbl x={20} y={38}>McPherson’s Ridge</Lbl>
        </g>

        {/* Day 2 — violet (Longstreet on the left, Ewell at the barb) */}
        <g opacity={dayOp(2)} style={grp}>
          <line x1="104" y1="208" x2="150" y2="242" stroke={ACCENTS.violet} strokeWidth={2.4} markerEnd="url(#ah-violet)" />
          <line x1="218" y1="100" x2="200" y2="112" stroke={ACCENTS.violet} strokeWidth={2.4} markerEnd="url(#ah-violet)" />
          {[[132, 254], [138, 236], [122, 222], [156, 248]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4} fill={ACCENTS.violet} stroke="rgba(0,0,0,0.3)" strokeWidth={0.8} />)}
          <Lbl x={98} y={252} anchor="end">Little Round Top</Lbl>
        </g>

        {/* Day 3 — Pickett's Charge */}
        <g opacity={dayOp(3)} style={grp}>
          <line x1="102" y1="158" x2="156" y2="158" stroke={ACCENTS.rust} strokeWidth={3} strokeDasharray="6 4" markerEnd="url(#ah-rust)" />
          <rect x="157" y="154.5" width="6.5" height="6.5" transform="rotate(45 160.25 157.75)" fill={ACCENTS.rust} />
          <Lbl x={168} y={150} color={ACCENTS.rust}>the Angle — high-water mark</Lbl>
        </g>

        {/* compass */}
        <path d="M334,18 l2.4,7 l-2.4,-2 l-2.4,2 z" fill={fg} opacity={0.5} />
        <Lbl x={331} y={36} op={0.5} size={9}>N</Lbl>
      </svg>

      {/* day filter pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 10 }}>
        {[0, 1, 2, 3].map(n => {
          const on = active === n
          const c = n === 0 ? ACCENT : DAY_COLOR[n]
          return (
            <button key={n} onClick={() => setActive(n)} style={{
              cursor: 'pointer', fontFamily: SANS, fontSize: 11, fontWeight: 600, padding: '5px 11px', borderRadius: 999,
              border: `1px solid ${on ? c : 'color-mix(in srgb, var(--foreground) 18%, transparent)'}`,
              background: on ? alpha(c, 0.14) : 'transparent', color: on ? c : 'color-mix(in srgb, var(--foreground) 65%, transparent)',
              display: 'inline-flex', alignItems: 'center', gap: 6,
            }}>
              {n !== 0 && <span style={{ width: 8, height: 8, borderRadius: 999, background: c }} />}
              {n === 0 ? 'All three days' : `Day ${n}`}
            </button>
          )
        })}
      </div>

      {/* static line key */}
      <div style={{ display: 'flex', gap: 14, marginTop: 8, fontFamily: SANS, fontSize: 10.5, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>
        <span><span style={{ color: blue }}>▬</span> Union line</span>
        <span><span style={{ color: rust }}>▬</span> Confederate line</span>
      </div>

      {/* per-day explanations (also filter the map) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
        {DAYS.map(d => {
          const dim = active !== 0 && active !== d.n
          const sel = active === d.n
          const c = DAY_COLOR[d.n]
          return (
            <button key={d.n} onClick={() => setActive(sel ? 0 : d.n)} style={{
              textAlign: 'left', cursor: 'pointer', width: '100%',
              border: `1px solid ${sel ? alpha(c, 0.5) : 'color-mix(in srgb, var(--foreground) 12%, transparent)'}`,
              background: sel ? alpha(c, 0.06) : 'transparent', borderRadius: 8, padding: '10px 12px',
              opacity: dim ? 0.45 : 1, transition: 'opacity 200ms ease, border-color 200ms ease',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 9, height: 9, borderRadius: 999, background: c }} />
                <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase', color: c }}>{d.title}</span>
                <span style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)' }}>{d.sub}</span>
              </div>
              <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.5, margin: '6px 0 0', color: 'color-mix(in srgb, var(--foreground) 82%, transparent)' }}>{d.text}</p>
            </button>
          )
        })}
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
          <div style={{ padding: '8px 0 20px' }}>
            <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.6, margin: '8px 16px 4px', color: 'color-mix(in srgb, var(--foreground) 78%, transparent)' }}>
              Three days of disaster for Lee. The Confederacy never reaches this far north again.
            </p>
            <CordTimeline>
              {SECTIONS.map(s => {
                const m = TL_META[s.id]
                return <BattleCard key={s.id} size={m.size} accent={s.day ? DAY_COLOR[s.day] : ACCENT} dateTop={m.date} palette={m.palette} title={s.title} sub={s.eyebrow} hook={s.blurb} href={SECTION_HREF} />
              })}
            </CordTimeline>
          </div>
        )}
      </div>
    </div>
  )
}
