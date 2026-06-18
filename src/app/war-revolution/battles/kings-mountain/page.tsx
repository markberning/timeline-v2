'use client'

// BATTLE dossier (Kings Mountain, October 7, 1780), American Revolution — the
// "first civil war" flagship of the vertical: a battle of Americans against
// Americans, where the only British soldier on the field was the dead commander.
// Thin data wrapper over the shared <BattleDossier>. Content produced through
// the war content pipeline (audits/war-content-pipeline.md): fact pack → author
// → critic gates (fact + storytelling + newcomer-clarity + framing, parallel) →
// reconcile → revise. Sides re-tinted PATRIOT (rev-us) vs LOYALIST (rev-gb); the
// win marker rides the Patriot side. HANDLE-WITH-CARE framings per the fact
// pack: "the only British SOLDIER on the field" (never "British-born" — Chesney
// was Irish-born; the Provincials were American colonists on the British
// establishment); the fire-and-sword threat told AS Shelby's later story, never
// as a documented Ferguson utterance; "Tarleton's quarter" and the post-
// surrender killing and the Bickerstaff hangings told straight, not sanitized
// (they are the page's thesis); strength/casualty figures all "about" + the
// commonly-given set, never false precision; Ferguson's whistle/shirt/oxhide and
// who-shot-him left at tradition level; Virginia Sal/Paul, the Doak sermon text,
// and the "God Almighty" boast NOT used. Portrait honesty: Ferguson, Campbell,
// Cleveland, de Peyster, McDowell, Williams, Chronicle ship with NO image (img:
// '', no born-verified life portrait in the pack — never risk a wrong likeness);
// Shelby (Jouett) and Sevier (Peale-attrib.) ship verified Commons portraits.
// Image prefix rev-kings-mountain-*. No map blocks per brief.
// Sources: audits/war-pipeline/rev-kings-mountain-factpack.md.

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-kings-mountain' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'The Backcountry Turns · 1780',
  title: 'Kings Mountain',
  date: 'October 7, 1780 · about one hour',
  place: 'Kings Mountain, South Carolina (York County, just south of the North Carolina line)',
  note: 'A famous American victory over "the British" in which the only British soldier on the field was the man who died commanding it. After Charleston and Camden wrecked the regular American army in the South, Major Patrick Ferguson threatened the frontier settlements beyond the Appalachian crest; they mustered an army no government had ordered, with elected colonels, ran him 330 miles down the foothills, and surrounded his thousand Loyalist militia on a wooded ridge. Ferguson was shot from his horse refusing to surrender. The white flags went up and the killing went on anyway, to cries of "Tarleton\'s quarter." A week later nine prisoners were hanged from an oak. Every man on both sides was an American. It broke Cornwallis\'s western flank, ended his first invasion of North Carolina, and killed the Loyalist-manpower theory that Britain\'s whole southern strategy rested on.',
  hero: { img: '/war-img/rev-kings-mountain-hero.jpg', pal: ['#5a6b4a', '#cabf9c', '#33402c'], credit: 'battle print · 19th century (a later imagining; no eyewitness art of this battle survives) · New York Public Library / Wikimedia Commons · public domain' },
  sideNames: { u: 'PATRIOT', c: 'LOYALIST' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'About one hour (participants timed it near 65 minutes), beginning around three in the afternoon, October 7, 1780' },
    { label: 'Casualties', value: 'Patriot about 28 killed, about 62 wounded · Loyalist about 157 killed, about 163 too badly wounded to move, and roughly 700 captured · effectively the entire force of about 1,100, killed, wounded, or taken' },
    { label: 'Winner', value: 'Patriot · total: the king\'s Loyalist militia in the Carolinas annihilated by an army no government sent, on a field where the only British soldier present was the dead commander', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'Patriot', force: 'The Over-mountain men and backcountry militia', str: 'About 900 picked, mounted riflemen made the attack (chosen the night before from a larger gathered force of perhaps 1,400 or more)', cmd: 'Col. William Campbell (officer of the day)', note: 'A self-summoned army: no Congress, no Continental commission, the colonels governing by council and electing one of their own, the senior Virginia colonel William Campbell, to execute the council\'s plans. Most were farmers and stockmen from the Watauga, Nolichucky, and Holston settlements west of the 1763 Proclamation Line, communities that had governed and defended themselves for a decade without Britain, on land leased and then bought from the Cherokee. They carried long rifles, accurate to two or three times musket range, and no bayonets at all. The same men\'s leaders would burn Cherokee towns that December; the freedom they marched for included the freedom to take the land they stood on.' },
    { side: 'c', tag: 'Loyalist', force: 'Ferguson\'s corps of American Loyalists', str: 'About 1,100: roughly 100 Provincial regulars (the "American Volunteers," northern Loyalists in red coats) plus about 1,000 Carolina Loyalist militia', cmd: 'Maj. Patrick Ferguson', note: 'The working instrument of Britain\'s southern strategy: Loyalist militia raised and drilled to hold conquered ground while the regulars moved on. Every man in the corps was an American colonist except Ferguson himself, a Scottish-born major, inventor of a breech-loading rifle, the only British soldier on the field. His red-coated "Provincials" were Loyalists from New York, New Jersey, and Connecticut; his militia were Carolinians. Ferguson\'s own adjutant, Captain Alexander Chesney, was Irish-born, so the precise truth is the only British soldier on the field, not the only man born in Britain. They fought in close order with muskets and bayonets, many of the militia\'s "bayonets" hunting knives whittled to fit the muzzle.' },
  ],
  casualties: {
    union: 90, csa: 1100,
    unionLabel: 'Patriot about 28 killed + about 62 wounded',
    csaLabel: 'Loyalist about 320 killed & wounded + roughly 700 captured',
    footnote: 'Patriot losses were light: about 28 killed and about 62 wounded, Campbell\'s Virginians suffering most, with Colonel James Williams mortally hit at the very end (he died October 8) and Major William Chronicle killed in the first assault. The Loyalist force was effectively destroyed to the last man. The commonly given set, used by the National Park Service and the spine, is about 157 killed, about 163 too badly wounded to be moved (left on the field), and roughly 698 captured; other good counts give about 668 captured, and a recent prisoner study counts 716 marched off. Every set is a choice among sources; the honest statement is that of roughly 1,100 men, the whole force was killed, wounded, or taken in about an hour. The bar shows rounded magnitudes: Patriot killed-and-wounded against the entire Loyalist force as a loss.',
  },
  commanders: [
    { name: 'William Campbell', role: 'Col., Virginia militia · officer of the day, Patriot', side: 'u', img: '', bio: 'A Washington County, Virginia militia colonel, a six-foot-six Scots-Irish Presbyterian famous for hanging Tories on the Holston and brother-in-law of Patrick Henry. With no Continental officer on the field, the colonels made him "officer of the day" on October 2 at Shelby\'s suggestion: as the senior Virginia colonel he was neutral in a North Carolina seniority quarrel and could execute the council\'s plans without anyone outranking anyone. His regiment took the brunt of the fighting and the highest Patriot losses. Men remembered him running the line at the end shouting that it was murder to keep killing now the flag was up. He died of illness in 1781, weeks before Yorktown. No reliable life portrait survives.' },
    { name: 'Isaac Shelby', role: 'Col., Sullivan County militia, Patriot', side: 'u', img: '/war-img/rev-kings-mountain-shelby.jpg', bio: 'A Maryland-born colonel of the Sullivan County settlements (in today\'s northeast Tennessee) and, with Sevier, the prime mover of the whole muster. He financed powder and supplies on personal credit. It was Shelby who, decades later, wrote down the famous fire-and-sword threat that the over-mountain men said had sent them across the mountains; his 1823 pamphlet is both a key source and a self-interested one, the only chain the threat ever had. He drove his men into the ring on the ridge, and tradition has him stopping the executions at Bickerstaff\'s after the ninth man. He was twice governor of Kentucky; counties and towns across the South bear his name.' },
    { name: 'John Sevier', role: 'Col., Washington County militia, Patriot', side: 'u', img: '/war-img/rev-kings-mountain-sevier.jpg', bio: 'A Virginia-born land speculator and Indian fighter known as "Nolichucky Jack," colonel of the Washington County men of the Watauga and Nolichucky. He led his settlers up one of the wooded slopes of the ridge. He is the honest counterweight in the story: that December he led a campaign that burned Cherokee towns, the same hand that fought for the settlements\' freedom also taking the Cherokee land those settlements sat on. He became the first governor of Tennessee, six times over.' },
    { name: 'Benjamin Cleveland', role: 'Col., Wilkes County (N.C.) militia, Patriot', side: 'u', img: '', bio: 'A Wilkes County, North Carolina colonel of some three hundred pounds, already notorious in the backcountry for the summary hanging of Tories. He joined the column with about 350 Wilkes and Surry men at Quaker Meadows, with Major Joseph Winston. At Bickerstaff\'s Old Fields a week after the battle he was one of the driving forces of the court that condemned the prisoners. No reliable life portrait survives.' },
    { name: 'James Williams', role: 'Col., South Carolina militia, Patriot', side: 'u', img: '', bio: 'A South Carolina militia colonel from the Ninety Six district, commanding a separate South Carolina contingent that joined the pursuit with Lacey and Hill\'s men on October 6. He was mortally wounded near the very end of the fight, shot as the white flags were going up, and died the next day, October 8: the senior Patriot fatality of the battle. His fall in those final minutes is one of the things said to have fed the surge of revenge firing into the surrendering Loyalists.' },
    { name: 'Patrick Ferguson', role: 'Maj., Inspector of Militia · the only British soldier on the field, Loyalist', side: 'c', img: '', bio: 'A Scottish judge\'s son from Aberdeenshire, a cornet in the Scots Greys at fifteen and the inventor of a breech-loading flintlock rifle a trained man could fire several times a minute lying down. A musket ball shattered his right elbow at Brandywine in 1777, crippling the arm for life; he taught himself to fence and write left-handed. Appointed Inspector of Militia for South Carolina in May 1780, he spent the summer raising and drilling Loyalist militia as the western flank guard of Cornwallis\'s invasion. He was thirty-six. He commanded a thousand American Loyalists, the only British soldier among them, and he chose to stand on the ridge rather than run the last miles to Cornwallis. He directed the fight from horseback with a silver whistle, his crippled arm useless, and was shot from the saddle trying to cut his way out, refusing to surrender. No verified life portrait of him is known to survive.' },
    { name: 'Abraham de Peyster', role: 'Capt., King\'s American Regiment · second in command, Loyalist', side: 'c', img: '', bio: 'A New York Loyalist captain of the King\'s American Regiment, Ferguson\'s second in command, from one of Manhattan\'s oldest Dutch families: a one-line emblem of the truth that the "British" officers here were Americans too. When Ferguson fell, command passed to him, and it was de Peyster who raised the white flag that was shot down. Tradition has him protesting to Campbell afterward that the killing had been "damned unfair." He survived the battle and the captivity that followed, and ended his life exiled to New Brunswick. No reliable life portrait survives.' },
    { name: 'Alexander Chesney', role: 'Capt., Ferguson\'s adjutant, Loyalist', side: 'c', img: '', bio: 'Ferguson\'s adjutant, an Irish-born South Carolina Loyalist farmer who had emigrated from County Antrim in 1772. His journal is one of the prime eyewitness accounts of the battle. His very existence is a reminder of why "the only British soldier" is the careful phrase: both armies were full of Ulster- and Britain-born immigrants, Chesney among them, so Ferguson was the only Briton in arms but not the only man born in Britain. He was captured on the ridge. No reliable life portrait survives.' },
  ],
  outcome: {
    verdict: 'Patriot victory · total, and the turn of the southern tide',
    text: 'An army no government had raised destroyed the king\'s Loyalist militia in the Carolinas in about an hour, killed its commander, kept firing after the white flags went up, and hanged nine prisoners a week later. The concrete consequences are not in doubt. Cornwallis abandoned his first invasion of North Carolina, evacuated Charlotte, and fell back to Winnsboro, South Carolina, for the winter. The backcountry Loyalists, having watched the king\'s militia annihilated and its survivors hanged, never again turned out in force to a British column, and the Loyalist-manpower theory that the whole southern strategy rested on died on the hill. The South would now have to be won by regulars alone, which is the road to Cowpens, Guilford Courthouse, and Yorktown. Thomas Jefferson, looking back, called it "that turn of the tide of success" that ended the war in American independence; Sir Henry Clinton called it the first link in a chain of evils that ended in the total loss of America. It was also, almost to a man, Americans killing Americans, and it did not stop when the shooting did.',
  },
  sections: [
    { id: 'the-threat', eyebrow: 'The muster', title: 'A threat over the mountains', blurb: 'After Charleston and Camden destroyed the regular American army in the South, Major Patrick Ferguson swept the foothills raising Loyalist militia and, the story goes, sent word over the Appalachian crest: desist, or he would come over, hang the leaders, and lay the country waste with fire and sword. Whether he ever said it, the frontier settlements acted as if he had. They mustered an army no government had ordered at Sycamore Shoals, crossed a snow-covered gap in the Blue Ridge, and ran him down the foothills for two weeks.' },
    { id: 'the-ridge', eyebrow: 'The battle', title: 'The ring on the ridge', blurb: 'About 900 picked riflemen surrounded Ferguson\'s thousand Loyalists on a wooded ridge and fought their way up through the trees, rifles against muskets and bayonets. Three times the bayonet charges swept them down the slopes, and three times they flowed back up behind the timber. Ferguson, directing the fight with a silver whistle, was shot from his horse refusing to surrender. Then the white flags went up, and the killing went on anyway.' },
    { id: 'the-reckoning', eyebrow: 'The aftermath', title: 'Tarleton\'s quarter, and the oak', blurb: 'The surrendering Loyalists were cut down to cries of "Tarleton\'s quarter" before the colonels could stop it; a week later, at Bickerstaff\'s Old Fields, a backcountry court tried the prisoners on civil-war charges and hanged nine of them from an oak by torchlight. Then the strategic wreckage: Cornwallis fell back out of North Carolina, backcountry Loyalism never recovered, and the men who had won walked home. The turn of the tide, and the cycle of revenge that turned with it.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/kings-mountain/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function KingsMountainPage() {
  return <BattleDossier data={DATA} />
}

/* FACT LEDGER — figures to fetch (born-verified Commons candidates per fact pack §10).
   Prefix every saved file rev-kings-mountain-*.jpg. Hero + the two portraits are
   the only images with a verified candidate; every other commander ships img:''.

   HERO  rev-kings-mountain-hero.jpg
     File:Battle of King's Mountain (NYPL Hades-257500-EM15424).jpg — 19th-c. battle
     print, NYPL scan, PD, 6000×3652 landscape (the flagged hero). Runner-up:
     File:OP 101 Battle of King's Mountain-original painting by Chappel (9093548180).jpg
     (Chappel original oil, State Archives of NC, no known restrictions, 2398×1648).
     CAPTION as a later (19th-century) imagining; no eyewitness art of this battle exists.
     DO NOT reuse rev-civilwar-kingsmountain.jpg (the Chappel ENGRAVING already on the
     civil-war-among-themselves theme page). DO NOT touch guerrilla-war-champ-ferguson.jpg
     (Champ Ferguson, a different war).

   PORTRAIT  rev-kings-mountain-shelby.jpg
     File:Isaac Shelby by Matthew H. Jouett.jpg — PD, 818×1024 portrait.

   PORTRAIT  rev-kings-mountain-sevier.jpg
     File:Portrait of Governor John Sevier.jpg — attrib. Charles Willson Peale c.1792,
     PD, 825×1261 portrait. (Alt: File:John Sevier.jpg, 549×845, same attribution.)

   NO VERIFIED PORTRAIT — ship img:'' (a missing portrait beats a wrong one):
     Patrick Ferguson (only death scenes + a Ferguson-rifle photo on Commons),
     William Campbell, Benjamin Cleveland, Abraham de Peyster, Alexander Chesney,
     James Williams, William Chronicle, the McDowells.

   OPTIONAL inline figures available if a section wants them (NOT wired here):
     File:Gathering-of-overmountain-men-branson-tn1.jpg — Lloyd Branson, "Gathering of
       the Overmountain Men at Sycamore Shoals" (1915 painting; this file the 1921 b/w
       repro), PD, 1636×815. The muster image; caption as a 1915 painting.
     File:Death of Major Ferguson at King's Mountain (NYPL Hades-257502-EM15426).jpg —
       Ferguson shot from his horse, 19th-c. print, NYPL, PD, 6000×3590.
     File:Kings Mountain National Military Park, April 2015 - grave of Patrick Ferguson.JPG
       — the marked grave, CC BY 3.0 (ATTRIBUTION REQUIRED — credit the photographer per
       the file page). The "still there today" closer.
*/
