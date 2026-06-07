'use client'

// BATTLE dossier (The Siege of Fort Niagara, July 1759), French and Indian War.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author → critic
// gates → reconcile → revise. Sides are war-aware: British (red) / French (blue), set
// via sideNames + sideColors. Commander bios are gated, born-verified prose. The dossier
// masthead is the dotted Lake Ontario / Lake Erie locator map (no hero image exists yet).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-niagara' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1759',
  title: 'The Siege of Fort Niagara',
  date: 'July 1759',
  place: 'Youngstown, New York',
  note: 'The British slammed the western door of New France, and a relief column was gutted by a Haudenosaunee parley before it ever reached the walls.',
  hero: { img: '/war-img/fi-niagara-1759-view.jpg', pal: ['#2a2c33', '#3a4150', '#10131a'], credit: 'engraved for the Royal Magazine, after a 1758 drawing on the spot · engraving · London, September 1759 · New York Public Library (Emmet Collection) · public domain' },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: 'Jul 6–25/26' },
    { label: 'Garrison', value: '~500 French' },
    { label: 'Winner', value: 'Britain & allies', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'British & Haudenosaunee', force: 'Niagara expedition', str: '~2,000–2,500 regulars and provincials, plus ~945 Haudenosaunee warriors', cmd: 'Brig. Gen. John Prideaux, then Sir William Johnson', note: 'Ran a formal siege down Lake Ontario, lost their general to his own guns, and destroyed the French relief column at La Belle-Famille.' },
    { side: 'c', tag: 'French', force: 'Fort Niagara garrison', str: '~500, stripped thin by redeployments', cmd: 'Capt. Pierre Pouchot', note: 'The engineer who had rebuilt the fort defended his own design against an army four or five times his size, staking everything on a relief that was annihilated up the road.' },
  ],
  casualties: { union: 100, csa: 350, unionLabel: 'British few dozen', csaLabel: 'French hundreds dead or taken', footnote: 'The fighting at La Belle-Famille was lopsided: hundreds of the French relief column were shot down or captured while the British behind their breastwork lost only a few dozen. The Niagara garrison of about 500 surrendered as prisoners of war. Precise figures are disputed across sources.' },
  commanders: [
    { name: 'John Prideaux', role: 'Cmdr., British', side: 'u', img: '', bio: 'Brigadier General Prideaux led the Niagara expedition down Lake Ontario and opened the siege on July 6, 1759. On or about July 20, with the trenches well advanced, he was killed by his own artillery, a freak accident in his own battery. The man who had brought the army to Niagara was gone before the fort fell.' },
    { name: 'Sir William Johnson', role: 'Took command, British', side: 'u', img: '/war-img/fi-william-johnson.jpg', bio: 'The Crown’s Superintendent of Indian Affairs for the northern colonies, Johnson was the official for diplomacy with the Native nations of the north and the Englishman closest to the Six Nations, having lived among the Mohawk and learned their language. He brought roughly 945 Haudenosaunee allies to Niagara, took command of the formal siege when Prideaux was killed, and accepted Pouchot’s surrender.' },
    { name: 'Pierre Pouchot', role: 'Garrison cmdr., French', side: 'c', img: '', bio: 'A military engineer by training, Captain Pouchot had rebuilt and enlarged Fort Niagara’s works himself before being reappointed its commander in March 1759. He defended the very ramparts he had drawn against an army several times his size, holding far longer than his ~500 men had any right to, until the relief column was destroyed and surrender was the only choice left.' },
    { name: 'Sayenqueraghta', role: 'Seneca war chief', side: 'n', sideLabel: 'SENECA', img: '', bio: 'A senior Seneca war chief who took the field alongside Johnson and carried real weight among the Six Nations. The Seneca, the westernmost of the Haudenosaunee, held and worked the Niagara portage themselves, giving them a direct stake in who controlled it. At La Belle-Famille the British-allied Haudenosaunee remained in the blocking position and fought, after their emissaries had asked their French-allied kin to stand aside.' },
  ],
  outcome: {
    verdict: 'Decisive British victory · the western door of New France slammed shut',
    text: 'The fall of Niagara did exactly what the British had designed it to do. The western door slammed shut, and the French interior came loose behind it. Cut off from Canada, the French burned or abandoned their western and Lake Ontario posts and pulled back to the St. Lawrence core. The Ohio Country and the Great Lakes were finished as French possessions. Paired the same year with the fall of Quebec in September and the advance up Lake Champlain, the loss of the gateway helped doom New France itself.',
  },
  sections: [
    { id: 'the-gateway-to-the-west', eyebrow: 'The key to the west', title: 'The gateway to the west', blurb: 'One door stood between the lower Great Lakes and the upper, and Fort Niagara stood in it. The British grand design for 1759 was to slam it shut. But the ground was Haudenosaunee country, and the Seneca held the portage itself.', img: '/war-img/fi-niagara-1759-view.jpg' },
    { id: 'the-siege-and-the-fallen-general', eyebrow: 'The fallen general', title: 'The siege and the fallen general', blurb: 'Pouchot defended the fort he had built himself, holding far longer than his thin garrison should have. Then the siege turned on a freak accident: Prideaux killed by his own guns, and a diplomat left running the siege.', img: '/war-img/fi-niagara-pouchot-plan.jpg' },
    { id: 'la-belle-famille', eyebrow: 'The relief destroyed', title: 'La Belle-Famille', blurb: 'A French relief column marched up the portage trail to lift the siege. A Haudenosaunee parley stripped it of most of its strength, then the British ambush destroyed what came on, and the gateway to the French west fell.' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/fort-niagara/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function FortNiagaraPage() {
  return <BattleDossier data={DATA} />
}
