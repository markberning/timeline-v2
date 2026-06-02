'use client'

// BATTLE dossier (Battle of Cold Harbor). Same shape as Shiloh/Antietam: hero · collapsible
// At-a-glance (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.violet
const CRUMBS = civilWarCrumbs({ theatre: 'east', battleId: 'e-coldharbor' })

const HERO_IMG = '/war-img/cold-harbor-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Army of the Potomac (+ XVIII Corps)', size: '~108,000–117,000 troops', commander: 'Grant & Meade', note: 'Charged seven miles of finished trench on June 3 and was thrown back, bloodily, for nothing.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of Northern Virginia', size: '~59,000–62,000 troops', commander: 'Lee', note: 'Given a free day to dig, it turned the ground into a fort and broke the assault.', color: ACCENTS.rust },
]
const CAS = { union: 12738, csa: 5287 }
const FIGURES = [
  { name: 'Ulysses S. Grant', role: 'General-in-chief', side: 'U', img: '/war-img/cmdr/grant.jpg', blurb: 'Riding with the Army of the Potomac as general-in-chief of all United States armies, Grant ordered the June 3 dawn assault on Lee’s finished works in the belief the Confederate line could be broken. It failed in about an hour, and he called it off around noon; years later he wrote that he had always regretted ordering the last assault at Cold Harbor.' },
  { name: 'George G. Meade', role: 'Army of the Potomac', side: 'U', img: '/war-img/cmdr/meade.jpg', blurb: 'As commander of the Army of the Potomac, Meade passed Grant’s order down the line and set three corps charging west from Old Cold Harbor on June 3. He thought the attack against entrenched infantry was close to suicidal but did not press the objection on Grant.' },
  { name: 'Winfield Scott Hancock', role: 'II Corps, Union', side: 'U', img: '/war-img/cmdr/hancock.jpg', blurb: 'Hancock’s II Corps held the southern end of the assault and drove clean through Breckinridge’s front, the only real lodgment won inside the Confederate works that morning. A counterattack threw his men back out with heavy loss, and the one breakthrough of the day was gone in minutes.' },
  { name: 'Horatio G. Wright', role: 'VI Corps, Union', side: 'U', img: '/war-img/cmdr/wright.jpg', blurb: 'Wright’s VI Corps attacked in the center on June 3, advanced a short distance into heavy fire, and bogged down well short of the trench. Rather than feed his men into the works he had them stop and dig in.' },
  { name: 'William F. “Baldy” Smith', role: 'XVIII Corps, Union', side: 'U', img: '/war-img/cmdr/wf-smith.jpg', blurb: 'Smith’s XVIII Corps, on loan from the Army of the James, charged on the northern flank and was funneled into ravines swept by fire from the sides, the deadliest sector of the field. He thought the order suicidal and afterward called it an order to slaughter his best troops.' },
  { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/lee.jpg', blurb: 'Lee used the day Grant gave him on June 2 to have the Army of Northern Virginia dig some seven miles of fieldworks, laid out so its sections could rake each other’s fronts. Behind that line his outnumbered army broke the June 3 assault and inflicted one of the most lopsided defeats of the war.' },
  { name: 'Richard H. Anderson', role: 'First Corps, CSA', side: 'C', img: '/war-img/cmdr/anderson.jpg', blurb: 'Anderson commanded Lee’s First Corps, holding the center of the entrenched Confederate line on June 3. His sector, like most of the works, turned back the Union attack with little ground gained against it.' },
]
const SECTIONS = [
  { id: 'the-crossroads', eyebrow: 'Cold Harbor · A harbor with no water', title: 'Why Two Armies Raced for a Virginia Tavern', blurb: 'Grant slides southeast one more time and both armies race for a crossroads on the doorstep of Richmond, the capital of a slaveholding republic Lee was sworn to shield.' },
  { id: 'the-trench', eyebrow: 'The works · Lee digs, Grant waits', title: 'How the Field Turned Into a Fort', blurb: 'A late II Corps postpones the attack a full day. Lee uses it to finish seven miles of fieldworks, dug in part by enslaved hands, while every hour the Federals wait makes June 3 deadlier.' },
  { id: 'the-assault', eyebrow: 'June 3 · The charge into the works', title: 'Sorting the Slaughter From the Legend', blurb: 'Three corps step off into the fog and the trench. Hancock (North) breaks through and is thrown out, Smith (North) is cut down in a fire-swept ravine, and the famous “7,000 in twenty minutes” turns out to be myth.' },
  { id: 'between-the-lines', eyebrow: 'June 4–12 · The men left in front of the works', title: 'The First Taste of the War That Was Coming', blurb: 'A week of head-down trench stalemate foreshadows World War I. Out in no-man’s-land, the June 3 wounded die for days while Grant and Lee deadlock over a truce.' },
  { id: 'the-pivot', eyebrow: 'The reckoning · What the slaughter set up', title: 'Two Trenches, One War', blurb: 'Grant regrets the assault and the press calls him a butcher, yet the failure forces the James crossing and the Petersburg siege that United States Colored Troops would spearhead, ending the slave republic the trench was dug to defend.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-crossroads': '/war-img/cold-harbor-overview.png',
  'the-trench': '/war-img/cmdr/lee.jpg',
  'the-assault': '/war-img/cold-harbor-june-3.png',
  'between-the-lines': '/war-img/cmdr/grant.jpg',
  'the-pivot': '/war-img/cmdr/grant.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/eastern/cold-harbor/s/${id}`
const num = (n: number) => n.toLocaleString('en-US')

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{children}</div>
}

function HeroImg() {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ position: 'relative', height: 260, overflow: 'hidden' }}>
      {failed
        ? <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #2e2640, #221c30 55%, #0a0810)' }} />
        : <img src={HERO_IMG} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 45%' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
        <Eyebrow color="#c4b5fd">Battle · Eastern Theatre</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Cold Harbor</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>May 31 – June 12, 1864 · Hanover County, Virginia</div>
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
            {([['Duration', '12 days'], ['Casualties', '~18,000'], ['Winner', 'Confederacy']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Confederate victory · the most criticized day of Grant’s career</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          The June 3 dawn assault failed utterly to break Lee’s seven miles of finished trench, and cost the Army of the Potomac its most one-sided beating since Fredericksburg: roughly 12,000 to 13,000 casualties across the twelve days against perhaps 4,500 to 5,300 Confederate, for, in Grant’s own words, no advantage whatever. The famous “7,000 in twenty minutes” is a myth, but the lopsidedness was real. And the very failure forced the move that won the war. Grant slipped the army across the James and swung on Petersburg, a siege spearheaded by United States Colored Troops that ended the Confederacy, and slavery with it.
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

export default function ColdHarborPage() {
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
