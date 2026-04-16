// Service worker for offline per-TL downloads.
// Hand-rolled, no Workbox. Two cache kinds:
//   - offline-shell-v1: runtime cache for navigator + shared _next chunks,
//     populated opportunistically by the fetch handler as the user browses.
//   - offline-tl-{tlId}-v1: per-TL cache, populated explicitly when the
//     user taps the cloud icon on a navigator row. Wiped on delete.
//
// Cache-first strategy on GETs. The caches.match() call below searches
// across all open caches, so a request for /maps/mesopotamia/chapter-5.webp
// hits the offline-tl-mesopotamia-v1 cache if present, else falls through
// to the shell cache, else goes to network.
//
// Per-TL downloads use no-cors mode for cross-origin thumbnail URLs to
// produce opaque responses, which can be served back to <img> elements
// without the page needing crossOrigin="anonymous".

const SHELL_CACHE = 'offline-shell-v2'
const TL_CACHE_PREFIX = 'offline-tl-'
const TL_CACHE_SUFFIX = '-v1'

// On localhost we let the SW install and handle download/delete
// messages (so the library sheet actually works in dev), but its fetch
// handler bails out immediately so Next.js HMR + dev-server chunks
// aren't intercepted.
const IS_DEV_HOST =
  self.location.hostname === 'localhost' ||
  self.location.hostname === '127.0.0.1'

function tlCacheName(tlId) {
  return `${TL_CACHE_PREFIX}${tlId}${TL_CACHE_SUFFIX}`
}

self.addEventListener('install', (event) => {
  // Skip waiting so a new SW activates immediately on next page load.
  self.skipWaiting()
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => {
      // Precache the navigator entry so the app is usable offline after
      // at least one online visit.
      return cache.addAll(['/']).catch(() => {
        // Root might 404 during install in some dev scenarios — don't fail.
      })
    }),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      await self.clients.claim()
      // Clean up any shell caches from previous versions.
      const keys = await caches.keys()
      await Promise.all(
        keys
          .filter((k) => k.startsWith('offline-shell-') && k !== SHELL_CACHE)
          .map((k) => caches.delete(k)),
      )
    })(),
  )
})

// Try caches.match against a request and its trailing-slash variant.
// Next.js static export uses trailingSlash: true, so manifest URLs are
// stored as `/ancient-china/` but navigator taps go to `/ancient-china`
// (no slash). Cloudflare resolves the form difference online via its
// static-asset serving; offline we have to try both variants ourselves.
async function matchWithSlashVariants(req) {
  const direct = await caches.match(req)
  if (direct) return direct
  try {
    const url = new URL(req.url)
    if (url.pathname === '/') return null
    const toggled = url.pathname.endsWith('/')
      ? url.pathname.slice(0, -1)
      : url.pathname + '/'
    url.pathname = toggled
    // Build a real Request so we match cache.put'd entries reliably —
    // string-based caches.match has produced false negatives in some
    // iOS Safari builds.
    const altReq = new Request(url.toString())
    const alt = await caches.match(altReq)
    if (alt) return alt
    // Third try: scan every cache explicitly for either variant.
    const keys = await caches.keys()
    for (const key of keys) {
      const cache = await caches.open(key)
      const hit =
        (await cache.match(req.url)) ||
        (await cache.match(url.toString()))
      if (hit) return hit
    }
  } catch {}
  return null
}

function offlineFallbackHtml() {
  return new Response(
    `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Offline</title><meta http-equiv="refresh" content="2;url=/"><style>html,body{margin:0;padding:0;background:#22201e;color:#e7e5e4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;height:100%;}body{display:flex;align-items:center;justify-content:center;padding:24px;box-sizing:border-box;}main{max-width:360px;text-align:center;}h1{font-size:18px;margin:0 0 10px;font-weight:700;}p{font-size:14px;line-height:1.5;opacity:0.75;margin:0 0 18px;}a{color:#fbbf24;text-decoration:none;font-weight:600;display:inline-block;padding:10px 16px;border:1px solid #fbbf24;border-radius:999px;font-size:13px;}</style></head><body><main><h1>You're offline</h1><p>This timeline isn't downloaded yet. Taking you back to the library…</p><a href="/">← Back to library</a></main></body></html>`,
    {
      status: 200,
      headers: { 'Content-Type': 'text/html; charset=utf-8' },
    },
  )
}

self.addEventListener('fetch', (event) => {
  // Dev: don't touch fetches at all. Downloads still work because
  // the download loop uses its own fetch() from inside the message
  // handler, which bypasses the fetch-event listener.
  if (IS_DEV_HOST) return
  const req = event.request
  if (req.method !== 'GET') return
  const url = new URL(req.url)
  // Skip chrome-extension, data, and other non-http schemes.
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return

  // Network-first for navigation requests (HTML pages). This keeps
  // deployments visible immediately when the user is online: the SW
  // fetches the fresh HTML and only falls back to cache on failure.
  // Cache-first for everything else — assets are hash-keyed or stable,
  // and users see newer HTML on the same visit that will pick up any
  // asset changes on reload.
  const isNavigation =
    req.mode === 'navigate' ||
    (req.destination === 'document' && req.method === 'GET')

  event.respondWith(
    (async () => {
      if (isNavigation) {
        try {
          const fresh = await fetch(req)
          if (fresh && fresh.status === 200 && url.origin === self.location.origin) {
            const clone = fresh.clone()
            caches.open(SHELL_CACHE).then((c) => c.put(req, clone)).catch(() => {})
          }
          return fresh
        } catch {
          const cached = await matchWithSlashVariants(req)
          if (cached) return cached
          // Nothing in cache for this URL — return an offline HTML page
          // that meta-redirects back to "/" after 2 seconds. The
          // redirect means the URL bar ends up on the navigator cleanly
          // instead of stranding the user on a broken TL URL.
          return offlineFallbackHtml()
        }
      }

      // Non-navigation: cache-first.
      const cached = await matchWithSlashVariants(req)
      if (cached) return cached
      try {
        const response = await fetch(req)
        if (
          response &&
          response.status === 200 &&
          url.origin === self.location.origin
        ) {
          const clone = response.clone()
          caches.open(SHELL_CACHE).then((c) => c.put(req, clone)).catch(() => {})
        }
        return response
      } catch {
        return new Response('Offline asset unavailable.', {
          status: 503,
          statusText: 'Offline',
          headers: { 'Content-Type': 'text/plain; charset=utf-8' },
        })
      }
    })(),
  )
})

async function broadcast(message) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true })
  for (const client of clients) client.postMessage(message)
}

async function downloadTl(tlId, manifest) {
  const cache = await caches.open(tlCacheName(tlId))
  const urls = manifest.urls || []
  const total = urls.length
  let done = 0
  let failed = 0
  for (const url of urls) {
    let isCrossOrigin = false
    try {
      isCrossOrigin =
        new URL(url, self.location.origin).origin !== self.location.origin
    } catch {
      isCrossOrigin = false
    }
    try {
      const req = new Request(url, {
        mode: isCrossOrigin ? 'no-cors' : 'same-origin',
        credentials: 'omit',
      })
      const res = await fetch(req)
      // For cross-origin no-cors responses we get an opaque response
      // (res.status === 0), which cache.put accepts fine.
      if (res && (res.ok || res.type === 'opaque')) {
        await cache.put(req, res.clone())
        // For same-origin same-path URLs, also cache under the toggled
        // trailing-slash variant so both `/mesopotamia` and
        // `/mesopotamia/` hit directly in caches.match regardless of
        // how the browser formed the navigation request.
        if (!isCrossOrigin && url !== '/') {
          try {
            const altUrl = url.endsWith('/') ? url.slice(0, -1) : url + '/'
            const altReq = new Request(altUrl, { credentials: 'omit' })
            await cache.put(altReq, res.clone())
          } catch {}
        }
      } else {
        failed++
      }
    } catch {
      failed++
    }
    done++
    // Broadcast on every item for the first 10 (so the UI moves off 0%
    // immediately), then every 5 items, then on the final item.
    if (done <= 10 || done % 5 === 0 || done === total) {
      broadcast({ type: 'download-progress', tlId, done, total, failed })
    }
  }
  broadcast({ type: 'download-complete', tlId, total, failed })
}

async function deleteTl(tlId) {
  await caches.delete(tlCacheName(tlId))
  broadcast({ type: 'delete-complete', tlId })
}

async function checkTl(tlId) {
  const keys = await caches.keys()
  const downloaded = keys.includes(tlCacheName(tlId))
  broadcast({ type: 'check-result', tlId, downloaded })
  return downloaded
}

async function listDownloadedTls() {
  const keys = await caches.keys()
  const downloaded = keys
    .filter((k) => k.startsWith(TL_CACHE_PREFIX) && k.endsWith(TL_CACHE_SUFFIX))
    .map((k) => k.slice(TL_CACHE_PREFIX.length, k.length - TL_CACHE_SUFFIX.length))
  broadcast({ type: 'downloaded-list', tlIds: downloaded })
  return downloaded
}

self.addEventListener('message', (event) => {
  const data = event.data
  if (!data || typeof data !== 'object' || !data.type) return
  if (data.type === 'download-tl' && data.tlId && data.manifest) {
    event.waitUntil(downloadTl(data.tlId, data.manifest))
  } else if (data.type === 'delete-tl' && data.tlId) {
    event.waitUntil(deleteTl(data.tlId))
  } else if (data.type === 'check-tl' && data.tlId) {
    event.waitUntil(checkTl(data.tlId))
  } else if (data.type === 'list-downloaded') {
    event.waitUntil(listDownloadedTls())
  } else if (data.type === 'skip-waiting') {
    self.skipWaiting()
  }
})
