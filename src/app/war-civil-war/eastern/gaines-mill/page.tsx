'use client'

// BATTLE dossier (Battle of Gaines' Mill) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content produced through the war
// content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-gainesmill' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Battle of Gaines’ Mill',
  date: 'June 27, 1862',
  place: 'Hanover County, Virginia',
  hero: {
    img: '/war-img/gaines-mill-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~15,000' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'V Corps, Army of the Potomac', str: '~34,000 troops', cmd: 'Brig. Gen. Fitz John Porter', note: 'Held an isolated line north of the river against twice his number.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~57,000 troops', cmd: 'Gen. Robert E. Lee', note: 'Lee’s first battle in command, and his costliest gamble of the week.' },
  ],
  casualties: { union: 6837, csa: 7993, unionLabel: 'Union ~6,837', csaLabel: 'Confederacy ~7,993' },
  commanders: [
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'In his first battle commanding the Army of Northern Virginia, Lee crossed the bulk of his force over the Chickahominy to destroy Porter’s isolated corps, leaving only a thin screen to bluff McClellan in front of Richmond. His attacks went in piecemeal all afternoon and were shot to pieces until a single coordinated assault at dusk finally broke the Union line, his first victory, won at a cost heavier than his enemy’s.' },
    { name: 'James Longstreet', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/longstreet.jpg', bio: 'Longstreet held the Confederate right opposite Porter’s southern flank, ordered in at first as a diversion to hold the line until Jackson arrived. In the dusk assault his division pressed hard against the Union left as Hood’s brigade pierced the center, helping collapse a position that had held for hours.' },
    { name: 'A. P. Hill', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/ap-hill.jpg', bio: 'Hill threw his roughly 12,000-man Light Division at Boatswain’s Swamp in the first major assault of the afternoon, around 2:30 p.m., rather than wait for the rest of the army to come up. His brigades crossed the open ground and climbed into the guns alone, losing more than 2,000 men for no lasting ground.' },
    { name: 'John Bell Hood', role: 'Brigade, CSA', side: 'c', img: '/war-img/cmdr/hood.jpg', bio: 'Leading the Texas Brigade in Whiting’s division, Hood sent his men down the slope and up the deadly hillside without firing a shot, refusing to let them stop and lose momentum under fire. His charge broke through all three of Porter’s tiers at dusk and took the crest, at the cost of more than a thousand men in his and Law’s brigades together.' },
    { name: 'Fitz John Porter', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/fj-porter.jpg', bio: 'Porter chose and held a tiered line behind Boatswain’s Swamp, banking 96 guns on the plateau and beating back assault after assault through the afternoon against more than twice his number. His corps held until the coordinated dusk attack broke it, then pulled south across the Chickahominy in the dark to cover the retreat McClellan had already ordered.' },
    { name: 'George B. McClellan', role: 'Army cmdr., Union', side: 'u', img: '/war-img/cmdr/mcclellan.jpg', bio: 'McClellan had decided to abandon the drive on Richmond before the battle began, casting Porter as a rearguard to buy time for the withdrawal. Directing by telegraph from south of the river, certain he was outnumbered when he held the larger army, he fed Porter only a trickle of help and let two-thirds of his force sit idle in front of a thin Confederate screen.' },
  ],
  outcome: {
    verdict: 'Confederate victory · Lee turns the tide',
    text: 'In his first battle commanding the army, Lee hurled costly wave after wave at Fitz John Porter’s strong line behind Boatswain’s Swamp, until a coordinated dusk assault, spearheaded by Hood’s Texas Brigade, finally broke it. It was Lee’s first victory and the turning point of the Seven Days: McClellan had already decided to retreat, and Gaines’ Mill confirmed it, ending the Union drive on Richmond in 1862. The cost was appalling, and it set the pattern (aggressive, bloody, effective) for the army Lee would lead for three more years.',
  },
  sections: [
    { id: 'lee-attacks', eyebrow: 'The Seven Days', title: 'Lee Takes the Offensive', blurb: 'With McClellan at Richmond’s gates, Lee attacks, aiming to crush Porter’s (North) corps isolated north of the Chickahominy.', img: '/war-img/gaines-mill-sevendays.png' },
    { id: 'boatswains-swamp', eyebrow: 'June 27', title: 'The Line at Boatswain’s Swamp', blurb: 'Porter holds a tiered line behind a boggy ravine, and hours of piecemeal Confederate assaults are shot to pieces crossing it.', img: '/war-img/gaines-mill.png' },
    { id: 'hoods-breakthrough', eyebrow: 'Dusk', title: 'Hood Breaks the Line', blurb: 'A coordinated dusk assault, Hood’s (South) Texans at the point, finally breaks through, and McClellan’s retreat from Richmond is sealed.', img: '/war-img/cmdr/hood.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/gaines-mill/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function GainesMillPage() {
  return <BattleDossier data={DATA} />
}
