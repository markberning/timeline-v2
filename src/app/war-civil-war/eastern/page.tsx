'use client'

// THEATRE level (Eastern Theatre) — faithful port of the War Drilldown handoff
// (war-detail-deeper.jsx → EasternTheatrePage + ET data). The layer between War
// and Battle. Dossier view: GenericHero (Antietam) · collapsible At-a-glance
// (stat strip + armies face-off w/ commander trail + casualties bar) ·
// commanders strip · VA-corridor geography map · interleaved-campaigns timeline
// (all theatres on one spine, Eastern highlighted). Timeline view: the theatre's
// battles as a sized spine. Gettysburg links down to its battle page.
// Palette = mockup (Civil War violet, Union blue, Confederate rust). Casualty
// splits are mockup estimates pending the accuracy fact-check pass.

import { useState } from 'react'
import { WarChrome, SANS, SERIF, ACCENTS, CIVIL_WAR_ACCENT as ACCENT, alpha, type View } from '@/components/mode/war-chrome'
import { BattleCard, CordTimeline } from '@/components/mode/war-battle-card'
import { DottedMap } from '@/components/mode/dotted-map'

const MONO = 'var(--font-geist-mono)'
const MUTED = 'color-mix(in srgb, var(--foreground) 70%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 45%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 12%, transparent)'
const BORDER_STRONG = 'color-mix(in srgb, var(--foreground) 22%, transparent)'
const CARD = 'color-mix(in srgb, var(--foreground) 4%, transparent)'

const num = (n: number) => n.toLocaleString('en-US')

// The theatre breadcrumb is a dropdown: switch theatre. Only Eastern is live;
// the others are 'soon' (no page yet).
const THEATRE_OPTIONS = [
  { label: 'Eastern Theatre', href: '/war-civil-war/eastern' },
  { label: 'Western Theatre', href: '/war-civil-war/western' },
  { label: 'Trans-Mississippi', disabled: true },
  { label: 'Naval & Coastal', disabled: true },
]
const CRUMBS = [
  { label: 'War', href: '/' },
  { label: 'American Civil War', short: 'ACW', href: '/war-civil-war' },
  { label: 'Eastern Theatre', options: THEATRE_OPTIONS },
]

const GBURG_HREF = '/war-civil-war/eastern/gettysburg'

const ET = {
  name: 'Eastern Theatre',
  span: '1861–1865',
  region: 'Virginia · Maryland · Pennsylvania',
  heroImage: '/war-img/antietam-hero.jpg',
  heroPalette: ['#3a2a1c', '#5a2a32', '#100506'],
  heroCredit: 'Battle of Antietam · Kurz & Allison · public domain',
  durationLabel: '4 years',
  battlesCount: 8,
  armies: [
    { side: 'Union', label: 'Army of the Potomac', peak: '120k', commanders: ['McDowell', 'McClellan', 'Pope', 'Burnside', 'Hooker', 'Meade', 'Grant'], color: ACCENTS.blue },
    { side: 'Confederacy', label: 'Army of Northern Virginia', peak: '75k', commanders: ['Beauregard', 'J. Johnston', 'Lee'], color: ACCENTS.rust },
  ],
  commanders: [
    { name: 'G. Meade', role: 'Cmdr., Potomac (Jun ’63–)', side: 'U' },
    { name: 'U. S. Grant', role: 'Lt. Gen., U.S. (’64–)', side: 'U' },
    { name: 'G. McClellan', role: 'Cmdr., Potomac (’61–’62)', side: 'U' },
    { name: 'R. E. Lee', role: 'Cmdr., N. Virginia', side: 'C' },
    { name: 'J. Longstreet', role: 'Lt. Gen., CSA', side: 'C' },
    { name: 'T. J. Jackson', role: 'Lt. Gen., CSA (KIA ’63)', side: 'C' },
  ],
  casualties: { union: 145000, csa: 95000, civilian: 8000 },
  chain: { name: 'Theatres of the Civil War', index: 1, total: 4 },
}

// Theatre colors for the interleaved timeline.
const THEATRES: Record<string, { name: string; color: string }> = {
  east: { name: 'Eastern', color: ACCENTS.violet },
  west: { name: 'Western', color: ACCENTS.blue },
  tmis: { name: 'Trans-Miss', color: ACCENTS.amber },
  naval: { name: 'Naval', color: ACCENTS.rust },
}

type Ev = { mo: string; year: number; name: string; place: string; size: 's' | 'm' | 'l' | 'xl'; href?: string }
const THEATRE_EVENTS: Record<string, Ev[]> = {
  east: [
    { mo: 'Jul', year: 1861, name: 'First Bull Run', place: 'Manassas, VA', size: 's' },
    { mo: 'Spring', year: 1862, name: 'Peninsula Campaign', place: 'York–James, VA', size: 's' },
    { mo: 'Aug', year: 1862, name: 'Second Bull Run', place: 'Manassas, VA', size: 's' },
    { mo: 'Sep', year: 1862, name: 'Antietam', place: 'Sharpsburg, MD', size: 'l' },
    { mo: 'Dec', year: 1862, name: 'Fredericksburg', place: 'Fredericksburg, VA', size: 's' },
    { mo: 'May', year: 1863, name: 'Chancellorsville', place: 'Spotsylvania, VA', size: 's' },
    { mo: 'Jul', year: 1863, name: 'Gettysburg', place: 'Adams County, PA', size: 'xl', href: GBURG_HREF },
    { mo: 'May', year: 1864, name: 'Overland Campaign', place: 'Wilderness → Cold Harbor', size: 'l' },
    { mo: '1864–65', year: 1864, name: 'Petersburg Siege', place: 'Petersburg, VA', size: 's' },
    { mo: 'Apr', year: 1865, name: 'Appomattox', place: 'Appomattox C.H., VA', size: 'm' },
  ],
  west: [
    { mo: 'Feb', year: 1862, name: 'Forts Henry & Donelson', place: 'Tennessee River', size: 's' },
    { mo: 'Apr', year: 1862, name: 'Shiloh', place: 'Pittsburg Landing, TN', size: 'l' },
    { mo: 'Dec', year: 1862, name: 'Stones River', place: 'Murfreesboro, TN', size: 's' },
    { mo: 'May', year: 1863, name: 'Vicksburg Siege', place: 'Vicksburg, MS', size: 'l' },
    { mo: 'Sep', year: 1863, name: 'Chickamauga', place: 'NW Georgia', size: 's' },
    { mo: 'Nov', year: 1863, name: 'Chattanooga', place: 'Tennessee–Georgia', size: 's' },
    { mo: 'Summer', year: 1864, name: 'Atlanta Campaign', place: 'Northern Georgia', size: 'l' },
    { mo: 'Nov', year: 1864, name: 'March to the Sea', place: 'Atlanta → Savannah', size: 'l' },
  ],
  tmis: [
    { mo: 'Mar', year: 1862, name: 'Pea Ridge', place: 'NW Arkansas', size: 's' },
    { mo: 'Mar', year: 1862, name: 'Glorieta Pass', place: 'New Mexico Territory', size: 's' },
    { mo: 'Dec', year: 1862, name: 'Prairie Grove', place: 'NW Arkansas', size: 's' },
    { mo: 'Apr', year: 1864, name: 'Mansfield', place: 'NW Louisiana', size: 's' },
    { mo: 'Sep', year: 1864, name: 'Pilot Knob', place: 'Missouri', size: 's' },
  ],
  naval: [
    { mo: 'Nov', year: 1861, name: 'Port Royal', place: 'South Carolina coast', size: 's' },
    { mo: 'Mar', year: 1862, name: 'Hampton Roads', place: 'Virginia coast', size: 'l' },
    { mo: 'Apr', year: 1862, name: 'New Orleans', place: 'Mouth of the Mississippi', size: 'l' },
    { mo: 'Jul', year: 1863, name: 'Charleston Harbor', place: 'South Carolina', size: 's' },
    { mo: 'Aug', year: 1864, name: 'Mobile Bay', place: 'Alabama coast', size: 'l' },
    { mo: 'Jan', year: 1865, name: 'Fort Fisher', place: 'North Carolina coast', size: 's' },
  ],
}

// Timeline-view battles (the theatre's own spine).
type Size = 's' | 'm' | 'l' | 'xl'
const BATTLES: { id: string; size: Size; name: string; date: string; hook: string; href?: string }[] = [
  { id: 'bull', size: 'm', name: 'First Bull Run', date: 'Jul 1861', hook: 'The first big clash — and the end of the short-war fantasy.' },
  { id: 'antietam', size: 'l', name: 'Antietam', date: 'Sep 1862', hook: 'The bloodiest single day in American history; Lee’s first invasion turned back.' },
  { id: 'fred', size: 'm', name: 'Fredericksburg', date: 'Dec 1862', hook: 'Wave after wave thrown at a stone wall. A Union disaster.' },
  { id: 'chanc', size: 'm', name: 'Chancellorsville', date: 'May 1863', hook: 'Lee’s masterpiece — and the night Stonewall Jackson was shot by his own men.' },
  { id: 'gburg', size: 'xl', name: 'Gettysburg', date: 'Jul 1863', hook: 'Three days, fifty thousand casualties, the high-water mark of the Confederacy.', href: GBURG_HREF },
  { id: 'overland', size: 'l', name: 'The Overland Campaign', date: '1864', hook: 'Grant arrives and refuses to retreat. Six weeks of relentless grinding.' },
  { id: 'peters', size: 'm', name: 'Siege of Petersburg', date: '1864–65', hook: 'Ten months of trenches that prefigured the Western Front.' },
  { id: 'appom', size: 'm', name: 'Appomattox', date: 'Apr 1865', hook: 'Lee, cornered at last, surrenders to Grant.' },
]

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || FAINT }}>{children}</div>
}

function GenericHero() {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ position: 'relative', height: 240, overflow: 'hidden', background: ET.heroPalette[2] }}>
      {failed
        ? <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${ET.heroPalette[0]}, ${ET.heroPalette[1]} 55%, ${ET.heroPalette[2]})` }} />
        : <img src={ET.heroImage} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%', transform: 'scale(1.22)', transformOrigin: 'center', filter: 'sepia(0.18) saturate(0.85) contrast(1.05)' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 30%, rgba(10,6,6,0.86) 100%)' }} />
      <div style={{ position: 'absolute', right: 10, top: 60, padding: '3px 7px', background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', borderRadius: 4, fontFamily: MONO, fontSize: 8.5, letterSpacing: 0.3, color: 'rgba(255,255,255,0.75)', pointerEvents: 'none' }}>{ET.heroCredit}</div>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '16px 18px', color: '#fff' }}>
        <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.6, fontWeight: 700, color: '#c4b5fd', textTransform: 'uppercase', textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}>{`War · ${ET.chain.name} · ${ET.chain.index} of ${ET.chain.total}`}</div>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontSize: 28, lineHeight: 1.05, letterSpacing: -0.5, fontWeight: 500, textShadow: '0 2px 12px rgba(0,0,0,0.55)' }}>{ET.name}</h1>
        <div style={{ marginTop: 4, fontFamily: SANS, fontSize: 12.5, letterSpacing: 0.3, color: 'rgba(255,255,255,0.78)' }}>{`${ET.span} · ${ET.region}`}</div>
      </div>
    </div>
  )
}

function ArmiesFaceoff() {
  return (
    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '20px 16px 22px', borderTop: `1px solid ${BORDER}` }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 1, width: 32, height: 32, borderRadius: 999, background: 'var(--background)', color: MUTED, border: `1px solid ${BORDER_STRONG}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SERIF, fontStyle: 'italic', fontSize: 13.5, fontWeight: 500 }}>vs</div>
      {ET.armies.map((a, i) => (
        <div key={a.side} style={{ padding: i === 0 ? '0 18px 0 0' : '0 0 0 18px', textAlign: i === 0 ? 'left' : 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: i === 0 ? 'flex-start' : 'flex-end' }}>
            <div style={{ width: 22, height: 14, borderRadius: 2, background: a.color, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)', order: i === 0 ? 0 : 1 }} />
            <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: a.color, textTransform: 'uppercase' }}>{a.side}</div>
          </div>
          <div style={{ marginTop: 6, fontFamily: SERIF, fontSize: 15, lineHeight: 1.18, letterSpacing: -0.2, fontWeight: 500 }}>{a.label}</div>
          <div style={{ marginTop: 4, fontFamily: SANS, fontSize: 11, color: MUTED }}>peak: <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>{a.peak}</span></div>
          <div style={{ marginTop: 6, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12, lineHeight: 1.45, color: MUTED }}>
            {a.commanders.map((c, idx) => <span key={c}>{c}{idx < a.commanders.length - 1 ? ' → ' : ''}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}

function CasualtiesBlock() {
  const c = ET.casualties
  const total = c.union + c.csa + c.civilian
  const segs = [
    { v: c.union, color: ACCENTS.blue, label: 'Union', n: num(c.union) },
    { v: c.csa, color: ACCENTS.rust, label: 'Confederacy', n: num(c.csa) },
    { v: c.civilian, color: FAINT, label: 'Civilian', n: num(c.civilian) },
  ]
  return (
    <div style={{ padding: '20px 16px 22px', borderTop: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <Eyebrow>Casualties (est.)</Eyebrow>
        <div style={{ fontFamily: SERIF, fontSize: 14, letterSpacing: -0.2 }}><span style={{ fontWeight: 500 }}>{num(total)}</span><span style={{ color: MUTED }}> total</span></div>
      </div>
      <div style={{ display: 'flex', height: 26, borderRadius: 4, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
        {segs.map(s => <div key={s.label} style={{ flex: s.v, background: s.color, opacity: s.label === 'Civilian' ? 0.45 : 1, borderRight: s.label !== 'Civilian' ? '1px solid var(--background)' : 'none' }} />)}
      </div>
      <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
        {segs.map(s => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: SANS, fontSize: 10.5, color: MUTED, letterSpacing: 0.2 }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: s.color, opacity: s.label === 'Civilian' ? 0.45 : 1 }} />
            <span><span style={{ color: 'var(--foreground)', fontWeight: 600 }}>{s.n}</span> {s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AtAGlance() {
  const [open, setOpen] = useState(true)
  const stats = [
    { v: ET.durationLabel, k: 'Span' },
    { v: String(ET.battlesCount), k: 'Battles' },
    { v: num((ET.casualties.union + ET.casualties.csa) / 1000) + 'k', k: 'Dead' },
  ]
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 16px', color: 'inherit' }}>
        <Eyebrow color={ACCENT}>At a glance</Eyebrow>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: SANS, fontSize: 11, fontWeight: 600, color: ACCENT }}>
          {open ? 'Hide' : 'Show'}
          <span style={{ width: 22, height: 22, borderRadius: 999, border: `1px solid ${alpha(ACCENT, 0.55)}`, background: alpha(ACCENT, 0.1), display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, lineHeight: 1, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}>▾</span>
        </span>
      </button>
      {open && (
        <>
          <div style={{ display: 'flex', borderTop: `1px solid ${BORDER}` }}>
            {stats.map((s, i) => (
              <div key={s.k} style={{ flex: 1, padding: '14px 12px', borderLeft: i === 0 ? 'none' : `1px solid ${BORDER}`, textAlign: 'center' }}>
                <div style={{ fontFamily: SERIF, fontSize: 20, lineHeight: 1, letterSpacing: -0.4, fontWeight: 500 }}>{s.v}</div>
                <div style={{ marginTop: 5, fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 600, color: FAINT, textTransform: 'uppercase' }}>{s.k}</div>
              </div>
            ))}
          </div>
          <ArmiesFaceoff />
          <CasualtiesBlock />
          <CommandersStrip />
        </>
      )}
    </div>
  )
}

function CommandersStrip() {
  return (
    <div style={{ padding: '20px 0 22px', borderTop: `1px solid ${BORDER}` }}>
      <div style={{ padding: '0 16px' }}><Eyebrow color={ACCENT}>Commanders</Eyebrow></div>
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '12px 16px 0' }}>
        {ET.commanders.map(f => {
          const ring = f.side === 'U' ? ACCENTS.blue : ACCENTS.rust
          return (
            <div key={f.name} style={{ flexShrink: 0, width: 84, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 64, height: 64, borderRadius: 999, background: 'linear-gradient(135deg, #3a2e21, #1c1814)', boxShadow: `inset 0 0 0 2px ${ring}` }} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: SERIF, fontSize: 12, lineHeight: 1.15, letterSpacing: -0.1 }}>{f.name}</div>
                <div style={{ marginTop: 2, fontFamily: SANS, fontSize: 9.5, letterSpacing: 0.2, color: FAINT }}>{f.role}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Theatre geography — real dotted state outlines (Pennsylvania / Maryland /
// Virginia + West Virginia for context), zoomed to the Washington–Richmond
// corridor, with the battle dots, the two capitals, and the 110-mile corridor
// line. Rendered by the shared <DottedMap>.
function ETMap() {
  return (
    <DottedMap
      eyebrow="Geography"
      accent={ACCENT}
      frame={{ lonMin: -79.5, lonMax: -75.6, latMin: 36.8, latMax: 40.05 }}
      states={[
        { name: 'West Virginia', tone: 'faint' },
        { name: 'Pennsylvania', tone: 'gray', label: 'PENNSYLVANIA', labelLon: -76.9, labelLat: 39.93 },
        { name: 'Maryland', tone: 'gray', label: 'MARYLAND', labelLon: -76.5, labelLat: 39.28 },
        { name: 'Virginia', tone: 'focus', label: 'VIRGINIA', labelLon: -78.7, labelLat: 37.5 },
      ]}
      labels={[{ text: 'Shenandoah', lon: -78.5, lat: 38.7, kind: 'accent', size: 15 }]}
      corridor={{ fromLon: -77.04, fromLat: 38.90, toLon: -77.43, toLat: 37.54, label: '110 mi', labelLon: -77.0, labelLat: 38.25 }}
      dots={[
        { name: 'Gettysburg', lat: 39.83, lon: -77.23 },
        { name: 'Antietam', lat: 39.46, lon: -77.74, anchor: 'end' },
        { name: 'Bull Run', lat: 38.81, lon: -77.52, anchor: 'end' },
        { name: 'Fredericksburg', lat: 38.30, lon: -77.46 },
        { name: 'Chancellorsville', lat: 38.31, lon: -77.64, anchor: 'end' },
        { name: 'Appomattox', lat: 37.36, lon: -78.80 },
        { name: 'Petersburg', lat: 37.23, lon: -77.40, dy: 15 },
      ]}
      capitals={[
        { name: 'Washington', lat: 38.90, lon: -77.04 },
        { name: 'Richmond', lat: 37.54, lon: -77.43 },
      ]}
      caption="Most of the Eastern war fell in the 110-mile corridor between Washington and Richmond — the Shenandoah Valley on one flank, the Chesapeake on the other."
    />
  )
}

const M_ORDER: Record<string, number> = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12, Spring: 4, Summer: 7 }

// All theatres on one timeline; the active theatre (Eastern) in colour, the
// others grayed for context.
function InterleavedCampaigns({ active = 'east' }: { active?: string }) {
  const events: (Ev & { theatreId: string; theatreName: string; theatreColor: string; key: string })[] = []
  Object.entries(THEATRE_EVENTS).forEach(([tid, list]) => {
    const th = THEATRES[tid]
    list.forEach((e, i) => events.push({ ...e, theatreId: tid, theatreName: th.name, theatreColor: th.color, key: tid + '-' + i }))
  })
  events.sort((a, b) => (a.year !== b.year ? a.year - b.year : (M_ORDER[a.mo] || 0) - (M_ORDER[b.mo] || 0)))
  const hereCount = events.filter(e => e.theatreId === active).length
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <Eyebrow color={ACCENT}>Campaigns across the war</Eyebrow>
        <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>{hereCount} here · others for context</div>
      </div>
      <div style={{ position: 'relative', marginTop: 6 }}>
        <div style={{ position: 'absolute', left: 7, top: 6, bottom: 6, width: 1, background: BORDER_STRONG }} />
        {events.map(e => {
          const isActive = e.theatreId === active
          const dotColor = isActive ? e.theatreColor : FAINT
          const heavy = e.size === 'l' || e.size === 'xl'
          const tappable = isActive && !!e.href
          const inner = (
            <>
              <span style={{ position: 'absolute', left: 3, top: 8, width: heavy ? 10 : 8, height: heavy ? 10 : 8, borderRadius: 999, background: heavy && isActive ? dotColor : (isActive ? CARD : 'transparent'), border: `1px solid ${dotColor}`, boxShadow: heavy && isActive ? `0 0 0 3px ${alpha(e.theatreColor, 0.18)}` : 'none' }} />
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 0.3, fontWeight: 700, color: isActive ? alpha(dotColor, 0.95) : FAINT, textTransform: 'uppercase' }}>{e.mo} {e.year}</div>
                {!isActive && <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: 0.3, color: FAINT }}>· {e.theatreName} theatre</div>}
              </div>
              <div style={{ fontFamily: SERIF, fontSize: heavy ? 15.5 : 14, lineHeight: 1.2, letterSpacing: -0.1, fontWeight: heavy ? 500 : 400, marginTop: 1 }}>{e.name} <span style={{ color: FAINT, fontWeight: 400, fontSize: 12 }}>· {e.place}</span></div>
              {tappable && <span style={{ position: 'absolute', right: 0, top: 12, color: alpha(e.theatreColor, 0.7), fontFamily: SANS, fontSize: 13, fontWeight: 600 }} aria-hidden>→</span>}
            </>
          )
          const style: React.CSSProperties = { position: 'relative', display: 'block', width: '100%', textAlign: 'left', color: 'var(--foreground)', padding: '6px 0 10px 26px', opacity: isActive ? 1 : 0.42, filter: isActive ? 'none' : 'saturate(0.4)', textDecoration: 'none' }
          return tappable
            ? <a key={e.key} href={e.href} style={style}>{inner}</a>
            : <div key={e.key} style={style}>{inner}</div>
        })}
      </div>
    </div>
  )
}

export default function EasternTheatrePage() {
  const [view, setView] = useState<View>('dossier')
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarChrome crumbs={CRUMBS} view={view} onView={setView} accent={ACCENT} />
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <GenericHero />
        {view === 'dossier' ? (
          <>
            <AtAGlance />
            <ETMap />
            <InterleavedCampaigns active="east" />
          </>
        ) : (
          <div style={{ padding: '8px 0 20px' }}>
            <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.6, margin: '8px 16px 4px', color: 'color-mix(in srgb, var(--foreground) 78%, transparent)' }}>
              The theatre’s battles, sized by significance. Tap Gettysburg to drop into the battle.
            </p>
            <CordTimeline>
              {BATTLES.map(b => <BattleCard key={b.id} size={b.size} accent={ACCENT} dateTop={(b.date.match(/\d{4}/) || [''])[0]} title={b.name} sub={b.date} hook={b.hook} href={b.href} />)}
            </CordTimeline>
          </div>
        )}
      </div>
    </div>
  )
}
