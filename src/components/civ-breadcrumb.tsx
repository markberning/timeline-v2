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
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import {
  NAVIGATOR_TLS, TL_KIND_ORDER, TL_KIND_LIVE,
  REGION_ORDER, REGION_LABELS, REGION_COLORS, type NavigatorRegion, type TlKind,
} from '@/lib/navigator-tls'
import { CIV_CHAIN_MAP, CHAINS_BY_REGION } from '@/lib/chronology-data'
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

const MODE_SHORT: Record<TlKind, string> = { civ: 'Civ', war: 'War', art: 'Art', music: 'Music' }
const MODE_HREF: Record<TlKind, string | undefined> = { civ: '/', war: '/war', art: '/art', music: undefined }

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

export interface CivBreadcrumbProps {
  civId: string
  civLabel: string
  region: NavigatorRegion
  chapters: { number: number; title: string }[]
}

export function CivBreadcrumb({ civId, civLabel, region, chapters }: CivBreadcrumbProps) {
  const accent = REGION_COLORS[region]

  // The picker always reflects the civ you're on. Selecting a region / chain /
  // civ navigates (region → that region's first built civ, chain → its first
  // built civ, civ → itself), and the new page re-renders this bar fresh — so
  // there's no browse state to keep.
  const chain = CIV_CHAIN_MAP.get(civId)?.chain ?? findChain(`__standalone__${region}`)
  // Standalone civs have no real family — drop the chain zone for them, so the
  // pill reads "Near East ▾ | Phoenicia ▾". (Zone 3 still lists the region's
  // standalone civs via the synthetic chain.)
  const isStandalone = !CIV_CHAIN_MAP.has(civId)

  const mode = useMenu()
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

  const regionChains = chainsForRegion(region)
  const chainCivs = (chain?.entries.map(e => NAVIGATOR_TLS.find(t => t.id === e.timelineId)).filter(Boolean) ?? []) as typeof NAVIGATOR_TLS

  const sep = <span aria-hidden style={{ color: FAINT, fontFamily: SANS, fontSize: 11, flexShrink: 0, padding: '0 2px' }}>›</span>

  // segment button inside the connected location pill — all three zones are
  // identical: a (truncating) label + a chevron. The label flexes/ellipsizes so
  // the whole bar shrinks to fit rather than forcing a horizontal scroll.
  const segStyle = (open: boolean): React.CSSProperties => ({
    display: 'flex', alignItems: 'center', gap: 3, padding: '3px 7px', width: '100%', minWidth: 0,
    appearance: 'none', border: 'none', background: open ? OPEN_BG : 'transparent', color: 'inherit', cursor: 'pointer',
    fontFamily: SANS, fontSize: 11, fontWeight: 600,
  })
  const segLabel: React.CSSProperties = { flex: '0 1 auto', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
  // Per-zone flex: region/chain give up width first; the civ you're reading
  // keeps its width longest. minWidth:0 lets each ellipsize instead of pushing.
  const zoneWrap = (shrink: number, maxWidth: number): React.CSSProperties => ({ position: 'relative', display: 'flex', minWidth: 0, flex: `0 ${shrink} auto`, maxWidth })
  const div = <span aria-hidden style={{ width: 1, alignSelf: 'stretch', background: DIVIDER, flexShrink: 0 }} />

  return (
    <div style={{
      background: BAR_BG, backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)',
      borderBottom: BORDER, padding: '5px 8px 5px 12px', display: 'flex', alignItems: 'center', gap: 8, minHeight: 34, boxSizing: 'border-box',
    }}>
      <nav style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 4, overflow: 'hidden', whiteSpace: 'nowrap' }}>
        {/* ── mode pill ── */}
        <span style={{ position: 'relative', flexShrink: 0 }}>
          <button ref={mode.btnRef} onClick={() => mode.setOpen(o => !o)} aria-expanded={mode.open} style={{
            display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px 3px 9px', fontFamily: SANS, fontSize: 11, fontWeight: 600,
            color: MUTED, background: mode.open ? OPEN_BG : CHIP, borderRadius: 999, border: `1px solid ${PILL_BORDER}`, cursor: 'pointer',
          }}>
            <span>Civ</span><Chevron open={mode.open} />
          </button>
          <MenuPanel m={mode}>
            {TL_KIND_ORDER.map(k => {
              const live = TL_KIND_LIVE[k]
              const href = live ? MODE_HREF[k] : undefined
              const current = k === 'civ'
              if (!href) return (
                <div key={k} style={{ ...rowBase, cursor: 'default', color: FAINT }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}><span style={segLabel}>{MODE_SHORT[k]}</span></span><Soon />
                </div>
              )
              return (
                <a key={k} href={href} onClick={() => mode.setOpen(false)} style={{ ...rowBase, fontWeight: current ? 700 : 500, textDecoration: 'none', background: current ? CHIP : 'transparent' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}><span style={segLabel}>{MODE_SHORT[k]}</span></span>
                  {current ? <Check accent={accent} /> : null}
                </a>
              )
            })}
          </MenuPanel>
        </span>

        {sep}

        {/* ── combined location pill: region | chain | civ ── */}
        <span style={{
          display: 'inline-flex', alignItems: 'stretch', borderRadius: 999, border: `1px solid ${PILL_BORDER}`, overflow: 'hidden',
          background: CHIP, color: MUTED, flex: '0 1 auto', maxWidth: '100%', minWidth: 0,
        }}>
          {/* zone 1 — region */}
          <span style={zoneWrap(3, 96)}>
            <button ref={reg.btnRef} onClick={() => reg.setOpen(o => !o)} aria-expanded={reg.open} style={segStyle(reg.open)}>
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
                  <a key={r} href={target ? `/${target}` : undefined} onClick={() => reg.setOpen(false)} style={{ ...rowBase, fontWeight: 500, textDecoration: 'none' }}>{label}</a>
                )
              })}
            </MenuPanel>
          </span>

          {div}

          {/* zone 2 — chain (omitted for standalone civs, which have no family) */}
          {!isStandalone && (<>
          <span style={zoneWrap(2, 110)}>
            <button ref={chn.btnRef} onClick={() => chn.setOpen(o => !o)} aria-expanded={chn.open} style={segStyle(chn.open)}>
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
                  <a key={c.id} href={`/${target}`} onClick={() => chn.setOpen(false)} title={c.label} style={{ ...rowBase, fontWeight: 500, textDecoration: 'none' }}>{label}</a>
                )
              })}
            </MenuPanel>
          </span>

          {div}
          </>)}

          {/* zone 3 — the civ list for the selected chain (tapping navigates) */}
          <span style={zoneWrap(1, 200)}>
            <button ref={civ.btnRef} onClick={() => civ.setOpen(o => !o)} aria-expanded={civ.open} aria-label="Jump to a civilization" style={segStyle(civ.open)}>
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
                  <a key={tl.id} href={`/${tl.id}`} onClick={() => civ.setOpen(false)} style={{ ...rowBase, fontWeight: 500, textDecoration: 'none' }}>{label}</a>
                )
              }) : <div style={{ ...rowBase, cursor: 'default', color: FAINT }}>No civilizations</div>}
            </MenuPanel>
          </span>
        </span>

        {sep}

        {/* ── chapters — jumps to a chapter within this single page ── */}
        <span style={{ position: 'relative', flexShrink: 0 }}>
          <button ref={leaf.btnRef} onClick={() => leaf.setOpen(o => !o)} aria-expanded={leaf.open} style={{
            display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px 3px 9px', fontFamily: SANS, fontSize: 11, fontWeight: 700,
            color: 'var(--foreground)', background: alpha(accent, leaf.open ? 0.22 : 0.14), borderRadius: 999, border: `1px solid ${alpha(accent, 0.5)}`, cursor: 'pointer',
            maxWidth: 150, minWidth: 0,
          }}>
            <span style={segLabel}>Chp {curChapter ?? 1}</span><Chevron open={leaf.open} />
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
      </nav>

      <div style={{ flexShrink: 0, display: 'flex' }}><DarkModeToggle /></div>
    </div>
  )
}
