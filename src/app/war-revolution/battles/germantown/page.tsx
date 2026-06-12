'use client'

// BATTLE dossier (The Battle of Germantown, October 4, 1777), American Revolution.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates (fact + storytelling + newcomer-clarity + framing, parallel) →
// reconcile → revise. Sides: American (Continental blue) / British on the red
// rail, set via sideNames + sideColors from the rev skin vars; the win marker
// rides the British rail. Portrait honesty per the final: Sullivan's image is the
// speculative 1776 London print (no life portrait exists), the imagined-likeness
// caveat carried verbatim in his bio; Adam Stephen ships with NO image (img: '',
// no born-verified Stephen portrait exists — never risk a wrong likeness). The
// American captured figure is honest only as a range (~400–440).
// Image prefix rev-germantown-* (+ born-verified in-repo portrait reuses).
// Sources: audits/war-pipeline/rev-germantown-final.md (+ rev-germantown-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-germantown' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · 1777',
  title: 'Germantown',
  date: 'October 4, 1777',
  place: 'Germantown, Pennsylvania (now part of Philadelphia)',
  note: 'Three weeks after losing at Brandywine, and eight days after the British marched into his capital, Washington attacked. Four columns marched all night and hit Howe\'s unfortified camp at dawn, and for about an hour it was working: the British line at Mount Airy was driven in, and the attack pushed two miles into the village. Then a dense fog, a stone house full of redcoats, and the plan\'s own complexity unraveled it. The British won the field. The American army marched away convinced it had nearly won, and historians have argued ever since about how nearly right it was.',
  hero: { img: '/war-img/rev-germantown-hero.jpg', pal: ['#454739', '#6e7263', '#15160f'], credit: 'Xavier della Gatta · oil painting · 1782 · Museum of the American Revolution / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: '~3 hours of battle after a 14–16-mile all-night, four-column march (Henry Knox, the American artillery chief, timed it at "2 hours 40 minutes" by his watch)' },
    { label: 'Casualties', value: '~1,050–1,110 American (including ~400–440 captured) · ~520–535 British' },
    { label: 'Winner', value: 'Britain: the field, the village, and the capital stay British, but it was the defeat that read like a promise: a beaten army threw Howe\'s veterans out of their beds and nearly held the ground', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The main Continental Army', str: '~11,000 (≈8,000 Continentals + ≈3,000 militia)', cmd: 'Gen. George Washington', note: 'A beaten army on the attack: four separate columns (marching forces, each on its own road), a 14–16-mile night march, and orders to hit Howe\'s camp simultaneously at five in the morning with bayonets, with pieces of white paper in their hats so they could tell each other apart in the dark. It was the Trenton plan (Washington\'s dawn surprise attack of the winter before) scaled up nearly five times, with no way for the columns to signal each other.' },
    { side: 'c', tag: 'British', force: 'Howe\'s main camp at Germantown', str: 'about 9,000 engaged (some accounts put roughly 8,000 in camp; detachments had thinned it)', cmd: 'Gen. Sir William Howe', note: 'The conquerors of Philadelphia, camped in a line straddling the village, with Cornwallis and several battalions garrisoning the city behind them. Howe was so sure the beaten Americans would not attack that he built no entrenchments at all. At dawn on October 4 he rode toward the firing believing it was a raiding party.' },
  ],
  casualties: {
    union: 1080, csa: 527,
    unionLabel: 'American ~1,050–1,110',
    csaLabel: 'British ~520–535',
    footnote: 'American: ~152 killed, ~521 wounded (≈650–675 killed and wounded), plus roughly 400–440 captured or missing, a total around 1,050–1,110. The dead included Brig. Gen. Francis Nash; the captured included an entire regiment, the 9th Virginia. More than 50 of the killed, over a third of the American dead in the whole battle, fell at the Chew House alone. British: ~70 killed, ~448 wounded, ~14 missing, total ~520–535. Only about 24 were Hessians (the German troops in British service). The dead included Brig. Gen. James Agnew. The American captured figure is honest only as a range: about 400 in the standard count, 438 by the most detailed modern reckoning. British losses inside the Chew House itself were light by comparison, but no verified count survives.',
  },
  commanders: [
    { name: 'George Washington', role: 'Cmdr. in chief, American', side: 'u', img: '/war-img/rev-trenton-washington.jpg', bio: 'Commander of the Continental Army since June 1775, and by 1777 a general with a pattern: lose the set-piece battle, keep the army alive, then strike back the moment the enemy relaxed. Trenton and Princeton had followed the loss of New York; Germantown followed Brandywine by three weeks, but at four-column, 11,000-man scale. He spent the battle with the reserve on the Germantown Road, was present for the fateful decision at the Chew House, and took responsibility for the fog-wrecked result with Congress.' },
    { name: 'John Sullivan', role: 'Cmdr., right column, American', side: 'u', img: '/war-img/rev-longisland-sullivan.jpg', bio: <>A New Hampshire lawyer turned major general, captured at Long Island, exchanged, his flank turned at Brandywine three weeks before, and lately controversial enough that Congress had even moved to recall him. At Germantown he led the main column straight down the Germantown Road. His men stormed the British light-infantry camp at Mount Airy and pushed two miles into the village before their ammunition ran low and the line behind them came apart. <em>Image: a 1776 London print: an imagined likeness, since no portrait of Sullivan from life exists.</em></> },
    { name: 'Nathanael Greene', role: 'Cmdr., left column, American', side: 'u', img: '/war-img/rev-trenton-greene.jpg', bio: 'A Rhode Island ironmaster, raised Quaker, self-taught from military books, and Washington\'s most trusted subordinate (years later, the strategist who won back the South). At Germantown he commanded the biggest column, about two-thirds of the Continental infantry, on the longest road. A guide lost the way in the dark and he arrived about three-quarters of an hour late, fought hard around Luken\'s Mill, and covered the army\'s retreat when the day collapsed.' },
    { name: 'Anthony Wayne', role: 'Division cmdr., American', side: 'u', img: '/war-img/rev-brandywine-wayne.jpg', bio: 'A Pennsylvania tanner\'s son whose division had been bayoneted in the dark at Paoli two weeks earlier. At Germantown his men attacked through the fog wanting revenge, and British officers remembered hearing them say so. They drove the light infantry through Mount Airy and pushed deep into the village; then, in the fog, another American division fired into them from behind, and the advance that had been winning the battle fell apart.' },
    { name: 'Adam Stephen', role: 'Division cmdr., American', side: 'u', img: '', bio: 'A Scottish-born Virginia physician-soldier who had been Washington\'s second-in-command in the Virginia Regiment back in the 1750s, and by 1777 a major general with a prickly rivalry with his old chief. At Germantown his division drifted off its route in the fog, by most accounts toward the gunfire at the Chew House, and collided with Wayne\'s division. A court-martial afterward found him guilty of unofficerlike behavior in the retreat and of having been frequently intoxicated since in the service, and he was dismissed: the only Continental major general cashiered in the war. Lafayette got his division.' },
    { name: 'Henry Knox', role: 'Chief of artillery, American', side: 'u', img: '/war-img/rev-trenton-knox.jpg', bio: 'A Boston bookseller turned artillery chief, the man who had hauled the captured Ticonderoga guns overland to Boston. At Germantown he gave Washington the textbook advice that became the battle\'s most argued-over decision: that it was contrary to all military rule to leave a castle in one\'s rear. The army stopped to reduce the Chew House instead of bypassing it, and Knox\'s 3- and 6-pounder field guns (light cannon, named for the weight of ball they threw) bounced off the stone walls.' },
    { name: 'William Howe', role: 'Cmdr. in chief, British', side: 'c', img: '/war-img/rev-longisland-howe.jpg', bio: 'The British commander in chief in America, the man who had beaten Washington at Long Island and Brandywine and now held Philadelphia, and confident to the point of carelessness: his Germantown camp had no earthworks at all. Surprised at dawn, he rode forward believing it was a skirmish party and scolded his retreating light infantry until grapeshot in the trees around him proved otherwise. He rallied the line, counterattacked, and won; then, characteristically, pursued only a few miles.' },
    { name: 'Thomas Musgrave', role: 'Lt. col., 40th Foot, British', side: 'c', img: '/war-img/rev-germantown-musgrave.jpg', bio: 'A career officer commanding the 40th Regiment of Foot. As the American attack rolled over the forward camps, Musgrave threw about 120 men, six depleted companies, into Benjamin Chew\'s stone country house, barred the doors, shuttered the lower windows, and held it against artillery and repeated infantry assaults for the rest of the battle. It was a superb piece of soldiering, and it made him famous: the regiment\'s colonel later struck a medal honoring the defense. He died a full general in 1812.' },
  ],
  outcome: {
    verdict: 'British victory · the attack that mattered anyway',
    text: 'Howe repulsed the attack, kept Germantown and Philadelphia, and pursued only a few miles. But the army that lost came out of the battle feeling like winners: they had surprised the conquerors of their capital and watched redcoats run, and most of them blamed the fog and a stone house, not the enemy. The alliance with France came that winter because of Saratoga (the British surrender in upstate New York two weeks after Germantown); but historians since the nineteenth century have credited the sheer audacity of Germantown, a beaten, year-old army assaulting Howe\'s veterans three weeks after losing its capital, with deepening the impression that the Americans would not quit.',
  },
  sections: [
    { id: 'white-paper-in-their-hats', eyebrow: 'The audacity', title: 'White paper in their hats', blurb: 'Three weeks after Brandywine, eight days after his capital fell, Washington attacked. Four columns, four roads, a 14–16-mile night march, and orders to hit a veteran army simultaneously at five in the morning: the Trenton plan, scaled up nearly five times, with no way for the columns to talk to each other.' },
    { id: 'a-castle-in-the-rear', eyebrow: 'The fog', title: 'A castle in the rear', blurb: 'The British line at Mount Airy broke and ran, and for about an hour the attack was winning. Then the fog swallowed the columns, about 120 redcoats barricaded themselves in a stone house the artillery could not dent, and somewhere in the smoke two American divisions opened fire on each other.' },
    { id: 'a-glorious-day', eyebrow: 'What it meant', title: '"A Glorious day"', blurb: 'A defeat the army walked away from feeling like winners, a major general cashiered, a stone house that still stands with the battle\'s scars on its doors, and the famous quote about Germantown impressing France that the supposed speaker never actually said.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/germantown/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function GermantownPage() {
  return <BattleDossier data={DATA} />
}
