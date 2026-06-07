'use client'

// BATTLE dossier (Battle of the Wilderness) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content produced through the war
// content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-wilderness' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Battle of the Wilderness',
  date: 'May 5–7, 1864',
  place: 'Spotsylvania County, Virginia',
  hero: {
    img: '/war-img/wilderness-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '3 days' },
    { label: 'Casualties', value: '~29,000' },
    { label: 'Result', value: 'Inconclusive' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Potomac', str: '~119,000 troops', cmd: 'Grant & Meade', note: 'Marched into the thicket to fight through it, and was struck before it could clear the trees.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~66,000 troops', cmd: 'Lee', note: 'Chose to fight blind, in woods where cannon and numbers could not tell.' },
  ],
  casualties: { union: 18000, csa: 11000, unionLabel: 'Union ~18,000', csaLabel: 'Confederacy ~11,000' },
  commanders: [
    { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'Newly made general-in-chief of all the United States armies, Grant rode with the Army of the Potomac into the Wilderness meaning to march through it and fight Lee in the open beyond. Stopped cold and bloodied worse than Lee, he did the thing no Union commander before him had done after a battle with Lee: instead of retreating across the river, he ordered the army south around Lee’s flank and kept attacking.' },
    { name: 'George G. Meade', role: 'Army of the Potomac', side: 'u', img: '/war-img/cmdr/meade.jpg', bio: 'Meade commanded the Army of the Potomac on the ground while Grant set the strategy from alongside him. On May 5 he ordered Warren’s V Corps to attack Ewell along the Orange Turnpike, opening the battle, and spent two days fighting his corps blind through a thicket where his orders dissolved the moment they left his hand.' },
    { name: 'Gouverneur K. Warren', role: 'V Corps, Union', side: 'u', img: '/war-img/cmdr/warren.jpg', bio: 'Warren’s V Corps made the battle’s first contact on May 5, attacking Ewell’s Confederates across the open ground of Saunders Field on the Orange Turnpike. His men were thrown back into the woods by Ewell’s waiting earthworks, and the fight on the northern road see-sawed without decision for the rest of the day.' },
    { name: 'Winfield S. Hancock', role: 'II Corps, Union', side: 'u', img: '/war-img/cmdr/hancock.jpg', bio: 'Hancock’s big II Corps carried the Union effort on the Plank Road, and at dawn on May 6 his assault nearly shattered A.P. Hill’s corps before Longstreet arrived. Hours later Longstreet’s flank attack came up a hidden railroad bed into Hancock’s unguarded left and rolled his line up, in his own words, like a wet blanket, back to the Brock Road breastworks.' },
    { name: 'John Sedgwick', role: 'VI Corps, Union', side: 'u', img: '/war-img/cmdr/sedgwick.jpg', bio: 'Sedgwick’s VI Corps came up on May 5 to fight Ewell in the woods north of the Orange Turnpike, trading attacks and counterattacks through the brush before both sides dug in. He held the northern end of the Union line through the battle and survived it, only to be killed by a sharpshooter a few days later at Spotsylvania.' },
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'Outnumbered nearly two to one, Lee chose to fight inside the thicket where cannon and numbers could not tell, striking the Union army before it could clear the trees. When his right wing nearly collapsed on the morning of May 6 he tried to lead Longstreet’s counterattack in person until his own soldiers turned his horse back, and he held the field, only to find Grant marching south instead of away.' },
    { name: 'James Longstreet', role: 'First Corps, CSA', side: 'c', img: '/war-img/cmdr/longstreet.jpg', bio: 'Longstreet’s First Corps arrived at the last instant on the morning of May 6, just as Hill’s line gave way, and his counterattack drove the Union army back through the woods before his flanking column rolled up Hancock’s line. Pressing the advantage on the Plank Road, he was shot through the throat by his own men, almost exactly where Jackson had fallen a year before, and was out of the war for months.' },
    { name: 'Richard S. Ewell', role: 'Second Corps, CSA', side: 'c', img: '/war-img/cmdr/ewell.jpg', bio: 'Ewell’s Second Corps held the Confederate left along the Orange Turnpike, and his men dug in at Saunders Field threw back Warren’s opening attack on May 5 with heavy loss. He fought the northern road to a standstill across both days, keeping his end of Lee’s line intact in the tangle.' },
    { name: 'A. P. Hill', role: 'Third Corps, CSA', side: 'c', img: '/war-img/cmdr/ap-hill.jpg', bio: 'Hill’s Third Corps fought Getty and Hancock to a bloody draw on the Plank Road on May 5 but ended the day tangled and disorganized in the brush. At dawn on May 6 Hancock’s assault tore his unsorted line apart, and Lee’s right wing teetered on collapse until Longstreet’s corps arrived to save it.' },
  ],
  outcome: {
    verdict: 'Tactically inconclusive · strategically the turn of the war in the East',
    text: 'Lee stopped a far larger army on ground he had chosen and lost only about half as many men, a defeat by every rule of the previous three years. But Grant did not retreat. He marched the army south, around Lee’s flank, toward Spotsylvania, and the soldiers, realizing they were advancing and not falling back, cheered in the dark. It was the first time the Army of the Potomac stayed on the offensive after an opening battle with Lee, and it opened the Overland Campaign that would never let Lee’s army recover.',
  },
  sections: [
    { id: 'the-thicket', eyebrow: 'May 4', title: 'The woods Lee picked on purpose', blurb: 'Grant pushes a vast army into the thicket to march through it; Lee strikes inside the woods, where cannon cannot aim and numbers do not count.', img: '/war-img/wilderness-overview.png' },
    { id: 'the-two-roads', eyebrow: 'May 5', title: 'First contact in the brush', blurb: 'Ewell (South) meets Warren (North) on the Turnpike, Hill (South) meets Getty (North) and Hancock (North) on the Plank Road: a confused, bloody draw that leaves Hill’s corps tangled.', img: '/war-img/cmdr/ewell.jpg' },
    { id: 'longstreet-attacks', eyebrow: 'May 6', title: 'The day of the great attacks', blurb: 'Hancock (North) nearly breaks Hill (South) at dawn; Longstreet (South) saves the line and rolls up Hancock’s flank, then is shot by his own men, as Jackson was a year before.', img: '/war-img/wilderness-may6.png' },
    { id: 'the-turn', eyebrow: 'May 7', title: 'The night Grant turned south', blurb: 'Beaten by every old rule, Grant does not retreat. He marches the army south past Lee, and the men cheer in the dark.', img: '/war-img/wilderness-the-turn.png' },
    { id: 'what-it-was-for', eyebrow: 'The meaning', title: 'The men marching back across their own bondage', blurb: 'Grant’s army carried formerly enslaved men from these very counties, the most literal answer to what the blood was for: slavery was the reason.', img: '/war-img/cmdr/grant.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/wilderness/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function WildernessPage() {
  return <BattleDossier data={DATA} />
}
