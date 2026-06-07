'use client'

// BATTLE dossier (Wilson’s Creek / Oak Hills). Same shape as Antietam: hero ·
// collapsible At-a-glance · outcome card · commanders strip · section list.
// Content produced through the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'tmis',
  crumbs: civilWarCrumbs({ theatre: 'tmis', battleId: 't-wilsonscreek' }),
  backHref: '/war-civil-war/trans-mississippi',
  eyebrow: 'Battle · Trans-Mississippi',
  title: "Battle of Wilson’s Creek",
  date: 'August 10, 1861',
  place: 'near Springfield, Missouri',
  hero: {
    img: '/war-img/wilsons-creek-hero.jpg', // Kurz & Allison chromolithograph (PD)
    pal: ['#3a3320', '#5a2a32', '#100506'],
    credit: "Battle of Wilson’s Creek · Kurz & Allison · public domain",
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~2,500' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the West', str: '~5,400 troops', cmd: 'Brig. Gen. Nathaniel Lyon', note: 'Outnumbered better than two to one, and attacking anyway.' },
    { side: 'c', tag: 'Confederacy', force: 'Missouri State Guard & allies', str: '~12,000 troops', cmd: 'Price & McCulloch', note: 'A larger force under two commanders who could barely agree.' },
  ],
  casualties: { union: 1317, csa: 1222, unionLabel: 'Union ~1,317', csaLabel: 'Confederacy ~1,222' },
  commanders: [
    { name: 'Nathaniel Lyon', role: 'Cmdr., Union †', side: 'u', img: '/war-img/cmdr/lyon.jpg', bio: 'Lyon commanded the outnumbered Army of the West and chose to attack a force roughly twice his size rather than give up Springfield. He led a counterattack in person as the Union center wavered and was shot through the heart, becoming the first Union general killed in combat in the war.' },
    { name: 'Franz Sigel', role: 'Column, Union', side: 'u', img: '/war-img/cmdr/sigel.jpg', bio: 'Sigel proposed the pincer plan and led the smaller flanking column on a wide loop to strike the Confederate camp from the south. His men mistook a gray-clad Louisiana regiment for friendly troops and held their fire; one volley at close range shattered his column, and Sigel fled, losing five of his six guns.' },
    { name: 'Samuel D. Sturgis', role: 'Union', side: 'u', img: '/war-img/cmdr/sturgis.jpg', bio: 'Sturgis commanded one of Lyon’s brigades and inherited the whole army the moment Lyon was killed. He beat back one more Confederate assault, then made the only sound call left and pulled the battered Union force off Bloody Hill in good order.' },
    { name: 'Sterling Price', role: 'Missouri St. Guard', side: 'c', img: '/war-img/cmdr/price.jpg', bio: 'Price led the Missouri State Guard, the larger half of the Confederate force, and organized the repeated assaults up the south face of Bloody Hill. He was wounded in the side during the fighting but stayed in the saddle, and after the victory marched his Missourians north alone when he and McCulloch could not agree on what to do next.' },
    { name: 'Benjamin McCulloch', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/mcculloch.jpg', bio: 'McCulloch held overall command of the combined Confederate and Arkansas troops and organized the counterattack that destroyed Sigel’s column. He won the field but refused to pursue the retreating enemy, pleading exhaustion and empty cartridge boxes, and was himself killed seven months later at Pea Ridge.' },
  ],
  outcome: {
    verdict: 'Confederate victory · Missouri held, barely',
    text: 'The South won the field but could not keep it. Battered and split between two commanders, they let the smaller Union army withdraw intact. Brig. Gen. Nathaniel Lyon, killed leading a counterattack, became the first Union general to die in the war. His aggressive campaign helped keep Missouri in the Union, but at a price: a rival secessionist government and the most savage guerrilla war of the entire conflict, which tore the state apart for years.',
  },
  sections: [
    { id: 'fight-for-missouri', eyebrow: 'The border state', title: 'The Fight for Missouri', blurb: 'Why a slave state on the border could decide the war, and how Nathaniel Lyon (North) seized Missouri by force and chased the secessionists south.', img: '/war-img/cmdr/lyon.jpg' },
    { id: 'bloody-hill', eyebrow: 'Dawn, August 10', title: 'Bloody Hill', blurb: "Lyon splits his tiny army for a dawn double-attack; a confusion of gray uniforms wrecks Sigel’s (North) column, and the killing centers on one low ridge.", img: '/war-img/wilsons-creek.png' },
    { id: 'death-of-lyon', eyebrow: 'The cost & Missouri’s fate', title: 'The Death of Lyon', blurb: "Lyon falls leading a charge, the war’s first general killed. The South wins a field it cannot hold, and Missouri’s guerrilla nightmare begins.", img: '/war-img/wilsons-creek-fall-of-lyon.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/trans-mississippi/wilsons-creek/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function WilsonsCreekPage() {
  return <BattleDossier data={DATA} />
}
