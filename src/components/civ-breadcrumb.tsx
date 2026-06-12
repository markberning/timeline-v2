'use client'

// The Civ reader's top bar. Pills:
//
//   Civ  ›  [ Asia ▾ | China ▾ | Han Dynasty ▾ ]  ›  Chapters ▾
//   mode    the combined location picker             in-page jump
//
// The middle "location" pill has three identical tap-zones (label + chevron)
// in one connected control:
//   1. Region  — switch region; re-scopes zone 2.
//   2. Chain   — switch chain within the region; re-scopes zone 3.
//   3. Civ     — the civ list for the selected chain; tapping a civ navigates.
// Switching region/chain only re-scopes in place (no navigation) — you only
// leave the page when you pick a civ. The leaf pill always shows the civ you're
// actually reading, so the bar stays honest about "where am I" while browsing.

import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import {
  NAVIGATOR_TLS, TL_KIND_ORDER, TL_KIND_LIVE,
  REGION_ORDER, REGION_LABELS, REGION_COLORS, type NavigatorRegion, type TlKind,
} from '@/lib/navigator-tls'
import { CIV_CHAIN_MAP, CHAINS_BY_REGION, SORTED_CIVS } from '@/lib/chronology-data'
import type { SectionGroup } from '@/components/section-home-bar'
import type { TlChain } from '../../reference-data/tl-chains'

const SANS = 'var(--font-geist-sans)'
const MENU_W = 264

const BAR_BG = 'color-mix(in srgb, var(--background) 92%, transparent)'
const BORDER = '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)'
const PILL_BORDER = 'color-mix(in srgb, var(--foreground) 14%, transparent)'
const DIVIDER = 'color-mix(in srgb, var(--foreground) 16%, transparent)'
const MUTED = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 38%, transparent)'
const CHIP = 'color-mix(in srgb, var(--foreground) 6%, transparent)'
const OPEN_BG = 'color-mix(in srgb, var(--foreground) 12%, transparent)'
const MENU_BORDER = '1px solid color-mix(in srgb, var(--foreground) 14%, transparent)'
// Thread colours, matching the app-home launcher rows + emblems.
const THREAD_ACCENT: Record<string, string> = { civ: '#d97706', war: '#b44d3b', art: '#7c3aed', music: '#1d4ed8', philosophy: '#a08423' }

const MODE_SHORT: Record<TlKind, string> = { civ: 'Civ', war: 'War', art: 'Art', music: 'Music', philosophy: 'Phil' }
const MODE_HREF: Record<TlKind, string | undefined> = { civ: '/civ', war: '/war', art: '/art', music: '/music', philosophy: '/philosophy' }

function alpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  return `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${a})`
}

// ── data helpers ──
function chainsForRegion(region: NavigatorRegion): TlChain[] {
  return CHAINS_BY_REGION.find(g => g.region === region)?.chains ?? []
}
function findChain(chainId: string | null): TlChain | null {
  if (!chainId) return null
  for (const g of CHAINS_BY_REGION) {
    const c = g.chains.find(ch => ch.id === chainId)
    if (c) return c
  }
  return null
}
// First built civ of a chain / region — where a region/chain pick lands you.
function firstCivOfChain(chain: TlChain): string | null {
  for (const e of chain.entries) {
    const tl = NAVIGATOR_TLS.find(t => t.id === e.timelineId)
    if (tl?.hasContent) return tl.id
  }
  return null
}
function firstCivOfRegion(region: NavigatorRegion): string | null {
  for (const c of chainsForRegion(region)) {
    const id = firstCivOfChain(c)
    if (id) return id
  }
  return null
}

// ── shared anchored-menu primitive (fixed popover that escapes the bar's
// horizontal scroll/backdrop clip; closes on outside tap) ──
function useMenu() {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 })
  const btnRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    if (!open || !btnRef.current) return
    const r = btnRef.current.getBoundingClientRect()
    setPos({ left: Math.max(8, Math.min(r.left, window.innerWidth - MENU_W - 8)), top: r.bottom + 6 })
  }, [open])
  useEffect(() => {
    if (!open) return
    const onDown = (e: Event) => {
      const t = e.target as Node
      if (btnRef.current?.contains(t) || menuRef.current?.contains(t)) return
      setOpen(false)
    }
    document.addEventListener('pointerdown', onDown, true)
    return () => document.removeEventListener('pointerdown', onDown, true)
  }, [open])
  return { open, setOpen, btnRef, menuRef, pos }
}
type MenuState = ReturnType<typeof useMenu>

function MenuPanel({ m, children }: { m: MenuState; children: React.ReactNode }) {
  if (!m.open) return null
  return (
    <div ref={m.menuRef} style={{
      position: 'fixed', top: m.pos.top, left: m.pos.left, zIndex: 9999, width: MENU_W, maxHeight: '70vh', overflowY: 'auto',
      background: 'var(--background)', border: MENU_BORDER, borderRadius: 10, boxShadow: '0 10px 28px rgba(0,0,0,0.20)', padding: 5,
    }}>
      {children}
    </div>
  )
}

const Chevron = ({ open }: { open: boolean }) => (
  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms ease' }}>
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const rowBase: React.CSSProperties = {
  width: '100%', textAlign: 'left', appearance: 'none', border: 'none', cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
  padding: '7px 10px', fontFamily: SANS, fontSize: 12, color: 'var(--foreground)', borderRadius: 7, background: 'transparent',
}
function Dot({ color }: { color?: string }) {
  return color ? <span style={{ flexShrink: 0, width: 7, height: 7, borderRadius: 999, background: color }} /> : null
}
function Check({ accent }: { accent: string }) {
  return <span style={{ flexShrink: 0, color: accent, fontWeight: 700 }}>✓</span>
}
function Soon() {
  return <span style={{ flexShrink: 0, fontFamily: SANS, fontSize: 8, fontWeight: 700, letterSpacing: 0.7, textTransform: 'uppercase', color: FAINT, border: `1px solid ${FAINT}`, borderRadius: 999, padding: '1px 6px' }}>soon</span>
}

// The leading "Civ ▾" pill — switches verticals (Civ/War/Art/Music). Shared by
// the reader breadcrumb and the home bar. `accent` colours the ✓ on the current.
export function ModePill({ accent }: { accent: string }) {
  const mode = useMenu()
  const ell: React.CSSProperties = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
  return (
    <span style={{ position: 'relative', flexShrink: 0, display: 'inline-flex' }}>
      {/* split RECTANGLE carrying the home's thread styling: an orange (civ
          accent) left bar + the civ emblem + "Civ" links to the civ home; the
          chevron opens the app switcher (Civ/War/Art/Music). */}
      <span style={{
        display: 'inline-flex', alignItems: 'stretch', borderRadius: 0, overflow: 'hidden',
        border: `1px solid ${PILL_BORDER}`, borderLeft: `3px solid ${THREAD_ACCENT.civ}`, background: mode.open ? OPEN_BG : CHIP,
      }}>
        <a href="/civ" aria-label="Civ home" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 7px 3px 8px',
          fontFamily: SANS, fontSize: 11, fontWeight: 600, color: MUTED, textDecoration: 'none', cursor: 'pointer',
        }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/thread-icons/civ.webp" alt="" style={{ width: 15, height: 15, objectFit: 'contain' }} />
          Civ
        </a>
        <span aria-hidden style={{ width: 1, alignSelf: 'stretch', background: DIVIDER, flexShrink: 0 }} />
        <button ref={mode.btnRef} onClick={() => mode.setOpen(o => !o)} aria-expanded={mode.open} aria-label="Switch app" style={{
          display: 'inline-flex', alignItems: 'center', padding: '3px 7px', appearance: 'none', border: 'none',
          background: 'transparent', color: MUTED, cursor: 'pointer',
        }}>
          <Chevron open={mode.open} />
        </button>
      </span>
      <MenuPanel m={mode}>
        {/* back to the app root (the four-thread launcher) */}
        <a href="/" onClick={() => mode.setOpen(false)} style={{ ...rowBase, fontWeight: 500, textDecoration: 'none' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}><span style={ell}>Stuff Happened</span></span>
        </a>
        <div aria-hidden style={{ height: 1, background: DIVIDER, margin: '4px 6px' }} />
        {TL_KIND_ORDER.map(k => {
          const href = MODE_HREF[k]
          const current = k === 'civ'
          const soon = !TL_KIND_LIVE[k]
          if (!href) return null
          const color = THREAD_ACCENT[k]
          return (
            <a key={k} href={href} onClick={() => mode.setOpen(false)} style={{ ...rowBase, borderRadius: 0, borderLeft: `3px solid ${color}`, marginBottom: 4, fontWeight: current ? 700 : 500, textDecoration: 'none', background: current ? CHIP : 'transparent' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/thread-icons/${k}.webp`} alt="" style={{ width: 16, height: 16, objectFit: 'contain', flexShrink: 0 }} />
                <span style={ell}>{MODE_SHORT[k]}</span>
              </span>
              {current ? <Check accent={accent} /> : soon ? <Soon /> : null}
            </a>
          )
        })}
      </MenuPanel>
    </span>
  )
}

// The civ section's top-level browse is by REGION (the civ analogue of "all
// wars" / "all art eras"): the pill lists the regions, each jumping to that
// region's first civ. `currentRegion` marks the region you're in with a ✓.
export function civSectionGroups(currentRegion?: NavigatorRegion): SectionGroup[] {
  return [{
    items: REGION_ORDER.map(r => {
      const target = firstCivOfRegion(r)
      return { label: REGION_LABELS[r], href: target ? `/civ/${target}` : undefined, dotColor: REGION_COLORS[r], current: r === currentRegion }
    }),
  }]
}

// The civ home's "All chains" picker — every chain, grouped by region, each
// jumping to the chain's first built civ.
export function chainSectionGroups(): SectionGroup[] {
  return CHAINS_BY_REGION.map(g => ({
    heading: REGION_LABELS[g.region],
    items: g.chains.map(c => ({ label: c.shortLabel ?? c.label, href: firstCivOfChain(c) ? `/civ/${firstCivOfChain(c)}` : undefined, dotColor: REGION_COLORS[g.region] })).filter(it => it.href),
  })).filter(g => g.items.length)
}

// The civ home's "All civs" picker — every built civ, grouped by region.
export function civListGroups(): SectionGroup[] {
  return REGION_ORDER.map(r => ({
    heading: REGION_LABELS[r],
    items: SORTED_CIVS.filter(c => c.region === r && c.hasContent).map(c => ({ label: c.label, href: `/civ/${c.id}`, dotColor: REGION_COLORS[r] })),
  })).filter(g => g.items.length)
}

export interface CivBreadcrumbProps {
  civId: string
  civLabel: string
  region: NavigatorRegion
  chapters?: { number: number; title: string }[]
  hideChapters?: boolean // home bar: no chapters, so drop the "Chp" pill
}

export function CivBreadcrumb({ civId, civLabel, region, chapters = [], hideChapters = false }: CivBreadcrumbProps) {
  const accent = REGION_COLORS[region]

  // The picker always reflects the civ you're on. Selecting a region / chain /
  // civ navigates (region → that region's first built civ, chain → its first
  // built civ, civ → itself), and the new page re-renders this bar fresh — so
  // there's no browse state to keep.
  // Standalone civs fall back to the region's synthetic "Standalone" chain, which
  // IS one of the region's chains (CHAINS_BY_REGION includes it) — so the chain
  // pill always renders and its dropdown always lists the real chains too, never
  // trapping you among only the standalone civs.
  const chain = CIV_CHAIN_MAP.get(civId)?.chain ?? findChain(`__standalone__${region}`)

  const reg = useMenu()
  const chn = useMenu()
  const civ = useMenu()
  const leaf = useMenu()

  // The chapter the reader currently has open (null on the summary view → Chp 1).
  const [curChapter, setCurChapter] = useState<number | null>(null)
  useEffect(() => {
    function onCh(e: Event) { setCurChapter((e as CustomEvent<number | null>).detail) }
    window.addEventListener('civ-chapter-changed', onCh)
    return () => window.removeEventListener('civ-chapter-changed', onCh)
  }, [])

  // A chain can span regions (e.g. atlantic-world: Europe → Africa → Americas).
  // CHAINS_BY_REGION files such a chain only under its FIRST member's region, so
  // a civ whose own region differs (atlantic-slave-trade = Africa,
  // latin-american-independence = Americas) would not find its own chain in
  // chainsForRegion(region) — the chain pill would then drop its current entry
  // and list the wrong siblings. Always include the current chain so the pill
  // resolves + highlights correctly regardless of which region it's filed under.
  const baseChains = chainsForRegion(region)
  const regionChains = chain && !baseChains.some(c => c.id === chain.id)
    ? [chain, ...baseChains]
    : baseChains
  const chainCivs = (chain?.entries.map(e => NAVIGATOR_TLS.find(t => t.id === e.timelineId)).filter(Boolean) ?? []) as typeof NAVIGATOR_TLS

  const sep = <span aria-hidden style={{ color: FAINT, fontFamily: SANS, fontSize: 11, flexShrink: 0, padding: '0 2px' }}>›</span>

  const segLabel: React.CSSProperties = { flex: '0 1 auto', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
  // plain-text crumb: label + ▾ chevron, no chip; tapping the crumb opens its
  // switch menu (matching the war/art breadcrumbs).
  const crumbBtn = (color: string, weight: number): React.CSSProperties => ({
    display: 'inline-flex', alignItems: 'center', gap: 3, padding: '2px 1px', appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer',
    fontFamily: SANS, fontSize: 11.5, fontWeight: weight, color, minWidth: 0,
  })

  return (
    <div style={{
      background: BAR_BG, backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)',
      borderBottom: BORDER, padding: '5px 8px 5px 12px', display: 'flex', alignItems: 'center', gap: 8, minHeight: 50, boxSizing: 'border-box',
    }}>
      <nav style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 4, overflow: 'hidden', whiteSpace: 'nowrap' }}>
        {/* the thread switcher lives in the ThreadBar tier above; this bar is the
            "where am I within Civ" trail of specific items: region › chain › civ ›
            chapter (the "All regions" root lives on the /civ home, not here) */}
        {/* region crumb — the top specific item, like war's ACW / art's era */}
        <span style={{ position: 'relative', display: 'inline-flex', flex: '0 3 auto', minWidth: 0, maxWidth: 112 }}>
          <button ref={reg.btnRef} onClick={() => reg.setOpen(o => !o)} aria-expanded={reg.open} aria-label="Switch region" style={crumbBtn(MUTED, 600)}>
            <span style={segLabel}>{REGION_LABELS[region]}</span><Chevron open={reg.open} />
          </button>
          <MenuPanel m={reg}>
            {REGION_ORDER.map(r => {
              const current = r === region
              const label = <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}><Dot color={REGION_COLORS[r]} /><span style={segLabel}>{REGION_LABELS[r]}</span></span>
              if (current) return (
                <div key={r} style={{ ...rowBase, cursor: 'default', fontWeight: 700, background: CHIP }}>{label}<Check accent={accent} /></div>
              )
              const target = firstCivOfRegion(r)
              return (
                <a key={r} href={target ? `/civ/${target}` : undefined} onClick={() => reg.setOpen(false)} style={{ ...rowBase, fontWeight: 500, textDecoration: 'none' }}>{label}</a>
              )
            })}
          </MenuPanel>
        </span>

        {sep}

        {/* chain pill — separate split pill (label → the chain, ▾ → switch chain).
            Always shown: standalone civs get a "Standalone" chain whose dropdown
            still lists the region's real chains, so you can always navigate out. */}
        <span style={{ position: 'relative', display: 'inline-flex', flex: '0 2 auto', minWidth: 0, maxWidth: 130 }}>
          <button ref={chn.btnRef} onClick={() => chn.setOpen(o => !o)} aria-expanded={chn.open} aria-label="Switch chain" style={crumbBtn(MUTED, 600)}>
            <span style={segLabel}>{chain?.shortLabel ?? '—'}</span><Chevron open={chn.open} />
          </button>
          <MenuPanel m={chn}>
            {regionChains.map(c => {
              const current = c.id === chain?.id
              const label = <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}><span style={segLabel}>{c.label}</span></span>
              if (current) return (
                <div key={c.id} title={c.label} style={{ ...rowBase, cursor: 'default', fontWeight: 700, background: CHIP }}>{label}<Check accent={accent} /></div>
              )
              const target = firstCivOfChain(c)
              if (!target) return (
                <div key={c.id} title={c.label} style={{ ...rowBase, cursor: 'default', color: FAINT }}>{label}<Soon /></div>
              )
              return (
                <a key={c.id} href={`/civ/${target}`} onClick={() => chn.setOpen(false)} title={c.label} style={{ ...rowBase, fontWeight: 500, textDecoration: 'none' }}>{label}</a>
              )
            })}
          </MenuPanel>
        </span>

        {sep}

        {/* civ crumb — plain text + ▾ (tap to switch civ) */}
        <span style={{ position: 'relative', display: 'inline-flex', flex: '0 1 auto', minWidth: 0, maxWidth: 200 }}>
          <button ref={civ.btnRef} onClick={() => civ.setOpen(o => !o)} aria-expanded={civ.open} aria-label="Switch civilization" style={crumbBtn(MUTED, 600)}>
            <span style={segLabel}>{civLabel}</span><Chevron open={civ.open} />
          </button>
          <MenuPanel m={civ}>
            {chainCivs.length ? chainCivs.map(tl => {
              const current = tl.id === civId
              const label = <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}><Dot color={REGION_COLORS[tl.region]} /><span style={segLabel}>{tl.label}</span></span>
              if (current) return (
                <div key={tl.id} style={{ ...rowBase, cursor: 'default', fontWeight: 700, background: CHIP }}>{label}<Check accent={accent} /></div>
              )
              if (!tl.hasContent) return (
                <div key={tl.id} style={{ ...rowBase, cursor: 'default', color: FAINT }}>{label}<Soon /></div>
              )
              return (
                <a key={tl.id} href={`/civ/${tl.id}`} onClick={() => civ.setOpen(false)} style={{ ...rowBase, fontWeight: 500, textDecoration: 'none' }}>{label}</a>
              )
            }) : <div style={{ ...rowBase, cursor: 'default', color: FAINT }}>No civilizations</div>}
          </MenuPanel>
        </span>

        {/* the chapter pill only appears once a chapter is actually open (null on
            the summary view) — no point showing it before you've entered one */}
        {!hideChapters && curChapter != null && (<>
        {sep}

        {/* ── chapters — jumps to a chapter within this single page (accent text) ── */}
        <span style={{ position: 'relative', flexShrink: 0 }}>
          <button ref={leaf.btnRef} onClick={() => leaf.setOpen(o => !o)} aria-expanded={leaf.open} style={{
            ...crumbBtn(accent, 700), maxWidth: 150,
          }}>
            <span style={segLabel}>Chp {curChapter}</span><Chevron open={leaf.open} />
          </button>
          <MenuPanel m={leaf}>
            {chapters.map(c => {
              const current = c.number === curChapter
              return (
                <button key={c.number} onClick={() => { leaf.setOpen(false); window.dispatchEvent(new CustomEvent('civ-open-chapter', { detail: c.number })) }}
                  style={{ ...rowBase, fontWeight: current ? 700 : 500, background: current ? CHIP : 'transparent' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}><span style={segLabel}>Ch {c.number} · {c.title}</span></span>
                  {current ? <Check accent={accent} /> : null}
                </button>
              )
            })}
          </MenuPanel>
        </span>
        </>)}
      </nav>
    </div>
  )
}
