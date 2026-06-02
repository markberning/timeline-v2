'use client'

// BATTLE dossier (Fort Blakeley). Same shape as Antietam/Shiloh: hero · collapsible
// At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.blue
const CRUMBS = civilWarCrumbs({ theatre: 'west', battleId: 'w-blakeley' })

const HERO_IMG = '/war-img/fort-blakeley-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Army at Fort Blakeley (XIII & XVI Corps)', size: '~16,000 in the assault', commander: 'Canby; Steele on the ground', note: 'Two corps and 5,000 Black soldiers against a thinly held wall.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Garrison of Fort Blakeley', size: '~4,000 troops', commander: 'St. John R. Liddell', note: 'A three-mile line held by too few men, many of them boys.', color: ACCENTS.rust },
]
const CAS = { union: 800, csa: 2800 }
const FIGURES = [
  { name: 'Edward R. S. Canby', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/canby.jpg', blurb: 'Ordered by Grant to take Mobile, Canby brought roughly 45,000 men up the eastern shore of Mobile Bay and reduced the forts one at a time, taking Spanish Fort first and then turning his whole weight on Blakeley. His patient siege and overwhelming numbers carried the last earthwork above the city in about half an hour on April 9, and Mobile surrendered three days later.' },
  { name: 'Frederick Steele', role: 'Column from Pensacola, Union', side: 'U', img: '/war-img/cmdr/steele.jpg', blurb: 'Steele led the column that marched up from Pensacola, in Florida, setting out on March 20 and reaching Blakeley on April 1; Hawkins and his 5,000 Black soldiers came up as the lead element of that column. Once there, Steele directed the troops in the lines in front of Blakeley, pushing three successive rings of earthworks closer to the Confederate wall night after night until the foremost trenches sat within 1,000 yards of the works.' },
  { name: 'John P. Hawkins', role: 'USCT Div., Union', side: 'U', img: '/war-img/cmdr/hawkins.jpg', blurb: 'Hawkins led the division of United States Colored Troops, three brigades of Black soldiers, on the Union right, thrown straight at the part of the line held by the Confederate Alabama reserves. His men crossed open ground sown with felled trees, sharpened stakes, and buried land mines under heavy fire, hacked through the obstacles, and were among the first over the wall.' },
  { name: 'St. John R. Liddell', role: 'Cmdr., garrison, CSA', side: 'C', img: '/war-img/cmdr/liddell.jpg', blurb: 'Liddell commanded the roughly 4,000 men holding Fort Blakeley, a line nearly three miles long that he never had enough soldiers to defend properly. He held it through a week of siege, but when Canby stormed the works on April 9 the thin line gave way in about thirty minutes, and most of his garrison was captured.' },
  { name: 'Francis M. Cockrell', role: 'Brigades, CSA', side: 'C', img: '/war-img/cmdr/cockrell.jpg', blurb: 'Cockrell led the toughest troops in the garrison, veteran Missouri and Mississippi soldiers who had fought from Pea Ridge through Vicksburg to the slaughter at Franklin, holding the center and left of the line. Their skill could not make up for the right of the line being held by untrained teenage reserves, and the position was overrun.' },
  { name: 'Dabney H. Maury', role: 'Cmdr., Mobile, CSA', side: 'C', img: '/war-img/cmdr/maury.jpg', blurb: 'Maury commanded the overall defense of Mobile from across the bay, holding the city behind its ring of forts. With Spanish Fort and Blakeley both lost, he could not hold Mobile and pulled his remaining troops out rather than be trapped; the city surrendered on April 12.' },
]
const SECTIONS = [
  { id: 'last-port', eyebrow: 'The last port', title: 'The Road to Mobile', blurb: 'Grant orders Mobile taken. Canby (North) lands on the eastern shore with 45,000 men, reducing the forts one at a time, while Steele (North) marches up from Pensacola with 5,000 Black soldiers.' },
  { id: 'the-siege', eyebrow: 'The earthwork', title: 'The Lines in the Pines', blurb: 'A three-mile wall studded with redoubts, abatis, and buried land mines, held by 4,000 men under Liddell (South), too few for the front.' },
  { id: 'the-storm', eyebrow: 'The assault', title: 'Thirty Minutes', blurb: '16,000 Union troops storm the line at dusk on April 9; the wall falls in half an hour, and more than 2,800 Confederates are captured.' },
  { id: 'the-end', eyebrow: 'The meaning', title: 'The Last Charge', blurb: 'The last major battle of the war, fought hours after Lee surrendered at Appomattox, carried in good part by the men the war was fought over.' },
]
const SECTION_IMG: Record<string, string> = {
  'last-port': '/war-img/cmdr/canby.jpg',
  'the-siege': '/war-img/fort-blakeley-siege.png',
  'the-storm': '/war-img/fort-blakeley-assault.png',
  'the-end': '/war-img/cmdr/hawkins.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/western/fort-blakeley/s/${id}`
const num = (n: number) => n.toLocaleString('en-US')

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{children}</div>
}

function HeroImg() {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
      {failed
        ? <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #2a3a32, #243028 55%, #08100a)' }} />
        : <img src={HERO_IMG} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
        <Eyebrow color="#9ec1f5">Battle · Western Theatre</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Fort Blakeley</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>April 9, 1865 · Baldwin County, Alabama</div>
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
        <span><span style={{ color: ACCENTS.rust }}>■</span> Confederacy ~{num(CAS.csa)} (mostly captured)</span>
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
            {([['Date', 'Apr 9, 1865'], ['Captured', '~2,800'], ['Winner', 'Union']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Union victory · the war’s last major battle</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Canby’s overwhelming numbers carried Fort Blakeley’s thinly held wall in about thirty minutes, capturing more than 2,800 Confederates and opening the road to Mobile, which surrendered three days later. It was the last combined-force battle of the Civil War and the last large charge of the war, fought just hours after Lee surrendered at Appomattox, though neither side at Blakeley knew it. The wall was carried in good part by 5,000 United States Colored Troops, Black soldiers helping take the last fort of a country built to keep them enslaved.
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

export default function FortBlakeleyPage() {
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
