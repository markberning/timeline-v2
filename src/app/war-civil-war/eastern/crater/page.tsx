'use client'

// BATTLE dossier (Battle of the Crater). Same shape as Antietam/Shiloh/Wilderness: hero ·
// collapsible At-a-glance (stat strip + armies face-off + casualties) · outcome card ·
// commanders strip · numbered section list. Content via the war content pipeline
// (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-crater' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'The Battle of the Crater',
  date: 'July 30, 1864',
  place: 'Petersburg, Virginia',
  hero: {
    img: '/war-img/crater-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
  },
  stats: [
    { label: 'Date', value: 'Jul 30' },
    { label: 'Casualties', value: '~5,300' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Potomac', str: '~8,500 engaged', cmd: 'Burnside’s IX Corps', note: 'Dug a tunnel under the war and blew a perfect breach, then poured into the hole instead of through it.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~6,100 engaged', cmd: 'Lee', note: 'Lost a fort in its sleep at dawn, then sealed the gap and turned the pit into a killing ground.' },
  ],
  casualties: { union: 3800, csa: 1500, unionLabel: 'Union ~3,800', csaLabel: 'Confederacy ~1,500' },
  commanders: [
    { name: 'Ambrose E. Burnside', role: 'IX Corps, Union', side: 'u', img: '/war-img/cmdr/burnside.jpg', bio: 'Burnside owned the sector and the mine plan, and meant to lead with his one trained division, the USCT, until Meade and Grant overruled him the day before. He was censured by the court of inquiry, relieved of his corps within weeks, and never held a field command again.' },
    { name: 'Edward Ferrero', role: 'USCT Div., Union', side: 'u', img: '/war-img/cmdr/ferrero.jpg', bio: 'Ferrero’s 4th Division of United States Colored Troops drilled the assault for two weeks, then was pulled from the lead the day before and fed in late, taking the heaviest losses on the field. Ferrero himself spent the battle in a bombproof behind the lines, by multiple accounts drinking, while his men died in the pit.' },
    { name: 'Henry Pleasants', role: '48th PA · the mine', side: 'u', img: '/war-img/cmdr/pleasants.jpg', bio: 'A mining engineer in civilian life, Pleasants designed and drove the 511-foot gallery his coal-miner regiment hand-dug under the Confederate salient, ventilating it with a hidden furnace. He had no part in the failed assault and was the one man praised for the day, brevetted brigadier general for the tunnel.' },
    { name: 'James H. Ledlie', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/ledlie.jpg', bio: 'Ledlie’s untrained 1st Division drew the lead by lot and poured into the crater instead of around it, drowning the attack at the bottom of a 30-foot pit. Ledlie spent the battle a mile back in a bombproof, drinking, and resigned his commission in disgrace early in 1865.' },
    { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'Grant backed Meade’s order pulling the Black division from the lead, fearing the army would be blamed if they were slaughtered going in first. He called the Crater the saddest affair he had witnessed in the war, and an opportunity for carrying fortifications he never expected to see again.' },
    { name: 'George G. Meade', role: 'Army of the Potomac', side: 'u', img: '/war-img/cmdr/meade.jpg', bio: 'Meade commanded the Army of the Potomac and ordered Burnside, the day before the assault, not to lead with the trained USCT division. A Joint Committee of Congress later laid much of the blame on him for reversing the plan and forcing the change.' },
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'Lee lost a stretch of his Petersburg line in an instant when the mine blew at dawn, killing some 300 of his men where they slept. His army sealed the breach within the hour and held, and the siege he was defending lasted eight more months.' },
    { name: 'William Mahone', role: 'Counterattack, CSA', side: 'c', img: '/war-img/cmdr/mahone.jpg', bio: 'Mahone brought up the brigades that sealed the gap and ringed the crater, turning the pit into what he called a turkey shoot. He also appears to have tried to stop the killing of surrendering Black soldiers, with several accounts crediting him with saving prisoners his men were murdering.' },
  ],
  outcome: {
    verdict: 'Confederate victory · a breakthrough thrown into a hole',
    text: 'The Union mine worked perfectly: four tons of powder blew a clean breach in Lee’s line at dawn, nearly undefended for the crucial first quarter-hour. Then the army threw it away. The untrained division that drew the lead by lot poured into the crater instead of around it and drowned at the bottom of a 30-foot pit while Mahone sealed the gap. The Union lost roughly two and a half times what the Confederates did, the heaviest share falling on the USCT division pulled from the lead the day before, and when the line broke, surrendering Black soldiers were murdered. The siege ground on eight more months. Petersburg did not fall until April 1865.',
  },
  sections: [
    { id: 'the-mine', eyebrow: 'Petersburg', title: 'A Tunnel Under the War', blurb: 'A stalled siege drives men underground; the 48th Pennsylvania (North) hand-digs a 511-foot gallery under Elliott’s Salient (South) and packs it with four tons of powder.', img: '/war-img/crater-overview.png' },
    { id: 'pulled-from-the-lead', eyebrow: 'The night before', title: 'The Division Trained, Then Taken Out', blurb: 'Ferrero’s (North) USCT drill the attack for two weeks; the day before, Meade (North) and Grant pull them from the lead over optics, and a straw hands it to Ledlie’s (North) untrained men.', img: '/war-img/cmdr/ferrero.jpg' },
    { id: 'the-pit', eyebrow: 'Dawn, July 30', title: 'The Hole the Assault Drowned In', blurb: 'The mine blows a clean breach; Ledlie’s (North) men pour into the crater instead of around it, and Mahone (South) seals the gap and rings the pit.', img: '/war-img/crater-the-assault.png' },
    { id: 'the-massacre', eyebrow: 'The crater rim', title: 'Murdered After Surrender', blurb: 'The USCT take the heaviest losses on the field, and surrendering and wounded Black soldiers are killed, confirmed by Confederate witnesses, not Northern accusation.', img: '/war-img/cmdr/mahone.jpg' },
    { id: 'what-it-meant', eyebrow: 'The reckoning', title: 'A Breakthrough Thrown Into a Hole', blurb: 'A 2.5-to-1 loss, a wasted breach, a court of inquiry, and the engineer of the mine the one man praised. Petersburg holds eight more months.', img: '/war-img/cmdr/burnside.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/crater/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function CraterPage() {
  return <BattleDossier data={DATA} />
}
