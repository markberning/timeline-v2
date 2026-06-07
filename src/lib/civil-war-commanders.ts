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

import { makeCastLookup } from '@/lib/wars/cast-lookup'

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

// ── Roster (authored 2026-06-02; per-battle notes are the gated dossier strips;
// overview + fate are new prose, web-verified by the authoring pass) ──

const BRAGG: Commander = {
  id: "bragg", name: "Braxton Bragg", side: 'C', portrait: "/war-img/cmdr/bragg.jpg",
  born: 1817, died: 1876, epithet: "Cmdr., Army of Tennessee",
  overview: "Braxton Bragg was a North Carolina-born West Pointer and sugar planter who owned enslaved people before the war. As commander of the Confederacy's main western army from 1862 he won a costly tactical victory at Chickamauga but was better known for retreats, feuds with his own generals, and a temper that made him widely disliked. His invasion of Kentucky stalled at Perryville, he pulled back after Stones River, and his lines broke badly at Missionary Ridge in November 1863, which cost him the army command.",
  fate: "Jefferson Davis kept Bragg on as a military adviser and later gave him a department command, but he held no major field role again. He survived the war and worked as an engineer afterward, and he died suddenly in 1876 at Galveston, Texas, apparently of heart failure.",
  appearances: [
    { battleId: "w-shiloh", role: "Corps, CSA", note: "Bragg commanded one of the Confederate corps and threw brigade after brigade at the Hornet’s Nest in piecemeal frontal attacks that were shredded against the line. His refusal to flank the position instead of charging it head-on cost the Confederates heavily in time and blood." },
    { battleId: "w-perryville", role: "Cmdr., Mississippi", note: "Bragg led the invasion of Kentucky to flip a loyal slave state, then misread Buell’s feint and threw only about sixteen thousand men against a corner of a much larger army. He held the field at dusk, but that night he read the closing trap, abandoned nine hundred wounded, and withdrew, giving up the state his victory was meant to win." },
    { battleId: "w-stonesriver", role: "Cmdr., Tennessee", note: "Bragg struck first on December 31, bent the Union line nearly double, and wired Richmond that he had won. When the enemy was still there two days later, he ordered Breckinridge into a doomed charge against his general’s protest, then withdrew his bled-white army south toward Tullahoma." },
    { battleId: "w-chickamauga", role: "Cmdr., CSA", note: "Bragg drew Rosecrans into the woods and won the field, the only major Confederate victory in the West. Then he refused the pursuit Forrest and Longstreet demanded, besieged Chattanooga instead, and tore his own command apart in the recriminations that followed." },
    { battleId: "w-lookout", role: "Cmdr., CSA", note: "Bragg held the heights around Chattanooga after Chickamauga, but thinned the Lookout Mountain garrison in the days before the attack, trusting the cliffs to defend themselves. When the slope gave way he wrote off the mountain, pulling his men down overnight to concentrate on Missionary Ridge." },
    { battleId: "w-missionary", role: "Cmdr., CSA", note: "Bragg held the ridge he thought impregnable, but he had weakened his own line, detaching Longstreet to Knoxville and splitting his force between base and crest. He watched his Army of Tennessee come apart under the center assault, lost his command within days, and asked to be relieved." },
    { battleId: "n-fortfisher2", role: "Dept. cmdr., CSA", note: "Bragg commanded the department from Wilmington and held a full division of about 6,400 men under Hoke a short march from the fort. Cautious to the end, he never threw that division at Terry’s exposed line, sending only a small detachment forward and letting the garrison be taken apart while the force that might have saved it stood idle." },
    { battleId: "w-bentonville", role: "Wing, CSA", note: "Bragg held nominal command of part of Johnston’s line, including Hoke’s division, in one of his last field roles of the war. His sector saw hard fighting on the first day before the Confederate effort spent itself against the Union artillery on the high ground." },
  ],
}

const LONGSTREET: Commander = {
  id: "longstreet", name: "James Longstreet", side: 'C', portrait: "/war-img/cmdr/longstreet.jpg",
  born: 1821, died: 1904, epithet: "Lt. Gen., First Corps, A.N.V.",
  overview: "James Longstreet was a West Point graduate and career army officer who resigned to join the Confederacy in 1861. He became Lee's senior corps commander and his most dependable subordinate, the man Lee called his 'Old War Horse,' leading a wing and then the First Corps through Second Bull Run, Antietam, Fredericksburg, and Gettysburg. In the fall of 1863 he took his corps west to help win Chickamauga, then returned east and was badly wounded by friendly fire at the Wilderness in May 1864.",
  fate: "Longstreet recovered and was with Lee's army at the Appomattox surrender in April 1865. After the war he became a Republican, supported his old friend Grant, took federal appointments, and defended Black civil rights as commander of the Louisiana state militia. Those choices made him a target of Lost Cause writers, who blamed him for Gettysburg and worked to wreck his reputation. He died in 1904.",
  appearances: [
    { battleId: "e-gainesmill", role: "Div., CSA", note: "Longstreet held the Confederate right opposite Porter’s southern flank, ordered in at first as a diversion to hold the line until Jackson arrived. In the dusk assault his division pressed hard against the Union left as Hood’s brigade pierced the center, helping collapse a position that had held for hours." },
    { battleId: "e-bullrun2", role: "Wing, CSA", note: "Longstreet brought Lee’s second wing through Thoroughfare Gap and deployed it unseen on Jackson’s right, on the exposed flank of Pope’s army. On the afternoon of August 30 he launched some 25,000 to 28,000 men in what is generally reckoned the largest mass assault of the war, rolling up the Union left." },
    { battleId: "e-antietam", role: "Right wing, CSA", note: "Longstreet held the Confederate center and right through the day’s heaviest pressure, steadying the line around the Sunken Road as Union assaults tore at it. His work at Sharpsburg earned him the name Lee used ever after: his “old war horse.”" },
    { battleId: "e-fredericksburg", role: "First Corps, CSA", note: "Longstreet held the Confederate center on Marye’s Heights, packing infantry several ranks deep in the sunken road behind a stone wall. His artillerist had promised that a chicken could not live on the field below, and through fourteen charges not one Union soldier reached the wall." },
    { battleId: "e-gettysburg", role: "Lt. Gen., CSA", note: "Lee's senior corps commander argued for swinging around the Union left and fighting on the defensive rather than attacking the heights. Overruled, he reluctantly launched the second-day assault and then the doomed charge on the third." },
    { battleId: "w-chickamauga", role: "Wing, CSA", note: "Longstreet brought his divisions by rail from Lee’s army in Virginia and took command of Bragg’s left wing. At about 11:10 on September 20 he sent a massed column of roughly eight brigades straight into the gap Wood had just left, breaking the Union right and routing half the army." },
    { battleId: "e-wilderness", role: "First Corps, CSA", note: "Longstreet’s First Corps arrived at the last instant on the morning of May 6, just as Hill’s line gave way, and his counterattack drove the Union army back through the woods before his flanking column rolled up Hancock’s line. Pressing the advantage on the Plank Road, he was shot through the throat by his own men, almost exactly where Jackson had fallen a year before, and was out of the war for months." },
    { battleId: "e-appomattox", role: "I Corps, CSA", note: "Lee’s senior surviving corps commander held the rear of the trapped army against Grant’s closing forces while Gordon attacked in front. With the army surrounded on three sides, his line was the wall that kept the pursuit off Lee’s back during the final hours before the surrender." },
  ],
}

const JACKSON: Commander = {
  id: "jackson", name: "Stonewall Jackson", side: 'C', portrait: "/war-img/cmdr/jackson.jpg",
  born: 1824, died: 1863, epithet: "Lt. Gen., Second Corps, A.N.V.",
  overview: "Before the war Thomas J. Jackson was a stiff, eccentric professor at the Virginia Military Institute who enslaved several people in Lexington. He won his nickname at First Bull Run in 1861, when his brigade stood firm and a fellow officer said he was standing 'like a stone wall.' Over the next two years he became Robert E. Lee's most aggressive lieutenant, running rings around Union armies in the Shenandoah Valley and commanding a wing, then the Second Corps, of the Army of Northern Virginia at Second Bull Run, Antietam, and Fredericksburg.",
  fate: "At Chancellorsville in May 1863, Jackson was scouting after dark when his own Confederate pickets mistook his party for enemy cavalry and fired, hitting him three times. His left arm was amputated, and he died of pneumonia eight days later, on May 10, 1863, the most damaging loss of a single commander the Confederacy suffered.",
  appearances: [
    { battleId: "e-bullrun1", role: "Brigade, CSA", note: "Jackson posted his fresh Virginia brigade on the reverse slope of Henry House Hill, sheltering his infantry behind the crest while his guns did the killing, and stood firm while the rest of the Confederate left fell apart. It was here that Bee pointed to him and gave him the name he carried the rest of the war: Stonewall." },
    { battleId: "e-winchester1", role: "Cmdr., CSA", note: "Jackson brought roughly 16,000 men up out of the morning fog on May 25 and split his attack, driving up the Valley Turnpike against the Union right while sending Ewell against the left. When the line on Bowers Hill held, he loosed Taylor’s Louisianans in the flank charge that broke Banks’s army and routed it through Winchester, the signature victory of his Shenandoah Valley Campaign." },
    { battleId: "e-malvern", role: "Wing, CSA", note: "Jackson held the Confederate left, lining up batteries that were mostly powerless to subdue the Union fire from above. Late in the day his brigades went forward on D. H. Hill’s left into the same futile frontal assaults and took heavy losses for nothing." },
    { battleId: "e-bullrun2", role: "Wing, CSA", note: "Jackson marched his wing roughly fifty miles around Pope’s flank, captured and burned the great Union supply depot at Manassas Junction, then dug in behind an unfinished railroad grade and held off two days of frontal assaults. He pinned Pope’s whole army in place until Lee’s other wing could arrive and strike." },
    { battleId: "e-antietam", role: "Left wing, CSA", note: "Detached to take Harpers Ferry, Jackson captured its garrison of more than 12,000 men on September 15, the largest surrender of United States troops in the war, then hurried his wing north to reach the field in time. He held Lee’s left through the morning slaughter in the Cornfield and sprang the trap in the West Woods that wrecked a Union division in twenty minutes." },
    { battleId: "e-fredericksburg", role: "Second Corps, CSA", note: "Jackson held the Confederate right at the southern end of the line, where a swampy gap left between two brigades was the army’s one real weakness. Meade’s division broke clean through it before Jackson’s reserves counterattacked, sealed the hole, and drove the unsupported Federals back across the railroad." },
    { battleId: "e-chancellorsville", role: "Second Corps, CSA †", note: "Jackson took his entire Second Corps on a roughly twelve-mile march around the Union army and shattered Howard’s XI Corps from the side at dusk on May 2, the most famous maneuver of the war. Scouting ahead in the dark for a night attack, he was shot by his own men, lost his left arm, and died of pneumonia eight days later." },
  ],
}

const SHERIDAN: Commander = {
  id: "sheridan", name: "Philip Sheridan", side: 'U', portrait: "/war-img/cmdr/sheridan.jpg",
  born: 1831, died: 1888, epithet: "Cmdr., Army of the Shenandoah",
  overview: "Philip H. Sheridan was a West Point graduate and career army officer, low-ranking and largely unnoticed when the war began. He made his name as an aggressive division commander in the West at Perryville, Stones River, and Chickamauga, then was handed the cavalry of the Army of the Potomac. In 1864 Grant gave him the Army of the Shenandoah, where his victories at Opequon (Third Winchester) and Cedar Creek wrecked Confederate power in the valley, and he closed the war driving Lee's army at Five Forks and Appomattox.",
  fate: "Sheridan ended the war as one of the Union's most celebrated field commanders and stayed in the army, leading harsh campaigns against the Plains tribes and rising to general-in-chief in 1883. He was promoted to General of the Army in 1888 and died that August at age 57 of heart failure at his summer home in Nonquitt, Massachusetts, after a series of heart attacks.",
  appearances: [
    { battleId: "w-perryville", role: "Div., Union", note: "Sheridan seized Peters Hill west of town at dawn, then was ordered by his corps commander to pull back and avoid a general engagement. Late in the afternoon his division threw back a Confederate lunge on the Springfield Pike, but he stayed out of the fight raging just to his north." },
    { battleId: "w-stonesriver", role: "Div., Union", note: "Sheridan’s division dug in among the cedar brakes and stood for roughly four hours in the sector the soldiers named the Slaughter Pen, buying the time the rest of the army needed to form a new line. All three of his brigade commanders were killed and more than a third of his men fell before he pulled back, his ammunition gone." },
    { battleId: "w-chickamauga", role: "Div., Union", note: "Sheridan held a division on the Union right when Longstreet’s column burst through the gap. His command was caught in the rout and swept off the field, and he spent the rest of his life answering for Chickamauga." },
    { battleId: "e-opequon", role: "Cmdr., Union", note: "Sheridan brought the Army of the Shenandoah across Opequon Creek to destroy Early before he could concentrate, acting on word that a Confederate division had left the Valley. A traffic jam in the Berryville Canyon cost him the surprise, so he fought the battle head-on and then loosed his reserves and massed cavalry against Early’s open northern flank, breaking the line and sending the Confederates whirling south through Winchester." },
    { battleId: "e-cedarcreek", role: "Cmdr., Union", note: "Sheridan was away at Winchester when his army was routed at dawn, returning from a meeting in Washington. He galloped roughly a dozen miles south down the Valley Pike against the current of his own fleeing men, rallied the broken army by the force of his arrival, and launched the afternoon counterattack that took the whole field back by dark." },
    { battleId: "e-appomattox", role: "Cavalry, U.S.", note: "Sheridan’s cavalry broke the line at Five Forks, then harried Lee’s flanks the whole retreat and helped trap a third of his army at Sailor’s Creek. By riding faster than the Confederates could march, his troopers got in front of the army at Appomattox and slammed the last road shut." },
    { battleId: "e-fiveforks", role: "Cmdr., Union", note: "Brought east after burning the Shenandoah Valley, Sheridan was handed the cavalry and an infantry corps and told to break Lee’s last railroad. When his attack drifted into empty woods, he rode straight into the lines, waving the battle flag and dragging the infantry back onto the enemy until the Confederate left caved in." },
  ],
}

const MEADE: Commander = {
  id: "meade", name: "George G. Meade", side: 'U', portrait: "/war-img/cmdr/meade.jpg",
  born: 1815, died: 1872, epithet: "Cmdr., Army of the Potomac",
  overview: "George Gordon Meade was born in Cadiz, Spain, to a Philadelphia merchant family, graduated from West Point, and worked as an army engineer building lighthouses before the war. He rose through brigade and corps command and was handed the Army of the Potomac just days before Gettysburg, where he defeated Lee in July 1863. He kept command through 1864 and 1865, though once Grant attached his headquarters to the army for the Overland Campaign, Meade fought in Grant's shadow at the Wilderness, Spotsylvania, Cold Harbor, and Petersburg.",
  fate: "Meade kept his command to the end of the war and remained in the army afterward, holding various postings including military governor during Reconstruction. He died in Philadelphia in 1872 of pneumonia, complicated by his old war wounds.",
  appearances: [
    { battleId: "e-gettysburg", role: "Cmdr., Potomac", note: "Handed command of the Army of the Potomac just three days before the battle, Meade fought a careful defensive fight on excellent ground, holding the fishhook line against three days of attacks to win the biggest battle of the war." },
    { battleId: "e-spotsylvania", role: "Army of the Potomac", note: "Meade remained the actual commander of the Army of the Potomac while Grant set the strategy, and he passed the attack orders down to the corps. It was Meade who told Warren to throw his V Corps at Laurel Hill once more on May 12, at all hazards, while the Mule Shoe bled." },
    { battleId: "e-wilderness", role: "Army of the Potomac", note: "Meade commanded the Army of the Potomac on the ground while Grant set the strategy from alongside him. On May 5 he ordered Warren’s V Corps to attack Ewell along the Orange Turnpike, opening the battle, and spent two days fighting his corps blind through a thicket where his orders dissolved the moment they left his hand." },
    { battleId: "e-coldharbor", role: "Army of the Potomac", note: "As commander of the Army of the Potomac, Meade passed Grant’s order down the line and set three corps charging west from Old Cold Harbor on June 3. He thought the attack against entrenched infantry was close to suicidal but did not press the objection on Grant." },
    { battleId: "e-petersburg2", role: "Army of the Potomac", note: "Meade commanded the Army of the Potomac under Grant and took direct charge of the assaults from June 16 onward. He pushed the June 18 attacks hard and saw them broken against the works, then conceded in his official report that he could not report more success and ordered the army to dig in." },
    { battleId: "e-crater", role: "Army of the Potomac", note: "Meade commanded the Army of the Potomac and ordered Burnside, the day before the assault, not to lead with the trained USCT division. A Joint Committee of Congress later laid much of the blame on him for reversing the plan and forcing the change." },
  ],
}

const FORREST: Commander = {
  id: "forrest", name: "Nathan Bedford Forrest", side: 'C', portrait: "/war-img/cmdr/forrest.jpg",
  born: 1821, died: 1877, epithet: "Lt. Gen., Confederate cavalry",
  overview: "Before the war Nathan Bedford Forrest grew rich as a slave trader, running a slave market and jail in Memphis through the 1850s. He enlisted as a private and rose to lieutenant general, and he was a genuinely gifted cavalry tactician whose raids and quick strikes ran rings around Union forces at Fort Donelson, Shiloh, Chickamauga, and across Tennessee and Mississippi. That skill does not soften the rest of his record: in April 1864 troops under his command massacred surrendered Black United States soldiers at Fort Pillow.",
  fate: "Forrest fought to the surrender in 1865 and returned to Tennessee, where he turned to railroads and planting. After the war he became the first Grand Wizard of the Ku Klux Klan, helping lead its campaign of racial terror against Black Southerners before later distancing himself from it. He died in Memphis in 1877.",
  appearances: [
    { battleId: "w-donelson", role: "Cavalry, CSA", note: "Forrest screened the army with his cavalry through the siege and refused to be surrendered, saying he had not come to give up his command. On the night before the capitulation he led about 700 of his horsemen out through the waist-deep icy backwater of Lick Creek and rode clear of the trap, finding no enemy in the way." },
    { battleId: "w-shiloh", role: "Cavalry, CSA", note: "Forrest scouted the river himself the night of April 6 and saw Buell’s reinforcements crossing, a warning his superiors ignored. Covering the retreat on April 8, he ambushed the pursuing Union force at Fallen Timbers and, riding too far in, was shot at close range but galloped out alive." },
    { battleId: "w-chickamauga", role: "Cavalry, CSA", note: "Forrest’s troopers fired the first shots at Reed’s Bridge and then fought dismounted alongside the infantry. Riding on the heels of the fleeing Federals afterward, he pressed Bragg furiously to finish them, and raged when the order to pursue never came." },
    { battleId: "w-franklin", role: "Cavalry, CSA", note: "Forrest had found a crossing of the Harpeth and argued for a flanking move to turn Schofield out of his works rather than charge them head-on. Hood overruled him and ordered the frontal assault anyway." },
    { battleId: "w-nashville", role: "Cavalry, CSA (absent)", note: "Hood’s best cavalryman was not at the battle at all, detached toward Murfreesboro to raid the railroad while his eyes and striking power were needed most. Forrest rejoined the broken army afterward and ran the rearguard down the pikes, the only thing that kept any organized piece of it together during the retreat." },
  ],
}

const GORDON: Commander = {
  id: "gordon", name: "John B. Gordon", side: 'C', portrait: "/war-img/cmdr/gordon.jpg",
  born: 1832, died: 1904, epithet: "Maj. Gen., Second Corps, A.N.V.",
  overview: "John B. Gordon was a Georgia lawyer and businessman with no military training who rose through the Confederate ranks on sheer aggression and presence. Badly wounded at Antietam, he came back to become one of Lee's most trusted combat commanders, leading a division in the 1864 Valley campaign at Opequon and Cedar Creek. By the war's last weeks he commanded the Second Corps of the Army of Northern Virginia.",
  fate: "Gordon planned and led the last major Confederate attack of the war, the assault on Fort Stedman in March 1865, and commanded the rear guard at Appomattox before the surrender that April. After the war he became a powerful Georgia Democrat, serving as U.S. senator and governor, and built the romantic Lost Cause version of the war in his memoirs. He died in 1904.",
  appearances: [
    { battleId: "e-opequon", role: "Div., CSA", note: "Gordon’s division drove the counterattack into the seam of the Union line alongside Rodes, throwing the Federal center back in disorder for a stretch of the afternoon. His was the left of Early’s line that Crook’s infantry and the massed Union cavalry caved in once the flank attack came down from the north." },
    { battleId: "e-cedarcreek", role: "Div., CSA", note: "Gordon scouted the Union position from the heights of Massanutten Mountain and devised the flank march that opened the battle, leading the column that hit the exposed Union left. He blamed the “fatal halting” that followed for converting the morning’s victory into the evening’s defeat, a charge he and Early feuded over for the rest of their lives." },
    { battleId: "e-fortstedman", role: "Attack cmdr., CSA", note: "Gordon studied Fort Stedman for weeks, then planned and led the assault: axemen and men posing as deserters to clear the way, a rush in the dark that took the fort and its flanking batteries within an hour. When his columns failed to find the rear forts they were sent for and the Union guns ringed him in, he pulled back what he could of a wrecked attack." },
    { battleId: "e-appomattox", role: "II Corps, CSA", note: "Gordon led the Confederate dawn attack on April 9, breaking through Sheridan’s cavalry and briefly opening the road west before massed Union infantry appeared beyond the ridge. He sent Lee word that his command had been fought to a frazzle and could do nothing more, and three days later he answered Chamberlain’s salute as his men stacked their arms." },
    { battleId: "e-petersburg3", role: "Second Corps, CSA", note: "Gordon held the eastern end of the Petersburg line, where the Union Ninth Corps stormed the works around Fort Mahone in close, grinding fighting. He kept his front intact long enough to cover the army’s withdrawal, then pulled out with the rest that night and took the rear guard on the retreat west." },
  ],
}

const HANCOCK: Commander = {
  id: "hancock", name: "Winfield S. Hancock", side: 'U', portrait: "/war-img/cmdr/hancock.jpg",
  born: 1824, died: 1886, epithet: "Maj. Gen., II Corps",
  overview: "Winfield Scott Hancock was a Pennsylvania-born West Point graduate and Mexican War veteran whose battlefield presence earned him the nickname \"Hancock the Superb.\" He took command of the II Corps in 1863 and is best remembered for his steadying leadership at Gettysburg, where he organized the Union defense on the first day and held the center against Pickett's Charge, taking a serious wound. He led the II Corps through the Wilderness, Spotsylvania, Cold Harbor, and Petersburg.",
  fate: "Hancock survived the war and stayed in the army, never fully shaking his Gettysburg wound. In 1880 he ran for president as the Democratic nominee and narrowly lost to James A. Garfield. He died in 1886 while still on active duty.",
  appearances: [
    { battleId: "e-gettysburg", role: "Corps, Union", note: "Sent ahead on the first day to judge the ground, Hancock chose the high ground south of town and steadied the broken line. He anchored the Union center and was badly wounded helping repulse Pickett's Charge." },
    { battleId: "e-spotsylvania", role: "II Corps, Union", note: "Hancock led the predawn assault of May 12, sending his entire II Corps in a massive column straight at the apex of the Mule Shoe. His men overran the salient and captured most of a Confederate division, opening the breach that triggered twenty hours of fighting at the Bloody Angle." },
    { battleId: "e-wilderness", role: "II Corps, Union", note: "Hancock’s big II Corps carried the Union effort on the Plank Road, and at dawn on May 6 his assault nearly shattered A.P. Hill’s corps before Longstreet arrived. Hours later Longstreet’s flank attack came up a hidden railroad bed into Hancock’s unguarded left and rolled his line up, in his own words, like a wet blanket, back to the Brock Road breastworks." },
    { battleId: "e-coldharbor", role: "II Corps, Union", note: "Hancock’s II Corps held the southern end of the assault and drove clean through Breckinridge’s front, the only real lodgment won inside the Confederate works that morning. A counterattack threw his men back out with heavy loss, and the one breakthrough of the day was gone in minutes." },
    { battleId: "e-petersburg2", role: "II Corps, Union", note: "Hancock’s II Corps arrived on the evening of June 15 with the fresh troops that could have finished the job, but his orders had miscarried and he never learned Petersburg was the objective until a message reached him from Smith. As the ranking officer he deferred to Smith’s decision to wait, then fought on through the 16th before his unhealed Gettysburg wound forced him to give up command." },
  ],
}

const HOOKER: Commander = {
  id: "hooker", name: "Joseph Hooker", side: 'U', portrait: "/war-img/cmdr/hooker.jpg",
  born: 1814, died: 1879, epithet: "Cmdr., Army of the Potomac",
  overview: "Joseph Hooker was a West Point graduate and Mexican War veteran whose aggressiveness earned him the nickname 'Fighting Joe.' He led a corps at Antietam and a grand division at Fredericksburg, then in early 1863 was given command of the whole Army of the Potomac. He boasted of the finest army on the planet, then was outgeneraled and beaten by Lee at Chancellorsville in May 1863.",
  fate: "Hooker was relieved of army command in late June 1863, just before Gettysburg, and replaced by George Meade. He went west and led troops well at Lookout Mountain and Missionary Ridge, but left the field in 1864 after Sherman passed him over for promotion. He stayed in the army until 1868 and died in 1879.",
  appearances: [
    { battleId: "e-antietam", role: "I Corps, Union", note: "Hooker opened the battle at dawn, driving his I Corps south into Miller’s Cornfield in the morning’s first and bloodiest assault. A few hours in he was shot through the foot and carried from the field, and his attack stalled behind him." },
    { battleId: "e-fredericksburg", role: "Center Grand Div., Union", note: "Hooker held the Center Grand Division in reserve and was ordered to throw it at Marye’s Heights once the earlier attacks had failed. He protested the assault as hopeless, sent his men up anyway under orders, and watched them shattered like the rest before dark." },
    { battleId: "e-chancellorsville", role: "Cmdr., Potomac", note: "Hooker rebuilt a beaten army and marched roughly twice Lee’s numbers across the rivers and behind the Confederate line, one of the best-conceived operations the Army of the Potomac ever attempted. Then he lost his nerve in the Wilderness, pulled back from the open ground he had reached, was concussed by a cannonball against his own headquarters porch on May 3, and quit the campaign with tens of thousands of men who had barely fired a shot." },
    { battleId: "w-lookout", role: "Led assault, Union", note: "Ordered only to demonstrate against the mountain, Hooker sent roughly 10,000 men up its steep western face instead and turned the feint into the climb that took the slope. His patchwork force of three divisions swept the thin defenders off the Cravens House bench and handed him a clean, low-cost win that redeemed a year dented by Chancellorsville." },
    { battleId: "w-missionary", role: "Detachment, Union", note: "Fresh from taking Lookout Mountain the day before, Hooker was to swing around the southern tip of the ridge through Rossville Gap and roll up the Confederate left. A burned bridge over Chattanooga Creek stalled his column for hours, so he did not press the south end until late in the afternoon." },
  ],
}

const AP_HILL: Commander = {
  id: "ap-hill", name: "A.P. Hill", side: 'C', portrait: "/war-img/cmdr/ap-hill.jpg",
  born: 1825, died: 1865, epithet: "Lt. Gen., Third Corps, A.N.V.",
  overview: "Ambrose Powell Hill was a West Point graduate from Virginia who resigned from the U.S. Army to fight for the Confederacy. He built his reputation commanding the hard-driving 'Light Division,' whose late arrival from Harpers Ferry helped save Lee's army at Antietam in September 1862. Promoted to lieutenant general, he led the Third Corps of the Army of Northern Virginia from Gettysburg through the Wilderness, though chronic illness often kept him out of action.",
  fate: "On April 2, 1865, as Grant's troops broke through the lines at Petersburg, Hill rode out to rally his collapsing corps and was shot dead by a pair of Union stragglers. He was killed instantly, a week before Lee surrendered at Appomattox.",
  appearances: [
    { battleId: "e-gainesmill", role: "Div., CSA", note: "Hill threw his roughly 12,000-man Light Division at Boatswain’s Swamp in the first major assault of the afternoon, around 2:30 p.m., rather than wait for the rest of the army to come up. His brigades crossed the open ground and climbed into the guns alone, losing more than 2,000 men for no lasting ground." },
    { battleId: "e-antietam", role: "Div., CSA", note: "Left at Harpers Ferry to handle the surrender, Hill drove his Light Division roughly 17 miles to Sharpsburg in a single afternoon, some of his men in Union blue captured at the garrison. They reached the field at the last possible moment and slammed into Burnside’s exposed flank, saving Lee’s right from collapse." },
    { battleId: "e-wilderness", role: "Third Corps, CSA", note: "Hill’s Third Corps fought Getty and Hancock to a bloody draw on the Plank Road on May 5 but ended the day tangled and disorganized in the brush. At dawn on May 6 Hancock’s assault tore his unsorted line apart, and Lee’s right wing teetered on collapse until Longstreet’s corps arrived to save it." },
    { battleId: "e-petersburg3", role: "Corps cmdr., CSA", note: "Hill held the stretch of line the Sixth Corps shattered, and when his front gave way he rode out with a single staff officer to rally his men. He met two soldiers of the 138th Pennsylvania in the broken ground, demanded their surrender, and was shot dead, the most senior commander either army lost that day." },
  ],
}

const BEAUREGARD: Commander = {
  id: "beauregard", name: "P.G.T. Beauregard", side: 'C', portrait: "/war-img/cmdr/beauregard.jpg",
  born: 1818, died: 1893, epithet: "Confederate general, fired the war's first shots",
  overview: "P.G.T. Beauregard was a Louisiana-born West Point engineer and Mexican War veteran who became the Confederacy's first prominent general. He commanded the bombardment of Fort Sumter in April 1861 that opened the war, shared command at the Confederate victory at First Bull Run, and led the army at Shiloh after Albert Sidney Johnston was killed. Later in the war he organized the defense of Petersburg in 1864, holding the line against early Union assaults.",
  fate: "Beauregard surrendered with the eastern armies in 1865 and returned to Louisiana, where he ran railroads and grew wealthy as a promoter of the Louisiana State Lottery. He had taken up arms in defense of slavery and the Confederate cause; in the postwar years he publicly backed Black suffrage, partly as a tactic to unseat Radical Republicans. He died in New Orleans in 1893 at age 74.",
  appearances: [
    { battleId: "n-sumter", role: "Cmdr., CSA", note: "Newly made the Confederacy’s first general, Beauregard ringed Charleston Harbor with forty-three guns trained on the fort his old West Point artillery teacher now held. He sent the demands to evacuate, opened the bombardment at half past four on April 12, and accepted Anderson’s surrender a day and a half later, courteous to his former instructor to the end." },
    { battleId: "e-bullrun1", role: "Cmdr., CSA", note: "The hero of Fort Sumter held Manassas Junction along Bull Run and planned his own flank attack on the Union left, only to be beaten to the punch by McDowell. With the senior Johnston leaving him tactical command of the field, Beauregard fed brigades onto Henry House Hill and steadied the line that won the day." },
    { battleId: "w-shiloh", role: "Cmdr., CSA", note: "Johnston’s second-in-command, Beauregard took over when Johnston was killed and halted the attacks at dusk, certain he would finish Grant in the morning, even wiring Richmond that he had won a complete victory. Outnumbered by the reinforcements that crossed overnight, he was driven back the next day and retreated to Corinth." },
    { battleId: "e-petersburg2", role: "Petersburg, CSA", note: "Beauregard held Petersburg for four days with a fraction of Grant’s strength, beginning with about 2,200 men spread ten feet apart along the line. Trading ground for time, he pulled back to fresh entrenchments each night and bluffed the Federals into hesitating until Lee arrived, a defense generally reckoned his finest hour." },
  ],
}

const CUSTER: Commander = {
  id: "custer", name: "George A. Custer", side: 'U', portrait: "/war-img/cmdr/custer.jpg",
  born: 1839, died: 1876, epithet: "Union cavalry general, Boy General",
  overview: "George Armstrong Custer graduated last in his West Point class in 1861 but rose fast in the war, becoming a brigadier general of volunteers at 23. He led cavalry under Sheridan in the 1864 Shenandoah Valley campaign at Opequon and Cedar Creek, and in the final pursuit of Lee's army at Five Forks and Appomattox, where his troopers helped cut off the Confederate retreat.",
  fate: "Custer survived the Civil War and reverted from his brevet rank to the regular army, where he became a lieutenant colonel in the 7th Cavalry on the western frontier. On June 25, 1876, he and much of his command were killed at the Battle of the Little Bighorn in Montana Territory, fighting a large force of Lakota, Northern Cheyenne, and Arapaho warriors.",
  appearances: [
    { battleId: "e-opequon", role: "Cavalry, Union", note: "Custer led a cavalry brigade in the massed mounted force that came down on Early’s open left flank from the north. Late in the afternoon he led a charge straight at the Confederate works north of town, around Fort Collier and Star Fort, helping cave in the end of Early’s line." },
    { battleId: "e-cedarcreek", role: "Cavalry, Union", note: "Custer anchored the far Union right with his cavalry division during the afternoon counterattack. His charge curled around the Confederate left toward the Cedar Creek bridge, Early’s line of retreat, and the threat to that escape route broke the Confederate army’s nerve and turned its withdrawal into a rout." },
    { battleId: "e-appomattox", role: "Cavalry div., U.S.", note: "On April 8 Custer drove his cavalry division into Appomattox Station ahead of Lee’s infantry and seized the supply trains the starving Confederates were counting on, overrunning the reserve artillery and taking about two dozen guns in the bargain. Taking the food and the road put Sheridan’s horsemen in front of Lee’s army for the first time." },
    { battleId: "e-fiveforks", role: "Cavalry div., Union", note: "Custer led a cavalry division on the far Union left, pressing the Confederate front dismounted so the defenders could not shift to meet the infantry hitting their flank. His troopers kept the pressure on through the collapse and rode hard in the pursuit that followed it to Appomattox." },
  ],
}

const DD_PORTER: Commander = {
  id: "dd-porter", name: "David D. Porter", side: 'U', portrait: "/war-img/cmdr/dd-porter.jpg",
  born: 1813, died: 1891, epithet: "Admiral, U.S. Navy",
  overview: "David Dixon Porter came from a famous navy family and was a foster brother to David Farragut. In 1862 his mortar boats pounded Forts Jackson and St. Philip below New Orleans. He then commanded the river gunboat fleet that worked with Grant to take Vicksburg in July 1863, splitting the Confederacy along the Mississippi. In January 1865 his ships led the largest naval bombardment of the war in the capture of Fort Fisher, closing Wilmington, North Carolina, the South's last open Atlantic port.",
  fate: "Porter rose to vice admiral and, after Farragut died in 1870, became the navy's second full admiral. He later ran the U.S. Naval Academy and advised the Navy Department, and he died in 1891.",
  appearances: [
    { battleId: "n-jacksonstphilip", role: "Mortars, Union", note: "Farragut’s foster brother led the mortar flotilla, twenty schooners that lobbed thousands of 13-inch shells into Fort Jackson over five or six days of bombardment. He wanted to keep shelling rather than run the forts, was overruled, and afterward took the forts’ surrender once their garrison had mutinied." },
    { battleId: "w-vicksburg", role: "Fleet, Union", note: "Porter commanded the river fleet of gunboats and ironclads, and on the night of April 16 he ran his boats straight past the Vicksburg batteries to put them below the city where Grant needed them. His warships then ferried the army across at Bruinsburg and shelled the fortress from the water through the siege." },
    { battleId: "t-mansfield", role: "Fleet, Union", note: "Porter’s gunboat fleet had carried the expedition up the Red River, but Banks left the river for the inland road, so the fleet was not present at the battle. After the defeat the falling river nearly stranded his squadron, which escaped only when soldiers dammed the rapids to float the boats over." },
    { battleId: "n-fortfisher2", role: "Cmdr., Union fleet", note: "Porter brought back nearly the whole North Atlantic Blockading Squadron, around 58 ships, the largest fleet the Navy had yet massed, and this time aimed his fire to knock out the fort’s guns one by one instead of just battering the sand. He also sent some 2,000 sailors and marines ashore to storm the sea-face corner, a charge that was bloodily repulsed but pulled the garrison away from the army’s blow." },
  ],
}

const HARDEE: Commander = {
  id: "hardee", name: "William J. Hardee", side: 'C', portrait: "/war-img/cmdr/hardee.jpg",
  born: 1815, died: 1873, epithet: "Lt. Gen., Army of Tennessee",
  overview: "Born near Savannah, Georgia, William J. Hardee was a West Point graduate and career soldier who, before the war, wrote the drill book that armies on both sides would carry into battle: his 1855 'Rifle and Light Infantry Tactics' became the standard infantry manual North and South. When Georgia seceded he resigned and joined the Confederacy, rising to lieutenant general. He fought in the Western Theater throughout the war, commanding a wing at Perryville (1862), a corps at Stones River, and the field defense at Jonesborough (1864) as Atlanta fell.",
  fate: "Hardee fought to the end, commanding a corps against Sherman's advance at Bentonville in North Carolina in March 1865, one of the last major battles in the East. He surrendered with the Army of Tennessee weeks later and went into the planting and railroad business in Alabama. He died at Wytheville, Virginia, in 1873.",
  appearances: [
    { battleId: "w-perryville", role: "Left Wing, CSA", note: "Hardee commanded the Confederate left wing, holding the roads into town from the north and west and feeding his divisions into the afternoon assaults on McCook’s corps. A noted authority on infantry tactics, he managed the part of the line that pressed the Union center while the heavier blow fell to the north." },
    { battleId: "w-stonesriver", role: "Corps, CSA", note: "Hardee, the army’s ablest tactician and author of its drill manual, led the dawn assault that swept out of the cedars and crumpled the Union right. His attack drove McCook’s wing back three miles before Sheridan’s stand and the line near the pike halted the Confederate advance." },
    { battleId: "w-jonesborough", role: "Field cmdr., CSA", note: "Handed two corps to clear the railroad, Hardee saw his August 31 attack break against Howard’s works and his men refuse a second charge. Stripped of half his force overnight, he held a two-mile front with about 12,000 men on September 1, lost the salient, and slipped his battered corps south in the dark to save it from being trapped." },
    { battleId: "w-bentonville", role: "Corps, CSA", note: "Hardee led the March 19 assault that shattered Carlin’s division and nearly rolled up the Union left, then on March 21 threw together the scratch counterattack that stopped Mower and saved the Mill Creek bridge. The same charge killed his sixteen-year-old son Willie, whom he had let enlist only hours before." },
  ],
}

const HOOD: Commander = {
  id: "hood", name: "John Bell Hood", side: 'C', portrait: "/war-img/cmdr/hood.jpg",
  born: 1831, died: 1879, epithet: "Gen., Cmdr., Army of Tennessee",
  overview: "John Bell Hood was a Kentucky-born West Pointer who made his name as an aggressive brigade and division commander, leading the Texas Brigade in hard frontal fights like Gaines' Mill in 1862. He lost the use of his left arm at Gettysburg in July 1863 and had his right leg amputated after Chickamauga that September, strapping himself into the saddle to keep fighting for the Confederacy and its defense of slavery. Promoted over abler men to command the Army of Tennessee in 1864, he could not hold Atlanta and then threw his army away in the Tennessee campaign, in the slaughter at Franklin and the rout at Nashville.",
  fate: "Hood resigned his command in January 1865 after Nashville wrecked his army, and the war ended a few months later. He settled in New Orleans as a cotton merchant and insurance man and wrote a self-justifying memoir. A yellow fever epidemic ruined his business and killed him in 1879, days after it took his wife and oldest daughter, leaving ten orphaned children.",
  appearances: [
    { battleId: "e-gainesmill", role: "Brigade, CSA", note: "Leading the Texas Brigade in Whiting’s division, Hood sent his men down the slope and up the deadly hillside without firing a shot, refusing to let them stop and lose momentum under fire. His charge broke through all three of Porter’s tiers at dusk and took the crest, at the cost of more than a thousand men in his and Law’s brigades together." },
    { battleId: "w-jonesborough", role: "Cmdr., CSA", note: "Hood sent Hardee to drive the Federals off the last railroad, then in the small hours recalled half that force to Atlanta against an assault that never came. With the rail line cut, he ordered Atlanta abandoned the night of September 1, burning his stores and marching his army out to fight again at Franklin and Nashville." },
    { battleId: "w-franklin", role: "Cmdr., CSA", note: "Hood marched the Army of Tennessee north on a gamble to reverse the loss of Atlanta, trapped Schofield at Spring Hill, then let him escape in the night. The next afternoon at Franklin he ordered some twenty thousand men across two miles of open ground into fortified works, with almost no artillery, over the objections of his own generals." },
    { battleId: "w-nashville", role: "Cmdr., CSA", note: "Hood brought the wreckage of his army, broken at Franklin two weeks before, up to the edge of Nashville and dug in, too weak to attack the fortress city and unwilling to retreat. Over two days Thomas collapsed his line and destroyed the Army of Tennessee; Hood resigned his command the following month." },
  ],
}

const PRICE: Commander = {
  id: "price", name: "Sterling Price", side: 'C', portrait: "/war-img/cmdr/price.jpg",
  born: 1809, died: 1867, epithet: "Maj. Gen., Missouri State Guard",
  overview: "Sterling Price was a former Missouri governor who threw in with the secessionists and led the pro-Confederate Missouri State Guard. He won at Wilson's Creek in 1861 but was beaten at Pea Ridge in 1862 and again at Corinth, fighting to pull Missouri out of the Union and into a slaveholding Confederacy. In the fall of 1864 he gambled on a long raid into Missouri that ended in defeat at Westport near Kansas City, wrecking his army.",
  fate: "Rather than surrender, Price fled to Mexico to help found Carlota, an exile colony for ex-Confederates who wanted to keep living as planters under Emperor Maximilian. The colony failed, and broke and sick he returned to Missouri, where he died in St. Louis in 1867.",
  appearances: [
    { battleId: "t-wilsonscreek", role: "Missouri St. Guard", note: "Price led the Missouri State Guard, the larger half of the Confederate force, and organized the repeated assaults up the south face of Bloody Hill. He was wounded in the side during the fighting but stayed in the saddle, and after the victory marched his Missourians north alone when he and McCulloch could not agree on what to do next." },
    { battleId: "t-pearidge", role: "Wing, CSA", note: "Price led the Missouri wing up the Telegraph Road and drove Carr back through four lines to seize Elkhorn Tavern by nightfall, the deepest the Confederates ever got into Curtis’s position. He was wounded during the fighting but stayed in command, and lost the ground again on the second day for lack of ammunition." },
    { battleId: "w-corinth", role: "Corps, CSA", note: "Price brought his Army of the West to join Van Dorn after the fight at Iuka, and led a wing of the combined force at Corinth. His troops drove deepest on October 4, briefly seizing Battery Powell before a Union counterattack threw them back out." },
    { battleId: "t-westport", role: "Cmdr., CSA", note: "A former Missouri governor near sixty, Price led the Army of Missouri on a grand raid meant to retake his home state and shake Northern nerve before the 1864 election. At Westport he chose to throw his outnumbered army forward against Curtis to break out west, but his ammunition failed and the Union closed on him from two sides; he abandoned the field and began a long, disastrous retreat south." },
  ],
}

const STUART: Commander = {
  id: "stuart", name: "J.E.B. Stuart", side: 'C', portrait: "/war-img/cmdr/stuart.jpg",
  born: 1833, died: 1864, epithet: "Cavalry commander, A.N.V.",
  overview: "James Ewell Brown \"Jeb\" Stuart was a Virginia-born West Point graduate who became the cavalry chief of Robert E. Lee's Army of Northern Virginia, an army fighting to preserve a slaveholding Confederacy. He cultivated a flamboyant cavalier image, but his real value was as Lee's eyes and ears, screening the army and scouting the enemy. He covered the fights at Second Bull Run, Fredericksburg, and Chancellorsville, where he briefly took over the wounded Jackson's corps.",
  fate: "In May 1864 Stuart rode to block Sheridan's cavalry raid on Richmond and was mortally wounded at Yellow Tavern on May 11. He was carried to a relative's home in Richmond and died the next day, May 12, 1864, at age 31.",
  appearances: [
    { battleId: "e-bullrun2", role: "Cavalry, CSA", note: "Stuart’s cavalry screened Jackson’s long flank march so Pope never saw it coming, and during the battle his troopers stirred up dust to fake marching columns and confuse the Union command. After Longstreet’s assault Stuart pressed the pursuit of the retreating Federals across Bull Run." },
    { battleId: "e-fredericksburg", role: "Cavalry, CSA", note: "Stuart screened and guarded Jackson’s exposed right flank at the southern end of the field with his cavalry and horse artillery. His young artillerist John Pelham, with as few as one or two guns, raked the advancing Union line lengthwise and held up the whole southern attack until he was ordered to withdraw." },
    { battleId: "e-chancellorsville", role: "Cavalry, CSA", note: "Stuart’s scouts found the open Union flank that made the whole flank march possible. After Jackson fell, the cavalryman who had never commanded infantry in a pitched battle took over the Second Corps overnight and renewed the assault on May 3, massing guns on captured Hazel Grove and driving the Union line inward on the crossroads." },
    { battleId: "e-spotsylvania", role: "Cavalry, CSA †", note: "Stuart’s cavalry fought to delay the Union advance toward the crossroads, then chased Sheridan’s raiding column when it rode off toward Richmond. On May 11 he was mortally wounded at Yellow Tavern and died in Richmond the next day, costing Lee the cavalry chief who had been the army’s eyes for three years." },
  ],
}

const THOMAS: Commander = {
  id: "thomas", name: "George H. Thomas", side: 'U', portrait: "/war-img/cmdr/thomas.jpg",
  born: 1816, died: 1870, epithet: "Maj. Gen., Army of the Cumberland",
  overview: "George H. Thomas was a Virginian who stayed loyal to the Union when his home state seceded, a choice that estranged him from his own family. A West Point graduate and career officer, he commanded the center at Stones River and earned his nickname, the Rock of Chickamauga, in September 1863 when his stand on the field held off disaster and covered the army's retreat. He took over the Army of the Cumberland and helped break the Confederate line at Missionary Ridge.",
  fate: "Thomas closed the war with one of its most complete victories, smashing John Bell Hood's army at the Battle of Nashville in December 1864. He stayed in the army afterward and was sent to command the Division of the Pacific in San Francisco. He died there of a stroke on March 28, 1870.",
  appearances: [
    { battleId: "w-stonesriver", role: "Center, Union", note: "Thomas held the Union center near the pike and railroad as the right wing collapsed around him, turning back Polk’s piecemeal attacks with heavy loss to the Confederates. When the council of war debated retreat that night, he was among those who backed Rosecrans in deciding to stay and fight it out." },
    { battleId: "w-chickamauga", role: "Corps, Union · the Rock", note: "A Virginian who chose the Union, Thomas held the army’s left through the morning behind the log breastworks at Kelly Field. When the right collapsed he gathered the wreckage on Snodgrass Hill and Horseshoe Ridge and held until dark, earning the name the Rock of Chickamauga and turning a rout into an orderly retreat." },
    { battleId: "w-missionary", role: "Army of the Cumberland", note: "The “Rock of Chickamauga” commanded the Army of the Cumberland, the army that had been beaten two months earlier and was burning to settle it. His men were ordered to take the rifle pits at the foot of the ridge and stop, but they surged up the slope on their own and shattered Bragg’s center." },
    { battleId: "w-nashville", role: "Cmdr., Union", note: "Thomas refused to attack until his army and its cavalry were fully ready, weathering an ice storm and a stream of furious telegrams while his own superiors started a replacement toward him. When the thaw came he swung a grand right wheel onto Hood’s flank and over two days destroyed the Army of Tennessee, the most complete field victory of the war." },
  ],
}

const WRIGHT: Commander = {
  id: "wright", name: "Horatio Wright", side: 'U', portrait: "/war-img/cmdr/wright.jpg",
  born: 1820, died: 1899, epithet: "Cmdr., VI Corps, Army of the Potomac",
  overview: "Horatio G. Wright was a top West Point engineer who spent the early war in administrative and coastal commands. He rose to division command in the VI Corps and took over the whole corps in May 1864 when John Sedgwick was killed at Spotsylvania. He led the VI Corps through Cold Harbor, the Shenandoah Valley fights at Opequon and Cedar Creek, and the final breakthrough at Petersburg in April 1865.",
  fate: "Wright stayed in the army after the war as a career engineer officer, helping complete the Washington Monument and working on other major projects. He served as Chief of Engineers from 1879 until his retirement in 1884. He died in Washington in 1899 at age 79.",
  appearances: [
    { battleId: "e-coldharbor", role: "VI Corps, Union", note: "Wright’s VI Corps attacked in the center on June 3, advanced a short distance into heavy fire, and bogged down well short of the trench. Rather than feed his men into the works he had them stop and dig in." },
    { battleId: "e-opequon", role: "VI Corps, Union", note: "Wright’s VI Corps reached the Berryville Canyon first, but pushed its wagons and artillery into the defile ahead of the infantry and helped create the jam that delayed the attack by hours. In the afternoon fight his corps anchored the Union assault east of town, and his division commander David Russell was killed plugging the gap that nearly broke the line." },
    { battleId: "e-cedarcreek", role: "VI Corps, Union", note: "As commander of the VI Corps, Wright was left in charge of the entire army in Sheridan’s absence, with his headquarters at Belle Grove. Surprised in the fog, he could only fight a delaying withdrawal through the morning, was painfully wounded in the chin, and held what he could together until Sheridan reached the field." },
    { battleId: "e-petersburg3", role: "VI Corps, Union", note: "Wright massed his Sixth Corps in a single deep wedge and sent it across the open ground in the dark at about 4:40 a.m., aimed at one point in the Confederate trenches. His men tore through and broke the line wide, then wheeled west and cut the South Side Railroad, the last open supply line into Petersburg." },
  ],
}

const BANKS: Commander = {
  id: "banks", name: "Nathaniel Banks", side: 'U', portrait: "/war-img/cmdr/banks.jpg",
  born: 1816, died: 1894, epithet: "Maj. Gen., Cmdr., Army of the Gulf",
  overview: "Nathaniel P. Banks was a Massachusetts politician with no military training who had been Speaker of the U.S. House and governor of his state before Lincoln made him one of the first political major generals. In the 1862 Shenandoah Valley he was outmaneuvered and beaten by Jackson and Ewell at First Winchester. Sent west, he took command of the Army of the Gulf, captured Port Hudson on the Mississippi in July 1863, then led the Red River Campaign of 1864, which collapsed after his defeat at Mansfield.",
  fate: "Grant pushed for Banks's removal after the Red River failure, and he was effectively shelved for the rest of the war. He returned to Massachusetts politics, serving more terms in Congress, where he backed the Alaska Purchase and women's suffrage. He died in 1894.",
  appearances: [
    { battleId: "e-winchester1", role: "Cmdr., Union", note: "A Massachusetts politician handed a general’s stars, Banks had been outmarched all week and made a last stand on the hills south of Winchester to buy time for his wagon train. When Taylor’s charge cracked his right, his army broke and fled north through the streets, abandoning the supplies that earned him the mocking name “Commissary Banks.”" },
    { battleId: "t-porthudson", role: "Cmdr., Army of the Gulf", note: "A political general ordered by Washington to open the lower Mississippi, Banks brought roughly four times Gardner’s numbers against Port Hudson and never solved the ground. He spent two head-on assaults, on May 27 and June 14, to take nothing, then settled into the 48-day siege that finally starved the fort into surrender once Vicksburg fell upstream." },
    { battleId: "t-mansfield", role: "Cmdr., Union", note: "Banks pushed his army up a single road toward Shreveport against the warnings of his own cavalry commander and decided to fight at the clearing south of Mansfield even after being told a full battle there would go badly. When the front collapsed he rode into the retreat and pleaded with his men to stand, and they ran past him; the defeat broke his Red River Campaign and effectively ended his military career." },
  ],
}

const BURNSIDE: Commander = {
  id: "burnside", name: "Ambrose Burnside", side: 'U', portrait: "/war-img/cmdr/burnside.jpg",
  born: 1824, died: 1881, epithet: "Cmdr., Army of the Potomac",
  overview: "Ambrose Burnside was a West Point graduate and firearms inventor who twice turned down command of the Army of the Potomac before reluctantly accepting it in late 1862. He led the IX Corps at Antietam, where his slow attack across a single bridge cost the army dearly, then as army commander ordered the doomed frontal assaults at Fredericksburg in December 1862.",
  fate: "Burnside was relieved of army command in January 1863 after Fredericksburg. He returned to lead the IX Corps but bore much of the blame for the bungled assault at the Crater in July 1864 and resigned from the army the next year. He went on to serve three terms as governor of Rhode Island and as a U.S. senator, and died in office in 1881.",
  appearances: [
    { battleId: "e-antietam", role: "IX Corps, Union", note: "Burnside spent much of the afternoon forcing a narrow stone bridge that a few hundred Georgians held against his whole corps, though the creek could be waded nearby. He finally crossed and pushed toward Sharpsburg into Lee’s rear, only to be thrown back by A. P. Hill’s late arrival; the bridge has carried his name ever since." },
    { battleId: "e-fredericksburg", role: "Cmdr., Union", note: "Reluctant in the command he had twice refused, Burnside built his plan on speed and lost it when the pontoon bridges arrived more than a week late, giving Lee time to fortify the heights. His garbled December 13 orders turned a planned diversion into the main attack, and he sent wave after wave into the stone wall at Marye’s Heights until fourteen charges had failed and his army had lost more than twice as many men as the South." },
    { battleId: "e-crater", role: "IX Corps, Union", note: "Burnside owned the sector and the mine plan, and meant to lead with his one trained division, the USCT, until Meade and Grant overruled him the day before. He was censured by the court of inquiry, relieved of his corps within weeks, and never held a field command again." },
  ],
}

const CHEATHAM: Commander = {
  id: "cheatham", name: "B.F. Cheatham", side: 'C', portrait: "/war-img/cmdr/cheatham.jpg",
  born: 1820, died: 1886, epithet: "Maj. Gen., Army of Tennessee",
  overview: "Benjamin F. Cheatham was a Tennessee planter and Mexican War veteran who became one of the Army of Tennessee's hardest-fighting commanders. He led a division at Perryville and rose to corps command, known for aggressive, close-in fighting rather than for caution. He commanded a corps at Franklin in November 1864, where Hood threw the army into a frontal assault that gutted it, and held the right at the Battle of Nashville that December.",
  fate: "Cheatham surrendered with the army in 1865 and went home to Tennessee. He farmed in Coffee County, ran the state prison system, and was serving as postmaster of Nashville when he died there in 1886.",
  appearances: [
    { battleId: "w-perryville", role: "Div., CSA", note: "Cheatham’s division opened the bombardment around half past noon and led the main Confederate assault against the Union left. His brigades, including Maney’s, charged Open Knob again and again until they overran the guns, the bloodiest action of the battle." },
    { battleId: "w-franklin", role: "Corps, CSA", note: "Cheatham’s corps led the main assault on the Union center, the divisions of Cleburne and Brown driving for the Columbia Pike. He is reported to have warned Hood before the charge that he did not like the look of the well-fortified position, and was overruled." },
    { battleId: "w-nashville", role: "Corps (right), CSA", note: "Cheatham held the Confederate right, the eastern end of the line, where Steedman’s feint struck on December 15 and the U.S. Colored Troops charged Overton Hill on the 16th. His men held the hill against repeated assaults, but the troops drawn there to do it left the far end of the army fatally thin." },
  ],
}

const EWELL: Commander = {
  id: "ewell", name: "Richard S. Ewell", side: 'C', portrait: "/war-img/cmdr/ewell.jpg",
  born: 1817, died: 1872, epithet: "Lt. Gen., Second Corps, A.N.V.",
  overview: "Richard S. Ewell was a Virginia-born West Pointer and career dragoon who fought in the Mexican War and on the western frontier before resigning to join the Confederacy, whose cause was the defense of slavery. He rose as one of Stonewall Jackson's hard-marching division commanders in the 1862 Shenandoah Valley campaign, beating Nathaniel Banks at First Winchester. At the end of August 1862 a bullet shattered his left leg near Groveton during the opening of Second Bull Run, and surgeons amputated it below the knee. He came back on a wooden leg to lead Jackson's old Second Corps, but his hesitation at Gettysburg and his showing at Spotsylvania and the Wilderness in 1864 cost him Lee's confidence.",
  fate: "Ewell was relieved of corps command in 1864 and finished the war defending Richmond, where he was captured during the retreat to Appomattox in April 1865. After release he settled on his wife's farm in Tennessee and stayed out of public life. He and his wife both died of pneumonia within a few days of each other in early 1872, and they were buried together in Nashville.",
  appearances: [
    { battleId: "e-winchester1", role: "Div., CSA", note: "Ewell drove up the Front Royal Pike against the Union left, east of town, pressing the brigade dug in on Camp Hill. His push pinned that flank in place while Taylor’s charge broke the right, so the collapse came from both ends at once." },
    { battleId: "e-spotsylvania", role: "Second Corps, CSA", note: "Ewell’s Second Corps dug and held the Mule Shoe, the bulging salient whose apex Hancock overran on May 12. After the works were rebuilt across the base of the horseshoe, his corps threw back Hancock’s renewed assault on the old ground on May 18." },
    { battleId: "e-wilderness", role: "Second Corps, CSA", note: "Ewell’s Second Corps held the Confederate left along the Orange Turnpike, and his men dug in at Saunders Field threw back Warren’s opening attack on May 5 with heavy loss. He fought the northern road to a standstill across both days, keeping his end of Lee’s line intact in the tangle." },
  ],
}

const FARRAGUT: Commander = {
  id: "farragut", name: "David Farragut", side: 'U', portrait: "/war-img/cmdr/farragut.jpg",
  born: 1801, died: 1870, epithet: "Admiral, U.S. Navy",
  overview: "David Glasgow Farragut went to sea as a boy and spent half a century in the U.S. Navy before the war made him famous. In April 1862 he ran his fleet past Forts Jackson and St. Philip to take New Orleans, the Confederacy's largest city. At Mobile Bay in August 1864 he pushed through a minefield (mines were then called torpedoes) with the order remembered as 'Damn the torpedoes, full speed ahead,' and shut the last major Gulf port open to blockade runners.",
  fate: "Congress created the rank of full admiral for him in 1866, making Farragut the first person to hold it in the U.S. Navy. He stayed on active duty and died in 1870 while visiting the Portsmouth Navy Yard in New Hampshire.",
  appearances: [
    { battleId: "n-jacksonstphilip", role: "Cmdr., Union", note: "Handed secret orders and the West Gulf Blockading Squadron, Farragut decided the forts would never fall on a timetable he could afford and chose to run his wooden fleet straight past them in the pre-dawn dark of April 24. He brought most of his ships through the gauntlet of fire rafts and Confederate gunboats and anchored before a defenseless New Orleans the next day." },
    { battleId: "t-porthudson", role: "Fleet, Union", note: "The admiral who had taken New Orleans the year before tried to handle Port Hudson from the water, running seven ships under the bluff guns on the night of March 14, 1863. Only his flagship Hartford and one gunboat got through; the rest were turned back and the frigate Mississippi burned and blew apart, proving the fort could not be pried off the river by a fleet." },
    { battleId: "n-mobilebay", role: "Cmdr., Union", note: "Farragut planned to run his whole fleet past the forts and over the minefield to cork the bay, lashing his wooden ships in pairs for the passage. When the lead monitor sank and the column froze under Fort Morgan’s guns, he swung his flagship Hartford into the lead and drove straight through the mines, the decision the famous “damn the torpedoes” line was built around." },
  ],
}

const FJ_PORTER: Commander = {
  id: "fj-porter", name: "Fitz John Porter", side: 'U', portrait: "/war-img/cmdr/fj-porter.jpg",
  born: 1822, died: 1901, epithet: "Maj. Gen., V Corps, Army of the Potomac",
  overview: "Fitz John Porter (a Union general, and not to be confused with the naval officer David Dixon Porter) was a New Hampshire-born West Pointer and respected professional soldier who commanded the V Corps of the Army of the Potomac. He fought the heavy defensive battles of the 1862 Peninsula Campaign, holding at Gaines' Mill and Malvern Hill. He was close to George McClellan, and that loyalty helped sink him after Second Bull Run, where his commander John Pope blamed him for the defeat.",
  fate: "Porter was court-martialed for disobedience at Second Bull Run, found guilty, and cashiered from the army in January 1863. He spent the rest of his life fighting to clear his name; an 1879 review board found in his favor, and in 1886 Congress and President Cleveland restored him to the rank of colonel, after which he resigned. He died in 1901.",
  appearances: [
    { battleId: "e-gainesmill", role: "Cmdr., Union", note: "Porter chose and held a tiered line behind Boatswain’s Swamp, banking 96 guns on the plateau and beating back assault after assault through the afternoon against more than twice his number. His corps held until the coordinated dusk attack broke it, then pulled south across the Chickahominy in the dark to cover the retreat McClellan had already ordered." },
    { battleId: "e-malvern", role: "On the field, Union", note: "With McClellan off inspecting the landing downriver, Porter was the de facto Union commander on Malvern Hill, his V Corps holding the crest and the ridge around the guns. He posted the infantry, fed in reinforcements as the charges came, and ran the defense that broke every Confederate assault." },
    { battleId: "e-bullrun2", role: "Corps, Union", note: "Porter, whose V Corps faced Longstreet’s hidden wing, held back from attacking what he sensed was a strong enemy on his front and was made the scapegoat for the defeat. He was court-martialed and dismissed in 1863, a conviction later judged unjust and overturned." },
  ],
}

const GRANGER: Commander = {
  id: "granger", name: "Gordon Granger", side: 'U', portrait: "/war-img/cmdr/granger.jpg",
  born: 1821, died: 1876, epithet: "Maj. Gen., U.S. Army",
  overview: "Gordon Granger was a West Point graduate and career regular-army officer. At Chickamauga in September 1863 he marched his Reserve Corps to the sound of the guns without waiting for orders and helped George Thomas hold Snodgrass Hill, saving the Union line from collapse. He went on to command the IV Corps at Missionary Ridge and led the land siege at Mobile Bay in 1864. After the war he gave the order in Galveston, Texas, in June 1865 that enforced emancipation, the event now marked as Juneteenth.",
  fate: "Granger stayed in the regular army after the war and held frontier commands in the West. He died in 1876 at Santa Fe, New Mexico, while commanding the District of New Mexico.",
  appearances: [
    { battleId: "w-chickamauga", role: "Reserve, Union", note: "Posted to the north to guard the roads, Granger marched his Reserve Corps toward the sound of the guns without waiting for orders. He reached Thomas at the breaking point and fed Steedman’s fresh brigades into the line on Horseshoe Ridge just as the defenders’ cartridges gave out." },
    { battleId: "w-missionary", role: "IV Corps, Union", note: "Granger commanded the IV Corps of Thomas’s army on the center of the field. When Grant demanded to know who had ordered the men up the ridge, it was Granger who answered that when his soldiers got started, all hell could not stop them." },
    { battleId: "n-mobilebay", role: "Land siege, Union", note: "Granger landed his infantry on Dauphin Island days before the fleet went in, opening the land siege so each fort would be squeezed between his troops behind it and the navy’s guns in front. His men pressed Fort Gaines into surrender on August 8 and then shifted across the bay to invest Fort Morgan until it gave up on August 23." },
  ],
}

const HOWARD: Commander = {
  id: "howard", name: "Oliver O. Howard", side: 'U', portrait: "/war-img/cmdr/howard.jpg",
  born: 1830, died: 1909, epithet: "Maj. Gen.; XI Corps, Army of the Tennessee",
  overview: "Oliver Otis Howard was a Maine-born West Point graduate and devout Christian known as \"the Christian general.\" He lost his right arm leading troops at Seven Pines in 1862, an action that later earned him the Medal of Honor. His XI Corps was famously routed by Stonewall Jackson's flank attack at Chancellorsville in 1863, but he recovered his standing, went west, and rose to command the Army of the Tennessee through the Atlanta campaign, the March to the Sea, and Bentonville.",
  fate: "Howard survived the war and stayed in the army for decades, retiring as a major general. From 1865 to 1874 he led the Freedmen's Bureau, working to integrate former slaves into free life during Reconstruction, and he helped found Howard University in Washington, named for him. He died in 1909.",
  appearances: [
    { battleId: "e-chancellorsville", role: "XI Corps, Union", note: "Howard held the far western end of the Union line, the unanchored flank hanging in the air, and left it facing the wrong way despite warnings that the enemy was moving beyond it. When Jackson’s corps burst out of the woods at dusk on May 2, his XI Corps was overrun from the side and lost around 2,500 men in minutes." },
    { battleId: "w-jonesborough", role: "Army of the Tennessee", note: "Howard pushed the Army of the Tennessee across the Flint River and reached the railroad first, digging his men in on a ridge west of the town before the Confederates came up. His entrenched line broke the August 31 attack at roughly ten-to-one cost and held the Confederates off the rails." },
    { battleId: "w-bentonville", role: "Right Wing, Union", note: "Howard commanded the Army of the Tennessee, the wing marching a road away when the fighting began. He swung it north through March 20 and brought it onto the field beside Slocum by midday, turning a near-even fight into the three-to-one margin that ended any Confederate hope." },
  ],
}

const JE_JOHNSTON: Commander = {
  id: "je-johnston", name: "Joseph E. Johnston", side: 'C', portrait: "/war-img/cmdr/je-johnston.jpg",
  born: 1807, died: 1891, epithet: "Cmdr., Army of Tennessee",
  overview: "Joseph E. Johnston was a Virginia-born West Point officer and the U.S. Army's quartermaster general when he resigned to join the Confederacy. He helped win First Bull Run, was wounded leading the army defending Richmond in 1862, and later commanded in the West, where he failed to relieve the besieged garrison at Vicksburg. Pulled back into command for the war's last weeks, he fought Sherman at Bentonville before surrendering. He fought for a Confederacy founded to preserve slavery, and his cautious, retreating generalship kept him at odds with Jefferson Davis throughout.",
  fate: "Johnston surrendered his army to Sherman in North Carolina in April 1865, the largest single Confederate surrender of the war. He later served a term in Congress and as a federal railroad commissioner, and built an unlikely friendship with Sherman. He died of pneumonia in 1891 at age 84, having caught a chill serving as an honorary pallbearer at Sherman's funeral.",
  appearances: [
    { battleId: "e-bullrun1", role: "Cmdr., CSA", note: "Johnston slipped his army out of the Shenandoah Valley and rushed it east by rail, the first time in history trains carried troops to a major battle. As the senior officer present he yielded battlefield command to Beauregard and spent the day funneling his arriving brigades toward the fight on the Confederate left." },
    { battleId: "w-vicksburg", role: "Relief, CSA", note: "Johnston was charged with assembling the army that would break the siege and rescue Pemberton, but he was scattered out of Jackson before he could concentrate and never gathered enough men. He spent the campaign gathering a relief force that was always too small and always too late, and it never broke through." },
    { battleId: "w-bentonville", role: "Cmdr., CSA", note: "Recalled by Lee in February 1865, Johnston gathered the broken fragments of the western Confederacy and concentrated them for one surprise blow against a single isolated Union wing. He nearly succeeded on the first day, lingered two more days he could not afford, slipped his army away across Mill Creek by night, and a month later surrendered the largest force of the war at Bennett Place." },
  ],
}

const MCPHERSON: Commander = {
  id: "mcpherson", name: "James B. McPherson", side: 'U', portrait: "/war-img/cmdr/mcpherson.jpg",
  born: 1828, died: 1864, epithet: "Maj. Gen., Army of the Tennessee",
  overview: "James B. McPherson was born in Clyde, Ohio, and graduated first in his West Point class of 1853. A rising star in the Union army, he led troops up through the Western campaigns, reinforcing at Corinth (1862) and commanding the XVII Corps at Champion Hill and the siege of Vicksburg (1863). In March 1864 Sherman handed him command of the Army of the Tennessee for the drive on Atlanta.",
  fate: "McPherson was killed on July 22, 1864, during the Battle of Atlanta, shot by Confederate skirmishers after he rode into their lines while trying to reach the front. He was the highest-ranking Union officer killed in action in the war's Western Theater and the second-highest in the whole war. His old West Point classmate John Bell Hood, then commanding the opposing army, mourned him.",
  appearances: [
    { battleId: "w-corinth", role: "Reinforcements, Union", note: "McPherson marched a reinforcement column from Jackson toward the fighting at Grant’s order. He reached Corinth around four in the afternoon on October 4, too late to fight but in time to make Van Dorn’s position hopeless and stiffen the pursuit." },
    { battleId: "w-championhill", role: "XVII Corps, Union", note: "McPherson commanded the XVII Corps and took tactical charge of the main attack, swinging Logan’s division up onto the right to turn Stevenson’s flank. His corps and Hovey’s lone division did almost all of the Union fighting on a day the other two corps stood nearly idle." },
    { battleId: "w-vicksburg", role: "XVII Corps, Union", note: "McPherson led the XVII Corps on the army’s right during the inland drive, fighting at Raymond and helping take the state capital at Jackson. During the siege his corps held the center of the line and tunneled the mine that blew apart the Third Louisiana Redan." },
  ],
}

const POLK: Commander = {
  id: "polk", name: "Leonidas Polk", side: 'C', portrait: "/war-img/cmdr/polk.jpg",
  born: 1806, died: 1864, epithet: "Lt. Gen., Army of Tennessee",
  overview: "Leonidas Polk lived two lives at once: he was the Episcopal bishop of Louisiana and a Confederate general, nicknamed the Fighting Bishop. He was also one of the South's largest enslavers, a planter who held roughly four hundred people in bondage on his Louisiana sugar estate. A West Point classmate and close friend of Jefferson Davis, he took a Confederate commission and commanded a wing at Perryville, a corps at Stones River, and a wing at Chickamauga, though his battlefield record was uneven and he clashed bitterly with his commander Braxton Bragg.",
  fate: "Polk was killed on June 14, 1864, at Pine Mountain near Marietta, Georgia, struck by a Union artillery shell while scouting Federal positions with other officers. Sherman had spotted the cluster of men through a glass and ordered the guns to open fire. Polk died instantly.",
  appearances: [
    { battleId: "w-perryville", role: "Right Wing, CSA", note: "Polk directed the right wing and sent Cheatham’s division rolling against the Union left in the en-echelon attack that decided the day. In the failing light he blundered into the 22nd Indiana and, by the much-repeated story, bluffed his way clear by posing as a Union officer before calling off the assault." },
    { battleId: "w-stonesriver", role: "Corps, CSA", note: "Polk’s corps struck the Union center to keep Thomas from reinforcing the collapsing right, but his attacks went in piecemeal and were turned back at heavy cost. His repeated assaults on the Round Forest, the salient the soldiers called Hell’s Half Acre, could not break the one piece of the original Union line that never gave ground." },
    { battleId: "w-chickamauga", role: "Wing, CSA", note: "Polk commanded the Confederate right wing and was ordered to open the September 20 assault at dawn. His attack went in roughly four hours late against Thomas’s fortified left and made little headway, and Bragg suspended him afterward and blamed him for the lost chance." },
  ],
}

const ROSECRANS: Commander = {
  id: "rosecrans", name: "William Rosecrans", side: 'U', portrait: "/war-img/cmdr/rosecrans.jpg",
  born: 1819, died: 1898, epithet: "Maj. Gen., Army of the Cumberland",
  overview: "William S. Rosecrans, born in Ohio, graduated fifth in his West Point class of 1842 and worked as an engineer and businessman before the war. He commanded Union forces at Corinth in 1862 and won a hard, bloody victory at Stones River that winter as head of the Army of the Cumberland. His brilliant Tullahoma maneuvering pushed the Confederates out of middle Tennessee, but his army was wrecked at Chickamauga in September 1863 when a gap in his line let the enemy pour through.",
  fate: "After the rout at Chickamauga, Grant relieved Rosecrans of command and sent him to the relative backwater of the Department of the Missouri. He never held a major field command again and resigned in 1867. He later served as minister to Mexico and as a congressman from California, and died in 1898.",
  appearances: [
    { battleId: "w-corinth", role: "Cmdr., Union", note: "Rosecrans held Corinth with about 23,000 men, having spent his weeks of occupation strengthening a close inner ring of earthwork forts just outside town. He let Van Dorn batter himself against that line on October 4, broke the assault at Battery Robinett and Battery Powell, and came out of the battle a Northern hero." },
    { battleId: "w-stonesriver", role: "Cmdr., Cumberland", note: "Rosecrans was caught off balance when Bragg struck his right at dawn on December 31, his chief of staff killed at his side by a cannonball as the two rode the lines. He refused his officers’ advice to retreat, held the army together near the Nashville Pike, and seized the high ground east of the river that decided the battle two days later." },
    { battleId: "w-chickamauga", role: "Cmdr., Union", note: "Rosecrans had maneuvered Bragg out of Chattanooga without a battle, then let his army stay strung out in the Georgia woods. On the second day he relayed an order to plug a gap that was not there, opening a real one exactly where Longstreet struck, and was swept off the field with half his army back toward Chattanooga." },
  ],
}

const SEDGWICK: Commander = {
  id: "sedgwick", name: "John Sedgwick", side: 'U', portrait: "/war-img/cmdr/sedgwick.jpg",
  born: 1813, died: 1864, epithet: "Cmdr., VI Corps, Army of the Potomac",
  overview: "John Sedgwick was a West Point graduate and career army officer who had fought in the Seminole and Mexican wars before the Civil War. Rising to lead the VI Corps of the Army of the Potomac, he was a steady, well-liked corps commander whose men called him \"Uncle John.\" He fought at Chancellorsville in 1863, then through the brutal opening battles of Grant's 1864 Overland Campaign at the Wilderness and Spotsylvania.",
  fate: "Sedgwick was killed at Spotsylvania Court House on May 9, 1864, shot by a Confederate sharpshooter while positioning his guns. Moments before, he had reportedly scoffed that the enemy \"couldn't hit an elephant at this distance.\" He was one of the highest-ranking Union officers to die in the war.",
  appearances: [
    { battleId: "e-chancellorsville", role: "VI Corps, Union", note: "Sedgwick held the lower crossings below Fredericksburg, first as the loud feint meant to pin Lee in place. On May 3 he stormed Marye’s Heights in the Second Battle of Fredericksburg and pushed west toward Lee’s rear, only to be stopped cold at Salem Church and pulled back across the Rappahannock at Banks’ Ford." },
    { battleId: "e-spotsylvania", role: "VI Corps, Union †", note: "Sedgwick, the beloved \"Uncle John\" of the army, brought his VI Corps up to help batter Laurel Hill on May 8. The next morning, while siting artillery near the front, he was killed by a Confederate sharpshooter moments after telling his flinching men the enemy could not hit an elephant at that distance." },
    { battleId: "e-wilderness", role: "VI Corps, Union", note: "Sedgwick’s VI Corps came up on May 5 to fight Ewell in the woods north of the Orange Turnpike, trading attacks and counterattacks through the brush before both sides dug in. He held the northern end of the Union line through the battle and survived it, only to be killed by a sharpshooter a few days later at Spotsylvania." },
  ],
}

const SIGEL: Commander = {
  id: "sigel", name: "Franz Sigel", side: 'U', portrait: "/war-img/cmdr/sigel.jpg",
  born: 1824, died: 1902, epithet: "Maj. Gen., political general, Union",
  overview: "Franz Sigel was a German-trained officer who fled into exile after the failed 1848 revolutions and settled in the United States as a teacher and newspaperman. His standing among German immigrants, who rallied to the slogan \"I fights mit Sigel,\" made him a political general for Lincoln. He led a column at Wilson's Creek in 1861 and a division at Pea Ridge in 1862 in the Trans-Mississippi, then a corps at Second Bull Run, but his battlefield record never matched his recruiting value.",
  fate: "Sigel's field career effectively ended in May 1864 when he was beaten at New Market in the Shenandoah Valley and soon relieved of command. After the war he stayed in New York as an editor, pension official, and Republican figure within the German American community. He died in 1902.",
  appearances: [
    { battleId: "t-wilsonscreek", role: "Column, Union", note: "Sigel proposed the pincer plan and led the smaller flanking column on a wide loop to strike the Confederate camp from the south. His men mistook a gray-clad Louisiana regiment for friendly troops and held their fire; one volley at close range shattered his column, and Sigel fled, losing five of his six guns." },
    { battleId: "t-pearidge", role: "Div., Union", note: "Sigel was slow getting his divisions away from Bentonville on the approach, and his rear guard was brushed back as the campaign opened. On the second day he redeemed it, massing some twenty guns west of Elkhorn Tavern and directing the bombardment that silenced the Confederate batteries and opened the way for Curtis’s advance." },
    { battleId: "e-bullrun2", role: "Corps, Union", note: "Sigel’s I Corps was the only Union force in position at daybreak on August 29 and made the first attacks against Jackson’s line behind the railroad embankment, which were beaten back. His men fought again the next day trying to slow Longstreet’s avalanche." },
  ],
}

export const COMMANDERS: Record<string, Commander> = {
  lee: LEE,
  grant: GRANT,
  sherman: SHERMAN,
  bragg: BRAGG,
  longstreet: LONGSTREET,
  jackson: JACKSON,
  sheridan: SHERIDAN,
  meade: MEADE,
  forrest: FORREST,
  gordon: GORDON,
  hancock: HANCOCK,
  hooker: HOOKER,
  'ap-hill': AP_HILL,
  beauregard: BEAUREGARD,
  custer: CUSTER,
  'dd-porter': DD_PORTER,
  hardee: HARDEE,
  hood: HOOD,
  price: PRICE,
  stuart: STUART,
  thomas: THOMAS,
  wright: WRIGHT,
  banks: BANKS,
  burnside: BURNSIDE,
  cheatham: CHEATHAM,
  ewell: EWELL,
  farragut: FARRAGUT,
  'fj-porter': FJ_PORTER,
  granger: GRANGER,
  howard: HOWARD,
  'je-johnston': JE_JOHNSTON,
  mcpherson: MCPHERSON,
  polk: POLK,
  rosecrans: ROSECRANS,
  sedgwick: SEDGWICK,
  sigel: SIGEL,
}

export const commanderIds = Object.keys(COMMANDERS)

// Map a battle dossier's commander name (which has many spelling variants across
// pages) to its cast arc id, where an arc exists. Hand-verified and EXACT: a
// wrong link is worse than none, and same-surname pairs must never collide — the
// two Hills (A. P. vs Daniel Harvey), Porters (David Dixon vs Fitz John),
// Johnstons (Joseph E. vs Albert Sidney), and Lees (Robert E. vs Fitzhugh /
// Stephen D.) — only the arc-bearing one is listed. Commanders with no arc page
// return undefined (no link).
const CAST_BY_NAME: Record<string, string> = {
  'Ulysses S. Grant': 'grant',
  'Robert E. Lee': 'lee',
  'William T. Sherman': 'sherman',
  'Braxton Bragg': 'bragg',
  'James Longstreet': 'longstreet',
  'Stonewall Jackson': 'jackson',
  'Thomas J. Jackson': 'jackson',
  'Thomas "Stonewall" Jackson': 'jackson',
  'Thomas J. "Stonewall" Jackson': 'jackson',
  'Philip Sheridan': 'sheridan',
  'Philip H. Sheridan': 'sheridan',
  'George G. Meade': 'meade',
  'Nathan Bedford Forrest': 'forrest',
  'Nathan B. Forrest': 'forrest',
  'John B. Gordon': 'gordon',
  'Winfield S. Hancock': 'hancock',
  'Winfield Scott Hancock': 'hancock',
  'Joseph Hooker': 'hooker',
  'A.P. Hill': 'ap-hill',
  'A. P. Hill': 'ap-hill',
  'P.G.T. Beauregard': 'beauregard',
  'P. G. T. Beauregard': 'beauregard',
  'George A. Custer': 'custer',
  'George Custer': 'custer',
  'David D. Porter': 'dd-porter',
  'David Dixon Porter': 'dd-porter',
  'William J. Hardee': 'hardee',
  'John Bell Hood': 'hood',
  'Sterling Price': 'price',
  'J.E.B. Stuart': 'stuart',
  'George H. Thomas': 'thomas',
  'Horatio Wright': 'wright',
  'Horatio G. Wright': 'wright',
  'Nathaniel Banks': 'banks',
  'Nathaniel P. Banks': 'banks',
  'Ambrose Burnside': 'burnside',
  'Ambrose E. Burnside': 'burnside',
  'B.F. Cheatham': 'cheatham',
  'Benjamin F. Cheatham': 'cheatham',
  'Richard S. Ewell': 'ewell',
  'David Farragut': 'farragut',
  'David G. Farragut': 'farragut',
  'David Glasgow Farragut': 'farragut',
  'Fitz John Porter': 'fj-porter',
  'Gordon Granger': 'granger',
  'Oliver O. Howard': 'howard',
  'Joseph E. Johnston': 'je-johnston',
  'James B. McPherson': 'mcpherson',
  'Leonidas Polk': 'polk',
  'William Rosecrans': 'rosecrans',
  'William S. Rosecrans': 'rosecrans',
  'John Sedgwick': 'sedgwick',
  'Franz Sigel': 'sigel',
}

// Look up a commander's arc id by display name (shared normalize-then-lookup; curly
// quotes are normalized to straight so both glyph styles of the "Stonewall" nickname
// match one key). Exposed on CIVIL_WAR as `castIdForName`.
export const castIdForName = makeCastLookup(CAST_BY_NAME)
