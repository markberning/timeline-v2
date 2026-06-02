'use client'

// BATTLE dossier (Battle of Mansfield / Sabine Crossroads). Same shape as
// Port Hudson/Shiloh: hero · collapsible At-a-glance · outcome card ·
// commanders strip · section list. Content produced through the war content
// pipeline (audits/war-content-pipeline.md): audits/war-pipeline/mansfield-final.md
// + mansfield-factpack.md.

import { useState } from 'react'
import { WarBreadcrumb, WarSectionNav, CHROME_TOP, SANS, SERIF, ACCENTS, alpha } from '@/components/mode/war-chrome'
import { CommandersStrip } from '@/components/mode/commanders-strip'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.amber // Trans-Mississippi theatre
const CRUMBS = civilWarCrumbs({ theatre: 'tmis', battleId: 't-mansfield' })

const HERO_IMG = '/war-img/mansfield-hero.jpg'
const HERO_PAL = ['#3a3320', '#4a2a1a', '#100806']

const ARMIES = [
  { side: 'Union', label: 'Red River expedition', size: '~12,000 engaged', commander: 'Maj. Gen. Nathaniel P. Banks', note: 'An army strung out for miles on one road; only its head could fight.', color: ACCENTS.blue },
  { side: 'Confederacy', label: 'District of West Louisiana', size: '~8,800–11,000', commander: 'Maj. Gen. Richard Taylor', note: 'Outnumbered overall, but waiting where the road let him be bigger.', color: ACCENTS.rust },
]
// Casualty framing per fact pack: Union ≈ 2,100–2,235 with ~1,500 captured/missing
// as the headline (a rout); Confederate ≈ 1,000 (Kirby Smith's estimate, no precise
// returns). Bar shows the round figures; ranges noted below it.
const CAS = { union: 2235, csa: 1000 }
const FIGURES = [
  { name: 'Nathaniel P. Banks', role: 'Cmdr., Union', side: 'U', img: '/war-img/cmdr/banks.jpg', blurb: 'Banks pushed his army up a single road toward Shreveport against the warnings of his own cavalry commander and decided to fight at the clearing south of Mansfield even after being told a full battle there would go badly. When the front collapsed he rode into the retreat and pleaded with his men to stand, and they ran past him; the defeat broke his Red River Campaign and effectively ended his military career.' },
  { name: 'William B. Franklin', role: 'XIX Corps, Union', side: 'U', img: '/war-img/cmdr/franklin.jpg', blurb: 'Franklin commanded the XIX Corps and was the senior field general under Banks during the advance. He was wounded in the leg in the fighting but stayed on the field in command, and the bulk of his corps, including Emory’s division, was still intact to backstop the rout down the road.' },
  { name: 'Thomas E. G. Ransom', role: 'XIII Corps, Union', side: 'U', img: '/war-img/cmdr/ransom.jpg', blurb: 'Ransom led the leading infantry detachment, the XIII Corps troops at the head of the column who took the worst of the assault. He was wounded trying to rally the wreck as the Confederate crescent folded his line in from both flanks.' },
  { name: 'David Dixon Porter', role: 'Fleet, Union', side: 'U', img: '/war-img/cmdr/dd-porter.jpg', blurb: 'Porter’s gunboat fleet had carried the expedition up the Red River, but Banks left the river for the inland road, so the fleet was not present at the battle. After the defeat the falling river nearly stranded his squadron, which escaped only when soldiers dammed the rapids to float the boats over.' },
  { name: 'Richard Taylor', role: 'Cmdr., CSA', side: 'C', img: '/war-img/cmdr/richard-taylor.jpg', blurb: 'Taylor chose the clearing south of Mansfield as the place to make his stand and waited for two hours while the Union column piled up in front of his crescent. When he ordered the assault around four o’clock, his concentrated army wrecked the head of a force that outnumbered him across the theater, winning one of the most lopsided victories of the Trans-Mississippi war.' },
  { name: 'Alfred Mouton †', role: 'Division, CSA', side: 'C', img: '/war-img/cmdr/mouton.jpg', blurb: 'Mouton led the opening Confederate charge east of the road, straight into the Union line on Honeycutt Hill, and was killed in the first rush along with several of his regimental commanders. A Louisiana native and slaveholding sugar planter, he died about three miles from the town he was defending.' },
  { name: 'Prince de Polignac', role: 'Division, CSA', side: 'C', img: '/war-img/cmdr/polignac.jpg', blurb: 'Camille de Polignac, a French nobleman who had crossed an ocean to fight for the Confederacy, inherited Mouton’s division by battlefield promotion the moment Mouton fell. He pressed the shattered division onward and helped drive the broken Union front south into its own jammed wagon train.' },
]
const SECTIONS = [
  { id: 'the-river-and-the-cotton', eyebrow: 'Red River, 1864', title: 'The River and the Cotton', blurb: 'Why a Union army was 150 miles up a Louisiana river: to take Shreveport, warn off the French in Mexico, and seize the slave-grown cotton Banks (North) reached for.' },
  { id: 'the-narrow-road', eyebrow: 'April 8, morning', title: 'One Road Through the Pines', blurb: 'Banks’s column strung out for miles on a single stage road; Taylor (South) waited at a clearing, counting not the totals but the road, where a smaller army could be bigger at the point of contact.' },
  { id: 'the-rout', eyebrow: 'April 8, ~4 p.m.', title: 'The Crescent Closes', blurb: 'Two hours of waiting, then Mouton (South) charges and falls; Walker (South) wraps the flank; the Union line breaks and slams into its own wagon train on the one road.' },
  { id: 'what-it-cost', eyebrow: 'The reckoning', title: 'The Campaign Breaks on a Back Road', blurb: 'A lopsided Confederate win, Mouton dead three miles from home, Emory’s (North) backstop the only southern edge, and every aim of the campaign, cotton included, gone.' },
]
const SECTION_IMG: Record<string, string> = {
  'the-river-and-the-cotton': '/war-img/cmdr/banks.jpg',
  'the-narrow-road': '/war-img/mansfield-overview.png',
  'the-rout': '/war-img/mansfield-the-rout.png',
  'what-it-cost': '/war-img/cmdr/richard-taylor.jpg',
}
const sectionHref = (id: string) => `/war-civil-war/trans-mississippi/mansfield/s/${id}`
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
        <Eyebrow color="#f0c089">Battle · Trans-Mississippi</Eyebrow>
        <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.05, letterSpacing: -0.5, color: '#fff' }}>The Battle of Mansfield</h1>
        <div style={{ fontFamily: SERIF, fontSize: 14, color: 'rgba(255,255,255,0.82)', marginTop: 4 }}>April 8, 1864 · De Soto Parish, Louisiana <span style={{ opacity: 0.7 }}>(Sabine Crossroads)</span></div>
      </div>
    </div>
  )
}

function CasualtiesBar() {
  const total = CAS.union + CAS.csa
  const seg = (v: number, c: string) => <div style={{ width: `${(v / total) * 100}%`, background: c, height: '100%' }} />
  return (
    <div>
      <div style={{ display: 'flex', height: 10, borderRadius: 5, overflow: 'hidden', marginBottom: 8 }}>
        {seg(CAS.union, ACCENTS.blue)}{seg(CAS.csa, ACCENTS.rust)}
      </div>
      <div style={{ display: 'flex', gap: 16, fontFamily: SANS, fontSize: 11, color: 'color-mix(in srgb, var(--foreground) 65%, transparent)' }}>
        <span><span style={{ color: ACCENTS.blue }}>■</span> Union ~{num(CAS.union)}</span>
        <span><span style={{ color: ACCENTS.rust }}>■</span> Confederacy ~{num(CAS.csa)}</span>
      </div>
      <div style={{ fontFamily: SANS, fontSize: 10.5, lineHeight: 1.45, color: 'color-mix(in srgb, var(--foreground) 52%, transparent)', marginTop: 6 }}>
        Union ≈ 2,100–2,235, with some 1,500 captured or missing, the fingerprint of a rout, not a stand-up fight. Confederate ≈ 1,000 (Kirby Smith’s estimate; no precise returns were recorded).
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
            {[['Date', 'Apr 8, 1864'], ['Captured', '~1,500'], ['Winner', 'Confederacy']].map(([k, v], i) => (
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
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 500, lineHeight: 1.25, marginTop: 5 }}>Confederate victory · the campaign breaks</div>
        <p style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 80%, transparent)', margin: '8px 0 0' }}>
          On April 8, 1864, Maj. Gen. Richard Taylor (South), outnumbered across the theater, concentrated his army against the head of Maj. Gen. Nathaniel Banks’s (North) strung-out column and shattered it on a single narrow road through the Louisiana pines. The disproportion flipped the usual Civil War arithmetic: the attacker lost roughly half what the defender did, who saw some 1,500 men marched off as prisoners. Mansfield broke the Union’s Red River Campaign, and every one of its four aims died with it: no Shreveport, no flag planted in Texas, no 100,000 bales of slave-grown cotton, no expanded pro-Union government. The whole bungled expedition effectively ended Banks’s military career.
        </p>
      </div>
    </div>
  )
}

function Thumb({ file, w, h }: { file: string; w: number; h: number }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ width: w, height: h, borderRadius: 6, overflow: 'hidden', flexShrink: 0, background: 'linear-gradient(135deg, #3a2e21, #1c1814)' }}>
      {!failed && <img src={file} alt="" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />}
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

export default function MansfieldPage() {
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
