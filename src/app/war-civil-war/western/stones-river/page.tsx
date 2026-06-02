'use client'

// BATTLE dossier (Battle of Stones River). Same shape as Shiloh: hero · collapsible At-a-glance
// (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.blue
const CRUMBS = civilWarCrumbs({ theatre: 'west', battleId: 'w-stonesriver' })

const HERO_IMG = '/war-img/stones-river-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'Army of the Cumberland', size: '~43,400 troops', commander: 'Rosecrans', note: 'Surprised at dawn and folded back three miles, but it would not retreat.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Army of Tennessee', size: '~35,000 troops', commander: 'Bragg', note: 'Struck first and thought it had won, then bled itself white on January 2.', color: ACCENTS.rust },
]
const CAS = { union: 12906, csa: 11739 }
const FIGURES = [
  { name: 'William S. Rosecrans', role: 'Cmdr., Cumberland', side: 'U', img: '/war-img/cmdr/rosecrans.jpg', blurb: 'Rosecrans was caught off balance when Bragg struck his right at dawn on December 31, his chief of staff killed at his side by a cannonball as the two rode the lines. He refused his officers’ advice to retreat, held the army together near the Nashville Pike, and seized the high ground east of the river that decided the battle two days later.' },
  { name: 'George H. Thomas', role: 'Center, Union', side: 'U', img: '/war-img/cmdr/thomas.jpg', blurb: 'Thomas held the Union center near the pike and railroad as the right wing collapsed around him, turning back Polk’s piecemeal attacks with heavy loss to the Confederates. When the council of war debated retreat that night, he was among those who backed Rosecrans in deciding to stay and fight it out.' },
  { name: 'Philip H. Sheridan', role: 'Div., Union', side: 'U', img: '/war-img/cmdr/sheridan.jpg', blurb: 'Sheridan’s division dug in among the cedar brakes and stood for roughly four hours in the sector the soldiers named the Slaughter Pen, buying the time the rest of the army needed to form a new line. All three of his brigade commanders were killed and more than a third of his men fell before he pulled back, his ammunition gone.' },
  { name: 'Alexander M. McCook', role: 'Right Wing, Union', side: 'U', img: '/war-img/cmdr/mccook.jpg', blurb: 'McCook commanded the Union right wing, posted in open ground with its flank anchored on nothing, and bore the full weight of Hardee’s dawn attack. His men were caught at their cook fires and folded back roughly three miles before the line finally stiffened near the pike.' },
  { name: 'Braxton Bragg', role: 'Cmdr., Tennessee', side: 'C', img: '/war-img/cmdr/bragg.jpg', blurb: 'Bragg struck first on December 31, bent the Union line nearly double, and wired Richmond that he had won. When the enemy was still there two days later, he ordered Breckinridge into a doomed charge against his general’s protest, then withdrew his bled-white army south toward Tullahoma.' },
  { name: 'William J. Hardee', role: 'Corps, CSA', side: 'C', img: '/war-img/cmdr/hardee.jpg', blurb: 'Hardee, the army’s ablest tactician and author of its drill manual, led the dawn assault that swept out of the cedars and crumpled the Union right. His attack drove McCook’s wing back three miles before Sheridan’s stand and the line near the pike halted the Confederate advance.' },
  { name: 'Leonidas Polk', role: 'Corps, CSA', side: 'C', img: '/war-img/cmdr/polk.jpg', blurb: 'Polk’s corps struck the Union center to keep Thomas from reinforcing the collapsing right, but his attacks went in piecemeal and were turned back at heavy cost. His repeated assaults on the Round Forest, the salient the soldiers called Hell’s Half Acre, could not break the one piece of the original Union line that never gave ground.' },
  { name: 'John C. Breckinridge', role: 'Div., CSA', side: 'C', img: '/war-img/cmdr/breckinridge.jpg', blurb: 'A former Vice President of the United States, Breckinridge protested Bragg’s January 2 order to storm the Union-held hill as suicidal, then led the charge when he was overruled. Roughly fifty massed Union guns on the far bank tore his division apart in under an hour, nearly destroying the Kentucky Orphan Brigade in the process.' },
]
const SECTIONS = [
  { id: 'the-armies-face-off', eyebrow: 'Two mirror-image plans', title: 'The Year Turns at Murfreesboro', blurb: 'Rosecrans (North) marches out of Nashville; Bragg (South) turns to face him, and both generals plan the identical dawn attack.' },
  { id: 'the-dawn-blow', eyebrow: 'December 31, before breakfast', title: 'The Confederate Jackknife', blurb: 'Hardee (South) strikes first and folds the Union right back three miles; Sheridan (North) bleeds for four hours in the Slaughter Pen to save the army.' },
  { id: 'the-new-years-pause', eyebrow: 'January 1', title: 'The Day Nobody Moved', blurb: 'A day almost nothing happens, and the Emancipation Proclamation takes effect over a battlefield that has no idea its whole meaning just changed.' },
  { id: 'breckinridges-charge', eyebrow: 'January 2, four o’clock', title: 'The Charge at McFadden’s Ford', blurb: 'Bragg (South) orders Breckinridge (South) into an assault his own general calls suicidal; fifty massed Union guns annihilate it in under an hour.' },
  { id: 'the-cost-and-the-meaning', eyebrow: 'The cost & the meaning', title: 'A Hard-Earned Victory', blurb: '~25,000 fall in three days at one of the highest casualty rates of the war. Bragg retreats; the North gets the win that backstops emancipation.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-armies-face-off': '/war-img/stones-river-overview.png',
  'the-dawn-blow': '/war-img/stones-river.png',
  'the-new-years-pause': '/war-img/cmdr/rosecrans.jpg',
  'breckinridges-charge': '/war-img/stones-river-day2.png',
  'the-cost-and-the-meaning': '/war-img/cmdr/breckinridge.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/western/stones-river/s/${id}`
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
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Stones River</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>December 31, 1862 – January 2, 1863 · Murfreesboro, Tennessee</div>
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
            {([['Duration', '3 days'], ['Casualties', '~24,600'], ['Winner', 'Union']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Union victory · the win that backstopped emancipation</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Bragg’s dawn surprise folded the Union right back three miles and very nearly destroyed Rosecrans’s army before breakfast, but the line held near the Nashville Pike and refused to retreat. After a strange, still New Year’s Day, Bragg threw away a division in Breckinridge’s doomed January 2 charge, then withdrew. The fighting was as concentrated as any in the war, one of its highest casualty rates, but the meaning was in the timing: Stones River was the first major Union victory of the Emancipation Proclamation era, handing Lincoln a desperately needed win at the exact moment the war became, in law, a war to end slavery.
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

export default function StonesRiverPage() {
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
