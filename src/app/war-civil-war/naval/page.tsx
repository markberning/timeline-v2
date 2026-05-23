'use client'

// THEATRE level (Naval & Coastal). Structure lives in the shared <TheatrePage>
// (src/components/mode/theatre-page.tsx); this file is just the Naval data
// object + its coastline map. The slow strangulation — the Union blockade (the
// "Anaconda"), the river-mouth forts, and the ironclads. Palette: Naval accent =
// rust (mockup THEATRES.naval.color). No battle pages exist here yet, so nothing
// taps through. "Armies" are fleets; casualty splits are mockup ESTIMATES
// (labeled "(est.)") pending the accuracy fact-check pass — see
// audits/war-pilot-civil-war.md.

import { ACCENTS } from '@/components/mode/war-chrome'
import { DottedMap } from '@/components/mode/dotted-map'
import { US_RIVERS } from '@/lib/us-rivers'
import { TheatrePage, type TheatreData } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.rust

const NV: TheatreData = {
  id: 'naval',
  accent: ACCENT,
  name: 'Naval & Coastal',
  span: '1861–1865',
  region: 'The blockade · the river-mouths · the coastal forts',
  heroImage: '/war-img/mobile-bay-hero.jpg',
  heroPalette: ['#1c3a4a', '#26465a', '#06090c'],
  heroCredit: 'Battle of Mobile Bay · Julian O. Davidson / L. Prang & Co. · public domain',
  heroEyebrowColor: '#fca5a5',
  heroObjectPosition: 'center 56%',
  durationLabel: '4 years',
  armies: [
    { side: 'Union', label: 'U.S. Navy — blockading squadrons', peak: '~670 ships', commanders: ['Welles', 'Farragut', 'D. D. Porter', 'Du Pont'], color: ACCENTS.blue },
    { side: 'Confederacy', label: 'C.S. Navy & coastal defenses', peak: '~130 vessels', commanders: ['Mallory', 'Buchanan', 'Semmes'], color: ACCENTS.rust },
  ],
  commanders: [
    { name: 'D. Farragut', role: 'Rear Adm., W. Gulf Sqdn.', side: 'U', img: '/war-img/cmdr/farragut.jpg' },
    { name: 'D. D. Porter', role: 'Rear Adm., Miss. Sqdn.', side: 'U', img: '/war-img/cmdr/dd-porter.jpg' },
    { name: 'S. F. Du Pont', role: 'Rear Adm., S. Atlantic Sqdn.', side: 'U', img: '/war-img/cmdr/dupont.jpg' },
    { name: 'F. Buchanan', role: 'Adm., CSS Virginia & Tennessee', side: 'C', img: '/war-img/cmdr/buchanan.jpg' },
    { name: 'R. Semmes', role: 'Capt., CSS Alabama', side: 'C', img: '/war-img/cmdr/semmes.jpg' },
  ],
  // Mockup estimate — combat losses afloat were comparatively small; split
  // rounded + flagged for the accuracy fact-check pass.
  casualties: { union: 5000, csa: 5000, civilian: 1500 },
  chain: { name: 'Theatres of the Civil War', index: 4, total: 4 },
  timelineIntro: 'The theatre’s battles, sized by significance — the blockade, the river-mouths, and the coastal forts. Battle pages for the naval war are coming; for now, this is the spine of the campaign.',
}

// Theatre geography — the Confederate coastline the Union strangled port by
// port. Real dotted state outlines, the Mississippi mouth at New Orleans, the
// fort battles as dots, the ironclad duel at Hampton Roads for context, and the
// blockade marked out in the open water.
function NavalMap() {
  return (
    <DottedMap
      eyebrow="Geography"
      accent={ACCENT}
      frame={{ lonMin: -91.6, lonMax: -75.0, latMin: 28.3, latMax: 37.4 }}
      states={[
        { name: 'Tennessee', tone: 'faint' },
        { name: 'Mississippi', tone: 'gray', label: 'MISS.', labelLon: -89.7, labelLat: 32.7 },
        { name: 'Georgia', tone: 'gray', label: 'GEORGIA', labelLon: -83.6, labelLat: 32.6 },
        { name: 'Florida', tone: 'gray', label: 'FLA.', labelLon: -82.0, labelLat: 29.2 },
        { name: 'Virginia', tone: 'gray', label: 'VA.', labelLon: -78.8, labelLat: 37.1 },
        { name: 'Louisiana', tone: 'focus', label: 'LA.', labelLon: -92.4, labelLat: 31.2 },
        { name: 'Alabama', tone: 'focus', label: 'ALA.', labelLon: -86.8, labelLat: 32.6 },
        { name: 'South Carolina', tone: 'focus', label: 'S.C.', labelLon: -81.0, labelLat: 34.2 },
        { name: 'North Carolina', tone: 'focus', label: 'N.C.', labelLon: -79.4, labelLat: 35.6 },
      ]}
      rivers={[
        ...US_RIVERS.Mississippi.map((pts, i) => i === 0 ? { pts, label: 'Mississippi R.', labelLon: -91.1, labelLat: 31.3, labelAnchor: 'start' as const } : { pts }),
      ]}
      labels={[
        { text: 'ATLANTIC', lon: -76.6, lat: 31.6, kind: 'water', size: 16 },
        { text: 'GULF OF MEXICO', lon: -87.2, lat: 28.9, kind: 'water', size: 16 },
        { text: 'Union blockade — the “Anaconda”', lon: -78.0, lat: 33.4, kind: 'accent', size: 14, anchor: 'start' },
      ]}
      dots={[
        { name: 'Hampton Roads', lat: 36.97, lon: -76.33, anchor: 'start' },
        { name: 'Fort Fisher', lat: 33.97, lon: -77.92, heavy: true, anchor: 'start' },
        { name: 'Fort Sumter', lat: 32.75, lon: -79.87, heavy: true, anchor: 'start' },
        { name: 'Mobile Bay', lat: 30.23, lon: -88.02, heavy: true, anchor: 'end' },
        { name: 'Forts Jackson & St. Philip', lat: 29.35, lon: -89.46, anchor: 'end' },
      ]}
      capitals={[
        { name: 'New Orleans', lat: 29.95, lon: -90.07, anchor: 'end' },
      ]}
      caption="The naval war was a slow strangulation. The Union blockade — the “Anaconda” — sealed the Confederate coast port by port: New Orleans and the river forts in 1862, Mobile Bay in 1864, and finally Fort Fisher, which closed the last open harbor at Wilmington."
    />
  )
}

export default function NavalTheatrePage() {
  return <TheatrePage data={NV} map={<NavalMap />} />
}
