'use client'

// BATTLE dossier (Appomattox Court House). Same shape as Antietam/Gettysburg:
// hero · collapsible At-a-glance (stat strip + armies face-off + casualties bar) ·
// commanders strip · outcome pill · numbered section list. Content produced
// through the war content pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, CIVIL_WAR_ACCENT as ACCENT, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const CRUMBS = civilWarCrumbs({ theatre: 'east', battleId: 'e-appomattox' })

const HERO_IMG = '/war-img/appomattox-hero.jpg'
const HERO_PAL = ['#2c2418', '#3f3322', '#0d0a06']

const ARMIES = [
  { side: 'Union', label: 'Armies of the Potomac & the James', size: '~63,000', commander: 'Lt. Gen. Ulysses S. Grant', note: 'Ran Lee’s army to ground and got infantry across the road west by a thirty-mile forced march.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of Northern Virginia', size: '~26,000', commander: 'Gen. Robert E. Lee', note: 'Starving and surrounded, made one last dawn attack to reopen the road, then surrendered.', color: ACCENTS.rust },
]
const CAS = { union: 164, csa: 500, civ: 0 }
const FIGURES = [
  { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/lee.jpg', blurb: 'With Petersburg fallen and his army starving, Lee ran west hoping to reach North Carolina, only to find Union infantry across the road at Appomattox after a last dawn attack failed. Rather than spend his men in a hopeless fight, he rode to the McLean house and surrendered the Army of Northern Virginia, ending four years of war in Virginia.' },
  { name: 'John B. Gordon', role: 'II Corps, CSA', side: 'C', img: '/war-img/cmdr/gordon.jpg', blurb: 'Gordon led the Confederate dawn attack on April 9, breaking through Sheridan’s cavalry and briefly opening the road west before massed Union infantry appeared beyond the ridge. He sent Lee word that his command had been fought to a frazzle and could do nothing more, and three days later he answered Chamberlain’s salute as his men stacked their arms.' },
  { name: 'James Longstreet', role: 'I Corps, CSA', side: 'C', img: '/war-img/cmdr/longstreet.jpg', blurb: 'Lee’s senior surviving corps commander held the rear of the trapped army against Grant’s closing forces while Gordon attacked in front. With the army surrounded on three sides, his line was the wall that kept the pursuit off Lee’s back during the final hours before the surrender.' },
  { name: 'Ulysses S. Grant', role: 'Gen.-in-Chief, U.S.', side: 'U', img: '/war-img/cmdr/grant.jpg', blurb: 'Grant broke the Petersburg line, then ran Lee down across ninety miles, throwing cavalry across the road west and pushing infantry to cut off every turn south. At the McLean house he wrote out terms that paroled the Confederates and let them keep their horses, and sent 25,000 rations to feed the army he had just beaten.' },
  { name: 'Philip H. Sheridan', role: 'Cavalry, U.S.', side: 'U', img: '/war-img/cmdr/sheridan.jpg', blurb: 'Sheridan’s cavalry broke the line at Five Forks, then harried Lee’s flanks the whole retreat and helped trap a third of his army at Sailor’s Creek. By riding faster than the Confederates could march, his troopers got in front of the army at Appomattox and slammed the last road shut.' },
  { name: 'George A. Custer', role: 'Cavalry div., U.S.', side: 'U', img: '/war-img/cmdr/custer.jpg', blurb: 'On April 8 Custer drove his cavalry division into Appomattox Station ahead of Lee’s infantry and seized the supply trains the starving Confederates were counting on, overrunning the reserve artillery and taking about two dozen guns in the bargain. Taking the food and the road put Sheridan’s horsemen in front of Lee’s army for the first time.' },
  { name: 'Joshua L. Chamberlain', role: 'Brigade, V Corps', side: 'U', img: '/war-img/cmdr/chamberlain.jpg', blurb: 'The former college professor who had held the far left at Gettysburg was chosen to receive the formal surrender of the Confederate infantry on April 12. As the worn gray column came up to stack its arms, he ordered his men to the salute, a gesture Gordon answered in kind, which Chamberlain called honor answering honor.' },
]
const SECTIONS = [
  { id: 'the-collapse', eyebrow: 'The lines break', title: 'The Lines Break', blurb: 'Five Forks cracks the flank, Petersburg and Richmond fall, and Lee runs west. Sailor’s Creek tears off a third of his starving army.' },
  { id: 'last-march', eyebrow: 'The last march', title: 'The Last March', blurb: 'Custer (North) seizes the supply trains at Appomattox Station. Now Union cavalry is in front of Lee, not just behind. Letters pass between the lines.' },
  { id: 'the-attack', eyebrow: 'The last attack', title: 'The Last Attack', blurb: 'Gordon’s dawn assault breaks the cavalry, crests the ridge, and finds a wall of Union infantry. The road west is shut. The guns go quiet.' },
  { id: 'surrender', eyebrow: 'The surrender', title: 'The Surrender', blurb: 'Lee and Grant meet in Wilmer McLean’s parlor. The terms, the rations, General Orders No. 9, and a final salute: honor answering honor.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-collapse': '/war-img/appomattox-collapse.jpg',
  'last-march': '/war-img/appomattox-last-march.jpg',
  'the-attack': '/war-img/appomattox-attack.jpg',
  'surrender': '/war-img/appomattox-surrender.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/eastern/appomattox/s/${id}`
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
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Appomattox Court House</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>April 9, 1865 · Appomattox County, Virginia</div>
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
            {[['Duration', '1 day'], ['Surrendered', '~28k'], ['Winner', 'Union']].map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Union victory · the surrender of the Army of Northern Virginia</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Run to ground and surrounded after the fall of Petersburg, Lee made one last dawn attack to reopen the road west, found massed Union infantry across it, and surrendered to Grant in Wilmer McLean’s parlor that afternoon. The terms were generous: the men were paroled and sent home, officers kept their sidearms, horse-owners kept their horses, and Grant fed the beaten army with 25,000 rations. Other Confederate armies held out for weeks, but the surrender of the army that had been the heart of the rebellion was the effective end of the war, and with the Union preserved, slavery was finished too.
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

export default function AppomattoxPage() {
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
