'use client'

// Fort Stedman — battle sections. Produced through the war content pipeline
// (audits/war-content-pipeline.md): fact pack → author → fact-check + storytelling
// critic → revise. Data only; rendered by the shared <BattleSectionReader>.
//
// House-voice rules: no em-dashes; marquee names (Lee, Grant, Lincoln) carry no
// side-tag while every other side-affiliated person is tagged once on first
// mention per section; full rank spelled out on first appearance per section;
// no meta-narrator. Facts web-verified against American Battlefield Trust, NPS
// (Petersburg National Battlefield), and Wikipedia. The opening section leads
// with a {locator} establishing map. The only visual block is that locator;
// tactical maps and photos are a deferred follow-up.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'

const FORT_STEDMAN_NARR: Record<string, Narr> = {
  'last-card': {
    eyebrow: 'Fort Stedman · Lee’s last card',
    title: 'A general out of options',
    blocks: [
      { locator: {
        eyebrow: 'Where and when · March 1865',
        caption: 'Petersburg sits about 23 miles (37 km) south of Richmond, the rail hub that kept both the Confederate capital and Lee’s army fed. For nine months two armies had faced each other across miles of trenches here. Gordon’s target was Grant’s supply base at City Point, downriver to the northeast, where the Appomattox meets the James.',
        frame: { lonMin: -79.6, lonMax: -75.4, latMin: 36.3, latMax: 39.0 },
        states: [
          { name: 'Virginia', tone: 'focus', label: 'VIRGINIA', labelLon: -78.6, labelLat: 37.7 },
          { name: 'North Carolina' }, { name: 'Maryland' },
          { name: 'West Virginia' }, { name: 'Delaware' },
        ],
        dots: [
          { name: 'Petersburg', date: 'Mar 25, 1865', lat: 37.23, lon: -77.40, heavy: true, anchor: 'start' },
          { name: 'Richmond', lat: 37.54, lon: -77.43, color: '#8a8175', anchor: 'end' },
          { name: 'City Point', lat: 37.32, lon: -77.29, color: '#8a8175', anchor: 'end' },
          { name: 'Appomattox C.H.', lat: 37.38, lon: -78.80, color: '#8a8175', anchor: 'end' },
        ],
      } },
      { p: 'By the spring of 1865 the war in Virginia had narrowed to a single, grinding fact: the siege of Petersburg. For nine months the Army of Northern Virginia under Robert E. Lee had been pinned in a long arc of trenches around the city, the rail town just south of Richmond through which nearly all of Lee’s food and ammunition had to pass. Across from him, Ulysses S. Grant kept stretching the Union lines west, mile after mile, reaching around Lee’s right to cut the last railroads. Lee did not have the men to match the reach. He could only stretch his own thinning line until it tore.' },
      { p: 'Lee’s army was coming apart from the inside. The men in the trenches were hungry, ragged, and increasingly sick, and they were deserting by the hundreds, slipping across to the Union lines in the dark night after night. Every week the line grew thinner and the enemy’s grew longer. Lee could see the arithmetic as well as anyone: if he simply waited, Grant would either starve him out or work all the way around his flank, and the army would be trapped against the city with its escape routes cut.' },
      { p: 'The cause that army had been raised to defend was, at bottom, the preservation of slavery, and that cause was now visibly losing. Sherman was driving north through the Carolinas. The Confederate government in Richmond was making frantic, late gestures, even debating whether to put enslaved men into the ranks as soldiers. Lee’s one hope was no longer to win. It was to get his army out of the Petersburg trap intact, march southwest, and join General Joseph E. Johnston (South), who was trying to scrape together a force in North Carolina to face Sherman. Two Confederate armies together might last a while longer. One trapped army would not.' },
      { h: 'Gordon’s idea', eyebrow: 'Early March 1865' },
      { p: 'The man who thought he saw a way out was Major General John B. Gordon (South), one of Lee’s hardest-fighting corps commanders. After studying the Union works in his sector night after night, Gordon came to Lee with a plan. There was a Union fort, Fort Stedman, that sat unusually close to the Confederate line, in places only about 150 yards (140 m) away. If a column could rush it before dawn and break through, Gordon argued, his men could pour into the rear, seize the forts behind it, and drive on toward Grant’s great supply base at City Point, about 8 miles (13 km) to the northeast.' },
      { p: 'The point was not to hold the ground. It was to force Grant to pull troops away from his far left, the end of the line that was slowly strangling Lee, to deal with the sudden hole in his center. Contract the Union grip even for a day or two, Gordon reasoned, and Lee might be able to disengage the whole army and slip away south to Johnston. It was a long shot stacked on a long shot. Lee, out of better ideas, approved it. The attack would go in before first light on March 25.' },
    ],
    meanwhile: { region: 'City Point', title: 'Grant already has his own plan', body: 'Eight miles away at City Point, Grant was not waiting to be surprised. He had already set his own offensive in motion, ordering a hard push around Lee’s right flank to begin on March 29, four days off. Abraham Lincoln had come down from Washington and was staying near Grant’s headquarters, close enough to the front to hear the guns. Whatever Gordon broke open at dawn, it would be breaking against an army that was about to attack anyway.' },
  },

  'before-dawn': {
    eyebrow: 'Fort Stedman · The assault',
    title: 'Before dawn',
    blocks: [
      { p: 'The attack opened in darkness, about 4:15 in the morning on March 25, and it opened with a trick. Major General John B. Gordon (South) sent out small parties of picked men ahead of the main column, some of them carrying axes. Their job was to slip up to the Union picket line, the thin screen of sentries out in front of the main works, and clear a path through the obstacles. Petersburg’s trenches were fronted by chevaux-de-frise, long timber frames bristling with sharpened stakes, meant to break up any charge. The axemen were there to hack gaps in them quietly, before anyone in the fort knew the assault was coming.' },
      { p: 'To get close, some of the lead men posed as deserters. Confederate soldiers had been crossing over to the Union lines in such numbers all winter that a few shadowy figures coming toward the works in the dark were nothing remarkable, and the ruse let the leading parties get right up among the startled Union pickets before the shooting started. One sentry was overpowered. The surprise held just long enough.' },
      { p: 'Then Gordon’s main body rushed forward in the dark, swarmed over the cleared obstacles, and was inside Fort Stedman almost before the garrison could turn its guns around. The defenders fired what they could, but the fort fell fast. The attackers also took the artillery batteries on either side of it, the line of guns the Union called Battery X to the north and Batteries XI and XII to the south. Confederate gunners swung some of the captured cannon around and fired down the length of the Union trenches in both directions. For a moment, in the first gray of the morning, Gordon had done exactly what he set out to do: he had punched a clean hole through Grant’s line.' },
      { fig: '/war-img/fort-stedman-breakthrough.png', cap: 'Before dawn on March 25, Gordon’s column rushes Fort Stedman and the batteries beside it while Fort Haskell holds the southern flank.', credit: 'Stuff Happened map' },
      { h: 'The hole that led nowhere', eyebrow: 'After daylight' },
      { p: 'The plan came apart in the next stage. Gordon had organized special detachments, columns of about a hundred men each, to push straight on past Fort Stedman, find three forts he believed stood in the Union rear, and seize them to widen the breach toward City Point. The trouble was that those rear forts did not exist as Gordon pictured them. His columns went forward into a confusing maze of trenches and camps in the half-light, looking for strongpoints that were not there, and got lost. The breakthrough had no second act.' },
      { p: 'On the flanks, the Union line bent but did not break. Just south of the captured ground stood Fort Haskell, and its garrison did not give way. Union gunners there poured canister, tin cans packed with iron balls that turned a cannon into an enormous shotgun, into every Confederate rush that came at them, and held. To the north, other Union troops formed up across the trenches and stopped the attackers from rolling up the line that way. Instead of a widening flood, Gordon’s breakthrough became a shallow bulge, jammed and stalled, with daylight coming on fast.' },
      { p: 'It was in this confused first hour that the Union sector commander rode into the trap. Brevet Brigadier General Napoleon B. McLaughlen (North), responsible for the stretch of line around Fort Stedman, came up in the dark, ordered a counterattack that briefly clawed back one of the captured batteries, then rode on into Fort Stedman believing the breach sealed. He began calmly giving orders to the men around him, only to realize that the soldiers he was directing were Confederates who had taken the fort. He was captured on the spot and gave up his sword to Gordon.' },
    ],
    meanwhile: { region: 'the captured trenches', title: 'Hungry men and a closing window', body: 'Some of Gordon’s men did not press on at all. After a winter on starvation rations, soldiers who broke into the Union works found something they had not seen in months: full haversacks, coffee, packed commissary stores. A number of them stopped to eat. It was a small, human thing, and it cost minutes the attack did not have. The window for turning a lodgement into a breakout was measured in those minutes, and it was closing.' },
  },

  'crossfire': {
    eyebrow: 'Fort Stedman · The counterattack',
    title: 'The ring of guns',
    blocks: [
      { p: 'The Union army recovered quickly, because the man in charge that morning kept his head. With Major General George G. Meade (North) away at City Point, command of the Army of the Potomac fell to Major General John G. Parke (North), who also led the IX Corps holding this part of the line. Parke did not panic at the hole in his center. He ordered his reserve division forward to seal it and called up the reserve artillery, sending it onto a ridge behind the lost forts where the guns could fire straight into the lodgement.' },
      { p: 'The reserve division belonged to Brigadier General John F. Hartranft (North), and it was made up largely of new Pennsylvania regiments, some of them barely trained. Hartranft fed his regiments in piece by piece as they came up, first to slow the Confederates short of the supply railroad just behind the line, then to pen them in. By mid-morning he had built a curving wall of troops, something close to a mile and a half long, around the entire Confederate penetration. The bulge that was supposed to widen toward City Point was instead sealed inside a tightening ring.' },
      { fig: '/war-img/fort-stedman-ring.png', cap: 'By mid-morning Parke and Hartranft wall off the lodgement in a tightening ring of guns firing in from three sides.', credit: 'Stuff Happened map' },
      { h: 'The trap reverses', eyebrow: 'Around 7:45 a.m.' },
      { p: 'Now the ground that had fallen so easily became a killing pocket. The captured forts sat at the front of a Union semicircle, with guns on the flanks and on the ridge behind, all of them able to fire into the same patch of trench at once. The Confederates packed into Fort Stedman and the batteries were under fire from three sides with almost nowhere to shelter. The artillery that had looked like a prize at dawn had become a cage.' },
      { p: 'A little before 8:00 in the morning, Hartranft ordered his ring forward in a general assault. His Pennsylvanians swept in and retook Fort Stedman and the batteries on either side, and the lodgement collapsed. For the Confederates still inside, the choice was now to surrender where they stood or to run back across the open ground between the lines, the same few hundred yards they had crossed in the dark, now in full daylight under the fire of every Union gun that could reach it. Hundreds were shot down crossing back. Hundreds more, deciding the run was worse than the cage, simply threw down their rifles and gave themselves up.' },
      { fig: '/war-img/fort-stedman-recapture.png', cap: 'Hartranft’s assault retakes the forts and drives Gordon’s survivors back across the open ground between the lines.', credit: 'Stuff Happened map' },
      { p: 'Gordon, watching the attack die with Lee himself now looking on, pulled back the men he could. By about 8:00 a.m. it was over. The whole affair, from the first rush in the dark to the last man scrambling back into the Confederate trenches, had lasted roughly four hours, and the Union line stood almost exactly where it had at midnight.' },
    ],
    meanwhile: { region: 'down the line', title: 'Grant turns the failure into a gain', body: 'Grant did not let the morning end as a wash. While Gordon’s men were being driven out of Fort Stedman, Union troops elsewhere along the front pressed forward and seized stretches of the Confederate picket line southwest of Petersburg, ground that would matter a great deal in a week. Lee had thinned his right to find the men for Gordon’s gamble, and the Union army took back more than it had briefly lost. The attack meant to buy Lee room had cost him ground instead.' },
  },

  'the-reckoning': {
    eyebrow: 'Fort Stedman · The cost & the meaning',
    title: 'The last sortie',
    blocks: [
      { p: 'The numbers told the story of a gamble that failed badly. The Union lost about 1,044 men at Fort Stedman, killed, wounded, and captured. The Confederates lost roughly 4,000, with around a thousand of them taken prisoner in the collapse. For an army that could no longer replace anyone, those were men Lee could not afford, thrown away in a single morning on an attack that gained nothing and held nothing. The line he had broken at dawn he had handed back by breakfast, and he had given up ground elsewhere to do it.' },
      { p: 'Fort Stedman was the last offensive the Army of Northern Virginia would ever launch. After nearly four years of carrying the war to the enemy, Lee’s one remaining stroke had been a pre-dawn lunge that spent itself in four hours, and there would not be another. From here to the end, his army would only retreat and defend.' },
      { h: 'A week to the surrender', eyebrow: 'What came next' },
      { p: 'The end came fast. Grant’s own planned offensive opened within days, swinging hard around Lee’s right, the flank Lee had thinned to feed Gordon’s attack. On April 1 the Confederate line cracked at Five Forks, west of Petersburg, and the next day Grant ordered an all-out assault straight through the trenches. The line that had held for nine months gave way at last.' },
      { pill: '/war-civil-war/eastern/five-forks', plabel: 'Five Forks: the flank gives way, April 1' },
      { pill: '/war-civil-war/eastern/third-petersburg', plabel: 'The fall of Petersburg: the line breaks, April 2' },
      { p: 'On the night of April 2, Lee abandoned Petersburg and Richmond and marched west, hoping even then to slip away to North Carolina, exactly the escape Fort Stedman had been meant to make possible. He never reached it. Grant’s army pursued, cut across his front, and ran him down. On April 9, 1865, just over two weeks after the failed sortie at Fort Stedman, Lee surrendered the Army of Northern Virginia at Appomattox Court House.' },
      { pill: '/war-civil-war/eastern/appomattox', plabel: 'Appomattox: where the army laid down its arms' },
      { p: 'Looking back, Fort Stedman reads less like a battle than like the last move of a player who has already lost. It was a clever plan, well begun and gone in a morning, and its real meaning was the verdict it delivered. The army that had marched into Maryland and Pennsylvania, that had beaten back Union offensive after offensive for three years, no longer had the strength to break a siege line and hold it for an hour. After Fort Stedman, the only question left was how the war would end, not whether.' },
    ],
    meanwhile: { region: 'City Point', title: 'A little rumpus up the line', body: 'Lincoln was at City Point that morning, close enough to hear the guns. The fighting was over so quickly that a troop review scheduled for the day went ahead in the afternoon as planned, the great Confederate sortie having changed nothing the army did with the rest of its day. The largest attack Lee’s army would ever make again had failed before lunch.' },
  },
}

export function SectionNarrative({ id }: { id: string }) {
  return <BattleSectionReader sections={FORT_STEDMAN_NARR} id={id} slug="fort-stedman" battleName="Fort Stedman" theatreId="east" theatreHref="/war-civil-war/eastern" battleId="e-fortstedman" />
}
