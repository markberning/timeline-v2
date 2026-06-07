'use client'

// BATTLE dossier (The Battle of Sainte-Foy, April 28, 1760), French and Indian War.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author → critic
// gates → reconcile → revise → integrate. Sides are war-aware: British (red) / French
// (blue), set via sideNames + sideColors. Commander bios are gated, born-verified
// prose. The dossier masthead is the dotted St. Lawrence locator map (Montreal-to-Quebec
// river corridor; no hero image exists yet). Sources: audits/war-pipeline/fi-sainte-foy-*.

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN } from '@/lib/wars/french-indian'

const DATA: BattleData = {
  theatre: 'fi-battles',
  crumbs: warCrumbs(FRENCH_INDIAN, { lane: 'fi-battles', battleId: 'fi-sainte-foy' }),
  backHref: '/war-french-indian?theatre=fi-battles',
  eyebrow: 'Battle · 1760',
  title: 'The Battle of Sainte-Foy',
  date: 'April 28, 1760',
  place: 'Quebec City',
  note: 'The last French victory of the war in Canada, won on the open field and made worthless by the wrong fleet coming up the river.',
  hero: { img: '/war-img/fi-sainte-foy-quebec-view.jpg', pal: ['#2a2c33', '#3a4150', '#10131a'], credit: 'Pierre Charles Canot, after Richard Short · engraving · 1761 · public domain' },
  sideNames: { u: 'BRITISH', c: 'FRENCH' },
  sideColors: { u: 'var(--brit)', c: 'var(--french)' },
  stats: [
    { label: 'Duration', value: 'One day, then a siege' },
    { label: 'Casualties', value: '~2,000 combined' },
    { label: 'Winner', value: 'France', win: 'c' },
  ],
  sides: [
    { side: 'c', tag: 'French', force: 'The army rebuilt at Montreal over the winter', str: '~7,000, most of them regulars, the rest Canadian militia and ~300 Indigenous allies', cmd: 'The Chevalier de Lévis', note: 'Marched down the thawing river, formed his line faster than Murray expected, and took the field with a bayonet charge into the British left.' },
    { side: 'u', tag: 'British', force: 'The Quebec garrison, gutted by a winter of scurvy', str: '~3,800 fit men and a strong train of artillery', cmd: 'Brig. Gen. James Murray', note: 'Marched out to fight in the open rather than hold the city’s weak walls, pushed down into deep snow, and bogged his guns. He lost the field and his artillery.' },
  ],
  casualties: { union: 1150, csa: 833, unionLabel: 'British ~1,100–1,200', csaLabel: 'French ~830', footnote: 'Roughly two thousand men were struck down between the two armies, bloodier than the Plains of Abraham (~1,300) the autumn before, and by some measures the bloodiest engagement of the war in North America. The British lost close to three hundred killed; the 15th Foot lost about a third of its strength. The French lost nearly two hundred killed.' },
  commanders: [
    { name: 'François de Lévis (the Chevalier de Lévis)', role: 'Cmdr., French', side: 'c', img: '/war-img/fi-levis.jpg', bio: 'Montcalm’s successor as French field commander. After Quebec fell in 1759 he pulled the surviving army back to Montreal and spent the winter rebuilding it, tightening discipline, getting it equipped and provisioned to move the instant the season allowed. The march down the thawing St. Lawrence to Quebec was, by his own biographer’s account, "a terrible march through slush and mud." He won Sainte-Foy in the open field but could not cash the victory in: his siege train was, as his biographer put it, totally inadequate, and the river brought the wrong fleet. He wanted to fight on to the end and was overruled.' },
    { name: 'James Murray', role: 'Garrison cmdr., British', side: 'u', img: '/war-img/fi-murray.jpg', bio: 'Brigadier general left to hold Quebec through the winter after the 1759 conquest. The garrison he held it with came apart in his hands, roughly a thousand dead and two thousand sick of scurvy by spring, leaving him perhaps four thousand fit men and no money. Described by his own biographers as hot-headed and impetuous, he chose to march out and fight Lévis in the open rather than stand behind Quebec’s battered walls. He pushed his army down into deep snow, bogged his guns, and was beaten back into the city he had not wanted to defend.' },
    { name: 'Jean Vauquelin', role: 'Naval officer, French', side: 'c', img: '', bio: 'The French naval officer who brought a small division of supply ships, the frigate Atalante among them, down the river to follow Lévis’s army, reaching Quebec on the very day of the victory. When the British fleet came up and turned on the French supply vessels, Vauquelin made the kind of last stand men remember: he drew his pursuers off to protect the army’s depots, ran the Atalante aground rather than surrender her, nailed his flag to the mast, and threw his sword into the St. Lawrence so no Englishman would take it. By the Dictionary of Canadian Biography, "Vauquelin, it seems, had greatly impressed his enemies with his bravery."' },
  ],
  outcome: {
    verdict: 'French victory · the win that saved nothing',
    text: 'Lévis beat Murray in the open field, the last French win of the war in Canada, and it bought him nothing. He laid siege to Quebec the next day with a siege train too small to do the job, and everything came down to which navy reached the thawed river first. The British fleet came first. It resupplied Murray and destroyed the French supply ships, and once resupplied the British guns answered the starved French batteries thousands of rounds to twenty. Eighteen days after his victory, Lévis lifted the siege and withdrew toward Montreal, which surrendered that September, ending French rule in Canada.',
  },
  sections: [
    { id: 'the-winter-garrison', eyebrow: 'A city held by sick men', title: 'The winter garrison', blurb: 'Quebec fell in 1759, but holding it through a Canadian winter nearly destroyed the British army that took it. Two hundred miles upriver, the French rebuilt and prepared to march down and take the capital back.', img: '/war-img/fi-sainte-foy-quebec-view.jpg' },
    { id: 'murray-marches-out', eyebrow: 'The general gambles', title: 'Murray marches out', blurb: 'Rather than defend Quebec’s weak walls, Murray marched his sick garrison out to fight in the open, on the very ground where the city had been won. He pushed down into the snow, bogged his guns, and lost the bloodiest battle of the war.', img: '/war-img/fi-sainte-foy-battle.jpg' },
    { id: 'the-ships-in-the-river', eyebrow: 'Which sails come first', title: 'The ships in the river', blurb: 'Lévis had won the battle but had no siege train to take the city. The whole campaign came down to which navy reached the thawing river first. It was the wrong one, and a magnificent French last stand on the water could not change it.' },
  ],
  sectionHref: (id) => `/war-french-indian/battles/sainte-foy/s/${id}`,
  footer: { title: 'the French and Indian War', sub: 'All the battles', href: '/war-french-indian' },
}

export default function SainteFoyPage() {
  return <BattleDossier data={DATA} />
}
