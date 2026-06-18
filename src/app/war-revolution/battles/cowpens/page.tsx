'use client'

// BATTLE dossier (The Battle of Cowpens, January 17, 1781), American Revolution
// (southern campaign) — Daniel Morgan's tactical masterpiece: the deliberate
// three-line defense in depth that turned a militia's habitual flight into bait,
// and folded Banastre Tarleton's exhausted command into a double envelopment
// that destroyed it in about an hour. Thin data wrapper over the shared
// <BattleDossier>. Content produced through the war content pipeline
// (audits/war-content-pipeline.md): fact pack → author → critic gates (fact +
// storytelling + newcomer-clarity + framing, parallel) → reconcile → revise.
// Sides: American on the rev US rail / Tarleton's corps on the British (red)
// rail; the win marker rides the American side. HANDLE-WITH-CARE framings per
// the fact pack: American strength NEVER a single number ("800 by Morgan's own
// count to ~1,900 by modern reconstruction" — his report undercounted the
// militia); casualties as ranges (British ~80–90% destroyed; American ~150 or
// Morgan's 12/60); the "American Cannae" only as historians' label; the
// Washington–Tarleton clash held to "believed to be Tarleton" (Howard's phrase);
// "Tarleton's quarter" cries real but NO revenge massacre (the discipline is the
// meaning-beat); the 499 lashes always "by his own telling"; no "Bloody Ban" in
// a period mouth. Portrait honesty: William Washington ships with NO image (the
// pack's only likenesses are weak 19th-c engravings / a 313×350 portrait — never
// risk a wrong/poor portrait at hero or card scale). Image prefix
// rev-cowpens-* (Morgan = the in-repo Peale reuse; Tarleton = the in-repo
// Reynolds reuse copied to the prefix).
// Sources: audits/war-pipeline/rev-cowpens-factpack.md.

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-cowpens' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'The Masterpiece · 1781',
  title: 'Cowpens',
  date: 'January 17, 1781 · about one hour after first light',
  place: "Hannah's Cowpens, upcountry South Carolina, near the Broad River",
  note: "After Charleston and Camden cost the South two whole armies, Nathanael Greene did the thing the textbooks forbid: he divided his weaker army in the face of a stronger one, and sent Daniel Morgan into the western backcountry. Cornwallis sent Banastre Tarleton, the most feared man in the southern war, to destroy him. Cornered against a flooded river with no line of retreat, Morgan turned the trap into a masterpiece. He built his battle around what militia could actually do instead of what they couldn't: stand for two volleys, then leave. He scripted their flight as bait, hid his cavalry behind a rise, and when Tarleton's exhausted men surged after the \"fleeing\" militia in a disordered mob, Morgan folded them into a double envelopment that destroyed Tarleton's command in about an hour. It is studied to this day as a model battle.",
  hero: { img: '/war-img/rev-cowpens-hero.jpg', pal: ['#7d6a4a', '#d9cbab', '#3a3022'], credit: "William Ranney · \"The Battle of Cowpens\" · 1845 · South Carolina State House · public domain (painted 64 years after the battle; the Black trooper firing to save Washington is the painting's documented subject, not a verified photograph of the moment)" },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'First shots shortly after first light (about 7 a.m.); over by roughly 8. About an hour, some accounts as little as forty minutes, at the end of Tarleton\'s all-night march.' },
    { label: 'Forces', value: 'American somewhere between 800 (Morgan\'s own count) and about 1,900 (modern reconstruction), depending on whose count of the militia you take. British about 1,050 to 1,150, half of them American Loyalist provincials.' },
    { label: 'Casualties', value: 'British roughly 80 to 90 percent of the force destroyed or captured: about 110 killed, 200-odd wounded, 500 to 630 captured unwounded, both guns, the colors of the 7th Fusiliers. American about 150 killed and wounded, perhaps fewer (Morgan reported 12 killed and 60 wounded).' },
    { label: 'Winner', value: "American · the war's cleanest small-battle destruction of a British force, and it crippled the fast quarter of Cornwallis's army", win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: "Morgan's flying army", str: "Somewhere between 800 and ~1,900 (the militia kept arriving all night)", cmd: 'Brig. Gen. Daniel Morgan', note: "The light troops Greene detached in December plus the backcountry militia who rode in through January. The core: about 300 Maryland and Delaware Continentals (the full-time paid regulars of the Continental Army) plus veteran Virginia and Georgia state troops under Lt. Col. John Eager Howard; about 150 picked riflemen as a skirmish line; the militia (part-time citizen soldiers) under Brig. Gen. Andrew Pickens; and 80 to 125 cavalry under Lt. Col. William Washington. Morgan's own report says he \"fought only 800 men, two thirds of which were Militia\"; the modern reconstruction runs near 1,900, because his report undercounted the militia who arrived overnight." },
    { side: 'c', tag: 'British', force: "Tarleton's corps", str: '~1,050 to 1,150, roughly half American Loyalist provincials', cmd: 'Lt. Col. Banastre Tarleton', note: "The fast quarter of Cornwallis's field army: the British Legion (Loyalist cavalry and light infantry), the 7th Royal Fusiliers (many of them raw recruits), the 1st Battalion of the 71st Highlanders, a detachment of the 17th Light Dragoons (mounted soldiers trained to fight from horseback), about two dozen Royal Artillerymen with two light 3-pounder \"grasshopper\" guns, and some Loyalist militia. By the modern reconstruction they reached the field after less than four hours' sleep in 48 hours, out of food, having been roused at 2 a.m. for a five-hour night march. Tarleton attacked straight off that march." },
  ],
  casualties: {
    union: 150, csa: 870,
    unionLabel: 'American about 150 killed & wounded (as low as 12/60 in Morgan\'s report)',
    csaLabel: 'British about 830 to 970 killed, wounded & captured (roughly 80–90% of the force)',
    footnote: "Every figure here is a range; print no single hard number. British: about 100 to 110 killed (Morgan reported 10 officers and 100 men), roughly 200 to 230 wounded (most of them also captured), and 500 to 630 captured unwounded, for total prisoners somewhere around 600 to 830 and a total loss of about 830 to 970 of the 1,050 to 1,150 engaged, roughly 80 to 90 percent of the force. Also taken: both grasshopper guns, the colors of the 7th Fusiliers, 60 baggage wagons, about 100 cavalry horses, and the Legion's baggage and music. American: Morgan's report gives about 12 killed and 60 wounded; the modern reconstruction, naming names from pension files, runs nearer 25 killed and 124 wounded, about 150 total, because Morgan undercounted his own militia. The honest line is \"about 150 killed and wounded, perhaps fewer.\" Tarleton himself got away with a remnant: a few dozen riders still with him, and a couple of hundred Legion cavalry who had refused his last order and ridden off the field before he did.",
  },
  commanders: [
    { name: 'Daniel Morgan', role: 'Brig. Gen., American', side: 'u', img: '/war-img/rev-cowpens-morgan.jpg', bio: "The \"Old Wagoner\": a New Jersey-born Virginia frontier teamster who had driven wagons on Braddock's 1755 campaign and carried a lifelong grudge against the British Army. By his own often-told tale he was sentenced to 500 lashes for striking a British officer, the drummer miscounted at 499, and so Britain still owed him one; he showed the scars, though no British record of the sentence survives, so it travels as Morgan's own story. He led riflemen to Quebec, took command when Arnold fell, was captured and exchanged, and his rifle corps opened both battles at Saratoga. He resigned in 1779 after being passed over for promotion, came back after Camden as a new brigadier general, and was handed the flying army in December. Cowpens was his masterpiece and his last battle: sciatica broke his health within weeks." },
    { name: 'John Eager Howard', role: 'Lt. Col., American', side: 'u', img: '/war-img/rev-cowpens-howard.jpg', bio: "A Maryland planter's son commanding the Maryland and Delaware Continentals, the third line. He had fought at White Plains, Germantown, Monmouth, and the Camden disaster itself. At Cowpens his misheard order nearly unraveled the battle and then won it: when the British surged after his \"withdrawing\" men, his face-about volley at point-blank range and his bayonet charge broke the British center. By his own account British officers surrendered to him so fast he ended up holding seven swords at once. Congress voted him a silver medal; he was later a three-term governor of Maryland (1788 to 1791) and a U.S. senator." },
    { name: 'Andrew Pickens', role: 'Brig. Gen., American', side: 'u', img: '/war-img/rev-cowpens-pickens.jpg', bio: "A dour South Carolina Presbyterian elder and militia leader known as the \"Wizard Owl.\" He had taken British protection after Charleston fell, then took the field again after his parole was, as he saw it, voided when Loyalists burned his plantation. At Cowpens he commanded the militia line, the two-volley line, and brought it back around onto the British left at the end to help close the trap. He escorted the prisoners north out of Cornwallis's reach after the battle." },
    { name: 'William Washington', role: 'Lt. Col., American', side: 'u', img: '', bio: "A Virginia-born cavalryman and second cousin of the commander in chief, wounded at Trenton leading the charge that took the Hessian guns. His dragoons had been wrecked in the Charleston campaign, both times by Tarleton; Cowpens was the return match. He commanded the cavalry reserve hidden behind a second rise, broke the dragoons off the militia's backs, delivered the hammer blow into the British right rear, and chased Tarleton sixteen miles. Congress voted him a silver medal. (No reliable period likeness survives; the only candidates are an 1861 engraving and a small Rembrandt Peale portrait too weak to use at scale.)" },
    { name: 'Banastre Tarleton', role: 'Lt. Col., British Legion, British', side: 'c', img: '/war-img/rev-cowpens-tarleton.jpg', bio: "A twenty-six-year-old Liverpool merchant's son commanding the British Legion, and the most feared man in the southern war. In 1780 he destroyed the American cavalry around Charleston, and at the Waxhaws his Legion cut down Virginia Continentals as they tried to surrender, so that \"Tarleton's quarter\" became backcountry slang for no quarter at all and \"the Butcher\" his name in the Carolinas. Whether he ordered the Waxhaws killing is genuinely disputed; his horse had been shot and pinned him at the surrender moment. At Cowpens he commanded exactly the kind of force he had always won with, drove it onto Morgan's anvil at the end of a sleepless, foodless 48 hours, and watched it destroyed." },
  ],
  outcome: {
    verdict: "American victory · the war's cleanest small-battle destruction of a British force",
    text: "Morgan asked his militia for two volleys instead of miracles, scripted their retreat as bait, and folded Tarleton's exhausted command into a double envelopment that cost Cornwallis the fast quarter of his army. The British lost roughly 80 to 90 percent of the force in about an hour, against American losses of perhaps 150. John Marshall later wrote that \"seldom has a battle, in which greater numbers were not engaged, been so important in its consequences as that of Cowpens.\" Losing his light troops crippled Cornwallis's ability to screen, pursue, and move; within days he burned his own baggage train to turn his whole army into light infantry, and set off after Greene in what became the Race to the Dan. Greene copied the Cowpens design wholesale eight weeks later at Guilford Courthouse. Morgan never fought another battle: his health broke, and he left the army in February. The chase he set running is the next page's story.",
  },
  sections: [
    { id: 'the-split', eyebrow: 'The setup', title: 'The textbook sin', blurb: "After Charleston and Camden destroyed two southern armies, Greene took command and did the forbidden thing: he split his weaker army and sent Morgan west with the light troops. Cornwallis answered by sending Tarleton to hunt him down. The pursuit drove Morgan back against the flooded Broad River, with no line of retreat, to a cattle-grazing ground called the Cowpens. And there Morgan, who had watched Camden, decided that the way to use militia was to ask them for exactly what they could give." },
    { id: 'the-battle', eyebrow: 'The masterpiece', title: 'Three lines, and a scripted retreat', blurb: "The plan made the battle. Three lines in depth, each asked only for what it could do: skirmishers to bleed the British, then militia ordered to fire two volleys and leave, then the Continentals waiting on the crown of the rise, with Washington's cavalry hidden behind it. When the militia \"ran\" on cue, Tarleton read it as a rout and surged after them in a disordered mob, straight uphill into a point-blank volley, a bayonet charge, cavalry in his rear, and the reformed militia coming back around his flank. The double envelopment closed in under an hour." },
    { id: 'the-reckoning', eyebrow: 'The meaning', title: 'The quarter that was the answer', blurb: "Tarleton's corps was destroyed; the cries of \"Tarleton's quarter\" went up, the officers stopped a massacre, and the prisoners lived. Morgan vanished across the Broad before Cornwallis could move. He had crippled the fast quarter of Cornwallis's army, set the Race to the Dan in motion, and written the battle Greene would copy at Guilford Courthouse. It is studied to this day as a model battle: the general who asked his militia for two volleys instead of miracles, and got everything." },
  ],
  sectionHref: (id) => `/war-revolution/battles/cowpens/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function CowpensPage() {
  return <BattleDossier data={DATA} />
}

/* FACT LEDGER — figures to fetch (born-verified candidates from the pack; image prefix rev-cowpens-*):
 *
 *   HERO  rev-cowpens-hero.jpg
 *     OPTION A (in-repo reuse): rev-southern-cowpens.jpg — William Ranney, "The Battle of Cowpens," 1845,
 *       South Carolina State House (1230×944, landscape, PD). Already runs on the southern-turn spine chapter;
 *       same-image-across-surfaces is acceptable (Saratoga precedent), but consider OPTION B to avoid the dupe.
 *     OPTION B (Commons, recommended hero to dodge the dupe):
 *       File:Battle of Cowpens - conflict between Cols. Washington and Tarleton (NYPL Hades-257508-EM15432).tiff
 *       — NYPL scan, PD, 6000×3631 LANDSCAPE, 19th-century print of the Washington–Tarleton clash. Convert from
 *       TIFF; verify artist/date on the file page for the credit line; 19th-c-imagining caveat mandatory.
 *     Caption above is written for the Ranney (OPTION A); swap the credit line if OPTION B is fetched.
 *
 *   COMMANDERS
 *     rev-cowpens-morgan.jpg   — REUSE in-repo rev-saratoga-morgan.jpg / rev-quebec1775-morgan.jpg
 *                                (C.W. Peale, c. 1794, Independence NHP, PD, 703×858, portrait).
 *     rev-cowpens-howard.jpg   — Commons File:John Eager Howard.jpg (Rembrandt Peale, c. 1825, PD, 2194×2874).
 *                                Alt: File:Col. John Eager Howard (cecf0ecd-...).jpg (NPS photo of the C.W. Peale
 *                                portrait, PD, 2066×2499). Verify which painting on the file page at download.
 *     rev-cowpens-pickens.jpg  — Commons File:General Andrew Pickens.jpg (NYPL print, PD, 1404×1581).
 *                                WARNING: do NOT use File:Andrew Pickens.jpg — that one is CC BY-SA 2.5 (a photo).
 *     William Washington       — img: '' (NO portrait). Only candidates are weak: File:William Washington
 *                                (engraving).jpg (1861 Harper's engraving, PD, 688×753) and File:WilliamWashington.jpg
 *                                (Rembrandt Peale c. 1795, PD, just 313×350). A missing portrait beats a wrong/poor one.
 *     rev-cowpens-tarleton.jpg — REUSE in-repo rev-charleston-tarleton.jpg (Joshua Reynolds, 1782, National Gallery
 *                                London, PD, 983×1600, portrait). Copy to the rev-cowpens-* prefix.
 *
 *   OPTIONAL inline figures used in the section narrative (born-verified, fetch if the beats run images):
 *     rev-cowpens-clash.jpg    — File:William Washington at Battle of Cowpens.jpg (S.H. Gimber engraving, Graham's
 *                                Magazine, PD, 1506×1019, landscape) — alt clash print if OPTION A is the hero.
 *     rev-cowpens-medal.jpg    — File:Daniel Morgan, 1789, ND1103.jpg (the Congressional gold medal, Augustin Dupré,
 *                                struck 1789, museum photo, CC0, 3000×2131, landscape) — the medal/aftermath beat.
 *     rev-cowpens-field.jpg    — File:The Cowpens US monument. (dc3608ba-...).JPG (NPS photo, PD, 6000×4000) OR
 *                                File:Cowpens National Battlefield - battlefield clearing.jpg (CC BY 3.0, 2560×1920)
 *                                — the open grazing ground / "field today" beat.
 *     rev-cowpens-statue.jpg   — File:Statue of General Daniel Morgan (1881) in Spartanburg, SC IMG 4818.JPG
 *                                (CC BY 3.0, attribution Billy Hathorn) — optional centennial-statue aftermath beat.
 *
 *   AVOID: File:The Battle of Cowpens by Don Troiani.jpg (living artist; PD-USGov chain not airtight).
 *   No period Cowpens battle map exists on Commons (our generated maps cover the geography). No invented images.
 */
