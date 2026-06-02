'use client'

// BATTLE dossier (Battle of Chickamauga) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-chickamauga' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Chickamauga',
  date: 'September 18–20, 1863',
  place: 'Catoosa & Walker Counties, Georgia',
  hero: {
    img: '/war-img/chickamauga-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
  },
  stats: [
    { label: 'Duration', value: '3 days' },
    { label: 'Casualties', value: '~34,000' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Cumberland', str: '~60,000 troops', cmd: 'Rosecrans', note: 'Cut in half by one mistaken order, and saved from ruin by the man who would not leave the field.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Tennessee', str: '~65,000 troops', cmd: 'Bragg', note: 'Won the rare battle where it outnumbered the North, then bled more than the army it beat.' },
  ],
  casualties: { union: 16170, csa: 18454, unionLabel: 'Union ~16,170', csaLabel: 'Confederacy ~18,454' },
  commanders: [
    { name: 'William S. Rosecrans', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/rosecrans.jpg', bio: 'Rosecrans had maneuvered Bragg out of Chattanooga without a battle, then let his army stay strung out in the Georgia woods. On the second day he relayed an order to plug a gap that was not there, opening a real one exactly where Longstreet struck, and was swept off the field with half his army back toward Chattanooga.' },
    { name: 'George H. Thomas', role: 'Corps, Union · the Rock', side: 'u', img: '/war-img/cmdr/thomas.jpg', bio: 'A Virginian who chose the Union, Thomas held the army’s left through the morning behind the log breastworks at Kelly Field. When the right collapsed he gathered the wreckage on Snodgrass Hill and Horseshoe Ridge and held until dark, earning the name the Rock of Chickamauga and turning a rout into an orderly retreat.' },
    { name: 'Gordon Granger', role: 'Reserve, Union', side: 'u', img: '/war-img/cmdr/granger.jpg', bio: 'Posted to the north to guard the roads, Granger marched his Reserve Corps toward the sound of the guns without waiting for orders. He reached Thomas at the breaking point and fed Steedman’s fresh brigades into the line on Horseshoe Ridge just as the defenders’ cartridges gave out.' },
    { name: 'Philip H. Sheridan', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/sheridan.jpg', bio: 'Sheridan held a division on the Union right when Longstreet’s column burst through the gap. His command was caught in the rout and swept off the field, and he spent the rest of his life answering for Chickamauga.' },
    { name: 'Braxton Bragg', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/bragg.jpg', bio: 'Bragg drew Rosecrans into the woods and won the field, the only major Confederate victory in the West. Then he refused the pursuit Forrest and Longstreet demanded, besieged Chattanooga instead, and tore his own command apart in the recriminations that followed.' },
    { name: 'James Longstreet', role: 'Wing, CSA', side: 'c', img: '/war-img/cmdr/longstreet.jpg', bio: 'Longstreet brought his divisions by rail from Lee’s army in Virginia and took command of Bragg’s left wing. At about 11:10 on September 20 he sent a massed column of roughly eight brigades straight into the gap Wood had just left, breaking the Union right and routing half the army.' },
    { name: 'Leonidas Polk', role: 'Wing, CSA', side: 'c', img: '/war-img/cmdr/polk.jpg', bio: 'Polk commanded the Confederate right wing and was ordered to open the September 20 assault at dawn. His attack went in roughly four hours late against Thomas’s fortified left and made little headway, and Bragg suspended him afterward and blamed him for the lost chance.' },
    { name: 'Nathan Bedford Forrest', role: 'Cavalry, CSA', side: 'c', img: '/war-img/cmdr/forrest.jpg', bio: 'Forrest’s troopers fired the first shots at Reed’s Bridge and then fought dismounted alongside the infantry. Riding on the heels of the fleeing Federals afterward, he pressed Bragg furiously to finish them, and raged when the order to pursue never came.' },
  ],
  outcome: {
    verdict: 'Confederate tactical win · strategic failure',
    text: 'A single mistaken order opened a quarter-mile gap in the Union center exactly where Longstreet’s massed column struck, and half the Army of the Cumberland routed off the field. It was the most complete battlefield victory the South ever won in the West. But George Thomas held Snodgrass Hill until dark and turned a rout into an orderly retreat, and the Confederates lost more men winning than the army they beat. Bragg refused the pursuit Forrest and Longstreet demanded, besieged Chattanooga instead, and tore his own command apart in the recriminations that followed. Two months later Grant broke the siege and took the gateway south anyway. The only major Confederate victory in the West was also one of the costliest mistakes it ever made.',
  },
  sections: [
    { id: 'the-maneuver', eyebrow: 'The bloodless prize', title: 'How Rosecrans Took Chattanooga Without a Fight', blurb: 'Rosecrans (North) levers Bragg (South) out of the gateway city without a battle, then finds his own army strung out in the Georgia woods.', img: '/war-img/chickamauga-overview.png' },
    { id: 'the-woods', eyebrow: 'A battle nobody could see', title: 'Groping Toward Each Other in the Timber', blurb: 'Bragg (South) turns to fight; the two armies feed brigades blindly into forest so thick no one can see the battle. A bloody draw in the dark.', img: '/war-img/cmdr/longstreet.jpg' },
    { id: 'the-gap', eyebrow: 'The hole in the line', title: 'One Order, One Column, and the Union Right Comes Apart', blurb: 'A mistaken order pulls Wood (North) out of line just as Longstreet (South) strikes the spot; half the army routs off the field.', img: '/war-img/chickamauga.png' },
    { id: 'the-rock', eyebrow: 'The man who would not leave', title: 'Thomas Holds Snodgrass Hill', blurb: 'Thomas (North), a Virginian who chose the Union, rallies the wreckage on the high ground and holds until dark, turning a rout into a retreat.', img: '/war-img/chickamauga-snodgrass.png' },
    { id: 'the-reckoning', eyebrow: 'The cost & the meaning', title: 'The Bloodiest Day in the West and What It Bought', blurb: '~34,000 fall in the second-bloodiest battle of the war. Bragg (South) wins the field, loses more men, and throws the victory away.', img: '/war-img/cmdr/thomas.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/chickamauga/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function ChickamaugaPage() {
  return <BattleDossier data={DATA} />
}
