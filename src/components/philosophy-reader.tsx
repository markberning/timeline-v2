// Shared Philosophy reader — the single self-contained reader behind all the
// /philosophy era reads and thinker deep reads. Its own light identity (a quiet
// bronze-olive phi- skin, NOT the war stone skin, NOT the threads slate),
// dark-mode aware, mobile-first. The bespoke .phi-topbar back-link is replaced by
// the shared editorial WarHeader chrome (like the philosophy home + civ/war), so the
// reader matches the rest of the app; the reader BODY styling is unchanged. The prose
// lives in each route's ./narrative.ts (a faithful transport of the gated draft) —
// never edit content here; edit the gated .md through the pipeline and re-transport.

'use client'

import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { WarHeader } from '@/components/mode/war-header'
import { WarBreadcrumb, type Crumb } from '@/components/mode/war-chrome'
import { PHI_ACCENT } from '@/components/philosophy/phi-chrome'
import { schoolById, thinkerById } from '@/lib/philosophy-data'
import { ISM_LOOKUP, ISM_RE, ismByTerm, type IsmLookupEntry } from '@/app/philosophy/map/term-index'
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

// Resolve a glossary entry's cross-link to a route + label for the popup footer.
function readLinkFor(e: IsmLookupEntry): { href: string; label: string } | null {
  if (!e.link) return null
  if (e.link.kind === 'school') {
    const s = schoolById(e.link.id as never)
    return s ? { href: `/philosophy/school/${s.id}`, label: `Read the ${s.name} →` } : null
  }
  if (e.link.kind === 'thinker') {
    const t = thinkerById(e.link.id)
    return t ? { href: `/philosophy/thinker/${t.id}`, label: `Read ${t.name} →` } : null
  }
  return { href: `/philosophy/work/${e.link.id}`, label: 'Read it →' }
}

// The tap-to-define popup. Slides up over the read; backdrop or × closes it, so the
// reader never leaves the page and never needs a back button to return to their spot.
function IsmSheet({ entry, onClose }: { entry: IsmLookupEntry; onClose: () => void }) {
  useEffect(() => {
    const onKey = (ev: KeyboardEvent) => { if (ev.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev }
  }, [onClose])
  const lk = readLinkFor(entry)
  return (
    <div className="phi-sheet-backdrop" onClick={onClose}>
      <div className="phi-sheet" role="dialog" aria-modal="true" aria-label={entry.term} onClick={(e) => e.stopPropagation()}>
        <div className="phi-sheet-grip" aria-hidden />
        <button type="button" className="phi-sheet-x" onClick={onClose} aria-label="Close">×</button>
        <p className="phi-sheet-ey">From the map of ideas</p>
        <h2 className="phi-sheet-term">{entry.term}</h2>
        <div className="phi-sheet-field">
          <div className="phi-sheet-l phi-sheet-l-is">It is</div>
          <p className="phi-sheet-t">{entry.is}</p>
        </div>
        <div className="phi-sheet-field">
          <div className="phi-sheet-l">It is not</div>
          <p className="phi-sheet-t">{entry.isnt}</p>
        </div>
        <div className="phi-sheet-field">
          <div className="phi-sheet-l">For example</div>
          <p className="phi-sheet-t">{entry.example}</p>
        </div>
        {entry.related && (
          <div className="phi-sheet-field">
            <div className="phi-sheet-l">Sits next to</div>
            <p className="phi-sheet-t">{entry.related}</p>
          </div>
        )}
        <div className="phi-sheet-foot">
          {lk && <a className="phi-sheet-link" href={lk.href}>{lk.label}</a>}
          <a className="phi-sheet-link phi-sheet-link-map" href={`/philosophy/map#${entry.slug}`}>See it on the full map →</a>
        </div>
      </div>
    </div>
  )
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

// Which glossary terms to leave un-tapped in a given read: the read's own subject.
// A term whose name (or its stem, e.g. "stoic" for Stoicism) appears in the title or
// eyebrow is suppressed, so the Stoics read does not turn "Stoicism" into a popup forty
// times back to itself. Over-suppression is the safe direction.
function computeSuppress(title: string, eyebrow: string): Set<string> {
  const hay = `${title} ${eyebrow}`.toLowerCase()
  const s = new Set<string>()
  for (const key of ISM_LOOKUP.keys()) {
    if (hay.includes(key)) { s.add(key); continue }
    const stem = key.replace(/(ian)?ism$/, '')
    if (stem.length >= 4 && stem !== key && hay.includes(stem)) s.add(key)
  }
  return s
}

export function PhilosophyReader({ narr, eyebrow, backHref, crumbs }: { narr: PhiNarr; eyebrow: string; backHref: string; crumbs?: Crumb[] }) {
  const n = narr
  const [active, setActive] = useState<IsmLookupEntry | null>(null)
  const suppress = useMemo(() => computeSuppress(n.title, eyebrow), [n.title, eyebrow])

  // Term linking happens in document order during render. `seen` fills as the prose is
  // built top-to-bottom, so each term is tappable only at its FIRST appearance in the read.
  const seen = new Set<string>()

  // Wrap glossary terms found in a plain-text run as tap-to-define buttons.
  function linkTerms(text: string, kb: string): ReactNode[] {
    const out: ReactNode[] = []
    let last = 0
    let k = 0
    ISM_RE.lastIndex = 0
    let m: RegExpExecArray | null
    while ((m = ISM_RE.exec(text))) {
      const entry = ismByTerm(m[1])
      if (!entry) continue
      const key = entry.term.toLowerCase()
      if (suppress.has(key) || seen.has(key)) continue
      if (m.index > last) out.push(text.slice(last, m.index))
      seen.add(key)
      const e = entry
      out.push(
        <button key={`${kb}-t${k++}`} type="button" className="phi-ism" onClick={() => setActive(e)}>{m[0]}</button>,
      )
      last = m.index + m[0].length
    }
    if (last < text.length) out.push(text.slice(last))
    return out
  }

  // Prose renderer: markdown (**bold** / *italic* / [link](/href)) plus glossary terms
  // inside the plain runs. Used for body prose only — never quotes, ledes, or captions.
  function prose(text: string, kb: string): ReactNode[] {
    const out: ReactNode[] = []
    let rest = text
    let k = 0
    let seg = 0
    while (rest) {
      const m = rest.match(INLINE_RE)
      if (!m || m.index === undefined) { out.push(...linkTerms(rest, `${kb}-s${seg++}`)); break }
      if (m.index > 0) out.push(...linkTerms(rest.slice(0, m.index), `${kb}-s${seg++}`))
      if (m[1]) out.push(<a key={`${kb}-l${k++}`} href={m[3]} className="phi-link">{m[2]}</a>)
      else if (m[4]) out.push(<strong key={`${kb}-b${k++}`}>{m[5]}</strong>)
      else if (m[6]) out.push(<em key={`${kb}-i${k++}`}>{m[7]}</em>)
      rest = rest.slice(m.index + m[0].length)
    }
    return out
  }

  return (
    <div className="phi-root war-skin">
      <WarHeader active="philosophy" title="Western Philosophy" subtitle="Stuff Happened · Philosophy" backHref={backHref} />
      {crumbs && <WarBreadcrumb crumbs={crumbs} accent={PHI_ACCENT} bare />}

      <div style={{ padding: '0 20px' }}>
        <a href="#phi-article" className="phi-skip">Skip to article</a>

        <main>
          <Fig f={n.hero} hero />

          <div className="phi-mast">
            <p className="phi-eyebrow">Philosophy &middot; {eyebrow}</p>
            <h1 className="phi-title">{n.title}</h1>
            <p className="phi-lede">{inline(n.throughline)}</p>
          </div>

          {n.chapters.length > 1 && (
            <nav className="phi-toc" aria-label="Chapters in this read">
              <p className="phi-toc-h">Contents</p>
              <ol className="phi-toc-list">
                {n.chapters.map((ch) => (
                  <li key={ch.num}>
                    <a href={`#phi-ch-${ch.num}`}>
                      <span className="phi-toc-n">{ch.num}</span>
                      <span className="phi-toc-t">{ch.title}</span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <article id="phi-article" className="phi-body">
            {n.hook.map((p, i) => (
              <p key={i} className={'phi-p' + (i === 0 ? ' phi-drop' : '')}>{prose(p, `hook${i}`)}</p>
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
                <p key={i} className="phi-p phi-break-p">{prose(p, `brk${i}`)}</p>
              ))}
            </section>

            {n.chapters.map((ch) => (
              <section key={ch.num} id={`phi-ch-${ch.num}`} className="phi-ch">
                <p className="phi-ch-ey">Chapter {ch.num}</p>
                <h2 className="phi-ch-title">{ch.title}</h2>
                <blockquote className="phi-epi">
                  <p>{inline(ch.epigraph.text)}</p>
                  <footer className="phi-epi-att">{inline(ch.epigraph.attribution)}</footer>
                </blockquote>
                {ch.blocks.map((b, i) =>
                  'p' in b
                    ? <p key={i} className="phi-p">{prose(b.p, `ch${ch.num}-${i}`)}</p>
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

      {active && <IsmSheet entry={active} onClose={() => setActive(null)} />}

      <style>{`
        .phi-root { --bg:#f4efe4; --ink:#2b2722; --soft:#6b6357; --rule:#e0d7c4; --card:#fdfaf3;
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
        .phi-lede { font-size: 15.5px; line-height: 1.55; font-style: italic; color: var(--ink); margin: 0 0 8px; }
        .phi-body { max-width: 680px; margin: 18px auto 0; }
        .phi-toc { max-width: 680px; margin: 20px auto 6px; border: 1px solid var(--rule); border-radius: 10px; background: var(--card); padding: 14px 16px 8px; }
        .phi-toc-h { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 11px; letter-spacing: .14em; text-transform: uppercase; font-weight: 700; color: var(--phi-accent); margin: 0 0 11px; }
        .phi-toc-list { list-style: none; margin: 0; padding: 0; }
        .phi-toc-list li { margin: 0 0 9px; }
        .phi-toc-list a { display: flex; align-items: baseline; gap: 11px; text-decoration: none; color: var(--ink); }
        .phi-toc-n { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 12px; font-weight: 700; color: var(--phi-accent); flex: 0 0 16px; }
        .phi-toc-t { font-size: 16px; line-height: 1.35; }
        .phi-toc-list a:active .phi-toc-t, .phi-toc-list a:hover .phi-toc-t { text-decoration: underline; }
        .phi-p { font-size: 17px; line-height: 1.68; margin: 0 0 20px; }
        .phi-drop::first-letter { float: left; font-size: 58px; line-height: .82; font-weight: 600;
          padding: 6px 10px 0 0; color: var(--phi-accent); }
        .phi-link { color: var(--phi-accent); text-decoration: underline; text-underline-offset: 2px;
          text-decoration-thickness: 1px; }
        .phi-ism { font: inherit; color: inherit; background: none; border: 0; padding: 0; margin: 0;
          cursor: pointer; line-height: inherit;
          border-bottom: 1px dotted color-mix(in srgb, var(--phi-accent) 65%, transparent); }
        .phi-ism:hover, .phi-ism:active { border-bottom-color: var(--phi-accent);
          background: color-mix(in srgb, var(--phi-accent) 12%, transparent); }
        .phi-ism:focus-visible { outline: 2px solid var(--phi-accent); outline-offset: 2px; border-radius: 2px; }
        .phi-sheet-backdrop { position: fixed; inset: 0; z-index: 70; background: rgba(0,0,0,.42);
          display: flex; align-items: flex-end; justify-content: center;
          animation: phi-fade .16s ease-out; -webkit-tap-highlight-color: transparent; }
        .phi-sheet { width: 100%; max-width: 680px; background: var(--bg); color: var(--ink);
          border: 1px solid var(--rule); border-bottom: 0; border-radius: 18px 18px 0 0;
          max-height: 84vh; overflow-y: auto; padding: 6px 22px 30px; position: relative;
          box-shadow: 0 -14px 44px rgba(0,0,0,.28); animation: phi-rise .22s cubic-bezier(.2,.7,.3,1);
          -webkit-overflow-scrolling: touch; font-family: Lora, Georgia, serif; }
        .phi-sheet-grip { width: 40px; height: 4px; border-radius: 999px; background: var(--rule); margin: 9px auto 6px; }
        .phi-sheet-x { position: absolute; top: 12px; right: 14px; width: 32px; height: 32px; border-radius: 999px;
          border: 1px solid var(--rule); background: var(--card); color: var(--soft); font-size: 19px; line-height: 1;
          cursor: pointer; display: flex; align-items: center; justify-content: center; }
        .phi-sheet-ey { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 10.5px; letter-spacing: .14em;
          text-transform: uppercase; font-weight: 700; color: var(--phi-accent); margin: 6px 0 0; }
        .phi-sheet-term { font-size: 27px; line-height: 1.08; font-weight: 600; letter-spacing: -0.01em; margin: 4px 0 6px; }
        .phi-sheet-field { margin-top: 13px; }
        .phi-sheet-l { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 10px; letter-spacing: .12em;
          text-transform: uppercase; font-weight: 700; color: var(--soft); margin-bottom: 3px; }
        .phi-sheet-l-is { color: var(--phi-accent); }
        .phi-sheet-t { font-size: 15.5px; line-height: 1.55; margin: 0; color: var(--ink); }
        .phi-sheet-foot { display: flex; flex-direction: column; gap: 9px; margin-top: 20px;
          padding-top: 16px; border-top: 1px solid var(--rule); }
        .phi-sheet-link { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 13.5px; font-weight: 700;
          color: var(--phi-accent); text-decoration: none; }
        .phi-sheet-link-map { font-weight: 600; color: var(--soft); }
        @keyframes phi-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes phi-rise { from { transform: translateY(18px); opacity: .4 } to { transform: translateY(0); opacity: 1 } }
        .phi-break { background: var(--card); border: 1px solid var(--rule); border-radius: 10px;
          padding: 22px 22px 4px; margin: 10px 0 34px; }
        .phi-break-h { font-family: ui-sans-serif, system-ui, sans-serif; color: var(--phi-accent);
          font-size: 12px; letter-spacing: .14em; text-transform: uppercase; font-weight: 700; margin: 0 0 14px; }
        .phi-break-row { display:flex; align-items:baseline; gap: 12px; margin: 0 0 10px; }
        .phi-break-tag { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 11px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase; color: var(--soft); flex: 0 0 58px; }
        .phi-break-tag-after { color: var(--phi-accent); }
        .phi-break-label { font-size: 16px; font-style: italic; line-height: 1.4; }
        .phi-break-p { font-size: 15.5px; margin-top: 16px; }
        .phi-ch { margin-top: 44px; scroll-margin-top: calc(var(--hdr, 56px) + 58px); }
        .phi-ch-ey { font-family: ui-sans-serif, system-ui, sans-serif; color: var(--phi-accent);
          font-size: 11.5px; letter-spacing: .12em; text-transform: uppercase; font-weight: 600; margin: 0 0 6px; }
        .phi-ch-title { font-size: 24px; line-height: 1.18; font-weight: 600; margin: 0 0 16px; letter-spacing: -0.01em; }
        .phi-epi { font-size: 16.5px; line-height: 1.55; font-style: italic; margin: 0 0 26px;
          border-left: 3px solid var(--phi-accent); padding-left: 18px; }
        .phi-epi p { margin: 0 0 8px; }
        .phi-epi-att { font-family: ui-sans-serif, system-ui, sans-serif; font-style: normal;
          font-size: 13.5px; color: var(--soft); }
        .phi-fig { max-width: 680px; margin: 30px auto 32px; }
        .phi-fig img { width: 100%; height: auto; border-radius: 6px; display:block;
          background: var(--card); border: 1px solid var(--rule); }
        .phi-fig figcaption { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 12px;
          line-height: 1.5; color: var(--soft); margin-top: 10px; }
        .phi-fig-hero { margin: 4px auto 26px; max-width: 760px; }
        .phi-fig-portrait { max-width: 400px; margin-left: auto; margin-right: auto; }
        .phi-fig-portrait figcaption { text-align: left; }
        .phi-foot { max-width: 680px; margin: 40px auto 0; }
        .phi-foot-line { height:1px; background: var(--rule); margin-bottom: 16px; }
        .phi-foot p { font-family: ui-sans-serif, system-ui, sans-serif; font-size: 14px; color: var(--soft); line-height: 1.6; }
        @media (max-width: 520px) { .phi-title { font-size: 31px; } .phi-p { font-size: 16px; }
          .phi-ch-title { font-size: 22px; } .phi-break { padding: 18px 16px 2px; } .phi-fig-portrait { max-width: 78%; } }
      `}</style>
    </div>
  )
}
