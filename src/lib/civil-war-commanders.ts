// "Follow a commander through the war" — the cast registry.
//
// Each commander is defined ONCE here (canonical name, side, portrait, life
// dates, a short overview, and how their war ended), with an `appearances` list
// keyed by battle id (the roster id in civil-war-roster.ts). The per-battle
// `note` is that commander's beat in that battle — what they did there. The
// commander page (commander-page.tsx) looks up each battle's date/theatre/name/
// href from MAJORS and renders the appearances as a chronological arc.
//
// PROTOTYPE: Grant only, to evaluate the layout. The per-battle notes are drawn
// from the gated commander strips already shipped in the battle dossiers; the
// overview + fate are new prose and must clear the war critic pipeline before a
// full cast rollout. A `transition` caption marks where a commander's arc shifts
// theatre (e.g. Grant promoted east).

export type Side = 'U' | 'C'

export interface CommanderAppearance {
  battleId: string      // matches an id in MAJORS (civil-war-roster.ts)
  role: string          // their rank / role in THIS battle (as shipped in the dossier strip)
  note: string          // the beat: what they did here (one or two sentences)
  transition?: string   // when set, a labeled divider renders BEFORE this beat (an arc turning point)
}

export interface Commander {
  id: string            // url slug + headshot basename
  name: string
  side: Side
  portrait: string      // /war-img/cmdr/<id>.jpg
  born: number
  died: number
  epithet: string       // one-line role at the height of the war
  overview: string      // 2–4 sentences: who they were, the arc in brief
  fate: string          // how their war (and life) ended
  appearances: CommanderAppearance[]   // any order; the page sorts chronologically
}

const GRANT: Commander = {
  id: 'grant',
  name: 'Ulysses S. Grant',
  side: 'U',
  portrait: '/war-img/cmdr/grant.jpg',
  born: 1822,
  died: 1885,
  epithet: 'General-in-Chief, U.S. Armies',
  overview:
    "Before the war Ulysses S. Grant was a West Point graduate who had washed out of the peacetime army and was clerking in his family's leather-goods store in Galena, Illinois. The war remade him. He rose from colonel of an Illinois regiment to general-in-chief of all United States armies, taking the western rivers, splitting the Confederacy at Vicksburg, and breaking the siege at Chattanooga before Lincoln brought him east to face Robert E. Lee. There he did what no Union commander before him had managed: he absorbed Lee's punishment and kept coming, grinding the Army of Northern Virginia from the Wilderness all the way to Appomattox.",
  fate:
    "Grant took Lee's surrender at Appomattox in April 1865 and went on to serve two terms as the eighteenth President. Bankrupted by a business swindle and dying of throat cancer, he raced to finish his Personal Memoirs to provide for his family, completing them days before his death in July 1885. Published by Mark Twain, the book became a bestseller and is still counted one of the finest memoirs ever written by an American soldier.",
  appearances: [
    { battleId: 'w-donelson', role: 'Cmdr., Union',
      note: "Grant marched overland from Fort Henry and pressed the siege from the land side after the gunboats were beaten off the river. When the Confederate breakout broke his right, he read the captured soldiers' packed knapsacks for what they were, ordered an attack all along the line, and the next morning demanded an unconditional surrender that bagged the whole garrison." },
    { battleId: 'w-shiloh', role: 'Cmdr., Union',
      note: "Caught with his army unentrenched and scattered in its camps, Grant reached Pittsburg Landing mid-morning to find the first day going badly and steadied the broken line by the river at dusk. He refused to retreat across the Tennessee, attacked at first light the next morning with the fresh men who had crossed overnight, and drove the Confederates off the field." },
    { battleId: 'w-corinth', role: 'Dept. cmd., Union',
      note: "Grant ran the wider western theater from his headquarters at Jackson, Tennessee, with his forces scattered between Corinth, Memphis, and Bolivar. He did not command on the field at Corinth, but the victory secured his rear and freed him to turn south toward the campaign against Vicksburg." },
    { battleId: 'w-championhill', role: 'Cmdr., Union',
      note: "Loose in the interior of Mississippi with his supply line cut, Grant reached the field around mid-morning and aimed his blow at the exposed northern flank up the Jackson Road, where the road home ran. He won the day with barely half his army and broke Pemberton in the open before the siege of Vicksburg ever began." },
    { battleId: 'w-vicksburg', role: 'Cmdr., Union',
      note: "After the overland march and a frontal assault both failed, Grant ran the batteries, crossed below the city, cut loose from his supply line, and won five battles in eighteen days, driving Pemberton's army inside the walls. Two storms on the works failed bloodily, so he settled into a 47-day siege and starved the garrison into surrendering nearly 30,000 men on July 4." },
    { battleId: 'w-lookout', role: 'Cmdr., Union',
      note: "In overall command at Chattanooga, Grant planned a three-day breakout to crack the ring of heights around the city and meant Lookout Mountain only as a feint to set up the main blow on Missionary Ridge. He thought the fight on the cliffs was overrated and never counted it as much of a battle." },
    { battleId: 'w-missionary', role: 'Cmdr., Union',
      note: "Grant built his plan around a hammer blow by Sherman against the Confederate right, with Thomas's men set only to feint at the center. When the flank attacks stalled, he sent the center forward against the base of the ridge, then watched from Orchard Knob as those men kept climbing without his order and carried the crest." },
    { battleId: 'e-wilderness', role: 'Gen.-in-Chief, Union',
      transition: 'Promoted to general-in-chief of all United States armies. Grant comes east in March 1864 and rides with the Army of the Potomac, leaving the West to Sherman.',
      note: "Newly made general-in-chief, Grant rode into the Wilderness meaning to march through it and fight Lee in the open beyond. Stopped cold and bloodied worse than Lee, he did the thing no Union commander before him had done after a battle with Lee: instead of retreating across the river, he ordered the army south around Lee's flank and kept attacking." },
    { battleId: 'e-spotsylvania', role: 'Gen.-in-Chief, Union',
      note: "Grant ran the campaign himself, and after the bloody draw in the Wilderness he turned the army southeast rather than north. For two weeks he attacked Lee's works, was repulsed, and slid southeast to try again, telling Washington he meant to fight it out on this line if it took all summer." },
    { battleId: 'e-coldharbor', role: 'Gen.-in-Chief, Union',
      note: "Believing Lee's line could be broken, Grant ordered a dawn assault on the finished Confederate works. It failed in about an hour and he called it off by noon; years later he wrote that he had always regretted ordering the last assault at Cold Harbor." },
    { battleId: 'e-petersburg2', role: 'Gen.-in-Chief, Union',
      note: "Grant conceived the campaign's masterstroke, slipping the whole Army of the Potomac out of its lines at Cold Harbor and across the James to reach Petersburg from the rear. When the assaults stalled and the city dug in, he ordered one last charge, watched it fail, then settled in for the siege he had hoped to avoid." },
    { battleId: 'e-crater', role: 'Gen.-in-Chief, Union',
      note: "Grant backed Meade's order pulling the Black division from the lead, fearing the army would be blamed if they were slaughtered going in first. He called the Crater the saddest affair he had witnessed in the war, and an opportunity for carrying fortifications he never expected to see again." },
    { battleId: 'e-fortstedman', role: 'Gen.-in-Chief, Union',
      note: "Grant was at City Point with his own offensive already set to open within days. He let Parke handle the morning, then used the failed Confederate sortie as cover to seize picket lines elsewhere on the front, ground that helped open the breakthrough a week later." },
    { battleId: 'e-petersburg3', role: 'Gen.-in-Chief, Union',
      note: "When word came that Sheridan had broken the Confederate right at Five Forks, Grant did not wait for morning: he ordered the entire Petersburg line assaulted at first light. The blow he had been building toward for nine months landed all along the front at once, cracked the siege open in twenty minutes, and put Lee's army on the road at last." },
    { battleId: 'e-appomattox', role: 'Gen.-in-Chief, Union',
      note: "Grant broke the Petersburg line, then ran Lee down across ninety miles, throwing cavalry across the road west and pushing infantry to cut off every turn south. At the McLean house he wrote out terms that paroled the Confederates and let them keep their horses, and sent 25,000 rations to feed the army he had just beaten." },
  ],
}

const LEE: Commander = {
  id: 'lee',
  name: 'Robert E. Lee',
  side: 'C',
  portrait: '/war-img/cmdr/lee.jpg',
  born: 1807,
  died: 1870,
  epithet: 'Commander, Army of Northern Virginia',
  overview:
    "Robert E. Lee was a Virginia aristocrat and the most admired officer in the old United States Army, a Mexican War engineer who had captured John Brown at Harpers Ferry in 1859. Offered field command of the Union armies in 1861, he resigned instead to follow his state into secession. Given the Army of Northern Virginia in June 1862, he turned a defensive war into a war of audacious gambles, dividing his outnumbered army again and again to win at the Seven Days, Second Bull Run, Fredericksburg, and Chancellorsville, and twice carrying the war north. After Gettysburg he fought a brilliant, doomed defense from the Wilderness to Petersburg until the lines finally broke.",
  fate:
    "Lee surrendered the Army of Northern Virginia at Appomattox in April 1865, urging his men to go home and be good citizens rather than melt into the hills and fight on as guerrillas. Stripped of his citizenship, he spent his last years as president of Washington College in Lexington, Virginia, counseling reconciliation. He died in 1870; his citizenship was not formally restored until 1975.",
  appearances: [
    { battleId: 'e-gainesmill', role: 'Cmdr., CSA',
      transition: "Takes command of the Army of Northern Virginia, June 1862, after Joseph E. Johnston is wounded outside Richmond.",
      note: "In his first battle commanding the Army of Northern Virginia, Lee crossed the bulk of his force over the Chickahominy to destroy Porter's isolated corps, leaving only a thin screen to bluff McClellan in front of Richmond. His attacks went in piecemeal all afternoon until a single coordinated assault at dusk finally broke the Union line: his first victory, won at a cost heavier than his enemy's." },
    { battleId: 'e-malvern', role: 'Cmdr., CSA',
      note: "Having chased the Union army across the Peninsula all week, Lee believed one more blow might shatter it and ordered the assault despite the murderous ground. His plan depended on his cannon silencing the Union guns first; they never managed it, and the infantry walked uphill into the slaughter anyway." },
    { battleId: 'e-bullrun2', role: 'Cmdr., CSA',
      note: "Lee split his outnumbered army, sent Jackson on a wide march into Pope's rear, and gambled that he could reunite his two wings on the battlefield before Pope destroyed either half. The gamble paid off completely, and the victory emboldened him to cross the Potomac for his first invasion of the North." },
    { battleId: 'e-antietam', role: 'Cmdr., CSA',
      note: "Carrying the war north for the first time, Lee split his outnumbered army to seize Harpers Ferry, then concentrated at Sharpsburg and fought all day with his back to the Potomac and nothing in reserve. He held his ground by the barest margin and slipped back into Virginia the next night, his bid for a victory on Northern soil spent." },
    { battleId: 'e-fredericksburg', role: 'Cmdr., CSA',
      note: "Handed weeks to prepare by the late Union bridges, Lee dug his army into the hills behind Fredericksburg and let the enemy come to him. He won the most lopsided defensive victory of his career, then noted that it had gained him nothing, not a foot of ground beyond where his lines already stood." },
    { battleId: 'e-chancellorsville', role: 'Cmdr., CSA',
      note: "Outnumbered better than two to one, Lee divided his army twice in two days in front of a stronger enemy, sending Jackson on the flank march that wrecked the Union right while he held the center with a sliver of men. It is fairly called his perfect battle, won at the cost of a fifth of his army and of Stonewall Jackson, and it became the springboard for the invasion that ended at Gettysburg." },
    { battleId: 'e-gettysburg', role: 'Cmdr., CSA',
      note: "Fresh off a smashing victory at Chancellorsville and deep in Northern territory, Lee gambled on breaking the Union line head-on. When the second day's attacks failed, he ordered a frontal assault on the center over Longstreet's objections, and never invaded the North again." },
    { battleId: 'e-wilderness', role: 'Cmdr., CSA',
      note: "Outnumbered nearly two to one, Lee chose to fight inside the thicket where cannon and numbers could not tell, striking the Union army before it could clear the trees. When his right wing nearly collapsed he tried to lead the counterattack in person until his own soldiers turned his horse back, and he held the field, only to find Grant marching south instead of away." },
    { battleId: 'e-spotsylvania', role: 'Cmdr., CSA',
      note: "Lee read Grant's move at once and won the race to the crossroads, then dug the long Mule Shoe salient to hold the high ground. His mistaken order pulling the artillery out of the salient the night before left its apex nearly defenseless, and when the breach was torn open he rode forward to lead the counterattack himself until his soldiers turned him back." },
    { battleId: 'e-coldharbor', role: 'Cmdr., CSA',
      note: "Lee used the day Grant gave him to have his army dig some seven miles of fieldworks, laid out so its sections could rake each other's fronts. Behind that line his outnumbered army broke the June 3 assault and inflicted one of the most lopsided defeats of the war." },
    { battleId: 'e-petersburg2', role: 'Cmdr., CSA',
      note: "For most of the battle Lee did not believe Grant had crossed the James, and he held his army north of the river while Petersburg nearly fell. Once his scouts confirmed where the Union army had gone, he rushed divisions south, and his lead troops reached the field in time to make the city unstormable and force Grant into a siege." },
    { battleId: 'e-crater', role: 'Cmdr., CSA',
      note: "Lee lost a stretch of his Petersburg line in an instant when the mine blew at dawn, killing some 300 of his men where they slept. His army sealed the breach within the hour and held, and the siege he was defending lasted eight more months." },
    { battleId: 'e-fortstedman', role: 'Cmdr., CSA',
      note: "Starved, outnumbered, and watching his lines stretch toward breaking, Lee approved Gordon's pre-dawn gamble as his one chance to break the siege and slip the army south to join Johnston. He rode up to watch it fail, then authorized the withdrawal once the breakthrough stalled and the ring closed." },
    { battleId: 'e-petersburg3', role: 'Cmdr., CSA',
      note: "Holding more than thirty miles of works with a starving, shrinking army, Lee had no reserve behind the stretch the Sixth Corps hit and could only watch the line come apart. He bought a few hours with the doomed stand at Fort Gregg, told Jefferson Davis that Petersburg and Richmond must be given up, and pulled his army out into the open that night." },
    { battleId: 'e-appomattox', role: 'Cmdr., CSA',
      note: "With Petersburg fallen and his army starving, Lee ran west hoping to reach North Carolina, only to find Union infantry across the road at Appomattox after a last dawn attack failed. Rather than spend his men in a hopeless fight, he rode to the McLean house and surrendered the Army of Northern Virginia, ending four years of war in Virginia." },
  ],
}

const SHERMAN: Commander = {
  id: 'sherman',
  name: 'William T. Sherman',
  side: 'U',
  portrait: '/war-img/cmdr/sherman.jpg',
  born: 1820,
  died: 1891,
  epithet: 'Commander, Military Division of the Mississippi',
  overview:
    "William Tecumseh Sherman was a restless, voluble Ohioan who had failed at banking and law and was running a Louisiana military academy when the war broke out. Early on, exhaustion and gloom in Kentucky got him branded insane by the newspapers; Grant brought him back, and the two became the war's great partnership. He fought up through Shiloh, Vicksburg, and Chattanooga, and when Grant went east in 1864 Sherman took the western armies, captured Atlanta, then cut loose from his supply lines to march to the sea and up through the Carolinas, waging the hard war on the South's capacity to fight that helped end it.",
  fate:
    "Sherman took the surrender of Joseph E. Johnston's armies at Bennett Place in North Carolina in April 1865, the largest surrender of the war. He succeeded Grant as commanding general of the army and oversaw the Indian Wars on the plains, and he refused every effort to draft him for president with the famous line that he would not run if nominated and would not serve if elected. He died in 1891; old Confederate enemies were among his pallbearers.",
  appearances: [
    { battleId: 'e-bullrun1', role: 'Brigade, Union',
      note: "Then a colonel commanding a brigade, Sherman found an unguarded ford upstream of the Stone Bridge, crossed around mid-morning, and struck the Confederate line on Matthews Hill to help drive it back. His men joined the failing Union effort on Henry House Hill in the afternoon and fell back with the rest when the line broke." },
    { battleId: 'w-shiloh', role: 'Div., Union',
      transition: "Sent west after Bull Run, and after a dark winter in Kentucky, Sherman finds his footing under Grant in the Western theatre.",
      note: "Commanding the division nearest Shiloh Church, Sherman took the leading edge of the dawn attack, was wounded twice, and had three horses shot under him while rallying his men. His stubborn fighting retreat slowed the Confederate advance and bought the army the time it needed to survive the first day." },
    { battleId: 'w-corinth', role: 'Memphis, Union',
      note: "Sherman held Memphis with roughly 7,000 men, one of the scattered pieces of Grant's command that Van Dorn hoped to beat before they could concentrate. He stayed at his post on the Mississippi and did not take part in the battle itself." },
    { battleId: 'w-vicksburg', role: 'XV Corps, Union',
      note: "Sherman commanded the XV Corps through the campaign, feinting an attack at Haynes' Bluff to fix Pemberton's attention north while Grant crossed downstream. Earlier he had marched his infantry into chest-deep swamp to pull Porter's boxed-in fleet out of the flooded forest." },
    { battleId: 'w-missionary', role: 'Army of the Tennessee',
      note: "Grant gave Sherman the main blow against the north end of the ridge at Tunnel Hill. Misled by bad maps onto a detached hill, he attacked piecemeal across a ravine and was held all day by Cleburne's outnumbered division, taking heavy losses for no breakthrough." },
    { battleId: 'w-jonesborough', role: 'Cmdr., Union',
      transition: "Takes over the western armies when Grant goes east, March 1864, and drives on Atlanta.",
      note: "Rather than storm Atlanta's works, Sherman swung the bulk of his three armies south and west to cut the Macon & Western Railroad, the city's last open supply line, near Jonesborough. When the line was torn up and Hood gave up the city, he wired Washington the four words that turned the Northern mood: “Atlanta is ours, and fairly won.”" },
    { battleId: 'w-bentonville', role: 'Cmdr., Union',
      note: "Marching for Goldsboro at the head of two wings a full day's march apart, Sherman was so sure the campaign was over that he dismissed warnings and rode with the wrong wing while Johnston struck the other. He recovered fast, brought up his whole army the next day, and chose not to bleed it against entrenched men with the war all but won, a caution he later regretted." },
  ],
}

export const COMMANDERS: Record<string, Commander> = {
  lee: LEE,
  grant: GRANT,
  sherman: SHERMAN,
}

export const commanderIds = Object.keys(COMMANDERS)
