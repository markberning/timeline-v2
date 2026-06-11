// Edge router for Stuff Happened v2 (the "off live until ready" arrangement,
// 2026-06-11). The app is served ONLY on dev.stuffhappened.com while v2 is
// being finished; the apex returns a bare placeholder (404, noindex) — no
// redirect anywhere, per the user. To take v2 live again: delete this file,
// remove `main` + `run_worker_first` + the ASSETS binding name from
// wrangler.jsonc, and redeploy — the worker reverts to plain static-asset
// serving on the apex.
const DEV_HOST = 'dev.stuffhappened.com'

const PLACEHOLDER = `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Stuff Happened</title>
<style>
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;
    background:#22201e;color:#a8a29e;font:16px/1.5 Georgia,serif}
  div{text-align:center;padding:2rem}
  h1{color:#e7e5e4;font-weight:normal;font-size:1.4rem;letter-spacing:.04em}
</style></head>
<body><div><h1>Stuff Happened</h1><p>Nothing here right now.</p></div></body></html>`

export default {
  async fetch(request, env) {
    const { hostname } = new URL(request.url)
    // dev + *.workers.dev previews get the real app
    if (hostname === DEV_HOST || hostname.endsWith('.workers.dev')) {
      return env.ASSETS.fetch(request)
    }
    return new Response(PLACEHOLDER, {
      status: 404,
      headers: { 'content-type': 'text/html; charset=utf-8' },
    })
  },
}
