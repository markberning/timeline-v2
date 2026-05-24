'use client'

// Redesigned Civ home — aligns with War/Art: a sticky toggle (Timeline /
// Chains / Globe), a live filter, and a body that flips between a vertical
// era-cord timeline and a by-region chains list. Phone-width column centered on
// desktop with a decorative side fill. The current ChronologyPage home is kept
// in reserve. Mockup reference: mockups/Historica-civ-redesign (not copied
// literally — fit to the app's own data + style).

import { useState } from 'react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { ModePill } from '@/components/civ-breadcrumb'
import { SORTED_CIVS, CHAINS_BY_REGION, CIV_CHAIN_MAP, formatYear, formatYearRange } from '@/lib/chronology-data'
import { NAVIGATOR_TLS, REGION_LABELS, REGION_COLORS, type NavigatorRegion } from '@/lib/navigator-tls'
import { ERA_BANDS, eraOfYear } from '@/lib/civ-eras'
import { getCivEmblemPath } from '@/lib/civ-icons'
import { ICON_LABELS } from '@/lib/civ-icon-labels'
import { CIV_BLURBS } from '@/lib/civ-blurbs'
import { CHAIN_BLURBS } from '@/lib/chain-blurbs'
import { SearchOverlay } from '@/components/chronology/search-overlay'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'

const INK = 'var(--foreground)'
const MUTED = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 38%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 11%, transparent)'
const BORDER_STRONG = 'color-mix(in srgb, var(--foreground) 20%, transparent)'
const CHIP = 'color-mix(in srgb, var(--foreground) 6%, transparent)'
const BAR_BG = 'color-mix(in srgb, var(--background) 92%, transparent)'

function alpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  return `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${a})`
}

// Neutral accent for the home bar's mode ✓ and the active view pill (the home
// has no region colour to key off).
const STONE = '#8a7a66'
function viewPill(active: boolean): React.CSSProperties {
  return {
    appearance: 'none', cursor: 'pointer', padding: '3px 10px', borderRadius: 999,
    fontFamily: SANS, fontSize: 11.5, lineHeight: 1.4, fontWeight: active ? 700 : 500,
    // the chosen view lights up as a solid stone pill; the rest stay muted
    color: active ? '#fff' : MUTED, background: active ? STONE : CHIP,
    border: `1px solid ${active ? STONE : BORDER}`,
  }
}

type View = 'timeline' | 'chains'

// ── filter matching ──
function civMatches(civId: string, q: string): boolean {
  if (!q) return true
  const civ = NAVIGATOR_TLS.find(t => t.id === civId)
  if (!civ) return false
  const chain = CIV_CHAIN_MAP.get(civId)?.chain
  const era = eraOfYear(civ.startYear)
  const hay = [civ.label, civ.subtitle, REGION_LABELS[civ.region], era.label, chain?.label, chain?.shortLabel]
  return hay.some(s => s && s.toLowerCase().includes(q))
}

function eraRangeLabel(start: number, end: number): string {
  if (start <= -100000) return `before ${formatYear(end)}`
  if (end >= 3000) return `${formatYear(start)} – today`
  return `${formatYear(start)} – ${formatYear(end)}`
}

const CARD_INSET = 70 // marginLeft to align an era header with the cards

// Era-band header: a serif divider — italic Lora era name + a small date line.
function eraHeader(era: { label: string; start: number; end: number }) {
  return (
    <div style={{ marginLeft: CARD_INSET, padding: '20px 0 8px' }}>
      <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontWeight: 400, fontSize: 22, color: INK, lineHeight: 1.1 }}>{era.label}</div>
      <div style={{ fontFamily: SANS, fontSize: 10.5, letterSpacing: 0.3, color: MUTED, marginTop: 3 }}>{eraRangeLabel(era.start, era.end)}</div>
    </div>
  )
}


function civCardInner(civ: (typeof NAVIGATOR_TLS)[number], ci: ReturnType<typeof CIV_CHAIN_MAP.get>, color: string, withImage: boolean, onFilterChain?: (q: string, color: string) => void) {
  const range = formatYearRange(civ.startYear, civ.endYear)
  const desc = CIV_BLURBS[civ.id] ?? civ.subtitle
  const chainPillStyle: React.CSSProperties = { flexShrink: 0, fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase', color, background: alpha(color, 0.16), padding: '2px 7px', borderRadius: 999, whiteSpace: 'nowrap' }
  // The chain badge doubles as a filter: tapping it narrows the list to that
  // chain (and stops the tap from also opening the civ behind it).
  const chainPill = ci && (onFilterChain ? (
    <span role="button" tabIndex={0}
      onClick={(e) => { e.preventDefault(); e.stopPropagation(); onFilterChain(ci.chain.label, color) }}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onFilterChain(ci.chain.label, color) } }}
      title={`Filter to ${ci.chain.label}`}
      style={{ ...chainPillStyle, cursor: 'pointer' }}>{ci.chain.shortLabel} {ci.index + 1}/{ci.total}</span>
  ) : (
    <span style={chainPillStyle}>{ci.chain.shortLabel} {ci.index + 1}/{ci.total}</span>
  ))
  const titleRow = (
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
      <span style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase', color: INK, lineHeight: 1.2, minWidth: 0 }}>{civ.label}</span>
      {chainPill}
    </div>
  )
  const descEl = desc ? <div style={{ fontFamily: SANS, fontSize: 13, lineHeight: 1.45, color: MUTED, marginTop: 4 }}>{desc}</div> : null
  const content = (
    <>
      {titleRow}
      <div style={{ fontFamily: SANS, fontSize: 10.5, letterSpacing: 0.4, textTransform: 'uppercase', color: MUTED, marginTop: 3 }}>{range}</div>
      {descEl}
    </>
  )
  // Representative ICON graphic (the existing /icons set) on a region-tinted
  // panel, left; text right. Replaces the photo approach.
  const icon = getCivEmblemPath(civ.id)
  const iconLabel = ICON_LABELS[civ.id]
  // New card: a smaller emblem hugging the top-left of the region-tinted panel,
  // with a concise caption naming what it depicts below it.
  if (withImage && icon && iconLabel) {
    return (
      <div style={{ display: 'flex', background: CHIP, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ width: 88, flexShrink: 0, alignSelf: 'stretch', minHeight: 74, background: alpha(color, 0.1), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '10px 8px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt="" loading="lazy" style={{ width: 54, height: 54, objectFit: 'contain' }} className="dark:brightness-150" />
          <span style={{ fontFamily: SANS, fontSize: 8.5, fontWeight: 700, letterSpacing: 0.3, textTransform: 'uppercase', color, lineHeight: 1.2, textAlign: 'center' }}>{iconLabel}</span>
        </div>
        <div style={{ flex: 1, minWidth: 0, padding: '10px 12px' }}>{content}</div>
      </div>
    )
  }
  if (withImage && icon) {
    return (
      <div style={{ display: 'flex', background: CHIP, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ width: 92, flexShrink: 0, alignSelf: 'stretch', minHeight: 74, background: alpha(color, 0.1), display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt="" loading="lazy" style={{ maxWidth: '100%', maxHeight: 60, objectFit: 'contain' }} className="dark:brightness-150" />
        </div>
        <div style={{ flex: 1, minWidth: 0, padding: '10px 12px' }}>{content}</div>
      </div>
    )
  }
  return (
    <div style={{ background: CHIP, border: `1px solid ${BORDER}`, borderRadius: 8, padding: '10px 12px' }}>
      {content}
    </div>
  )
}

// ───────────────────────────────────────────── Timeline view
function TimelineView({ query, onFilterChain }: { query: string; onFilterChain: (q: string, color: string) => void }) {
  const RAIL = 58 // px from column left to the cord centre
  const eras = ERA_BANDS.map(era => ({
    era,
    civs: SORTED_CIVS.filter(c => eraOfYear(c.startYear).id === era.id && civMatches(c.id, query)),
  })).filter(g => g.civs.length > 0)

  if (eras.length === 0) return <NoResults query={query} kind="civilizations" />

  return (
    <div style={{ position: 'relative', padding: '6px 16px 8px' }}>
      <div style={{ position: 'absolute', left: RAIL, top: 0, bottom: 28, width: 1, background: BORDER_STRONG }} />
      {eras.map(({ era, civs }) => (
        <div key={era.id}>
          {/* era band */}
          {eraHeader(era)}
          {civs.map(civ => {
            const ci = CIV_CHAIN_MAP.get(civ.id)
            const color = REGION_COLORS[civ.region]
            return (
              <div key={civ.id} style={{ display: 'grid', gridTemplateColumns: `46px 24px 1fr`, alignItems: 'stretch' }}>
                <div style={{ textAlign: 'right', paddingRight: 8, paddingTop: 9 }}>
                  <div style={{ fontFamily: MONO_OR_SANS, fontSize: 11, fontWeight: 700, color, lineHeight: 1.1 }}>{formatYear(civ.startYear)}</div>
                </div>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '50%', top: 15, transform: 'translate(-50%,-50%)', width: 10, height: 10, borderRadius: 999, background: color, boxShadow: `0 0 0 3px ${alpha(color, 0.18)}` }} />
                </div>
                <a href={civ.hasContent ? `/civ/${civ.id}` : undefined} style={{ display: 'block', textDecoration: 'none', color: 'inherit', paddingBottom: 12 }}>
                  {civCardInner(civ, ci, color, true, onFilterChain)}
                </a>
              </div>
            )
          })}
        </div>
      ))}
      <div style={{ marginLeft: RAIL + 14, paddingTop: 8, fontFamily: SANS, fontSize: 10.5, color: FAINT }}>Today — still figuring it out.</div>
    </div>
  )
}

const MONO_OR_SANS = 'var(--font-geist-mono, var(--font-geist-sans))'

// ───────────────────────────────────────────── Chains view
function ChainsView({ query }: { query: string }) {
  const groups = CHAINS_BY_REGION.map(g => {
    const chains = g.chains.filter(chain => {
      if (!query) return true
      const regionMatch = REGION_LABELS[g.region].toLowerCase().includes(query)
      const nameMatch = chain.label.toLowerCase().includes(query) || chain.shortLabel.toLowerCase().includes(query)
      const civMatch = chain.entries.some(e => civMatches(e.timelineId, query))
      return regionMatch || nameMatch || civMatch
    })
    return { region: g.region, chains }
  }).filter(g => g.chains.length > 0)

  if (groups.length === 0) return <NoResults query={query} kind="chains" />

  return (
    <div style={{ padding: '4px 16px 24px' }}>
      {groups.map(({ region, chains }) => {
        const color = REGION_COLORS[region]
        return (
          <div key={region} style={{ marginTop: 10 }}>
            <div style={{ padding: '8px 4px', fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: 1.4, textTransform: 'uppercase', color }}>{REGION_LABELS[region]}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {chains.map(chain => {
                const civs = chain.entries.map(e => NAVIGATOR_TLS.find(t => t.id === e.timelineId)).filter(Boolean) as typeof NAVIGATOR_TLS
                return (
                  <div key={chain.id} style={{ background: CHIP, border: `1px solid ${alpha(color, 0.4)}`, borderRadius: 8, padding: 12 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                      <span style={{ fontFamily: SERIF, fontSize: 16, color: INK, minWidth: 0 }}>{chain.label}</span>
                      <span style={{ flexShrink: 0, fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase', color }}>{civs.length} civ{civs.length === 1 ? '' : 's'}</span>
                    </div>
                    {CHAIN_BLURBS[chain.id] && (
                      <div style={{ fontFamily: SANS, fontSize: 12.5, lineHeight: 1.4, color: MUTED, marginTop: 4 }}>{CHAIN_BLURBS[chain.id]}</div>
                    )}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginTop: 10 }}>
                      {civs.map((tl, i) => {
                        const match = !query || civMatches(tl.id, query)
                        const emblem = getCivEmblemPath(tl.id)
                        const pill = (
                          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0, fontFamily: SANS, fontSize: 11.5, fontWeight: 600, color, background: alpha(color, match ? 0.14 : 0.06), opacity: match ? 1 : 0.4, padding: emblem ? '4px 11px 4px 5px' : '4px 11px', borderRadius: 999, whiteSpace: 'nowrap' }}>
                            {emblem && (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={emblem} alt="" loading="lazy" style={{ width: 18, height: 18, objectFit: 'contain', flexShrink: 0 }} className="dark:brightness-150" />
                            )}
                            {tl.label}
                          </span>
                        )
                        return (
                          <span key={tl.id} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                            {i > 0 && <span aria-hidden style={{ flexShrink: 0, color: alpha(color, 0.55), fontFamily: SANS, fontSize: 11, lineHeight: 1 }}>→</span>}
                            {tl.hasContent ? <a href={`/civ/${tl.id}`} style={{ textDecoration: 'none' }}>{pill}</a> : pill}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function NoResults({ query, kind }: { query: string; kind: string }) {
  return (
    <div style={{ padding: '60px 24px', textAlign: 'center' }}>
      <div style={{ fontFamily: SERIF, fontSize: 16, color: INK }}>No {kind} match &ldquo;{query}&rdquo;</div>
      <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13, color: MUTED, marginTop: 6 }}>Try a region, era, or partial name.</div>
    </div>
  )
}

// ───────────────────────────────────────────── shell
export function CivHome() {
  const [view, setView] = useState<View>('timeline')
  const [query, setQuery] = useState('')
  // Colour the lit filter chrome to the chain when the filter came from a chain
  // badge; null (→ stone) for a plain typed filter.
  const [filterColor, setFilterColor] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false) // full-text chapter search
  const q = query.trim().toLowerCase()
  const litColor = filterColor ?? STONE

  const civCount = SORTED_CIVS.filter(c => civMatches(c.id, q)).length
  const chainCount = CHAINS_BY_REGION.reduce((n, g) => n + g.chains.length, 0)
  const intro = view === 'timeline'
    ? { eyebrow: 'ALL OF HUMAN HISTORY', count: q ? `${civCount} matches` : `${SORTED_CIVS.length} civs` }
    : { eyebrow: 'BY CHAIN', count: q ? `${civCount} matches` : `${chainCount} chains` }

  return (
    <div style={{ minHeight: '100dvh', display: 'flex', justifyContent: 'center', background: 'var(--background)', backgroundImage: `radial-gradient(120% 60% at 50% 0%, color-mix(in srgb, var(--foreground) 5%, transparent), transparent 60%)` }}>
      {/* phone-width column */}
      <div style={{ width: '100%', maxWidth: 440, minHeight: '100dvh', background: 'var(--background)', borderLeft: `1px solid ${BORDER}`, borderRight: `1px solid ${BORDER}`, display: 'flex', flexDirection: 'column', boxShadow: '0 0 40px rgba(0,0,0,0.04)' }}>
        {/* single sticky header: [ Civ ▾ | Timeline | Chains | Globe ] + filter */}
        <div style={{ position: 'sticky', top: 0, zIndex: 8, background: BAR_BG, backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)', borderBottom: `1px solid ${BORDER}` }}>
          {/* mode pill + view pills — War-style breadcrumb bar (separate pills) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 10px 9px 12px' }}>
            <ModePill accent={STONE} />
            <span aria-hidden style={{ color: FAINT, fontFamily: SANS, fontSize: 11, padding: '0 1px' }}>›</span>
            {(['timeline', 'chains'] as View[]).map(v => {
              const active = v === view
              return <button key={v} onClick={() => setView(v)} style={viewPill(active)}>{v[0].toUpperCase() + v.slice(1)}</button>
            })}
            <a href="/globe" style={{ ...viewPill(false), textDecoration: 'none' }}>Globe</a>
            <div style={{ flex: 1 }} />
            <button onClick={() => setSearchOpen(true)} aria-label="Search all chapters" style={{ appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer', color: MUTED, padding: 4, display: 'flex' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </button>
            <DarkModeToggle />
          </div>
        </div>

        {/* app title + what-this-is — sits where the filter row used to live and
            scrolls away; the functional bar above stays put. The struck-scope
            kicker now lives here, readable and on its own line. */}
        <div style={{ padding: '14px 16px 16px' }}>
          <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: FAINT, marginBottom: 7 }}>
            <s style={{ textDecorationThickness: '1.5px' }}>Complete</s> Partial History of People Living Together
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: 27, fontWeight: 600, color: INK, lineHeight: 1.02, margin: 0, letterSpacing: -0.2 }}>Stuff Happened</h1>
          <p style={{ fontFamily: SANS, fontSize: 13, lineHeight: 1.5, color: MUTED, margin: '7px 0 0' }}>Every civilization that ever rose, peaked, and fell apart, told as one readable story — and we explain everything, including the parts your textbook assumed you already knew.</p>
        </div>

        {/* filter · count — non-sticky, sits just above the list */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '0 16px 12px' }}>
          <div style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 8, background: CHIP, border: `1px solid ${BORDER}`, borderRadius: 999, padding: '6px 12px' }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={FAINT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            {/* fontSize must be >=16px or iOS Safari auto-zooms the page on focus */}
            <input value={query} onChange={e => { setQuery(e.target.value); setFilterColor(null) }} placeholder="Filter…" style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', color: INK, fontFamily: SANS, fontSize: 16 }} />
            {query && <button onClick={() => { setQuery(''); setFilterColor(null) }} aria-label="Clear filter" style={{ appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, margin: '-9px -8px -9px 0', padding: 0, flexShrink: 0 }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 20, height: 20, borderRadius: 999, background: litColor, color: '#fff', fontSize: 14, lineHeight: 1 }}>×</span>
            </button>}
          </div>
          <span style={q
            ? { flexShrink: 0, fontFamily: SANS, fontSize: 11, fontWeight: 700, color: '#fff', background: litColor, padding: '2px 9px', borderRadius: 999, whiteSpace: 'nowrap' }
            : { flexShrink: 0, fontFamily: SANS, fontSize: 11, color: MUTED, whiteSpace: 'nowrap' }}>{intro.count}</span>
        </div>

        {/* body */}
        <div key={view} style={{ flex: 1 }}>
          {view === 'timeline'
            ? <TimelineView query={q} onFilterChain={(label, color) => {
                if (query) { setQuery(''); setFilterColor(null) }
                else { setQuery(label); setFilterColor(color) }
              }} />
            : <ChainsView query={q} />}
        </div>
      </div>
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}
    </div>
  )
}
