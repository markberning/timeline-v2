'use client'

// BATTLE dossier (Battle of Spotsylvania Court House). Same shape as Shiloh: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.violet
const CRUMBS = civilWarCrumbs({ theatre: 'east', battleId: 'e-spotsylvania' })

const HERO_IMG = '/war-img/spotsylvania-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Army of the Potomac', size: '~100,000 troops', commander: 'Grant & Meade', note: 'Would not go home: attacked, was bled, slid southeast, and tried again.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of Northern Virginia', size: '~50,000–60,000 troops', commander: 'Lee', note: 'Won the race to the crossroads and dug a fortress it could not afford to lose.', color: ACCENTS.rust },
]
const CAS = { union: 18000, csa: 12500 }
const FIGURES = [
  { name: 'Ulysses S. Grant', role: 'Gen.-in-Chief, Union', side: 'U', img: '/war-img/cmdr/grant.jpg', blurb: 'As general-in-chief Grant rode with the Army of the Potomac and ran the campaign himself, and after the bloody draw in the Wilderness he turned the army southeast toward Spotsylvania rather than retreating north. For two weeks he attacked Lee’s works, was repulsed, and slid southeast to try again, telling Washington he meant to fight it out on this line if it took all summer.' },
  { name: 'George G. Meade', role: 'Army of the Potomac', side: 'U', img: '/war-img/cmdr/meade.jpg', blurb: 'Meade remained the actual commander of the Army of the Potomac while Grant set the strategy, and he passed the attack orders down to the corps. It was Meade who told Warren to throw his V Corps at Laurel Hill once more on May 12, at all hazards, while the Mule Shoe bled.' },
  { name: 'Winfield S. Hancock', role: 'II Corps, Union', side: 'U', img: '/war-img/cmdr/hancock.jpg', blurb: 'Hancock led the predawn assault of May 12, sending his entire II Corps in a massive column straight at the apex of the Mule Shoe. His men overran the salient and captured most of a Confederate division, opening the breach that triggered twenty hours of fighting at the Bloody Angle.' },
  { name: 'John Sedgwick', role: 'VI Corps, Union †', side: 'U', img: '/war-img/cmdr/sedgwick.jpg', blurb: 'Sedgwick, the beloved "Uncle John" of the army, brought his VI Corps up to help batter Laurel Hill on May 8. The next morning, while siting artillery near the front, he was killed by a Confederate sharpshooter moments after telling his flinching men the enemy could not hit an elephant at that distance.' },
  { name: 'Emory Upton', role: 'Col., Union', side: 'U', img: '/war-img/cmdr/upton.jpg', blurb: 'On May 10 the young colonel tried a new tactic against the west face of the salient: twelve regiments packed in a deep column, charging without stopping to fire. It broke clean through Lee’s line before the unsupported attack had to be given back, and Grant, impressed, promoted Upton on the spot and scaled the idea up for the May 12 assault.' },
  { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/lee.jpg', blurb: 'Lee read Grant’s move at once and won the race to the crossroads, then dug the long Mule Shoe salient to hold the high ground. His mistaken order pulling the artillery out of the salient the night before May 12 left its apex nearly defenseless, and when the breach was torn open he rode forward to lead the counterattack himself until his soldiers turned him back.' },
  { name: 'Richard S. Ewell', role: 'Second Corps, CSA', side: 'C', img: '/war-img/cmdr/ewell.jpg', blurb: 'Ewell’s Second Corps dug and held the Mule Shoe, the bulging salient whose apex Hancock overran on May 12. After the works were rebuilt across the base of the horseshoe, his corps threw back Hancock’s renewed assault on the old ground on May 18.' },
  { name: 'Richard H. Anderson', role: 'First Corps, CSA', side: 'C', img: '/war-img/cmdr/anderson.jpg', blurb: 'Newly handed the First Corps after Longstreet was shot in the Wilderness, Anderson marched his infantry through the night and won the race to Laurel Hill by minutes. His men were already throwing up dirt on the high ground when the Federals arrived, setting the defensive shape of the whole battle.' },
  { name: 'J.E.B. Stuart', role: 'Cavalry, CSA †', side: 'C', img: '/war-img/cmdr/stuart.jpg', blurb: 'Stuart’s cavalry fought to delay the Union advance toward the crossroads, then chased Sheridan’s raiding column when it rode off toward Richmond. On May 11 he was mortally wounded at Yellow Tavern and died in Richmond the next day, costing Lee the cavalry chief who had been the army’s eyes for three years.' },
]
const SECTIONS = [
  { id: 'the-race', eyebrow: 'May 7–8 · A foot-race for a crossroads', title: 'Why Grant Didn’t Go Home', blurb: 'Grant marches southeast instead of retreating; Anderson’s (South) corps wins the race to the Laurel Hill crossroads by minutes.' },
  { id: 'laurel-hill', eyebrow: 'May 8–9 · The line goes in', title: 'Spades, and a Sharpshooter', blurb: 'The Confederates dig four miles of works Warren (North) can’t crack; Sedgwick (North) is killed by a sniper moments after mocking the danger.' },
  { id: 'the-mule-shoe', eyebrow: 'May 10–11 · The fatal geometry', title: 'Upton’s Column and the Mule Shoe', blurb: 'A salient bulges north into a death-trap; Upton (North) cracks it with a fast dense column, and Lee pulls his guns the night before the big assault.' },
  { id: 'the-bloody-angle', eyebrow: 'May 12 · Twenty hours in the rain', title: 'The Bloody Angle', blurb: 'Hancock (North) overruns the apex and captures a division; then twenty hours of the war’s worst hand-to-hand fighting along one log parapet.' },
  { id: 'the-23rd', eyebrow: 'May 13–21 · The army that came back in blue', title: 'The Crossroads Was the Object', blurb: 'Grant slides south again as the arithmetic turns; at the Alrich Farm, formerly enslaved men of the 23rd USCT charge Lee’s army on the soil they’d fled.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-race': '/war-img/spotsylvania-overview.png',
  'laurel-hill': '/war-img/cmdr/sedgwick.jpg',
  'the-mule-shoe': '/war-img/spotsylvania-mule-shoe.png',
  'the-bloody-angle': '/war-img/spotsylvania-bloody-angle.png',
  'the-23rd': '/war-img/cmdr/grant.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/eastern/spotsylvania/s/${id}`
const num = (n: number) => n.toLocaleString('en-US')

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{children}</div>
}

function HeroImg() {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
      {failed
        ? <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #2a2440, #1d1830 55%, #0a0812)' }} />
        : <img src={HERO_IMG} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
        <Eyebrow color="#c4b5fd">Battle · Eastern Theatre</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Spotsylvania Court House</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>May 8–21, 1864 · Spotsylvania County, Virginia</div>
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
        <span><span style={{ color: ACCENTS.rust }}>■</span> Confederacy ~12,000–13,000</span>
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
            {([['Duration', '~2 weeks'], ['Casualties', '~30,000'], ['Result', 'Draw']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Tactical draw · a strategic disaster for the South</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          For two weeks Grant attacked Lee’s entrenchments, was bloodily repulsed, and slid southeast to try again: the template of the whole Overland Campaign. Both sides claimed Spotsylvania, but it proved the new arithmetic. Grant could replace his ~18,000 casualties and Lee could not replace his ~12,000–13,000. Lee’s army would never again take the strategic offensive in the East. The road from this crossroads ran through Cold Harbor to the Petersburg trenches, where the war ground to its end.
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

export default function SpotsylvaniaPage() {
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
