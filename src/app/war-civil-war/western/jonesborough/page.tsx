'use client'

// BATTLE dossier (Battle of Jonesborough) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-jonesborough' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'The Battle of Jonesborough',
  date: 'August 31 – September 1, 1864',
  place: 'Jonesborough, Georgia',
  hero: {
    img: '/war-img/jonesborough-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
  },
  stats: [
    { label: 'Duration', value: '2 days' },
    { label: 'Casualties', value: '~3,350' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Military Division of the Mississippi', str: '~20,000+ engaged', cmd: 'Sherman · Howard · Davis', note: 'Howard’s Army of the Tennessee led the way; Davis’s XIV Corps made the break.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Tennessee', str: '~12,000 on Sept 1', cmd: 'Hood (Hardee in the field)', note: 'Sent to clear the Federals off Atlanta’s last railroad, then stretched too thin to hold it.' },
  ],
  casualties: { union: 1150, csa: 2200, unionLabel: 'Union ~1,150', csaLabel: 'Confederacy ~2,200' },
  commanders: [
    { name: 'William T. Sherman', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/sherman.jpg', bio: 'Rather than storm Atlanta’s works, Sherman swung the bulk of his three armies south and west to cut the Macon & Western Railroad, the city’s last open supply line, near Jonesborough. When the line was torn up and Hood gave up the city, he wired Washington the four words that turned the Northern mood: “Atlanta is ours, and fairly won.”' },
    { name: 'Oliver O. Howard', role: 'Army of the Tennessee', side: 'u', img: '/war-img/cmdr/howard.jpg', bio: 'Howard pushed the Army of the Tennessee across the Flint River and reached the railroad first, digging his men in on a ridge west of the town before the Confederates came up. His entrenched line broke the August 31 attack at roughly ten-to-one cost and held the Confederates off the rails.' },
    { name: 'Jefferson C. Davis', role: 'XIV Corps, Union', side: 'u', img: '/war-img/cmdr/jc-davis.jpg', bio: 'Davis, the Union general of that unfortunate name and no relation to the Confederate president, sent his XIV Corps against the salient in Hardee’s thinned line on September 1 and broke clean through it. The assault swallowed the brigade holding the apex, capturing its general and roughly 600 men.' },
    { name: 'John A. Logan', role: 'XV Corps, Union', side: 'u', img: '/war-img/cmdr/logan.jpg', bio: 'Logan’s XV Corps held the right of Howard’s entrenched line on August 31 and helped throw back the Confederate charge. On September 1 his corps pressed in from the west as Davis broke the salient, adding pressure on the far face of Govan’s apex.' },
    { name: 'John Bell Hood', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/hood.jpg', bio: 'Hood sent Hardee to drive the Federals off the last railroad, then in the small hours recalled half that force to Atlanta against an assault that never came. With the rail line cut, he ordered Atlanta abandoned the night of September 1, burning his stores and marching his army out to fight again at Franklin and Nashville.' },
    { name: 'William J. Hardee', role: 'Field cmdr., CSA', side: 'c', img: '/war-img/cmdr/hardee.jpg', bio: 'Handed two corps to clear the railroad, Hardee saw his August 31 attack break against Howard’s works and his men refuse a second charge. Stripped of half his force overnight, he held a two-mile front with about 12,000 men on September 1, lost the salient, and slipped his battered corps south in the dark to save it from being trapped.' },
    { name: 'Daniel C. Govan', role: 'Brigade, CSA †', side: 'c', img: '/war-img/cmdr/govan.jpg', bio: 'Govan’s Arkansas brigade held the apex of the salient where Hardee’s thinned line bent toward the enemy, the weakest point on the field. When the XIV Corps closed on it from two sides on September 1, the brigade was surrounded, and Govan himself was captured with roughly 600 of his men and about eight guns.' },
  ],
  outcome: {
    verdict: 'Union victory · the fall of Atlanta',
    text: 'Jonesborough cut the Macon & Western, the last railroad into Atlanta, and forced Hood (South) to abandon the city the night of September 1; Atlanta fell on September 2. It was the decisive, climactic battle of the Atlanta Campaign, and one of the most politically consequential of the war. Its fall reversed Northern morale overnight, secured Lincoln’s reelection in a campaign that was, at bottom, an election about slavery, and opened the road to the March to the Sea.',
  },
  sections: [
    { id: 'the-last-railroad', eyebrow: 'The stakes', title: 'The Last Railroad Into Atlanta', blurb: 'Sherman has cut every line into the city but one. He swings his armies south to break the Macon & Western near Jonesborough, and Atlanta cannot be held without it.', img: '/war-img/jonesborough-overview.png' },
    { id: 'hardees-stand', eyebrow: 'August 31', title: 'Hardee’s Stand', blurb: 'Hood (South) sends Hardee (South) to drive the Federals off the railroad. The charge breaks against Howard’s (North) entrenchments at roughly ten-to-one cost, and the men will not charge again.', img: '/war-img/cmdr/hardee.jpg' },
    { id: 'the-line-breaks', eyebrow: 'September 1', title: 'The Line Breaks', blurb: 'Stretched thin with half his force recalled, Hardee’s (South) salient gives way. The XIV Corps under Jefferson C. Davis (the Union general, not the Confederate president) swallows Govan’s (South) brigade whole.', img: '/war-img/jonesborough-the-break.png' },
    { id: 'atlanta-is-ours', eyebrow: 'September 2–3', title: 'Atlanta Is Ours', blurb: 'With the last railroad cut, Hood (South) abandons the city in the night. Sherman’s four-word telegram detonates the case against the war and turns the 1864 election.', img: '/war-img/cmdr/sherman.jpg' },
    { id: 'what-it-decided', eyebrow: 'The meaning', title: 'What It Decided', blurb: 'Jonesborough opened the road to the March to the Sea and the largest emancipation event in U.S. history, and to Ebenezer Creek, where the same Davis (North) left hundreds of the freed to drown.', img: '/war-img/cmdr/sherman.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/jonesborough/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function JonesboroughPage() {
  return <BattleDossier data={DATA} />
}
