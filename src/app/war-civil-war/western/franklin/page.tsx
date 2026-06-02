'use client'

// BATTLE dossier (Battle of Franklin, 1864) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content via the war content pipeline
// (audits/war-content-pipeline.md): fact pack → author → fact-check + storytelling
// critic → revise → integrate.

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-franklin' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Franklin',
  date: 'November 30, 1864',
  place: 'Franklin, Tennessee',
  hero: {
    img: '/war-img/franklin-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
  },
  stats: [
    { label: 'Duration', value: 'One day' },
    { label: 'Casualties', value: '~8,600' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Ohio', str: '~27,000 troops', cmd: 'Maj. Gen. John M. Schofield', note: 'Dug in behind a strong arc of works, its back to the Harpeth River.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Tennessee', str: '~27,000 troops', cmd: 'Lt. Gen. John Bell Hood', note: 'Sent ~20,000 men across two miles of open ground in a frontal charge.' },
  ],
  casualties: { union: 2326, csa: 6252, unionLabel: 'Union ~2,326', csaLabel: 'Confederacy ~6,252' },
  commanders: [
    { name: 'John M. Schofield', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/schofield.jpg', bio: 'Schofield slipped his whole army past Hood’s in the dark at Spring Hill, then reached Franklin and threw up a strong arc of works with the Harpeth River at his back. He held the line through five hours of assault, got his wagon trains across the river, and withdrew to Nashville after dark, exactly as he had planned.' },
    { name: 'Emerson Opdycke', role: 'Brigade, Union', side: 'u', img: '/war-img/cmdr/opdycke.jpg', bio: 'Opdycke had flatly refused to post his brigade out on the exposed forward line, holding it in reserve about two hundred yards behind the Carter House instead. When the Confederates broke through the gap at the Columbia Pike, his men were exactly where they were needed, and his counterattack sealed the one breach in the Union line.' },
    { name: 'John Bell Hood', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/hood.jpg', bio: 'Hood marched the Army of Tennessee north on a gamble to reverse the loss of Atlanta, trapped Schofield at Spring Hill, then let him escape in the night. The next afternoon at Franklin he ordered some twenty thousand men across two miles of open ground into fortified works, with almost no artillery, over the objections of his own generals.' },
    { name: 'Patrick R. Cleburne', role: 'Div., CSA †', side: 'c', img: '/war-img/cmdr/cleburne.jpg', bio: 'Cleburne, the army’s most respected combat general, drove his division through the gap at the Columbia Pike and into the Carter House yard in the day’s deepest penetration. He was killed on foot after his horse was shot, somewhere in front of the cotton gin; eleven months earlier he had proposed freeing and arming enslaved men, and his own government buried the idea.' },
    { name: 'Nathan Bedford Forrest', role: 'Cavalry, CSA', side: 'c', img: '/war-img/cmdr/forrest.jpg', bio: 'Forrest had found a crossing of the Harpeth and argued for a flanking move to turn Schofield out of his works rather than charge them head-on. Hood overruled him and ordered the frontal assault anyway.' },
    { name: 'Benjamin F. Cheatham', role: 'Corps, CSA', side: 'c', img: '/war-img/cmdr/cheatham.jpg', bio: 'Cheatham’s corps led the main assault on the Union center, the divisions of Cleburne and Brown driving for the Columbia Pike. He is reported to have warned Hood before the charge that he did not like the look of the well-fortified position, and was overruled.' },
  ],
  outcome: {
    verdict: 'Union victory · the Army of Tennessee wrecks itself',
    text: 'After letting Schofield’s (North) army slip past him at Spring Hill the night before, Hood (South) ordered some twenty thousand men to charge two miles of open ground at dug-in Federals, with almost no artillery to clear the way. The line broke in for a moment at the Columbia Pike and was sealed shut by Opdycke’s (North) counterattack; then the charge became a five-hour slaughter at the works. Hood lost roughly three times what Schofield did, and six generals, while failing to take the position. Schofield withdrew to Nashville as planned, where two weeks later Hood’s shattered army was destroyed outright.',
  },
  sections: [
    { id: 'spring-hill', eyebrow: 'November 29', title: 'The Night the Army Walked Past', blurb: 'Hood (South) traps Schofield (North) on the Columbia Pike at Spring Hill, then lets the whole Union army slip past in the dark.', img: '/war-img/cmdr/hood.jpg' },
    { id: 'the-open-ground', eyebrow: 'November 30', title: 'Twenty Thousand Men, Two Miles, No Cover', blurb: 'Schofield (North) digs in with the Harpeth at his back; Hood (South) orders a frontal charge across two miles of open field, with almost no guns.', img: '/war-img/franklin-overview.png' },
    { id: 'the-cotton-gin', eyebrow: 'The five hours', title: 'The Breach at the Carter House', blurb: 'A momentary break-in at the Columbia Pike is sealed by Opdycke (North); the Army of Tennessee bleeds to death at the cotton gin, losing six generals.', img: '/war-img/franklin-the-charge.png' },
    { id: 'what-it-cost', eyebrow: 'The reckoning', title: 'The Dead on the Porch', blurb: 'Four dead generals laid out at Carnton; Cleburne (South), who had proposed freeing the slaves, falls, and what the South would not give up.', img: '/war-img/cmdr/cleburne.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/franklin/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function FranklinPage() {
  return <BattleDossier data={DATA} />
}
