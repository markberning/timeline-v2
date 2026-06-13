'use client'

// BATTLE dossier (Bonhomme Richard vs. Serapis, September 23, 1779), American
// Revolution — the vertical's only naval battle and its first naval page, fought
// off Flamborough Head on England's own coast. Thin data wrapper over the shared
// <BattleDossier>. Content produced through the war content pipeline
// (audits/war-content-pipeline.md): fact pack → author → critic gates (fact +
// storytelling + newcomer-clarity + framing, parallel) → reconcile → revise.
// Sides: Jones's Franco-American squadron on the rev US rail / Pearson's escort
// on the British (red) rail; the win marker rides the American side. Legend
// control per the final: the famous line is NEVER printed as fact (the dossier
// note carries Jones's own documented "most determined negative"); the Landais
// broadsides are fact, deliberate treachery alleged only; casualties are honest
// ranges only — the bar is drawn near-even at the range midpoints because the
// one verified headline is "roughly half of each crew," and the footnote says
// so. Portrait honesty: Dale, Landais, Cottineau, and Piercy ship with NO image
// (img: '', no born-verified portraits exist — never risk a wrong likeness).
// Hero + card = the Richard Paton oil painted within a year of the battle.
// Image prefix rev-bonhomme-richard-*.
// Sources: audits/war-pipeline/rev-bonhomme-richard-final.md (+ rev-bonhomme-richard-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-bonhomme-richard' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'The War at Sea · 1779',
  title: 'Bonhomme Richard vs. Serapis',
  date: 'September 23, 1779 (evening, by moonlight)',
  place: 'The North Sea, off Flamborough Head, Yorkshire, England',
  note: 'The legend battle. A worn-out converted merchantman under a Scottish-born American captain grappled a brand-new British warship within sight of crowds on the English coast, and won. Jones lost by every measure on the way to it: two of his big guns burst at the first fire, his own consort (the Alliance, the other American warship in his squadron) raked him from behind, his ship was shot through and through, and two days later she sank. He answered the call to surrender "in the most determined negative," as he wrote it himself, and it was the Englishman who struck. The Royal Navy still owned the sea the next morning. What changed was the story Europe told about the Americans.',
  hero: { img: '/war-img/rev-bonhomme-richard-hero.jpg', pal: ['#39414f', '#67718a', '#11151c'], credit: 'Richard Paton · oil painting · 1780 · Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'about 3.5 hours, most of it lashed hull to hull · first broadsides about 7 p.m., the British colors struck "at half an hour past 10 o\'clock" (Jones\'s report)' },
    { label: 'Casualties', value: 'roughly half of each crew killed or wounded · Bonhomme Richard about 140–170 of ~320, Serapis at least 117 (Pearson\'s own incomplete return); no verified totals survive' },
    { label: 'Winner', value: 'United States: both British escort warships captured, but the convoy they guarded escaped; the Bonhomme Richard sank two days later and Jones sailed home in the captured Serapis to the Texel (a Dutch anchorage)', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'Jones\'s squadron', str: 'Bonhomme Richard (~40 guns, ~320 in crew) with the Alliance (36), Pallas (32), and Vengeance (12)', cmd: 'Capt. John Paul Jones', note: 'A French-financed squadron under American colors, raiding around the British Isles. The flagship was an old, slow, converted East Indiaman (a merchant ship built for the long voyage to India), her crew swept up from half the ports of Europe and stiffened by French marines, under American officers. The squadron sailed half-controlled: each captain had signed an agreement that left him nearly independent, which is the thread that runs through everything the Alliance did that night.' },
    { side: 'c', tag: 'British', force: 'The Baltic convoy escort', str: 'HMS Serapis (rated 44 guns, brand new) and the hired Countess of Scarborough (20), guarding a 40-plus-ship convoy', cmd: 'Capt. Richard Pearson', note: 'A frigate (a fast warship rated by her guns, here a powerful new one carrying 44, roughly the same size as the Bonhomme Richard but far more heavily armed, with twenty heavy cannon on her lower deck alone), launched only that March, escorting the timber, hemp, and tar of British sea power home from the Baltic. On sighting Jones, Pearson did the one thing that mattered: he put his ships between the enemy and the convoy and waved the merchantmen inshore to safety. They escaped. Then he fought a ship that would not sink until it had taken his.' },
  ],
  casualties: {
    union: 155, csa: 140,
    unionLabel: 'American ~140–170 of ~320',
    csaLabel: 'British 117+ (likely ~130–150)',
    footnote: 'American: about 140 to 170 killed and wounded aboard the Bonhomme Richard, of a crew around 320: roughly half the ship. British newspapers claimed about 70 dead; the higher modern counts run to ~170 total. No muster-verified figure exists; every precise number in print traces to a partisan report. British: at least 117 killed and wounded aboard the Serapis, the hardest single figure being Pearson\'s own incomplete return (49 killed "and many more," 68 wounded); probably nearer 130 to 150. Again, about half the crew. The honest headline for both ships is the same: roughly half the men on each were killed or wounded. The grenade explosion on the Serapis\'s lower deck and the British heavy guns firing clean through the Richard\'s hull did the bulk of the killing on either side, and no definitive totals survive for either.',
  },
  commanders: [
    { name: 'John Paul Jones', role: 'Cmdr., the squadron, American', side: 'u', img: '/war-img/rev-bonhomme-richard-jones.jpg', bio: 'Born plain John Paul in 1747, a gardener\'s son on Scotland\'s Solway coast, the same firth he later raided. He went to sea at about thirteen, made merchant master, and added "Jones" to his name after killing a mutinous sailor at Tobago in 1773 and fleeing to America rather than stand trial. In the Continental Navy he made himself its best fighting captain and Britain\'s favorite villain, caricatured in the London prints as "Paul Jones the Pirate," and not just in the print shops: Britain\'s government called him a pirate as a matter of diplomatic policy, demanding he be handed over wherever his flag appeared. He raided the English coast in the Ranger in 1778 and beat a Royal Navy warship in a fair fight off Ireland. Prickly, vain, and relentless, he was equally capable of writing florid apology letters and of fighting his own ship while she sank under him. At Flamborough Head he was thirty-two.' },
    { name: 'Richard Dale', role: 'First lieutenant, Bonhomme Richard, American', side: 'u', img: '', bio: 'Virginia-born, twenty-two at the battle, and the most quietly important officer aboard: he had escaped from an English prison earlier in the war, commanded the Richard\'s gun deck, led the party that boarded and took possession of the Serapis, and was wounded in the action\'s last minutes. He went on to become one of the first six captains of the new United States Navy in 1794. He matters to this page for one more reason: in 1825, an old man recalling the battle for a biographer, he is the sole source of the most famous sentence in American naval history.' },
    { name: 'Pierre Landais', role: 'Cmdr., the Alliance, American squadron', side: 'u', img: '', bio: 'A Saint-Malo-born French ex-naval officer who had once sailed on Bougainville\'s voyage around the world, made an honorary citizen of Massachusetts, and handed the Continental frigate Alliance as France\'s answer to Lafayette, on paper. He was insubordinate the whole cruise. At Flamborough Head he brought the one fresh, undamaged ship in the squadron up to the locked pair and fired his broadsides into both, hulling his own flagship again and again. Whether that was panic, blindness, or worse was argued for the rest of his life and never settled. He was court-martialed out of the American navy the next year, for a later voyage, not for this night, and died poor in New York in 1820, still petitioning for prize money.' },
    { name: 'Denis-Nicolas Cottineau', role: 'Cmdr., the Pallas, French', side: 'u', img: '', bio: 'The French captain of the Pallas, who fought and took the Countess of Scarborough after about an hour: the battle\'s forgotten second action, going on in the dark beyond the main fight. He later called Landais a coward to his face and was badly wounded by him in the duel that followed.' },
    { name: 'Richard Pearson', role: 'Cmdr., HMS Serapis, British', side: 'c', img: '/war-img/rev-bonhomme-richard-pearson.jpg', bio: 'Born in Westmorland in 1731, at sea from the age of fourteen, badly wounded as a young lieutenant in the Seven Years\' War, and a post-captain by 1773. He read the situation off Flamborough Head instantly: his job was the convoy, not glory, so he put the Serapis between Jones and the merchant ships, sent them running for safety, and fought on long after the fight was hopeless because stopping sooner meant only abandoning the ground he was buying. He lost his ship and saved his convoy, which was the whole point. Court-martialed (the automatic Royal Navy proceeding for any captain who loses his ship) and honorably acquitted in March 1780, he was knighted, given the freedom of four towns, and presented with plate by the convoy\'s own insurers, the most honest reward of all. The Royal Navy launched a new Serapis in 1782, a rare honor for a beaten ship.' },
    { name: 'Thomas Piercy', role: 'Cmdr., Countess of Scarborough, British', side: 'c', img: '', bio: 'Commanded the hired twenty-gun Countess of Scarborough, the convoy\'s second escort. He fought the larger Pallas for about an hour before striking his colors, outgunned exactly as his commodore was, and was acquitted alongside Pearson.' },
  ],
  outcome: {
    verdict: 'American victory · the convoy escaped, and Jones lost his ship winning',
    text: 'Both British escort warships were captured and a Royal Navy frigate struck her colors to the Continental flag in England\'s own home waters. And Pearson accomplished his actual mission: the Baltic convoy, the thing of strategic value, escaped essentially intact. Britain lost a frigate and a news cycle; it did not lose the naval stores, and it did not lose the sea. The Royal Navy\'s command of the ocean was untouched, and the war\'s decisive naval battle, at the Chesapeake Capes in 1781, would be fought and won by France, not by John Paul Jones. What this night changed was not the balance of fleets. It was the story. Franklin in Paris now had a British warship beaten on its own coast to retail at Versailles, and a cause whose own navy had mostly burned that same season had its one piece of priceless theater.',
  },
  sections: [
    { id: 'a-noose-around-britain', eyebrow: 'The raider', title: 'A noose around Britain', blurb: 'Who John Paul Jones was, and what a French-financed squadron under American colors was doing off the Yorkshire coast. The Continental Navy never tried to fight Britain for the sea; it tried to make the sea expensive and embarrassing, and Jones, the difficult, brilliant captain who had already raided England once, looped the whole archipelago scattering panic until he collided with a Baltic convoy at the elbow of England.' },
    { id: 'the-fight-by-moonlight', eyebrow: 'The battle', title: 'The fight by moonlight', blurb: 'An outgunned old ship grapples a new one and makes the two a single burning raft. Two guns burst at the first fire, a sailor\'s grenade tears open the enemy\'s gun deck, the Richard\'s own consort sails around and fires into her, the gunner cries for quarter, and the ship is sinking under Jones\'s feet, and still it is the Englishman who strikes first.' },
    { id: 'the-most-famous-sentence', eyebrow: 'The legend', title: 'The most famous sentence he never wrote', blurb: 'What Jones actually wrote, what the 1779 newspapers printed, and how the line every American knows arrived forty-six years late from an old man\'s memory. Then the honest ledger: the captured frigate that sank under its victor, the Englishman who lost his ship and was knighted for it, and the news that crossed an ocean and became propaganda gold.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/bonhomme-richard/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function BonhommeRichardPage() {
  return <BattleDossier data={DATA} />
}
