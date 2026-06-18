'use client'

// BATTLE dossier (The Battle of Princeton, January 3, 1777), American Revolution.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates (fact / story / clarity / framing) → reconcile → revise. Sides are
// war-aware: American (Continental blue) / British (redcoat red) via sideNames +
// sideColors from the rev skin vars. Commander bios are gated, born-verified
// prose; Mercer and Mawhood have no reliable/authentic portrait (img: '').
// Image prefix rev-princeton-*. Sources: audits/war-pipeline/rev-princeton-final.md.

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-princeton' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · 1777',
  title: 'Princeton',
  date: 'January 3, 1777',
  place: 'Princeton, New Jersey',
  note: 'Trapped against a creek by a British army, Washington left his campfires burning, marched around it in the dark, and at sunrise smashed the brigade it had left behind at Princeton, closing the ten days that turned the war around in the north.',
  hero: { img: '/war-img/rev-princeton-hero.jpg', pal: ['#3a3527', '#6a5a3a', '#141209'], credit: 'James Peale · oil painting · c. 1782 · Princeton University Art Museum / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: '~1 hour for the field action; an hour to ninety minutes in all, including the final surrender at the college building in town' },
    { label: 'Casualties', value: '~70–100 American · ~270–450 British (figures conflict; see casualties)' },
    { label: 'Winner', value: 'America, the capstone of the Ten Crucial Days, the name historians give December 25 to January 3: Trenton, the Assunpink stand, and Princeton', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'Washington\'s marching column', str: '~5,000 in the column (sources run 4,500–5,700), roughly 2,000–3,000 engaged in the morning fight', cmd: 'Gen. George Washington', note: 'An army whose Continentals had talked themselves into six more weeks for a $10 bounty; it marched all night on frozen back roads with gun wheels muffled in rags to appear behind the British army that had it trapped.' },
    { side: 'c', tag: 'British', force: 'The Princeton garrison', str: '~1,200: the 17th, 40th, and 55th Regiments of Foot, with dragoons and guns; about 700–800 engaged at the Clarke farm', cmd: 'Lt. Col. Charles Mawhood', note: 'Caught marching the wrong way at sunrise, Mawhood turned and went straight at the Americans; the 17th Foot\'s bayonet charge broke the first brigade it met before the field turned and Mawhood cut his way out.' },
  ],
  casualties: {
    union: 85, csa: 360,
    unionLabel: 'American ~70–100',
    csaLabel: 'British ~270–450',
    footnote: 'American: ~70–100 total; officer losses heavy for so short a fight: Brig. Gen. Hugh Mercer (died January 12), Col. John Haslet, and two captains. British: figures conflict, Howe\'s return admitted 18 killed, 58 wounded, ~200 missing; Washington claimed near 500 total; the firmest number is about 230–300 captured, including 194 who surrendered in Nassau Hall.',
  },
  commanders: [
    { name: 'George Washington', role: 'Cmdr. in chief, American', side: 'u', img: '/war-img/rev-princeton-washington.jpg', bio: 'A Virginia planter and a veteran of the French and Indian War (Britain\'s earlier war with France in America), given command of the Continental Army in 1775, Washington had lost New York by December 1776 and privately wrote "I think the game is pretty near up." Ten days later he had taken Trenton, slipped a trapped army around Cornwallis in the dark, and broken a British brigade at Princeton, steadying the shattered line in person, reining up between the firing lines. The ten days remade his reputation and are the foundation of his legend as a general.' },
    { name: 'Hugh Mercer', role: 'Brig. Gen., vanguard brigade, American', side: 'u', img: '', bio: 'A rebel against the Crown twice over: born in Aberdeenshire, Scotland, in 1726, an Aberdeen-trained physician who served the Jacobite army (the failed Scottish rising against the Crown) at Culloden in 1746 and fled to America the next year. He fought Pennsylvania\'s frontier war, then settled in Fredericksburg, Virginia, where he treated Washington\'s family and bought Washington\'s boyhood farm. At Princeton his 350-man brigade hit Mawhood first; unhorsed and surrounded, he refused to surrender and was bayoneted repeatedly. He died nine days later. No reliable life portrait of him exists.' },
    { name: 'John Cadwalader', role: 'Brig. Gen., Philadelphia Associators, American', side: 'u', img: '/war-img/rev-princeton-cadwalader.jpg', bio: 'A wealthy Philadelphia merchant who organized and led the city\'s volunteer Associators (its citizen militia), Cadwalader brought about 1,100 of them up behind Mercer\'s brigade at Princeton; they broke under fire, then reformed around Washington\'s rally and joined the counterattack. His sketch map of Princeton\'s defenses, drawn from a spy\'s report in late December, helped guide the back-road approach. In 1778 he fought a duel defending Washington\'s reputation against Gen. Thomas Conway, wounding him in the mouth.' },
    { name: 'Charles Mawhood', role: 'Cmdr. at Princeton, British', side: 'c', img: '', bio: 'A career officer, a cavalry cornet (the most junior cavalry officer\'s rank) in 1752 and lieutenant colonel of the 17th Foot from 1775, Mawhood was left holding Princeton with about 1,200 men and was marching two regiments out to join Cornwallis when Washington\'s column appeared at sunrise. He turned and fought: his 17th Foot\'s bayonet charge shattered Mercer\'s brigade, and when the field turned he cut his way out with another charge and saved most of his regiment. The dispatch of Gen. William Howe, the British commander in chief in America, praised the brigade\'s "Gallantry and good Conduct." He died at Gibraltar in 1780. No authentic portrait of him exists.' },
    { name: 'Charles, Earl Cornwallis', role: 'Lt. Gen., commanded the British drive on Trenton', side: 'c', img: '/war-img/rev-princeton-cornwallis.jpg', bio: 'An aristocrat who had voted in the House of Lords against taxing America, then fought the war energetically once it came, Cornwallis had his baggage aboard ship for England when Trenton canceled his leave. He marched about 5,500 men to crush Washington at the Assunpink on January 2, held off until morning, and woke to cannon fire twelve miles in his rear. He spent the rest of the war trying to catch Washington, and ended it surrendering to him at Yorktown.' },
  ],
  outcome: {
    verdict: 'American victory · the capstone of the Ten Crucial Days',
    text: 'In about an hour Washington\'s column broke Mawhood\'s brigade in the open fields, took some 230–300 prisoners, and was gone before Cornwallis could march back. With Trenton it punctured the aura of British invincibility, revived enlistments and militia turnout, and pushed the British commander in chief, Gen. William Howe, to pull his outposts back to a strip around New Brunswick and Perth Amboy, giving up most of New Jersey for the winter. The army wintered in the hills at Morristown, and the cause survived.',
  },
  sections: [
    { id: 'the-campfires-were-burning', eyebrow: 'The trap that wasn\'t', title: 'The campfires were burning', blurb: 'The British general Cornwallis reached Trenton at dusk with 5,500 men, failed three times at the Assunpink bridge, and decided to finish the job at daylight. Overnight, behind burning campfires and the noise of digging, the army he had trapped wrapped its gun wheels in rags and marched around him.' },
    { id: 'sunrise-at-the-orchard', eyebrow: 'The battle', title: 'Sunrise at the orchard', blurb: 'Two columns spotted each other across frozen fields at dawn. A bayonet charge broke Mercer\'s brigade and left Mercer dying in the orchard, and Washington rode out between the firing lines to drag the army back into the fight. It ended with cannon outside the college.' },
    { id: 'all-liberty-mad-again', eyebrow: 'Ten crucial days', title: 'All liberty mad again', blurb: 'In ten days a beaten, dissolving army won two battles and took back the initiative. Mercer died at the Clarke farmhouse, the army marched into the hills at Morristown, and the British gave up most of New Jersey for the winter.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/princeton/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function PrincetonPage() {
  return <BattleDossier data={DATA} />
}
