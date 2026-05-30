// One-off: serial, paced, 429-proof downloader for the 6 new war-theme image
// manifests (audits/war-pipeline/<slug>-images.md). Wikimedia throttles parallel
// fetches, so this runs STRICTLY serial with a delay + a real User-Agent, retries
// with backoff, and circuit-breaks on repeated 429s. Saves to public/war-img/.
import { readFileSync, writeFileSync, existsSync, statSync } from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)))
const SLUGS = ['prisons', 'guerrilla-war', 'war-within-north', 'assassination', 'reckoning']
const OUT = `${ROOT}/public/war-img`
const UA = 'StuffHappenedBot/1.0 (https://stuffhappened.com; civil-war history reader; contact admin@stuffhappened.com)'
const sleep = (ms) => new Promise(r => setTimeout(r, ms))

// parse (filename, url) pairs from a manifest. A filename line precedes one or more
// candidate URL lines (labels vary: **URL:**, **direct URL:**, **URL (... JPEG):**).
// Some entries list both a master .tif (a known stub for group photos) and a service
// .jpg — always prefer a .jpg/.png image URL over .tif. Flush on the next filename.
function pairs(md) {
  const out = []
  let f = null, cands = []
  const flush = () => {
    if (f && cands.length) {
      const pick = cands.find(u => /\.(jpg|jpeg|png)(\?|$)/i.test(u)) || cands[0]
      if (/\.(jpg|jpeg|png)(\?|$)/i.test(pick)) out.push({ file: f, url: pick })
    }
    cands = []
  }
  for (const line of md.split('\n')) {
    const fm = line.match(/\*\*filename:\*\*\s*`?([^`\s]+\.(?:jpg|jpeg|png))`?/i)
    if (fm) { flush(); f = fm[1]; continue }
    if (/\*\*[^*]*URL[^*]*:\*\*/i.test(line)) {
      const um = line.match(/(https?:\/\/\S+?)(?:`|\s|$)/)
      if (um && f) cands.push(um[1])
    }
  }
  flush()
  return out
}

function isValidImage(path) {
  if (!existsSync(path)) return false
  const sz = statSync(path).size
  if (sz < 8000) return false // stub/error pages
  const fd = readFileSync(path)
  const jpg = fd[0] === 0xff && fd[1] === 0xd8
  const png = fd[0] === 0x89 && fd[1] === 0x50 && fd[2] === 0x4e && fd[3] === 0x47
  return jpg || png
}

async function fetchTo(url, dest) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': 'image/*' }, redirect: 'follow' })
      if (res.status === 429 || res.status === 403) {
        const wait = 5000 * attempt
        console.log(`   ${res.status} throttled — backoff ${wait}ms (attempt ${attempt})`)
        await sleep(wait); continue
      }
      if (!res.ok) { console.log(`   HTTP ${res.status}`); return false }
      const buf = Buffer.from(await res.arrayBuffer())
      writeFileSync(dest, buf)
      return isValidImage(dest)
    } catch (e) {
      console.log(`   error: ${e.message} (attempt ${attempt})`)
      await sleep(3000 * attempt)
    }
  }
  return false
}

const all = []
for (const slug of SLUGS) {
  const md = readFileSync(`${ROOT}/audits/war-pipeline/${slug}-images.md`, 'utf8')
  for (const p of pairs(md)) all.push({ slug, ...p })
}
console.log(`Parsed ${all.length} images across ${SLUGS.length} manifests.\n`)

const ok = [], fail = []
for (let i = 0; i < all.length; i++) {
  const { file, url } = all[i]
  const dest = `${OUT}/${file}`
  if (isValidImage(dest)) { console.log(`[${i + 1}/${all.length}] ✓ exists ${file}`); ok.push(file); continue }
  process.stdout.write(`[${i + 1}/${all.length}] ${file} ... `)
  const good = await fetchTo(url, dest)
  if (good) { console.log('ok'); ok.push(file) }
  else { console.log('FAIL'); fail.push({ file, url }) }
  await sleep(1800) // pace every request
}

console.log(`\nDONE. ${ok.length} ok, ${fail.length} failed.`)
if (fail.length) { console.log('FAILED:'); for (const f of fail) console.log(`  ${f.file}  <-  ${f.url}`) }
writeFileSync(`${ROOT}/audits/war-pipeline/_dl-report.json`, JSON.stringify({ ok, fail }, null, 2))
