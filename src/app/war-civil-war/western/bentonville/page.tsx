'use client'

// BATTLE dossier (Battle of Bentonville). Same shape as Antietam/Shiloh: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md). The war's last full battle (Mar 19–21, 1865).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.blue
const CRUMBS = civilWarCrumbs({ theatre: 'west', battleId: 'w-bentonville' })

const HERO_IMG = '/war-img/bentonville-hero.jpg' // "U.S. Army at Bentonville, March 19" — Harper's Weekly wood engraving from a William Waud sketch, Apr 15, 1865; public domain
const ARMIES = [
  { side: 'Union', label: 'Armies of Georgia & the Tennessee', size: '~60,000 troops', commander: 'Sherman (Slocum & Howard)', note: 'Marching in two wings a day apart, one wing caught alone.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Scraped-together command', size: '~20,000 troops', commander: 'Gen. Joseph E. Johnston', note: 'The last fragments of the West, concentrated for one last attack.', color: ACCENTS.rust },
]
const CAS = { union: 1527, csa: 2606 }
const FIGURES = [
  { name: 'William T. Sherman', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/sherman.jpg', blurb: 'Marching for Goldsboro at the head of two wings a full day’s march apart, Sherman was so sure the campaign was over that he dismissed warnings of trouble and rode with the wrong wing while Johnston struck the other. He recovered fast, brought up his whole army the next day, and chose not to bleed it against entrenched men with the war all but won, a caution he later regretted when he called Mower off.' },
  { name: 'Henry W. Slocum', role: 'Left Wing, Union', side: 'U', img: '/war-img/cmdr/slocum.jpg', blurb: 'Slocum’s Army of Georgia was the wing caught alone on the Goldsboro Road and hit by Johnston’s whole army on March 19. He was slow to believe he faced more than cavalry, but once the blow fell he steadied his line on high ground at the Morris farm and held it through the afternoon until the attacks broke against his massed guns.' },
  { name: 'Oliver O. Howard', role: 'Right Wing, Union', side: 'U', img: '/war-img/cmdr/howard.jpg', blurb: 'Howard commanded the Army of the Tennessee, the wing marching a road away when the fighting began. He swung it north through March 20 and brought it onto the field beside Slocum by midday, turning a near-even fight into the three-to-one margin that ended any Confederate hope.' },
  { name: 'Joseph A. Mower', role: 'Div., Union', side: 'U', img: '/war-img/cmdr/mower.jpg', blurb: 'On March 21 Mower asked leave for a reconnaissance and instead drove two brigades straight at the weak Confederate left, overrunning Johnston’s headquarters and rolling to within about a mile of the Mill Creek bridge, the army’s only escape route. He was thrown back by Hardee’s counterattack and then recalled by Sherman, who later admitted the order let Johnston’s army slip away.' },
  { name: 'Joseph E. Johnston', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/je-johnston.jpg', blurb: 'Recalled by Lee in February 1865, Johnston gathered the broken fragments of the western Confederacy and concentrated them for one surprise blow against a single isolated Union wing. He nearly succeeded on the first day, lingered two more days he could not afford, slipped his army away across Mill Creek by night, and a month later surrendered the largest force of the war at Bennett Place.' },
  { name: 'William J. Hardee', role: 'Corps, CSA', side: 'C', img: '/war-img/cmdr/hardee.jpg', blurb: 'Hardee led the March 19 assault that shattered Carlin’s division and nearly rolled up the Union left, then on March 21 threw together the scratch counterattack that stopped Mower and saved the Mill Creek bridge. The same charge killed his sixteen-year-old son Willie, whom he had let enlist only hours before.' },
  { name: 'Robert F. Hoke', role: 'Div., CSA', side: 'C', img: '/war-img/cmdr/hoke.jpg', blurb: 'Hoke’s division formed much of the weight of the first day’s attack, driving the Union Fourteenth Corps back through the woods at Cole’s farm. On March 20 his men were pulled back to anchor Johnston’s bending flank as Sherman’s whole army crowded onto the field.' },
  { name: 'Braxton Bragg', role: 'Wing, CSA', side: 'C', img: '/war-img/cmdr/bragg.jpg', blurb: 'Bragg held nominal command of part of Johnston’s line, including Hoke’s division, in one of his last field roles of the war. His sector saw hard fighting on the first day before the Confederate effort spent itself against the Union artillery on the high ground.' },
]
const SECTIONS = [
  { id: 'last-throw', eyebrow: 'The last roll of the dice', title: 'The Last Throw', blurb: 'Sherman runs loose in the Carolinas; Lee recalls Johnston (South) to scrape an army together and catch one wing alone.' },
  { id: 'cole-farm', eyebrow: 'Day one', title: 'The Attack at Cole’s Farm', blurb: 'Johnston springs the trap on March 19; Carlin’s (North) division breaks, and Morgan’s (North) stand saves the wing.' },
  { id: 'whole-army-arrives', eyebrow: 'Day two', title: 'Sherman’s Whole Army Comes Up', blurb: 'Howard’s (North) wing arrives, the odds go to three-to-one, and Johnston (South) lingers a day he cannot afford.' },
  { id: 'mowers-charge', eyebrow: 'Day three', title: 'Mower’s Charge', blurb: 'Mower (North) drives for the Mill Creek bridge and Johnston’s headquarters; Hardee (South) stops him, and Hardee’s son dies in the charge.' },
  { id: 'reckoning', eyebrow: 'The cost & the meaning', title: 'The End in Sight', blurb: '~4,100 fall. Days later Petersburg and Richmond fall, Lee surrenders, and Johnston gives up at Bennett Place.' },
]
const SECTION_IMG: Record<string, string> = {
  'last-throw': '/war-img/cmdr/je-johnston.jpg',
  'cole-farm': '/war-img/cmdr/hardee.jpg',
  'whole-army-arrives': '/war-img/cmdr/sherman.jpg',
  'mowers-charge': '/war-img/cmdr/mower.jpg',
  'reckoning': '/war-img/cmdr/grant.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/western/bentonville/s/${id}`
const num = (n: number) => n.toLocaleString('en-US')

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{children}</div>
}

function HeroImg() {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
      {failed
        ? <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #2a3320, #232a1c 55%, #08060a)' }} />
        : <img src={HERO_IMG} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 42%' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
        <Eyebrow color="#9ec1f5">Battle · Western Theatre</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Bentonville</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>March 19–21, 1865 · Bentonville, North Carolina</div>
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
            {([['Duration', '3 days'], ['Casualties', '~4,100'], ['Winner', 'Union']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Union victory · the Confederacy’s last attack</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Johnston concentrated the broken remnant of the western Confederacy and caught one wing of Sherman’s divided column alone, nearly breaking it on the first day. But the wing held, the rest of Sherman’s army arrived to outnumber him three to one, and after a near-disaster when Mower drove for his only bridge, Johnston slipped away across Mill Creek by night. It was the largest battle ever fought in North Carolina and the last full Confederate offensive of the war. Within weeks Petersburg fell, Lee surrendered at Appomattox, and Johnston gave up the largest force of the war at Bennett Place.
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
      {!failed && <img src={file} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 28%' }} />}
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

export default function BentonvillePage() {
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
