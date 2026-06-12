'use client'

// BATTLE dossier (The Siege of Vincennes, February 23–25, 1779), American Revolution.
// Thin data wrapper over the shared <BattleDossier>. Content produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates (fact + storytelling + newcomer-clarity + framing, parallel) →
// reconcile → revise. Sides: American (rev blue rail) / Hamilton's garrison on the
// British (red) rail; the win marker rides the American rail. Portrait honesty per
// the final: NO verified portrait of this Henry Hamilton exists on Commons (several
// men share the name), so his card ships img: '' — a wrong likeness is worse than
// none; Bowman, Helm, Vigo, and Hay likewise ship imageless (no born-verified
// portrait of any of them was located). Vigo is a NON-COMBATANT civilian
// intelligence source, so his card uses the neutral 'n' affiliation with its own
// sideLabel rather than a combatant side-tag. Clark's Jouett portrait is posthumous
// (c. 1825); the caveat is carried in his bio tail. The casualty streams are kept
// separate per the fact pack (siege / ambushed war party + executions / the salute
// accident) and never bundled. Image prefix rev-vincennes-* (all NEW downloads; no
// in-repo reuse exists for these principals).
// Sources: audits/war-pipeline/rev-vincennes-final.md (+ rev-vincennes-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-vincennes' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · 1779',
  title: 'Vincennes',
  date: 'February 23–25, 1779',
  place: 'Vincennes, on the Wabash River (present-day Indiana)',
  note: 'The longest-odds march of the war. With no hope of holding the Illinois Country against the British governor of Detroit\'s spring offensive, a 26-year-old Virginia colonel chose the one move the enemy thought impossible: a midwinter march of about 180 miles across flooded prairie, the last week wading icy floodwater to the chest, to attack first. He bluffed a fort into surrender with a force a fraction of the size it looked, and put the British governor of the western frontier in Virginian irons without losing a single man in the fighting. He also had four captured Native warriors tomahawked in front of the fort gate, a calculated act that broke the garrison\'s will and taught the watching nations that British protection was worthless, paid for by men who had not raised the war it punished.',
  hero: { img: '/war-img/rev-vincennes-hero.jpg', pal: ['#7e7a6e', '#a8a294', '#2e2c25'], credit: 'Edward Mason · illustration · 1895 · Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: '~38 hours of siege (firing from ~8 p.m. Feb 23 through Feb 24, surrender ~10 a.m. Feb 25) after an 18-day, ~180-mile (290 km) march through winter floods' },
    { label: 'Casualties', value: 'American 0 killed, 1 wounded in the siege (6 more burned in a post-surrender accident; Maj. Bowman later died of it) · British ~5–7 wounded, 79 captured · plus the ambushed war party: 2 killed, 6 captured, 4 (five by some counts) of the prisoners executed' },
    { label: 'Winner', value: 'United States: the British governor of the western frontier surrendered without the loss of a single attacker in the fighting, and the bluff got its teeth from the executed prisoners', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'Clark\'s Illinois regiment', str: '~170 on the overland march (Virginia and Kentucky frontier riflemen plus French volunteers from Kaskaskia and Cahokia, nearly half the force); the armed row-galley Willing with ~40 more came up the Wabash and arrived Feb 27, two days too late', cmd: 'Lt. Col. George Rogers Clark', note: 'A force that should not have existed in February. Clark had taken the Illinois Country in 1778 without a battle, then watched the British retake Vincennes that December. With no way to hold his posts against a spring offensive, he marched the one direction the enemy thought impassable: straight across the drowned winter prairie, betting that an army nobody could believe was coming would arrive unannounced.' },
    { side: 'c', tag: 'British', force: 'Hamilton\'s garrison, Fort Sackville', str: 'about 90 in the fort (33 regulars of the 8th, or King\'s, Regiment plus Detroit militia and Indian Department officers; 79 surrendered)', cmd: 'Lt. Gov. Henry Hamilton', note: 'A reduced winter garrison. Hamilton had retaken Vincennes in December with a force that grew to several hundred, then dismissed most of his militia and nearly all his Native allies until spring, planning to scour the Illinois Country and Kentucky when the weather turned. He counted only about 35 or 36 of the men inside as reliably loyal; the French-Canadian militia in the fort would not fight their own kin in the town.' },
  ],
  casualties: {
    union: 1, csa: 85,
    unionLabel: 'American 0 killed · 1 wounded',
    csaLabel: 'British ~5–7 wounded · 79 captured',
    footnote: 'American: 0 killed and 1 lightly wounded in the entire siege. Then, during the victory salute on February 25, a captured British 6-pounder cannon touched off the loose gunpowder charges stacked at the battery, burning six men, among them Maj. Joseph Bowman, Clark\'s second-in-command and the campaign\'s diarist, who died of the burns that August: the campaign\'s only American officer death, caused by celebration, not combat. British: 0 to 1 killed in the firing (accounts differ on whether any garrison death occurred at the walls) and about five to seven wounded, several of them gunners hit at their pieces. Seventy-nine men marched out and surrendered. A separate stream from the siege itself: a British-allied war party of about 15 to 16 walked into the changed-hands town and was ambushed, two killed and six taken; of the captives, four (five by some counts) were executed before the fort gate, told in full in the second section.',
  },
  commanders: [
    { name: 'George Rogers Clark', role: 'Cmdr., Illinois regiment, American', side: 'u', img: '/war-img/rev-vincennes-clark.jpg', bio: <>A Virginia-born surveyor and Kentucky militia leader, a lieutenant colonel at 26: tall, red-haired, persuasive, and capable of deliberate brutality. The executions in front of Fort Sackville&apos;s gate were his order and his calculation, the same operational mind that paraded flags for an army that was not there. The February march was his idea, his gamble, and his masterpiece of will. Vincennes made him a national legend, but Detroit, his real objective, never came; he could never get the men or money for it, and his later life collapsed into debt, drink, a stroke, and an amputated leg. He never wrote that he had &quot;won the Northwest.&quot; Others wrote that for him. <em>Image: Matthew Harris Jouett&apos;s portrait, painted about 1825 after Clark&apos;s death; no portrait of him in his frontier prime survives.</em></> },
    { name: 'Joseph Bowman', role: 'Maj., second-in-command, American', side: 'u', img: '', bio: 'A Frederick County, Virginia officer, Clark\'s second-in-command and the campaign\'s contemporaneous diarist. He led the company that took Cahokia without a shot in July 1778, and his terse journal is the march\'s most trustworthy record: "No provisions yet. Lord help us!" He was the campaign\'s highest-ranking American death, and he was not killed by the enemy. Captured gunpowder exploded during the victory salute on February 25 and burned him horribly; he died that August.' },
    { name: 'Leonard Helm', role: 'Capt., American', side: 'u', img: '', bio: 'A Virginia frontiersman who held Vincennes for Clark in the fall of 1778 with a token force, then surrendered it to Hamilton on December 17 when his local militia melted away, receiving the honors of war. He spent the siege as a prisoner inside Fort Sackville, and then helped talk Hamilton into surrendering it. Days later he led the boat party that captured the British supply convoy coming down the Wabash from Detroit. (The beloved story of his cannon-and-whiskey surrender to Hamilton in December is tradition, not record.)' },
    { name: 'Francis Vigo', role: 'Intelligence / financier', side: 'n', sideLabel: 'AMERICAN ALLY', img: '', bio: 'A Sardinian-born fur trader of St. Louis and a Spanish subject sympathetic to the Americans, whose intelligence made the march possible. Detained at Vincennes by Hamilton\'s scouts and released under pressure from the town, he reached Kaskaskia on January 29, 1779 with exactly what Clark needed: Hamilton\'s reduced winter garrison, his cannon, and his spring intentions. Vigo also helped finance the operation. The debt Virginia owed him was not paid to his estate until 1875, nearly forty years after he died poor.' },
    { name: 'Henry Hamilton', role: 'Lt. gov. of Detroit, British', side: 'c', img: '', bio: 'An Irish-born career officer, lieutenant governor and Indian agent at Detroit from 1775, and a capable administrator and amateur artist (his sketches of Great Lakes Native leaders, now at Harvard\'s Houghton Library, are the earliest such collection). On orders from London he organized and supplied Native war parties against the frontier, and so became, to Kentucky, "the Hair-Buyer." His December counterstroke at Vincennes was bold and well run; his February choices, wintering with a reduced garrison and trusting the town\'s re-sworn oath, handed Clark the opening. His campaign journal is candid and observant, unsparing about Clark\'s executions and about his own side\'s collapse.' },
    { name: 'Jehu Hay', role: 'Maj., Detroit Indian Department, British', side: 'c', img: '', bio: 'Hamilton\'s deputy and the Detroit Indian Department officer whom American frontier opinion, with Hamilton, most associated with directing the raids. He helped persuade Hamilton to accept terms on February 24. He was sent to Virginia in irons with Hamilton and exchanged in 1781, and was later appointed lieutenant governor of Detroit, where he died.' },
  ],
  outcome: {
    verdict: 'American victory · the march that could not be believed',
    text: 'Hamilton surrendered the fort and 79 men, and Clark sent him 1,200 miles east into Virginian irons. The campaign gave the infant United States a real presence in the Illinois Country, the founding of Louisville behind it, and an enduring national legend. What it did not do is what the legend later claimed: it did not win the Old Northwest at the 1783 peace. Detroit, the engine of the frontier war, never fell, and the war in the West got worse, not better, after 1779. Most historians now hold that Clark\'s conquest did not turn the boundary the negotiators drew in Paris. Randolph Downes put it that Clark "assisted the French and Indian inhabitants of that region to remove themselves from the very shadowy political rule of the British." The march made the legend; the negotiators made the map.',
  },
  sections: [
    { id: 'the-fort-changes-hands', eyebrow: 'The setup', title: 'The fort changes hands twice', blurb: 'Clark took the Illinois Country in 1778 without a battle, on the news that France had joined the war and a priest who swung a town to the American oath. Then the British governor of Detroit marched 600 miles in winter and took Vincennes back, dismissed most of his men for the season, and settled in to wait for spring, while one trader carried the news that changed Clark\'s mind.' },
    { id: 'the-drowned-lands', eyebrow: 'The march', title: 'The drowned lands', blurb: 'A hundred and seventy men, eighteen days, the last week wading the flooded Wabash bottoms with the water at the chest and the food gone. Then a bluff with too many flags, riflemen firing through the fort\'s gunports, and four captured warriors tomahawked before the gate so the watching garrison and the watching nations would learn what British protection was worth.' },
    { id: 'the-hair-buyer-in-irons', eyebrow: 'What it meant', title: 'The Hair-Buyer in irons', blurb: 'A salute that killed the man it honored, a British governor sent east to a Virginia cell on a charge his jailers could not prove, a frontier war that got worse, and a granite memorial built two centuries later to a conquest the record will not quite support.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/vincennes/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function VincennesPage() {
  return <BattleDossier data={DATA} />
}
