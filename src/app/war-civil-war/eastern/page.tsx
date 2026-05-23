'use client'

// THEATRE level (Eastern Theatre). All structure lives in the shared
// <TheatrePage> (src/components/mode/theatre-page.tsx); this file is just the
// Eastern data object + its geography map. Antietam + Gettysburg battle pages
// tap through from the spine. Palette = Civil War violet. Casualty splits are
// mockup estimates pending the accuracy fact-check pass.

import { CIVIL_WAR_ACCENT, ACCENTS } from '@/components/mode/war-chrome'
import { DottedMap } from '@/components/mode/dotted-map'
import { TheatrePage, type TheatreData } from '@/components/mode/theatre-page'

const ET: TheatreData = {
  id: 'east',
  accent: CIVIL_WAR_ACCENT,
  name: 'Eastern Theatre',
  span: '1861–1865',
  region: 'Virginia · Maryland · Pennsylvania',
  heroImage: '/war-img/antietam-hero.jpg',
  heroPalette: ['#3a2a1c', '#5a2a32', '#100506'],
  heroCredit: 'Battle of Antietam · Kurz & Allison · public domain',
  heroEyebrowColor: '#c4b5fd',
  durationLabel: '4 years',
  armies: [
    { side: 'Union', label: 'Army of the Potomac', peak: '120k', commanders: ['McDowell', 'McClellan', 'Pope', 'Burnside', 'Hooker', 'Meade', 'Grant'], color: ACCENTS.blue },
    { side: 'Confederacy', label: 'Army of Northern Virginia', peak: '75k', commanders: ['Beauregard', 'J. Johnston', 'Lee'], color: ACCENTS.rust },
  ],
  commanders: [
    { name: 'G. Meade', role: 'Cmdr., Potomac (Jun ’63–)', side: 'U', img: '/war-img/cmdr/meade.jpg' },
    { name: 'U. S. Grant', role: 'Lt. Gen., U.S. (’64–)', side: 'U', img: '/war-img/cmdr/grant.jpg' },
    { name: 'G. McClellan', role: 'Cmdr., Potomac (’61–’62)', side: 'U', img: '/war-img/cmdr/mcclellan.jpg' },
    { name: 'R. E. Lee', role: 'Cmdr., N. Virginia', side: 'C', img: '/war-img/cmdr/lee.jpg' },
    { name: 'J. Longstreet', role: 'Lt. Gen., CSA', side: 'C', img: '/war-img/cmdr/longstreet.jpg' },
    { name: 'T. J. Jackson', role: 'Lt. Gen., CSA (KIA ’63)', side: 'C', img: '/war-img/cmdr/jackson.jpg' },
  ],
  casualties: { union: 145000, csa: 95000, civilian: 8000 },
  chain: { name: 'Theatres of the Civil War', index: 1, total: 4 },
  timelineIntro: 'The theatre’s battles, sized by significance. Tap Antietam or Gettysburg to drop into the battle.',
}

// Theatre geography — the Washington–Richmond corridor with the Shenandoah on
// one flank. Real dotted state outlines, battle dots, both capitals, the 110-mi
// corridor line.
function ETMap() {
  return (
    <DottedMap
      eyebrow="Geography"
      accent={CIVIL_WAR_ACCENT}
      frame={{ lonMin: -79.5, lonMax: -75.6, latMin: 36.8, latMax: 40.05 }}
      states={[
        { name: 'West Virginia', tone: 'faint' },
        { name: 'Pennsylvania', tone: 'gray', label: 'PENNSYLVANIA', labelLon: -76.9, labelLat: 39.93 },
        { name: 'Maryland', tone: 'gray', label: 'MARYLAND', labelLon: -76.5, labelLat: 39.28 },
        { name: 'Virginia', tone: 'focus', label: 'VIRGINIA', labelLon: -78.7, labelLat: 37.5 },
      ]}
      labels={[{ text: 'Shenandoah', lon: -78.5, lat: 38.7, kind: 'accent', size: 15 }]}
      corridor={{ fromLon: -77.04, fromLat: 38.90, toLon: -77.43, toLat: 37.54, label: '110 mi', labelLon: -77.0, labelLat: 38.25 }}
      dots={[
        { name: 'Gettysburg', lat: 39.83, lon: -77.23 },
        { name: 'Antietam', lat: 39.46, lon: -77.74, anchor: 'end' },
        { name: 'Bull Run', lat: 38.81, lon: -77.52, anchor: 'end' },
        { name: 'Fredericksburg', lat: 38.30, lon: -77.46 },
        { name: 'Chancellorsville', lat: 38.31, lon: -77.64, anchor: 'end' },
        { name: 'Appomattox', lat: 37.36, lon: -78.80 },
        { name: 'Petersburg', lat: 37.23, lon: -77.40, dy: 15 },
      ]}
      capitals={[
        { name: 'Washington', lat: 38.90, lon: -77.04 },
        { name: 'Richmond', lat: 37.54, lon: -77.43 },
      ]}
      caption="Most of the Eastern war fell in the 110-mile corridor between Washington and Richmond — the Shenandoah Valley on one flank, the Chesapeake on the other."
    />
  )
}

export default function EasternTheatrePage() {
  return <TheatrePage data={ET} map={<ETMap />} />
}
