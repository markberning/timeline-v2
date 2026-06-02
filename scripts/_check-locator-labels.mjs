// Geometry checker for the {locator} SVG establishing maps. Replicates DottedMap's
// lon/lat -> x/y projection and estimates label bounding boxes (monospace), then
// flags (a) overlapping labels and (b) labels running outside the viewBox.
// Read-only analysis. Run: node scripts/_check-locator-labels.mjs [slug]
import { readFileSync } from 'node:fs'
import { globSync } from 'node:fs'

const FILES = globSync('src/app/war-civil-war/*/*/s/[[]section[]]/section-narrative.tsx')

const num = (s, k) => { const m = s.match(new RegExp(`\\b${k}:\\s*(-?[\\d.]+)`)); return m ? parseFloat(m[1]) : undefined }
const str = (s, k) => { const m = s.match(new RegExp(`\\b${k}:\\s*'([^']*)'`)); return m ? m[1] : undefined }
const has = (s, k) => new RegExp(`\\b${k}:\\s*true`).test(s)

// crude balanced-ish extraction of a locator object's inner text
function extractLocators(src) {
  const out = []
  let i = 0
  while ((i = src.indexOf('locator:', i)) !== -1) {
    const open = src.indexOf('{', i)
    let depth = 0, j = open
    for (; j < src.length; j++) {
      if (src[j] === '{') depth++
      else if (src[j] === '}') { depth--; if (depth === 0) break }
    }
    out.push(src.slice(open, j + 1))
    i = j + 1
  }
  return out
}

function parseArrayObjects(body, key) {
  const start = body.indexOf(`${key}:`)
  if (start === -1) return []
  const lb = body.indexOf('[', start)
  let depth = 0, j = lb
  for (; j < body.length; j++) { if (body[j] === '[') depth++; else if (body[j] === ']') { depth--; if (depth === 0) break } }
  const arr = body.slice(lb + 1, j)
  // split into top-level { } objects
  const objs = []
  let d = 0, s = -1
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] === '{') { if (d === 0) s = k; d++ }
    else if (arr[k] === '}') { d--; if (d === 0) objs.push(arr.slice(s, k + 1)) }
  }
  return objs
}

function frameOf(body) {
  const m = body.match(/frame:\s*\{([^}]*)\}/)
  if (!m) return null
  const f = m[1]
  return { lonMin: num(f, 'lonMin'), lonMax: num(f, 'lonMax'), latMin: num(f, 'latMin'), latMax: num(f, 'latMax') }
}

// monospace char advance estimate
const charW = (fs, ls = 0) => 0.6 * fs + ls
function box(text, x, y, fs, anchor, ls = 0) {
  const w = text.length * charW(fs, ls)
  const left = anchor === 'end' ? x - w : anchor === 'middle' ? x - w / 2 : x
  return { left, right: left + w, top: y - 0.82 * fs, bottom: y + 0.25 * fs, text }
}
const overlaps = (a, b) => !(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top)

const onlySlug = process.argv.slice(2).find(a => !a.startsWith('-'))
for (const file of FILES.sort()) {
  const slug = file.match(/war-civil-war\/[^/]+\/([^/]+)\//)[1]
  if (onlySlug && slug !== onlySlug) continue
  const src = readFileSync(file, 'utf8')
  const locs = extractLocators(src)
  if (!locs.length) continue
  locs.forEach((body, li) => {
    const frame = frameOf(body)
    if (!frame) return
    const vbWidth = num(body, 'vbWidth') ?? 680
    const vbHeight = num(body, 'vbHeight')
    const geoInset = /geoInset/.test(body)
    const midLat = (frame.latMin + frame.latMax) / 2
    const kx = Math.cos(midLat * Math.PI / 180), pad = 24
    const rawW = (frame.lonMax - frame.lonMin) * kx, rawH = (frame.latMax - frame.latMin)
    const W = vbWidth
    let H, X, Y
    if (geoInset || vbHeight) {
      // best-effort: assume no gutters unless present; good enough for overlap math
      H = vbHeight ?? Math.round(rawH * ((W - 2 * pad) / rawW) + 2 * pad)
      const s = Math.min((W) / rawW, (H) / rawH)
      const ox = (W - rawW * s) / 2, oy = (H - rawH * s) / 2
      X = (lon) => ox + (lon - frame.lonMin) * kx * s
      Y = (lat) => oy + (frame.latMax - lat) * s
    } else {
      const scale = (W - 2 * pad) / rawW
      H = Math.round(rawH * scale + 2 * pad)
      X = (lon) => pad + (lon - frame.lonMin) * kx * scale
      Y = (lat) => pad + (frame.latMax - lat) * scale
    }

    const boxes = []
    // dots
    for (const o of parseArrayObjects(body, 'dots')) {
      const name = str(o, 'name'); if (name == null) continue
      const lat = num(o, 'lat'), lon = num(o, 'lon')
      const anchor = str(o, 'anchor') ?? 'start'
      const dx = num(o, 'dx'), dy = num(o, 'dy'), heavy = has(o, 'heavy'), date = str(o, 'date')
      const x = X(lon), y = Y(lat)
      const tx = x + (anchor === 'end' ? -(dx ?? 11) : (dx ?? 11))
      const ty = y + (dy ?? (date ? -2 : 5))
      const fs = heavy ? 17 : 14.5
      boxes.push(box(name, tx, ty, fs, anchor))
      if (date) boxes.push(box(date, tx, ty + 16, 12.5, anchor))
    }
    // state labels
    for (const o of parseArrayObjects(body, 'states')) {
      const label = str(o, 'label'); if (label == null) continue
      const llon = num(o, 'labelLon'), llat = num(o, 'labelLat')
      if (llon == null || llat == null) continue
      const fs = num(o, 'labelSize') ?? 19
      boxes.push(box(label, X(llon), Y(llat), fs, 'middle', 1.8))
    }
    // free labels
    for (const o of parseArrayObjects(body, 'labels')) {
      const text = str(o, 'text'); if (text == null) continue
      const fs = num(o, 'size') ?? 15
      boxes.push(box(text, X(num(o, 'lon')), Y(num(o, 'lat')), fs, str(o, 'anchor') ?? 'middle'))
    }

    const issues = []
    for (let a = 0; a < boxes.length; a++) {
      for (let b = a + 1; b < boxes.length; b++) {
        if (overlaps(boxes[a], boxes[b])) issues.push(`OVERLAP  "${boxes[a].text}" x "${boxes[b].text}"`)
      }
    }
    for (const bx of boxes) {
      if (bx.left < 2) issues.push(`OFF-LEFT  "${bx.text}" (left=${bx.left.toFixed(0)})`)
      if (bx.right > W - 2) issues.push(`OFF-RIGHT "${bx.text}" (right=${bx.right.toFixed(0)} > ${W})`)
      if (bx.top < 2) issues.push(`OFF-TOP   "${bx.text}" (top=${bx.top.toFixed(0)})`)
      if (bx.bottom > H - 2) issues.push(`OFF-BOT   "${bx.text}" (bottom=${bx.bottom.toFixed(0)} > ${H})`)
    }
    const tag = `${slug}${locs.length > 1 ? `#${li}` : ''}  [W${W} H${H} ${geoInset ? 'inset' : ''}]`
    if (issues.length) {
      console.log(`\n✗ ${tag}\n   ` + issues.join('\n   '))
      if (process.argv.includes('-v')) {
        for (const bx of boxes) console.log(`     · "${bx.text}"  L${bx.left.toFixed(0)} R${bx.right.toFixed(0)} T${bx.top.toFixed(0)} B${bx.bottom.toFixed(0)}`)
      }
    } else console.log(`✓ ${tag}  (${boxes.length} labels clean)`)
  })
}
