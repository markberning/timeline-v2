'use client'

// Shared dotted-outline map for the War pages. Renders real US state borders
// (from src/lib/us-state-outlines.ts) as dotted lines — theme-aware, no grid
// snapping — with battle dots, capital markers, an optional capital-to-capital
// corridor, and free labels. Used by the theatre maps and the war home.

import { US_STATE_OUTLINES } from '@/lib/us-state-outlines'
import { alpha } from '@/components/mode/war-chrome'

const SANS = 'var(--font-geist-sans)'
const MONO = 'var(--font-geist-mono)'

export type Frame = { lonMin: number; lonMax: number; latMin: number; latMax: number }
export type Tone = 'focus' | 'gray' | 'faint'
// `color` overrides the tone palette for multi-theatre maps (each theatre its
// own colour); tone then just sets emphasis: 'focus' = bright, 'faint' = dim.
export type StateSpec = { name: string; tone?: Tone; color?: string; label?: string; labelLon?: number; labelLat?: number; labelSize?: number }
export type Dot = { name?: string; lat: number; lon: number; anchor?: 'start' | 'end'; dx?: number; dy?: number; heavy?: boolean; color?: string }
export type Capital = { name: string; lat: number; lon: number; dx?: number; dy?: number; anchor?: 'start' | 'end' }
export type Corridor = { fromLon: number; fromLat: number; toLon: number; toLat: number; label?: string; labelLon?: number; labelLat?: number; labelAnchor?: 'start' | 'end'; dashed?: boolean }
export type River = { pts: [number, number][]; label?: string; labelLon?: number; labelLat?: number; labelAnchor?: 'start' | 'middle' | 'end' }
export type FreeLabel = { text: string; lon: number; lat: number; kind?: 'accent' | 'water' | 'faint'; size?: number; anchor?: 'start' | 'middle' | 'end' }

export function DottedMap({
  eyebrow, caption, accent, frame, states, dots = [], capitals = [], corridor, rivers = [], labels = [], vbWidth = 680, inset = true,
}: {
  eyebrow?: string; caption?: string; accent: string; frame: Frame
  states: StateSpec[]; dots?: Dot[]; capitals?: Capital[]; corridor?: Corridor; rivers?: River[]; labels?: FreeLabel[]; vbWidth?: number; inset?: boolean
}) {
  const { lonMin, lonMax, latMin, latMax } = frame
  const midLat = (latMin + latMax) / 2, kx = Math.cos(midLat * Math.PI / 180), pad = 24
  const rawW = (lonMax - lonMin) * kx, rawH = (latMax - latMin)
  const W = vbWidth, scale = (W - 2 * pad) / rawW, H = Math.round(rawH * scale + 2 * pad)
  const X = (lon: number) => pad + (lon - lonMin) * kx * scale
  const Y = (lat: number) => pad + (latMax - lat) * scale

  const FG = (a: number) => `color-mix(in srgb, var(--foreground) ${Math.round(a * 100)}%, transparent)`
  const GRAY = FG(0.42), FAINT = FG(0.22), GRID = FG(0.045)
  const CARD = FG(0.04), BORDER = FG(0.12)
  const water = alpha('#0ea5e9', 0.9)
  const dash = '1.5 5.5'
  const toneStroke = (t?: Tone, c?: string) => c ? alpha(c, t === 'faint' ? 0.32 : 0.9) : t === 'focus' ? alpha(accent, 0.9) : t === 'faint' ? FAINT : GRAY
  const toneLabel = (t?: Tone, c?: string) => c ? alpha(c, t === 'faint' ? 0.5 : 0.95) : t === 'focus' ? alpha(accent, 0.95) : FG(0.55)

  const ringD = (ring: number[][]) => ring.map((p, i) => (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1)).join(' ') + 'Z'
  const stateD = (name: string) => (US_STATE_OUTLINES[name] || []).flatMap(poly => poly.map(ringD)).join(' ')

  // gridline degrees within frame
  const vlines: number[] = [], hlines: number[] = []
  for (let lo = Math.ceil(lonMin); lo <= lonMax; lo++) vlines.push(lo)
  for (let la = Math.ceil(latMin); la <= latMax; la++) hlines.push(la)
  // draw focus states last so they sit on top
  const ordered = [...states].sort((a, b) => (a.tone === 'focus' ? 1 : 0) - (b.tone === 'focus' ? 1 : 0))
  const labelColor = (k?: string) => k === 'accent' ? alpha(accent, 0.65) : k === 'water' ? water : FG(0.4)

  return (
    <div style={{ padding: inset ? '20px 16px 22px' : 0, borderBottom: inset ? `1px solid ${BORDER}` : 'none' }}>
      {eyebrow && <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: accent }}>{eyebrow}</div>}
      <div style={{ marginTop: eyebrow ? 12 : 0, borderRadius: 6, overflow: 'hidden', border: `1px solid ${BORDER}`, background: CARD }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: '100%', height: 'auto', display: 'block' }}>
          {vlines.map(lo => <line key={`v${lo}`} x1={X(lo)} y1={0} x2={X(lo)} y2={H} stroke={GRID} strokeWidth={1} />)}
          {hlines.map(la => <line key={`h${la}`} x1={0} y1={Y(la)} x2={W} y2={Y(la)} stroke={GRID} strokeWidth={1} />)}
          {ordered.map(st => (
            <path key={st.name} d={stateD(st.name)} fill="none" stroke={toneStroke(st.tone, st.color)} strokeWidth={st.tone === 'focus' ? 2 : 1.7} strokeDasharray={dash} strokeLinecap="round" strokeLinejoin="round" />
          ))}
          {rivers.map((rv, i) => {
            const d = rv.pts.map((p, j) => (j ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1)).join(' ')
            return (
              <g key={`r${i}`}>
                <path d={d} fill="none" stroke={alpha('#0ea5e9', 0.55)} strokeWidth={1.8} strokeDasharray="1.5 4.5" strokeLinecap="round" strokeLinejoin="round" />
                {rv.label && <text x={X(rv.labelLon ?? rv.pts[0][0])} y={Y(rv.labelLat ?? rv.pts[0][1])} fontFamily={MONO} fontSize={15} fill={water} textAnchor={rv.labelAnchor ?? 'middle'} style={{ paintOrder: 'stroke' }} stroke="var(--background)" strokeWidth={4}>{rv.label}</text>}
              </g>
            )
          })}
          {states.filter(st => st.label).map(st => (
            <text key={`l${st.name}`} x={X(st.labelLon!)} y={Y(st.labelLat!)} fontFamily={MONO} fontSize={st.labelSize ?? 19} fontWeight={700} letterSpacing={1.8} fill={toneLabel(st.tone, st.color)} textAnchor="middle" style={{ paintOrder: 'stroke' }} stroke="var(--background)" strokeWidth={5.5} strokeLinejoin="round">{st.label}</text>
          ))}
          {labels.map((l, i) => (
            <text key={`f${i}`} x={X(l.lon)} y={Y(l.lat)} fontFamily={MONO} fontSize={l.size ?? 15} letterSpacing={0.5} fill={labelColor(l.kind)} textAnchor={l.anchor ?? 'middle'} style={{ paintOrder: 'stroke' }} stroke="var(--background)" strokeWidth={3.6}>{l.text}</text>
          ))}
          {corridor && (
            <>
              <line x1={X(corridor.fromLon)} y1={Y(corridor.fromLat)} x2={X(corridor.toLon)} y2={Y(corridor.toLat)} stroke={FG(0.5)} strokeWidth={1.5} strokeDasharray="2 4" />
              {corridor.label && <text x={X(corridor.labelLon ?? (corridor.fromLon + corridor.toLon) / 2)} y={Y(corridor.labelLat ?? (corridor.fromLat + corridor.toLat) / 2)} fontFamily={MONO} fontSize={15} fill={FG(0.62)} textAnchor={corridor.labelAnchor ?? 'start'} dx={corridor.labelAnchor === 'end' ? -6 : 6} style={{ paintOrder: 'stroke' }} stroke="var(--background)" strokeWidth={3.6}>{corridor.label}</text>}
            </>
          )}
          {dots.map((d, i) => {
            const col = d.color ?? accent, x = X(d.lon), y = Y(d.lat), r = d.heavy ? 6 : 5
            return (
              <g key={`d${i}`}>
                <circle cx={x} cy={y} r={r} fill={col} />
                <circle cx={x} cy={y} r={r + 3.5} fill="none" stroke={alpha(col, 0.25)} strokeWidth={2} />
                {d.name && <text x={x + (d.anchor === 'end' ? -(d.dx ?? 10) : (d.dx ?? 10))} y={y + (d.dy ?? 5)} fontFamily={MONO} fontSize={16} fill="var(--foreground)" textAnchor={d.anchor ?? 'start'} style={{ paintOrder: 'stroke' }} stroke="var(--background)" strokeWidth={4}>{d.name}</text>}
              </g>
            )
          })}
          {capitals.map((c, i) => {
            const x = X(c.lon), y = Y(c.lat)
            return (
              <g key={`c${i}`}>
                <rect x={x - 6} y={y - 6} width={12} height={12} rx={2} fill="var(--foreground)" stroke="var(--background)" strokeWidth={1.5} />
                <text x={x + (c.anchor === 'end' ? -(c.dx ?? 11) : (c.dx ?? 11))} y={y + (c.dy ?? 5)} fontFamily={MONO} fontSize={17} fontWeight={700} fill="var(--foreground)" textAnchor={c.anchor ?? 'start'} style={{ paintOrder: 'stroke' }} stroke="var(--background)" strokeWidth={4}>{c.name}</text>
              </g>
            )
          })}
        </svg>
      </div>
      {caption && <div style={{ marginTop: 8, fontFamily: SANS, fontSize: 10.5, color: FG(0.45) }}>{caption}</div>}
    </div>
  )
}
