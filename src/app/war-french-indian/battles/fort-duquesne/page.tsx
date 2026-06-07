'use client'

// BATTLE dossier (The Fall of Fort Duquesne / Forbes Expedition, 1758), French and
// Indian War. Thin data wrapper over the shared <BattleDossier>. Content produced
// through the war content pipeline (audits/war-content-pipeline.md): fact pack →
// author → five critic gates → reconcile → revise. Sides are war-aware: British (red)
// / French (blue), set via sideNames + sideColors. The Native nations who decided this
// campaign carry a third 'n' affiliation (LENAPE) on the commanders board. Commander
// bios are gated, born-verified prose. Sources: audits/war-pipeline/fi-fort-duquesne-*.

import { BattleDossier, type BattleData } from '../../../war-civil-war/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-fort-duquesne' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1758',
  title: 'The Fall of Fort Duquesne',
  date: 'September–November 1758',
  place: 'the Forks of the Ohio (Pittsburgh)',
  note: 'The prize the whole war was fought over fell, in the end, without a fight.',
  // The dotted locator map below greets the reader on the masthead in place of a hero
  // image; this hero is required by the type but never rendered while locator is set.
  hero: { img: '', pal: ['#2e2a22', '#4a4030', '#15120c'] },
  locator: {
    eyebrow: 'Where and when · 1758',
    caption: 'Forbes cut a brand-new road west across Pennsylvania, from Carlisle through Fort Bedford (Raystown) and Fort Ligonier toward the French stronghold of Fort Duquesne at the Forks of the Ohio (today Pittsburgh), building a fort every stretch and advancing only from cover behind him.',
    frame: { lonMin: -80.7, lonMax: -76.9, latMin: 39.8, latMax: 41.15 },
    states: [
      { name: 'Pennsylvania', tone: 'focus', label: 'PENNSYLVANIA', labelLon: -77.9, labelLat: 40.95 },
      { name: 'Maryland', label: 'MARYLAND', labelLon: -78.2, labelLat: 39.55, labelSize: 13 },
      { name: 'Virginia', label: 'VIRGINIA', labelLon: -79.6, labelLat: 39.4, labelSize: 13 },
      { name: 'Ohio', label: 'OHIO', labelLon: -80.55, labelLat: 40.6, labelSize: 13 },
      { name: 'West Virginia' },
    ],
    dots: [
      { name: 'Fort Duquesne', lat: 40.44, lon: -80.01, heavy: true, anchor: 'end' },
      { name: 'Fort Ligonier', lat: 40.24, lon: -79.24, color: '#8a8175', anchor: 'start' },
      { name: 'Fort Bedford (Raystown)', lat: 40.02, lon: -78.50, color: '#8a8175', anchor: 'start' },
      { name: 'Carlisle', lat: 40.20, lon: -77.19, color: '#8a8175', anchor: 'start' },
    ],
  },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: 'Sep–Nov 1758' },
    { label: 'Took the fort', value: 'Without a fight' },
    { label: 'Winner', value: 'Britain', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: "Forbes’s methodical army", str: '~6,000 regulars & provincials', cmd: 'Brig. Gen. John Forbes', note: 'Crept west on a brand-new road, building a fort every stretch and advancing only from cover, the lesson of Braddock turned into a method.' },
    { side: 'c', tag: 'French & allies', force: 'Fort Duquesne garrison', str: '~600, supply line cut and allies leaving', cmd: 'Capt. de Lignery', note: 'Won the skirmish on Grant’s Hill but could not hold the Forks once the Ohio nations walked away and the northern depot was burned.' },
  ],
  casualties: { union: 342, csa: 5, unionLabel: 'British ~342 (Grant’s Hill)', csaLabel: 'French & allies ~a handful', footnote: 'The only real bloodshed was Major Grant’s defeat on Grant’s Hill, September 14, 1758, where about a third of his ~800-man force was killed, wounded, or captured. The fort itself fell without a battle: the French blew it up and abandoned it on November 24.' },
  commanders: [
    { name: 'John Forbes', role: 'Cmdr., British', side: 'u', img: '/war-img/fi-forbes.jpg', bio: 'Forbes had trained as a physician before turning soldier, and he ran this campaign as the deliberate opposite of Braddock’s. Too sick with dysentery to ride, carried much of the way in a litter slung between two horses, he refused to race a column into the forest and instead cut a new road west across Pennsylvania, building a fort every stretch so the army never advanced beyond cover it could fall back on. He took the Forks without a battle, renamed the place Pittsburgh for William Pitt, and died a few months later, his last campaign won.' },
    { name: 'James Grant', role: 'Led the reconnaissance, British', side: 'u', img: '/war-img/fi-grant.jpg', bio: 'Sent ahead with about eight hundred men to scout Fort Duquesne, Grant turned a reconnaissance into an attack, marching onto a hill in sight of the walls and trying to lure the garrison out. It came out in force. His Highlanders, drilled to stand in tight ranks and trade volleys, were shot apart from cover they could not see, roughly a third of his command killed, wounded, or captured. Grant himself was taken prisoner and carried off to Montreal. The hill is still called Grant’s Hill, in the heart of downtown Pittsburgh.' },
    { name: 'François-Marie Le Marchand de Lignery', role: 'Cmdr., French', side: 'c', img: '', bio: 'Lignery held Fort Duquesne with perhaps six hundred men and beat back Grant’s attack, but he understood it changed nothing. With his northern supply line burned at Fort Frontenac, his Native allies leaving after the Treaty of Easton, winter coming on, and an army of six thousand grinding up the new road toward him, he chose not to wait to be besieged. On November 24, 1758 he blew up and burned the fort and slipped away in the dark.' },
    { name: 'Teedyuscung', role: 'Lenape diplomat who helped decide it', side: 'n', sideLabel: 'LENAPE', img: '', bio: 'An influential Lenape (Delaware) leader, Teedyuscung was the driving Native voice at the Treaty of Easton in October 1758, where he pressed the boundary he had argued for over years: a British promise to keep settlers off Native land west of the mountains. When the Ohio nations took that promise and walked away from the French alliance, the warriors defending Fort Duquesne went home, and the fort fell almost without a shot. Britain broke the promise within a few years, a betrayal that helped light Pontiac’s War.' },
  ],
  outcome: {
    verdict: 'British victory · the most fought-over ground in North America taken almost without a battle',
    text: 'Fort Duquesne fell because its real defenders, the Lenape, Shawnee, and Mingo of the Ohio Country, chose in their own interest to stop fighting. At the Treaty of Easton the British promised to keep settlers off Native land beyond the mountains, and the Ohio nations took the deal and left the French alliance. With his allies gone, his northern supply line burned, and Forbes’s army of six thousand closing in, Lignery blew up the fort and slipped away. Forbes occupied the smoking ruins on November 25, 1758 and renamed the place Pittsburgh. The promise that won it did not last: settlers poured west anyway, and the broken pledge helped light Pontiac’s War a few years later.',
  },
  sections: [
    { id: 'the-forks-the-prize', eyebrow: 'The ground everything came back to', title: 'The forks, the prize', blurb: 'Two rivers meet to become the Ohio, and the junction is the most valuable ground on the frontier. Washington bled for it, Braddock died for it, and by 1758 the British are coming for it a third time.', img: '/war-img/fi-washington-1772.jpg' },
    { id: 'forbess-road-and-grants-defeat', eyebrow: 'The slow road and a sharp defeat', title: "Forbes’s road and Grant’s defeat", blurb: 'A dying general cuts a new road west, building a fort every stretch as the anti-Braddock. Then a scouting party turns into an attack, and Grant’s Hill becomes a bloody echo of 1755.', img: '/war-img/fi-forbes-road-map.jpg' },
    { id: 'easton-and-the-empty-fort', eyebrow: 'The treaty that emptied the fort', title: 'Easton and the empty fort', blurb: 'The blow that took Fort Duquesne was struck at a treaty table. The Ohio nations, promised their land, walk away from the French, the warriors go home, and the fort falls without a fight.', img: '/war-img/fi-ohio-fort-duquesne-plan-1755.jpg' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/fort-duquesne/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function FortDuquesnePage() {
  return <BattleDossier data={DATA} />
}
