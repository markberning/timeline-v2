'use client'

// BATTLE dossier (Battle of Cedar Creek). Same shape as Shiloh/Wilderness: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-cedarcreek' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'The Battle of Cedar Creek',
  date: 'October 19, 1864',
  place: 'Shenandoah Valley, Virginia',
  hero: {
    img: '/war-img/cedar-creek-hero.jpg',
    pal: ['#2a2438', '#1c182a', '#0a0812'],
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~8,600' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Shenandoah', str: '~31,000 troops', cmd: 'Sheridan', note: 'Routed in its sleep at dawn, then rallied by a general riding the wrong way down the Pike.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of the Valley', str: '~21,000 troops', cmd: 'Early', note: 'Burst from the fog and nearly won by breakfast, then halted, and lost it all by dark.' },
  ],
  casualties: { union: 5700, csa: 2900, unionLabel: 'Union ~5,700', csaLabel: 'Confederacy ~2,900' },
  commanders: [
    { name: 'Philip H. Sheridan', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/sheridan.jpg', bio: 'Sheridan was away at Winchester when his army was routed at dawn, returning from a meeting in Washington. He galloped roughly a dozen miles south down the Valley Pike against the current of his own fleeing men, rallied the broken army by the force of his arrival, and launched the afternoon counterattack that took the whole field back by dark.' },
    { name: 'Horatio G. Wright', role: 'VI Corps, Union', side: 'u', img: '/war-img/cmdr/wright.jpg', bio: 'As commander of the VI Corps, Wright was left in charge of the entire army in Sheridan’s absence, with his headquarters at Belle Grove. Surprised in the fog, he could only fight a delaying withdrawal through the morning, was painfully wounded in the chin, and held what he could together until Sheridan reached the field.' },
    { name: 'George Crook', role: 'Army of W. Va., Union', side: 'u', img: '/war-img/cmdr/crook.jpg', bio: 'Crook’s Army of West Virginia held the exposed Union left and took the first and worst of the dawn assault, its camps overrun while most of the men were still asleep. His battered command was held in reserve for the afternoon counterattack after being shattered in the morning.' },
    { name: 'George A. Custer', role: 'Cavalry, Union', side: 'u', img: '/war-img/cmdr/custer.jpg', bio: 'Custer anchored the far Union right with his cavalry division during the afternoon counterattack. His charge curled around the Confederate left toward the Cedar Creek bridge, Early’s line of retreat, and the threat to that escape route broke the Confederate army’s nerve and turned its withdrawal into a rout.' },
    { name: 'William H. Emory', role: 'XIX Corps, Union', side: 'u', img: '/war-img/cmdr/emory.jpg', bio: 'Emory commanded the XIX Corps, which was driven back through its own camps when the Confederate artillery opened on it in the early morning. His corps re-formed under Sheridan and formed part of the main infantry line in the counterattack that retook the field.' },
    { name: 'Jubal A. Early', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/early.jpg', bio: 'Early staked the whole campaign on a surprise dawn attack, splitting his outnumbered army into three columns that came out of the fog and routed two Union corps in their sleep. His advance then halted in the middle of the morning, the pause that let Sheridan ride back and reverse the day, and his Army of the Valley was destroyed as a fighting force by dark.' },
    { name: 'John B. Gordon', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/gordon.jpg', bio: 'Gordon scouted the Union position from the heights of Massanutten Mountain and devised the flank march that opened the battle, leading the column that hit the exposed Union left. He blamed the “fatal halting” that followed for converting the morning’s victory into the evening’s defeat, a charge he and Early feuded over for the rest of their lives.' },
    { name: 'Stephen D. Ramseur', role: 'Div., CSA †', side: 'c', img: '/war-img/cmdr/ramseur.jpg', bio: 'Ramseur held the Confederate line through the afternoon and was shot through both lungs as his division tried to make a stand, his third horse of the day going down under him. Captured in the retreat, he was carried to Belle Grove and died the next day with his old West Point friends, now Union officers, at his side.' },
  ],
  outcome: {
    verdict: 'Union victory · the Valley secured for good',
    text: 'A near-total Confederate triumph at dawn reversed into a crushing Union victory by dusk. Early’s army came out of the fog and routed two Union corps in their sleep, then halted, and the pause gave Sheridan time to ride in from Winchester, rally his broken army, and take it all back by dark. The win destroyed the Army of the Valley as a fighting force, ended the Shenandoah’s use as Lee’s breadbasket and invasion road, and, three weeks before the 1864 election, helped clinch the result that carried the war through to the end of slavery.',
  },
  sections: [
    { id: 'the-breadbasket-burning', eyebrow: 'The Shenandoah', title: 'The valley they came to burn', blurb: 'The Valley was Lee’s breadbasket and his road north, a slave economy with Belle Grove at its center. Sheridan (North) burned it, then camped in the ruins.', img: '/war-img/cmdr/early.jpg' },
    { id: 'the-dawn-surprise', eyebrow: 'October 19, dawn', title: 'The morning the Confederacy almost won', blurb: 'Early’s (South) army comes out of the fog and routs two Union corps in their tents, then, fatally, stops to plunder the camps.', img: '/war-img/cedar-creek-dawn.png' },
    { id: 'sheridans-ride', eyebrow: 'The rally', title: 'Sheridan rides down the Pike', blurb: 'Away at Winchester, Sheridan (North) gallops south against the flood of his own fleeing men, re-forming a broken army by the force of his arrival.', img: '/war-img/cedar-creek-sheridans-ride.png' },
    { id: 'the-counterattack', eyebrow: 'Late afternoon', title: 'Sheridan takes it all back', blurb: 'A general counterattack stalls until Custer’s (North) cavalry curls around the Confederate left toward the Cedar Creek bridge, and Early’s army disintegrates.', img: '/war-img/cedar-creek-counterattack.png' },
    { id: 'what-it-won', eyebrow: 'The meaning', title: 'What the victory secured', blurb: 'Cedar Creek ended the Valley as Lee’s breadbasket and invasion route, and the slave plantation at the center of the field is the proof of what the war was for.', img: '/war-img/cmdr/sheridan.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/cedar-creek/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function CedarCreekPage() {
  return <BattleDossier data={DATA} />
}
