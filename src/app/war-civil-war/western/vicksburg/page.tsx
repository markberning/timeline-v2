'use client'

// CAMPAIGN + SIEGE dossier (Siege of Vicksburg). Same shape as Stones River: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. 6 sections (campaign + siege).
// Content via the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero.credit — no credit string or comment in the original source file; needs a born-verified attribution.
// FLAG: hero.pal — no explicit palette in source; estimated from HeroImg fallback gradient (#3a2e21, #2a221c, #0a0806).
// FLAG: casualties surrender note — original CasBlock had an extra paragraph:
//   "Plus the surrender: about 29,495 Confederates surrendered and were paroled on July 4, an entire field army
//   taken out of the war at a stroke." The BattleDossier casualties block has no annotation field for this text;
//   it is not rendered in the new component. Recommend adding a note: field or handling in the component.
// FLAG: stat labels — original used "Siege" (not "Duration") and "Surrendered" (not "Casualties") as the first
//   two stat labels, matching the siege format. Preserved verbatim in stats below.

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-vicksburg' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Campaign & Siege · Western Theatre',
  title: 'Siege of Vicksburg',
  date: 'May–July 4, 1863',
  place: 'Vicksburg, Mississippi',
  hero: {
    img: '/war-img/vicksburg-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Siege', value: '47 days' },
    { label: 'Surrendered', value: '~29,495' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Tennessee', str: '~44,000, swelling toward 70,000', cmd: 'Grant', note: `Ran the batteries, cut loose from its base, and bottled the enemy inside the walls.` },
    { side: 'c', tag: 'Confederacy', force: 'Vicksburg garrison', str: '~30,000 troops', cmd: 'Pemberton', note: `Sealed inside the fortress, starving, waiting on relief that never came.` },
  ],
  casualties: { union: 10142, csa: 9091, unionLabel: 'Union ~10,142', csaLabel: 'Confederacy ~9,091 k/w/m', footnote: <>Plus the surrender: about <strong style={{ fontWeight: 600 }}>29,495</strong> Confederates surrendered and were paroled on July 4, an entire field army taken out of the war at a stroke.</> },
  commanders: [
    { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: `After the overland march and the frontal assault both failed, Grant ran the batteries, crossed below the city at Bruinsburg, cut loose from his supply line, and won five battles in eighteen days, driving Pemberton’s army inside the walls. Two storms on the works failed bloodily, so he settled into a 47-day siege and starved the garrison into surrendering nearly 30,000 men on July 4.` },
    { name: 'William T. Sherman', role: 'XV Corps, Union', side: 'u', img: '/war-img/cmdr/sherman.jpg', bio: `Sherman commanded the XV Corps through the campaign, feinting an attack at Haynes' Bluff to fix Pemberton’s attention north while Grant crossed downstream. Earlier he had marched his infantry into chest-deep swamp to pull Porter’s boxed-in fleet out of the flooded forest in the Steele’s Bayou expedition.` },
    { name: 'James B. McPherson', role: 'XVII Corps, Union', side: 'u', img: '/war-img/cmdr/mcpherson.jpg', bio: `McPherson led the XVII Corps on the army’s right during the inland drive, fighting at Raymond and helping take the state capital at Jackson. During the siege his corps held the center of the line and tunneled the mine that blew apart the Third Louisiana Redan.` },
    { name: 'John A. McClernand', role: 'XIII Corps, Union', side: 'u', img: '/war-img/cmdr/mcclernand.jpg', bio: `McClernand commanded the XIII Corps, the spearhead of the inland marches, and led the assaults at Port Gibson and Champion Hill. In the May 22 storm he overstated a breakthrough and drew reinforcements into a position that did not exist; weeks later Grant relieved him for publishing an unapproved order claiming the army’s credit.` },
    { name: 'David Dixon Porter', role: 'Fleet, Union', side: 'u', img: '/war-img/cmdr/dd-porter.jpg', bio: `Porter commanded the river fleet of gunboats and ironclads, and on the night of April 16 he ran his boats straight past the Vicksburg batteries to put them below the city where Grant needed them. His warships then ferried the army across at Bruinsburg and shelled the fortress from the water through the siege.` },
    { name: 'John C. Pemberton', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/pemberton.jpg', bio: `Pemberton commanded the Confederate garrison and chose to hold Vicksburg itself rather than keep his army in the field, letting Grant bottle him inside the walls. After Champion Hill and 47 days of siege, with his men starving and no relief coming, he surrendered the city and nearly 30,000 men on July 4.` },
    { name: 'Joseph E. Johnston', role: 'Relief, CSA', side: 'c', img: '/war-img/cmdr/je-johnston.jpg', bio: `Johnston was charged with assembling the army that would break the siege and rescue Pemberton, but he was scattered out of Jackson before he could concentrate and never gathered enough men. He spent the campaign gathering a relief force that was always too small and always too late, and it never broke through.` },
  ],
  outcome: {
    verdict: `Decisive Union victory · the river opens, the Confederacy is split in two`,
    text: `After two failed roads in (the wrecked overland march and the bloody assault on the bluffs) and a miserable winter of bogged-down bayou schemes, Grant ran the river batteries, crossed below the city at Bruinsburg, cut loose from his supply line, and won five battles in eighteen days, capped by the decisive fight at Champion Hill. The 47-day siege that followed starved the garrison into a July 4 surrender of nearly 30,000 men. Port Hudson fell five days later, opening the entire Mississippi and severing the Trans-Mississippi from the rest of the Confederacy. Coming the day after Gettysburg, Vicksburg is half of the war’s twin turning point, and, along the army’s path, the place where emancipation stopped being a proclamation and became a fact on the ground.`,
  },
  sections: [
    { id: 'the-key', eyebrow: 'The fortress on the bluffs', title: 'The Key to the War', blurb: `Vicksburg’s guns close the Mississippi; Grant tries the overland march and the frontal assault, and both fail.`, img: '/war-img/vicksburg-overview.png' },
    { id: 'the-failed-approaches', eyebrow: 'The winter of mud', title: 'Canals, Bayous, and a Drowning Army', blurb: `Four schemes to slip past the batteries through swamp and bayou all bog down; the navy has to be rescued, on foot, from the woods.`, img: '/war-img/cmdr/grant.jpg' },
    { id: 'the-gamble', eyebrow: 'The spring run', title: 'Past the Guns and Loose in Mississippi', blurb: `Porter (North) runs the batteries; Grant crosses at Bruinsburg, cuts his supply line, and wins five battles in eighteen days, capped at Champion Hill.`, img: '/war-img/vicksburg-campaign.png' },
    { id: 'the-siege', eyebrow: 'Forty-seven days', title: 'The Caves, the Trenches, and the Mule Meat', blurb: `Two failed storms turn into a 47-day siege; 3,000 civilians live in clay caves while the garrison starves on mule, horse, and rat.`, img: '/war-img/vicksburg-siege.png' },
    { id: 'emancipation-made-real', eyebrow: 'Freedom along the river', title: 'The Cause Made Flesh', blurb: `Slavery dissolves in the army’s path; at Milliken’s Bend, formerly enslaved soldiers fight hand-to-hand and hold.`, img: '/war-img/cmdr/pemberton.jpg' },
    { id: 'the-surrender', eyebrow: 'The Fourth of July', title: 'The Father of Waters Goes Unvexed', blurb: `Pemberton (South) surrenders nearly 30,000 men on July 4; Port Hudson falls; the river opens end to end the week after Gettysburg.`, img: '/war-img/cmdr/dd-porter.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/vicksburg/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function VicksburgPage() {
  return <BattleDossier data={DATA} />
}
