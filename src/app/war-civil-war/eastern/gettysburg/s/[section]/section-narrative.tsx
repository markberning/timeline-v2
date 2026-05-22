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
  | { p: string; i?: boolean; q?: boolean }
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
      { h: 'Late spring, 1863', eyebrow: 'Setting' },
      { p: 'In May of 1863, Robert E. Lee (South) did something his army had never done. Fresh off a brilliant tactical victory at Chancellorsville — a battle in which he had attacked a Union force twice his size and won — he proposed invading the North.' },
      { p: 'The strategic case was thin and the political case was thick. Vicksburg, a thousand miles down the Mississippi, was about to fall to Grant (North). A decisive Confederate victory on Northern soil might draw Union troops west to stop him, might force Lincoln (North) to the negotiating table, might finally provoke Britain and France into the recognition the Confederacy had been waiting for since 1861. The practical case was simpler: Virginia had been picked clean. Lee’s men were hungry. There was food in Pennsylvania.' },
      { p: 'They left for the north on June 3rd.', i: true },
      { h: 'Three weeks, three states', eyebrow: 'The march' },
      { p: 'Lee took the Shenandoah Valley north — the same broad green corridor that Stonewall Jackson (South) had ridden up and down for two years. By the third week of June the Army of Northern Virginia was loose in Pennsylvania, an army of seventy thousand men strung out across forty miles of farm country, requisitioning shoes and flour and not, by Lee’s strict orders, burning anything they did not need to.' },
      { fig: '/war-img/gettysburg-campaign.png', cap: 'The march north: Lee takes the Shenandoah Valley into Pennsylvania while the Army of the Potomac shadows him east of the mountains.', credit: 'Map: Hal Jespersen · CC BY' },
      { p: 'The Army of the Potomac, under Joseph Hooker (North), moved in parallel — slowly, arguing with Washington the whole way. On June 28th, three days before the battle, Hooker resigned. He was replaced overnight by a corps commander named George Meade (North) who had not been told he was being considered for the job and who accepted it, in his own words, like a man going to his execution.' },
      { p: 'Meade had three days to assemble a defence of the entire North. He had no idea where Lee was. Lee had no idea where Meade was, either: Jeb Stuart (South), the eyes of the Confederate army, had ridden off on a long glory raid east and was, for all practical purposes, missing.' },
      { h: 'A town with ten roads', eyebrow: 'Why here' },
      { p: 'Nobody planned to fight at Gettysburg. It was a small market town in south-central Pennsylvania, ten thousand people, a Lutheran seminary, a couple of colleges, no military value to speak of. What it had was roads. Ten of them, radiating out like spokes from a wheel hub. Whichever army arrived first could pick which way the other one would have to attack from.' },
      { p: 'On the morning of July 1st, a Confederate brigade marching east in search of shoes met a Union cavalry brigade riding west in search of the Confederate army. Both were as surprised as each other. The shooting started at McPherson’s Ridge a little after seven in the morning. By the end of the day, both armies would be arriving piecemeal and the Battle of Gettysburg would already be underway whether either side had wanted it or not.' },
      { p: 'It would last three days, kill or wound fifty thousand men, and decide whether the Confederacy got to keep existing.', i: true },
    ],
    meanwhile: { region: 'London', title: 'The cotton ministers are watching.', body: 'In Westminster, Confederate envoys John Slidell (South) and James Mason (South) are pressing Lord Palmerston for recognition. The Foreign Office has told them to wait for the next great victory. They are about to be waiting forever.' },
  },

  mcpherson: {
    eyebrow: 'Gettysburg · Day 1 of 3',
    title: 'McPherson’s Ridge',
    progress: 0.28,
    from: [{ label: 'How they got there', mode: 'war' }],
    to: [{ label: 'The Hooks', mode: 'war' }],
    blocks: [
      { h: 'The morning of July 1st', eyebrow: 'First contact' },
      { p: 'John Buford (North) had ridden into Gettysburg the night before with two cavalry brigades — about three thousand men, dismounted, armed with breech-loading carbines. He had picked his ground. He had told his officers, that night in a tavern on the town square, that the rebels would be on them in the morning and that they would have to hold until the infantry arrived.' },
      { p: 'Heth’s (South) division — about seven thousand Confederate infantry — was on the Chambersburg Pike coming east. Heth had been told there might be militia in the town. He did not believe Buford’s cavalry was anywhere near him. He sent two brigades forward without skirmishers.' },
      { h: 'The first shots', eyebrow: '7:30 a.m.' },
      { p: 'Buford’s pickets opened fire from behind a fence rail west of McPherson’s Ridge. The shooting was uneven and confused. Heth deployed for what he thought was a brush with mounted militia. By the time he understood he was fighting two full brigades of regulars, he had committed himself to a fight he could not call off.' },
      { fig: '/war-img/gettysburg-day1.png', cap: 'July 1: Buford’s cavalry delays Heth west of town until the infantry arrives; by evening the Union is pushed back to Cemetery Hill.', credit: 'Map: Hal Jespersen · CC BY' },
      { h: 'Reynolds is killed', eyebrow: '10:00 a.m.' },
      { p: 'John F. Reynolds (North), the senior Union corps commander, rode onto the field at the head of the I Corps. Buford had held; Reynolds would relieve him. Reynolds was placing the Iron Brigade — Wisconsin and Indiana farmers who had earned their name at South Mountain — when he was shot through the neck. He was dead before he hit the ground.' },
      { p: 'The Union held the ridge through the morning. By afternoon they were outnumbered three to one, three Confederate divisions converging on them from two directions, and they were being driven steadily back through their own forming lines, through the town of Gettysburg, and finally onto a long low cemetery hill south of town.' },
      { p: 'They dug in. What they dug into would, by morning, look like a fishhook.', i: true },
      { p: 'When Lee (South) arrived that evening on Seminary Ridge and looked east at the Union line forming on the heights opposite him, he found himself in exactly the strategic situation he had not planned to be in: committed to a battle, against an enemy on high ground, with one corps of his army still a day’s march away. He chose to attack anyway.' },
    ],
    meanwhile: { region: 'Cemetery Hill', title: 'A lucky retreat', body: 'In losing the first day, the Union backed onto the strongest defensive position on the field — the high ground that would become the fishhook.' },
  },

  hooks: {
    eyebrow: 'Gettysburg · Day 2 of 3',
    title: 'The Hooks — Longstreet at the seams',
    progress: 0.55,
    from: [{ label: 'McPherson’s Ridge', mode: 'war' }, { label: 'Battle of Gettysburg', mode: 'war' }, { label: 'Eastern Theatre', mode: 'war' }],
    to: [{ label: 'Pickett’s Charge', mode: 'war' }, { label: 'A New Birth of Freedom', mode: 'civ' }],
    blocks: [
      { h: 'The morning after Day 1', eyebrow: 'The fishhook' },
      { p: 'By midnight on July 1st, the Army of the Potomac had spent the day getting beaten. By dawn it was, by accident, in one of the strongest defensive positions any American army would ever occupy. From a wooded knob called Culp’s Hill in the north, the line bent west over Cemetery Hill and then ran straight south down Cemetery Ridge for nearly two miles to a pair of rocky hills, the Round Tops. Seen from above it looked exactly like a fishhook — the barb hooking east at Culp’s Hill, the long shank running south, and Little Round Top anchoring the bottom.' },
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
      { h: 'The third morning', eyebrow: 'Before the charge' },
      { p: 'Lee (South) had attacked both Union flanks and not broken the line. Longstreet (South), who had urged against the whole campaign and against the attack on the second day, urged again on the morning of the third: pull back, get between Meade (North) and Washington, force Meade to attack on ground of Lee’s choosing. Lee, who could not retreat now without admitting the whole invasion had been a mistake, refused. He resolved to attack the centre.' },
      { p: 'He chose Pickett’s (South) division, freshly arrived and not yet bloodied, plus two more divisions of Longstreet’s corps. Twelve thousand five hundred men. The target was a stand of trees on Cemetery Ridge, three-quarters of a mile away across open ground.' },
      { h: 'The cannonade', eyebrow: '1:00 p.m.' },
      { p: 'The largest artillery bombardment ever conducted on the North American continent began at one in the afternoon and lasted nearly two hours. One hundred and fifty Confederate guns against eighty Union guns. The smoke was so thick the Confederate artillerists could not see whether they were hitting anything. Most of their shells overshot. The Union guns went quiet — partly to conserve ammunition, partly to let the Confederates think they had been silenced.' },
      { fig: '/war-img/gettysburg-day3.png', cap: 'July 3: Pickett’s Charge crosses three-quarters of a mile of open ground at the Union centre — the angle.', credit: 'Map: Hal Jespersen · CC BY' },
      { h: 'The charge', eyebrow: '3:00 p.m.' },
      { p: 'They came out of the woods on Seminary Ridge in three long parade-ground lines, a mile across. They marched at quick step for the first half-mile and then double-quick for the rest. The Union guns reopened at four hundred yards. Canister at two hundred. Rifle fire at one hundred.' },
      { p: 'A few hundred Confederates reached the wall at the angle, a stone fence at the centre of the Union line. They fought there hand-to-hand for about ten minutes. Then they were either killed, captured, or turned around and started walking back across the same field they had just crossed.' },
      { p: 'About half of the twelve thousand five hundred did not come back.', i: true },
      { p: 'Lee rode out to meet the survivors. According to Pickett, he said: “This was all my fault. Get together, and let us do the best we can toward saving that which is left to us.” Pickett, when asked later for his report on the division, is said to have replied: “General Lee, I have no division.”' },
    ],
  },

  aftermath: {
    eyebrow: 'Gettysburg · Aftermath',
    title: 'The retreat & the Address',
    progress: 0.97,
    from: [{ label: 'Pickett’s Charge', mode: 'war' }],
    to: [{ label: 'The Reckoning', mode: 'war' }, { label: 'A New Birth of Freedom', mode: 'civ' }],
    blocks: [
      { h: 'The morning of July 4th', eyebrow: 'After three days' },
      { p: 'It rained. It rained on the dead, who were still in the fields and the orchards and the woods where they had fallen. It rained on the fifteen-mile-long Confederate wagon train that began moving south at dusk on the 4th, ambulances in the middle, escorted by Stuart’s (South) cavalry. Meade (North) let them go. The argument over whether he should have pursued more aggressively would go on as long as he lived.' },
      { fig: '/war-img/gettysburg-aftermath-photo.jpg', cap: 'A Harvest of Death — Timothy O’Sullivan’s photograph of the Union dead, made in the days after the battle.', credit: 'Timothy H. O’Sullivan · public domain' },
      { p: 'Eight hundred miles to the west, on the same morning, the Confederate garrison at Vicksburg surrendered to Grant (North). The Mississippi was open end to end. The Confederacy had been cut in two on the same day Lee (South) began his retreat. Lincoln (North) was reading the dispatches in Washington and thinking about Independence Day.' },
      { h: 'Two minutes at the cemetery', eyebrow: 'November 19th' },
      { p: 'Five months later, on a cold November morning, Lincoln was invited to a cemetery dedication. The main speaker, Edward Everett, spoke for two hours. Lincoln spoke for two minutes. He said two hundred and seventy-two words. He worried, on the train home, that the speech had been a flat failure.' },
      { p: '“Four score and seven years ago our fathers brought forth, upon this continent, a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.”', q: true },
      { p: 'What Lincoln said, in two minutes, was that the Declaration of Independence — not the Constitution, with its compromises over slavery — was the founding document of the United States. He was quietly rewriting the country’s memory of itself, on the field where fifty thousand men had been killed or wounded fighting over the question.' },
      { p: 'The country has been arguing about which document was the real one ever since.', i: true },
    ],
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
            // blockquote (e.g. the Gettysburg Address)
            if (b.q) return (
              <p key={i} style={{ ...proseStyle, margin: '16px 0', padding: '14px 16px 14px 18px', background: 'color-mix(in srgb, var(--foreground) 5%, transparent)', borderLeft: `3px solid ${ACCENT}`, borderRadius: '0 6px 6px 0', fontStyle: 'italic', fontSize: 16, lineHeight: 1.55 }}>{b.p}</p>
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
