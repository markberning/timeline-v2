'use client'

// BATTLE dossier (Siege of Port Hudson). Same shape as Antietam/Shiloh: hero ·
// collapsible At-a-glance · outcome card · commanders strip · section list.
// Content produced through the war content pipeline (audits/war-content-pipeline.md):
// audits/war-pipeline/port-hudson-final.md + port-hudson-factpack.md.

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero credit — /war-img/port-hudson-hero.jpg has no source/PD comment in the original; credit left blank pending verification.
// FLAG: original CasBlock had a disclaimer footnote below the bar:
// "The two doomed assaults (May 27 + June 14). On top of these, disease and the Louisiana summer
// felled another ~4,000–5,000 Union men over the siege."
// That sub-bar text is not representable in the casualties schema; preserved verbatim in `note`.
const DATA: BattleData = {
  theatre: 'tmis',
  crumbs: civilWarCrumbs({ theatre: 'tmis', battleId: 't-porthudson' }),
  backHref: '/war-civil-war/trans-mississippi',
  eyebrow: 'Campaign & Siege · Trans-Mississippi',
  title: 'Siege of Port Hudson',
  date: 'May 22 – July 9, 1863',
  place: 'Port Hudson, Louisiana',
  hero: {
    img: '/war-img/port-hudson-hero.jpg',
    pal: ['#3a3320', '#5a2a32', '#100506'],
    credit: '', // FLAG: no source/PD confirmed for this image
  },
  stats: [
    { label: 'Duration', value: '48 days' },
    { label: 'Surrendered', value: '~6,340' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Gulf', str: '~30,000 troops', cmd: 'Maj. Gen. Nathaniel P. Banks', note: 'A four-to-one advantage that the ground refused to honor.' },
    { side: 'c', tag: 'Confederacy', force: 'Port Hudson garrison', str: '~6,800–7,500 troops', cmd: 'Maj. Gen. Franklin Gardner', note: 'Dug into a bluff and a ring of dirt, and prepared to eat its mules.' },
  ],
  casualties: { union: 3787, csa: 282, unionLabel: 'Union ~3,787', csaLabel: 'Confederacy ~282' },
  note: <>The two doomed assaults (May 27 + June 14). On top of these, disease and the Louisiana summer felled another ~4,000–5,000 Union men over the siege.</>,
  commanders: [
    { name: 'Nathaniel P. Banks', role: 'Cmdr., Army of the Gulf', side: 'u', img: '/war-img/cmdr/banks.jpg', bio: 'A political general ordered by Washington to open the lower Mississippi, Banks brought roughly four times Gardner’s numbers against Port Hudson and never solved the ground. He spent two head-on assaults, on May 27 and June 14, to take nothing, then settled into the 48-day siege that finally starved the fort into surrender once Vicksburg fell upstream.' },
    { name: 'David G. Farragut', role: 'Fleet, Union', side: 'u', img: '/war-img/cmdr/farragut.jpg', bio: 'The admiral who had taken New Orleans the year before tried to handle Port Hudson from the water, running seven ships under the bluff guns on the night of March 14, 1863. Only his flagship Hartford and one gunboat got through; the rest were turned back and the frigate Mississippi burned and blew apart, proving the fort could not be pried off the river by a fleet.' },
    { name: 'Franklin Gardner', role: 'Cmdr., garrison', side: 'c', img: '/war-img/cmdr/gardner.jpg', bio: 'A New York-born professional soldier who had married into Louisiana and joined the Confederacy, Gardner held the bluff with fewer than 7,500 men against an army four times his size. He repulsed both of Banks’s assaults and held out 48 days on mule meat and rats, surrendering only on July 9 once he had confirmed that Vicksburg upstream was already gone.' },
  ],
  outcome: {
    verdict: 'Union victory · the river runs whole',
    text: <>Port Hudson surrendered on July 9, 1863, five days after Vicksburg fell, and it surrendered <em>because</em> Vicksburg fell, the fort having lost the only thing it existed to defend. Its capture, paired with Vicksburg&apos;s, gave the Union the entire Mississippi River, severed the Trans-Mississippi from the rest of the Confederacy, and ended the longest true siege in American military history at 48 days. Its deepest mark, though, was made on May 27, when the Louisiana Native Guard&apos;s doomed charge, and Captain André Cailloux&apos;s death leading it, became one of the war&apos;s first public proofs that Black soldiers, many of them formerly enslaved, would stand and fight for their own freedom.</>,
  },
  sections: [
    { id: 'the-last-lock', eyebrow: 'The river’s last lock', title: 'The Last Lock on the Mississippi', blurb: 'Why one bluff above a hairpin bend held the war’s last Confederate stretch of the river, and why Gardner (South) could not afford to lose it.', img: '/war-img/port-hudson-overview.png' },
    { id: 'the-night-run', eyebrow: 'Farragut runs the guns', title: 'Running the Batteries by Night', blurb: 'Farragut (North) tries to steam past the bluff in the dark; the USS Mississippi burns and blows apart, and one ship gets through.', img: '/war-img/cmdr/farragut.jpg' },
    { id: 'the-doomed-charges', eyebrow: 'The futile assaults', title: 'The Charges Into the Ravines', blurb: 'Banks (North) throws his army at the works twice and is slaughtered; the Louisiana Native Guard charge the bluff, and Cailloux falls leading them.', img: '/war-img/port-hudson.png' },
    { id: 'the-starving-siege', eyebrow: 'Forty days in the wilderness of death', title: 'The Siege and the Surrender', blurb: 'The guns stop and the hunger starts; the garrison eats its mules, dogs, and rats, until news comes down the river from Vicksburg.', img: '/war-img/cmdr/gardner.jpg' },
    { id: 'the-meaning', eyebrow: 'What it opened', title: 'The River Whole, and a Question Answered', blurb: 'The Mississippi runs Union end to end, the Confederacy is split in two, and the formerly enslaved have answered whether they would fight.', img: '/war-img/cmdr/banks.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/trans-mississippi/port-hudson/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function PortHudsonPage() {
  return <BattleDossier data={DATA} />
}
