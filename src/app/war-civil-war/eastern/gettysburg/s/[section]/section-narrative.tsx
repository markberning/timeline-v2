'use client'

// SECTION narrative (level 4) — a standalone reader chapter for one Gettysburg
// section. Matches the reader-engine shape from the handoff: sticky ChapterHeader
// (eyebrow + title + progress), a cross-modal LineageStrip (war↔civ), an article
// with a drop cap + SectionHeader subsections + inline figures (the day maps),
// and a docked "Meanwhile" card. Standalone prototype; the real reader engine
// integration comes later. Person side-tags applied per the standing rule.

import { useState } from 'react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const ACCENT = '#7c3aed' // Civil War (violet)

type Block =
  | { h: string; eyebrow?: string }
  | { p: string; i?: boolean }
  | { fig: string; cap: string; credit: string }

interface Lineage { label: string; mode: 'war' | 'civ' }
interface Narr {
  eyebrow: string
  title: string
  progress: number
  from: Lineage[]
  to: Lineage[]
  blocks: Block[]
  meanwhile?: { region: string; title: string; body: string }
}

const GB_NARR: Record<string, Narr> = {
  setting: {
    eyebrow: 'Gettysburg · Lay of the land',
    title: 'How they got there',
    progress: 0.05,
    from: [{ label: 'Eastern Theatre', mode: 'war' }, { label: 'Chancellorsville', mode: 'war' }],
    to: [{ label: 'McPherson’s Ridge', mode: 'war' }],
    blocks: [
      { h: 'A gamble going north', eyebrow: 'June 1863' },
      { p: 'Fresh off the most lopsided victory of his career at Chancellorsville, Robert E. Lee (South) made a daring decision: take the war out of ravaged Virginia and onto Northern soil. A win in Pennsylvania might feed his army off untouched farms, frighten Northern voters, and maybe convince Washington that the South was simply not worth the cost of conquering.' },
      { p: 'So in June he marched the Army of Northern Virginia north, screened by the mountains. Hurrying to keep between Lee and the Northern cities came the Army of the Potomac — and, three days before the armies met, a new commander for it: the careful, short-tempered George Meade (North). Neither general chose the ground. On July 1 their lead elements simply collided at a market town where ten roads crossed.' },
      { fig: '/war-img/gettysburg-campaign.png', cap: 'The Gettysburg Campaign: Lee slips north through the Shenandoah; the armies converge on the crossroads town almost by accident.', credit: 'Map: Hal Jespersen · CC BY' },
    ],
    meanwhile: { region: 'Pennsylvania', title: 'A town with ten roads', body: 'Gettysburg mattered to no one strategically — it just happened to be where a dozen roads met, which is exactly why two armies groping for each other ended up there.' },
  },

  mcpherson: {
    eyebrow: 'Gettysburg · Day 1 of 3',
    title: 'McPherson’s Ridge',
    progress: 0.28,
    from: [{ label: 'How they got there', mode: 'war' }],
    to: [{ label: 'The Hooks', mode: 'war' }],
    blocks: [
      { h: 'First contact', eyebrow: 'Wed, July 1' },
      { p: 'It began with a meeting engagement nobody planned. Confederate infantry under Henry Heth (South), looking for shoes, ran into dismounted Union cavalry under John Buford (North) on the ridges northwest of town — and Buford’s troopers, fighting from behind fences with fast-firing carbines, held just long enough for the infantry to come up.' },
      { p: 'The man who brought them up, John Reynolds (North) — arguably the best general in the army — was shot dead in the first hour. The Union held through the morning and into the afternoon, then buckled as Confederate numbers told. They were driven back through the streets of Gettysburg in chaos.' },
      { fig: '/war-img/gettysburg-day1.png', cap: 'July 1: the Confederates push the outnumbered Union forces back through the town — and onto the high ground south of it.', credit: 'Map: Hal Jespersen · CC BY' },
      { p: 'But the bluecoats fell back onto exactly the ground they needed: the hills and ridges south of town that would become the famous fishhook. Day 1 looked like a Confederate win. It had quietly handed the Union the high ground.' },
    ],
    meanwhile: { region: 'the high ground', title: 'A lucky retreat', body: 'Defeats rarely come with a silver lining this large: in losing the first day, the Union backed onto the strongest defensive position on the field.' },
  },

  hooks: {
    eyebrow: 'Gettysburg · Day 2 of 3',
    title: 'The Hooks — Longstreet at the seams',
    progress: 0.55,
    from: [{ label: 'McPherson’s Ridge', mode: 'war' }, { label: 'Battle of Gettysburg', mode: 'war' }, { label: 'Eastern Theatre', mode: 'war' }],
    to: [{ label: 'Pickett’s Charge', mode: 'war' }, { label: 'A New Birth of Freedom', mode: 'civ' }],
    blocks: [
      { h: 'The morning after Day 1', eyebrow: 'The fishhook' },
      { p: 'By midnight on July 1st, the Army of the Potomac had spent the day getting beaten. By dawn it was, by accident, in one of the strongest defensive positions any American army would ever occupy. The ridge ran south from Cemetery Hill for two miles, then bent east into a wooded knob called Culp’s Hill. Seen from above, it looked exactly like a fishhook — the curl in the north, the long shank running south, and an iron barb at the bottom called Little Round Top.' },
      { fig: '/war-img/gettysburg-day2.png', cap: 'The fishhook on Day 2: Longstreet swings against the southern point, Ewell against the northern barb.', credit: 'Map: Hal Jespersen · CC BY' },
      { p: 'Lee’s (South) options that morning were three: withdraw, hold and let Meade (North) attack, or attack. Longstreet (South), who could see what Meade had to work with, urged the first. Lee, who could see what HE had to work with — the largest army he would ever command, deep in northern territory, with Vicksburg slipping away to Grant in the west — chose the third. Longstreet would swing around to the south and roll up the Union left. Ewell (South) would press the right at Culp’s Hill. The centre would feint.' },
      { p: 'It took most of the morning to get into position. By the time Longstreet was ready to attack, it was past three in the afternoon. The line he was about to hit was not the line he had set out to hit: Daniel Sickles (North), commanding the Union III Corps, had taken it on himself to advance his men three-quarters of a mile west of the ridge, into a peach orchard and a wheat field. Whether this was a brilliant tactical move or a court-martial offence would be argued for the next sixty years.' },
      { p: 'It would all start to come apart at about three-thirty.', i: true },
      { h: 'Devil’s Den', eyebrow: '3:30 p.m.' },
      { p: 'Hood’s (South) division stepped off first. The Texas Brigade came out of the woods at the south end of the Confederate line, climbing into a jumble of car-sized boulders known to the locals as the Devil’s Den. Ward’s (North) brigade — New Yorkers and New Hampshiremen — held the rocks. They held them for an hour, and then they didn’t.' },
      { fig: '/war-img/gettysburg-day2-photo.jpg', cap: 'Devil’s Den, photographed shortly after the war. The rocks were as confusing in 1863 as they look now.', credit: 'Library of Congress · public domain' },
      { p: 'By four-thirty the rocks belonged to the Confederates, and three regiments of Alabamans and Texans were jogging up the wooded slope to the south. They couldn’t see the top. They didn’t know yet that there was anyone up there.' },
      { h: 'Little Round Top', eyebrow: '4:30 p.m.' },
      { p: 'The story everyone knows about Little Round Top is the bayonet charge — Joshua Chamberlain (North), a Maine college professor in command of the 20th Maine, his men out of ammunition, ordering them to fix bayonets and run down the hill. The story is true and it happened, and the way it’s told it sounds like the whole battle. It is not the whole battle. It is twenty minutes of the whole battle.' },
      { p: 'The actual decisive moment had come twenty minutes earlier, when a chief engineer of the Army of the Potomac named Gouverneur K. Warren (North) had ridden to the top of Little Round Top, found it undefended, looked west, and seen the entire Confederate line coming straight for him. Warren — a topographer by training, not a combat officer — turned and started screaming for troops.' },
      { p: 'Strong Vincent’s (North) brigade arrived first, then Patrick O’Rorke’s (North). Chamberlain held the left through five separate assaults, and when his men ran out of ammunition, he held it with bayonets. He won the Medal of Honor. He also won the long argument over whether college professors could fight.' },
      { h: 'The Wheatfield', eyebrow: '5:00 p.m.' },
      { p: 'While Little Round Top was being saved, the Wheatfield — nineteen acres of waist-high wheat between the Peach Orchard and the rocks — became something out of a fever dream. Fourteen brigades from both sides fought across it over six hours. The wheat changed hands at least six times. By sundown the field belonged to nobody and the wheat had been ground into the dirt.' },
      { p: 'The Wheatfield is what people mean when they say the Civil War was the first modern war.', i: true },
      { h: 'The Peach Orchard', eyebrow: '6:00 p.m.' },
      { p: 'Sickles, having advanced his corps into the salient, paid for the geometry. McLaws’ (South) division came at him from two directions at once. By six o’clock the Peach Orchard was lost, the III Corps was broken, and Sickles was being carried off the field with one leg gone. He would later argue, for the rest of his life, that his decision to advance had won the battle. Nobody who was at the Wheatfield agreed.' },
      { h: 'Culp’s Hill', eyebrow: '7:30 p.m.' },
      { p: 'On the other end of the line, Ewell finally attacked the Union right. He had been ordered to attack in the morning. It was now nearly sundown. Greene’s (North) brigade — one brigade — held Culp’s Hill against three Confederate divisions until reinforcements arrived after dark.' },
      { p: 'Greene was sixty-two years old. He was the only Union general on the field of Gettysburg who had been a cadet at West Point with Lee.' },
      { h: 'The line held', eyebrow: 'Aftermath' },
      { p: 'By midnight the firing had finally stopped. The Union line was still where it had been at dawn — a little bent, but unbroken. Lee, who had attacked both flanks, would the next morning resolve to attack the centre.' },
      { p: 'He would order Pickett’s Charge.', i: true },
    ],
    meanwhile: { region: 'Vicksburg', title: 'Grant takes the Mississippi tomorrow.', body: 'Six hundred miles to the south-west, after seven weeks of siege, the Confederate garrison at Vicksburg is starving. They will surrender on the morning of July 4th — the same morning Lee begins his long retreat from Gettysburg.' },
  },

  pickett: {
    eyebrow: 'Gettysburg · Day 3 of 3',
    title: 'Pickett’s Charge',
    progress: 0.82,
    from: [{ label: 'The Hooks', mode: 'war' }],
    to: [{ label: 'The retreat & the Address', mode: 'war' }, { label: 'High-water mark', mode: 'civ' }],
    blocks: [
      { h: 'Before the charge', eyebrow: 'Fri, July 3' },
      { p: 'Having failed at both ends, Lee (South) did the thing his most trusted general begged him not to do: he aimed straight at the center. Early that afternoon some 150 Confederate guns opened the largest bombardment ever heard on the continent, meant to shatter the Union middle on Cemetery Ridge. Then the guns fell silent, and the waiting men knew what the silence meant.' },
      { p: 'Roughly 12,500 men stepped out of the woods and started across three-quarters of a mile of open ground in parade-ground order. Union artillery switched to canister; the rifles opened along the wall. A few hundred crossed it, at a little clump of trees forever after called the high-water mark of the Confederacy. Almost none came back. Barely half of those who started returned, and Lee rode out among the survivors saying, over and over, “It is all my fault.”' },
      { fig: '/war-img/gettysburg-day3.png', cap: 'July 3: Pickett’s Charge crosses open ground at the Union center — and is destroyed.', credit: 'Map: Hal Jespersen · CC BY' },
    ],
    meanwhile: { region: 'Cemetery Ridge', title: 'The high tide', body: 'The copse of trees where a few hundred Confederates briefly crossed the wall is still called the high-water mark — the farthest north the rebellion ever reached, and the moment it began to recede.' },
  },

  aftermath: {
    eyebrow: 'Gettysburg · Aftermath',
    title: 'The retreat & the Address',
    progress: 0.97,
    from: [{ label: 'Pickett’s Charge', mode: 'war' }],
    to: [{ label: 'The Reckoning', mode: 'war' }, { label: 'A New Birth of Freedom', mode: 'civ' }],
    blocks: [
      { h: 'The cost', eyebrow: 'Jul → Nov' },
      { p: 'Three days had left something like fifty thousand men killed, wounded, or missing — the bloodiest battle ever fought in the hemisphere. On July 4, in driving rain, Lee (South) began the long retreat back to Virginia. He had lost close to a third of his army, and he would never invade the North again.' },
      { p: 'That November, Abraham Lincoln (North) came to Gettysburg to dedicate a cemetery for the dead. He spoke for barely two minutes — and in them recast the entire war as a test of whether a nation “conceived in liberty,” governed “of the people, by the people, for the people,” could endure.' },
    ],
    meanwhile: { region: 'Washington', title: 'A new birth of freedom', body: 'The Address didn’t just mourn the dead; it redefined the war’s purpose — pointing past the battlefield toward emancipation and the unfinished work of Reconstruction.' },
  },
}

const proseStyle: React.CSSProperties = { fontFamily: SERIF, fontSize: 17, lineHeight: 1.62, letterSpacing: '-0.01em', margin: 0, color: 'var(--foreground)' }

export function SectionNarrative({ id }: { id: string }) {
  const n = GB_NARR[id] ?? GB_NARR.hooks
  const [figFailed, setFigFailed] = useState<Record<number, boolean>>({})
  let firstP = true
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* sticky chapter header */}
      <div style={{ position: 'sticky', top: 0, zIndex: 8, background: 'color-mix(in srgb, var(--background) 92%, transparent)', backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)', borderBottom: '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px' }}>
          <button aria-label="Back" onClick={() => history.back()} style={{ width: 32, height: 32, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)', background: 'color-mix(in srgb, var(--foreground) 6%, transparent)', borderRadius: 999, color: 'var(--foreground)', cursor: 'pointer' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: SANS, fontSize: 9, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: ACCENT, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{n.eyebrow}</div>
            <div style={{ fontFamily: SERIF, fontSize: 15, lineHeight: 1.15, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{n.title}</div>
          </div>
          <span style={{ fontFamily: SANS, fontSize: 11, color: 'color-mix(in srgb, var(--foreground) 50%, transparent)', flexShrink: 0 }}>{Math.round(n.progress * 100)}%</span>
          <DarkModeToggle />
        </div>
        <div style={{ height: 2, background: 'color-mix(in srgb, var(--foreground) 10%, transparent)' }}><div style={{ height: 2, width: `${n.progress * 100}%`, background: ACCENT }} /></div>
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 18px 48px' }}>
        {/* article */}
        <article style={{ paddingTop: 18 }}>
          {n.blocks.map((b, i) => {
            if ('h' in b) return (
              <div key={i} style={{ marginTop: i === 0 ? 0 : 26, marginBottom: 10 }}>
                {b.eyebrow && <div style={{ fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', color: ACCENT, marginBottom: 3 }}>{b.eyebrow}</div>}
                <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.3px', margin: 0 }}>{b.h}</h2>
              </div>
            )
            if ('fig' in b) return (
              <figure key={i} style={{ margin: '20px 0' }}>
                <div style={{ borderRadius: 6, overflow: 'hidden', background: 'color-mix(in srgb, var(--foreground) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)' }}>
                  {!figFailed[i] && <img src={b.fig} alt="" onError={() => setFigFailed(f => ({ ...f, [i]: true }))} style={{ display: 'block', width: '100%', height: 'auto' }} />}
                </div>
                <figcaption style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, lineHeight: 1.45, color: 'color-mix(in srgb, var(--foreground) 65%, transparent)', marginTop: 8 }}>
                  {b.cap} <span style={{ fontFamily: SANS, fontStyle: 'normal', fontSize: 10.5, color: 'color-mix(in srgb, var(--foreground) 42%, transparent)' }}>· {b.credit}</span>
                </figcaption>
              </figure>
            )
            // italic aside
            if (b.i) return (
              <p key={i} style={{ ...proseStyle, marginTop: 14, fontStyle: 'italic', color: 'color-mix(in srgb, var(--foreground) 62%, transparent)' }}>{b.p}</p>
            )
            // paragraph — drop cap on the very first one
            const drop = firstP
            firstP = false
            return (
              <p key={i} style={{ ...proseStyle, marginTop: 12 }}>
                {drop && <span style={{ float: 'left', fontFamily: SERIF, fontWeight: 500, fontSize: 50, lineHeight: 0.82, color: ACCENT, paddingRight: 8, marginTop: 4 }}>{b.p.charAt(0)}</span>}
                {drop ? b.p.slice(1) : b.p}
              </p>
            )
          })}
        </article>

        {/* Meanwhile — at the end of the chapter (not sticky) */}
        {n.meanwhile && (
          <div style={{ marginTop: 28, border: '1px solid color-mix(in srgb, var(--foreground) 14%, transparent)', borderRadius: 12, padding: '14px 16px', background: 'color-mix(in srgb, var(--foreground) 4%, transparent)' }}>
            <div style={{ fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>Meanwhile in {n.meanwhile.region}</div>
            <div style={{ fontFamily: SERIF, fontSize: 16, fontStyle: 'italic', marginTop: 3 }}>{n.meanwhile.title}</div>
            <div style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.5, color: 'color-mix(in srgb, var(--foreground) 75%, transparent)', marginTop: 3 }}>{n.meanwhile.body}</div>
          </div>
        )}
      </div>
    </div>
  )
}
