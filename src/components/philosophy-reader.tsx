// Shared Philosophy reader — the single self-contained reader behind all the
// /philosophy era reads and thinker deep reads. Its own light identity (a quiet
// bronze-olive phi- skin, NOT the war stone skin, NOT the threads slate),
// dark-mode aware, mobile-first. The bespoke .phi-topbar back-link is replaced by
// the shared editorial WarHeader chrome (like the philosophy home + civ/war), so the
// reader matches the rest of the app; the reader BODY styling is unchanged. The prose
// lives in each route's ./narrative.ts (a faithful transport of the gated draft) —
// never edit content here; edit the gated .md through the pipeline and re-transport.

import type { ReactNode } from 'react'
import { WarHeader } from '@/components/mode/war-header'
import { WarBreadcrumb, type Crumb } from '@/components/mode/war-chrome'
import { PHI_ACCENT } from '@/components/philosophy/phi-chrome'
import '../app/war-civil-war/war-skin.css'

// Self-contained narrative shape (structurally identical to each narrative.ts's
// exported interfaces, so every era/thinker narrative is assignable to PhiNarr).
export interface PhiFig {
  fig: string // image URL
  cap: string // gated caption (display)
  alt: string // accessibility description
  portrait?: boolean // render at reduced width, never in a landscape band
}

export type PhiBlock = { p: string } | PhiFig

export interface PhiChapter {
  num: number
  title: string
  epigraph: { text: string; attribution: string }
  blocks: PhiBlock[]
}

export interface PhiNarr {
  title: string
  throughline: string
  hero: PhiFig
  hook: string[]
  brk: { beforeLabel: string; afterLabel: string; paragraphs: string[] }
  chapters: PhiChapter[]
}

// Inline markup inside a paragraph: **bold**, *italic*, and [text](/internal-href) links.
// Same parser as the threads reader; the philosophy prose uses *italics* and **bold**.
const INLINE_RE = /(\[([^\]]+)\]\((\/[^)]+)\))|(\*\*([^*]+)\*\*)|(\*([^*]+)\*)/
function inline(text: string): ReactNode[] {
  const out: ReactNode[] = []
  let rest = text
  let k = 0
  while (rest) {
    const m = rest.match(INLINE_RE)
    if (!m || m.index === undefined) { out.push(rest); break }
    if (m.index > 0) out.push(rest.slice(0, m.index))
    if (m[1]) out.push(<a key={k++} href={m[3]} className="phi-link">{m[2]}</a>)
    else if (m[4]) out.push(<strong key={k++}>{m[5]}</strong>)
    else if (m[6]) out.push(<em key={k++}>{m[7]}</em>)
    rest = rest.slice(m.index + m[0].length)
  }
  return out
}

function Fig({ f, hero }: { f: PhiFig; hero?: boolean }) {
  return (
    <figure className={'phi-fig' + (f.portrait ? ' phi-fig-portrait' : '') + (hero ? ' phi-fig-hero' : '')}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={f.fig} alt={f.alt} loading={hero ? 'eager' : 'lazy'} />
      <figcaption>{f.cap}</figcaption>
    </figure>
  )
}

export function PhilosophyReader({ narr, eyebrow, backHref, crumbs }: { narr: PhiNarr; eyebrow: string; backHref: string; crumbs?: Crumb[] }) {
  const n = narr
  return (
    <div className="phi-root" style={{ display: 'flex', flexDirection: 'column', height: '100dvh', overflow: 'hidden' }}>
      <div className="war-skin" style={{ flexShrink: 0, minHeight: 0, background: 'transparent' }}>
        <WarHeader active="philosophy" title="Philosophy" subtitle="Stuff Happened · Philosophy" backHref={backHref} />
      </div>
      {crumbs && <WarBreadcrumb crumbs={crumbs} accent={PHI_ACCENT} bare />}

      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden' }}>
      <div style={{ padding: '0 20px' }}>
        <a href="#phi-article" className="phi-skip">Skip to article</a>

        <main>
          <Fig f={n.hero} hero />

          <div className="phi-mast">
            <p className="phi-eyebrow">Philosophy &middot; {eyebrow}</p>
            <h1 className="phi-title">{n.title}</h1>
            <p className="phi-lede">{inline(n.throughline)}</p>
          </div>

          <article id="phi-article" className="phi-body">
            {n.hook.map((p, i) => (
              <p key={i} className={'phi-p' + (i === 0 ? ' phi-drop' : '')}>{inline(p)}</p>
            ))}

            <section className="phi-break" aria-label="Why this is a break">
              <h2 className="phi-break-h">The break</h2>
              <div className="phi-break-row">
                <span className="phi-break-tag">Before</span>
                <span className="phi-break-label">{inline(n.brk.beforeLabel)}</span>
              </div>
              <div className="phi-break-row">
                <span className="phi-break-tag phi-break-tag-after">After</span>
                <span className="phi-break-label">{inline(n.brk.afterLabel)}</span>
              </div>
              {n.brk.paragraphs.map((p, i) => (
                <p key={i} className="phi-p phi-break-p">{inline(p)}</p>
              ))}
            </section>

            {n.chapters.map((ch) => (
              <section key={ch.num} className="phi-ch">
                <p className="phi-ch-ey">Chapter {ch.num}</p>
                <h2 className="phi-ch-title">{ch.title}</h2>
                <blockquote className="phi-epi">
                  <p>{inline(ch.epigraph.text)}</p>
                  <footer className="phi-epi-att">{inline(ch.epigraph.attribution)}</footer>
                </blockquote>
                {ch.blocks.map((b, i) =>
                  'p' in b
                    ? <p key={i} className="phi-p">{inline(b.p)}</p>
                    : <Fig key={i} f={b} />
                )}
              </section>
            ))}
          </article>
        </main>

        <footer className="phi-foot">
          <div className="phi-foot-line" />
          <p>Part of <strong>Philosophy</strong>, the history of Western thought told era by era. More eras on the way.</p>
        </footer>
      </div>
      </div>

      <style>{`
        .phi-root { --bg:#ede5d3; --ink:#2b2722; --soft:#6b6357; --rule:#d8cdb6; --card:#f6f0e2;
          --phi-accent:#6b5d2e;
          background:var(--bg); color:var(--ink); min-height:100vh;
          font-family: Lora, Georgia, 'Times New Roman', serif;
          padding: 0 0 64px; }
        html.dark .phi-root { --bg:#22201e; --ink:#ece5d8; --soft:#a89f8f; --rule:#3a3631; --card:#2a2723;
          --phi-accent:#c4b176; }
        .phi-root a:focus-visible { outline: 2px solid var(--phi-accent); outline-offset: 2px; }
        .phi-skip { position:absolute; left:-9999px; top:0; background:var(--card); color:var(--ink);
          font-family: ui-sans-serif, system-ui, sans-serif; font-size:14px; padding:10px 16px;
          border:1px solid var(--phi-accent); border-radius:6px; z-index:50; }
        .phi-skip:focus { left:20px; top:12px; }
        .phi-mast { max-width: 680px; margin: 22px auto 14px; }
        .phi-eyebrow { font-family: ui-sans-serif, system-ui, sans-serif; color: var(--phi-accent);
          font-size: 12px; letter-spacing: .12em; text-transform: uppercase; font-weight: 600; margin: 0 0 12px; }
        .phi-title { font-size: 42px; line-height: 1.06; font-weight: 600; letter-spacing: -0.01em; margin: 0 0 14px; }
        .phi-lede { font-size: 20px; line-height: 1.55; font-style: italic; color: var(--soft); margin: 0 0 8px; }
        .phi-body { max-width: 680px; margin: 18px auto 0; }
        .phi-p { font-size: 19px; line-height: 1.66; margin: 0 0 22px; }
        .phi-drop::first-letter { float: left; font-size: 58px; line-height: .82; font-weight: 600;
          padding: 6px 10px 0 0; color: var(--phi-accent); }
        .phi-link { color: var(--phi-accent); text-decoration: underline; text-underline-offset: 2px;
          text-decoration-thickness: 1px; }
        .phi-break { background: var(--card); border: 1px solid var(--rule); border-radius: 10px;
          padding: 22px 22px 4px; margin: 10px 0 34px; }
        .phi-break-h { font-family: ui-sans-serif, system-ui, sans-serif; color: var(--phi-accent);
          font-size: 12px; letter-spacing: .14em; text-transform: uppercase; font-weight: 700; margin: 0 0 14px; }
        .phi-break-row { display:flex; align-items:baseline; gap: 12px; margin: 0 0 10px; }
        .phi-break-tag { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase; color: var(--soft); flex: 0 0 58px; }
        .phi-break-tag-after { color: var(--phi-accent); }
        .phi-break-label { font-size: 18px; font-style: italic; line-height: 1.4; }
        .phi-break-p { font-size: 17.5px; margin-top: 16px; }
        .phi-ch { margin-top: 44px; }
        .phi-ch-ey { font-family: ui-sans-serif, system-ui, sans-serif; color: var(--phi-accent);
          font-size: 11.5px; letter-spacing: .12em; text-transform: uppercase; font-weight: 600; margin: 0 0 6px; }
        .phi-ch-title { font-size: 28px; line-height: 1.15; font-weight: 600; margin: 0 0 16px; letter-spacing: -0.01em; }
        .phi-epi { font-size: 19px; line-height: 1.55; font-style: italic; margin: 0 0 26px;
          border-left: 3px solid var(--phi-accent); padding-left: 18px; }
        .phi-epi p { margin: 0 0 8px; }
        .phi-epi-att { font-family: ui-sans-serif, system-ui, sans-serif; font-style: normal;
          font-size: 13.5px; color: var(--soft); }
        .phi-fig { max-width: 680px; margin: 30px auto 32px; }
        .phi-fig img { width: 100%; height: auto; border-radius: 6px; display:block;
          background: var(--card); border: 1px solid var(--rule); }
        .phi-fig figcaption { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 13px;
          line-height: 1.5; color: var(--soft); margin-top: 10px; }
        .phi-fig-hero { margin: 4px auto 26px; max-width: 760px; }
        .phi-fig-portrait { max-width: 400px; margin-left: auto; margin-right: auto; }
        .phi-fig-portrait figcaption { text-align: left; }
        .phi-foot { max-width: 680px; margin: 40px auto 0; }
        .phi-foot-line { height:1px; background: var(--rule); margin-bottom: 16px; }
        .phi-foot p { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 14px; color: var(--soft); line-height: 1.6; }
        @media (max-width: 520px) { .phi-title { font-size: 33px; } .phi-p { font-size: 18px; }
          .phi-break { padding: 18px 16px 2px; } .phi-fig-portrait { max-width: 78%; } }
      `}</style>
    </div>
  )
}
