'use client'

// WAR level (Civil War). Timeline view = the escalating-spine of sections +
// battles; Dossier view = "At a glance" + the theatres of the war. Both under
// the shared breadcrumb + Timeline/Dossier toggle. Preview, sample content.

import { useState } from 'react'
import { WarChrome, DossierSection, SANS, SERIF, WAR_OXBLOOD, ACCENTS, alpha, useWarView } from '@/components/mode/war-chrome'
import { BattleCard } from '@/components/mode/war-battle-card'
import { DottedMap } from '@/components/mode/dotted-map'
import { US_RIVERS } from '@/lib/us-rivers'

const TYPE_COLOR: Record<string, string> = { CAUSE: '#8a6d3b', BATTLE: '#b91c1c', POLITICS: '#1d4ed8', SOCIETY: '#b45309', AFTERMATH: '#7c3aed' }
type Size = 's' | 'm' | 'l' | 'xl'
const SIZE_H: Record<Size, number> = { s: 60, m: 86, l: 124, xl: 180 }

interface Node { id: string; phase: string; type: keyof typeof TYPE_COLOR; size: Size; name: string; date: string; hook: string; href?: string; img?: string }

const PHASES = [
  { id: 'causes', label: 'Causes' }, { id: 'outbreak', label: 'Outbreak · 1861' },
  { id: 'hard', label: 'The Hard Years · 1862–63' }, { id: 'turning', label: 'The Turning · 1863' },
  { id: 'total', label: 'Total War · 1864–65' }, { id: 'after', label: 'Aftermath' },
]

const NODES: Node[] = [
  { id: 'road', phase: 'causes', type: 'CAUSE', size: 'l', name: 'The Road to War', date: '1850–1861', hook: 'Compromise, Bleeding Kansas, Dred Scott, John Brown — the country arguing its way to the cliff edge.' },
  { id: 'sumter', phase: 'outbreak', type: 'BATTLE', size: 'm', name: 'Fort Sumter', date: 'Apr 1861', hook: 'Thirty-four hours of bombardment, nobody killed — and a nation at war.' },
  { id: 'bull', phase: 'outbreak', type: 'BATTLE', size: 'm', name: 'First Bull Run', date: 'Jul 1861', hook: 'Picnickers came to watch. Both sides went home knowing it would not be quick.' },
  { id: 'phil', phase: 'outbreak', type: 'BATTLE', size: 's', name: 'Philippi', date: 'Jun 1861', hook: 'The “Philippi Races” — barely a battle, but the first land action.' },
  { id: 'shiloh', phase: 'hard', type: 'BATTLE', size: 'm', name: 'Shiloh', date: 'Apr 1862', hook: 'Two days that killed the idea of a bloodless war.', img: '/war-img/shiloh-hero.jpg' },
  { id: 'antietam', phase: 'hard', type: 'BATTLE', size: 'l', name: 'Antietam', date: 'Sep 1862', hook: 'The bloodiest single day in American history.', href: '/war-civil-war/eastern/antietam', img: '/war-img/antietam-hero.jpg' },
  { id: 'emanc', phase: 'hard', type: 'POLITICS', size: 'l', name: 'The Emancipation Proclamation', date: 'Jan 1863', hook: 'Lincoln changes what the entire war is for.' },
  { id: 'home', phase: 'hard', type: 'SOCIETY', size: 'm', name: 'The Home Front', date: '1861–1865', hook: 'Draft riots, war economies, women running the farms and the hospitals.' },
  { id: 'gburg', phase: 'turning', type: 'BATTLE', size: 'xl', name: 'Gettysburg', date: 'Jul 1863', hook: 'Three days, some fifty thousand casualties, the high-water mark of the Confederacy.', href: '/war-civil-war/eastern/gettysburg', img: '/war-img/gettysburg-hero.jpg' },
  { id: 'vicks', phase: 'turning', type: 'BATTLE', size: 'l', name: 'Vicksburg', date: 'May–Jul 1863', hook: 'Grant takes the Mississippi and cuts the South in two.' },
  { id: 'sherman', phase: 'total', type: 'BATTLE', size: 'l', name: 'Sherman’s March', date: '1864', hook: 'Total war — making Georgia howl, all the way to the sea.' },
  { id: 'appom', phase: 'total', type: 'BATTLE', size: 'm', name: 'Appomattox', date: 'Apr 1865', hook: 'Lee surrenders; Lincoln is murdered five days later.' },
  { id: 'reck', phase: 'after', type: 'AFTERMATH', size: 'l', name: 'The Reckoning', date: '1865 →', hook: 'Three-quarters of a million dead, and the unfinished work that becomes Reconstruction.' },
]

const num = (n: number) => n.toLocaleString('en-US')

// Whole-war theatre data for the interactive home map: each theatre's states
// (coloured on the dotted US map), battle dots, and dossier panel content.
type ThEvent = { mo: string; year: number; name: string; place: string; heavy?: boolean; href?: string }
type Theatre = {
  id: string; name: string; longName: string; color: string; span: string; region: string
  summary: string; peakArmies: string; casualties: number; battlesCount: number; commanderRotation: string
  href?: string; states: string[]; labelLon: number; labelLat: number
  dots: { name: string; lat: number; lon: number; heavy?: boolean; anchor?: 'start' | 'end' }[]
  events: ThEvent[]
}
const THEATRE_DATA: Theatre[] = [
  {
    id: 'east', name: 'Eastern', longName: 'Eastern Theatre', color: ACCENTS.violet, span: '1861–1865',
    region: 'Virginia · Maryland · Pennsylvania', summary: 'The political war. Between the two capitals, Lee was at his best — and where the war finally ended.',
    peakArmies: '120k vs 75k', casualties: 230000, battlesCount: 8, commanderRotation: 'Seven Union commanders, then Grant',
    href: '/war-civil-war/eastern', states: ['Virginia', 'Maryland', 'Pennsylvania'], labelLon: -78.0, labelLat: 40.6,
    dots: [
      { name: 'Gettysburg', lat: 39.83, lon: -77.23, heavy: true, anchor: 'end' },
      { name: 'Antietam', lat: 39.46, lon: -77.74, anchor: 'end' },
      { name: 'Bull Run', lat: 38.81, lon: -77.52, anchor: 'end' },
      { name: 'Petersburg', lat: 37.23, lon: -77.40, anchor: 'end' },
    ],
    events: [
      { mo: 'Jul', year: 1861, name: 'First Bull Run', place: 'Manassas, VA' },
      { mo: 'Sep', year: 1862, name: 'Antietam', place: 'Sharpsburg, MD', heavy: true },
      { mo: 'Jul', year: 1863, name: 'Gettysburg', place: 'Adams County, PA', heavy: true, href: '/war-civil-war/eastern/gettysburg' },
      { mo: 'May', year: 1864, name: 'Overland Campaign', place: 'Wilderness → Cold Harbor', heavy: true },
      { mo: 'Apr', year: 1865, name: 'Appomattox', place: 'Appomattox C.H., VA' },
    ],
  },
  {
    id: 'west', name: 'Western', longName: 'Western Theatre', color: ACCENTS.blue, span: '1861–1865',
    region: 'Kentucky · Tennessee · Mississippi · Georgia', summary: 'Where the Union actually won the war. Grant took the rivers and split the Confederacy in two.',
    peakArmies: '110k vs 80k', casualties: 195000, battlesCount: 12, commanderRotation: 'Grant rises, then Sherman',
    href: '/war-civil-war/western', states: ['Kentucky', 'Tennessee', 'Mississippi', 'Georgia', 'Alabama'], labelLon: -86.4, labelLat: 34.3,
    dots: [
      { name: 'Shiloh', lat: 35.14, lon: -88.34, anchor: 'end' },
      { name: 'Vicksburg', lat: 32.35, lon: -90.88, heavy: true, anchor: 'end' },
      { name: 'Chickamauga', lat: 34.94, lon: -85.29 },
      { name: 'Atlanta', lat: 33.75, lon: -84.39, heavy: true },
    ],
    events: [
      { mo: 'Feb', year: 1862, name: 'Forts Henry & Donelson', place: 'Tennessee River' },
      { mo: 'Apr', year: 1862, name: 'Shiloh', place: 'Pittsburg Landing, TN', heavy: true },
      { mo: 'May', year: 1863, name: 'Vicksburg', place: 'Vicksburg, MS', heavy: true },
      { mo: 'Nov', year: 1863, name: 'Chattanooga', place: 'Tennessee–Georgia' },
      { mo: 'Summer', year: 1864, name: 'Atlanta Campaign', place: 'Northern Georgia', heavy: true },
      { mo: 'Nov', year: 1864, name: 'March to the Sea', place: 'Atlanta → Savannah', heavy: true },
    ],
  },
  {
    id: 'tmis', name: 'Trans-Miss', longName: 'Trans-Mississippi', color: ACCENTS.amber, span: '1861–1865',
    region: 'Arkansas · Louisiana · Texas · Missouri', summary: 'The sprawling, half-forgotten war west of the great river.',
    peakArmies: '30k vs 20k', casualties: 30000, battlesCount: 6, commanderRotation: 'Mostly forgotten',
    href: undefined, states: ['Arkansas', 'Louisiana', 'Texas', 'Missouri'], labelLon: -93.7, labelLat: 33.4,
    dots: [
      { name: 'Pea Ridge', lat: 36.45, lon: -94.03, anchor: 'end' },
      { name: 'Mansfield', lat: 32.04, lon: -93.70, anchor: 'end' },
    ],
    events: [
      { mo: 'Aug', year: 1861, name: 'Wilson’s Creek', place: 'SW Missouri' },
      { mo: 'Mar', year: 1862, name: 'Pea Ridge', place: 'NW Arkansas', heavy: true },
      { mo: 'Apr', year: 1864, name: 'Mansfield', place: 'NW Louisiana' },
    ],
  },
  {
    id: 'naval', name: 'Naval', longName: 'Naval & Coastal', color: ACCENTS.rust, span: '1861–1865',
    region: 'Atlantic · Gulf · the Mississippi', summary: 'The Anaconda — blockade, ironclads, and slowly strangling Southern trade.',
    peakArmies: '700+ ships', casualties: 10000, battlesCount: 5, commanderRotation: 'Farragut, Porter, Du Pont',
    href: undefined, states: ['North Carolina', 'South Carolina', 'Florida'], labelLon: -80.0, labelLat: 30.5,
    dots: [
      { name: 'Fort Fisher', lat: 33.97, lon: -77.92 },
      { name: 'Mobile Bay', lat: 30.4, lon: -88.04, anchor: 'end' },
      { name: 'New Orleans', lat: 29.95, lon: -90.07, anchor: 'end' },
    ],
    events: [
      { mo: 'Mar', year: 1862, name: 'Hampton Roads', place: 'Virginia coast', heavy: true },
      { mo: 'Apr', year: 1862, name: 'New Orleans', place: 'Mouth of the Mississippi', heavy: true },
      { mo: 'Aug', year: 1864, name: 'Mobile Bay', place: 'Alabama coast', heavy: true },
    ],
  },
]
// Non-theatre fill states (dotted, always faint) so the map reads as the US.
const CONTEXT_STATES = ['West Virginia', 'Ohio', 'Indiana', 'Illinois', 'New Jersey', 'Delaware', 'Oklahoma', 'Kansas', 'Iowa', 'Wisconsin', 'Michigan', 'New York', 'Minnesota']
const US_FRAME = { lonMin: -96.5, lonMax: -75, latMin: 28.8, latMax: 42.1 }

const CORD_X = 56, CARD_LEFT = CORD_X + 16

function NodeCard({ n }: { n: Node }) {
  const color = TYPE_COLOR[n.type]; const isXL = n.size === 'xl'; const isLG = n.size === 'l'
  const card = (
    <div style={{ background: 'color-mix(in srgb, var(--foreground) 4%, transparent)', borderRadius: 8, border: `1px solid ${isXL ? alpha(color, 0.55) : 'color-mix(in srgb, var(--foreground) 15%, transparent)'}`, boxShadow: isXL ? `0 0 0 4px ${alpha(color, 0.1)}, 0 12px 28px rgba(0,0,0,0.28)` : 'none', height: SIZE_H[n.size], padding: isXL ? '12px 16px' : (isLG ? '11px 14px' : '8px 12px'), display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
        <span style={{ fontFamily: SANS, fontSize: 8.5, fontWeight: 700, letterSpacing: 0.8, color: '#fff', background: color, padding: '2px 6px', borderRadius: 3 }}>{n.type}</span>
        <span style={{ fontFamily: SANS, fontSize: 10, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>{n.date}</span>
      </div>
      <div style={{ fontFamily: SERIF, fontSize: isXL ? 24 : (isLG ? 18 : 15), lineHeight: 1.1, letterSpacing: -0.2 }}>{n.name}</div>
      <div style={{ marginTop: 'auto', paddingTop: 4, fontFamily: SERIF, fontSize: isXL ? 14.5 : 13, lineHeight: 1.4, color: isXL ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 70%, transparent)', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: isXL ? 3 : 2, WebkitBoxOrient: 'vertical' }}>{n.hook}</div>
      {n.href && <div style={{ marginTop: 6, fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color }}>Open →</div>}
    </div>
  )
  return (
    <div style={{ position: 'relative', paddingLeft: CARD_LEFT, paddingRight: 16, marginBottom: 12 }}>
      <div style={{ position: 'absolute', left: CORD_X - 5, top: 12, width: 10, height: 10, borderRadius: 999, background: color, boxShadow: `0 0 0 3px ${alpha(color, 0.18)}`, border: `1px solid ${color}`, zIndex: 1 }} />
      <div style={{ position: 'absolute', left: CORD_X + 5, top: 16, width: 11, height: 1, background: alpha(color, 0.5) }} />
      {n.href ? <a href={n.href} style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}>{card}</a> : card}
    </div>
  )
}

// Collapsible "At a glance" for the war home — stats, the Union vs Confederacy
// face-off, a casualties bar, and the outcome. Figures are estimates (the war's
// death toll is genuinely contested) pending the accuracy fact-check pass.
function WarGlance() {
  const [open, setOpen] = useState(true)
  const MUTED = 'color-mix(in srgb, var(--foreground) 70%, transparent)'
  const FAINT = 'color-mix(in srgb, var(--foreground) 45%, transparent)'
  const BORDER = 'color-mix(in srgb, var(--foreground) 12%, transparent)'
  const STRONG = 'color-mix(in srgb, var(--foreground) 22%, transparent)'
  const accent = ACCENTS.violet
  const stats = [{ v: '4 years', k: 'Span' }, { v: '~10,500', k: 'Engagements' }, { v: '~750k', k: 'Dead' }]
  const armies = [
    { side: 'Union', label: 'United States', served: '2.1M served', trail: 'Lincoln → Grant → Sherman', color: ACCENTS.blue },
    { side: 'Confederacy', label: 'Confederate States', served: '~900k served', trail: 'Davis · Lee · Jackson', color: ACCENTS.rust },
  ]
  const cas = { union: 390000, csa: 310000, civilian: 50000 }
  const total = cas.union + cas.csa + cas.civilian
  const segs = [
    { v: cas.union, color: ACCENTS.blue, label: 'Union', n: num(cas.union) },
    { v: cas.csa, color: ACCENTS.rust, label: 'Confederacy', n: num(cas.csa) },
    { v: cas.civilian, color: FAINT, label: 'Civilian', n: num(cas.civilian) },
  ]
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 16px', color: 'inherit' }}>
        <span style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: accent }}>At a glance</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: SANS, fontSize: 11, fontWeight: 600, color: accent }}>
          {open ? 'Hide' : 'Show'}
          <span style={{ width: 22, height: 22, borderRadius: 999, border: `1px solid ${alpha(accent, 0.55)}`, background: alpha(accent, 0.1), display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, lineHeight: 1, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}>▾</span>
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
          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '20px 16px 22px', borderTop: `1px solid ${BORDER}` }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 1, width: 32, height: 32, borderRadius: 999, background: 'var(--background)', color: MUTED, border: `1px solid ${STRONG}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SERIF, fontStyle: 'italic', fontSize: 13.5, fontWeight: 500 }}>vs</div>
            {armies.map((a, i) => (
              <div key={a.side} style={{ padding: i === 0 ? '0 18px 0 0' : '0 0 0 18px', textAlign: i === 0 ? 'left' : 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: i === 0 ? 'flex-start' : 'flex-end' }}>
                  <div style={{ width: 22, height: 14, borderRadius: 2, background: a.color, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)', order: i === 0 ? 0 : 1 }} />
                  <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: a.color, textTransform: 'uppercase' }}>{a.side}</div>
                </div>
                <div style={{ marginTop: 6, fontFamily: SERIF, fontSize: 15, lineHeight: 1.18, letterSpacing: -0.2, fontWeight: 500 }}>{a.label}</div>
                <div style={{ marginTop: 4, fontFamily: SANS, fontSize: 11, color: MUTED }}>{a.served}</div>
                <div style={{ marginTop: 6, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12, lineHeight: 1.45, color: MUTED }}>{a.trail}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '20px 16px 22px', borderTop: `1px solid ${BORDER}` }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
              <span style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>Casualties (est.)</span>
              <div style={{ fontFamily: SERIF, fontSize: 14, letterSpacing: -0.2 }}><span style={{ fontWeight: 500 }}>{num(total)}</span><span style={{ color: MUTED }}> dead</span></div>
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
          <div style={{ padding: '14px 16px 18px', borderTop: `1px solid ${BORDER}`, fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.5, color: MUTED }}>
            <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>Outcome:</span> Union victory; the Confederacy dissolved and slavery abolished by the Thirteenth Amendment.
          </div>
        </>
      )}
    </div>
  )
}

// Interactive theatres block for the war home: the dotted US map (each theatre
// in its colour, the active one lit), a segmented control, and the active
// theatre's dossier panel + engagement list.
function TheatresInteractive() {
  const [active, setActive] = useState('east')
  const at = THEATRE_DATA.find(t => t.id === active)!
  const muted = 'color-mix(in srgb, var(--foreground) 70%, transparent)'
  const faint = 'color-mix(in srgb, var(--foreground) 45%, transparent)'
  const border = 'color-mix(in srgb, var(--foreground) 14%, transparent)'
  const chip = 'color-mix(in srgb, var(--foreground) 6%, transparent)'
  const card = 'color-mix(in srgb, var(--foreground) 4%, transparent)'

  const states = [
    ...CONTEXT_STATES.map(n => ({ name: n, tone: 'faint' as const })),
    ...THEATRE_DATA.flatMap(t => t.states.map((n, i) => ({
      name: n, color: t.color, tone: (t.id === active ? 'focus' : 'faint') as 'focus' | 'faint',
      ...(i === 0 ? { label: t.name.toUpperCase(), labelLon: t.labelLon, labelLat: t.labelLat } : {}),
    }))),
  ]
  const dots = THEATRE_DATA.flatMap(t => t.dots.map(d => ({
    ...d, color: t.id === active ? t.color : alpha(t.color, 0.16), name: t.id === active ? d.name : undefined,
  })))
  // the Mississippi (real course) anchors the map; brighten it only with Western/Trans-Miss/Naval up
  const rivers = US_RIVERS.Mississippi.map(pts => ({ pts }))

  return (
    <DossierSection label="The theatres" accent={ACCENTS.violet}>
      <p style={{ fontFamily: SERIF, fontSize: 14.5, lineHeight: 1.55, color: muted, margin: '0 0 12px' }}>
        The war was fought in parallel across four theatres. Tap one to light it up — then open it to drill into its battles.
      </p>
      <DottedMap inset={false} accent={at.color} frame={US_FRAME} states={states} dots={dots} rivers={rivers} vbWidth={760} />
      <div style={{ display: 'flex', gap: 4, padding: 3, marginTop: 12, background: chip, border: `1px solid ${border}`, borderRadius: 999 }}>
        {THEATRE_DATA.map(t => {
          const on = t.id === active
          return (
            <button key={t.id} onClick={() => setActive(t.id)} style={{ flex: 1, appearance: 'none', border: 'none', cursor: 'pointer', background: on ? 'color-mix(in srgb, var(--foreground) 12%, var(--background))' : 'transparent', color: on ? 'var(--foreground)' : muted, fontFamily: SANS, fontSize: 11, fontWeight: on ? 600 : 500, padding: '7px 0', borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <span style={{ width: 7, height: 7, borderRadius: 2, background: t.color, opacity: on ? 1 : 0.6 }} />
              {t.name}
            </button>
          )
        })}
      </div>
      <div style={{ marginTop: 14, border: `1px solid ${alpha(at.color, 0.4)}`, borderRadius: 10, padding: 16, background: card }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: at.color, boxShadow: `0 0 0 3px ${alpha(at.color, 0.2)}`, flexShrink: 0 }} />
          <div style={{ flex: 1, fontFamily: SERIF, fontSize: 18, fontWeight: 500, letterSpacing: -0.2 }}>{at.longName}</div>
          <div style={{ fontFamily: SANS, fontSize: 10, color: faint }}>{at.span}</div>
        </div>
        <div style={{ marginTop: 4, fontFamily: SANS, fontSize: 10.5, color: muted }}>{at.region}</div>
        <div style={{ marginTop: 10, fontFamily: SERIF, fontSize: 14, lineHeight: 1.45 }}>{at.summary}</div>
        <div style={{ marginTop: 12, paddingTop: 11, borderTop: `1px solid ${border}`, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px 12px', fontFamily: SANS, fontSize: 10.5, color: muted }}>
          <div><span style={{ color: 'var(--foreground)', fontWeight: 600 }}>{at.battlesCount}</span> battles</div>
          <div><span style={{ color: 'var(--foreground)', fontWeight: 600 }}>{at.peakArmies}</span></div>
          <div><span style={{ color: 'var(--foreground)', fontWeight: 600 }}>{num(at.casualties)}</span> dead</div>
        </div>
        <div style={{ marginTop: 6, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12, color: faint }}>{at.commanderRotation}</div>
        {at.href
          ? <a href={at.href} style={{ marginTop: 13, display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${alpha(at.color, 0.5)}`, color: at.color, padding: '8px 12px', borderRadius: 8, fontFamily: SANS, fontWeight: 600, fontSize: 11.5, textDecoration: 'none' }}>Open theatre <span aria-hidden>→</span></a>
          : <div style={{ marginTop: 13, display: 'inline-flex', alignItems: 'center', gap: 6, border: `1px solid ${border}`, color: faint, padding: '8px 12px', borderRadius: 8, fontFamily: SANS, fontWeight: 600, fontSize: 11.5 }}>Coming soon</div>}
        <div style={{ marginTop: 16 }}>
          <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: alpha(at.color, 0.95), textTransform: 'uppercase', marginBottom: 10 }}>{at.events.length} key engagements</div>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 4, top: 5, bottom: 5, width: 1, background: border }} />
            {at.events.map(e => {
              const row = (
                <>
                  <span style={{ position: 'absolute', left: 0, top: 6, width: 9, height: 9, borderRadius: 999, background: e.heavy ? at.color : card, border: `1px solid ${e.heavy ? at.color : faint}` }} />
                  <div style={{ fontFamily: SANS, fontSize: 9, letterSpacing: 0.3, fontWeight: 700, color: alpha(at.color, 0.9), textTransform: 'uppercase' }}>{e.mo} {e.year}</div>
                  <div style={{ fontFamily: SERIF, fontSize: 14, lineHeight: 1.2, marginTop: 1 }}>{e.name} <span style={{ color: faint, fontSize: 12 }}>· {e.place}</span></div>
                  {e.href && <span style={{ position: 'absolute', right: 0, top: 11, color: alpha(at.color, 0.7), fontFamily: SANS, fontSize: 13, fontWeight: 600 }} aria-hidden>→</span>}
                </>
              )
              const style: React.CSSProperties = { position: 'relative', display: 'block', width: '100%', textAlign: 'left', color: 'var(--foreground)', padding: '5px 0 9px 20px', textDecoration: 'none' }
              return e.href ? <a key={e.name} href={e.href} style={style}>{row}</a> : <div key={e.name} style={style}>{row}</div>
            })}
          </div>
        </div>
      </div>
    </DossierSection>
  )
}

export default function CivilWarPage() {
  const [view, setView] = useWarView()
  const [heroFailed, setHeroFailed] = useState(false)
  const byPhase = PHASES.map(p => ({ ...p, nodes: NODES.filter(n => n.phase === p.id) })).filter(p => p.nodes.length > 0)

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarChrome crumbs={[{ label: 'War', href: '/' }, { label: 'American Civil War' }]} view={view} onView={setView} />
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        {/* hero — the 54th Massachusetts at Fort Wagner (Kurz & Allison) */}
        <div style={{ position: 'relative', height: 240, overflow: 'hidden', background: '#0e0c08' }}>
          {heroFailed
            ? <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #3a2a1c, #5a2a32 55%, #0e0c08)' }} />
            : <img src="/war-img/civil-war-hero.jpg" alt="" onError={() => setHeroFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', transform: 'scale(1.16)', transformOrigin: 'center', filter: 'sepia(0.16) saturate(0.88) contrast(1.04)' }} />}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 28%, rgba(8,8,10,0.88) 100%)' }} />
          <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '16px 18px', color: '#fff' }}>
            <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.6, fontWeight: 700, color: '#c4b5fd', textTransform: 'uppercase', textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}>War · 1861–1865</div>
            <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, fontWeight: 500, textShadow: '0 2px 12px rgba(0,0,0,0.55)' }}>American Civil War</h1>
            <div style={{ marginTop: 4, fontFamily: SANS, fontSize: 12.5, letterSpacing: 0.3, color: 'rgba(255,255,255,0.78)' }}>Union vs. Confederacy · four years · ~750,000 dead</div>
          </div>
        </div>
        <div style={{ padding: '7px 18px 0', fontFamily: 'var(--font-geist-mono)', fontSize: 10, letterSpacing: 0.2, color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>Storming Fort Wagner · Kurz &amp; Allison · public domain</div>

        {view === 'timeline' ? (
          <>
            <p style={{ padding: '6px 18px 0', margin: 0, fontFamily: SERIF, fontSize: 14.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)' }}>
              The whole war on one spine — sized by significance. Tap a battle to drop straight into it.
            </p>
            <div style={{ position: 'relative', paddingTop: 12, paddingBottom: 40 }}>
              <div style={{ position: 'absolute', left: CORD_X, top: 0, bottom: 0, width: 1, background: 'color-mix(in srgb, var(--foreground) 22%, transparent)' }} />
              {byPhase.map(phase => (
                <div key={phase.id} style={{ position: 'relative' }}>
                  <div style={{ position: 'relative', padding: '16px 18px 6px' }}>
                    <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 34, fontWeight: 400, letterSpacing: -0.5, color: alpha(WAR_OXBLOOD, 0.13), lineHeight: 1, whiteSpace: 'nowrap', pointerEvents: 'none', overflow: 'hidden' }}>{phase.label}</div>
                    <div style={{ position: 'absolute', left: CORD_X + 14, top: 24, fontFamily: SANS, fontSize: 10, letterSpacing: 1.4, fontWeight: 700, color: WAR_OXBLOOD, textTransform: 'uppercase', background: 'var(--background)', padding: '0 6px' }}>{phase.label}</div>
                  </div>
                  {phase.nodes.map(n => <BattleCard key={n.id} size={n.size} accent={TYPE_COLOR[n.type]} dateTop={(n.date.match(/\d{4}/) || [''])[0]} sub={n.type} hook={n.hook} title={n.name} href={n.href} imageUrl={n.img} />)}
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <WarGlance />
            <div style={{ padding: '18px 18px 48px' }}>
              <TheatresInteractive />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
