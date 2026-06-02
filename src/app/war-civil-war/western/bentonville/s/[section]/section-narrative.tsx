'use client'

// Bentonville — battle sections. Produced through the war content pipeline
// (audits/war-content-pipeline.md): fact pack → author → fact-check + storytelling
// critic → revise. Data only; rendered by the shared <BattleSectionReader>.
//
// House-voice rules (locked 2026-06-01): no reader-facing em-dashes; marquee names
// (Sherman, Lee, Grant) carry no side-tag while every other side-affiliated person
// is tagged once on first mention per section; full rank spelled out on first
// appearance per section; the cause (slavery) named once, plainly; cross-refs are
// pills to allowlisted routes. Facts web-verified against the American Battlefield
// Trust, NPS, and Wikipedia. The opening section leads with a {locator} establishing
// map (real coordinates). No {fig} blocks (tactical maps + photos are a deferred
// follow-up); the {locator} is the only visual.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'

const BENTONVILLE_NARR: Record<string, Narr> = {
  'last-throw': {
    eyebrow: 'Bentonville · The last roll of the dice',
    title: 'The Last Throw',
    blocks: [
      { locator: {
        eyebrow: 'Where and when · March 1865',
        caption: 'Bentonville sits in the flat pine country of central North Carolina, on the Goldsboro Road near Mill Creek. William T. Sherman was driving northeast out of South Carolina toward Goldsboro, where two more Union armies waited to join him. Joseph E. Johnston (South) gathered the scraps of the Confederacy in the West and threw them at one wing of Sherman’s column here, a long day’s march short of the junction.',
        frame: { lonMin: -79.6, lonMax: -77.0, latMin: 34.8, latMax: 36.4 },
        states: [
          { name: 'North Carolina', tone: 'focus', label: 'NORTH CAROLINA', labelLon: -78.6, labelLat: 36.1 },
          { name: 'South Carolina' }, { name: 'Virginia' }, { name: 'Georgia' }, { name: 'Tennessee' },
        ],
        dots: [
          { name: 'Bentonville', date: 'Mar 19–21, 1865', lat: 35.31, lon: -78.32, heavy: true, anchor: 'end' },
          { name: 'Goldsboro', lat: 35.38, lon: -77.99, color: '#8a8175', anchor: 'start' },
          { name: 'Raleigh', lat: 35.78, lon: -78.64, color: '#8a8175', anchor: 'end' },
          { name: 'Smithfield', lat: 35.51, lon: -78.34, color: '#8a8175', anchor: 'end' },
        ],
      } },
      { p: 'By the early spring of 1865, the war the South had started to protect slavery was visibly ending, and everyone could read the arithmetic. Robert E. Lee was pinned in the trenches around Petersburg, Virginia, his army wasting away. And in the Carolinas, William T. Sherman was loose. He had burned a path across Georgia to the sea, taken Savannah as a Christmas gift for Abraham Lincoln, then turned north into South Carolina, the cradle of secession, and wrecked it. Now he was in North Carolina, marching for the town of Goldsboro, where two more Union armies were waiting to fold into his. Once they joined, he would have well over eighty thousand men and a clear road into Lee’s rear.' },
      { p: 'The man sent to stop him had almost nothing to do it with. General Joseph E. Johnston (South) had been recalled to command in February 1865 by Lee himself, now general-in-chief of all Confederate armies, and handed an impossible job: scrape together the broken fragments of Confederate forces scattered across the Carolinas and somehow blunt the unstoppable column coming up from the south. Johnston gathered the remnant of the Army of Tennessee, the western army that had been smashed at Franklin and Nashville the previous winter, along with garrison troops, militia, and Wade Hampton’s (South) cavalry. All told it came to roughly twenty thousand men, many of them old, young, or already beaten once.' },
      { pill: '/war-civil-war/western/nashville', plabel: 'Nashville: where the army Johnston now led was wrecked' },
      { h: 'A column split wide open', eyebrow: 'Sherman’s mistake' },
      { p: 'Sherman gave Johnston the one thing a weak army needs against a strong one: a target it could fight on even terms. To move faster and forage across more country, Sherman marched his sixty thousand men in two wings on separate roads, often a full day’s march apart. The Left Wing, the Army of Georgia under Major General Henry W. Slocum (North), pushed up the Goldsboro Road. The Right Wing, the Army of the Tennessee under Major General Oliver O. Howard (North), was off on another road to the south. For a day or two, Slocum’s thirty thousand were on their own. Sherman, riding with Howard’s wing, was so sure the campaign was as good as over that when a subordinate warned of trouble ahead, he answered that there was nothing in their front but rebel cavalry.' },
      { p: 'He was wrong. Hampton’s troopers had been falling back slowly up the Goldsboro Road on purpose, drawing Slocum forward toward a place where Johnston’s whole gathered army lay hidden and waiting. Near a farm owned by the Cole family, a couple of miles south of the village of Bentonville, Johnston had bent his line into a great hook across the road, ready to swing shut on the head of the unsuspecting Union column. He had managed the one thing the South could almost never manage by 1865: to concentrate. For one afternoon, on one road, the beaten Confederacy would outnumber the men in front of it.' },
    ],
    meanwhile: { region: 'Petersburg, Virginia', title: 'The clock running out up north', body: 'Everything Johnston did at Bentonville was racing a clock he could not see the face of. Two hundred miles north, Lee was holding the Petersburg trenches with an army melting away by desertion and starvation, and the only hope either Confederate general had left was a long shot: that Lee might break free of Grant, slip south, and join Johnston so the two armies together could beat Sherman before being beaten separately. For that to mean anything, Johnston had to keep Sherman busy and keep an army in being. Within two weeks of Bentonville, Petersburg would fall and Lee would be on the run. The window Johnston was fighting to hold open was already closing.' },
  },

  'cole-farm': {
    eyebrow: 'Bentonville · Day one',
    title: 'The Attack at Cole’s Farm',
    blocks: [
      { p: 'On the morning of Sunday, March 19, 1865, Major General Henry W. Slocum’s (North) Left Wing came up the Goldsboro Road expecting to brush aside a little cavalry. Instead they ran into a dug-in line that would not move. Brigadier General William P. Carlin’s (North) division of the Fourteenth Corps deployed and pushed forward against what the men assumed were more of Wade Hampton’s (South) horsemen, and found infantry, artillery, and earthworks. For a few hours the two sides skirmished while Slocum slowly, reluctantly, came around to the truth: this was not a rear guard. This was Joseph E. Johnston’s (South) whole army, and it was waiting for him.' },
      { p: 'At about a quarter to three in the afternoon, Johnston sprang the trap. The assault was led on the field by Lieutenant General William J. Hardee (South), a respected old soldier who had literally written the army’s infantry tactics manual before the war. His men came out of the woods in a long sweeping line and fell on Carlin’s exposed division. A Union soldier remembered that the Confederates came down on them like an avalanche. Carlin’s line, poorly placed and caught in the open, broke almost at once. Men were shot down as they scrambled out of a ravine; a Union battery lost three of its four guns. The head of Slocum’s column was coming apart.' },
      { p: 'The Confederate attack had real weight behind it. The remnant of the Army of Tennessee, the men who had survived Franklin and Nashville, went in alongside Major General Robert F. Hoke’s (South) division, and for a stretch of the afternoon they rolled the Union left back through the woods and fields. Old soldiers on the Confederate side said afterward it was the last time the western army charged like the army it had once been. For an hour or two on that one road, the dying Confederacy looked, briefly, like it might win something.' },
      { fig: '/war-img/bentonville-cole-farm.png', cap: 'Day one, March 19: Johnston’s hook line springs the trap on the Goldsboro Road, Hardee and Hoke and the Army of Tennessee rolling Carlin back while Morgan’s stand saves the wing at the Morris farm.', credit: 'Stuff Happened map' },
      { h: 'Morgan’s division will not break', eyebrow: 'The stand that saved the wing' },
      { p: 'What stopped it was a single Union division that refused to come apart. To the south of the broken line, the division of Brigadier General James D. Morgan (North) held a patch of woods and threw back charge after charge, even as Confederate troops worked around behind it and very nearly surrounded it. Morgan’s men fought in two directions at once, front and rear, and would not give way. Their stand bought the time the rest of the wing needed to pull itself together on higher ground around the Morris farm, where Union batteries massed and the fighting went hand to hand.' },
      { p: 'A Union private caught the feel of that late afternoon, when it seemed as though all was lost and the rebellious hosts came pressing on. But the line on the high ground held. Fresh brigades from the Twentieth Corps came up at the run, the massed artillery tore the front of each Confederate wave to pieces, and as the light failed the attacks faltered. A correspondent watching the guns wrote that the smoke settled down over them as it grew dark, and the flashes seen through it seemed like a steady, burning fire. By full night Johnston’s men had spent their strength and pulled back to where they had started. The hardest single afternoon of fighting in North Carolina’s history was over, and the Union line, though badly mauled, was unbroken.' },
    ],
    meanwhile: { region: 'Sherman’s headquarters', title: 'The general who rode the wrong way', body: 'Sherman had spent the day with the other wing, hours away, convinced he was chasing a beaten enemy toward Raleigh. The first urgent messages from Slocum reached him to find that the army he thought was running had instead turned and struck the half of his force he had left strung out on its own. Around five in the evening he finally grasped the size of it and began turning his whole command toward the sound of the guns. The man who had marched almost untouched from Atlanta to the sea had, for one afternoon, very nearly handed Johnston the gift of a wing caught alone.' },
  },

  'whole-army-arrives': {
    eyebrow: 'Bentonville · Day two',
    title: 'Sherman’s Whole Army Comes Up',
    blocks: [
      { p: 'March 20 belonged to arithmetic. Through the morning, Major General Oliver O. Howard’s (North) Right Wing swung north toward the fighting, marching to close the gap that had nearly cost Sherman a wing the day before. By midday Howard’s columns were filing onto the field on Slocum’s right, and the brief window in which the Confederacy had outnumbered anything slammed shut. Sherman now had close to sixty thousand men on the ground against Joseph E. Johnston’s (South) twenty thousand, a margin of nearly three to one.' },
      { fig: '/war-img/bentonville-howard-arrives.png', cap: 'Day two, March 20: Howard’s wing files onto Slocum’s flank and the odds slam shut while Johnston bends his line back, Hoke guarding the flank, the Mill Creek bridge at his back.', credit: 'Stuff Happened map' },
      { p: 'By every rule of war Johnston should have been gone already. He had made his attack, it had failed to break the wing, and now the rest of Sherman’s army was arriving to crush him against the only crossing at his back, the bridge over Mill Creek, the single road by which his whole army could escape. A defeated army does not linger a day’s march from a force three times its size with one bridge for a back door. Yet Johnston stayed. He stretched and bent his outnumbered line, pulling Major General Robert F. Hoke’s (South) division back to guard his flank, and held his ground through March 20 while heavy skirmishing rolled along the front.' },
      { p: 'His stated reason was that he could not yet get his wounded away, and there were many of them. But there was more to it. Johnston had spent the war being cautious, the general always accused of retreating, and Lee was counting on him to keep Sherman occupied. Lingering kept the threat alive a little longer. It was also a gambler holding his seat at a table he had already lost, unwilling to admit the hand was over. Sherman, for his part, did not want to throw his army headlong at entrenched men and pay in blood for a victory the calendar was about to hand him for free. So the two armies sat a few hundred yards apart in the rain, and the second day passed in skirmish fire while Johnston’s wounded were carried back across Mill Creek.' },
      { pill: '/war-civil-war/eastern/second-petersburg', plabel: 'Petersburg: the siege that pinned Lee while Sherman ran loose' },
    ],
    meanwhile: { region: 'the Harper house', title: 'A farmhouse full of the wounded', body: 'A few hundred yards behind the Union line stood the home of the Harper family, an ordinary North Carolina farmhouse that the army turned into a field hospital. Surgeons worked through both armies’ wounded on its floors and in its yard, the way thousands of farmhouses had been used across four years of war. Hundreds of men were treated there; Confederate dead were buried close by, near the family cemetery. The house still stands. It is the quiet center of the battlefield, the place where the cost of the last big fight was paid out one stretcher at a time.' },
  },

  'mowers-charge': {
    eyebrow: 'Bentonville · Day three',
    title: 'Mower’s Charge',
    blocks: [
      { p: 'By March 21, Sherman’s patience with Joseph E. Johnston’s (South) refusal to leave had worn thin. The day came on wet, a soaking rain over the pine woods, and the two armies traded fire across their lines with no one expecting much. Then one Union general decided, more or less on his own, to go looking for a fight. Major General Joseph A. Mower (North), a hard-driving division commander in Howard’s wing, asked leave to push forward on what he called a reconnaissance and turned it into a full attack. He took two brigades and drove straight at the weak Confederate left, the thinly held ground covering the Mill Creek bridge, Johnston’s one road out.' },
      { p: 'It nearly ended the war’s last battle in disaster for the South. Mower’s men punched through the cavalry and skirmishers on that flank and rolled up to within about a mile of the bridge. They overran Johnston’s own headquarters, sending the general and his staff scrambling to get away. For a few minutes the single crossing that the entire Confederate army needed to escape was almost in Union hands. Had Mower reached it, Johnston’s army, the last real army the Confederacy had outside Virginia, might have been trapped on the wrong side of the creek and destroyed.' },
      { p: 'Two things saved it. Lieutenant General William J. Hardee (South) threw together a scratch counterattack from whatever he could grab, including cavalry, and hit Mower’s exposed brigades hard enough to stop them and shove them back. And Sherman, true to his decision not to fight a costly general battle when the war was nearly won, ordered Mower to break off and return to the main line. Sherman later admitted in his memoirs that calling Mower back was a mistake, that he had let slip a chance to cut off and perhaps capture Johnston’s whole army. The bridge stayed in Confederate hands. The escape route held.' },
      { fig: '/war-img/bentonville-mowers-charge.png', cap: 'Day three, March 21: Mower drives through the thin Confederate left toward the Mill Creek bridge and Johnston’s headquarters before Hardee’s scratch counterattack shoves him back.', credit: 'Stuff Happened map' },
      { h: 'Hardee’s boy', eyebrow: 'The last price of the last battle' },
      { p: 'Hardee’s counterstroke saved the army and cost him his son. His boy Willie, sixteen years old, had begged to join the fight, and only hours before the charge Hardee had reluctantly let him enlist in a Texas cavalry regiment. The regiment was among the troops thrown in to stop Mower. Willie Hardee was shot during the action and died days later. A general who had saved an army at the very end of a lost war buried his teenage son for it, in one of the war’s last battles, with the surrender already in sight.' },
      { fig: '/war-img/bentonville-withdrawal.png', cap: 'That night Johnston slips his whole army north across the Mill Creek bridge in the dark and burns it behind him, leaving Hampton’s cavalry to screen the rear.', credit: 'Stuff Happened map' },
    ],
    meanwhile: { region: 'across Mill Creek', title: 'A quiet army slips away', body: 'That night, March 21 into the 22nd, Johnston gave up the field he had clung to for three days. Under cover of darkness he pulled his whole army back across the Mill Creek bridge, the crossing Mower had nearly taken, and burned it behind him, leaving cavalry to screen the rear. The Union army did not even realize he was gone until the withdrawal was complete. Sherman chose not to chase him hard. He had what he wanted: a clear road to Goldsboro and the two armies waiting there. The last large battle of the Civil War ended not with a surrender on the field but with a beaten army slipping quietly away in the dark.' },
  },

  'reckoning': {
    eyebrow: 'Bentonville · The cost & the meaning',
    title: 'The End in Sight',
    blocks: [
      { p: 'The three days at Bentonville cost the two sides something over four thousand men. The Union counted 1,527 casualties, killed, wounded, and missing; the Confederates lost 2,606, a far heavier blow against a far smaller army, close to a tenth of everything Joseph E. Johnston (South) had. It was the largest battle ever fought on North Carolina soil, and it was the last time a Confederate army would mount a full offensive in the war. Everything after Bentonville was retreat, collapse, and surrender.' },
      { p: 'In purely military terms the battle settled nothing that was not already settled. Johnston had gambled that he could catch and maul one wing of Sherman’s divided column, and for one afternoon at Cole’s farm he nearly did. But the wing held, the other wing arrived, and three to one is three to one. Sherman shrugged off the check, gathered his army, and marched on to Goldsboro to join the forces waiting there, exactly as he had intended before Johnston ever struck. The Carolinas Campaign, which Sherman thought a harder feat than his celebrated March to the Sea, rolled on essentially unchanged.' },
      { h: 'The collapse, all at once', eyebrow: 'Two weeks in April' },
      { p: 'What made Bentonville the war’s ending was not the battle but the calendar. Within days, the eastern front that Johnston had been fighting to buy time for simply gave way. On April 1, Lee’s line west of Petersburg was shattered at Five Forks. On April 2 and 3, Petersburg and the Confederate capital at Richmond fell, and Lee’s army abandoned the trenches and ran west. The one hope behind everything Johnston had done, that Lee might break free and come south to join him, was gone. On April 9, Lee surrendered the Army of Northern Virginia to Ulysses S. Grant at Appomattox Court House.' },
      { pill: '/war-civil-war/eastern/five-forks', plabel: 'Five Forks: the break that doomed Petersburg' },
      { pill: '/war-civil-war/eastern/appomattox', plabel: 'Appomattox: Lee surrenders the army Johnston was waiting for' },
      { h: 'Bennett Place', eyebrow: 'April 26, 1865' },
      { p: 'With Lee gone, Johnston’s little army had nothing left to fight for and no army left to join. President Jefferson Davis, fleeing south, wanted to fight on; Johnston, the soldier, knew better, and told his government plainly that further resistance would only be murder. On April 26, 1865, at a small farmhouse called Bennett Place near Durham, North Carolina, Johnston surrendered to William T. Sherman, giving up not just his own force but all remaining Confederate troops across the Carolinas, Georgia, and Florida, nearly ninety thousand men, the largest surrender of the war.' },
      { p: 'The terms were generous, in keeping with the spirit Grant had shown Lee. The shooting in the East was over. Johnston and Sherman, who had spent the campaign trying to destroy each other, came to respect one another deeply; years later Johnston would say of Sherman’s army that there had been no such army in existence since the days of Julius Caesar. Bentonville was the last full battle of that army’s long road, the final time the Confederacy gathered itself to strike. After it, there was only the surrender, and the long reckoning with what the war had been fought over.' },
      { pill: '/war-civil-war/off-the-battlefield/reckoning', plabel: 'The reckoning: what the war settled, and what it left undone' },
    ],
    meanwhile: { region: 'the country', title: 'The guns go quiet', body: 'In the space of one April, four years of war ran out. Petersburg and Richmond fell, Lee surrendered at Appomattox, Lincoln was murdered in a Washington theater five days later, and Johnston laid down the last great Confederate army at a North Carolina farmhouse. Bentonville stands at the front edge of that collapse: the final time the South attacked, fought before anyone knew how fast the end would come. The men who fell in the pine woods near Cole’s farm were among the last to die in a war that, by the time they were buried, was effectively already over.' },
  },
}

export function SectionNarrative({ id }: { id: string }) {
  return <BattleSectionReader sections={BENTONVILLE_NARR} id={id} slug="bentonville" battleName="Bentonville" theatreId="west" theatreHref="/war-civil-war/western" battleId="w-bentonville" accent="#1d4ed8" />
}
