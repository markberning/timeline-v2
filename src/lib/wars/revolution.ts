// The American Revolution (1775–1783) as a WarConfig — war #3.
//
// THE TURNKEY TEST. F&I (war #2) proved a chronological, single-battle-lane war runs
// through the shared <WarHome> with no new components. The Revolution is the first
// genuinely multi-THEATRE war we model, and we deliberately give it the F&I shape (one
// 'rev-battles' lane, six chronological PHASES as the story spine) rather than the
// Civil War's geographic theatre grid — so it rides the shared, config-driven home as-is.
// The phases ARE largely geographic (1775 Boston, 1776 New York, 1777 Saratoga +
// Philadelphia, the war goes south 1778–81, Yorktown), so nothing is lost.
//
// SCAFFOLD STAGE: the roster (sides, lanes, battles/themes/chapters) is concrete; the
// per-section `href`/`img` are set as each section is BUILT through the gated pipeline
// (unbuilt rows render "Soon", same as F&I/CW). `commanders`/`castHref` are added once
// the cast's portraits are born-verified. The fact pack re-verifies every specific at
// authoring time.
//
// FRAMING (locked with the user 2026-06-07): the Revolution was "the first civil war."
// It was a civil war three ways — Britons vs. Britons over the rights of Englishmen,
// Americans vs. Americans (Loyalists were ~a fifth of colonists; Kings Mountain was
// fought almost entirely between Americans), and families split down the middle. That
// thesis runs through the home standfirst, a flagship Off-the-Battlefield chapter
// ("A Civil War Among Themselves"), and the Southern phase. The CAUSES layer is the
// heart — six chapters, picking up exactly where the F&I war ended (its debt, the
// Proclamation Line, the road to taxation).

import { WAR_STORY_COLOR, WAR_OFFFIELD_COLOR, THEATRE_PALETTE } from './layer-colors'
import type { WarConfig } from './types'

const WAR_ACCENT = '#42597b' // Continental slate-blue — the war's identity hue

export const REVOLUTION: WarConfig = {
  id: 'revolution',
  name: 'The American Revolution',
  routeBase: '/war-revolution',
  frontDoorId: 'rev',
  crumbShort: 'Rev',
  crumbFull: 'American Revolution',
  laneNoun: 'Jump to',
  accent: WAR_ACCENT,
  geoScopeToggle: false,
  sides: [
    { code: 'us', label: 'American', short: 'American', cssVar: '--rev-us', color: { light: '#345080', dark: '#7c9bd1' } },
    { code: 'gb', label: 'British', short: 'British', cssVar: '--rev-gb', color: { light: '#b13b3b', dark: '#d98a86' } },
  ],
  lanes: [
    // The single battle THEATRE — green. All 22 battles live here; this is the battle
    // layer's one Jump-to entry, linking to the home Battles tab.
    { id: 'rev-battles', kind: 'theatre', label: 'The Battles', short: 'Battles', href: '/war-revolution?theatre=rev-battles', ready: true, color: THEATRE_PALETTE.green, skinVar: '--rev-battles', mapHex: THEATRE_PALETTE.green.dark },
    // The six PHASES are the war-story chapters. They render through the shared reader
    // in the oxblood story color (--warstory), NOT a theatre color.
    { id: 'outbreak', kind: 'phase', label: 'Outbreak', short: 'Outbreak', href: '/war-revolution/outbreak', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'the-north', kind: 'phase', label: 'The War for the North', short: 'The North', href: '/war-revolution/the-north', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'two-armies', kind: 'phase', label: 'Two Armies', short: 'Two Armies', href: '/war-revolution/two-armies', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'world-war', kind: 'phase', label: 'A World War', short: 'World War', href: '/war-revolution/world-war', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'southern-turn', kind: 'phase', label: 'The Southern Turn & Yorktown', short: 'The South', href: '/war-revolution/southern-turn', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'the-peace', kind: 'phase', label: 'The Peace', short: 'The Peace', href: '/war-revolution/the-peace', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    // The story spine lands on the home's Story tab (the phase list).
    { id: 'rev-story', kind: 'story', label: 'How the War Happened', short: 'How it Happened', href: '/war-revolution/story', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'offfield', kind: 'offfield', label: 'Off the Battlefield', short: 'Off-Field', href: '/war-revolution/off-the-battlefield', ready: true, color: WAR_OFFFIELD_COLOR, mapHex: '#d96a26' },
  ],
  // All battles live in the single 'rev-battles' theatre (green). Phase comments are
  // chronological signposts only. href/img set at build time (unbuilt → "Soon").
  battles: [
    // ── Outbreak (1775) ──
    { id: 'rev-lexington', name: 'Lexington & Concord', year: 1775, m: 4, mo: 'Apr', place: 'Middlesex Co., MA', theatre: 'rev-battles', region: 'new-england', size: 'l', href: '/war-revolution/battles/lexington-concord', img: '/war-img/rev-lexington-hero.jpg' },
    { id: 'rev-bunker-hill', name: 'Bunker Hill', year: 1775, m: 6, mo: 'Jun', place: 'Charlestown, MA', theatre: 'rev-battles', region: 'new-england', size: 'l', href: '/war-revolution/battles/bunker-hill', img: '/war-img/rev-bunkerhill-card.jpg' },
    { id: 'rev-quebec', name: 'Quebec', year: 1775, m: 12, mo: 'Dec', place: 'Quebec City', theatre: 'rev-battles', region: 'new-england', size: 'm', href: '/war-revolution/battles/quebec-1775', img: '/war-img/rev-quebec1775-clemens-card.jpg' },
    // ── The War for the North (1776) ──
    { id: 'rev-long-island', name: 'Long Island', year: 1776, m: 8, mo: 'Aug', place: 'Brooklyn, NY', theatre: 'rev-battles', region: 'middle', size: 'l', href: '/war-revolution/battles/long-island', img: '/war-img/rev-longisland-hero.jpg' },
    { id: 'rev-trenton', name: 'Trenton', year: 1776, m: 12, mo: 'Dec', place: 'Trenton, NJ', theatre: 'rev-battles', region: 'middle', size: 'l', href: '/war-revolution/battles/trenton', img: '/war-img/rev-trenton-card.jpg' },
    { id: 'rev-princeton', name: 'Princeton', year: 1777, m: 1, mo: 'Jan', place: 'Princeton, NJ', theatre: 'rev-battles', region: 'middle', size: 'm', href: '/war-revolution/battles/princeton', img: '/war-img/rev-princeton-card.jpg' },
    // ── Two Armies (1777) ──
    { id: 'rev-ticonderoga', name: 'Fort Ticonderoga', year: 1777, m: 7, mo: 'Jul', place: 'Ticonderoga, NY', theatre: 'rev-battles', region: 'saratoga', size: 's', href: '/war-revolution/battles/ticonderoga-1777', img: '/war-img/rev-ticonderoga1777-hero.jpg' },
    { id: 'rev-bennington', name: 'Bennington', year: 1777, m: 8, mo: 'Aug', place: 'Walloomsac, NY', theatre: 'rev-battles', region: 'saratoga', size: 'm', href: '/war-revolution/battles/bennington', img: '/war-img/rev-bennington-card.jpg' },
    { id: 'rev-brandywine', name: 'Brandywine', year: 1777, m: 9, mo: 'Sep', place: 'Chadds Ford, PA', theatre: 'rev-battles', region: 'pennsylvania', size: 'm', href: '/war-revolution/battles/brandywine', img: '/war-img/rev-brandywine-card.jpg' },
    { id: 'rev-saratoga', name: 'Saratoga', year: 1777, m: 9, mo: 'Sep–Oct', place: 'Stillwater, NY', theatre: 'rev-battles', region: 'saratoga', size: 'xl', href: '/war-revolution/battles/saratoga', img: '/war-img/rev-saratoga-card.jpg' },
    { id: 'rev-germantown', name: 'Germantown', year: 1777, m: 10, mo: 'Oct', place: 'Philadelphia, PA', theatre: 'rev-battles', region: 'pennsylvania', size: 'm', href: '/war-revolution/battles/germantown', img: '/war-img/rev-germantown-card.jpg' },
    // ── A World War (1778–1780) ──
    { id: 'rev-monmouth', name: 'Monmouth', year: 1778, m: 6, mo: 'Jun', place: 'Freehold, NJ', theatre: 'rev-battles', region: 'middle', size: 'm', href: '/war-revolution/battles/monmouth', img: '/war-img/rev-monmouth-card.jpg' },
    { id: 'rev-vincennes', name: 'Vincennes', year: 1779, m: 2, mo: 'Feb', place: 'Vincennes, IN', theatre: 'rev-battles', region: 'wider', size: 's', href: '/war-revolution/battles/vincennes', img: '/war-img/rev-vincennes-card.jpg' },
    { id: 'rev-stony-point', name: 'Stony Point', year: 1779, m: 7, mo: 'Jul', place: 'Stony Point, NY', theatre: 'rev-battles', region: 'middle', size: 's', href: '/war-revolution/battles/stony-point', img: '/war-img/rev-stony-point-card.jpg' },
    { id: 'rev-bonhomme-richard', name: 'Bonhomme Richard vs. Serapis', year: 1779, m: 9, mo: 'Sep', place: 'Off Flamborough Head, England', theatre: 'rev-battles', region: 'wider', size: 'm' },
    { id: 'rev-savannah', name: 'Savannah', year: 1779, m: 10, mo: 'Oct', place: 'Savannah, GA', theatre: 'rev-battles', region: 'south', size: 'm' },
    { id: 'rev-charleston', name: 'Charleston', year: 1780, m: 5, mo: 'May', place: 'Charleston, SC', theatre: 'rev-battles', region: 'south', size: 'm' },
    { id: 'rev-camden', name: 'Camden', year: 1780, m: 8, mo: 'Aug', place: 'Camden, SC', theatre: 'rev-battles', region: 'south', size: 'm' },
    { id: 'rev-kings-mountain', name: "Kings Mountain", year: 1780, m: 10, mo: 'Oct', place: 'York Co., SC', theatre: 'rev-battles', region: 'south', size: 'l' },
    // ── The Southern Turn & Yorktown (1781) ──
    { id: 'rev-cowpens', name: 'Cowpens', year: 1781, m: 1, mo: 'Jan', place: 'Cowpens, SC', theatre: 'rev-battles', region: 'south', size: 'l' },
    { id: 'rev-guilford', name: 'Guilford Courthouse', year: 1781, m: 3, mo: 'Mar', place: 'Greensboro, NC', theatre: 'rev-battles', region: 'south', size: 'm' },
    { id: 'rev-yorktown', name: 'Yorktown', year: 1781, m: 10, mo: 'Oct', place: 'Yorktown, VA', theatre: 'rev-battles', region: 'south', size: 'xl' },
  ],
  // Off the battlefield — the HEART of this war. Six causes chapters (the road to
  // revolution, picking up from where the F&I war ended), the war-years chapters, and
  // the reckoning. Weighted at least as heavily as the battles.
  themes: [
    // ── Why we fought (causes) ──
    { id: 'rev-bill-due', name: 'The Bill Comes Due', short: 'The Bill Comes Due', phase: 'causes', type: 'CAUSE', size: 'l', date: '1763–1764', year: 1763, m: 10, hook: 'A victorious Britain, broke, decides the colonies must pay.', href: '/war-revolution/off-the-battlefield/bill-comes-due' },
    { id: 'rev-stamp-act', name: 'The Stamp Act', short: 'The Stamp Act', phase: 'causes', type: 'POLITICS', size: 'l', date: '1765', year: 1765, m: 3, hook: 'Parliament taxes every sheet of paper, and the colonies erupt.', href: '/war-revolution/off-the-battlefield/stamp-act' },
    { id: 'rev-townshend', name: 'The Townshend Acts & the Boston Massacre', short: 'The Boston Massacre', phase: 'causes', type: 'POLITICS', size: 'l', date: '1767–1770', year: 1767, m: 6, hook: 'A cleverer tax, an army in Boston, and five dead on King Street.', href: '/war-revolution/off-the-battlefield/boston-massacre' },
    { id: 'rev-tea-party', name: 'The Tea Party & the Intolerable Acts', short: 'The Tea Party', phase: 'causes', type: 'POLITICS', size: 'l', date: '1773–1774', year: 1773, m: 12, hook: 'Cheap tea baited with a principle, and the night Boston threw the bargain in the harbor.', href: '/war-revolution/off-the-battlefield/tea-party' },
    { id: 'rev-idea-independence', name: 'The Idea of Independence', short: 'The Idea of Independence', phase: 'causes', type: 'POLITICS', size: 'l', date: '1774–1776', year: 1776, m: 7, hook: 'How independence went from unthinkable to official in eighteen months.', href: '/war-revolution/off-the-battlefield/idea-of-independence' },
    { id: 'rev-civil-war', name: 'A Civil War Among Themselves', short: 'A Civil War Among Themselves', phase: 'causes', type: 'SOCIETY', size: 'l', date: '1775–1783', year: 1775, m: 1, hook: 'Loyalist against Patriot, father against son: the war between Americans.', href: '/war-revolution/off-the-battlefield/civil-war-among-themselves' },
    // ── The war years ──
    { id: 'rev-army', name: 'An Army from Nothing', short: 'An Army from Nothing', phase: 'war', type: 'SOCIETY', size: 'l', date: '1775–1783', year: 1778, m: 1, hook: 'How a crowd of militiamen became an army that outlasted everything, including its pay.', href: '/war-revolution/off-the-battlefield/army-from-nothing' },
    { id: 'rev-slavery', name: 'Slavery and the Revolution', short: 'Slavery & the Revolution', phase: 'war', type: 'SOCIETY', size: 'l', date: '1775–1783', year: 1775, m: 11, hook: 'Half a million people enslaved in a war for liberty, and the freedom they took from both sides.', href: '/war-revolution/off-the-battlefield/slavery-and-the-revolution' },
    { id: 'rev-women', name: 'Women of the Revolution', short: 'Women of the Revolution', phase: 'war', type: 'SOCIETY', size: 'm', date: '1775–1783', year: 1776, m: 1, hook: 'The war ran through every household, and the law barely knew the women who carried it.', href: '/war-revolution/off-the-battlefield/women-of-the-revolution' },
    { id: 'rev-native', name: 'Native Nations Caught Between', short: 'Native Nations', phase: 'war', type: 'SOCIETY', size: 'l', date: '1775–1783', year: 1779, m: 1, hook: 'Dozens of nations chose between two land-hungry empires, and the peace ignored them all.', href: '/war-revolution/off-the-battlefield/native-nations' },
    { id: 'rev-french-alliance', name: 'The French Alliance & the Global War', short: 'The French Alliance', phase: 'war', type: 'POLITICS', size: 'l', date: '1778–1783', year: 1778, m: 2, hook: 'An absolute monarchy bankrolled a republic, and the bill helped bring down the king who paid it.', href: '/war-revolution/off-the-battlefield/french-alliance' },
    { id: 'rev-war-at-sea', name: 'The War at Sea', short: 'The War at Sea', phase: 'war', type: 'MILITARY', size: 'm', date: '1775–1783', year: 1779, m: 9, hook: 'No navy, a swarm of legalized pirates, one legend, and the ally\'s fleet that won it.', href: '/war-revolution/off-the-battlefield/war-at-sea' },
    // ── The peace & the reckoning ──
    { id: 'rev-treaty', name: 'The Treaty of Paris & What It Cost', short: 'The Treaty of Paris', phase: 'reckoning', type: 'AFTERMATH', size: 'l', date: '1783', year: 1783, m: 9, hook: 'Astonishing terms on paper, and a bill paid by everyone who was never in the room.', href: '/war-revolution/off-the-battlefield/treaty-of-paris' },
  ],
  // The war-story spine — six chapters, one per phase.
  chapters: [
    { id: 'outbreak', name: 'Outbreak', phase: 'outbreak', type: 'MILITARY', size: 'l', date: '1775', year: 1775, m: 1, hook: 'A standoff became a shooting war, a siege, an invasion, and a rebellion declared.', href: '/war-revolution/outbreak' },
    { id: 'the-north', name: 'The War for the North', phase: 'hard', type: 'MILITARY', size: 'l', date: '1776', year: 1776, m: 1, hook: 'The Declaration, the New York disaster, and the ten days that kept the cause alive.', href: '/war-revolution/the-north' },
    { id: 'two-armies', name: 'Two Armies', phase: 'turning', type: 'MILITARY', size: 'l', date: '1777', year: 1777, m: 1, hook: 'Two British armies, two separate wars, and the surrender that bought a navy.', href: '/war-revolution/two-armies' },
    { id: 'world-war', name: 'A World War', phase: 'total', type: 'MILITARY', size: 'l', date: '1778–1780', year: 1778, m: 1, hook: 'The war goes global, goes south, and nearly dies at home; the hero turns traitor.', href: '/war-revolution/world-war' },
    { id: 'southern-turn', name: 'The Southern Turn & Yorktown', phase: 'total', type: 'MILITARY', size: 'l', date: '1780–1781', year: 1780, m: 1, hook: 'Greene loses every battle and wins the map, and five strands meet at a tobacco port.', href: '/war-revolution/southern-turn' },
    { id: 'the-peace', name: 'The Peace', phase: 'after', type: 'MILITARY', size: 'l', date: '1782–1783', year: 1782, m: 1, hook: 'Two years of waiting, leaving, and almost breaking, ended by a commission handed back.', href: '/war-revolution/the-peace' },
  ],
  commanders: {},
  home: {
    eyebrow: 'War · 1775–1783',
    title: ['The American', 'Revolution'],
    standfirst: 'Eight years that turned thirteen quarreling colonies into a nation, and split those same colonies against themselves. It began as a fight over taxes and the rights of British subjects, became a war for independence, and was all along a civil war: neighbor against neighbor, families divided, a small power that won only once the other empires of the world joined in.',
    heroImg: '/war-img/rev-war-hero.jpg',
    heroCredit: 'Washington Crossing the Delaware · Emanuel Leutze, 1851 · public domain',
    footer: true,
    storyCard: {
      kicker: 'The war story',
      heading: 'Six chapters, 1775 to 1783',
      body: 'The whole war as one through-line: the shot at Lexington, the near-collapse around New York, the turn at Saratoga, the war that went global and then went south, and the trap at Yorktown. The connective tissue between the causes and the battles.',
      meta: '6 chapters that connect 22 battles and 13 chapters off the battlefield.',
    },
    offfieldCard: {
      kicker: 'Off the battlefield',
      count: '13 chapters',
      heading: 'Why we fought, and what it cost',
      body: 'The war beyond the battles: the long quarrel over taxes and rights that began with the debts of the last war, the idea of independence, the civil war between Patriots and Loyalists, an army built from nothing, slavery and the Revolution, the French alliance, and the peace that made a country.',
    },
    offfieldPhases: [
      ['causes', 'Why we fought'],
      ['war', 'The war years'],
      ['reckoning', 'The peace & the reckoning'],
    ],
    // GEOGRAPHIC regions — the war travels down the seaboard, so the Battles tab groups
    // by region (each chronological inside) and the map dots are coloured by region. The
    // 'wider' catch-all holds the off-map naval + frontier fights (no dot on the seaboard
    // frame). Colours are the reserved theatre palette + one slate for the catch-all.
    battleRegions: [
      { id: 'new-england', label: 'New England & Canada', range: '1775', color: { light: '#2c7d99', dark: '#5fb0cc', dot: '#2c7d99' } },
      { id: 'middle', label: 'New York & New Jersey', range: '1776–79', color: { light: '#8a5b86', dark: '#c79cd0', dot: '#8a5b86' } },
      { id: 'saratoga', label: 'The Hudson & Saratoga', range: '1777', color: { light: '#b3852f', dark: '#d8b25a', dot: '#b3852f' } },
      { id: 'pennsylvania', label: 'Pennsylvania', range: '1777', color: { light: '#4e8a52', dark: '#84c089', dot: '#4e8a52' } },
      { id: 'south', label: 'The South', range: '1779–81', color: { light: '#b3502f', dark: '#d98a5a', dot: '#b3502f' } },
      { id: 'wider', label: 'At Sea & the Frontier', range: '1779', color: { light: '#5b6b80', dark: '#93a6c0', dot: '#5b6b80' } },
    ],
    battleMap: {
      eyebrow: 'The seaboard · 1775–1783',
      accent: '#7bbf80',
      // Wide frame (Ohio country to the Atlantic) so the tall north–south spread of dots
      // renders close to landscape — the map is height-capped on the Battles tab, and a
      // wider frame keeps the side gutters small instead of a tall sliver.
      frame: { lonMin: -85.5, lonMax: -66.5, latMin: 31.3, latMax: 47.4 },
      states: [
        { name: 'Massachusetts', label: 'MASS.', labelLon: -72.1, labelLat: 42.3, labelSize: 11 },
        { name: 'New York', label: 'NEW YORK', labelLon: -75.6, labelLat: 43.0, labelSize: 13 },
        { name: 'Pennsylvania', label: 'PENNSYLVANIA', labelLon: -77.8, labelLat: 41.0, labelSize: 12 },
        { name: 'Virginia', label: 'VIRGINIA', labelLon: -78.7, labelLat: 37.6, labelSize: 12 },
        { name: 'North Carolina', label: 'N. CAROLINA', labelLon: -79.6, labelLat: 35.3, labelSize: 11 },
        { name: 'South Carolina', label: 'S. CAROLINA', labelLon: -81.0, labelLat: 33.9, labelSize: 11 },
        { name: 'Georgia', label: 'GEORGIA', labelLon: -83.2, labelLat: 32.6, labelSize: 11 },
        { name: 'Quebec', label: 'QUÉBEC', labelLon: -72.0, labelLat: 47.0, labelSize: 11 },
        { name: 'New Jersey' }, { name: 'Connecticut' }, { name: 'Rhode Island' },
        { name: 'New Hampshire' }, { name: 'Vermont' }, { name: 'Maine' }, { name: 'Maryland' },
        { name: 'Delaware' }, { name: 'West Virginia' }, { name: 'Ohio' },
      ],
      coords: {
        'rev-lexington': [42.45, -71.30], 'rev-bunker-hill': [42.376, -71.061], 'rev-quebec': [46.81, -71.21],
        'rev-long-island': [40.66, -73.98], 'rev-trenton': [40.22, -74.76], 'rev-princeton': [40.34, -74.66],
        'rev-ticonderoga': [43.84, -73.39], 'rev-bennington': [42.93, -73.30], 'rev-brandywine': [39.87, -75.59],
        'rev-saratoga': [43.01, -73.64], 'rev-germantown': [40.04, -75.18], 'rev-monmouth': [40.27, -74.32],
        'rev-vincennes': [38.68, -87.53],
        'rev-stony-point': [41.24, -73.97], 'rev-savannah': [32.08, -81.09], 'rev-charleston': [32.78, -79.93],
        'rev-camden': [34.25, -80.61], 'rev-kings-mountain': [35.14, -81.38], 'rev-cowpens': [35.13, -81.81],
        'rev-guilford': [36.13, -79.85], 'rev-yorktown': [37.24, -76.51],
      },
    },
  },
}
