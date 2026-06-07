'use client'

// BATTLE dossier (Battle of Fredericksburg). Same shape as Antietam/Shiloh: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-fredericksburg' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Battle of Fredericksburg',
  date: 'December 11–15, 1862',
  place: 'Fredericksburg, Virginia',
  hero: {
    img: '/war-img/fredericksburg-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
  },
  stats: [
    { label: 'Duration', value: '5 days' },
    { label: 'Casualties', value: '~18,000' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Potomac', str: '~114,000 engaged', cmd: 'Burnside', note: 'Brought the bigger army and lost more than twice as many men, for nothing.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~72,500 engaged', cmd: 'Lee', note: 'Handed the high ground by a late supply train, and made the enemy pay for every yard.' },
  ],
  casualties: { union: 12653, csa: 5377, unionLabel: 'Union ~12,653', csaLabel: 'Confederacy ~5,377' },
  commanders: [
    { name: 'Ambrose E. Burnside', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/burnside.jpg', bio: 'Reluctant in the command he had twice refused, Burnside built his plan on speed and lost it when the pontoon bridges arrived more than a week late, giving Lee time to fortify the heights. His garbled December 13 orders turned a planned diversion into the main attack, and he sent wave after wave into the stone wall at Marye’s Heights until fourteen charges had failed and his army had lost more than twice as many men as the South.' },
    { name: 'Edwin V. Sumner', role: 'Right Grand Div., Union', side: 'u', img: '/war-img/cmdr/sumner.jpg', bio: 'Sumner commanded the Right Grand Division, the wing thrown at Marye’s Heights in front of the town. His II Corps led the doomed assaults up the open slope, feeding brigade after brigade into the killing ground behind the stone wall.' },
    { name: 'William B. Franklin', role: 'Left Grand Div., Union', side: 'u', img: '/war-img/cmdr/franklin.jpg', bio: 'Franklin led the Left Grand Division of nearly sixty thousand men, the wing Burnside meant to deliver the main blow against Lee’s southern flank. Reading his vague orders cautiously, he committed only Meade’s single division to the one breakthrough of the day and let it be driven back unsupported.' },
    { name: 'Joseph Hooker', role: 'Center Grand Div., Union', side: 'u', img: '/war-img/cmdr/hooker.jpg', bio: 'Hooker held the Center Grand Division in reserve and was ordered to throw it at Marye’s Heights once the earlier attacks had failed. He protested the assault as hopeless, sent his men up anyway under orders, and watched them shattered like the rest before dark.' },
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'Handed weeks to prepare by the late Union bridges, Lee dug his Army of Northern Virginia into the hills behind Fredericksburg and let the enemy come to him. He won the most lopsided defensive victory of his career, then noted that it had gained him nothing, not a foot of ground beyond where his lines already stood.' },
    { name: 'James Longstreet', role: 'First Corps, CSA', side: 'c', img: '/war-img/cmdr/longstreet.jpg', bio: 'Longstreet held the Confederate center on Marye’s Heights, packing infantry several ranks deep in the sunken road behind a stone wall. His artillerist had promised that a chicken could not live on the field below, and through fourteen charges not one Union soldier reached the wall.' },
    { name: 'Thomas J. “Stonewall” Jackson', role: 'Second Corps, CSA', side: 'c', img: '/war-img/cmdr/jackson.jpg', bio: 'Jackson held the Confederate right at the southern end of the line, where a swampy gap left between two brigades was the army’s one real weakness. Meade’s division broke clean through it before Jackson’s reserves counterattacked, sealed the hole, and drove the unsupported Federals back across the railroad.' },
    { name: 'J.E.B. Stuart', role: 'Cavalry, CSA', side: 'c', img: '/war-img/cmdr/stuart.jpg', bio: 'Stuart screened and guarded Jackson’s exposed right flank at the southern end of the field with his cavalry and horse artillery. His young artillerist John Pelham, with as few as one or two guns, raked the advancing Union line lengthwise and held up the whole southern attack until he was ordered to withdraw.' },
  ],
  outcome: {
    verdict: 'Decisive Confederate victory · a strategic dead end',
    text: 'A logistics failure handed Lee the high ground before the battle began, and Burnside’s own garbled orders turned the planned diversion in front of the town into the main slaughter: fourteen brigade-by-brigade charges into the stone wall at Marye’s Heights, and not one man reached it. The numerically superior Union army lost more than twice as many men as the South and gained nothing but a name for futile frontal assault. Lee won the battle and knew it had decided nothing. It was fought in the final weeks before the Emancipation Proclamation took effect on January 1, 1863, turning the war openly into a war against slavery, the freedom enslaved people around Fredericksburg had already been crossing the river to claim.',
  },
  sections: [
    { id: 'the-bridges-that-came-late', eyebrow: 'The original sin', title: 'A Battle Half-Lost Before a Shot', blurb: 'Burnside’s (North) whole plan was speed; the pontoon bridges arrived a week late, and Lee used the gift to fortify the heights.', img: '/war-img/cmdr/burnside.jpg' },
    { id: 'crossing-under-fire', eyebrow: 'House to house', title: 'The Contested River and the Sack of the Town', blurb: 'Barksdale’s (South) snipers shoot the engineers off the boats; a rowboat assault under fire clears the bank in the war’s first urban fight.', img: '/war-img/fredericksburg-overview.png' },
    { id: 'the-gap-and-the-wall', eyebrow: 'Two battles, one day', title: 'Meade’s Breakthrough and the Stone Wall', blurb: 'Meade (North) pierces the only gap in Jackson’s line and loses it for lack of help, while fourteen charges die in front of Marye’s Heights.', img: '/war-img/fredericksburg-maryes.png' },
    { id: 'the-frozen-field', eyebrow: 'The night after', title: 'The Wounded, the Cold, and the Contested Angel', blurb: 'Thousands of wounded freeze in the open under fire; the “Angel of Marye’s Heights” survives only in a single account written seventeen years later.', img: '/war-img/fredericksburg-prospect-hill.png' },
    { id: 'tactical-win-strategic-nothing', eyebrow: 'The cost & the meaning', title: 'A Battle Gained, and What It Bought No One', blurb: '~18,000 fall; the bigger army loses more than twice as many. Lee wins and knows it decided nothing, three weeks before emancipation.', img: '/war-img/cmdr/lee.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/fredericksburg/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function FredericksburgPage() {
  return <BattleDossier data={DATA} />
}
