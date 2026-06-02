'use client'

// BATTLE dossier (Third Petersburg — The Breakthrough). Same shape as Antietam:
// hero · collapsible At-a-glance (stat strip + armies face-off + casualties bar) ·
// outcome pill · commanders strip · numbered section list. Content produced
// through the war content pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, CIVIL_WAR_ACCENT as ACCENT, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const CRUMBS = civilWarCrumbs({ theatre: 'east', battleId: 'e-petersburg3' })

const HERO_IMG = '/war-img/third-petersburg-hero.jpg'
const HERO_PAL = ['#2a2018', '#4a2620', '#0c0605']

const ARMIES = [
  { side: 'Union', label: 'Armies of the Potomac & the James', size: '~63,000 engaged', commander: 'Lt. Gen. Ulysses S. Grant', note: 'Threw the whole line forward at once, so that wherever it cracked, fresh men poured through.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of Northern Virginia', size: '~18,000 engaged', commander: 'Gen. Robert E. Lee', note: 'Held a 30-mile front with a worn-out army, and had no reserve behind the point that broke.', color: ACCENTS.rust },
]
const CAS = { union: 3500, csa: 4250, civ: 0 }
const FIGURES = [
  { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/grant.jpg', blurb: 'When word came that Sheridan had broken the Confederate right at Five Forks, Grant did not wait for morning to plan: he ordered the entire Petersburg line assaulted at first light on April 2. The blow he had been building toward for nine months landed all along the front at once, cracked the siege open in twenty minutes, and put Lee’s army on the road at last.' },
  { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/lee.jpg', blurb: 'Holding more than 30 miles of works with a starving, shrinking army, Lee had no reserve behind the stretch the Sixth Corps hit and could only watch the line come apart. He bought a few hours with the doomed stand at Fort Gregg, told Jefferson Davis that Petersburg and Richmond must be given up, and pulled his army out into the open that night.' },
  { name: 'Horatio G. Wright', role: 'VI Corps, Union', side: 'U', img: '/war-img/cmdr/wright.jpg', blurb: 'Wright massed his Sixth Corps in a single deep wedge and sent it across the open ground in the dark at about 4:40 a.m., aimed at one point in the Confederate trenches. His men tore through and broke the line wide, then wheeled west and cut the South Side Railroad, the last open supply line into Petersburg.' },
  { name: 'A. P. Hill', role: 'Corps cmdr., CSA', side: 'C', img: '/war-img/cmdr/ap-hill.jpg', blurb: 'Hill held the stretch of line the Sixth Corps shattered, and when his front gave way he rode out with a single staff officer to rally his men. He met two soldiers of the 138th Pennsylvania in the broken ground, demanded their surrender, and was shot dead, the most senior commander either army lost that day.' },
  { name: 'John Gibbon', role: 'XXIV Corps, Union', side: 'U', img: '/war-img/cmdr/gibbon.jpg', blurb: 'Gibbon brought the Twenty-Fourth Corps of the Army of the James against Forts Gregg and Whitworth, the small earthworks shielding Petersburg’s inner line. His brigades hit Fort Gregg in repeated waves against a few hundred defenders, taking it only after some of the day’s bitterest hand-to-hand fighting.' },
  { name: 'John B. Gordon', role: 'Second Corps, CSA', side: 'C', img: '/war-img/cmdr/gordon.jpg', blurb: 'Gordon held the eastern end of the Petersburg line, where the Union Ninth Corps stormed the works around Fort Mahone in close, grinding fighting. He kept his front intact long enough to cover the army’s withdrawal, then pulled out with the rest that night and took the rear guard on the retreat west.' },
]
const SECTIONS = [
  { id: 'the-siege', eyebrow: 'The end of the siege', title: 'Nine months in the trenches', blurb: 'Grant pins Lee against Petersburg and Richmond for nine months, then breaks the Confederate right at Five Forks and orders the whole line forward.' },
  { id: 'the-breakthrough', eyebrow: 'Before dawn, April 2', title: 'The breakthrough', blurb: 'A signal gun at 4:40 a.m., the Sixth Corps tears through A. P. Hill’s line in twenty minutes, and Hill is killed riding to rally his men.' },
  { id: 'fort-gregg', eyebrow: 'Early afternoon', title: 'The stand at Fort Gregg', blurb: 'A few hundred defenders hold a small earthen fort against Gibbon’s corps for nearly two hours, buying Lee the daylight to get away.' },
  { id: 'fall-and-flight', eyebrow: 'That night and after', title: 'The fall and the flight', blurb: 'Lee abandons Petersburg and Richmond, the capital burns, and the Army of Northern Virginia takes the road west toward Appomattox.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-siege': '/war-img/third-petersburg-siege.jpg',
  'the-breakthrough': '/war-img/third-petersburg-breakthrough.jpg',
  'fort-gregg': '/war-img/third-petersburg-fort-gregg.jpg',
  'fall-and-flight': '/war-img/third-petersburg-richmond.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/eastern/third-petersburg/s/${id}`
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
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>The Breakthrough at Petersburg</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>April 2, 1865 · Petersburg, Virginia</div>
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
        <span><span style={{ color: ACCENTS.rust }}>■</span> Confederacy {num(CAS.csa)}</span>
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
            {[['Duration', '1 day'], ['Casualties', '~7.7k'], ['Winner', 'Union']].map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Decisive Union victory · the siege breaks and the capital falls</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          The breakthrough ended the nine-month siege of Petersburg in a single morning. The Sixth Corps tore through Lee’s line, cut the last railroad, and killed A. P. Hill (South), one of Lee’s ablest generals. That night Lee gave up both Petersburg and Richmond, and the Confederate capital fell the next day. The Army of Northern Virginia was driven into the open and onto the roads west, with Grant in pursuit. One week later it surrendered at Appomattox, and the war in Virginia was over.
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
      {!failed && <img src={file} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%', transform: 'scale(1.16)', transformOrigin: 'center' }} />}
    </div>
  )
}

function SectionsList() {
  return (
    <div style={{ padding: '6px 16px 40px' }}>
      <Eyebrow color={ACCENT}>The narrative · 4 sections</Eyebrow>
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

export default function ThirdPetersburgPage() {
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
