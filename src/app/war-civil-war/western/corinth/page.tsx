'use client'

// BATTLE dossier (Second Battle of Corinth) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content via the war content pipeline
// (audits/war-content-pipeline.md).
// FLAG: the old page displayed CSA casualties as a range "~4,200–4,800" in the legend;
// BattleData.casualties only accepts integers. Using csa:4500 (midpoint from source).
// The range annotation is lost in the conversion.

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-corinth' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Second Battle of Corinth',
  date: 'October 3–4, 1862',
  place: 'Corinth, Mississippi',
  hero: {
    img: '/war-img/corinth-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
  },
  stats: [
    { label: 'Duration', value: '2 days' },
    { label: 'Casualties', value: '~7,000' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Mississippi (Corinth garrison)', str: '~23,000 troops', cmd: 'Rosecrans', note: 'Dug in behind a close inner ring of earthwork forts, and let the attack bleed out against it.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of West Tennessee', str: '~22,000 troops', cmd: 'Van Dorn & Price', note: 'Won the first day, then threw itself at the works and lost roughly twice what it inflicted.' },
  ],
  casualties: { union: 2520, csa: 4500, unionLabel: 'Union ~2,520' },
  commanders: [
    { name: 'William S. Rosecrans', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/rosecrans.jpg', bio: 'Rosecrans held Corinth with about 23,000 men, having spent his weeks of occupation strengthening a close inner ring of earthwork forts just outside town. He let Van Dorn batter himself against that line on October 4, broke the assault at Battery Robinett and Battery Powell, and came out of the battle a Northern hero.' },
    { name: 'Ulysses S. Grant', role: 'Dept. cmd., Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'Grant ran the wider western theater from his headquarters at Jackson, Tennessee, with his forces scattered between Corinth, Memphis, and Bolivar. He did not command on the field at Corinth, but the victory secured his rear and freed him to turn south toward the campaign against Vicksburg.' },
    { name: 'James B. McPherson', role: 'Reinforcements, Union', side: 'u', img: '/war-img/cmdr/mcpherson.jpg', bio: 'McPherson marched a reinforcement column from Jackson toward the fighting at Grant’s order. He reached Corinth around four in the afternoon on October 4, too late to fight but in time to make Van Dorn’s position hopeless and stiffen the pursuit.' },
    { name: 'William T. Sherman', role: 'Memphis, Union', side: 'u', img: '/war-img/cmdr/sherman.jpg', bio: 'Sherman held Memphis with roughly 7,000 men, one of the scattered pieces of Grant’s command that Van Dorn hoped to beat before they could concentrate. He stayed at his post on the Mississippi and did not take part in the battle itself.' },
    { name: 'Earl Van Dorn', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/van-dorn.jpg', bio: 'Van Dorn gathered about 22,000 men into the Army of West Tennessee and gambled on retaking the junction before the Union could mass against him. He won the first day, then threw his infantry at the inner earthworks on October 4, lost roughly twice what he inflicted, and retreated west toward the Hatchie.' },
    { name: 'Sterling Price', role: 'Corps, CSA', side: 'c', img: '/war-img/cmdr/price.jpg', bio: 'Price brought his Army of the West to join Van Dorn after the fight at Iuka, and led a wing of the combined force at Corinth. His troops drove deepest on October 4, briefly seizing Battery Powell before a Union counterattack threw them back out.' },
  ],
  outcome: {
    verdict: 'Union victory · the crossroads held',
    text: 'Van Dorn won the first day, driving the Federals back through the old outer works, then bled his army white on October 4 against the close inner ring of earthwork forts, losing roughly twice what he inflicted at the ditch before Battery Robinett. The junction stayed in Union hands for the rest of the war, the last serious Confederate bid for the western rail line collapsed, and Grant was freed to turn south toward Vicksburg. On the edge of the same town, a camp of self-freed people was proving, in human form, exactly what the war was being fought over.',
  },
  sections: [
    { id: 'the-crossroads', eyebrow: 'Corinth', title: 'The Crossroads of the Confederacy', blurb: 'Two railroads cross at one small town; Van Dorn (South) gathers 22,000 men to take it back from Rosecrans (North).', img: '/war-img/cmdr/van-dorn.jpg' },
    { id: 'october-third', eyebrow: 'October 3', title: "Van Dorn’s Good Day", blurb: 'The Confederates drive the Federals back through the old outer works, then run out of daylight one hour short of a breakthrough.', img: '/war-img/corinth-overview.png' },
    { id: 'battery-robinett', eyebrow: 'October 4', title: 'The Ditch at Battery Robinett', blurb: "Van Dorn’s gamble bleeds out against the inner earthwork line; Colonel Rogers (South) falls on the parapet, and the assault is shattered.", img: '/war-img/corinth.png' },
    { id: 'what-it-protected', eyebrow: 'The meaning', title: 'What the Victory Protected', blurb: 'The junction stays Union, freeing Grant for Vicksburg, and on the town’s edge a camp of freed people proves what the war was for.', img: '/war-img/cmdr/rosecrans.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/corinth/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function CorinthPage() {
  return <BattleDossier data={DATA} />
}
