'use client'

// BATTLE dossier (Battle of Cold Harbor). Same shape as Shiloh/Antietam: hero · collapsible
// At-a-glance (stat strip + armies face-off + casualties) · outcome card · commanders strip ·
// numbered section list. Content via the war content pipeline (audits/war-content-pipeline.md).

import { BattleDossier, type BattleData } from '../../battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'east',
  crumbs: civilWarCrumbs({ theatre: 'east', battleId: 'e-coldharbor' }),
  backHref: '/war-civil-war/eastern',
  eyebrow: 'Battle · Eastern Theatre',
  title: 'Battle of Cold Harbor',
  date: 'May 31 – June 12, 1864',
  place: 'Hanover County, Virginia',
  hero: {
    img: '/war-img/cold-harbor-hero.jpg',
    pal: ['#2e2640', '#221c30', '#0a0810'],
  },
  stats: [
    { label: 'Duration', value: '12 days' },
    { label: 'Casualties', value: '~18,000' },
    { label: 'Winner', value: 'Confederacy', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Potomac (+ XVIII Corps)', str: '~108,000–117,000 troops', cmd: 'Grant & Meade', note: 'Charged seven miles of finished trench on June 3 and was thrown back, bloodily, for nothing.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Northern Virginia', str: '~59,000–62,000 troops', cmd: 'Lee', note: 'Given a free day to dig, it turned the ground into a fort and broke the assault.' },
  ],
  casualties: { union: 12738, csa: 5287, unionLabel: 'Union ~12,738', csaLabel: 'Confederacy ~5,287' },
  commanders: [
    { name: 'Ulysses S. Grant', role: 'General-in-chief', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'Riding with the Army of the Potomac as general-in-chief of all United States armies, Grant ordered the June 3 dawn assault on Lee’s finished works in the belief the Confederate line could be broken. It failed in about an hour, and he called it off around noon; years later he wrote that he had always regretted ordering the last assault at Cold Harbor.' },
    { name: 'George G. Meade', role: 'Army of the Potomac', side: 'u', img: '/war-img/cmdr/meade.jpg', bio: 'As commander of the Army of the Potomac, Meade passed Grant’s order down the line and set three corps charging west from Old Cold Harbor on June 3. He thought the attack against entrenched infantry was close to suicidal but did not press the objection on Grant.' },
    { name: 'Winfield Scott Hancock', role: 'II Corps, Union', side: 'u', img: '/war-img/cmdr/hancock.jpg', bio: 'Hancock’s II Corps held the southern end of the assault and drove clean through Breckinridge’s front, the only real lodgment won inside the Confederate works that morning. A counterattack threw his men back out with heavy loss, and the one breakthrough of the day was gone in minutes.' },
    { name: 'Horatio G. Wright', role: 'VI Corps, Union', side: 'u', img: '/war-img/cmdr/wright.jpg', bio: 'Wright’s VI Corps attacked in the center on June 3, advanced a short distance into heavy fire, and bogged down well short of the trench. Rather than feed his men into the works he had them stop and dig in.' },
    { name: 'William F. “Baldy” Smith', role: 'XVIII Corps, Union', side: 'u', img: '/war-img/cmdr/wf-smith.jpg', bio: 'Smith’s XVIII Corps, on loan from the Army of the James, charged on the northern flank and was funneled into ravines swept by fire from the sides, the deadliest sector of the field. He thought the order suicidal and afterward called it an order to slaughter his best troops.' },
    { name: 'Robert E. Lee', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/lee.jpg', bio: 'Lee used the day Grant gave him on June 2 to have the Army of Northern Virginia dig some seven miles of fieldworks, laid out so its sections could rake each other’s fronts. Behind that line his outnumbered army broke the June 3 assault and inflicted one of the most lopsided defeats of the war.' },
    { name: 'Richard H. Anderson', role: 'First Corps, CSA', side: 'c', img: '/war-img/cmdr/anderson.jpg', bio: 'Anderson commanded Lee’s First Corps, holding the center of the entrenched Confederate line on June 3. His sector, like most of the works, turned back the Union attack with little ground gained against it.' },
  ],
  outcome: {
    verdict: 'Confederate victory · the most criticized day of Grant’s career',
    text: 'The June 3 dawn assault failed utterly to break Lee’s seven miles of finished trench, and cost the Army of the Potomac its most one-sided beating since Fredericksburg: roughly 12,000 to 13,000 casualties across the twelve days against perhaps 4,500 to 5,300 Confederate, for, in Grant’s own words, no advantage whatever. The famous “7,000 in twenty minutes” is a myth, but the lopsidedness was real. And the very failure forced the move that won the war. Grant slipped the army across the James and swung on Petersburg, a siege spearheaded by United States Colored Troops that ended the Confederacy, and slavery with it.',
  },
  sections: [
    { id: 'the-crossroads', eyebrow: 'Cold Harbor · A harbor with no water', title: 'Why Two Armies Raced for a Virginia Tavern', blurb: 'Grant slides southeast one more time and both armies race for a crossroads on the doorstep of Richmond, the capital of a slaveholding republic Lee was sworn to shield.', img: '/war-img/cold-harbor-overview.png' },
    { id: 'the-trench', eyebrow: 'The works · Lee digs, Grant waits', title: 'How the Field Turned Into a Fort', blurb: 'A late II Corps postpones the attack a full day. Lee uses it to finish seven miles of fieldworks, dug in part by enslaved hands, while every hour the Federals wait makes June 3 deadlier.', img: '/war-img/cmdr/lee.jpg' },
    { id: 'the-assault', eyebrow: 'June 3 · The charge into the works', title: 'Sorting the Slaughter From the Legend', blurb: 'Three corps step off into the fog and the trench. Hancock (North) breaks through and is thrown out, Smith (North) is cut down in a fire-swept ravine, and the famous “7,000 in twenty minutes” turns out to be myth.', img: '/war-img/cold-harbor-june-3.png' },
    { id: 'between-the-lines', eyebrow: 'June 4–12 · The men left in front of the works', title: 'The First Taste of the War That Was Coming', blurb: 'A week of head-down trench stalemate foreshadows World War I. Out in no-man’s-land, the June 3 wounded die for days while Grant and Lee deadlock over a truce.', img: '/war-img/cmdr/grant.jpg' },
    { id: 'the-pivot', eyebrow: 'The reckoning · What the slaughter set up', title: 'Two Trenches, One War', blurb: 'Grant regrets the assault and the press calls him a butcher, yet the failure forces the James crossing and the Petersburg siege that United States Colored Troops would spearhead, ending the slave republic the trench was dug to defend.', img: '/war-img/cmdr/grant.jpg' },
  ],
  sectionHref: (id) => `/war-civil-war/eastern/cold-harbor/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function ColdHarborPage() {
  return <BattleDossier data={DATA} />
}
