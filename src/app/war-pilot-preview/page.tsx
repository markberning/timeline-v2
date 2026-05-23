'use client'

// PREVIEW ONLY — throwaway prototype for the War pilot. Centerpiece: a BATTLE
// STORY (every mid-to-major battle is its own full story — "what came before",
// the battle w/ dual POV, "what it meant" + stats — NOT a card+stats stub).
// B (living map) described, D (commander arc) facsimile. Sample content, not
// production. Remove once the real Civil War pilot ships. /war-pilot-preview.

import { useState } from 'react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'

// War (oxblood) accent — hardcoded; no war TL exists yet.
const WAR = { base: '#b91c1c', baseDark: '#ef4444', text: '#7f1d1d', badge: '#991b1b' }

type Pov = 'union' | 'confederate'

// Day-three climax, told from each side (the dual-POV moment).
const POV_PROSE: Record<Pov, { label: string; body: string }> = {
  union: {
    label: 'Union',
    body:
      'From Cemetery Ridge the men of the Army of the Potomac watched the woods opposite go quiet — and then roughly twelve thousand Confederates stepped into the open and started across nearly a mile of farmland in parade-ground order. The Union artillery switched to canister, and the rifles opened all along the low stone wall. The gray lines kept coming and closed up the holes, and a few hundred men actually crossed the wall at a little clump of trees — the spot forever after called the high-water mark of the Confederacy — before they were shot down or dragged off as prisoners. The rest fell back across their own dead. The line held.',
  },
  confederate: {
    label: 'Confederate',
    body:
      'Lee had beaten this army again and again, and he believed one more blow at its center would finally crack it. Over Longstreet’s blunt objection he ordered the charge, with George Pickett’s fresh Virginia division at its heart. They went in with the colors up and the ranks dressed, and for a few unbearable minutes it looked almost possible. Then the canister and the massed rifles found them and tore the formation to pieces. Barely half of those who started came back. Lee rode out among the survivors, saying over and over, “It is all my fault.”',
  },
}

const BEFORE: string[] = [
  'By the summer of 1863 the war in the East had hardened into a bloody stalemate, and Robert E. Lee — fresh from a brilliant victory at Chancellorsville — decided to break the deadlock by doing something audacious: carry the war out of ravaged Virginia and onto Northern soil. A win on Union ground, he reasoned, might let his army feed off untouched farmland, frighten Northern voters in an election season, and maybe push a war-weary Washington toward simply letting the South go.',
  'So in June he marched the Army of Northern Virginia north. Hurrying to get between Lee and the Northern cities came the Army of the Potomac under George Meade — a careful, sharp-tempered engineer handed command of the entire army just three days earlier. Neither general picked the battlefield. On July 1, Confederate infantry and Union cavalry collided almost by accident at a market town where a dozen roads met: Gettysburg. Once the shooting started, both armies poured toward the sound of the guns.',
]

const DAY1: string[] = [
  'The first day nearly went to the Confederates. They drove the outnumbered Union troops back through the streets of Gettysburg in hard fighting that killed one of the North’s best generals, John Reynolds, in its opening hour. But as the bluecoats fell back, they fell back onto exactly the ground they needed — a chain of hills and ridges south of town curved like a fishhook. By nightfall Meade’s army was dug in on the high ground and Lee’s was strung in a long arc below it. Everything that followed was Lee trying to pry the Union off those heights.',
]

const DAY2: string[] = [
  'On the second day Lee swung at both ends of the fishhook. On the Union left, Longstreet’s men crashed into a string of places that are famous now and were nameless then — Devil’s Den, the Wheatfield, the Peach Orchard — where a Union corps had pushed recklessly out ahead of the line and was nearly destroyed for it. At the very end of the line, on a rocky knob called Little Round Top, a college professor turned colonel named Joshua Chamberlain held the extreme flank of the whole Union army with the 20th Maine — and when his men ran out of cartridges, he ordered a downhill bayonet charge that swept the attackers off the slope.',
  'On the Union right, Confederate troops clawed partway up Culp’s Hill and East Cemetery Hill in the dusk before being thrown back down. It was some of the most savage fighting of the entire war, and at the end of it the line — bent, battered, bleeding — still held. Lee had hit both flanks and broken neither.',
]

const DAY3: string[] = [
  'So on the third day Lee did the thing his most trusted general had begged him not to do: he aimed straight at the center. Early that afternoon the largest artillery bombardment ever heard on the continent — some 150 Confederate guns — opened on Cemetery Ridge, meant to shatter the Union middle before the infantry stepped off. Then the guns fell silent, and across the fields the waiting men knew what the silence meant.',
]

const MEANING: string[] = [
  'Three days of fighting left something on the order of fifty thousand men killed, wounded, or missing — the bloodiest battle ever fought in the Western Hemisphere. Lee had lost close to a third of his army, irreplaceable men, and on July 4 he began the long, rain-soaked retreat back to Virginia. He would never invade the North again.',
  'That same Fourth of July, a thousand miles to the west, the Confederate fortress of Vicksburg surrendered to Ulysses S. Grant, handing the Union the whole Mississippi River and cutting the Confederacy in two. Historians still argue whether any single day “decided” the war, but the momentum never came back to the South after that first week of July 1863. And when Lincoln came to Gettysburg that November to dedicate a cemetery for the dead, he spent barely two minutes redefining what all of it had been for — a test of whether a nation “conceived in liberty,” governed “of the people, by the people, for the people,” could endure.',
]

// Sample rows for the complete battle index (real index would hold all ~280).
const INDEX_SAMPLE = [
  { date: 'Jul 1861', name: 'Bull Run (First)', theater: 'East', tier: 'Major' },
  { date: 'Apr 1862', name: 'Shiloh', theater: 'West', tier: 'Major' },
  { date: 'Sep 1862', name: 'Antietam', theater: 'East', tier: 'Decisive' },
  { date: 'Dec 1862', name: 'Fredericksburg', theater: 'East', tier: 'Major' },
  { date: 'May 1863', name: 'Chancellorsville', theater: 'East', tier: 'Major' },
  { date: 'Jul 1863', name: 'Gettysburg', theater: 'East', tier: 'Decisive' },
  { date: 'Jul 1863', name: 'Vicksburg', theater: 'West', tier: 'Decisive' },
  { date: 'Sep 1863', name: 'Chickamauga', theater: 'West', tier: 'Mid' },
]

// D — a figure's arc synthesized into one continuous thread.
const COMMANDER_ARCS: Record<string, { ch: number; title: string; beat: string }[]> = {
  'Robert E. Lee': [
    { ch: 2, title: 'Takes command', beat: 'Given the Army of Northern Virginia outside Richmond — and turns a defensive war aggressive.' },
    { ch: 4, title: 'First invasion north', beat: 'Crosses into Maryland; checked at Antietam, the bloodiest single day of the war.' },
    { ch: 7, title: 'High-water mark', beat: 'Gambles everything at Gettysburg. Pickett’s Charge fails; he never invades the North again.' },
    { ch: 8, title: 'Cornered', beat: 'Pinned into the trenches at Petersburg as Grant grinds him down.' },
    { ch: 9, title: 'Surrender', beat: 'Lays down arms at Appomattox Court House, April 1865.' },
  ],
  'Ulysses S. Grant': [
    { ch: 5, title: 'Rises in the West', beat: 'Wins at Forts Henry and Donelson, survives Shiloh — the North finds a general who fights.' },
    { ch: 7, title: 'Takes Vicksburg', beat: 'Splits the Confederacy and wins the Mississippi the same week as Gettysburg.' },
    { ch: 8, title: 'General-in-chief', beat: 'Brought east to face Lee; launches the Overland Campaign and total war.' },
    { ch: 9, title: 'Accepts surrender', beat: 'Meets Lee at Appomattox and lets the beaten army go home.' },
    { ch: 10, title: 'The terms', beat: 'His magnanimity in victory shapes how the peace begins.' },
  ],
  'Abraham Lincoln': [
    { ch: 1, title: 'The election that broke the Union', beat: 'His 1860 win triggers secession before he is even inaugurated.' },
    { ch: 2, title: 'Chooses to hold', beat: 'Refuses to surrender Fort Sumter — and the war begins.' },
    { ch: 6, title: 'Redefines the war', beat: 'The Emancipation Proclamation makes it a war to end slavery.' },
    { ch: 9, title: 'Assassination', beat: 'Shot at Ford’s Theatre, five days after Appomattox.' },
    { ch: 10, title: 'The unfinished work', beat: 'Leaves the meaning of the war — and Reconstruction — to others.' },
  ],
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.45, marginBottom: 10, fontFamily: 'var(--font-geist-sans)' }}>
      {children}
    </div>
  )
}

// Labeled prose section — the "what came before / what it meant" structure
// the regular chapters use, applied to a battle.
function StorySection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-text)', marginBottom: 6, fontFamily: 'var(--font-geist-sans)', fontWeight: 700 }}>{label}</div>
      {children}
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, fontFamily: 'var(--font-geist-sans)' }}>{label}</div>
      <div style={{ fontSize: 15, marginTop: 2 }}>{value}</div>
    </div>
  )
}

function Side({ name, who, forces }: { name: string; who: string; forces: string }) {
  return (
    <div style={{ flex: 1, minWidth: 0 }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-text)', marginBottom: 8, fontFamily: 'var(--font-geist-sans)' }}>{name}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Stat label="Commander" value={who} />
        <Stat label="Forces" value={forces} />
      </div>
    </div>
  )
}

function CasualtyBar({ side, value, max }: { side: string; value: number; max: number }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 3, opacity: 0.7, fontFamily: 'var(--font-geist-sans)' }}>
        <span>{side}</span><span>~{value.toLocaleString()}</span>
      </div>
      <div style={{ height: 8, borderRadius: 4, background: 'color-mix(in srgb, var(--foreground) 10%, transparent)' }}>
        <div style={{ height: 8, borderRadius: 4, width: `${(value / max) * 100}%`, background: 'var(--accent)' }} />
      </div>
    </div>
  )
}

const proseStyle = { fontFamily: 'var(--font-lora)', fontSize: 16, lineHeight: 1.62, margin: 0 } as React.CSSProperties

export default function WarPilotPreview() {
  const [pov, setPov] = useState<Pov>('union')
  const [commander, setCommander] = useState('Robert E. Lee')
  const [showBattle, setShowBattle] = useState(false)

  return (
    <div
      className="accent-scope"
      style={{
        '--accent': WAR.base,
        '--accent-base-dark': WAR.baseDark,
        '--accent-text': WAR.text,
        '--accent-badge': WAR.badge,
        background: 'var(--background)',
        color: 'var(--foreground)',
        minHeight: '100dvh',
      } as React.CSSProperties}
    >
      <div style={{ maxWidth: 640, margin: '0 auto', padding: '20px 20px 90px' }}>
        {/* header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
          <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.4, fontFamily: 'var(--font-geist-sans)' }}>
            War pilot · preview · sample content
          </div>
          <DarkModeToggle />
        </div>

        {/* ── THE BATTLE STORY (the unit: every battle is one of these) ── */}
        <SectionLabel>Every battle is its own story</SectionLabel>
        <div style={{ border: '1px solid color-mix(in srgb, var(--foreground) 15%, transparent)', borderRadius: 12, padding: '20px 18px', background: 'color-mix(in srgb, var(--foreground) 3%, transparent)' }}>
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <span style={{ background: 'var(--accent-badge)', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', padding: '3px 7px', borderRadius: 4, fontFamily: 'var(--font-geist-sans)' }}>BATTLE</span>
            <span style={{ border: '1px solid var(--accent-text)', color: 'var(--accent-text)', fontSize: 9, fontWeight: 700, letterSpacing: '0.1em', padding: '3px 7px', borderRadius: 4, fontFamily: 'var(--font-geist-sans)' }}>⚑ DECISIVE</span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-lora)', fontSize: 30, fontStyle: 'italic', lineHeight: 1.12, marginBottom: 4 }}>Battle of Gettysburg</h1>
          <div style={{ fontSize: 14, opacity: 0.6, marginBottom: 22, fontFamily: 'var(--font-lora)' }}>July 1–3, 1863 · Adams County, Pennsylvania</div>

          <StorySection label="What came before">
            {BEFORE.map((t, i) => <p key={i} style={{ ...proseStyle, marginBottom: i < BEFORE.length - 1 ? 14 : 0 }}>{t}</p>)}
          </StorySection>

          <StorySection label="Day one · July 1">
            {DAY1.map((t, i) => <p key={i} style={proseStyle}>{t}</p>)}
          </StorySection>

          <StorySection label="Day two · July 2">
            {DAY2.map((t, i) => <p key={i} style={{ ...proseStyle, marginBottom: i < DAY2.length - 1 ? 14 : 0 }}>{t}</p>)}
          </StorySection>

          <StorySection label="Day three · Pickett’s Charge">
            {DAY3.map((t, i) => <p key={i} style={{ ...proseStyle, marginBottom: 14 }}>{t}</p>)}
            <div style={{ display: 'inline-flex', border: '1px solid color-mix(in srgb, var(--foreground) 20%, transparent)', borderRadius: 8, overflow: 'hidden', marginBottom: 12 }}>
              {(Object.keys(POV_PROSE) as Pov[]).map(p => {
                const active = p === pov
                return (
                  <button key={p} onClick={() => setPov(p)} style={{ cursor: 'pointer', padding: '6px 16px', fontSize: 12, fontWeight: 600, fontFamily: 'var(--font-geist-sans)', background: active ? 'var(--accent-badge)' : 'transparent', color: active ? '#fff' : 'var(--foreground)', border: 'none' }}>
                    {POV_PROSE[p].label}
                  </button>
                )
              })}
            </div>
            <p style={{ ...proseStyle, borderLeft: '3px solid var(--accent)', paddingLeft: 16 }}>{POV_PROSE[pov].body}</p>
          </StorySection>

          <StorySection label="What it meant">
            {MEANING.map((t, i) => <p key={i} style={{ ...proseStyle, marginBottom: i < MEANING.length - 1 ? 14 : 0 }}>{t}</p>)}
          </StorySection>

          {/* stat block — support, under the story */}
          <div style={{ marginTop: 6, paddingTop: 16, borderTop: '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)' }}>
            <div style={{ display: 'flex', gap: 20, marginBottom: 18 }}>
              <Side name="Union" who="Maj. Gen. George G. Meade" forces="~94,000" />
              <div style={{ width: 1, background: 'color-mix(in srgb, var(--foreground) 12%, transparent)' }} />
              <Side name="Confederate" who="Gen. Robert E. Lee" forces="~71,000" />
            </div>
            <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, marginBottom: 8, fontFamily: 'var(--font-geist-sans)' }}>The butcher’s bill</div>
            <CasualtyBar side="Union" value={23000} max={28000} />
            <CasualtyBar side="Confederate" value={28000} max={28000} />
            <div style={{ marginTop: 12, display: 'flex', gap: 10, alignItems: 'baseline' }}>
              <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, fontFamily: 'var(--font-geist-sans)' }}>Outcome</span>
              <span style={{ fontSize: 15 }}>Union victory — the high-water mark of the Confederacy.</span>
            </div>
          </div>
        </div>

        {/* comprehensiveness — every battle gets one of the above */}
        <div style={{ marginTop: 36 }}>
          <SectionLabel>…times ~280 — <span style={{ color: 'var(--accent-text)' }}>the layer a civ never has</span></SectionLabel>
          <div style={{ border: '1px solid color-mix(in srgb, var(--foreground) 15%, transparent)', borderRadius: 12, padding: 18 }}>
            <p style={{ ...proseStyle, fontSize: 15 }}>
              The ten chapters tell the <em>story</em>; the battle layer is <em>exhaustive</em> — but <strong>depth scales with what each battle warrants</strong>. A decisive battle gets the full story above. A major one gets a medium version — tap to expand:
            </p>
            <p style={{ ...proseStyle, marginTop: 14 }}>
              Through the autumn of 1862 the armies collided again and again, and{' '}
              <button onClick={() => setShowBattle(v => !v)} style={{ cursor: 'pointer', background: `${WAR.base}1f`, color: 'var(--accent-text)', border: 'none', borderRadius: 4, padding: '1px 6px', font: 'inherit', fontWeight: 600 }}>
                Antietam {showBattle ? '▾' : '▸'}
              </button>{' '}
              stopped Lee’s first march into the North.
            </p>
            {showBattle && (
              <div style={{ marginTop: 12, border: '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)', borderRadius: 8, padding: 14, background: 'color-mix(in srgb, var(--foreground) 3%, transparent)' }}>
                <div style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: 17 }}>Battle of Antietam</div>
                <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 12 }}>Sep 17, 1862 · Sharpsburg, Maryland</div>
                <StorySection label="What came before">
                  <p style={{ ...proseStyle, fontSize: 15 }}>Buoyed by victory at Second Bull Run, Lee crossed the Potomac in September 1862 for his first invasion of the North — then a Union soldier found a copy of his marching orders wrapped around three cigars, exposing exactly how Lee had divided his army.</p>
                </StorySection>
                <StorySection label="What it meant">
                  <p style={{ ...proseStyle, fontSize: 15 }}>September 17 became the bloodiest single day in American history — around 22,700 men killed, wounded, or missing at the Cornfield, the Sunken Road, and Burnside’s Bridge. Tactically a draw, but Lee retreated to Virginia, and that was enough: the strategic win gave Lincoln the footing to issue the preliminary Emancipation Proclamation five days later, turning the war into a fight to end slavery.</p>
                </StorySection>
                <div style={{ fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-text)', fontFamily: 'var(--font-geist-sans)' }}>Full story continues →</div>
              </div>
            )}

            <p style={{ ...proseStyle, marginTop: 18 }}>And a minor action gets just a paragraph — no full chapter needed:</p>
            <div style={{ marginTop: 10, border: '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)', borderRadius: 8, padding: 14 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 6 }}>
                <span style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: 16 }}>Battle of Philippi</span>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: '0.08em', opacity: 0.5, fontFamily: 'var(--font-geist-sans)' }}>JUN 3, 1861 · MINOR</span>
              </div>
              <p style={{ ...proseStyle, fontSize: 15 }}>
                Barely a battle. Before dawn on June 3, 1861, in the rain, Union troops surprised a camp of green Confederate recruits at this western-Virginia crossroads, and the Confederates ran so fast the newspapers mocked it as the “Philippi Races.” Almost no one was killed — though one teenage Confederate, James Hanger, lost a leg to a cannonball, became the war’s first amputee, and went on to build artificial limbs for a living. It earns a paragraph, not a chapter — but as one of the war’s first land actions it helped lock western Virginia into the Union, so it stays in the index.
              </p>
            </div>

            <div style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, margin: '24px 0 4px', fontFamily: 'var(--font-geist-sans)' }}>The complete index — Decisive · Major · Mid (~280), searchable &amp; sortable</div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {INDEX_SAMPLE.map(b => (
                <div key={b.name} style={{ display: 'flex', alignItems: 'baseline', gap: 8, padding: '7px 0', borderTop: '1px solid color-mix(in srgb, var(--foreground) 8%, transparent)', fontSize: 13 }}>
                  <span style={{ width: 60, opacity: 0.55, fontFamily: 'var(--font-geist-sans)', fontSize: 11, flexShrink: 0 }}>{b.date}</span>
                  <span style={{ flex: 1, fontWeight: 600 }}>{b.name}</span>
                  <span style={{ width: 38, opacity: 0.55, fontFamily: 'var(--font-geist-sans)', fontSize: 11, flexShrink: 0 }}>{b.theater}</span>
                  <span style={{ fontFamily: 'var(--font-geist-sans)', fontSize: 10, fontWeight: 700, letterSpacing: '0.05em', color: b.tier === 'Decisive' ? 'var(--accent-text)' : 'var(--foreground)', opacity: b.tier === 'Decisive' ? 1 : 0.5, flexShrink: 0, width: 60, textAlign: 'right' }}>{b.tier.toUpperCase()}</span>
                </div>
              ))}
              <div style={{ padding: '8px 0', fontSize: 12, opacity: 0.5, fontStyle: 'italic', fontFamily: 'var(--font-lora)' }}>+ ~272 more…</div>
            </div>
          </div>
        </div>

        {/* B — living map: described, not mocked */}
        <div style={{ marginTop: 36 }}>
          <SectionLabel>B · The living map — <span style={{ color: 'var(--accent-text)' }}>described, not mocked</span></SectionLabel>
          <div style={{ border: '1px dashed color-mix(in srgb, var(--foreground) 25%, transparent)', borderRadius: 12, padding: 18 }}>
            <p style={{ ...proseStyle }}>
              A real map of the theater — coastline and state shapes, built on the same chapter-map art the civ pipeline already generates — with the <strong>front line drawn on the geography</strong> and battles pinned at their true locations, <strong>advancing and retreating</strong> chapter by chapter so the map becomes the plot.
            </p>
            <p style={{ fontFamily: 'var(--font-geist-sans)', fontSize: 12.5, opacity: 0.6, marginTop: 14, marginBottom: 0, lineHeight: 1.5 }}>
              Not sketched — it can only be judged on real map art, and it&rsquo;s real engineering (the planned interactive drawer). That&rsquo;s why it sits <em>after</em> the pilot.
            </p>
          </div>
        </div>

        {/* D — commander arc thread */}
        <div style={{ marginTop: 36 }}>
          <SectionLabel>D · Follow a commander — <span style={{ color: 'var(--accent-text)' }}>maybe later</span></SectionLabel>
          <div style={{ border: '1px solid color-mix(in srgb, var(--foreground) 15%, transparent)', borderRadius: 12, padding: 18 }}>
            <div style={{ fontSize: 12, opacity: 0.6, marginBottom: 4, fontFamily: 'var(--font-geist-sans)' }}>Their war, start to finish —</div>
            <select value={commander} onChange={e => setCommander(e.target.value)} style={{ fontFamily: 'var(--font-lora)', fontStyle: 'italic', fontSize: 18, background: 'transparent', color: 'var(--foreground)', border: 'none', cursor: 'pointer', marginBottom: 18 }}>
              {Object.keys(COMMANDER_ARCS).map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {COMMANDER_ARCS[commander].map((b, i, arr) => (
                <div key={b.ch} style={{ display: 'flex', gap: 12 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ width: 10, height: 10, borderRadius: 999, background: 'var(--accent)', marginTop: 4, flexShrink: 0 }} />
                    {i < arr.length - 1 && <span style={{ width: 2, flex: 1, background: 'color-mix(in srgb, var(--accent) 35%, transparent)', minHeight: 18 }} />}
                  </div>
                  <div style={{ paddingBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                      <span style={{ fontSize: 15, fontWeight: 600, fontFamily: 'var(--font-lora)' }}>{b.title}</span>
                      <span style={{ fontSize: 10, letterSpacing: '0.06em', textTransform: 'uppercase', opacity: 0.5, fontFamily: 'var(--font-geist-sans)' }}>Ch {b.ch} →</span>
                    </div>
                    <div style={{ fontSize: 14, opacity: 0.78, lineHeight: 1.5, marginTop: 2, fontFamily: 'var(--font-lora)' }}>{b.beat}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p style={{ fontSize: 12, opacity: 0.5, marginTop: 26, fontFamily: 'var(--font-geist-sans)' }}>
          Prototype only — the battle story is the unit (~280 of them). B described (needs real map art). D a facsimile of a later idea.
        </p>
      </div>
    </div>
  )
}
