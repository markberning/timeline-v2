// "Follow a commander through the war" — the American Revolution cast registry.
//
// The Revolution analogue of french-indian-commanders.ts. Each commander is defined
// ONCE (canonical name, side, portrait, life dates, a short overview, and how their
// war ended), with an `appearances` list keyed by the battle id in REVOLUTION.battles
// (src/lib/wars/revolution.ts). The per-battle `note` is that commander's beat in that
// battle, condensed from the already-gated commander strip shipped in the battle
// dossier; the overview + fate are new prose that cleared the war critic pipeline
// (fact-check + storytelling gate).
//
// Sides here are 'u' (American) / 'c' (British), matching the battle dossiers. The
// twelve recurring commanders carry the whole war, from the redoubt on Breed's Hill
// to the surrender field at Yorktown. Appearances are in chronological order by the
// battle's date. French allies (Lafayette excepted, who held a Continental commission)
// and one-battle figures live in the battle layer below the recurrence bar.

import { makeCastLookup } from '@/lib/wars/cast-lookup'

export type RevSide = 'u' | 'c'

export interface RevCommanderAppearance {
  battleId: string      // matches an id in REVOLUTION.battles
  role: string          // their rank / role in THIS battle
  note: string          // the beat: what they did here
  transition?: string   // when set, a labeled divider renders BEFORE this beat
}

export interface RevCommander {
  id: string
  name: string
  side: RevSide
  portrait: string
  born: number
  died: number
  epithet: string
  overview: string
  fate: string
  appearances: RevCommanderAppearance[]
}

const WASHINGTON: RevCommander = {
  id: 'washington',
  name: 'George Washington',
  side: 'u',
  portrait: '/war-img/rev-monmouth-washington.jpg',
  born: 1732,
  died: 1799,
  epithet: 'Commander in chief of the Continental Army',
  overview:
    "A Virginia planter and French and Indian War veteran, Washington took command of the Continental Army in June 1775 and held it for the whole war. His pattern was hard to argue with by the end: lose the set-piece battle, keep the army alive, then strike back the moment the enemy relaxed. He lost New York, Brandywine, and Germantown, and never won a pitched battle against a major British force in six years, yet the winter strokes at Trenton and Princeton and the rally at Monmouth kept the cause breathing. His one siege victory came last, at Yorktown, on a plan he had not chosen.",
  fate:
    "At Yorktown in October 1781 the trap he had not designed closed anyway, and he took the surrender of a British army for the only time in the war. He had the British sword handed to his own second in command, Benjamin Lincoln, the deliberate answer to the surrender of Charleston a year before. He went home to Mount Vernon, was called back to preside over the Constitutional Convention, and became the first president of the country he had helped create. He died in 1799.",
  appearances: [
    { battleId: 'rev-long-island', role: 'Commander in chief, American',
      transition: "Fresh from driving the British out of Boston, Washington meets his first full-scale battle and is outgeneraled.",
      note: "Long Island was his first full battlefield test in command, and he was beaten, caught with his force split and his left flank wide open. He redeemed the defeat with the decision his reputation rests on as much as any victory: the silent night evacuation of some 9,000 men across the East River, which saved the army and the Revolution to fight on." },
    { battleId: 'rev-trenton', role: 'Cmdr. in chief, American',
      transition: "Six months of unbroken defeat, an army about to dissolve, and a gamble with the password \"Victory or Death.\"",
      note: "Forty-four years old with an army that would legally dissolve on December 31, he conceived the triple crossing of the Delaware and led the main column in person through a nor'easter. After the battle he rode back to the expiring regiments himself and asked them to stay six more weeks for a ten-dollar bounty. Enough stayed." },
    { battleId: 'rev-princeton', role: 'Cmdr. in chief, American',
      note: "Ten days after Trenton he slipped a trapped army around Cornwallis in the dark, marched on the back roads, and broke a British brigade at Princeton, steadying the shattered line in person by reining up between the firing lines. The ten days remade his reputation and are the foundation of his legend as a general." },
    { battleId: 'rev-brandywine', role: 'Cmdr. in chief, American',
      note: "He chose to stand and fight for the capital rather than give it up unfought, and read the battlefield wrong, with bad maps and scouting reports that cancelled each other out, so Howe turned his flank exactly as at Long Island. His redemption was the evening: the army he had built came off the field intact and in order, and he had it attacking again within four weeks." },
    { battleId: 'rev-germantown', role: 'Cmdr. in chief, American',
      note: "Three weeks after Brandywine he struck back at four-column, 11,000-man scale. He spent the battle with the reserve on the Germantown Road and was present for the fateful decision to stop and reduce the Chew House. The fog wrecked the attack, and he took responsibility for the result with Congress." },
    { battleId: 'rev-monmouth', role: 'Cmdr. in chief, American',
      note: "After Brandywine, Germantown, and a winter of grumbling about replacing him, he needed a battlefield success and got one here. Warned of nothing, he rode into a retreating vanguard, confronted its commander Charles Lee, turned the columns around, and built a line under fire that held all afternoon. He spent the night on the field expecting to renew the fight; Clinton was gone by morning." },
    { battleId: 'rev-yorktown', role: 'Commander in chief, American',
      transition: "His only siege victory, on a plan Rochambeau quietly steered to the Chesapeake.",
      note: "He had wanted to attack New York instead. He ceremonially fired the first American gun on October 9, and the order placing Lincoln to receive the British sword at the surrender he had written out by hand the day before." },
  ],
}

const CORNWALLIS: RevCommander = {
  id: 'cornwallis',
  name: 'Charles, Earl Cornwallis',
  side: 'c',
  portrait: '/war-img/rev-charleston-cornwallis.jpg',
  born: 1738,
  died: 1805,
  epithet: 'The hardest-driving British field general in America',
  overview:
    "An aristocrat who had voted in the House of Lords against taxing America, then crossed the Atlantic to fight the war energetically once it came. He was Howe's hard-driving subordinate in the northern campaigns and the best British field commander in the country, the man who led the flank columns that broke American lines at Long Island and Brandywine. Left in command of the conquered South in 1780, he won Camden and held the field at Guilford Courthouse, then marched north into Virginia on a road that ran straight to disaster. His feud with his superior, Sir Henry Clinton, curdled into mutual blame that outlasted the war.",
  fate:
    "Driven to the coast by contradictory orders, he fortified Yorktown in August 1781 and was pinned by the army Lafayette had shadowed all summer when the French fleet shut the bay behind him. He planned a night sortie and a failed escape across the river, and then surrendered. Pleading illness, he did not attend the ceremony and sent Charles O'Hara with his sword. He rebuilt his career governing India and then Ireland, and died in India in 1805.",
  appearances: [
    { battleId: 'rev-long-island', role: 'Lt. Gen., flanking column, British',
      transition: "An aristocrat who had voted against taxing America crosses the Atlantic to fight her.",
      note: "He seized the Gowanus Road at the Old Stone House and stood at the point where the Maryland charges broke. He urged storming the Brooklyn lines and Howe refused. Five years later he would hand his army over at Yorktown, the surrender that effectively ended the war." },
    { battleId: 'rev-princeton', role: 'Lt. Gen., commanded the British drive on Trenton',
      note: "He had his baggage aboard ship for England when Trenton canceled his leave. He marched about 5,500 men to crush Washington at the Assunpink on January 2, held off until morning, and woke to cannon fire twelve miles in his rear. He spent the rest of the war trying to catch Washington." },
    { battleId: 'rev-brandywine', role: 'Cmdr., flanking column, British',
      note: "He led the flanking column: some 8,400 elite troops, a circuit of fifteen to seventeen miles, two unguarded fords, and a parade-ground assault off Osborne's Hill that broke three American divisions. It was Cornwallis who led the column that marched into Philadelphia on September 26." },
    { battleId: 'rev-monmouth', role: 'First division cmdr., British',
      note: "He commanded the first division, the grenadiers, light infantry, and Guards, the best troops in the army. He personally directed the heavy counterattacks against the hedgerow and against Perrine Ridge through the worst of the afternoon heat." },
    { battleId: 'rev-charleston', role: 'Lt. Gen., second in command, British',
      transition: "Clinton sails home and leaves Cornwallis the whole job of holding the conquered South.",
      note: "Once the Cooper River side was open he took the force east of the river that sealed the last landward escape. When Clinton left for New York he was kept behind with about 8,300 men and the job of holding and extending the conquest. Camden, the backcountry war, and the road to Yorktown all begin from where he stood in June 1780." },
    { battleId: 'rev-camden', role: 'Lt. Gen., British field commander',
      note: "Warned that Gates was coming, he left Charleston on August 10 and reached Camden two nights later, taking personal command of about 2,200 fit men. Rather than abandon his most important interior depot he resolved to attack, fought the battle in person, steadied the Volunteers of Ireland when the Continentals nearly broke them, and released Tarleton's cavalry against their rear. It was the British high-water mark in the South." },
    { battleId: 'rev-guilford', role: 'Lt. Gen., commanding, British',
      note: "He marched the core of his army 240 miles across the winter piedmont, burned his own baggage to do it, and attacked a force more than twice his size. He held the field at Guilford, then counted his dead, found he could not even pursue, and marched what was left to Wilmington and then north into Virginia." },
    { battleId: 'rev-yorktown', role: 'Commander at Yorktown, British',
      transition: "The march north against Clinton's wishes ends at the coast, in a trap.",
      note: "He marched into Virginia against Clinton's wishes, was driven by contradictory orders to the coast, and fortified Yorktown in August. He planned the October 16 sortie and the failed Gloucester escape, and, pleading illness, did not attend the surrender ceremony. The illness was real; whether disgust also kept him away cannot be known." },
  ],
}

const GREENE: RevCommander = {
  id: 'greene',
  name: 'Nathanael Greene',
  side: 'u',
  portrait: '/war-img/rev-guilford-greene.jpg',
  born: 1742,
  died: 1786,
  epithet: "Washington's best subordinate, who won back the South",
  overview:
    "A Rhode Island Quaker-raised ironmaster, self-taught from military books, who became Washington's most trusted general. He fought through the northern campaigns at Trenton, Brandywine, Germantown, and Monmouth, served a stretch he hated as quartermaster general, and never stopped lobbying for a field command. Congress finally gave him the Southern Department in October 1780, after Camden, which was the choice Washington had wanted all along. He inherited a wrecked army, divided it in the face of the enemy, and built a campaign on attrition that bled the British dry.",
  fate:
    "He lost almost every battle he fought in the South and won the campaign anyway. After Guilford he turned away from Cornwallis, marched back into South Carolina, and reduced the British backcountry posts one by one while Cornwallis walked off to Virginia and ruin. By the end the British held little more than Charleston and Savannah. He settled on a Georgia plantation granted for his service and died there in 1786, only forty-three, of sunstroke.",
  appearances: [
    { battleId: 'rev-trenton', role: 'Cmdr., left column, American',
      transition: "A Quaker-raised ironmaster, already Washington's most trusted subordinate, leads a column across the Delaware.",
      note: "He bore blame for the loss of Fort Washington a month earlier, but Washington kept him close. At Trenton he led the left column down the Pennington Road with Washington riding alongside, sealing the town's upper end." },
    { battleId: 'rev-brandywine', role: 'Division cmdr., American',
      note: "He held the center reserve behind Chadds Ford, and when the right wing collapsed he force-marched his division roughly four miles at a run. With Weedon's Virginians he made the stand south of Dilworth that held the British pursuit for nearly an hour at dusk and let the army get out." },
    { battleId: 'rev-germantown', role: 'Cmdr., left column, American',
      note: "He commanded the biggest column, about two-thirds of the Continental infantry, on the longest road. A guide lost the way in the dark and he arrived about three-quarters of an hour late, fought hard around Luken's Mill, and covered the army's retreat when the day collapsed." },
    { battleId: 'rev-monmouth', role: 'Cmdr., right wing, American',
      note: "He commanded the right wing of the main line, and his decisive act came in mid-afternoon: he planted Henry Knox's guns and Woodford's brigade on Combs Hill, off to the south, where their fire raked the length of the British line and broke up the counterattack against Wayne." },
    { battleId: 'rev-guilford', role: 'Cmdr., Southern Department, American',
      transition: "Given the Southern Department after Camden, Greene takes the war he was made for.",
      note: "He inherited a wrecked army of barely 1,500 fit men, divided it, watched Morgan win Cowpens with the smaller half, raced Cornwallis to the Dan and across it, and came back to fight at Guilford behind a plan built on what Morgan had proved." },
  ],
}

const TARLETON: RevCommander = {
  id: 'tarleton',
  name: 'Banastre Tarleton',
  side: 'c',
  portrait: '/war-img/rev-cowpens-tarleton.jpg',
  born: 1754,
  died: 1833,
  epithet: 'The dragoon commander who was the rage of the southern war',
  overview:
    "A Liverpool merchant's son who commanded the British Legion, a corps of Loyalist cavalry and light infantry, and became the most feared man in the southern war. He was fast, ruthless, and effective: he destroyed the American cavalry around Charleston in two night-and-dawn strokes, and at the Waxhaws his Legion cut down Virginia Continentals as they tried to surrender, so that \"Tarleton's quarter\" became backcountry slang for no quarter at all. Whether he ordered the Waxhaws killing is genuinely disputed; his horse had been shot and pinned him at the surrender moment. He won battle after battle until he met Daniel Morgan at Cowpens.",
  fate:
    "At Cowpens he drove exactly the kind of force he had always won with onto Morgan's anvil at the end of a sleepless, foodless 48 hours, and watched it destroyed. At Guilford he took a musket ball through his right hand that cost him at least two fingers, his first documented wound of the war. He ended the war pinned at Gloucester Point across the river from Yorktown, the escape route he was guarding slammed shut. He went home to a long career in Parliament and as a general, and died in 1833.",
  appearances: [
    { battleId: 'rev-charleston', role: 'Lt. Col., British Legion, British',
      transition: "A twenty-five-year-old commanding the British Legion remounts on seized horses and slams the back door shut.",
      note: "His horses had died on the winter passage, so he remounted on seized Carolina horses, then in two night-and-dawn strokes, at Monck's Corner and Lenud's Ferry, he destroyed the American cavalry posted outside the city. What happened two weeks later at the Waxhaws would make his name a byword for terror across the backcountry." },
    { battleId: 'rev-camden', role: 'Lt. Col., British Legion, British',
      note: "His dragoons held the British point in the night collision, sat in reserve through the infantry fight, and were then loosed against the Continentals' rear to break the last formation on the field. He rode the wreck down the road for some 22 miles, and two days later destroyed Sumter's camp at Fishing Creek." },
    { battleId: 'rev-cowpens', role: 'Lt. Col., British Legion, British',
      transition: "The string of victories meets Daniel Morgan on a cow pasture.",
      note: "He commanded exactly the kind of force he had always won with, and drove it straight onto Morgan's reverse-slope trap. The double envelopment destroyed his command in under an hour." },
    { battleId: 'rev-guilford', role: 'Lt. Col., British Legion, British',
      note: "He rode at Guilford with what was left of the Legion in reserve. Before dawn his advance patrols ran into Lee's Legion at New Garden, and he took a musket ball through his right hand that mangled it and cost him at least two fingers. The injury curtailed his part in the battle." },
    { battleId: 'rev-yorktown', role: 'Cavalry at Gloucester Point, British',
      note: "He was posted across the York River at Gloucester Point with roughly 700 men, holding what Cornwallis intended as his escape route. On October 3 his foraging party collided with the Duc de Lauzun's hussars and Virginia militia at the Battle of the Hook; he was unhorsed and wounded, saved by his men, and driven back. For the rest of the siege his force was pinned." },
  ],
}

const HOWE: RevCommander = {
  id: 'howe',
  name: 'William Howe',
  side: 'c',
  portrait: '/war-img/rev-longisland-howe.jpg',
  born: 1729,
  died: 1814,
  epithet: 'British commander in chief who won battles and not the war',
  overview:
    "A combat legend since the climb to the heights above Quebec in 1759, Howe led every assault in person at Bunker Hill and paid the price for the frontal attacks there. He succeeded Gage in overall command that October and spent the next two years winning the war's most elegant victories, Long Island, Brandywine, the capture of Philadelphia, while always stopping short of destroying the army in front of him. With his brother Admiral Lord Richard Howe he was also a peace commissioner, conqueror and negotiator in one. Critics tied his caution to the trauma of Bunker Hill ever after.",
  fate:
    "His masterpiece campaign in 1777 took Philadelphia but left Burgoyne's northern army to its fate at Saratoga, and the trade of a city for an army still in the field was the limit of everything he did. He resigned the command, was replaced by Henry Clinton in 1778, and went home to defend his conduct in Parliament. He never held an active field command again and died in 1814.",
  appearances: [
    { battleId: 'rev-bunker-hill', role: 'Field cmdr., British',
      transition: "A combat legend leads three assaults up the hill in person and counts the cost.",
      note: "He led all three assaults on foot in the front line, and by the end of the day every member of his personal staff had been killed or wounded. Watching his line stagger back, he wrote that there was a moment he had never felt before. Many historians read Bunker Hill as the trauma behind his later caution. He succeeded Gage in overall command that October." },
    { battleId: 'rev-long-island', role: 'Cmdr.-in-chief in America, British',
      note: "He executed the war's most elegant flanking victory at Brooklyn, swinging around the unguarded Jamaica Pass, then halted before the American works rather than storm them, choosing siege spades over bayonets. Critics tied the halt to Bunker Hill ever after, and never forgave it." },
    { battleId: 'rev-brandywine', role: 'Cmdr. in chief, British',
      note: "He conceived the six-week sea move to the Chesapeake and the long flank march, and brought both off almost without a misstep, while leaving Burgoyne's northern army to its fate. Brandywine was arguably his masterpiece; the decision not to pursue at nightfall, and the trade of a city for an army still in the field, were its limits." },
    { battleId: 'rev-germantown', role: 'Cmdr. in chief, British',
      note: "Confident to the point of carelessness, his Germantown camp had no earthworks at all. Surprised at dawn, he rode forward believing it was a skirmish party and scolded his retreating light infantry until grapeshot in the trees proved otherwise. He rallied the line, counterattacked, and won; then, characteristically, pursued only a few miles." },
  ],
}

const SULLIVAN: RevCommander = {
  id: 'sullivan',
  name: 'John Sullivan',
  side: 'u',
  portrait: '/war-img/rev-longisland-sullivan.jpg',
  born: 1740,
  died: 1795,
  epithet: 'New Hampshire general, captured, exchanged, and controversial',
  overview:
    "A New Hampshire lawyer and son of Irish immigrants, and a former delegate to the Continental Congress, Sullivan fought through the army's hardest early years and drew an inquiry or a recall threat after almost every one. He was captured at Long Island, exchanged, had his flank turned at Brandywine, and led the main column at Germantown. Brave and willing but unlucky on the field, he was the kind of general Washington kept defending to Congress. No portrait of him from life survives; the period prints are inventions.",
  fate:
    "His last great service was the 1779 expedition that bears his name, a scorched-earth campaign through the Iroquois country of New York that broke the power of the Six Nations who had sided with Britain. Worn down and in poor health, he left the army that year. He served in Congress, governed New Hampshire, and became a federal judge before his death in 1795.",
  appearances: [
    { battleId: 'rev-long-island', role: 'Cmdr. of the forward center, American',
      transition: "Just back from the collapse of the American invasion of Canada, Sullivan holds the forward line.",
      note: "He held the wooded ridge at Battle Pass until 10,000 British troops appeared behind him. Captured in the rout, he was paroled to Philadelphia carrying Lord Howe's peace feeler, which John Adams sneered made him a \"decoy duck.\" Exchanged that fall, he fought on through the war." },
    { battleId: 'rev-trenton', role: 'Cmdr., right column, American',
      note: "When Gen. Charles Lee was captured on December 13 Sullivan took over his division and marched it to Washington. At Trenton he led the right column down the River Road into the lower town and sealed the Assunpink bridge." },
    { battleId: 'rev-brandywine', role: 'Cmdr., right wing, American',
      note: "His division anchored the upstream fords, and when the flank attack materialized he took overall command of the three right-wing divisions. His own division, caught still marching into line, was routed. Congress demanded an inquiry; Washington kept him, and he was cleared." },
    { battleId: 'rev-germantown', role: 'Cmdr., right column, American',
      note: "He led the main column straight down the Germantown Road. His men stormed the British light-infantry camp at Mount Airy and pushed two miles into the village before their ammunition ran low and the line behind them came apart." },
  ],
}

const CLINTON: RevCommander = {
  id: 'clinton',
  name: 'Henry Clinton',
  side: 'c',
  portrait: '/war-img/rev-charleston-clinton.jpg',
  born: 1730,
  died: 1795,
  epithet: 'British commander in chief who presided over the loss',
  overview:
    "Raised partly in New York, where his father had been royal governor, Clinton knew the American ground better than most British generals and was brilliant on paper and prickly in person. He authored the flanking plan that won Long Island, urged the trapping move at Bunker Hill that was overruled, and feuded with Howe throughout. He succeeded Howe as commander in chief in 1778 and ran the war from New York for its last five years. His one personal masterpiece was the patient siege that took Charleston in 1780.",
  fate:
    "After Charleston he left Cornwallis to hold the South and the two men quarreled by letter to the end, each blaming the other for Yorktown. He was at New York with the bulk of the army when the trap closed in Virginia, and the relief fleet sailed too late. He resigned the command, went home, and spent his last years fighting a pamphlet war with Cornwallis over who had lost America. He was named governor of Gibraltar in 1795 but died that December before he could take up the post.",
  appearances: [
    { battleId: 'rev-bunker-hill', role: 'Maj. Gen., British',
      transition: "A general who knew the ground urges the trapping move, and is overruled.",
      note: "He urged a landing at Charlestown Neck behind the Americans, which would have trapped the whole force on the peninsula, and was overruled in favor of a direct assault. He crossed the water on his own initiative to help rally the shaken units for the third assault, and wrote the battle's epitaph: \"A dear bought victory, another such would have ruined us.\"" },
    { battleId: 'rev-long-island', role: 'Author of the flanking plan, British',
      note: "He knew the ground and pressed the idea Howe adopted: a night march around the unguarded Jamaica Pass. He led the lead column himself. Forever at odds with Howe, he would succeed him as commander in chief in 1778, and preside over the war's loss." },
    { battleId: 'rev-monmouth', role: 'Cmdr. in chief, British',
      transition: "Now commander in chief, Clinton runs an evacuation he did not choose across a board France had reset.",
      note: "He turned his elite first division around and threw it at Lee's vanguard, nearly bagging it, then spent the afternoon battering at Washington's ridge line until the heat and the Combs Hill guns ended it. He slipped away at midnight and got his army and its train to Sandy Hook intact, his mission narrowly accomplished." },
    { battleId: 'rev-stony-point', role: 'Cmdr. in chief, British',
      note: "The seizure of King's Ferry and the raids that burned the Connecticut coast that summer were his attempt to pry Washington out of the Highlands into a battle on open ground. Stony Point cost him the campaign's one trophy. He reoccupied the point days later, then gave up both ends of the ferry that October as the war moved south." },
    { battleId: 'rev-charleston', role: 'Cmdr. in chief in North America, British',
      transition: "The patient siege that was his masterpiece.",
      note: "He planned and led this expedition in person. Humiliated off Charleston in 1776, in 1780 he refused every shortcut, taking the city by patient siegecraft and losing barely a hundred men to do it. He sailed home in early June genuinely believing the South was won." },
  ],
}

const WAYNE: RevCommander = {
  id: 'wayne',
  name: 'Anthony Wayne',
  side: 'u',
  portrait: '/war-img/rev-brandywine-wayne.jpg',
  born: 1745,
  died: 1796,
  epithet: 'The aggressive Pennsylvanian known as "Mad Anthony"',
  overview:
    "A Pennsylvania tanner's son and surveyor turned brigadier, aggressive to the point of recklessness and at his best in a charge. His division was bayoneted in the dark at Paoli in September 1777, and the court-martial he demanded cleared him \"with the highest honor.\" He fought across the war's central years, at Brandywine, Germantown, and Monmouth, and then took command of the new Corps of Light Infantry for the night assault that became his most famous feat. His men wanted fights, and he gave them to them.",
  fate:
    "His midnight bayonet storming of Stony Point in July 1779 was a small jewel of a victory and the high point of his Revolutionary war. He went on to fight in the southern campaign and accepted the British surrender in Georgia. After the war he led the army that broke the northwestern tribes at Fallen Timbers in 1794, securing the Ohio country, and died on the frontier in 1796.",
  appearances: [
    { battleId: 'rev-brandywine', role: 'Division cmdr., American',
      transition: "A brigadier fighting in sight of his own home county holds the center.",
      note: "He commanded the division at Chadds Ford and held the center against Knyphausen's bombardment all day, broken only when the Hessians finally stormed the ford in the afternoon chaos. Nine nights later his division was bayoneted in its camp near Paoli; the court-martial he demanded cleared him." },
    { battleId: 'rev-germantown', role: 'Division cmdr., American',
      note: "His men attacked through the fog wanting revenge for Paoli, and British officers remembered hearing them say so. They drove the light infantry through Mount Airy and pushed deep into the village; then another American division fired into them from behind, and the advance that had been winning fell apart." },
    { battleId: 'rev-monmouth', role: 'Forward cmdr., American',
      note: "He led the vanguard's fixing force in the morning and was furious at the retreat order. He held the forward positions all afternoon, ending at the parsonage farm where his roughly 400 Pennsylvanians caught the withdrawing grenadiers and Lt. Col. Henry Monckton was killed. He was pulled out under the cover of the Combs Hill guns." },
    { battleId: 'rev-stony-point', role: 'Cmdr., Corps of Light Infantry, American',
      transition: "Given the new light corps, Wayne gets the midnight assault that makes his name.",
      note: "He marched with the south column and was grazed across the head by a musket ball at the inner abatis and knocked down. Minutes later he was inside the fort, writing to Washington at two in the morning with a bandaged head. His two-sentence dispatch is the battle in his own words." },
  ],
}

const LAFAYETTE: RevCommander = {
  id: 'lafayette',
  name: 'Marquis de Lafayette',
  side: 'u',
  portrait: '/war-img/rev-monmouth-lafayette.jpg',
  born: 1757,
  died: 1834,
  epithet: 'The young French volunteer who became a Continental general',
  overview:
    "A French aristocrat who landed in America in 1777 at nineteen, holding an honorary major general's commission, and threw himself into the cause as if it were his own. His first battle was Brandywine, where he took a musket ball through the calf rallying a collapsing line, and the wound and Washington's care afterward sealed one of the war's famous bonds. He fought at Monmouth, returned to France to lobby for more aid, and came back to the command that mattered most: shadowing Cornwallis through Virginia in 1781 and pinning him in place.",
  fate:
    "His containment of Cornwallis in Virginia is the direct reason the British army was still at Yorktown when the trap closed, and he commanded the American light infantry in the siege that ended the war. He went home a hero of two worlds, played a leading part in the French Revolution, and lived to tour the United States in 1824 as the last surviving major general of the Revolution. He died in Paris in 1834.",
  appearances: [
    { battleId: 'rev-brandywine', role: 'Volunteer maj. gen., American',
      transition: "Two months in America and six weeks a general, Lafayette fights his first battle.",
      note: "He rode into the collapsing line at Birmingham to rally it, took a musket ball through the left calf, and stayed in the fight until loss of blood forced him out. The wound, and Washington's care afterward, sealed one of the war's famous bonds." },
    { battleId: 'rev-monmouth', role: 'Second-line cmdr., American',
      note: "He got the vanguard command first, lost it to Charles Lee's seniority two days before the battle, and served under Lee on the field, where he sent Washington the morning's only warning that things were going wrong. In the afternoon he commanded the second line." },
    { battleId: 'rev-yorktown', role: 'Light infantry commander, American',
      transition: "Sent to Virginia to do one thing: keep Cornwallis from escaping.",
      note: "Outnumbered most of the way, he shadowed and contained the British army for months, and it is the direct reason Cornwallis was still at Yorktown when the trap closed. Once Washington arrived, he commanded the American light infantry in the siege, the corps that furnished Hamilton's storming party at Redoubt 10." },
  ],
}

const KNOX: RevCommander = {
  id: 'knox',
  name: 'Henry Knox',
  side: 'u',
  portrait: '/war-img/rev-trenton-knox.jpg',
  born: 1750,
  died: 1806,
  epithet: 'The bookseller who became chief of artillery',
  overview:
    "A 280-pound Boston bookseller turned artillery chief, who made his name in the winter of 1775 to 1776 by hauling the captured cannon of Fort Ticonderoga overland to Boston, a feat that drove the British out of the city. He was chief of artillery for the Continental Army throughout the war and one of Washington's closest confidants. His booming voice ran the Delaware crossing, his guns decided Trenton, and his advice and his batteries shaped the army's biggest fights from Germantown to Yorktown.",
  fate:
    "He ran the American batteries at Yorktown and helped site the combined allied bombardment that battered the British works into surrender. He stayed at Washington's side to the end of the war, succeeded him as commander of the army, and became the first Secretary of War under the Constitution. He died in 1806.",
  appearances: [
    { battleId: 'rev-trenton', role: 'Artillery chief, American',
      transition: "The bookseller who hauled the Ticonderoga guns to Boston now crosses them over the Delaware.",
      note: "His booming voice ran the embarkation, and he crossed an unusually heavy 18 guns for about 2,400 men. Those guns, massed at the heads of Trenton's two main streets, decided the fight. He crossed as Colonel Knox; his promotion to brigadier general carries the date of the day after the battle." },
    { battleId: 'rev-germantown', role: 'Chief of artillery, American',
      note: "He gave Washington the textbook advice that became the battle's most argued-over decision: that it was contrary to all military rule to leave a castle in one's rear. The army stopped to reduce the Chew House instead of bypassing it, and his light field guns bounced off the stone walls." },
    { battleId: 'rev-monmouth', role: 'Chief of artillery, American',
      note: "His guns, planted by Greene on Combs Hill off to the south, raked the length of the British line and broke up the counterattack against Wayne, the decisive stroke of the afternoon's long artillery duel." },
    { battleId: 'rev-yorktown', role: 'Artillery commander, American',
      note: "He ran the American batteries and helped site the combined allied bombardment of some 155 guns that battered the British works almost without pause from October 9 to October 17. He stood beside Washington and Lincoln when the first American gun fired." },
  ],
}

const MORGAN: RevCommander = {
  id: 'morgan',
  name: 'Daniel Morgan',
  side: 'u',
  portrait: '/war-img/rev-cowpens-morgan.jpg',
  born: 1736,
  died: 1802,
  epithet: 'The "Old Wagoner" and master of the riflemen',
  overview:
    "A New Jersey-born Virginia frontier teamster who had driven wagons on Braddock's 1755 campaign and carried a lifelong grudge against the British Army, said to date from a flogging he told on himself in stories ever after. He led riflemen to Quebec, took command when Arnold fell, was captured and exchanged, and his rifle corps with their officer-killing accuracy opened both battles at Saratoga and blinded Burgoyne all campaign. Passed over for promotion, he resigned in 1779, then came back after Camden as a new brigadier and was handed a flying army in the South.",
  fate:
    "Cowpens in January 1781 was his masterpiece, a textbook double envelopment that destroyed Tarleton's command and handed Britain one of its worst small-battle defeats of the war. It was also his last battle: sciatica broke his health within weeks and forced him out of the field. He lived on his Virginia lands, served a term in Congress, and died in 1802.",
  appearances: [
    { battleId: 'rev-quebec', role: 'Cmdr., Virginia riflemen, American',
      transition: "A frontier teamster leads riflemen through the Maine wilderness to the walls of Quebec.",
      note: "He took command of the assault column when Arnold fell wounded, fought deepest into the Lower Town, and surrendered his sword to a priest rather than a British officer when the attack stalled at the second barricade." },
    { battleId: 'rev-saratoga', role: 'Cmdr., rifle corps, American',
      note: "He got command of the roughly 500-man rifle corps Washington sent north in August 1777. His riflemen, carrying long rifles with no bayonets and deadly accuracy, opened both Saratoga battles and blinded Burgoyne all campaign." },
    { battleId: 'rev-cowpens', role: 'Brig. Gen., American',
      transition: "Back from retirement and handed a flying army, Morgan fights his masterpiece.",
      note: "Handed the flying army in December, he chose the ground at Cowpens and built a battle on layered militia and Continental lines, with cavalry hidden behind a rise. The double envelopment destroyed Tarleton's command in under an hour." },
  ],
}

const LINCOLN: RevCommander = {
  id: 'lincoln',
  name: 'Benjamin Lincoln',
  side: 'u',
  portrait: '/war-img/rev-charleston-lincoln.jpg',
  born: 1733,
  died: 1810,
  epithet: 'The general who surrendered Charleston and answered for it',
  overview:
    "A Hingham, Massachusetts farmer and militia officer, solid, honest, well liked, and unlucky, who rose to major general and took a ball in the ankle in the Saratoga campaign. Sent south to command the Southern Department in 1778, he spent 1779 trading blows along the Georgia-Carolina line, was beaten at Stono Ferry, and was the junior partner in the failed Franco-American assault on Savannah. Then at Charleston he was caught between a professional's duty to save the army and a city government that threatened to turn on him if he tried.",
  fate:
    "He surrendered Charleston and some 5,000 men on May 12, 1780, the largest American capitulation of the war, and was denied the honors of war, his colors furled and no march-out tune allowed. Exchanged that November, he was chosen by Washington as second in command at Yorktown and deliberately placed to receive O'Hara's sword at the surrender, the exact, pointed reversal of Charleston. He became the first Secretary of War under the Articles of Confederation and died in 1810.",
  appearances: [
    { battleId: 'rev-savannah', role: 'Cmdr., the American southern army',
      transition: "Sent south to command, Lincoln finds the campaign is French in everything but name.",
      note: "He was the junior partner at Savannah in everything but title: the fleet, most of the troops, and the deadline were French, and the summons that opened the siege was issued without him. The failed assault in October 1779 was his to share, and the worse defeat at Charleston was seven months away." },
    { battleId: 'rev-charleston', role: 'Cmdr., Southern Department, American',
      transition: "The trap that cost the largest American army of the war.",
      note: "He was caught between the duty to save the army and a city government that threatened to turn on him if he tried. He surrendered on May 12, was paroled, and was exchanged that November for a British major general. The man who gave up Charleston would, eighteen months later, take the sword that answered for it." },
    { battleId: 'rev-yorktown', role: 'Second in command, American',
      transition: "The reversal of Charleston, written out by hand the day before.",
      note: "Chosen by Washington as second in command and deliberately placed to receive O'Hara's sword at the surrender, the exact, pointed reversal of Charleston, where his own army had been denied the honors of war. After the war he became the first Secretary of War under the Articles of Confederation." },
  ],
}

export const REVOLUTION_COMMANDERS: Record<string, RevCommander> = {
  washington: WASHINGTON,
  cornwallis: CORNWALLIS,
  greene: GREENE,
  tarleton: TARLETON,
  howe: HOWE,
  sullivan: SULLIVAN,
  clinton: CLINTON,
  wayne: WAYNE,
  lafayette: LAFAYETTE,
  knox: KNOX,
  morgan: MORGAN,
  lincoln: LINCOLN,
}

export const revCommanderIds = Object.keys(REVOLUTION_COMMANDERS)

// Look up a commander's arc id by the display name used in a battle dossier's
// commander strip (curly quotes normalized so both apostrophe glyphs match).
// Cornwallis appears under two title variants across the pages ("Earl" and "Lord");
// both map to the one arc.
const REV_CAST_BY_NAME: Record<string, string> = {
  'George Washington': 'washington',
  'Charles, Earl Cornwallis': 'cornwallis',
  'Charles, Lord Cornwallis': 'cornwallis',
  'Nathanael Greene': 'greene',
  'Banastre Tarleton': 'tarleton',
  'William Howe': 'howe',
  'John Sullivan': 'sullivan',
  'Henry Clinton': 'clinton',
  'Sir Henry Clinton': 'clinton',
  'Anthony Wayne': 'wayne',
  'Marquis de Lafayette': 'lafayette',
  'Henry Knox': 'knox',
  'Daniel Morgan': 'morgan',
  'Benjamin Lincoln': 'lincoln',
}

export const revCastIdForName = makeCastLookup(REV_CAST_BY_NAME)
