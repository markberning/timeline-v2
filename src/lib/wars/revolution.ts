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
    { id: 'rev-story', kind: 'story', label: 'The War Story', short: 'Story', href: '/war-revolution/story', ready: true, color: WAR_STORY_COLOR, skinVar: '--warstory' },
    { id: 'offfield', kind: 'offfield', label: 'Off the Battlefield', short: 'Off-Field', href: '/war-revolution/off-the-battlefield', ready: true, color: WAR_OFFFIELD_COLOR, mapHex: '#d96a26' },
  ],
  // All battles live in the single 'rev-battles' theatre (green). Phase comments are
  // chronological signposts only. href/img set at build time (unbuilt → "Soon").
  battles: [
    // ── Outbreak (1775) ──
    { id: 'rev-lexington', name: 'Lexington & Concord', year: 1775, m: 4, mo: 'Apr', place: 'Middlesex Co., MA', theatre: 'rev-battles', size: 'l' },
    { id: 'rev-bunker-hill', name: 'Bunker Hill', year: 1775, m: 6, mo: 'Jun', place: 'Charlestown, MA', theatre: 'rev-battles', size: 'l' },
    { id: 'rev-quebec', name: 'Quebec', year: 1775, m: 12, mo: 'Dec', place: 'Quebec City', theatre: 'rev-battles', size: 'm' },
    // ── The War for the North (1776) ──
    { id: 'rev-long-island', name: 'Long Island', year: 1776, m: 8, mo: 'Aug', place: 'Brooklyn, NY', theatre: 'rev-battles', size: 'l' },
    { id: 'rev-trenton', name: 'Trenton', year: 1776, m: 12, mo: 'Dec', place: 'Trenton, NJ', theatre: 'rev-battles', size: 'l' },
    { id: 'rev-princeton', name: 'Princeton', year: 1777, m: 1, mo: 'Jan', place: 'Princeton, NJ', theatre: 'rev-battles', size: 'm' },
    // ── Two Armies (1777) ──
    { id: 'rev-ticonderoga', name: 'Fort Ticonderoga', year: 1777, m: 7, mo: 'Jul', place: 'Ticonderoga, NY', theatre: 'rev-battles', size: 's' },
    { id: 'rev-bennington', name: 'Bennington', year: 1777, m: 8, mo: 'Aug', place: 'Walloomsac, NY', theatre: 'rev-battles', size: 'm' },
    { id: 'rev-brandywine', name: 'Brandywine', year: 1777, m: 9, mo: 'Sep', place: 'Chadds Ford, PA', theatre: 'rev-battles', size: 'm' },
    { id: 'rev-saratoga', name: 'Saratoga', year: 1777, m: 9, mo: 'Sep–Oct', place: 'Stillwater, NY', theatre: 'rev-battles', size: 'xl' },
    { id: 'rev-germantown', name: 'Germantown', year: 1777, m: 10, mo: 'Oct', place: 'Philadelphia, PA', theatre: 'rev-battles', size: 'm' },
    // ── A World War (1778–1780) ──
    { id: 'rev-monmouth', name: 'Monmouth', year: 1778, m: 6, mo: 'Jun', place: 'Freehold, NJ', theatre: 'rev-battles', size: 'm' },
    { id: 'rev-vincennes', name: 'Vincennes', year: 1779, m: 2, mo: 'Feb', place: 'Vincennes, IN', theatre: 'rev-battles', size: 's' },
    { id: 'rev-stony-point', name: 'Stony Point', year: 1779, m: 7, mo: 'Jul', place: 'Stony Point, NY', theatre: 'rev-battles', size: 's' },
    { id: 'rev-bonhomme-richard', name: 'Bonhomme Richard vs. Serapis', year: 1779, m: 9, mo: 'Sep', place: 'Off Flamborough Head, England', theatre: 'rev-battles', size: 'm' },
    { id: 'rev-savannah', name: 'Savannah', year: 1779, m: 10, mo: 'Oct', place: 'Savannah, GA', theatre: 'rev-battles', size: 'm' },
    { id: 'rev-charleston', name: 'Charleston', year: 1780, m: 5, mo: 'May', place: 'Charleston, SC', theatre: 'rev-battles', size: 'm' },
    { id: 'rev-camden', name: 'Camden', year: 1780, m: 8, mo: 'Aug', place: 'Camden, SC', theatre: 'rev-battles', size: 'm' },
    { id: 'rev-kings-mountain', name: "Kings Mountain", year: 1780, m: 10, mo: 'Oct', place: 'York Co., SC', theatre: 'rev-battles', size: 'l' },
    // ── The Southern Turn & Yorktown (1781) ──
    { id: 'rev-cowpens', name: 'Cowpens', year: 1781, m: 1, mo: 'Jan', place: 'Cowpens, SC', theatre: 'rev-battles', size: 'l' },
    { id: 'rev-guilford', name: 'Guilford Courthouse', year: 1781, m: 3, mo: 'Mar', place: 'Greensboro, NC', theatre: 'rev-battles', size: 'm' },
    { id: 'rev-yorktown', name: 'Yorktown', year: 1781, m: 10, mo: 'Oct', place: 'Yorktown, VA', theatre: 'rev-battles', size: 'xl' },
  ],
  // Off the battlefield — the HEART of this war. Six causes chapters (the road to
  // revolution, picking up from where the F&I war ended), the war-years chapters, and
  // the reckoning. Weighted at least as heavily as the battles.
  themes: [
    // ── Why we fought (causes) ──
    { id: 'rev-bill-due', name: 'The Bill Comes Due', short: 'The Bill Comes Due', phase: 'causes', type: 'CAUSE', size: 'l', date: '1763–1764', year: 1763, m: 10 },
    { id: 'rev-stamp-act', name: 'The Stamp Act', short: 'The Stamp Act', phase: 'causes', type: 'POLITICS', size: 'l', date: '1765', year: 1765, m: 3 },
    { id: 'rev-townshend', name: 'The Townshend Acts & the Boston Massacre', short: 'The Boston Massacre', phase: 'causes', type: 'POLITICS', size: 'l', date: '1767–1770', year: 1767, m: 6 },
    { id: 'rev-tea-party', name: 'The Tea Party & the Intolerable Acts', short: 'The Tea Party', phase: 'causes', type: 'POLITICS', size: 'l', date: '1773–1774', year: 1773, m: 12 },
    { id: 'rev-idea-independence', name: 'The Idea of Independence', short: 'The Idea of Independence', phase: 'causes', type: 'POLITICS', size: 'l', date: '1774–1776', year: 1776, m: 7 },
    { id: 'rev-civil-war', name: 'A Civil War Among Themselves', short: 'A Civil War Among Themselves', phase: 'causes', type: 'SOCIETY', size: 'l', date: '1775–1783', year: 1775, m: 1 },
    // ── The war years ──
    { id: 'rev-army', name: 'An Army from Nothing', short: 'An Army from Nothing', phase: 'war', type: 'SOCIETY', size: 'l', date: '1775–1783', year: 1778, m: 1 },
    { id: 'rev-slavery', name: 'Slavery and the Revolution', short: 'Slavery & the Revolution', phase: 'war', type: 'SOCIETY', size: 'l', date: '1775–1783', year: 1775, m: 11 },
    { id: 'rev-women', name: 'Women of the Revolution', short: 'Women of the Revolution', phase: 'war', type: 'SOCIETY', size: 'm', date: '1775–1783', year: 1776, m: 1 },
    { id: 'rev-native', name: 'Native Nations Caught Between', short: 'Native Nations', phase: 'war', type: 'SOCIETY', size: 'l', date: '1775–1783', year: 1779, m: 1 },
    { id: 'rev-french-alliance', name: 'The French Alliance & the Global War', short: 'The French Alliance', phase: 'war', type: 'POLITICS', size: 'l', date: '1778–1783', year: 1778, m: 2 },
    { id: 'rev-war-at-sea', name: 'The War at Sea', short: 'The War at Sea', phase: 'war', type: 'MILITARY', size: 'm', date: '1775–1783', year: 1779, m: 9 },
    // ── The peace & the reckoning ──
    { id: 'rev-treaty', name: 'The Treaty of Paris & What It Cost', short: 'The Treaty of Paris', phase: 'reckoning', type: 'AFTERMATH', size: 'l', date: '1783', year: 1783, m: 9 },
  ],
  // The war-story spine — six chapters, one per phase.
  chapters: [
    { id: 'outbreak', name: 'Outbreak', phase: 'outbreak', type: 'MILITARY', size: 'l', date: '1775', year: 1775, m: 1 },
    { id: 'the-north', name: 'The War for the North', phase: 'hard', type: 'MILITARY', size: 'l', date: '1776', year: 1776, m: 1 },
    { id: 'two-armies', name: 'Two Armies', phase: 'turning', type: 'MILITARY', size: 'l', date: '1777', year: 1777, m: 1 },
    { id: 'world-war', name: 'A World War', phase: 'total', type: 'MILITARY', size: 'l', date: '1778–1780', year: 1778, m: 1 },
    { id: 'southern-turn', name: 'The Southern Turn & Yorktown', phase: 'total', type: 'MILITARY', size: 'l', date: '1780–1781', year: 1780, m: 1 },
    { id: 'the-peace', name: 'The Peace', phase: 'after', type: 'MILITARY', size: 'l', date: '1782–1783', year: 1782, m: 1 },
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
    battleMap: {
      eyebrow: 'The seaboard · 1775–1783',
      accent: '#7bbf80',
      frame: { lonMin: -82.0, lonMax: -69.0, latMin: 31.3, latMax: 47.4 },
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
        'rev-stony-point': [41.24, -73.97], 'rev-savannah': [32.08, -81.09], 'rev-charleston': [32.78, -79.93],
        'rev-camden': [34.25, -80.61], 'rev-kings-mountain': [35.14, -81.38], 'rev-cowpens': [35.13, -81.81],
        'rev-guilford': [36.13, -79.85], 'rev-yorktown': [37.24, -76.51],
      },
    },
  },
}
