'use client'

// BATTLE dossier (Five Forks). Same shape as Antietam: hero · collapsible
// At-a-glance (stat strip + armies face-off + casualties bar) · outcome pill ·
// commanders strip · numbered section list. Timeline view: hero + hook + cards.
// Content produced through the war content pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, CIVIL_WAR_ACCENT as ACCENT, alpha } from '@/components/mode/war-chrome'
import { CommandersStrip } from '@/components/mode/commanders-strip'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const CRUMBS = civilWarCrumbs({ theatre: 'east', battleId: 'e-fiveforks' })

const HERO_IMG = '/war-img/five-forks-hero.jpg'
const HERO_PAL = ['#2a2417', '#43321e', '#0c0805']

const ARMIES = [
  { side: 'Union', label: 'Army of the Potomac (V Corps) & Cavalry', size: '~22,000', commander: 'Maj. Gen. Philip Sheridan', note: 'Hammered the bent-back left flank while the cavalry pinned the front.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Pickett’s detached command', size: '~10,000', commander: 'Maj. Gen. George E. Pickett', note: 'Hung out alone at the end of Lee’s line, with no reserves behind it.', color: ACCENTS.rust },
]
const CAS = { union: 830, csa: 3000, civ: 0 }
const FIGURES = [
  { name: 'Philip Sheridan', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/sheridan.jpg', blurb: 'Brought east after burning the Shenandoah Valley, Sheridan was handed the cavalry and an infantry corps and told to break Lee’s last railroad. When his attack drifted into empty woods, he rode straight into the lines, waving the battle flag and dragging the infantry back onto the enemy until the Confederate left caved in.' },
  { name: 'Gouverneur K. Warren', role: 'V Corps, Union', side: 'U', img: '/war-img/cmdr/warren.jpg', blurb: 'Warren’s V Corps infantry delivered the decisive blow against the bent-back Confederate left, though faulty maps sent two of his divisions wide of the angle first. In the hour of victory Sheridan relieved him for being too slow, a verdict a court of inquiry would overturn in 1882, after Warren was dead.' },
  { name: 'George Custer', role: 'Cavalry div., Union', side: 'U', img: '/war-img/cmdr/custer.jpg', blurb: 'Custer led a cavalry division on the far Union left, pressing the Confederate front dismounted so the defenders could not shift to meet the infantry hitting their flank. His troopers kept the pressure on through the collapse and rode hard in the pursuit that followed it to Appomattox.' },
  { name: 'George E. Pickett', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/pickett.jpg', blurb: 'Ordered by Lee to hold Five Forks at all costs, Pickett dug in along the White Oak Road, then rode a mile and a half to the rear for a shad bake and could not be reached when the Union attack came on. He galloped back through Federal troops to find his command already disintegrating, the same general whose division had been wrecked charging at Gettysburg.' },
  { name: 'Fitzhugh Lee', role: 'Cavalry, CSA', side: 'C', img: '/war-img/cmdr/fitzhugh-lee.jpg', blurb: 'Robert E. Lee’s nephew commanded the Confederate cavalry at Five Forks and shared the shad bake with Pickett well behind the line. With both senior commanders absent and unreachable, the defense fought leaderless through the opening of the assault and came apart.' },
]
const SECTIONS = [
  { id: 'crossroads', eyebrow: 'The last supply line', title: 'The crossroads that held Petersburg', blurb: 'Nine months of siege come down to one backwoods intersection. Cut the South Side Railroad here, and Petersburg falls.' },
  { id: 'dinwiddie', eyebrow: 'March 31', title: 'A wet fight in the woods', blurb: 'Rain turns the roads to soup. Pickett (South) drives Sheridan’s cavalry back, then realizes he has pushed too far and digs in at Five Forks.' },
  { id: 'shad-bake', eyebrow: 'The afternoon', title: 'The shad bake', blurb: 'Pickett (South) and Fitzhugh Lee (South) ride to the rear for a fish fry. An acoustic shadow swallows the sound of their own line being destroyed.' },
  { id: 'collapse', eyebrow: 'The assault', title: 'The line comes apart', blurb: 'Sheridan rides into the confusion and turns a near-miss into a rout. Then, in the hour of victory, he relieves Warren (North).' },
  { id: 'fall', eyebrow: 'What it meant', title: 'The week the war ended', blurb: 'Petersburg falls, Richmond burns, and a week later Lee surrenders at Appomattox. The blow that started the last week of the war.' },
]
const SECTION_IMG: Record<string, string> = {
  'crossroads': '/war-img/cmdr/sheridan.jpg',
  'dinwiddie': '/war-img/five-forks-dinwiddie.png',
  'shad-bake': '/war-img/cmdr/pickett.jpg',
  'collapse': '/war-img/five-forks-assault.png',
  'fall': '/war-img/cmdr/warren.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/eastern/five-forks/s/${id}`
const num = (n: number) => n.toLocaleString('en-US')

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{children}</div>
}

function HeroImg() {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
      {failed
        ? <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${HERO_PAL[0]}, ${HERO_PAL[1]} 55%, ${HERO_PAL[2]})` }} />
        : <img src={HERO_IMG} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%', transform: 'scale(1.18)', transformOrigin: 'center' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
        <Eyebrow color="#c4b5fd">Battle · Eastern Theatre</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Five Forks</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>April 1, 1865 · Dinwiddie County, Virginia</div>
      </div>
    </div>
  )
}

function CasualtiesBar() {
  const total = CAS.union + CAS.csa + CAS.civ
  const seg = (v: number, c: string) => <div style={{ width: `${(v / total) * 100}%`, background: c, height: '100%' }} />
  return (
    <div>
      <div style={{ display: 'flex', height: 10, borderRadius: 5, overflow: 'hidden', marginBottom: 8 }}>
        {seg(CAS.union, ACCENTS.blue)}{seg(CAS.csa, ACCENTS.rust)}
      </div>
      <div style={{ display: 'flex', gap: 16, fontFamily: SANS, fontSize: 11, color: 'color-mix(in srgb, var(--foreground) 65%, transparent)' }}>
        <span><span style={{ color: ACCENTS.blue }}>■</span> Union {num(CAS.union)}</span>
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
            {[['Duration', '1 day'], ['Casualties', '~3.8k'], ['Winner', 'Union']].map(([k, v], i) => (
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
                <div style={{ fontFamily: SANS, fontSize: 12.5, marginTop: 3 }}><strong style={{ fontWeight: 600 }}>{a.size}</strong> <span style={{ color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>troops</span></div>
                <div style={{ fontFamily: SANS, fontSize: 12, color: 'color-mix(in srgb, var(--foreground) 60%, transparent)', marginTop: 1 }}>{a.commander}</div>
                <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.4, color: 'color-mix(in srgb, var(--foreground) 60%, transparent)', marginTop: 5 }}>{a.note}</div>
              </div>
            ))}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', width: 26, height: 26, borderRadius: 999, background: 'var(--background)', border: '1px solid color-mix(in srgb, var(--foreground) 20%, transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SERIF, fontStyle: 'italic', fontSize: 12, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>vs</div>
          </div>
          <CasualtiesBar />
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Decisive Union victory · the fall of Petersburg begins</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          In a single afternoon Five Forks cracked open the position nine and a half months of siege could not. Sheridan’s attack wrecked Pickett’s detached command, taking close to 3,000 casualties out of about 10,000, most of them prisoners, and laid bare the last railroad into Petersburg. Grant ordered a general assault for the next dawn; the lines broke, and on April 2 and 3 the Confederates abandoned Petersburg and Richmond. A week later, run to ground at Appomattox, Robert E. Lee surrendered the Army of Northern Virginia.
        </p>
      </div>
    </div>
  )
}

function Thumb({ file, w, h }: { file: string; w: number; h: number }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ width: w, height: h, borderRadius: 6, overflow: 'hidden', flexShrink: 0, background: 'linear-gradient(135deg, #3a2e21, #1c1814)' }}>
      {!failed && <img src={file} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%', transform: 'scale(1.16)', transformOrigin: 'center' }} />}
    </div>
  )
}

function SectionsList() {
  return (
    <div style={{ padding: '6px 16px 40px' }}>
      <Eyebrow color={ACCENT}>The narrative · 5 sections</Eyebrow>
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

export default function FiveForksPage() {
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
        <div id="sec-commanders" style={secTop}><CommandersStrip figures={FIGURES} accent={ACCENT} /></div>
        <div id="sec-outcome" style={secTop}><OutcomePill /></div>
        <div id="sec-narrative" style={secTop}><SectionsList /></div>
      </div>
    </div>
  )
}
