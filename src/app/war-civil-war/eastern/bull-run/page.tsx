'use client'

// BATTLE dossier (First Bull Run / First Manassas). Same shape as Antietam:
// hero · collapsible At-a-glance (stat strip + armies face-off + casualties bar)
// · outcome card · commanders strip · numbered section list.
// Content produced through the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-bullrun1' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'First Battle of Bull Run',
  date: 'July 21, 1861',
  place: 'Manassas, Virginia',
  hero: {
    img: '/war-img/bull-run-hero.jpg',
    pal: ['#2f3a24', '#5a2a32', '#100506'],
    credit: 'First Battle of Bull Run · Kurz & Allison · public domain',
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~4,900' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of Northeastern Virginia', str: '~35,000 troops', cmd: 'Brig. Gen. Irvin McDowell', note: 'A green army shoved forward before it was ready, its 90-day enlistments about to run out.' },
    { side: 'c', tag: 'Confederacy', force: 'Armies of the Potomac & Shenandoah', str: '~32,000 troops', cmd: 'Beauregard & Johnston', note: 'Reinforced just in time by the first army ever rushed to a battlefield by rail.' },
  ],
  casualties: { union: 2896, csa: 1982, unionLabel: 'Union ~2,896', csaLabel: 'Confederacy ~1,982' },
  commanders: [
    { name: 'Irvin McDowell', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/mcdowell.jpg', bio: 'McDowell built a smart plan, a wide flank march across Sudley Springs Ford to roll up the Confederate left, and saw it nearly win the war before noon. His green army marched too slowly to spring the surprise and came apart in the afternoon, and he was relieved of command within days of the rout.' },
    { name: 'William T. Sherman', role: 'Brigade, Union', side: 'u', img: '/war-img/cmdr/sherman.jpg', bio: 'Then a colonel commanding a brigade, Sherman found an unguarded ford upstream of the Stone Bridge, crossed around mid-morning, and struck the Confederate line on Matthews Hill to help drive it back. His men joined the failing Union effort on Henry House Hill in the afternoon and fell back with the rest when the line broke.' },
    { name: 'P.G.T. Beauregard', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/beauregard.jpg', bio: 'The hero of Fort Sumter held Manassas Junction along Bull Run and planned his own flank attack on the Union left, only to be beaten to the punch by McDowell. With the senior Johnston leaving him tactical command of the field, Beauregard fed brigades onto Henry House Hill and steadied the line that won the day.' },
    { name: 'Joseph E. Johnston', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/je-johnston.jpg', bio: 'Johnston slipped his army out of the Shenandoah Valley and rushed it east by rail, the first time in history trains carried troops to a major battle. As the senior officer present he yielded battlefield command to Beauregard and spent the day funneling his arriving brigades toward the fight on the Confederate left.' },
    { name: 'Thomas J. Jackson', role: 'Brigade, CSA', side: 'c', img: '/war-img/cmdr/jackson.jpg', bio: 'Jackson posted his fresh Virginia brigade on the reverse slope of Henry House Hill, sheltering his infantry behind the crest while his guns did the killing, and stood firm while the rest of the Confederate left fell apart. It was here that Bee pointed to him and gave him the name he carried the rest of the war: Stonewall.' },
    { name: 'Barnard Bee', role: 'Brigade, CSA', side: 'c', img: '/war-img/cmdr/bee.jpg', bio: 'Bee rushed his brigade to Matthews Hill to help hold off the Union flank march, then fell back to Henry House Hill where, trying to rally his shattered men, he pointed at Jackson and spoke the most famous line of the war. He was mortally wounded minutes later and died the next day, the highest-ranking officer killed at the battle.' },
  ],
  outcome: {
    verdict: 'Confederate victory · the short war dies',
    text: 'A Union plan that nearly worked collapsed into the war’s first great rout, green troops fleeing back toward Washington past the carriages of picnicking spectators. Tactically it was a clear Confederate win, but its deepest result was a change of mind on both sides: the dream of a quick, bloodless war died on Henry House Hill. The North fired McDowell, called George McClellan east to build a real army, and braced for a long fight; the South, dangerously elated, came away with a new hero named Stonewall.',
  },
  sections: [
    { id: 'on-to-richmond', eyebrow: 'The 90-day war', title: 'On to Richmond', blurb: 'A half-trained army is marched toward Richmond to win the war in an afternoon, with congressmen and picnickers riding out to watch.', img: '/war-img/bull-run-campaign.png' },
    { id: 'the-flank-march', eyebrow: 'Morning, July 21', title: 'The Flank March', blurb: 'McDowell’s (North) wide swing across Sudley Ford works: by midday the rebels are driven back and it looks like a Union victory.', img: '/war-img/bull-run-sudley-church.jpg' },
    { id: 'stone-wall', eyebrow: 'Henry House Hill', title: 'There Stands Jackson', blurb: 'The Confederate line holds on Henry House Hill, Jackson earns a nickname, and a bedridden widow becomes the war’s first civilian killed.', img: '/war-img/bull-run-henry-house.jpg' },
    { id: 'the-rout', eyebrow: 'The Great Skedaddle', title: 'The Rout', blurb: 'Fresh rebels off the trains break the Union right; the retreat dissolves into panic, and both nations wake to a long, terrible war.', img: '/war-img/bull-run-stone-bridge.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/bull-run/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function BullRunPage() {
  return <BattleDossier data={DATA} />
}
