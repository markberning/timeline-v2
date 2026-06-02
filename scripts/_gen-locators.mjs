// Generate {locator} establishing-map blocks for battles from gathered data and
// insert each as the first block of its opening section. Reads /tmp/estab-data.json
// (array of {slug,focusState,neighbors,date,battle:{name,lat,lon},refs:[{name,lat,lon}]}).
// Frame auto-fit to the dots; labels auto-placed on each dot's open side (tuned later
// by eye via _render-locator.mjs). Idempotent: skips files that already have a locator.
// Run: node scripts/_gen-locators.mjs [--dry]
import { readFileSync, writeFileSync, globSync } from 'node:fs'
import { US_STATE_OUTLINES } from '../src/lib/us-state-outlines.ts'

// ray-cast point-in-polygon over a state's outline rings
function pointInState(lon, lat, stateName) {
  let inside = false
  for (const poly of US_STATE_OUTLINES[stateName] || []) for (const ring of poly) {
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
      const xi = ring[i][0], yi = ring[i][1], xj = ring[j][0], yj = ring[j][1]
      if (((yi > lat) !== (yj > lat)) && (lon < (xj - xi) * (lat - yi) / (yj - yi) + xi)) inside = !inside
    }
  }
  return inside
}

const DRY = process.argv.includes('--dry')
const data = JSON.parse(readFileSync('/tmp/estab-data.json', 'utf8'))
const round1 = (n) => Math.round(n * 10) / 10
const charW = (fs) => 0.6 * fs

function fileFor(slug) {
  const hits = globSync(`src/app/war-civil-war/*/${slug}/s/[[]section[]]/section-narrative.tsx`)
  return hits[0]
}

// great-circle-ish degree distance (lon scaled by cos lat)
function geoDist(a, b) {
  const k = Math.cos(((a.lat + b.lat) / 2) * Math.PI / 180)
  return Math.hypot(a.lat - b.lat, (a.lon - b.lon) * k)
}
// drop refs coincident with the battle or each other; then keep the nearest refs
// while the battle+kept bounding box stays tight (drops far-flung prose mentions
// like a cross-state comparison that would blow up the frame).
function trimRefs(battle, refs) {
  const bWord = battle.name.toLowerCase().split(/[\s(]/)[0] // first token of battle name
  const kept = []
  for (const r of refs) {
    if (geoDist(r, battle) < 0.08) continue              // same place as the battle
    const rl = r.name.toLowerCase()
    if (bWord.length > 3 && rl.includes(bWord)) continue  // ref is just the battle place again (e.g. "Nashville (Cumberland River)")
    if (/\b(valley|mountains?)\b|^gulf of|\bsound\b/i.test(r.name)) continue // regions/features aren't good point anchors
    if (kept.some(k => geoDist(r, k) < 0.08)) continue    // dup of a kept ref
    kept.push(r)
  }
  kept.sort((a, b) => geoDist(a, battle) - geoDist(b, battle))
  const out = []
  const lons = [battle.lon], lats = [battle.lat]
  for (const r of kept) {
    if (out.length >= 3) break                            // at most 3 orientation anchors
    const tl = [...lons, r.lon], ta = [...lats, r.lat]
    const lonSpan = Math.max(...tl) - Math.min(...tl), latSpan = Math.max(...ta) - Math.min(...ta)
    if (latSpan <= 1.4 && lonSpan <= 1.8) { out.push(r); lons.push(r.lon); lats.push(r.lat) }
  }
  if (!out.length && kept.length) out.push(kept[0]) // always show at least one anchor
  return out
}

function buildFrame(dots) {
  const lons = dots.map(d => d.lon), lats = dots.map(d => d.lat)
  let lonMin = Math.min(...lons), lonMax = Math.max(...lons), latMin = Math.min(...lats), latMax = Math.max(...lats)
  const spanLon = lonMax - lonMin, spanLat = latMax - latMin
  const padLon = Math.max(spanLon * 0.5, 0.6), padLat = Math.max(spanLat * 0.5, 0.5)
  lonMin -= padLon; lonMax += padLon; latMin -= padLat; latMax += padLat
  // enforce a minimum extent so a tight cluster isn't absurdly zoomed
  const minLon = 1.8, minLat = 1.2
  if (lonMax - lonMin < minLon) { const c = (lonMin + lonMax) / 2; lonMin = c - minLon / 2; lonMax = c + minLon / 2 }
  if (latMax - latMin < minLat) { const c = (latMin + latMax) / 2; latMin = c - minLat / 2; latMax = c + minLat / 2 }
  // keep a phone-friendly aspect: H/W in ~[0.62, 1.12]. H ≈ (632*rawH/rawW + 48)/680.
  const kx = Math.cos(((latMin + latMax) / 2) * Math.PI / 180)
  const fixAspect = () => {
    const rawW = (lonMax - lonMin) * kx, rawH = (latMax - latMin)
    const hw = (632 * rawH / rawW + 48) / 680
    if (hw > 1.12) { // too tall -> widen lon
      const targetRawW = 0.886 * rawH, targetLon = targetRawW / kx
      const c = (lonMin + lonMax) / 2; lonMin = c - targetLon / 2; lonMax = c + targetLon / 2
    } else if (hw < 0.62) { // too wide -> widen lat
      const targetRawH = 0.591 * rawW
      const c = (latMin + latMax) / 2; latMin = c - targetRawH / 2; latMax = c + targetRawH / 2
    }
  }
  fixAspect()
  return { lonMin: round1(lonMin), lonMax: round1(lonMax), latMin: round1(latMin), latMax: round1(latMax) }
}

function projector(frame) {
  const midLat = (frame.latMin + frame.latMax) / 2, kx = Math.cos(midLat * Math.PI / 180), pad = 24, W = 680
  const rawW = (frame.lonMax - frame.lonMin) * kx, rawH = frame.latMax - frame.latMin
  const scale = (W - 2 * pad) / rawW, H = Math.round(rawH * scale + 2 * pad)
  return { W, H, X: (lon) => pad + (lon - frame.lonMin) * kx * scale, Y: (lat) => pad + (frame.latMax - lat) * scale }
}

// label bounding boxes (name + optional date) for a candidate placement
function labelBoxes(x, y, placement, name, date, heavy) {
  const fs = heavy ? 17 : 14.5
  const tx = placement.anchor === 'end' ? x - 11 : placement.anchor === 'middle' ? x : x + 11
  const ty = y + (placement.dy ?? (date ? -2 : 5))
  const span = (w) => placement.anchor === 'end' ? [tx - w, tx] : placement.anchor === 'middle' ? [tx - w / 2, tx + w / 2] : [tx, tx + w]
  const box = (l, r, cy, f) => ({ left: l - 2, right: r + 2, top: cy - 0.82 * f - 1, bottom: cy + 0.25 * f + 1 })
  let w = name.length * charW(fs)
  if (date) w += 9 + date.length * charW(12.5) // date drawn inline on the same line
  const [nl, nr] = span(w)
  return [box(nl, nr, ty, fs)]
}
const overlapArea = (a, b) => Math.max(0, Math.min(a.right, b.right) - Math.max(a.left, b.left)) * Math.max(0, Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top))

// greedy collision-aware placement: for each dot try right/left/below/above
// (ordered by openness), pick the first with no overlap vs already-placed labels,
// dot markers, the state label, or the frame edge.
function greedyPlace(dots, P, stateBox) {
  const W = P.W, H = P.H
  const cx = dots.reduce((s, d) => s + P.X(d.lon), 0) / dots.length
  const cy = dots.reduce((s, d) => s + P.Y(d.lat), 0) / dots.length
  const placed = [...(stateBox || [])]
  // dot markers are obstacles so labels don't sit on another dot
  for (const d of dots) { const x = P.X(d.lon), y = P.Y(d.lat); placed.push({ left: x - 9, right: x + 9, top: y - 9, bottom: y + 9 }) }
  const out = []
  for (const d of dots) {
    const x = P.X(d.lon), y = P.Y(d.lat), vx = x - cx, vy = y - cy
    const cands = [
      { anchor: 'start', dy: undefined, score: vx },
      { anchor: 'end', dy: undefined, score: -vx },
      { anchor: 'middle', dy: (d.heavy ? 24 : 20), score: vy + 6 },   // slight bias to below
      { anchor: 'middle', dy: -(d.heavy ? 30 : 16), score: -vy },
    ].sort((a, b) => b.score - a.score)
    let chosen = cands[0], best = Infinity
    for (const c of cands) {
      const boxes = labelBoxes(x, y, c, d.name, d.date, d.heavy)
      let pen = boxes.some(bx => bx.left < 4 || bx.right > W - 4 || bx.top < 4 || bx.bottom > H - 4) ? 1e6 : 0
      for (const bx of boxes) for (const pb of placed) pen += overlapArea(bx, pb)
      if (pen === 0) { chosen = c; break }
      if (pen < best) { best = pen; chosen = c }
    }
    out.push(chosen)
    for (const bx of labelBoxes(x, y, chosen, d.name, d.date, d.heavy)) placed.push(bx)
  }
  return out
}

function fmtDot(name, lat, lon, opts) {
  const parts = [`name: '${name.replace(/'/g, "\\'")}'`]
  if (opts.date) parts.push(`date: '${opts.date}'`)
  parts.push(`lat: ${lat}`, `lon: ${lon}`)
  if (opts.heavy) parts.push('heavy: true')
  if (opts.color) parts.push(`color: '${opts.color}'`)
  if (opts.anchor && opts.anchor !== 'start') parts.push(`anchor: '${opts.anchor}'`)
  else if (opts.anchor === 'start') parts.push(`anchor: 'start'`)
  if (opts.dy != null) parts.push(`dy: ${opts.dy}`)
  return `          { ${parts.join(', ')} },`
}

function stateLabelPos(frame, P, dots, focusState) {
  // candidate grid across the frame, INSIDE the focus state (so the name sits on
  // land, never in the sea/gulf); pick the one farthest from the dots.
  const onLand = [], anywhere = []
  for (let fx = 0.16; fx <= 0.84; fx += 0.085) for (let fy = 0.12; fy <= 0.88; fy += 0.1) {
    const lon = frame.lonMin + (frame.lonMax - frame.lonMin) * fx
    const lat = frame.latMax - (frame.latMax - frame.latMin) * fy
    const c = { lon, lat }
    anywhere.push(c)
    if (pointInState(lon, lat, focusState)) onLand.push(c)
  }
  const pool = onLand.length ? onLand : anywhere
  let best = pool[0], bestD = -1
  for (const c of pool) {
    const cx = P.X(c.lon), cy = P.Y(c.lat)
    const d = Math.min(...dots.map(dt => Math.hypot(P.X(dt.lon) - cx, P.Y(dt.lat) - cy)))
    if (d > bestD) { bestD = d; best = c }
  }
  return { lon: round1(best.lon), lat: round1(best.lat) }
}

function buildBlock(b) {
  const refs = trimRefs(b.battle, b.refs)
  b = { ...b, refs }
  // battle = title + date; the renderer draws the date inline (same line) in the
  // theatre accent colour. Drop a leading article for the bare map label.
  const dots = [{ ...b.battle, name: b.battle.name.replace(/^the\s+/i, ''), heavy: true, date: b.date }, ...b.refs]
  const frame = buildFrame(dots)
  const P = projector(frame)
  const slPos = stateLabelPos(frame, P, dots, b.focusState)
  // state label box (middle-anchored, letter-spaced) as a placement obstacle
  const slFs = 19, slW = b.focusState.length * (charW(slFs) + 1.8), slx = P.X(slPos.lon), sly = P.Y(slPos.lat)
  const stateBox = [{ left: slx - slW / 2 - 2, right: slx + slW / 2 + 2, top: sly - 0.82 * slFs - 2, bottom: sly + 0.25 * slFs + 2 }]
  const placements = greedyPlace(dots, P, stateBox)
  const lines = []
  lines.push('      { locator: {')
  lines.push(`        eyebrow: 'Where and when',`)
  lines.push(`        frame: { lonMin: ${frame.lonMin}, lonMax: ${frame.lonMax}, latMin: ${frame.latMin}, latMax: ${frame.latMax} },`)
  const states = [`          { name: '${b.focusState}', tone: 'focus', label: '${b.focusState.toUpperCase()}', labelLon: ${slPos.lon}, labelLat: ${slPos.lat} },`]
  const neigh = (b.neighbors || []).map(n => `{ name: '${n}' }`).join(', ')
  if (neigh) states.push(`          ${neigh},`)
  lines.push('        states: [', ...states, '        ],')
  lines.push('        dots: [')
  dots.forEach((d, i) => {
    const p = placements[i]
    lines.push(fmtDot(d.name, d.lat, d.lon, { heavy: d.heavy, date: d.date, color: d.heavy ? undefined : '#8a8175', anchor: p.anchor, dy: p.dy }))
  })
  lines.push('        ],')
  lines.push('      } },')
  return lines.join('\n')
}

// remove an existing generated `{ locator: {...} },` block (balance-matched)
function removeLocator(src) {
  const i = src.indexOf('{ locator:')
  if (i < 0) return src
  let depth = 0, j = i
  for (; j < src.length; j++) { if (src[j] === '{') depth++; else if (src[j] === '}') { depth--; if (depth === 0) break } }
  let end = j + 1
  if (src[end] === ',') end++
  // also eat the leading whitespace/newline before the block
  let start = i
  while (start > 0 && (src[start - 1] === ' ' || src[start - 1] === '\n' || src[start - 1] === '\t')) start--
  return src.slice(0, start) + '\n' + src.slice(end)
}

const only = process.argv.slice(2).filter(a => !a.startsWith('--'))
let done = 0, skip = 0
for (const b of data) {
  if (only.length && !only.includes(b.slug)) continue
  const file = fileFor(b.slug)
  if (!file) { console.log(`MISS file for ${b.slug}`); continue }
  let src = readFileSync(file, 'utf8')
  src = removeLocator(src)
  const block = buildBlock(b)
  const idx = src.indexOf('blocks: [')
  if (idx < 0) { console.log(`MISS blocks[ in ${b.slug}`); continue }
  const insertAt = idx + 'blocks: ['.length
  const next = src.slice(insertAt)
  src = src.slice(0, insertAt) + '\n' + block + next
  if (DRY) console.log(`--- ${b.slug} ---\n${block}\n`)
  else { writeFileSync(file, src); console.log(`OK ${b.slug}`) }
  done++
}
console.log(`\n${DRY ? 'dry ' : ''}done: ${done}, skipped: ${skip}`)
