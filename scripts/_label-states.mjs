// Label EVERY state visible in each {locator} establishing map (not just the focus
// state). Places each state's name inside its own in-frame area (point-in-polygon),
// clear of the dots, the dot labels, and the other state labels. Focus state stays
// accent + size 19; neighbours get a smaller gray label. Rewrites the states array;
// leaves frame + dots untouched. Run: node scripts/_label-states.mjs [slug...]
import { readFileSync, writeFileSync, globSync } from 'node:fs'
import { US_STATE_OUTLINES } from '../src/lib/us-state-outlines.ts'

const num = (s, k) => { const m = s.match(new RegExp(`\\b${k}:\\s*(-?[\\d.]+)`)); return m ? parseFloat(m[1]) : undefined }
const str = (s, k) => { const m = s.match(new RegExp(`\\b${k}:\\s*'((?:\\\\.|[^'\\\\])*)'`)); return m ? m[1].replace(/\\(.)/g, '$1') : undefined }
const has = (s, k) => new RegExp(`\\b${k}:\\s*true`).test(s)
const esc = (s) => s.replace(/'/g, "\\'")
const charW = (fs) => 0.6 * fs

function extractLocator(src) {
  const i = src.indexOf('locator:'); if (i < 0) return null
  const o = src.indexOf('{', i); let d = 0, j = o
  for (; j < src.length; j++) { if (src[j] === '{') d++; else if (src[j] === '}') { d--; if (!d) break } }
  return { body: src.slice(o, j + 1), start: o, end: j + 1 }
}
function arrSpan(body, key) {
  const st = body.indexOf(`${key}:`); if (st < 0) return null
  const lb = body.indexOf('[', st); let d = 0, j = lb
  for (; j < body.length; j++) { if (body[j] === '[') d++; else if (body[j] === ']') { d--; if (!d) break } }
  return { lb, rb: j, inner: body.slice(lb + 1, j) }
}
function objs(inner) {
  const out = []; let d = 0, s = -1
  for (let k = 0; k < inner.length; k++) { if (inner[k] === '{') { if (!d) s = k; d++ } else if (inner[k] === '}') { d--; if (!d) out.push(inner.slice(s, k + 1)) } }
  return out
}
function pointInState(lon, lat, name) {
  let inside = false
  for (const poly of US_STATE_OUTLINES[name] || []) for (const ring of poly) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1]
      if (((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi)) inside = !inside
    }
  }
  return inside
}
const overlap = (a, b) => Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)) * Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top))

const only = process.argv.slice(2).filter(a => !a.startsWith('-'))
const FILES = globSync('src/app/war-civil-war/*/*/s/[[]section[]]/section-narrative.tsx')

for (const file of FILES.sort()) {
  const slug = file.match(/war-civil-war\/[^/]+\/([^/]+)\//)[1]
  if (only.length && !only.includes(slug)) continue
  let src = readFileSync(file, 'utf8')
  const loc = extractLocator(src); if (!loc) continue
  const body = loc.body
  const fm = body.match(/frame:\s*\{([^}]*)\}/)[1]
  const frame = { lonMin: num(fm, 'lonMin'), lonMax: num(fm, 'lonMax'), latMin: num(fm, 'latMin'), latMax: num(fm, 'latMax') }
  const vbWidth = num(body, 'vbWidth') ?? 680
  const midLat = (frame.latMin + frame.latMax) / 2, kx = Math.cos(midLat * Math.PI / 180), pad = 24
  const rawW = (frame.lonMax - frame.lonMin) * kx, W = vbWidth
  const scale = (W - 2 * pad) / rawW, H = Math.round((frame.latMax - frame.latMin) * scale + 2 * pad)
  const X = (lon) => pad + (lon - frame.lonMin) * kx * scale
  const Y = (lat) => pad + (frame.latMax - lat) * scale

  // obstacles: dot markers + dot labels (one-line, date inline same size)
  const obstacles = []
  const dotsArr = arrSpan(body, 'dots')
  const dots = []
  if (dotsArr) for (const o of objs(dotsArr.inner)) {
    const name = str(o, 'name'); if (name == null) continue
    const lat = num(o, 'lat'), lon = num(o, 'lon'); const x = X(lon), y = Y(lat)
    dots.push({ x, y })
    const anchor = str(o, 'anchor') ?? 'start', dx = num(o, 'dx'), dy = num(o, 'dy'), heavy = has(o, 'heavy'), date = str(o, 'date'), dateBelow = has(o, 'dateBelow')
    const tx = x + (anchor === 'end' ? -(dx ?? 11) : anchor === 'middle' ? (dx ?? 0) : (dx ?? 11))
    const ty = y + (dy ?? (date ? -2 : 5))
    const fs = heavy ? 17 : 14.5
    const push = (w, cy) => { const left = anchor === 'end' ? tx - w : anchor === 'middle' ? tx - w / 2 : tx; obstacles.push({ left: left - 3, right: left + w + 3, top: cy - 0.82 * fs - 3, bottom: cy + 0.25 * fs + 3 }) }
    if (date && dateBelow) { push(name.length * charW(fs), ty); push(date.length * charW(fs), ty + (heavy ? 20 : 18)) }
    else { let w = name.length * charW(fs); if (date) w += 9 + date.length * charW(fs); push(w, ty) }
    obstacles.push({ left: x - 10, right: x + 10, top: y - 10, bottom: y + 10 })
  }

  // place a label for each state with visible in-frame area
  const statesSpan = arrSpan(body, 'states')
  const stateObjs = objs(statesSpan.inner)
  const placed = []
  const lines = []
  for (const so of stateObjs) {
    const name = str(so, 'name'); if (!name) { continue }
    const isFocus = /tone:\s*'focus'/.test(so)
    const color = str(so, 'color')
    const label = str(so, 'label') ?? name.toUpperCase()
    const size = isFocus ? 19 : 13
    const ls = 1.8
    const w = label.length * (charW(size) + ls)
    // candidate grid inside the state + frame, clear of obstacles + placed state labels
    let best = null, bestScore = -1
    for (let fx = 0.1; fx <= 0.9; fx += 0.06) for (let fy = 0.1; fy <= 0.9; fy += 0.08) {
      const lon = frame.lonMin + (frame.lonMax - frame.lonMin) * fx
      const lat = frame.latMax - (frame.latMax - frame.latMin) * fy
      if (!pointInState(lon, lat, name)) continue
      const cx = X(lon), cy = Y(lat)
      const box = { left: cx - w / 2, right: cx + w / 2, top: cy - 0.82 * size, bottom: cy + 0.25 * size }
      if (box.left < 4 || box.right > W - 4 || box.top < 4 || box.bottom > H - 4) continue
      if ([...obstacles, ...placed].some(b => overlap(box, b) > 0)) continue
      // score: prefer interior (far from dots and from other labels)
      const dmin = dots.length ? Math.min(...dots.map(d => Math.hypot(d.x - cx, d.y - cy))) : 999
      const lmin = placed.length ? Math.min(...placed.map(b => Math.hypot((b.left + b.right) / 2 - cx, (b.top + b.bottom) / 2 - cy))) : 999
      const score = Math.min(dmin, lmin)
      if (score > bestScore) { bestScore = score; best = { lon, lat, box } }
    }
    // rebuild the state line
    const parts = [`name: '${esc(name)}'`]
    if (isFocus) parts.push(`tone: 'focus'`)
    if (color) parts.push(`color: '${color}'`)
    if (best) {
      parts.push(`label: '${esc(label)}'`, `labelLon: ${Math.round(best.lon * 10) / 10}`, `labelLat: ${Math.round(best.lat * 10) / 10}`)
      if (!isFocus) parts.push(`labelSize: ${size}`)
      placed.push(best.box)
    }
    lines.push(`          { ${parts.join(', ')} },`)
  }
  // group neighbours onto continuation lines is optional; keep one per line for clarity
  const newStates = 'states: [\n' + lines.join('\n') + '\n        ]'
  // splice the states array (replace from 'states:' to its closing ']')
  const sIdx = body.indexOf('states:')
  const newBody = body.slice(0, sIdx) + newStates + body.slice(statesSpan.rb + 1)
  src = src.slice(0, loc.start) + newBody + src.slice(loc.end)
  writeFileSync(file, src)
  const labeled = lines.filter(l => l.includes('label:')).length
  console.log(`OK ${slug}: labeled ${labeled}/${stateObjs.length} states`)
}
