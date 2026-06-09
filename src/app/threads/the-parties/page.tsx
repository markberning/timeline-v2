'use client'

// "The Parties" — the anchor chapter of the first cross-cutting THREAD. A thread is a
// story that runs across time and cuts through the war/civ verticals rather than belonging
// to one of them, so it gets its OWN light identity here (a neutral slate accent, a calm
// reading column) instead of the war skin. Prose is authored + gated in
// audits/threads-pipeline/parties-final.md and compiled to ./narrative.ts by
// scripts/_build-threads.mjs — never hand-edit the data; edit the .md and rebuild.

import { useState, type ReactNode } from 'react'
import { NARR } from './narrative'

const ACCENT = '#5b6b80' // neutral thread slate — distinct from war stone / Rev slate

// Inline markup inside a paragraph: **bold**, *italic*, and [text](/internal-href) links.
const INLINE_RE = /(\[([^\]]+)\]\((\/[^)]+)\))|(\*\*([^*]+)\*\*)|(\*([^*]+)\*)/
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = []
  let rest = text
  let k = 0
  while (rest) {
    const m = rest.match(INLINE_RE)
    if (!m || m.index === undefined) { out.push(rest); break }
    if (m.index > 0) out.push(rest.slice(0, m.index))
    if (m[1]) out.push(<a key={k++} href={m[3]} className="thr-link">{m[2]}</a>)
    else if (m[4]) out.push(<strong key={k++}>{m[5]}</strong>)
    else if (m[6]) out.push(<em key={k++}>{m[7]}</em>)
    rest = rest.slice(m.index + m[0].length)
  }
  return out
}

export default function ThePartiesThread() {
  const n = NARR
  const [dead, setDead] = useState<Record<number, boolean>>({})
  let firstPara = true

  return (
    <div className="thr-root" style={{ ['--thr-accent' as string]: ACCENT } as React.CSSProperties}>
      <header className="thr-topbar">
        <a href="/" className="thr-back">← Stuff Happened</a>
        <span className="thr-kicker">A Thread</span>
      </header>

      <div className="thr-mast">
        <div className="thr-eyebrow">{n.eyebrow}</div>
        <h1 className="thr-title">{n.title}</h1>
      </div>

      <article className="thr-body">
        {n.blocks.map((b, i) => {
          if ('h' in b) return (
            <div key={i} className="thr-h">
              {b.eyebrow && <div className="thr-h-ey">{b.eyebrow}</div>}
              <h2>{b.h}</h2>
            </div>
          )
          if ('fig' in b) {
            if (dead[i]) return null
            return (
              <figure key={i} className="thr-fig">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.fig} alt="" onError={() => setDead(d => ({ ...d, [i]: true }))} />
                <figcaption>{b.cap} <span className="thr-cr">· {b.credit}</span></figcaption>
              </figure>
            )
          }
          if ('pill' in b) return (
            <a key={i} href={b.pill} className="thr-pill">{b.plabel} <span aria-hidden>→</span></a>
          )
          if ('p' in b) {
            // paragraph (or pull-quote)
            const q = 'q' in b && b.q
            const drop = firstPara && !q
            if (!q) firstPara = false
            return (
              <p key={i} className={(q ? 'thr-quote' : 'thr-p') + (drop ? ' thr-drop' : '')}>
                {inline(b.p)}
              </p>
            )
          }
          return null
        })}
      </article>

      <footer className="thr-foot">
        <div className="thr-foot-line" />
        <p>Part of <strong>The Parties</strong>, a thread tracing how American politics changed over time. More chapters on the way.</p>
      </footer>

      <style>{`
        .thr-root { --bg:#ede5d3; --ink:#2b2722; --soft:#6b6357; --rule:#d8cdb6; --card:#f6f0e2;
          background:var(--bg); color:var(--ink); min-height:100vh;
          font-family: Lora, Georgia, 'Times New Roman', serif;
          padding: 0 20px 64px; }
        :global(html.dark) .thr-root { --bg:#22201e; --ink:#ece5d8; --soft:#a89f8f; --rule:#3a3631; --card:#2a2723; }
        .thr-topbar { max-width: 680px; margin: 0 auto; display:flex; align-items:center; justify-content:space-between;
          padding: 16px 0; font-family: ui-sans-serif, system-ui, sans-serif; }
        .thr-back { color: var(--soft); text-decoration:none; font-size: 14px; }
        .thr-back:hover { color: var(--thr-accent); }
        .thr-kicker { color: var(--thr-accent); font-size: 11px; letter-spacing: .14em; text-transform: uppercase; font-weight: 600; }
        .thr-mast { max-width: 680px; margin: 18px auto 8px; }
        .thr-eyebrow { font-family: ui-sans-serif, system-ui, sans-serif; color: var(--thr-accent);
          font-size: 12px; letter-spacing: .12em; text-transform: uppercase; font-weight: 600; margin-bottom: 12px; }
        .thr-title { font-size: 40px; line-height: 1.08; font-weight: 600; letter-spacing: -0.01em; margin: 0 0 8px; }
        .thr-body { max-width: 680px; margin: 0 auto; }
        .thr-p { font-size: 19px; line-height: 1.66; margin: 0 0 22px; }
        .thr-drop::first-letter { float: left; font-size: 58px; line-height: .82; font-weight: 600;
          padding: 6px 10px 0 0; color: var(--thr-accent); }
        .thr-quote { font-size: 20px; line-height: 1.5; font-style: italic; color: var(--ink);
          border-left: 3px solid var(--thr-accent); padding-left: 18px; margin: 4px 0 24px; }
        .thr-h { margin: 34px 0 16px; }
        .thr-h-ey { font-family: ui-sans-serif, system-ui, sans-serif; color: var(--thr-accent);
          font-size: 11.5px; letter-spacing: .12em; text-transform: uppercase; font-weight: 600; margin-bottom: 6px; }
        .thr-h h2 { font-size: 27px; line-height: 1.15; font-weight: 600; margin: 0; letter-spacing: -0.01em; }
        .thr-link { color: var(--thr-accent); text-decoration: underline; text-underline-offset: 2px;
          text-decoration-thickness: 1px; }
        .thr-fig { margin: 8px 0 26px; }
        .thr-fig img { width: 100%; height: auto; border-radius: 6px; display:block;
          background: var(--card); border: 1px solid var(--rule); }
        .thr-fig figcaption { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 13px;
          line-height: 1.5; color: var(--soft); margin-top: 8px; }
        .thr-cr { color: var(--thr-accent); }
        .thr-pill { display:inline-block; font-family: ui-sans-serif, system-ui, sans-serif; font-size: 14px;
          font-weight: 600; color: var(--thr-accent); text-decoration: none; border: 1px solid var(--thr-accent);
          border-radius: 999px; padding: 8px 16px; margin: 2px 0 26px; }
        .thr-pill:hover { background: var(--thr-accent); color: #fff; }
        .thr-foot { max-width: 680px; margin: 36px auto 0; }
        .thr-foot-line { height:1px; background: var(--rule); margin-bottom: 16px; }
        .thr-foot p { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 14px; color: var(--soft); line-height: 1.6; }
        @media (max-width: 520px) { .thr-title { font-size: 32px; } .thr-p { font-size: 18px; } }
      `}</style>
    </div>
  )
}
