'use client'

// BATTLE dossier (Glorieta Pass). Same shape as Antietam. Outcome is the unusual
// case: the Confederates won the field but lost the campaign (supply train burned),
// so the verdict is a STRATEGIC Union victory.
// Content produced through the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'tmis',
  crumbs: civilWarCrumbs({ theatre: 'tmis', battleId: 't-glorieta' }),
  backHref: '/war-civil-war/trans-mississippi',
  eyebrow: 'Battle · Trans-Mississippi',
  title: 'Battle of Glorieta Pass',
  date: 'March 26–28, 1862',
  place: 'New Mexico Territory',
  hero: {
    img: '/war-img/glorieta-pass-hero.jpg', // National Guard Heritage painting (PD)
    pal: ['#7a5a2a', '#5a3a22', '#100a06'],
    credit: 'Battle of Glorieta Pass · National Guard Heritage painting · public domain',
  },
  stats: [
    { label: 'Duration', value: '3 days' },
    { label: 'Casualties', value: '~270' },
    { label: 'Winner', value: 'Union (strategic)', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Colorado & New Mexico volunteers', str: '~1,300 troops', cmd: 'Col. John P. Slough', note: 'Force-marched from Colorado to save the territory, then slipped a column over the mesa.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of New Mexico', str: '~1,300 troops', cmd: 'Lt. Col. William Scurry', note: 'Texans chasing a road to the Pacific, who won the field and lost everything else.' },
  ],
  casualties: { union: 75, csa: 190, unionLabel: 'Union ~75', csaLabel: 'Confederacy ~190' },
  commanders: [
    { name: 'John P. Slough', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/slough.jpg', bio: 'Slough led the Colorado and New Mexico force down from Fort Union and devised the two-prong plan for March 28, pushing up the Santa Fe Trail himself while a column went over the mesa behind the enemy. He lost the ground at Pigeon’s Ranch and pulled back, but the column he detached burned the Confederate supply train and won the campaign that same afternoon.' },
    { name: 'John M. Chivington', role: 'Raid, Union', side: 'u', img: '/war-img/cmdr/chivington.jpg', bio: 'A former Methodist minister, Chivington led the Union advance that broke Pyron’s vanguard in Apache Canyon on March 26, then commanded the detachment that climbed Glorieta Mesa on the 28th and dropped into the Confederate rear. His men overwhelmed the guard at Johnson’s Ranch and destroyed the entire Texan supply train; two years later he led the Sand Creek Massacre.' },
    { name: 'Manuel Chaves', role: 'Guide, Union', side: 'u', img: '/war-img/cmdr/chaves.jpg', bio: 'Chaves was a New Mexican frontiersman and an officer in the territory’s own Union volunteers who knew the mountain country no Coloradan or Texan did. He guided Chivington’s column up and over Glorieta Mesa to the vantage point above Johnson’s Ranch, the move that made the supply-train raid possible.' },
    { name: 'Edward R. S. Canby', role: 'Dept., Union', side: 'u', img: '/war-img/cmdr/canby.jpg', bio: 'Canby commanded all Union forces in the territory and held Fort Craig astride the Confederate line of march after the fight at Valverde, denying Sibley the supplies he had come to capture. As the Texans retreated he closed in along the Rio Grande, helping force their ruinous march back to Texas.' },
    { name: 'Henry Hopkins Sibley', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/sibley.jpg', bio: 'Sibley conceived the whole campaign and sold it to Jefferson Davis: march Texans up the Rio Grande, take New Mexico, and reach for California and the Pacific. He was not on the field at Glorieta, and after the supply train burned he ordered the abandonment of New Mexico and the long retreat south, bringing barely 1,500 of his roughly 2,500 men home.' },
    { name: 'Charles L. Pyron', role: 'Field, CSA', side: 'c', img: '/war-img/cmdr/pyron.jpg', bio: 'Pyron led the Confederate vanguard that collided with Chivington in Apache Canyon on March 26, opening the battle by accident. His outnumbered Texans were flanked off two successive lines and driven back west, leaving dozens captured, before the main armies came up.' },
  ],
  outcome: {
    verdict: 'Strategic Union victory · the West held',
    text: 'The Texans won the field at Pigeon’s Ranch but lost the war for the Southwest the same afternoon, when a Union column crossed the mesa and burned their entire supply train in the rear. With no food or ammunition, the Confederates abandoned New Mexico and retreated, starving, back to Texas. The Confederacy never again threatened the Far West, and its dream of a slaveholding republic reaching the Pacific died in a burning wagon park. The Union officer who led the raid, John Chivington, would two years later perpetrate the Sand Creek Massacre.',
  },
  sections: [
    { id: 'the-dream', eyebrow: 'The grab for the West', title: 'The Dream of the Pacific', blurb: 'The Confederates march up the Rio Grande to take New Mexico and reach California, and the Colorado volunteers force-march to stop them.', img: '/war-img/cmdr/sibley.jpg' },
    { id: 'the-battle', eyebrow: 'March 26–28', title: 'The Gettysburg of the West', blurb: 'In the canyon and at Pigeon’s Ranch, Scurry’s (South) Texans drive the Union back and win the field.', img: '/war-img/glorieta-pass.png' },
    { id: 'the-wagons', eyebrow: 'The decisive stroke', title: 'The Wagons at Johnson’s Ranch', blurb: 'While the armies fight, a Union column crosses the mesa and burns the entire Confederate supply train, winning the campaign by losing the battle.', img: '/war-img/cmdr/chivington.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/trans-mississippi/glorieta-pass/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function GlorietaPassPage() {
  return <BattleDossier data={DATA} />
}
