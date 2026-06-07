'use client'

// BATTLE dossier (Battle of Opequon / Third Winchester) — REDESIGN. Thin data wrapper over
// the shared <BattleDossier> (new war skin, tabbed). Content produced through the war
// content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-opequon' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'The Battle of Opequon',
  date: 'September 19, 1864',
  place: 'Winchester, Virginia (Third Winchester)',
  hero: {
    img: '/war-img/opequon-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~8,600' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Shenandoah', str: '~40,000 engaged', cmd: 'Maj. Gen. Philip H. Sheridan', note: 'Outnumbered Early better than two to one, and nearly threw the edge away in a canyon.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of the Valley', str: '~15,000 engaged', cmd: 'Lt. Gen. Jubal A. Early', note: 'Caught dispersed, but bought time to concentrate while the Union army jammed up east of town.' },
  ],
  casualties: { union: 5000, csa: 3600, unionLabel: 'Union ~5,000', csaLabel: 'Confederacy ~3,600' },
  commanders: [
    { name: 'Philip H. Sheridan', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/sheridan.jpg', bio: 'Sheridan brought the Army of the Shenandoah across Opequon Creek to destroy Early before he could concentrate, acting on word that a Confederate division had left the Valley. A traffic jam in the Berryville Canyon cost him the surprise, so he fought the battle head-on and then loosed his reserves and massed cavalry against Early’s open northern flank, breaking the line and sending the Confederates whirling south through Winchester.' },
    { name: 'Horatio G. Wright', role: 'VI Corps, Union', side: 'u', img: '/war-img/cmdr/wright.jpg', bio: 'Wright’s VI Corps reached the Berryville Canyon first, but pushed its wagons and artillery into the defile ahead of the infantry and helped create the jam that delayed the attack by hours. In the afternoon fight his corps anchored the Union assault east of town, and his division commander David Russell was killed plugging the gap that nearly broke the line.' },
    { name: 'William H. Emory', role: 'XIX Corps, Union', side: 'u', img: '/war-img/cmdr/emory.jpg', bio: 'Emory’s XIX Corps was queued behind Wright in the canyon and could not even enter it until around nine in the morning. When the assault finally went in, his corps advanced side by side with the VI Corps east of Winchester, and the gap that opened between the two formations was where the Confederate counterattack drove through.' },
    { name: 'George A. Custer', role: 'Cavalry, Union', side: 'u', img: '/war-img/cmdr/custer.jpg', bio: 'Custer led a cavalry brigade in the massed mounted force that came down on Early’s open left flank from the north. Late in the afternoon he led a charge straight at the Confederate works north of town, around Fort Collier and Star Fort, helping cave in the end of Early’s line.' },
    { name: 'Wesley Merritt', role: 'Cavalry, Union', side: 'u', img: '/war-img/cmdr/merritt.jpg', bio: 'Merritt commanded a cavalry division in the force Sheridan massed against the northern end of the Confederate line. His horsemen swept down on Early’s exposed flank alongside Crook’s infantry, the mobile blow that rolled the Confederate army up sideways and turned its retreat into a rout.' },
    { name: 'Jubal A. Early', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/early.jpg', bio: 'Caught with his Army of the Valley dispersed around Winchester, Early used the hours the Union traffic jam handed him to pull his scattered divisions together in front of the town. He held the head-on assault through the afternoon, but his line had no flank to spare, and when the massed cavalry turned his open left his army broke and ran south through the streets.' },
    { name: 'Robert E. Rodes', role: 'Div., CSA †', side: 'c', img: '/war-img/cmdr/rodes.jpg', bio: 'Rodes, one of Lee’s finest division commanders, helped drive the counterattack that found the gap between the two Union corps and buckled the Federal center. He was killed leading that attack, reportedly while urging his men on, struck down in the early afternoon.' },
    { name: 'John B. Gordon', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/gordon.jpg', bio: 'Gordon’s division drove the counterattack into the seam of the Union line alongside Rodes, throwing the Federal center back in disorder for a stretch of the afternoon. His was the left of Early’s line that Crook’s infantry and the massed Union cavalry caved in once the flank attack came down from the north.' },
  ],
  outcome: {
    verdict: 'Union victory · the Valley begins to fall',
    text: 'Sheridan’s two-to-one edge nearly drained away in a clogged ravine, and the head-on fight cost two Confederate generals, one Union general, and the better part of an afternoon. But a massed cavalry blow against Early’s open northern flank broke his line and sent the Army of the Valley whirling south through the streets of Winchester. It was the first of three hammer-blows in a single month that destroyed Early’s army and cleared the lower Valley for The Burning. Seven weeks before the 1864 election, it also helped carry Lincoln to reelection and the war to its finish.',
  },
  sections: [
    { id: 'the-breadbasket', eyebrow: 'The Shenandoah', title: 'The breadbasket worth burning', blurb: 'Grant sends Sheridan (North) to burn the Valley that fed Lee’s army: a slave-worked larder and a covered highway pointed at the North.', img: '/war-img/cmdr/early.jpg' },
    { id: 'the-spy', eyebrow: 'The intelligence', title: 'The message in the tin foil', blurb: 'An enslaved man, Thomas Laws, carries word out of Winchester that Early (South) has been weakened, the intelligence that set the attack.', img: '/war-img/cmdr/sheridan.jpg' },
    { id: 'the-canyon', eyebrow: 'The morning', title: 'The traffic jam that nearly lost the day', blurb: 'Wright’s (North) wagons clog the only road through the Berryville Canyon, and the delay lets Early (South) pull his scattered divisions together.', img: '/war-img/opequon-overview.png' },
    { id: 'the-flank', eyebrow: 'The afternoon', title: 'Russell, Rodes, and the hammer from the north', blurb: 'A gap nearly breaks the Union center; Russell (North) dies closing it and Rodes (South) dies leading the counter, before the massed cavalry caves in Early’s flank.', img: '/war-img/opequon-the-flank.png' },
    { id: 'whirling-through-winchester', eyebrow: 'The rout', title: 'Whirling through the town', blurb: 'Early’s (South) army breaks south through Winchester’s streets, the first of three blows that destroyed the Army of the Valley and cleared the Valley for The Burning.', img: '/war-img/cmdr/custer.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/opequon/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function OpequonPage() {
  return <BattleDossier data={DATA} />
}
