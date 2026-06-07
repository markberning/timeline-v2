'use client'

// BATTLE dossier (The Raid on Fort Frontenac, August 1758), French and Indian War.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author → critic
// gates → reconcile → revise. Sides are war-aware: British (red) / French (blue), set
// via sideNames + sideColors. Commander bios are gated, born-verified prose. The dossier
// masthead is the dotted Lake Ontario locator map (no hero image exists yet).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-frontenac' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1758',
  title: 'The Raid on Fort Frontenac',
  date: 'August 25–27, 1758',
  place: 'Cataraqui (Kingston, Ontario)',
  note: 'A provincial army rowed across a lake nobody believed they would cross and cut one of the two arteries of New France in two days, for almost no blood at all.',
  hero: { img: '/war-img/fi-frontenac-capture-engraving.jpg', pal: ['#2a2c33', '#3a4150', '#10131a'], credit: 'John Henry Walker · engraving · 19th c. · Library and Archives Canada · public domain' },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: '3 days' },
    { label: 'Captured', value: '9 sloops · 60 cannon · the depot' },
    { label: 'Winner', value: 'Britain & allies', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: 'Raiding column out of Oswego', str: '~3,000, mostly provincials; ~150 regulars; ~70 Onondaga & Oneida warriors', cmd: 'Lt. Col. John Bradstreet', note: 'A light, fast provincial army that rowed across the open lake the French believed no one would dare cross, surprised the depot, and battered it into surrender in two days.' },
    { side: 'c', tag: 'French', force: 'Fort Frontenac garrison', str: '~110 soldiers and labourers, including women and children; ~60 cannon, too few hands to work a dozen', cmd: 'Pierre-Jacques Payen de Noyan', note: 'An aging veteran handed an indefensible fort with crumbling walls, no fleet to cover him, and help from Montreal a week too late. He surrendered after a brief, hopeless bombardment.' },
  ],
  casualties: { union: 0, csa: 2, unionLabel: 'British a handful wounded, ~0 killed', csaLabel: 'French 2 killed', footnote: 'A near-bloodless action: by the fullest account Bradstreet lost not a single man killed, with only a handful wounded, against two French defenders killed. The garrison of about 110 was taken prisoner.' },
  commanders: [
    { name: 'John Bradstreet', role: 'Cmdr., British', side: 'u', img: '/war-img/fi-bradstreet.jpg', bio: 'Born in Nova Scotia in 1714 to a British army officer and an Acadian mother, Bradstreet made his name at the 1745 siege of Louisbourg. Running the boat convoys that supplied Fort Oswego in 1755 taught him the inland water route and showed him what Frontenac was, the throat of the whole western trade. He lobbied for years for a raid on it, even offering to pay for it himself, and was made deputy quartermaster general only in January 1758. When the defeat at Carillon left British command desperate, he finally got his yes, and rowed an army across a lake the French navy controlled to take the depot in two days.' },
    { name: 'Pierre-Jacques Payen de Noyan', role: 'Cmdr., French', side: 'c', img: '', bio: 'A soldier of the old colonial wars, Noyan was past sixty when he was handed command of Fort Frontenac, a crumbling depot with walls falling down on their own and far too few men to work its sixty cannon. With no fleet to cover him and relief from Montreal a week too late, he watched the British batteries open up with almost nothing to answer and ran up the white flag after a brief council of war. Paroled to Montreal for his poor health, he was exchanged for the captured New Jersey colonel Peter Schuyler, and went home to a bitter retirement.' },
  ],
  outcome: {
    verdict: 'Decisive British raid · the French west cut at the throat',
    text: 'In two days, for the cost of a few wounded men, a provincial army the regulars had sneered at burned the depot the whole French west hung on, sank the lake fleet, and carried off or destroyed the food, furs, and trade goods meant to keep the western posts supplied and the Native alliances bought through the coming year. The Ottawa River route stayed open, so New France did not collapse overnight, but the Ohio posts starved first and worst. That November, unfeedable and cut off, the French blew up Fort Duquesne rather than be trapped in it, and the British walked in and began building Fort Pitt. After Braddock and Oswego and Carillon, Frontenac was the win the war had been waiting for.',
  },
  sections: [
    { id: 'the-lynchpin-on-the-lake', eyebrow: 'The depot on the water', title: 'The lynchpin on the lake', img: '/war-img/fi-frontenac-cataracoui-view.jpg', blurb: 'Frontenac was the hinge the whole French west hung on, sitting on a lake the French were sure was theirs. After they destroyed Oswego in 1756, no one believed the British would ever put boats on Lake Ontario again.' },
    { id: 'bradstreets-raid', eyebrow: 'The bold strike', title: 'Bradstreet’s raid', img: '/war-img/fi-frontenac-capture-engraving.jpg', blurb: 'A provincial army rowed up the inland route and out across the open lake, the part the French thought no one would dare. The surprise was total, the fort indefensible, and an aging commander surrendered it in two days.' },
    { id: 'the-blow-to-the-west', eyebrow: 'The supply line cut', title: 'The blow to the west', img: '/war-img/fi-pitt-offensives-map.jpg', blurb: 'The fort was the smallest part of the prize. Bradstreet took the lake fleet, the cannon, and the stores of the western war, then burned it all, and three hundred miles south a fort British armies could not storm starved instead.' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/fort-frontenac/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function FortFrontenacPage() {
  return <BattleDossier data={DATA} />
}
