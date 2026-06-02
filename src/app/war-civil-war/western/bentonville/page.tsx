'use client'

// BATTLE dossier (Battle of Bentonville) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content via the war content pipeline
// (audits/war-content-pipeline.md). The war’s last full battle (Mar 19–21, 1865).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-bentonville' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Bentonville',
  date: 'March 19–21, 1865',
  place: 'Bentonville, North Carolina',
  hero: {
    img: '/war-img/bentonville-hero.jpg',
    pal: ['#2a3320', '#232a1c', '#08060a'],
    // "U.S. Army at Bentonville, March 19" — Harper’s Weekly wood engraving from a William Waud sketch, Apr 15, 1865; public domain
    credit: 'U.S. Army at Bentonville, March 19 · Harper’s Weekly / William Waud · public domain',
  },
  stats: [
    { label: 'Duration', value: '3 days' },
    { label: 'Casualties', value: '~4,100' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Armies of Georgia & the Tennessee', str: '~60,000 troops', cmd: 'Sherman (Slocum & Howard)', note: 'Marching in two wings a day apart, one wing caught alone.' },
    { side: 'c', tag: 'Confederacy', force: 'Scraped-together command', str: '~20,000 troops', cmd: 'Gen. Joseph E. Johnston', note: 'The last fragments of the West, concentrated for one last attack.' },
  ],
  casualties: { union: 1527, csa: 2606 },
  commanders: [
    { name: 'William T. Sherman', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/sherman.jpg', bio: 'Marching for Goldsboro at the head of two wings a full day’s march apart, Sherman was so sure the campaign was over that he dismissed warnings of trouble and rode with the wrong wing while Johnston struck the other. He recovered fast, brought up his whole army the next day, and chose not to bleed it against entrenched men with the war all but won, a caution he later regretted when he called Mower off.' },
    { name: 'Henry W. Slocum', role: 'Left Wing, Union', side: 'u', img: '/war-img/cmdr/slocum.jpg', bio: 'Slocum’s Army of Georgia was the wing caught alone on the Goldsboro Road and hit by Johnston’s whole army on March 19. He was slow to believe he faced more than cavalry, but once the blow fell he steadied his line on high ground at the Morris farm and held it through the afternoon until the attacks broke against his massed guns.' },
    { name: 'Oliver O. Howard', role: 'Right Wing, Union', side: 'u', img: '/war-img/cmdr/howard.jpg', bio: 'Howard commanded the Army of the Tennessee, the wing marching a road away when the fighting began. He swung it north through March 20 and brought it onto the field beside Slocum by midday, turning a near-even fight into the three-to-one margin that ended any Confederate hope.' },
    { name: 'Joseph A. Mower', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/mower.jpg', bio: 'On March 21 Mower asked leave for a reconnaissance and instead drove two brigades straight at the weak Confederate left, overrunning Johnston’s headquarters and rolling to within about a mile of the Mill Creek bridge, the army’s only escape route. He was thrown back by Hardee’s counterattack and then recalled by Sherman, who later admitted the order let Johnston’s army slip away.' },
    { name: 'Joseph E. Johnston', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/je-johnston.jpg', bio: 'Recalled by Lee in February 1865, Johnston gathered the broken fragments of the western Confederacy and concentrated them for one surprise blow against a single isolated Union wing. He nearly succeeded on the first day, lingered two more days he could not afford, slipped his army away across Mill Creek by night, and a month later surrendered the largest force of the war at Bennett Place.' },
    { name: 'William J. Hardee', role: 'Corps, CSA', side: 'c', img: '/war-img/cmdr/hardee.jpg', bio: 'Hardee led the March 19 assault that shattered Carlin’s division and nearly rolled up the Union left, then on March 21 threw together the scratch counterattack that stopped Mower and saved the Mill Creek bridge. The same charge killed his sixteen-year-old son Willie, whom he had let enlist only hours before.' },
    { name: 'Robert F. Hoke', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/hoke.jpg', bio: 'Hoke’s division formed much of the weight of the first day’s attack, driving the Union Fourteenth Corps back through the woods at Cole’s farm. On March 20 his men were pulled back to anchor Johnston’s bending flank as Sherman’s whole army crowded onto the field.' },
    { name: 'Braxton Bragg', role: 'Wing, CSA', side: 'c', img: '/war-img/cmdr/bragg.jpg', bio: 'Bragg held nominal command of part of Johnston’s line, including Hoke’s division, in one of his last field roles of the war. His sector saw hard fighting on the first day before the Confederate effort spent itself against the Union artillery on the high ground.' },
  ],
  outcome: {
    verdict: 'Union victory · the Confederacy’s last attack',
    text: 'Johnston concentrated the broken remnant of the western Confederacy and caught one wing of Sherman’s divided column alone, nearly breaking it on the first day. But the wing held, the rest of Sherman’s army arrived to outnumber him three to one, and after a near-disaster when Mower drove for his only bridge, Johnston slipped away across Mill Creek by night. It was the largest battle ever fought in North Carolina and the last full Confederate offensive of the war. Within weeks Petersburg fell, Lee surrendered at Appomattox, and Johnston gave up the largest force of the war at Bennett Place.',
  },
  sections: [
    { id: 'last-throw', eyebrow: 'The last roll of the dice', title: 'The Last Throw', blurb: 'Sherman runs loose in the Carolinas; Lee recalls Johnston (South) to scrape an army together and catch one wing alone.', img: '/war-img/cmdr/je-johnston.jpg' },
    { id: 'cole-farm', eyebrow: 'Day one', title: 'The Attack at Cole’s Farm', blurb: 'Johnston springs the trap on March 19; Carlin’s (North) division breaks, and Morgan’s (North) stand saves the wing.', img: '/war-img/cmdr/hardee.jpg' },
    { id: 'whole-army-arrives', eyebrow: 'Day two', title: 'Sherman’s Whole Army Comes Up', blurb: 'Howard’s (North) wing arrives, the odds go to three-to-one, and Johnston (South) lingers a day he cannot afford.', img: '/war-img/cmdr/sherman.jpg' },
    { id: 'mowers-charge', eyebrow: 'Day three', title: 'Mower’s Charge', blurb: 'Mower (North) drives for the Mill Creek bridge and Johnston’s headquarters; Hardee (South) stops him, and Hardee’s son dies in the charge.', img: '/war-img/cmdr/mower.jpg' },
    { id: 'reckoning', eyebrow: 'The cost & the meaning', title: 'The End in Sight', blurb: '~4,100 fall. Days later Petersburg and Richmond fall, Lee surrenders, and Johnston gives up at Bennett Place.', img: '/war-img/cmdr/grant.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/bentonville/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function BentonvillePage() {
  return <BattleDossier data={DATA} />
}
