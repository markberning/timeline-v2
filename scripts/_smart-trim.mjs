// Smart border/mat autocrop for matted period prints. Two stages:
//  (1) lenient variance trim removes the uniform mat on all four sides (a caption line
//      in the bottom margin survives as the bottommost content);
//  (2) a caption-stripper walks up from the bottom: if the bottommost content is a SHORT
//      high-variance run (the caption text) sitting above a low-variance valley (the print
//      margin), it cuts at the painting's true bottom edge — removing the caption too.
// Per-row/col VARIANCE drives it (painting = high, uniform mat = ~0, sparse caption = low-ish).
// Writes <name>-crop.jpg previews (does NOT overwrite the original). Usage:
//   node scripts/_smart-trim.mjs file1.jpg file2.jpg ...
import sharp from 'sharp'

const files = process.argv.slice(2)
const DIR = 'public/war-img'

function stdAlong(data, W, H, axis) {
  const n = axis === 'row' ? H : W
  const m = axis === 'row' ? W : H
  const out = new Float64Array(n)
  for (let i = 0; i < n; i++) {
    let sum = 0, sumSq = 0
    for (let j = 0; j < m; j++) {
      const v = data[axis === 'row' ? i * W + j : j * W + i]
      sum += v; sumSq += v * v
    }
    const mean = sum / m
    out[i] = Math.sqrt(Math.max(0, sumSq / m - mean * mean))
  }
  return out
}

const threshold = (std, frac, absMin) => {
  let max = 0; for (const v of std) if (v > max) max = v
  return Math.max(absMin, frac * max)
}
// outermost rows/cols above threshold (removes uniform border)
function lenient(std, thr) {
  let lo = 0, hi = std.length - 1
  while (lo < std.length && std[lo] < thr) lo++
  while (hi > lo && std[hi] < thr) hi--
  return [lo, hi]
}
// if the bottommost content [.. bot] is a short caption run above a margin valley, return
// the painting's bottom edge instead; else return bot unchanged.
function dropCaption(std, top, bot, H, thr) {
  let i = bot
  while (i > top && std[i] >= thr) i--      // walk up through the caption text
  const capH = bot - i
  let j = i
  while (j > top && std[j] < thr) j--       // walk up through the margin valley
  const valley = i - j
  if (capH > 0 && capH < 0.09 * H && valley >= 3 && j > top + 2) return j
  return bot
}

for (const f of files) {
  const base = f.replace(/\.[a-z]+$/i, '')
  const src = `${DIR}/${f}`
  const { data, info } = await sharp(src).greyscale().raw().toBuffer({ resolveWithObject: true })
  const W = info.width, H = info.height
  const rowStd = stdAlong(data, W, H, 'row')
  const colStd = stdAlong(data, W, H, 'col')
  const rThr = threshold(rowStd, 0.12, 5), cThr = threshold(colStd, 0.12, 5)
  let [top, bot] = lenient(rowStd, rThr)
  let [left, right] = lenient(colStd, cThr)
  bot = dropCaption(rowStd, top, bot, H, rThr)        // strip a bottom caption line
  // 2px safety inset inward to kill any residual mat hairline
  top = Math.min(top + 2, H - 1); bot = Math.max(bot - 2, 0)
  left = Math.min(left + 2, W - 1); right = Math.max(right - 2, 0)
  const width = right - left + 1, height = bot - top + 1
  const pct = (a, b) => `${Math.round((1 - a / b) * 100)}%`
  await sharp(src).extract({ left, top, width, height }).toFile(`${DIR}/${base}-crop.jpg`)
  console.log(`${f}: ${W}x${H} -> ${width}x${height}  (L${left} T${top} R${W - 1 - right} B${H - 1 - bot}; ~${pct(width, W)} w / ${pct(height, H)} h)`)
}
