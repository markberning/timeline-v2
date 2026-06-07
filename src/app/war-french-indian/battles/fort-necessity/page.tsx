'use client'

// BATTLE dossier (Fort Necessity, 1754), French and Indian War.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author → five critic
// gates → reconcile → revise. Sides are war-aware: British (red) / French (blue), set
// via sideNames + sideColors. Commander bios are gated, born-verified prose.

import { BattleDossier, type BattleData } from '../../../war-civil-war/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-fort-necessity' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1754',
  title: 'Fort Necessity',
  date: 'July 3, 1754',
  place: 'Great Meadows, Pennsylvania',
  note: 'The only army George Washington ever surrendered.',
  hero: {
    img: '/war-img/fi-new-france-map.jpg',
    pal: ['#2b2a24', '#46412f', '#12100a'],
  },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: '~1 day' },
    { label: 'Casualties', value: '~100 British' },
    { label: 'Winner', value: 'France', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: 'Washington & Mackay\'s command', str: '~400 (Virginia + S. Carolina)', cmd: 'Col. George Washington', note: 'Trapped in a stockade on low ground as rain ruined the powder.' },
    { side: 'c', tag: 'French', force: 'Fort Duquesne expedition', str: '~600–800', cmd: 'Capt. Louis Coulon de Villiers', note: 'Fired down from the wooded high ground; came to avenge his half-brother.' },
  ],
  casualties: { union: 101, csa: 20, unionLabel: 'British ~31 killed, ~70 wounded', csaLabel: 'French ~3 killed', footnote: 'British losses about a third of the force; French and allied losses were very light, perhaps three killed and a dozen or so wounded.' },
  commanders: [
    { name: 'George Washington', role: 'Cmdr., British', side: 'u', img: '/war-img/fi-washington-1772.jpg', bio: 'Twenty-two years old and newly in command after Colonel Fry\'s death, Washington misjudged the ground, underestimated the French force coming to avenge Jumonville Glen, and found himself besieged in a flooded stockade as the rain ruined his powder. He signed the capitulation that night without realizing the French text called Jumonville\'s death an assassination, a diplomatic embarrassment that would follow him; it was the only army he ever surrendered.' },
    { name: 'James Mackay', role: 'S. Carolina regulars, British', side: 'u', img: '', bio: 'A British regular captain holding a royal commission, Mackay refused to serve under a provincial colonel and the command sat divided throughout the campaign, two forces side by side with no single man clearly in charge of both. He co-signed the capitulation with Washington when the garrison surrendered.' },
    { name: 'Louis Coulon de Villiers', role: 'Cmdr., French', side: 'c', img: '', bio: 'The older half-brother of the Jumonville killed at the glen, Villiers led the revenge expedition out of Fort Duquesne with a force that outnumbered the British garrison by half again or more. Rather than storm the flooded stockade at day\'s end, he offered terms, and made sure the surrender document branded the glen an assassination before Washington put his name to it.' },
  ],
  outcome: {
    verdict: 'French victory · the British driven from the Ohio Country',
    text: 'France took firm command of the Forks of the Ohio and held it for four more years, keeping the roads and rivers into the interior closed to the British. Washington marched out on July 4 with the honors of war, but it was a humiliation: he had signed a document confessing to assassination without knowing it, and left behind all nine of his swivel guns despite the terms promising one. The defeat forced London to respond with something larger, and in 1755 it sent Major General Braddock\'s regulars to retake the Forks by main force, a campaign that ended in catastrophe on the Monongahela. The "assassination" charge became a propaganda coup for the French crown across Europe.',
  },
  sections: [
    { id: 'a-fort-named-necessity', eyebrow: 'Bracing for revenge', title: 'A fort named Necessity', blurb: 'Washington falls back to Great Meadows after Jumonville Glen and builds a small log stockade on low, boggy ground, waiting for the French to come for him.' },
    { id: 'the-day-it-rained', eyebrow: 'The siege in the mud', title: 'The day it rained', blurb: 'A French revenge force fires down from the wooded high ground all day as a driving rain floods the trenches and turns the defenders\' powder to paste.' },
    { id: 'the-signature-in-the-rain', eyebrow: 'The capitulation', title: 'The signature in the rain', blurb: 'Washington signs surrender terms by candlelight in the dark, unknowingly confessing to assassination in a French text his translator could not quite read.', img: '/war-img/fi-washington-1772.jpg' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/fort-necessity/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function FortNecessityPage() {
  return <BattleDossier data={DATA} />
}
