'use client'

// BATTLE dossier (The Battle of Long Island, August 27, 1776), American Revolution.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates (fact + story + clarity + framing) → reconcile → revise. Sides are
// war-aware: American (Continental blue) / British (redcoat red) via sideNames +
// sideColors from the rev skin vars; the win marker rides the British rail
// (decisive British victory). Portrait-honesty flags per the final: Stirling has
// NO authentic life portrait (1905 posthumous engraving, flagged in his bio);
// Sullivan (1776 Hart print) and Howe (1777 mezzotint) are from the speculative
// London print series; Putnam is an 1864 lithograph, not a life portrait; Grant
// is a 19th-century NYPL print after John Kay (the Kay caricature avoided);
// Clinton (Smart 1777) and Cornwallis (Gainsborough 1783) are authentic. The hero
// doubles as the battles-array card (the planned second Chappel proved to be the
// same composition). Image prefix rev-longisland-*.
// Sources: audits/war-pipeline/rev-long-island-final.md (+ rev-long-island-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-long-island' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · 1776',
  title: 'Long Island',
  date: 'August 27, 1776',
  place: 'Brooklyn, New York (then rural Kings County, on the western end of Long Island)',
  note: 'The biggest battle of the war was lost in a morning to a night march around an unguarded pass, and the beaten army escaped by water two nights later without losing a man in the crossing.',
  hero: { img: '/war-img/rev-longisland-hero.jpg', pal: ['#3a332a', '#5b4733', '#14110c'], credit: 'Alonzo Chappel · oil painting · 1858 · Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'Dawn to early afternoon, Aug 27 (full operation Aug 22–30, landing to evacuation)' },
    { label: 'Casualties', value: '~370–400 British/Hessian (hired German) · ~1,000–2,000 American' },
    { label: 'Winner', value: 'Britain', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The Brooklyn defenses', str: '~9,000–10,000 on Long Island; only ~3,000–4,000 on the forward ridge', cmd: 'Gen. George Washington (Maj. Gen. Israel Putnam commanding on Long Island)', note: 'A mostly raw army of new Continentals (regulars of the new national army) and militia (part-time citizen soldiers), split between Manhattan and Brooklyn because Washington could not tell where the blow would land, holding a wooded ridge whose easternmost pass was watched by five mounted officers. The forward line was destroyed; the army behind it escaped across the East River two nights later.' },
    { side: 'c', tag: 'British', force: 'The invasion army', str: '~20,000 landed on Long Island (of ~32,000 in the theatre)', cmd: 'Gen. William Howe', note: 'British regulars (career professional soldiers) and hired German (Hessian) professionals, landed from the largest expeditionary force Britain had ever sent abroad. Ten thousand of them marched all night around the American left through the unguarded Jamaica Pass and appeared behind the forward line at breakfast.' },
  ],
  casualties: {
    union: 1500, csa: 385,
    unionLabel: 'American ~1,000–2,000',
    csaLabel: 'British/Hessian ~370–400',
    footnote: 'British/Hessian: ~370–400 total (~63–69 killed, ~290–293 wounded, ~30 missing). American: roughly 200–300 killed, ~650–800 wounded, and ~870–1,100+ captured, including Generals Sullivan and Stirling; total ~1,000–2,000 by various counts, never tallied cleanly as many "missing" later straggled in.',
  },
  commanders: [
    { name: 'George Washington', role: 'Commander-in-chief, American', side: 'u', img: '/war-img/rev-longisland-washington.jpg', bio: 'The Virginia planter and French and Indian War veteran (the previous war, fought against France) had just driven the British from Boston without a major battle; Long Island was his first full-scale battlefield test commanding the army, and he was outgeneraled, caught with his force split and his left flank open. He redeemed the defeat with the decision his reputation rests on as much as any victory: the silent night evacuation of some 9,000 men that saved the army, and the Revolution, to fight on.' },
    { name: 'Israel Putnam', role: 'Cmdr. on Long Island, American', side: 'u', img: '/war-img/rev-longisland-putnam.jpg', bio: '"Old Put," the Connecticut farmer whose French and Indian War exploits and Bunker Hill fame made him a folk hero, took over the Long Island defenses on August 24, three days before the battle, on ground he barely knew. The forward line was his to watch; the Jamaica Pass, his open back door, was covered by five mounted officers. His field reputation never fully recovered.' },
    { name: 'William Alexander, Lord Stirling', role: 'Cmdr. of the right, American', side: 'u', img: '/war-img/rev-longisland-stirling.jpg', bio: <>A wealthy New Jersey gentleman who claimed a Scottish earldom (the House of Lords refused it; the Americans used the title anyway), Stirling stood up to Grant&apos;s diversion all morning in parade-ground style, then led roughly 270 Marylanders in repeated charges against Cornwallis to cover his trapped command&apos;s escape. Refusing to hand his sword to the British, he surrendered to the Hessian commander von Heister. Exchanged (swapped for a British prisoner), he served until his death in 1783. <em>Image: a 1905 engraving. No authentic life portrait of Stirling is known; this is a later imagined likeness.</em></> },
    { name: 'John Sullivan', role: 'Cmdr. of the forward center, American', side: 'u', img: '/war-img/rev-longisland-sullivan.jpg', bio: 'A New Hampshire lawyer and son of Irish immigrants, just back from the collapse of the American invasion of Canada, Sullivan held the wooded ridge at Battle Pass, until 10,000 British troops appeared behind him. Captured in the rout, he was paroled (released on his word not to fight until formally swapped) to Philadelphia carrying Lord Howe\'s peace feeler; John Adams sneered that he was a "decoy duck." Exchanged that fall, he fought on through the war and later governed New Hampshire.' },
    { name: 'William Howe', role: 'Cmdr.-in-chief in America, British', side: 'c', img: '/war-img/rev-longisland-howe.jpg', bio: 'A combat legend since Quebec in 1759 (he led the daring climb to the heights above the city) and the man who paid for Bunker Hill\'s frontal assaults, Howe executed the war\'s most elegant flanking victory (an attack swung around the side of the enemy line rather than into its front) at Brooklyn, then halted before the American works rather than storm them, choosing siege spades over bayonets. With his brother Admiral Lord Richard Howe he was also a peace commissioner, conqueror and negotiator in one. Critics tied the halt to Bunker Hill ever after, and never forgave it.' },
    { name: 'Henry Clinton', role: 'Author of the flanking plan, British', side: 'c', img: '/war-img/rev-longisland-clinton.jpg', bio: 'Raised partly in New York, where his father had been royal governor, Clinton knew the ground and pressed the idea Howe adopted: a night march around the unguarded Jamaica Pass. He led the lead column himself. Prickly, brilliant on paper, and forever at odds with Howe, he would succeed him as commander-in-chief in 1778, and preside over the war\'s loss.' },
    { name: 'Charles, Lord Cornwallis', role: 'Lt. Gen., flanking column, British', side: 'c', img: '/war-img/rev-longisland-cornwallis.jpg', bio: 'An aristocrat who had voted against taxing America in the House of Lords, then crossed the Atlantic to fight her, Cornwallis seized the Gowanus Road at the Old Stone House and stood at the point where the Maryland charges broke. He urged storming the Brooklyn lines; Howe refused. Five years later he handed his army over at Yorktown, the surrender that effectively ended the war, then rebuilt his career governing India.' },
    { name: 'James Grant', role: 'Maj. Gen., the diversion, British', side: 'c', img: '/war-img/rev-longisland-grant.jpg', bio: 'A Scottish veteran captured at Fort Duquesne in 1758 and later governor of East Florida, Grant told the House of Commons in 1775 that with 5,000 regulars he could march from one end of America to the other. At Brooklyn he led almost exactly 5,000, under orders only to pin Stirling\'s line, which he did all morning while the real blow landed behind it. Americans loathed him; his name made the fight personal.' },
  ],
  outcome: {
    verdict: 'Decisive British victory · the army escapes to fight on',
    text: 'Howe\'s night march around the Jamaica Pass destroyed the American forward line and took a thousand or more prisoners, the war\'s biggest battle won in a morning. But Howe halted in front of the Brooklyn fortifications, and two nights later Washington\'s army slipped across the East River in boats, in the dark and then in fog, without losing a man in the crossing. New York fell and stayed British for seven years; the army survived, and with it the war.',
  },
  sections: [
    { id: 'all-london-afloat', eyebrow: 'The armada', title: 'All London afloat', blurb: 'Boston falls, both sides race to New York, and the largest force Britain had ever sent abroad fills the harbor. The Americans fortify a wooded ridge with four ways through it, and watch the fourth with five men on horses.' },
    { id: 'the-night-march', eyebrow: 'The trap', title: 'The night march', blurb: 'Ten thousand men walk all night around the American left, two signal guns fire at nine, and the forward line collapses in a morning. At a stone farmhouse on the Gowanus Road, about 270 Marylanders charge again and again to buy the rest of their command time to escape.' },
    { id: 'the-escape-in-the-fog', eyebrow: 'The escape', title: 'The escape in the fog', blurb: 'Two days trapped against the East River in a cold rain, then one improbable night: fishermen rowing an entire army across a mile of tidal water, a fog that lingered past sunrise, and empty trenches at dawn. The army survived, and with it the war.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/long-island/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function LongIslandPage() {
  return <BattleDossier data={DATA} />
}
