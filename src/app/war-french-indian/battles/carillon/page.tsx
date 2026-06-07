'use client'

// BATTLE dossier (The Battle of Carillon / Ticonderoga, July 8, 1758), French and
// Indian War. Thin data wrapper over the shared <BattleDossier>. Content produced
// through the war content pipeline (audits/war-content-pipeline.md): fact pack →
// author → critic gates → reconcile → revise. Sides are war-aware: British (red) /
// French (blue), set via sideNames + sideColors. Commander bios are gated,
// born-verified prose. The dossier masthead is the dotted Lake George / Lake
// Champlain locator map (no hero image exists yet). Sources:
// audits/war-pipeline/fi-carillon-draft.md.

import { BattleDossier, type BattleData } from '../../../war-civil-war/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-carillon' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1758',
  title: 'The Battle of Carillon',
  date: 'July 8, 1758',
  place: 'Ticonderoga, New York',
  note: 'The largest army in America wrecked itself against a wall of logs its own commander refused to use his guns on.',
  hero: { img: '', pal: ['#2a2c33', '#3a4150', '#10131a'] },
  locator: {
    eyebrow: 'Where and when · July 1758',
    caption: 'Fort Carillon sat on the narrow neck of land between Lake George and Lake Champlain, the great water corridor from the British colonies up toward the French heart of Canada. Abercromby’s army rowed the length of Lake George from Fort William Henry, landed at the north end, and marched overland to the French works.',
    frame: { lonMin: -74.05, lonMax: -72.95, latMin: 43.30, latMax: 44.20 },
    states: [
      { name: 'New York', tone: 'focus', label: 'NEW YORK', labelLon: -73.85, labelLat: 43.95 },
    ],
    lakes: [
      { name: 'Lake George', label: 'LAKE GEORGE', labelLon: -73.78, labelLat: 43.55, labelSize: 12 },
      { name: 'Lake Champlain', label: 'LAKE CHAMPLAIN', labelLon: -73.18, labelLat: 44.05, labelSize: 12 },
    ],
    dots: [
      { name: 'Fort Carillon (Ticonderoga)', date: 'July 8, 1758', lat: 43.84, lon: -73.39, heavy: true, anchor: 'end', dateBelow: true },
      { name: 'Lake George landing', lat: 43.62, lon: -73.51, color: '#8a8175', anchor: 'start' },
      { name: 'Fort William Henry', lat: 43.42, lon: -73.71, color: '#8a8175', anchor: 'start' },
    ],
  },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: '~4–7 hours' },
    { label: 'Casualties', value: '~1,900–2,000 British' },
    { label: 'Winner', value: 'France', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: 'The army on Lake George', str: '~15,000–16,000 (regulars, provincials & rangers)', cmd: 'Maj. Gen. James Abercromby', note: 'The largest army yet assembled in North America threw itself in piecemeal waves against the abatis and the breastwork with no artillery brought forward, and could not get over the wall.' },
    { side: 'c', tag: 'French', force: 'The Heights of Carillon', str: '~3,600–4,000, mostly French regulars', cmd: 'Maj. Gen. the Marquis de Montcalm', note: 'Outnumbered roughly four to one, Montcalm built a chest-high log breastwork fronted by acres of sharpened felled trees and fought the whole battle from behind it.' },
  ],
  casualties: { union: 1950, csa: 450, unionLabel: 'British ~1,900–2,000', csaLabel: 'French ~350–550', footnote: 'The British official return counted roughly 547 killed, about 1,356 wounded, and around 77 missing; some accounts push the dead higher and the total past two thousand. French losses on July 8 ran about 350 to 380, perhaps 500 or so counting the skirmish two days before.' },
  commanders: [
    { name: 'James Abercromby', role: 'Cmdr., British', side: 'u', img: '/war-img/fi-abercromby.jpg', bio: 'A careful, unimaginative officer who owed his post more to seniority than to genius, Abercromby had the heavy artillery built to smash a log wall to splinters and chose not to use it. Acting on an unverified report that the French works were weak, and spooked by rumors of reinforcements, he sent infantry against the breastwork and the abatis with no cannon brought forward. The choice was his alone. Pitt recalled him that September, and he never commanded an army again.' },
    { name: 'George Augustus, Lord Howe', role: 'Second in command, British', side: 'u', img: '/war-img/fi-howe.jpg', bio: 'Young, brilliant, and beloved by his men, Howe had thrown out the heavy European habits that did not work in the American forest, cutting down coats and muskets, making officers carry their own packs, and learning to move and fight as the rangers did. James Wolfe called him the very best officer in the king’s service. He was killed by a bullet in a confused skirmish in the woods on July 6, before the main battle, and one witness wrote that with his death the soul of the army seemed to expire.' },
    { name: 'Louis-Joseph de Montcalm', role: 'Cmdr., French', side: 'c', img: '/war-img/fi-montcalm.jpg', bio: 'Badly outnumbered, Montcalm did the one thing that could even the odds: he made his men fight from behind a wall. In the hours he had, his soldiers threw up a chest-high log breastwork on the Heights of Carillon and fronted it with acres of felled, sharpened trees. He held the gateway to Canada with a force a quarter the size of the one that came for it, and counted it the victory of his life.' },
    { name: 'François-Gaston, Chevalier de Lévis', role: 'Cmdr. of the left, French', side: 'c', img: '/war-img/fi-levis.jpg', bio: 'Montcalm’s most able subordinate, Lévis came in on July 7 with about four hundred more men as the defensive line was nearly finished, and took command of the French left. He would go on to become the last French field commander in Canada, winning at Sainte-Foy in 1760 after Montcalm’s death.' },
  ],
  outcome: {
    verdict: 'Decisive French victory · a small army destroys a large one',
    text: 'Montcalm won the most lopsided battle of the war, holding the gate to Canada against an army four times his size and barely being scratched. For Abercromby it was the end of his command. And yet it changed nothing: the other two prongs of Pitt’s 1758 offensive landed, Louisbourg and Fort Duquesne both fell, and the fort itself was abandoned and taken almost without a fight the next year, when the British walked into the ruins and named it Fort Ticonderoga.',
  },
  sections: [
    { id: 'the-largest-army-in-america', eyebrow: 'The army on the lake', title: 'The largest army in America', blurb: 'Pitt aimed three blows at New France in 1758, and the middle one came up Lake George: the largest army ever assembled in North America, rowing north to take the gate into Canada. Then, in the first skirmish, it lost the one man it could not lose.', img: '/war-img/fi-carillon-jefferys-plan.jpg' },
    { id: 'the-abatis', eyebrow: 'The wall of logs', title: 'The abatis', blurb: 'Badly outnumbered, Montcalm built a log breastwork fronted by acres of sharpened felled trees. Abercromby, trusting a false report and refusing to bring up his guns, sent flesh against timber, again and again.', img: '/war-img/fi-lake-champlain-corridor-map.jpg' },
    { id: 'the-cost', eyebrow: 'After the wall', title: 'The cost', blurb: 'One of the bloodiest British defeats of the war, two thousand men spent in a few hours in front of a wall of logs, the end of one general’s career, and a victory so total it bought New France nothing.' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/carillon/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function CarillonPage() {
  return <BattleDossier data={DATA} />
}
