'use client'

// BATTLE dossier (Battles of Lexington & Concord, April 19, 1775), American
// Revolution. Thin data wrapper over the shared <BattleDossier>. Content produced
// through the war content pipeline (audits/war-content-pipeline.md): fact pack →
// author → critic gates (fact + story + clarity + framing) → reconcile → revise.
// Sides are war-aware: American (Continental blue) / British (redcoat red), set via
// sideNames + sideColors from the rev skin vars. Parker, Pitcairn, and Heath have
// no authentic likeness (img: ''), and the bios say so. First shot at Lexington is
// irreducibly unknown and never resolved. Image prefix rev-lexington-*.
// Sources: audits/war-pipeline/rev-lexington-final.md.

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-lexington' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'Battle · 1775',
  title: 'Lexington & Concord',
  date: 'April 19, 1775',
  place: 'Middlesex County, Massachusetts',
  note: 'A secret raid that found a half-emptied warehouse, then had to fight its way home through 16 miles of countryside that had been organizing for exactly this day for months.',
  hero: { img: '/war-img/rev-lexington-hero.jpg', pal: ['#3a382c', '#5a4f38', '#14130e'], credit: 'Amos Doolittle, Plate I, "The Battle of Lexington" · engraving, published December 1775 (1903 Goodspeed reprint, Concord Museum) · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Forces', value: 'British ~1,700–1,900 · American ~3,500–4,000 in relays' },
    { label: 'Duration', value: '~15 hours of fighting · a 16-mile (26 km) running battle' },
    { label: 'Winner', value: 'American strategic victory', win: 'u' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The Massachusetts town militia', str: '~3,500–4,000 engaged in relays by day\'s end, from dozens of towns', cmd: 'No single commander · Capt. John Parker at Lexington, Col. James Barrett at Concord, Brig. Gen. William Heath by afternoon', note: 'Never one army under one command: town companies arriving, firing, falling back, and being replaced by fresher companies from the next town, all day, for 16 miles.' },
    { side: 'c', tag: 'British', force: 'Smith\'s column + Percy\'s relief brigade', str: '~700 grenadiers & light infantry (the regiments\' elite assault and skirmish companies) + ~1,000–1,400 under Percy with two 6-pounder field guns', cmd: 'Lt. Col. Francis Smith · Brig. Gen. Hugh, Earl Percy', note: 'On paper, not a battle at all: seize and destroy the Concord stores, hurt nobody. Smith\'s men were under arms about 21 hours and marched roughly 35 to 40 miles.' },
  ],
  casualties: {
    union: 95, csa: 273,
    unionLabel: 'American ~93–95',
    csaLabel: 'British 273',
    footnote: 'British: 73 killed, 174 wounded, 26 missing, of ~1,700–1,900 engaged (about 15 percent). American: 49 killed, 39–41 wounded, about 5 missing, of the ~3,500–4,000 engaged across the day. Almost all of it fell on the road, not the green or the bridge: Menotomy alone cost roughly 40 British and 25 American dead.',
  },
  commanders: [
    { name: 'John Parker', role: 'Capt., Lexington militia, American', side: 'u', img: '', bio: 'A Lexington farmer and mechanic, a veteran of the French and Indian War (Britain\'s earlier war against France in North America), and at 45 dying of tuberculosis; some accounts say that on April 19 he could barely speak above a whisper. He commanded the roughly 77 men on the green at dawn, and that afternoon he rallied the survivors, men who had buried neighbors that morning, and ambushed the returning column at the Lincoln and Lexington town line. Too ill to fight at Bunker Hill (the war\'s next battle, outside Boston that June), he died that September, age 46. No authentic likeness of him exists.' },
    { name: 'Francis Smith', role: 'Lt. Col., expedition commander, British', side: 'c', img: '/war-img/rev-lexington-smith.jpg', bio: 'A heavy, methodical professional with thirty years in the 10th Regiment of Foot, chosen by Gage for seniority and steadiness and criticized afterward for slowness. His early decision to send back for reinforcements arguably saved his column, and he was shot in the thigh in the fighting east of Concord. The criticism never stopped his rise: he held brigade commands later in the war and eventually became a lieutenant general. He died in 1791.' },
    { name: 'John Pitcairn', role: 'Maj., advance commander, British', side: 'c', img: '', bio: 'A Royal Marines officer from Fife in Scotland, in Boston from late 1774 commanding about 600 marines, and unusual in that Bostonians respected him as one of the fairer officers of the British occupation of the town. He led the advance companies onto Lexington green. At Fiske Hill (a rise on the retreat road just short of Lexington) his horse threw him and bolted into the American lines carrying his silver-mounted pistols, which were captured and carried through the war on the American side by Israel Putnam. Two months later he was killed at the Battle of Bunker Hill (the next battle, on the hills above Charlestown that June), leading marines up Breed\'s Hill and dying in the arms of his son. No authentic portrait of him is known to exist.' },
    { name: 'Hugh, Earl Percy', role: 'Brig. Gen., relief commander, British', side: 'c', img: '/war-img/rev-lexington-percy.jpg', bio: 'Heir to the Duke of Northumberland, a member of Parliament, and a professional soldier who had personally opposed the government\'s coercive American policy yet marched when ordered. His brigade and its two field guns met Smith\'s broken column east of Lexington and almost certainly saved it, and his swerve to Charlestown (the peninsula just across the water from Boston) at the end of the day dodged a planned ambush at the Great Bridge. His letter home the next day, warning that the rebels were no "irregular mob," is the day\'s most honest British verdict.' },
    { name: 'William Heath', role: 'Brig. Gen., Massachusetts militia, American', side: 'u', img: '', bio: 'A farmer from Roxbury (the town just south of Boston), one of the Massachusetts militia\'s general officers, and the first American general officer on a battlefield of the Revolution. He reached Lexington in mid-afternoon with Dr. Joseph Warren (the Boston rebel leader who had sent out the riders the night before) and, by his own later account, directed the arriving companies into a moving ring of skirmishers (men fighting spread out in loose order) around Percy\'s column rather than letting them mass into targets for the cannon. He went on to serve through the war as a major general in the colonies\' new joint Continental army.' },
  ],
  outcome: {
    verdict: 'American strategic victory · by morning Boston was under siege',
    text: 'Smith\'s regulars executed Gage\'s orders almost to the letter and it did not matter: the stores were mostly gone before they arrived, 273 of them were casualties by nightfall, and the column was saved from destruction only by Percy\'s relief brigade. By the next morning the militia of four colonies were camped in a ring around Boston, and within days both sides were racing sworn testimony across the Atlantic, because each understood that who fired first mattered as much as who won the road. Gage had sent 700 men out to empty a warehouse; what he got back was a garrison under siege.',
  },
  sections: [
    { id: 'the-regulars-are-coming-out', eyebrow: 'The night before', title: 'The regulars are coming out', img: '/war-img/rev-lexington-hancock-clarke.jpg', blurb: 'Gage\'s secret raid on the Concord stores leaked before the boats were in the water. Riders, church bells, and signal guns put a county on the road by morning, because the towns had spent months building a system for exactly this night.' },
    { id: 'the-green-the-bridge-and-the-road', eyebrow: 'April 19', title: 'The green, the bridge, and the road', img: '/war-img/rev-lexington-north-bridge.jpg', blurb: 'Eight dead at dawn on Lexington green, a shot nobody can assign, an ordered American volley at the North Bridge, and then the real battle: 16 miles of road home, fought from behind every wall, with the worst of it house-to-house in Menotomy.' },
    { id: 'a-siege-by-morning', eyebrow: 'What it meant', title: 'A siege by morning', img: '/war-img/rev-lexington-jason-russell.jpg', blurb: 'The casualty returns, the race to tell London who fired first, and the siege that began that night. The raid that was supposed to prevent a war had started one instead.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/lexington-concord/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution' },
}

export default function LexingtonConcordPage() {
  return <BattleDossier data={DATA} />
}
