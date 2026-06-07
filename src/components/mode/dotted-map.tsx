'use client'

// Shared dotted-outline map for the War pages. Renders real US state borders
// (from src/lib/us-state-outlines.ts) plus Canadian provinces (ca-province-outlines.ts,
// for the French and Indian War) as dotted lines — theme-aware, no grid snapping —
// with battle dots, capital markers, an optional capital-to-capital corridor, and free
// labels. Used by the theatre maps and the war home.

import { US_STATE_OUTLINES } from '@/lib/us-state-outlines'
import { CA_PROVINCE_OUTLINES } from '@/lib/ca-province-outlines'
import { alpha } from '@/components/mode/war-chrome'

const SANS = 'var(--font-geist-sans)'
const MONO = 'var(--font-geist-mono)'

export type Frame = { lonMin: number; lonMax: number; latMin: number; latMax: number }
export type Tone = 'focus' | 'gray' | 'faint'
// `color` overrides the tone palette for multi-theatre maps (each theatre its
// own colour); tone then just sets emphasis: 'focus' = bright, 'faint' = dim.
export type StateSpec = { name: string; tone?: Tone; color?: string; fill?: boolean; label?: string; labelLon?: number; labelLat?: number; labelSize?: number }
// anchor 'middle' centers the label horizontally on the dot (for placing a title
// directly above/below it via dy) — use all four sides of the dot to dodge clutter.
export type Dot = { name?: string; date?: string; lat: number; lon: number; anchor?: 'start' | 'end' | 'middle'; dx?: number; dy?: number; heavy?: boolean; color?: string; dateBelow?: boolean; active?: boolean; plain?: boolean }
// A leader-line callout: a dot at the true site, its label floated into open
// space and joined by a thin leader. `sub` lists co-located engagements (one per
// line). Any label/sub line with an href becomes a tappable link to that page.
export type Callout = {
  lat: number; lon: number; label: string; href?: string; color?: string; heavy?: boolean
  // label position: geographic (labelLon/labelLat) OR screen-space as a fraction
  // of the viewBox (labelXFrac/labelYFrac) so labels can live in fixed side
  // gutters while the map zooms independently. Frac wins when provided.
  labelLon?: number; labelLat?: number; labelXFrac?: number; labelYFrac?: number; anchor?: 'start' | 'end' | 'middle'
  leaderEnd?: 'left' | 'right'   // force the leader to a specific end of the label (else nearest the dot)
  sub?: { text: string; href?: string }[]
}
export type Capital = { name: string; lat: number; lon: number; dx?: number; dy?: number; anchor?: 'start' | 'end' }
export type Corridor = { fromLon: number; fromLat: number; toLon: number; toLat: number; label?: string; labelLon?: number; labelLat?: number; labelAnchor?: 'start' | 'end'; dashed?: boolean }
export type River = { pts: [number, number][]; label?: string; labelLon?: number; labelLat?: number; labelAnchor?: 'start' | 'middle' | 'end' }
export type FreeLabel = { text: string; lon: number; lat: number; kind?: 'accent' | 'water' | 'faint'; size?: number; anchor?: 'start' | 'middle' | 'end' }

export function DottedMap({
  eyebrow, caption, accent, frame, states, dots = [], capitals = [], corridor, rivers = [], labels = [], callouts = [], vbWidth = 680, vbHeight, geoInset, inset = true,
}: {
  eyebrow?: string; caption?: string; accent: string; frame: Frame
  states: StateSpec[]; dots?: Dot[]; capitals?: Capital[]; corridor?: Corridor; rivers?: River[]; labels?: FreeLabel[]; callouts?: Callout[]; vbWidth?: number; vbHeight?: number; geoInset?: { l?: number; r?: number; t?: number; b?: number }; inset?: boolean
}) {
  const { lonMin, lonMax, latMin, latMax } = frame
  const midLat = (latMin + latMax) / 2, kx = Math.cos(midLat * Math.PI / 180), pad = 24
  const rawW = (lonMax - lonMin) * kx, rawH = (latMax - latMin)
  const W = vbWidth
  let H: number, X: (lon: number) => number, Y: (lat: number) => number
  if (geoInset || vbHeight) {
    // Draw the geographic content inside an inset box (leaving gutters for
    // callout labels), fit-to-box preserving aspect; viewBox height is explicit.
    const gl = (geoInset?.l ?? 0) * W, gr = (geoInset?.r ?? 0) * W
    H = vbHeight ?? Math.round(rawH * ((W - gl - gr) / rawW) + 2 * pad)
    const gt = (geoInset?.t ?? 0) * H, gb = (geoInset?.b ?? 0) * H
    const bw = W - gl - gr, bh = H - gt - gb
    const s = Math.min(bw / rawW, bh / rawH)
    const ox = gl + (bw - rawW * s) / 2, oy = gt + (bh - rawH * s) / 2
    X = (lon: number) => ox + (lon - lonMin) * kx * s
    Y = (lat: number) => oy + (latMax - lat) * s
  } else {
    const scale = (W - 2 * pad) / rawW
    H = Math.round(rawH * scale + 2 * pad)
    X = (lon: number) => pad + (lon - lonMin) * kx * scale
    Y = (lat: number) => pad + (latMax - lat) * scale
  }

  const FG = (a: number) => `color-mix(in srgb, var(--foreground) ${Math.round(a * 100)}%, transparent)`
  const GRAY = FG(0.42), FAINT = FG(0.22), GRID = FG(0.045)
  const CARD = FG(0.04), BORDER = FG(0.12)
  const water = alpha('#0ea5e9', 0.9)
  const dash = '1.5 5.5'
  const toneStroke = (t?: Tone, c?: string) => c ? alpha(c, t === 'faint' ? 0.32 : 0.9) : t === 'focus' ? alpha(accent, 0.9) : t === 'faint' ? FAINT : GRAY
  const toneLabel = (t?: Tone, c?: string) => c ? alpha(c, t === 'faint' ? 0.5 : 0.95) : t === 'focus' ? alpha(accent, 0.95) : FG(0.55)

  const ringD = (ring: number[][]) => ring.map((p, i) => (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1)).join(' ') + 'Z'
  const stateD = (name: string) => ((US_STATE_OUTLINES[name] || CA_PROVINCE_OUTLINES[name] || []) as [number, number][][][]).flatMap(poly => poly.map(ringD)).join(' ')

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
            <path key={st.name} d={stateD(st.name)} fill={st.fill ? alpha(st.color ?? accent, 0.1) : 'none'} stroke={toneStroke(st.tone, st.color)} strokeWidth={st.tone === 'focus' ? 2 : 1.7} strokeDasharray={dash} strokeLinecap="round" strokeLinejoin="round" />
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
            const col = d.color ?? accent, x = X(d.lon), y = Y(d.lat), r = d.active ? 7.5 : d.heavy ? 6 : 4.5
            const tx = x + (d.anchor === 'end' ? -(d.dx ?? 11) : d.anchor === 'middle' ? (d.dx ?? 0) : (d.dx ?? 11))
            const ty = y + (d.dy ?? (d.date ? -2 : 5))
            return (
              <g key={`d${i}`}>
                {d.active ? (
                  <>
                    {/* expanding pulse + bold ring + solid disc so the lit dot reads at a glance */}
                    <circle cx={x} cy={y} r={r + 3} fill="none" stroke={col} strokeWidth={2.5}>
                      <animate attributeName="r" values={`${r + 2};${r + 14}`} dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <circle cx={x} cy={y} r={r + 5} fill="none" stroke={col} strokeWidth={3} />
                    <circle cx={x} cy={y} r={r} fill={col} stroke="var(--background)" strokeWidth={2} />
                  </>
                ) : d.plain ? (
                  <circle cx={x} cy={y} r={r} fill={col} />
                ) : (
                  <>
                    <circle cx={x} cy={y} r={r} fill={col} />
                    <circle cx={x} cy={y} r={r + 3.5} fill="none" stroke={alpha(col, 0.25)} strokeWidth={2} />
                  </>
                )}
                {d.name && (
                  <>
                    <text x={tx} y={ty} fontFamily={MONO} textAnchor={d.anchor ?? 'start'} style={{ paintOrder: 'stroke' }} stroke="var(--background)" strokeWidth={6} strokeLinejoin="round">
                      <tspan fontSize={d.heavy ? 17 : 14.5} fontWeight={d.heavy ? 700 : 500} fill="var(--foreground)">{d.name}</tspan>
                      {d.date && !d.dateBelow && <tspan dx={9} fontSize={d.heavy ? 17 : 14.5} fontWeight={600} fill={alpha(col, 0.95)}>{d.date}</tspan>}
                    </text>
                    {d.date && d.dateBelow && <text x={tx} y={ty + (d.heavy ? 20 : 18)} fontFamily={MONO} fontSize={d.heavy ? 17 : 14.5} fontWeight={600} fill={alpha(col, 0.95)} textAnchor={d.anchor ?? 'start'} style={{ paintOrder: 'stroke' }} stroke="var(--background)" strokeWidth={6} strokeLinejoin="round">{d.date}</text>}
                  </>
                )}
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
          {callouts.map((c, i) => {
            const col = c.color ?? accent, r = c.heavy ? 6 : 4.5
            const dx = X(c.lon), dy = Y(c.lat)
            const lx = c.labelXFrac != null ? c.labelXFrac * W : X(c.labelLon!)
            const ly = c.labelYFrac != null ? c.labelYFrac * H : Y(c.labelLat!)
            const anchor = c.anchor ?? 'start'
            // leader meets whichever horizontal END of the label is nearer the dot
            // (its center for a top-row middle label) — so the line touches the
            // first letter when the dot sits off the label's leading edge.
            const mainW = c.label.length * 22 * 0.62
            const lEnd = anchor === 'end' ? lx - mainW : lx
            const rEnd = anchor === 'end' ? lx : lx + mainW
            const gx = anchor === 'middle' ? lx
              : c.leaderEnd === 'left' ? lEnd - 4
              : c.leaderEnd === 'right' ? rEnd + 4
              : (Math.abs(dx - lEnd) <= Math.abs(dx - rEnd) ? lEnd - 4 : rEnd + 4)
            const linkText = (text: string, y: number, href: string | undefined, main: boolean) => {
              const fs = main ? 22 : 18
              // links read as links: accent colour + underline. Plain text (group
              // headers, unbuilt battles) stays foreground with no underline.
              const t = (
                <text x={lx} y={y} fontFamily={MONO} fontSize={fs} fontWeight={main ? 700 : 600} fill={href ? col : 'var(--foreground)'} textAnchor={anchor} style={{ paintOrder: 'stroke', cursor: href ? 'pointer' : 'default', textDecoration: href ? 'underline' : 'none', textUnderlineOffset: 3 }} stroke="var(--background)" strokeWidth={main ? 5.5 : 4.8} strokeLinejoin="round">{text}</text>
              )
              if (!href) return t
              // a transparent oversized rect makes the whole label a comfortable
              // touch target, not just the thin glyphs.
              const textW = text.length * fs * 0.62
              const rx = anchor === 'end' ? lx - textW - 10 : anchor === 'middle' ? lx - textW / 2 - 10 : lx - 10
              return (
                <a href={href} style={{ cursor: 'pointer' }}>
                  <rect x={rx} y={y - fs + 1} width={textW + 20} height={fs + (main ? 14 : 8)} fill="transparent" />
                  {t}
                </a>
              )
            }
            return (
              <g key={`co${i}`}>
                <line x1={dx} y1={dy} x2={gx} y2={ly} stroke={alpha(col, 0.55)} strokeWidth={1.2} />
                <circle cx={dx} cy={dy} r={r} fill={col} />
                <circle cx={dx} cy={dy} r={r + 3.5} fill="none" stroke={alpha(col, 0.25)} strokeWidth={2} />
                <circle cx={gx} cy={ly} r={1.6} fill={alpha(col, 0.7)} />
                {linkText(c.label, ly, c.href, true)}
                {(c.sub ?? []).map((s, j) => linkText(s.text, ly + 29 + j * 37, s.href, false))}
              </g>
            )
          })}
        </svg>
      </div>
      {caption && <div style={{ marginTop: 8, fontFamily: SANS, fontSize: 10.5, color: FG(0.45) }}>{caption}</div>}
    </div>
  )
}
