'use client'

// BATTLE dossier (Pea Ridge / Elkhorn Tavern). Same shape as Antietam.
// Content produced through the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'tmis',
  crumbs: civilWarCrumbs({ theatre: 'tmis', battleId: 't-pearidge' }),
  backHref: '/war-civil-war/trans-mississippi',
  eyebrow: 'Battle · Trans-Mississippi',
  title: 'Battle of Pea Ridge',
  date: 'March 7–8, 1862',
  place: 'Benton County, Arkansas',
  hero: {
    img: '/war-img/pea-ridge-hero.jpg', // Kurz & Allison chromolithograph (PD)
    pal: ['#3a3320', '#5a2a32', '#100506'],
    credit: 'Battle of Pea Ridge · Kurz & Allison · public domain',
  },
  stats: [
    { label: 'Duration', value: '2 days' },
    { label: 'Casualties', value: '~3,400' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Southwest', str: '~10,250 troops', cmd: 'Brig. Gen. Samuel R. Curtis', note: 'Dug in facing south, then coolly turned the whole army around to face north.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of the West', str: '~16,000 troops', cmd: 'Maj. Gen. Earl Van Dorn', note: 'Marched all night to attack from behind, and stranded his own ammunition doing it.' },
  ],
  casualties: { union: 1384, csa: 2000, unionLabel: 'Union ~1,384', csaLabel: 'Confederacy ~2,000' },
  commanders: [
    { name: 'Samuel R. Curtis', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/curtis.jpg', bio: 'A trained engineer, Curtis chased Price’s Missourians out of the state and dug in along Little Sugar Creek, only to wake on March 7 with Van Dorn’s army in his rear. He turned his whole Army of the Southwest about-face to the north, held through the first day, and on the second drove the out-of-ammunition Confederates from the field.' },
    { name: 'Franz Sigel', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/sigel.jpg', bio: 'Sigel was slow getting his divisions away from Bentonville on the approach, and his rear guard was brushed back as the campaign opened. On the second day he redeemed it, massing some twenty guns west of Elkhorn Tavern and directing the bombardment that silenced the Confederate batteries and opened the way for Curtis’s advance.' },
    { name: 'Eugene A. Carr', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/carr.jpg', bio: 'Carr held the Telegraph Road and Elkhorn Tavern against Price’s far larger wing through the whole first day, giving ground grudgingly across one line after another. Shot three times and still refusing to leave the field, he bought Curtis the hours he needed and later received the Medal of Honor for the stand.' },
    { name: 'Earl Van Dorn', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/van-dorn.jpg', bio: 'Van Dorn united Price’s and McCulloch’s feuding commands into one army and marched it all night around Curtis to attack from the rear. The flank march stranded his own ammunition wagons far behind the lines, and when his guns ran dry on the second day he was beaten and pulled the army out of Arkansas entirely.' },
    { name: 'Sterling Price', role: 'Wing, CSA', side: 'c', img: '/war-img/cmdr/price.jpg', bio: 'Price led the Missouri wing up the Telegraph Road and drove Carr back through four lines to seize Elkhorn Tavern by nightfall, the deepest the Confederates ever got into Curtis’s position. He was wounded during the fighting but stayed in command, and lost the ground again on the second day for lack of ammunition.' },
    { name: 'Benjamin McCulloch', role: 'Wing, CSA †', side: 'c', img: '/war-img/cmdr/mcculloch.jpg', bio: 'A former Texas Ranger who had feuded with Price all winter, McCulloch led the western wing toward Leetown and opened well, his cavalry overrunning a Union battery. Riding forward in his black civilian suit to scout the line himself, he was shot dead by a Union skirmisher in mid-morning.' },
    { name: 'James McIntosh', role: 'Brigade, CSA †', side: 'c', img: '/war-img/cmdr/mcintosh.jpg', bio: 'McIntosh took command of the western wing the instant McCulloch fell and tried to keep the attack moving. Leading an advance from the front, he was killed by the same Union skirmishers less than fifteen minutes later, leaving the wing without either of its top two commanders.' },
    { name: 'Albert Pike', role: 'Indian Terr., CSA', side: 'c', img: '/war-img/cmdr/pike.jpg', bio: 'A lawyer and poet with no real combat experience, Pike led the only sizable Native American force in a major Civil War battle, raised in Indian Territory under treaties he had helped negotiate. With the wing’s senior officers dead, captured, or lost, command fell to him by default, and he could do little but gather the wreckage and order a withdrawal.' },
  ],
  outcome: {
    verdict: 'Decisive Union victory · Missouri secured',
    text: 'Curtis’s outnumbered army turned completely around to meet Van Dorn’s attack from the rear and broke it, helped by the deaths of two Confederate generals and an army that ran out of ammunition because its supply train was stranded by its own flank march. Pea Ridge secured Missouri for the Union for the rest of the war, and the largest Confederate bid to take the border state failed for good. Within weeks Van Dorn hauled his army east of the Mississippi, leaving Arkansas stripped and the Trans-Mississippi a backwater.',
  },
  sections: [
    { id: 'the-armies-gather', eyebrow: 'After Wilson’s Creek', title: 'The Fight Moves South', blurb: 'The long fight for Missouri drives south into Arkansas, where Van Dorn (South) unites two armies to take the state back after a march that wrecks them.', img: '/war-img/cmdr/curtis.jpg' },
    { id: 'around-the-army', eyebrow: 'March 7', title: 'The Army That Turned Around', blurb: 'Van Dorn loops clear around the Union to attack from behind; Curtis (North) calmly turns to face him, and two Confederate generals die in minutes.', img: '/war-img/pea-ridge.png' },
    { id: 'out-of-ammunition', eyebrow: 'March 8 & after', title: 'The Guns Fall Silent', blurb: 'The Confederate guns go quiet for lack of ammunition stranded by their own march. Missouri is secured, and the war moves east.', img: '/war-img/pea-ridge-elkhorn.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/trans-mississippi/pea-ridge/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function PeaRidgePage() {
  return <BattleDossier data={DATA} />
}
