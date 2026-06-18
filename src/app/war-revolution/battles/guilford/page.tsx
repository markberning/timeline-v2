'use client'

// BATTLE dossier (Battle of Guilford Courthouse, March 15, 1781), American
// Revolution, southern campaign — the pyrrhic victory: Cornwallis holds the
// field and empties his army doing it, then marches out of the Carolinas toward
// Virginia and Yorktown. Thin data wrapper over the shared <BattleDossier>.
// Content produced through the war content pipeline
// (audits/war-content-pipeline.md): fact pack → author → critic gates (fact +
// storytelling + newcomer-clarity + framing, parallel) → reconcile → revise.
// Sides: American on the rev US rail / Cornwallis's army on the British (red)
// rail; the win marker rides the British side (tactical British victory).
// HANDLE-WITH-CARE framings per the fact pack: the grapeshot episode written
// with the cannonade as fact and the deliberate-order narrative as Henry Lee's
// later memoir account (never "Cornwallis cold-bloodedly ordered his guns to
// fire on his own men"); the Fox quote attributed to Charles James Fox in the
// Commons AND flagged as a conscious echo of Plutarch's Pyrrhus, never a fresh
// Fox coinage; the British loss framed "about a quarter of the army"
// (~532 of ~2,100); Webster MORTALLY WOUNDED (died ~two weeks later), never
// "killed at Guilford"; the "lost my scabbard" line attributed to a sergeant's
// secondhand account; Tarleton's hand wound "costing him at least two fingers";
// the ~1,000 missing American militia explained as dispersal, not casualties.
// Image prefix rev-guilford-*. Greene/Cornwallis/Tarleton are born-verified
// in-repo reuses copied to the prefix; O'Hara ships the Gibraltar PD portrait;
// Webster ships with NO image (img: '', no born-verified likeness in the pack).
// Sources: audits/war-pipeline/rev-guilford-factpack.md.

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-guilford' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'The Pyrrhic Victory · 1781',
  title: 'Guilford Courthouse',
  date: 'March 15, 1781',
  place: 'Guilford Court House, present-day Greensboro, North Carolina',
  note: 'A British victory that won Cornwallis nothing he could keep. Three months after Cowpens cost him the fast quarter of his army, he chased Nathanael Greene 240 miles across the Carolina piedmont in winter, burned his own baggage to keep up, and finally caught Greene drawn up in three lines at the courthouse. He took the field. He took it at a cost of about a quarter of everyone he had left. Within six weeks he marched out of the Carolinas altogether toward Virginia, and toward Yorktown. Charles James Fox, echoing Plutarch\'s Pyrrhus, told the House of Commons: "Another such victory would ruin the British army."',
  hero: { img: '/war-img/rev-guilford-hero.jpg', pal: ['#6f7a55', '#d8cdae', '#3c3a2c'], credit: 'H. Charles McBarron Jr. · U.S. Army Center of Military History · 20th-century illustration · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'About an hour and a half of close fighting on the afternoon of March 15, 1781, fought through three American lines set in depth' },
    { label: 'Casualties', value: 'British about 93 killed, 413 wounded, 26 missing, roughly 532, about a quarter of the force, with the Guards battalions hit near 56% · American about 79 killed and some 185 wounded, plus about a thousand militia who dispersed rather than died, effective losses only around 6%' },
    { label: 'Winner', value: 'Britain held the field · but Cornwallis bled so deeply taking it that he abandoned the Carolinas within six weeks and marched for Virginia. Charles James Fox, echoing Plutarch\'s Pyrrhus, told the Commons: "Another such victory would ruin the British army."', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The Southern army', str: 'About 4,400 to 4,500, set in three lines (North Carolina militia, then Virginia militia, then Continentals)', cmd: 'Maj. Gen. Nathanael Greene', note: 'Greene built the field on Daniel Morgan\'s Cowpens blueprint: roughly 1,000 North Carolina militia (part-time citizen soldiers) behind a rail fence on the first line, about 1,200 Virginia militia in thick woods on the second, and some 1,400 Continentals (the full-time paid regulars of the Continental Army) waiting in a clearing on the third. Riflemen, Lee\'s Legion, and William Washington\'s dragoons (mounted soldiers) guarded the flanks. The militia were told to fire and fall back; the regulars were the army Greene could not afford to lose.' },
    { side: 'c', tag: 'British', force: 'Cornwallis\'s army', str: 'Roughly 1,900 to 2,100 effectives, ground down by Cowpens and a winter march and outnumbered better than two to one', cmd: 'Lt. Gen. Charles, Earl Cornwallis', note: 'The hard core of what remained after Cowpens and the Race to the Dan: the 23rd Foot (Royal Welch Fusiliers), 33rd Foot, 71st Highlanders, the Hessian Regiment von Bose (German soldiers in British service), the elite Brigade of Guards under O\'Hara, jägers and light infantry, Tarleton\'s British Legion cavalry in reserve, and three or four guns of the Royal Artillery. Every man had marched 240 miles light, with the baggage burned behind him, to force this fight.' },
  ],
  casualties: {
    union: 532, csa: 264,
    unionLabel: 'British ~532 killed, wounded & missing (about a quarter of the force)',
    csaLabel: 'American ~264 killed & wounded (plus ~1,000 militia dispersed)',
    footnote: 'The casualty bar is inverted from the field result on purpose: the larger bar is the smaller army. Cornwallis held the field, but his official return showed about 93 killed, 413 wounded, and 26 missing, roughly 532 of the 2,100 or so engaged, about a quarter of everyone he had, with the two Foot Guards battalions losing close to 56% and nearly all their officers. Greene\'s return showed about 79 killed and some 185 wounded, plus roughly 1,000 "missing," but most of those missing were North Carolina militia who fired their volleys and melted away toward home rather than men killed or captured; Greene\'s effective loss was only around 6%. A pension-record analysis suggests the killed-and-wounded counts on both sides may run 15 to 20% higher than the official returns. The disproportion is the whole point of the day: the winner bled four times as hard as the loser.',
  },
  commanders: [
    { name: 'Nathanael Greene', role: 'Cmdr., Southern Department, American', side: 'u', img: '/war-img/rev-guilford-greene.jpg', bio: 'A Rhode Island Quaker blacksmith who became Washington\'s most trusted general. He hated his years as quartermaster general and never stopped lobbying for a field command; Congress finally gave him the Southern Department in October 1780, after Camden, which was the choice Washington had wanted all along. He inherited a wrecked army of barely 1,500 fit men, divided it in the face of the enemy, watched Morgan win Cowpens with the smaller half, raced Cornwallis to the Dan and across it, and came back to fight at Guilford behind a plan built on what Morgan had proved. He lost this battle. He went on to win the war in the South, reducing the British posts one by one while Cornwallis marched away to Virginia.' },
    { name: 'Otho Holland Williams', role: 'Brig. Gen., Maryland Brigade, American', side: 'u', img: '', bio: 'A Maryland-born officer who had been at Camden, where his Marylanders were the last to break, and who now commanded the veteran Maryland Brigade of Continentals (the full-time paid regulars of the Continental Army) in Greene\'s third line. Steady, literate, and present at every hard fight in the South, he was one of the anchors of Greene\'s army. At Guilford his 1st Maryland delivered the sharpest Continental blow of the afternoon, stopping the elite British Guards cold and throwing them back with the bayonet. His later Narrative is a critical primary source for the Camden disaster.' },
    { name: 'William Washington', role: 'Lt. Col., Continental dragoons, American', side: 'u', img: '', bio: 'A distant cousin of the commander in chief and the best American cavalryman in the South, fresh from his charge at Cowpens. At Guilford he led the mounted reserve, and his dragoons rode twice through the rear of the British Guards at the crisis of the third-line fight, very nearly breaking the best infantry Cornwallis had. It was into that swirling melee of his horsemen, the Maryland Continentals, and the Guards all tangled together that the British guns are said to have fired.' },
    { name: 'Henry "Light Horse Harry" Lee', role: 'Lt. Col., Lee\'s Legion, American', side: 'u', img: '', bio: 'A dashing Virginian who commanded Lee\'s Legion, a mixed corps of cavalry and infantry, and screened Greene\'s rear through the whole Race to the Dan in daily skirmishes with Tarleton. At Guilford he held the American left, cut off a Hessian regiment\'s retreat into a separate small battle, and kept fighting long after the day was decided. His 1812 memoir, written about thirty years after the battle, is the source for the famous account of Cornwallis ordering grapeshot into his own men, and the reason that scene must be read as Lee\'s telling rather than settled fact. He was the father of Robert E. Lee.' },
    { name: 'Charles, Earl Cornwallis', role: 'Lt. Gen., commanding, British', side: 'c', img: '/war-img/rev-guilford-cornwallis.jpg', bio: 'The best British field commander in America. He had been beaten at Trenton and bruised at Cowpens, but he had taken Charleston and won Camden, and at 42 he had the will to march the core of his army 240 miles across the winter piedmont, burn his own baggage to do it, and attack a force more than twice his size. He did all of that and held the field at Guilford. Then he counted his dead, found he could not even pursue the army he had just beaten, and marched what was left to Wilmington and then north into Virginia, on the road that ended at Yorktown in October.' },
    { name: 'Charles O\'Hara', role: 'Brig. Gen., Brigade of Guards, British', side: 'c', img: '/war-img/rev-guilford-ohara.jpg', bio: 'Born in Lisbon, the illegitimate son of a baron, commissioned into the Coldstream Guards, and at Guilford the commander of the elite Brigade of Guards, the best troops Cornwallis had. He was severely wounded in the third-line fight, and his Guards lost more than half their number. He lived to surrender Cornwallis\'s sword at Yorktown, later governed Gibraltar, and rose to full general. The grim summary of the army\'s state on the march, "to follow Greene\'s army to the end of the World," is from his own letter, not Cornwallis\'s.' },
    { name: 'James Webster', role: 'Lt. Col., right wing, British', side: 'c', img: '', bio: 'The son of a Scottish minister and Cornwallis\'s most trusted subordinate, commanding the 23rd and 33rd Foot, two of the hardest-fighting battalions in the South. He had broken the Virginia militia at Camden and he led the British right at Guilford, driving the assault that carried through all three American lines. He was mortally wounded in that attack, hit in the knee and thigh, and died about two weeks later at Elizabethtown, North Carolina. Cornwallis\'s written tribute to him was the warmest praise he put on paper for any officer in the campaign, and a British sergeant recorded that on hearing of the death Cornwallis looked at his sword and said he had lost his scabbard.' },
    { name: 'Banastre Tarleton', role: 'Lt. Col., British Legion, British', side: 'c', img: '/war-img/rev-guilford-tarleton.jpg', bio: 'The cavalry commander whose corps had been destroyed at Cowpens and who rode at Guilford with what was left of the British Legion in reserve. Before dawn on March 15 his advance patrols ran into Lee\'s Legion at New Garden Meeting House, and he took a musket ball through his right hand that mangled it and cost him at least two fingers, his first documented wound of the war. The injury curtailed his part in the battle, though late in the day he charged to scatter Virginia riflemen. There was no devastating pursuit on the Cowpens model; Greene\'s army got away intact.' },
  ],
  outcome: {
    verdict: 'British tactical victory · strategic catastrophe',
    text: 'Cornwallis held the field at Guilford, and Greene retreated in good order to fight another day. By the rules of the day that made it a British victory, and it was. But it was the kind of victory that ends armies. Cornwallis had lost about a quarter of the men he brought, his Guards were wrecked, Webster was dying, O\'Hara was down, and he could not even chase the beaten enemy off the ground. He fell back to Wilmington to refit by sea, and then, against Henry Clinton\'s wishes, he marched north into Virginia, reasoning that the Carolinas could never be held while Greene could slip across the border to refit. While he marched away, Greene turned south and began reducing the British interior posts one by one, until by the end of 1781 the king\'s men held only Savannah and Charleston. Cornwallis\'s road through Virginia ended at a tobacco-field surrender at Yorktown that October. Charles James Fox had named it that spring, echoing Plutarch on the ancient king Pyrrhus, whose costliest wins gave us the phrase: another such victory would ruin the British army. It had.',
  },
  sections: [
    { id: 'race-to-the-dan', eyebrow: 'The chase', title: 'The race to the Dan', blurb: 'After Cowpens wrecked the fast quarter of his army, Cornwallis burned his own baggage wagons to chase Greene light, and ran his redcoats 240 miles across the winter piedmont. Greene fell back steadily, Lee\'s Legion screening the rear, and crossed the Dan River into Virginia just ahead of the British, ferrying the boats away behind him. Then, reinforced, he recrossed and turned to fight on ground of his own choosing.' },
    { id: 'the-three-lines', eyebrow: 'The battle', title: 'Through the three lines', blurb: 'Greene drew up the way Morgan had at Cowpens: militia on the first two lines, Continentals on the third, set in depth across the New Garden Road. The British came on through a rail fence, thick woods, and into the clearing, where the 1st Maryland and Washington\'s dragoons nearly broke the elite Guards. At the crisis, with friend and foe intermingled, the British guns fired into the melee.' },
    { id: 'another-such-victory', eyebrow: 'The meaning', title: 'Another such victory', blurb: 'Cornwallis held the field and lost a quarter of his army doing it. He could not pursue, fell back to Wilmington, and then marched north into Virginia against orders, on the road that ended at Yorktown. While he marched away, Greene retook the South post by post. Charles James Fox named the victory in Parliament, borrowing the verdict an ancient king had earned at the same price.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/guilford/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function GuilfordPage() {
  return <BattleDossier data={DATA} />
}

/* FACT LEDGER — figures to fetch (image prefix rev-guilford-*):
 *
 * HERO (landscape, required):
 *   rev-guilford-hero.jpg
 *     ← File:Battle of Guilford Courthouse 15 March 1781.jpg
 *       H. Charles McBarron Jr., U.S. Army Center of Military History, PD,
 *       1929×1383 LANDSCAPE. Shows the 1st Maryland bayonet charge + Washington's
 *       dragoons. (Fallback: File:Battle of Guilford Court House.jpg, second
 *       McBarron, PD, 1240×799 landscape.)
 *
 * COMMANDERS:
 *   rev-guilford-greene.jpg     — REUSE in-repo Nathanael Greene portrait
 *       (rev-monmouth-greene.jpg / rev-trenton-greene.jpg / rev-camden-greene.jpg;
 *       prefer one NOT used on the adjacent Camden page). Born-verified in-repo.
 *   rev-guilford-cornwallis.jpg — REUSE in-repo Cornwallis portrait
 *       (rev-charleston-cornwallis.jpg / rev-camden-cornwallis.jpg /
 *       rev-monmouth-cornwallis.jpg). Born-verified in-repo.
 *   rev-guilford-tarleton.jpg   — REUSE in-repo Tarleton portrait
 *       (rev-charleston-tarleton.jpg / rev-camden-tarleton.jpg; Reynolds 1782).
 *       Born-verified in-repo.
 *   rev-guilford-ohara.jpg      — FETCH File:Lieutenant-General Charles O'Hara.png
 *       PD (PD-1923 / Public Domain Mark 1.0), c. 1791, Gibraltar Garrison
 *       Library, 473×621 PORTRAIT. The only O'Hara portrait on Commons; small but
 *       adequate for a commander card.
 *
 * NO IMAGE (img: '' — no born-verified likeness in the pack, never risk a wrong one):
 *   James Webster        — no Commons portrait found.
 *   Otho Holland Williams — no portrait pulled this session; ships img: ''.
 *   William Washington    — portrait options flagged weak in the pack; ships img: ''.
 *   Henry Lee             — no portrait pulled this session; ships img: ''.
 *
 * NO MAP BLOCKS in the dossier (locator omitted). Period-artifact battle plans
 * exist for inline use if a later pass wants them:
 *   File:Battle of Guildford ... LCCN2006687273.jpg (Tarleton's 1787 Campaigns
 *     plan, PORTRAIT — inline only) and File:Battle of Guildford ... LOC
 *     gm71000642.jpg (1781 LoC manuscript map, PORTRAIT — inline only).
 *   AVOID File:Battle of Guilford Courthouse 15 March 1781 (DWR).jpg (CC BY 2.5
 *     modern diagram, not a reader image).
 */
