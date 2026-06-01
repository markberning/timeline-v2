'use client'

// BATTLE dossier (Second Battle of Bull Run / Second Manassas). Same shape as Shiloh &
// Stones River: hero · collapsible At-a-glance (stat strip + armies face-off + casualties) ·
// outcome card · commanders strip · numbered section list. Content via the war content
// pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarViewToggle, SANS, SERIF, ACCENTS, alpha, useWarView } from '@/components/mode/war-chrome'
import { BattleCard, CordTimeline, type CardSize } from '@/components/mode/war-battle-card'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.violet
const CRUMBS = civilWarCrumbs({ theatre: 'east', battleId: 'e-bullrun2' })

const HERO_IMG = '/war-img/second-bull-run-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Army of Virginia', size: '~65,000 troops', commander: 'Pope', note: 'A brand-new army under a boastful stranger — marched onto ground it had bled for once already.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of Northern Virginia', size: '~50,000 troops', commander: 'Lee', note: 'Split in two, marched fifty miles, and reunited on the field to spring the trap.', color: ACCENTS.rust },
]
const CAS = { union: 14462, csa: 8400 }
const FIGURES = [
  { name: 'John Pope', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/pope.jpg' },
  { name: 'I. McDowell', role: 'Corps, Union', side: 'U', img: '/war-img/cmdr/mcdowell.jpg' },
  { name: 'F. Sigel', role: 'Corps, Union', side: 'U', img: '/war-img/cmdr/sigel.jpg' },
  { name: 'F. J. Porter', role: 'Corps, Union', side: 'U', img: '/war-img/cmdr/fj-porter.jpg' },
  { name: 'R. E. Lee', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/lee.jpg' },
  { name: '"Stonewall" Jackson', role: 'Wing, CSA', side: 'C', img: '/war-img/cmdr/jackson.jpg' },
  { name: 'J. Longstreet', role: 'Wing, CSA', side: 'C', img: '/war-img/cmdr/longstreet.jpg' },
  { name: 'J.E.B. Stuart', role: 'Cavalry, CSA', side: 'C', img: '/war-img/cmdr/stuart.jpg' },
]
const SECTIONS = [
  { id: 'same-ground-again', eyebrow: 'The second time on the same field', title: 'A New Army, an Old Battlefield', blurb: 'Lincoln (North) builds a new army under Pope (North); Lee (South) shifts north to wreck it — on the exact ground of the first battle.' },
  { id: 'the-long-march', eyebrow: 'Fifty miles around the back', title: 'Jackson Burns the Supply Depot', blurb: 'Jackson (South) marches fifty miles into Pope’s (North) rear, takes the great depot at Manassas Junction, feasts, and burns the rest.' },
  { id: 'the-railroad-cut', eyebrow: 'Throwing an army at a wall', title: 'The Wall Behind the Railroad', blurb: 'Pope (North) hurls divisions piecemeal at Jackson’s (South) dug-in line — while Longstreet’s (South) wing slips unseen onto the flank.' },
  { id: 'the-hammer-falls', eyebrow: 'Twenty-eight thousand men at once', title: 'Longstreet’s Avalanche', blurb: 'Longstreet (South) unleashes the war’s largest mass assault into the exposed Union left; rearguard stands buy the army its escape.' },
  { id: 'the-road-to-antietam', eyebrow: 'The defeat that set up emancipation', title: 'What the Victory Unleashed', blurb: '~22,000 fall. Pope (North) is finished; Porter (North) is scapegoated — and the defeat opens the road to Antietam and emancipation.' },
]
const TL_META: Record<string, { size: CardSize; date: string; palette: [string, string, string] }> = {
  'same-ground-again': { size: 'l', date: 'Aug 25', palette: ['#3a4a2a', '#283420', '#0a0e08'] },
  'the-long-march': { size: 'l', date: 'Aug 27', palette: ['#3a2e21', '#2a221c', '#0a0806'] },
  'the-railroad-cut': { size: 'xl', date: 'Aug 29', palette: ['#7a1422', '#3a1208', '#0a0606'] },
  'the-hammer-falls': { size: 'xl', date: 'Aug 30', palette: ['#7a1422', '#3a1208', '#0a0606'] },
  'the-road-to-antietam': { size: 'm', date: 'After', palette: ['#1d3a5a', '#16283a', '#080c12'] },
}
const SECTION_IMG: Record<string, string> = {
  'same-ground-again': '/war-img/cmdr/pope.jpg',
  'the-long-march': '/war-img/second-bull-run-campaign.png',
  'the-railroad-cut': '/war-img/second-bull-run.png',
  'the-hammer-falls': '/war-img/second-bull-run-longstreet.png',
  'the-road-to-antietam': '/war-img/cmdr/lee.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/eastern/second-bull-run/s/${id}`
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
        <Eyebrow color="#c4b5fd">Battle · Eastern Theatre</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Second Bull Run</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>August 28–30, 1862 · Manassas, Virginia</div>
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
            {([['Duration', '3 days'], ['Casualties', '~22,000'], ['Winner', 'Confederacy']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Confederate victory · the road to Antietam opens</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Lee split his army, sent Jackson on a fifty-mile march to burn Pope’s supply depot at Manassas Junction, then reunited his wings on the field and crushed the Union left with Longstreet’s massive August-30 assault. The Union army was driven back to the Washington defenses at a cost of roughly 22,000 combined casualties. The victory emboldened Lee to invade the North — leading straight to Antietam, after which Lincoln issued the Preliminary Emancipation Proclamation, turning the war into a war against slavery. The forgotten defeat that set the whole sequence in motion.
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

export default function SecondBullRunPage() {
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
              The forgotten defeat fought on the old battlefield — the first domino on the road to emancipation.
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
