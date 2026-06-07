'use client'

// Jumonville Glen (May 28, 1754), French and Indian War.
// Data only; rendered by the shared <BattleSectionReader>. Produced through the
// war content pipeline (audits/war-content-pipeline.md): fact pack → author (Opus) →
// five critic gates (fact-check + storytelling + comprehensiveness + clarity +
// fairness, Sonnet, parallel) → reconcile → revise. House voice: no em-dashes;
// British/French side-tags once on first mention per section; stakes named plainly
// (an imperial war that was, on the ground, a war over Native land). Sources:
// audits/war-pipeline/fi-jumonville-*.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'

const JUMONVILLE_NARR: Record<string, Narr> = {
  'the-road-to-the-glen': {
    eyebrow: 'Jumonville Glen · The march in',
    title: 'The road to the glen',
    blocks: [
      { locator: {
        eyebrow: 'Where and when · May 1754',
        caption: 'Washington marched out from Great Meadows in the dark and surrounded a French party in a glen in the Pennsylvania backcountry, about ten miles off, beyond Laurel Ridge. The French had come up from Fort Duquesne at the Forks of the Ohio.',
        frame: { lonMin: -81.0, lonMax: -78.0, latMin: 39.2, latMax: 40.85 },
        states: [
          { name: 'Pennsylvania', tone: 'focus', label: 'PENNSYLVANIA', labelLon: -78.6, labelLat: 40.6 },
          { name: 'Maryland', label: 'MARYLAND', labelLon: -78.5, labelLat: 39.45, labelSize: 13 },
          { name: 'Virginia', label: 'VIRGINIA', labelLon: -79.7, labelLat: 39.3, labelSize: 13 },
          { name: 'Ohio', label: 'OHIO', labelLon: -80.7, labelLat: 40.4, labelSize: 13 },
          { name: 'West Virginia' },
        ],
        dots: [
          { name: 'Jumonville Glen', date: 'May 28, 1754', lat: 39.85, lon: -79.62, heavy: true, anchor: 'start', dateBelow: true },
          { name: 'Fort Duquesne', lat: 40.44, lon: -80.01, color: '#8a8175', anchor: 'end' },
          { name: 'Fort Cumberland', lat: 39.65, lon: -78.76, color: '#8a8175', anchor: 'start' },
        ],
      } },
      { p: 'Two rivers, the Allegheny and the Monongahela, run together in the wilderness of western Pennsylvania to make a third, the Ohio, the river road into the whole interior of the continent. At their junction, the Forks of the Ohio (present-day Pittsburgh), sat the most valuable ground on the frontier: the gateway to the fur trade and to millions of acres beyond the mountains. The prize in this war was control of that country, the upper Ohio valley, and what it meant was empire, trade, and above all land. Both Britain, through the colony of Virginia, and France claimed it. Neither would let it go. And the land was not theirs. It belonged to the Native nations who lived on it, the Shawnee, the Lenape (also called Delaware), the Mingo and others, and underneath the two flags this was, from the start, a fight over their country and who would get to keep settlers off it.' },
      { p: 'A group of wealthy Virginians had organized the Ohio Company in 1748 to develop the region, and the British crown had granted it some five hundred thousand acres. The French answered with forts. They built Fort Le Boeuf in 1753, and Venango, and pushed toward the Forks. Robert Dinwiddie, the lieutenant governor of Virginia, sent a twenty-one-year-old militia major named George Washington (British) out through the winter woods with the frontiersman Christopher Gist to warn the French off. Washington reached Fort Le Boeuf in December 1753 and delivered the summons, a formal written demand that the French withdraw. The French commander, Jacques Legardeur de Saint-Pierre, refused it with perfect courtesy. "As to the summons you send me to retire," he answered, "I do not think myself obliged to obey it."' },
      { fig: '/war-img/fi-washington-mission-map.jpg', cap: 'Washington’s 1753 mission into the Ohio Country to warn the French off, the journey that set up the clash at the glen.', credit: 'Stuff Happened map' },
      { p: 'So in 1754 Virginia tried to make the claim real by building a fort at the Forks itself. The French drove the work party off, finished the job their own way, and raised Fort Duquesne on the spot. Washington, now twenty-two and a lieutenant colonel of the newly raised Virginia Regiment, marched west to contest it anyway, a young man with a few dozen provincial soldiers (part-time troops raised in the colony) going to confront a power that already held the ground. He got as far as a clearing called Great Meadows, in the mountains beyond Laurel Ridge, and there made his camp.' },
      { p: 'It was there that he was warned. A Native leader named Tanaghrisson, known as the Half King, sent word that a French detachment was nearby, hidden in the woods not far off. Tanaghrisson was a Mingo leader at the town of Logstown, born among the Catawba to the south but raised among the Iroquois (the powerful confederacy of six Native nations of the northeast), and he had stood for the Six Nations at a treaty council two years before. "Half King" was an English-coined label, and even his authority within the confederacy was contested; he may have been a village-level leader whose standing the British talked up to suit themselves. And his world was coming apart. The French had treated him with contempt; one of their officers, Joncaire, had mocked him to his face as "more English than the English." After the French seized the Forks, the Delawares and Shawnees stopped listening to him, and his standing among the Ohio nations was collapsing. A man in that position has reasons of his own. When he came to guide Washington to the French in the dark, he was not only a scout. He was a leader looking to make himself matter again.' },
      { p: 'Washington marched out into a rainy night with about forty of his Virginians, found Tanaghrisson and roughly a dozen of his warriors in the dark, and together they felt their way through the wet forest toward the hidden French. Somewhere out ahead of them, down in a rocky hollow, about thirty-five men were camped who had come up from Fort Duquesne, and the argument over why they were there has never been settled since.' },
      { pill: '/war-french-indian/off-the-battlefield/ohio-company', plabel: 'The Ohio Country and the land both empires wanted' },
    ],
    meanwhile: { region: 'Paris and London', title: 'A peace on paper', body: 'Britain and France were not formally at war when Washington marched into the woods that night. The two crowns were officially at peace, even as their soldiers built forts at each other across a wilderness and a Virginia colonel crept up on a French camp in the dark. The fighting over the Ohio Country was running far ahead of the diplomats. That gap between what the paper said and what the men in the forest did was about to close in a way no one could take back.' },
  },

  'fifteen-minutes-in-the-rain': {
    eyebrow: 'Jumonville Glen · The killing',
    title: 'Fifteen minutes in the rain',
    blocks: [
      { p: 'At dawn on May 28, 1754, after the long wet march, Washington’s men and Tanaghrisson’s warriors stood on the rocks above a glen in present-day Fayette County, Pennsylvania, looking down at the French in the hollow below. The French were a small party out of Fort Duquesne, about thirty-five men under a junior officer named Joseph Coulon de Villiers, Sieur de Jumonville (French), thirty-five years old. They had not posted themselves to fight. They were down in the rocks, some of them only just stirring. Washington had them surrounded before they knew he was there.' },
      { p: 'A shot was fired. To this day no one can say with certainty which side fired it. What is not in doubt is that a firefight broke out at close range, the Virginians and the warriors firing down into the trapped party, and that it was over fast, about fifteen minutes. The French were routed. By Washington’s own count ten of them were killed; other accounts put the dead between ten and fourteen. Around twenty-one were taken prisoner. One man, named Monceau, slipped away and carried word of what had happened back to Fort Duquesne. On Washington’s side the cost was tiny: one man killed and two or three wounded.' },
      { p: 'The fight was over in fifteen minutes. What happened next was not. By the most-cited account, the firing stopped, Jumonville was wounded and a prisoner, and the fight was effectively done. Then Tanaghrisson walked up to him. He is reported to have said, in French, "Tu n’es pas encore mort, mon père," "Thou art not yet dead, my father," and to have split the wounded man’s skull with his hatchet, killing him on the spot. The exact words come from a single source, a deserter named Denis Kaninguen, and the historian who has studied this most closely calls it the only source that gives Tanaghrisson’s words at all. Some accounts add that the warriors then killed and scalped most of the remaining wounded before Washington could stop them. The most lurid detail, that Tanaghrisson "washed his hands in his brains," comes secondhand, and historians flag it as legend rather than fact. None of this was watched by a disinterested eyewitness, and it should be held as the strongly supported account, not as settled certainty.' },
      { p: 'Washington’s own report tells it differently, and more bloodlessly. He compressed the whole affair into a single firefight, as though every Frenchman who died fell in the exchange of fire. "We killed Mr. de Jumonville, the commander of that Party," he wrote, "as also nine others; we wounded one, and made Twenty-one Prisoners." No hatchet, no parley, no execution of a wounded man.' },
      { p: 'And the French survivors told it differently again. Monceau, the man who escaped, said the French had called for a cease-fire so that a document could be read aloud, a summons ordering the British to withdraw, and that the killing came during or just after that parley. This goes to the deepest dispute of all: what Jumonville’s party even was. The French insisted it was an embassy, a diplomatic detachment carrying a formal summons, and that to kill its commander was to murder an envoy. Washington and the British insisted it was nothing of the kind, that these were concealed spies, scouts who had hidden in a ravine for days rather than approach openly, and whose orders also told them to report British positions back so a stronger force could be sent. A leading modern historian, Fred Anderson, concludes it was genuinely both at once, a party carrying a summons and scouting the enemy on the same trip. The honest answer is that it was disputed then and remains disputed now.' },
      { p: 'Whatever the truth, Tanaghrisson’s part in it reads less like the act of a guide than the act of a politician. The historian’s reading is that the killing was likely deliberate. By striking the blow himself, the Half King could reassert his standing before the wavering Ohio nations who had stopped listening to him, and he could force the French into a retaliation that would bind the British and the Ohio Indians together against them. There was a deeper meaning in the words too. The French had long presented themselves as the protective "father" of the Native nations, the power that stood between them and the land-hungry English settlers. To call Jumonville "father" was to invoke Onontio, the title the Ohio nations gave the French governor, the "father" who was supposed to mediate and protect.' },
      { p: 'To call the Frenchman "father" and then kill him was to deny that the French had any standing as father, any legitimate authority over Native land at all.' },
      { p: 'And Tanaghrisson did not stop at the blow. His warriors took a scalp and sent it to the Delawares as a formal invitation to "take up the hatchet" against the French, the diplomatic instrument by which one nation called another to war. It was the mechanism of his whole strategy, the way he meant to turn one killing into a general rising. But the deck was already stacked against him. By 1754 much of the Ohio country had leaned or committed to the French, the Shawnee among them, and the Delawares were not about to switch sides. He was throwing himself against an alliance that had mostly already chosen, and it largely failed.' },
    ],
  },

  'the-spark': {
    eyebrow: 'Jumonville Glen · The consequences',
    title: 'The spark',
    blocks: [
      { fig: '/war-img/fi-the-spark-map.jpg', cap: 'The Ohio Country in 1754: the contested ground where Virginia, France, and the Ohio nations collided, and where a backwoods skirmish helped set off a world war.', credit: 'Stuff Happened map' },
      { p: 'The man who escaped, Monceau, reached Fort Duquesne with the news, and retaliation was only a matter of time. It came that summer, and it came as family. Jumonville had an older half-brother, Louis Coulon de Villiers (same father, different mothers), and he led a revenge force out of Fort Duquesne, roughly six hundred French soldiers and about a hundred Native warriors, to hunt down the men who had killed his brother. Washington, knowing it was coming, fell back to Great Meadows and threw up a small round stockade he aptly named Fort Necessity. There, on July 3, 1754, Louis Coulon de Villiers caught him. After a day of fighting in the rain, Washington surrendered. It was the only surrender of his entire military career.' },
      { pill: '/war-french-indian/battles/fort-necessity', plabel: 'Washington’s surrender at Fort Necessity, July 1754' },
      { p: 'The surrender did more than cost Washington a fort. It trapped him. The terms of capitulation were written in French, and the French text described what had happened in the glen as "l’assassinat" of Jumonville, the assassination of the junior officer. Washington could not read French. He signed. By signing he appeared, in the official record of the war, to have confessed in his own hand to murdering an envoy. France made the most of it. The "assassination of Jumonville" became a propaganda coup, proof to all of Europe that the British had murdered a peaceful emissary and started the trouble. Britain and Washington held to their own account: that this had been a legitimate fight against a concealed scouting party, not the killing of a diplomat. The charge stuck anyway, fixed in the very document Washington had put his name to without knowing what it said.' },
      { p: 'There was one more casualty at Fort Necessity, harder to see than a fort. Before the French force arrived, Tanaghrisson had pulled his warriors out and left. He had concluded that the British alliance had failed him, that Washington would not listen to the Indians, and he walked away from the young colonel he had marched through the dark with weeks before. The resurgence he had gambled on never came. The Ohio nations did not rally to him. He died of pneumonia at Paxtang, in Pennsylvania, on October 4, 1754, only months after the glen, and his death reads less as bad luck than as the last act of that disillusionment: a leader who had bet everything on bending two empires toward his people, and lost.' },
      { p: 'From there it widened past anyone’s intent. Jumonville Glen and Fort Necessity were the opening engagements of the French and Indian War. The next year the British sent a professional army under General Edward Braddock to take Fort Duquesne, and it was destroyed in the forest along the Monongahela, the worst British defeat in North America to that point. The fighting spread across the colonies, and then across the ocean, until it merged into a war fought on several continents, the global conflict known as the Seven Years’ War. It became commonplace afterward to say that this little fight in the woods had set the whole thing in motion. Horace Walpole is the one credited with the line, though its exact wording is uncertain and is best treated as a paraphrase: that the volley fired by a young Virginian in the backwoods of America had set the world on fire. The young Virginian was George Washington, twenty-two years old.' },
      { pill: '/war-french-indian/battles/monongahela', plabel: 'Braddock’s destruction on the Monongahela, 1755' },
      { p: 'Washington himself felt only the strange thrill of it at the time. Three days after the glen, writing to his brother John Augustine Washington, he set down the line that would follow him the rest of his life. "I heard the bullets whistle," he wrote, "and, believe me, there is something charming in the sound." King George II, hearing of it, is said to have remarked that the young man would not say so if he had been used to hearing many. Washington had not yet seen what he had helped begin.', },
      { fig: '/war-img/fi-washington-1772.jpg', cap: 'George Washington in 1772, painted by Charles Willson Peale in the uniform of his French and Indian War service, eighteen years after the glen.', credit: 'Charles Willson Peale, 1772 · public domain' },
      { p: '"I heard the bullets whistle, and, believe me, there is something charming in the sound."', q: true },
      { p: 'And the deepest stake of all outlasted him and outlasted the empires’ arguments about embassies and assassinations. Beneath the imperial quarrel over forts and trade lay the country itself, the land of the Ohio nations, who had not asked either crown to come, and whose own stake was the thing both empires kept forgetting to name: their own land, and the right to keep it.' },
    ],
    meanwhile: { region: 'The Ohio Country', title: 'Whose land it was', body: 'Strip away the embassy and the assassination charge and the world war they helped start, and what remains is a fight over ground that belonged to neither France nor Britain. The Shawnee, the Lenape, the Mingo and the other Ohio nations lived on it. Tanaghrisson moved through the night with Washington for his own reasons, to recover his standing and to bend two empires toward his people’s interest, not theirs. The empires would spend years and armies deciding which of them owned the Ohio Country. The people who actually did own it were never offered the choice.' },
  },
}

export function SectionNarrative({ id }: { id: string }) {
  return <BattleSectionReader
    sections={JUMONVILLE_NARR}
    id={id}
    slug="jumonville-glen"
    battleName="Jumonville Glen"
    battleId="fi-jumonville"
    theatreId="fi-battles"
    theatreHref="/war-french-indian/battles"
    accent="var(--fi-battles)"
    endHref="/war-french-indian?theatre=fi-battles"
    endKicker="Back to the war"
    endLabel="All the battles"
  />
}
