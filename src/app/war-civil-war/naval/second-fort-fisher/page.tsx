'use client'

// BATTLE dossier (Second Fort Fisher). Same shape as Antietam/Fort Sumter: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties bar) ·
// outcome card · commanders strip · numbered section list.
// Content produced through the war content pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.rust // Naval & Coastal theatre
const CRUMBS = civilWarCrumbs({ theatre: 'naval', battleId: 'n-fortfisher2' })

const HERO_IMG = '/war-img/second-fort-fisher-hero.jpg'
const HERO_PAL = ['#3a2a1c', '#5a2a32', '#100506']

const ARMIES = [
  { side: 'Union', label: 'Provisional Corps & fleet', size: '~9,600', commander: 'Maj. Gen. Alfred H. Terry', note: 'Sent back with orders to go in, after December’s expedition turned away without an assault.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Fort Fisher garrison', size: '~1,900', commander: 'Col. William Lamb', note: 'Holding the Gibraltar of the South while a fresh division sat idle a few miles up the beach.', color: ACCENTS.rust },
]
const CAS = { union: 1057, csa: 583, civ: 0 }
const FIGURES = [
  { name: 'Alfred H. Terry', role: 'Cmdr., Union army', side: 'U', img: '/war-img/cmdr/terry.jpg', blurb: 'Handed the provisional corps that Grant pulled together after relieving Butler, Terry landed about 9,600 men on the beach above the fort and dug a line facing north to guard against any counterattack. He then drove his division against the land face and pressed the assault through hours of hand-to-hand fighting on the traverses, taking the surrender at Battery Buchanan near ten o’clock that night.' },
  { name: 'Adelbert Ames', role: 'Div., Union army', side: 'U', img: '/war-img/cmdr/ames.jpg', blurb: 'Ames led the infantry division that made the winning attack on the western end of the land face, feeding in his brigades one after another to claw across the great sand mounds. The fighting wrecked his command: all three of his brigade commanders fell, and most of his regimental commanders with them, before the fort was carried.' },
  { name: 'David D. Porter', role: 'Cmdr., Union fleet', side: 'U', img: '/war-img/cmdr/dd-porter.jpg', blurb: 'Porter brought back nearly the whole North Atlantic Blockading Squadron, around 58 ships, the largest fleet the Navy had yet massed, and this time aimed his fire to knock out the fort’s guns one by one instead of just battering the sand. He also sent some 2,000 sailors and marines ashore to storm the sea-face corner, a charge that was bloodily repulsed but pulled the garrison away from the army’s blow.' },
  { name: 'W.H.C. Whiting', role: 'District cmdr., CSA', side: 'C', img: '/war-img/cmdr/whiting.jpg', blurb: 'The district commander and the engineer behind Wilmington’s defenses, Whiting came down to the fort to share its fate rather than direct it from the city. He fought in the line, refused demands to surrender, and was shot down severely wounded; carried north as a prisoner, he died at Fort Columbus on Governors Island on March 10, 1865, of dysentery contracted in captivity, weakened by his wounds.' },
  { name: 'William Lamb', role: 'Cmdr., garrison', side: 'C', img: '/war-img/cmdr/lamb.jpg', blurb: 'Lamb was the young colonel who had built Fort Fisher over years into the strongest earthwork in the Confederacy, and who now had to hold it with under 2,000 men against a fleet of 58 ships. He kept his garrison alive through three days of methodical bombardment, then fell badly wounded in the close fighting and ended the battle in the fort’s hospital beside Whiting.' },
  { name: 'Braxton Bragg', role: 'Dept. cmdr., CSA', side: 'C', img: '/war-img/cmdr/bragg.jpg', blurb: 'Bragg commanded the department from Wilmington and held a full division of about 6,400 men under Hoke a short march from the fort. Cautious to the end, he never threw that division at Terry’s exposed line, sending only a small detachment forward and letting the garrison be taken apart while the force that might have saved it stood idle.' },
  { name: 'Robert Hoke', role: 'Div., CSA', side: 'C', img: '/war-img/cmdr/hoke.jpg', blurb: 'Hoke’s division of roughly 6,400 veterans stood between Wilmington and the fort, perfectly placed to strike the Union landing in the rear. Held back by Bragg, it barely fought: a detachment of about 1,000 was sent toward the fort and only some 400 men got inside before the Union grip closed.' },
]
const SECTIONS = [
  { id: 'last-door', eyebrow: 'The last port', title: 'The Last Door', blurb: 'Wilmington is the Confederacy’s last working seaport, and Fort Fisher guards its river mouth. Butler (North) botches the first attack with a powder ship; Grant relieves him and sends Terry (North) back.' },
  { id: 'armada', eyebrow: 'January 13', title: 'The Greatest Armada', blurb: 'Porter (North) returns with 58 ships, the largest U.S. fleet yet assembled. Bragg (South) keeps Hoke’s (South) division idle a few miles off while the garrison is left to hold alone.' },
  { id: 'bombardment', eyebrow: 'January 13–15', title: 'Pounding the Sand Flat', blurb: 'Three days of careful, aimed naval fire dismount the fort’s guns one by one, blinding the land face and grinding the garrison down before a single soldier charges.' },
  { id: 'naval-charge', eyebrow: 'Afternoon, January 15', title: 'The Sailors’ Charge', blurb: 'Some 2,000 sailors and marines storm the sea-face corner with cutlasses and revolvers and are slaughtered, but the doomed rush pulls the defenders to the wrong side of the fort.' },
  { id: 'the-fall', eyebrow: 'Night, January 15', title: 'Traverse by Traverse', blurb: 'The army goes over the land face and fights mound by mound into the dark. Whiting and Lamb (South) both fall wounded; the fort surrenders near ten o’clock, and the last door shuts.' },
]
const SECTION_IMG: Record<string, string> = {
  'last-door': '/war-img/second-fort-fisher-hero.jpg',
  'armada': '/war-img/cmdr/dd-porter.jpg',
  'bombardment': '/war-img/cmdr/lamb.jpg',
  'naval-charge': '/war-img/cmdr/whiting.jpg',
  'the-fall': '/war-img/cmdr/terry.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/naval/second-fort-fisher/s/${id}`
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
        : <img src={HERO_IMG} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
        <Eyebrow color="#e3b3a5">Battle · Naval &amp; Coastal</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Second Battle of Fort Fisher</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>January 13–15, 1865 · Cape Fear River, North Carolina</div>
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
        <span><span style={{ color: ACCENTS.rust }}>■</span> Confederacy {num(CAS.csa)} + garrison captured</span>
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
            {[['Duration', '3 days'], ['Casualties', '~1,600'], ['Winner', 'Union']].map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Union victory · the last seaport sealed</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Three days of methodical naval bombardment knocked out the fort’s guns, and after a doomed charge by sailors on the sea face drew off the defenders, the army carried the land face in hours of hand-to-hand fighting through the traverses. The whole garrison of about 1,900 was captured, both Confederate commanders fell wounded, and the Cape Fear River closed behind them. Wilmington, the Confederacy’s last working seaport and a main artery feeding Lee’s army, fell a month later. With the sea sealed, the supply line that had kept the South in the field was gone, and Appomattox followed in the spring.
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
      {!failed && <img src={file} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%' }} />}
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

export default function SecondFortFisherPage() {
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
