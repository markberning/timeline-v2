'use client'

// Five Forks — battle sections. Produced through the war content pipeline
// (audits/war-content-pipeline.md): fact pack → author → fact-check + storytelling
// critic → revise. Data only; rendered by the shared <BattleSectionReader>.
//
// House-voice locked: no em-dashes in reader-facing strings; marquee names (Lee,
// Grant) carry no side-tag while every other side-affiliated person is tagged once
// on first mention per section; full rank spelled out on first appearance per
// section; cross-refs are pills. Facts web-verified (American Battlefield Trust,
// NPS, Encyclopedia Virginia, Wikipedia). See audits/war-pipeline.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'

const FIVE_FORKS_NARR: Record<string, Narr> = {
  'crossroads': {
    eyebrow: 'Five Forks · The last supply line',
    title: 'The crossroads that held Petersburg',
    blocks: [
      { locator: {
        eyebrow: 'Where and when · April 1865',
        caption: 'Five Forks was a plain country crossroads in Dinwiddie County, southwest of Petersburg, where five roads met in the woods. About three miles north of it ran the South Side Railroad, the last open rail line feeding Robert E. Lee’s army inside Petersburg. Hold the crossroads, and you held the railroad. Lose it, and the siege was over.',
        frame: { lonMin: -79.4, lonMax: -76.4, latMin: 36.6, latMax: 38.3 },
        states: [
          { name: 'Virginia', tone: 'focus', label: 'VIRGINIA', labelLon: -78.3, labelLat: 37.9 },
          { name: 'North Carolina' }, { name: 'West Virginia' }, { name: 'Maryland' },
        ],
        dots: [
          { name: 'Five Forks', date: 'Apr 1, 1865', lat: 37.16, lon: -77.61, heavy: true, anchor: 'end' },
          { name: 'Dinwiddie C.H.', lat: 37.08, lon: -77.59, color: '#8a8175', anchor: 'start' },
          { name: 'Petersburg', lat: 37.23, lon: -77.40, color: '#8a8175', anchor: 'middle', dy: -16 },
          { name: 'Richmond', lat: 37.54, lon: -77.44, color: '#8a8175', anchor: 'start' },
          { name: 'Appomattox C.H.', lat: 37.38, lon: -78.80, color: '#8a8175', anchor: 'end' },
        ],
      } },
      { p: 'By the spring of 1865 the war in Virginia had narrowed to a single question of supply. For nine and a half months Ulysses S. Grant had held Robert E. Lee pinned inside a ring of trenches around Petersburg, the rail hub twenty-odd miles south of Richmond that fed both the city and the army defending it. It was not a battle so much as a slow strangling. Grant kept reaching west, stretching his lines a little further each month, and Lee kept stretching to match him, thinner and thinner, his ranks worn down by desertion and hunger until he could barely cover the ground. Whoever ran out of line first would lose the war.' },
      { p: 'Grant’s reach finally found the end of it at a crossroads called Five Forks. Five roads met there in the woods of Dinwiddie County, and three miles north of the junction ran the South Side Railroad, the last line still carrying food and ammunition into Petersburg. The Weldon and the Richmond and Danville railroads were already cut or threatened. If the South Side went too, the city could not be held, and if Petersburg fell, so did Richmond. Everything had come down to a backwoods intersection most maps did not bother to name.' },
      { h: 'Grant sends Sheridan west', eyebrow: 'The end of March' },
      { p: 'To take it, Grant sent his hardest-driving subordinate. Major General Philip Sheridan (North) had spent the autumn burning the Shenandoah Valley and wrecking Lee’s last breadbasket, and Grant brought him east to swing wide around the Confederate right and cut the railroad for good. Sheridan came with his cavalry, and Grant gave him an infantry corps to go with it, the V Corps of the Army of the Potomac under Major General Gouverneur K. Warren (North). The plan was simple in outline and miserable in practice: get around the end of Lee’s line and break the last road.' },
      { p: 'Lee saw it coming and could not afford it. He pulled together about ten thousand men, infantry and cavalry, and put them under Major General George E. Pickett (South), the same Pickett whose division had been wrecked making the famous charge at Gettysburg two years before. Lee’s instruction to him was blunt in substance if not in its exact words: hold Five Forks, protect the railroad, keep the Union army off it. Pickett marched his command out to the crossroads, beyond the end of the main Confederate trenches, on its own. It was the right call and the worst possible position, a detachment hung out in the open at the far end of a line that could no longer reinforce it.' },
      { pill: '/war-civil-war/eastern/second-petersburg', plabel: 'The Siege of Petersburg: the nine months that led here' },
    ],
    meanwhile: { region: 'the Petersburg trenches', title: 'A line stretched to breaking', body: 'Inside Petersburg, Lee’s army was a shadow of the one that had marched into Maryland and Pennsylvania. Months in the trenches, short rations, and a steady bleed of deserters had cut it down and worn it thin, and the line it had to hold only grew longer as Grant extended west. Lee knew the arithmetic better than anyone. He had told the government in Richmond that if the right was turned, the city could not be held. Five Forks was the right.' },
  },

  'dinwiddie': {
    eyebrow: 'Five Forks · March 31',
    title: 'A wet fight in the woods',
    blocks: [
      { p: 'It rained. For days at the end of March the rain came down on Dinwiddie County until the roads turned to soup and the fields became shallow lakes, and the great Union machine that was supposed to swing around Lee’s flank bogged down in the mud. Wagons sank to their axles. Artillery had to be corduroyed forward over logs laid in the muck. Major General Philip Sheridan (North), never a patient man, fumed at the delay while his troopers floundered.' },
      { p: 'Major General George E. Pickett (South) used the chance. On March 31 he pushed out from Five Forks and struck Sheridan’s cavalry near Dinwiddie Court House, a few miles to the south, and for an afternoon he drove them. The Union horsemen, fighting dismounted with their fast-firing carbines, gave ground slowly and made the Confederates pay for it, but they gave ground. By evening Sheridan’s line had been bent back almost to the courthouse, and on paper it looked like a Confederate success.' },
      { fig: '/war-img/five-forks-dinwiddie.png', cap: 'March 31: Pickett pushes south out of Five Forks and drives Sheridan’s cavalry back toward Dinwiddie Court House.', credit: 'Stuff Happened map' },
      { p: 'It was the opposite. By advancing, Pickett had pulled his command even further from the rest of Lee’s army and left the door open behind him. That night Sheridan saw it clearly. He did not despair at being pushed back; he asked for infantry, the V Corps under Major General Gouverneur K. Warren (North), so he could pin Pickett in place and crush him in the morning. As he put it to those around him, the Confederates were in a position from which they could not safely get away, and he meant to finish them there.' },
      { h: 'Pickett pulls back', eyebrow: 'Overnight' },
      { p: 'Pickett came to the same realization from the other side and did not like it. Learning that Union infantry was coming up on his flank and rear, he pulled his command back overnight to Five Forks itself and dug in along the White Oak Road, the east-west road that ran past the crossroads. His men threw up a low line of earthworks and log breastworks a little under two miles long, facing south. At the western end, where the line simply stopped in the woods, they bent the last stretch back at a right angle to guard against anyone coming around the open end. Soldiers called that bent-back piece the return. It was the hinge the whole position would turn on.' },
      { fig: '/war-img/five-forks-line.png', cap: 'Overnight Pickett pulls back and digs in along the White Oak Road, bending his western end back into the angle his men called the return.', credit: 'Stuff Happened map' },
      { pill: '/war-civil-war/eastern/cedar-creek', plabel: 'Cedar Creek: how Sheridan earned this command' },
    ],
    meanwhile: { region: 'Sheridan’s headquarters', title: 'The infantry he did not want', body: 'Grant gave Sheridan the V Corps, but Sheridan did not trust the man who led it. Warren had a reputation for being deliberate, for studying a problem before he moved on it, and Sheridan wanted speed above all else, that day more than any. Grant, who shared the worry, quietly told Sheridan that if Warren’s caution threatened the operation, he had the authority to relieve him on the spot. Sheridan tucked the permission away. Before the next day was out he would use it.' },
  },

  'shad-bake': {
    eyebrow: 'Five Forks · The afternoon',
    title: 'The shad bake',
    blocks: [
      { p: 'The morning of April 1 went slowly, which suited Major General Philip Sheridan (North) not at all. The roads were still bad, the V Corps under Major General Gouverneur K. Warren (North) was strung out and slow to arrive and slower to form up, and the hours bled away while the sun climbed and started down the far side. Sheridan rode up and down in a fury, certain the chance was slipping. He could not attack until the infantry was in line, and the infantry would not hurry.' },
      { p: 'Behind the Confederate works, the afternoon went quietly, which suited the Confederate generals fine. Convinced that the only Union force in front of them was Sheridan’s cavalry, and that cavalry alone would not storm an entrenched line, Major General George E. Pickett (South) and his cavalry commander, Major General Fitzhugh Lee (South), rode off about a mile and a half to the rear to enjoy a shad bake, a springtime Virginia meal of fresh-caught river fish roasted on planks over a fire. They left no clear word that they were going, and they took no precaution to be reached quickly. The two senior men responsible for holding the last road into Petersburg sat down to lunch beyond earshot of their own line.' },
      { h: 'An acoustic shadow', eyebrow: 'Why they heard nothing' },
      { p: 'When the Union attack finally came on, late in the afternoon, the men at the fish fry did not hear it. The dense pine woods and a quirk of the wind seem to have swallowed the sound, a freak of terrain and weather that soldiers of the day called an acoustic shadow: a fight raging close by, and a strange pocket of silence over the spot where the commanders sat. Couriers sent to find Pickett could not, or were shot down trying. For the crucial opening of the battle, the Confederate force at Five Forks fought leaderless, its two top generals eating shad a mile and a half away while their line came apart.' },
      { p: 'It is the kind of detail that sounds invented and is not. By the time Pickett grasped that a real battle was underway and galloped back, riding through Union troops to reach his own men, much of his line was already gone.' },
    ],
    meanwhile: { region: 'the ranks', title: 'No one in charge', body: 'For the soldiers in the trenches along the White Oak Road, the absence at the top was invisible until it was fatal. They held their works and waited for orders that did not come, because the men who gave the orders were gone and the men sent to fetch them never returned. When the blue lines came out of the woods against the bent-back western end, there was no one with the rank to shift the whole command to meet them. The line fought in pieces, brigade by brigade, and was beaten in pieces.' },
  },

  'collapse': {
    eyebrow: 'Five Forks · The assault',
    title: 'The line comes apart',
    blocks: [
      { p: 'Around a quarter past four in the afternoon, Major General Philip Sheridan (North) threw the whole weight of his command forward at once. The plan was for the infantry of the V Corps to strike the bent-back western end of the Confederate line, the return, and roll it up, while the cavalry pressed the front so the defenders could not shift to meet the blow. It was a hammer aimed at the one weak hinge of the position.' },
      { p: 'It nearly missed. The maps were wrong about where the Confederate left actually ended, and the V Corps under Major General Gouverneur K. Warren (North) advanced past the angle instead of into it, the divisions of Brigadier General Samuel Crawford (North) and Brigadier General Charles Griffin (North) drifting off into empty woods. For a few minutes the great attack threatened to swing wide of the enemy entirely. Sheridan would not allow it. He rode straight into the confusion, in among the infantry, waving the battle flag, swearing, dragging the lines back by the sheer force of his presence until they faced the right way and went in. Brigadier General Romeyn Ayres (North) wheeled his division left and struck the return head-on.' },
      { p: 'It broke. Hit on the front and flank at once, with no senior commander present to steady it, the Confederate left folded. The cavalry under Major General Wesley Merritt (North), with Brigadier General George Custer (North) on the far flank, pressed in dismounted from the south, and Brigadier General Joshua Chamberlain (North), of Gettysburg fame, helped carry the works in the center. Pickett got back in time to see his command disintegrating and could do nothing to stop it. Whole regiments were surrounded in the woods and surrendered where they stood. By dark the Confederate force at Five Forks had been wrecked: out of around ten thousand men, close to three thousand were casualties, and most of those were prisoners, somewhere over two thousand captured along with the guns and flags.' },
      { fig: '/war-img/five-forks-assault.png', cap: 'Late on April 1 Sheridan strikes the bent-back return with Warren’s infantry while the cavalry pins the front, and the line comes apart.', credit: 'Stuff Happened map' },
      { h: 'Sheridan relieves Warren', eyebrow: 'In the hour of victory' },
      { p: 'In the middle of the greatest field success of his career, Sheridan turned on the man whose corps had largely won it for him. Convinced that Warren had been too slow on the approach and too far to the rear once the fight began, Sheridan relieved him of command of the V Corps that same evening and sent him away. It was a stunning blow to a general who had held the left at Gettysburg and just helped break Lee’s last line, and it followed Warren the rest of his life. He spent fourteen years demanding a hearing, and only in 1882, after a long court of inquiry that had finally convened back in 1879, was its finding published, after his death, that the relief had not been justified. The verdict cleared his name. It came too late for him to read it.' },
      { pill: '/war-civil-war/eastern/gettysburg', plabel: 'Gettysburg: where Warren held the left and Pickett charged' },
    ],
    meanwhile: { region: 'City Point', title: 'Grant gets the word', body: 'The news reached Grant at his headquarters that night. He had been waiting nine and a half months for exactly this, and he did not pause to celebrate it. Within hours he had issued the order he had been holding back: a full assault on the Petersburg lines at dawn. With Five Forks lost and the South Side Railroad as good as gone, the trenches that had held all winter would be hit everywhere at once before Lee could recover his balance. The strangling was about to become a killing.' },
  },

  'fall': {
    eyebrow: 'Five Forks · What it meant',
    title: 'The week the war ended',
    blocks: [
      { p: 'Five Forks did in an afternoon what nine and a half months of siege had not: it cracked the whole position open. With the last railroad cut and the right flank caved in, the Petersburg line could not be held a day longer, and Grant knew it. He ordered a general assault for the dawn of April 2, and all along the front the Union army went forward against trenches stretched too thin to stop them. The lines broke. Lieutenant General A. P. Hill (South), one of Lee’s longest-serving corps commanders, was killed that morning trying to reach his men.' },
      { p: 'That was the day the dam gave way. Robert E. Lee, his front broken in a dozen places, sent word to Richmond that the capital and Petersburg both had to be abandoned at once. The message reached Jefferson Davis in church on a Sunday morning, and by nightfall the Confederate government was fleeing south and Richmond was burning, set alight by its own retreating troops. After almost four years and a ring of forts that had held since the summer before, the two cities the whole Eastern war had been fought over were gone in a single day.' },
      { p: 'What followed was a footrace. Lee got the remnant of his army out to the west, hoping to swing south and join the last Confederate army still in the field in North Carolina, and Grant set out after him with Sheridan’s cavalry slashing at the head and flanks of the retreat. There was no food at the end of the road and very little hope. Hungry, outnumbered, and outrun, Lee’s men marched and fought westward for a week with the Union army closing around them like a fist.' },
      { h: 'Appomattox', eyebrow: 'April 9, 1865' },
      { p: 'It ended at a village called Appomattox Court House, about eighty-five miles west of Five Forks. On April 9, with Sheridan’s cavalry across the road in front of him and Union infantry coming up behind, Lee found his way blocked and his army down to a starving fraction of its old strength. He sent forward a flag of truce, and that afternoon he met Grant in the parlor of a private home and surrendered the Army of Northern Virginia. The war in Virginia was over. Other armies would lay down their arms in the weeks that followed, but the surrender at Appomattox is the moment the country has always counted as the end.' },
      { pill: '/war-civil-war/eastern/appomattox', plabel: 'Appomattox: the surrender that ended it' },
      { p: 'It is worth being plain about what ended. The Confederacy had been founded to preserve and extend slavery, and the army that surrendered at Appomattox had spent four years fighting to keep four million people in bondage. When that army gave up its weapons, the institution it had defended died with it. Five Forks does not have the fame of Gettysburg or the horror of Antietam, but it was the blow that started the last week of the war, and the last week of slavery in the United States.' },
    ],
    meanwhile: { region: 'Washington', title: 'A celebration cut short', body: 'The North erupted when the news of Richmond’s fall and then the surrender came in, with bells and bonfires and crowds in the streets of Washington. Abraham Lincoln had walked through the ruins of the Confederate capital himself, days after it burned. The joy lasted less than a week. On the night of April 14, five days after Appomattox, Lincoln was shot at Ford’s Theatre, and the victory that Five Forks had set in motion turned overnight into mourning.' },
  },
}

export function SectionNarrative({ id }: { id: string }) {
  return <BattleSectionReader sections={FIVE_FORKS_NARR} id={id} slug="five-forks" battleName="Five Forks" theatreId="east" theatreHref="/war-civil-war/eastern" battleId="e-fiveforks" />
}
