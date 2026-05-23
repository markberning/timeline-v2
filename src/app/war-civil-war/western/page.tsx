'use client'

// THEATRE level (Western Theatre). All structure lives in the shared
// <TheatrePage> (src/components/mode/theatre-page.tsx); this file is just the
// Western data object + its river-system geography map. Palette: Western accent
// = blue (also the Union color, so the page reads blue-heavy by design — "where
// the Union actually won the war"). No battle pages exist for the West yet, so
// nothing taps through. Casualty splits are mockup ESTIMATES pending the
// accuracy fact-check pass — see audits/war-pilot-civil-war.md.

import { ACCENTS } from '@/components/mode/war-chrome'
import { DottedMap } from '@/components/mode/dotted-map'
import { US_RIVERS } from '@/lib/us-rivers'
import { TheatrePage, type TheatreData } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.blue

const WT: TheatreData = {
  id: 'west',
  accent: ACCENT,
  name: 'Western Theatre',
  span: '1861–1865',
  region: 'Kentucky · Tennessee · Mississippi · Georgia',
  heroImage: '/war-img/shiloh-hero.jpg',
  heroPalette: ['#4a3e2c', '#5a4636', '#0e0c08'],
  heroCredit: 'Battle of Shiloh · Thure de Thulstrup, L. Prang & Co. · public domain',
  heroEyebrowColor: '#93c5fd',
  heroObjectPosition: 'center 38%',
  durationLabel: '4 years',
  armies: [
    { side: 'Union', label: 'Armies of the Tennessee & Cumberland', peak: '110k', commanders: ['Grant', 'Buell', 'Rosecrans', 'Sherman', 'Thomas'], color: ACCENTS.blue },
    { side: 'Confederacy', label: 'Army of Tennessee', peak: '80k', commanders: ['A. S. Johnston', 'Beauregard', 'Bragg', 'J. Johnston', 'Hood'], color: ACCENTS.rust },
  ],
  commanders: [
    { name: 'U. S. Grant', role: 'Cmdr., Tennessee (’62–’63)', side: 'U', img: '/war-img/cmdr/grant.jpg' },
    { name: 'W. T. Sherman', role: 'Cmdr., Mil. Div. Miss. (’64–)', side: 'U', img: '/war-img/cmdr/sherman.jpg' },
    { name: 'G. H. Thomas', role: '“Rock of Chickamauga”', side: 'U', img: '/war-img/cmdr/thomas.jpg' },
    { name: 'A. S. Johnston', role: 'Cmdr., CSA West (KIA ’62)', side: 'C', img: '/war-img/cmdr/as-johnston.jpg' },
    { name: 'B. Bragg', role: 'Cmdr., Army of Tennessee', side: 'C', img: '/war-img/cmdr/bragg.jpg' },
    { name: 'J. B. Hood', role: 'Cmdr., Army of Tennessee (’64)', side: 'C', img: '/war-img/cmdr/hood.jpg' },
  ],
  // Mockup estimate (theatre total ≈195k); split rounded + flagged for the
  // accuracy fact-check pass. See audits/war-pilot-civil-war.md.
  casualties: { union: 100000, csa: 90000, civilian: 5000 },
  chain: { name: 'Theatres of the Civil War', index: 2, total: 4 },
  timelineIntro: 'The theatre’s battles, sized by significance. Battle pages for the West are coming; for now, this is the spine of the campaign.',
}

// Theatre geography — the river war. Real dotted state outlines, the Mississippi
// / Tennessee river system, the battle dots, and Sherman's march-to-the-sea axis.
function WTMap() {
  return (
    <DottedMap
      eyebrow="Geography"
      accent={ACCENT}
      frame={{ lonMin: -91.7, lonMax: -80.6, latMin: 30.2, latMax: 37.6 }}
      states={[
        { name: 'Arkansas', tone: 'faint' },
        { name: 'Louisiana', tone: 'faint' },
        { name: 'North Carolina', tone: 'faint' },
        { name: 'South Carolina', tone: 'faint' },
        { name: 'Kentucky', tone: 'gray', label: 'KENTUCKY', labelLon: -85.6, labelLat: 37.35 },
        { name: 'Alabama', tone: 'gray', label: 'ALA.', labelLon: -86.7, labelLat: 32.4 },
        { name: 'Tennessee', tone: 'focus', label: 'TENNESSEE', labelLon: -87.4, labelLat: 35.3 },
        { name: 'Mississippi', tone: 'focus', label: 'MISS.', labelLon: -89.6, labelLat: 33.2 },
        { name: 'Georgia', tone: 'focus', label: 'GEORGIA', labelLon: -83.4, labelLat: 32.7 },
      ]}
      rivers={[
        ...US_RIVERS.Mississippi.map((pts, i) => i === 0 ? { pts, label: 'Mississippi R.', labelLon: -90.7, labelLat: 31.4, labelAnchor: 'start' as const } : { pts }),
        ...US_RIVERS.Tennessee.map((pts, i) => i === 0 ? { pts, label: 'Tennessee R.', labelLon: -87.95, labelLat: 34.62, labelAnchor: 'start' as const } : { pts }),
      ]}
      corridor={{ fromLon: -84.39, fromLat: 33.75, toLon: -81.09, toLat: 32.08, label: 'to the sea · 300 mi', labelLon: -83.4, labelLat: 33.15 }}
      dots={[
        { name: 'Forts Henry & Donelson', lat: 36.5, lon: -87.9, anchor: 'end' },
        { name: 'Shiloh', lat: 35.14, lon: -88.34, anchor: 'end' },
        { name: 'Nashville', lat: 36.16, lon: -86.78 },
        { name: 'Stones River', lat: 35.85, lon: -86.39, dy: 15 },
        { name: 'Chattanooga', lat: 35.04, lon: -85.31, anchor: 'end' },
        { name: 'Chickamauga', lat: 34.94, lon: -85.29, dy: 15 },
        { name: 'Vicksburg', lat: 32.35, lon: -90.88, heavy: true },
        { name: 'Atlanta', lat: 33.75, lon: -84.39, heavy: true },
        { name: 'Savannah', lat: 32.08, lon: -81.09, anchor: 'end' },
      ]}
      caption="The rivers were the roads. Grant took the Mississippi and split the Confederacy at Vicksburg; Sherman drove from Chattanooga through Atlanta to the sea."
    />
  )
}

export default function WesternTheatrePage() {
  return <TheatrePage data={WT} map={<WTMap />} />
}
