// Canonical Civil War timeline data — the 46 CWSAC Class-A (Major/Decisive)
// battles + the locked ~15 non-battle/theme sections (audits/war-engagements-
// roster.md). One source of truth for EVERY war-page timeline: the home spine,
// the home theatre dossier, and the Eastern/Western theatre pages all read from
// here (de-dupes the three former hand-maintained copies). Dates are sourced to
// month for ordering; the deeper battle layer (mid/minor) is out of scope.

export type Theatre = 'east' | 'west' | 'tmis' | 'naval'
export type Size = 's' | 'm' | 'l' | 'xl'
export type SpineType = 'CAUSE' | 'BATTLE' | 'POLITICS' | 'SOCIETY' | 'AFTERMATH'

export interface Major {
  id: string; name: string; year: number; m: number; mo: string; place: string
  theatre: Theatre; size: Size; href?: string; img?: string; short?: string
}

// Chronological within each theatre. m = sort month (1–12); mo = display string.
export const MAJORS: Major[] = [
  // ── Eastern (20) ──────────────────────────────────────────────
  { id: 'e-bullrun1', name: 'First Bull Run', year: 1861, m: 7, mo: 'Jul', place: 'Manassas, VA', theatre: 'east', size: 'l' },
  { id: 'e-winchester1', name: 'First Winchester', year: 1862, m: 5, mo: 'May', place: 'Winchester, VA', theatre: 'east', size: 's' },
  { id: 'e-gainesmill', name: "Gaines' Mill", year: 1862, m: 6, mo: 'Jun', place: 'Hanover Co., VA', theatre: 'east', size: 's' },
  { id: 'e-malvern', name: 'Malvern Hill', year: 1862, m: 7, mo: 'Jul', place: 'Henrico Co., VA', theatre: 'east', size: 's' },
  { id: 'e-bullrun2', name: 'Second Bull Run', year: 1862, m: 8, mo: 'Aug', place: 'Manassas, VA', theatre: 'east', size: 'm' },
  { id: 'e-antietam', name: 'Antietam', year: 1862, m: 9, mo: 'Sep', place: 'Sharpsburg, MD', theatre: 'east', size: 'l', href: '/war-civil-war/eastern/antietam', img: '/war-img/antietam-hero.jpg' },
  { id: 'e-fredericksburg', name: 'Fredericksburg', year: 1862, m: 12, mo: 'Dec', place: 'Fredericksburg, VA', theatre: 'east', size: 'm' },
  { id: 'e-chancellorsville', name: 'Chancellorsville', year: 1863, m: 5, mo: 'May', place: 'Spotsylvania Co., VA', theatre: 'east', size: 'l' },
  { id: 'e-gettysburg', name: 'Gettysburg', year: 1863, m: 7, mo: 'Jul', place: 'Adams Co., PA', theatre: 'east', size: 'xl', href: '/war-civil-war/eastern/gettysburg', img: '/war-img/gettysburg-hero.jpg' },
  { id: 'e-wilderness', name: 'The Wilderness', year: 1864, m: 5, mo: 'May', place: 'Spotsylvania Co., VA', theatre: 'east', size: 'l' },
  { id: 'e-spotsylvania', name: 'Spotsylvania Court House', year: 1864, m: 5, mo: 'May', place: 'Spotsylvania Co., VA', theatre: 'east', size: 'm' },
  { id: 'e-coldharbor', name: 'Cold Harbor', year: 1864, m: 6, mo: 'Jun', place: 'Hanover Co., VA', theatre: 'east', size: 'm' },
  { id: 'e-petersburg2', name: 'Second Petersburg', year: 1864, m: 6, mo: 'Jun', place: 'Petersburg, VA', theatre: 'east', size: 'm' },
  { id: 'e-crater', name: 'The Crater', year: 1864, m: 7, mo: 'Jul', place: 'Petersburg, VA', theatre: 'east', size: 's' },
  { id: 'e-opequon', name: 'Opequon', year: 1864, m: 9, mo: 'Sep', place: 'Winchester, VA', theatre: 'east', size: 's' },
  { id: 'e-cedarcreek', name: 'Cedar Creek', year: 1864, m: 10, mo: 'Oct', place: 'Shenandoah Valley, VA', theatre: 'east', size: 's' },
  { id: 'e-fortstedman', name: 'Fort Stedman', year: 1865, m: 3, mo: 'Mar', place: 'Petersburg, VA', theatre: 'east', size: 's' },
  { id: 'e-fiveforks', name: 'Five Forks', year: 1865, m: 4, mo: 'Apr', place: 'Dinwiddie Co., VA', theatre: 'east', size: 'm' },
  { id: 'e-petersburg3', name: 'Third Petersburg', year: 1865, m: 4, mo: 'Apr', place: 'Petersburg, VA', theatre: 'east', size: 'm' },
  { id: 'e-appomattox', name: 'Appomattox Court House', year: 1865, m: 4, mo: 'Apr', place: 'Appomattox Co., VA', theatre: 'east', size: 'l' },

  // ── Western (15) ──────────────────────────────────────────────
  { id: 'w-donelson', name: 'Fort Donelson', year: 1862, m: 2, mo: 'Feb', place: 'Dover, TN', theatre: 'west', size: 'm' },
  { id: 'w-shiloh', name: 'Shiloh', year: 1862, m: 4, mo: 'Apr', place: 'Pittsburg Landing, TN', theatre: 'west', size: 'l', img: '/war-img/shiloh-hero.jpg' },
  { id: 'w-corinth', name: 'Corinth', year: 1862, m: 10, mo: 'Oct', place: 'Corinth, MS', theatre: 'west', size: 's' },
  { id: 'w-perryville', name: 'Perryville', year: 1862, m: 10, mo: 'Oct', place: 'Perryville, KY', theatre: 'west', size: 'm' },
  { id: 'w-stonesriver', name: 'Stones River', year: 1862, m: 12, mo: 'Dec', place: 'Murfreesboro, TN', theatre: 'west', size: 'm' },
  { id: 'w-championhill', name: 'Champion Hill', year: 1863, m: 5, mo: 'May', place: 'Hinds Co., MS', theatre: 'west', size: 'm' },
  { id: 'w-vicksburg', name: 'Vicksburg', year: 1863, m: 7, mo: 'May–Jul', place: 'Vicksburg, MS', theatre: 'west', size: 'l' },
  { id: 'w-chickamauga', name: 'Chickamauga', year: 1863, m: 9, mo: 'Sep', place: 'Catoosa Co., GA', theatre: 'west', size: 'l' },
  { id: 'w-lookout', name: 'Lookout Mountain', year: 1863, m: 11, mo: 'Nov', place: 'Chattanooga, TN', theatre: 'west', size: 's' },
  { id: 'w-missionary', name: 'Missionary Ridge', year: 1863, m: 11, mo: 'Nov', place: 'Chattanooga, TN', theatre: 'west', size: 'm' },
  { id: 'w-jonesborough', name: 'Jonesborough', year: 1864, m: 9, mo: 'Sep', place: 'Jonesboro, GA', theatre: 'west', size: 's' },
  { id: 'w-franklin', name: 'Franklin', year: 1864, m: 11, mo: 'Nov', place: 'Franklin, TN', theatre: 'west', size: 'm' },
  { id: 'w-nashville', name: 'Nashville', year: 1864, m: 12, mo: 'Dec', place: 'Nashville, TN', theatre: 'west', size: 'l' },
  { id: 'w-bentonville', name: 'Bentonville', year: 1865, m: 3, mo: 'Mar', place: 'Bentonville, NC', theatre: 'west', size: 'm' },
  { id: 'w-blakeley', name: 'Fort Blakeley', year: 1865, m: 4, mo: 'Apr', place: 'Baldwin Co., AL', theatre: 'west', size: 's' },

  // ── Trans-Mississippi (7) ─────────────────────────────────────
  { id: 't-wilsonscreek', name: "Wilson's Creek", year: 1861, m: 8, mo: 'Aug', place: 'Springfield, MO', theatre: 'tmis', size: 'm' },
  { id: 't-pearidge', name: 'Pea Ridge', year: 1862, m: 3, mo: 'Mar', place: 'Benton Co., AR', theatre: 'tmis', size: 'm' },
  { id: 't-glorieta', name: 'Glorieta Pass', year: 1862, m: 3, mo: 'Mar', place: 'New Mexico Terr.', theatre: 'tmis', size: 's' },
  { id: 't-island10', name: 'Island Number Ten', year: 1862, m: 4, mo: 'Apr', place: 'Mississippi River, MO', theatre: 'tmis', size: 's' },
  { id: 't-porthudson', name: 'Port Hudson', year: 1863, m: 7, mo: 'May–Jul', place: 'Port Hudson, LA', theatre: 'tmis', size: 'm' },
  { id: 't-mansfield', name: 'Mansfield', year: 1864, m: 4, mo: 'Apr', place: 'De Soto Parish, LA', theatre: 'tmis', size: 's' },
  { id: 't-westport', name: 'Westport', year: 1864, m: 10, mo: 'Oct', place: 'Kansas City, MO', theatre: 'tmis', size: 'm' },

  // ── Naval & Coastal (4) ───────────────────────────────────────
  { id: 'n-sumter', name: 'Fort Sumter', year: 1861, m: 4, mo: 'Apr', place: 'Charleston, SC', theatre: 'naval', size: 'l' },
  { id: 'n-jacksonstphilip', name: 'Forts Jackson & St. Philip', year: 1862, m: 4, mo: 'Apr', place: 'Mississippi River, LA', theatre: 'naval', size: 's' },
  { id: 'n-mobilebay', name: 'Mobile Bay', year: 1864, m: 8, mo: 'Aug', place: 'Mobile, AL', theatre: 'naval', size: 'm' },
  { id: 'n-fortfisher2', name: 'Second Fort Fisher', year: 1865, m: 1, mo: 'Jan', place: 'Wilmington, NC', theatre: 'naval', size: 'm' },
]

export interface Theme {
  id: string; name: string; phase: string; type: SpineType; size: Size
  date: string; year: number; m: number; hook: string; href?: string; short?: string; img?: string
}

// The non-battle/theme sections, placed on the home spine by phase. Roster expanded
// 2026-05-23 after comprehensiveness/framing gates on the LIST itself (audits/
// war-content-pipeline.md), across three passes:
//  • whole-roster: broadened th-usct -> "Freedom Seekers & the USCT" (self-emancipation +
//    soldiers); added th-northwithin (dissent + the 1864 election).
//  • causes / "the rise of Lincoln": added th-lincoln1860 (1858 debates -> Cooper Union ->
//    the four-way 1860 election -> secession winter; previously untold, fell between
//    th-road and th-twogov).
//  • lead-ups + the BLACK PERSPECTIVE + secession: added th-freedomstruggle (antebellum
//    Black-led abolition — Walker, Douglass, Tubman, the Underground Railroad, the slave
//    narratives — and the Fugitive Slave Act, which previously had NO home; the Black story
//    used to start at 1861). Reshaped th-road to OPEN on the Mexican War spoils + the
//    Missouri Compromise line (the "why 1850" it was missing).
// FRAMING REQUIREMENTS when these are built (the standing framing gate enforces; lock the
// homes): th-twogov MUST quote the Confederate Constitution's explicit slavery clauses +
// the Cornerstone Speech + the secession declarations (slavery in the South's own words —
// the primary-source rebuttal to "states' rights"). th-freedomstruggle tells the Black
// story as AGENCY, not only suffering. Deeper secessionist ideology (Calhoun/nullification,
// the fire-eaters) is a build-time element of th-road/th-twogov, not its own theme.
// Considered but PARKED: a Confederate home-front/war-finance theme; a Native-Americans
// theme (Stand Watie's Indian Territory + the 1862 Dakota War).
export const THEMES: Theme[] = [
  { id: 'th-slavery', name: 'Slavery & the Cotton Economy', phase: 'causes', type: 'CAUSE', size: 'l', date: '1793–1860', year: 1850, m: 1, hook: 'King Cotton, the domestic slave trade, and a Southern economy built on human bondage.', href: '/war-civil-war/off-the-battlefield/slavery-cotton', short: 'Slavery & Cotton', img: '/war-img/slavery-cotton-hero.jpg' },
  { id: 'th-freedomstruggle', name: 'The Freedom Struggle', phase: 'causes', type: 'SOCIETY', size: 'l', date: '1829–1861', year: 1850, m: 9, hook: 'David Walker, Frederick Douglass, Harriet Tubman and the Underground Railroad — Black-led abolition, the slave narratives, and the Fugitive Slave Act that turned the North against slavery.', href: '/war-civil-war/off-the-battlefield/freedom-struggle', short: 'The Freedom Struggle', img: '/war-img/freedom-struggle-hero.jpg' },
  { id: 'th-road', name: 'The Road to War', phase: 'causes', type: 'CAUSE', size: 'l', date: '1846–1860', year: 1855, m: 1, hook: 'The Mexican War handed the country half a continent to fight over, and the Missouri Compromise line that had kept the peace since 1820 couldn’t hold it — then Uncle Tom’s Cabin, Kansas-Nebraska and a new Republican Party, Bleeding Kansas, Dred Scott, and John Brown drove it to the cliff edge.', href: '/war-civil-war/off-the-battlefield/road-to-war', short: 'Road to War', img: '/war-img/road-to-war-hero-reynolds-map.jpg' },
  { id: 'th-lincoln1860', name: 'Lincoln’s Rise & the Election of 1860', phase: 'causes', type: 'POLITICS', size: 'l', date: '1858–1861', year: 1860, m: 11, hook: 'How a one-term prairie lawyer who had lost a Senate race became president without a single Southern vote — the 1858 debates, Cooper Union, the four-way election of 1860, and the secession winter it set off.', href: '/war-civil-war/off-the-battlefield/lincolns-rise', short: 'Lincoln’s Rise', img: '/war-img/lincolns-rise-hero-cooper-union-brady.jpg' },
  { id: 'th-twogov', name: 'Two Governments', phase: 'causes', type: 'POLITICS', size: 'm', date: '1861', year: 1860, m: 12, hook: 'Lincoln versus Davis — and the desperate fight to keep the border states in the Union.', href: '/war-civil-war/off-the-battlefield/two-governments', short: 'Two Governments', img: '/war-img/two-governments-hero.jpg' },

  { id: 'th-diplomacy', name: 'Britain, France & Cotton', phase: 'hard', type: 'POLITICS', size: 'm', date: '1861–1863', year: 1862, m: 2, hook: 'Cotton diplomacy, the Trent Affair, and the foreign recognition the South never got.' },
  { id: 'th-ironclads', name: 'Ironclads & the Blockade', phase: 'hard', type: 'SOCIETY', size: 'm', date: '1862', year: 1862, m: 3, hook: 'The Anaconda tightens; the Monitor and the Virginia change naval war overnight.' },
  { id: 'th-tech', name: 'The New Way of War', phase: 'hard', type: 'SOCIETY', size: 'm', date: '1861–1865', year: 1862, m: 6, hook: 'Rifled muskets, the railroad, and the telegraph remade how battles were fought and supplied.' },
  { id: 'th-homefront', name: 'The Home Front', phase: 'hard', type: 'SOCIETY', size: 'm', date: '1861–1865', year: 1862, m: 7, hook: 'Draft riots, war economies, and women running the farms and the hospitals.' },
  { id: 'th-medicine', name: 'Medicine & Disease', phase: 'hard', type: 'SOCIETY', size: 'm', date: '1861–1865', year: 1862, m: 8, hook: 'Two soldiers died of disease for every one killed in battle.' },

  { id: 'th-emancipation', name: 'The Emancipation Proclamation', phase: 'turning', type: 'POLITICS', size: 'l', date: 'Jan 1863', year: 1863, m: 1, hook: 'Lincoln changes what the entire war is for.', href: '/war-civil-war/off-the-battlefield/emancipation', short: 'Emancipation', img: '/war-img/emancipation-hero.jpg' },
  { id: 'th-usct', name: 'Freedom Seekers & the USCT', phase: 'turning', type: 'SOCIETY', size: 'l', date: '1861–1865', year: 1863, m: 5, hook: 'The enslaved freed themselves — fleeing to Union lines by the hundreds of thousands, filling the contraband camps, and finally putting on Union blue: nearly 180,000 Black soldiers who changed the war’s meaning.' },

  { id: 'th-prisons', name: 'Andersonville & the Prisons', phase: 'total', type: 'AFTERMATH', size: 'm', date: '1864–1865', year: 1864, m: 2, hook: 'Prison camps North and South where tens of thousands died of disease and starvation.' },
  { id: 'th-atrocity', name: 'Fort Pillow & the Guerrilla War', phase: 'total', type: 'AFTERMATH', size: 'm', date: '1862–1865', year: 1864, m: 5, hook: 'No-quarter killings and the savage irregular war along the borderlands.' },
  { id: 'th-northwithin', name: 'The War Within the North', phase: 'total', type: 'POLITICS', size: 'l', date: '1861–1864', year: 1864, m: 11, hook: 'Copperheads, jailed editors, and suspended habeas corpus — climaxing in the 1864 election, a wartime referendum on the war that Lincoln feared he would lose.' },

  { id: 'th-assassination', name: 'Lincoln Assassinated', phase: 'after', type: 'AFTERMATH', size: 'm', date: 'Apr 1865', year: 1865, m: 5, hook: 'Five days after Appomattox, Lincoln is murdered at Ford’s Theatre.' },
  { id: 'th-reckoning', name: 'The Reckoning', phase: 'after', type: 'AFTERMATH', size: 'l', date: '1865 →', year: 1865, m: 12, hook: 'Three-quarters of a million dead, four million freed, and the unfinished work that becomes Reconstruction.' },
]

export const THEATRE_LABEL: Record<Theatre, string> = { east: 'Eastern', west: 'Western', tmis: 'Trans-Miss', naval: 'Naval' }

// Theatre navigation — the single source for the breadcrumb theatre-switch
// dropdown and the home "open theatre" links. `ready` flips to true when the
// page exists; an un-ready entry renders as a disabled "soon" row. The fifth
// lane (Off the Battlefield) is the thematic, non-geographic sections.
export interface TheatreNav { id: Theatre | 'offfield'; label: string; href: string; ready: boolean }
export const THEATRE_NAV: TheatreNav[] = [
  { id: 'east', label: 'Eastern Theatre', href: '/war-civil-war/eastern', ready: true },
  { id: 'west', label: 'Western Theatre', href: '/war-civil-war/western', ready: true },
  { id: 'tmis', label: 'Trans-Mississippi', href: '/war-civil-war/trans-mississippi', ready: true },
  { id: 'naval', label: 'Naval & Coastal', href: '/war-civil-war/naval', ready: true },
  { id: 'offfield', label: 'Off the Battlefield', href: '/war-civil-war/off-the-battlefield', ready: true },
]

export const majorsOf = (t: Theatre): Major[] => MAJORS.filter(b => b.theatre === t)
export const majorCount = (t: Theatre): number => majorsOf(t).length

// Per-theatre event rows (the dossier / interleaved-campaign timelines). `m` is
// the numeric sort month; `ready` = the battle has a built page.
export const theatreEv = (t: Theatre) =>
  majorsOf(t).map(b => ({ mo: b.mo, year: b.year, m: b.m, name: b.name, place: b.place, size: b.size, href: b.href, ready: !!b.href }))

// A theatre's own Timeline-view spine (BattleCard rows).
export const theatreSpine = (t: Theatre) =>
  majorsOf(t).map(b => ({ id: b.id, size: b.size, name: b.name, date: `${b.mo} ${b.year}`, place: b.place, href: b.href, img: b.img, ready: !!b.href }))

// ── Home spine: themes + all majors, phase-tagged, chronologically sorted ──
export interface SpineNode {
  id: string; phase: string; type: SpineType; size: Size
  name: string; date: string; sub?: string; hook?: string; href?: string; img?: string
}
const phaseOfYear = (y: number): string =>
  y <= 1860 ? 'causes' : y === 1861 ? 'outbreak' : y === 1862 ? 'hard' : y === 1863 ? 'turning' : 'total'

export const SPINE_NODES: SpineNode[] = [
  ...THEMES.map<SpineNode & { _s: number }>(t => ({
    id: t.id, phase: t.phase, type: t.type, size: t.size, name: t.name, date: t.date, hook: t.hook, href: t.href, img: t.img, _s: t.year * 100 + t.m,
  })),
  ...MAJORS.map<SpineNode & { _s: number }>(b => ({
    id: b.id, phase: phaseOfYear(b.year), type: 'BATTLE', size: b.size, name: b.name,
    date: `${b.mo} ${b.year}`, sub: `${b.place} · ${THEATRE_LABEL[b.theatre]}`, href: b.href, img: b.img, _s: b.year * 100 + b.m,
  })),
]
  .sort((a, b) => a._s - b._s)
  .map(({ _s, ...n }) => n)
