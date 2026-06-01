'use client'

// CAMPAIGN + SIEGE dossier (Siege of Vicksburg). Same shape as Stones River: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. 6 sections (campaign + siege).
// Content via the war content pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarViewToggle, SANS, SERIF, ACCENTS, alpha, useWarView } from '@/components/mode/war-chrome'
import { BattleCard, CordTimeline, type CardSize } from '@/components/mode/war-battle-card'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.blue
const CRUMBS = civilWarCrumbs({ theatre: 'west', battleId: 'w-vicksburg' })

const HERO_IMG = '/war-img/vicksburg-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Army of the Tennessee', size: '~44,000, swelling toward 70,000', commander: 'Grant', note: 'Ran the batteries, cut loose from its base, and bottled the enemy inside the walls.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Vicksburg garrison', size: '~30,000 troops', commander: 'Pemberton', note: 'Sealed inside the fortress, waiting on relief that never came — and starving.', color: ACCENTS.rust },
]
const CAS = { union: 10142, csa: 9091 }
const FIGURES = [
  { name: 'U. S. Grant', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/grant.jpg' },
  { name: 'W. T. Sherman', role: 'Corps, Union', side: 'U', img: '/war-img/cmdr/sherman.jpg' },
  { name: 'J. B. McPherson', role: 'Corps, Union', side: 'U', img: '/war-img/cmdr/mcpherson.jpg' },
  { name: 'J. A. McClernand', role: 'Corps, Union', side: 'U', img: '/war-img/cmdr/mcclernand.jpg' },
  { name: 'D. D. Porter', role: 'Fleet, Union', side: 'U', img: '/war-img/cmdr/dd-porter.jpg' },
  { name: 'J. C. Pemberton', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/pemberton.jpg' },
  { name: 'J. E. Johnston', role: 'Relief, CSA', side: 'C', img: '/war-img/cmdr/je-johnston.jpg' },
]
const SECTIONS = [
  { id: 'the-key', eyebrow: 'The fortress on the bluffs', title: 'The Key to the War', blurb: 'Vicksburg’s guns close the Mississippi; Grant (North) tries the overland march and the frontal assault — and both fail.' },
  { id: 'the-failed-approaches', eyebrow: 'The winter of mud', title: 'Canals, Bayous, and a Drowning Army', blurb: 'Four schemes to slip past the batteries through swamp and bayou all bog down; the navy has to be rescued, on foot, from the woods.' },
  { id: 'the-gamble', eyebrow: 'The spring run', title: 'Past the Guns and Loose in Mississippi', blurb: 'Porter (North) runs the batteries; Grant (North) crosses at Bruinsburg, cuts his supply line, and wins five battles in eighteen days, capped at Champion Hill.' },
  { id: 'the-siege', eyebrow: 'Forty-seven days', title: 'The Caves, the Trenches, and the Mule Meat', blurb: 'Two failed storms turn into a 47-day siege; 3,000 civilians live in clay caves while the garrison starves on mule, horse, and rat.' },
  { id: 'emancipation-made-real', eyebrow: 'Freedom along the river', title: 'The Cause Made Flesh', blurb: 'Slavery dissolves in the army’s path; at Milliken’s Bend, formerly enslaved soldiers fight hand-to-hand and hold.' },
  { id: 'the-surrender', eyebrow: 'The Fourth of July', title: 'The Father of Waters Goes Unvexed', blurb: 'Pemberton (South) surrenders nearly 30,000 men on July 4; Port Hudson falls; the river opens end to end the week after Gettysburg.' },
]
const TL_META: Record<string, { size: CardSize; date: string; palette: [string, string, string] }> = {
  'the-key': { size: 'l', date: 'Spring', palette: ['#1d3a5a', '#16283a', '#080c12'] },
  'the-failed-approaches': { size: 'm', date: 'Winter', palette: ['#3a4a2a', '#283420', '#0a0e08'] },
  'the-gamble': { size: 'xl', date: 'Apr–May', palette: ['#1d3a5a', '#16283a', '#080c12'] },
  'the-siege': { size: 'l', date: 'May–Jul', palette: ['#3a2e21', '#2a221c', '#0a0806'] },
  'emancipation-made-real': { size: 'l', date: 'Jun', palette: ['#7a1422', '#3a1208', '#0a0606'] },
  'the-surrender': { size: 'm', date: 'Jul 4', palette: ['#3a2e21', '#2a221c', '#0a0806'] },
}
const SECTION_IMG: Record<string, string> = {
  'the-key': '/war-img/vicksburg-overview.png',
  'the-failed-approaches': '/war-img/cmdr/grant.jpg',
  'the-gamble': '/war-img/vicksburg-campaign.png',
  'the-siege': '/war-img/vicksburg-siege.png',
  'emancipation-made-real': '/war-img/cmdr/pemberton.jpg',
  'the-surrender': '/war-img/cmdr/dd-porter.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/western/vicksburg/s/${id}`
const num = (n: number) => n.toLocaleString('en-US')

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{children}</div>
}

function HeroImg() {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
      {failed
        ? <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #3a2e21, #2a221c 55%, #0a0806)' }} />
        : <img src={HERO_IMG} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
        <Eyebrow color="#9ec1f5">Campaign &amp; Siege · Western Theatre</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Siege of Vicksburg</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>May–July 4, 1863 · Vicksburg, Mississippi</div>
      </div>
    </div>
  )
}

function CasBlock() {
  return (
    <div>
      <div style={{ display: 'flex', height: 10, borderRadius: 5, overflow: 'hidden', marginBottom: 8 }}>
        <div style={{ width: `${(CAS.union / (CAS.union + CAS.csa)) * 100}%`, background: ACCENTS.blue, height: '100%' }} />
        <div style={{ width: `${(CAS.csa / (CAS.union + CAS.csa)) * 100}%`, background: ACCENTS.rust, height: '100%' }} />
      </div>
      <div style={{ display: 'flex', gap: 16, fontFamily: SANS, fontSize: 11, color: 'color-mix(in srgb, var(--foreground) 65%, transparent)' }}>
        <span><span style={{ color: ACCENTS.blue }}>■</span> Union ~{num(CAS.union)}</span>
        <span><span style={{ color: ACCENTS.rust }}>■</span> Confederacy ~{num(CAS.csa)} k/w/m</span>
      </div>
      <div style={{ fontFamily: SANS, fontSize: 11, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)', marginTop: 6, lineHeight: 1.4 }}>
        Plus the surrender: about <strong style={{ fontWeight: 600 }}>29,495</strong> Confederates surrendered and were paroled on July 4 — an entire field army taken out of the war at a stroke.
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
          <div style={{ display: 'flex', marginBottom: 18 }}>
            {([['Siege', '47 days'], ['Surrendered', '~29,495'], ['Winner', 'Union']] as const).map(([k, v], i) => (
              <div key={k} style={{ flex: 1, textAlign: 'center', borderLeft: i ? '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)' : 'none' }}>
                <div style={{ fontFamily: SERIF, fontSize: 18 }}>{v}</div>
                <Eyebrow>{k}</Eyebrow>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'stretch', gap: 0, marginBottom: 18, position: 'relative' }}>
            {ARMIES.map((a, i) => (
              <div key={a.side} style={{ flex: 1, textAlign: i ? 'right' : 'left', paddingRight: i ? 0 : 18, paddingLeft: i ? 18 : 0 }}>
                <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: a.color }}>{a.side}</div>
                <div style={{ fontFamily: SERIF, fontSize: 15, marginTop: 2 }}>{a.label}</div>
                <div style={{ fontFamily: SANS, fontSize: 12.5, marginTop: 3 }}><strong style={{ fontWeight: 600 }}>{a.size}</strong></div>
                <div style={{ fontFamily: SANS, fontSize: 12, color: 'color-mix(in srgb, var(--foreground) 60%, transparent)', marginTop: 1 }}>{a.commander}</div>
                <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.4, color: 'color-mix(in srgb, var(--foreground) 60%, transparent)', marginTop: 5 }}>{a.note}</div>
              </div>
            ))}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 26, height: 26, borderRadius: 999, background: 'var(--background)', border: '1px solid color-mix(in srgb, var(--foreground) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SERIF, fontStyle: 'italic', fontSize: 12, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>vs</div>
          </div>
          <CasBlock />
        </div>
      )}
    </section>
  )
}

function OutcomePill() {
  return (
    <div style={{ padding: '14px 16px' }}>
      <div style={{ border: `1px solid ${alpha(ACCENT, 0.4)}`, background: alpha(ACCENT, 0.08), borderRadius: 10, padding: '13px 15px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ color: ACCENT, fontWeight: 700, fontSize: 13 }}>✓</span>
          <span style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: ACCENT }}>Outcome</span>
        </div>
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Decisive Union victory · the river opens, the Confederacy is split in two</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          After two failed roads in — the wrecked overland march and the bloody assault on the bluffs — and a miserable winter of bogged-down bayou schemes, Grant ran the river batteries, crossed below the city at Bruinsburg, cut loose from his supply line, and won five battles in eighteen days, capped by the decisive fight at Champion Hill. The 47-day siege that followed starved the garrison into a July 4 surrender of nearly 30,000 men. Port Hudson fell five days later, opening the entire Mississippi and severing the Trans-Mississippi from the rest of the Confederacy. Coming the day after Gettysburg, Vicksburg is half of the war’s twin turning point — and, along the army’s path, the place where emancipation stopped being a proclamation and became a fact on the ground.
        </p>
      </div>
    </div>
  )
}

function FigureImg({ src }: { src: string }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) return null
  return <img src={src} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 22%' }} />
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
              <div style={{ width: 52, height: 52, margin: '0 auto', borderRadius: 999, overflow: 'hidden', background: 'linear-gradient(135deg, #3a2e21, #1c1814)', border: `2px solid ${ring}`, boxShadow: `0 0 0 2px var(--background)` }}>
                <FigureImg src={f.img} />
              </div>
              <div style={{ fontFamily: SERIF, fontSize: 11.5, marginTop: 6, lineHeight: 1.15 }}>{f.name}</div>
              <div style={{ fontFamily: SANS, fontSize: 8.5, color: 'color-mix(in srgb, var(--foreground) 50%, transparent)', marginTop: 1 }}>{f.role}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Thumb({ file, w, h }: { file: string; w: number; h: number }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ width: w, height: h, borderRadius: 6, overflow: 'hidden', flexShrink: 0, background: 'linear-gradient(135deg, #3a2e21, #1c1814)' }}>
      {!failed && <img src={file} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 38%' }} />}
    </div>
  )
}

function SectionsList() {
  return (
    <div style={{ padding: '6px 16px 40px' }}>
      <Eyebrow color={ACCENT}>The narrative · {SECTIONS.length} sections</Eyebrow>
      <div style={{ position: 'relative', marginTop: 12 }}>
        <div style={{ position: 'absolute', left: 13, top: 8, bottom: 8, width: 1, background: 'color-mix(in srgb, var(--foreground) 18%, transparent)' }} />
        {SECTIONS.map((s, i) => (
          <a key={s.id} href={sectionHref(s.id)} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
            <div style={{ position: 'relative', paddingLeft: 40, paddingBottom: 14 }}>
              <div style={{ position: 'absolute', left: 0, top: 2, width: 27, height: 27, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SANS, fontSize: 12, fontWeight: 700, background: i === 0 ? ACCENT : 'var(--background)', color: i === 0 ? '#fff' : 'color-mix(in srgb, var(--foreground) 60%, transparent)', border: `1px solid ${i === 0 ? ACCENT : 'color-mix(in srgb, var(--foreground) 25%, transparent)'}`, zIndex: 1 }}>{i + 1}</div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <Eyebrow color={ACCENT}>{s.eyebrow}</Eyebrow>
                  <div style={{ fontFamily: SERIF, fontSize: 17, marginTop: 2 }}>{s.title}</div>
                  <div style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.5, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)', marginTop: 2 }}>{s.blurb}</div>
                </div>
                <Thumb file={SECTION_IMG[s.id]} w={72} h={56} />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default function VicksburgPage() {
  const [view, setView] = useWarView()
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarBreadcrumb crumbs={CRUMBS} accent={ACCENT} />
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <HeroImg />
        <WarViewToggle view={view} onView={setView} />
        {view === 'dossier' ? (
          <>
            <AtAGlance />
            <CommandersStrip />
            <OutcomePill />
            <SectionsList />
          </>
        ) : (
          <div style={{ padding: '8px 0 20px' }}>
            <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.6, margin: '8px 16px 4px', color: 'color-mix(in srgb, var(--foreground) 78%, transparent)' }}>
              Lincoln called it the key. The campaign that turned it split the Confederacy in two — and broke slavery along the river.
            </p>
            <CordTimeline>
              {SECTIONS.map(s => {
                const m = TL_META[s.id]
                return <BattleCard key={s.id} size={m.size} accent={ACCENT} dateTop={m.date} palette={m.palette} imageUrl={SECTION_IMG[s.id]} title={s.title} sub={s.eyebrow} hook={s.blurb} href={sectionHref(s.id)} inset />
              })}
            </CordTimeline>
          </div>
        )}
      </div>
    </div>
  )
}
