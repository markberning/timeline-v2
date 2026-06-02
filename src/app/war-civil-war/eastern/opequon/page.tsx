'use client'

// BATTLE dossier (Battle of Opequon / Third Winchester). Same shape as Shiloh: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.violet
const CRUMBS = civilWarCrumbs({ theatre: 'east', battleId: 'e-opequon' })

const HERO_IMG = '/war-img/opequon-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Army of the Shenandoah', size: '~40,000 engaged', commander: 'Maj. Gen. Philip H. Sheridan', note: 'Outnumbered Early better than two to one, and nearly threw the edge away in a canyon.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of the Valley', size: '~15,000 engaged', commander: 'Lt. Gen. Jubal A. Early', note: 'Caught dispersed, but bought time to concentrate while the Union army jammed up east of town.', color: ACCENTS.rust },
]
const CAS = { union: 5000, csa: 3600 }
const FIGURES = [
  { name: 'Philip H. Sheridan', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/sheridan.jpg', blurb: 'Sheridan brought the Army of the Shenandoah across Opequon Creek to destroy Early before he could concentrate, acting on word that a Confederate division had left the Valley. A traffic jam in the Berryville Canyon cost him the surprise, so he fought the battle head-on and then loosed his reserves and massed cavalry against Early’s open northern flank, breaking the line and sending the Confederates whirling south through Winchester.' },
  { name: 'Horatio G. Wright', role: 'VI Corps, Union', side: 'U', img: '/war-img/cmdr/wright.jpg', blurb: 'Wright’s VI Corps reached the Berryville Canyon first, but pushed its wagons and artillery into the defile ahead of the infantry and helped create the jam that delayed the attack by hours. In the afternoon fight his corps anchored the Union assault east of town, and his division commander David Russell was killed plugging the gap that nearly broke the line.' },
  { name: 'William H. Emory', role: 'XIX Corps, Union', side: 'U', img: '/war-img/cmdr/emory.jpg', blurb: 'Emory’s XIX Corps was queued behind Wright in the canyon and could not even enter it until around nine in the morning. When the assault finally went in, his corps advanced side by side with the VI Corps east of Winchester, and the gap that opened between the two formations was where the Confederate counterattack drove through.' },
  { name: 'George A. Custer', role: 'Cavalry, Union', side: 'U', img: '/war-img/cmdr/custer.jpg', blurb: 'Custer led a cavalry brigade in the massed mounted force that came down on Early’s open left flank from the north. Late in the afternoon he led a charge straight at the Confederate works north of town, around Fort Collier and Star Fort, helping cave in the end of Early’s line.' },
  { name: 'Wesley Merritt', role: 'Cavalry, Union', side: 'U', img: '/war-img/cmdr/merritt.jpg', blurb: 'Merritt commanded a cavalry division in the force Sheridan massed against the northern end of the Confederate line. His horsemen swept down on Early’s exposed flank alongside Crook’s infantry, the mobile blow that rolled the Confederate army up sideways and turned its retreat into a rout.' },
  { name: 'Jubal A. Early', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/early.jpg', blurb: 'Caught with his Army of the Valley dispersed around Winchester, Early used the hours the Union traffic jam handed him to pull his scattered divisions together in front of the town. He held the head-on assault through the afternoon, but his line had no flank to spare, and when the massed cavalry turned his open left his army broke and ran south through the streets.' },
  { name: 'Robert E. Rodes', role: 'Div., CSA †', side: 'C', img: '/war-img/cmdr/rodes.jpg', blurb: 'Rodes, one of Lee’s finest division commanders, helped drive the counterattack that found the gap between the two Union corps and buckled the Federal center. He was killed leading that attack, reportedly while urging his men on, struck down in the early afternoon.' },
  { name: 'John B. Gordon', role: 'Div., CSA', side: 'C', img: '/war-img/cmdr/gordon.jpg', blurb: 'Gordon’s division drove the counterattack into the seam of the Union line alongside Rodes, throwing the Federal center back in disorder for a stretch of the afternoon. His was the left of Early’s line that Crook’s infantry and the massed Union cavalry caved in once the flank attack came down from the north.' },
]
const SECTIONS = [
  { id: 'the-breadbasket', eyebrow: 'The Shenandoah', title: 'The breadbasket worth burning', blurb: 'Grant sends Sheridan (North) to burn the Valley that fed Lee’s army: a slave-worked larder and a covered highway pointed at the North.' },
  { id: 'the-spy', eyebrow: 'The intelligence', title: 'The message in the tin foil', blurb: 'An enslaved man, Thomas Laws, carries word out of Winchester that Early (South) has been weakened, the intelligence that set the attack.' },
  { id: 'the-canyon', eyebrow: 'The morning', title: 'The traffic jam that nearly lost the day', blurb: 'Wright’s (North) wagons clog the only road through the Berryville Canyon, and the delay lets Early (South) pull his scattered divisions together.' },
  { id: 'the-flank', eyebrow: 'The afternoon', title: 'Russell, Rodes, and the hammer from the north', blurb: 'A gap nearly breaks the Union center; Russell (North) dies closing it and Rodes (South) dies leading the counter, before the massed cavalry caves in Early’s flank.' },
  { id: 'whirling-through-winchester', eyebrow: 'The rout', title: 'Whirling through the town', blurb: 'Early’s (South) army breaks south through Winchester’s streets, the first of three blows that destroyed the Army of the Valley and cleared the Valley for The Burning.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-breadbasket': '/war-img/cmdr/early.jpg',
  'the-spy': '/war-img/cmdr/sheridan.jpg',
  'the-canyon': '/war-img/opequon-overview.png',
  'the-flank': '/war-img/opequon-the-flank.png',
  'whirling-through-winchester': '/war-img/cmdr/custer.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/eastern/opequon/s/${id}`
const num = (n: number) => n.toLocaleString('en-US')

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{children}</div>
}

function HeroImg() {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
      {failed
        ? <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #3a2e4a, #2a2238 55%, #0a0810)' }} />
        : <img src={HERO_IMG} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
        <Eyebrow color="#c4a8f5">Battle · Eastern Theatre</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>The Battle of Opequon</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>September 19, 1864 · Winchester, Virginia (Third Winchester)</div>
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
            {([['Duration', '1 day'], ['Casualties', '~8,600'], ['Winner', 'Union']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Union victory · the Valley begins to fall</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Sheridan’s two-to-one edge nearly drained away in a clogged ravine, and the head-on fight cost two Confederate generals, one Union general, and the better part of an afternoon. But a massed cavalry blow against Early’s open northern flank broke his line and sent the Army of the Valley whirling south through the streets of Winchester. It was the first of three hammer-blows in a single month that destroyed Early’s army and cleared the lower Valley for The Burning. Seven weeks before the 1864 election, it also helped carry Lincoln to reelection and the war to its finish.
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

export default function OpequonPage() {
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
