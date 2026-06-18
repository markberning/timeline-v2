'use client'

// BATTLE dossier (The Battles of Saratoga, 1777), American Revolution — the
// flagship XL battle of the vertical: TWO battles (Freeman's Farm, Sept 19 +
// Bemis Heights, Oct 7) plus the surrender (Oct 17), told as one squeeze. Thin
// data wrapper over the shared <BattleDossier>. Content produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates (fact + storytelling + newcomer-clarity + framing, parallel) →
// reconcile → revise. Sides: American on the rev US rail / Burgoyne's army on
// the British (red) rail; the win marker rides the American side. Legend
// control per the final: Arnold NOT staged on the field Sept 19; the Oct 7
// ride at evidence level; McCrea's killer genuinely unknown. Portrait honesty:
// Fraser's image is catalogued only as POSSIBLY Fraser — the caveat is
// mandatory and travels in his bio (no certain life portrait exists). The
// casualty bar carries the campaign's real arithmetic: ~450–500 American
// against the whole British army lost (~1,200 in the two battles + nearly
// 6,000 surrendered); the per-battle splits live in the footnote as ranges.
// Hero + card = the burial of General Fraser (LOC print, landscape); the
// Trumbull surrender stays inline in section 3 (the two-armies spine chapter
// owns it as a hero). Image prefix rev-saratoga-* (incl. born-verified
// in-repo portrait reuses copied to the prefix).
// Sources: audits/war-pipeline/rev-saratoga-final.md (+ rev-saratoga-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-saratoga' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'The Turning Point · 1777',
  title: 'Saratoga',
  date: 'September 19 & October 7, 1777 · surrender October 17',
  place: 'Stillwater & Saratoga (now Schuylerville), New York',
  note: 'The hinge of the war. The British invasion army that had taken Ticonderoga in July came down the Hudson into ground a Polish engineer had picked, fought two battles in the same woods eighteen days apart, and surrendered whole: nearly 6,000 men. The news brought France into the war.',
  hero: { img: '/war-img/rev-saratoga-hero.jpg', pal: ['#3e3a32', '#6a6354', '#16140f'], credit: 'after John Graham · print · Library of Congress / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH & GERMAN' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'Sept 19 – Oct 17, 1777 · two battles eighteen days apart, then the surrender ten days after the second' },
    { label: 'Casualties', value: 'Freeman\'s Farm ~600 British/German to ~300 American · Bemis Heights ~600+ to ~150 · surrendered Oct 17: nearly 6,000' },
    { label: 'Winner', value: 'United States: decisive American victory; the surrender that brought France into the war', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The Northern army', str: '~8,500 on Sept 19, rising to ~15,000+ ringing Burgoyne by mid-October', cmd: 'Maj. Gen. Horatio Gates', note: 'An army that grew all autumn: Continentals dug in on Bemis Heights behind Kościuszko\'s entrenchments, Morgan\'s ~500 riflemen owning the woods, and militia pouring in daily after Bennington and the Jane McCrea storm.' },
    { side: 'c', tag: 'British & German', force: 'Burgoyne\'s invasion army', str: '~7,200 crossed the Hudson in mid-September; ~5,000 battle-ready by Oct 7', cmd: 'Lt. Gen. John Burgoyne', note: 'Half British regulars and half hired Brunswickers under Riedesel, on a wilderness supply line short of carts and horses and nearly blind in the woods after its Native scouts went home; it crossed the Hudson on a bridge of boats and deliberately cut its line back to Ticonderoga.' },
  ],
  casualties: {
    union: 475, csa: 7050,
    unionLabel: 'American ~450–500',
    csaLabel: 'British & German ~1,200 in the battles + nearly 6,000 surrendered',
    footnote: 'American: about 300 at Freeman\'s Farm and about 130 to 150 at Bemis Heights, roughly 450 to 500 for the campaign. British/German: about 600 at Freeman\'s Farm (the 62nd Foot reduced to company strength), 600 and more on Oct 7 including Breymann dead and six of ten guns lost. The number that mattered came ten days later: nearly 6,000 men (period returns 5,791 to 5,895) marched into captivity on October 17, with more than two dozen guns and about 5,000 stand of small arms.',
  },
  commanders: [
    { name: 'Horatio Gates', role: 'Cmdr., Northern Department, American', side: 'u', img: '/war-img/rev-saratoga-gates.jpg', bio: 'English-born professional soldier, a former British Army major who was wounded carrying Braddock\'s doomed column to the Monongahela in 1755, then settled in Virginia and threw in with the Revolution. A superb organizer and a favorite of Congress, cautious by doctrine: dig in, let the enemy bleed. He took over the Northern Department from Philip Schuyler on August 19, 1777, a month before Freeman\'s Farm, inheriting an army that Bennington and the militia surge were already swelling. Saratoga made him "the hero of Saratoga"; Camden, in 1780, unmade him.' },
    { name: 'Benedict Arnold', role: 'Cmdr., left wing, American', side: 'u', img: '/war-img/rev-saratoga-arnold.jpg', bio: 'Connecticut apothecary-merchant turned the most aggressive battlefield general the Revolution had: co-captor of Ticonderoga in 1775, leader of the starving march on Quebec where his left leg took a ball, builder of the Valcour Island fleet that bought 1776\'s survival. At Saratoga he was the fighting half of a feuding command, stripped of his role after Freeman\'s Farm. On October 7 he rode onto the field anyway and took a second ball in the same left leg storming the Breymann redoubt. Three years later he sold West Point; that story belongs to another chapter of this war.' },
    { name: 'Daniel Morgan', role: 'Cmdr., rifle corps, American', side: 'u', img: '/war-img/rev-saratoga-morgan.jpg', bio: 'Virginia frontier teamster ("the Old Wagoner") who carried a grudge against the British Army said to date from a flogging in the French and Indian War. He led riflemen to Quebec, was captured and exchanged, then got command of the roughly 500-man rifle corps Washington sent north in August 1777. His riflemen, carrying long rifles with no bayonets and officer-killing accuracy, opened both Saratoga battles and blinded Burgoyne all campaign. His own masterpiece came later, at Cowpens in 1781.' },
    { name: 'Tadeusz Kościuszko', role: 'Chief engineer, American', side: 'u', img: '/war-img/rev-saratoga-kosciuszko.jpg', bio: 'Polish military engineer, trained in Warsaw and Paris, who sailed for America in 1776 and was commissioned a colonel of engineers that October. In September 1777 he picked and fortified the ground that decided the campaign: Bemis Heights, a bluff where the road to Albany squeezed between the hills and the Hudson. Gates later told Benjamin Rush that the campaign\'s "great tacticians" were "hills and forests, which a young Polish engineer was skillful enough to select for my encampment." He went on to fortify West Point, and to lead Poland\'s 1794 uprising.' },
    { name: 'John Burgoyne', role: 'Cmdr., invasion army, British', side: 'c', img: '/war-img/rev-saratoga-burgoyne.jpg', bio: '"Gentleman Johnny": playwright, member of Parliament, gambler, and a genuinely humane officer by the standards of the age (his men liked him; he disliked the lash). He made his name leading cavalry in Portugal in 1762, then sold London his own plan: an army from Canada down the lakes to Albany, splitting New England from the rest. He executed it with style and fatal optimism. After the surrender he went home on parole, defended himself in Parliament, never commanded again, and went back to writing plays.' },
    { name: 'Simon Fraser', role: 'Cmdr., Advanced Corps, British', side: 'c', img: '/war-img/rev-saratoga-fraser.jpg', bio: <>Scottish professional, the best soldier in Burgoyne&apos;s army: a veteran of Louisbourg and the Plains of Abraham, commander of the elite Advanced Corps in 1777. He won Hubbardton, talked Burgoyne out of punishing Jane McCrea&apos;s accused killer to keep the Native alliance, and anchored every advance. On October 7 he was rallying the collapsing reconnaissance on horseback when a rifle ball went through his stomach; he died the next morning, and was buried at sunset inside the Great Redoubt while American guns fired. <em>Image: a 1790 canvas catalogued only as &quot;possibly&quot; Simon Fraser of Balnain; no certain life portrait of Fraser exists.</em></> },
    { name: 'Friedrich Adolf Riedesel', role: 'Cmdr., German division', side: 'c', img: '/war-img/rev-saratoga-riedesel.jpg', bio: 'Baron and major general commanding the roughly 4,000 Brunswick troops Britain hired for the campaign, about half of Burgoyne\'s army. A solid, unlucky professional: his flank attack saved Burgoyne\'s center from collapse at Freeman\'s Farm, and his advice to retreat while there was still time was overruled twice. Captured with the army, he spent years as a prisoner-celebrity of the Convention Army. His wife Frederika, who followed the campaign with their three small daughters, kept the journal that became its best eyewitness account.' },
  ],
  outcome: {
    verdict: 'Decisive American victory · the surrender that brought France into the war',
    text: 'A whole British field army surrendered intact: nearly 6,000 men grounded arms by the Hudson on October 17, all that remained of the force that had left Canada in June. Historians have ranked Saratoga among the most decisive battles in world history, and the reason is what happened next: the news reached Paris in six weeks, and within two months France had decided to recognize the United States and fight Britain openly. The treaties signed in February 1778 turned a colonial rebellion into a world war, which is what made Yorktown possible.',
  },
  sections: [
    { id: 'the-squeeze', eyebrow: 'The squeeze', title: 'No going back', blurb: 'After Ticonderoga, the crawl: a wilderness supply line, a disaster at Bennington, the murder of Jane McCrea exploding into propaganda, and the Native scouts going home. Then Burgoyne crossed the Hudson on a bridge of boats and deliberately cut his own line of retreat, while ahead of him a Polish engineer fortified the one place the road to Albany could be stopped.' },
    { id: 'the-two-battles', eyebrow: 'The two battles', title: 'Two battles in the same woods', blurb: 'Morgan\'s riflemen empty the first clearing of officers; a seesaw afternoon leaves Burgoyne holding a field that cost twice what it paid. Then a poisoned month, a feud at headquarters, and the reconnaissance of October 7 that collapsed in an hour, with a general who had no command leading the charge that broke the line.' },
    { id: 'the-convention', eyebrow: 'The surrender', title: 'The Convention', blurb: 'A retreat in cold rain, a trap that closed at Saratoga, and a negotiating coup: Burgoyne refused to sign a "capitulation," and the army that marched into captivity was promised a ride home it never got. A boot on a monument with no name on it, and news that crossed an ocean and brought France into the war.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/saratoga/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function SaratogaPage() {
  return <BattleDossier data={DATA} />
}
