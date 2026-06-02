'use client'

// BATTLE dossier (Fort Sumter) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content produced through the war
// content pipeline (audits/war-content-pipeline.md). The casualties block is
// special-cased: the bombardment killed no one — the lone death (Pvt. Hough)
// came by accident during the surrender salute.

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'naval',
  crumbs: civilWarCrumbs({ theatre: 'naval', battleId: 'n-sumter' }),
  eyebrow: 'Battle · Naval & Coastal',
  title: 'Battle of Fort Sumter',
  date: 'April 12–14, 1861',
  place: 'Charleston Harbor, South Carolina',
  hero: {
    img: '/war-img/fort-sumter-hero.jpg',
    pal: ['#3a2a1c', '#5a2a32', '#100506'],
    credit: 'Bombardment of Fort Sumter · Currier & Ives · public domain',
  },
  stats: [
    { label: 'Duration', value: '~34 hrs' },
    { label: 'Killed in action', value: '0' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Fort Sumter garrison', str: '~85 men', cmd: 'Maj. Robert Anderson', note: 'Low on food and powder, sewing cartridges from blankets, and certain he could not hold.' },
    { side: 'c', tag: 'Confederacy', force: 'Charleston batteries', str: '~43 guns', cmd: 'Brig. Gen. P. G. T. Beauregard', note: 'Anderson’s own former artillery student, now ringing the harbor with guns.' },
  ],
  note: <><b>No one died in the battle.</b> Thirty-four hours of shelling and not one man killed on either side. The war’s first death came afterward, by accident: Pvt. Daniel Hough (North), killed when a gun went off early during the 100-gun surrender salute.</>,
  commanders: [
    { name: 'Robert Anderson', role: 'Cmdr., garrison', side: 'u', img: '/war-img/cmdr/anderson.jpg', bio: 'Slipped his eighty-five men out of the indefensible Fort Moultrie and into Fort Sumter by night, then held the island through thirty-four hours of bombardment, firing only his sheltered lower guns to spare his soldiers. Out of food and powder, his fort burning, he surrendered on honorable terms and marched out with the flag he would carry north and raise again, four years later to the day, over the recaptured ruin.' },
    { name: 'Abner Doubleday', role: '2nd, garrison', side: 'u', img: '/war-img/cmdr/doubleday.jpg', bio: 'As Anderson’s second-in-command, Doubleday sighted and fired the first Union shot of the war around seven on the morning of April 12, a 32-pound ball that bounced off the iron roof of the battery at Cummings Point. He worked the garrison’s lower guns through both days of the bombardment and later styled himself the hero of Sumter.' },
    { name: 'P. G. T. Beauregard', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/beauregard.jpg', bio: 'Newly made the Confederacy’s first general, Beauregard ringed Charleston Harbor with forty-three guns trained on the fort his old West Point artillery teacher now held. He sent the demands to evacuate, opened the bombardment at half past four on April 12, and accepted Anderson’s surrender a day and a half later, courteous to his former instructor to the end.' },
  ],
  outcome: {
    verdict: 'Confederate victory · the war begins',
    text: 'A thirty-four-hour bombardment forced the surrender of the U.S. garrison without killing a single soldier on either side; the only death came by accident during the surrender salute. But the symbolism was total. Firing on the flag united the North overnight, Lincoln called for 75,000 volunteers, and within weeks Virginia, Arkansas, Tennessee, and North Carolina seceded in response, nearly doubling the Confederacy. The Confederacy had gone to war to preserve slavery, and the bloodless battle in Charleston Harbor began the bloodiest war in American history.',
  },
  sections: [
    { id: 'the-fort', eyebrow: 'Secession winter', title: 'The Fort in the Harbor', blurb: 'Anderson (North) slips his garrison into Fort Sumter by night. South Carolina rings the harbor with guns and waits out a starving garrison.', img: '/war-img/sumter-harbor.png' },
    { id: 'the-decision', eyebrow: 'Lincoln’s gambit', title: 'The Last Word from Washington', blurb: 'Lincoln sends food, not war, forcing Davis to either let the fort be fed or fire the first shot. The South fires.', img: '/war-img/sumter-exterior.jpg' },
    { id: 'the-bombardment', eyebrow: 'April 12–13', title: 'Thirty-Four Hours', blurb: 'Forty-three guns open on the fort. Anderson barely fires back, the artillery teacher sparing his men while his star pupil pounds him from shore.', img: '/war-img/sumter-interior.jpg' },
    { id: 'the-war-begins', eyebrow: 'April 14 & after', title: 'One Death, and a Country at War', blurb: 'The fort surrenders; an accidental blast kills the war’s first man. Then 75,000 volunteers, four more states gone, and a nation at war.', img: '/war-img/cmdr/anderson.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/naval/fort-sumter/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function FortSumterPage() {
  return <BattleDossier data={DATA} />
}
