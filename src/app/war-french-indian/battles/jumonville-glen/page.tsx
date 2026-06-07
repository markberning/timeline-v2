'use client'

// BATTLE dossier (Jumonville Glen, 1754), French and Indian War.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author → five critic
// gates → reconcile → revise. Sides are war-aware: British (red) / French (blue), set
// via sideNames + sideColors. Commander bios are gated, born-verified prose.

import { BattleDossier, type BattleData } from '../../../war-civil-war/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-jumonville' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1754',
  title: 'Jumonville Glen',
  date: 'May 28, 1754',
  place: 'Fayette County, Pennsylvania',
  note: 'The backwoods skirmish that helped set off a world war.',
  hero: {
    img: '/war-img/fi-the-spark-map.jpg',
    pal: ['#2e2a20', '#4a4030', '#14110a'],
  },
  locator: {
    eyebrow: 'Where and when · May 1754',
    caption: 'Washington marched out from Great Meadows in the dark and surrounded a French party in a glen in the Pennsylvania backcountry, about ten miles off, beyond Laurel Ridge. The French had come up from Fort Duquesne at the Forks of the Ohio.',
    frame: { lonMin: -81.0, lonMax: -78.0, latMin: 39.2, latMax: 40.85 },
    states: [
      { name: 'Pennsylvania', tone: 'focus', label: 'PENNSYLVANIA', labelLon: -78.6, labelLat: 40.6 },
      { name: 'Maryland', label: 'MARYLAND', labelLon: -78.5, labelLat: 39.45, labelSize: 13 },
      { name: 'Virginia', label: 'VIRGINIA', labelLon: -79.7, labelLat: 39.3, labelSize: 13 },
      { name: 'Ohio', label: 'OHIO', labelLon: -80.7, labelLat: 40.4, labelSize: 13 },
      { name: 'West Virginia' },
    ],
    dots: [
      { name: 'Jumonville Glen', date: 'May 28, 1754', lat: 39.85, lon: -79.62, heavy: true, anchor: 'start', dateBelow: true },
      { name: 'Fort Duquesne', lat: 40.44, lon: -80.01, color: '#8a8175', anchor: 'end' },
      { name: 'Fort Cumberland', lat: 39.65, lon: -78.76, color: '#8a8175', anchor: 'start' },
    ],
  },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: '~15 minutes' },
    { label: 'French killed', value: '~10–14' },
    { label: 'Winner', value: 'Britain & allies', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: 'Washington’s detachment', str: '~40 Virginia provincials + Mingo allies', cmd: 'Lt. Col. George Washington', note: 'Surrounded the French camp at dawn with Tanaghrisson’s warriors after a night march.' },
    { side: 'c', tag: 'French', force: 'Fort Duquesne party', str: '~35 men', cmd: 'Ensign Joseph de Jumonville', note: 'Caught unposted in a rocky hollow; Jumonville killed after the fighting stopped.' },
  ],
  casualties: { union: 1, csa: 12, unionLabel: 'British 1 killed', csaLabel: 'French ~10–14 killed', footnote: 'About 21 French were also taken prisoner; one escaped to carry word to Fort Duquesne.' },
  commanders: [
    { name: 'George Washington', role: 'Cmdr., British', side: 'u', img: '/war-img/fi-washington-1772.jpg', bio: 'A twenty-two-year-old lieutenant colonel of the Virginia Regiment, Washington led the overnight march and the dawn attack on the glen, and came out of it with a one-sided tactical win and a diplomatic catastrophe. Three days later he wrote to his brother that he had heard the bullets whistle and found the sound charming; within weeks the killing of Jumonville under his command had become an international scandal and he would sign, without knowing it, a document that called it an assassination.' },
    { name: 'Tanaghrisson', role: 'The Half King', side: 'n', sideLabel: 'MINGO', img: '', bio: 'A Mingo leader whose own standing among the Ohio nations was collapsing after the French seized the Forks, Tanaghrisson guided Washington to the French camp and then struck the blow that killed the wounded Jumonville, a deliberate political act meant to force the French into retaliation and bind the British to the Ohio nations against them. The gamble failed: the Ohio nations did not rally, the British alliance disappointed him, he withdrew before Fort Necessity, and he died of pneumonia at Paxtang, Pennsylvania, on October 4, 1754.' },
    { name: 'Joseph de Jumonville', role: 'Led the party, French', side: 'c', img: '', bio: 'A French ensign sent south from Fort Duquesne carrying a formal summons ordering the British to withdraw from the Ohio Country, Jumonville was caught in the rocky hollow before his party could make its mission known and was killed after the firefight ended, his death disputed from the moment it happened. France turned him into a martyr and a propaganda cause, branding the killing an assassination and locking that charge into the very capitulation document Washington unwittingly signed at Fort Necessity.' },
  ],
  outcome: {
    verdict: 'A backwoods skirmish that lit a global war',
    text: 'Fifteen minutes of firing in a Pennsylvania glen killed a French junior officer and started a chain no one intended to start. The French retaliated within weeks, cornering Washington at Fort Necessity and forcing the only surrender of his career. The capitulation document’s word "l’assassinat" fixed an assassination charge to Washington’s name across Europe, a propaganda gift to France. The two fights at the glen and at Fort Necessity were the opening shots of the French and Indian War, which escalated through Braddock’s destruction in 1755 and widened across continents into the global Seven Years’ War. Underneath the imperial quarrel the deepest stake remained what it had always been: the Ohio Country, the land of the Shawnee, the Lenape, the Mingo, and the other nations who had not invited either empire in and were never offered a say in how it ended.',
  },
  sections: [
    { id: 'the-road-to-the-glen', eyebrow: 'The march in', title: 'The road to the glen', blurb: 'A twenty-two-year-old Virginia lieutenant colonel marches into the dark with forty men and a Mingo guide to find a French party hidden in the Pennsylvania backcountry.', img: '/war-img/fi-washington-mission-map.jpg' },
    { id: 'fifteen-minutes-in-the-rain', eyebrow: 'The killing', title: 'Fifteen minutes in the rain', blurb: 'A dawn firefight lasts less than a quarter-hour, and then Tanaghrisson does something that turns a small colonial skirmish into an international incident.' },
    { id: 'the-spark', eyebrow: 'The consequences', title: 'The spark', blurb: 'Washington surrenders Fort Necessity and signs a document he cannot read; a tiny fight in the woods sends a charge of assassination across Europe and helps touch off a world war.', img: '/war-img/fi-washington-1772.jpg' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/jumonville-glen/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function JumonvilleGlenPage() {
  return <BattleDossier data={DATA} />
}
