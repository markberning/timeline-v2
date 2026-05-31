'use client'

// BATTLE dossier (Battle of Nashville). Same shape as Shiloh/Antietam: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarViewToggle, SANS, SERIF, ACCENTS, alpha, useWarView } from '@/components/mode/war-chrome'
import { BattleCard, CordTimeline, type CardSize } from '@/components/mode/war-battle-card'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.blue
const CRUMBS = civilWarCrumbs({ theatre: 'west', battleId: 'w-nashville' })

const HERO_IMG = '/war-img/nashville-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Army of the Cumberland (+ detachments)', size: '~55,000 troops', commander: 'Thomas', note: 'The deliberate Virginian his own superiors had a replacement riding toward — then he won the most complete victory of the war.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of Tennessee', size: 'outnumbered ~2-to-1', commander: 'Hood', note: 'The wreck of Franklin, dug in outside a fortress city — too weak to attack, too proud to run.', color: ACCENTS.rust },
]
const CAS = { union: 3000, csa: 6000 }
const FIGURES = [
  { name: 'G. H. Thomas', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/thomas.jpg' },
  { name: 'J. M. Schofield', role: 'XXIII Corps, Union', side: 'U', img: '/war-img/cmdr/schofield.jpg' },
  { name: 'J. B. Steedman', role: 'USCT assault, Union', side: 'U', img: '/war-img/cmdr/steedman.jpg' },
  { name: 'J. H. Wilson', role: 'Cavalry, Union', side: 'U', img: '/war-img/cmdr/jh-wilson.jpg' },
  { name: 'T. J. Wood', role: 'IV Corps, Union', side: 'U', img: '/war-img/cmdr/wood.jpg' },
  { name: 'J. B. Hood', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/hood.jpg' },
  { name: 'A. P. Stewart', role: 'Corps (left), CSA', side: 'C', img: '/war-img/cmdr/ap-stewart.jpg' },
  { name: 'B. F. Cheatham', role: 'Corps (right), CSA', side: 'C', img: '/war-img/cmdr/cheatham.jpg' },
  { name: 'S. D. Lee', role: 'Corps (center), CSA', side: 'C', img: '/war-img/cmdr/sd-lee.jpg' },
  { name: 'N. B. Forrest', role: 'Cavalry, CSA (absent)', side: 'C', img: '/war-img/cmdr/forrest.jpg' },
]
const SECTIONS = [
  { id: 'the-standoff', eyebrow: 'Nashville', title: 'An army too weak to attack, too proud to run', blurb: 'Hood (South), his army wrecked at Franklin, digs a thin line outside a fortress city he cannot take — and waits for Thomas (North) to come out.' },
  { id: 'the-sledgehammer-telegrams', eyebrow: 'December 8–14', title: 'The general everyone wanted to fire', blurb: 'An ice storm freezes Thomas (North) in place while Grant (North) sends Logan (North) to relieve him — and the most decisive victory of the war is about to be won by a man already half-fired.' },
  { id: 'the-right-wheel', eyebrow: 'December 15', title: 'The door swings shut on Hood’s left', blurb: 'Steedman’s (North) feint pins Hood’s right while Wilson’s cavalry (North) and Smith’s (North) infantry wheel down onto Stewart’s (South) flank, overrunning five redoubts in sequence.' },
  { id: 'overton-hill', eyebrow: 'December 16', title: 'The hill the freedmen charged', blurb: 'Steedman’s (North) U.S. Colored Troops assault the strongest works on the field, the 13th USCT taking the battle’s heaviest loss — and winning even Holtzclaw’s (South) acknowledgment.' },
  { id: 'the-army-destroyed', eyebrow: 'December 16 evening', title: 'The line rolled up west to east', blurb: 'Shy’s Hill falls, Stewart’s (South) flank disintegrates, and the last Confederate field army in the West dissolves into rout — saved from total ruin only by Forrest’s (South) rearguard.' },
]
const TL_META: Record<string, { size: CardSize; date: string; palette: [string, string, string] }> = {
  'the-standoff': { size: 'l', date: 'Dec 8', palette: ['#3a2e21', '#2a221c', '#0a0806'] },
  'the-sledgehammer-telegrams': { size: 'm', date: 'Dec 14', palette: ['#1d3a5a', '#16283a', '#080c12'] },
  'the-right-wheel': { size: 'xl', date: 'Dec 15', palette: ['#1d3a5a', '#16283a', '#080c12'] },
  'overton-hill': { size: 'xl', date: 'Dec 16', palette: ['#7a1422', '#3a1208', '#0a0606'] },
  'the-army-destroyed': { size: 'l', date: 'Dusk', palette: ['#3a4a2a', '#283420', '#0a0e08'] },
}
const SECTION_IMG: Record<string, string> = {
  'the-standoff': '/war-img/nashville-overview.png',
  'the-sledgehammer-telegrams': '/war-img/cmdr/thomas.jpg',
  'the-right-wheel': '/war-img/nashville-december-15.png',
  'overton-hill': '/war-img/nashville-december-16.png',
  'the-army-destroyed': '/war-img/cmdr/hood.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/western/nashville/s/${id}`
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
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Nashville</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>December 15–16, 1864 · Nashville, Tennessee</div>
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
        <span><span style={{ color: ACCENTS.rust }}>■</span> Confederacy ~{num(CAS.csa)} (mostly captured)</span>
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
            {([['Duration', '2 days'], ['Casualties', '~9,000'], ['Winner', 'Union']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Decisive Union victory · the last western army erased</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Over two days Thomas’s grand right wheel collapsed Hood’s left, and on December 16 the line broke and the Army of Tennessee dissolved into one of the most complete routs of the war — about 6,000 lost, the bulk of them prisoners. It was one of the few times a whole field army was not merely beaten but destroyed, done in part by the U.S. Colored Troops who charged Overton Hill. Hood resigned within weeks, and the West was decided.
        </p>
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
              <div style={{ width: 52, height: 52, margin: '0 auto', borderRadius: 999, overflow: 'hidden', background: 'linear-gradient(135deg, #3a2e21, #1c1814)', border: `2px solid ${ring}`, boxShadow: `0 0 0 2px var(--background)` }}>
                {f.img && <img src={f.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 22%' }} />}
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

export default function NashvillePage() {
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
              The battle that didn’t just beat the Army of Tennessee — it ended it.
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
