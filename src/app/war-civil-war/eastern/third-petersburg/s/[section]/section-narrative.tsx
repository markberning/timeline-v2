'use client'

// Third Petersburg (The Breakthrough) — battle sections. Produced through the war
// content pipeline (audits/war-content-pipeline.md): fact pack → author →
// fact-check + storytelling critic → revise. Data only; rendered by the shared
// <BattleSectionReader>.
//
// House-voice rules enforced: no em-dashes in reader-facing strings; marquee names
// (Lee, Grant, Lincoln, Jefferson Davis) carry no side-tag, every other
// side-affiliated person tagged once on first mention per section; full rank
// spelled out on first appearance per section; cross-refs are pills. Facts
// web-verified against American Battlefield Trust, NPS, and Wikipedia.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'

const PETERSBURG3_NARR: Record<string, Narr> = {
  'the-siege': {
    eyebrow: 'Third Petersburg · The end of the siege',
    title: 'Nine months in the trenches',
    blocks: [
      { locator: {
        eyebrow: 'Where and when · April 1865',
        caption: 'Petersburg sits about 23 miles (37 km) south of Richmond, the Confederate capital, on the Appomattox River. Whoever held Petersburg held the railroads that fed Richmond, so for nine months Grant pinned Lee against both cities behind miles of trench. On April 1 Sheridan broke the Confederate right at Five Forks, out to the southwest; the next dawn the whole Union line came forward.',
        frame: { lonMin: -79.6, lonMax: -75.6, latMin: 36.2, latMax: 38.6 },
        states: [
          { name: 'Virginia', tone: 'focus', label: 'VIRGINIA', labelLon: -76.1, labelLat: 36.6 },
          { name: 'North Carolina', label: 'NORTH CAROLINA', labelLon: -79.2, labelLat: 36.4, labelSize: 13 },
          { name: 'West Virginia' },
          { name: 'Maryland', label: 'MARYLAND', labelLon: -76.1, labelLat: 38.4, labelSize: 13 },
        ],
        dots: [
          { name: 'Petersburg', date: 'Apr 2, 1865', lat: 37.23, lon: -77.40, heavy: true, anchor: 'start' },
          { name: 'Richmond', lat: 37.54, lon: -77.44, color: '#8a8175', anchor: 'end' },
          { name: 'Five Forks', lat: 37.13, lon: -77.62, color: '#8a8175', anchor: 'end' },
          { name: 'Appomattox C.H.', lat: 37.38, lon: -78.80, color: '#8a8175', anchor: 'end' },
        ],
      } },
      { p: 'By the spring of 1865 the war in the East had narrowed to a single stretch of Virginia earth. For nine months Lieutenant General Ulysses S. Grant had held Robert E. Lee fast in front of Petersburg, a railroad town about 23 miles (37 km) south of the Confederate capital at Richmond. This was not a battle in the open field. It was a siege: two armies dug into facing lines of trench and earthwork that ran for more than 30 miles (48 km), the longest fortified front the continent had ever seen.' },
      { p: 'Petersburg mattered because of its railroads. Five lines met there, and through them came most of the food and supply that kept Richmond and Lee’s Army of Northern Virginia alive. Grant could not storm the works cheaply, so he did something slower and surer instead. He reached west, again and again, stretching his lines to cut the railroads one at a time and force Lee to stretch with him. Lee had fewer men with every passing month, and a longer line to cover. The arithmetic was running out.' },
      { p: 'Lee knew it. His army was hungry, ragged, and shrinking as men slipped away home. In late March he gambled on a breakout, a dawn assault on the Union line east of town meant to crack Grant’s grip and free the army to march south. It failed, and it cost him men he could not replace.' },
      { pill: '/war-civil-war/eastern/fort-stedman', plabel: 'Fort Stedman: Lee’s last gamble, two weeks before the end' },
      { p: 'With that gone, Grant pressed the western flank in earnest. On April 1, out beyond the end of the trenches at a crossroads called Five Forks, Major General Philip H. Sheridan (North) smashed the Confederate right under Major General George Pickett (South), taking thousands of prisoners and the road to the last open railroad. When the news reached him, Grant did not wait for morning to plan. He ordered the whole army to assault the Petersburg lines at first light.' },
      { pill: '/war-civil-war/eastern/five-forks', plabel: 'Five Forks: the defeat that opened the door' },
    ],
    meanwhile: { region: 'Richmond', title: 'A capital living on borrowed time', body: 'In Richmond, the Confederate government had spent the winter watching its world contract. Inflation had gutted the currency, the railroads bringing food were being cut one by one, and the news from every front was bad. Jefferson Davis still spoke of carrying the war on, but the city he governed was a capital that could no longer feed itself, kept alive only by the thinning gray line in the mud at Petersburg, 23 miles to the south.' },
  },

  'the-breakthrough': {
    eyebrow: 'Third Petersburg · Before dawn, April 2',
    title: 'The breakthrough',
    blocks: [
      { p: 'It was still dark on Sunday, April 2, 1865, when the signal gun fired from Fort Fisher, one of the Union works in the line. At about 4:40 in the morning, the men of the Sixth Corps rose out of the gloom and went forward in a single great wedge, thousands of them packed shoulder to shoulder, aimed at one point in the Confederate trenches southwest of town.' },
      { p: 'The corps was led by Major General Horatio G. Wright (North), and the leading division belonged to Brigadier General George W. Getty (North), with the Vermont Brigade out in front. They crossed the open ground in the dark under a scattering fire, reached the works, tore through the sharpened stakes the defenders had planted, and climbed over. The thin gray line holding that stretch had no depth and no reserve. It came apart almost at once. One Union account said the resistance was swept away "like chaff before a tornado." By a little after five o’clock the trenches were broken wide open and the defenders were running.' },
      { fig: '/war-img/third-petersburg-breakthrough.png', cap: 'Before dawn on April 2, Wright’s Sixth Corps drives a wedge through A. P. Hill’s line southwest of Petersburg as Parke and Humphreys strike the works at once.', credit: 'Stuff Happened map' },
      { p: 'The lines that broke belonged to the corps of Lieutenant General A. P. Hill (South), one of Lee’s most trusted commanders. Hill had been on sick leave and had only just returned to duty. When the firing told him his front had given way, he rode out with a single staff officer to find his men and rally them. Instead he rode into the chaos of the collapse and met two Union soldiers of the 138th Pennsylvania, Corporal John W. Mauk and Private Daniel Wolford, who had pushed forward through the broken line. Hill demanded their surrender; they leveled their rifles and fired, and he was killed instantly. When word reached Lee, he is said to have answered quietly that Hill was at rest now, and they who were left were the ones to be pitied.' },
      { p: 'Word of the disaster went to Lee at his headquarters at the Turnbull house, west of town. He could see for himself what it meant. The Sixth Corps had cut clean through the heart of his line and was rolling up the trenches in both directions, and behind it more Union corps were pouring through the gap. There was no patching this. The siege that had held for nine months had broken in twenty minutes.' },
    ],
    meanwhile: { region: 'the rest of the line', title: 'The whole front comes forward', body: 'Wright’s corps was the spearhead, but it was not alone. To the east, Major General John G. Parke (North) and the Ninth Corps stormed the strong works around Fort Mahone in some of the day’s hardest close fighting, and Major General Andrew A. Humphreys (North) drove the Second Corps in on the west. Grant had not aimed one blow at one spot. He had thrown his whole army at the line at once, so that wherever it cracked, there were fresh men behind to pour through.' },
  },

  'fort-gregg': {
    eyebrow: 'Third Petersburg · Early afternoon',
    title: 'The stand at Fort Gregg',
    blocks: [
      { p: 'The breakthrough had torn the line open, but it had not yet taken Petersburg. Between the gap and the town stood two small earthen forts, Fort Gregg and Fort Whitworth, and behind them Lee was scrambling to throw together a last inner line to cover the streets while the army got away. If the forts fell quickly, Union troops would be in Petersburg by afternoon and might cut off the retreat entirely. So the handful of men inside them were asked to buy time with their lives.' },
      { p: 'Fort Gregg was held by something like 300 to 350 men, many of them Mississippians, with a couple of guns. Coming at them was the Twenty-Fourth Corps of the Army of the James, under Major General John Gibbon (North), thousands strong, with United States Colored Troops in the supporting lines. Gibbon’s brigades crossed the open ground and hit the fort in waves. The defenders fired into them at point-blank range, the attackers fell back, re-formed, and came again, and the fighting at the parapet turned to clubbed muskets and bayonets and fists.' },
      { p: 'It has been remembered since as a kind of Confederate Alamo. Gibbon’s men came on around one o’clock in the afternoon, and the garrison held for close to two hours against odds that could only end one way. When the fort was finally carried, around a quarter to three, most of the defenders were dead, wounded, or taken. But the hours they bought were the point. They gave Lee the daylight he needed to pull his shattered army back behind the inner works and ready the roads west. Petersburg would not fall that evening after all.' },
      { p: 'Out beyond the western flank, the Sixth Corps had not stopped at the trenches. Wright’s men wheeled and drove on to the South Side Railroad, the last line into Petersburg from the west, and tore it up. With that, the final artery feeding Lee’s army and the capital was cut. There was nothing left to hold for.' },
      { fig: '/war-img/third-petersburg-fort-gregg.png', cap: 'Gibbon’s corps storms Fort Gregg and Fort Whitworth while Wright wheels to cut the South Side Railroad, the last line into Petersburg.', credit: 'Stuff Happened map' },
    ],
    meanwhile: { region: 'the defenders', title: 'Time bought in blood', body: 'The men in Fort Gregg were not trying to win. There was no winning the day by then, and they knew it. They were spending themselves to slow the Union tide by an hour, so the rest of the army could get clear. It is one of the war’s clearest pictures of what a rear guard is for: a small group of soldiers asked to stand in a place they cannot hold, against a force that will certainly take it, for the sake of the men behind them already on the road.' },
  },

  'fall-and-flight': {
    eyebrow: 'Third Petersburg · That night and after',
    title: 'The fall and the flight',
    blocks: [
      { p: 'Through the afternoon Lee made his decision and sent it to Richmond. The telegram to President Jefferson Davis reached him during Sunday services at St. Paul’s Church: Petersburg and Richmond could no longer be held, and both must be evacuated that night. The government packed what records and treasury it could onto trains and fled south. Behind it, soldiers and mobs set fire to warehouses and bridges, and the fire spread until much of the business district of the Confederate capital burned. On the morning of April 3, Union troops, many of them United States Colored Troops, marched into Richmond and raised the United States flag over the capitol.' },
      { p: 'Petersburg fell the same morning. After dark on April 2, Lee pulled his army out of the works it had held for nine months and started west along the north bank of the Appomattox River, the four wings of his command converging toward Amelia Court House where he hoped to find rations and turn south to join the last Confederate army in North Carolina. The Army of Northern Virginia was on the road at last, in the open, exactly where Grant had spent a year trying to put it.' },
      { fig: '/war-img/third-petersburg-fall-and-flight.png', cap: 'After dark Lee abandons Petersburg and marches west along the north bank of the Appomattox River toward Amelia Court House with Grant in pursuit.', credit: 'Stuff Happened map' },
      { p: 'The fight at Petersburg cost the two armies something on the order of 7,700 men together over the day, with Union losses around 3,500 and Confederate losses around 4,250, many of the latter taken prisoner as the line collapsed. But the casualty count is almost beside the point. April 2 ended the siege, took the railroad town and the capital it fed, killed one of Lee’s ablest generals, and put the Army of Northern Virginia in flight with a stronger army at its heels.' },
      { p: 'That flight had one week to run. Grant’s columns pursued hard, racing along the railroads to get in front of the retreat. The promised rations never came, the roads turned to confusion, and at every river crossing the Union cavalry and infantry closed a little tighter. On April 9, surrounded and out of options near a village called Appomattox Court House, Lee surrendered the Army of Northern Virginia to Grant. The war in Virginia, and with it the cause of the slaveholding republic the Confederacy had been founded to defend, was over. The breakthrough at Petersburg was the blow that started the week that ended it.' },
      { pill: '/war-civil-war/eastern/appomattox', plabel: 'Appomattox: the surrender, one week later' },
    ],
    meanwhile: { region: 'Washington', title: 'The president comes to the ruins', body: 'On April 4, two days after the breakthrough, Abraham Lincoln walked the smoldering streets of captured Richmond, almost unguarded, with crowds of newly freed people pressing around him. He sat for a few minutes in the chair Jefferson Davis had used in the Confederate executive mansion. The capital that had been the symbol of the rebellion for four years had fallen, and the man who had held the Union together stood in its ashes. He would be shot ten days later, and die the next morning.' },
  },
}

export function SectionNarrative({ id }: { id: string }) {
  return <BattleSectionReader sections={PETERSBURG3_NARR} id={id} slug="third-petersburg" battleName="Third Petersburg" theatreId="east" theatreHref="/war-civil-war/eastern" battleId="e-petersburg3" />
}
