'use client'

// BATTLE dossier (Battle of Fort Blakeley) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content via the war content pipeline
// (audits/war-content-pipeline.md).
// FLAG: the old page displayed CSA casualties with the annotation "(mostly captured)" in
// the legend; BattleData.casualties only accepts integers. Using csa:2800. The
// "(mostly captured)" qualifier is lost in the conversion.

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-blakeley' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Fort Blakeley',
  date: 'April 9, 1865',
  place: 'Baldwin County, Alabama',
  hero: {
    img: '/war-img/fort-blakeley-hero.jpg',
    pal: ['#2a3a32', '#243028', '#08100a'],
  },
  stats: [
    { label: 'Date', value: 'Apr 9, 1865' },
    { label: 'Captured', value: '~2,800' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army at Fort Blakeley (XIII & XVI Corps)', str: '~16,000 in the assault', cmd: 'Canby; Steele on the ground', note: 'Two corps and 5,000 Black soldiers against a thinly held wall.' },
    { side: 'c', tag: 'Confederacy', force: 'Garrison of Fort Blakeley', str: '~4,000 troops', cmd: 'St. John R. Liddell', note: 'A three-mile line held by too few men, many of them boys.' },
  ],
  casualties: { union: 800, csa: 2800, unionLabel: 'Union ~800', csaLabel: 'Confederacy ~2,800 (mostly captured)' },
  commanders: [
    { name: 'Edward R. S. Canby', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/canby.jpg', bio: 'Ordered by Grant to take Mobile, Canby brought roughly 45,000 men up the eastern shore of Mobile Bay and reduced the forts one at a time, taking Spanish Fort first and then turning his whole weight on Blakeley. His patient siege and overwhelming numbers carried the last earthwork above the city in about half an hour on April 9, and Mobile surrendered three days later.' },
    { name: 'Frederick Steele', role: 'Column from Pensacola, Union', side: 'u', img: '/war-img/cmdr/steele.jpg', bio: 'Steele led the column that marched up from Pensacola, in Florida, setting out on March 20 and reaching Blakeley on April 1; Hawkins and his 5,000 Black soldiers came up as the lead element of that column. Once there, Steele directed the troops in the lines in front of Blakeley, pushing three successive rings of earthworks closer to the Confederate wall night after night until the foremost trenches sat within 1,000 yards of the works.' },
    { name: 'John P. Hawkins', role: 'USCT Div., Union', side: 'u', img: '/war-img/cmdr/hawkins.jpg', bio: 'Hawkins led the division of United States Colored Troops, three brigades of Black soldiers, on the Union right, thrown straight at the part of the line held by the Confederate Alabama reserves. His men crossed open ground sown with felled trees, sharpened stakes, and buried land mines under heavy fire, hacked through the obstacles, and were among the first over the wall.' },
    { name: 'St. John R. Liddell', role: 'Cmdr., garrison, CSA', side: 'c', img: '/war-img/cmdr/liddell.jpg', bio: 'Liddell commanded the roughly 4,000 men holding Fort Blakeley, a line nearly three miles long that he never had enough soldiers to defend properly. He held it through a week of siege, but when Canby stormed the works on April 9 the thin line gave way in about thirty minutes, and most of his garrison was captured.' },
    { name: 'Francis M. Cockrell', role: 'Brigades, CSA', side: 'c', img: '/war-img/cmdr/cockrell.jpg', bio: 'Cockrell led the toughest troops in the garrison, veteran Missouri and Mississippi soldiers who had fought from Pea Ridge through Vicksburg to the slaughter at Franklin, holding the center and left of the line. Their skill could not make up for the right of the line being held by untrained teenage reserves, and the position was overrun.' },
    { name: 'Dabney H. Maury', role: 'Cmdr., Mobile, CSA', side: 'c', img: '/war-img/cmdr/maury.jpg', bio: 'Maury commanded the overall defense of Mobile from across the bay, holding the city behind its ring of forts. With Spanish Fort and Blakeley both lost, he could not hold Mobile and pulled his remaining troops out rather than be trapped; the city surrendered on April 12.' },
  ],
  outcome: {
    verdict: 'Union victory · the war’s last major battle',
    text: 'Canby’s overwhelming numbers carried Fort Blakeley’s thinly held wall in about thirty minutes, capturing more than 2,800 Confederates and opening the road to Mobile, which surrendered three days later. It was the last combined-force battle of the Civil War and the last large charge of the war, fought just hours after Lee surrendered at Appomattox, though neither side at Blakeley knew it. The wall was carried in good part by 5,000 United States Colored Troops, Black soldiers helping take the last fort of a country built to keep them enslaved.',
  },
  sections: [
    { id: 'last-port', eyebrow: 'The last port', title: 'The Road to Mobile', blurb: 'Grant orders Mobile taken. Canby (North) lands on the eastern shore with 45,000 men, reducing the forts one at a time, while Steele (North) marches up from Pensacola with 5,000 Black soldiers.', img: '/war-img/cmdr/canby.jpg' },
    { id: 'the-siege', eyebrow: 'The earthwork', title: 'The Lines in the Pines', blurb: 'A three-mile wall studded with redoubts, abatis, and buried land mines, held by 4,000 men under Liddell (South), too few for the front.', img: '/war-img/fort-blakeley-siege.png' },
    { id: 'the-storm', eyebrow: 'The assault', title: 'Thirty Minutes', blurb: '16,000 Union troops storm the line at dusk on April 9; the wall falls in half an hour, and more than 2,800 Confederates are captured.', img: '/war-img/fort-blakeley-storm.png' },
    { id: 'the-end', eyebrow: 'The meaning', title: 'The Last Charge', blurb: 'The last major battle of the war, fought hours after Lee surrendered at Appomattox, carried in good part by the men the war was fought over.', img: '/war-img/cmdr/hawkins.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/western/fort-blakeley/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function FortBlakeleyPage() {
  return <BattleDossier data={DATA} />
}
