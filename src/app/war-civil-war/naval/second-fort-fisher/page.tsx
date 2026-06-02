'use client'

// BATTLE dossier (Second Fort Fisher). Same shape as Antietam/Fort Sumter: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties bar) ·
// outcome card · commanders strip · numbered section list.
// Content produced through the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

// FLAG: hero credit — /war-img/second-fort-fisher-hero.jpg has no source/PD comment in the original; credit left blank pending verification.
// FLAG: old CSA casualties legend appended "garrison captured" after the number; that extra note is not representable in the casualties schema and is dropped here.
const DATA: BattleData = {
  theatre: 'naval',
  crumbs: civilWarCrumbs({ theatre: 'naval', battleId: 'n-fortfisher2' }),
  backHref: '/war-civil-war/naval',
  eyebrow: 'Battle · Naval & Coastal',
  title: 'Second Battle of Fort Fisher',
  date: 'January 13–15, 1865',
  place: 'Cape Fear River, North Carolina',
  hero: {
    img: '/war-img/second-fort-fisher-hero.jpg',
    pal: ['#3a2a1c', '#5a2a32', '#100506'],
    credit: '', // FLAG: no source/PD confirmed for this image
  },
  stats: [
    { label: 'Duration', value: '3 days' },
    { label: 'Casualties', value: '~1,600' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Provisional Corps & fleet', str: '~9,600 troops', cmd: 'Maj. Gen. Alfred H. Terry', note: 'Sent back with orders to go in, after December’s expedition turned away without an assault.' },
    { side: 'c', tag: 'Confederacy', force: 'Fort Fisher garrison', str: '~1,900 troops', cmd: 'Col. William Lamb', note: 'Holding the Gibraltar of the South while a fresh division sat idle a few miles up the beach.' },
  ],
  casualties: { union: 1057, csa: 583, csaLabel: 'Confederacy 583 + garrison captured' },
  commanders: [
    { name: 'Alfred H. Terry', role: 'Cmdr., Union army', side: 'u', img: '/war-img/cmdr/terry.jpg', bio: 'Handed the provisional corps that Grant pulled together after relieving Butler, Terry landed about 9,600 men on the beach above the fort and dug a line facing north to guard against any counterattack. He then drove his division against the land face and pressed the assault through hours of hand-to-hand fighting on the traverses, taking the surrender at Battery Buchanan near ten o’clock that night.' },
    { name: 'Adelbert Ames', role: 'Div., Union army', side: 'u', img: '/war-img/cmdr/ames.jpg', bio: 'Ames led the infantry division that made the winning attack on the western end of the land face, feeding in his brigades one after another to claw across the great sand mounds. The fighting wrecked his command: all three of his brigade commanders fell, and most of his regimental commanders with them, before the fort was carried.' },
    { name: 'David D. Porter', role: 'Cmdr., Union fleet', side: 'u', img: '/war-img/cmdr/dd-porter.jpg', bio: 'Porter brought back nearly the whole North Atlantic Blockading Squadron, around 58 ships, the largest fleet the Navy had yet massed, and this time aimed his fire to knock out the fort’s guns one by one instead of just battering the sand. He also sent some 2,000 sailors and marines ashore to storm the sea-face corner, a charge that was bloodily repulsed but pulled the garrison away from the army’s blow.' },
    { name: 'W.H.C. Whiting', role: 'District cmdr., CSA', side: 'c', img: '/war-img/cmdr/whiting.jpg', bio: 'The district commander and the engineer behind Wilmington’s defenses, Whiting came down to the fort to share its fate rather than direct it from the city. He fought in the line, refused demands to surrender, and was shot down severely wounded; carried north as a prisoner, he died at Fort Columbus on Governors Island on March 10, 1865, of dysentery contracted in captivity, weakened by his wounds.' },
    { name: 'William Lamb', role: 'Cmdr., garrison', side: 'c', img: '/war-img/cmdr/lamb.jpg', bio: 'Lamb was the young colonel who had built Fort Fisher over years into the strongest earthwork in the Confederacy, and who now had to hold it with under 2,000 men against a fleet of 58 ships. He kept his garrison alive through three days of methodical bombardment, then fell badly wounded in the close fighting and ended the battle in the fort’s hospital beside Whiting.' },
    { name: 'Braxton Bragg', role: 'Dept. cmdr., CSA', side: 'c', img: '/war-img/cmdr/bragg.jpg', bio: 'Bragg commanded the department from Wilmington and held a full division of about 6,400 men under Hoke a short march from the fort. Cautious to the end, he never threw that division at Terry’s exposed line, sending only a small detachment forward and letting the garrison be taken apart while the force that might have saved it stood idle.' },
    { name: 'Robert Hoke', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/hoke.jpg', bio: 'Hoke’s division of roughly 6,400 veterans stood between Wilmington and the fort, perfectly placed to strike the Union landing in the rear. Held back by Bragg, it barely fought: a detachment of about 1,000 was sent toward the fort and only some 400 men got inside before the Union grip closed.' },
  ],
  outcome: {
    verdict: 'Union victory · the last seaport sealed',
    text: 'Three days of methodical naval bombardment knocked out the fort’s guns, and after a doomed charge by sailors on the sea face drew off the defenders, the army carried the land face in hours of hand-to-hand fighting through the traverses. The whole garrison of about 1,900 was captured, both Confederate commanders fell wounded, and the Cape Fear River closed behind them. Wilmington, the Confederacy’s last working seaport and a main artery feeding Lee’s army, fell a month later. With the sea sealed, the supply line that had kept the South in the field was gone, and Appomattox followed in the spring.',
  },
  sections: [
    { id: 'last-door', eyebrow: 'The last port', title: 'The Last Door', blurb: 'Wilmington is the Confederacy’s last working seaport, and Fort Fisher guards its river mouth. Butler (North) botches the first attack with a powder ship; Grant relieves him and sends Terry (North) back.', img: '/war-img/second-fort-fisher-hero.jpg' },
    { id: 'armada', eyebrow: 'January 13', title: 'The Greatest Armada', blurb: 'Porter (North) returns with 58 ships, the largest U.S. fleet yet assembled. Bragg (South) keeps Hoke’s (South) division idle a few miles off while the garrison is left to hold alone.', img: '/war-img/cmdr/dd-porter.jpg' },
    { id: 'bombardment', eyebrow: 'January 13–15', title: 'Pounding the Sand Flat', blurb: 'Three days of careful, aimed naval fire dismount the fort’s guns one by one, blinding the land face and grinding the garrison down before a single soldier charges.', img: '/war-img/cmdr/lamb.jpg' },
    { id: 'naval-charge', eyebrow: 'Afternoon, January 15', title: 'The Sailors’ Charge', blurb: 'Some 2,000 sailors and marines storm the sea-face corner with cutlasses and revolvers and are slaughtered, but the doomed rush pulls the defenders to the wrong side of the fort.', img: '/war-img/cmdr/whiting.jpg' },
    { id: 'the-fall', eyebrow: 'Night, January 15', title: 'Traverse by Traverse', blurb: 'The army goes over the land face and fights mound by mound into the dark. Whiting and Lamb (South) both fall wounded; the fort surrenders near ten o’clock, and the last door shuts.', img: '/war-img/cmdr/terry.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/naval/second-fort-fisher/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function SecondFortFisherPage() {
  return <BattleDossier data={DATA} />
}
