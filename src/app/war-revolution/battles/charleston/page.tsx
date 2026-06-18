'use client'

// BATTLE dossier (The Siege of Charleston, 1780), American Revolution — the
// catastrophe battle of the vertical: the worst American defeat of the war,
// told as one closing trap. Thin data wrapper over the shared <BattleDossier>.
// Content produced through the war content pipeline
// (audits/war-content-pipeline.md): fact pack → author → critic gates (fact +
// storytelling + newcomer-clarity + framing, parallel) → reconcile → revise.
// Sides: American on the rev US rail / Clinton's army on the British (red)
// rail; the win marker rides the British side. HANDLE-WITH-CARE framings per
// the final: the captured total framed "more than 5,000" with the regulars
// range, NEVER a clean 5,466 soldier count (the footnote glosses the 5,466 vs
// ~2,650 split); the magazine explosion "perhaps two hundred"; "Tarleton's
// quarter" / "Bloody Ban" firewalled to the Waxhaws handoff; no
// surrender-ceremony or prison-hulk image invented. The casualty bar carries
// the capture as the number (more-than-5,000 framing: bar values are rounded
// magnitudes, ~5,230 American including the capture against ~400 British, the
// legend text overridden to the honest ranges). Portrait honesty: Woodford
// ships with NO image (img: '', no born-verified likeness in the pack — never
// risk a wrong portrait). Gadsden ships the Theus life portrait (verified at
// build; the Gadsden-flag fallback stays unused on disk). Image prefix
// rev-charleston-* (Clinton + Cornwallis are born-verified in-repo reuses
// copied to the prefix).
// Sources: audits/war-pipeline/rev-charleston-final.md (+ rev-charleston-factpack.md).

import { BattleDossier, type BattleData } from '@/components/mode/battle-dossier'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION } from '@/lib/wars/revolution'

const DATA: BattleData = {
  theatre: 'rev-battles',
  crumbs: warCrumbs(REVOLUTION, { lane: 'rev-battles', battleId: 'rev-charleston' }),
  backHref: '/war-revolution?theatre=rev-battles',
  eyebrow: 'The Catastrophe · 1780',
  title: 'Charleston',
  date: 'March 29 – May 12, 1780 · surrender May 12',
  place: 'Charleston (then Charles Town), South Carolina',
  note: 'The worst American defeat of the war. Britain bet the war on the South, sailed an army down through a killer winter, and locked Benjamin Lincoln\'s whole force inside a peninsula city that its own government would not let him leave. Six weeks of methodical European siege, the back door sealed by Tarleton\'s cavalry, the harbor fort taken without a shot, and then the largest surrender of American troops of the entire war: more than 5,000 men, seven generals, three hundred guns, a navy squadron. Then a single proclamation that helped ignite the partisan war and lose Britain the countryside it had just conquered.',
  hero: { img: '/war-img/rev-charleston-hero.jpg', pal: ['#8fa3b1', '#d9d0b6', '#3a4754'], credit: 'after Thomas Leitch · engraving by Samuel Smith · 1774 · Library of Congress / Wikimedia Commons · public domain' },
  sideNames: { u: 'AMERICAN', c: 'BRITISH' },
  sideColors: { u: 'var(--rev-us)', c: 'var(--rev-gb)' },
  stats: [
    { label: 'Duration', value: 'Feb 11 landing · April 1 formal siege opens · surrender May 12, 1780 · six weeks of siege, three months from the first landing' },
    { label: 'Casualties', value: 'American ~89 killed, ~138 wounded · British ~100 killed, a few hundred wounded · and more than 5,000 captured, the entire southern army · plus perhaps 200 dead in the May 15 magazine explosion, more than the siege killed on both sides combined' },
    { label: 'Winner', value: 'Britain · the worst American defeat of the war: a whole army, seven generals, three hundred guns, and a navy squadron taken at the cost of fewer than a hundred British dead', win: 'c' },
  ],
  sides: [
    { side: 'u', tag: 'American', force: 'The Southern army', str: '~5,500–6,000 inside the lines (about 2,500–2,800 Continentals + militia, armed citizens, and sailors)', cmd: 'Maj. Gen. Benjamin Lincoln', note: 'The entire Continental establishment in the South, trapped behind a fortified neck-of-peninsula line; Lincoln could have marched the army out while the back door was open, but the city\'s own government would not let him.' },
    { side: 'c', tag: 'British', force: 'Clinton\'s expeditionary army', str: '~10,000 rising to ~12,800–14,000 after reinforcement, plus ~4,500–5,000 sailors and a fleet', cmd: 'Lt. Gen. Sir Henry Clinton', note: 'The biggest combined land-and-sea operation of the war; Clinton landed thirty miles away, worked up the sea islands for six weeks, and took the city by methodical European siegecraft, not a single rash move.' },
  ],
  casualties: {
    union: 5230, csa: 400,
    unionLabel: 'American ~227 killed & wounded + more than 5,000 captured',
    csaLabel: 'British ~100 killed + a few hundred wounded',
    footnote: 'American: about 89 killed and 138 wounded in six weeks of siege; the catastrophe was the capture: more than 5,000 men (Clinton\'s return counted 5,466, but the genuinely effective Continentals numbered closer to 2,650), seven generals, more than 300 guns, and three Continental Navy frigates. British: around 100 killed, a few hundred wounded. Three days after the surrender a captured-arms magazine blew up on May 15, killing perhaps 200 people, more than the siege killed on both sides combined.',
  },
  commanders: [
    { name: 'Benjamin Lincoln', role: 'Cmdr., Southern Department, American', side: 'u', img: '/war-img/rev-charleston-lincoln.jpg', bio: 'A Hingham, Massachusetts farmer and militia officer, the sixth child of a prosperous colonel, who rose to major general by 1777 and took a ball in the ankle in the Saratoga campaign. Solid, honest, well liked, and unlucky: the failed Franco-American assault on Savannah in October 1779 was his, and at Charleston he was caught between a professional\'s duty to save the army and a city government that threatened to turn on him if he tried. He surrendered on May 12, was paroled, and was exchanged that November for a British major general. Eighteen months later, at Yorktown, as Washington\'s second in command, he received the surrendering British army, the man who gave up Charleston taking the sword that answered for it.' },
    { name: 'William Moultrie', role: 'Brig. (later Maj.) Gen., American', side: 'u', img: '/war-img/rev-charleston-moultrie.jpg', bio: 'A South Carolina planter-soldier and the hero of June 28, 1776, when his palmetto-log fort on Sullivan\'s Island shrugged off a British fleet for a whole day and kept the British out of the South for three years; the fort was renamed for him. In 1780 he was Lincoln\'s senior subordinate inside the lines, and he was one of the generals who wanted the army marched out while it still could be. His 1802 Memoirs are the indispensable American eyewitness account of the siege, including the night the sky filled with shells. He spent his captivity refusing every British inducement, and was twice governor of South Carolina afterward.' },
    { name: 'Christopher Gadsden', role: 'Lt. Gov. of South Carolina', side: 'u', img: '/war-img/rev-charleston-gadsden.jpg', bio: 'A Charleston merchant-radical who designed the coiled-rattlesnake "DON\'T TREAD ON ME" flag, and lieutenant governor in 1780, the loudest civilian voice against abandoning the city. He helped force Lincoln to stay, then on May 11, with the houses burning, led the citizens\' petition begging Lincoln to surrender on the best terms he could get. The political trap personified. Paroled as a civil officer, he was seized that August with other leading men, shipped to St. Augustine, refused a second parole, and spent about ten months in a dungeon of the Castillo de San Marcos.' },
    { name: 'William Woodford', role: 'Brig. Gen., American', side: 'u', img: '', bio: 'The Virginia general who led about 750 Continentals into Charleston on April 7 after a march of some 800 miles from Morristown, arriving in time only to be trapped with everyone else. Captured on May 12, he was shipped north and died that November aboard a British prison ship in New York harbor, one of the bitterest small arcs of the whole disaster.' },
    { name: 'Henry Clinton', role: 'Cmdr. in chief in North America, British', side: 'c', img: '/war-img/rev-charleston-clinton.jpg', bio: 'The British commander in chief in America since 1778, who planned and led this expedition in person, his masterpiece. Cautious and methodical by temperament, he had been humiliated off Charleston in 1776 and in 1780 refused every shortcut, taking the city by patient siegecraft and losing barely a hundred men to do it. He quarreled with Arbuthnot through the whole siege and with Cornwallis for the rest of the war, issued the June proclamation that abolished neutrality in South Carolina, and sailed home in early June genuinely believing the South was won.' },
    { name: 'Charles, Earl Cornwallis', role: 'Lt. Gen., second in command, British', side: 'c', img: '/war-img/rev-charleston-cornwallis.jpg', bio: 'Clinton\'s second in command, who once the Cooper River side was open took the force east of the river that sealed the last landward escape. When Clinton sailed for New York he was left behind with about 8,300 men and the whole job of holding and extending the conquest. Camden, the backcountry war, and the long road to Yorktown all begin from where he stood in June 1780, and so does a poisonous feud with Clinton that ran to the end of the war.' },
    { name: 'Banastre Tarleton', role: 'Lt. Col., British Legion, British', side: 'c', img: '/war-img/rev-charleston-tarleton.jpg', bio: 'A twenty-five-year-old Liverpool merchant\'s son commanding the British Legion, a corps of Loyalist cavalry and light infantry. His horses had died on the winter passage; he remounted on seized Carolina horses, and then in two night-and-dawn strokes, at Monck\'s Corner on April 14 and Lenud\'s Ferry on May 6, he destroyed the American cavalry posted outside the city and slammed the back door shut. Fast, ruthless, and effective. What happened two weeks after the siege ended, on a field called the Waxhaws, would make his name a byword for the rage of the southern war, but that is the next page\'s story.' },
  ],
  outcome: {
    verdict: 'British victory · the worst American defeat of the war',
    text: 'Clinton took the South\'s greatest city, an entire army, seven generals, three hundred guns, and a navy squadron, at the cost of fewer than a hundred dead. It looked total, and for a summer it was: Charleston and then Camden in August made the middle of 1780 the lowest point of the American cause anywhere. But Clinton then signed a proclamation that tore up the militia paroles and forced every man in South Carolina to choose a side, and thousands who had been content to sit out the war decided that if they had to fight for somebody, it would not be the king. It was one of the causes that helped ignite the partisan war, the victory that won Britain a city and lost it a countryside. And the army that marched out with its colors cased got the gesture returned at Yorktown, to the man: Benjamin Lincoln took the British surrender there, on Charleston\'s terms.',
  },
  sections: [
    { id: 'the-armada', eyebrow: 'The bet', title: 'The whole war on the South', blurb: 'After the stalemate in the North, Britain gambled the war on the southern colonies and their supposed Loyalist masses. Clinton sailed from New York into the worst winter of the century, lost his horses and an ordnance ship and one transport blown clean to England, then landed thirty miles from Charleston and spent six weeks working up the sea islands, refusing every shortcut, to put an army on the one land door into the city.' },
    { id: 'the-noose', eyebrow: 'The siege', title: 'Every door but one', blurb: 'The methodical European siege: parallels creeping toward the lines, the fleet sailing past the fort that was supposed to stop it, and the one escape route across the Cooper River snuffed out by Tarleton\'s cavalry in two night strokes. Inside, a city government that would not let the army leave, and a council that threatened to open the gates if it tried. Then the night the houses burned.' },
    { id: 'the-cased-colors', eyebrow: 'The surrender', title: 'The honors refused', blurb: 'An army marched out with its colors cased and forbidden to play a British march, the precise humiliation Yorktown would answer. Then a magazine explosion that killed more than the whole siege, prison hulks in the harbor, and a single proclamation that abolished neutrality and helped light the partisan war. The worst American defeat of the war, and the fuse of the one that followed.' },
  ],
  sectionHref: (id) => `/war-revolution/battles/charleston/s/${id}`,
  footer: { title: 'the American Revolution', sub: 'All the battles', href: '/war-revolution?theatre=rev-battles' },
}

export default function CharlestonPage() {
  return <BattleDossier data={DATA} />
}
