'use client'

// The argument map — Philosophy's home hero. Thinkers as nodes (colored by
// school), time flowing top→bottom, edges = who taught/built-on (solid) or
// reacted-against (dashed). Tap a node → that thinker's hub. Tap a school chip
// to trace one camp through time. Reads the shared spine in philosophy-data.ts.

import { useState } from 'react'
import { SCHOOLS, EDGES, THINKERS, MARQUEE_THINKERS, schoolColor } from '@/lib/philosophy-data'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const FAINT = 'color-mix(in srgb, var(--foreground) 56%, transparent)'

const BANDS: [string, number, number][] = [
  ['Antiquity', 40, 488],
  ['The Middle Ages', 488, 770],
  ['The Enlightenment', 770, 1028],
  ['The 19th century', 1028, 1520],
]

function edgePath(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dy = b.y - a.y
  const bow = Math.min(120, 24 + Math.abs(dy) * 0.22) * (a.x < 206 ? -1 : 1)
  const cx = (a.x + b.x) / 2 + bow
  const cy = (a.y + b.y) / 2
  return { d: `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`, lx: (a.x + b.x) / 2 + bow * 0.62, ly: cy }
}

export function ArgumentMap() {
  const [active, setActive] = useState<string | null>(null)
  const marquee = new Set(MARQUEE_THINKERS.map(t => t.id))
  const edges = EDGES.filter(e => marquee.has(e.from) && marquee.has(e.to))

  const nodeOn = (id: string) => !active || THINKERS[id].school === active
  const edgeOn = (f: string, t: string) => !active || THINKERS[f].school === active || THINKERS[t].school === active

  return (
    <div>
      {/* school filter chips */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '2px 16px 12px', scrollbarWidth: 'none' }}>
        {SCHOOLS.map(s => {
          const on = !active || active === s.id
          return (
            <button key={s.id} onClick={() => setActive(active === s.id ? null : s.id)} style={{
              flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: 7, whiteSpace: 'nowrap',
              padding: '7px 11px 7px 9px', borderRadius: 999, cursor: 'pointer', transition: '.15s',
              border: `1px solid ${active === s.id ? s.color : 'color-mix(in srgb, var(--foreground) 14%, transparent)'}`,
              background: active === s.id ? `color-mix(in srgb, ${s.color} 16%, transparent)` : 'color-mix(in srgb, var(--foreground) 4%, transparent)',
              color: 'var(--foreground)', fontFamily: SANS, fontSize: 12.5, fontWeight: 600, opacity: on ? 1 : 0.5,
            }}>
              <span style={{ width: 11, height: 11, borderRadius: 3, background: s.color }} />{s.name}
            </button>
          )
        })}
      </div>

      <div style={{ display: 'flex', gap: 16, padding: '0 16px 6px', fontSize: 12, color: FAINT, fontFamily: SANS }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 20, borderTop: '2px solid var(--foreground)', opacity: .5 }} /> taught / built on</span>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 20, borderTop: '2px dashed #d2624a' }} /> reacted against</span>
      </div>

      <svg viewBox="0 0 412 1540" style={{ display: 'block', width: '100%', maxWidth: 412, margin: '0 auto', height: 'auto' }} xmlns="http://www.w3.org/2000/svg">
        {/* era bands */}
        {BANDS.map(([t, y0, y1]) => (
          <g key={t}>
            <rect x={8} y={y0} width={396} height={y1 - y0} rx={10} fill="color-mix(in srgb, var(--foreground) 3%, transparent)" />
            <text x={18} y={y0 + 18} fontFamily={SANS} fontSize={10} fontWeight={700} letterSpacing="0.18em" fill={FAINT}>{t.toUpperCase()}</text>
          </g>
        ))}

        {/* edges */}
        {edges.map((e, i) => {
          const a = THINKERS[e.from].map!, b = THINKERS[e.to].map!
          const p = edgePath(a, b)
          const col = e.type === 'reacted' ? '#d2624a' : schoolColor(THINKERS[e.from].school)
          const on = edgeOn(e.from, e.to)
          return (
            <g key={i} style={{ opacity: on ? (e.type === 'reacted' ? 0.85 : 0.7) : 0.05, transition: 'opacity .2s' }}>
              <path d={p.d} fill="none" stroke={col} strokeWidth={1.6} strokeDasharray={e.type === 'reacted' ? '4 4' : undefined} />
              {e.label && <text x={p.lx} y={p.ly} textAnchor="middle" fontFamily={SERIF} fontStyle="italic" fontSize={10.5} fill="color-mix(in srgb, var(--foreground) 70%, transparent)">{e.label}</text>}
            </g>
          )
        })}

        {/* nodes */}
        {MARQUEE_THINKERS.map(t => {
          const c = schoolColor(t.school)
          const left = t.map!.x > 206
          const on = nodeOn(t.id)
          return (
            <a key={t.id} href={`/philosophy/thinker/${t.id}`} style={{ opacity: on ? 1 : 0.16, transition: 'opacity .2s' }}>
              <circle cx={t.map!.x} cy={t.map!.y} r={15} fill={c} stroke="color-mix(in srgb, var(--background) 55%, transparent)" strokeWidth={1.5} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <image href={`/philosophy/icons/${t.id}.png`} x={t.map!.x - 11} y={t.map!.y - 11} width={22} height={22} preserveAspectRatio="xMidYMid meet" style={{ opacity: 0.95 }} />
              <text x={t.map!.x + (left ? -20 : 20)} y={t.map!.y - 1} textAnchor={left ? 'end' : 'start'} fontFamily={SERIF} fontSize={13} fontWeight={600} fill="var(--foreground)">{t.name}</text>
              <text x={t.map!.x + (left ? -20 : 20)} y={t.map!.y + 12} textAnchor={left ? 'end' : 'start'} fontFamily={SANS} fontSize={9.5} fill={FAINT}>{t.dates}</text>
            </a>
          )
        })}
      </svg>
    </div>
  )
}
