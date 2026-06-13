'use client'

// BATTLE dossier (The Siege of Savannah, 1779), American Revolution — the
// southern-turn opener of the vertical: the Franco-American siege of
// September–October 1779 and the October 9 grand assault on the Spring Hill
// redoubt. Thin data wrapper over the shared <BattleDossier>. Content produced
// through the war content pipeline (audits/war-content-pipeline.md): fact pack
// → author → critic gates (fact + storytelling + newcomer-clarity + framing,
// parallel) → reconcile → revise. Sides: Allied (French + American) on the rev
// US rail / the Savannah garrison on the British (red) rail; the win marker
// rides the British side. HANDLE-WITH-CARE framings per the final: the
// Chasseurs-Volontaires at the documented floor (the rear-guard stand is
// tradition/monument, not asserted fact); Pulaski's death hedged and the
// burial genuinely disputed; the 24-hour stall told as British competence, not
// perfidy. Portrait honesty: no life portrait of Pulaski exists — the
// posthumous-engraving caveat travels verbatim as the italic Image: tail of
// his bio. Laurens, Stedingk, Maitland, and Moncrief ship with NO image
// (img: '', no born-verified likeness flagged in the pack — never risk a wrong
// portrait). The casualty bar is honest only as a range: ~800 allied killed
// and wounded plus 100+ prisoners (ABT rounds the total to 948) against ~155
// British; Prevost's 1,000–1,200 is flagged in the footnote as the winner's
// inflation. Image prefix rev-savannah-* (all fresh downloads, no reuses).
// Sources: audits/war-pipeline/rev-savannah-final.md (+ rev-savannah-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-savannah' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'The Southern Turn · 1779',
  title: 'Savannah',
  date: 'September 16 – October 18, 1779 · grand assault October 9',
  place: 'Savannah, Georgia',
  note: 'The war went global in one harbor. A French battle fleet raced up from the Caribbean ahead of the hurricane season, landed the most diverse army of the whole war (French regulars, over 500 free men of color from the colony that is now Haiti, Continentals, militia, and a Polish general\'s international legion), and tried to take back a town Britain had captured almost for free the winter before. The British answer was a 24-hour stall: while their commander asked for a day to think it over, a relief column waded the coastal creeks and made the garrison defensible. The betrayed dawn assault that followed cost the attackers about five men for every defender, in under an hour, and locked in the southern strategy that took Charleston the next spring.',
  hero: { img: '/war-img/rev-savannah-hero.jpg', pal: ['#8f9a76', '#d3cdab', '#3c4230'], credit: 'Ozanne school · drawing/engraving · 1779 · Bibliothèque nationale de France (Gallica) / Wikimedia Commons · public domain' },
  sideNames: { u: 'ALLIED', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'A month of siege (September 16 – October 18) · the grand assault itself about one hour at dawn on October 9' },
    { label: 'Casualties', value: '~800 allied killed and wounded plus over 100 prisoners (the great majority French) · ~155 British (about 40 killed)' },
    { label: 'Winner', value: 'Britain: the allies lifted the siege and sailed; Savannah stayed British until July 1782, and Charleston fell the next spring', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'Allied', force: 'The Franco-American army', str: 'about 7,500 (roughly 4,000 French landed from the fleet, including ~545 Chasseurs-Volontaires de Saint-Domingue; about 2,000-plus Americans; Pulaski\'s legion of ~200 horse), with more than 20 French ships of the line offshore', cmd: 'Vice Adm. the comte d\'Estaing (French) and Maj. Gen. Benjamin Lincoln (American)', note: 'The most diverse army of the war, and a divided command in practice: the fleet, most of the troops, and the clock were all French. French line regiments drawn from the Caribbean garrisons, an Irish regiment in French service, over 500 free men of color and enslaved volunteers from Saint-Domingue (the French sugar colony that is now Haiti), South Carolina and Georgia Continentals and militia, and a Polish general\'s legion of European volunteers. It outnumbered the garrison better than two to one and was beaten anyway, partly because the hurricane clock forced every decision, partly because the one inside-water door the garrison needed was left unguarded between the French navy and the American army.' },
    { side: 'c', tag: 'British', force: 'The Savannah garrison', str: 'roughly 3,200 effectives, swelling toward 4,800 with armed sailors, militia, and armed Black auxiliaries, behind about 13 redoubts (small earthwork fortifications) and more than 100 guns', cmd: 'Maj. Gen. Augustine Prevost', note: 'A garrison that should have been too thin to hold and was not, because of two things bought in three weeks: a Royal Engineer\'s earthwork sprint dug by hundreds of enslaved laborers, and a relief column of about 800 men that Lieutenant Colonel John Maitland marched from Beaufort (a British-held port about 50 miles up the South Carolina coast, on Port Royal Island) through the coastal creeks during the truce. The defenders included both battalions of the 71st Highlanders, grenadiers, marines and sailors landed off the ships, Hessian regiments, and a roster of Loyalist provincial units: the southern Loyalists really did rally, exactly as London\'s strategy predicted, just never in the numbers promised.' },
  ],
  casualties: {
    union: 948, csa: 155,
    unionLabel: 'Allied ~800 killed & wounded + 100+ prisoners',
    csaLabel: 'British ~155 (about 40 killed)',
    footnote: 'Allied: around 244 killed, roughly 584 to 600 wounded, and about 120 captured or missing, a total near 950 by the rounded modern count, of which the French bore the bulk (roughly 650 of about 800 killed and wounded). Almost all of it fell in less than an hour at the Spring Hill redoubt; the dead and dying filled the ditch in front of the works before the second wave arrived. British: about 40 killed, 63 wounded, and 52 missing, roughly 155 in all; Captain Thomas Tawse, commanding the dismounted Loyalist dragoons in the redoubt itself, was among the dead. The allied figure is honest only as a range: about 800 killed and wounded plus over 100 prisoners is the consolidated modern count, the American Battlefield Trust rounds the total to 948, and Prevost\'s 1,000-to-1,200 is the winner\'s inflation. The Chasseurs-Volontaires\' own losses are not reliably itemized beyond the September 24 raid (one killed, seven wounded); no separate figure for October 9 survives.',
  },
  commanders: [
    { name: 'Charles Henri, comte d\'Estaing', role: 'Cmdr., the French fleet and army', side: 'u', img: '/war-img/rev-savannah-destaing.jpg', bio: 'An Auvergne nobleman who began in the army, was wounded and twice taken prisoner in India in the last war, then crossed to the navy and rose to vice admiral, to the grumbling of sailors who disliked serving under a converted general. His American debut had been a run of frustration: too late off New York in 1778, his Newport gamble wrecked by a storm. Then he won real prizes in the Caribbean, St. Vincent and Grenada, before the appeals from Charleston pulled him north to Georgia. At Savannah he was brave to a fault: he led the assault columns on foot and was shot twice. Fifteen years later he went to the guillotine in Paris, in April 1794, after testifying in defense of Marie Antoinette.' },
    { name: 'Benjamin Lincoln', role: 'Cmdr., the American southern army', side: 'u', img: '/war-img/rev-savannah-lincoln.jpg', bio: 'A Massachusetts farmer and militia officer made a Continental major general, who had helped pen Burgoyne at Saratoga, where a musket ball shattered his ankle. Sent south in 1778 to command the Southern Department, he spent 1779 trading blows with Prevost across the Georgia-Carolina line and was beaten at Stono Ferry in June. At Savannah he was the junior partner in everything but name: the fleet, most of the troops, and the deadline were French, and the summons that opened the siege was issued without him. Seven months later he surrendered Charleston and some 5,000 men, the worst American defeat of the war. At Yorktown, exchanged and restored, he received the British surrender as Washington\'s second-in-command.' },
    { name: 'Casimir Pulaski', role: 'Cmdr., the legion of horse', side: 'u', img: '/war-img/rev-savannah-pulaski.jpg', bio: <>A Polish nobleman who had fought Russia in the Bar Confederation uprising, was condemned in absentia over a plot to abduct Poland&apos;s king, and went into exile. Benjamin Franklin sent him to Washington as &quot;an officer famous throughout Europe for his bravery.&quot; At Brandywine his charge is credited with covering the army&apos;s retreat and helping save Washington from capture; Congress made him a brigadier and &quot;Commander of the Horse,&quot; and he built the Continental cavalry into a real arm, the &quot;father of the American cavalry,&quot; then raised his own legion of European volunteers. At Savannah, charging into the smoke between the redoubts, he was cut down by grapeshot, carried off the field, and died aboard ship about two days later. <em>Image: H.B. Hall&apos;s 1871 engraving. No portrait of Pulaski from life is known to exist; every image of him, including this one, is a posthumous or idealized likeness.</em></> },
    { name: 'John Laurens', role: 'Cmdr., the American light column', side: 'u', img: '', bio: 'A South Carolinian, Washington\'s aide, already wounded at Germantown and Monmouth, who led the American light troops and the 2nd South Carolina against the Spring Hill abatis, where roughly half his column fell. His own proposal to raise regiments of enslaved men in exchange for their freedom had been approved by Congress that same year and killed by South Carolina\'s legislature, a bitter resonance to carry into a battle fought beside over 500 free men of color from Saint-Domingue.' },
    { name: 'Curt von Stedingk', role: 'Cmdr., a French assault column', side: 'u', img: '', bio: 'A Swedish count serving in the French army, who led one of the columns to the top of the entrenchment and got an American flag planted on the last trench before the cross-fire cut his men down. He came back with about twenty men, all of them wounded, and called the retreat, with the cries of his dying comrades in his ears, the bitterest moment of his life. He lived to become a Swedish field marshal and ambassador to Russia.' },
    { name: 'Augustine Prevost', role: 'Cmdr., the garrison', side: 'c', img: '/war-img/rev-savannah-prevost.jpg', bio: 'A Geneva-born Swiss professional in the British 60th, the Royal American Regiment, badly wounded at Quebec in 1759. He commanded British East Florida, took over Georgia in early 1779, and raided to the gates of Charleston in May. At Savannah he played the one hand a thin garrison had: he asked for a day to think over the surrender summons, used every hour of it to get Maitland\'s column in and his engineer\'s crews digging, and then answered with defiance. He retired to England after the campaign.' },
    { name: 'John Maitland', role: 'Cmdr., the relief march and the British right', side: 'c', img: '', bio: 'A Scottish professional, son of the Earl of Lauderdale and lieutenant colonel of the 71st Highlanders, who had already beaten Lincoln at Stono Ferry in June. In September, sick with fever, he brought about 800 men roughly 50 miles from Beaufort through the coastal creeks and marshes in roughly four days, arriving inside the truce window and transforming a defensible position into a held one. He commanded the British right, the Spring Hill sector, on October 9. He died in Savannah on October 26, days after the siege lifted, of the fever he had carried through the march.' },
    { name: 'James Moncrief', role: 'Royal Engineer, the fortifications', side: 'c', img: '', bio: 'The Royal Engineer whose three-week earthwork sprint made the town defensible at all. Using 500 to 800 enslaved African Americans working up to twelve hours a day, he threw up a roughly 1,200-foot arc of main earthworks, redoubts, and gun batteries around the landward face, about 13 redoubts and 15 batteries by the day of the assault, and had HMS Rose scuttled (deliberately sunk) in the channel to block the French ships from coming upriver. Many British accounts make him, with Maitland, the real author of the victory.' },
  ],
  outcome: {
    verdict: 'British victory · the southern strategy\'s green light',
    text: 'The allies lifted the siege within days of the failed assault. D\'Estaing re-embarked his guns and his men, the fleet dispersed, and Lincoln marched back to Charleston. Franco-American relations hit their wartime low, the second straight joint operation after Newport to end in recrimination, and the recrimination ran both ways: the Americans resented being summoned to fight in France\'s name without their counsel, and the French resented an army they had supplied most of the blood to defend. The bruised alliance held, but barely. Sir Henry Clinton called the news "the greatest event that has happened the whole war," and acted on it: with the French fleet gone he sailed south himself in December, besieged Charleston, and took it in May 1780 along with Lincoln and some 5,000 men, the largest American surrender of the war. The full southern war (Camden, Kings Mountain, Cowpens, Guilford Courthouse, a civil war burning through the backcountry) followed from there. Savannah itself stayed British until July 1782.',
  },
  sections: [
    { id: 'the-fleet-and-the-clock', eyebrow: 'The southern turn', title: 'A fleet against a deadline', blurb: 'Britain bet the war could be won from the bottom up, in a South it believed was thick with Loyalists, and took Savannah almost for free the winter before. Then a French battle fleet appeared off Georgia, racing the hurricane season with sick crews and orders to sail home, and the most diverse army of the war came ashore to take the town back, on a clock that would force every decision that followed.' },
    { id: 'twenty-four-hours', eyebrow: 'The stall', title: 'Twenty-four hours', blurb: 'D\'Estaing summoned the town in the name of the King of France, and Prevost asked for a day to consider it. In that day the British dug, and a relief column waded the coastal creeks from Beaufort to make the garrison whole. When the siege guns finally spoke they smashed houses without denting the earthworks, and the clock left one play: a dawn storm of the Spring Hill redoubt. A deserter carried the plan across the lines.' },
    { id: 'spring-hill', eyebrow: 'What it meant', title: 'The hour at Spring Hill', blurb: 'Fog, a betrayed plan, the columns tangled in the swamp, and the attack dying on the abatis: Pulaski dead, Jasper mortally wounded with the colors, d\'Estaing twice hit, about five allied men down for every defender. The reserve covered the broken army\'s withdrawal, the fleet sailed, the South stayed British, and the men of Saint-Domingue went home to a revolution of their own.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/savannah/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function SavannahPage() {
  return <BattleDossier data={DATA} />
}
