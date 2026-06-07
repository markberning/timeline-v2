'use client'

// BATTLE dossier (Second Battle of Bull Run / Second Manassas) — REDESIGN. Thin data
// wrapper over the shared <BattleDossier> (new war skin, tabbed). Content produced
// through the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-bullrun2' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Second Bull Run',
  date: 'August 28–30, 1862',
  place: 'Manassas, Virginia',
  hero: {
    img: '/war-img/second-bull-run-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '3 days' },
    { label: 'Casualties', value: '~22,000' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of Virginia', str: '~65,000 troops', cmd: 'Pope', note: 'A brand-new army under a boastful stranger, marched onto ground it had bled for once already.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~50,000 troops', cmd: 'Lee', note: 'Split in two, marched fifty miles, and reunited on the field to spring the trap.' },
  ],
  casualties: { union: 14462, csa: 8400, unionLabel: 'Union ~14,462', csaLabel: 'Confederacy ~8,400' },
  commanders: [
    { name: 'John Pope', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/pope.jpg', bio: 'Pope commanded the new Army of Virginia and convinced himself the enemy was beaten and fleeing, so he threw his divisions at Jackson’s dug-in line one at a time and brushed aside repeated warnings that Longstreet’s wing was massing on his flank. When that flank attack came on August 30 his army was driven back toward Washington, and within two weeks he was relieved and sent west to fight Indians.' },
    { name: 'Irvin McDowell', role: 'Corps, Union', side: 'u', img: '/war-img/cmdr/mcdowell.jpg', bio: 'McDowell, who had lost the first battle on this same ground a year before, led a corps under Pope and was handed a cavalry dispatch reporting Longstreet’s column arriving, then pocketed it for hours. His shifting of Reynolds’s division away from Chinn Ridge helped strip the Union left just before Longstreet’s assault landed.' },
    { name: 'Franz Sigel', role: 'Corps, Union', side: 'u', img: '/war-img/cmdr/sigel.jpg', bio: 'Sigel’s I Corps was the only Union force in position at daybreak on August 29 and made the first attacks against Jackson’s line behind the railroad embankment, which were beaten back. His men fought again the next day trying to slow Longstreet’s avalanche.' },
    { name: 'Fitz John Porter', role: 'Corps, Union', side: 'u', img: '/war-img/cmdr/fj-porter.jpg', bio: 'Porter, whose V Corps faced Longstreet’s hidden wing, held back from attacking what he sensed was a strong enemy on his front and was made the scapegoat for the defeat. He was court-martialed and dismissed in 1863, a conviction later judged unjust and overturned.' },
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'Lee split his outnumbered army, sent Jackson on a wide march into Pope’s rear, and gambled that he could reunite his two wings on the battlefield before Pope destroyed either half. The gamble paid off completely, and the victory emboldened him to cross the Potomac for his first invasion of the North.' },
    { name: 'Thomas “Stonewall” Jackson', role: 'Wing, CSA', side: 'c', img: '/war-img/cmdr/jackson.jpg', bio: 'Jackson marched his wing roughly fifty miles around Pope’s flank, captured and burned the great Union supply depot at Manassas Junction, then dug in behind an unfinished railroad grade and held off two days of frontal assaults. He pinned Pope’s whole army in place until Lee’s other wing could arrive and strike.' },
    { name: 'James Longstreet', role: 'Wing, CSA', side: 'c', img: '/war-img/cmdr/longstreet.jpg', bio: 'Longstreet brought Lee’s second wing through Thoroughfare Gap and deployed it unseen on Jackson’s right, on the exposed flank of Pope’s army. On the afternoon of August 30 he launched some 25,000 to 28,000 men in what is generally reckoned the largest mass assault of the war, rolling up the Union left.' },
    { name: 'J.E.B. Stuart', role: 'Cavalry, CSA', side: 'c', img: '/war-img/cmdr/stuart.jpg', bio: 'Stuart’s cavalry screened Jackson’s long flank march so Pope never saw it coming, and during the battle his troopers stirred up dust to fake marching columns and confuse the Union command. After Longstreet’s assault Stuart pressed the pursuit of the retreating Federals across Bull Run.' },
  ],
  outcome: {
    verdict: 'Confederate victory · the road to Antietam opens',
    text: 'Lee split his army, sent Jackson on a fifty-mile march to burn Pope’s supply depot at Manassas Junction, then reunited his wings on the field and crushed the Union left with Longstreet’s massive August 30 assault. The Union army was driven back to the Washington defenses at a cost of roughly 22,000 combined casualties. The victory emboldened Lee to invade the North, leading straight to Antietam, after which Lincoln issued the Preliminary Emancipation Proclamation, turning the war into a war against slavery. It was the forgotten defeat that set the whole sequence in motion.',
  },
  sections: [
    { id: 'same-ground-again', eyebrow: 'The second time on the same field', title: 'A New Army, an Old Battlefield', blurb: 'Lincoln builds a new army under Pope (North); Lee shifts north to wreck it, on the exact ground of the first battle.', img: '/war-img/cmdr/pope.jpg' },
    { id: 'the-long-march', eyebrow: 'Fifty miles around the back', title: 'Jackson Burns the Supply Depot', blurb: 'Jackson marches fifty miles into Pope’s (North) rear, takes the great depot at Manassas Junction, feasts, and burns the rest.', img: '/war-img/second-bull-run-campaign.png' },
    { id: 'the-railroad-cut', eyebrow: 'Throwing an army at a wall', title: 'The Wall Behind the Railroad', blurb: 'Pope (North) hurls divisions piecemeal at Jackson’s dug-in line while Longstreet’s wing slips unseen onto the flank.', img: '/war-img/second-bull-run.png' },
    { id: 'the-hammer-falls', eyebrow: 'Twenty-eight thousand men at once', title: 'Longstreet’s Avalanche', blurb: 'Longstreet (South) unleashes the war’s largest mass assault into the exposed Union left; rearguard stands buy the army its escape.', img: '/war-img/second-bull-run-longstreet.png' },
    { id: 'the-road-to-antietam', eyebrow: 'The defeat that set up emancipation', title: 'What the Victory Unleashed', blurb: 'About 22,000 fall. Pope (North) is finished and Porter (North) is scapegoated, and the defeat opens the road to Antietam and emancipation.', img: '/war-img/cmdr/lee.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/second-bull-run/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function SecondBullRunPage() {
  return <BattleDossier data={DATA} />
}
