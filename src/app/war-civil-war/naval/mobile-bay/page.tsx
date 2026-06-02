'use client'

// BATTLE dossier (Battle of Mobile Bay). Same shape as Shiloh/Forts Jackson: hero ·
// collapsible At-a-glance (stat strip + fleets face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md). Naval theatre — fleets, not regiments.

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.rust
const CRUMBS = civilWarCrumbs({ theatre: 'naval', battleId: 'n-mobilebay' })

const HERO_IMG = '/war-img/mobile-bay-hero.jpg'
const ARMIES = [
  { side: 'Union', label: 'West Gulf Blockading Squadron', size: '4 monitors + 14 wooden ships', commander: 'R. Adm. David G. Farragut', note: 'Lashed his ships in pairs and drove straight over a minefield to cork the last Gulf door.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'Forts Morgan & Gaines + CSS Tennessee', size: '1 ironclad + 3 gunboats · 2 forts', commander: 'Adm. Franklin Buchanan', note: 'One slow ironclad turned and fought the whole fleet alone.', color: ACCENTS.rust },
]
const CAS = { union: 320, csa: 312 }
const FIGURES = [
  { name: 'David G. Farragut', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/farragut.jpg', blurb: 'Farragut planned to run his whole fleet past the forts and over the minefield to cork the bay, lashing his wooden ships in pairs for the passage. When the lead monitor sank and the column froze under Fort Morgan’s guns, he swung his flagship Hartford into the lead and drove straight through the mines, the decision the famous “damn the torpedoes” line was built around.' },
  { name: 'Tunis A. M. Craven', role: '† USS Tecumseh', side: 'U', img: '/war-img/cmdr/craven.jpg', blurb: 'Craven led the monitor column aboard Tecumseh and, trying to close on the Confederate ironclad, steered west of the marker buoys onto the mined side of the channel. Tecumseh struck a torpedo and went down in under half a minute, taking Craven and most of her crew with her, the single deadliest moment of the battle.' },
  { name: 'Gordon Granger', role: 'Land siege, Union', side: 'U', img: '/war-img/cmdr/granger.jpg', blurb: 'Granger landed his infantry on Dauphin Island days before the fleet went in, opening the land siege so each fort would be squeezed between his troops behind it and the navy’s guns in front. His men pressed Fort Gaines into surrender on August 8 and then shifted across the bay to invest Fort Morgan until it gave up on August 23.' },
  { name: 'Franklin Buchanan', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/buchanan.jpg', blurb: 'Buchanan, the senior Confederate naval officer afloat, commanded the defending squadron from the ironclad ram CSS Tennessee. After his three gunboats were wrecked or taken, he turned the slow Tennessee back into the entire Union fleet alone and fought until a broken leg and a battered ship forced her surrender.' },
  { name: 'Richard L. Page', role: 'Fort Morgan, CSA', side: 'C', img: '/war-img/cmdr/rl-page.jpg', blurb: 'Page commanded Fort Morgan, the strong fort guarding the east side of the channel, and kept its forty-six guns firing on the fleet as it ran past. With the bay lost and Granger’s siege guns leapfrogging closer, he held out under bombardment until August 23 before surrendering the last fort.' },
]
const SECTIONS = [
  { id: 'the-last-door', eyebrow: 'Mobile Bay · The prize', title: 'The Last Door on the Gulf', blurb: 'By August 1864 Mobile is the Confederacy’s last big Gulf port, the blockade-runners’ surviving hub, guarded by two forts and a minefield.' },
  { id: 'running-the-forts', eyebrow: 'Dawn, August 5', title: 'Lashed in Pairs, Straight at the Guns', blurb: 'Farragut (North) runs his fleet at the channel, monitors leading and wooden ships tied in pairs, straight under Fort Morgan’s guns.' },
  { id: 'damn-the-torpedoes', eyebrow: '~7:30 a.m.', title: 'Damn the Torpedoes', blurb: 'Craven (North) steers Tecumseh into the mines and she sinks in seconds. Brooklyn stalls, and Farragut drives Hartford through anyway.' },
  { id: 'the-tennessee', eyebrow: 'Inside the bay', title: 'One Ironclad Against a Fleet', blurb: 'Buchanan (South) turns CSS Tennessee back into the entire Union fleet alone, and fights until she is battered into surrender.' },
  { id: 'what-it-won', eyebrow: 'The cost & the meaning', title: 'The Door, the Reason, and the Men on the Deck', blurb: 'The port is corked, the forts fall, and Lincoln’s re-election turns, while formerly enslaved men work the flagship’s guns.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-last-door': '/war-img/mobile-bay-the-bay.png',
  'running-the-forts': '/war-img/mobile-bay-running-the-forts.png',
  'damn-the-torpedoes': '/war-img/mobile-bay-running-the-forts.png',
  'the-tennessee': '/war-img/mobile-bay-the-tennessee.png',
  'what-it-won': '/war-img/cmdr/farragut.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/naval/mobile-bay/s/${id}`
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
        : <img src={HERO_IMG} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 50%' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)' }} />
      <div style={{ position: 'absolute', left: 16, right: 16, bottom: 14 }}>
        <Eyebrow color="#e3b3a5">Battle · Naval</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>Battle of Mobile Bay</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>August 5, 1864 · Mobile Bay, Alabama</div>
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
        <span><span style={{ color: ACCENTS.rust }}>■</span> Confederacy ~{num(CAS.csa)} + ~1,500 captured</span>
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
            {([['Duration', 'One morning'], ['Casualties', '~630 + forts'], ['Winner', 'Union']] as const).map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Union victory · the last Gulf door shuts</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          Farragut’s fleet forced the bay, losing the monitor Tecumseh and most of its dead to a single mine in thirty seconds, then drove through the minefield, swarmed CSS Tennessee, and closed Mobile to blockade-runners. The forts fell over the following weeks. Coming three months before the 1864 election and just ahead of Atlanta’s fall, it helped turn Northern gloom into momentum and assure Lincoln’s re-election. On the flagship’s gun decks, formerly enslaved men were working the guns that shut the Confederacy’s last Gulf door.
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

export default function MobileBayPage() {
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
