'use client'

// BATTLE dossier (Battle of Chancellorsville). Same shape as Antietam/Shiloh: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-chancellorsville' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Battle of Chancellorsville',
  date: 'April 30 – May 6, 1863',
  place: 'Spotsylvania County, Virginia',
  hero: {
    img: '/war-img/chancellorsville-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
  },
  stats: [
    { label: 'Duration', value: '6 days' },
    { label: 'Casualties', value: '~30,000' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Potomac', str: '~130,000 troops', cmd: 'Maj. Gen. Joseph Hooker', note: 'Marched the bigger army behind Lee, then lost its nerve in the woods.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~60,000 troops', cmd: 'Gen. Robert E. Lee', note: 'Outnumbered two to one, split the army twice, and won at a price it could not afford.' },
  ],
  casualties: { union: 17300, csa: 13000, unionLabel: 'Union ~17,300', csaLabel: 'Confederacy ~13,000' },
  commanders: [
    { name: 'Joseph Hooker', role: 'Cmdr., Potomac', side: 'u', img: '/war-img/cmdr/hooker.jpg', bio: 'Hooker rebuilt a beaten army and marched roughly twice Lee’s numbers across the rivers and behind the Confederate line, one of the best-conceived operations the Army of the Potomac ever attempted. Then he lost his nerve in the Wilderness, pulled back from the open ground he had reached, was concussed by a cannonball against his own headquarters porch on May 3, and quit the campaign with tens of thousands of men who had barely fired a shot.' },
    { name: 'John Sedgwick', role: 'VI Corps, Union', side: 'u', img: '/war-img/cmdr/sedgwick.jpg', bio: 'Sedgwick held the lower crossings below Fredericksburg, first as the loud feint meant to pin Lee in place. On May 3 he stormed Marye’s Heights in the Second Battle of Fredericksburg and pushed west toward Lee’s rear, only to be stopped cold at Salem Church and pulled back across the Rappahannock at Banks’ Ford.' },
    { name: 'Oliver O. Howard', role: 'XI Corps, Union', side: 'u', img: '/war-img/cmdr/howard.jpg', bio: 'Howard held the far western end of the Union line, the unanchored flank hanging in the air, and left it facing the wrong way despite warnings that the enemy was moving beyond it. When Jackson’s corps burst out of the woods at dusk on May 2, his XI Corps was overrun from the side and lost around 2,500 men in minutes.' },
    { name: 'Darius N. Couch', role: 'II Corps, Union', side: 'u', img: '/war-img/cmdr/couch.jpg', bio: 'Couch was Hooker’s senior subordinate and came away from the May 1 withdrawal believing his commanding general was a whipped man. When the concussed Hooker would not give up command on May 3, the army was left paralyzed at the top, and Couch refused to serve under him again.' },
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'Outnumbered better than two to one, Lee divided his army twice in two days in front of a stronger enemy, sending Jackson on the flank march that wrecked the Union right while he held the center with a sliver of men. It is fairly called his perfect battle, won at the cost of a fifth of his army and Stonewall Jackson, and it became the springboard for the invasion that ended at Gettysburg.' },
    { name: 'Thomas "Stonewall" Jackson', role: 'Second Corps, CSA †', side: 'c', img: '/war-img/cmdr/jackson.jpg', bio: 'Jackson took his entire Second Corps on a roughly twelve-mile march around the Union army and shattered Howard’s XI Corps from the side at dusk on May 2, the most famous maneuver of the war. Scouting ahead in the dark for a night attack, he was shot by his own men, lost his left arm, and died of pneumonia eight days later.' },
    { name: 'J.E.B. Stuart', role: 'Cavalry, CSA', side: 'c', img: '/war-img/cmdr/stuart.jpg', bio: 'Stuart’s scouts found the open Union flank that made the whole flank march possible. After Jackson fell, the cavalryman who had never commanded infantry in a pitched battle took over the Second Corps overnight and renewed the assault on May 3, massing guns on captured Hazel Grove and driving the Union line inward on the crossroads.' },
  ],
  outcome: {
    verdict: 'Confederate victory · Lee’s masterpiece, and his most expensive win',
    text: 'Hooker marched roughly twice Lee’s numbers across the rivers and behind the Confederate army, one of the best-conceived operations the Army of the Potomac ever attempted, and then lost his nerve in the tangled woods of the Wilderness. Outnumbered two to one, Lee divided his army twice, sent Jackson on a twelve-mile flank march that shattered an entire Union corps, and out-nerved a larger, better-positioned foe. It is fairly called his perfect battle. But the word masterpiece hides the bill: a fifth of his army gone, and Stonewall Jackson shot by his own men in the dark, dead of pneumonia eight days later. The victory was the launching pad for the invasion that ended at Gettysburg.',
  },
  sections: [
    { id: 'the-plan', eyebrow: 'Hooker’s great gamble', title: 'The Finest Army on the Planet', blurb: 'Hooker (North) swings the bigger army behind Lee, a brilliant plan that marches two-to-one numbers into a forest that erases the edge.', img: '/war-img/chancellorsville-overview.png' },
    { id: 'lee-divides', eyebrow: 'The audacity of the outnumbered', title: 'Splitting an Army Already Too Small', blurb: 'Outnumbered two to one, Lee divides his force twice in two days, and Stuart’s (South) scouts find the open Union flank that makes it possible.', img: '/war-img/cmdr/lee.jpg' },
    { id: 'the-flank-march', eyebrow: 'Dusk on the Orange Turnpike', title: 'Jackson Comes Out of the Woods', blurb: 'Jackson marches twelve miles unseen and shatters Howard’s (North) XI Corps from the side in under an hour, the war’s most famous maneuver.', img: '/war-img/chancellorsville-flank.png' },
    { id: 'jackson-falls', eyebrow: 'The cost of the masterpiece', title: 'Shot by His Own Men', blurb: 'Jackson is wounded by his own men in the dark; Stuart (South) takes the corps, Hooker (North) is concussed on his own porch, and the Union line buckles.', img: '/war-img/chancellorsville-collapse.png' },
    { id: 'hooker-quits', eyebrow: 'A victory too expensive to keep', title: 'The General Loses His Nerve', blurb: 'Hooker (North) quits with the bigger army intact. Lee wins his masterpiece and pays with a fifth of his army and Stonewall Jackson, dead by May 10.', img: '/war-img/cmdr/hooker.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/chancellorsville/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function ChancellorsvillePage() {
  return <BattleDossier data={DATA} />
}
