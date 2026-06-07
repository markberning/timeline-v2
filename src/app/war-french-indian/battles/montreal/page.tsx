'use client'

// BATTLE dossier (The Fall of Montreal, September 1760), French and Indian War.
// The finale of the war vertical: the surrender of Montreal ended French rule in
// North America. Thin data wrapper over the shared <BattleDossier>. Content produced
// through the war content pipeline (audits/war-content-pipeline.md): fact pack →
// author → critic gates → reconcile → revise. Sides are war-aware: British (red) /
// French (blue), set via sideNames + sideColors. Commander bios are gated,
// born-verified prose. The dossier masthead is the dotted three-army-convergence
// locator map (no hero image). Source: audits/war-pipeline/fi-montreal-*.

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-montreal' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1760',
  title: 'The Fall of Montreal',
  date: 'September 8, 1760',
  place: 'Montreal',
  note: 'Three armies closed on the last French town in Canada, and New France came to an end almost without a shot.',
  hero: { img: '/war-img/fi-montreal-east-view.jpg', pal: ['#2a2c33', '#3a4150', '#10131a'], credit: 'Thomas Patten (drawing), P. Canot (engraving) · handcoloured engraving · 1760, published 1768 · Wikimedia Commons · public domain' },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'British', value: '~18,000 in three columns' },
    { label: 'Fighting', value: 'near-bloodless' },
    { label: 'Result', value: 'all of Canada surrendered', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: 'Three converging armies', str: '~18,000 in all, down three brutal routes', cmd: 'Maj. Gen. Jeffery Amherst', note: 'A closing fist rather than a battle: three armies set out hundreds of miles apart and arrived at Montreal within about a day of one another, leaving the French no gap to slip through.' },
    { side: 'c', tag: 'French', force: 'The Montreal garrison', str: 'a few thousand and shrinking by the day', cmd: 'Gov.-Gen. the Marquis de Vaudreuil & the Chevalier de Lévis', note: 'Trapped on the island with no relief possible, the militia gone home and the regulars deserting, the Native allies stepped aside. The walls could never have stood a siege.' },
  ],
  casualties: { union: 12, csa: 4, unionLabel: 'British near-none in action', csaLabel: 'French near-none in action', footnote: 'The fall of Montreal was almost bloodless. The deadliest day of the whole campaign was the passage of the St. Lawrence rapids, where about eighty-four British soldiers drowned (French observers thought far more), not one of them killed by enemy fire.' },
  commanders: [
    { name: 'Jeffery Amherst', role: 'Cmdr.-in-chief, British', side: 'u', img: '/war-img/fi-jeffery-amherst.jpg', bio: 'The commander-in-chief in North America, Amherst had taken Louisbourg in 1758 and now designed the three-army convergence that ended the war. He won at Montreal without a real fight, but his peace was harder than his war: he denied the garrison the honours of war, and as the new master of the interior he cut off the customary gifts to Native nations, a decision that helped set off Pontiac’s War three years later.' },
    { name: 'Pierre de Rigaud, Marquis de Vaudreuil', role: 'Governor-General, French', side: 'c', img: '/war-img/fi-vaudreuil.jpg', bio: 'The last Governor-General of New France, and the only one born in Canada. With three armies on the island, the militia gone home, the regulars deserting, the hospitals full, and no relief possible, he overruled his fighting general and surrendered not just Montreal but all of Canada, to spare a population that had nothing left to give. He carried the blame for the loss back in France and was tried and acquitted.' },
    { name: 'François-Gaston, the Chevalier de Lévis', role: 'Field cmdr., French', side: 'c', img: '/war-img/fi-levis.jpg', bio: 'The best soldier France had left in Canada, victor at Sainte-Foy in the spring. A fighter to the bone, he wanted to make a last stand on an island in the river rather than surrender; Vaudreuil forbade it. Denied that and denied the honours of war, he had his regiments burn their colors so the British could never parade them as trophies. He went on to a long career in France and was made a marshal, and a duke, only decades later.' },
  ],
  outcome: {
    verdict: 'The end of French rule in North America',
    text: 'On September 8, 1760, Vaudreuil and Amherst signed fifty-five articles of capitulation, and Canada and everything that depended on it passed to the British crown. The last French stronghold on the continent was gone. France did not formally cede Canada until the Treaty of Paris of 1763, but the thing itself ended that September morning: an empire of perhaps seventy thousand people, strung along the rivers for a century and a half, simply stopped being. Two empires had reached for North America. After Montreal there was one, and the Native nations who had played them against each other lost the leverage that had kept them free.',
  },
  sections: [
    { id: 'three-armies', eyebrow: 'The noose closes', title: 'Three armies', img: '/war-img/fi-montreal-converge-map.jpg', blurb: 'Amherst built a closing fist: three armies, hundreds of miles apart, all aimed at the one island. A tiny French garrison bought a week at Fort Lévis, the rapids drowned more men than the enemy did, and the trap shut within a day.' },
    { id: 'no-relief-coming', eyebrow: 'The trap', title: 'No relief coming', img: '/war-img/fi-montreal-east-view.jpg', blurb: 'Inside Montreal, Vaudreuil and Lévis faced the arithmetic. No fleet was coming, the militia had gone home to the farms, the regulars were deserting, and the Native allies had stepped aside. Lévis wanted a last stand; Vaudreuil chose to spare the people.' },
    { id: 'the-end-of-new-france', eyebrow: 'The surrender', title: 'The end of New France', img: '/war-img/fi-montreal-surrender.jpg', blurb: 'Fifty-five articles, signed September 8. Denied the honours of war, Lévis burned the colors. The Native nations had won their own peace first, and the conquest would teach them, faster than the British learned it, what a single empire meant.' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/montreal/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function MontrealPage() {
  return <BattleDossier data={DATA} />
}
