'use client'

// BATTLE dossier (The Monongahela / Braddock's Defeat, 1755), French and Indian War.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author → five critic
// gates → reconcile → revise. Sides are war-aware: British (red) / French (blue), set
// via sideNames + sideColors. Commander bios are gated, born-verified prose.

import { BattleDossier, type BattleData } from '../../../war-civil-war/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-monongahela' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1755',
  title: 'The Battle of the Monongahela',
  date: 'July 9, 1755',
  place: 'near present-day Braddock, Pennsylvania',
  note: 'Known ever after as Braddock’s Defeat.',
  hero: {
    img: '/war-img/fi-monongahela-defeat.jpg',
    pal: ['#3a2a1c', '#5a3526', '#140b06'],
  },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: '~3–4 hours' },
    { label: 'Casualties', value: '~976 British' },
    { label: 'Winner', value: 'France & allies', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'British', force: 'Braddock’s flying column', str: '~1,300 regulars & provincials', cmd: 'Maj. Gen. Edward Braddock', note: 'Caught in column on a cut road, the regulars held linear formation against an enemy firing from cover and lost two of every three men.' },
    { side: 'c', tag: 'French & allies', force: 'Fort Duquesne sortie', str: '~900, most of them Native warriors', cmd: 'Capt. Beaujeu, then Capt. Dumas', note: 'Fought from the trees and ravines on the British flanks, and lost only a few dozen men.' },
  ],
  casualties: { union: 976, csa: 30, unionLabel: 'British ~976', csaLabel: 'French & allies ~30', footnote: 'British casualties of roughly 1,460 engaged. French and allied losses are reported between about two and four dozen killed.' },
  commanders: [
    { name: 'Edward Braddock', role: 'Cmdr., British', side: 'u', img: '/war-img/fi-edward-braddock.jpg', bio: 'Braddock carried Europe’s parade-ground tactics into the American forest and would not give them up even as they got his men killed, refusing to let the column break ranks and take cover. He had several horses shot from under him holding the line, was shot through the chest after about three hours, and died four days later on the retreat.' },
    { name: 'George Washington', role: 'Volunteer aide, British', side: 'u', img: '/war-img/fi-washington-1772.jpg', bio: 'A twenty-three-year-old volunteer aide with no formal command, still weak from dysentery, Washington rode through the worst of the fire carrying Braddock’s orders, with two horses shot under him and four bullets through his coat, and came out untouched. When the army broke he pulled together the rear guard that covered the retreat, and walked off the field with the reputation that would follow him the rest of his life.' },
    { name: 'Daniel de Beaujeu', role: 'Led the sortie, French', side: 'c', img: '', bio: 'Beaujeu led the force out of Fort Duquesne and won the Native warriors over by putting on war paint and going out among them as one of them rather than a commander giving orders. He was killed in the opening volleys, before the fight he had set in motion turned into a rout.' },
    { name: 'Jean-Daniel Dumas', role: 'Took command, French', side: 'c', img: '', bio: 'When Beaujeu fell in the first minutes, Dumas took command and steadied a force that might have come apart with its leader gone. He let the warriors fight their own way, spreading into the ravines on the British flanks, and turned a chance collision on the road into one of the worst defeats in British colonial history.' },
  ],
  outcome: {
    verdict: 'Decisive French and Native victory · the frontier laid open',
    text: 'A British army of regulars was destroyed by a smaller force that was mostly Native warriors, losing about two-thirds of its men and its commander in a few hours. The defeat proved British weakness in front of every nation watching, pushed the wavering Ohio peoples toward the French, and left the Pennsylvania, Maryland, and Virginia frontiers open to years of devastating raids. Fort Duquesne stayed French until 1758; the catastrophe opened the British "Years of Disaster," and made the reputation of the one aide who walked off the field unhurt, George Washington.',
  },
  sections: [
    { id: 'the-road-to-the-forks', eyebrow: 'The march in', title: 'The road to the forks', blurb: 'An empire ships a regular army into the deepest forest in North America to take the French fort at the Forks of the Ohio, and a young Virginian named Washington marches with it.', img: '/war-img/fi-edward-braddock.jpg' },
    { id: 'the-crossing', eyebrow: 'First contact', title: 'The crossing', blurb: 'The column fords the Monongahela in good order, flags flying, ten miles from the fort. A French and Native force comes down to meet it, and the two armies collide on the road.', img: '/war-img/fi-braddock-monongahela-map.jpg' },
    { id: 'the-slaughter-on-the-road', eyebrow: 'The killing', title: 'The slaughter on the road', blurb: 'Bunched on a cut track and firing volleys at an enemy they cannot see, the regulars are cut to pieces from the ravines. Braddock falls; Washington holds the rear guard.' },
    { id: 'buried-in-the-road', eyebrow: 'The cost', title: 'Buried in the road', blurb: 'Two of every three men dead or wounded, the general buried in the road and the grave driven flat to hide it, the frontier left open, and one reputation rising from the wreck.', img: '/war-img/fi-washington-1772.jpg' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/monongahela/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function MonongahelaPage() {
  return <BattleDossier data={DATA} />
}
