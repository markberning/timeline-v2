// Theatre map config for the redesign's Theatres tab — ported from the old war
// home, recolored to the new theatre palette (plum/green/gold/teal) and with the
// summaries' em-dashes removed for house voice. The DottedMap consumes fixed hex
// theatre colors (it builds alpha() variants), so TH_HEX uses the mid-tone values
// that read on both light and dark map backgrounds.

import { type Callout, type Frame } from '@/components/mode/dotted-map'

export const TH_HEX: Record<string, string> = { east: '#8a5b86', west: '#4e8a52', tmis: '#b3852f', naval: '#2c7d99' }

const LX = 0.215, RX = 0.66
const E = '/war-civil-war/eastern', W2 = '/war-civil-war/western', T2 = '/war-civil-war/trans-mississippi', N2 = '/war-civil-war/naval'

export const EAST_FRAME: Frame = { lonMin: -82.8, lonMax: -72.6, latMin: 35.4, latMax: 41.4 }
const EAST_CALLOUTS: Callout[] = [
  { lat: 39.46, lon: -77.74, label: 'Antietam', href: `${E}/antietam`, labelXFrac: 0.20, labelYFrac: 0.06, anchor: 'middle' },
  { lat: 39.83, lon: -77.23, label: 'Gettysburg', href: `${E}/gettysburg`, heavy: true, labelXFrac: 0.50, labelYFrac: 0.06, anchor: 'middle' },
  { lat: 38.30, lon: -77.46, label: 'Fredericksburg', href: `${E}/fredericksburg`, labelXFrac: RX, labelYFrac: 0.60, anchor: 'start' },
  { lat: 39.18, lon: -78.16, label: 'Winchester', labelXFrac: LX, labelYFrac: 0.24, anchor: 'end',
    sub: [{ text: '1st Winchester', href: `${E}/first-winchester` }, { text: 'Opequon (3rd)', href: `${E}/opequon` }, { text: 'Cedar Creek', href: `${E}/cedar-creek` }] },
  { lat: 38.81, lon: -77.52, label: 'Bull Run', labelXFrac: LX, labelYFrac: 0.55, anchor: 'end',
    sub: [{ text: '1st Bull Run', href: `${E}/bull-run` }, { text: '2nd Bull Run', href: `${E}/second-bull-run` }] },
  { lat: 37.36, lon: -78.80, label: 'Appomattox', href: `${E}/appomattox`, labelXFrac: LX, labelYFrac: 0.84, anchor: 'end' },
  { lat: 38.31, lon: -77.64, label: 'Chancellorsville', href: `${E}/chancellorsville`, labelXFrac: 0.80, labelYFrac: 0.06, anchor: 'middle',
    sub: [{ text: 'The Wilderness', href: `${E}/wilderness` }, { text: 'Spotsylvania', href: `${E}/spotsylvania` }] },
  { lat: 37.55, lon: -77.30, label: "Gaines' Mill", href: `${E}/gaines-mill`, labelXFrac: 0.74, labelYFrac: 0.72, anchor: 'start',
    sub: [{ text: 'Malvern Hill', href: `${E}/malvern-hill` }, { text: 'Cold Harbor', href: `${E}/cold-harbor` }] },
  { lat: 37.23, lon: -77.40, label: 'Petersburg', href: `${E}/second-petersburg`, heavy: true, labelXFrac: 0.5, labelYFrac: 0.69, anchor: 'middle',
    sub: [{ text: 'The Crater', href: `${E}/crater` }, { text: 'Five Forks', href: `${E}/five-forks` }, { text: 'Fort Stedman', href: `${E}/fort-stedman` }, { text: '3rd Petersburg', href: `${E}/third-petersburg` }] },
]

export const WEST_FRAME: Frame = { lonMin: -91.5, lonMax: -77.5, latMin: 30.0, latMax: 38.2 }
const WEST_CALLOUTS: Callout[] = [
  { lat: 36.17, lon: -86.78, label: 'Nashville', href: `${W2}/nashville`, heavy: true, labelXFrac: 0.36, labelYFrac: 0.06, anchor: 'middle',
    sub: [{ text: 'Franklin', href: `${W2}/franklin` }] },
  { lat: 36.49, lon: -87.86, label: 'Fort Donelson', href: `${W2}/fort-donelson`, labelXFrac: 0.14, labelYFrac: 0.06, anchor: 'middle' },
  { lat: 37.66, lon: -84.97, label: 'Perryville', href: `${W2}/perryville`, labelXFrac: 0.80, labelYFrac: 0.06, anchor: 'middle' },
  { lat: 35.14, lon: -88.34, label: 'Shiloh', href: `${W2}/shiloh`, labelXFrac: LX, labelYFrac: 0.34, anchor: 'end' },
  { lat: 34.93, lon: -88.52, label: 'Corinth', href: `${W2}/corinth`, labelXFrac: LX, labelYFrac: 0.60, anchor: 'end', leaderEnd: 'left' },
  { lat: 32.35, lon: -90.88, label: 'Vicksburg', href: `${W2}/vicksburg`, heavy: true, labelXFrac: 0.22, labelYFrac: 0.82, anchor: 'end', leaderEnd: 'left',
    sub: [{ text: 'Champion Hill', href: `${W2}/champion-hill` }] },
  { lat: 35.85, lon: -86.39, label: 'Stones River', href: `${W2}/stones-river`, labelXFrac: RX, labelYFrac: 0.28, anchor: 'start' },
  { lat: 35.02, lon: -85.30, label: 'Chattanooga', labelXFrac: RX, labelYFrac: 0.50, anchor: 'start',
    sub: [{ text: 'Chickamauga', href: `${W2}/chickamauga` }, { text: 'Lookout Mountain', href: `${W2}/lookout-mountain` }, { text: 'Missionary Ridge', href: `${W2}/missionary-ridge` }] },
  { lat: 33.52, lon: -84.35, label: 'Jonesborough', href: `${W2}/jonesborough`, labelXFrac: RX, labelYFrac: 0.84, anchor: 'start' },
  { lat: 35.30, lon: -78.32, label: 'Bentonville', href: `${W2}/bentonville`, labelXFrac: 0.92, labelYFrac: 0.44, anchor: 'end' },
  { lat: 30.73, lon: -87.92, label: 'Fort Blakeley', href: `${W2}/fort-blakeley`, labelXFrac: 0.42, labelYFrac: 0.92, anchor: 'middle' },
]

export const TMIS_FRAME: Frame = { lonMin: -107, lonMax: -87, latMin: 29.0, latMax: 40.0 }
const TMIS_CALLOUTS: Callout[] = [
  { lat: 39.01, lon: -94.59, label: 'Westport', href: `${T2}/westport`, labelXFrac: 0.50, labelYFrac: 0.07, anchor: 'middle' },
  { lat: 36.38, lon: -89.46, label: 'Island No. Ten', href: `${T2}/island-number-ten`, labelXFrac: 0.80, labelYFrac: 0.62, anchor: 'middle' },
  { lat: 37.10, lon: -93.41, label: "Wilson's Creek", href: `${T2}/wilsons-creek`, labelXFrac: 0.55, labelYFrac: 0.30, anchor: 'end' },
  { lat: 36.45, lon: -94.03, label: 'Pea Ridge', href: `${T2}/pea-ridge`, labelXFrac: 0.55, labelYFrac: 0.50, anchor: 'end' },
  { lat: 35.57, lon: -105.74, label: 'Glorieta Pass', href: `${T2}/glorieta-pass`, labelXFrac: 0.16, labelYFrac: 0.42, anchor: 'start' },
  { lat: 32.04, lon: -93.70, label: 'Mansfield', href: `${T2}/mansfield`, labelXFrac: 0.58, labelYFrac: 0.74, anchor: 'start' },
  { lat: 30.69, lon: -91.27, label: 'Port Hudson', href: `${T2}/port-hudson`, labelXFrac: 0.58, labelYFrac: 0.90, anchor: 'start' },
]

export const NAVAL_FRAME: Frame = { lonMin: -91, lonMax: -76, latMin: 28.2, latMax: 35.4 }
const NAVAL_CALLOUTS: Callout[] = [
  { lat: 33.97, lon: -77.92, label: 'Fort Fisher', href: `${N2}/second-fort-fisher`, labelXFrac: 0.82, labelYFrac: 0.14, anchor: 'middle' },
  { lat: 32.75, lon: -79.87, label: 'Fort Sumter', href: `${N2}/fort-sumter`, heavy: true, labelXFrac: 0.74, labelYFrac: 0.46, anchor: 'start' },
  { lat: 30.23, lon: -88.02, label: 'Mobile Bay', href: `${N2}/mobile-bay`, labelXFrac: 0.34, labelYFrac: 0.86, anchor: 'middle' },
  { lat: 29.35, lon: -89.46, label: 'Forts Jackson & St. Philip', href: `${N2}/forts-jackson`, labelXFrac: 0.10, labelYFrac: 0.93, anchor: 'start' },
]

export type TheatreDot = { name: string; lat: number; lon: number; heavy?: boolean; anchor?: 'start' | 'end' }
export type TheatreInfo = {
  id: string; longName: string; region: string; summary: string; casualties: number
  states: string[]; dots: TheatreDot[]; callouts: Callout[]; frame: Frame
}

export const THEATRE_DATA: TheatreInfo[] = [
  {
    id: 'east', longName: 'Eastern Theatre', region: 'Virginia · Maryland · Pennsylvania',
    summary: 'The political war. Between the two capitals, Lee was at his best, and where the war finally ended.',
    casualties: 400000, states: ['Virginia', 'Maryland', 'Pennsylvania'],
    dots: [
      { name: 'Gettysburg', lat: 39.83, lon: -77.23, heavy: true, anchor: 'end' },
      { name: 'Antietam', lat: 39.46, lon: -77.74, anchor: 'end' },
      { name: 'Bull Run', lat: 38.81, lon: -77.52, anchor: 'end' },
      { name: 'Petersburg', lat: 37.23, lon: -77.40, anchor: 'end' },
    ],
    callouts: EAST_CALLOUTS, frame: EAST_FRAME,
  },
  {
    id: 'west', longName: 'Western Theatre', region: 'Kentucky · Tennessee · Mississippi · Georgia',
    summary: 'Where the Union actually won the war. Grant took the rivers and split the Confederacy in two.',
    casualties: 300000, states: ['Kentucky', 'Tennessee', 'Mississippi', 'Georgia', 'Alabama'],
    dots: [
      { name: 'Shiloh', lat: 35.14, lon: -88.34, anchor: 'end' },
      { name: 'Vicksburg', lat: 32.35, lon: -90.88, heavy: true, anchor: 'end' },
      { name: 'Chickamauga', lat: 34.94, lon: -85.29 },
      { name: 'Atlanta', lat: 33.75, lon: -84.39, heavy: true },
    ],
    callouts: WEST_CALLOUTS, frame: WEST_FRAME,
  },
  {
    id: 'tmis', longName: 'Trans-Mississippi', region: 'Arkansas · Louisiana · Texas · Missouri',
    summary: 'The sprawling, half-forgotten war west of the great river.',
    casualties: 35000, states: ['Arkansas', 'Louisiana', 'Texas', 'Missouri'],
    dots: [
      { name: 'Pea Ridge', lat: 36.45, lon: -94.03, anchor: 'end' },
      { name: 'Mansfield', lat: 32.04, lon: -93.70, anchor: 'end' },
    ],
    callouts: TMIS_CALLOUTS, frame: TMIS_FRAME,
  },
  {
    id: 'naval', longName: 'Naval & Coastal', region: 'Atlantic · Gulf · the Mississippi',
    summary: 'The Anaconda: blockade, ironclads, and the slow strangling of Southern trade.',
    casualties: 8000, states: ['North Carolina', 'South Carolina', 'Florida'],
    dots: [
      { name: 'Fort Fisher', lat: 33.97, lon: -77.92 },
      { name: 'Mobile Bay', lat: 30.4, lon: -88.04, anchor: 'end' },
      { name: 'New Orleans', lat: 29.95, lon: -90.07, anchor: 'end' },
    ],
    callouts: NAVAL_CALLOUTS, frame: NAVAL_FRAME,
  },
]

export const CONTEXT_STATES = ['West Virginia', 'Ohio', 'Indiana', 'Illinois', 'New Jersey', 'Delaware', 'Oklahoma', 'Kansas', 'Iowa', 'Wisconsin', 'Michigan', 'New York', 'Minnesota']
export const NATIONAL_FRAME: Frame = { lonMin: -96.5, lonMax: -74, latMin: 28.8, latMax: 42.3 }
