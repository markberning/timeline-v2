'use client'

// BATTLE dossier (Battle of Perryville). Same shape as Shiloh/Stones River: hero · collapsible
// At-a-glance (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.blue
const CRUMBS = civilWarCrumbs({ theatre: 'west', battleId: 'w-perryville' })

const HERO_IMG = '/war-img/perryville-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Army of the Ohio', size: '~22,000 engaged', commander: 'Buell', note: 'A huge army in the area, but most of it never heard the battle, let alone fought it.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of the Mississippi', size: '~16,000 engaged', commander: 'Bragg', note: 'Bloodied a force several times its size, won the field, and walked away from the state.', color: ACCENTS.rust },
]
const CAS = { union: 4211, csa: 3396 }
const FIGURES = [
  { name: 'Don Carlos Buell', role: 'Cmdr., Ohio', side: 'U', img: '/war-img/cmdr/buell.jpg', blurb: 'Buell tricked Bragg with a strong feint toward Frankfort, then concentrated his far larger army around Perryville and meant to attack on October 8. An acoustic shadow kept the sound of the fighting from his headquarters two miles off, so he fed in almost no reserves while one of his corps was torn apart, and he was relieved of command soon after for the half-fought battle and the escape it allowed.' },
  { name: 'Alexander McD. McCook', role: 'I Corps, Union', side: 'U', img: '/war-img/cmdr/mccook.jpg', blurb: 'McCook’s I Corps held the Union left and absorbed nearly the whole Confederate assault, the part of the field where the day’s killing was concentrated. He sent aides begging for help that came late and thin, his line buckling at Open Knob before a rear ridge finally held.' },
  { name: 'Philip H. Sheridan', role: 'Div., Union', side: 'U', img: '/war-img/cmdr/sheridan.jpg', blurb: 'Sheridan seized Peters Hill west of town at dawn, then was ordered by his corps commander to pull back and avoid a general engagement. Late in the afternoon his division threw back a Confederate lunge on the Springfield Pike, but he stayed out of the fight raging just to his north.' },
  { name: 'Braxton Bragg', role: 'Cmdr., Mississippi', side: 'C', img: '/war-img/cmdr/bragg.jpg', blurb: 'Bragg led the invasion of Kentucky to flip a loyal slave state, then misread Buell’s feint and threw only about sixteen thousand men against a corner of a much larger army. He held the field at dusk, but that night he read the closing trap, abandoned nine hundred wounded, and withdrew, giving up the state his victory was meant to win.' },
  { name: 'Leonidas Polk', role: 'Right Wing, CSA', side: 'C', img: '/war-img/cmdr/polk.jpg', blurb: 'Polk directed the right wing and sent Cheatham’s division rolling against the Union left in the en-echelon attack that decided the day. In the failing light he blundered into the 22nd Indiana and, by the much-repeated story, bluffed his way clear by posing as a Union officer before calling off the assault.' },
  { name: 'William J. Hardee', role: 'Left Wing, CSA', side: 'C', img: '/war-img/cmdr/hardee.jpg', blurb: 'Hardee commanded the Confederate left wing, holding the roads into town from the north and west and feeding his divisions into the afternoon assaults on McCook’s corps. A noted authority on infantry tactics, he managed the part of the line that pressed the Union center while the heavier blow fell to the north.' },
  { name: 'Benjamin F. Cheatham', role: 'Div., CSA', side: 'C', img: '/war-img/cmdr/cheatham.jpg', blurb: 'Cheatham’s division opened the bombardment around half past noon and led the main Confederate assault against the Union left. His brigades, including Maney’s, charged Open Knob again and again until they overran the guns, the bloodiest action of the battle.' },
]
const SECTIONS = [
  { id: 'the-invasion', eyebrow: 'The Kentucky gamble', title: 'Bragg’s Bid for a Slave State', blurb: 'Bragg (South) marches north to flip a loyal slave state, hauling 20,000 spare rifles for recruits who never come.' },
  { id: 'the-fight-for-water', eyebrow: 'Doctor’s Creek, Oct 6–8', title: 'A Battle That Began at the Creek', blurb: 'In a drought, men shoot each other over the right to drink; Buell (North) feints toward Frankfort and tricks Bragg into looking the wrong way.' },
  { id: 'the-acoustic-shadow', eyebrow: 'Afternoon, October 8', title: 'The Battle Buell Never Heard', blurb: 'A trick of the air muffles the roar two miles off; Buell (North) sleeps through it while one corps is torn apart on Open Knob.' },
  { id: 'the-victory-and-the-retreat', eyebrow: 'Dusk & the night march', title: 'Winning the Field, Losing the State', blurb: 'Bragg (South) holds the ground at dark, then reads the trap closing, abandons 900 wounded, and gives up Kentucky.' },
  { id: 'the-reckoning', eyebrow: 'The cost & the meaning', title: 'The Bloodiest Afternoon for the Smallest Fight', blurb: '~7,600 fall in one afternoon, one in five engaged. The slave state Bragg came to claim stays in the Union for good.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-invasion': '/war-img/cmdr/bragg.jpg',
  'the-fight-for-water': '/war-img/perryville-overview.png',
  'the-acoustic-shadow': '/war-img/perryville.png',
  'the-victory-and-the-retreat': '/war-img/cmdr/buell.jpg',
  'the-reckoning': '/war-img/cmdr/sheridan.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/western/perryville/s/${id}`
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
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Perryville</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>October 8, 1862 · Perryville, Kentucky</div>
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
            {([['Duration', '1 day'], ['Casualties', '~7,600'], ['Winner', 'Union (strategic)']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Tactical Confederate win · strategic Union victory</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Bragg had marched into Kentucky to flip a loyal slave state into the Confederacy. With only ~16,000 men he bloodied a far larger Union army and held the field at dusk, a battle his own commanding general slept through, two miles off, in an acoustic shadow that kept most of the North’s strength out of the fight. But that night Bragg read the trap closing, abandoned 900 of his wounded, and withdrew. The victory was the retreat it forced, not the ground it gave up: the Kentucky campaign was over, the slave state stayed in the Union for good, and emancipation moved from threat toward law.
        </p>
      </div>
    </div>
  )
}

function CommandersStrip() {
  return (
    <div style={{ padding: '14px 16px' }}>
      <Eyebrow color={ACCENT}>Commanders</Eyebrow>
      <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {FIGURES.map(f => {
          const ring = f.side === 'U' ? ACCENTS.blue : ACCENTS.rust
          return (
            <div key={f.name} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 54, height: 54, borderRadius: 999, overflow: 'hidden', background: 'linear-gradient(135deg, #3a2e21, #1c1814)', border: `2px solid ${ring}`, boxShadow: `0 0 0 2px var(--background)` }}>
                {f.img && <img src={f.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 22%' }} />}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 7, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 500, letterSpacing: -0.2 }}>{f.name}</span>
                  <span style={{ fontFamily: SANS, fontSize: 8.5, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color: ring }}>{f.role}</span>
                </div>
                <p style={{ margin: '4px 0 0', fontFamily: SERIF, fontSize: 13, lineHeight: 1.5, color: 'color-mix(in srgb, var(--foreground) 76%, transparent)' }}>{f.blurb}</p>
              </div>
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

export default function PerryvillePage() {
  const secTop = { scrollMarginTop: CHROME_TOP + 46 }
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarBreadcrumb crumbs={CRUMBS} accent={ACCENT} />
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <WarSectionNav accent={ACCENT} items={[
          { id: 'sec-glance', label: 'At a glance' },
          { id: 'sec-commanders', label: 'Commanders' },
          { id: 'sec-outcome', label: 'Outcome' },
          { id: 'sec-narrative', label: 'Narrative' },
        ]} />
        <HeroImg />
        <div id="sec-glance" style={secTop}><AtAGlance /></div>
        <div id="sec-commanders" style={secTop}><CommandersStrip /></div>
        <div id="sec-outcome" style={secTop}><OutcomePill /></div>
        <div id="sec-narrative" style={secTop}><SectionsList /></div>
      </div>
    </div>
  )
}
