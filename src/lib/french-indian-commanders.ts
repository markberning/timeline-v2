// "Follow a commander through the war" — the French & Indian War cast registry.
//
// The F&I analogue of civil-war-commanders.ts. Each commander is defined ONCE
// (canonical name, side, portrait, life dates, a short overview, and how their war
// ended), with an `appearances` list keyed by the battle id in FRENCH_INDIAN.battles
// (src/lib/wars/french-indian.ts). The per-battle `note` is that commander's beat in
// that battle, condensed from the already-gated commander strip shipped in the battle
// dossier; the overview + fate are new prose that cleared the war critic pipeline
// (fact-check + storytelling gate; see audits/war-pipeline/fi-cast-prose.md).
//
// Sides here are 'u' (British) / 'c' (French), matching the battle dossiers. The six
// recurring commanders carry the whole war from the Pennsylvania backwoods to the
// surrender of Montreal. Native leaders appear once each in the battle layer and below
// the recurrence bar, so the cast is British/French; the arcs keep the Native nations
// as independent actors in the prose, never props.

import { makeCastLookup } from '@/lib/wars/cast-lookup'

export type FISide = 'u' | 'c'

export interface FICommanderAppearance {
  battleId: string      // matches an id in FRENCH_INDIAN.battles
  role: string          // their rank / role in THIS battle
  note: string          // the beat: what they did here
  transition?: string   // when set, a labeled divider renders BEFORE this beat
}

export interface FICommander {
  id: string
  name: string
  side: FISide
  portrait: string
  born: number
  died: number
  epithet: string
  overview: string
  fate: string
  appearances: FICommanderAppearance[]
}

const MONTCALM: FICommander = {
  id: 'montcalm',
  name: 'Louis-Joseph de Montcalm',
  side: 'c',
  portrait: '/war-img/fi-montcalm.jpg',
  born: 1712,
  died: 1759,
  epithet: 'Commander of the French regulars in Canada',
  overview:
    "A French marquis who had soldiered nearly his whole life (an ensign at nine, five sabre wounds and captured at Piacenza in 1746), Montcalm reached Quebec in 1756 to command the king's regulars in North America. For three years he was the central French commander of the war and won every battle he fought, Oswego, Fort William Henry, and Carillon, by the European rulebook he trusted. That same rulebook, when he denied his beaten enemies the honours of war or granted them and cut his Native allies out of the bargain, kept colliding with his allies' idea of what a victory was.",
  fate:
    "At Quebec in September 1759 the British appeared on the heights behind the city, and Montcalm chose to come out and attack at once rather than wait. His army was broken in fifteen minutes on the Plains of Abraham. He was shot in the retreat, carried inside the walls, and died at dawn the next morning. His decision to fight in the open has been argued over ever since.",
  appearances: [
    { battleId: 'fi-oswego', role: 'Cmdr., French',
      transition: "Newly arrived from France to command the king's regulars, Montcalm fights his first American battle.",
      note: "His first American victory: a textbook European siege that erased Britain's only foothold on Lake Ontario in four days. When he denied the garrison the honours of war, his European rules ran headlong into his allies' war aims over the prisoners, a grim rehearsal for the next summer." },
    { battleId: 'fi-fort-william-henry', role: 'Cmdr., French',
      note: "He ran the siege by the book and gave Monro the honours of war, terms he negotiated without consulting the nearly 2,000 Native allies whose victory those terms cancelled. When the killings followed he waded in to pull captives back. He won the fort and wrecked the alliance that kept New France in the war." },
    { battleId: 'fi-carillon', role: 'Cmdr., French',
      note: "Outnumbered roughly four to one, he did the one thing that could even the odds and made his men fight from behind a chest-high log breastwork fronted by acres of sharpened felled trees. He held the gateway to Canada against an army four times his size and counted it the victory of his life." },
    { battleId: 'fi-quebec', role: 'Cmdr., French (mortally wounded)',
      note: "He held Quebec all summer by refusing to come out from behind the Beauport lines. When the British turned up on the heights he judged the walls too weak for a siege and attacked at once, before they could entrench and before Bougainville could come up behind them. He was shot in the retreat and died the next morning." },
  ],
}

const WASHINGTON: FICommander = {
  id: 'washington',
  name: 'George Washington',
  side: 'u',
  portrait: '/war-img/fi-washington-1772.jpg',
  born: 1732,
  died: 1799,
  epithet: 'Young Virginia officer whose war was just beginning',
  overview:
    "A Virginia officer barely into his twenties, Washington was at the very start of the chain that lit the whole war. His night attack at Jumonville Glen in 1754 and his surrender at Fort Necessity weeks later were the opening shots of the French and Indian War, and a diplomatic catastrophe he never quite shook. A year later he rode through the worst of the disaster on the Monongahela untouched and walked off the field with the reputation that would carry him the rest of his life.",
  fate:
    "His French and Indian War was a hard apprenticeship: a scandal, the only army he ever surrendered, and then the making of his name in a catastrophe. He came out of it the most admired soldier in Virginia, and the war was only the beginning of his career. Two decades later he would command the army that won American independence, and he died in 1799, the first president of the country he had helped create.",
  appearances: [
    { battleId: 'fi-jumonville', role: 'Cmdr., British (Lt. Col.)',
      transition: "A twenty-two-year-old lieutenant colonel marches into the dark and helps set off a world war.",
      note: "He led the overnight march and the dawn attack on the glen and came out with a one-sided tactical win and a diplomatic catastrophe. Within weeks the killing of Jumonville under his command was an international scandal, and he would unknowingly sign a document that called it an assassination." },
    { battleId: 'fi-fort-necessity', role: 'Cmdr., British (Col.)',
      note: "Newly in command after Colonel Fry's death, he misjudged the ground, underestimated the French revenge force, and was besieged in a flooded stockade as the rain ruined his powder. He signed the capitulation that night without realizing the French text confessed to assassination. It was the only army he ever surrendered." },
    { battleId: 'fi-monongahela', role: 'Volunteer aide, British',
      note: "A volunteer aide with no formal command, still weak from dysentery, he rode through the worst of the fire carrying Braddock's orders with two horses shot under him and four bullets through his coat. When the army broke he pulled together the rear guard that covered the retreat, and walked off the field with his reputation made." },
  ],
}

const LEVIS: FICommander = {
  id: 'levis',
  name: 'François-Gaston, Chevalier de Lévis',
  side: 'c',
  portrait: '/war-img/fi-levis.jpg',
  born: 1719,
  died: 1787,
  epithet: 'The last French field commander in Canada',
  overview:
    "Montcalm's ablest subordinate, Lévis began the war as a commander of the line and ended it as the last man fighting for New France. He held the left at Carillon, and after Montcalm died at Quebec he took up the French command, rebuilt the broken army over a winter, and beat the British in the open field at Sainte-Foy in 1760. He was a fighter to the bone, and he wanted to fight to the end. (Sources differ on his birth year, usually given as 1719 or 1720.)",
  fate:
    "His victory at Sainte-Foy saved nothing: the wrong fleet came up the thawed river and his siege train was too small to take Quebec back. When the three British armies closed on Montreal he wanted a last stand on an island in the river, and Vaudreuil forbade it. Denied that and denied the honours of war, he had his regiments burn their colors so the British could never parade them as trophies. He went home to a long career in France and was made a marshal of France, and a duke, only decades later, dying in 1787.",
  appearances: [
    { battleId: 'fi-carillon', role: 'Cmdr. of the left, French',
      note: "He came in the day before the battle with about four hundred more men as the defensive line was nearly finished, and took command of the French left in the lopsided victory over Abercromby's army." },
    { battleId: 'fi-sainte-foy', role: 'Cmdr., French (wins)',
      transition: "With Montcalm dead and Quebec lost, Lévis takes up the French command and marches to take the capital back.",
      note: "He pulled the surviving army back to Montreal after Quebec fell, rebuilt it over the winter, and marched roughly 150 miles down the thawing St. Lawrence. He beat Murray in the open at Sainte-Foy, the last French win of the war in Canada, but his siege train was too small to finish the job." },
    { battleId: 'fi-montreal', role: 'Field cmdr., French',
      note: "The best soldier France had left in Canada, he wanted to make a last stand on an island in the river rather than surrender, and Vaudreuil forbade it. Denied a fight and denied the honours of war, he had his regiments burn their colors so the British could never parade them." },
  ],
}

const WOLFE: FICommander = {
  id: 'wolfe',
  name: 'James Wolfe',
  side: 'u',
  portrait: '/war-img/fi-james-wolfe.jpg',
  born: 1727,
  died: 1759,
  epithet: 'The general who took Quebec and died winning it',
  overview:
    "A thin, red-haired, restless, ferociously ambitious officer, Wolfe made his name in two campaigns at opposite ends of the same war. At Louisbourg in 1758 he was the brigadier handed the hardest job, the assault landing, and saved it. A year later he commanded the army that took Quebec, the climactic battle of the war and the fall of New France, and died on the field in the moment his gamble came good.",
  fate:
    "At Quebec he spent a frustrating summer of brutal raids and the bloody failure at Montmorency, then staked everything on the night landing at the Anse au Foulon. He put his army up the cliff and onto the open ground at the city's gate, and broke the French attack in fifteen minutes. He was hit in the wrist and then twice more in the body, and died on the field as his gamble came good. The famous deathbed scenes and recited poetry are later legend, not record.",
  appearances: [
    { battleId: 'fi-louisbourg', role: 'Brig., British',
      transition: "A restless brigadier is handed the hardest job of the campaign, the assault landing.",
      note: "When the boats were being raked to pieces in the surf he signaled the recall, then seized on a few boatloads that had found a sheltered slot of rock and funneled the whole division through it, turning a failing assault into the foothold that won the fortress." },
    { battleId: 'fi-quebec', role: 'Cmdr., British (killed in victory)',
      transition: "From siege brigadier at Louisbourg, Wolfe is given his own army and the prize the whole war had circled toward.",
      note: "After a frustrating summer he staked everything on the night landing at the Anse au Foulon, put his army up the cliff onto the Plains of Abraham, and broke the French in fifteen minutes. He was struck three times and died on the field as the victory came good." },
  ],
}

const AMHERST: FICommander = {
  id: 'amherst',
  name: 'Jeffery Amherst',
  side: 'u',
  portrait: '/war-img/fi-jeffery-amherst.jpg',
  born: 1717,
  died: 1797,
  epithet: 'The methodical general who conquered Canada',
  overview:
    "A methodical, unhurried soldier who won by strangling fortresses rather than storming them, Amherst took the great sea fortress of Louisbourg in 1758 and rose to commander-in-chief in North America. In 1760 he designed the three-army convergence on Montreal that ended the war, a closing fist rather than a battle. Twice he refused beaten garrisons the honours of war, citing the killings that had followed earlier surrenders.",
  fate:
    "He won at Montreal almost without a fight and finished the conquest of Canada, but his peace proved harder than his war. As the new master of the interior he cut off the customary gifts to Native nations, treating them as subjects rather than allies, and that decision helped set off Pontiac's War three years later. He lived until 1797, long honoured at home for the conquest, his name still attached to the Native policy that sparked the rising.",
  appearances: [
    { battleId: 'fi-louisbourg', role: 'Cmdr., British',
      note: "He held overall command on land and ran the siege by the book, strangling the fortress rather than storming it. When Drucour asked for the honours of war he refused, citing the killings after Oswego and Fort William Henry, and the garrison went to England as prisoners." },
    { battleId: 'fi-montreal', role: 'Cmdr.-in-chief, British',
      transition: "Now commander-in-chief, Amherst designs the three-army convergence that ends the war.",
      note: "He set three armies out from three edges of the colony, hundreds of miles apart, and brought them onto the island within about a day of one another, leaving the French no gap to slip through. He won without a real fight, denied the garrison the honours of war, and as the new master of the interior cut off the gifts to Native nations, helping set off Pontiac's War." },
  ],
}

const JOHNSON: FICommander = {
  id: 'johnson',
  name: 'Sir William Johnson',
  side: 'u',
  portrait: '/war-img/fi-william-johnson.jpg',
  born: 1715,
  died: 1774,
  epithet: "The Crown's man among the Six Nations",
  overview:
    "An Irish-born New York agent to the Iroquois, not a professional soldier, Johnson fought his war through the alliances he built rather than the rank he held. He had lived among the Mohawk and learned their language, and the partnership with the Six Nations was the thing he brought to the field that no British general could. He won a rare British victory at Lake George in 1755, alongside Mohawk allies who paid a heavy price for it, and took command of the siege of Fort Niagara in 1759 after its general was killed.",
  fate:
    "His battles were the smaller part of his war. As the Crown's Superintendent of Indian Affairs for the northern colonies he became the central figure in British diplomacy with the Native nations of the north, the office and the relationships outlasting the fighting. He was made a baronet for Lake George and lived until 1774, dying on the eve of the Revolution that would tear apart the Mohawk world he had married into and built his life around.",
  appearances: [
    { battleId: 'fi-lake-george', role: 'Cmdr., British (Maj. Gen.)',
      transition: "An Indian agent, not a soldier, takes the field and brings the Mohawk alliance Braddock had thrown away.",
      note: "He brought the Mohawk alliance to the campaign and held a barricade of wagons and cannon at the head of the lake. Wounded early in the hip and carried from the field, he won a rare British victory in a disastrous year, while his Mohawk allies lost their leader Hendrick and dozens of fighters, a loss out of all proportion that a small people could not easily absorb." },
    { battleId: 'fi-niagara', role: 'Took command, British',
      note: "As Superintendent of Indian Affairs he brought roughly 945 Haudenosaunee allies to Niagara. When Brigadier Prideaux was killed by his own guns he took command of the formal siege and accepted Pouchot's surrender. The British-allied Haudenosaunee held the blocking position at La Belle-Famille after their emissaries asked their French-allied kin to stand aside." },
  ],
}

export const FI_COMMANDERS: Record<string, FICommander> = {
  montcalm: MONTCALM,
  washington: WASHINGTON,
  levis: LEVIS,
  wolfe: WOLFE,
  amherst: AMHERST,
  johnson: JOHNSON,
}

export const fiCommanderIds = Object.keys(FI_COMMANDERS)

// Look up a commander's arc id by the display name used in a battle dossier's
// commander strip (curly quotes normalized so both apostrophe glyphs match).
const FI_CAST_BY_NAME: Record<string, string> = {
  'Louis-Joseph de Montcalm': 'montcalm',
  'George Washington': 'washington',
  'François-Gaston, Chevalier de Lévis': 'levis',
  'François-Gaston, the Chevalier de Lévis': 'levis',
  'François de Lévis (the Chevalier de Lévis)': 'levis',
  'James Wolfe': 'wolfe',
  'Jeffery Amherst': 'amherst',
  'Sir William Johnson': 'johnson',
}

export const fiCastIdForName = makeCastLookup(FI_CAST_BY_NAME)
