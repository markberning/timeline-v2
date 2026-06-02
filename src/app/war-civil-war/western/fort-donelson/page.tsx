'use client'

// BATTLE dossier (Fort Donelson). Same shape as Antietam: hero · collapsible
// At-a-glance (stat strip + armies face-off + casualties bar) · outcome card ·
// commanders strip · numbered section list. The stat strip leads with the mass
// SURRENDER (the battle's signature), the bar shows killed/wounded.
// Content produced through the war content pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { CommandersStrip } from '@/components/mode/commanders-strip'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.blue // Western theatre
const CRUMBS = civilWarCrumbs({ theatre: 'west', battleId: 'w-donelson' })

const HERO_IMG = '/war-img/fort-donelson-hero.jpg' // Kurz & Allison chromolithograph (PD)
const HERO_PAL = ['#22303a', '#3a2a2a', '#0a0e10']

const ARMIES = [
  { side: 'Union', label: 'Grant’s army & gunboats', size: '~25,000', commander: 'Brig. Gen. Ulysses S. Grant', note: 'Backed by Foote’s river gunboats, and willing to demand everything.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Fort Donelson garrison', size: '~17,000', commander: 'Floyd, Pillow & Buckner', note: 'Three generals who could not agree, two of whom fled in the night.', color: ACCENTS.rust },
]
const CAS = { union: 2700, csa: 2000, civ: 0 }
const FIGURES = [
  { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/grant.jpg', blurb: 'Grant marched his army the dozen miles overland from Fort Henry and pressed the siege from the land side after the gunboats were beaten off the river. When the Confederate breakout broke his right, he read the captured soldiers’ packed knapsacks for what they were, ordered an attack all along the line, and the next morning demanded an unconditional surrender that bagged the whole garrison.' },
  { name: 'Andrew H. Foote', role: 'Gunboats, Union', side: 'U', img: '/war-img/cmdr/foote.jpg', blurb: 'Foote brought his flotilla of ironclads and timberclads up the Cumberland on February 14 and closed to within 400 yards of the fort, the same play that had taken Fort Henry. The water batteries on the bluff poured plunging fire into his decks, shot away the steering of two ironclads, and wounded Foote in the foot as a shot tore through his flagship’s pilot house, driving the fleet back downriver.' },
  { name: 'Charles F. Smith', role: 'Div., Union', side: 'U', img: '/war-img/cmdr/cf-smith.jpg', blurb: 'Ordered by Grant to take the fort, Smith led his division up the icy slope against the outer works on the Confederate right, rode out in front where his men could see him, and seized the entrenchments held by the thinned-out 30th Tennessee. His foothold inside the outer line made the next morning’s defense look hopeless and helped force the surrender.' },
  { name: 'Simon B. Buckner', role: 'Surrendered, CSA', side: 'C', img: '/war-img/cmdr/buckner.jpg', blurb: 'Left holding the garrison after Floyd and Pillow fled, Buckner sent Grant, his old West Point friend, a note asking for terms and got the demand for unconditional surrender instead. He called the terms ungenerous but bowed to the overwhelming force against him and gave up the fort and its army on February 16.' },
  { name: 'John B. Floyd', role: 'Fled, CSA', side: 'C', img: '/war-img/cmdr/floyd.jpg', blurb: 'The senior commander inside the fort, Floyd had been U.S. Secretary of War before the war and feared prosecution if the North took him prisoner. Rather than face the surrender, he handed command to Pillow and escaped before dawn on February 16, taking the only steamboat and his two Virginia regiments with him.' },
  { name: 'Gideon J. Pillow', role: 'Fled, CSA', side: 'C', img: '/war-img/cmdr/pillow.jpg', blurb: 'Pillow led the February 15 breakout that drove back the Union right and threw open the road to Nashville, then ordered his men to stop and march back into the trenches, closing the escape they had just opened. When Floyd passed him the command that night, Pillow passed it on to Buckner and slipped across the Cumberland in a small boat.' },
  { name: 'Nathan B. Forrest', role: 'Cavalry, CSA', side: 'C', img: '/war-img/cmdr/forrest.jpg', blurb: 'Forrest screened the army with his cavalry through the siege and refused to be surrendered, saying he had not come to give up his command. On the night before the capitulation he led about 700 of his horsemen out through the waist-deep icy backwater of Lick Creek and rode clear of the trap, finding no enemy in the way.' },
]
const SECTIONS = [
  { id: 'the-rivers', eyebrow: 'The western strategy', title: 'The Rivers into the South', blurb: 'Two rivers run like highways into the Confederacy. Fort Henry falls to the gunboats; Grant marches on its sister fort, Donelson.' },
  { id: 'the-gunboats', eyebrow: 'February 14', title: 'The Gunboats Repulsed', blurb: 'Foote’s (North) ironclads steam up to pound the fort, and the fort’s river guns beat them back down the Cumberland.' },
  { id: 'the-breakout', eyebrow: 'February 15', title: 'The Escape That Wasn’t', blurb: 'A Confederate attack tears open an escape road, and then Pillow (South) orders his men back into the trenches, throwing it away.' },
  { id: 'unconditional-surrender', eyebrow: 'February 16', title: 'Unconditional Surrender', blurb: 'Floyd and Pillow flee in the night; Forrest rides out through icy water; Buckner (South) is left to surrender to his old friend Grant.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-rivers': '/war-img/donelson-rivers.png',
  'the-gunboats': '/war-img/donelson-gunboats.jpg',
  'the-breakout': '/war-img/cmdr/grant.jpg',
  'unconditional-surrender': '/war-img/donelson-dover-hotel.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/western/fort-donelson/s/${id}`
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
        : <img src={HERO_IMG} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
        <Eyebrow color="#9ec1f5">Battle · Western Theatre</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Fort Donelson</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>February 11–16, 1862 · Cumberland River, Tennessee</div>
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
        <span><span style={{ color: ACCENTS.blue }}>■</span> Union ~{num(CAS.union)} killed &amp; wounded</span>
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
            {[['Duration', '5 days'], ['Captured', '~13,000'], ['Winner', 'Union']].map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Decisive Union victory · the West cracks open</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Grant’s demand for “unconditional surrender” gave the North its first major victory of the war and a new hero, and bagged an entire Confederate army, the largest mass surrender on the continent to that point. With the river forts gone, the Confederacy’s western line collapsed: Nashville, the first Confederate state capital to fall, was abandoned within days. The road into the heart of the South was open.
        </p>
      </div>
    </div>
  )
}

function Thumb({ file, w, h }: { file: string; w: number; h: number }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ width: w, height: h, borderRadius: 6, overflow: 'hidden', flexShrink: 0, background: 'linear-gradient(135deg, #3a2e21, #1c1814)' }}>
      {!failed && <img src={file} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%' }} />}
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

export default function FortDonelsonPage() {
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
