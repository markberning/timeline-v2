'use client'

// BATTLE dossier (The Siege of Yorktown, 1781), American Revolution — the
// decisive finale of the vertical: the surrender that broke Britain's will to
// keep fighting, told as one closing trap with the sea as the hinge. Thin data
// wrapper over the shared <BattleDossier>. Content produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author →
// critic gates (fact + storytelling + newcomer-clarity + framing, parallel) →
// reconcile → revise. Sides: American on the rev US rail / French folded into
// the allied win, Cornwallis's army on the British (red) rail; the win marker
// rides the American (allied) side.
//
// HANDLE-WITH-CARE framings per the fact pack: the central fact is that the
// battle was unwinnable without the French fleet — the Sept 5 Battle of the
// Chesapeake is the actual decisive moment, the siege is the execution. The
// "World Turned Upside Down" tune is APOCRYPHAL (first printed 41–47 years
// later by a man who was not there; no contemporary account names any tune) —
// framed as tradition, NEVER as fact. Cornwallis's illness stated as the
// reason he gave, motive NOT diagnosed (the illness was real; shame/calculation
// unprovable). Prisoner total framed "more than 7,000" with the fuller range in
// the dossier stats, never a clean single soldier count. The McPherson
// "simultaneity" argument attributed to "historians of the campaign," not a
// named scholar's quote. Hamilton's exact age left out (1755 vs 1757 disputed).
//
// Portrait honesty: O'Hara ships with NO image (img: '', no born-verified
// likeness; never risk a wrong portrait). de Grasse + Hamilton are new
// born-verified Commons fetches (rev-yorktown- prefix). Washington, Lafayette,
// Cornwallis, Tarleton, Knox, Rochambeau, Lincoln are in-repo born-verified
// reuses. The Trumbull "Surrender of Lord Cornwallis" hero is an idealized
// history painting (Cornwallis absent; figures from separate sittings) — the
// caption says so. The van Blarenberghe siege view is NOT used here (the spine
// already runs it).
// Sources: audits/war-pipeline/rev-yorktown-factpack.md.

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-yorktown' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'The Finale · 1781',
  title: 'Yorktown',
  date: 'September 28 – October 19, 1781 · surrender October 19',
  place: 'Yorktown, Virginia, on the York River',
  note: 'The battle that broke Britain\'s will to keep fighting, and the one place in the whole war where the decisive blow fell at sea. Cornwallis fortified a tobacco port on a Virginia peninsula on the one condition that the Royal Navy held the water around it. A French admiral in the Caribbean chose to bring his whole fleet north on a self-imposed deadline; on September 5 that fleet beat the British off the Virginia Capes and shut the bay, and Cornwallis\'s safe anchorage became a trap with the sea sealed behind it. Washington and Rochambeau ran a textbook three-week siege, Hamilton\'s light infantry stormed the redoubt that unlocked the closing parallel, and on October 19 more than 7,000 men marched out and laid down their arms. The man who took the British sword was Benjamin Lincoln, the general who had surrendered Charleston and been denied the honors of war eighteen months before. The war was not over. It would take nearly two years to formally end. But the will to win it died here.',
  hero: { img: '/war-img/rev-yorktown-hero.jpg', pal: ['#b7a98c', '#e6dcc4', '#5c5240'], credit: 'John Trumbull, "Surrender of Lord Cornwallis," 1820 · U.S. Capitol Rotunda · public domain · an idealized history painting: Cornwallis was absent and the figures were composed from separate portrait sittings' },
  sideNames: { u: 'ALLIED', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'September 28 allied investment · first parallel opened October 6 · Redoubts 9 and 10 stormed October 14 · parley October 17 · surrender October 19, 1781 · twenty-two days of siege' },
    { label: 'Casualties', value: 'Allied ~389 killed and wounded in the land siege · British several hundred killed and wounded (artillery made the count unreliable) · and more than 7,000 soldiers surrendered, plus more than 800 sailors and 240-odd guns, roughly a third of all British troops in North America' },
    { label: 'Winner', value: 'Franco-American victory · the largest British capitulation of the war and the effective end of major combat on the mainland, won at sea before it was won on land', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The allied army', str: '~19,000–19,800 on land (roughly 8,800 Americans + 7,800–10,800 French), plus de Grasse\'s fleet of 24 ships of the line in the bay', cmd: 'Gen. George Washington · Gen. comte de Rochambeau', note: 'A combined Franco-American force, larger on the French side than the American once the fleet and its sailors are counted. The siege artillery, the engineers who ran the European-style siege, and the fleet that sealed the bay were all French. Roughly 8,800 Americans (Continental regulars, the full-time paid soldiers of the Continental Army, plus Virginia militia, part-time citizen soldiers) and 7,800 or more French regulars closed around Yorktown; the Marquis de Lafayette had pinned Cornwallis in Virginia for months so the army would still be there when the trap shut.' },
    { side: 'c', tag: 'British', force: 'Cornwallis\'s southern army', str: '~8,000–9,000, about half of them German auxiliaries; roughly half sick by the surrender, plus ~700 across the river at Gloucester Point', cmd: 'Lt. Gen. Earl Cornwallis', note: 'The core of the British southern army, worn down by the Carolinas campaign and by malaria endemic to the Virginia Tidewater in summer. Cornwallis dug in at Yorktown in August 1781 under contradictory orders from his superior, Sir Henry Clinton in New York, to hold a deep-water naval station on the Chesapeake. The position was sound as long as the Royal Navy held the sea. Once de Grasse won the bay, it was a death trap with water at its back, and Clinton\'s promised relief fleet sailed from New York the very day Cornwallis surrendered.' },
  ],
  casualties: {
    union: 389, csa: 500,
    unionLabel: 'Allied ~389 killed & wounded in the siege',
    csaLabel: 'British several hundred killed & wounded + more than 7,000 captured',
    footnote: 'Allied: about 88 killed and 301 wounded in the land siege, roughly 389 in all, not counting the naval action of September 5. French losses in the storming of Redoubt 9 were heavier than the American losses at Redoubt 10 (about 15 killed and 77 wounded to the Americans\' 9 and 25). British: the siege killed and wounded are genuinely hard to count, because most of the dying was done by artillery; sources run from roughly 140 to 300 killed and 300 to 600 wounded, so "several hundred killed and wounded" is the honest figure. The catastrophe, as at Charleston, was the surrender, not the fighting: more than 7,000 soldiers (sources run from roughly 7,400 to as high as 7,700, the count varying by which categories of personnel are included), plus more than 800 sailors and 240-odd guns, marched into captivity on October 19. That was roughly one-third of all British forces in North America at the time. The casualty bar carries the British figure as the magnitude of the disaster: the captured army, not the men killed.',
  },
  commanders: [
    { name: 'George Washington', role: 'Commander in chief, American', side: 'u', img: '/war-img/rev-monmouth-washington.jpg', bio: 'Commander of the Continental Army since 1775, and in six years he had never won a pitched battle against a major British force; Long Island, Brandywine, and Germantown were all losses, and Trenton, Princeton, and Monmouth were smaller affairs. Yorktown was his only siege victory of the war, and it came on a plan he had not chosen: through the spring he had wanted to attack New York, and Rochambeau quietly steered the campaign to the Chesapeake instead. He ceremonially fired the first American cannon on October 9, by the contemporary journal of Continental Army surgeon James Thacher. At the surrender he handed the British sword to his own second in command, the answer to Charleston he had written out by hand the day before.' },
    { name: 'Comte de Rochambeau', role: 'French army commander', side: 'u', img: '/war-img/rev-french-rochambeau.jpg', bio: 'A French career officer of nearly forty years\' service, fifty-six at Yorktown to Washington\'s forty-nine, who had brought his expeditionary army to Newport, Rhode Island, in July 1780 and then waited an entire year for naval superiority before it could be used. He exercised command with extraordinary tact, deferring to Washington in public while privately making the case to de Grasse for the Chesapeake. At the surrender ceremony, when O\'Hara offered him the sword, he shook his head and pointed to Washington. The siege guns, the engineers, and the fleet that made the victory possible were all his nation\'s.' },
    { name: 'Comte de Grasse', role: 'French fleet commander', side: 'u', img: '/war-img/rev-yorktown-degrasse.jpg', bio: 'The French admiral whose single decision made Yorktown possible. At Cap-Français in Saint-Domingue (present-day Haiti) on August 5, he committed not a detachment but his whole West Indies fleet, twenty-eight ships of the line, to the Chesapeake, borrowed 3,000 troops from the islands, arranged a cash loan in Havana to fund the campaign, and set his own return deadline of mid-October. On September 5 he beat Admiral Thomas Graves off the Virginia Capes and shut the bay. Six months later, at the Battle of the Saintes in April 1782, Admiral Rodney shattered his fleet and captured him aboard his own flagship; he spent two years a prisoner-guest in England. A 24-to-19 advantage in ships of the line was the arithmetic of the siege.' },
    { name: 'Marquis de Lafayette', role: 'Light infantry commander, American', side: 'u', img: '/war-img/rev-monmouth-lafayette.jpg', bio: 'The French volunteer who had been a major general in the Continental Army since 1777. In the spring of 1781 Washington sent him to Virginia with a small Continental force to do one thing: keep Cornwallis from escaping south and lose him nowhere. Outnumbered most of the way, he shadowed and contained the British army for months, and it is the direct reason Cornwallis was still at Yorktown when the trap closed. Once Washington arrived, Lafayette commanded the American light infantry in the siege, the corps that furnished Hamilton\'s storming party at Redoubt 10.' },
    { name: 'Henry Knox', role: 'Artillery commander, American', side: 'u', img: '/war-img/rev-trenton-knox.jpg', bio: 'The Boston bookseller turned artillery general who had hauled the captured Ticonderoga guns to Boston in the winter of 1775 to 1776, and chief of artillery for the Continental Army throughout the war. At Yorktown he ran the American batteries and helped site the combined allied bombardment of some 155 guns that battered the British works almost without pause from October 9 to October 17. He stood beside Washington and Lincoln when the first American gun fired.' },
    { name: 'Alexander Hamilton', role: 'Stormed Redoubt 10, American', side: 'u', img: '/war-img/rev-yorktown-hamilton.jpg', bio: 'Washington\'s former aide-de-camp, who had resigned in February 1781 after a quarrel and had been pressing his old chief for a field command ever since. He got it at Yorktown, maneuvering to take the assault on Redoubt No. 10 on the night of October 14. His light infantry went in with bayonets fixed and muskets deliberately unloaded, so that no accidental shot could give the attack away in the dark. The redoubt fell in about ten minutes, at a cost of roughly 9 killed and 25 wounded, and the second siege parallel could finally be closed.' },
    { name: 'Benjamin Lincoln', role: 'Second in command, American', side: 'u', img: '/war-img/rev-charleston-lincoln.jpg', bio: 'The major general who had surrendered Charleston to Clinton on May 12, 1780, the largest American capitulation of the war, and been denied the honors of war by the British, his colors furled and no march-out tune allowed. Exchanged that November, he was chosen by Washington as second in command for Yorktown, and deliberately placed to receive O\'Hara\'s sword at the surrender, the exact, pointed reversal of Charleston. After the war he became the first Secretary of War under the Articles of Confederation.' },
    { name: 'Charles, Earl Cornwallis', role: 'Commander at Yorktown, British', side: 'c', img: '/war-img/rev-charleston-cornwallis.jpg', bio: 'A career soldier who had won at Camden and prevailed at Guilford Courthouse at heavy cost, and whose relationship with his superior, Sir Henry Clinton, had curdled into mutual blame by 1781; their post-war pamphlet war is one of the loudest in the era\'s memoir literature. He marched into Virginia against Clinton\'s wishes, was driven by contradictory orders to the coast, and fortified Yorktown in August. He planned the October 16 sortie and the failed Gloucester escape, and, pleading illness, did not attend the surrender ceremony. The illness was real; whether disgust also kept him away cannot be known.' },
    { name: 'Charles O\'Hara', role: 'Surrendered for Cornwallis, British', side: 'c', img: '', bio: 'The Irish-born brigadier who had served through the southern campaign and been wounded at Guilford Courthouse. With Cornwallis absent, O\'Hara led the British surrender column on October 19 and offered his commander\'s sword first to Rochambeau, whether to surrender to a European royal court rather than to a colonial general, or from a genuine misreading of protocol, no contemporary source records. Rochambeau pointed him to Washington, who pointed him to Lincoln. O\'Hara later governed Gibraltar.' },
    { name: 'Banastre Tarleton', role: 'Cavalry at Gloucester Point, British', side: 'c', img: '/war-img/rev-charleston-tarleton.jpg', bio: 'The dragoon commander whose name the southern war had already made a byword, posted across the York River at Gloucester Point with roughly 700 men, holding what Cornwallis intended as his escape route. On October 3 his foraging party collided with the Duc de Lauzun\'s French hussars and Virginia militia at the Battle of the Hook, the most significant cavalry engagement of the Revolution; Tarleton was unhorsed and wounded, saved by his men, and driven back. For the rest of the siege his force was pinned at Gloucester, and the door it was guarding was the one the river-storm slammed shut.' },
  ],
  outcome: {
    verdict: 'Franco-American victory · the surrender that broke Britain\'s will to keep fighting',
    text: 'Yorktown was won at sea before it was won on land. Remove the French fleet and nothing about the siege works: there is no naval blockade to seal the bay, no siege train brought down from Newport, no reason Cornwallis cannot simply be lifted off by the Royal Navy. Historians of the campaign stress that every strand had to arrive at once, and they did, and the largest British army in the South marched out and grounded its arms. The man who took the sword was the man who had given up Charleston. And then the war went on. Britain still held New York, Charleston, and Savannah with some 30,000 troops, the Royal Navy fought on and would crush de Grasse at the Saintes six months later, and the legal end did not come until the Treaty of Paris on September 3, 1783. What ended at Yorktown was not the war. It was Britain\'s political will to reconquer thirteen colonies by force. By spring 1782 the House of Commons had voted against continuing the offensive, and Lord North\'s government fell. Yorktown ended a campaign, and ended it so completely that the rest became a matter of time.',
  },
  sections: [
    { id: 'the-trap', eyebrow: 'The hinge', title: 'The sea decides it', blurb: 'Cornwallis fortifies a Virginia port that is safe only as long as the Royal Navy holds the water around it. A French admiral in the Caribbean chooses to bring his whole fleet north on a deadline only weeks wide; on September 5 it beats the British off the Virginia Capes and shuts the bay. Washington and Rochambeau\'s secret roughly 450-mile march south converges on the same week, and the deep-water refuge becomes a trap with the sea sealed behind it.' },
    { id: 'the-parallels', eyebrow: 'The siege', title: 'Digging the lines closed', blurb: 'A textbook European siege: the allies open the first parallel on October 6 and a bombardment of 155 guns opens on the 9th. The second, closer parallel cannot be finished until two British redoubts fall, so on the night of October 14 two columns storm them with the bayonet, Hamilton\'s Americans on Redoubt 10 with unloaded muskets, the French on the bloodier Redoubt 9. A last British sortie spikes a few guns; a river storm drowns the escape across to Gloucester Point.' },
    { id: 'the-sword', eyebrow: 'The surrender', title: 'The honors answered', blurb: 'On October 17 a drummer beats a parley and the guns fall silent. Two days later the British march out with colors cased, the same humiliation Britain had dealt at Charleston, returned in kind. Cornwallis stays away, pleading illness; his deputy offers the sword to the French, who send him to Washington, who sends him to Benjamin Lincoln. By tradition a band played a tune called "The World Turned Upside Down," though no one who was there ever wrote it down. The war was not over. The will to win it was.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/yorktown/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function YorktownPage() {
  return <BattleDossier data={DATA} />
}

/* FACT LEDGER — figures to fetch / verify at image-pass time (born-verified):
 *
 * NEW Commons fetches (set paths above; download + verify at build):
 *  - rev-yorktown-hero.jpg     = John Trumbull, "Surrender of Lord Cornwallis," 1820,
 *      U.S. Capitol Rotunda version. File:Surrender_of_Lord_Cornwallis.jpg
 *      (3000×1978, PD: artist d.1843 / pub. before 1931). LANDSCAPE — fits the hero band.
 *      Caption MUST flag: idealized history painting, Cornwallis absent, figures from
 *      separate sittings. NOT the van Blarenberghe (the spine already runs that).
 *  - rev-yorktown-degrasse.jpg = de Grasse. File:Le_Comte_de_Grasse_(NYPL_Hades-256529-EM14846).jpg
 *      (NYPL Emmet Collection, PD pre-1931). Portrait orientation — card/inline only.
 *  - rev-yorktown-hamilton.jpg = Alexander Hamilton. File:Alexander_Hamilton_portrait_by_John_Trumbull_1806.jpg
 *      (White House collection, Trumbull, PD pre-1931). Portrait orientation — card/inline only.
 *
 * IN-REPO REUSES (born-verified already; no fetch needed):
 *  - rev-monmouth-washington.jpg  = Washington (Revolution-era commander portrait)
 *  - rev-french-rochambeau.jpg    = Rochambeau
 *  - rev-monmouth-lafayette.jpg   = Lafayette (Revolution-era; NOT the 1790s Court portrait,
 *      so no "as he appeared in the 1790s" caveat is needed here)
 *  - rev-trenton-knox.jpg         = Knox
 *  - rev-charleston-lincoln.jpg   = Benjamin Lincoln (REUSE per brief)
 *  - rev-charleston-cornwallis.jpg= Cornwallis
 *  - rev-charleston-tarleton.jpg  = Tarleton (Reynolds, 1782)
 *
 * NO IMAGE (img: '') — never risk a wrong portrait:
 *  - Charles O'Hara — no Commons PD portrait found in the pack (NPG London restricted).
 *
 * NOT USED HERE (avoid duplication / wrong frame):
 *  - van Blarenberghe "Siege of Yorktown" — the SPINE already runs it (phase-narratives.ts).
 *  - Trumbull Yale study — would duplicate the Capitol hero.
 *  - Couder 1836 / DeVerger watercolor — candidates for inline siege beats if scenes
 *    are wanted later (both PD); not wired this pass to keep the page portrait-clean.
 */
