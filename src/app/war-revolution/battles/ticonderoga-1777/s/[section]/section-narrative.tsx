'use client'

// The Fall of Fort Ticonderoga (July 2–8, 1777), battle sections · American Revolution.
// Produced through the war content pipeline (audits/war-content-pipeline.md): fact
// pack → author → critic gates (fact-check + storytelling + newcomer-clarity +
// framing, parallel) → reconcile → revise. Data only; rendered by the shared
// <BattleSectionReader>. House voice: no em-dashes; side-tags once on first mention
// per section. Legend control per the fact pack: the Phillips goat line is "is
// supposed to have said" (traditional, undocumented), the George III "beat all the
// Americans" scene is told ONLY as legend, Warner's scatter order is "by the
// traditional account", and the Fermoy-fire betrayal framing is doubted in the
// prose. Three-moments discipline: 1758 Carillon pills to the F&I page, 1775
// Allen/Arnold pills to the outbreak chapter; this page is the third moment only.
// The locators honor the corridor's orientation trap: Lake Champlain runs N–S and
// "up the lake" toward Skenesborough means SOUTH. The final's locator arrows are
// not renderable in the locator block contract; the movement lines live in the
// captions and dot sub-lines instead (Brandywine collision precedent: sub-lines
// short, details in captions).
// Sources: audits/war-pipeline/rev-ticonderoga-1777-final.md (+ rev-ticonderoga-1777-factpack.md).

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'

const TICONDEROGA_NARR: Record<string, Narr> = {
  'the-gibraltar-of-the-north': {
    eyebrow: 'Ticonderoga 1777 · The third time',
    title: 'The Gibraltar of the North',
    blocks: [
      { locator: {
        eyebrow: 'The ground · the fort and the heights',
        caption: 'The American position was really three positions: the old fort, the 1758 French lines (earthworks left from the French war nineteen years earlier) west of it, and the star fort on Mount Independence across the quarter-mile narrows, linked by a floating bridge. Mount Defiance, 850 feet of rock southwest of the fort, overlooked all of it from cannon range, and nobody had fortified it.',
        frame: { lonMin: -73.46, lonMax: -73.34, latMin: 43.80, latMax: 43.875 },
        states: [
          { name: 'New York', tone: 'focus', label: 'NEW YORK', labelLon: -73.455, labelLat: 43.872, labelSize: 11 },
          { name: 'Vermont', label: 'VERMONT', labelLon: -73.345, labelLat: 43.872, labelSize: 11 },
        ],
        lakes: [
          { name: 'Lake Champlain', label: 'LAKE CHAMPLAIN', labelLon: -73.378, labelLat: 43.806, labelSize: 10, labelAnchor: 'middle' },
        ],
        dots: [
          { name: 'Fort Ticonderoga', date: 'the old fort + French lines', lat: 43.841, lon: -73.387, heavy: true, anchor: 'end', dateBelow: true },
          { name: 'Mount Defiance', date: '850 ft, undefended', lat: 43.830, lon: -73.405, heavy: true, anchor: 'end', dy: 10, dateBelow: true },
          { name: 'Mount Independence', date: 'the Vermont-shore works', lat: 43.821, lon: -73.384, anchor: 'start', dateBelow: true },
          { name: 'Floating bridge + boom', lat: 43.831, lon: -73.3855, color: '#8a8175', anchor: 'start', dy: -4 },
          { name: 'Mount Hope', date: 'outpost on the portage', lat: 43.853, lon: -73.428, anchor: 'start', dy: -8, dateBelow: true },
          { name: 'La Chute falls', date: 'Ticonderoga village', lat: 43.848, lon: -73.424, color: '#8a8175', anchor: 'start', dy: 14, dateBelow: true },
        ],
      } },
      { p: 'In the summer of 1777, Fort Ticonderoga was the most famous place in America. People called it the Gibraltar of the North, after the British rock fortress in the Mediterranean that was supposed to be impossible to take, and they meant it. The fort sat on a neck of land in upstate New York where two long lakes nearly touch: Lake George to the southwest, Lake Champlain running north toward Canada, and between them the La Chute River, a short, violent stream that drops 220 feet in about three and a half miles (the portage, the carrying-place where boats had to be dragged overland). Those lakes were the water highway between Canada and the American colonies, the natural invasion route in either direction, and the fort sat on the narrows like a hand on a gate. Whoever held Ticonderoga held the road.' },
      { fig: '/war-img/rev-ticonderoga1777-faden.jpg', cap: 'William Faden\'s 1780 map of the country the British general John Burgoyne\'s army marched through in 1777: the Lake Champlain corridor running south toward Albany, with Ticonderoga at the narrows where the lakes meet. The whole invasion runs down this page, top to bottom.', credit: 'William Faden · engraved map · 1780 · Library of Congress / Wikimedia Commons · public domain' },
      { p: 'By 1777 the place had already been famous twice. In 1758, when it was a French fort called Carillon, the largest army yet assembled in North America came up Lake George to take it and wrecked itself against a wall of logs, one of the bloodiest British defeats of the French and Indian War. One man in that doomed army had seen how to avoid all of it. Abercromby, the British commander, had an engineer named Matthew Clerk who pointed at a bare hill overlooking the French lines, a height the British called Rattlesnake Hill, and urged that cannon be hauled up it to fire down into the works. Abercromby ignored the hill, attacked head-on, and lost two thousand men. Remember the hill.' },
      { fig: '/war-img/rev-ticonderoga1777-jefferys-1758.jpg', cap: 'Thomas Jefferys\'s 1758 plan of the fort under its French name, Carillon, made for the battle the British lost here nineteen years earlier. The hill the British called Rattlesnake Hill (the later Mount Defiance) overlooks the works from across the water; in 1758 an engineer urged putting guns on it and was ignored. In 1777 it was still bare.', credit: 'Thomas Jefferys · engraved plan · 1758 · Wikimedia Commons · public domain' },
      { pill: '/war-french-indian/battles/carillon', plabel: '1758: the British army that wrecked itself at Carillon' },
      { p: 'The second famous moment came in 1775, three weeks after the shooting started at Lexington, when Ethan Allen and Benedict Arnold surprised the fort\'s tiny British caretaker garrison (about 45 men) at dawn on May 10 and took the Gibraltar of the North without a battle, and Henry Knox sledged its cannon over the snow to Boston that winter. That story belongs to the war\'s opening act, and it is told there.' },
      { pill: '/war-revolution/outbreak', plabel: '1775: Allen and Arnold take the fort, and Knox takes its guns' },
      { p: 'Now came the third moment. In June 1777, Lieutenant General John Burgoyne (British) started south from Canada with an army built around roughly 7,100 regulars (full-time professional soldiers): about 3,981 British regulars, and about 3,116 Germans, mostly rented from the Duke of Brunswick (Americans called all the German troops Hessians, though most of these were Brunswickers), under Major General Baron Riedesel. With artillerymen, a few hundred Canadians and loyalists, and several hundred Native allies, the fighting force ran toward 8,000, and with camp followers the column passed 10,000 people, among them Riedesel\'s wife, the Baroness Friederike, traveling with their three small daughters.' },
      { p: 'The plan, approved in London, was the corridor strategy: Burgoyne drives down the Champlain line to Albany, a smaller force under Barry St. Leger swings down the Mohawk Valley as a diversion, and Britain takes control of the Champlain and Hudson waterway, cutting New England, the rebellion\'s furnace, off from the rest of the colonies. The plan also assumed something it never quite said out loud: that the main British army in New York City could cooperate on the Hudson when the moment came. Nobody in London ever turned that assumption into an order.' },
      { p: 'Burgoyne himself was a London celebrity: a cavalryman who had made his name on dashing raids in Portugal in 1762, a member of Parliament, a gambler, and a successful playwright, known to his men as Gentleman Johnny. He had sold the government this invasion personally and been given command of it over the general who ran Canada. On the way south he issued a proclamation to the Americans in his path, a magnificently pompous document threatening what would happen if they resisted, including the boast about his Native allies that the whole continent would shortly be laughing at, since the "thousands" were in fact a few hundred warriors.' },
      { p: 'but to give stretch to the Indian forces under my direction, and they amount to thousands', q: true },
      { p: 'Waiting for all this at Ticonderoga was Major General Arthur St. Clair (American), a Scottish-born Pennsylvanian who had fought for Britain in the last war, and who had been in command of the fort for about three weeks. What he commanded was a famous name wrapped around a hollow position. The works were old and sprawling: the decaying stone fort, the 1758 French lines west of it, new redoubts (small enclosed forts of earth and logs), and a whole second fortress, a star fort on a hill called Mount Independence across the lake on the Vermont shore, linked to the New York side by a floating bridge a quarter of a mile long. Defending all of it properly needed something like 10,000 men. St. Clair\'s return counted 2,089 rank and file fit for duty, plus 124 unarmed artificers (military craftsmen) and about 900 short-term militia (part-time citizen soldiers called out for short stints). His own council of war put it at under 2,500 effectives (soldiers fit for duty). Washington and Congress had expected the year\'s main British blow to come north out of New York City, not south out of Canada, and the Northern Department under Major General Philip Schuyler, run from Albany, had been starved of men accordingly.' },
      { p: 'And the hill was still bare. Rattlesnake Hill, renamed Mount Defiance, 850 feet of rock just southwest of the fort across the mouth of the La Chute, stood about 1,400 yards from Ticonderoga and 1,500 from Mount Independence, close enough for cannon to reach both. The year before, John Trumbull, then a deputy adjutant in the northern army, had argued the hill commanded both forts and climbed it to prove the ascent was possible, taking Anthony Wayne, another of the army\'s officers, and a convalescent Benedict Arnold up with him; he concluded guns "could probably be dragged up." The warning was dismissed, mostly for the honest reason that there were not enough men to hold what was already built, let alone one more mountain. Nineteen years apart, two armies looked at the same hill and decided it could be ignored. The British had ignored it as attackers and paid two thousand men. The Americans were about to learn what ignoring it cost a defender.' },
    ],
    meanwhile: { region: 'New York City', title: 'The army that was not coming', body: 'The popular version of what went wrong for Britain in 1777 has a lost order: General William Howe was supposed to march north from New York City to meet Burgoyne\'s northern army at Albany, and the instructions went astray in a pigeonhole. The record is messier and worse. Howe had told London all winter that he meant to campaign against Philadelphia, and London approved, while also vaguely expecting he could help on the Hudson; no order ever compelled him north, and Burgoyne knew before leaving Canada that Howe\'s main army was probably bound for Pennsylvania. The northern invasion sailed on an assumption of cooperation that nobody had actually arranged.' },
  },

  'the-guns-that-never-fired': {
    eyebrow: 'Ticonderoga 1777 · The week',
    title: 'The guns that never fired',
    blocks: [
      { locator: {
        eyebrow: 'The retreat week · July 5–8, 1777',
        caption: 'The retreat split in two at the fort: everything that could float went south up the lake to Skenesborough, and the main body marched southeast through Vermont. The British chased both, by water and by road, and caught both rearguards.',
        frame: { lonMin: -73.78, lonMax: -73.05, latMin: 43.20, latMax: 43.90 },
        states: [
          { name: 'New York', tone: 'focus', label: 'NEW YORK', labelLon: -73.765, labelLat: 43.885, labelSize: 12 },
          { name: 'Vermont', label: 'VERMONT', labelLon: -73.10, labelLat: 43.885, labelSize: 11 },
        ],
        lakes: [
          { name: 'Lake Champlain', label: 'LAKE CHAMPLAIN', labelLon: -73.45, labelLat: 43.875, labelSize: 10, labelAnchor: 'end' },
          { name: 'Lake George', label: 'LAKE GEORGE', labelLon: -73.72, labelLat: 43.50, labelSize: 10, labelAnchor: 'end' },
        ],
        dots: [
          { name: 'Fort Ticonderoga', date: 'evacuated, night of July 5–6', lat: 43.841, lon: -73.387, heavy: true, anchor: 'start', dateBelow: true },
          { name: 'Hubbardton', date: 'the rearguard battle · July 7', lat: 43.695, lon: -73.139, heavy: true, anchor: 'end', dateBelow: true },
          { name: 'Castleton', date: 'St. Clair\'s July 6 halt', lat: 43.610, lon: -73.178, color: '#8a8175', anchor: 'start', dy: 8, dateBelow: true },
          { name: 'Skenesborough', date: 'flotilla destroyed · July 6', lat: 43.556, lon: -73.404, anchor: 'end', dateBelow: true },
          { name: 'Fort Anne', date: 'the July 8 fight', lat: 43.426, lon: -73.480, anchor: 'start', dateBelow: true },
          { name: 'Fort Edward', date: 'the army reassembles', lat: 43.270, lon: -73.585, anchor: 'end', dateBelow: true },
        ],
      } },
      { p: 'By June 30, 1777, the British invasion army under Lieutenant General John Burgoyne had staged at Crown Point, about 10 miles north of Ticonderoga, and on July 2 it came on in two wings: Brigadier General Simon Fraser\'s Advanced Corps of grenadiers (the army\'s big assault infantry), light infantry, and marksmen leading the British division down the west shore toward the old fort and the 1758 French lines (earthworks left from the French war nineteen years earlier), and Baron Riedesel\'s Germans down the east shore toward Mount Independence and the road behind it, the garrison\'s only escape route by land. Too short of men to hold the outer ground, the American commander, Major General Arthur St. Clair, pulled in the nearly cut-off garrison of Mount Hope, the outpost covering the portage road and the water supply, on the morning of July 2; the withdrawing troops burned it behind them, and Fraser\'s men occupied the height. That afternoon a picket line (an outlying guard) banged away at British and Native skirmishers on the west lines. Those few hours of musketry were nearly the entire battle of Fort Ticonderoga.' },
      { p: 'The real action was an engineering survey. On July 3 and 4, Lieutenant William Twiss, one of Burgoyne\'s engineers, climbed Sugar Loaf, the Americans\' name for the 850-foot hill they had left bare (the British were already calling it Mount Defiance), and reported what the ignored warnings of 1758 and 1776 had said: the summit commanded both forts, and a road could be cut up the back slope. Fraser and Major General William Phillips, Burgoyne\'s artillery commander, put about 400 men and most of the army\'s draft cattle on the job. Phillips is supposed to have said (the attribution is traditional; no document records it), "Where a goat can go, a man can go; and where a man can go, he can drag a gun." By midday on July 5 the first two guns, a pair of 12-pounders (cannon throwing twelve-pound iron balls), stood on the summit. The work was meant to stay hidden until the battery could fire.' },
      { p: 'It did not stay hidden. The night of July 4 the Americans had seen campfires on the summit, lit by Native warriors with the road-cutting force; on the morning of the 5th there was movement and a flash of scarlet on the bare rock. Every man who looked up understood the geometry at once. Cannon on that summit could drop shot into every corner of the fort and Mount Independence both, while the forts\' own guns could do almost nothing about a battery 850 feet over their heads. Around noon St. Clair called his four brigade commanders into council, and the vote was unanimous.' },
      { fig: '/war-img/rev-ticonderoga1777-defiance-fromfort.jpg', cap: 'The reverse angle: Mount Defiance looming over the fort\'s guns, photographed from inside Fort Ticonderoga. This is what the garrison saw on the morning of July 5, 1777, when movement and a flash of scarlet on the bare summit gave the battery away.', credit: 'photograph by Mwanner · 2009 · Wikimedia Commons · CC BY-SA 3.0' },
      { p: 'it is impossible with our force to defend Ticonderoga and Mount Independence', q: true },
      { p: 'The council resolved that "a retreat ought to be undertaken as soon as possible," and it had to be that night (the night of July 5–6), while Riedesel\'s Germans were still short of the only road out. The threat alone had decided it; the two 12-pounders on Mount Defiance never fired a shot. St. Clair said afterward that he had faced a choice between saving his reputation and losing the army, or saving the army and losing his reputation, and chose the army. He was right about both halves.' },
      { p: 'The evacuation was a desperate improvisation that mostly worked. Everything that could float, more than 200 bateaux (flat-bottomed cargo boats) and the small armed vessels, was loaded with the sick, the stores, and what cannon could be moved, and sent south up the lake to Skenesborough (the cramped harbor at the lake\'s southern head, where the navigable water gives out) under Colonel Pierse Long. The main body crossed to Mount Independence and took the military road southeast toward Hubbardton and Castleton, in the New Hampshire Grants (soon to be Vermont). Left behind: dozens of cannon (period claims ran past 70; the count was disputed even then), plus flour, meat, tents, and ammunition, a windfall for Burgoyne.' },
      { p: 'Imagine the discipline that night asked for. An army that had been promised it was holding the strongest place in America was walking away from it in the dark, in file, across a quarter-mile of floating bridge, every man listening for the sound that would mean the British had noticed. The orders were whispered. The oars were kept quiet. It almost held. Around 3 a.m., Brigadier General Matthias Fermoy, commanding on Mount Independence, set fire to his own quarters, against orders. The blaze lit up the bay and the retreating columns like a stage. Whether the fire actually betrayed the retreat is doubtful (British accounts credit deserters with the news, and dawn was an hour off), but it did the men marching under its light no favors.' },
      { fig: '/war-img/rev-ticonderoga1777-loc-plan.jpg', cap: 'A 1777 manuscript plan of Ticonderoga from the Lafayette papers, titled in period French-flavored English: the fort "which was quitted by the Americaines in the night from the 5th to the 6th of July 1777." The event of this page, recorded in its own moment.', credit: 'manuscript plan · 1777 · Lafayette / Du Chesnoy papers, Library of Congress / Wikimedia Commons · public domain' },
      { p: 'By early morning on July 6, Fraser\'s men were across the bridge and British colors flew over both works without a single shot fired at the fort. The "impassable" log-and-chain boom across the lake stopped Burgoyne\'s gunboats for about half an hour. By late afternoon the British fleet had run south and caught the American flotilla at Skenesborough: galleys (small armed rowing vessels) taken or blown up, stores burned, Long\'s men escaping overland toward Fort Anne. St. Clair\'s land column made Castleton, about 30 miles from the fort, by evening. One Hessian soldier, Johannes Schwalm, wrote afterward: "If the enemy had made a truly determined effort to defend the post, we could not have taken it."' },
      { p: 'The bill came at dawn on July 7, at Hubbardton. St. Clair\'s rearguard (the detachment left to march last, between the escaping army and its pursuers), under Colonel Seth Warner of the Green Mountain Boys (the Vermont frontier militia, veterans of the land feud with New York), with Colonel Ebenezer Francis\'s 11th Massachusetts and Colonel Nathan Hale\'s 2nd New Hampshire (not the executed spy; a different Nathan Hale), had orders to march on to Castleton, and halted at Hubbardton instead, about 1,000 to 1,200 organized men plus hundreds of sick and stragglers. Fraser, pursuing with 750 to 850 grenadiers, light infantry, and men of the 24th Foot (an infantry regiment), hit them at first light. Hale\'s encampment by Sucker Brook was overrun first.' },
      { p: 'Francis and Warner formed on Monument Hill and fought Fraser to a standstill, for somewhere between 45 minutes and two hours, shooting down about one man in five of his force and bending his left flank back.' },
      { p: 'Then the Americans on Monument Hill heard something no battle had prepared them for: singing. Up the Castleton road came Riedesel\'s Brunswickers, jägers (riflemen) and grenadiers, advancing into the fight singing a hymn, with a military band playing, on Riedesel\'s order, so that a few hundred winded men would sound like an army arriving. It worked. The American right broke. Francis was killed by a volley where he stood. Warner, by the traditional account, told his survivors to scatter and meet him at Manchester. Hale and somewhere between 230 and 300 men were captured. The Americans lost roughly 40 percent of the rearguard; Fraser lost over 20 percent of everyone he brought. And the mauled rearguard had done its job: Fraser\'s bloodied force stopped at Hubbardton with its wounded and prisoners, the pursuit on the land road ended there, and St. Clair\'s main column marched on unmolested to rejoin the army. The rearguard was wrecked buying exactly what it had been left behind to buy: time. It was the only Revolutionary War battle fought on Vermont soil.' },
      { fig: '/war-img/rev-ticonderoga1777-hubbardton.jpg', cap: 'The Hubbardton battlefield in Vermont, the ground of Monument Hill, where the American rearguard turned and fought the British pursuit under Simon Fraser on July 7, 1777. No period painting of the battle is known; the ground itself is the honest image.', credit: 'photograph by Doug Kerr · 2013 · Wikimedia Commons · CC BY-SA 2.0' },
      { p: 'The week\'s last fight came on July 8 at Fort Anne, where Long\'s water-column survivors, about 600 men joined by 400 New York militia, turned on their pursuers, some 190 men of the British 9th Foot under Lieutenant Colonel John Hill, and nearly enveloped them in a two-hour firefight up Battle Hill. They fell back only when ammunition ran out and a war whoop sounded from the woods, seemingly Native reinforcements arriving. It was a single British officer, Captain John Money, whooping ahead of his stalled scouts. The Americans burned Fort Anne and withdrew toward Fort Edward, and the week was over.' },
    ],
    meanwhile: { region: 'The British camp', title: 'A family with the army', body: 'Among the 10,000 people moving south with Burgoyne was the commander of the German division\'s own household: the Baroness Friederike Riedesel, who had crossed the Atlantic to follow her husband on campaign, with their three small daughters. Her journal of the next four months, the triumph at Ticonderoga and the slow strangulation that followed, became one of the best sources on the campaign, written from inside the army the Americans were running from.' },
  },

  'shoot-a-general': {
    eyebrow: 'Ticonderoga 1777 · What it meant',
    title: '"Shoot a general"',
    blocks: [
      { locator: {
        eyebrow: 'The campaign · Canada to Albany, 1777',
        caption: 'Burgoyne\'s plan ran straight down this map: from Canada south along Lake Champlain, through Ticonderoga, to Albany. After Skenesborough he pushed his army overland toward Fort Edward, 23 miles of creek and forest that American axemen turned into a three-week obstacle course, while his supply line stretched all the way back to Canada behind him.',
        frame: { lonMin: -74.4, lonMax: -72.7, latMin: 42.5, latMax: 45.6 },
        states: [
          { name: 'New York', tone: 'focus', label: 'NEW YORK', labelLon: -74.36, labelLat: 44.55, labelSize: 12 },
          { name: 'Vermont', label: 'VERMONT', labelLon: -72.78, labelLat: 44.25, labelSize: 11 },
          { name: 'Massachusetts', tone: 'faint' },
        ],
        lakes: [
          { name: 'Lake Champlain', label: 'LAKE CHAMPLAIN', labelLon: -73.25, labelLat: 44.55, labelSize: 10, labelAnchor: 'start' },
          { name: 'Lake George', label: 'LAKE GEORGE', labelLon: -73.78, labelLat: 43.62, labelSize: 9, labelAnchor: 'end' },
        ],
        labels: [
          { text: 'HUDSON RIVER', lon: -73.82, lat: 42.82, kind: 'water', size: 10, anchor: 'end' },
        ],
        dots: [
          { name: 'Montreal', lat: 45.502, lon: -73.567, color: '#8a8175', anchor: 'end', dateBelow: true },
          { name: 'Saint-Jean', date: 'the campaign starts', lat: 45.307, lon: -73.262, anchor: 'start', dateBelow: true },
          { name: 'Crown Point', date: 'British staging · June 30', lat: 44.03, lon: -73.43, anchor: 'end', dateBelow: true },
          { name: 'Fort Ticonderoga', date: 'fell July 6, 1777', lat: 43.841, lon: -73.387, heavy: true, anchor: 'start', dateBelow: true },
          { name: 'Hubbardton', date: 'July 7', lat: 43.695, lon: -73.139, color: '#8a8175', anchor: 'start', dateBelow: true },
          { name: 'Castleton', lat: 43.610, lon: -73.178, color: '#8a8175', anchor: 'start', dy: 10, dateBelow: true },
          { name: 'Skenesborough', date: 'flotilla destroyed · July 6', lat: 43.556, lon: -73.404, anchor: 'end', dateBelow: true },
          { name: 'Fort Anne', date: 'July 8', lat: 43.426, lon: -73.480, anchor: 'start', dy: 8, dateBelow: true },
          { name: 'Fort George', date: 'the guns\' water route', lat: 43.419, lon: -73.709, color: '#8a8175', anchor: 'end', dateBelow: true },
          { name: 'Fort Edward', date: 'Schuyler\'s assembly point', lat: 43.270, lon: -73.585, anchor: 'end', dy: 10, dateBelow: true },
          { name: 'Saratoga', date: 'the campaign ends · Oct 17', lat: 43.012, lon: -73.647, heavy: true, anchor: 'end', dateBelow: true },
          { name: 'Albany', date: 'the objective, never reached', lat: 42.653, lon: -73.756, anchor: 'end', dateBelow: true },
        ],
      } },
      { p: 'The news that the Gibraltar of the North had been abandoned without a battle landed on the two capitals like two different thunderclaps. In Philadelphia, Congress was stunned. Nobody outside the northern army understood the arithmetic of the place (the hollow garrison, the sprawling works, the bare hill), so the explanations people reached for were darker: incompetence, cowardice, treason. Rumor said St. Clair (the American general who had ordered the retreat) and Philip Schuyler (his superior, commanding the Northern Department from Albany) had been bribed, and one story, absurd even by the standards of wartime rumor, had the British paying them in silver balls fired into the fort for the generals to collect. Washington, the American commander-in-chief, who had genuinely not seen it coming, wrote to Schuyler that the evacuation was "an event of chagrin and surprise not apprehended, nor within the compass of my reasoning." John Adams, writing to his wife Abigail that August, put the country\'s fury into one sentence, and since the line is usually misquoted, here it is exactly as he wrote it, period spelling and all.' },
      { p: 'I think We shall never defend a Post, untill We shoot a General.', q: true },
      { p: 'Nobody shot a general, but heads rolled upward. Congress recalled both St. Clair and Schuyler from the Northern Department, and Schuyler\'s replacement, Horatio Gates, took over in August, a change of command that would shape the politics of everything that happened at Saratoga. Both recalled generals demanded courts-martial (military trials) to clear their names, and both were acquitted: St. Clair, tried in 1778 on every charge his enemies could draft, was acquitted "with the highest honor," and Schuyler was cleared of neglect of duty the same autumn. Congress confirmed both verdicts. It did not matter. Neither man ever led a major field command again. St. Clair, in his report to Congress that July, had stated his own defense plainly: "I have made good a retreat from under the nose of an army at least four times their numbers." It took years, and a lost British army, for that sentence to read as the achievement it was.' },
      { p: 'In London the same news arrived as proof that the rebellion was collapsing. Parliament cheered Burgoyne; the fortress whose name every Englishman knew, the place that had humiliated a British army in 1758 and been stolen by rebels in 1775, was British again, in four days, almost for free. The story everyone repeats has George III bursting into the Queen\'s chamber crying "I have beat them! beat all the Americans!" That scene is a legend, a piece of gossip with no contemporary source behind it, and it should be enjoyed as exactly that: not a fact about the King, but a perfect fossil of the mood, because that is how the fall of Ticonderoga felt in London in the summer of 1777.' },
      { p: 'And then the inversion began. Start with what Britain actually won. Burgoyne now owned the most famous fort in America, which meant he had to hold it: a garrison of 900-plus men, mostly the Brunswick regiment Prinz Friedrich and the British 62nd, subtracted from his field army before it fought a single major battle. He owned the lake, which meant his supplies now traveled the whole length of it, back over Champlain to Canada, a line that grew longer and thinner with every mile he advanced. And at Skenesborough he made the choice that turned geography against him: rather than backtrack and take the Lake George water route south, he pushed his main army overland toward Fort Edward, on the upper Hudson (the river that runs the rest of the way to Albany), 23 miles of creek, ravine, and forest. Schuyler\'s axemen got there first. They felled trees across the road, broke the bridges, and choked Wood Creek with timber, and the 23 miles took Burgoyne\'s army about three weeks. Only his guns went by water.' },
      { p: 'Now count what America actually lost, and saved. The cannon, the flotilla, and the supplies were gone, and they stung. But the garrison, the thing St. Clair gave up the fort and his own reputation to keep, was alive. The men who marched out over the floating bridge reassembled at Fort Edward and folded into the northern army. Long\'s men and Warner\'s men, the survivors of Skenesborough and Hubbardton, fought again at Bennington in August. The army that gathered in front of Burgoyne that fall, the one that fought him to a stop at Bemis Heights and took his surrender at Saratoga in October, contained the army "lost" at Ticonderoga. In September, an American raid even came back: Brown\'s raid (named for the officer who led it) retook the outworks on the portage and Mount Defiance itself for a few days and freed a haul of prisoners, a postscript with a point, which was that Britain\'s grip on its great prize was a garrison and a promise, nothing more.' },
      { pill: '/war-revolution/two-armies', plabel: '1777: the campaign that ends at Saratoga, told whole' },
      { fig: '/war-img/rev-ticonderoga1777-fraser-burial.jpg', cap: 'The burial of Simon Fraser, after John Graham. The general who led the pursuit from Ticonderoga was mortally wounded at Bemis Heights that October and buried at dusk in the Great Redoubt. Where this campaign was heading.', credit: 'after John Graham · c. 1800 · National Army Museum / Wikimedia Commons · public domain' },
      { p: 'The verdict on the week depends entirely on where the clock is stopped. Stop it on July 6, and Burgoyne has taken the most famous fort in America in four days, almost for free, and the rebellion is reeling. Stop it in October, and the fall of Ticonderoga looks like the moment a British army was handed a famous trophy and a fatal errand: garrison the trophy, feed yourself from Canada, and keep walking south into a country that was felling trees across every road, toward the army you had assumed would meet you, which was never coming. The men who were vilified for the retreat had, between them, saved the soldiers and slowed the enemy. The court-martial verdicts said as much, years too late to give either general his career back.' },
      { p: 'After Saratoga, the fort\'s own story simply stopped. The British burned and abandoned Ticonderoga in November 1777, and the Gibraltar of the North never mattered in a war again.' },
    ],
    meanwhile: { region: 'Ticonderoga', title: 'The fort\'s story ends', body: 'The most famous fortress in America spent the rest of the century dying quietly. Never again garrisoned in earnest, it was a picturesque ruin by the 1780s, and locals quarried its stone for houses and barns. Restoration as a museum began in 1909, which is why a visitor today can stand on the walls St. Clair gave up, look southwest, and see in one glance the thing every soldier saw on the morning of July 5, 1777: Mount Defiance, close, high, and looking straight down into the fort.' },
  },
}

export function SectionNarrative({ id }: { id: string }) {
  return <BattleSectionReader
    sections={TICONDEROGA_NARR}
    id={id}
    slug="ticonderoga-1777"
    battleName="Fort Ticonderoga"
    date="July 2–8, 1777"
    theatreId="rev-battles"
    battleId="rev-ticonderoga"
    theatreHref="/war-revolution/battles"
    accent="var(--rev-battles)"
    endHref="/war-revolution?theatre=rev-battles"
    endKicker="Back to the war"
    endLabel="All the battles"
  />
}
