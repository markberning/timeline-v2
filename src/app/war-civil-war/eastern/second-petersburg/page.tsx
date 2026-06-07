'use client'

// BATTLE dossier (Second Battle of Petersburg) — REDESIGN. Thin data wrapper over the
// shared <BattleDossier> (new war skin, tabbed). Content produced through the war
// content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-petersburg2' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'The Second Battle of Petersburg',
  date: 'June 15–18, 1864',
  place: 'Petersburg, Virginia',
  hero: {
    img: '/war-img/second-petersburg-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
    credit: '',
  },
  stats: [
    { label: 'Duration', value: '4 days' },
    { label: 'Casualties', value: '~15,000' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Potomac + XVIII Corps', str: '~16,000 → ~67,000 troops', cmd: 'Grant, Meade & Smith', note: 'Stole a march on Lee and found the city open, then waited a night too long.' },
    { side: 'c', tag: 'Confederacy', force: 'Petersburg garrison / Army of Northern Virginia', str: '~2,200 → 20,000+ troops', cmd: 'Beauregard, then Lee', note: 'Held a nearly empty line by bluff until Lee finally came running.' },
  ],
  casualties: { union: 11000, csa: 3600, unionLabel: 'Union ~11,000+' },
  commanders: [
    { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'Grant conceived and executed the campaign’s masterstroke, slipping the whole Army of the Potomac out of its lines at Cold Harbor and across the James to reach Petersburg from the rear. When the assaults stalled and the city dug in, he ordered one last charge on June 18, watched it fail, then called off the attacks and settled in for the siege he had hoped to avoid.' },
    { name: 'George G. Meade', role: 'Army of the Potomac', side: 'u', img: '/war-img/cmdr/meade.jpg', bio: 'Meade commanded the Army of the Potomac under Grant and took direct charge of the assaults from June 16 onward. He pushed the June 18 attacks hard and saw them broken against the works, then conceded in his official report that he could not report more success and ordered the army to dig in.' },
    { name: 'William F. Smith', role: 'XVIII Corps, Union', side: 'u', img: '/war-img/cmdr/wf-smith.jpg', bio: 'Smith’s XVIII Corps struck first on June 15 and carried the eastern Dimmock Line, laying Petersburg open by nightfall. Then he chose to halt in the dark rather than push the last mile into the city, the hesitation that most accounts call the costliest missed chance of the campaign.' },
    { name: 'Winfield S. Hancock', role: 'II Corps, Union', side: 'u', img: '/war-img/cmdr/hancock.jpg', bio: 'Hancock’s II Corps arrived on the evening of June 15 with the fresh troops that could have finished the job, but his orders had miscarried and he never learned Petersburg was the objective until a message reached him from Smith. As the ranking officer he deferred to Smith’s decision to wait, then fought on through the 16th before his unhealed Gettysburg wound forced him to give up command.' },
    { name: 'Edward W. Hinks', role: 'USCT Div., Union', side: 'u', img: '/war-img/cmdr/hinks.jpg', bio: 'Hinks led the division of United States Colored Troops that spearheaded the June 15 advance, fighting through a roadblock at Baylor’s farm and then storming Batteries 6 through 11 of the Dimmock Line. His men, many of them formerly enslaved, took nearly a mile of the works that enslaved hands had been forced to build.' },
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'For most of the battle Lee did not believe Grant had crossed the James, and he held the Army of Northern Virginia north of the river while Petersburg nearly fell. Once his son confirmed where the Union army had gone, he rushed divisions south, and his lead troops reached the field by midday on June 18, in time to make the city unstormable and force Grant into a siege.' },
    { name: 'P.G.T. Beauregard', role: 'Petersburg, CSA', side: 'c', img: '/war-img/cmdr/beauregard.jpg', bio: 'Beauregard held Petersburg for four days with a fraction of Grant’s strength, beginning with about 2,200 men spread ten feet apart along the line. Trading ground for time, he pulled back to fresh entrenchments each night and bluffed the Federals into hesitating until Lee arrived, a defense generally reckoned his finest hour.' },
  ],
  outcome: {
    verdict: 'Confederate victory · the siege begins',
    text: 'Grant’s stolen march across the James was one of the great feats of the war, and on June 15 the formerly enslaved soldiers of Hinks’s division tore open the line that enslaved hands had been forced to build, laying Petersburg bare. Then the war-shortening chance died in the pause behind the firing line: Smith’s exhaustion, Hancock’s lost order, a night of waiting outside an empty city. By the time the assaults were forced home on June 18 the door had slammed shut, the 1st Maine was annihilated against the works, and Grant called off the charges. What began here was the longest siege of the war: nine and a half months, ending only at Appomattox.',
  },
  sections: [
    { id: 'the-stolen-march', eyebrow: 'Petersburg', title: 'The stolen march to the back door', blurb: 'After Cold Harbor, Grant slips the whole army across the James to seize the rail hub that feeds Richmond, while Lee looks the wrong way and Beauregard (South) holds an empty line by bluff.', img: '/war-img/second-petersburg-overview.png' },
    { id: 'the-open-door', eyebrow: 'June 15', title: 'The day the freedmen took the slaveholders’ wall', blurb: 'Hinks’s (North) USCT, many of them formerly enslaved, storm and carry the Dimmock Line that enslaved hands were forced to build. The cause of the war stands on the parapet, in blue.', img: '/war-img/second-petersburg-june-15.png' },
    { id: 'the-hesitation', eyebrow: 'June 15–16', title: 'The open door nobody walked through', blurb: 'Smith (North) stops at dark and Hancock (North), without orders, defers. Two corps stand outside an undefended city and wait for dawn, while Beauregard (South) digs in overnight.', img: '/war-img/cmdr/wf-smith.jpg' },
    { id: 'the-door-slams', eyebrow: 'June 17–18', title: 'The bloodiest minutes and the start of the siege', blurb: 'Piecemeal assaults fail, the 1st Maine (North) is annihilated, Lee finally arrives, and the open-field war gives way to a nine-and-a-half-month siege.', img: '/war-img/cmdr/grant.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/second-petersburg/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function SecondPetersburgPage() {
  return <BattleDossier data={DATA} />
}
