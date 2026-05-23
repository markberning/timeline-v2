'use client'

// War mode front door — the "escalating spine": a vertical timeline of US
// wars grouped into era bands, card height growing with the war's size.
// Ported from the Historica `war.jsx` mockup into the app's CSS-var theming,
// fonts, and region-accent palette. The Civil War card opens the pilot reader.

import { useState } from 'react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'

// Era-band colors = the 5 region accents (grouping device on the front door).
// The War vertical's own signature (oxblood) lives in the switcher + reader.
const BAND_COLORS = {
  amber: '#d97706',
  rust: '#b44d3b',
  violet: '#7c3aed',
  blue: '#1d4ed8',
  green: '#047857',
}

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'

// hex (#rrggbb) + alpha → rgba()
function alpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  const r = parseInt(h.slice(0, 2), 16)
  const g = parseInt(h.slice(2, 4), 16)
  const b = parseInt(h.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

type Size = 's' | 'm' | 'l' | 'xl'

const WAR_SIZES: Record<Size, { content: number; body: number; imgW: number }> = {
  s: { content: 92, body: 12.5, imgW: 96 },
  m: { content: 124, body: 13, imgW: 116 },
  l: { content: 176, body: 13.5, imgW: 140 },
  xl: { content: 248, body: 14.5, imgW: 168 },
}

interface War {
  id: string
  band: string
  size: Size
  name: string
  range: string
  vs: string
  hook: string
  palette: [string, string, string]
  imgLabel: string
  img?: string   // real hero (built wars); absent ⇒ gradient placeholder
  href?: string
}

export const WAR_EVENTS: War[] = [
  { id: 'fi', band: 'col', size: 's', name: 'French & Indian War', range: '1754–1763', vs: 'Britain & colonies vs. France & allies', hook: 'A continent-sized turf war — also the first half of a world war.', palette: ['#5f6b3a', '#1c1a10', '#a08a4a'], imgLabel: 'Lake George skirmish' },
  { id: 'rev', band: 'forge', size: 'm', name: 'American Revolution', range: '1775–1783', vs: 'United States vs. Great Britain', hook: 'We hold these truths to be — well, you know the rest.', palette: ['#7a3b1c', '#c08a3a', '#0a0a0a'], imgLabel: 'Crossing the Delaware' },
  { id: '12', band: 'forge', size: 's', name: 'War of 1812', range: '1812–1815', vs: 'United States vs. Great Britain', hook: 'Britain burned the White House. We got an anthem out of it.', palette: ['#4a3a1c', '#a8763a', '#1a0e07'], imgLabel: 'Burning of Washington' },
  { id: 'mex', band: 'forge', size: 's', name: 'Mexican–American War', range: '1846–1848', vs: 'United States vs. Mexico', hook: 'Texas, California, and a long argument about whether any of this was OK.', palette: ['#7a4a1c', '#c79338', '#1a0e07'], imgLabel: 'Battle of Veracruz' },
  { id: 'cw', band: 'ind', size: 'l', name: 'American Civil War', range: '1861–1865', vs: 'Union vs. Confederacy', hook: 'The argument the country had been refusing to finish since 1789.', palette: ['#3a2a1c', '#7a1422', '#100506'], imgLabel: 'The 54th Massachusetts at Fort Wagner', img: '/war-img/civil-war-hero.jpg', href: '/war-civil-war' },
  { id: 'sp', band: 'ind', size: 's', name: 'Spanish–American War', range: '1898', vs: 'United States vs. Spain', hook: 'Ten weeks, four oceans, one empire — ours, now.', palette: ['#6b3a3a', '#c8a72a', '#0e0a08'], imgLabel: 'San Juan Hill' },
  { id: 'ww1', band: 'world', size: 'l', name: 'World War I', range: '1917–1918', vs: 'Allies vs. Central Powers', hook: 'The war that finally explained what artillery could really do.', palette: ['#3a3a32', '#a08a4a', '#0e0c08'], imgLabel: 'Trenches, Western Front' },
  { id: 'ww2', band: 'world', size: 'xl', name: 'World War II', range: '1939/41–1945', vs: 'Allies vs. Axis', hook: 'The big one. Set the table for everything that came after.', palette: ['#1c1c1c', '#7a1422', '#c8a72a'], imgLabel: 'Normandy landings, June 1944' },
  { id: 'kor', band: 'cold', size: 'm', name: 'Korean War', range: '1950–1953', vs: 'UN & South Korea vs. North Korea & China', hook: 'Officially still going. Technically a ceasefire, not a peace.', palette: ['#1c2a2a', '#7a8a3a', '#0a0a0a'], imgLabel: 'Inchon landing' },
  { id: 'vn', band: 'cold', size: 'l', name: 'Vietnam War', range: '1955–1975', vs: 'United States & South Vietnam vs. North Vietnam', hook: 'The war that taught a generation to mistrust the official story.', palette: ['#1c3a1c', '#7a6a3a', '#0a0e08'], imgLabel: 'Hueys at dawn' },
  { id: 'gw', band: 'cold', size: 's', name: 'Gulf War', range: '1990–1991', vs: 'Coalition vs. Iraq', hook: 'A hundred-hour ground war, watched live on cable.', palette: ['#7a5a1c', '#c8a72a', '#1c1208'], imgLabel: 'Highway of Death' },
  { id: 'wot', band: 'cold', size: 'm', name: 'War on Terror', range: '2001–present', vs: 'United States & allies vs. al-Qaeda, Taliban, ISIS', hook: 'A war fought in deserts and in spreadsheets. The longest one yet.', palette: ['#3a1c1c', '#c08a3a', '#0a0a0a'], imgLabel: 'Tora Bora' },
]

export const WAR_BANDS = [
  { id: 'col', label: 'Colonial Wars', color: BAND_COLORS.amber },
  { id: 'forge', label: 'A Nation Forged', color: BAND_COLORS.rust },
  { id: 'ind', label: 'Industrial Wars', color: BAND_COLORS.violet },
  { id: 'world', label: 'World Wars', color: BAND_COLORS.blue },
  { id: 'cold', label: 'Cold War & After', color: BAND_COLORS.green },
]

const CORD_X = 56
const CARD_LEFT_OFFSET = CORD_X + 16

// War card image tile — a real hero where we have one, else a palette gradient.
// The label rides over a bottom scrim so it stays readable on a bright image.
function PaintingTile({ palette, imageUrl, label, isXL }: { palette: [string, string, string]; imageUrl?: string; label: string; isXL: boolean }) {
  const [failed, setFailed] = useState(false)
  const hasImg = !!imageUrl && !failed
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', background: `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})` }}>
      {hasImg && (
        <img src={imageUrl} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 32%', transform: 'scale(1.16)', transformOrigin: 'center' }} />
      )}
      {hasImg && <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.62) 100%)' }} />}
      <div style={{ position: 'absolute', left: 8, bottom: 6, right: 8, fontFamily: SANS, fontSize: isXL ? 10 : 8.5, color: 'rgba(255,255,255,0.82)', letterSpacing: 0.2, textShadow: '0 1px 2px rgba(0,0,0,0.5)', lineHeight: 1.2 }}>
        {label}
      </div>
    </div>
  )
}

function WarCard({ w, bandColor }: { w: War; bandColor: string }) {
  const sz = WAR_SIZES[w.size]
  const isXL = w.size === 'xl'
  const isLG = w.size === 'l'

  const card = (
    <div style={{
      background: 'color-mix(in srgb, var(--foreground) 4%, transparent)',
      borderRadius: 8,
      border: `1px solid ${isXL ? alpha(bandColor, 0.55) : 'color-mix(in srgb, var(--foreground) 15%, transparent)'}`,
      boxShadow: isXL ? `0 0 0 4px ${alpha(bandColor, 0.1)}, 0 12px 28px rgba(0,0,0,0.28)` : 'none',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: isXL ? 'column' : 'row',
      height: sz.content,
    }}>
      <div style={{ width: isXL ? '100%' : sz.imgW, height: isXL ? 132 : '100%', flexShrink: 0, [isXL ? 'borderBottom' : 'borderRight']: '1px solid color-mix(in srgb, var(--foreground) 15%, transparent)' }}>
        <PaintingTile palette={w.palette} imageUrl={w.img} label={w.imgLabel} isXL={isXL} />
      </div>
      <div style={{ flex: 1, minWidth: 0, padding: isXL ? '10px 14px 12px' : (isLG ? '10px 12px' : '8px 11px'), display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: SERIF, fontSize: isXL ? 22 : (isLG ? 18 : 15), lineHeight: 1.1, letterSpacing: -0.2, color: 'var(--foreground)' }}>{w.name}</div>
        <div style={{ fontFamily: SANS, fontSize: 10, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)', marginTop: 3, letterSpacing: 0.1 }}>{w.vs}</div>
        <div style={{ marginTop: 'auto', paddingTop: 5, fontFamily: SERIF, fontSize: sz.body, lineHeight: 1.4, color: isXL ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 70%, transparent)', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: isXL ? 3 : (isLG ? 3 : 2), WebkitBoxOrient: 'vertical' }}>{w.hook}</div>
        {w.href && (
          <div style={{ marginTop: 6, fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color: bandColor }}>Read →</div>
        )}
      </div>
    </div>
  )

  return (
    <div style={{ position: 'relative', paddingLeft: CARD_LEFT_OFFSET, paddingRight: 16, marginBottom: 14 }}>
      {/* year tag on cord */}
      <div style={{ position: 'absolute', left: 4, top: 10, width: CORD_X - 12, textAlign: 'right', paddingRight: 6, fontFamily: SANS, fontSize: 10.5, letterSpacing: 0.3, fontWeight: 600 }}>
        <div style={{ color: bandColor, fontWeight: 700, fontSize: 11 }}>{w.range.split('–')[0].slice(0, 4)}</div>
        <div style={{ color: 'color-mix(in srgb, var(--foreground) 40%, transparent)', fontSize: 9.5, marginTop: 1 }}>
          {w.range.includes('–') ? `–${(w.range.split('–')[1] || '').slice(0, 4) || 'now'}` : ''}
        </div>
      </div>
      {/* node dot */}
      <div style={{ position: 'absolute', left: CORD_X - 5, top: 12, width: 10, height: 10, borderRadius: 999, background: bandColor, boxShadow: `0 0 0 3px ${alpha(bandColor, 0.18)}`, border: `1px solid ${bandColor}`, zIndex: 1 }} />
      {/* horizontal link */}
      <div style={{ position: 'absolute', left: CORD_X + 5, top: 16, width: 11, height: 1, background: alpha(bandColor, 0.5) }} />
      {w.href ? <a href={w.href} style={{ textDecoration: 'none', display: 'block' }}>{card}</a> : card}
    </div>
  )
}

export function WarFrontDoor({ showToggle = true }: { showToggle?: boolean } = {}) {
  const byBand = WAR_BANDS.map(b => ({ ...b, wars: WAR_EVENTS.filter(w => w.band === b.id) })).filter(b => b.wars.length > 0)

  return (
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: 'var(--background)', color: 'var(--foreground)' }}>
      {/* Hero */}
      <div style={{ padding: '18px 18px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div>
          <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.4 }}>War · United States</div>
          <h1 style={{ margin: '8px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 28, lineHeight: 1.12, letterSpacing: -0.4 }}>Every war the country has fought, in order.</h1>
          <p style={{ margin: '10px 0 0', fontFamily: SERIF, fontSize: 14.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)', maxWidth: 520 }}>
            Scroll down. The cards get bigger as the wars get bigger. It is not subtle.
          </p>
        </div>
        {showToggle && <DarkModeToggle />}
      </div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingTop: 8 }}>
        {/* continuous cord */}
        <div style={{ position: 'absolute', left: CORD_X, top: 0, bottom: 0, width: 1, background: 'color-mix(in srgb, var(--foreground) 25%, transparent)' }} />

        {byBand.map(band => (
          <div key={band.id} style={{ position: 'relative' }}>
            {/* era-band label */}
            <div style={{ position: 'relative', padding: '18px 18px 8px' }}>
              <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 38, fontWeight: 400, letterSpacing: -0.5, color: alpha(band.color, 0.12), lineHeight: 1, whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', overflow: 'hidden' }}>{band.label}</div>
              <div style={{ position: 'absolute', left: CORD_X + 14, top: 28, fontFamily: SANS, fontSize: 10, letterSpacing: 1.6, fontWeight: 700, color: band.color, textTransform: 'uppercase', background: 'var(--background)', padding: '0 6px' }}>{band.label}</div>
            </div>
            {band.wars.map(w => <WarCard key={w.id} w={w} bandColor={band.color} />)}
          </div>
        ))}

        {/* end cap */}
        <div style={{ position: 'absolute', left: CORD_X - 4, bottom: 8, width: 8, height: 8, borderRadius: 999, background: 'color-mix(in srgb, var(--foreground) 40%, transparent)' }} />
        <div style={{ paddingLeft: CARD_LEFT_OFFSET, paddingRight: 18, paddingTop: 4, paddingBottom: 24, fontFamily: SANS, fontSize: 10.5, color: 'color-mix(in srgb, var(--foreground) 40%, transparent)', letterSpacing: 0.4 }}>Today — you are here.</div>
      </div>
    </div>
  )
}
