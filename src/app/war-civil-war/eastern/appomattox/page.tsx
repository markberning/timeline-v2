'use client'

// BATTLE dossier (Appomattox Court House). Same shape as Antietam/Gettysburg:
// hero · collapsible At-a-glance (stat strip + armies face-off + casualties bar) ·
// commanders strip · outcome pill · numbered section list. Content produced
// through the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-appomattox' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Appomattox Court House',
  date: 'April 9, 1865',
  place: 'Appomattox County, Virginia',
  hero: {
    img: '/war-img/appomattox-hero.jpg',
    pal: ['#2c2418', '#3f3322', '#0d0a06'],
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Surrendered', value: '~28k' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Armies of the Potomac & the James', str: '~63,000 troops', cmd: 'Lt. Gen. Ulysses S. Grant', note: 'Ran Lee’s army to ground and got infantry across the road west by a thirty-mile forced march.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~26,000 troops', cmd: 'Gen. Robert E. Lee', note: 'Starving and surrounded, made one last dawn attack to reopen the road, then surrendered.' },
  ],
  casualties: { union: 152, csa: 500 },
  commanders: [
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'With Petersburg fallen and his army starving, Lee ran west hoping to reach North Carolina, only to find Union infantry across the road at Appomattox after a last dawn attack failed. Rather than spend his men in a hopeless fight, he rode to the McLean house and surrendered the Army of Northern Virginia, ending four years of war in Virginia.' },
    { name: 'John B. Gordon', role: 'II Corps, CSA', side: 'c', img: '/war-img/cmdr/gordon.jpg', bio: 'Gordon led the Confederate dawn attack on April 9, breaking through Sheridan’s cavalry and briefly opening the road west before massed Union infantry appeared beyond the ridge. He sent Lee word that his command had been fought to a frazzle and could do nothing more, and three days later he answered Chamberlain’s salute as his men stacked their arms.' },
    { name: 'James Longstreet', role: 'I Corps, CSA', side: 'c', img: '/war-img/cmdr/longstreet.jpg', bio: 'Lee’s senior surviving corps commander held the rear of the trapped army against Grant’s closing forces while Gordon attacked in front. With the army surrounded on three sides, his line was the wall that kept the pursuit off Lee’s back during the final hours before the surrender.' },
    { name: 'Ulysses S. Grant', role: 'Gen.-in-Chief, U.S.', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'Grant broke the Petersburg line, then ran Lee down across ninety miles, throwing cavalry across the road west and pushing infantry to cut off every turn south. At the McLean house he wrote out terms that paroled the Confederates and let them keep their horses, and sent 25,000 rations to feed the army he had just beaten.' },
    { name: 'Philip H. Sheridan', role: 'Cavalry, U.S.', side: 'u', img: '/war-img/cmdr/sheridan.jpg', bio: 'Sheridan’s cavalry broke the line at Five Forks, then harried Lee’s flanks the whole retreat and helped trap a third of his army at Sailor’s Creek. By riding faster than the Confederates could march, his troopers got in front of the army at Appomattox and slammed the last road shut.' },
    { name: 'George A. Custer', role: 'Cavalry div., U.S.', side: 'u', img: '/war-img/cmdr/custer.jpg', bio: 'On April 8 Custer drove his cavalry division into Appomattox Station ahead of Lee’s infantry and seized the supply trains the starving Confederates were counting on, overrunning the reserve artillery and taking about two dozen guns in the bargain. Taking the food and the road put Sheridan’s horsemen in front of Lee’s army for the first time.' },
    { name: 'Joshua L. Chamberlain', role: 'Brigade, V Corps', side: 'u', img: '/war-img/cmdr/chamberlain.jpg', bio: 'The former college professor who had held the far left at Gettysburg was chosen to receive the formal surrender of the Confederate infantry on April 12. As the worn gray column came up to stack its arms, he ordered his men to the salute, a gesture Gordon answered in kind, which Chamberlain called honor answering honor.' },
  ],
  outcome: {
    verdict: 'Union victory · the surrender of the Army of Northern Virginia',
    text: 'Run to ground and surrounded after the fall of Petersburg, Lee made one last dawn attack to reopen the road west, found massed Union infantry across it, and surrendered to Grant in Wilmer McLean’s parlor that afternoon. The terms were generous: the men were paroled and sent home, officers kept their sidearms, horse-owners kept their horses, and Grant fed the beaten army with 25,000 rations. Other Confederate armies held out for weeks, but the surrender of the army that had been the heart of the rebellion was the effective end of the war, and with the Union preserved, slavery was finished too.',
  },
  sections: [
    { id: 'the-collapse', eyebrow: 'The lines break', title: 'The Lines Break', blurb: 'Five Forks cracks the flank, Petersburg and Richmond fall, and Lee runs west. Sailor’s Creek tears off a third of his starving army.', img: '/war-img/appomattox-race-west.png' },
    { id: 'last-march', eyebrow: 'The last march', title: 'The Last March', blurb: 'Custer (North) seizes the supply trains at Appomattox Station. Now Union cavalry is in front of Lee, not just behind. Letters pass between the lines.', img: '/war-img/appomattox-station.png' },
    { id: 'the-attack', eyebrow: 'The last attack', title: 'The Last Attack', blurb: 'Gordon’s dawn assault breaks the cavalry, crests the ridge, and finds a wall of Union infantry. The road west is shut. The guns go quiet.', img: '/war-img/appomattox-last-attack.png' },
    { id: 'surrender', eyebrow: 'The surrender', title: 'The Surrender', blurb: 'Lee and Grant meet in Wilmer McLean’s parlor. The terms, the rations, General Orders No. 9, and a final salute: honor answering honor.', img: '/war-img/appomattox-surrender.png' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/appomattox/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function AppomattoxPage() {
  return <BattleDossier data={DATA} />
}
