'use client'

// BATTLE dossier (Third Petersburg — The Breakthrough) — REDESIGN. Thin data wrapper
// over the shared <BattleDossier> (new war skin, tabbed). Content produced through the
// war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-petersburg3' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'The Breakthrough at Petersburg',
  date: 'April 2, 1865',
  place: 'Petersburg, Virginia',
  hero: {
    img: '/war-img/third-petersburg-hero.jpg',
    pal: ['#2a2018', '#4a2620', '#0c0605'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~7.7k' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Armies of the Potomac & the James', str: '~63,000 engaged', cmd: 'Lt. Gen. Ulysses S. Grant', note: 'Threw the whole line forward at once, so that wherever it cracked, fresh men poured through.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~18,000 engaged', cmd: 'Gen. Robert E. Lee', note: 'Held a 30-mile front with a worn-out army, and had no reserve behind the point that broke.' },
  ],
  casualties: { union: 3500, csa: 4250 },
  commanders: [
    { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'When word came that Sheridan had broken the Confederate right at Five Forks, Grant did not wait for morning to plan: he ordered the entire Petersburg line assaulted at first light on April 2. The blow he had been building toward for nine months landed all along the front at once, cracked the siege open in twenty minutes, and put Lee’s army on the road at last.' },
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'Holding more than 30 miles of works with a starving, shrinking army, Lee had no reserve behind the stretch the Sixth Corps hit and could only watch the line come apart. He bought a few hours with the doomed stand at Fort Gregg, told Jefferson Davis that Petersburg and Richmond must be given up, and pulled his army out into the open that night.' },
    { name: 'Horatio G. Wright', role: 'VI Corps, Union', side: 'u', img: '/war-img/cmdr/wright.jpg', bio: 'Wright massed his Sixth Corps in a single deep wedge and sent it across the open ground in the dark at about 4:40 a.m., aimed at one point in the Confederate trenches. His men tore through and broke the line wide, then wheeled west and cut the South Side Railroad, the last open supply line into Petersburg.' },
    { name: 'A. P. Hill', role: 'Corps cmdr., CSA', side: 'c', img: '/war-img/cmdr/ap-hill.jpg', bio: 'Hill held the stretch of line the Sixth Corps shattered, and when his front gave way he rode out with a single staff officer to rally his men. He met two soldiers of the 138th Pennsylvania in the broken ground, demanded their surrender, and was shot dead, the most senior commander either army lost that day.' },
    { name: 'John Gibbon', role: 'XXIV Corps, Union', side: 'u', img: '/war-img/cmdr/gibbon.jpg', bio: 'Gibbon brought the Twenty-Fourth Corps of the Army of the James against Forts Gregg and Whitworth, the small earthworks shielding Petersburg’s inner line. His brigades hit Fort Gregg in repeated waves against a few hundred defenders, taking it only after some of the day’s bitterest hand-to-hand fighting.' },
    { name: 'John B. Gordon', role: 'Second Corps, CSA', side: 'c', img: '/war-img/cmdr/gordon.jpg', bio: 'Gordon held the eastern end of the Petersburg line, where the Union Ninth Corps stormed the works around Fort Mahone in close, grinding fighting. He kept his front intact long enough to cover the army’s withdrawal, then pulled out with the rest that night and took the rear guard on the retreat west.' },
  ],
  outcome: {
    verdict: 'Decisive Union victory · the siege breaks and the capital falls',
    text: 'The breakthrough ended the nine-month siege of Petersburg in a single morning. The Sixth Corps tore through Lee’s line, cut the last railroad, and killed A. P. Hill (South), one of Lee’s ablest generals. That night Lee gave up both Petersburg and Richmond, and the Confederate capital fell the next day. The Army of Northern Virginia was driven into the open and onto the roads west, with Grant in pursuit. One week later it surrendered at Appomattox, and the war in Virginia was over.',
  },
  sections: [
    { id: 'the-siege', eyebrow: 'The end of the siege', title: 'Nine months in the trenches', blurb: 'Grant pins Lee against Petersburg and Richmond for nine months, then breaks the Confederate right at Five Forks and orders the whole line forward.', img: '/war-img/cmdr/grant.jpg' },
    { id: 'the-breakthrough', eyebrow: 'Before dawn, April 2', title: 'The breakthrough', blurb: 'A signal gun at 4:40 a.m., the Sixth Corps tears through A. P. Hill’s line in twenty minutes, and Hill is killed riding to rally his men.', img: '/war-img/third-petersburg-breakthrough.png' },
    { id: 'fort-gregg', eyebrow: 'Early afternoon', title: 'The stand at Fort Gregg', blurb: 'A few hundred defenders hold a small earthen fort against Gibbon’s corps for nearly two hours, buying Lee the daylight to get away.', img: '/war-img/third-petersburg-fort-gregg.png' },
    { id: 'fall-and-flight', eyebrow: 'That night and after', title: 'The fall and the flight', blurb: 'Lee abandons Petersburg and Richmond, the capital burns, and the Army of Northern Virginia takes the road west toward Appomattox.', img: '/war-img/third-petersburg-fall-and-flight.png' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/third-petersburg/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function ThirdPetersburgPage() {
  return <BattleDossier data={DATA} />
}
