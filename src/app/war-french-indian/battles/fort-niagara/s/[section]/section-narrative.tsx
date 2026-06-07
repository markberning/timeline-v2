'use client'

// The Siege of Fort Niagara (July 1759), battle sections. Produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author (Opus) →
// critic gates (fact-check + storytelling + comprehensiveness + clarity + fairness,
// parallel) → reconcile → revise. Data only; rendered by the shared
// <BattleSectionReader>. House voice: no em-dashes; British/French side-tags once on
// first mention per section; the war named plainly (an imperial war that was, on the
// ground, a war over Native land in Haudenosaunee country, where the Six Nations were
// nobody’s tools). Sources: audits/war-pipeline/fi-niagara-*.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'

const NIAGARA_NARR: Record<string, Narr> = {
  'the-gateway-to-the-west': {
    eyebrow: 'Niagara · The key to the west',
    title: 'The gateway to the west',
    blocks: [
      { locator: {
        eyebrow: 'Where and when · July 1759',
        caption: 'Fort Niagara stood where the Niagara River meets Lake Ontario, the one valve on the carrying place between the lower and upper Great Lakes. The British came down the lake from their base at Oswego in the east. The relief column was destroyed at La Belle-Famille, about two miles south of the fort.',
        frame: { lonMin: -80.2, lonMax: -76.0, latMin: 42.8, latMax: 44.2 },
        states: [
          { name: 'New York', tone: 'focus', label: 'NEW YORK', labelLon: -77.2, labelLat: 43.05 },
          { name: 'Ontario', label: 'ONTARIO (NEW FRANCE)', labelLon: -79.3, labelLat: 43.9, labelSize: 12 },
        ],
        lakes: [
          { name: 'Lake Ontario', label: 'LAKE ONTARIO', labelLon: -77.6, labelLat: 43.7, labelSize: 13 },
          { name: 'Lake Erie', label: 'LAKE ERIE', labelLon: -79.6, labelLat: 42.9, labelSize: 12 },
        ],
        dots: [
          { name: 'Fort Niagara', date: 'Jul 1759', lat: 43.26, lon: -79.06, heavy: true, anchor: 'end' },
          { name: 'La Belle-Famille', lat: 43.23, lon: -79.05, color: '#8a8175', anchor: 'end', dy: 16 },
          { name: 'Fort Oswego', lat: 43.46, lon: -76.52, color: '#8a8175', anchor: 'start' },
        ],
      } },
      { p: 'There is one door between the lower Great Lakes and the upper ones, and Fort Niagara stood in it. Lake Erie pours north over Niagara Falls and down the Niagara River into Lake Ontario, and no boat can run the falls. To move men or muskets or barrels of trade goods from one lake to the other, you have to come ashore and carry everything overland around the cataract, along a path called the Niagara Portage. Whoever held that portage held the only practical road between the two halves of the inland sea. The French held it, with a stone fort planted where the river meets Lake Ontario.' },
      { fig: '/war-img/fi-niagara-1759-view.jpg', cap: 'A contemporary view of Fort Niagara, where the Niagara River meets Lake Ontario and the one valve stood on the carrying place between the lower and upper Great Lakes. Drawn on the spot in 1758 and engraved the month after the fort fell to Sir William Johnson on July 25, 1759.', credit: 'engraved for the Royal Magazine, after a 1758 drawing on the spot · engraving · London, September 1759 · New York Public Library (Emmet Collection) · public domain' },
      { p: 'That fort was not just a strongpoint. It was a valve on the whole French west. Through the Niagara carrying place ran the lifeline that tied the French towns on the St. Lawrence River to Detroit, to the upper Great Lakes, to the Ohio Country, and on down to Louisiana. Every soldier, every keg of powder, every blanket and gun bound for the western posts passed this one point. Cut it, and every French fort and trading house to the west and south would be left dangling at the end of a rope that no longer reached anything. They would starve, or surrender, or be abandoned.' },
      { p: 'The British understood this exactly, and in 1759 they meant to do it. That year was the British grand design against New France: drive at it from several directions at once and let it collapse inward. Major General James Wolfe (British) would go up the St. Lawrence against Quebec, the capital. Another army would push north up Lake Champlain. And a third would strike west for Niagara, to slam the western door and lock it. Take Niagara, and the entire French interior fell with it.' },
      { pill: '/war-french-indian/battles/quebec', plabel: 'Wolfe’s 1759 drive on Quebec, the eastern half of the plan' },
      { p: 'But the ground the armies were fighting over was not French ground, whatever the maps in Paris and London said. This was Haudenosaunee country, the homeland of the Six Nations of the Iroquois, and the land right around Niagara was Seneca country, the Seneca being the westernmost of those nations. The Niagara portage ran straight through their territory, and the Seneca held and worked that carrying place themselves, which gave them a direct, concrete stake in who controlled it. The Haudenosaunee were not props in a European war. They were a power in their own right, with their own diplomacy and their own interests, and both empires knew that nothing here could be done without reckoning with them.' },
      { p: 'The man who carried the British side of that reckoning was Sir William Johnson (British), the Crown’s Superintendent of Indian Affairs for the northern colonies, which made him the Crown’s official for diplomacy with the Native nations of the north. A settler who had lived among the Mohawk, learned their language and ways, he had built deeper ties to the Six Nations than any other Englishman alive. When the Niagara expedition marched, Johnson brought with him roughly nine hundred and forty-five Haudenosaunee warriors, not as hired soldiers under orders but as allies who had chosen, for their own reasons, to come. Among their leaders was Sayenqueraghta, a senior Seneca war chief who took the field alongside Johnson and carried real weight among the Six Nations.' },
      { p: 'In command of the expedition itself was Brigadier General John Prideaux (British), leading on the order of two thousand to twenty-five hundred regulars and New York and Rhode Island provincials, the part-time troops raised in the colonies, with Johnson’s warriors alongside. They came down Lake Ontario and landed near the fort in early July, and on July 6, 1759, they sat down in front of Fort Niagara to begin a siege.' },
    ],
    meanwhile: { region: 'New France', title: 'A garrison stripped thin', body: 'Niagara was supposed to be strong, but the demands of a war on every front had bled it. Earlier in 1759 the post had held a far larger force; by the time the British arrived, redeployments had drawn most of it away. The man left to hold the gateway to the entire French west had a garrison of only about five hundred.' },
  },

  'the-siege-and-the-fallen-general': {
    eyebrow: 'Niagara · The fallen general',
    title: 'The siege and the fallen general',
    blocks: [
      { p: 'The officer holding Fort Niagara was the best man the French could have had in it. Captain Pierre Pouchot (French) was a military engineer by training, and he had not merely been posted to Niagara, he had rebuilt it, enlarging the works and giving them new earthen ramparts. Reappointed its commander only that March, he now had to defend, against an army four or five times his size, the very fortifications he had drawn himself. He knew every angle of fire and every weak point because he had put them there, and he conducted the defense with skill, holding off the British guns far longer than his numbers had any right to.' },
      { fig: '/war-img/fi-niagara-pouchot-plan.jpg', cap: 'Pouchot’s own plan of Fort Niagara, the works he had rebuilt and then defended against an army several times his size. It was published in his Mémoires in 1781, long after he was forced to surrender the very ramparts he had drawn.', credit: 'Pierre Pouchot · engraved plan from his Mémoires sur la dernière guerre de l’Amérique Septentrionale · 1781 · John Adams Library, Boston Public Library · public domain' },
      { p: 'A siege is a methodical, grinding kind of war, less a battle than a slow strangling. The attackers do not charge a fort like Niagara; they dig. Prideaux’s men opened trenches and worked them forward toward the walls in a zigzag, the angled path keeping the defenders from firing straight down the length of a trench at the men inside it, hauling cannon and the short, fat mortars called cohorns up into batteries to pound the ramparts and drop shells inside. Day by day the British digging crept closer and the bombardment wore at Pouchot’s earthworks. Inside, the garrison patched the damage and waited, because a besieged fort lives or dies on one question: will help arrive before the walls do?' },
      { p: 'Then the siege turned on a freak accident. On or about July 20, with the trenches well advanced, Brigadier General Prideaux was killed, not by the French, but by his own artillery. The accounts differ on the exact way of it, but they agree it was his own ordnance that did it, a gun or a bursting mortar in his own battery, killing the general in the middle of his own siege. There is a particular strangeness to a death like that, a commander felled not by the enemy he faced but by his own guns, and the men felt it. The army had been brought all this way by Prideaux, and now, with the trenches still creeping forward, the man directing it all was simply gone, killed by the very weapons that were supposed to win him the fort.' },
      { p: 'Command did not fall to another regular general. It fell to Sir William Johnson, who now took charge of the entire siege. It was an unusual thing, the Crown’s diplomat to the Six Nations running a formal European siege, but Johnson did not let the works falter. He kept the trenches creeping forward and the guns firing, and the screw on Pouchot’s garrison kept tightening. From inside the fort, Pouchot could see the British lines drawing in and could measure how little time his walls had left. Everything now depended on the one thing he could not control: the relief column he had begged for, marching up from the west to break the siege from behind.' },
    ],
    meanwhile: { region: 'The Niagara works', title: 'Defending his own design', body: 'There is a strange symmetry in Pouchot’s stand. The ramparts the British shells were chewing apart were ramparts he had engineered. He knew their strength to the inch, which let him squeeze a remarkable defense out of a thin garrison, and he knew their limits to the inch too, which told him, more surely than any other man could have known, exactly how long he had.' },
  },

  'la-belle-famille': {
    eyebrow: 'Niagara · The relief destroyed',
    title: 'La Belle-Famille',
    blocks: [
      { p: 'Help was coming. Out at the western posts, in the Ohio Country, the French commander François-Marie Le Marchand de Lignery (French) had been gathering a force for a strike of his own when Pouchot’s call for rescue reached him in mid-July. He turned everything toward Niagara instead. From Fort Machault, one of the Ohio Country posts, and the western country he assembled a relief column of roughly eight hundred French regulars and militia together with several hundred Native allies, perhaps thirteen hundred men in all, and marched it up the Niagara portage trail to fall on the British besiegers from the rear and lift the siege.' },
      { p: 'The British knew it was coming. Johnson sent a blocking force down the portage road to stop the column before it could reach the fort, about two miles south of the walls, at a clearing called La Belle-Famille. There, on July 24, 1759, Lieutenant Colonel Eyre Massey (British) set a trap. He threw a breastwork, a barricade of logs and felled trees, straight across the road, and held it with a British line regiment backed by grenadiers, the tall, picked assault troops of a regiment, and light troops and a body of Johnson’s Haudenosaunee, on the order of nine hundred men in the blocking position. Then he waited for the French to walk into it.' },
      { fig: '/war-img/fi-niagara-belle-famille-map.jpg', cap: 'The trap at La Belle-Famille. While the British besieged Fort Niagara at the river’s mouth, the French relief column marched up the portage trail from the southwest; Massey’s blocking force broke it at a log breastwork about two miles short of the fort.', credit: 'Stuff Happened map' },
      { p: 'Before the shooting, something happened that belonged to the Haudenosaunee and to no European on the field. The warriors with the British and the warriors with the French were, many of them, of the same Six Nations, and they had no wish to kill one another in a quarrel between France and Britain. So they parleyed. The Haudenosaunee on the British side sent emissaries to their French-allied kin and asked them to stand aside and stay out of the coming fight. All but about thirty of the French-allied warriors agreed and withdrew, stripping the relief column of most of its Native strength. The British-allied Haudenosaunee, for their part, did not leave; they stayed in the blocking position and fought. When the relief column came on, it came thin, much of its fighting strength melted away by the choice of free nations who would not spend their men in someone else’s war.' },
      { p: 'What was left walked into the trap. Lignery and his co-commander Charles Philippe Aubry (French), for all their long experience in frontier war, came up the road without scouting it properly and pushed straight into the clearing. The French emerged from the trees and began shifting from a marching column into a firing line. The British were ready and waiting behind their barricade. The redcoats lay down, fixed bayonets, then rose and fired into the deploying French, volley after volley, and then came over the breastwork at them with the bayonet.' },
      { p: 'The relief column was destroyed. The killing was lopsided and brief: hundreds of the French force were shot down or taken prisoner, while the British behind their defenses lost only a few dozen. The column simply ceased to exist as a fighting force in a matter of minutes. Lignery was mortally wounded. Aubry was captured. The army that was supposed to save Fort Niagara was gone, scattered dead and prisoner across a clearing two miles short of the walls it had come to relieve.' },
      { p: 'For Pouchot inside the fort, that was the end. The relief he had staked everything on was annihilated, and no other was coming. With his garrison thin, his works failing, and his last hope destroyed two miles up the road, the situation was hopeless and he knew it. Within a day or two he surrendered Fort Niagara to Johnson. The terms were honorable, the kind extended to a garrison that had fought well: the officers and men kept their personal belongings and marched out under arms before being taken as prisoners of war. The capitulation also carried a clause protecting the French garrison from the Haudenosaunee, the memory of the killings at Fort William Henry two years before still fresh on everyone’s mind.' },
      { pill: '/war-french-indian/off-the-battlefield/native-alliances', plabel: 'Johnson, the Haudenosaunee, and the diplomacy that decided the day' },
      { p: 'The fall of Niagara did exactly what the British had designed it to do. The western door slammed shut, and everything behind it came loose. Cut off from Canada, the French gave up their western and Lake Ontario posts, burning or abandoning Fort Machault and the others and pulling back to defend the populated St. Lawrence core. The whole French interior, the Ohio Country and the Great Lakes that the empires had been fighting over since the first shots in the wilderness, was finished as a French possession. Paired that same year with the fall of Quebec in September and the advance up Lake Champlain, the loss of the gateway helped doom New France itself.' },
      { pill: '/war-french-indian/battles/fort-duquesne', plabel: 'The western posts, now cut off from Canada for good' },
    ],
    meanwhile: { region: 'The portage trail', title: 'Whose war it wasn’t', body: 'The relief column was broken by two things working together. First a Haudenosaunee decision: faced with kin in the opposing ranks, the French-allied warriors chose not to die for France in someone else’s quarrel, and nearly all of them stepped out of the fight, leaving the column gutted of its Native strength before it ever reached the clearing. Then the British did the rest, the volleys and the bayonets at the breastwork destroying the thinned force that came on. It is the plainest reminder of the whole war: on the ground, in their own country, the Six Nations were nobody’s tools, and at La Belle-Famille their choice shaped the day as surely as any general’s plan.' },
  },
}

export function SectionNarrative({ id }: { id: string }) {
  return <BattleSectionReader
    sections={NIAGARA_NARR}
    id={id}
    slug="fort-niagara"
    battleName="Fort Niagara"
    theatreId="fi-battles"
    battleId="fi-niagara"
    theatreHref="/war-french-indian/battles"
    accent="var(--fi-battles)"
    endHref="/war-french-indian?theatre=fi-battles"
    endKicker="Back to the war"
    endLabel="All the battles"
  />
}
