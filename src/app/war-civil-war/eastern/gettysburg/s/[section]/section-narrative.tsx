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
  | { p: string }
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
      { h: 'The fishhook', eyebrow: 'Where we are' },
      { p: 'By the morning of July 2, 1863, the two armies had hardened into the shapes they would keep for the rest of the battle. The Union line ran in a long curve south of town — up over Culp’s Hill, around Cemetery Hill, and straight down Cemetery Ridge toward two rocky hills called the Round Tops. On a map it looked like a fishhook, and the shape gave Meade (North) a priceless advantage: he could shuttle reinforcements along the short inside of the curve faster than Lee (South) could shift men around the long outside.' },
      { p: 'Lee saw the same shape and read it as opportunity. Crush either end — the barb up at Culp’s Hill or the point down by the Round Tops — and he might roll the whole Union line up like a carpet. So on the second day he swung at both ends at once.' },
      { h: 'Longstreet on the left', eyebrow: 'Late afternoon' },
      { p: 'The hardest blow fell on the Union left, where a politically-appointed general named Daniel Sickles (North) had pushed his corps forward off the ridge into a peach orchard — out of the line, exposed on three sides, against orders. Longstreet’s (South) divisions came down on the salient in the late afternoon and tore it apart. The fighting swept through places whose names became shorthand for slaughter: the Wheatfield, which changed hands six times; Devil’s Den, a jumble of boulders fought over at arm’s length; the Peach Orchard, simply overrun.' },
      { fig: '/war-img/gettysburg-day2.png', cap: 'July 2: Longstreet hits the Union left, Ewell the barb at Culp’s Hill. The fishhook bends everywhere and breaks nowhere.', credit: 'Map: Hal Jespersen · CC BY' },
      { h: 'Little Round Top' },
      { p: 'At the very end of the line sat Little Round Top, undefended until a quick-thinking engineer rushed troops onto it minutes before the Confederates arrived. The extreme tip of the entire army — the place where the line simply stopped — was held by the 20th Maine under Joshua Chamberlain (North), a college rhetoric professor who had learned soldiering on the job. His men threw back charge after charge until their cartridge boxes were empty; then Chamberlain ordered a downhill bayonet charge that swept the exhausted attackers off the slope and saved the flank.' },
      { h: 'The barb' },
      { p: 'On the far right, Ewell’s (South) men finally clawed up the wooded slopes of Culp’s Hill in the dusk and took a foothold in the abandoned Union trenches — but there were too few of them, too late in the day, to do more than hang on. By nightfall Lee had hammered both ends of the fishhook and bent neither past breaking. He had one day, and one idea, left.' },
    ],
    meanwhile: { region: 'the Mississippi', title: 'Vicksburg is starving', body: 'A thousand miles west, Grant’s siege has squeezed the river fortress of Vicksburg down to mule meat. It will surrender in two days — on the Fourth of July — the same week the war turns here.' },
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
