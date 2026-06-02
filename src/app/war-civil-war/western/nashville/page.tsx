'use client'

// BATTLE dossier (Battle of Nashville). Same shape as Shiloh/Antietam: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero.credit — no credit string or comment in the original source file; needs a born-verified attribution.
// FLAG: hero.pal — no explicit palette in source; estimated from HeroImg fallback gradient (#3a2e21, #2a221c, #0a0806).
// FLAG: casualties note — original CasBlock displayed "(mostly captured)" inline in the CSA legend; the BattleDossier
//   casualties block has no annotation field, so that parenthetical is not rendered in the new component.

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-nashville' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Nashville',
  date: 'December 15–16, 1864',
  place: 'Nashville, Tennessee',
  hero: {
    img: '/war-img/nashville-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '2 days' },
    { label: 'Casualties', value: '~9,000' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Cumberland (+ detachments)', str: '~55,000 troops', cmd: 'Thomas', note: `The deliberate Virginian his own superiors had a replacement riding toward, then he won the most complete victory of the war.` },
    { side: 'c', tag: 'Confederacy', force: 'Army of Tennessee', str: 'outnumbered ~2-to-1', cmd: 'Hood', note: `The wreck of Franklin, dug in outside a fortress city, too weak to attack and too proud to run.` },
  ],
  casualties: { union: 3000, csa: 6000, unionLabel: 'Union ~3,000', csaLabel: 'Confederacy ~6,000 (mostly captured)' },
  commanders: [
    { name: 'George H. Thomas', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/thomas.jpg', bio: `Thomas refused to attack until his army and its cavalry were fully ready, weathering an ice storm and a stream of furious telegrams while his own superiors started a replacement toward him. When the thaw came he swung a grand right wheel onto Hood’s flank and over two days destroyed the Army of Tennessee, the most complete field victory of the war.` },
    { name: 'John M. Schofield', role: 'XXIII Corps, Union', side: 'u', img: '/war-img/cmdr/schofield.jpg', bio: `Schofield, who had fought the delaying actions at Spring Hill and Franklin that bought Thomas the time to gather his force, held his XXIII Corps in reserve behind the wheeling right on December 15. On the 16th he was moved up on the Union right to fill the gap between Smith and Wilson and add weight to the blow against Hood’s left.` },
    { name: 'James B. Steedman', role: 'USCT assault, Union', side: 'u', img: '/war-img/cmdr/steedman.jpg', bio: `Steedman opened December 15 with a loud feint against Hood’s right that pinned Confederate troops at the wrong end of the field. The next day his command, including the U.S. Colored Troops, made the bloody assault on Overton Hill that drew Confederate reserves eastward as the real blow fell in the west.` },
    { name: 'James H. Wilson', role: 'Cavalry, Union', side: 'u', img: '/war-img/cmdr/jh-wilson.jpg', bio: `Wilson commanded the rebuilt Union cavalry that Thomas had waited to refit, and it formed the outer edge of the great right wheel, much of it fighting dismounted as it swung west and then south around Hood’s flank. After the rout he pressed the pursuit hard down the pikes, fought off only by Forrest’s rearguard.` },
    { name: 'Thomas J. Wood', role: 'IV Corps, Union', side: 'u', img: '/war-img/cmdr/wood.jpg', bio: `Wood led the IV Corps, the largest in Thomas’s army, against the Confederate right and Overton Hill on December 16. His first assault was thrown back at the abatis with heavy loss, but he renewed the attack as the rest of Hood’s line collapsed and helped turn the day into a rout.` },
    { name: 'John Bell Hood', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/hood.jpg', bio: `Hood brought the wreckage of his army, broken at Franklin two weeks before, up to the edge of Nashville and dug in, too weak to attack the fortress city and unwilling to retreat. Over two days Thomas collapsed his line and destroyed the Army of Tennessee; Hood resigned his command the following month.` },
    { name: 'Alexander P. Stewart', role: 'Corps (left), CSA', side: 'c', img: '/war-img/cmdr/ap-stewart.jpg', bio: `Stewart held the Confederate left, the western end of Hood’s line, anchored on a chain of five detached redoubts. The Union right wheel rolled up those forts one after another on December 15, and when Shy’s Hill fell the next day his flank disintegrated and the whole army came apart.` },
    { name: 'Benjamin F. Cheatham', role: 'Corps (right), CSA', side: 'c', img: '/war-img/cmdr/cheatham.jpg', bio: `Cheatham held the Confederate right, the eastern end of the line, where Steedman’s feint struck on December 15 and the U.S. Colored Troops charged Overton Hill on the 16th. His men held the hill against repeated assaults, but the troops drawn there to do it left the far end of the army fatally thin.` },
    { name: 'Stephen D. Lee', role: 'Corps (center), CSA', side: 'c', img: '/war-img/cmdr/sd-lee.jpg', bio: `Lee held the center of Hood’s line between Stewart on the left and Cheatham on the right. As the flanks gave way his corps was caught in the general collapse on December 16, and he was among those covering the retreat south toward Tupelo.` },
    { name: 'Nathan Bedford Forrest', role: 'Cavalry, CSA (absent)', side: 'c', img: '/war-img/cmdr/forrest.jpg', bio: `Hood’s best cavalryman was not at the battle at all, detached toward Murfreesboro to raid the railroad while his eyes and striking power were needed most. Forrest rejoined the broken army afterward and ran the rearguard down the pikes, the only thing that kept any organized piece of it together during the retreat.` },
  ],
  outcome: {
    verdict: `Decisive Union victory · the last western army erased`,
    text: `Over two days Thomas’s grand right wheel collapsed Hood’s left, and on December 16 the line broke and the Army of Tennessee dissolved into one of the most complete routs of the war: about 6,000 lost, the bulk of them prisoners. It was one of the few times a whole field army was not merely beaten but destroyed, done in part by the U.S. Colored Troops who charged Overton Hill. Hood resigned within weeks, and the West was decided.`,
  },
  sections: [
    { id: 'the-standoff', eyebrow: 'Nashville', title: `An army too weak to attack, too proud to run`, blurb: `Hood (South), his army wrecked at Franklin, digs a thin line outside a fortress city he cannot take, and waits for Thomas (North) to come out.`, img: '/war-img/nashville-overview.png' },
    { id: 'the-sledgehammer-telegrams', eyebrow: 'December 8–14', title: `The general everyone wanted to fire`, blurb: `An ice storm freezes Thomas (North) in place while Grant sends Logan (North) to relieve him, and the most decisive victory of the war is about to be won by a man already half-fired.`, img: '/war-img/cmdr/thomas.jpg' },
    { id: 'the-right-wheel', eyebrow: 'December 15', title: `The door swings shut on Hood’s left`, blurb: `Steedman’s (North) feint pins Hood’s right while Wilson’s cavalry (North) and Smith’s (North) infantry wheel down onto Stewart’s (South) flank, overrunning five redoubts in sequence.`, img: '/war-img/nashville-december-15.png' },
    { id: 'overton-hill', eyebrow: 'December 16', title: `The hill the freedmen charged`, blurb: `Steedman’s (North) U.S. Colored Troops assault the strongest works on the field, the 13th USCT taking the battle’s heaviest loss and winning even Holtzclaw’s (South) acknowledgment.`, img: '/war-img/nashville-december-16.png' },
    { id: 'the-army-destroyed', eyebrow: 'December 16 evening', title: `The line rolled up west to east`, blurb: `Shy’s Hill falls, Stewart’s (South) flank disintegrates, and the last Confederate field army in the West dissolves into rout, saved from total ruin only by Forrest’s (South) rearguard.`, img: '/war-img/cmdr/hood.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/nashville/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function NashvillePage() {
  return <BattleDossier data={DATA} />
}
