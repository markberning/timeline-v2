'use client'

// Fort Blakeley — battle sections. Produced through the war content pipeline
// (audits/war-content-pipeline.md): fact pack → author → fact-check + storytelling
// critic → revise. Data only; rendered by the shared <BattleSectionReader>.
//
// Locked house-voice rules: no reader-facing em-dashes; marquee names (Lee, Grant,
// Lincoln) carry no side-tag while every other side-affiliated person is tagged
// once on first mention per section; full rank spelled out on first appearance per
// section; quote attributions inline; tell it plainly. Facts web-verified against
// American Battlefield Trust, NPS, Encyclopedia of Alabama, Wikipedia.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'

const BLAKELEY_NARR: Record<string, Narr> = {
  'last-port': {
    eyebrow: 'Fort Blakeley · The last port',
    title: 'The Road to Mobile',
    blocks: [
      { locator: {
        eyebrow: 'Where and when · April 1865',
        caption: 'Fort Blakeley stood on high ground above the rivers north of Mobile Bay, in Baldwin County, Alabama, about six miles above its sister work at Spanish Fort. Major General Edward Canby (North) landed his army on the eastern shore of the bay and pushed up it, taking Spanish Fort first and then closing on Blakeley, the last earthwork guarding the back door to Mobile.',
        frame: { lonMin: -88.8, lonMax: -86.6, latMin: 29.8, latMax: 31.6 },
        states: [
          { name: 'Alabama', tone: 'focus', label: 'ALABAMA', labelLon: -87.5, labelLat: 31.2 },
          { name: 'Mississippi' }, { name: 'Florida' }, { name: 'Georgia' }, { name: 'Tennessee' },
        ],
        dots: [
          { name: 'Fort Blakeley', date: 'Apr 9, 1865', lat: 30.74, lon: -87.91, heavy: true, anchor: 'middle', dy: -30 },
          { name: 'Spanish Fort', lat: 30.68, lon: -87.91, color: '#8a8175', anchor: 'start' },
          { name: 'Mobile', lat: 30.69, lon: -88.04, color: '#8a8175', anchor: 'end', dy: -18 },
          { name: 'Pensacola', lat: 30.42, lon: -87.22, color: '#8a8175', anchor: 'start' },
        ],
      } },
      { p: 'By the spring of 1865 the Confederacy was a country running out of country. The armies that had carried the rebellion through four years of war were being chased down and cornered, in Virginia and the Carolinas, and the South was shrinking to the few places its soldiers still held. One of those places was Mobile, Alabama, on the Gulf coast. The city itself had been sealed off the year before, when a Union fleet fought its way past the forts at the mouth of Mobile Bay and bottled up the harbor. But the city had not fallen. Behind a ring of earthworks across the bay, the last working Confederate port on the Gulf was still flying its flag.' },
      { pill: '/war-civil-war/naval/mobile-bay', plabel: 'Mobile Bay: how the harbor was sealed the year before' },
      { p: 'The Confederacy had been founded, four years and a few weeks earlier, to keep four million Black people in slavery, and the war had become the engine that was tearing slavery apart. Now the engine was running down to its last turns. In January 1865 the general-in-chief of all United States armies, Lieutenant General Ulysses S. Grant, ordered an offensive against the Gulf coast interior: take Mobile, then drive inland and wreck what remained of Confederate Alabama. The man given the job was Major General Edward R. S. Canby (North), commander of the Military Division of West Mississippi, a careful, methodical officer not given to gambling with his men.' },
      { h: 'The eastern shore', eyebrow: 'Late March 1865' },
      { p: 'Mobile sat on the west side of its bay, but its defenders had built the strongest works on the east side, on the high ground above the rivers that drained into the bay from the north. Two earthworks anchored that line: Spanish Fort near the water, and Fort Blakeley about six miles above it. Canby chose to come at the city the long way, up the eastern shore, taking the forts one at a time rather than throwing his men straight at Mobile. In late March 1865 he ferried his army across to the eastern shore and pushed north, two corps strong, his roughly 45,000 men far outnumbering anything the Confederates could put in front of them.' },
      { p: 'Among those men were some 5,000 soldiers of the United States Colored Troops, the regiments of Black soldiers, many of them men who had been enslaved not long before, now marching in Union blue. They had marched up from Pensacola, in Florida, with the column of Major General Frederick Steele (North), who set out on March 20 and reached the ground in front of the forts on April 1, with the Black soldiers leading the way. It was one of the largest gatherings of Black troops in any single battle of the war, and the ground they were marching toward was Alabama, deep in the country that had fought to keep them in chains.' },
      { pill: '/war-civil-war/off-the-battlefield/usct', plabel: 'The United States Colored Troops: who they were and what they risked' },
      { h: 'Spanish Fort falls', eyebrow: 'April 8' },
      { p: 'Canby went at Spanish Fort first. For nearly two weeks his men dug their way forward in the classic style of a siege, pushing trenches and gun batteries closer night after night while their artillery hammered the works. The fort was held by Brigadier General Randall L. Gibson (South), who put up a stubborn defense against odds of something like ten to one. On the night of April 8, with the Union lines pressing in on him, Gibson pulled most of his garrison out along a narrow causeway through the marsh and got them away, sending roughly a thousand of his men north to reinforce the one fort still standing. That fort was Blakeley. With Spanish Fort emptied, Canby turned his whole weight on it the very next day.' },
    ],
    meanwhile: { region: 'Virginia', title: 'A different surrender', body: 'Far to the northeast, on that same April 9, the war was ending in a parlor at Appomattox Court House, Virginia, where Robert E. Lee surrendered the Army of Northern Virginia to Grant. None of the men around Fort Blakeley knew it. News traveled by wire and rider, not faster than the armies, and the soldiers digging in front of the Alabama earthwork that afternoon had no idea the war they were fighting had, in its largest sense, already been decided a few hours before.' },
  },

  'the-siege': {
    eyebrow: 'Fort Blakeley · The earthwork',
    title: 'The Lines in the Pines',
    blocks: [
      { p: 'Fort Blakeley was not a fort in the sense of stone walls and a moat. It was a line of dug-in earthworks, a wall of piled earth almost three miles long, curving across the high ground above the rivers and anchored by nine strongpoints called redoubts, with about 40 cannon spaced along it. Behind it ran the rivers and marshes of the delta, and out on islands in the Blakeley River sat two more batteries, Huger and Tracy, that could throw shells into anyone attacking the line. Confederate gunboats lay in the rivers to the rear. It was a position built to make an attacker pay dearly for every step.' },
      { p: 'The defenders had done everything they could to thicken it. In front of the main wall they had cleared the trees and brush for hundreds of yards to open a field of fire, then filled that cleared ground with obstacles: rows of abatis (felled trees with their sharpened branches turned outward, an old and brutally effective way to tangle and slow attacking infantry), lines of sharpened stakes, and telegraph wire strung low between the stumps to trip men in the open. They had also buried something newer and crueler in the ground out front, what they called subterra shells: artillery shells rigged to explode when stepped on, an early form of the land mine. A man charging that line had to cross all of it under fire.' },
      { h: 'About four thousand against forty', eyebrow: 'The garrison' },
      { p: 'The trouble was that the line was far too long for the men who held it. Command at Blakeley fell to Brigadier General St. John R. Liddell (South), with roughly 3,500 to 4,000 men to cover nearly three miles of works, fewer than two men for every yard of front. The overall defense of Mobile rested with Major General Dabney H. Maury (South), back across the bay in the city, but the men in the trenches at Blakeley were Liddell’s.' },
      { p: 'They were not all veterans. The toughest of them were two brigades under Brigadier General Francis M. Cockrell (South), hard-bitten Missouri and Mississippi soldiers who had fought through Pea Ridge, Vicksburg, the Atlanta campaign, and the slaughter at Franklin, and who held the center and left of the line. But a good part of the right was held by the Alabama reserves under Brigadier General Bryan M. Thomas (South), many of them teenage conscripts with little training, boys put behind a wall and told to hold it. They had skill at the center and numbers nowhere. Against them Canby concentrated about 16,000 men.' },
      { pill: '/war-civil-war/western/franklin', plabel: 'Franklin: the battle that had already gutted Cockrell’s Missourians' },
      { h: 'Digging closer', eyebrow: 'A week of siege' },
      { p: 'The siege of Blakeley followed the same patient method as Spanish Fort. The Union force in front of the works, with Major General Frederick Steele (North) directing the troops on the ground, dug forward in stages, throwing up three successive lines of earthworks, each closer than the last, until the foremost Union trenches sat under 1,000 yards from the Confederate wall. For more than a week the two sides skirmished by day and dug by night. The Confederates raided the forward trenches in the dark, lit the ground with shells filled with quicklime to spot targets, and their gunboats shelled the Union lines until artillery drove the boats off. It was grinding, sleepless, deadly work, and all the while the noose drew tighter. By the afternoon of April 9, with Spanish Fort just fallen and the whole Union army free to concentrate, Canby was ready to take Blakeley by storm.' },
      { fig: '/war-img/fort-blakeley-siege.png', cap: 'Late March to April 9: the Union army digs three successive lines up to Fort Blakeley as Steele closes the eastern shore after Spanish Fort falls.', credit: 'Stuff Happened map' },
    ],
    meanwhile: { region: 'inside the works', title: 'A garrison that could count', body: 'The men inside Fort Blakeley were not fools. They could see the Union trenches creeping closer every night, they could count the regiments massing in front of a line they did not have the numbers to hold, and most of them had heard, by rumor at least, how badly the war was going everywhere else. They held the wall anyway. What was left to fight for was narrowing by the day, but the order was to hold the last earthwork above Mobile, and so they stayed in the trenches and waited for the rush they knew was coming.' },
  },

  'the-storm': {
    eyebrow: 'Fort Blakeley · The assault',
    title: 'Thirty Minutes',
    blocks: [
      { p: 'The attack went in late in the day. In the early afternoon of April 9, regiments of the United States Colored Troops began probing the Confederate skirmish line on the Union right, feeling for the strength of the defense and drawing fire. Then, near 5:30 in the evening, the whole Union line rose out of its trenches at once, along nearly the entire front, and charged across the open ground toward the earthwork.' },
      { p: 'On the far Union right, closest to the river, came the division of Black soldiers under Brigadier General John P. Hawkins (North), three brigades of United States Colored Troops thrown straight at the part of the line held by Thomas’s young Alabama reserves. They went in over the worst of the ground, into the cleared field thick with felled trees and sharpened stakes and buried shells. Men were hit by rifle and cannon fire the instant they stood up, and others were blown apart stepping on the subterra shells hidden in the grass. They kept going. They drove the Confederate skirmishers back into the main works, hacked their way through the rows of abatis, and reached the wall.' },
      { fig: '/war-img/fort-blakeley-storm.png', cap: 'Near 5:30 p.m. on April 9, the whole Union line storms the earthwork as Hawkins’s United States Colored Troops carry Thomas’s stretch on the far right.', credit: 'Stuff Happened map' },
      { p: 'It was over almost as fast as it began. The line was simply too long and too thinly held to stop a rush on that scale. Once the attackers were through the obstacles and over the parapet at several points, the defense came apart. The fighting at the wall was close and savage where it happened at all, but it lasted only about thirty minutes from the charge to the collapse. Most of the garrison threw down their arms. A few dozen men got away across the river by boat; everyone else was killed, wounded, or, overwhelmingly, captured.' },
      { h: 'After the wall', eyebrow: 'A dark question' },
      { p: 'Something ugly may have happened in the last minutes. Almost as soon as the fort fell, accounts surfaced that some Confederates were shot after they had surrendered, in the stretch of the line stormed by the Black regiments. It is not hard to see where the rage came from. The Confederate government had treated captured Black soldiers not as prisoners of war but as escaped property to be enslaved or killed, and the men of the United States Colored Troops knew it; they had crossed a minefield to reach a wall held by an army that did not recognize their right to surrender. The careful conclusion of historians who have studied it is that some Federal soldiers probably did fire on men who had given up, but that there was no large-scale massacre. The full truth of those chaotic thirty minutes is still argued over.' },
      { p: 'When the smoke cleared, the count told the story of a one-sided fight. The Union lost on the order of 150 killed and around 650 wounded across the whole siege and storm. The Confederates lost perhaps 75 killed, but more than 2,800 men were marched off as prisoners. Liddell’s garrison, the last army defending the last earthwork above Mobile, had effectively ceased to exist in half an hour.' },
    ],
    meanwhile: { region: 'the river batteries', title: 'The works empty out', body: 'With both Spanish Fort and Blakeley in Union hands, the island batteries out in the Blakeley River, Huger and Tracy, had nothing left to protect and no line left to anchor. Within two days their crews spiked the guns and abandoned them. The whole eastern-shore defense of Mobile, built up over years and held through two weeks of siege, came undone in the space of a single week, and the road across the bay to the city lay open.' },
  },

  'the-end': {
    eyebrow: 'Fort Blakeley · The meaning',
    title: 'The Last Charge',
    blocks: [
      { p: 'Fort Blakeley fell on the afternoon of April 9, 1865. That same afternoon, in a village in Virginia, Robert E. Lee was signing the surrender of the Army of Northern Virginia to Grant. The two events were hours apart and a thousand miles apart, and neither side at Blakeley had any idea the other had happened. It has often been called the last major battle of the Civil War, and the last time two large forces of the war fought a stand-up engagement, the rebellion was already, in its heart, over.' },
      { pill: '/war-civil-war/eastern/appomattox', plabel: 'Appomattox: the surrender being signed that same afternoon' },
      { p: 'The fall of Blakeley sealed Mobile. With the eastern-shore forts gone and his outer works lost, Major General Dabney H. Maury (South) could not hold the city, and he pulled his remaining troops out rather than be trapped. On April 12, 1865, the mayor of Mobile rode out and surrendered the town to Canby’s forces. The last significant Confederate port on the Gulf of Mexico, the harbor the United States Navy had been trying to close since the summer before, was finally in Union hands.' },
      { h: 'Who took the last fort', eyebrow: 'The men at the wall' },
      { p: 'There is a hard symmetry in how the western war ended. The Confederacy had gone to war to keep Black people enslaved. The earthwork that fell in its last major battle was carried, in good part, by Black soldiers, thousands of them, many of them men who a few years earlier had been somebody’s legal property in this very part of the South, now crossing a minefield in United States uniforms to take the wall. The 5,000 men of the United States Colored Troops at Blakeley made up one of the heaviest concentrations of Black soldiers in any battle of the war, and they were there at the end of it, on Alabama ground, helping pull down the last fort of a country built to own them.' },
      { pill: '/war-civil-war/off-the-battlefield/emancipation', plabel: 'Emancipation: what those soldiers were fighting to make real' },
      { p: 'The rest came quickly. With Lee gone in Virginia and the western armies surrendering one after another through the late spring, the war wound down for good. Fort Blakeley does not carry the weight of Gettysburg or Antietam in the country’s memory, and the men who fought there did not know they were fighting the last of it. But the last large charge of the Civil War went in across an Alabama field at dusk, against a wall held by teenagers and the worn-down survivors of older battles, and it was carried by the very men the whole war had been fought over. The fighting that had begun four years before at a fort in a Southern harbor ended at another one, with the question that started it answered for good.' },
      { pill: '/war-civil-war/naval/fort-sumter', plabel: 'Fort Sumter: the fort where it all began, four years before' },
    ],
    meanwhile: { region: 'the country', title: 'Counting the cost', body: 'The men killed in front of Fort Blakeley fell in a battle whose outcome was already settled, in a war whose largest army had already surrendered, for a cause that had already lost. The dying did not stop the moment the result was clear. The soldiers who went down crossing that minefield at dusk were among the last to pay the full price of a conflict that had cost the country more than 600,000 lives, and they paid it within hours of its effective end.' },
  },
}

export function SectionNarrative({ id }: { id: string }) {
  return <BattleSectionReader sections={BLAKELEY_NARR} id={id} slug="fort-blakeley" battleName="Fort Blakeley" theatreId="west" theatreHref="/war-civil-war/western" battleId="w-blakeley" />
}
