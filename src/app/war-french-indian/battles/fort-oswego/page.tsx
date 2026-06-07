'use client'

// BATTLE dossier (The Siege of Fort Oswego, August 1756), French and Indian War.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author → critic
// gates → reconcile → revise. Sides are war-aware: British (red) / French (blue), set
// via sideNames + sideColors. Commander bios are gated, born-verified prose. The dossier
// masthead is the dotted Lake Ontario locator map (no hero image exists yet).

import { BattleDossier, type BattleData } from '../../../war-civil-war/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-oswego' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1756',
  title: 'The Siege of Fort Oswego',
  date: 'August 10–14, 1756',
  place: 'Oswego, New York',
  note: 'The new French general’s first American victory, and a grim rehearsal for Fort William Henry.',
  hero: { img: '', pal: ['#2a2c33', '#3a4150', '#10131a'] },
  locator: {
    eyebrow: 'Where and when · August 1756',
    caption: 'Oswego was Britain’s only naval and trading post on Lake Ontario, a wedge in the side of French communications west. Montcalm staged the expedition out of Fort Frontenac across the lake and rowed it to the British base at the mouth of the Oswego River.',
    frame: { lonMin: -79.6, lonMax: -75.4, latMin: 42.9, latMax: 44.7 },
    states: [
      { name: 'New York', tone: 'focus', label: 'NEW YORK', labelLon: -76.0, labelLat: 43.2 },
      { name: 'Ontario', label: 'ONTARIO (NEW FRANCE)', labelLon: -78.2, labelLat: 44.35, labelSize: 12 },
      { name: 'Pennsylvania' },
    ],
    lakes: [
      { name: 'Lake Ontario', label: 'LAKE ONTARIO', labelLon: -77.4, labelLat: 43.62, labelSize: 13 },
    ],
    dots: [
      { name: 'Fort Frontenac', lat: 44.23, lon: -76.48, color: '#8a8175', anchor: 'end' },
      { name: 'Fort Oswego', date: 'Aug 10–14, 1756', lat: 43.46, lon: -76.52, heavy: true, anchor: 'start', dateBelow: true },
      { name: 'Fort Niagara', lat: 43.26, lon: -79.06, color: '#8a8175', anchor: 'start' },
    ],
  },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: '4 days' },
    { label: 'Captured', value: '~1,600–1,700 British' },
    { label: 'Winner', value: 'France & allies', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: 'Oswego garrison (three forts)', str: 'a sick, hungry garrison; ~150 NJ militia at Fort Rascal', cmd: 'Col. James Mercer, then Lt. Col. John Littlehales', note: 'Holed up in three poorly sited forts, the garrison gave up the commanding height of Fort Ontario without a fight and was bombarded into surrender from its own high ground.' },
    { side: 'c', tag: 'French & allies', force: 'Expedition out of Fort Frontenac', str: '~3,000, including ~250 Native allies', cmd: 'Maj. Gen. the Marquis de Montcalm', note: 'Ran a textbook European siege, took the heights in three days, and fired down into the low forts until they broke.' },
  ],
  casualties: { union: 100, csa: 30, unionLabel: 'British ~80–150 killed', csaLabel: 'French few dozen', footnote: 'Between about 1,600 and 1,700 British surrendered and were carried off to Canada. A disputed number of prisoners, from a few dozen to upward of a hundred, were killed by Native allies and Canadian militia after the surrender.' },
  commanders: [
    { name: 'Louis-Joseph de Montcalm', role: 'Cmdr., French', side: 'c', img: '/war-img/fi-montcalm.jpg', bio: 'The marquis had soldiered nearly his whole life, an ensign at nine, first action in 1733, five sabre wounds and capture at Piacenza in 1746. He reached Quebec in mid-May 1756 to command the king’s regulars, and Oswego was his first American battle. He ran it by the European rulebook he trusted, and that same rulebook, when he denied the garrison the honours of war, helped set off the killings he then stepped in to stop.' },
    { name: 'James Mercer', role: 'Garrison cmdr., British', side: 'u', img: '', bio: 'Colonel Mercer commanded the Oswego garrison through the siege. He was killed by a cannonball as the French fired down from the captured heights, the steady hand gone in an instant with the fort coming apart around his sick and hungry men.' },
    { name: 'John Littlehales', role: 'Surrendered the fort, British', side: 'u', img: '', bio: 'Lieutenant Colonel Littlehales took command when Mercer was killed. With the high ground lost, the fort crumbling under crossfire, and soldiers, laborers, and the women and children of the post inside the walls, he surrendered within about an hour. He was seized and badly beaten by Abenaki warriors after the surrender.' },
    { name: 'François-Pierre de Rigaud de Vaudreuil', role: 'Led the militia, French', side: 'c', img: '/war-img/fi-francois-pierre-vaudreuil.jpg', bio: 'Brother of the governor-general of New France, he led the Canadian militia and had spent the early summer cutting Oswego off from the outside world. He worked hard to draw warriors from the upper country to the French cause on the strength of the victory on the Monongahela the year before.' },
  ],
  outcome: {
    verdict: 'Decisive French victory · the lake lost and a massacre foreshadowed',
    text: 'In four days the new French general erased Britain’s only foothold on Lake Ontario. France now held undisputed control of the lake and its western communications; Britain’s 1756 plans, the Niagara expedition among them, were in ruins. Between 1,600 and 1,700 people were carried off to Canada. And the collision Montcalm set off by denying the honours of war, his European rules running headlong into his allies’ war aims over the prisoners, was a rehearsal for the far more infamous killings at Fort William Henry the next summer.',
  },
  sections: [
    { id: 'the-prize-on-the-lake', eyebrow: 'The only door on the lake', title: 'The prize on the lake', img: '/war-img/fi-oswego-map.jpg', blurb: 'Lake Ontario was the hinge between the colonies and the interior, and Oswego was Britain’s one base on it. A strong idea built on weak ground, and across the water the French were gathering to take it.' },
    { id: 'the-siege', eyebrow: 'Four days', title: 'The siege', img: '/war-img/fi-oswego-attaques-1756.jpg', blurb: 'Montcalm ran a textbook siege. The garrison handed him the commanding height without a fight, and he fired down into the low forts until they broke. Then he denied them the honours of war.' },
    { id: 'the-killings-and-the-cost', eyebrow: 'Two ways of war collide', title: 'The killings and the cost', blurb: 'After the surrender, two whole ideas of what a victory is collided over the heads of the prisoners. People were killed; the toll is disputed; and the same fault line would tear open again at Fort William Henry.' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/fort-oswego/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function FortOswegoPage() {
  return <BattleDossier data={DATA} />
}
