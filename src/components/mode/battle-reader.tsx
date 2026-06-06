'use client'

// Shared reader for a single narrative "section" — a chapter of a battle story,
// an Off-the-Battlefield theme, or a Military-Story chapter. Each page supplies
// its own section data (Record<id, Narr>); this renders the war-skin chrome
// (editorial header + dual-action breadcrumb) + optional hero + sticky reading
// header + article + Meanwhile card + next/end link. REDESIGN (feat/war-redesign):
// lives inside .war-skin; accent rides --accent. Content lives in the page files,
// not here — this component is pure presentation.

import '../../app/war-civil-war/war-skin.css'
import { useState } from 'react'
import { WarBreadcrumb, type Crumb, type CrumbOption } from '@/components/mode/war-chrome'
import { WarHeader } from '@/components/mode/war-header'
import { warCrumbs } from '@/components/mode/theatre-page'
import { warForRoute } from '@/lib/wars/registry'
import { CIVIL_WAR } from '@/lib/wars/civil-war'
import { Lightbox } from '@/components/lightbox'
import { DottedMap, type Frame, type StateSpec, type Dot, type FreeLabel } from '@/components/mode/dotted-map'

const MONTH_FULL: Record<string, string> = { Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June', Jul: 'July', Aug: 'August', Sep: 'September', Sept: 'September', Oct: 'October', Nov: 'November', Dec: 'December' }

export type Block =
  | { h: string; eyebrow?: string }
  | { p: string; i?: boolean; q?: boolean }
  | { fig: string; cap: string; credit: string }
  // a between-paragraph "go read that story" link, rendered as an accent pill
  | { pill: string; plabel: string }
  // the zoomed-out "establishing shot": a real-geography dotted locator map
  | { locator: { eyebrow?: string; caption?: string; frame: Frame; states: StateSpec[]; dots?: Dot[]; labels?: FreeLabel[]; vbWidth?: number } }

export interface Narr {
  eyebrow: string
  title: string
  blocks: Block[]
  meanwhile?: { region: string; title: string; body: string }
}

// Render inline markup in prose: [text](/href) links (accent-coloured, underlined —
// how the "How the War Was Fought" chapters reach down into the battle dossiers),
// **bold** spans, and *italic* spans (the house convention for titles/emphasis).
// Links are split out first; emphasis is resolved within the remaining text. Plain
// text passes through untouched.
function emph(text: string, base: number): React.ReactNode[] {
  if (!text.includes('*')) return [text]
  // double-star (bold) is tried before single-star (italic) at each position
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
  return parts.map((seg, j) => {
    if (seg.length > 4 && seg.startsWith('**') && seg.endsWith('**')) return <strong key={base + j} style={{ fontWeight: 700 }}>{seg.slice(2, -2)}</strong>
    if (seg.length > 2 && seg[0] === '*' && seg[seg.length - 1] === '*') return <em key={base + j}>{seg.slice(1, -1)}</em>
    return seg
  })
}
function fmt(text: string): React.ReactNode {
  if (!/[*[]/.test(text)) return text
  const linkRe = /\[([^\]]+)\]\((\/[^\s)]+)\)/g
  const out: React.ReactNode[] = []
  let last = 0, m: RegExpExecArray | null
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) out.push(...emph(text.slice(last, m.index), last))
    out.push(<a key={`l${m.index}`} className="lnk" href={m[2]}>{m[1]}</a>)
    last = m.index + m[0].length
  }
  if (last < text.length) out.push(...emph(text.slice(last), last))
  return out
}

export function BattleSectionReader({
  sections, id, slug, battleName, date, theatreId = 'east', battleId, theatreHref = '/war-civil-war/eastern', accent = '#7c3aed',
  endHref, endKicker, endLabel, heroImage, heroPalette = ['#3a2e21', '#2a221c', '#0a0806'], heroCredit, heroFocus = 'center 34%', heroScale = 1.06,
}: {
  sections: Record<string, Narr>; id: string; slug: string; battleName: string
  // precise battle date for the sticky header (e.g. "April 1, 1865"); falls back
  // to the roster's month + year when omitted, so no battle reads blank.
  date?: string
  theatreId?: string; battleId?: string; theatreHref?: string; accent?: string
  // override the final "End of …" link (e.g. a one-section theme returns to the
  // Off the Battlefield spine rather than self-linking to its own page)
  endHref?: string; endKicker?: string; endLabel?: string
  // optional full-bleed hero (themes use it; battle sections usually don't)
  heroImage?: string; heroPalette?: [string, string, string] | string[]; heroCredit?: string
  // per-image crop tuning: objectPosition + zoom for the hero band (tall portraits
  // like Lincoln's Cooper Union plate clip the head at the default)
  heroFocus?: string; heroScale?: number
}) {
  // Resolve the war from the route base carried on theatreHref (no hook → SSG-safe).
  const war = warForRoute(theatreHref) ?? CIVIL_WAR
  const ids = Object.keys(sections)
  const n = sections[id] ?? sections[ids[0]]
  const major = battleId ? war.battles.find(b => b.id === battleId) : undefined
  const dateLine = date ?? (major ? `${MONTH_FULL[major.mo] ?? major.mo} ${major.year}` : undefined)
  const [figFailed, setFigFailed] = useState<Record<number, boolean>>({})
  const [heroFailed, setHeroFailed] = useState(false)
  const [lb, setLb] = useState<{ src: string; cap: string } | null>(null)
  let firstP = true
  const idx = ids.indexOf(id)
  const nextId = idx >= 0 ? ids[idx + 1] : undefined
  const next = nextId ? sections[nextId] : null
  const battleHref = `${theatreHref}/${slug}`
  // sticky-header subtitle: the section title, unless it just repeats the battle
  // name (single-section theme/military-story pages) — then show the eyebrow.
  const subtitle = n.title && n.title !== battleName ? n.title : (n.eyebrow ?? '')
  // single-page chapters (the 5 Military-Story chapters) have no within-page
  // "next section"; link to the next chapter in the CHAPTERS sequence instead.
  const chapterIdx = battleId ? war.chapters.findIndex(c => c.id === battleId) : -1
  const nextChapter = !next && chapterIdx >= 0 && chapterIdx < war.chapters.length - 1 ? war.chapters[chapterIdx + 1] : null

  // Breadcrumb: ACW › Theatre › Battle › Chapter. On a section page the battle
  // crumb demotes to an ancestor (links to the battle overview, keeps its jump
  // dropdown via splitNav) and a "Chp N" pill becomes the leaf — a chapter
  // switcher across this battle's sections. Only when there's more than one.
  const safeId = sections[id] ? id : ids[0]
  const safeIdx = Math.max(0, ids.indexOf(safeId))
  const chLabel = (i: number, sid: string) => `Ch ${i + 1} · ${sections[sid].title}`
  const baseCrumbs = warCrumbs(war, { lane: theatreId, battleId })
  const crumbs: Crumb[] = ids.length > 1
    ? [
        ...baseCrumbs.slice(0, -1),
        { ...baseCrumbs[baseCrumbs.length - 1], href: battleHref, active: false },
        {
          label: `Chp ${safeIdx + 1}`,
          options: ids.map((sid, i) => ({ label: chLabel(i, sid), href: `${battleHref}/s/${sid}` })) as CrumbOption[],
          active: true,
          currentLabel: chLabel(safeIdx, safeId),
        },
      ]
    : baseCrumbs

  // header back-arrow: up to the battle overview (multi-section battles), else to
  // the parent spine (themes → Off the Battlefield, chapters → Military Story).
  const headerBack = ids.length > 1 ? battleHref : (endHref ?? theatreHref)

  // Carry the war's lane palette through the narratives: derive the accent from the
  // section's lane (theatre for the CW, phase for the F&I war) rather than the
  // per-page hex. skinVar is a light/dark-adaptive CSS var for the prose + breadcrumb;
  // mapHex is the concrete colour DottedMap's colour math needs. A lane with neither
  // (the story spine) keeps the passed accent (e.g. the Military stone).
  const lane = theatreId ? war.lanes.find(l => l.id === theatreId) : undefined
  const accentVar = lane?.skinVar ? `var(${lane.skinVar})` : (lane?.mapHex ?? accent) // CSS --accent + breadcrumb
  const accentHex = lane?.mapHex ?? accent // DottedMap (needs a concrete color)

  return (
    <div className="war-skin" style={{ ['--accent' as string]: accentVar } as React.CSSProperties}>
      <WarHeader backHref={headerBack} title={war.name} />

      {/* where-am-I trail — the dual-action breadcrumb (each crumb links, and
          tapping opens the theatre/battle/chapter jump dropdown) */}
      <WarBreadcrumb crumbs={crumbs} accent={accentVar} bare />

      {heroImage && (
        <>
          <div className="rd-hero">
            {heroFailed
              ? <div className="fb" style={{ background: `linear-gradient(135deg, ${heroPalette[0]}, ${heroPalette[1]} 55%, ${heroPalette[2]})` }} />
              // eslint-disable-next-line @next/next/no-img-element
              : <img src={heroImage} alt="" onError={() => setHeroFailed(true)} style={{ objectPosition: heroFocus, transform: `scale(${heroScale})`, transformOrigin: 'center' }} />}
            <div className="fade" />
            <div className="cap">
              <div className="ey">{n.eyebrow}</div>
              <h1>{n.title}</h1>
            </div>
          </div>
          {heroCredit && <div className="p-credit">{heroCredit}</div>}
        </>
      )}

      {/* sticky reading header */}
      <div className="rd-head">
        <div className="in">
          <div className="bar" />
          <div className="bd">
            <div className="nm">{battleName}</div>
            {(dateLine || subtitle) && (
              <div className="meta">
                {subtitle && <span className="sub">{subtitle}</span>}
                {dateLine && subtitle && <span className="dot">{'   ·   '}</span>}
                {dateLine && <span className="dt">{dateLine}</span>}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="rd-wrap">
        <article className="rd-art">
          {n.blocks.map((b, i) => {
            if ('h' in b) return (
              <div key={i} className="rd-h" style={i === 0 ? { marginTop: 0 } : undefined}>
                {b.eyebrow && <div className="ey">{b.eyebrow}</div>}
                <h2>{b.h}</h2>
              </div>
            )
            if ('locator' in b) return (
              <div key={i} className="rd-map">
                <DottedMap accent={accentHex} {...b.locator} />
              </div>
            )
            if ('pill' in b) return (
              <a key={i} className="rd-pill" href={b.pill}>
                <span className="ic" aria-hidden>→</span>
                <span className="tx">
                  <span className="k">Read the full story</span>
                  <span className="l">{b.plabel}</span>
                </span>
              </a>
            )
            if ('fig' in b) return (
              <figure key={i} className="rd-fig" data-no-zoom>
                <div
                  className={'frame' + (figFailed[i] ? ' dead' : '')}
                  onClick={figFailed[i] ? undefined : () => setLb({ src: b.fig, cap: b.cap })}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  {!figFailed[i] && <img src={b.fig} alt="" onError={() => setFigFailed(f => ({ ...f, [i]: true }))} style={{ width: '100%', height: 'auto' }} />}
                </div>
                <figcaption>{b.cap} <span className="cr">· {b.credit}</span></figcaption>
              </figure>
            )
            if (b.q) return <p key={i} className="q">{fmt(b.p)}</p>
            if (b.i) return <p key={i} className="it">{fmt(b.p)}</p>
            const drop = firstP
            firstP = false
            return (
              <p key={i}>
                {drop && <span className="drop">{b.p.charAt(0)}</span>}
                {fmt(drop ? b.p.slice(1) : b.p)}
              </p>
            )
          })}
        </article>

        {n.meanwhile && (
          <div className="rd-meanwhile">
            <div className="k">Meanwhile in {n.meanwhile.region}</div>
            <div className="t">{n.meanwhile.title}</div>
            <div className="b">{n.meanwhile.body}</div>
          </div>
        )}

        {next ? (
          <a className="rd-next" href={`${battleHref}/s/${nextId}`}>
            <div style={{ minWidth: 0 }}>
              <div className="k">Next section</div>
              <div className="t">{next.title}</div>
            </div>
            <span className="arr" aria-hidden>→</span>
          </a>
        ) : nextChapter?.href ? (
          <a className="rd-next" href={nextChapter.href}>
            <div style={{ minWidth: 0 }}>
              <div className="k">Next chapter</div>
              <div className="t">{nextChapter.short ?? nextChapter.name}</div>
            </div>
            <span className="arr" aria-hidden>→</span>
          </a>
        ) : (
          <a className="rd-next end" href={endHref ?? battleHref}>
            <div>
              <div className="k">{endKicker ?? `End of ${battleName}`}</div>
              <div className="t">{endLabel ?? 'Back to the battle'}</div>
            </div>
            <span className="arr" aria-hidden>↩</span>
          </a>
        )}
      </div>

      {/* zoomable lightbox — pinch / double-tap / pan (shared with the civ + art readers) */}
      {lb && <Lightbox src={lb.src} alt="" caption={lb.cap} onClose={() => setLb(null)} />}
    </div>
  )
}
