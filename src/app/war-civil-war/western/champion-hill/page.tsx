'use client'

// BATTLE dossier (Battle of Champion Hill) — REDESIGN. Thin data wrapper over the shared
// <BattleDossier> (new war skin, tabbed). Content via the war content pipeline
// (audits/war-content-pipeline.md): fact pack → author → fact-check + storytelling critic → revise.

import { BattleDossier, type BattleData } from '../../../../components/mode/battle-dossier'
import { civilWarCrumbs } from '@/components/mode/theatre-page'

const DATA: BattleData = {
  theatre: 'west',
  crumbs: civilWarCrumbs({ theatre: 'west', battleId: 'w-championhill' }),
  backHref: '/war-civil-war/western',
  eyebrow: 'Battle · Western Theatre',
  title: 'Battle of Champion Hill',
  date: 'May 16, 1863',
  place: 'Hinds County, Mississippi',
  hero: {
    img: '/war-img/champion-hill-hero.jpg',
    pal: ['#3a2e21', '#2a221c', '#0a0806'],
  },
  stats: [
    { label: 'Duration', value: '1 day' },
    { label: 'Casualties', value: '~6,300' },
    { label: 'Winner', value: 'Union', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Union', force: 'Army of the Tennessee', str: '~32,000 troops', cmd: 'Grant', note: 'Bigger on paper, but two of three corps barely fought; the day was a near-even fight.' },
    { side: 'c', tag: 'Confederacy', force: 'Army of Mississippi', str: '~22,000–23,000 troops', cmd: 'Pemberton', note: 'Strung along a ridge under contradictory orders; lost the hill, the road, and a whole division.' },
  ],
  casualties: { union: 2457, csa: 3840, unionLabel: 'Union ~2,457', csaLabel: 'Confederacy ~3,840' },
  commanders: [
    { name: 'Ulysses S. Grant', role: 'Cmdr., Union', side: 'u', img: '/war-img/cmdr/grant.jpg', bio: 'Loose in the interior of Mississippi with his supply line cut, Grant reached the field around ten in the morning and aimed his blow at the exposed northern flank up the Jackson Road, where the road home ran. He won the day with barely half his army, two of his three corps hardly firing a shot, and broke Pemberton in the open before the siege of Vicksburg ever began.' },
    { name: 'James B. McPherson', role: 'XVII Corps, Union', side: 'u', img: '/war-img/cmdr/mcpherson.jpg', bio: 'McPherson commanded the XVII Corps and took tactical charge of the main attack, swinging Logan’s division up onto the right to turn Stevenson’s flank. His corps and Hovey’s lone division did almost all of the Union fighting on a day the other two corps stood nearly idle.' },
    { name: 'Alvin P. Hovey', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/hovey.jpg', bio: 'Hovey’s division led the climb up the Jackson Road and carried the bald crest around one o’clock, then was thrown back down it by Bowen’s counterattack before reserves restored the ground. His men paid the heaviest price of the day, and Hovey gave the place the name that stuck: the hill of death.' },
    { name: 'John A. Logan', role: 'Div., Union', side: 'u', img: '/war-img/cmdr/logan.jpg', bio: 'Logan’s division pushed up the northern line and helped break Stevenson’s left, then planted itself squarely across the Jackson Road. Without quite realizing it at the time, his men had blocked the Confederate army’s one direct road to its crossing over Baker’s Creek, which would cut off a whole enemy division by nightfall.' },
    { name: 'John C. Pemberton', role: 'Cmdr., CSA', side: 'c', img: '/war-img/cmdr/pemberton.jpg', bio: 'Caught between contradictory orders to hold Vicksburg and to strike Grant’s supply line, Pemberton marched his army into the open and strung it along the ridge at Champion Hill. He lost the crest, the crossroads, and his best road home, and fell back into Vicksburg a full division short to stand the siege that ended the campaign.' },
    { name: 'John S. Bowen', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/bowen.jpg', bio: 'Bowen led the finest division in Pemberton’s army, Missourians and Arkansans, in a savage counterattack that retook the crest and the crossroads and drove the Federals nearly to the Champion house. He had too few men to hold what he had won, and Grant’s fresh reserve took the ground back for good.' },
    { name: 'William W. Loring', role: 'Div., CSA', side: 'c', img: '/war-img/cmdr/loring.jpg', bio: 'Loring held the southern end of the line and refused Pemberton’s repeated orders to march north and shore up the collapsing left, then moved far too late to matter. Cut off from the last bridge in the retreat, he marched his whole division clear around the Union army to join Johnston, and never reached Vicksburg at all.' },
  ],
  outcome: {
    verdict: 'Decisive Union victory · the day that doomed Vicksburg',
    text: 'Grant beat Pemberton in the open in a near-even fight, landing his blow on the exposed Jackson-Road flank, carrying the seventy-five-foot crest by one o’clock, losing it to Bowen’s savage counterattack, and taking it back for good with his reserve. With his only good escape road cut, Pemberton fell back toward Vicksburg, and an entire Confederate division under Loring, unable to reach the last bridge, marched out of the war without a battle to show for it. The siege and the July 4 surrender followed within weeks. Champion Hill is the battle where the campaign to split the slaveholders’ republic in half was actually decided.',
  },
  sections: [
    { id: 'the-crossroads-hill', eyebrow: 'Champion Hill · The hinge', title: 'The Hill That Held the Road Home', blurb: 'Grant turns west toward Vicksburg; Pemberton (South) waits on a ridge covering three roads, and one bald crest commands them all.', img: '/war-img/champion-hill-overview.png' },
    { id: 'the-jackson-road', eyebrow: 'Champion Hill · The blow falls', title: 'Up the Jackson Road, Onto the Crest', blurb: 'Grant lands the blow on the exposed flank; Hovey (North) and Logan (North) carry the crest by one o’clock, and Hovey’s men call it the hill of death.', img: '/war-img/champion-hill.png' },
    { id: 'the-hill-changes-hands', eyebrow: 'Champion Hill · The counterattack', title: 'Bowen’s Charge and the Crest Retaken', blurb: 'Bowen (South) throws the South’s best division back up the slope and retakes the hill, until Grant’s reserve under Crocker (North) takes it for good.', img: '/war-img/cmdr/bowen.jpg' },
    { id: 'the-lost-division', eyebrow: 'Champion Hill · The doom of the city', title: 'Across Baker’s Creek, and the Division Lost Forever', blurb: 'Pemberton (South) escapes over one bridge, but Loring’s (South) whole division is cut off and marches out of the war, dooming Vicksburg.', img: '/war-img/champion-hill-retreat.png' },
  ],
  sectionHref: (id) => `/war-civil-war/western/champion-hill/s/${id}`,
  footer: { title: 'the American Civil War', sub: 'All battles & theatres', href: '/war-civil-war' },
}

export default function ChampionHillPage() {
  return <BattleDossier data={DATA} />
}
