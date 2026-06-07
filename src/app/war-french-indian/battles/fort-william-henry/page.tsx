'use client'

// BATTLE dossier (The Siege of Fort William Henry, August 1757), French and Indian War.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author → critic gates →
// reconcile → revise. Sides are war-aware: British (red) / French (blue), set via
// sideNames + sideColors. Commander bios are gated, born-verified prose. The dossier
// masthead is the dotted Lake George / Lake Champlain locator map (no hero image yet).
// Sources: audits/war-pipeline/fi-fort-william-henry-*.

import { BattleDossier, type BattleData } from '../../../war-civil-war/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-fort-william-henry' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1757',
  title: 'The Siege of Fort William Henry',
  date: 'August 3–9, 1757',
  place: 'Lake George, New York',
  note: 'The siege the British lost by the book, and the massacre the myth made ten times too large.',
  hero: { img: '', pal: ['#2a2c33', '#3a4150', '#10131a'] },
  locator: {
    eyebrow: 'Where and when · August 1757',
    caption: 'Fort William Henry sat at the south end of Lake George, the British south anchor on the corridor between Albany and Montreal. Montcalm came down the lake from Fort Carillon (Ticonderoga); the relief that never came waited sixteen miles south at Fort Edward, on the Hudson.',
    frame: { lonMin: -74.25, lonMax: -72.95, latMin: 43.05, latMax: 44.15 },
    states: [
      { name: 'New York', tone: 'focus', label: 'NEW YORK', labelLon: -74.05, labelLat: 43.5 },
    ],
    lakes: [
      { name: 'Lake George', label: 'LAKE GEORGE', labelLon: -73.95, labelLat: 43.62, labelSize: 12 },
      { name: 'Lake Champlain', label: 'LAKE CHAMPLAIN', labelLon: -73.02, labelLat: 43.78, labelSize: 12 },
    ],
    dots: [
      { name: 'Fort Carillon (Ticonderoga)', lat: 43.84, lon: -73.39, color: '#8a8175', anchor: 'end' },
      { name: 'Fort William Henry', date: 'Aug 3–9, 1757', lat: 43.42, lon: -73.71, heavy: true, anchor: 'start', dateBelow: true },
      { name: 'Fort Edward', lat: 43.27, lon: -73.59, color: '#8a8175', anchor: 'start' },
    ],
  },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: '6 days' },
    { label: 'Surrendered', value: '~2,300 British' },
    { label: 'Winner', value: 'France & allies', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: 'Fort William Henry garrison & camp', str: '~2,300–2,500, many sick (smallpox among them)', cmd: 'Lt. Col. George Monro', note: 'A garrison, not a field army. It could hold the walls only as long as relief was coming, and the general who held the relief, Webb, never marched.' },
    { side: 'c', tag: 'French & allies', force: 'Expedition down Lake George from Fort Carillon', str: '~7,600–8,000, including nearly 2,000 Native allies', cmd: 'Maj. Gen. the Marquis de Montcalm', note: 'Ran a textbook European siege with a full siege train, and led the largest Native force assembled in the whole war, drawn from thirty-odd nations.' },
  ],
  casualties: { union: 185, csa: 0, unionLabel: 'British ~70–185 killed', csaLabel: 'French few', footnote: 'The post-surrender killings: roughly seventy sick and wounded murdered in the fort, then more cut down on the march out. Modern scholarship (Ian K. Steele; Fred Anderson) puts the dead and missing at fewer than 200, somewhere around 70 to 185, not the ~1,500 of the myth. Several hundred more were carried off as captives, most of whom were ransomed back, returned, or adopted.' },
  commanders: [
    { name: 'Louis-Joseph de Montcalm', role: 'Cmdr., French', side: 'c', img: '/war-img/fi-montcalm.jpg', bio: 'Montcalm ran the siege by the European rulebook he trusted, and gave Monro the honours of war, the highest courtesy one army could pay another. He negotiated those terms with the British alone, without consulting the nearly 2,000 Native allies whose idea of victory the terms cancelled, and when the killings followed he waded into the chaos to pull captives back, with partial success. He felt personally dishonoured, and afterward paid to recover the prisoners. He had won the fort and wrecked the alliance that kept New France in the war.' },
    { name: 'George Monro', role: 'Garrison cmdr., British', side: 'u', img: '', bio: 'Lieutenant Colonel Monro of the 35th Foot held a crumbling fort against impossible odds, refusing Montcalm’s first summons and fighting on as his own cannon burst and no relief came. When Montcalm sent in Webb’s intercepted letter telling him no help was coming, he still did not fold at once. He surrendered on honourable terms and then watched those terms come apart on the road. He died a few months later.' },
    { name: 'Daniel Webb', role: 'At Fort Edward, British', side: 'u', img: '', bio: 'Brigadier General Webb held the troops at Fort Edward, sixteen miles south, who might have broken the siege, and from the moment Montcalm appeared on the lake he chose not to risk them. He believed himself outnumbered and feared losing his own post and the road to Albany. His caution may have saved Fort Edward, but it abandoned a garrison that had every reason to expect help, and his name stayed attached to the corridor’s worst day.' },
    { name: 'Charles de Langlade', role: 'Brought the far nations, allied', side: 'n', sideLabel: 'ALLIED', img: '', bio: 'A Great Lakes war leader of Ottawa and French descent, Langlade helped bring the far nations of the upper country, men who had travelled close to 1,500 miles, into Montcalm’s coalition. The same warriors he helped gather were the ones the European terms denied the captives and plunder they had come for, and the breach of faith they felt was the fuse under the massacre.' },
  ],
  outcome: {
    verdict: 'French victory · the fort taken, the alliance broken',
    text: 'Montcalm took Fort William Henry in six days and burned it to the ground, erasing the British south anchor on the corridor. But the honours of war he granted by the European book collided with his Native allies’ war aims over the prisoners, and the killings that followed, far smaller than the myth of 1,500 yet a real atrocity, became a colonial rallying cry and fed a lasting, undiscriminating hatred of Native peoples. The far nations went home feeling betrayed, many carrying smallpox, and the grand coalition of 1757 never came together for France again. Montcalm won the siege and lost the thing keeping his country in the war.',
  },
  sections: [
    { id: 'the-fort-that-could-not-be-held', eyebrow: 'The corridor', title: 'The fort that could not be held', blurb: 'A timber fort at the south end of Lake George could only survive if relieved. The general who held the relief sat sixteen miles away, and down the lake came the largest army New France would ever field, with the largest Native force of the war at its head.' },
    { id: 'the-siege', eyebrow: 'Six days under the guns', title: 'The siege', blurb: 'Montcalm ran a textbook European siege, batteries in crossfire, the garrison’s own cannon bursting. Then he handed Monro the proof he was abandoned, gave him the honours of war, and set the terms without asking the allies who would never accept them.' },
    { id: 'the-massacre', eyebrow: 'The terms unravel', title: 'The massacre', blurb: 'What the warriors had come for and what the terms gave them were opposite things. The killing began that afternoon, the column was swarmed at dawn, and the number everyone has heard turns out to be ten times too large.' },
    { id: 'the-reckoning', eyebrow: 'What it cost everyone', title: 'The reckoning', blurb: 'Montcalm won the fort and threw the winnings away. The massacre became a weapon and a poison, the British answered in kind, and the alliance that had won the battle never came together for France again.' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/fort-william-henry/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function FortWilliamHenryPage() {
  return <BattleDossier data={DATA} />
}
