'use client'

// BATTLE dossier (The Battle of Quebec / the Plains of Abraham, 1759), French and
// Indian War. The climactic battle of the war: the fall of New France. Thin data
// wrapper over the shared <BattleDossier>. Content produced through the war content
// pipeline (audits/war-content-pipeline.md): fact pack → author (Opus) → critic gates
// → reconcile → revise. Sides are war-aware: British (red) / French (blue), set via
// sideNames + sideColors. Commander bios are gated, born-verified prose. The dossier
// masthead is the dotted St. Lawrence locator map (no hero image used; the locator is
// the establishing shot). Sources: audits/war-pipeline/fi-quebec-*.

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-quebec' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1759',
  title: 'The Battle of Quebec',
  date: 'June–September 1759',
  place: 'Quebec City',
  note: 'The summer-long siege that ended in fifteen minutes on the Plains of Abraham, a farm field above the river where two generals died and a continent changed hands.',
  hero: { img: '', pal: ['#2a2c33', '#3a4150', '#10131a'] },
  locator: {
    eyebrow: 'Where and when · 1759',
    caption: 'Quebec sat on a high rock above the St. Lawrence, the capital and heart of New France. Wolfe based his army on Île d’Orléans below the city, failed against the Beauport lines at Montmorency in July, and in September slipped his men up the cliff at the Anse au Foulon onto the Plains of Abraham at the city’s gate.',
    frame: { lonMin: -73.8, lonMax: -68.5, latMin: 45.4, latMax: 48.6 },
    states: [
      { name: 'Quebec', tone: 'focus', label: 'QUEBEC (NEW FRANCE)', labelLon: -72.6, labelLat: 48.3, labelSize: 13 },
    ],
    dots: [
      { name: 'Plains of Abraham / Quebec City', date: 'Sep 13, 1759', lat: 46.80, lon: -71.21, heavy: true, anchor: 'end', dateBelow: true },
      { name: 'Anse au Foulon', lat: 46.79, lon: -71.23, color: '#8a8175', anchor: 'start', dx: 14, dy: 22 },
      { name: 'Montmorency', lat: 46.89, lon: -71.15, color: '#8a8175', anchor: 'end', dy: -10 },
      { name: 'Île d’Orléans', lat: 46.95, lon: -70.95, color: '#8a8175', anchor: 'start' },
    ],
  },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'The battle', value: '~15 min' },
    { label: 'City fell', value: 'Sep 18, 1759' },
    { label: 'Winner', value: 'Britain', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: 'The army on the heights + Saunders’s fleet', str: '~4,400 on the Plains; the fleet that carried them up the river', cmd: 'Maj. Gen. James Wolfe · Vice Adm. Charles Saunders', note: 'Stole up the cliff at the Anse au Foulon in the dark, formed line on the open ground at the city’s gate, and broke the French attack with two crashing volleys at point-blank range.' },
    { side: 'c', tag: 'French', force: 'The Quebec garrison and field army', str: '~4,000–4,500 on the Plains: regulars, Canadian militia, Native allies', cmd: 'Lt. Gen. the Marquis de Montcalm', note: 'Chose to attack at once rather than wait for Bougainville or the city’s guns, and sent a force stiffened with militia against a disciplined line that would not break.' },
  ],
  casualties: { union: 58, csa: 640, unionLabel: 'British ~58 killed, ~600 wounded', csaLabel: 'French ~640–700 killed and wounded', footnote: 'Roughly 350 French were also taken prisoner. The figures are estimates and the sources vary. The wider action ran longer than the famous fifteen minutes of the main volley and rout. The following spring at Sainte-Foy the French beat the British in the same fields at a far heavier cost, on the order of a thousand British casualties.' },
  commanders: [
    { name: 'James Wolfe', role: 'Cmdr., British', side: 'u', img: '/war-img/fi-james-wolfe.jpg', bio: 'Major General James Wolfe was thirty-two at Quebec, thin, often sick, and ferociously ambitious. He had made his name at the siege of Louisbourg the year before, the victory that opened the St. Lawrence. At Quebec he spent a frustrating summer that produced the brutal raids on the countryside and the bloody failure at Montmorency, then staked everything on the night landing at the Anse au Foulon. He was hit in the wrist, then struck twice more in the body, and died on the field in the moment his gamble came good. The famous deathbed scenes and recited poetry are later legend, not record.' },
    { name: 'Charles Saunders', role: 'Naval cmdr., British', side: 'u', img: '/war-img/fi-saunders.jpg', bio: 'Vice Admiral Charles Saunders commanded the fleet that did the thing everyone had thought impossible: he took a battle force up the narrow, treacherous St. Lawrence, held the supply line open all summer, ran the loud feint off Beauport that fixed Montcalm’s attention the wrong way, and rowed the landing in through the dark on the ebbing tide. The climb up the cliff is the famous part of Quebec. The river was the thing that made it possible, and the river was his.' },
    { name: 'Louis-Joseph de Montcalm', role: 'Cmdr., French', side: 'c', img: '/war-img/fi-montcalm.jpg', bio: 'Lieutenant General the Marquis de Montcalm had been the central French commander of the war, the victor of Oswego, Fort William Henry, and Carillon. He held Quebec through the summer by refusing to come out from behind the Beauport lines. When the British appeared on the heights behind the city he judged the land walls too weak to stand a siege and chose to attack at once, before they could entrench, rather than wait for Bougainville’s force at his back. He was shot in the rout, carried into the city, and died at dawn the next morning. His decision to fight in the open has been argued over ever since.' },
    { name: 'Louis-Antoine de Bougainville', role: 'Cmdr., French', side: 'c', img: '/war-img/fi-bougainville.jpg', bio: 'Colonel Louis-Antoine de Bougainville commanded a mobile force of about three thousand men posted upriver to the west, behind the British landing, exactly the troops that might have caught Wolfe between two fires. The warning never reached him in time. He arrived after the battle was lost, did no more than skirmish with the British rear, and drew off. He went on to a celebrated second life as a navigator who circled the globe, his name carried by the flowering vine and the largest of the Solomon Islands.' },
  ],
  outcome: {
    verdict: 'Decisive British victory · the fall of New France',
    text: 'The fifteen minutes on the Plains of Abraham decided the war and, with it, who would own the heart of North America. Both generals died of the battle, Wolfe on the field and Montcalm the next morning inside the walls. Quebec surrendered five days later. The fighting was not quite over, the French won a bloodier rematch at Sainte-Foy the next spring, but it was the river that decided everything: when the ships came up the thawed St. Lawrence in May 1760 they flew British colors, and there was no French relief because 1759 had been Britain’s year of victories the world over. Montreal surrendered in September 1760, and in 1763 France signed Canada away at the peace table in Paris.',
  },
  sections: [
    { id: 'the-summer-before-the-walls', eyebrow: 'The long siege', title: 'The summer before the walls', blurb: 'Quebec was the prize the whole war had been circling toward, a city on a rock that Montcalm would not come out to defend. Through a long hot summer Wolfe bombarded it, burned the countryside around it, and failed bloodily at Montmorency, and got no nearer the rock.', img: '/war-img/fi-siege-of-quebec-map.jpg' },
    { id: 'the-path-up-the-cliff', eyebrow: 'The night descent', title: 'The path up the cliff', blurb: 'If Montcalm would not come down, the British would get above him. On a feint and the tide and the dark, Wolfe put his army up a cliff at the Anse au Foulon and onto the open ground at the city’s gate, exactly where Montcalm had sworn it could never be.', img: '/war-img/fi-quebec-view-of-the-taking.jpg' },
    { id: 'the-plains-of-abraham', eyebrow: 'The volley', title: 'The Plains of Abraham', blurb: 'Montcalm chose to attack at once. The British line held its fire, let the French come to thirty-five yards, and broke them with two crashing volleys. It was over in fifteen minutes, and the militia and Native allies on the flanks are much of why anything of the French army got away.', img: '/war-img/fi-plains-of-abraham-map.jpg' },
    { id: 'the-fall-of-new-france', eyebrow: 'The reckoning', title: 'The fall of New France', blurb: 'Both generals died of the battle. The city surrendered five days later, and with no relief coming, the colony followed. A French rematch the next spring almost took it back, until the river decided it again, the way it had decided everything at Quebec.', img: '/war-img/fi-quebec-death-of-wolfe.jpg' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/quebec/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function QuebecPage() {
  return <BattleDossier data={DATA} />
}
