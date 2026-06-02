// Deterministic builder: converts a gated war-theme final.md (audits/war-pipeline/
// <slug>-final.md) into the reader page (src/app/war-civil-war/off-the-battlefield/
// <slug>/page.tsx). Prose ships VERBATIM — no model rewriting. Figures from the
// verified PD manifest are injected at editorial anchors (after/before a heading, or
// replacing a [FIGURE] marker). Run: node scripts/_build-war-themes.mjs
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// repo root = one level up from scripts/ (worktree-agnostic; was hardcoded to the
// retired phase-2 worktree)
const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${')
const f = (file, cap, credit) => ({ file, cap, credit })

// ---- figure libraries (caption/credit are house-voice, from the verified manifests) ----
const RW = {
  map:    f('road-to-war-fig1-missouri-compromise-map.jpg', `The deal that held for thirty-four years, drawn on a ruler and a map. The 36°30′ line split the West into two futures — until someone tore it up.`, `McConnell Map Co. · 1919 · public domain`),
  clay:   f('road-to-war-fig2-henry-clay-brady.jpg', `Henry Clay, photographed by Mathew Brady a month before he rose to propose the Compromise of 1850 — his last and greatest gamble. Seventy-two years old, already "the Great Compromiser," and running out of time.`, `Mathew Brady · 1849 · Beinecke Rare Book & Manuscript Library, Yale University · public domain`),
  senate: f('road-to-war-fig3-senate-1850-rothermel.jpg', `The last act of a generation: Henry Clay on the Senate floor, 1850, with John C. Calhoun and Daniel Webster in the chamber. Three men who between them had run the Senate for thirty years — one dying, one about to become a traitor to his region, and one who thought a railroad could fix everything.`, `Peter F. Rothermel (artist) · Robert Whitechurch (engraver) · c. 1855 · public domain`),
  calhoun:f('road-to-war-fig4-calhoun-brady.jpg', `John C. Calhoun, photographed by Mathew Brady in 1849 — one year before he sat wrapped in his coat in the Senate chamber, too ill to speak his own ultimatum. He died March 31, 1850, his final architecture of ideas outlasting him by a decade.`, `Mathew Brady · 1849 · Sotheby's · public domain`),
  caning: f('road-to-war-fig5-southern-chivalry-caning.jpg', `"Southern Chivalry — Argument versus Clubs," 1856. Preston Brooks beats Senator Charles Sumner senseless at his Senate desk while Lawrence Keitt waves a pistol to keep anyone from interfering. Half the country sent Brooks commemorative canes. The other half sent Sumner back to the Senate as a martyr.`, `After John L. Magee (lithographer) · 1856 · public domain`),
  douglas:f('road-to-war-fig6-douglas-vannerson.jpg', `Stephen A. Douglas, "the Little Giant," photographed in 1859. He saved the Union in 1850 by splitting Clay's omnibus into five manageable bills. He nearly broke it in 1854 by erasing the Missouri Compromise line to build a railroad. Not a villain of this story — something more interesting: a man whose ambition outran his conscience.`, `Julian Vannerson · 1859 · Library of Congress · public domain`),
  ruffians:f('road-to-war-fig7-border-ruffians-kansas.jpg', `"Border ruffians" from Missouri cross into Kansas to vote — and to make sure the other side doesn't. Popular sovereignty, in practice, meant whoever brought more guns to the polling place.`, `Scribner, Armstrong & Co. (illustrator) · 1880 · public domain`),
  dred:   f('road-to-war-fig8-dred-scott-1857.jpg', `Dred Scott, photographed around 1857 — the year the Supreme Court ruled he had no right to sue, no right to be free, and no claim to citizenship the law was bound to respect. He was freed eighteen months later anyway, by a private man's signature. He died of tuberculosis on September 17, 1858.`, `Photographer uncredited · c. 1857 · public domain`),
  brown:  f('road-to-war-fig9-john-brown-1859.jpg', `John Brown, May 1859 — six months before Harpers Ferry. He believed himself the instrument of a wrathful God. Looking at this photograph, it is difficult to argue he didn't believe it absolutely.`, `Martin M. Lawrence (photographer) · May 1859 · Library of Congress · public domain`),
  marines:f('road-to-war-fig10-harpers-ferry-marines.jpg', `U.S. Marines storming John Brown's engine house at Harpers Ferry, October 18, 1859 — from a sketch made on the spot. The officer commanding the Marines was Colonel Robert E. Lee; his aide carrying the surrender demand was Lieutenant J.E.B. Stuart. Both would be in Confederate uniform eighteen months later.`, `Frank Leslie's Illustrated Newspaper · October 29, 1859 · public domain`),
}
const LR = {
  byers:   f('lincolns-rise-lincoln-1858-byers.jpg', `Lincoln in 1858, the year of the Senate race — photographed in Beardstown, Illinois, months before the debates with Douglas made him a national name. Lean, unglamorous, and still beardless.`, `Abraham Byers · ambrotype · May 7, 1858 · Library of Congress · public domain`),
  cooper:  f('lincolns-rise-hero-cooper-union-brady.jpg', `Lincoln photographed by Mathew Brady the afternoon of February 27, 1860, before he delivered the Cooper Union address. The image spread across Republican newspapers nationwide within days.`, `Mathew B. Brady · photograph · February 27, 1860 · Library of Congress · public domain`),
  douglas: f('lincolns-rise-douglas-anthony-1860.jpg', `Stephen A. Douglas, senator from Illinois, photographed in 1860. His "popular sovereignty" doctrine — let the settlers vote on slavery — was the big idea Lincoln spent the debates dismantling.`, `E. Anthony · carte de visite · 1860 · Library of Congress · public domain`),
  wigwam:  f('lincolns-rise-wigwam-convention-1860.jpg', `The Republican National Convention, Chicago, May 1860 — the Wigwam, a vast temporary wooden hall built for the occasion. Lincoln stayed home in Springfield; his managers worked the floor through the night.`, `Library of Congress Prints & Photographs Division · wood engraving · 1860 · public domain`),
  wideawake:f('lincolns-rise-wide-awake-certificate-1860.jpg', `A Wide-Awake Club membership certificate, 1860. Lincoln and Hamlin preside from the upper corners; uniformed members with torches march below. The Wide-Awakes were the Republican youth movement that electrified the Northern campaign.`, `Library of Congress Prints & Photographs Division · lithograph · 1860 · public domain`),
  quadrille:f('lincolns-rise-political-quadrille-1860.jpg', `"The Political Quadrille," 1860 — all four presidential candidates dancing to Dred Scott's fiddle. The four-way race handed Lincoln the presidency on less than 40 percent of the popular vote.`, `Popular Graphic Arts / Library of Congress · lithograph · 1860 · public domain`),
  game:    f('lincolns-rise-national-game-1860.jpg', `"The National Game. Three Outs and One Run," Currier & Ives, September 1860. Lincoln's bat is labeled "Equal Rights and Free Territory." The other three struck out.`, `Currier & Ives (attr. Louis Maurer) · lithograph · September 1860 · Library of Congress · public domain`),
  emap:    f('lincolns-rise-electoral-map-1860.png', `The 1860 electoral map. Lincoln swept the free North and won 180 electoral votes — well past the 152 needed — without a single electoral vote from any slave state.`, `ElectoralCollege1860 · Wikimedia Commons · public domain`),
  buchanan:f('lincolns-rise-buchanan-1860.jpg', `President James Buchanan in 1860 — the lame-duck commander in chief who declared secession illegal and then spent four months doing nothing to stop it.`, `Meade Brothers · photograph · 1860 · public domain`),
  mercury: f('lincolns-rise-charleston-mercury-1860.jpg', `The Charleston Mercury "Extra," December 20, 1860 — the day South Carolina voted 169 to 0 to dissolve its bond to the United States. They printed the headline the same afternoon.`, `Charleston Mercury · broadside · December 20, 1860 · public domain`),
}
const TG = {
  mont:   f('two-governments-montgomery-inaugural.jpg', `The inauguration of Jefferson Davis as provisional Confederate president on the steps of the Alabama State Capitol, Montgomery — February 18, 1861.`, `A.C. McIntyre · Montgomery, Alabama · 1861 · Boston Athenaeum · public domain`),
  davis:  f('two-governments-davis-portrait.jpg', `Jefferson Davis, Confederate president — Mississippi planter, West Point graduate, and former U.S. Secretary of War. The seasoned insider everyone expected to outshine Lincoln.`, `Mathew Brady · c. 1859 · National Archives (528293) · public domain`),
  stephens:f('two-governments-stephens-portrait.jpg', `Alexander H. Stephens, vice president of the Confederacy. In March 1861 he stood before a crowd in Savannah and named slavery the "corner-stone" of the new government — not as a confession, but as a boast.`, `Mathew Brady · c. 1860–65 · National Archives (528288) · public domain`),
  lincoln:f('two-governments-lincoln-portrait.jpg', `Abraham Lincoln six days before Fort Sumter — Brady's April 1861 portrait of the new president, the "backwoods curiosity" the men in Montgomery had underestimated.`, `Mathew Brady · April 6, 1861 · Library of Congress · public domain`),
  inaug:  f('two-governments-lincoln-inaugural.jpg', `Lincoln's first inauguration at the U.S. Capitol, March 4, 1861 — the unfinished dome still under construction above him, seven states already gone from the Union.`, `Library of Congress · 1861 · public domain`),
  interior:f('two-governments-sumter-interior.jpg', `Inside Fort Sumter after the bombardment, 1861 — more than 3,000 Confederate shells in thirty-four hours reduced the walls and left the fort on fire.`, `Osborn & Durbec, Charleston · 1861 · Library of Congress · public domain`),
  anderson:f('two-governments-anderson-portrait.jpg', `Major Robert Anderson, photographed inside Fort Sumter on February 8, 1861 — two months before the Confederate guns opened. The Union commander who moved his garrison to the fort by night and refused to leave.`, `E. Anthony, New York · February 8, 1861 · Missouri Historical Society · public domain`),
  beau:   f('two-governments-beauregard-portrait.jpg', `General P.G.T. Beauregard, who commanded the Confederate guns ringing Charleston harbor. His old artillery instructor from West Point, Major Anderson, was inside the fort he was ordered to take.`, `Mathew Brady · c. 1861–65 · National Archives (528596) · public domain`),
  baltimore:f('two-governments-baltimore-riot.jpg', `Massachusetts troops fire into a pro-Confederate mob on Pratt Street, Baltimore, April 19, 1861 — the first street deaths of the war, five days after Fort Sumter fell. Five soldiers and twelve civilians killed.`, `Wood engraving · published April 30, 1861 · Library of Congress · public domain`),
  map:    f('two-governments-secession-map.jpg', `The secession crisis, 1860–1861: the seven Deep South states that left before Fort Sumter, the four border slave states that stayed, and the free Union states. Maryland nearly surrounds Washington.`, `Charles O. Paullin · Atlas of the Historical Geography of the United States · 1932 · public domain`),
  lee:    f('two-governments-lee-portrait.jpg', `Robert E. Lee, who turned down command of the Union army and resigned to follow Virginia out of the Union — one of the U.S. Army's most capable officers, now the Confederacy's.`, `Mathew Brady · National Archives (529894) · public domain`),
}

const CONFIGS = [
  {
    slug: 'road-to-war', battleId: 'th-road', battleName: 'The Road to War',
    eyebrow: `How the peace came apart, deal by deal`,
    hero: { image: '/war-img/road-to-war-hero-reynolds-map.jpg', palette: ['#5b3a1c', '#2c3a24', '#0f0c06'], credit: `William C. Reynolds & J. C. Jones · 1856 · Library of Congress Geography & Map Division · public domain` },
    end: { kicker: `The peace is gone`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the election of 1860`, title: `Lincoln's Rise & the Election of 1860`, body: `With the Whigs dead and the Democrats splitting along the same North–South seam that had broken everything else, the election of 1860 became a referendum on whether the Union could hold at all. The story turns to the prairie lawyer the Republicans nominated, the four-way race that broke the back of the old politics, and the night the Deep South began, at last, to leave.` },
    markers: [RW.map, RW.senate, RW.marines],
    afterHeading: {
      'The Last Great Bargain': [RW.clay],
      'The Match on the Powder': [RW.douglas],
      'Bleeding Kansas': [RW.ruffians],
      'The Caning': [RW.caning],
      'The Court Tries to End the Argument': [RW.dred],
      'The Spark at Harpers Ferry': [RW.brown],
    },
    beforeHeading: { 'The Match on the Powder': [RW.calhoun] },
  },
  {
    slug: 'lincolns-rise', battleId: 'th-lincoln1860', battleName: `Lincoln's Rise & the Election of 1860`,
    eyebrow: `The outsider the South would not abide`,
    hero: { image: '/war-img/lincolns-rise-hero-cooper-union-brady.jpg', palette: ['#2b2218', '#3a3026', '#0c0a07'], credit: `Mathew B. Brady · February 27, 1860 · Library of Congress · public domain`, focus: 'center 20%', scale: 1.0 },
    end: { kicker: `The outsider wins`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `Montgomery, Alabama`, title: `Two Governments`, body: `While Lincoln waits powerless in Springfield, the seven seceded states are already gathering in Montgomery to build a government, write a constitution, and choose a president of their own — and to name, out loud, exactly what the new nation is for.` },
    markers: [LR.byers, null, LR.cooper],
    afterHeading: {
      'The Little Giant and the house divided': [LR.douglas],
      'The dark horse in the Wigwam': [LR.wigwam, LR.wideawake],
      'Four men, one ballot, no center': [LR.quadrille],
      'A clear majority, a divided country': [LR.emap],
      'Secession winter': [LR.mercury],
    },
    beforeHeading: {
      'A clear majority, a divided country': [LR.game],
      'Secession winter': [LR.buchanan],
    },
  },
  // ── Wave-2 themes (figures hydrated from <slug>-figures.json via the manifest
  //    parser; hero image + credit + per-figure caption/credit come from the JSON).
  {
    slug: 'cotton-diplomacy', battleId: 'th-diplomacy', battleName: 'Britain, France & Cotton', fromJson: true,
    eyebrow: `The war for Europe's blessing`,
    hero: { palette: ['#2a3438', '#1c2426', '#0a0c0d'], focus: 'center 40%', scale: 1.1 },
    end: { kicker: `No foreign friend ever came`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `Hampton Roads`, title: `Ironclads & the Blockade`, body: `Diplomacy fought over the blockade in drawing rooms; out on the water, the blockade was real ships choking real ports — and the South's answer to it, an iron monster called the *Virginia*, was about to make every wooden navy on earth obsolete in a single afternoon.` },
  },
  {
    slug: 'ironclads', battleId: 'th-ironclads', battleName: 'Ironclads & the Blockade', fromJson: true,
    eyebrow: `The day wooden navies died`,
    hero: { palette: ['#3a2c1e', '#23201a', '#0a0806'], focus: 'center 42%', scale: 1.08 },
    end: { kicker: `Naval war, remade overnight`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the rail and the wire`, title: `The New Way of War`, body: `Iron ships were only one front of a wider revolution. On land, the rifled musket, the railroad, and the telegraph were remaking how armies marched, supplied, and killed — and the old tactics hadn't caught up.` },
  },
  {
    slug: 'new-way-of-war', battleId: 'th-tech', battleName: 'The New Way of War', fromJson: true,
    eyebrow: `When the tools outran the tactics`,
    hero: { palette: ['#4a3a26', '#2c2418', '#0d0a06'], focus: 'center 55%', scale: 1.06 },
    end: { kicker: `A preview of the century to come`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the field hospital`, title: `Medicine & Disease`, body: `New weapons made new wounds faster than anyone could heal them — and behind the firing line, the war's quietest killer wasn't the rifle at all. Two men died of disease for every one shot.` },
  },
  {
    slug: 'home-front', battleId: 'th-homefront', battleName: 'The Home Front', fromJson: true,
    eyebrow: `The war the civilians fought`,
    hero: { palette: ['#2c2a26', '#1c1a17', '#0a0908'], focus: 'center 42%', scale: 1.1 },
    end: { kicker: `Rich man's war, poor man's fight`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the contraband camps`, title: `Freedom Seekers & the USCT`, body: `While white families North and South argued over who had to fight, four million enslaved people were settling the question for themselves — walking off the plantations toward the Union lines, and turning a war for union into a war for freedom.` },
  },
  {
    slug: 'medicine', battleId: 'th-medicine', battleName: 'Medicine & Disease', fromJson: true,
    eyebrow: `The war's quietest killer`,
    hero: { palette: ['#2a2826', '#1a1917', '#080808'], focus: 'center 50%', scale: 1.06 },
    end: { kicker: `Two died of sickness for every one shot`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `behind the lines`, title: `The Home Front`, body: `The same war that filled the hospitals emptied the farms and the shops. Back home, two societies were mobilizing everything they had — and the burden fell hardest on the people with the least.` },
  },
  {
    slug: 'usct', battleId: 'th-usct', battleName: 'Freedom Seekers & the USCT', fromJson: true,
    eyebrow: `They freed themselves, then fought`,
    hero: { palette: ['#2e2616', '#1e1a12', '#0a0806'], focus: 'center 32%', scale: 1.12 },
    end: { kicker: `The war's meaning, changed for good`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `Washington`, title: `The Emancipation Proclamation`, body: `The enslaved forced the question onto the battlefield; Lincoln answered it from his desk. On January 1, 1863, the Emancipation Proclamation changed what the entire war was for — and opened the door for Black men to fight for their own freedom.` },
  },
  {
    slug: 'two-governments', battleId: 'th-twogov', battleName: 'Two Governments',
    eyebrow: `Two presidents, two constitutions, one spring`,
    hero: { image: '/war-img/two-governments-hero.jpg', palette: ['#1a1208', '#2a2418', '#0a0806'], credit: `Currier & Ives · 1861 · Library of Congress Prints & Photographs · public domain` },
    end: { kicker: `The talking is over`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `a creek in Virginia`, title: `Bull Run`, body: `The talking is finished; what remains is the fighting. Two amateur nations now scramble to raise armies from almost nothing — and within weeks they collide near a Virginia creek called Bull Run, where a North expecting a quick, glorious afternoon learns exactly how long and how terrible this war is going to be.` },
    markers: [TG.mont],
    afterHeading: {
      'The Government in Montgomery': [TG.davis],
      'In Their Own Words': [TG.stephens],
      '"We Are Not Enemies, but Friends"': [TG.lincoln, TG.inaug],
      'The Fort in the Harbor': [TG.anderson, TG.beau],
      'Choose': [TG.lee],
      'The Hinge': [TG.map],
    },
    beforeHeading: {
      'Choose': [TG.interior],
      'Two Governments, One Verdict': [TG.baltimore],
    },
  },
  // ── Wave-3 themes (the closing Off-the-Battlefield arc; figures hydrated from
  //    <slug>-figures.json via the manifest parser).
  {
    slug: 'prisons', battleId: 'th-prisons', battleName: 'Andersonville & the Prisons', fromJson: true,
    eyebrow: `The war behind the wire`,
    hero: { palette: ['#2c2a1e', '#1c1a14', '#0a0806'], focus: 'center 42%', scale: 1.05 },
    end: { kicker: `The war's other body count`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the war's edges`, title: `Fort Pillow & the Guerrilla War`, body: `Captivity was one way this war stopped treating the enemy as human. There was another, uglier one — the no-quarter killings and the savage irregular war that raged out past the armies' flanks, where the line between soldier and civilian dissolved entirely.` },
  },
  {
    slug: 'guerrilla-war', battleId: 'th-atrocity', battleName: 'Fort Pillow & the Guerrilla War', fromJson: true,
    eyebrow: `The war with no front line`,
    hero: { palette: ['#2e211c', '#1e1714', '#0a0706'], focus: 'center 45%', scale: 1.06 },
    end: { kicker: `The war at its ugliest`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the Northern home front`, title: `The War Within the North`, body: `While the war turned savage at its edges, the North was fighting a quieter war with itself — over dissent, over civil liberties, and over whether a democracy could hold a free presidential election in the middle of a civil war without tearing itself apart.` },
  },
  {
    slug: 'war-within-north', battleId: 'th-northwithin', battleName: 'The War Within the North', fromJson: true,
    eyebrow: `The other war the North was fighting`,
    hero: { palette: ['#22272e', '#161a1f', '#080a0c'], focus: 'center 50%', scale: 1.0 },
    end: { kicker: `The ballot held`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `Ford's Theatre, Washington`, title: `Lincoln Assassinated`, body: `The ballot box saved the presidency — the country re-elected its war president and the Union held. Five days after the surrender at Appomattox, a single bullet did what the election could not.` },
  },
  {
    slug: 'assassination', battleId: 'th-assassination', battleName: 'Lincoln Assassinated', fromJson: true,
    eyebrow: `Five days after the peace`,
    hero: { palette: ['#241c1c', '#161112', '#080606'], focus: 'center 40%', scale: 1.06 },
    end: { kicker: `The peace loses its architect`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the whole nation`, title: `The Reckoning`, body: `The man who might have softened the peace was gone. Now the country had to count its dead, free four million people for good, and decide what the war had actually settled — and what it had only deferred.` },
  },
  {
    slug: 'reckoning', battleId: 'th-reckoning', battleName: 'The Reckoning', fromJson: true,
    eyebrow: `What it cost, what it changed, what it didn't`,
    hero: { palette: ['#2a2724', '#1a1816', '#080808'], focus: 'center 45%', scale: 1.05 },
    end: { kicker: `A reckoning deferred, not resolved`, label: `Back to Off the Battlefield` },
    meanwhile: { region: `the firing line`, title: `The battles themselves`, body: `These were the threads off the firing line — the causes, the society, the technology, the aftermath. The battles that ran alongside them, from Bull Run to Appomattox, are their own four theatres, waiting whenever you are.` },
  },
  // ── "How the War Was Fought" — the military/strategic through-line (its own
  //    pillar dir + stone WAR_ACCENT). Chapter 1; ch 2–5 follow.
  {
    slug: 'improvising-a-war', battleId: 'mil-1861', battleName: 'Improvising a War',
    dir: 'how-the-war-was-fought', theatreId: 'howfought',
    theatreHref: '/war-civil-war/how-the-war-was-fought', accentExpr: 'WAR_ACCENT',
    endHref: '/war-civil-war/how-the-war-was-fought',
    eyebrow: `The war both sides thought would be short`,
    hero: { image: '/war-img/improvising-a-war-hero.jpg', palette: ['#3a342a', '#23201a', '#0a0806'], credit: `“Scott’s Great Snake” (the Anaconda Plan) · J.B. Elliott, Cincinnati · 1861 · Library of Congress · public domain`, focus: 'center 42%', scale: 1.04 },
    end: { kicker: `Now they had to learn to fight it`, label: `Back to the Military Story` },
    meanwhile: { region: `the war at large, 1862`, title: `The Limited War Ends`, body: `After Bull Run, both sides finally stopped pretending. Through 1862 the war shed the last of its illusions (short enlistments, gentlemen’s rules, slavery left untouched) and hardened into the total, grinding war it was always going to be, as the North turned from “restore the Union as it was” toward a war that would have to break slavery to win.` },
    markers: [
      f('improvising-a-war-fig1-recruiting-poster.jpg', `An actual 1861 recruiting broadside for the “Scott Legion Regiment,” one of fourteen called up from Pennsylvania, posted on the streets of Philadelphia. Notice the fine print: officers “who have served in Mexico,” and a “three months enlistment.” Everybody, the paperwork included, thought this would be a short war.`, `J. H. Jones & Co., Philadelphia · 1861 · Library Company of Philadelphia / Wikimedia Commons · public domain`),
      f('improvising-a-war-fig2-winfield-scott.jpg', `General-in-Chief Winfield Scott, the old hero of 1812 and Mexico, photographed in uniform around the start of the war. By 1861 he was seventy-four, heavy, and could barely sit a horse, and the country laughed at his slow strangle-the-South plan. He turned out to be right.`, `Mathew Brady studio, New York · c. 1861 · Library of Congress / Wikimedia Commons · public domain`),
      f('improvising-a-war-fig3-secession-map.jpg', `The country splits apart, 1860 to 1861. Dark red states seceded before Fort Sumter (the lower South), bright red went after (the upper South), and the blue states stayed in the Union. The four loyal slave states (Kentucky, Maryland, Missouri, Delaware) sit in yellow, right in the gap, which is exactly why Lincoln guarded them so carefully. Gray is unsettled territory.`, `Júlio Reis · 2007 · Wikimedia Commons · CC BY-SA 3.0`),
      f('improvising-a-war-fig4-bull-run-rout.jpg', `“The Stampede from Bull Run,” drawn on the spot for the illustrated press. Soldiers, wagons, and the sightseers who had ridden out to watch all tangle together in a panicked scramble back toward Washington. This is the afternoon the dream of a short war died.`, `Frank Vizetelly · 1861 · New York Public Library / Wikimedia Commons · public domain`),
      f('improvising-a-war-fig5a-lincoln.jpg', `Abraham Lincoln in 1861, the self-taught prairie lawyer whose entire military record was a mosquito-bitten stint in the Black Hawk War. He would teach himself how to run a war out loud, and become the better commander-in-chief of the two.`, `Mathew Brady · 1861 · Library of Congress / Wikimedia Commons · public domain`),
      f('improvising-a-war-fig5b-davis.jpg', `Jefferson Davis around 1861, the new Confederate president. On paper he was built for the job (West Point, a Mexican War wound, a turn as U.S. Secretary of War), and would rather have been a general. He raised an army for a republic founded to keep four million people enslaved.`, `Unknown photographer · c. 1861 · Library of Congress / Wikimedia Commons · public domain`),
    ],
  },
  {
    slug: 'the-limited-war-ends', battleId: 'mil-1862', battleName: 'The Limited War Ends',
    dir: 'how-the-war-was-fought', theatreId: 'howfought',
    theatreHref: '/war-civil-war/how-the-war-was-fought', accentExpr: 'WAR_ACCENT',
    endHref: '/war-civil-war/how-the-war-was-fought',
    eyebrow: `The year the short war died`,
    hero: { image: '/war-img/the-limited-war-ends-hero.jpg', palette: ['#3d3c1e', '#4a5048', '#8aadad'], credit: `Kurz & Allison · “Battle of Antietam,” chromolithograph, c. 1888 · Library of Congress Prints & Photographs Division (pga.01841) · public domain`, focus: 'center 42%', scale: 1.05 },
    end: { kicker: `Now a war on slavery`, label: `Back to the Military Story` },
    meanwhile: { region: `the war at large, 1863`, title: `The Turning`, body: `With emancipation now a war aim and Black men entering the Union ranks, 1863 became the year the long war turned. Two victories in the same week of July, Vicksburg in the West and Gettysburg in the East, split the Confederacy along its river and ended Lee’s last invasion of the North. The chapter argues the war was really won in the West, even as the East got the headlines.` },
    markers: [
      f('the-limited-war-ends-fig1-battlefield-dead.jpg', `Alexander Gardner photographed Confederate dead gathered for burial at Antietam in September 1862. When Brady put Gardner’s Antietam photographs on show in New York that October, the crowds who lined up to see them had their first real glimpse of what the war looked like.`, `Alexander Gardner · September 1862 · Library of Congress Prints & Photographs Division (cwpb.01094) · public domain`),
      f('the-limited-war-ends-fig5-mcclellan.jpg', `Major General George B. McClellan in 1862. He drilled the Army of the Potomac into the finest force the country had ever fielded, then spent the year finding reasons not to use it.`, `Mathew B. Brady · 1862 · Library of Congress Prints & Photographs Division, Brady-Handy Collection (LC-BH82-1334) · public domain`),
      f('the-limited-war-ends-fig2-river-gunboats.jpg', `Alexander Simplot’s wood engraving for Harper’s Weekly shows Foote’s ironclad gunboats hammering the water batteries at Fort Donelson. The iron armor shrugged off Confederate shot that would have sunk any wooden warship.`, `Alexander Simplot · Harper’s Weekly, March 15, 1862 · Missouri History Museum · public domain`),
      f('the-limited-war-ends-fig3-robert-e-lee.jpg', `Robert E. Lee around 1862, about the time he took command of what he would call the Army of Northern Virginia. Within weeks of this portrait he launched the Seven Days and drove the Union army back from Richmond.`, `Unknown photographer · c. 1862 · National Park Service · public domain`),
      f('the-limited-war-ends-fig4-antietam-dead.jpg', `Confederate dead along a fence on the Hagerstown road at Antietam, September 1862. This photograph, and the dozen others Gardner made that week, was the first time most Americans saw the war’s dead in the field.`, `Alexander Gardner · September 1862 · Library of Congress Prints & Photographs Division (cwpb.01097) · public domain`),
      f('the-limited-war-ends-fig6-emancipation-reading.jpg', `An engraving after Francis Carpenter’s painting of Lincoln reading the first draft of the Emancipation Proclamation to his cabinet, July 22, 1862. Seward, seated at far left, urged him to hold it until a battlefield victory gave it credibility.`, `F. B. Carpenter (painter), A. H. Ritchie (engraver) · published 1866 · U.S. Senate Art & History Collection · public domain`),
    ],
  },
  {
    slug: 'the-turning', battleId: 'mil-1863', battleName: 'The Turning',
    dir: 'how-the-war-was-fought', theatreId: 'howfought',
    theatreHref: '/war-civil-war/how-the-war-was-fought', accentExpr: 'WAR_ACCENT',
    endHref: '/war-civil-war/how-the-war-was-fought',
    eyebrow: `The year the war was decided`,
    hero: { image: '/war-img/the-turning-hero.jpg', palette: ['#404040', '#404020', '#402020'], credit: `Kurz & Allison · “Siege of Vicksburg,” chromolithograph, c. 1888 · Library of Congress Prints & Photographs Division (LC-DIG-pga-01871) · public domain`, focus: 'center 42%', scale: 1.06 },
    end: { kicker: `The war was won in the West`, label: `Back to the Military Story` },
    meanwhile: { region: `all theaters, 1864`, title: `Coordinated Attrition`, body: `With Grant now general-in-chief, 1864 becomes the first year the Union armies move as one machine, advancing on every front at once so the South can no longer shuttle troops to plug each hole in turn. Grant grinds south toward Richmond while Sherman drives on Atlanta, and the arithmetic that had been bleeding the Confederacy slowly turns into a vise. As the casualty lists grow unbearable, the battlefield collides with the ballot box.` },
    markers: [
      f('the-turning-fig1-mississippi-map.jpg', `Robert Knox Sneden’s 1863 map of the rebel position at Vicksburg, showing the Confederate fortifications, the Union gunboats, and the river closed above and below the city.`, `Robert Knox Sneden · 1863 · Library of Congress Geography & Map Division (gvhs01.vhs00140) · public domain`),
      f('the-turning-fig3-vicksburg.jpg', `Union soldiers of Logan’s division march into Vicksburg on July 4, 1863, the day of Pemberton’s surrender. The Confederacy’s last lock on the Mississippi had fallen.`, `Theodore R. Davis · “Battles and Leaders of the Civil War,” 1887 · British Library · public domain`),
      f('the-turning-fig4-gettysburg.jpg', `Timothy O’Sullivan’s “A Harvest of Death,” Union dead on the field at Gettysburg, July 1863. It is the war’s most famous photograph of what the fighting cost, made days after Pickett’s Charge.`, `Timothy H. O’Sullivan (negative), Alexander Gardner (print) · July 1863 · Library of Congress Prints & Photographs Division · public domain`),
      f('the-turning-fig5-fort-wagner.jpg', `Kurz & Allison’s print of the 54th Massachusetts storming Battery Wagner on July 18, 1863, the assault that proved to a skeptical North that Black soldiers would fight and die for the Union.`, `Kurz & Allison · chromolithograph, 1890 · Library of Congress Prints & Photographs Division (LC-DIG-cph-3b52016) · public domain`),
      f('the-turning-fig2-usct.jpg', `“Come and Join Us Brothers,” a recruiting broadside for the United States Colored Troops, showing Black soldiers in Union blue marching behind the flag.`, `Supervisory Committee for Recruiting Colored Regiments, Philadelphia · 1865 · public domain`),
      f('the-turning-fig6-chattanooga.jpg', `Alfred Waud’s field sketch of the Union charge up Missionary Ridge, November 25, 1863, the day Grant’s western armies shattered Bragg’s line and opened the road to Atlanta.`, `Alfred R. Waud · 1863 · Library of Congress Prints & Photographs Division · public domain`),
    ],
  },
  {
    slug: 'coordinated-attrition', battleId: 'mil-1864', battleName: 'Coordinated Attrition',
    dir: 'how-the-war-was-fought', theatreId: 'howfought',
    theatreHref: '/war-civil-war/how-the-war-was-fought', accentExpr: 'WAR_ACCENT',
    endHref: '/war-civil-war/how-the-war-was-fought',
    eyebrow: `The year the North stopped fighting five wars`,
    hero: { image: '/war-img/coordinated-attrition-hero.jpg', palette: ['#2d3326', '#3a3428', '#1f2d3a'], credit: `William Waud · “View from Weitzel’s signal tower, Bermuda Hundred,” 1864 · Library of Congress Prints & Photographs Division (LCCN 2004661264) · public domain`, focus: 'center 42%', scale: 1.05 },
    end: { kicker: `The vise closes`, label: `Back to the Military Story` },
    meanwhile: { region: `Virginia, 1865`, title: `The Collapse`, body: `By 1865 the arithmetic had run its course. Lee’s army, pinned in the Petersburg trenches and starving, finally broke; Richmond fell, the lines unraveled at Five Forks, and the chase ended at Appomattox. The chapter follows the last weeks, the surrender that ended the fighting, and the way that surrender locked emancipation in for good.` },
    markers: [
      f('coordinated-attrition-fig1-grant-city-point.jpg', `Grant and his staff at his City Point headquarters on the James River, summer 1864. The new general-in-chief of all the Union armies ran the war from this field base for nearly ten months.`, `Civil War glass negative · 1864 · Library of Congress Prints & Photographs Division (LCCN 2013647596) · public domain`),
      f('coordinated-attrition-fig4-overland.jpg', `Burial details collect the remains of soldiers killed at Cold Harbor, photographed in 1865. Grant’s frontal assault there on June 3, 1864, roughly 7,000 men shot down in under an hour, was the one attack he said he always regretted.`, `John Reekie (negative), Alexander Gardner (print) · “Gardner’s Photographic Sketch Book of the War,” 1865 · Library of Congress Prints & Photographs Division · public domain`),
      f('coordinated-attrition-fig2-spotsylvania-dead.jpg', `Confederate dead after the fighting at Spotsylvania Court House, May 1864. The hand-to-hand killing at the Bloody Angle, hours of it in the rain, was among the most savage close combat of the war.`, `Civil War glass negative · May 1864 · Library of Congress Prints & Photographs Division (LCCN 2012647847) · public domain`),
      f('coordinated-attrition-fig3-atlanta-ruins.jpg', `The ruins of Atlanta’s railroad roundhouse, 1864. The city had been the supply hub of the Confederate Army of Tennessee; Sherman’s men wrecked its rail works before marching to the sea.`, `George N. Barnard · c. 1864 · public domain`),
      f('coordinated-attrition-fig6-election-1864.jpg', `Abraham Lincoln, photographed February 9, 1864. Six months later he privately predicted he would lose the November election; Atlanta’s fall in September changed everything.`, `Mathew Brady · February 9, 1864 · public domain`),
      f('coordinated-attrition-fig5-mobile-bay.jpg', `“An August Morning with Farragut,” William Overend’s 1883 painting of the Battle of Mobile Bay. Farragut’s fleet drove past the mines and took the ironclad CSS Tennessee, closing the South’s last major Gulf port.`, `William H. Overend · oil on canvas, 1883 · Wadsworth Atheneum, Hartford · public domain`),
    ],
  },
  {
    slug: 'the-collapse', battleId: 'mil-1865', battleName: 'The Collapse',
    dir: 'how-the-war-was-fought', theatreId: 'howfought',
    theatreHref: '/war-civil-war/how-the-war-was-fought', accentExpr: 'WAR_ACCENT',
    endHref: '/war-civil-war/how-the-war-was-fought',
    eyebrow: `The year the system ran out`,
    hero: { image: '/war-img/the-collapse-hero.jpg', palette: ['#101010', '#2e2e2e', '#3c3c3c'], credit: `Mathew Brady / National Archives · April 1865 · public domain`, focus: 'center 42%', scale: 1.05 },
    end: { kicker: `The fighting is over`, label: `Back to the Military Story` },
    meanwhile: { region: `the war’s aftermath`, title: `The Reckoning`, body: `The guns fall silent, but the accounting does not. The war killed roughly three-quarters of a million people and freed four million, and the country it left behind had to decide what the victory had bought. The Reckoning closes the war off the battlefield: the cost, the dead, and the long unfinished work of making the freedom real.` },
    markers: [
      f('the-collapse-fig1-petersburg-trenches.jpg', `Captured Confederate soldiers at Belle Plain, Virginia, in the last year of the war. By the end of the Petersburg siege the Confederate ranks were thinning fast; Sheridan’s assault at Five Forks alone took nearly 4,000 prisoners.`, `Mathew Brady / National Archives · c. 1864–65 · public domain`),
      f('the-collapse-fig2-richmond-winter.jpg', `Southern women staging a bread riot, a scene that first erupted in Richmond in April 1863 and foreshadowed the collapse to come. By the winter of 1864–65 the shortages and runaway inflation that sparked it had reached the army itself.`, `Frank Leslie’s Illustrated Newspaper · May 23, 1863 · Library of Congress Prints & Photographs Division · public domain`),
      f('the-collapse-fig5-lincoln-richmond.jpg', `President Lincoln visits the former Confederate executive mansion in Richmond, April 4, 1865. He walked through the fallen capital on foot, surrounded by crowds of freed Black residents.`, `Joseph Becker · Frank Leslie’s Illustrated Newspaper, April 29, 1865 · Library of Congress (LCCN 2001697351) · public domain`),
      f('the-collapse-fig3-richmond-ruins.jpg', `The ruins of the Gallego flour mills, Richmond, April 1865. The gutted brick shells of the industrial district were burned when Confederate forces evacuated the city on the night of April 2.`, `Alexander Gardner and Mathew Brady · 1865 · Metropolitan Museum of Art (33.65.11) · CC0`),
      f('the-collapse-fig4-appomattox.jpg', `Lee surrenders to Grant in the parlor of the McLean house at Appomattox Court House, April 9, 1865. This 1867 lithograph shows officers of both armies waiting as the surrender terms were copied out.`, `Major & Knapp Lithography · 1867 · Library of Congress Prints & Photographs Division · public domain`),
      f('the-collapse-fig6-assassination.jpg', `The assassination of President Lincoln at Ford’s Theatre, Washington, on the night of April 14, 1865, five days after Appomattox. A period print shows Booth in the presidential box as Lincoln watched the play below.`, `E. B. & E. C. Kellogg · 1865 · Library of Congress (LCCN 2003656453) · public domain`),
    ],
  },
]

function parse(md) {
  const cut = md.indexOf('\n## MEANWHILE HANDOFF')
  const lines = (cut >= 0 ? md.slice(0, cut) : md).split('\n')
  const blocks = []
  let para = [], quote = []
  const flushP = () => { if (para.length) { blocks.push({ type: 'p', text: para.join(' ').trim() }); para = [] } }
  const flushQ = () => { if (quote.length) { blocks.push({ type: 'q', text: quote.join(' ').trim() }); quote = [] } }
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim()
    if (t === '') { flushP(); flushQ(); continue }
    if (t.startsWith('# ')) { flushP(); flushQ(); continue }
    if (t.startsWith('## ')) {
      flushP(); flushQ()
      const h = t.slice(3).trim()
      let eyebrow
      let j = i + 1
      while (j < lines.length && lines[j].trim() === '') j++
      if (j < lines.length && /^>\s*EYEBROW:/i.test(lines[j].trim())) {
        eyebrow = lines[j].trim().replace(/^>\s*EYEBROW:\s*/i, '').trim(); i = j
      }
      blocks.push({ type: 'h', text: h, eyebrow }); continue
    }
    if (/^>\s*EYEBROW:/i.test(t)) { flushP(); flushQ(); continue }
    if (t.startsWith('>')) { flushP(); const q = t.replace(/^>\s?/, ''); if (q !== '') quote.push(q); continue }
    if (t.startsWith('[FIGURE:')) { flushP(); flushQ(); blocks.push({ type: 'figmarker' }); continue }
    flushQ(); para.push(t)
  }
  flushP(); flushQ()
  return blocks
}

function build(cfg) {
  const md = readFileSync(`${ROOT}/audits/war-pipeline/${cfg.slug}-final.md`, 'utf8')
  const title = (md.match(/^# (.+)$/m) || [])[1].trim()
  const parsed = parse(md)
  let mi = 0, figCount = 0
  const out = []
  for (const b of parsed) {
    if (b.type === 'figmarker') { const fg = cfg.markers[mi++]; if (fg) { out.push({ type: 'fig', ...fg }); figCount++ }; continue }
    if (b.type === 'h' && cfg.beforeHeading?.[b.text]) for (const fg of cfg.beforeHeading[b.text]) { out.push({ type: 'fig', ...fg }); figCount++ }
    out.push(b)
    if (b.type === 'h' && cfg.afterHeading?.[b.text]) for (const fg of cfg.afterHeading[b.text]) { out.push({ type: 'fig', ...fg }); figCount++ }
  }
  const blockLines = out.map((b) => {
    if (b.type === 'h') return b.eyebrow
      ? `      { h: \`${esc(b.text)}\`, eyebrow: \`${esc(b.eyebrow)}\` },`
      : `      { h: \`${esc(b.text)}\` },`
    if (b.type === 'q') return `      { p: \`${esc(b.text)}\`, q: true },`
    if (b.type === 'fig') return `      { fig: '/war-img/${b.file}', cap: \`${esc(b.cap)}\`, credit: \`${esc(b.credit)}\` },`
    // a paragraph that is JUST a link [Story](/href) becomes a between-para "read the
    // full story" PILL (the cross-reference affordance), not inline prose.
    const lone = b.text.trim().match(/^\[([^\]]+)\]\((\/[^)\s]+)\)$/)
    if (lone) return `      { pill: '${lone[2]}', plabel: \`${esc(lone[1])}\` },`
    return `      { p: \`${esc(b.text)}\` },`
  }).join('\n')

  const comp = cfg.slug.split('-').map(s => s[0].toUpperCase() + s.slice(1)).join('') + 'ThemePage'
  // Pillar placement — defaults to Off the Battlefield (green); overridable per cfg
  // so the same builder produces the "How the War Was Fought" military-narrative
  // chapters (their own dir, theatre key, stone accent, and end link).
  const dir = cfg.dir || 'off-the-battlefield'
  const theatreId = cfg.theatreId || 'offfield'
  const theatreHref = cfg.theatreHref || `/war-civil-war/${dir}`
  const accentExpr = cfg.accentExpr || 'ACCENTS.otbf'
  const endHref = cfg.endHref || theatreHref
  const page = `'use client'

// THEME section — ${cfg.battleName} (Off the Battlefield, kind=theme). Built through
// the war content pipeline (fact pack → author(Opus) → five gates [fact-check +
// storytelling + comprehensiveness + clarity + Lost Cause/framing] → revise → images).
// Source + gate records: audits/war-pipeline/${cfg.slug}-*.md. Green accent; no stat
// block, no map. 'use client' is REQUIRED (reads ACCENTS from a client module).
// GENERATED from ${cfg.slug}-final.md by scripts/_build-war-themes.mjs — do not hand-edit
// the prose here; edit the final.md and rebuild.

import { BattleSectionReader, type Narr } from '@/components/mode/battle-reader'
import { ACCENTS${accentExpr.includes('WAR_ACCENT') ? ', WAR_ACCENT' : ''} } from '@/components/mode/war-chrome'

const NARR: Record<string, Narr> = {
  main: {
    eyebrow: \`${esc(cfg.eyebrow)}\`,
    title: \`${esc(title)}\`,
    blocks: [
${blockLines}
    ],
    meanwhile: {
      region: \`${esc(cfg.meanwhile.region)}\`,
      title: \`${esc(cfg.meanwhile.title)}\`,
      body: \`${esc(cfg.meanwhile.body)}\`,
    },
  },
}

export default function ${comp}() {
  return (
    <BattleSectionReader
      sections={NARR}
      id="main"
      slug="${cfg.slug}"
      battleName="${cfg.battleName.replace(/"/g, '\\"')}"
      theatreId="${theatreId}"
      battleId="${cfg.battleId}"
      theatreHref="${theatreHref}"
      accent={${accentExpr}}
      heroImage="${cfg.hero.image}"
      heroPalette={${JSON.stringify(cfg.hero.palette)}}
      heroCredit={\`${esc(cfg.hero.credit)}\`}${cfg.hero.focus ? `\n      heroFocus="${cfg.hero.focus}"` : ''}${cfg.hero.scale ? `\n      heroScale={${cfg.hero.scale}}` : ''}
      endHref="${endHref}"
      endKicker={\`${esc(cfg.end.kicker)}\`}
      endLabel={\`${esc(cfg.end.label)}\`}
    />
  )
}
`
  const dest = `${ROOT}/src/app/war-civil-war/${dir}/${cfg.slug}/page.tsx`
  mkdirSync(dirname(dest), { recursive: true })
  writeFileSync(dest, page)
  const proseWords = out.filter(b => b.type === 'p').reduce((n, b) => n + b.text.split(/\s+/).length, 0)
  console.log(`${cfg.slug}: ${out.length} blocks, ${figCount} figures, ~${proseWords} prose words -> ${dest.replace(ROOT + '/', '')}`)
}

// Hydrate fromJson configs: pull the hero image+credit and per-figure caption/credit
// from <slug>-figures.json (produced by scripts/_parse-img-manifests.mjs), and build
// the afterHeading/beforeHeading placement maps the figure injector expects.
function hydrate(cfg) {
  const p = `${ROOT}/audits/war-pipeline/${cfg.slug}-figures.json`
  if (!existsSync(p)) throw new Error(`missing figures JSON for ${cfg.slug} — run scripts/_parse-img-manifests.mjs`)
  const { hero, figs } = JSON.parse(readFileSync(p, 'utf8'))
  cfg.hero = { ...cfg.hero, image: `/war-img/${hero.file}`, credit: hero.credit }
  cfg.afterHeading = {}; cfg.beforeHeading = {}; cfg.markers = []
  for (const f of figs) {
    const bucket = f.type === 'before' ? cfg.beforeHeading : cfg.afterHeading
    ;(bucket[f.heading] ||= []).push({ file: f.file, cap: f.caption, credit: f.credit })
  }
  return cfg
}

for (const c of CONFIGS) build(c.fromJson ? hydrate(c) : c)
console.log('done')
