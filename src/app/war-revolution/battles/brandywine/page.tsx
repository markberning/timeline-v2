'use client'

// BATTLE dossier (The Battle of Brandywine, September 11, 1777), American Revolution.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates (fact + storytelling + newcomer-clarity + framing, parallel) →
// reconcile → revise. Sides are war-aware: American (Continental blue) /
// British–German on the British red rail (Howe's army included Hessian troops,
// German soldiers in British service), set via sideNames + sideColors from the
// rev skin vars; the win marker rides the British rail. Portrait honesty per the
// final: Sullivan's image is the speculative 1776 London print (no life portrait
// exists), the imagined-likeness caveat carried verbatim in his bio. American
// casualties are honest ranges only: no official return was ever issued.
// Image prefix rev-brandywine-* (+ born-verified in-repo portrait reuses).
// Sources: audits/war-pipeline/rev-brandywine-final.md (+ rev-brandywine-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-brandywine' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · 1777',
  title: 'Brandywine',
  date: 'September 11, 1777',
  place: 'Chadds Ford, Pennsylvania',
  note: 'By most counts the largest single-day battle of the war. Howe\'s six-week sea move landed his army barely closer to Philadelphia than when it started, and then he beat Washington the same way he had won at Long Island the year before: fake an attack in front, march the real force around the end of the enemy line. He took the field and, fifteen days later, the rebel capital; the army he needed to destroy marched away intact.',
  hero: { img: '/war-img/rev-brandywine-hero.jpg', pal: ['#3b352a', '#6e5638', '#15110c'], credit: 'F. C. Yohn · photomechanical print · 1898 · Library of Congress / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH–GERMAN' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: '~11 hours of contact, the decisive fighting ~4 (the hill at Birmingham changed hands for roughly 1.5 to 1.75 of them)' },
    { label: 'Casualties', value: '~1,100–1,300 American (no official return) · ~580–600 British–German' },
    { label: 'Winner', value: 'Britain: the field and the road to Philadelphia; the American army escapes to fight again', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The main Continental Army', str: '~14,600 (Continentals + militia; perhaps ~11,000 effectives actually engaged)', cmd: 'Gen. George Washington', note: 'Washington put the army behind Brandywine Creek, the last good defensive line covering the roads to Philadelphia, and set guards on every ford (shallow crossing place) he knew about. His maps were poor, he had been in this country only days, and the two fords above the forks of the creek went unguarded.' },
    { side: 'c', tag: 'British–German', force: 'Howe\'s Philadelphia expedition', str: '~15,500 engaged (~8,400 with Cornwallis, ~6,800 with Knyphausen)', cmd: 'Gen. Sir William Howe', note: 'A six-week sea move to the Chesapeake, then the Long Island play run again: Knyphausen\'s column demonstrating at Chadds Ford to look like the whole army while Cornwallis and Howe swung some fifteen to seventeen miles around the unguarded American right, guided by local Loyalists.' },
  ],
  casualties: {
    union: 1200, csa: 590,
    unionLabel: 'American ~1,100–1,300',
    csaLabel: 'British–German ~580–600',
    footnote: 'American: NO official return was ever issued; every figure is an estimate. Best ranges: ~200–300 killed, ~500–750 wounded, ~350–400 captured, total ~1,100–1,300 (Greene himself estimated 1,200–1,300; Howe claimed ~300 killed, 600 wounded, ~400 prisoners). Eleven of fourteen American guns lost. British–German: official return 587 (93 killed, 488 wounded, 6 missing), call it around 580–600; only about 40 of them Hessians (the German troops in British service). Some modern scholars suspect the return modestly undercounts; American claims of ~2,000 were distant-observation guesses.',
  },
  commanders: [
    { name: 'George Washington', role: 'Cmdr. in chief, American', side: 'u', img: '/war-img/rev-trenton-washington.jpg', bio: 'Forty-five years old and fresh off the winter triumphs at Trenton and Princeton, Washington chose to stand and fight for the capital rather than give it up unfought. At Brandywine he read the battlefield wrong, with bad maps, a creek he had known for only days, and scouting reports that cancelled each other out, and Howe turned his flank exactly as at Long Island. His redemption was the evening: the army he had built came off the field intact and in order, and he had it attacking again within four weeks.' },
    { name: 'John Sullivan', role: 'Cmdr., right wing, American', side: 'u', img: '/war-img/rev-longisland-sullivan.jpg', bio: <>A New Hampshire lawyer turned general, captured at Long Island, exchanged, and controversial ever after. At Brandywine his division anchored the upstream fords; when the flank attack materialized he took overall command of the three right-wing divisions, and his own division, caught still marching into line, was routed. Congress demanded an inquiry into his conduct. Washington kept him, and he was cleared. <em>Image: a 1776 London print: an imagined likeness, since no portrait of Sullivan from life exists.</em></> },
    { name: 'Nathanael Greene', role: 'Division cmdr., American', side: 'u', img: '/war-img/rev-trenton-greene.jpg', bio: 'A Rhode Island Quaker (a member of the pacifist Society of Friends) turned soldier and Washington\'s best subordinate. He held the center reserve behind Chadds Ford; when the right wing collapsed he force-marched his division roughly four miles at a run and, with Weedon\'s Virginians, made the stand south of Dilworth that held the British pursuit for nearly an hour at dusk and let the army get out. Years later he would be the strategist who won back the South.' },
    { name: 'Marquis de Lafayette', role: 'Volunteer maj. gen., American', side: 'u', img: '/war-img/rev-brandywine-lafayette.jpg', bio: 'A nineteen-year-old French aristocrat who had landed in America barely two months earlier, holding an honorary major general\'s commission for all of six weeks. Brandywine was his first battle. He rode into the collapsing line at Birmingham to rally it, took a musket ball through the left calf, and stayed in the fight until loss of blood forced him out. The wound, and Washington\'s care afterward, sealed one of the war\'s famous bonds.' },
    { name: 'Anthony Wayne', role: 'Division cmdr., American', side: 'u', img: '/war-img/rev-brandywine-wayne.jpg', bio: 'A Pennsylvania tanner\'s son and the brigadier commanding the division at Chadds Ford, fighting in sight of his own home county. He held the center against Knyphausen\'s bombardment all day and was broken only when the Hessians (German troops in British service) finally stormed the ford in the afternoon chaos. Nine nights later his division was bayoneted in its camp near Paoli; a court-martial he demanded cleared him "with the highest honor."' },
    { name: 'William Howe', role: 'Cmdr. in chief, British', side: 'c', img: '/war-img/rev-longisland-howe.jpg', bio: 'British commander in chief in America, a bold tactician with a habit of winning battles and not wars. He conceived the six-week sea move to the Chesapeake and the long flank march, and brought both off almost without a misstep, while leaving Burgoyne\'s northern army to its fate at Saratoga. Brandywine was arguably his masterpiece; the decision not to pursue at nightfall, and the trade of a city for an army still in the field, were its limits.' },
    { name: 'Charles, Lord Cornwallis', role: 'Cmdr., flanking column, British', side: 'c', img: '/war-img/rev-longisland-cornwallis.jpg', bio: 'Howe\'s hard-driving subordinate and the commander of the flanking column: some 8,400 elite troops, a circuit of fifteen to seventeen miles, two unguarded fords, and a parade-ground assault off Osborne\'s Hill that broke three American divisions. The same officer would chase Greene across the Carolinas and surrender at Yorktown four years later. It was Cornwallis who led the column that marched into Philadelphia on September 26.' },
    { name: 'Wilhelm von Knyphausen', role: 'Cmdr., pinning column, Hessian', side: 'c', img: '/war-img/rev-brandywine-knyphausen.jpg', bio: 'A sixty-year-old veteran Hessian lieutenant general (the Hessians were German troops in British service) commanding the pinning column at Chadds Ford. His job was theater: about 6,800 men making themselves look like Howe\'s whole army through six hours of skirmishing and cannon fire, then a real assault across the ford once Cornwallis\'s guns opened behind the American line. He played it almost perfectly. One of the most senior and respected German officers of the war.' },
  ],
  outcome: {
    verdict: 'British victory · the army escapes to fight again',
    text: 'Howe outflanked and beat Washington\'s main army in the open field and left the rebel capital unprotected; Philadelphia fell fifteen days later. But there was no pursuit at nightfall, the Continental Army got away intact and in surprisingly good spirits, and within a month it attacked Howe at Germantown. The same autumn, the northern British army Howe had sailed away from surrendered at Saratoga. Brandywine won a city, not the war.',
  },
  sections: [
    { id: 'a-wall-with-doors', eyebrow: 'The sea move and the creek', title: 'A wall with a handful of doors', blurb: 'Howe put his army on 260 ships and made a six-week sea move to land barely closer to Philadelphia than when he started. Washington picked the last good line in front of the capital, a creek an army could only cross at fords, and set a guard on every door he knew about. He did not know about all of them.' },
    { id: 'uncertain-and-contradictory', eyebrow: 'The battle', title: '"Uncertain and contradictory"', blurb: 'A morning of cannon fire at Chadds Ford that was only a show, a flank march of some fifteen to seventeen miles hidden by fog, scouting reports that cancelled each other out, and at two in the afternoon the British army standing behind the American right. Then the hardest fighting of the day, and a nineteen-year-old French volunteer with blood filling his boot.' },
    { id: 'masters-of-the-field', eyebrow: 'What it meant', title: 'Masters of the field', blurb: 'Congress fled, the bells left town, and the British marched into Philadelphia fifteen days after the battle. In between came a midnight bayonet attack Americans called a massacre. And the one thing Howe\'s masterpiece did not buy: the destruction of the army, which attacked him again within a month.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/brandywine/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function BrandywinePage() {
  return <BattleDossier data={DATA} />
}
