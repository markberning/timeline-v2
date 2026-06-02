'use client'

// BATTLE dossier (Battle of Island Number Ten). Same shape as Antietam: hero · collapsible At-a-glance
// (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero credit — /war-img/island-number-ten-hero.jpg has no source/PD comment in the original; credit left blank pending verification.
// FLAG: original CasBlock was a prose description ("Fewer than 80 combined battle casualties...
// About 4,500 Confederates were captured"), not a union/csa numeric bar. The BattleData
// `casualties` field drives a bar and requires union+csa numbers; using `note` instead
// to preserve the original text verbatim; `casualties` is omitted.
const DATA: BattleData = {
  theatre: 'tmis',
  crumbs: civilWarCrumbs({ theatre: 'tmis', battleId: 't-island10' }),
  backHref: '/war-civil-war/trans-mississippi',
  eyebrow: 'Battle · Trans-Mississippi',
  title: 'Battle of Island Number Ten',
  date: 'Feb 28 – Apr 8, 1862',
  place: 'Mississippi River',
  hero: {
    img: '/war-img/island-number-ten-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '', // FLAG: no source/PD confirmed for this image
  },
  stats: [
    { label: 'Duration', value: '~6 weeks' },
    { label: 'Captured', value: '~4,500' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Mississippi & gunboats', str: '~23,000 troops', cmd: 'Pope & Foote', note: 'Dug a canal through a swamp and ran gunboats past the guns in the dark.' },
    { side: 'c', tag: 'Confederacy', force: 'Island No. 10 garrison', str: '~7,000 troops', cmd: 'McCown, then Mackall', note: 'Fortified the river bend, and were trapped behind their own defenses.' },
  ],
  note: <>Fewer than 80 combined battle casualties: the prize here was the river, not blood. About <strong>4,500 Confederates were captured</strong> when the trap closed.</>,
  commanders: [
    { name: 'John Pope', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/pope.jpg', bio: 'Pope took the soft target first, besieging and seizing New Madrid and its 33 guns, then solved the river he could not cross by sending his engineers to dig a canal through flooded swamp around the island. When the gunboats finally ran the batteries, he ferried his men over and cut the one escape road at Tiptonville, bagging the whole garrison for a few dozen casualties and making himself a national name.' },
    { name: 'Andrew Hull Foote', role: 'Gunboats, Union', side: 'u', img: '/war-img/cmdr/foote.jpg', bio: 'Foote brought his Western Gunboat Flotilla of ironclads and mortar rafts up opposite the island on March 15 and spent three weeks trying to pound it into surrender from a safe distance, with little to show for it. Reluctant to risk his fragile boats, he was talked into letting them run the guns, and it was to Foote and his flotilla that the island finally struck its colors on April 8.' },
    { name: 'Henry Walke', role: 'USS Carondelet', side: 'u', img: '/war-img/cmdr/walke.jpg', bio: 'Walke volunteered to take the ironclad Carondelet first past the batteries and armored her with barge planks, anchor chain, and a hay-piled coal barge for the run. On the stormy night of April 4, his boat was hit just twice and reached the safe water below the island unscathed, proving a warship could barrel past fixed shore guns rather than duel them.' },
    { name: 'William W. Mackall', role: 'Surrendered, CSA', side: 'c', img: '/war-img/cmdr/mackall.jpg', bio: 'Mackall took command of Island Number Ten only around March 31, inheriting a position his superiors still believed secure as the ground gave way beneath it. When Pope crossed the river and raced to cut the road south, there was no move left, and Mackall surrendered the garrison unconditionally near Tiptonville around 2 a.m. on April 8.' },
    { name: 'John P. McCown', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/mccown.jpg', bio: 'McCown held New Madrid until Pope’s heavy siege guns arrived sooner than he expected, then gave up the town under cover of a rainstorm, spiking some cannon and abandoning the rest. He pulled his troops back to Island Number Ten but was relieved of command at the end of March, handing the doomed position to Mackall just before the trap closed.' },
  ],
  outcome: {
    verdict: 'Union victory · the upper Mississippi opens',
    text: 'At almost no cost in blood, the Union cracked the fortress blocking the Mississippi: Pope’s men cut a canal through flooded swamp, gunboats ran the batteries by night, and the trapped garrison surrendered by the thousands. The victory opened the river south toward Memphis (which fell within weeks) and tightened the Anaconda strategy strangling the Confederacy. It made John Pope’s reputation, and sent him east to a far worse fate at Second Bull Run.',
  },
  sections: [
    { id: 'the-gibraltar', eyebrow: 'The river fortress', title: 'The Gibraltar of the River', blurb: 'After Columbus is outflanked, Island No. 10 becomes the next cork in the Mississippi, and Pope (North) means to pull it.', img: '/war-img/island-number-ten-strategy.png' },
    { id: 'the-canal', eyebrow: 'The engineering feat', title: 'The Canal Through the Swamp', blurb: 'With the guns and current blocking the fleet, Pope’s men dig a 12-mile canal, and gunboats run the batteries in a thunderstorm.', img: '/war-img/island-number-ten.png' },
    { id: 'the-trap', eyebrow: 'April 7–8', title: 'The Trap Springs', blurb: 'Ferried across the river, Pope cuts the escape road at Tiptonville; thousands surrender for the cost of a few dozen Union dead.', img: '/war-img/island-number-ten-trap.png' },
  ],
  sectionHref: (id) => `/war-civil-war/trans-mississippi/island-number-ten/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function IslandNumberTenPage() {
  return <BattleDossier data={DATA} />
}
