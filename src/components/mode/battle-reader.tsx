'use client'

// Shared reader for a single battle "section" (a chapter of a battle story).
// Every battle supplies its own section data (Record<id, Narr>); this renders the
// breadcrumb + sticky header + article + Meanwhile card + next-section link.
// Used by Gettysburg, Antietam, and every battle to come.

import { useState } from 'react'
import { WarBreadcrumb, alpha, CHROME_TOP, type Crumb, type CrumbOption } from '@/components/mode/war-chrome'
import { civilWarCrumbs } from '@/components/mode/theatre-page'
import { MAJORS, type Theatre } from '@/lib/civil-war-roster'

const MONTH_FULL: Record<string, string> = { Jan: 'January', Feb: 'February', Mar: 'March', Apr: 'April', May: 'May', Jun: 'June', Jul: 'July', Aug: 'August', Sep: 'September', Sept: 'September', Oct: 'October', Nov: 'November', Dec: 'December' }
import { Lightbox } from '@/components/lightbox'
import { DottedMap, type Frame, type StateSpec, type Dot, type FreeLabel } from '@/components/mode/dotted-map'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'

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

const proseStyle: React.CSSProperties = { fontFamily: SERIF, fontSize: 17, lineHeight: 1.62, letterSpacing: '-0.01em', margin: 0, color: 'var(--foreground)' }

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
function fmt(text: string, accent?: string): React.ReactNode {
  if (!/[*[]/.test(text)) return text
  const linkRe = /\[([^\]]+)\]\((\/[^\s)]+)\)/g
  const out: React.ReactNode[] = []
  let last = 0, m: RegExpExecArray | null
  while ((m = linkRe.exec(text)) !== null) {
    if (m.index > last) out.push(...emph(text.slice(last, m.index), last))
    out.push(
      <a key={`l${m.index}`} href={m[2]} style={{ color: accent ?? 'inherit', textDecoration: 'underline', textDecorationThickness: 1, textUnderlineOffset: 2, fontWeight: 500 }}>{m[1]}</a>,
    )
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
  theatreId?: Theatre | 'offfield' | 'howfought'; battleId?: string; theatreHref?: string; accent?: string
  // override the final "End of …" link (e.g. a one-section theme returns to the
  // Off the Battlefield spine rather than self-linking to its own page)
  endHref?: string; endKicker?: string; endLabel?: string
  // optional full-bleed hero (themes use it; battle sections usually don't)
  heroImage?: string; heroPalette?: [string, string, string] | string[]; heroCredit?: string
  // per-image crop tuning: objectPosition + zoom for the 240px hero band (tall
  // portraits like Lincoln's Cooper Union plate clip the head at the default)
  heroFocus?: string; heroScale?: number
}) {
  const ids = Object.keys(sections)
  const n = sections[id] ?? sections[ids[0]]
  const major = battleId ? MAJORS.find(b => b.id === battleId) : undefined
  const dateLine = date ?? (major ? `${MONTH_FULL[major.mo] ?? major.mo} ${major.year}` : undefined)
  const [figFailed, setFigFailed] = useState<Record<number, boolean>>({})
  const [heroFailed, setHeroFailed] = useState(false)
  const [lb, setLb] = useState<{ src: string; cap: string } | null>(null)
  let firstP = true
  const idx = ids.indexOf(id)
  const nextId = idx >= 0 ? ids[idx + 1] : undefined
  const next = nextId ? sections[nextId] : null
  const battleHref = `${theatreHref}/${slug}`

  // Breadcrumb: ACW › Theatre › Battle › Chapter. On a section page the battle
  // crumb demotes to an ancestor (links to the battle overview, keeps its jump
  // dropdown via splitNav) and a "Chp N" pill becomes the leaf — a chapter
  // switcher across this battle's sections. Only when there's more than one.
  const safeId = sections[id] ? id : ids[0]
  const safeIdx = Math.max(0, ids.indexOf(safeId))
  const chLabel = (i: number, sid: string) => `Ch ${i + 1} · ${sections[sid].title}`
  const baseCrumbs = civilWarCrumbs({ theatre: theatreId, battleId })
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

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarBreadcrumb accent={accent} crumbs={crumbs} />
      {heroImage && (
        <>
          <div style={{ position: 'relative', height: 240, overflow: 'hidden', background: heroPalette[2] }}>
            {heroFailed
              ? <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${heroPalette[0]}, ${heroPalette[1]} 55%, ${heroPalette[2]})` }} />
              : <img src={heroImage} alt="" onError={() => setHeroFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: heroFocus, transform: `scale(${heroScale})`, transformOrigin: 'center', filter: 'sepia(0.18) saturate(0.85) contrast(1.05)' }} />}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 28%, rgba(8,8,8,0.88) 100%)' }} />
            <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '16px 18px', color: '#fff' }}>
              <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.6, fontWeight: 700, color: `color-mix(in srgb, ${accent} 45%, white)`, textTransform: 'uppercase', textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}>{n.eyebrow}</div>
              <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontSize: 28, lineHeight: 1.06, letterSpacing: -0.5, fontWeight: 500, textShadow: '0 2px 12px rgba(0,0,0,0.55)' }}>{n.title}</h1>
            </div>
          </div>
          {heroCredit && <div style={{ padding: '7px 16px 0', fontFamily: SANS, fontSize: 10, letterSpacing: 0.2, color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{heroCredit}</div>}
        </>
      )}
      <div style={{ position: 'sticky', top: CHROME_TOP, zIndex: 7, background: 'color-mix(in srgb, var(--background) 92%, transparent)', backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)', borderBottom: '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px' }}>
          <button aria-label="Back" onClick={() => history.back()} style={{ width: 32, height: 32, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)', background: 'color-mix(in srgb, var(--foreground) 6%, transparent)', borderRadius: 999, color: 'var(--foreground)', cursor: 'pointer' }}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 9, flexWrap: 'wrap', minWidth: 0 }}>
              <span style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 600, lineHeight: 1.12, letterSpacing: '-0.3px', color: accent }}>{battleName}</span>
              {dateLine && <span style={{ fontFamily: SERIF, fontSize: 20, fontWeight: 500, lineHeight: 1.12, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>{dateLine}</span>}
            </div>
            <div style={{ fontFamily: SANS, fontSize: 17, lineHeight: 1.3, fontWeight: 500, color: 'color-mix(in srgb, var(--foreground) 82%, transparent)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: 3 }}>{n.title}</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 640, margin: '0 auto', padding: '0 18px 48px' }}>
        <article style={{ paddingTop: 18 }}>
          {n.blocks.map((b, i) => {
            if ('h' in b) return (
              <div key={i} style={{ marginTop: i === 0 ? 0 : 26, marginBottom: 10 }}>
                {b.eyebrow && <div style={{ fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', color: accent, marginBottom: 3 }}>{b.eyebrow}</div>}
                <h2 style={{ fontFamily: SERIF, fontWeight: 500, fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.3px', margin: 0 }}>{b.h}</h2>
              </div>
            )
            if ('locator' in b) return (
              <div key={i} style={{ margin: '18px 0 4px' }}>
                <DottedMap accent={accent} {...b.locator} />
              </div>
            )
            if ('pill' in b) return (
              // a "go read that story" link, between paragraphs, as an accent pill
              <a key={i} href={b.pill} style={{
                display: 'flex', alignItems: 'center', gap: 9, margin: '18px 0', padding: '10px 14px',
                borderRadius: 12, border: `1px solid ${alpha(accent, 0.4)}`, background: alpha(accent, 0.07),
                textDecoration: 'none', color: 'inherit',
              }}>
                <span aria-hidden style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: alpha(accent, 0.16), color: accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 13 }}>→</span>
                <span style={{ minWidth: 0, flex: 1 }}>
                  <span style={{ display: 'block', fontFamily: SANS, fontSize: 8.5, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>Read the full story</span>
                  <span style={{ display: 'block', fontFamily: SERIF, fontSize: 15.5, fontWeight: 500, color: accent, lineHeight: 1.2, marginTop: 1 }}>{b.plabel}</span>
                </span>
              </a>
            )
            if ('fig' in b) return (
              <figure key={i} style={{ margin: '20px 0' }} data-no-zoom>
                <div
                  onClick={figFailed[i] ? undefined : () => setLb({ src: b.fig, cap: b.cap })}
                  style={{ borderRadius: 6, overflow: 'hidden', background: 'color-mix(in srgb, var(--foreground) 5%, transparent)', border: '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)', cursor: figFailed[i] ? 'default' : 'zoom-in' }}>
                  {!figFailed[i] && <img src={b.fig} alt="" onError={() => setFigFailed(f => ({ ...f, [i]: true }))} style={{ display: 'block', width: '100%', height: 'auto' }} />}
                </div>
                <figcaption style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, lineHeight: 1.45, color: 'color-mix(in srgb, var(--foreground) 65%, transparent)', marginTop: 8 }}>
                  {b.cap} <span style={{ fontFamily: SANS, fontStyle: 'normal', fontSize: 10.5, color: 'color-mix(in srgb, var(--foreground) 42%, transparent)' }}>· {b.credit}</span>
                </figcaption>
              </figure>
            )
            if (b.q) return (
              <p key={i} style={{ ...proseStyle, margin: '16px 0', padding: '14px 16px 14px 18px', background: 'color-mix(in srgb, var(--foreground) 5%, transparent)', borderLeft: `3px solid ${accent}`, borderRadius: '0 6px 6px 0', fontStyle: 'italic', fontSize: 16, lineHeight: 1.55 }}>{fmt(b.p, accent)}</p>
            )
            if (b.i) return (
              <p key={i} style={{ ...proseStyle, marginTop: 14, fontStyle: 'italic', color: 'color-mix(in srgb, var(--foreground) 62%, transparent)' }}>{fmt(b.p, accent)}</p>
            )
            const drop = firstP
            firstP = false
            return (
              <p key={i} style={{ ...proseStyle, marginTop: 12 }}>
                {drop && <span style={{ float: 'left', fontFamily: SERIF, fontWeight: 500, fontSize: 50, lineHeight: 0.82, color: accent, paddingRight: 8, marginTop: 4 }}>{b.p.charAt(0)}</span>}
                {fmt(drop ? b.p.slice(1) : b.p, accent)}
              </p>
            )
          })}
        </article>

        {n.meanwhile && (
          <div style={{ marginTop: 28, border: '1px solid color-mix(in srgb, var(--foreground) 14%, transparent)', borderRadius: 12, padding: '14px 16px', background: 'color-mix(in srgb, var(--foreground) 4%, transparent)' }}>
            <div style={{ fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>Meanwhile in {n.meanwhile.region}</div>
            <div style={{ fontFamily: SERIF, fontSize: 16, fontStyle: 'italic', marginTop: 3 }}>{n.meanwhile.title}</div>
            <div style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.5, color: 'color-mix(in srgb, var(--foreground) 75%, transparent)', marginTop: 3 }}>{n.meanwhile.body}</div>
          </div>
        )}

        {next ? (
          <a href={`${battleHref}/s/${nextId}`} style={{ marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, border: `1px solid ${alpha(accent, 0.4)}`, borderRadius: 12, padding: '14px 16px', background: alpha(accent, 0.06), textDecoration: 'none', color: 'inherit' }}>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: accent }}>Next section</div>
              <div style={{ fontFamily: SERIF, fontSize: 17, lineHeight: 1.25, marginTop: 2 }}>{next.title}</div>
            </div>
            <span style={{ flexShrink: 0, fontFamily: SANS, fontSize: 20, fontWeight: 600, color: accent }} aria-hidden>→</span>
          </a>
        ) : (
          <a href={endHref ?? battleHref} style={{ marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, border: '1px solid color-mix(in srgb, var(--foreground) 16%, transparent)', borderRadius: 12, padding: '14px 16px', background: 'color-mix(in srgb, var(--foreground) 4%, transparent)', textDecoration: 'none', color: 'inherit' }}>
            <div>
              <div style={{ fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.2, textTransform: 'uppercase', color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}>{endKicker ?? `End of ${battleName}`}</div>
              <div style={{ fontFamily: SERIF, fontSize: 17, lineHeight: 1.2, marginTop: 2 }}>{endLabel ?? 'Back to the battle'}</div>
            </div>
            <span style={{ flexShrink: 0, fontFamily: SANS, fontSize: 20, fontWeight: 600, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }} aria-hidden>↩</span>
          </a>
        )}
      </div>
      {/* zoomable lightbox — pinch / double-tap / pan (shared with the civ + art readers); maps + photos are tap-to-zoom */}
      {lb && <Lightbox src={lb.src} alt="" caption={lb.cap} onClose={() => setLb(null)} />}
    </div>
  )
}
