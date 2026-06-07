'use client'

// BATTLE dossier (The Siege of Louisbourg, June–July 1758), French and Indian War.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author → critic
// gates → reconcile → revise. Sides are war-aware: British (red) / French (blue), set
// via sideNames + sideColors. Commander bios are gated, born-verified prose. The dossier
// masthead is the dotted Cape Breton coastal locator map.

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-louisbourg' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1758',
  title: 'The Siege of Louisbourg',
  date: 'June 8 – July 26, 1758',
  place: 'Île-Royale (Cape Breton)',
  note: 'The British took the great sea fortress at the throat of the continent, and the road to Quebec swung open.',
  hero: { img: '', pal: ['#2a2c33', '#3a4150', '#10131a'] },
  locator: {
    eyebrow: 'Where and when · Summer 1758',
    caption: 'Louisbourg sat on the rocky southeast coast of Cape Breton Island, a walled town and naval base guarding the Gulf of St. Lawrence and the river road to Quebec. Amherst’s fleet staged out of Halifax, landed in the surf at Gabarus Bay, and closed a seven-week siege around the fortress.',
    frame: { lonMin: -64.6, lonMax: -59.2, latMin: 44.3, latMax: 47.2 },
    states: [
      { name: 'Nova Scotia', tone: 'focus', label: 'NOVA SCOTIA', labelLon: -63.2, labelLat: 45.2, labelSize: 13 },
      { name: 'New Brunswick', label: 'NEW BRUNSWICK', labelLon: -64.0, labelLat: 46.6, labelSize: 11 },
    ],
    dots: [
      { name: 'Louisbourg', date: 'Jun–Jul 1758', lat: 45.89, lon: -59.98, heavy: true, anchor: 'end', dateBelow: true },
      { name: 'Gabarus Bay (the landing)', lat: 45.87, lon: -60.06, color: '#8a8175', anchor: 'start' },
      { name: 'Halifax', lat: 44.65, lon: -63.57, color: '#8a8175', anchor: 'start' },
    ],
    labels: [
      { text: 'TO THE ST. LAWRENCE & QUEBEC', lon: -62.8, lat: 47.0, kind: 'faint', size: 11, anchor: 'middle' },
    ],
  },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: '~7 weeks' },
    { label: 'Prisoners', value: '~5,600 French' },
    { label: 'Winner', value: 'Britain', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: 'Expedition out of Halifax', str: '~14,000 troops, ~40 warships, ~150 transports', cmd: 'Maj. Gen. Jeffery Amherst · Adm. Edward Boscawen', note: 'The largest force Britain had ever sent against a single point in North America. A near-disaster landing in the surf turned into a foothold, then a textbook siege that strangled the fortress.' },
    { side: 'c', tag: 'French', force: 'Louisbourg garrison & harbor squadron', str: '~6,000–7,000 incl. marines and the warships’ crews', cmd: 'Gov. Drucour', note: 'Mounted a far stiffer defense than the fortress had managed in 1745, but was sealed off by sea, its harbor squadron burned and boarded, and bombarded into an unconditional surrender.' },
  ],
  casualties: { union: 170, csa: 100, unionLabel: 'British ~170 killed, ~350 wounded', csaLabel: 'French ~100 killed, ~300 wounded', footnote: 'The surrender swept up far more than the dead and wounded: more than 5,600 French soldiers became prisoners of war, shipped to England rather than paroled, along with some 200 cannon and the wreck of the fortress itself.' },
  commanders: [
    { name: 'Jeffery Amherst', role: 'Cmdr., British', side: 'u', img: '/war-img/fi-jeffery-amherst.jpg', bio: 'Major General Amherst held overall command on land. A methodical, unhurried soldier, he ran the siege by the book, strangling the fortress rather than storming it, and when Drucour asked for the honours of war he refused, citing the killings after the surrenders of Oswego and Fort William Henry. The terms would be unconditional, and the garrison would go to England as prisoners, not home to fight again.' },
    { name: 'James Wolfe', role: 'Brig., British', side: 'u', img: '/war-img/fi-james-wolfe.jpg', bio: 'A thin, red-haired, restless brigadier of thirty-one, Wolfe was given the hardest job of the campaign, the assault landing. When the boats were being raked to pieces in the surf he signaled the recall, then seized on a few boatloads that had found a sheltered slot of rock and funneled the whole division through it, turning a failing assault into a foothold. A year later he would die taking Quebec.' },
    { name: 'Edward Boscawen', role: 'Adm., British', side: 'u', img: '/war-img/fi-boscawen.jpg', bio: 'Admiral Boscawen held joint command of the fleet and the transports. His ships sealed the harbor so no relief or escape could come by water, and on the night of July 25 he sent the cutting-out party that rowed into the harbor in the dark, captured the Bienfaisant, and burned the Prudent, finishing off the French squadron.' },
    { name: 'Drucour', role: 'Governor, French', side: 'c', img: '', bio: 'The governor of Île Royale commanded the defense, and he made the British pay for every week. He kept his warships in the harbor over their captains’ objections, hoping their guns would help hold the place; instead they burned where they sat. Pressed by his commissary on behalf of the civilians trapped in the town, he accepted Amherst’s unconditional terms after about seven weeks.' },
  ],
  outcome: {
    verdict: 'Decisive British victory · the sea gate to Canada thrown open',
    text: 'After about seven weeks, Drucour surrendered the strongest place in French North America. Britain lost roughly 170 killed and 350 wounded; the French lost about 100 killed and 300 wounded, and more than 5,600 men passed into captivity. With Louisbourg taken, the St. Lawrence lay clear all the way to Quebec, and the following spring the same Brigadier Wolfe who had found the slot of rock at the landing would sail up that river to take the capital of New France. The British later blew the walls apart with gunpowder so that no treaty could ever hand the fortress back again.',
  },
  sections: [
    { id: 'the-fortress-by-the-sea', eyebrow: 'The sea gate to Canada', title: 'The fortress by the sea', blurb: 'Louisbourg was the lock on the door to New France, the fortress you had to pass to reach the St. Lawrence and Quebec. The colonists had taken it once, in 1745, and watched London hand it back. In 1758 they came for it again.', img: '/war-img/fi-louisbourg-view-lighthouse.jpg' },
    { id: 'the-landing', eyebrow: 'Into the surf', title: 'The landing', blurb: 'The largest force Britain had ever sent against a single point in North America came ashore at Freshwater Cove into murderous fire. Wolfe signaled the recall, then a few boats that ignored it found a slot of rock, and the whole assault turned on it.', img: '/war-img/fi-louisbourg-siege.jpg' },
    { id: 'the-siege', eyebrow: 'Closing the ring', title: 'The siege', blurb: 'With the army ashore, the British strangled the fortress by the book. Batteries crept toward the walls, the fleet sealed the sea, and the French harbor squadron died by fire and a night boarding party.', img: '/war-img/fi-louisbourg-prudent.jpg' },
    { id: 'the-fall-and-the-road-to-quebec', eyebrow: 'The reckoning', title: 'The fall and the road to Quebec', blurb: 'Drucour surrendered on hard, unconditional terms. What followed fell on people who had not fought the siege: the deportation of the Acadians and a campaign against the settlements and the Mi’kmaq of the Gulf. And then the road to Quebec lay open.', img: '/war-img/fi-louisbourg-siege-plan.jpg' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/louisbourg/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function LouisbourgPage() {
  return <BattleDossier data={DATA} />
}
