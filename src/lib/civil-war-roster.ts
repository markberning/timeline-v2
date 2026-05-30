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
  theatre: Theatre; size: Size; href?: string; img?: string; short?: string; hook?: string
}

// Chronological within each theatre. m = sort month (1–12); mo = display string.
export const MAJORS: Major[] = [
  // ── Eastern (20) ──────────────────────────────────────────────
  { id: 'e-bullrun1', name: 'First Bull Run', year: 1861, m: 7, mo: 'Jul', place: 'Manassas, VA', theatre: 'east', size: 'l', href: '/war-civil-war/eastern/bull-run', img: '/war-img/bull-run-hero.jpg', hook: 'The first big battle of the war — and the day the dream of a short one died.' },
  { id: 'e-winchester1', name: 'First Winchester', year: 1862, m: 5, mo: 'May', place: 'Winchester, VA', theatre: 'east', size: 's', href: '/war-civil-war/eastern/first-winchester', img: '/war-img/first-winchester-hero.jpg', hook: 'The climax of Stonewall Jackson’s Valley Campaign.' },
  { id: 'e-gainesmill', name: "Gaines' Mill", year: 1862, m: 6, mo: 'Jun', place: 'Hanover Co., VA', theatre: 'east', size: 's', href: '/war-civil-war/eastern/gaines-mill', img: '/war-img/gaines-mill-hero.jpg', hook: 'Lee’s first victory — the Union drive on Richmond turned back.' },
  { id: 'e-malvern', name: 'Malvern Hill', year: 1862, m: 7, mo: 'Jul', place: 'Henrico Co., VA', theatre: 'east', size: 's', href: '/war-civil-war/eastern/malvern-hill', img: '/war-img/malvern-hill-hero.jpg', hook: 'The Union won the field and lost the campaign — the Seven Days’ bloody end.' },
  { id: 'e-bullrun2', name: 'Second Bull Run', year: 1862, m: 8, mo: 'Aug', place: 'Manassas, VA', theatre: 'east', size: 'm' },
  { id: 'e-antietam', name: 'Antietam', year: 1862, m: 9, mo: 'Sep', place: 'Sharpsburg, MD', theatre: 'east', size: 'l', href: '/war-civil-war/eastern/antietam', img: '/war-img/antietam-hero.jpg', hook: 'The bloodiest single day in American history — 23,000 fell in twelve hours.' },
  { id: 'e-fredericksburg', name: 'Fredericksburg', year: 1862, m: 12, mo: 'Dec', place: 'Fredericksburg, VA', theatre: 'east', size: 'm' },
  { id: 'e-chancellorsville', name: 'Chancellorsville', year: 1863, m: 5, mo: 'May', place: 'Spotsylvania Co., VA', theatre: 'east', size: 'l' },
  { id: 'e-gettysburg', name: 'Gettysburg', year: 1863, m: 7, mo: 'Jul', place: 'Adams Co., PA', theatre: 'east', size: 'xl', href: '/war-civil-war/eastern/gettysburg', img: '/war-img/gettysburg-hero.jpg', hook: 'Three days that turned the war — Lee never invaded the North again.' },
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
  { id: 'w-donelson', name: 'Fort Donelson', year: 1862, m: 2, mo: 'Feb', place: 'Dover, TN', theatre: 'west', size: 'm', href: '/war-civil-war/western/fort-donelson', img: '/war-img/fort-donelson-hero.jpg', hook: 'The surrender that made Grant — and cracked the Confederate West wide open.' },
  { id: 'w-shiloh', name: 'Shiloh', year: 1862, m: 4, mo: 'Apr', place: 'Pittsburg Landing, TN', theatre: 'west', size: 'l', img: '/war-img/shiloh-hero.jpg', href: '/war-civil-war/western/shiloh', hook: 'The bloodiest battle in America to that point — and the day the war turned total.' },
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
  { id: 't-wilsonscreek', name: "Wilson's Creek", year: 1861, m: 8, mo: 'Aug', place: 'Springfield, MO', theatre: 'tmis', size: 'm', href: '/war-civil-war/trans-mississippi/wilsons-creek', img: '/war-img/wilsons-creek-hero.jpg', hook: 'The Bull Run of the West — and the first Union general killed in the war.' },
  { id: 't-pearidge', name: 'Pea Ridge', year: 1862, m: 3, mo: 'Mar', place: 'Benton Co., AR', theatre: 'tmis', size: 'm', href: '/war-civil-war/trans-mississippi/pea-ridge', img: '/war-img/pea-ridge-hero.jpg', hook: 'The battle that turned around to win — and secured Missouri for the Union.' },
  { id: 't-glorieta', name: 'Glorieta Pass', year: 1862, m: 3, mo: 'Mar', place: 'New Mexico Terr.', theatre: 'tmis', size: 's', href: '/war-civil-war/trans-mississippi/glorieta-pass', img: '/war-img/glorieta-pass-hero.jpg', hook: 'The Gettysburg of the West — winning the field, losing the war.' },
  { id: 't-island10', name: 'Island Number Ten', year: 1862, m: 4, mo: 'Apr', place: 'Mississippi River, MO', theatre: 'tmis', size: 's', href: '/war-civil-war/trans-mississippi/island-number-ten', img: '/war-img/island-number-ten-hero.jpg', hook: 'The river fortress that fell to a shovel and a thunderstorm — almost without blood.' },
  { id: 't-porthudson', name: 'Port Hudson', year: 1863, m: 7, mo: 'May–Jul', place: 'Port Hudson, LA', theatre: 'tmis', size: 'm' },
  { id: 't-mansfield', name: 'Mansfield', year: 1864, m: 4, mo: 'Apr', place: 'De Soto Parish, LA', theatre: 'tmis', size: 's' },
  { id: 't-westport', name: 'Westport', year: 1864, m: 10, mo: 'Oct', place: 'Kansas City, MO', theatre: 'tmis', size: 'm' },

  // ── Naval & Coastal (4) ───────────────────────────────────────
  { id: 'n-sumter', name: 'Fort Sumter', year: 1861, m: 4, mo: 'Apr', place: 'Charleston, SC', theatre: 'naval', size: 'l', href: '/war-civil-war/naval/fort-sumter', img: '/war-img/fort-sumter-hero.jpg', hook: 'The bloodless bombardment that began the bloodiest war in American history.' },
  { id: 'n-jacksonstphilip', name: 'Forts Jackson & St. Philip', year: 1862, m: 4, mo: 'Apr', place: 'Mississippi River, LA', theatre: 'naval', size: 's', href: '/war-civil-war/naval/forts-jackson', img: '/war-img/forts-jackson-hero.jpg', hook: 'Farragut runs the forts in the dark — and the South loses its greatest city.' },
  { id: 'n-mobilebay', name: 'Mobile Bay', year: 1864, m: 8, mo: 'Aug', place: 'Mobile, AL', theatre: 'naval', size: 'm' },
  { id: 'n-fortfisher2', name: 'Second Fort Fisher', year: 1865, m: 1, mo: 'Jan', place: 'Wilmington, NC', theatre: 'naval', size: 'm' },
]

export interface Theme {
  id: string; name: string; phase: string; type: SpineType; size: Size
  date: string; year: number; m: number; hook: string; href?: string; short?: string; img?: string
  // hero is landscape → render the spine card image-on-top / text-under (stacked)
  stack?: boolean
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
  { id: 'th-slavery', name: 'Slavery & the Cotton Economy', phase: 'causes', type: 'CAUSE', size: 'l', date: '1793–1860', year: 1850, m: 1, hook: 'A cotton empire built on four million enslaved people.', href: '/war-civil-war/off-the-battlefield/slavery-cotton', short: 'Slavery & Cotton', img: '/war-img/slavery-cotton-hero.jpg', stack: true },
  { id: 'th-freedomstruggle', name: 'The Freedom Struggle', phase: 'causes', type: 'SOCIETY', size: 's', date: '1829–1861', year: 1850, m: 9, hook: 'Black-led abolition, from David Walker to the Underground Railroad.', href: '/war-civil-war/off-the-battlefield/freedom-struggle', short: 'The Freedom Struggle', img: '/war-img/freedom-struggle-hero-ls.jpg', stack: true },
  { id: 'th-road', name: 'The Road to War', phase: 'causes', type: 'CAUSE', size: 'l', date: '1846–1860', year: 1855, m: 1, hook: 'Compromise by compromise, the peace came apart.', href: '/war-civil-war/off-the-battlefield/road-to-war', short: 'Road to War', img: '/war-img/road-to-war-hero-reynolds-map.jpg', stack: true },
  { id: 'th-lincoln1860', name: 'Lincoln’s Rise & the Election of 1860', phase: 'causes', type: 'POLITICS', size: 's', date: '1858–1861', year: 1860, m: 11, hook: 'A prairie lawyer wins; the South walks out.', href: '/war-civil-war/off-the-battlefield/lincolns-rise', short: 'Lincoln’s Rise', img: '/war-img/lincolns-rise-hero-cooper-union-brady.jpg' },
  { id: 'th-twogov', name: 'Two Governments', phase: 'causes', type: 'POLITICS', size: 'm', date: '1861', year: 1860, m: 12, hook: 'Two presidents, two constitutions, one cracking Union.', href: '/war-civil-war/off-the-battlefield/two-governments', short: 'Two Governments', img: '/war-img/two-governments-hero.jpg', stack: true },

  { id: 'th-diplomacy', name: 'Britain, France & Cotton', phase: 'hard', type: 'POLITICS', size: 'l', date: '1861–1863', year: 1862, m: 2, hook: 'The South bet King Cotton would win Europe. It lost.', href: '/war-civil-war/off-the-battlefield/cotton-diplomacy', short: 'Britain & Cotton', img: '/war-img/cotton-diplomacy-hero-trent-seizure.jpg', stack: true },
  { id: 'th-ironclads', name: 'Ironclads & the Blockade', phase: 'hard', type: 'SOCIETY', size: 'm', date: '1862', year: 1862, m: 3, hook: 'The Monitor, the Virginia, and the day wooden navies died.', href: '/war-civil-war/off-the-battlefield/ironclads', short: 'Ironclads', img: '/war-img/ironclads-hero-monitor-merrimac-combat.jpg', stack: true },
  { id: 'th-tech', name: 'The New Way of War', phase: 'hard', type: 'SOCIETY', size: 'l', date: '1861–1865', year: 1862, m: 6, hook: 'Rifle, railroad, telegraph — the tools outran the tactics.', href: '/war-civil-war/off-the-battlefield/new-way-of-war', short: 'New Way of War', img: '/war-img/new-way-of-war-hero-railroad-bridge.jpg', stack: true },
  { id: 'th-homefront', name: 'The Home Front', phase: 'hard', type: 'SOCIETY', size: 'm', date: '1861–1865', year: 1862, m: 7, hook: 'Draft riots, bread riots, and the war the civilians fought.', href: '/war-civil-war/off-the-battlefield/home-front', short: 'The Home Front', img: '/war-img/home-front-hero-asylum-burning.jpg', stack: true },
  { id: 'th-medicine', name: 'Medicine & Disease', phase: 'hard', type: 'SOCIETY', size: 's', date: '1861–1865', year: 1862, m: 8, hook: 'Two soldiers died of disease for every one killed in battle.', href: '/war-civil-war/off-the-battlefield/medicine', short: 'Medicine', img: '/war-img/medicine-hero-field-hospital.jpg', stack: true },

  { id: 'th-emancipation', name: 'The Emancipation Proclamation', phase: 'turning', type: 'POLITICS', size: 'm', date: 'Jan 1863', year: 1863, m: 1, hook: 'Lincoln changes what the entire war is for.', href: '/war-civil-war/off-the-battlefield/emancipation', short: 'Emancipation', img: '/war-img/emancipation-hero-ls.jpg', stack: true },
  { id: 'th-usct', name: 'Freedom Seekers & the USCT', phase: 'turning', type: 'SOCIETY', size: 'l', date: '1861–1865', year: 1863, m: 5, hook: 'The enslaved freed themselves — then put on Union blue.', href: '/war-civil-war/off-the-battlefield/usct', short: 'Freedom & the USCT', img: '/war-img/usct-hero-soldier-family.jpg', stack: true },

  { id: 'th-prisons', name: 'Andersonville & the Prisons', phase: 'total', type: 'AFTERMATH', size: 'm', date: '1864–1865', year: 1864, m: 2, hook: 'Andersonville, and the prison camps where thousands starved.', href: '/war-civil-war/off-the-battlefield/prisons', short: 'Andersonville', img: '/war-img/prisons-hero-issuing-rations.jpg', stack: true },
  { id: 'th-atrocity', name: 'Fort Pillow & the Guerrilla War', phase: 'total', type: 'AFTERMATH', size: 'm', date: '1862–1865', year: 1864, m: 5, hook: 'No-quarter killings and the savage guerrilla war.', href: '/war-civil-war/off-the-battlefield/guerrilla-war', short: 'The Guerrilla War', img: '/war-img/guerrilla-war-fort-pillow-massacre.jpg', stack: true },
  { id: 'th-northwithin', name: 'The War Within the North', phase: 'total', type: 'POLITICS', size: 'l', date: '1861–1864', year: 1864, m: 11, hook: 'Copperheads, jailed editors, and the election Lincoln feared he’d lose.', href: '/war-civil-war/off-the-battlefield/war-within-north', short: 'The War Within', img: '/war-img/war-within-north-true-issue.jpg', stack: true },

  { id: 'th-assassination', name: 'Lincoln Assassinated', phase: 'after', type: 'AFTERMATH', size: 'm', date: 'Apr 1865', year: 1865, m: 5, hook: 'Five days after Appomattox, Lincoln is murdered at Ford’s Theatre.', href: '/war-civil-war/off-the-battlefield/assassination', short: 'Lincoln Assassinated', img: '/war-img/assassination-fords-theatre.jpg', stack: true },
  { id: 'th-reckoning', name: 'The Reckoning', phase: 'after', type: 'AFTERMATH', size: 'l', date: '1865 →', year: 1865, m: 12, hook: 'Three-quarters of a million dead, four million freed.', href: '/war-civil-war/off-the-battlefield/reckoning', short: 'The Reckoning', img: '/war-img/reckoning-hero-richmond-ruins.jpg', stack: true },
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
  name: string; short?: string; date: string; sub?: string; hook?: string; href?: string; img?: string; stack?: boolean
}
const phaseOfYear = (y: number): string =>
  y <= 1860 ? 'causes' : y === 1861 ? 'outbreak' : y === 1862 ? 'hard' : y === 1863 ? 'turning' : 'total'

export const SPINE_NODES: SpineNode[] = [
  ...THEMES.map<SpineNode & { _s: number }>(t => ({
    id: t.id, phase: t.phase, type: t.type, size: t.size, name: t.name, short: t.short, date: t.date, hook: t.hook, href: t.href, img: t.img, stack: t.stack, _s: t.year * 100 + t.m,
  })),
  ...MAJORS.map<SpineNode & { _s: number }>(b => ({
    id: b.id, phase: phaseOfYear(b.year), type: 'BATTLE', size: b.size, name: b.name, short: b.short, hook: b.hook,
    date: `${b.mo} ${b.year}`, sub: `${b.place} · ${THEATRE_LABEL[b.theatre]}`, href: b.href, img: b.img, stack: true, _s: b.year * 100 + b.m,
  })),
]
  .sort((a, b) => a._s - b._s)
  .map(({ _s, ...n }) => n)
