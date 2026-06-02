'use client'

// BATTLE dossier (Battle of Jonesborough). Same shape as Shiloh: hero · collapsible At-a-glance
// (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.blue
const CRUMBS = civilWarCrumbs({ theatre: 'west', battleId: 'w-jonesborough' })

const HERO_IMG = '/war-img/jonesborough-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Military Division of the Mississippi', size: '~20,000+ engaged', commander: 'Sherman · Howard · Davis', note: 'Howard’s Army of the Tennessee led the way; Davis’s XIV Corps made the break.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of Tennessee', size: '~12,000 on Sept 1', commander: 'Hood (Hardee in the field)', note: 'Sent to clear the Federals off Atlanta’s last railroad, then stretched too thin to hold it.', color: ACCENTS.rust },
]
const CAS = { union: 1150, csa: 2200 }
const FIGURES = [
  { name: 'William T. Sherman', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/sherman.jpg', blurb: 'Rather than storm Atlanta’s works, Sherman swung the bulk of his three armies south and west to cut the Macon & Western Railroad, the city’s last open supply line, near Jonesborough. When the line was torn up and Hood gave up the city, he wired Washington the four words that turned the Northern mood: “Atlanta is ours, and fairly won.”' },
  { name: 'Oliver O. Howard', role: 'Army of the Tennessee', side: 'U', img: '/war-img/cmdr/howard.jpg', blurb: 'Howard pushed the Army of the Tennessee across the Flint River and reached the railroad first, digging his men in on a ridge west of the town before the Confederates came up. His entrenched line broke the August 31 attack at roughly ten-to-one cost and held the Confederates off the rails.' },
  { name: 'Jefferson C. Davis', role: 'XIV Corps, Union', side: 'U', img: '/war-img/cmdr/jc-davis.jpg', blurb: 'Davis, the Union general of that unfortunate name and no relation to the Confederate president, sent his XIV Corps against the salient in Hardee’s thinned line on September 1 and broke clean through it. The assault swallowed the brigade holding the apex, capturing its general and roughly 600 men.' },
  { name: 'John A. Logan', role: 'XV Corps, Union', side: 'U', img: '/war-img/cmdr/logan.jpg', blurb: 'Logan’s XV Corps held the right of Howard’s entrenched line on August 31 and helped throw back the Confederate charge. On September 1 his corps pressed in from the west as Davis broke the salient, adding pressure on the far face of Govan’s apex.' },
  { name: 'John Bell Hood', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/hood.jpg', blurb: 'Hood sent Hardee to drive the Federals off the last railroad, then in the small hours recalled half that force to Atlanta against an assault that never came. With the rail line cut, he ordered Atlanta abandoned the night of September 1, burning his stores and marching his army out to fight again at Franklin and Nashville.' },
  { name: 'William J. Hardee', role: 'Field cmdr., CSA', side: 'C', img: '/war-img/cmdr/hardee.jpg', blurb: 'Handed two corps to clear the railroad, Hardee saw his August 31 attack break against Howard’s works and his men refuse a second charge. Stripped of half his force overnight, he held a two-mile front with about 12,000 men on September 1, lost the salient, and slipped his battered corps south in the dark to save it from being trapped.' },
  { name: 'Daniel C. Govan', role: 'Brigade, CSA †', side: 'C', img: '/war-img/cmdr/govan.jpg', blurb: 'Govan’s Arkansas brigade held the apex of the salient where Hardee’s thinned line bent toward the enemy, the weakest point on the field. When the XIV Corps closed on it from two sides on September 1, the brigade was surrounded, and Govan himself was captured with roughly 600 of his men and about eight guns.' },
]
const SECTIONS = [
  { id: 'the-last-railroad', eyebrow: 'The stakes', title: 'The Last Railroad Into Atlanta', blurb: 'Sherman has cut every line into the city but one. He swings his armies south to break the Macon & Western near Jonesborough, and Atlanta cannot be held without it.' },
  { id: 'hardees-stand', eyebrow: 'August 31', title: 'Hardee’s Stand', blurb: 'Hood (South) sends Hardee (South) to drive the Federals off the railroad. The charge breaks against Howard’s (North) entrenchments at roughly ten-to-one cost, and the men will not charge again.' },
  { id: 'the-line-breaks', eyebrow: 'September 1', title: 'The Line Breaks', blurb: 'Stretched thin with half his force recalled, Hardee’s (South) salient gives way. The XIV Corps under Jefferson C. Davis (the Union general, not the Confederate president) swallows Govan’s (South) brigade whole.' },
  { id: 'atlanta-is-ours', eyebrow: 'September 2–3', title: 'Atlanta Is Ours', blurb: 'With the last railroad cut, Hood (South) abandons the city in the night. Sherman’s four-word telegram detonates the case against the war and turns the 1864 election.' },
  { id: 'what-it-decided', eyebrow: 'The meaning', title: 'What It Decided', blurb: 'Jonesborough opened the road to the March to the Sea and the largest emancipation event in U.S. history, and to Ebenezer Creek, where the same Davis (North) left hundreds of the freed to drown.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-last-railroad': '/war-img/jonesborough-overview.png',
  'hardees-stand': '/war-img/cmdr/hardee.jpg',
  'the-line-breaks': '/war-img/jonesborough-the-break.png',
  'atlanta-is-ours': '/war-img/cmdr/sherman.jpg',
  'what-it-decided': '/war-img/cmdr/sherman.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/western/jonesborough/s/${id}`
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
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>The Battle of Jonesborough</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>August 31 – September 1, 1864 · Jonesborough, Georgia</div>
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
            {([['Duration', '2 days'], ['Casualties', '~3,350'], ['Winner', 'Union']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Union victory · the fall of Atlanta</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Jonesborough cut the Macon &amp; Western, the last railroad into Atlanta, and forced Hood (South) to abandon the city the night of September 1; Atlanta fell on September 2. It was the decisive, climactic battle of the Atlanta Campaign, and one of the most politically consequential of the war. Its fall reversed Northern morale overnight, secured Lincoln’s reelection in a campaign that was, at bottom, an election about slavery, and opened the road to the March to the Sea.
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

export default function JonesboroughPage() {
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
