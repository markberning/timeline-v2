// Philosophy vertical landing stub — minimal on purpose. One live era (The Greeks) plus quiet
// coming-soon rows for the other four. Same light bronze-olive identity as the era reader.
// Deliberately UNLINKED from any nav/home/search/registry: the pilot ships reachable by URL only.

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Philosophy · Stuff Happened',
  description: 'The history of Western philosophy, told era by era.',
}

const COMING_SOON = [
  'Faith meets reason',
  'The rationalists and the empiricists',
  'Kant and the Germans',
  'The nineteenth century',
]

export default function PhilosophyHome() {
  return (
    <div className="phi-root">
      <a href="#phi-main" className="phi-skip">Skip to content</a>

      <header className="phi-topbar">
        <Link href="/" className="phi-back">&larr; Stuff Happened</Link>
        <span className="phi-kicker">Philosophy</span>
      </header>

      <main id="phi-main" className="phi-wrap">
        <h1 className="phi-title">Philosophy</h1>
        <p className="phi-lede">The history of Western thought, told era by era.</p>

        <Link href="/philosophy/greeks" className="phi-card">
          <span className="phi-card-ey">Era I &middot; Read now</span>
          <span className="phi-card-title">The Greeks</span>
          <span className="phi-card-sub">Thales to the Hellenistic schools</span>
        </Link>

        <h2 className="phi-soon-h">Coming soon</h2>
        <ul className="phi-soon">
          {COMING_SOON.map((t) => (
            <li key={t} className="phi-soon-row">
              <span className="phi-soon-name">{t}</span>
              <span className="phi-soon-tag">Soon</span>
            </li>
          ))}
        </ul>
      </main>

      <style>{`
        .phi-root { --bg:#ede5d3; --ink:#2b2722; --soft:#6b6357; --rule:#d8cdb6; --card:#f6f0e2;
          --phi-accent:#6b5d2e;
          background:var(--bg); color:var(--ink); min-height:100vh;
          font-family: Lora, Georgia, 'Times New Roman', serif;
          padding: 0 20px 64px; }
        html.dark .phi-root { --bg:#22201e; --ink:#ece5d8; --soft:#a89f8f; --rule:#3a3631; --card:#2a2723;
          --phi-accent:#c4b176; }
        .phi-root a:focus-visible { outline: 2px solid var(--phi-accent); outline-offset: 2px; }
        .phi-skip { position:absolute; left:-9999px; top:0; background:var(--card); color:var(--ink);
          font-family: ui-sans-serif, system-ui, sans-serif; font-size:14px; padding:10px 16px;
          border:1px solid var(--phi-accent); border-radius:6px; z-index:50; }
        .phi-skip:focus { left:20px; top:12px; }
        .phi-topbar { max-width: 680px; margin: 0 auto; display:flex; align-items:center; justify-content:space-between;
          padding: 16px 0; font-family: ui-sans-serif, system-ui, sans-serif; }
        .phi-back { color: var(--soft); text-decoration:none; font-size: 14px; padding: 6px 0; }
        .phi-back:hover { color: var(--phi-accent); }
        .phi-kicker { color: var(--phi-accent); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; font-weight: 600; }
        .phi-wrap { max-width: 680px; margin: 26px auto 0; }
        .phi-title { font-size: 42px; line-height: 1.06; font-weight: 600; letter-spacing: -0.01em; margin: 0 0 12px; }
        .phi-lede { font-size: 19px; line-height: 1.55; font-style: italic; color: var(--soft); margin: 0 0 30px; }
        .phi-card { display:block; background: var(--card); border: 1px solid var(--rule); border-radius: 10px;
          padding: 20px 22px; text-decoration: none; color: var(--ink); margin: 0 0 38px; }
        .phi-card:hover { border-color: var(--phi-accent); }
        .phi-card-ey { display:block; font-family: ui-sans-serif, system-ui, sans-serif; color: var(--phi-accent);
          font-size: 11.5px; letter-spacing: .12em; text-transform: uppercase; font-weight: 700; margin-bottom: 8px; }
        .phi-card-title { display:block; font-size: 27px; font-weight: 600; line-height: 1.15; margin-bottom: 6px; }
        .phi-card-sub { display:block; font-family: ui-sans-serif, system-ui, sans-serif; font-size: 14.5px;
          color: var(--soft); line-height: 1.5; }
        .phi-soon-h { font-family: ui-sans-serif, system-ui, sans-serif; color: var(--soft);
          font-size: 12px; letter-spacing: .14em; text-transform: uppercase; font-weight: 600; margin: 0 0 10px; }
        .phi-soon { list-style: none; margin: 0; padding: 0; }
        .phi-soon-row { display:flex; align-items:center; justify-content:space-between; gap: 16px;
          border-top: 1px solid var(--rule); padding: 14px 2px; }
        .phi-soon-row:last-child { border-bottom: 1px solid var(--rule); }
        .phi-soon-name { font-size: 18px; color: var(--soft); }
        .phi-soon-tag { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 11px; font-weight: 600;
          letter-spacing: .1em; text-transform: uppercase; color: var(--soft);
          border: 1px solid var(--rule); border-radius: 999px; padding: 4px 10px; }
        @media (max-width: 520px) { .phi-title { font-size: 33px; } }
      `}</style>
    </div>
  )
}
