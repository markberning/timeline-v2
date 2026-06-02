'use client'

// BATTLE dossier (Battle of Shiloh). Same shape as Antietam: hero · collapsible At-a-glance
// (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.blue
const CRUMBS = civilWarCrumbs({ theatre: 'west', battleId: 'w-shiloh' })

const HERO_IMG = '/war-img/shiloh-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Armies of the Tennessee & Ohio', size: '~66,000 troops', commander: 'Grant & Buell', note: 'Caught unentrenched at dawn, saved by the river and the night.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of the Mississippi', size: '~44,000 troops', commander: 'A.S. Johnston, then Beauregard', note: 'Attacked first and nearly won, until their commander bled to death.', color: ACCENTS.rust },
]
const CAS = { union: 13047, csa: 10699 }
const FIGURES = [
  { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/grant.jpg', blurb: 'Caught with his army unentrenched and scattered in its camps, Grant reached Pittsburg Landing mid-morning to find the first day going badly and steadied the broken line by the river at dusk. He refused to retreat across the Tennessee, attacked at first light on April 7 with the fresh men who had crossed overnight, and drove the Confederates off the field.' },
  { name: 'William T. Sherman', role: 'Div., Union', side: 'U', img: '/war-img/cmdr/sherman.jpg', blurb: 'Commanding the division nearest Shiloh Church, Sherman took the leading edge of the dawn attack, was wounded twice and had three horses shot under him while rallying his men. His stubborn fighting retreat slowed the Confederate advance and bought the army the time it needed to survive the first day.' },
  { name: 'Don Carlos Buell', role: 'Army of the Ohio', side: 'U', img: '/war-img/cmdr/buell.jpg', blurb: 'Buell’s Army of the Ohio, marching to link up with Grant, reached the river the evening of April 6 and ferried roughly 18,000 fresh men across overnight. His divisions led the counterattack at dawn on April 7 that turned the second day into a Union victory.' },
  { name: 'Benjamin Prentiss', role: 'Div., Union', side: 'U', img: '/war-img/cmdr/prentiss.jpg', blurb: 'Prentiss held the center along the farm lane that became known as the Hornet’s Nest, beating back charge after charge for most of the afternoon. Surrounded at last by massed artillery and infantry, he and roughly 2,200 men surrendered near dusk, the largest Union capitulation of the day.' },
  { name: 'Albert Sidney Johnston', role: 'Cmdr., CSA †', side: 'C', img: '/war-img/cmdr/as-johnston.jpg', blurb: 'The senior Confederate commander in the West, Johnston marched his army out of Corinth to surprise Grant and nearly destroyed him on the first day. Leading an attack near the Peach Orchard in the afternoon, he was shot behind the knee and bled to death, the highest-ranking officer on either side killed in combat in the war.' },
  { name: 'P.G.T. Beauregard', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/beauregard.jpg', blurb: 'Johnston’s second-in-command, Beauregard took over when Johnston was killed and halted the attacks at dusk, certain he would finish Grant in the morning, even wiring Richmond that he had won a complete victory. Outnumbered by the reinforcements that crossed overnight, he was driven back the next day and retreated to Corinth.' },
  { name: 'Braxton Bragg', role: 'Corps, CSA', side: 'C', img: '/war-img/cmdr/bragg.jpg', blurb: 'Bragg commanded one of the Confederate corps and threw brigade after brigade at the Hornet’s Nest in piecemeal frontal attacks that were shredded against the line. His refusal to flank the position instead of charging it head-on cost the Confederates heavily in time and blood.' },
  { name: 'Nathan Bedford Forrest', role: 'Cavalry, CSA', side: 'C', img: '/war-img/cmdr/forrest.jpg', blurb: 'Forrest scouted the river himself the night of April 6 and saw Buell’s reinforcements crossing, a warning his superiors ignored. Covering the retreat on April 8, he ambushed the pursuing Union force at Fallen Timbers and, riding too far in, was shot at close range but galloped out alive.' },
]
const SECTIONS = [
  { id: 'the-surprise', eyebrow: 'Dawn, April 6', title: 'The Surprise at Pittsburg Landing', blurb: 'Grant’s unentrenched army is overrun at dawn; Sherman makes a stand as the camps fall.' },
  { id: 'the-hornets-nest', eyebrow: 'The center holds', title: 'The Hornet’s Nest', blurb: 'Prentiss (North) holds a sunken lane for six hours; Johnston (South) bleeds to death; the line clings to the river by dusk.' },
  { id: 'the-second-day', eyebrow: 'April 7', title: 'Buell Arrives', blurb: 'Fresh divisions cross the river overnight and the Union counterattacks, driving the Confederates back to Corinth.' },
  { id: 'the-reckoning', eyebrow: 'The cost & the meaning', title: 'The Bloodiest Day Yet', blurb: '~23,700 fall in two days. The short-war illusion dies in the West; Grant is blamed, then vindicated.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-surprise': '/war-img/shiloh.png',
  'the-hornets-nest': '/war-img/shiloh-hornets-nest.png',
  'the-second-day': '/war-img/shiloh-day2.png',
  'the-reckoning': '/war-img/cmdr/grant.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/western/shiloh/s/${id}`
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
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Shiloh</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>April 6–7, 1862 · Pittsburg Landing, Tennessee</div>
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
            {([['Duration', '2 days'], ['Casualties', '~23,700'], ['Winner', 'Union']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Union victory · the war turns total</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          A Confederate surprise nearly destroyed Grant’s army on the first day, but the line held by the river at nightfall, and fresh troops under Buell turned the second day into a counterattack that drove the enemy back to Corinth. The cost stunned the country: more men fell in two days than in all the war’s earlier battles combined, killing forever the idea of a short, bloodless war in the West. Grant, blamed and nearly relieved, survived to take Vicksburg the next year and, in the end, the whole Confederacy.
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

export default function ShilohPage() {
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
