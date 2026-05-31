'use client'

// BATTLE dossier (Battle of Missionary Ridge). Same shape as Shiloh / Stones River:
// hero · collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome
// card · commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarViewToggle, SANS, SERIF, ACCENTS, alpha, useWarView } from '@/components/mode/war-chrome'
import { BattleCard, CordTimeline, type CardSize } from '@/components/mode/war-battle-card'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.blue
const CRUMBS = civilWarCrumbs({ theatre: 'west', battleId: 'w-missionary' })

const HERO_IMG = '/war-img/missionary-ridge-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Army of the Cumberland', size: '~56,000 troops', commander: 'Grant (overall); Thomas', note: 'Beaten at Chickamauga two months earlier — and charged the ridge without orders to avenge it.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of Tennessee', size: '~44,000 troops', commander: 'Bragg', note: 'Held an “impregnable” ridge — until its badly-sited center broke and ran.', color: ACCENTS.rust },
]
const CAS = { union: 5824, csa: 6667 }
const FIGURES = [
  { name: 'U. S. Grant', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/grant.jpg' },
  { name: 'G. H. Thomas', role: 'Army of the Cumberland', side: 'U', img: '/war-img/cmdr/thomas.jpg' },
  { name: 'W. T. Sherman', role: 'Army of the Tennessee', side: 'U', img: '/war-img/cmdr/sherman.jpg' },
  { name: 'J. Hooker', role: 'Detachment, Union', side: 'U', img: '/war-img/cmdr/hooker.jpg' },
  { name: 'G. Granger', role: 'IV Corps, Union', side: 'U', img: '/war-img/cmdr/granger.jpg' },
  { name: 'T. J. Wood', role: 'Div., Union', side: 'U', img: '/war-img/cmdr/wood.jpg' },
  { name: 'B. Bragg', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/bragg.jpg' },
  { name: 'P. Cleburne', role: 'Div., CSA', side: 'C', img: '/war-img/cmdr/cleburne.jpg' },
  { name: 'J. C. Breckinridge', role: 'Center, CSA', side: 'C', img: '/war-img/cmdr/breckinridge.jpg' },
]
const SECTIONS = [
  { id: 'the-siege', eyebrow: 'Late November 1863', title: 'A City the South Couldn’t Lose', blurb: 'Grant (North) arrives to break the siege of Chattanooga; Bragg’s (South) army sits on the heights, holding the rail gateway to the Deep South.' },
  { id: 'the-plan', eyebrow: 'November 25 · the design', title: 'Sherman Stalls, Hooker Lags', blurb: 'Sherman (North) is the hammer at the north end — but bad maps and Cleburne (South) stop him cold, while Hooker (North) lags in the south.' },
  { id: 'the-order', eyebrow: 'Half past three', title: 'Take the Rifle Pits — and Stop?', blurb: 'Grant (North) sends Thomas’s men at the base rifle pits as a diversion — pinning them under fire from the crest, in the worst place on the field.' },
  { id: 'the-charge', eyebrow: 'The miracle', title: '“Who Ordered Those Men Up the Ridge?”', blurb: 'The Army of the Cumberland climbs without orders, shouting “Chickamauga!”, and shatters Bragg’s (South) badly-sited center.' },
  { id: 'the-meaning', eyebrow: 'The cost & the meaning', title: 'The Gateway Thrown Open', blurb: 'Bragg (South) loses his army and his command; the door to Atlanta and the slave South swings open; Grant (North) goes east to win the war.' },
]
const TL_META: Record<string, { size: CardSize; date: string; palette: [string, string, string] }> = {
  'the-siege': { size: 'l', date: 'Nov 23', palette: ['#3a4a2a', '#283420', '#0a0e08'] },
  'the-plan': { size: 'l', date: 'Nov 25', palette: ['#1d3a5a', '#16283a', '#080c12'] },
  'the-order': { size: 'm', date: '3:30 pm', palette: ['#3a2e21', '#2a221c', '#0a0806'] },
  'the-charge': { size: 'xl', date: '5 pm', palette: ['#7a1422', '#3a1208', '#0a0606'] },
  'the-meaning': { size: 'm', date: 'After', palette: ['#3a2e21', '#2a221c', '#0a0806'] },
}
const SECTION_IMG: Record<string, string> = {
  'the-siege': '/war-img/missionary-ridge-overview.png',
  'the-plan': '/war-img/missionary-ridge-flanks.png',
  'the-order': '/war-img/cmdr/thomas.jpg',
  'the-charge': '/war-img/missionary-ridge.png',
  'the-meaning': '/war-img/cmdr/grant.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/western/missionary-ridge/s/${id}`
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
        <Eyebrow color="#9ec1f5">Battle · Western Theatre</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Missionary Ridge</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>November 25, 1863 · Chattanooga, Tennessee</div>
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
        <span><span style={{ color: ACCENTS.rust }}>■</span> Confederacy ~{num(CAS.csa)}</span>
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
            {([['Duration', '1 day'], ['Casualties', '~12,500'], ['Winner', 'Union']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Decisive Union victory · the gateway to the Deep South thrown open</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Grant meant Thomas’s men only to feint at the base of Missionary Ridge while Sherman delivered the real blow in the north. Sherman, misled by bad maps onto the wrong hill, stalled; Hooker lagged; and the diversion took over. Stung by their defeat at Chickamauga and pinned under fire at the bottom of the ridge, the Army of the Cumberland charged straight up the slope without orders and shattered Bragg’s badly-sited, self-weakened center, routing his army out of Tennessee. The siege of Chattanooga was lifted for good, the gateway to Atlanta and the slaveholding Deep South thrown open, and Grant — three months later — was made general-in-chief of all Union armies.
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

export default function MissionaryRidgePage() {
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
              A diversion that, against orders, stormed a fortified ridge and routed a veteran army — “the miracle on Missionary Ridge.”
            </p>
            <CordTimeline>
              {SECTIONS.map(s => {
                const m = TL_META[s.id]
                return <BattleCard key={s.id} size={m.size} accent={ACCENT} dateTop={m.date} palette={m.palette} imageUrl={SECTION_IMG[s.id]} title={s.title} sub={s.eyebrow} hook={s.blurb} href={sectionHref(s.id)} />
              })}
            </CordTimeline>
          </div>
        )}
      </div>
    </div>
  )
}
