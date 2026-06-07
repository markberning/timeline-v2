'use client'

// BATTLE dossier (Battle of Missionary Ridge). Same shape as Shiloh / Stones River:
// hero · collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome
// card · commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero.credit — no credit string or comment in the original source file; needs a born-verified attribution.
// FLAG: hero.pal — no explicit palette in source; estimated from HeroImg fallback gradient (#3a2e21, #2a221c, #0a0806).

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-missionary' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Missionary Ridge',
  date: 'November 25, 1863',
  place: 'Chattanooga, Tennessee',
  hero: {
    img: '/war-img/missionary-ridge-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~12,500' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Cumberland', str: '~56,000 troops', cmd: 'Grant (overall); Thomas', note: `Beaten at Chickamauga two months earlier, and charged the ridge without orders to avenge it.` },
    { side: 'c', tag: 'Confederacy', force: 'Army of Tennessee', str: '~44,000 troops', cmd: 'Bragg', note: `Held an “impregnable” ridge until its badly-sited center broke and ran.` },
  ],
  casualties: { union: 5824, csa: 6667, unionLabel: 'Union ~5,824', csaLabel: 'Confederacy ~6,667' },
  commanders: [
    { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: `Grant came to Chattanooga to break the siege and built a plan around a hammer blow by Sherman against the Confederate right at Tunnel Hill, with Thomas’s men set only to feint at the center. When the flank attacks stalled, he sent the center forward against the base of the ridge, then watched from Orchard Knob as those men kept climbing without his order and carried the crest.` },
    { name: 'George H. Thomas', role: 'Army of the Cumberland', side: 'u', img: '/war-img/cmdr/thomas.jpg', bio: `The “Rock of Chickamauga” commanded the Army of the Cumberland, the army that had been beaten two months earlier and was burning to settle it. His men were ordered to take the rifle pits at the foot of the ridge and stop, but they surged up the slope on their own and shattered Bragg’s center.` },
    { name: 'William T. Sherman', role: 'Army of the Tennessee', side: 'u', img: '/war-img/cmdr/sherman.jpg', bio: `Grant gave Sherman the main blow against the north end of the ridge at Tunnel Hill. Misled by bad maps onto a detached hill, he attacked piecemeal across a ravine and was held all day by Cleburne’s outnumbered division, taking heavy losses for no breakthrough.` },
    { name: 'Joseph Hooker', role: 'Detachment, Union', side: 'u', img: '/war-img/cmdr/hooker.jpg', bio: `Fresh from taking Lookout Mountain the day before, Hooker was to swing around the southern tip of the ridge through Rossville Gap and roll up the Confederate left. A burned bridge over Chattanooga Creek stalled his column for hours, so he did not press the south end until late in the afternoon.` },
    { name: 'Gordon Granger', role: 'IV Corps, Union', side: 'u', img: '/war-img/cmdr/granger.jpg', bio: `Granger commanded the IV Corps of Thomas’s army on the center of the field. When Grant demanded to know who had ordered the men up the ridge, it was Granger who answered that when his soldiers got started, all hell could not stop them.` },
    { name: 'Thomas J. Wood', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/wood.jpg', bio: `Wood led one of the divisions Grant prodded into the assault on the rifle pits, taking sharp words for the delay before it went in. His men crested the ridge near the center in the breakthrough that broke Bragg’s line.` },
    { name: 'Braxton Bragg', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/bragg.jpg', bio: `Bragg held the ridge he thought impregnable, but he had weakened his own line, detaching Longstreet to Knoxville and splitting his force between base and crest. He watched his Army of Tennessee come apart under the center assault, lost his command within days, and asked to be relieved.` },
    { name: 'Patrick Cleburne', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/cleburne.jpg', bio: `Cleburne held Tunnel Hill on the north end against Sherman with a fraction of his numbers and beat back every assault, the one Confederate success of the day. Two days later he formed the rear guard at Ringgold Gap and threw back the Union pursuit long enough to save Bragg’s wagons.` },
    { name: 'John C. Breckinridge', role: 'Center, CSA', side: 'c', img: '/war-img/cmdr/breckinridge.jpg', bio: `A former Vice President of the United States, Breckinridge commanded the center of the ridge, the sector the Federals struck. His badly-sited line, thin and without reserves, gave way as the Army of the Cumberland reached the crest.` },
  ],
  outcome: {
    verdict: `Decisive Union victory · the gateway to the Deep South thrown open`,
    text: `Grant meant Thomas’s men only to feint at the base of Missionary Ridge while Sherman delivered the real blow in the north. Sherman, misled by bad maps onto the wrong hill, stalled; Hooker lagged; and the diversion took over. Stung by their defeat at Chickamauga and pinned under fire at the bottom of the ridge, the Army of the Cumberland charged straight up the slope without orders and shattered Bragg’s badly-sited, self-weakened center, routing his army out of Tennessee. The siege of Chattanooga was lifted for good, the gateway to Atlanta and the slaveholding Deep South thrown open, and Grant, three months later, was made general-in-chief of all Union armies.`,
  },
  sections: [
    { id: 'the-siege', eyebrow: 'Late November 1863', title: `A City the South Couldn’t Lose`, blurb: `Grant arrives to break the siege of Chattanooga; Bragg’s (South) army sits on the heights, holding the rail gateway to the Deep South.`, img: '/war-img/missionary-ridge-overview.png' },
    { id: 'the-plan', eyebrow: 'November 25 · the design', title: 'Sherman Stalls, Hooker Lags', blurb: `Sherman is the hammer at the north end, but bad maps and Cleburne (South) stop him cold, while Hooker (North) lags in the south.`, img: '/war-img/missionary-ridge-flanks.png' },
    { id: 'the-order', eyebrow: 'Half past three', title: 'Take the Rifle Pits, and Stop?', blurb: `Grant sends Thomas’s (North) men at the base rifle pits as a diversion, pinning them under fire from the crest, in the worst place on the field.`, img: '/war-img/cmdr/thomas.jpg' },
    { id: 'the-charge', eyebrow: 'The miracle', title: '“Who Ordered Those Men Up the Ridge?”', blurb: `The Army of the Cumberland climbs without orders, shouting “Chickamauga!”, and shatters Bragg’s (South) badly-sited center.`, img: '/war-img/missionary-ridge.png' },
    { id: 'the-meaning', eyebrow: 'The cost & the meaning', title: 'The Gateway Thrown Open', blurb: `Bragg (South) loses his army and his command; the door to Atlanta and the slave South swings open; Grant goes east to win the war.`, img: '/war-img/cmdr/grant.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/missionary-ridge/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function MissionaryRidgePage() {
  return <BattleDossier data={DATA} />
}
