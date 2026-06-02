'use client'

// Appomattox Court House — battle sections. Produced through the war content
// pipeline (audits/war-content-pipeline.md): fact pack → author → fact-check +
// storytelling critic → revise. Data only; rendered by <BattleSectionReader>.
//
// House-voice rules (locked): no em-dashes in reader-facing strings; the eight
// marquee names (Lee, Grant, etc.) carry no side-tag, every other side-affiliated
// person tagged once on first mention per section; full rank spelled out on first
// appearance per section; the cause (slavery) named once, plainly; miles first.
// Facts web-verified against American Battlefield Trust, NPS, Encyclopedia
// Virginia, and Wikipedia. Cross-refs are pills. See audits/war-pipeline.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'

const APPOMATTOX_NARR: Record<string, Narr> = {
  'the-collapse': {
    eyebrow: 'Appomattox · The lines break',
    title: 'The Lines Break',
    blocks: [
      { locator: {
        eyebrow: 'Where and when · April 1865',
        caption: 'For nine months the two armies had been locked around Petersburg, the rail hub twenty miles below Richmond that fed both the Confederate capital and Lee’s army. When the line there finally broke, Lee abandoned both cities and ran west, hoping to swing south toward North Carolina. The Union army cut him off near a crossroads village called Appomattox Court House, about ninety miles to the west.',
        frame: { lonMin: -81.6, lonMax: -75.4, latMin: 36.0, latMax: 39.4 },
        states: [
          { name: 'Virginia', tone: 'focus', label: 'VIRGINIA', labelLon: -79.2, labelLat: 37.9 },
          { name: 'West Virginia' }, { name: 'North Carolina' },
          { name: 'Maryland' }, { name: 'Kentucky' }, { name: 'Tennessee' },
        ],
        dots: [
          { name: 'Appomattox C.H.', date: 'Apr 9, 1865', lat: 37.38, lon: -78.80, heavy: true, anchor: 'start' },
          { name: 'Petersburg', lat: 37.23, lon: -77.40, color: '#8a8175', anchor: 'end' },
          { name: 'Richmond', lat: 37.54, lon: -77.44, color: '#8a8175', anchor: 'start' },
          { name: 'Lynchburg', lat: 37.41, lon: -79.14, color: '#8a8175', anchor: 'end' },
          { name: 'Sailor’s Creek', lat: 37.34, lon: -78.13, color: '#8a8175', anchor: 'start' },
        ],
      } },
      { p: 'By the spring of 1865 the war the South had begun to preserve slavery was nearly lost, and the man who had carried it longest knew it. For almost ten months Robert E. Lee had held a line of trenches running for miles around Petersburg, the railroad town below Richmond through which nearly everything his army ate and fired had to pass. Lose Petersburg and you lost Richmond, the Confederate capital, and with the capital went the last pretense that the Confederacy was a country and not a shrinking pocket of starving men. Ulysses S. Grant had spent those ten months stretching his larger army farther and farther around the Confederate right, reaching for the last railroads, and Lee had fewer and fewer men to stretch with him.' },
      { p: 'On April 1, Major General Philip Sheridan (North) smashed the far end of Lee’s line at Five Forks, a road junction southwest of Petersburg, taking thousands of prisoners and dooming the last rail line into the city. Sheridan, Grant’s hard-driving cavalry commander, had been hammering at that flank for days. When it caved, the whole position was untenable.' },
      { pill: '/war-civil-war/eastern/five-forks', plabel: 'Five Forks: the flank that broke the Petersburg line' },
      { p: 'The next morning, April 2, Grant ordered an assault all along the front, and the worn-thin Confederate trenches came apart. Lieutenant General A. P. Hill (South), one of Lee’s most trusted corps commanders, rode forward to rally his lines and was shot dead by two Union stragglers. That night Lee got word to Richmond that the army was leaving, and on the night of April 2 and into April 3 the Confederates pulled out of Petersburg and the capital, setting fire to anything of military use as they went. Much of Richmond burned. The government of Jefferson Davis fled south by train.' },
      { pill: '/war-civil-war/eastern/third-petersburg', plabel: 'The fall of Petersburg: the assault that ended the siege' },
      { h: 'The race west', eyebrow: 'April 3 to 8' },
      { p: 'What followed was a footrace for survival. Lee aimed his army west toward Amelia Court House, meaning to gather supplies, then turn south to join the only other Confederate army of any size, the one Joseph E. Johnston (South) still held together in North Carolina against William T. Sherman. If the two armies linked, the war might drag on. Grant’s job was simple to state and brutal to do: keep Lee from turning south, and run him to ground before he got there.' },
      { p: 'The supplies Lee expected at Amelia Court House were not there, and the day he lost hunting for food was a day Grant’s columns used to get ahead of him on parallel roads. Sheridan’s cavalry slashed at the Confederate flanks and rear the whole way, and Union infantry marched without rest to cut the roads in front. On April 6, at a stream called Sailor’s Creek, the pursuers caught a third of Lee’s strung-out army and tore it off, taking roughly 7,700 prisoners, among them nine generals. Watching the broken survivors stream back, Lee is said to have asked whether the army was dissolving. It very nearly was. He was down to perhaps thirty thousand men, many of them without weapons or shoes, and the gap between him and salvation was closing by the hour.' },
      { fig: '/war-img/appomattox-race-west.png', cap: 'April 3 to 6: Lee’s army runs west from Petersburg and Richmond while Grant’s infantry and Sheridan’s cavalry chase it down at Sailor’s Creek.', credit: 'Stuff Happened map' },
    ],
    meanwhile: { region: 'Richmond', title: 'The capital burns', body: 'On April 3, the day after Lee pulled out, United States troops marched into a burning Richmond. Among the first units into the abandoned capital were regiments of the United States Colored Troops, Black soldiers walking into the city that had been the seat of a government built to keep them enslaved. Crowds of freed people poured into the streets to meet them. Two days later Abraham Lincoln himself walked through the smoking capital, and the people who had been property surrounded him.' },
  },

  'last-march': {
    eyebrow: 'Appomattox · The last march',
    title: 'The Last March',
    blocks: [
      { p: 'After Sailor’s Creek, Lee kept moving west through the night and the next day, his men marching and starving in the same step. The army’s one hope was a trainload of rations waiting on the railroad at Appomattox Station, a few miles short of the larger town of Lynchburg. If the half-starved column could reach the cars, eat, and keep going, it might still slip around the Union pursuit and turn south. Everything now turned on a few boxcars of food and which side reached them first.' },
      { p: 'Sheridan understood that as clearly as Lee did, and his cavalry could move faster than infantry could march. On the afternoon of April 8, Brevet Major General George Armstrong Custer (North), the young and famously aggressive division commander, drove his troopers into Appomattox Station ahead of the Confederate infantry and seized the supply trains Lee was counting on. In the fight around the station Custer’s men also captured a large park of Confederate artillery and wagons, scattering the gunners and taking some twenty-five cannon. The food that was supposed to save Lee’s army was now in Union hands.' },
      { fig: '/war-img/appomattox-station.png', cap: 'April 8: Custer’s cavalry seizes the supply trains at Appomattox Station ahead of Lee’s column, getting in front of the Confederate retreat.', credit: 'Stuff Happened map' },
      { p: 'Worse than the lost rations was what the lost rations meant. With Custer astride the road at Appomattox Station, Sheridan’s cavalry was now in front of Lee’s army, not just behind it. The Confederates had been outrun. That night Lee’s campfires looked out on a ring of Union fires to the west, the direction he had to go, and he understood that the only way out lay straight through whatever was blocking the road in the morning.' },
      { h: 'A letter under flag of truce', eyebrow: 'The night of April 8' },
      { p: 'Grant had already begun to write to him. On April 7 he had sent Lee a note pointing out that further resistance was hopeless and asking for the surrender of the Army of Northern Virginia. Lee was not yet ready, and his reply fenced for terms without conceding the point, asking what conditions Grant would offer. The notes went back and forth between the lines by courier over April 7 and 8 while the armies kept marching and fighting. Lee was buying time to see whether one more attack could open the road. If it could, he would take it. If it could not, the letters were the only thing left to write.' },
      { p: 'That night Lee called his senior officers together and settled on a last attempt. At first light the infantry of Major General John B. Gordon (South), with the cavalry alongside, would attack westward and try to break through whatever stood across the road. If it was only Sheridan’s cavalry, they could push it aside and the army might escape. If Union infantry had come up behind the cavalry overnight, there would be nothing to do. The whole question of whether the war went on came down to who was waiting in the dark beyond Gordon’s lines.' },
    ],
    meanwhile: { region: 'on both roads', title: 'A forced march in the dark', body: 'While Lee’s officers planned their dawn attack, two corps of Union infantry were making one of the hardest marches of the war to get into position behind Sheridan. The Army of the James under Major General Edward Ord (North) and the V Corps had covered more than thirty miles in a day and a night to reach Appomattox, the men staggering along the road half-asleep on their feet. They would arrive in the dark, just behind the cavalry, just in time. Among them marched some five thousand United States Colored Troops, in line for the last battle of the war in Virginia.' },
  },

  'the-attack': {
    eyebrow: 'Appomattox · The last attack',
    title: 'The Last Attack',
    blocks: [
      { p: 'Before dawn on April 9, 1865, Palm Sunday, roughly nine thousand Confederates formed in the fields west of the village: Major General John B. Gordon’s (South) infantry and the cavalry of Major General Fitzhugh Lee (South), with what artillery remained. They were the last striking power the Army of Northern Virginia had left. Their orders were to break the line across the road and reopen the way west.' },
      { p: 'The attack went in a little before eight in the morning, the lead divisions under Major General Bryan Grimes (South) of North Carolina. At first it worked. The Confederates drove back Sheridan’s dismounted troopers, took some guns, and pushed the line off the high ground, and for a few minutes the road west was open. Then Gordon’s men crested the ridge and saw what lay beyond. It was not more cavalry. It was the massed infantry of Major General Edward Ord’s (North) Army of the James and Major General Charles Griffin’s (North) V Corps, tens of thousands of fresh troops in line of battle across the entire front, exactly the thing Lee had feared in the dark. The cavalry the Confederates had pushed aside simply slid out of the way and uncovered a wall of bayonets.' },
      { fig: '/war-img/appomattox-last-attack.png', cap: 'Dawn, April 9: Gordon’s and Fitzhugh Lee’s attack drives west past Sheridan’s cavalry into the massed infantry of Ord and Griffin while Longstreet holds the rear.', credit: 'Stuff Happened map' },
      { p: 'The attack stopped where it stood. There was nothing to break through and nowhere to go. Gordon sent word back to Lee that his command had been, in his own blunt phrase, fought to a frazzle, and that he could do nothing more unless heavily supported, support that no longer existed. The road west was shut. To the rear, Lieutenant General James Longstreet (South) was holding off the rest of Grant’s closing army with the other half of the Confederate force. The Army of Northern Virginia was surrounded on three sides and pressed against the village on the fourth.' },
      { h: 'Nothing left but the meeting', eyebrow: 'Mid-morning' },
      { p: 'Lee already knew what the answer would be. He had told his officers the night before that if the road was blocked there was nothing for it but to see Grant, and that he would rather die a thousand deaths than do it. When Gordon’s message came, Lee said quietly that there was nothing left for him to do but go and see General Grant, and he would rather die a thousand deaths. He sent riders out under flags of truce, in places a soldier waving a white towel for a flag, to ask for the meeting that would end his army. The firing died away along the lines. After four years, the guns in Virginia went quiet by late morning on April 9.' },
      { p: 'The fighting at Appomattox Court House was small as Civil War battles went, a few hundred killed and wounded on the two sides together over the morning. But it was the period at the end of the sentence. Every other battle in this theatre had been fought to decide whether the war would go on. This one was fought to decide that it would not.' },
    ],
    meanwhile: { region: 'down the road', title: 'Finding Grant', body: 'Grant himself was not on the field that morning. He had ridden off cross-country to reach Sheridan’s wing and was somewhere on the roads when Lee’s request for a meeting came looking for him, badly enough that couriers spent part of the day simply finding the general to whom the South wished to surrender. He had been suffering all night from a blinding headache, which he later said vanished the instant he read Lee’s note agreeing to meet.' },
  },

  'surrender': {
    eyebrow: 'Appomattox · The surrender',
    title: 'The Surrender',
    blocks: [
      { p: 'They met in the front parlor of a brick house in the village belonging to a man named Wilmer McLean. By a coincidence almost too neat to be true, McLean had once lived near Manassas, where the first major battle of the war was fought in his fields in 1861, and had moved to this quiet corner of Virginia to get away from the fighting. The war ended in his living room.' },
      { fig: '/war-img/appomattox-surrender.png', cap: 'April 9: the Army of Northern Virginia surrounded on three sides and pinned against Appomattox Court House, where Lee surrendered in the McLean House.', credit: 'Stuff Happened map' },
      { pill: '/war-civil-war/eastern/bull-run', plabel: 'First Bull Run: the war that began in McLean’s other front yard' },
      { p: 'Lee arrived first, in a spotless dress uniform with a fine sword at his side, having put on his best in case he was taken prisoner. Grant came in from the field as he was, in a mud-spattered private’s coat with the three stars of a lieutenant general on the shoulders, no sword at all. Grant himself wrote afterward that he must have contrasted strangely with a man so handsomely dressed. The two had met once before, briefly, in the Mexican War nearly twenty years earlier, and for a while they talked about that, two soldiers putting off the thing they had come to do.' },
      { p: 'Then Lee brought him to the point and asked for the terms. Grant wrote them out on the spot, and they were far gentler than a surrendered rebel army had any right to expect. The men of the Army of Northern Virginia would lay down their arms and be paroled, free to go home so long as they did not take up arms again. Officers could keep their sidearms and their personal horses and baggage. There would be no imprisonment, no trials for treason, no marching the army off to captivity. When Lee mentioned that in his army the cavalrymen and artillerymen owned their own horses, Grant said they could keep them too, to put in a crop and get through the coming year. Lee said it would have a happy effect on his men.' },
      { p: 'Then Grant did one more thing. Told that Lee’s soldiers had been without real food for days, he ordered 25,000 rations sent over from his own supply trains to feed the army he had just defeated. The men who had been trying to kill each other that morning ate Union bread that afternoon.' },
      { h: 'General Orders, No. 9', eyebrow: 'The farewell' },
      { p: 'The papers were signed in the McLean parlor in the afternoon of April 9. Lee rode back to his lines, where his ragged soldiers crowded around his horse and wept, and many of them reached out just to touch him as he passed. The next day he put his farewell to them on paper, the order known as General Orders, No. 9. He told them they had been beaten by overwhelming numbers and resources, not out-fought, and sent them home:' },
      { p: '“After four years of arduous service marked by unsurpassed courage and fortitude, the Army of Northern Virginia has been compelled to yield to overwhelming numbers and resources.”', q: true },
      { h: 'Honor answering honor', eyebrow: 'April 12' },
      { p: 'On April 12, the defeated army marched in to stack its arms for the last time. The Union officer chosen to receive the surrender of the infantry was Brevet Major General Joshua L. Chamberlain (North), the former college professor who had held the far left of the line at Gettysburg two years before. As the gray column came up the road, worn and silent, Chamberlain ordered his own men to come to attention and shift their muskets to the salute, soldier’s honor offered to soldiers. On the other side, Gordon caught the gesture, wheeled his horse, and ordered his men to answer it in kind. Chamberlain remembered it as honor answering honor. There were no cheers, by his account, and no taunts, only the two lines saluting each other in the morning quiet while one of them stacked its rifles and its torn flags and stopped being an army.' },
      { p: 'Appomattox did not end the entire war by itself. Other Confederate armies were still in the field, and Johnston would not surrender to Sherman in North Carolina for more than two weeks yet, with smaller commands holding out into May and June. But the Army of Northern Virginia had been the heart of the rebellion for four years, and once it was gone the rest was a matter of time and arithmetic. The thing that had cost more than six hundred thousand American lives was, in every way that mattered, over. The Union was preserved, and slavery, the cause the war had been fought over, was finished with it.' },
      { pill: '/war-civil-war/off-the-battlefield/reckoning', plabel: 'The reckoning: what the surrender left to settle' },
    ],
    meanwhile: { region: 'Washington', title: 'Five days of peace', body: 'The news reached Washington and the North set off a celebration that ran for days, with cannon salutes, illuminated houses, and crowds in the streets. Abraham Lincoln, who had been at the front days earlier and walked through fallen Richmond, was in the capital to see it. He had five days. On the night of April 14, Good Friday, he was shot at Ford’s Theatre, and the country went from its greatest relief to its deepest shock inside a week.' },
  },
}

export function SectionNarrative({ id }: { id: string }) {
  return <BattleSectionReader sections={APPOMATTOX_NARR} id={id} slug="appomattox" battleName="Appomattox Court House" theatreId="east" theatreHref="/war-civil-war/eastern" battleId="e-appomattox" />
}
