'use client'

// BATTLE dossier (Fort Stedman). Same shape as Antietam: hero · collapsible
// At-a-glance (stat strip + armies face-off + casualties bar) · commanders strip ·
// outcome pill · numbered section list. Content produced through the war content
// pipeline (audits/war-content-pipeline.md). Facts web-verified against American
// Battlefield Trust, NPS (Petersburg National Battlefield), and Wikipedia.

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, CIVIL_WAR_ACCENT as ACCENT, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const CRUMBS = civilWarCrumbs({ theatre: 'east', battleId: 'e-fortstedman' })

const HERO_IMG = '/war-img/fort-stedman-hero.jpg'
const HERO_PAL = ['#2a241c', '#4a2c24', '#0f0807']

const ARMIES = [
  { side: 'Confederacy', label: 'Army of Northern Virginia', size: '~10,000', commander: 'Maj. Gen. John B. Gordon', note: 'Threw its best assault troops at one fort before dawn, the army’s last roll of the dice.', color: ACCENTS.rust },
  { side: 'Union', label: 'Army of the Potomac (IX Corps)', size: '~15,000', commander: 'Maj. Gen. John G. Parke', note: 'Caught by surprise, then sealed the breach and turned the lost ground into a trap.', color: ACCENTS.blue },
]
const CAS = { union: 1044, csa: 4000, civ: 0 }
const FIGURES = [
  { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/lee.jpg', blurb: 'Starved, outnumbered, and watching his lines stretch toward breaking, Lee approved Gordon’s pre-dawn gamble as his one chance to break the siege and slip the army south to join Johnston. He rode up to watch it fail, then authorized the withdrawal once the breakthrough stalled and the ring closed.' },
  { name: 'John B. Gordon', role: 'Attack cmdr., CSA', side: 'C', img: '/war-img/cmdr/gordon.jpg', blurb: 'Gordon studied Fort Stedman for weeks, then planned and led the assault: axemen and men posing as deserters to clear the way, a rush in the dark that took the fort and its flanking batteries within an hour. When his columns failed to find the rear forts they were sent for and the Union guns ringed him in, he pulled back what he could of a wrecked attack.' },
  { name: 'Ulysses S. Grant', role: 'Gen.-in-chief, Union', side: 'U', img: '/war-img/cmdr/grant.jpg', blurb: 'Grant was at City Point and already had his own offensive set to open within days. He let Parke handle the morning, then used the failed sortie as cover to seize Confederate picket lines elsewhere on the front, ground that helped open the breakthrough a week later.' },
  { name: 'John G. Parke', role: 'Acting cmdr., Potomac', side: 'U', img: '/war-img/cmdr/parke.jpg', blurb: 'With Meade away, Parke commanded the Army of the Potomac that morning and the IX Corps holding the breached line. He kept his head at the hole in his center, ordered the reserve division forward to seal it, and put the reserve artillery on a ridge behind the lost forts to shell the lodgement.' },
  { name: 'John F. Hartranft', role: 'Reserve div., Union', side: 'U', img: '/war-img/cmdr/hartranft.jpg', blurb: 'Hartranft fed his green Pennsylvania regiments in piece by piece to contain the breakthrough, building a curving wall nearly a mile and a half long around the entire Confederate penetration. A little before 8 a.m. he ordered the ring forward, retook Fort Stedman and its batteries, and collapsed the lodgement.' },
  { name: 'Napoleon B. McLaughlen', role: 'Sector cmdr., Union', side: 'U', img: '/war-img/cmdr/mclaughlen.jpg', blurb: 'McLaughlen commanded the stretch of line around Fort Stedman and rode up in the dark to steady his men. He began calmly giving orders before realizing the soldiers around him were Confederates who had just taken the fort, and was captured, surrendering his sword to Gordon.' },
]
const SECTIONS = [
  { id: 'last-card', eyebrow: 'Lee’s last card', title: 'A general out of options', blurb: 'Nine months in the Petersburg trenches, an army starving and deserting, and Gordon brings Lee a plan to break out before Grant’s noose closes.' },
  { id: 'before-dawn', eyebrow: 'The assault', title: 'Before dawn', blurb: 'Axemen and fake deserters clear the way in the dark; the fort and its batteries fall in an hour, then the breakthrough goes looking for forts that aren’t there.' },
  { id: 'crossfire', eyebrow: 'The counterattack', title: 'The ring of guns', blurb: 'Parke keeps his head and Hartranft (North) builds a wall of troops around the breach; the captured ground becomes a killing pocket.' },
  { id: 'the-reckoning', eyebrow: 'The cost & the meaning', title: 'The last sortie', blurb: '4,000 men gone for nothing in four hours. The Army of Northern Virginia’s final attack, and a week later the line breaks for good.' },
]
const SECTION_IMG: Record<string, string> = {
  'last-card': '/war-img/fort-stedman-last-card.jpg',
  'before-dawn': '/war-img/fort-stedman-assault.jpg',
  'crossfire': '/war-img/fort-stedman-counterattack.jpg',
  'the-reckoning': '/war-img/fort-stedman-reckoning.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/eastern/fort-stedman/s/${id}`
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
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Fort Stedman</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>March 25, 1865 · Petersburg, Virginia</div>
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
            {[['Duration', '~4 hours'], ['Casualties', '~5k'], ['Winner', 'Union']].map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Union victory · the last gasp of Lee’s army</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Gordon’s dawn assault took Fort Stedman and its batteries within an hour, then stalled when its columns could not find the forts they were sent to seize. Parke sealed the breach and Hartranft (North) ringed it with troops and guns, turning the captured ground into a killing pocket; by 8 a.m. it was over, the line back where it began. The Confederates lost roughly 4,000 men they could not replace against about 1,044 for the Union. It was the Army of Northern Virginia’s last offensive. Within days Grant’s own attack opened, Five Forks fell on April 1 and Petersburg on April 2, and Lee surrendered at Appomattox two weeks later.
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

export default function FortStedmanPage() {
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
