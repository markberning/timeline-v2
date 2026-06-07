'use client'

// BATTLE dossier (Battle of Lookout Mountain). Same shape as Stones River: hero · collapsible
// At-a-glance (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero.credit — no credit string or comment in the original source file; needs a born-verified attribution.
// FLAG: hero.pal — no explicit palette in source; estimated from HeroImg fallback gradient (#3a4150, #28303a, #0a0806).
// FLAG: casualties note — original CasBlock displayed "~1,064 captured" inline in the CSA legend; the BattleDossier
//   casualties block has no annotation field, so that parenthetical is not rendered in the new component.

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-lookout' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Lookout Mountain',
  date: 'November 24, 1863',
  place: 'Chattanooga, Tennessee',
  hero: {
    img: '/war-img/lookout-mountain-hero.jpg',
    pal: ['#3a4150', '#28303a', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~1,920' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Hooker’s ad-hoc force', str: '~10,000 troops', cmd: 'Grant (overall) · Hooker (leading)', note: 'Three divisions scraped from three corps. Ordered only to feint, they climbed instead.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Tennessee (detachment)', str: '~8,700 on paper', cmd: 'Bragg (overall) · Stevenson (on the mountain)', note: 'A mile of cliff held by too few men, thinned by Bragg days before the blow.' },
  ],
  casualties: { union: 671, csa: 1251, unionLabel: 'Union ~671', csaLabel: 'Confederacy ~1,251 (~1,064 captured)' },
  commanders: [
    { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'In overall command at Chattanooga, Grant planned a three-day breakout to crack the ring of heights around the city and meant Lookout Mountain only as a feint to set up the main blow on Missionary Ridge. He thought the fight on the cliffs was overrated, called the whole thing “all poetry” in his memoirs, and never counted it as much of a battle.' },
    { name: 'Joseph Hooker', role: 'Led assault, Union', side: 'u', img: '/war-img/cmdr/hooker.jpg', bio: 'Ordered only to demonstrate against the mountain, Hooker sent roughly 10,000 men up its steep western face instead and turned the feint into the climb that took the slope. His patchwork force of three divisions swept the thin defenders off the Cravens House bench and handed him a clean, low-cost win that redeemed a year dented by Chancellorsville.' },
    { name: 'John W. Geary', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/geary.jpg', bio: 'Geary led the main column that crossed Lookout Creek near Wauhatchie and climbed to the foot of the palisade, then wheeled north and east to sweep the mountain face from the flank. His drive rolled up Walthall’s outnumbered line and broke the Confederate stand at the Cravens House.' },
    { name: 'Peter J. Osterhaus', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/osterhaus.jpg', bio: 'A German-born veteran of the failed 1848 revolutions, Osterhaus brought a XV Corps division that had been stranded on the wrong side of the river when the pontoon bridge tore apart, and was attached to Hooker for the day. His men supported the crossing of Lookout Creek and the sweep across the slope.' },
    { name: 'Braxton Bragg', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/bragg.jpg', bio: 'Bragg held the heights around Chattanooga after Chickamauga, but thinned the Lookout Mountain garrison in the days before the attack, trusting the cliffs to defend themselves. When the slope gave way he wrote off the mountain, pulling his men down overnight to concentrate on Missionary Ridge.' },
    { name: 'Edward C. Walthall', role: 'Brigade, CSA', side: 'c', img: '/war-img/cmdr/walthall.jpg', bio: 'Walthall’s Mississippi brigade were the forward defenders who took the first blow on the western and northern slope. Hit from the flank by a force several times their size and blinded by fog, his men fought a delaying action from rock to rock and folded back to the Cravens House, where most of those captured that day were taken.' },
  ],
  outcome: {
    verdict: 'Union victory · a small fight wearing a giant’s name',
    text: 'Ordered only to demonstrate against Lookout Mountain, Hooker sent roughly 10,000 men up its steep north face, turned the thin, outnumbered defenders off the Cravens House bench, and took over a thousand prisoners for under 700 losses of his own. The summit was never stormed: the palisade cliff-line could not be climbed, and Bragg pulled his men off overnight, under a total lunar eclipse, to concentrate on Missionary Ridge. At dawn the 8th Kentucky raised the flag on an already-abandoned peak. Tactically a clean, low-cost win; strategically one piece of lifting the siege of Chattanooga, opening the rail gateway to the Deep South and the road to Atlanta. Grant called it “all poetry.” The legend outran the modest fighting, but the door it helped open was real.',
  },
  sections: [
    { id: 'the-army-under-the-mountain', eyebrow: 'The trap and the plan', title: 'The Army Under the Mountain', blurb: 'Grant plans a three-day breakout; Hooker (North) is ordered only to feint at a mountain held by far too few of Bragg’s (South) men.', img: '/war-img/lookout-mountain-overview.png' },
    { id: 'into-the-fog', eyebrow: 'The climb', title: 'Across the Creek and Into the Cloud', blurb: 'Geary (North) crosses Lookout Creek and sweeps the north face from the flank; Walthall’s (South) thin line breaks at the Cravens House in the fog.', img: '/war-img/lookout-mountain.png' },
    { id: 'the-battle-above-the-clouds', eyebrow: 'The legend and the deflation', title: 'The Battle Above the Clouds', blurb: 'An army watches a fight it cannot see. Meigs (North) names the legend on the spot, and Grant later calls the whole thing “all poetry.”', img: '/war-img/cmdr/hooker.jpg' },
    { id: 'the-flag-at-dawn', eyebrow: 'The empty summit and the hand-off', title: 'The Flag at Dawn', blurb: 'Bragg (South) abandons the summit overnight under a lunar eclipse; the 8th Kentucky (North) raises the flag on a height nobody fought for, opening the road to Atlanta.', img: '/war-img/cmdr/grant.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/lookout-mountain/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function LookoutMountainPage() {
  return <BattleDossier data={DATA} />
}
