'use client'

// BATTLE dossier (Antietam) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content produced through the war
// content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-antietam' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Battle of Antietam',
  date: 'September 17, 1862',
  place: 'Sharpsburg, Maryland',
  hero: {
    img: '/war-img/antietam-hero.jpg',
    pal: ['#3a2a1c', '#5a2a32', '#100506'],
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~23k' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Potomac', str: '~87,000 troops', cmd: 'Maj. Gen. George B. McClellan', note: 'Held back his reserves; committed less than three-quarters of his army.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~38,000 troops', cmd: 'Gen. Robert E. Lee', note: 'Outnumbered two to one, and committed every man he had.' },
  ],
  casualties: { union: 12410, csa: 10316 },
  commanders: [
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'Carrying the war north for the first time, Lee split his outnumbered army to seize Harpers Ferry, then concentrated at Sharpsburg and fought all day with his back to the Potomac and nothing in reserve. He held his ground by the barest margin and slipped back into Virginia the next night, his bid for a victory on Northern soil spent.' },
    { name: 'Thomas J. “Stonewall” Jackson', role: 'Left wing, CSA', side: 'c', img: '/war-img/cmdr/jackson.jpg', bio: 'Detached to take Harpers Ferry, Jackson captured its garrison of more than 12,000 men on September 15, the largest surrender of United States troops in the war, then hurried his wing north to reach the field in time. He held Lee’s left through the morning slaughter in the Cornfield and sprang the trap in the West Woods that wrecked a Union division in twenty minutes.' },
    { name: 'James Longstreet', role: 'Right wing, CSA', side: 'c', img: '/war-img/cmdr/longstreet.jpg', bio: 'Longstreet held the Confederate center and right through the day’s heaviest pressure, steadying the line around the Sunken Road as Union assaults tore at it. His work at Sharpsburg earned him the name Lee used ever after: his “old war horse.”' },
    { name: 'A. P. Hill', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/ap-hill.jpg', bio: 'Left at Harpers Ferry to handle the surrender, Hill drove his Light Division roughly 17 miles to Sharpsburg in a single afternoon, some of his men in Union blue captured at the garrison. They reached the field at the last possible moment and slammed into Burnside’s exposed flank, saving Lee’s right from collapse.' },
    { name: 'George B. McClellan', role: 'Cmdr., Potomac', side: 'u', img: '/war-img/cmdr/mcclellan.jpg', bio: 'Handed a lost copy of Lee’s own marching orders, McClellan brought more than 87,000 men against Lee’s 38,000 and still believed himself outnumbered. He attacked in disconnected pieces, kept a whole corps in reserve as Lee’s line broke, and let the beaten army escape across the Potomac; Lincoln relieved him in November.' },
    { name: 'Joseph Hooker', role: 'I Corps, Union', side: 'u', img: '/war-img/cmdr/hooker.jpg', bio: 'Hooker opened the battle at dawn, driving his I Corps south into Miller’s Cornfield in the morning’s first and bloodiest assault. A few hours in he was shot through the foot and carried from the field, and his attack stalled behind him.' },
    { name: 'Ambrose Burnside', role: 'IX Corps, Union', side: 'u', img: '/war-img/cmdr/burnside.jpg', bio: 'Burnside spent much of the afternoon forcing a narrow stone bridge that a few hundred Georgians held against his whole corps, though the creek could be waded nearby. He finally crossed and pushed toward Sharpsburg into Lee’s rear, only to be thrown back by A. P. Hill’s late arrival; the bridge has carried his name ever since.' },
  ],
  outcome: {
    verdict: 'Union strategic victory · the road to Emancipation',
    text: 'Tactically the bloodiest day in American history was close to a draw: the Union lost more men, and Lee’s army escaped intact back across the Potomac. Strategically it was decisive. Lee’s first invasion of the North was turned back, handing Lincoln the victory he had been waiting for. Five days later he issued the preliminary Emancipation Proclamation, changing what the war was for and ending any real hope of British or French recognition of the Confederacy. McClellan’s refusal to pursue the beaten enemy cost him his command that November.',
  },
  sections: [
    { id: 'lost-order', eyebrow: 'Lee invades the North', title: 'The Lost Order', blurb: 'Lee invades the North. A Union soldier finds Lee’s battle plan wrapped around three cigars, and McClellan sits on it for eighteen hours.', img: '/war-img/antietam-lost-order.jpg' },
    { id: 'cornfield', eyebrow: 'The morning', title: 'The Cornfield', blurb: 'Dawn slaughter at Miller’s Cornfield and the Dunker Church; 2,200 men fall in the West Woods in about twenty minutes.', img: '/war-img/antietam-dunker-church.jpg' },
    { id: 'bridge', eyebrow: 'Midday & afternoon', title: 'The Bloody Lane & the Bridge', blurb: 'The center breaks at the Sunken Road, but the reserves never move. A. P. Hill (South) arrives from Harpers Ferry just in time to save Lee.', img: '/war-img/antietam-burnside-bridge.jpg' },
    { id: 'bloodiest', eyebrow: 'The cost & the meaning', title: 'The bloodiest day', blurb: '22,726 casualties in a single day. Brady photographs the dead, and five days later comes the Emancipation Proclamation.', img: '/war-img/antietam-bloody-lane.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/antietam/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function AntietamPage() {
  return <BattleDossier data={DATA} />
}
