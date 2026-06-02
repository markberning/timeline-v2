// Render the {locator} SVG establishing maps to standalone .svg files (concrete
// colors, dark-mode war palette) so they can be rasterized with qlmanage and
// eyeballed. Faithful to src/components/mode/dotted-map.tsx. Read-only.
// Run: node scripts/_render-locator.mjs   (writes /tmp/loc-svg/<slug>.svg)
import { readFileSync, writeFileSync, mkdirSync, globSync } from 'node:fs'
import { US_STATE_OUTLINES } from '../src/lib/us-state-outlines.ts'

const BG = '#22201e', FGc = '#ece6da', ACCENT = '#7c3aed'
const THEATRE_ACCENT = { eastern: '#7c3aed', western: '#1d4ed8', naval: '#b44d3b', 'trans-mississippi': '#d97706' }
const alpha = (hex, a) => { const h = hex.replace('#', ''); return `rgba(${parseInt(h.slice(0,2),16)},${parseInt(h.slice(2,4),16)},${parseInt(h.slice(4,6),16)},${a})` }
const FG = (a) => alpha(FGc, a)
const GRAY = FG(0.42), FAINT = FG(0.22), GRID = FG(0.06), water = alpha('#0ea5e9', 0.9)
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const num = (s, k) => { const m = s.match(new RegExp(`\\b${k}:\\s*(-?[\\d.]+)`)); return m ? parseFloat(m[1]) : undefined }
const str = (s, k) => { const m = s.match(new RegExp(`\\b${k}:\\s*'((?:\\\\.|[^'\\\\])*)'`)); return m ? m[1].replace(/\\(.)/g, '$1') : undefined }
const has = (s, k) => new RegExp(`\\b${k}:\\s*true`).test(s)
function extractLocators(src) { const out = []; let i = 0; while ((i = src.indexOf('locator:', i)) !== -1) { const o = src.indexOf('{', i); let d = 0, j = o; for (; j < src.length; j++) { if (src[j] === '{') d++; else if (src[j] === '}') { d--; if (!d) break } } out.push(src.slice(o, j + 1)); i = j + 1 } return out }
function arrObjs(body, key) { const st = body.indexOf(`${key}:`); if (st < 0) return []; const lb = body.indexOf('[', st); let d = 0, j = lb; for (; j < body.length; j++) { if (body[j] === '[') d++; else if (body[j] === ']') { d--; if (!d) break } } const arr = body.slice(lb + 1, j); const objs = []; let dd = 0, s = -1; for (let k = 0; k < arr.length; k++) { if (arr[k] === '{') { if (!dd) s = k; dd++ } else if (arr[k] === '}') { dd--; if (!dd) objs.push(arr.slice(s, k + 1)) } } return objs }

mkdirSync('/tmp/loc-svg', { recursive: true })
const FILES = globSync('src/app/war-civil-war/*/*/s/[[]section[]]/section-narrative.tsx')
const only = process.argv.slice(2).filter(a => !a.startsWith('-'))

for (const file of FILES.sort()) {
  const slug = file.match(/war-civil-war\/[^/]+\/([^/]+)\//)[1]
  const theatre = file.match(/war-civil-war\/([^/]+)\//)[1]
  const accent = THEATRE_ACCENT[theatre] || ACCENT
  if (only.length && !only.includes(slug)) continue
  const locs = extractLocators(readFileSync(file, 'utf8'))
  if (!locs.length) continue
  const body = locs[0]
  const fm = body.match(/frame:\s*\{([^}]*)\}/)[1]
  const frame = { lonMin: num(fm, 'lonMin'), lonMax: num(fm, 'lonMax'), latMin: num(fm, 'latMin'), latMax: num(fm, 'latMax') }
  const vbWidth = num(body, 'vbWidth') ?? 680
  const midLat = (frame.latMin + frame.latMax) / 2, kx = Math.cos(midLat * Math.PI / 180), pad = 24
  const rawW = (frame.lonMax - frame.lonMin) * kx, rawH = frame.latMax - frame.latMin
  const W = vbWidth, scale = (W - 2 * pad) / rawW, H = Math.round(rawH * scale + 2 * pad)
  const X = (lon) => pad + (lon - frame.lonMin) * kx * scale
  const Y = (lat) => pad + (frame.latMax - lat) * scale

  const parts = [`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">`]
  parts.push(`<rect x="0" y="0" width="${W}" height="${H}" fill="${BG}"/>`)
  // gridlines
  for (let lo = Math.ceil(frame.lonMin); lo <= frame.lonMax; lo++) parts.push(`<line x1="${X(lo).toFixed(1)}" y1="0" x2="${X(lo).toFixed(1)}" y2="${H}" stroke="${GRID}" stroke-width="1"/>`)
  for (let la = Math.ceil(frame.latMin); la <= frame.latMax; la++) parts.push(`<line x1="0" y1="${Y(la).toFixed(1)}" x2="${W}" y2="${Y(la).toFixed(1)}" stroke="${GRID}" stroke-width="1"/>`)
  // states
  const states = arrObjs(body, 'states').map(o => ({ name: str(o, 'name'), tone: str(o, 'tone'), label: str(o, 'label'), labelLon: num(o, 'labelLon'), labelLat: num(o, 'labelLat'), labelSize: num(o, 'labelSize'), color: (o.match(/color:\s*'([^']*)'/) || [])[1] }))
  const ringD = (ring) => ring.map((p, i) => (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1)).join(' ') + 'Z'
  const stateD = (name) => (US_STATE_OUTLINES[name] || []).flatMap(poly => poly.map(ringD)).join(' ')
  const ordered = [...states].sort((a, b) => (a.tone === 'focus' ? 1 : 0) - (b.tone === 'focus' ? 1 : 0))
  for (const st of ordered) {
    const stroke = st.tone === 'focus' ? alpha(accent, 0.9) : st.tone === 'faint' ? FAINT : GRAY
    parts.push(`<path d="${stateD(st.name)}" fill="none" stroke="${stroke}" stroke-width="${st.tone === 'focus' ? 2 : 1.7}" stroke-dasharray="1.5 5.5" stroke-linecap="round" stroke-linejoin="round"/>`)
  }
  // rivers
  for (const o of arrObjs(body, 'rivers')) {
    const ptsM = o.match(/pts:\s*(\[[\s\S]*?\])\s*,/) || o.match(/pts:\s*(\[[\s\S]*\])/)
    let pts = []
    try { pts = JSON.parse((ptsM ? ptsM[1] : '[]').replace(/\s+/g, '')) } catch {}
    if (pts.length) {
      parts.push(`<path d="${pts.map((p, j) => (j ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1)).join(' ')}" fill="none" stroke="${alpha('#0ea5e9', 0.55)}" stroke-width="1.8" stroke-dasharray="1.5 4.5"/>`)
    }
    const rl = str(o, 'label')
    if (rl) parts.push(text(esc(rl), X(num(o, 'labelLon') ?? pts[0]?.[0]), Y(num(o, 'labelLat') ?? pts[0]?.[1]), 15, str(o, 'labelAnchor') ?? 'middle', water, 4))
  }
  // state labels
  for (const st of states.filter(s => s.label)) {
    const fill = st.tone === 'focus' ? alpha(accent, 0.95) : FG(0.55)
    parts.push(text(esc(st.label), X(st.labelLon), Y(st.labelLat), st.labelSize ?? 19, 'middle', fill, 5.5, 700, 1.8))
  }
  // dots
  for (const o of arrObjs(body, 'dots')) {
    const name = str(o, 'name'); const lat = num(o, 'lat'), lon = num(o, 'lon')
    const col = (o.match(/color:\s*'([^']*)'/) || [])[1] || accent
    const anchor = str(o, 'anchor') ?? 'start'; const dx = num(o, 'dx'), dy = num(o, 'dy'); const heavy = has(o, 'heavy'); const date = str(o, 'date'); const dateBelow = has(o, 'dateBelow')
    const x = X(lon), y = Y(lat), r = heavy ? 6 : 4.5
    const fs = heavy ? 17 : 14.5
    const tx = x + (anchor === 'end' ? -(dx ?? 11) : anchor === 'middle' ? (dx ?? 0) : (dx ?? 11))
    const ty = y + (dy ?? (date ? -2 : 5))
    parts.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${col}"/>`)
    parts.push(`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r + 3.5}" fill="none" stroke="${alpha(col, 0.25)}" stroke-width="2"/>`)
    if (name) {
      const dtInline = (date && !dateBelow) ? `<tspan dx="9" font-size="${fs}" font-weight="600" fill="${alpha(col, 0.95)}">${esc(date)}</tspan>` : ''
      parts.push(`<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" font-family="Menlo, monospace" text-anchor="${anchor}" stroke="${BG}" stroke-width="6" stroke-linejoin="round" paint-order="stroke"><tspan font-size="${fs}" font-weight="${heavy ? 700 : 500}" fill="${FGc}">${esc(name)}</tspan>${dtInline}</text>`)
      if (date && dateBelow) parts.push(`<text x="${tx.toFixed(1)}" y="${(ty + (heavy ? 20 : 18)).toFixed(1)}" font-family="Menlo, monospace" font-size="${fs}" font-weight="600" text-anchor="${anchor}" fill="${alpha(col, 0.95)}" stroke="${BG}" stroke-width="6" stroke-linejoin="round" paint-order="stroke">${esc(date)}</text>`)
    }
  }
  parts.push('</svg>')
  writeFileSync(`/tmp/loc-svg/${slug}.svg`, parts.join('\n'))
  console.log(`wrote ${slug}.svg  [${W}x${H}]`)
}

function text(t, x, y, fs, anchor, fill, sw, weight = 400, ls = 0) {
  return `<text x="${x.toFixed(1)}" y="${y.toFixed(1)}" font-family="Menlo, monospace" font-size="${fs}" font-weight="${weight}"${ls ? ` letter-spacing="${ls}"` : ''} text-anchor="${anchor}" fill="${fill}" stroke="${BG}" stroke-width="${sw}" stroke-linejoin="round" paint-order="stroke">${t}</text>`
}
