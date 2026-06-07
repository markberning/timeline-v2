'use client'

// BATTLE dossier (Battle of Spotsylvania Court House) — REDESIGN. Thin data wrapper over
// the shared <BattleDossier> (new war skin, tabbed). Content produced through the war
// content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-spotsylvania' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Battle of Spotsylvania Court House',
  date: 'May 8–21, 1864',
  place: 'Spotsylvania County, Virginia',
  hero: {
    img: '/war-img/spotsylvania-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '~2 weeks' },
    { label: 'Casualties', value: '~30,000' },
    { label: 'Result', value: 'Draw' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Potomac', str: '~100,000 troops', cmd: 'Grant & Meade', note: 'Would not go home: attacked, was bled, slid southeast, and tried again.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~50,000–60,000 troops', cmd: 'Lee', note: 'Won the race to the crossroads and dug a fortress it could not afford to lose.' },
  ],
  casualties: { union: 18000, csa: 12500, unionLabel: 'Union ~18,000' },
  commanders: [
    { name: 'Ulysses S. Grant', role: 'Gen.-in-Chief, Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'As general-in-chief Grant rode with the Army of the Potomac and ran the campaign himself, and after the bloody draw in the Wilderness he turned the army southeast toward Spotsylvania rather than retreating north. For two weeks he attacked Lee’s works, was repulsed, and slid southeast to try again, telling Washington he meant to fight it out on this line if it took all summer.' },
    { name: 'George G. Meade', role: 'Army of the Potomac', side: 'u', img: '/war-img/cmdr/meade.jpg', bio: 'Meade remained the actual commander of the Army of the Potomac while Grant set the strategy, and he passed the attack orders down to the corps. It was Meade who told Warren to throw his V Corps at Laurel Hill once more on May 12, at all hazards, while the Mule Shoe bled.' },
    { name: 'Winfield S. Hancock', role: 'II Corps, Union', side: 'u', img: '/war-img/cmdr/hancock.jpg', bio: 'Hancock led the predawn assault of May 12, sending his entire II Corps in a massive column straight at the apex of the Mule Shoe. His men overran the salient and captured most of a Confederate division, opening the breach that triggered twenty hours of fighting at the Bloody Angle.' },
    { name: 'John Sedgwick', role: 'VI Corps, Union †', side: 'u', img: '/war-img/cmdr/sedgwick.jpg', bio: 'Sedgwick, the beloved "Uncle John" of the army, brought his VI Corps up to help batter Laurel Hill on May 8. The next morning, while siting artillery near the front, he was killed by a Confederate sharpshooter moments after telling his flinching men the enemy could not hit an elephant at that distance.' },
    { name: 'Emory Upton', role: 'Col., Union', side: 'u', img: '/war-img/cmdr/upton.jpg', bio: 'On May 10 the young colonel tried a new tactic against the west face of the salient: twelve regiments packed in a deep column, charging without stopping to fire. It broke clean through Lee’s line before the unsupported attack had to be given back, and Grant, impressed, promoted Upton on the spot and scaled the idea up for the May 12 assault.' },
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'Lee read Grant’s move at once and won the race to the crossroads, then dug the long Mule Shoe salient to hold the high ground. His mistaken order pulling the artillery out of the salient the night before May 12 left its apex nearly defenseless, and when the breach was torn open he rode forward to lead the counterattack himself until his soldiers turned him back.' },
    { name: 'Richard S. Ewell', role: 'Second Corps, CSA', side: 'c', img: '/war-img/cmdr/ewell.jpg', bio: 'Ewell’s Second Corps dug and held the Mule Shoe, the bulging salient whose apex Hancock overran on May 12. After the works were rebuilt across the base of the horseshoe, his corps threw back Hancock’s renewed assault on the old ground on May 18.' },
    { name: 'Richard H. Anderson', role: 'First Corps, CSA', side: 'c', img: '/war-img/cmdr/anderson.jpg', bio: 'Newly handed the First Corps after Longstreet was shot in the Wilderness, Anderson marched his infantry through the night and won the race to Laurel Hill by minutes. His men were already throwing up dirt on the high ground when the Federals arrived, setting the defensive shape of the whole battle.' },
    { name: 'J.E.B. Stuart', role: 'Cavalry, CSA †', side: 'c', img: '/war-img/cmdr/stuart.jpg', bio: 'Stuart’s cavalry fought to delay the Union advance toward the crossroads, then chased Sheridan’s raiding column when it rode off toward Richmond. On May 11 he was mortally wounded at Yellow Tavern and died in Richmond the next day, costing Lee the cavalry chief who had been the army’s eyes for three years.' },
  ],
  outcome: {
    verdict: 'Tactical draw · a strategic disaster for the South',
    text: 'For two weeks Grant attacked Lee’s entrenchments, was bloodily repulsed, and slid southeast to try again: the template of the whole Overland Campaign. Both sides claimed Spotsylvania, but it proved the new arithmetic. Grant could replace his ~18,000 casualties and Lee could not replace his ~12,000–13,000. Lee’s army would never again take the strategic offensive in the East. The road from this crossroads ran through Cold Harbor to the Petersburg trenches, where the war ground to its end.',
  },
  sections: [
    { id: 'the-race', eyebrow: 'May 7–8 · A foot-race for a crossroads', title: 'Why Grant Didn’t Go Home', blurb: 'Grant marches southeast instead of retreating; Anderson’s (South) corps wins the race to the Laurel Hill crossroads by minutes.', img: '/war-img/spotsylvania-overview.png' },
    { id: 'laurel-hill', eyebrow: 'May 8–9 · The line goes in', title: 'Spades, and a Sharpshooter', blurb: 'The Confederates dig four miles of works Warren (North) can’t crack; Sedgwick (North) is killed by a sniper moments after mocking the danger.', img: '/war-img/cmdr/sedgwick.jpg' },
    { id: 'the-mule-shoe', eyebrow: 'May 10–11 · The fatal geometry', title: 'Upton’s Column and the Mule Shoe', blurb: 'A salient bulges north into a death-trap; Upton (North) cracks it with a fast dense column, and Lee pulls his guns the night before the big assault.', img: '/war-img/spotsylvania-mule-shoe.png' },
    { id: 'the-bloody-angle', eyebrow: 'May 12 · Twenty hours in the rain', title: 'The Bloody Angle', blurb: 'Hancock (North) overruns the apex and captures a division; then twenty hours of the war’s worst hand-to-hand fighting along one log parapet.', img: '/war-img/spotsylvania-bloody-angle.png' },
    { id: 'the-23rd', eyebrow: 'May 13–21 · The army that came back in blue', title: 'The Crossroads Was the Object', blurb: 'Grant slides south again as the arithmetic turns; at the Alrich Farm, formerly enslaved men of the 23rd USCT charge Lee’s army on the soil they’d fled.', img: '/war-img/cmdr/grant.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/spotsylvania/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function SpotsylvaniaPage() {
  return <BattleDossier data={DATA} />
}
