'use client'

// BATTLE dossier (Westport). Same shape as Antietam / Wilson’s Creek: hero ·
// collapsible At-a-glance · outcome card · commanders strip · section list.
// Content produced through the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'tmis',
  crumbs: civilWarCrumbs({ theatre: 'tmis', battleId: 't-westport' }),
  backHref: '/war-civil-war/trans-mississippi',
  eyebrow: 'Battle · Trans-Mississippi',
  title: 'Battle of Westport',
  date: 'October 23, 1864',
  place: 'Kansas City, Missouri',
  hero: {
    img: '/war-img/westport-hero.jpg', // "Battle Ground of Westport, Oct 23 64" — period map from Hinton, Rebel Invasion of Missouri and Kansas (1865); public domain
    pal: ['#3a3320', '#5a2a32', '#100506'],
    credit: 'Battle Ground of Westport, Oct 23 64 · Hinton, Rebel Invasion of Missouri and Kansas (1865) · public domain',
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~3,000' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Border & cavalry', str: '~22,000 troops', cmd: 'Maj. Gen. Samuel R. Curtis', note: 'Two forces closing from the west and the east, squeezing Price between them.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Missouri', str: '~8,500 troops', cmd: 'Maj. Gen. Sterling Price', note: 'Outnumbered better than two to one, and dragging a wagon train miles long.' },
  ],
  casualties: { union: 1500, csa: 1500, unionLabel: 'Union ~1,500', csaLabel: 'Confederacy ~1,500' },
  commanders: [
    { name: 'Sterling Price', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/price.jpg', bio: 'A former Missouri governor near sixty, Price led the Army of Missouri on a grand raid meant to retake his home state and shake Northern nerve before the 1864 election. At Westport he chose to throw his outnumbered army forward against Curtis to break out west, but his ammunition failed and the Union closed on him from two sides; he abandoned the field and began a long, disastrous retreat south.' },
    { name: 'Joseph O. Shelby', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/shelby.jpg', bio: 'Shelby was Price’s best subordinate, a hard-driving cavalry commander who had forced the Big Blue crossing at Byram’s Ford the day before. At Brush Creek his dismounted troopers counterattacked and nearly drove the Union assault back into the streets of Westport, then fought a stubborn rear-guard action that kept the retreat from becoming a total rout.' },
    { name: 'John S. Marmaduke', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/marmaduke.jpg', bio: 'Marmaduke held the Big Blue River line at Byram’s Ford against Pleasonton’s cavalry, buying a few hours before the Union troopers forced the crossing around eleven in the morning. Two days later, in the rout at Mine Creek, his division was overrun and he was captured, one of two Confederate generals taken in a single cavalry charge.' },
    { name: 'Samuel R. Curtis', role: 'Cmdr., Army of the Border', side: 'u', img: '/war-img/cmdr/curtis.jpg', bio: 'Curtis, who had broken the Confederate army in the region at Pea Ridge two years earlier, planted his improvised Army of the Border across Price’s path along the Kansas line. When a local farmer showed him a hidden ravine around the Confederate flank, he personally led troops and guns through it, turning Shelby’s line and breaking the morning’s stalemate.' },
    { name: 'James G. Blunt', role: '1st Div., Union', side: 'u', img: '/war-img/cmdr/blunt.jpg', bio: 'Blunt, Curtis’s most aggressive subordinate, laid out the Union defensive line south of Westport at Brush Creek and led the dawn assault across the icy stream. Driven back by Shelby’s counterattack, his pressure on the front held the Confederates in place long enough for Curtis’s flank attack to take effect, then he joined the relentless pursuit south.' },
    { name: 'Alfred Pleasonton', role: 'Cavalry, Union', side: 'u', img: '/war-img/cmdr/pleasonton.jpg', bio: 'Once commander of the Army of the Potomac’s cavalry at Gettysburg, Pleasonton had been shipped west to Missouri and now drove the rear of Price’s column for days. At Westport his troopers forced the Big Blue at Byram’s Ford and closed the eastern jaw of the trap, then ran the retreating Confederates to ground at Mine Creek two days later.' },
  ],
  outcome: {
    verdict: 'Decisive Union victory · the last invasion turned back',
    text: 'The largest battle ever fought west of the Mississippi ended with Sterling Price’s outnumbered army squeezed between two Union forces, its ammunition failing, and driven from the field. The retreat collapsed into a rout at Mine Creek two days later, and what was left of the army limped south into Texas. Westport ended the last major Confederate offensive in the Trans-Mississippi and secured Missouri for the rest of the war. The bid to shake the North before the 1864 election helped reelect Lincoln instead.',
  },
  sections: [
    { id: 'last-raid', eyebrow: 'The last invasion', title: 'Price Comes North', blurb: 'With the Confederacy nearly out of options, Sterling Price (South) marches an army up through Missouri to shake the North before the 1864 election. Two Union forces close on him from opposite directions.', img: '/war-img/cmdr/price.jpg' },
    { id: 'brush-creek', eyebrow: 'The morning fight', title: 'Brush Creek', blurb: 'Trapped between two rivers, Price throws his weight against Curtis (North). Shelby (South) nearly breaks through, until a farmer shows Curtis a ravine around the flank and Pleasonton (North) forces the Big Blue behind him.', img: '/war-img/cmdr/curtis.jpg' },
    { id: 'long-retreat', eyebrow: 'The pursuit', title: 'The Long Road South', blurb: 'The last Confederate invasion of the war collapses into a running rout. Mine Creek wrecks the rear guard, the army melts away, and the war west of the Mississippi is over as a contest of armies.', img: '/war-img/cmdr/pleasonton.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/trans-mississippi/westport/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function WestportPage() {
  return <BattleDossier data={DATA} />
}
