'use client'

// WAR level (Civil War). Timeline view = the escalating-spine of sections +
// battles; Dossier view = "At a glance" + the theatres of the war. Both under
// the shared breadcrumb + Timeline/Dossier toggle. Preview, sample content.

import { useState, useEffect } from 'react'
import { WarBreadcrumb, DossierSection, SANS, SERIF, WAR_OXBLOOD, WAR_ACCENT, ACCENTS, alpha, CHROME_TOP } from '@/components/mode/war-chrome'
import { BattleCard, CordTimeline, CORD_X } from '@/components/mode/war-battle-card'
import { DottedMap, type Callout, type Frame } from '@/components/mode/dotted-map'
import { US_RIVERS } from '@/lib/us-rivers'
import { SPINE_NODES, CHAPTERS, majorsOf, majorCount, THEMES, type SpineNode } from '@/lib/civil-war-roster'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const TYPE_COLOR: Record<string, string> = { CAUSE: '#8a6d3b', BATTLE: '#b91c1c', POLITICS: '#1d4ed8', SOCIETY: '#b45309', AFTERMATH: '#7c3aed' }

const PHASES = [
  { id: 'causes', label: 'Causes' }, { id: 'outbreak', label: 'Outbreak · 1861' },
  { id: 'hard', label: 'The Hard Years · 1862' }, { id: 'turning', label: 'The Turning · 1863' },
  { id: 'total', label: 'Total War · 1864–65' }, { id: 'after', label: 'Aftermath' },
]

// The whole-war spine = the locked themes + all 46 Major battles (one source:
// src/lib/civil-war-roster.ts), phase-tagged and chronologically sorted.
const NODES = SPINE_NODES

const num = (n: number) => n.toLocaleString('en-US')

// Whole-war theatre data for the interactive home map: each theatre's states
// (coloured on the dotted US map), battle dots, and dossier panel content.
type ThEvent = { mo: string; year: number; name: string; place: string; heavy?: boolean; href?: string; when?: string }
type Theatre = {
  id: string; name: string; longName: string; color: string; span: string; region: string
  summary: string; intro?: string; peakArmies?: string; casualties?: number; battlesCount?: number; commanderRotation?: string
  href?: string; kind?: 'themes'; states: string[]; labelLon: number; labelLat: number
  dots: { name: string; lat: number; lon: number; heavy?: boolean; anchor?: 'start' | 'end' }[]
  callouts?: Callout[]
  frame?: Frame   // zoom frame when this theatre is selected; falls back to NATIONAL_FRAME
  geoInset?: { l?: number; r?: number; t?: number; b?: number }
  vbHeight?: number
  events: ThEvent[]
}

// Eastern theatre — every Major battle as a leader-line callout, co-located
// engagements grouped under one dot (Petersburg hosts four; the Spotsylvania
// knot three). Labels fan left over the Appalachians and right onto an Atlantic
// rail; built battles link, the four unbuilt (Five Forks, Fort Stedman, 3rd
// Petersburg, Appomattox) are plain text.
const E = '/war-civil-war/eastern'
// Geo frame is tight on the states (so they fill the map); the labels live in
// fixed screen-space side gutters (labelXFrac/labelYFrac), and geoInset reserves
// those gutters so the zoomed map sits between them. vbHeight keeps the canvas
// tall enough for the label spread.
const EAST_FRAME: Frame = { lonMin: -82.8, lonMax: -72.6, latMin: 35.4, latMax: 41.4 }
const LX = 0.215, RX = 0.66   // left / right label columns
const EAST_CALLOUTS: Callout[] = [
  // top row — three across the top
  { lat: 39.46, lon: -77.74, label: 'Antietam', href: `${E}/antietam`, labelXFrac: 0.20, labelYFrac: 0.06, anchor: 'middle' },
  { lat: 39.83, lon: -77.23, label: 'Gettysburg', href: `${E}/gettysburg`, heavy: true, labelXFrac: 0.50, labelYFrac: 0.06, anchor: 'middle' },
  { lat: 38.30, lon: -77.46, label: 'Fredericksburg', href: `${E}/fredericksburg`, labelXFrac: RX, labelYFrac: 0.60, anchor: 'start' },
  // left column
  { lat: 39.18, lon: -78.16, label: 'Winchester', labelXFrac: LX, labelYFrac: 0.24, anchor: 'end',
    sub: [{ text: '1st Winchester', href: `${E}/first-winchester` }, { text: 'Opequon (3rd)', href: `${E}/opequon` }, { text: 'Cedar Creek', href: `${E}/cedar-creek` }] },
  { lat: 38.81, lon: -77.52, label: 'Bull Run', labelXFrac: LX, labelYFrac: 0.55, anchor: 'end',
    sub: [{ text: '1st Bull Run', href: `${E}/bull-run` }, { text: '2nd Bull Run', href: `${E}/second-bull-run` }] },
  { lat: 37.36, lon: -78.80, label: 'Appomattox', labelXFrac: LX, labelYFrac: 0.84, anchor: 'end' },
  // right column
  { lat: 38.31, lon: -77.64, label: 'Chancellorsville', href: `${E}/chancellorsville`, labelXFrac: 0.80, labelYFrac: 0.06, anchor: 'middle',
    sub: [{ text: 'The Wilderness', href: `${E}/wilderness` }, { text: 'Spotsylvania', href: `${E}/spotsylvania` }] },
  // lower-right corner
  { lat: 37.55, lon: -77.30, label: "Gaines' Mill", href: `${E}/gaines-mill`, labelXFrac: 0.74, labelYFrac: 0.72, anchor: 'start',
    sub: [{ text: 'Malvern Hill', href: `${E}/malvern-hill` }, { text: 'Cold Harbor', href: `${E}/cold-harbor` }] },
  // bottom-center
  { lat: 37.23, lon: -77.40, label: 'Petersburg', href: `${E}/second-petersburg`, heavy: true, labelXFrac: 0.5, labelYFrac: 0.80, anchor: 'middle',
    sub: [{ text: 'The Crater', href: `${E}/crater` }, { text: 'Five Forks' }, { text: 'Fort Stedman · 3rd' }] },
]

// Western theatre — the river war + the drive to Atlanta and the sea. Chattanooga
// groups its campaign (Chickamauga, Lookout Mountain, Missionary Ridge); Vicksburg
// carries Champion Hill, Nashville carries Franklin. Bentonville (NC) and Fort
// Blakeley (AL) are the unbuilt 1865 endgame.
const W2 = '/war-civil-war/western'
const WEST_FRAME: Frame = { lonMin: -91.5, lonMax: -77.5, latMin: 30.0, latMax: 38.2 }
const WEST_CALLOUTS: Callout[] = [
  // top row
  { lat: 36.17, lon: -86.78, label: 'Nashville', href: `${W2}/nashville`, heavy: true, labelXFrac: 0.36, labelYFrac: 0.06, anchor: 'middle',
    sub: [{ text: 'Franklin', href: `${W2}/franklin` }] },
  { lat: 36.49, lon: -87.86, label: 'Fort Donelson', href: `${W2}/fort-donelson`, labelXFrac: 0.14, labelYFrac: 0.06, anchor: 'middle' },
  { lat: 37.66, lon: -84.97, label: 'Perryville', href: `${W2}/perryville`, labelXFrac: 0.80, labelYFrac: 0.06, anchor: 'middle' },
  // left column (the Mississippi / Tennessee river fights)
  { lat: 35.14, lon: -88.34, label: 'Shiloh', href: `${W2}/shiloh`, labelXFrac: LX, labelYFrac: 0.34, anchor: 'end' },
  { lat: 34.93, lon: -88.52, label: 'Corinth', href: `${W2}/corinth`, labelXFrac: LX, labelYFrac: 0.60, anchor: 'end', leaderEnd: 'left' },
  // lower-left corner
  { lat: 32.35, lon: -90.88, label: 'Vicksburg', href: `${W2}/vicksburg`, heavy: true, labelXFrac: 0.22, labelYFrac: 0.82, anchor: 'end', leaderEnd: 'left',
    sub: [{ text: 'Champion Hill', href: `${W2}/champion-hill` }] },
  // right column (the road to Chattanooga + Atlanta)
  { lat: 35.85, lon: -86.39, label: 'Stones River', href: `${W2}/stones-river`, labelXFrac: RX, labelYFrac: 0.28, anchor: 'start' },
  { lat: 35.02, lon: -85.30, label: 'Chattanooga', labelXFrac: RX, labelYFrac: 0.50, anchor: 'start',
    sub: [{ text: 'Chickamauga', href: `${W2}/chickamauga` }, { text: 'Lookout Mountain', href: `${W2}/lookout-mountain` }, { text: 'Missionary Ridge', href: `${W2}/missionary-ridge` }] },
  { lat: 33.52, lon: -84.35, label: 'Jonesborough', href: `${W2}/jonesborough`, labelXFrac: RX, labelYFrac: 0.84, anchor: 'start' },
  // far-east + deep-south endgame (unbuilt)
  { lat: 35.30, lon: -78.32, label: 'Bentonville', labelXFrac: 0.92, labelYFrac: 0.44, anchor: 'end' },
  { lat: 30.73, lon: -87.92, label: 'Fort Blakeley', labelXFrac: 0.42, labelYFrac: 0.92, anchor: 'middle' },
]

// Trans-Mississippi — the vast war west of the river, from the Missouri border
// fights down to the Louisiana bayous and out to the New Mexico desert (Glorieta).
const T2 = '/war-civil-war/trans-mississippi'
const TMIS_FRAME: Frame = { lonMin: -107, lonMax: -87, latMin: 29.0, latMax: 40.0 }
const TMIS_CALLOUTS: Callout[] = [
  { lat: 39.01, lon: -94.59, label: 'Westport', labelXFrac: 0.50, labelYFrac: 0.07, anchor: 'middle' },
  { lat: 36.38, lon: -89.46, label: 'Island No. Ten', href: `${T2}/island-number-ten`, labelXFrac: 0.80, labelYFrac: 0.62, anchor: 'middle' },
  { lat: 37.10, lon: -93.41, label: "Wilson's Creek", href: `${T2}/wilsons-creek`, labelXFrac: 0.55, labelYFrac: 0.30, anchor: 'end' },
  { lat: 36.45, lon: -94.03, label: 'Pea Ridge', href: `${T2}/pea-ridge`, labelXFrac: 0.55, labelYFrac: 0.50, anchor: 'end' },
  { lat: 35.57, lon: -105.74, label: 'Glorieta Pass', href: `${T2}/glorieta-pass`, labelXFrac: 0.16, labelYFrac: 0.42, anchor: 'start' },
  { lat: 32.04, lon: -93.70, label: 'Mansfield', href: `${T2}/mansfield`, labelXFrac: 0.58, labelYFrac: 0.74, anchor: 'start' },
  { lat: 30.69, lon: -91.27, label: 'Port Hudson', href: `${T2}/port-hudson`, labelXFrac: 0.58, labelYFrac: 0.90, anchor: 'start' },
]

// Naval & Coastal — the blockade, strung along the whole Confederate coast from
// the Mississippi mouth to the Carolinas.
const N2 = '/war-civil-war/naval'
const NAVAL_FRAME: Frame = { lonMin: -91, lonMax: -76, latMin: 28.2, latMax: 35.4 }
const NAVAL_CALLOUTS: Callout[] = [
  { lat: 33.97, lon: -77.92, label: 'Fort Fisher', labelXFrac: 0.82, labelYFrac: 0.14, anchor: 'middle' },
  { lat: 32.75, lon: -79.87, label: 'Fort Sumter', href: `${N2}/fort-sumter`, heavy: true, labelXFrac: 0.74, labelYFrac: 0.46, anchor: 'start' },
  { lat: 30.23, lon: -88.02, label: 'Mobile Bay', href: `${N2}/mobile-bay`, labelXFrac: 0.34, labelYFrac: 0.86, anchor: 'middle' },
  { lat: 29.35, lon: -89.46, label: 'Forts Jackson & St. Philip', href: `${N2}/forts-jackson`, labelXFrac: 0.10, labelYFrac: 0.93, anchor: 'start' },
]

const THEATRE_DATA: Theatre[] = [
  {
    id: 'east', name: 'Eastern', longName: 'Eastern Theatre', color: ACCENTS.violet, span: '1861–1865',
    region: 'Virginia · Maryland · Pennsylvania', summary: 'The political war. Between the two capitals, Lee was at his best — and where the war finally ended.',
    intro: "The Eastern Theatre was the war's most-watched front, fought largely in the 110-mile corridor between the two capitals, Washington and Richmond. Here Robert E. Lee's Army of Northern Virginia held off a rotating cast of Union generals and twice invaded the North, only to be turned back at Antietam and Gettysburg. Because both capitals and most of the newspapers sat in this corridor, a win in Virginia carried outsized political weight even as the war was being decided out West. It was also where the war ended, with Lee's surrender at Appomattox in April 1865.",
    peakArmies: '120k vs 75k', casualties: 400000, battlesCount: majorCount('east'), commanderRotation: 'Seven Union commanders, then Grant',
    href: '/war-civil-war/eastern', states: ['Virginia', 'Maryland', 'Pennsylvania'], labelLon: -79.3, labelLat: 38.5,
    dots: [
      { name: 'Gettysburg', lat: 39.83, lon: -77.23, heavy: true, anchor: 'end' },
      { name: 'Antietam', lat: 39.46, lon: -77.74, anchor: 'end' },
      { name: 'Bull Run', lat: 38.81, lon: -77.52, anchor: 'end' },
      { name: 'Petersburg', lat: 37.23, lon: -77.40, anchor: 'end' },
    ],
    callouts: EAST_CALLOUTS, frame: EAST_FRAME,
    events: majorsOf('east').map(b => ({ mo: b.mo, year: b.year, name: b.name, place: b.place, heavy: b.size === 'l' || b.size === 'xl', href: b.href })),
  },
  {
    id: 'west', name: 'Western', longName: 'Western Theatre', color: ACCENTS.blue, span: '1861–1865',
    region: 'Kentucky · Tennessee · Mississippi · Georgia', summary: 'Where the Union actually won the war. Grant took the rivers and split the Confederacy in two.',
    intro: "The Western Theatre is where the Union actually won the war. Its highways were the rivers (the Tennessee, the Cumberland, and above all the Mississippi), and Ulysses S. Grant rose by taking them, splitting the Confederacy in two when Vicksburg fell in July 1863. From the river war the fighting rolled into the Confederate heartland at Shiloh, Stones River, Chickamauga, and the rail hub of Chattanooga. From there William T. Sherman drove on Atlanta and marched to the sea, wrecking the South's ability to keep an army in the field.",
    peakArmies: '110k vs 80k', casualties: 300000, battlesCount: majorCount('west'), commanderRotation: 'Grant rises, then Sherman',
    href: '/war-civil-war/western', states: ['Kentucky', 'Tennessee', 'Mississippi', 'Georgia', 'Alabama'], labelLon: -86.4, labelLat: 34.3,
    frame: WEST_FRAME, callouts: WEST_CALLOUTS,
    dots: [
      { name: 'Shiloh', lat: 35.14, lon: -88.34, anchor: 'end' },
      { name: 'Vicksburg', lat: 32.35, lon: -90.88, heavy: true, anchor: 'end' },
      { name: 'Chickamauga', lat: 34.94, lon: -85.29 },
      { name: 'Atlanta', lat: 33.75, lon: -84.39, heavy: true },
    ],
    events: majorsOf('west').map(b => ({ mo: b.mo, year: b.year, name: b.name, place: b.place, heavy: b.size === 'l' || b.size === 'xl', href: b.href })),
  },
  {
    id: 'tmis', name: 'Trans-Miss', longName: 'Trans-Mississippi', color: ACCENTS.amber, span: '1861–1865',
    region: 'Arkansas · Louisiana · Texas · Missouri', summary: 'The sprawling, half-forgotten war west of the great river.',
    intro: "The Trans-Mississippi was the sprawling, half-forgotten war west of the great river. It opened with a vicious fight for Missouri, a slave state the Union could not afford to lose, and spread across Arkansas, Louisiana, the Indian Territory, and out to the New Mexico desert, where a Confederate grab for the Southwest died at Glorieta Pass. Once Union gunboats closed the Mississippi at Vicksburg and Port Hudson in 1863, the theatre was cut off from the rest of the Confederacy. Its armies fought on in isolation and held out longer than any other front, not surrendering until the summer of 1865.",
    peakArmies: '30k vs 20k', casualties: 35000, battlesCount: majorCount('tmis'), commanderRotation: 'Mostly forgotten',
    href: '/war-civil-war/trans-mississippi', states: ['Arkansas', 'Louisiana', 'Texas', 'Missouri'], labelLon: -93.7, labelLat: 33.4,
    frame: TMIS_FRAME, callouts: TMIS_CALLOUTS,
    dots: [
      { name: 'Pea Ridge', lat: 36.45, lon: -94.03, anchor: 'end' },
      { name: 'Mansfield', lat: 32.04, lon: -93.70, anchor: 'end' },
    ],
    events: majorsOf('tmis').map(b => ({ mo: b.mo, year: b.year, name: b.name, place: b.place, heavy: b.size === 'l' || b.size === 'xl', href: b.href })),
  },
  {
    id: 'naval', name: 'Naval', longName: 'Naval & Coastal', color: ACCENTS.rust, span: '1861–1865',
    region: 'Atlantic · Gulf · the Mississippi', summary: 'The Anaconda — blockade, ironclads, and slowly strangling Southern trade.',
    intro: "The naval war was a slow strangulation. From the first weeks the U.S. Navy threw a blockade — the seaward jaw of Winfield Scott's 'Anaconda' plan — around 3,500 miles of Confederate coast, choking off the cotton the South sold and the arms it needed to buy. Port by port the Union closed the door: New Orleans and the river forts in 1862, Mobile Bay in 1864, and finally Fort Fisher, which sealed Wilmington, the last open harbor, in early 1865. It was also a revolution in warship design, as the duel of the ironclads at Hampton Roads in 1862 made every wooden navy on earth obsolete overnight.",
    peakArmies: '700+ ships', casualties: 8000, battlesCount: majorCount('naval'), commanderRotation: 'Farragut, Porter, Du Pont',
    href: '/war-civil-war/naval', states: ['North Carolina', 'South Carolina', 'Florida'], labelLon: -80.0, labelLat: 30.5,
    frame: NAVAL_FRAME, callouts: NAVAL_CALLOUTS,
    dots: [
      { name: 'Fort Fisher', lat: 33.97, lon: -77.92 },
      { name: 'Mobile Bay', lat: 30.4, lon: -88.04, anchor: 'end' },
      { name: 'New Orleans', lat: 29.95, lon: -90.07, anchor: 'end' },
    ],
    events: majorsOf('naval').map(b => ({ mo: b.mo, year: b.year, name: b.name, place: b.place, heavy: b.size === 'l' || b.size === 'xl', href: b.href })),
  },
  // The fifth lane: not a place — the war off the battlefield. No map geography;
  // holds the locked non-battle/theme sections (causes → society → aftermath).
  {
    id: 'offfield', name: 'Off the Battlefield', longName: 'Off the Battlefield', color: ACCENTS.green, span: '1850–1877',
    region: 'Causes · emancipation · society · technology · diplomacy · aftermath',
    summary: 'The war beyond the battles — what caused it, what it changed, and how it was fought and felt off the firing line.',
    href: '/war-civil-war/off-the-battlefield', kind: 'themes', states: [], labelLon: 0, labelLat: 0, dots: [],
    events: THEMES.map(t => ({ mo: '', year: t.year, name: t.name, place: '', when: t.date })),
  },
]
// Non-theatre fill states (dotted, always faint) so the map reads as the US.
const CONTEXT_STATES = ['West Virginia', 'Ohio', 'Indiana', 'Illinois', 'New Jersey', 'Delaware', 'Oklahoma', 'Kansas', 'Iowa', 'Wisconsin', 'Michigan', 'New York', 'Minnesota']
// The overview (nothing selected): the whole war at a glance. Selecting a
// theatre swaps in that theatre's own zoom frame (Theatre.frame).
const NATIONAL_FRAME = { lonMin: -96.5, lonMax: -74, latMin: 28.8, latMax: 42.3 }

// Collapsible "At a glance" for the war home — stats, the Union vs Confederacy
// face-off, a casualties bar, and the outcome. Figures are estimates (the war's
// death toll is genuinely contested) pending the accuracy fact-check pass.
function WarGlance() {
  const [open, setOpen] = useState(true)
  const MUTED = 'color-mix(in srgb, var(--foreground) 70%, transparent)'
  const FAINT = 'color-mix(in srgb, var(--foreground) 45%, transparent)'
  const BORDER = 'color-mix(in srgb, var(--foreground) 12%, transparent)'
  const STRONG = 'color-mix(in srgb, var(--foreground) 22%, transparent)'
  const accent = WAR_ACCENT
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
              <span style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>Death toll (est.)</span>
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
  // The map defaults to Eastern and always shows a theatre — no national
  // overview. This 4-theatre selector controls ONLY the map.
  const [active, setActive] = useState('east')
  // the battle list below the map shows in two looks the user likes — image
  // CARDS or a sleek compact LIST — switchable with a slider.
  const [listStyle, setListStyle] = useState<'cards' | 'list'>('cards')
  // the timeline has its OWN selector (independent of the map): All + the four
  // theatres + Off the Battlefield.
  const [tlTheatre, setTlTheatre] = useState('all')
  const at = THEATRE_DATA.find(t => t.id === active)!
  // Row 1 = the cross-cutting lenses (All / OTBF / Military Story); row 2 = the
  // four geographic theatres. 'All' is a neutral gray (each item then shows its
  // own theatre colour); Military Story keeps the war's stone accent.
  const TL_OPTS = [
    { id: 'all', label: 'All', color: 'color-mix(in srgb, var(--foreground) 50%, transparent)' },
    { id: 'offfield', label: 'Off the Battlefield', color: ACCENTS.green },
    { id: 'milstory', label: 'Military Story', color: WAR_ACCENT },
    { id: 'east', label: 'Eastern', color: ACCENTS.violet },
    { id: 'west', label: 'Western', color: ACCENTS.blue },
    { id: 'tmis', label: 'Trans', color: ACCENTS.amber },
    { id: 'naval', label: 'Naval', color: ACCENTS.rust },
  ]
  const tlMeta = TL_OPTS.find(o => o.id === tlTheatre)!
  const TH_COLOR: Record<string, string> = { east: ACCENTS.violet, west: ACCENTS.blue, tmis: ACCENTS.amber, naval: ACCENTS.rust, offfield: ACCENTS.green }
  const TH_LABEL: Record<string, string> = { east: 'Eastern', west: 'Western', tmis: 'Trans-Miss', naval: 'Naval', offfield: 'Off the Battlefield' }
  const nodeColor = (n: SpineNode) => (n.theatre && TH_COLOR[n.theatre]) || WAR_ACCENT
  const nodeTheatre = (n: SpineNode) => n.id.startsWith('mil-') ? 'Military Story' : (n.theatre ? TH_LABEL[n.theatre] ?? '' : '')
  const milNodes: SpineNode[] = CHAPTERS.map(c => ({ id: c.id, phase: c.phase, type: 'BATTLE', size: c.size, name: c.name, short: c.short, date: c.date, hook: c.hook, href: c.href, img: c.img, stack: c.stack }))
  const muted = 'color-mix(in srgb, var(--foreground) 70%, transparent)'
  const faint = 'color-mix(in srgb, var(--foreground) 45%, transparent)'
  const border = 'color-mix(in srgb, var(--foreground) 14%, transparent)'
  const chip = 'color-mix(in srgb, var(--foreground) 6%, transparent)'
  const card = 'color-mix(in srgb, var(--foreground) 4%, transparent)'

  const states = [
    ...CONTEXT_STATES.map(n => ({ name: n, tone: 'faint' as const })),
    ...THEATRE_DATA.flatMap(t => t.states.map((n) => ({
      name: n, color: t.color, tone: (t.id === active ? 'focus' : 'faint') as 'focus' | 'faint', fill: t.id === active,
    }))),
  ]
  // The active theatre's callouts (or its labeled-dot fallback) + the neighbours
  // as faint context dots.
  const dots = [
    ...THEATRE_DATA.filter(t => t.id !== active).flatMap(t => t.dots.map(d => ({ lat: d.lat, lon: d.lon, color: alpha(t.color, 0.16) }))),
    ...(at.callouts ? [] : at.dots.map(d => ({ ...d, color: at.color }))),
  ]
  const callouts = at.callouts ?? []
  const frame = at.frame ?? NATIONAL_FRAME
  const mapAccent = at.color
  const rivers = US_RIVERS.Mississippi.map(pts => ({ pts }))
  // the timeline's battle spine, filtered by ITS OWN selector — phase-grouped for
  // the CARDS look, flat chronological for the LIST look. 'all' = the whole war.
  // 'All' = every battle + off-the-battlefield event + the military-story chapters,
  // merged chronologically (each year's chapter leads that year's battles).
  const yearOf = (n: SpineNode) => parseInt((n.date.match(/\d{4}/) || ['0'])[0], 10)
  const allNodes = [...NODES, ...milNodes].sort((a, b) =>
    yearOf(a) !== yearOf(b) ? yearOf(a) - yearOf(b) : (a.id.startsWith('mil-') ? 0 : 1) - (b.id.startsWith('mil-') ? 0 : 1))
  const tlNodes = tlTheatre === 'milstory' ? milNodes : tlTheatre === 'all' ? allNodes : NODES.filter(n => n.theatre === tlTheatre)
  const byPhase = PHASES.map(p => ({ ...p, nodes: tlNodes.filter(n => n.phase === p.id) })).filter(p => p.nodes.length > 0)

  return (
    <DossierSection label="The theatres" accent={WAR_ACCENT}>
      <p style={{ fontFamily: SERIF, fontSize: 14.5, lineHeight: 1.55, color: muted, margin: '0 0 12px' }}>
        The war ran in parallel across four theatres. Tap one to bring its battles up on the map.
      </p>
      {/* 4-theatre selector — sits on top of the map and controls the MAP only. */}
      <div style={{ display: 'flex', gap: 4, padding: 3, marginBottom: 12, background: chip, border: `1px solid ${border}`, borderRadius: 999 }}>
        {THEATRE_DATA.filter(t => t.kind !== 'themes').map(t => {
          const on = t.id === active
          return (
            <button key={t.id} onClick={() => setActive(t.id)} style={{ flex: 1, appearance: 'none', border: 'none', cursor: 'pointer', background: on ? 'color-mix(in srgb, var(--foreground) 12%, var(--background))' : 'transparent', color: on ? 'var(--foreground)' : muted, fontFamily: SANS, fontSize: 11, fontWeight: on ? 600 : 500, padding: '7px 0', borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
              <span style={{ width: 7, height: 7, borderRadius: 2, background: t.color, opacity: on ? 1 : 0.6 }} />
              {t.name}
            </button>
          )
        })}
      </div>
      {/* Every selected theatre renders into the SAME 760×590 canvas (frame fit to box). */}
      <DottedMap inset={false} accent={mapAccent} frame={frame} states={states} dots={dots} callouts={callouts} rivers={rivers} vbWidth={760} vbHeight={590} geoInset={at.geoInset} />
      <div style={{ marginTop: 14, border: `1px solid ${alpha(at.color, 0.4)}`, borderRadius: 10, padding: 16, background: card }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 10, height: 10, borderRadius: 2, background: at.color, boxShadow: `0 0 0 3px ${alpha(at.color, 0.2)}`, flexShrink: 0 }} />
          <div style={{ flex: 1, fontFamily: SERIF, fontSize: 18, fontWeight: 500, letterSpacing: -0.2 }}>{at.longName}</div>
          <div style={{ fontFamily: SANS, fontSize: 10, color: faint }}>{at.span}</div>
        </div>
        <div style={{ marginTop: 4, fontFamily: SANS, fontSize: 10.5, color: muted }}>{at.region}</div>
        <div style={{ marginTop: 10, fontFamily: SERIF, fontSize: 14, lineHeight: 1.45 }}>{at.summary}</div>
        {at.intro && <p style={{ margin: '10px 0 0', fontFamily: SERIF, fontSize: 13, lineHeight: 1.58, color: muted }}>{at.intro}</p>}
        {at.kind !== 'themes' && (
          <>
            <div style={{ marginTop: 12, paddingTop: 11, borderTop: `1px solid ${border}`, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px 12px', fontFamily: SANS, fontSize: 10.5, color: muted }}>
              <div><span style={{ color: 'var(--foreground)', fontWeight: 600 }}>{at.battlesCount}</span> battles</div>
              <div><span style={{ color: 'var(--foreground)', fontWeight: 600 }}>{at.peakArmies}</span></div>
              <div><span style={{ color: 'var(--foreground)', fontWeight: 600 }}>~{num(at.casualties ?? 0)}</span> casualties (est.)</div>
            </div>
            <div style={{ marginTop: 6, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12, color: faint }}>{at.commanderRotation}</div>
          </>
        )}
      </div>
      {/* the selected theatre's battle spine — replaces the old flat event list;
          a slider switches between image CARDS and a sleek LIST. */}
      <div id="sec-timeline" style={{ scrollMarginTop: CHROME_TOP + 46, marginTop: 30, paddingTop: 24, borderTop: '1px solid color-mix(in srgb, var(--foreground) 18%, transparent)' }}>
        <h2 style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: WAR_ACCENT, margin: '0 0 12px' }}>The timeline</h2>
        {/* timeline selector — row 1: All / OTBF / Military Story (the cross-cutting
            lenses); row 2: the four geographic theatres. */}
        {[TL_OPTS.slice(0, 3), TL_OPTS.slice(3)].map((rowOpts, ri) => (
          <div key={ri} style={{ display: 'flex', gap: 2, padding: 3, marginBottom: ri === 0 ? 6 : 14, background: chip, border: `1px solid ${border}`, borderRadius: 999 }}>
            {rowOpts.map(o => {
              const on = o.id === tlTheatre
              return (
                <button key={o.id} onClick={() => setTlTheatre(o.id)} style={{ flex: 1, minWidth: 0, appearance: 'none', border: 'none', cursor: 'pointer', background: on ? 'color-mix(in srgb, var(--foreground) 12%, var(--background))' : 'transparent', color: on ? 'var(--foreground)' : muted, fontFamily: SANS, fontSize: 10.5, fontWeight: on ? 700 : 500, padding: '6px 4px', borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, lineHeight: 1.15, textAlign: 'center' }}>
                  <span style={{ width: 6, height: 6, borderRadius: 2, background: o.color, opacity: on ? 1 : 0.6, flexShrink: 0 }} />
                  <span style={{ minWidth: 0 }}>{o.label}</span>
                </button>
              )
            })}
          </div>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
          <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: tlMeta.color, textTransform: 'uppercase' }}>{tlMeta.label} · {tlNodes.length} {tlTheatre === 'all' ? 'battles/events' : tlTheatre === 'offfield' ? 'events' : tlTheatre === 'milstory' ? 'chapters' : 'battles'}</div>
          <div style={{ display: 'flex', gap: 2, padding: 2, background: chip, border: `1px solid ${border}`, borderRadius: 999 }}>
            {(['cards', 'list'] as const).map(s => {
              const on = listStyle === s
              return (
                <button key={s} onClick={() => setListStyle(s)} style={{ appearance: 'none', border: 'none', cursor: 'pointer', background: on ? 'color-mix(in srgb, var(--foreground) 12%, var(--background))' : 'transparent', color: on ? 'var(--foreground)' : muted, fontFamily: SANS, fontSize: 10, fontWeight: on ? 700 : 500, letterSpacing: 0.3, padding: '4px 11px', borderRadius: 999, textTransform: 'capitalize' }}>{s}</button>
              )
            })}
          </div>
        </div>
        {listStyle === 'cards' ? (
          <CordTimeline>
            {byPhase.map(phase => (
              <div key={phase.id}>
                <div style={{ position: 'relative', height: 30 }}>
                  <div style={{ position: 'absolute', left: CORD_X - 6, top: 9, fontFamily: SANS, fontSize: 10, letterSpacing: 1.4, fontWeight: 700, color: WAR_OXBLOOD, textTransform: 'uppercase', background: 'var(--background)', padding: '0 8px' }}>{phase.label}</div>
                </div>
                {phase.nodes.map(n => <BattleCard key={n.id} size={n.size} accent={nodeColor(n)} dateTop={(n.date.match(/\d{4}/) || [''])[0]} sub={n.sub} hook={n.hook} title={n.short ?? n.name} href={n.href} imageUrl={n.img} stack={n.stack} fit={!!n.img} soon={!n.href} />)}
              </div>
            ))}
          </CordTimeline>
        ) : (
          <div style={{ position: 'relative', marginTop: 12 }}>
            <div style={{ position: 'absolute', left: 4, top: 5, bottom: 5, width: 1, background: border }} />
            {tlNodes.map(n => {
              const place = n.sub?.split(' · ')[0]
              const row = (
                <>
                  <span style={{ position: 'absolute', left: 0, top: 6, width: 9, height: 9, borderRadius: 999, background: nodeColor(n), border: `1px solid ${nodeColor(n)}` }} />
                  <div style={{ fontFamily: SANS, fontSize: 9, letterSpacing: 0.3, fontWeight: 700, color: alpha(nodeColor(n), 0.9), textTransform: 'uppercase' }}>{n.date}{tlTheatre === 'all' && nodeTheatre(n) ? ` · ${nodeTheatre(n)}` : ''}</div>
                  <div style={{ fontFamily: SERIF, fontSize: 14, lineHeight: 1.2, marginTop: 1 }}>{n.name}{place && <span style={{ color: faint, fontSize: 12 }}> · {place}</span>}</div>
                  <span style={{ position: 'absolute', right: 0, top: 7, fontFamily: SANS, fontSize: 8, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', padding: '2px 6px', borderRadius: 999, color: n.href ? '#fff' : faint, background: n.href ? nodeColor(n) : 'transparent', border: n.href ? 'none' : `1px solid ${border}` }}>{n.href ? 'Read →' : 'Soon'}</span>
                </>
              )
              const style: React.CSSProperties = { position: 'relative', display: 'block', width: '100%', textAlign: 'left', color: 'var(--foreground)', padding: '5px 0 9px 20px', textDecoration: 'none' }
              return n.href ? <a key={n.id} href={n.href} style={style}>{row}</a> : <div key={n.id} style={style}>{row}</div>
            })}
          </div>
        )}
      </div>
    </DossierSection>
  )
}

// Inline jump-bar (Art's SectionNav pattern) for the Dossier side — a sticky row
// of chips that scroll-spies and smooth-jumps to each id'd section. Sticks just
// under the breadcrumb (50px). Sections carry scrollMarginTop so the jump lands
// clear of the sticky chrome.
function DossierNav({ items, accent }: { items: { id: string; label: string }[]; accent: string }) {
  const [active, setActive] = useState(items[0]?.id)
  const TOP = CHROME_TOP   // tier-3 bar sits just under the ThreadBar + breadcrumb
  useEffect(() => {
    const onScroll = () => {
      let cur = items[0]?.id
      for (const it of items) {
        const sec = document.getElementById(it.id)
        if (sec && sec.getBoundingClientRect().top - TOP - 48 <= 0) cur = it.id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])
  const border = 'color-mix(in srgb, var(--foreground) 11%, transparent)'
  const muted = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
  return (
    <div style={{ position: 'sticky', top: TOP, zIndex: 6, display: 'flex', justifyContent: 'center', gap: 5, padding: '8px', background: 'color-mix(in srgb, var(--background) 92%, transparent)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', borderBottom: `1px solid ${border}` }}>
      {items.map(it => {
        const on = active === it.id
        return (
          <button key={it.id} onClick={() => { setActive(it.id); document.getElementById(it.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
            style={{ flexShrink: 0, fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: 0.2, padding: '5px 12px', borderRadius: 999, cursor: 'pointer', whiteSpace: 'nowrap', border: `1px solid ${on ? alpha(accent, 0.5) : border}`, background: on ? alpha(accent, 0.14) : 'transparent', color: on ? 'var(--foreground)' : muted }}>{it.label}</button>
        )
      })}
    </div>
  )
}

export default function CivilWarPage() {
  const [heroFailed, setHeroFailed] = useState(false)

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarBreadcrumb crumbs={civilWarCrumbs()} accent={WAR_ACCENT} />
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        <DossierNav accent={WAR_ACCENT} items={[
          { id: 'sec-story', label: 'Story' },
          { id: 'sec-details', label: 'Details' },
          { id: 'sec-theatres', label: 'Theatres' },
          { id: 'sec-timeline', label: 'Timeline' },
        ]} />
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

        {/* Story — the military through-line that ties the battles together */}
        <div id="sec-story" style={{ scrollMarginTop: CHROME_TOP + 46 }}>
          <a href="/war-civil-war/how-the-war-was-fought" style={{ display: 'block', margin: '14px 18px 0', textDecoration: 'none', color: 'inherit', border: `1px solid ${alpha(WAR_ACCENT, 0.5)}`, borderRadius: 12, padding: '14px 16px', background: alpha(WAR_ACCENT, 0.07) }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: WAR_ACCENT, flexShrink: 0 }} />
              <span style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: WAR_ACCENT }}>The military story</span>
              <span style={{ marginLeft: 'auto', fontFamily: SANS, fontSize: 9, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>5 chapters</span>
            </div>
            <div style={{ marginTop: 7, fontFamily: SERIF, fontSize: 19, fontWeight: 500, letterSpacing: -0.3 }}>How the War Was Fought</div>
            <div style={{ marginTop: 5, fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.5, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)' }}>The whole war as one through-line — how it was planned, won, and lost, year by year, 1861–1865. The connective tissue between the causes and the battles.</div>
            <div style={{ marginTop: 10, display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: SANS, fontWeight: 600, fontSize: 11.5, color: WAR_ACCENT }}>Read the war’s story <span aria-hidden>→</span></div>
          </a>
        </div>

        {/* Details — at a glance */}
        <div id="sec-details" style={{ scrollMarginTop: CHROME_TOP + 46 }}>
          <WarGlance />
        </div>

        {/* Theatres (the map) + Timeline (the battle list) — both inside
            TheatresInteractive; sec-theatres here, sec-timeline on the list within. */}
        <div id="sec-theatres" style={{ scrollMarginTop: CHROME_TOP + 46, padding: '18px 18px 48px' }}>
          <TheatresInteractive />
        </div>
      </div>
    </div>
  )
}
