'use client'

// THEATRE level (Trans-Mississippi). Structure lives in the shared <TheatrePage>
// (src/components/mode/theatre-page.tsx); this file is just the Trans-Miss data
// object + its geography map. The war west of the Mississippi — Missouri border
// fights, Arkansas, the Red River, and the far New Mexico frontier. Palette:
// Trans-Miss accent = amber (mockup THEATRES.tmis.color). No battle pages exist
// here yet, so nothing taps through. Casualty splits are mockup ESTIMATES
// (labeled "(est.)") pending the accuracy fact-check pass — see
// audits/war-pilot-civil-war.md.

import { ACCENTS } from '@/components/mode/war-chrome'
import { DottedMap } from '@/components/mode/dotted-map'
import { US_RIVERS } from '@/lib/us-rivers'
import { TheatrePage, type TheatreData } from '@/components/mode/theatre-page'

const ACCENT = ACCENTS.amber

const TM: TheatreData = {
  id: 'tmis',
  accent: ACCENT,
  name: 'Trans-Mississippi',
  span: '1861–1865',
  region: 'Missouri · Arkansas · Louisiana · the far frontier',
  heroImage: '/war-img/pea-ridge-hero.jpg',
  heroPalette: ['#4a3a1c', '#5a4426', '#100c06'],
  heroCredit: 'Battle of Pea Ridge · Kurz & Allison · public domain',
  heroEyebrowColor: '#fcd34d',
  heroObjectPosition: 'center 40%',
  durationLabel: '4 years',
  armies: [
    { side: 'Union', label: 'Army of the Frontier & Dept. of the Missouri', peak: '~40k', commanders: ['Lyon', 'Curtis', 'Banks', 'Canby'], color: ACCENTS.blue },
    { side: 'Confederacy', label: 'Trans-Mississippi Department', peak: '~45k', commanders: ['Price', 'Van Dorn', 'Hindman', 'Kirby Smith'], color: ACCENTS.rust },
  ],
  commanders: [
    { name: 'N. Lyon', role: 'Cmdr., Army of the West (KIA ’61)', side: 'U', img: '/war-img/cmdr/lyon.jpg' },
    { name: 'S. R. Curtis', role: 'Victor at Pea Ridge', side: 'U', img: '/war-img/cmdr/curtis.jpg' },
    { name: 'E. Kirby Smith', role: 'Cmdr., Trans-Miss. Dept.', side: 'C', img: '/war-img/cmdr/kirby-smith.jpg' },
    { name: 'S. Price', role: 'Maj. Gen., Missouri', side: 'C', img: '/war-img/cmdr/price.jpg' },
    { name: 'E. Van Dorn', role: 'Cmdr., Army of the West', side: 'C', img: '/war-img/cmdr/van-dorn.jpg' },
  ],
  // Mockup estimate (the theatre saw far fewer men than the East/West); split
  // rounded + flagged for the accuracy fact-check pass.
  casualties: { union: 16000, csa: 13000, civilian: 4000 },
  chain: { name: 'Theatres of the Civil War', index: 3, total: 4 },
  timelineIntro: 'The theatre’s battles, sized by significance — the war west of the great river. Battle pages for the Trans-Mississippi are coming; for now, this is the spine of the campaign.',
}

// Theatre geography — the vast country west of the Mississippi: the Missouri
// border fights, the Arkansas battles, the Red River, and the lone desert clash
// at Glorieta Pass in New Mexico Territory. Real dotted state outlines, the
// Mississippi/Missouri river system, the battle dots, and the two regional HQs.
function TMMap() {
  return (
    <DottedMap
      eyebrow="Geography"
      accent={ACCENT}
      frame={{ lonMin: -106.6, lonMax: -88.8, latMin: 29.4, latMax: 39.7 }}
      states={[
        { name: 'Nebraska', tone: 'faint' },
        { name: 'Iowa', tone: 'faint' },
        { name: 'Colorado', tone: 'faint' },
        { name: 'Kentucky', tone: 'faint' },
        { name: 'Tennessee', tone: 'faint' },
        { name: 'Mississippi', tone: 'faint' },
        { name: 'New Mexico', tone: 'faint', label: 'NEW MEXICO TERR.', labelLon: -105.9, labelLat: 34.2, labelSize: 11 },
        { name: 'Oklahoma', tone: 'faint', label: 'INDIAN TERR.', labelLon: -97.5, labelLat: 35.3, labelSize: 11 },
        { name: 'Texas', tone: 'gray', label: 'TEXAS', labelLon: -99.2, labelLat: 31.4 },
        { name: 'Kansas', tone: 'gray', label: 'KANSAS', labelLon: -98.3, labelLat: 38.4 },
        { name: 'Louisiana', tone: 'gray', label: 'LA.', labelLon: -92.4, labelLat: 31.0 },
        { name: 'Missouri', tone: 'focus', label: 'MISSOURI', labelLon: -92.7, labelLat: 38.5 },
        { name: 'Arkansas', tone: 'focus', label: 'ARKANSAS', labelLon: -92.6, labelLat: 34.7 },
      ]}
      rivers={[
        ...US_RIVERS.Mississippi.map((pts, i) => i === 0 ? { pts, label: 'Mississippi R.', labelLon: -90.6, labelLat: 31.6, labelAnchor: 'start' as const } : { pts }),
        ...US_RIVERS.Missouri.map((pts, i) => i === 0 ? { pts, label: 'Missouri R.', labelLon: -96.4, labelLat: 40.0, labelAnchor: 'start' as const } : { pts }),
      ]}
      dots={[
        { name: 'Westport', lat: 39.01, lon: -94.59, anchor: 'end' },
        { name: "Wilson's Creek", lat: 37.10, lon: -93.41, anchor: 'end' },
        { name: 'Pea Ridge', lat: 36.45, lon: -94.03, heavy: true, anchor: 'end' },
        { name: 'Island No. Ten', lat: 36.38, lon: -89.46, anchor: 'start' },
        { name: 'Mansfield', lat: 32.04, lon: -93.70, anchor: 'end' },
        { name: 'Port Hudson', lat: 30.69, lon: -91.27, anchor: 'end' },
        { name: 'Glorieta Pass', lat: 35.57, lon: -105.74, anchor: 'start' },
      ]}
      capitals={[
        { name: 'St. Louis', lat: 38.63, lon: -90.20, anchor: 'start' },
        { name: 'Shreveport', lat: 32.52, lon: -93.75, anchor: 'end' },
      ]}
      caption="The war west of the Mississippi sprawled from the Missouri border fights to the New Mexico desert. Union control of the river — Island No. Ten, Port Hudson — sealed the theatre off, while the Confederate Trans-Mississippi held out from Shreveport to the very end."
    />
  )
}

export default function TransMississippiTheatrePage() {
  return <TheatrePage data={TM} map={<TMMap />} />
}
