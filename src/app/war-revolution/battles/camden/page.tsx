'use client'

// BATTLE dossier (The Battle of Camden, August 16, 1780), American Revolution,
// southern campaign — the low point: the hero of Saratoga marches a hungry,
// half-militia army down the wrong road, collides with Cornwallis in the dark,
// posts his rawest men opposite the best regulars in America, and loses the
// second southern army in four months in about an hour. De Kalb dies where he
// stood; Gates is in Hillsborough, 180 miles off, three days later. Thin data
// wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates (fact + storytelling + newcomer-clarity + framing, parallel) →
// reconcile → revise.
// Sides: American on the rev US rail / Cornwallis's army on the British (red)
// rail; the win marker rides the British side. HANDLE-WITH-CARE framings per
// the fact pack: Gates was 53, NOT "sixty" (the spine error flagged, do not
// repeat it here); losses framed "600–900 killed and wounded + ~1,000
// captured" (never a clean count); strength "between three and four thousand,
// about two-thirds militia"; de Kalb "some eleven wounds" credited to du
// Buysson; the Gates ride told with BOTH the rally attempts AND the mockery,
// never as simple cowardice nor as blameless; no de Kalb deathbed quote, no
// Cornwallis spoken tribute, no Washington-at-the-grave line (all apocrypha) —
// only du Buysson's documented British civility; the militia rout told without
// the "cowards" sneer (raw, sick, in open woods, against a bayonet charge, no
// second line). Image prefix rev-camden-* (Gates / Cornwallis / Tarleton /
// Greene are born-verified in-repo reuses copied to the prefix). De Kalb,
// Rawdon, and Stevens ship without portraits here pending a born-verified
// fetch (img: '' for Stevens; see FACT LEDGER for the de Kalb/Rawdon plates).
// Sources: audits/war-pipeline/rev-camden-factpack.md.

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-camden' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'The Low Point · 1780',
  title: 'Camden',
  date: 'August 16, 1780',
  place: 'About five miles north of Camden, South Carolina, astride the Great Wagon Road',
  note: 'The lowest point of the war in the South. Three months after Charleston swallowed the first southern army, Congress sent Horatio Gates, the celebrated victor of Saratoga, to build and command a new one, over Washington\'s preference for Nathanael Greene. Twenty-two days later Gates had lost that army too. He marched it hungry down a barren road, collided with Cornwallis in the dark, and posted his rawest militia opposite the best regulars in America. At first light the militia threw down their loaded muskets and ran, most without firing a shot. The Continentals on the right stood almost alone and were destroyed where they stood, their commander Johann de Kalb falling with some eleven wounds. The whole fight lasted about an hour. Gates was carried off with the rout and rode 180 miles to Hillsborough in three days. The second southern army in four months was simply gone.',
  hero: { img: '/war-img/rev-camden-hero.jpg', pal: ['#6b5536', '#cdbf9a', '#2f261a'], credit: 'after Alonzo Chappel · "Battle of Camden — Death of de Kalb" engraving · mid-19th century, a later heroic reconstruction · NYPL / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'Both armies marched at 10 p.m. on Aug 15 to surprise each other · collided on the road at about 2 a.m. · the fight itself about one hour at first light' },
    { label: 'Casualties', value: 'American ~600–900 killed and wounded + about 1,000 captured · all seven or eight guns and the whole train lost · the army destroyed as a force · British ~324 (68–69 killed, ~245 wounded), about 15% of Cornwallis\'s men' },
    { label: 'Winner', value: 'Britain · the most complete rout of an American field army in the war, and the second southern army gone in four months. But Cornwallis had won a province already burning behind him.', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The "Grand Army" of the Southern Department', str: 'Between three and four thousand fit for duty (3,052 rank and file by the Aug 15 return), about two-thirds of them militia', cmd: 'Maj. Gen. Horatio Gates', note: 'Gates\'s own orders dubbed the force the "Grand Army," and he acted on a paper strength of about 7,000; the reality was less than half that. The core were the Maryland and Delaware Continentals (the full-time paid regulars of the Continental Army), fewer than a thousand effectives, the cream of Washington\'s infantry, built and marched south by Johann de Kalb. The rest were militia (part-time citizen soldiers): about 1,800 North Carolinians in the center and some 700 Virginians on the left who had reached camp only two days before the battle. The whole force had marched for weeks through stripped country on green corn, unripe peaches, and lean cattle, and was sick and hungry when it fought.' },
    { side: 'c', tag: 'British', force: 'Cornwallis\'s southern field force', str: 'About 2,200 fit for duty (2,239 by Cornwallis\'s return)', cmd: 'Lt. Gen. Charles, Earl Cornwallis', note: 'The professionals left to hold the South after Charleston. The line was built on James Webster\'s veteran regulars (the light infantry, the 23rd Royal Welch Fusiliers, and the 33rd Foot) on the right, the twenty-five-year-old Lord Rawdon with his Volunteers of Ireland and the Loyalist provincials (Americans serving the king) on the left, the two battalions of the 71st Highlanders and Tarleton\'s dragoons (mounted soldiers trained to fight from horseback) in reserve, and four guns forward. Warned of Gates\'s approach, Cornwallis raced up from Charleston rather than retreat, reached Camden on the night of August 13, and resolved to attack.' },
  ],
  casualties: {
    union: 1900, csa: 324,
    unionLabel: 'American ~600–900 killed & wounded + about 1,000 captured',
    csaLabel: 'British ~324 (68–69 killed, ~245 wounded)',
    footnote: 'The returns are chaotic, so the numbers come as ranges. American killed and wounded are commonly put at 600 to 900: the documented floor is about 240 known dead and 290 wounded prisoners carried into Camden, while Cornwallis claimed "between 800 and 900" rebels killed, certainly high. About 1,000 men were captured. All seven or eight guns and the whole train, some 200 wagons, the baggage, and the army\'s papers were lost. Beyond the numbers, the army simply ceased to exist as a force; what reassembled at Hillsborough weeks later was perhaps 700 to 800 Continentals. British loss was around 324 (68 or 69 killed, about 245 wounded, some 11 missing), roughly 15% of Cornwallis\'s force and heaviest in Rawdon\'s wing, the measure of how hard the Continentals fought. The starkest single figure of the day belongs to the Virginia militia on the left: their total reported loss was three wounded, because they broke before they fought.',
  },
  commanders: [
    { name: 'Horatio Gates', role: 'Maj. Gen., Cmdr., Southern Department, American', side: 'u', img: '/war-img/rev-camden-gates.jpg', bio: 'The "hero of Saratoga," whose victory over Burgoyne in 1777 had been the turning point of the war in the North and made him the most celebrated general in America after Washington (a faction in Congress had once floated him to replace Washington). In June 1780 Congress voted him the southern command without consulting Washington, who wanted Greene. He was fifty-three, not the "sixty" of legend. He joined the army on July 25, marched it down the direct road two days later against his officers\' written objection, and twenty-two days into command had lost it. He tried to rally the fleeing militia, was carried off in the rout, and reached Hillsborough, 180 miles away, three days later. Hamilton\'s mockery fixed the ride for history; the documented record is more divided. He never held a field command again, and his only son died that October, weeks after the battle.' },
    { name: 'Johann de Kalb', role: 'Maj. Gen., 2nd in command, American', side: 'u', img: '', bio: 'A French-army professional, a Bavarian-born soldier who had crossed the Atlantic with Lafayette in 1777 and become one of the best infantry officers in American service. He built the southern army, marching the Maryland and Delaware Continental division, roughly 1,400 starving, ragged veterans, south from Morristown in the spring of 1780, then held it together for months on next to nothing ("I have struggled with a good many difficulties for Provisions," he wrote). He had judged an immediate move on Camden too risky and favored the western route; superseded by Gates, he took it professionally and commanded the right wing. There, with the battle already lost on the rest of the field, he and his Continentals stood almost alone, threw back Rawdon\'s first attack and counterattacked, and fought on flanked from both sides. His horse was killed under him, his head laid open by a saber cut; on foot he led a final bayonet charge and fell with some eleven wounds. Cornwallis had him carried into Camden and treated by British surgeons. He died there on August 19 and was buried with full military honors, British officers attending.' },
    { name: 'Edward Stevens', role: 'Brig. Gen., Virginia militia, American', side: 'u', img: '', bio: 'The Virginia brigadier whose roughly 700 militia, raw men who had reached camp only on August 14, were posted on the army\'s left, directly opposite Webster\'s best regulars. When Gates asked his officers at the midnight council what should be done, Stevens was the one who answered, that it was too late to do anything but fight. At first light his Virginians were ordered forward; Webster\'s regulars answered with a volley, a cheer, and a bayonet charge, and the militia broke almost instantly, most throwing down loaded muskets without firing. Stevens could not stop them. The collapse was no verdict on the man: militia in open ground, in a main line, with no second line behind them, asked to stand against a bayonet charge, were being asked to do the impossible.' },
    { name: 'Charles, Earl Cornwallis', role: 'Lt. Gen., British field commander', side: 'c', img: '/war-img/rev-camden-cornwallis.jpg', bio: 'Left behind by Clinton in June 1780 with about 8,300 men and the whole job of holding the conquered South. Warned by Rawdon that Gates was coming, he left Charleston on August 10 and reached Camden on the night of August 13, taking personal command of about 2,200 fit men. Rather than abandon his most important interior depot and the sick and stores he refused to leave, he resolved to attack, and marched at the same hour, on the same road, as Gates. He fought the battle in person, riding in to steady the Volunteers of Ireland when the Continentals nearly broke them, then released Tarleton\'s cavalry against their rear. The victory was the British high-water mark in the South. Camden, and the long road to Yorktown, all run forward from it.' },
    { name: 'Francis, Lord Rawdon', role: 'Lt. Col., British left wing', side: 'c', img: '', bio: 'Twenty-five years old at Camden and already among the most capable young officers in the British army, holding the most important interior post in South Carolina and commanding the British left. His wing, the Volunteers of Ireland (a regiment he had raised himself, largely from Irish immigrants in America), the Legion infantry, and Loyalist units, took the brunt of the Continentals\' stand and counterattack and bore the heaviest British loss of the day. It was Rawdon\'s warning that brought Cornwallis racing up from Charleston in time to fight. He would go on to command in the South after Cornwallis marched north, and to win a hard victory of his own at Hobkirk\'s Hill the next spring.' },
    { name: 'Banastre Tarleton', role: 'Lt. Col., British Legion, British', side: 'c', img: '/war-img/rev-camden-tarleton.jpg', bio: 'Commander of the British Legion, the corps of Loyalist cavalry and light infantry whose name had already become a byword for the rage of the southern war. Eleven weeks before Camden, at the Waxhaws on May 29, his Legion had cut down Buford\'s Virginians after resistance stopped, and "Tarleton\'s quarter" (meaning he gave none, killing men who had already surrendered) became the backcountry battle cry. At Camden his dragoons held the British point in the night collision, sat in reserve through the infantry fight, and were then loosed against the Continentals\' rear to break the last formation on the field. He rode the wreck down the Wagon Road for some 22 miles, sabering fugitives, and two days later destroyed Sumter\'s camp at Fishing Creek, completing the ruin of organized American force in South Carolina in 72 hours.' },
  ],
  outcome: {
    verdict: 'British victory · the most complete rout of an American army in the war',
    text: 'Camden annihilated the army that was supposed to replace the one lost at Charleston, and it did so in about an hour. The second southern army in four months was gone; South Carolina was garrisoned, Georgia was royal, and North Carolina lay apparently open. It was the British high-water mark in the South and the lowest point of the American cause anywhere. Yet the partisan war the summer had already ignited did not stop, and Cornwallis had won a province burning behind him: within days Marion was freeing prisoners from a Camden-bound escort, within two months the over-mountain men destroyed Ferguson at Kings Mountain, and within five months a new commander would turn Camden\'s lesson into the war\'s most perfect small battle. For Gates the cost was total. Congress ordered a court of inquiry and authorized Washington to name a successor; Washington named Nathanael Greene, his choice all along, who took command at Charlotte on December 3, 1780. The inquiry was never actually held, and the southern officers, declining to treat Gates as a criminal, judged him "more unfortunate than criminal." But his reputation died with the army he lost. He never held a field command again.',
  },
  sections: [
    { id: 'the-wrong-road', eyebrow: 'Before', title: 'The march that beat the army', blurb: 'After Charleston swallowed the first southern army, Congress sent the hero of Saratoga to build a new one. He inherited a starving force that de Kalb had held together for months, named it the "Grand Army," and marched it down the direct, barren, hostile road against his officers\' written objection. Weeks of green corn and lean cattle, a gill of molasses on exactly the wrong night, a field return that showed 3,052 men where he expected 7,000, and then a night march that ran straight into Cornwallis in the dark.' },
    { id: 'the-hour', eyebrow: 'The battle', title: 'An hour in the pines', blurb: 'Two armies that had each marched at the same hour to surprise the other, now drawn up at first light in open pinewoods between the swamps, with Gates\'s rawest militia posted opposite Britain\'s best regulars. A volley, a cheer, and a bayonet charge, and the whole militia line threw down its loaded muskets and ran. Gates was swept away with it. On the right, where nobody had told the Continentals the battle was already lost, de Kalb and his regulars fought on alone until the cavalry took them in the rear.' },
    { id: 'the-low-point', eyebrow: 'After', title: 'The reputation that died with the army', blurb: 'Tarleton rode the wreck down the road for twenty-two miles; the whole train was lost; two days later Fishing Creek finished Sumter. Gates reached Hillsborough, 180 miles off, in three days, his ride fixed for history by Hamilton\'s jeer and defended, just as documented, by the men who saw him try to rally the rout. De Kalb died of his wounds in Camden under British care. Greene was given the southern command. And the lesson of the broken militia line waited for the one man who would know what to do with it.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/camden/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function CamdenPage() {
  return <BattleDossier data={DATA} />
}

/* FACT LEDGER — figures to fetch (NOT shipped to readers; for the image pass)
 *
 * SHIPPING NOW (born-verified in-repo reuses, copied to the rev-camden-* prefix):
 *  - /war-img/rev-camden-gates.jpg      · REUSE of rev-saratoga-gates.jpg (Gates portrait; caption lands the fall)
 *  - /war-img/rev-camden-cornwallis.jpg · REUSE of rev-charleston-cornwallis.jpg
 *  - /war-img/rev-camden-tarleton.jpg   · REUSE of rev-charleston-tarleton.jpg (Reynolds)
 *  - /war-img/rev-camden-greene.jpg     · REUSE of rev-monmouth-greene.jpg (aftermath beat, used in section narrative)
 *  - /war-img/rev-camden-hero.jpg       · REUSE of rev-worldwar-dekalb.jpg (Chappel "Death of de Kalb", 1523×1009)
 *        PREFERRED UPGRADE: replace with the higher-res NYPL scan of the SAME engraving so the
 *        hero is not byte-identical to the spine file —
 *        Commons: File:Battle of Camden - death of De Kalb (NYPL Hades-257486-EM15410).jpg
 *        (6000×3411, PD, NYPL). LANDSCAPE. Caption MUST keep the later-imagining caveat (Chappel,
 *        mid-19th c., heroic reconstruction). Free PD download — no key, not approval-gated.
 *
 * FIGURES TO FETCH (no born-verified in-repo reuse; ship as img:'' until fetched):
 *  - /war-img/rev-camden-dekalb.jpg  [de Kalb, commander card] · subject to verify: Johann de Kalb portrait
 *        SOURCE (best res): https://commons.wikimedia.org/wiki/File:Maj._Gen._the_Baron_De_Kalb_(NYPL_b12349155-421541).jpg
 *        (3072×4762, PD, NYPL, after the Peale likeness). ORIENTATION: portrait.
 *        Canonical alt (small): File:Johann de Kalb.jpg (Charles Willson Peale 1782, 429×533, PD).
 *        Currently shipping img:'' (NO wrong portrait risk); fetch + verify before flipping it on.
 *  - /war-img/rev-camden-rawdon.jpg  [Rawdon, commander card] · subject to verify: Francis Rawdon-Hastings portrait
 *        SOURCE: https://commons.wikimedia.org/wiki/File:Sir_Joshua_Reynolds_-_Francis_Rawdon-Hastings_(1754-1826),_Second_Earl_of_Moira_and_First_Marquess_of_Hastings_-_Google_Art_Project.jpg
 *        (3121×5042, PD, Reynolds painted 1789–90). ORIENTATION: portrait. Caption note: painted a few
 *        years after Camden; he was 25 at the battle. Currently shipping img:''.
 *  - Edward Stevens [commander card] · NO verified likeness found in the pack. Ship img:'' permanently
 *        unless an independently verified portrait turns up. Do NOT invent.
 *
 * SECTION-NARRATIVE FIGURES (inline figures in s/[section]/section-narrative.tsx — fetch list there):
 *  - de Kalb portrait (same as rev-camden-dekalb.jpg above) for the "before" beat
 *  - the Faden/Tarleton period plan of the battle: File:Plan of the battle fought near Camden,
 *        August 16th, 1780. LOC gm71000641.tif (3082×3408, PD; TIFF needs conversion; caption
 *        "engraved 1787, London", verify plate line) — primary-artifact inline, NOT a generated map
 *  - the surviving Great Wagon Road trace: File:Great Wagon Road at Camden Battlefield.jpg
 *        (2988×5312 PORTRAIT, CC BY-SA 4.0 Pi3.124 2017 — attribution required; inline only, never hero)
 *  - Greene (rev-camden-greene.jpg, REUSE) for the aftermath / turn beat
 *  NB: NO map blocks added anywhere per brief (maps come later); the period PLAN is a born-verified
 *  artifact figure, not a generated locator.
 */
