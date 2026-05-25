'use client'

// The shared section-home chrome. Tier 1 is the ThreadBar (with search + dark);
// tier 2 is one or more pills. The first ("All X") is a stone split pill (label →
// the section home, ▾ → its list); any further pills are gray "picker" dropdowns
// (no home link) for drilling deeper levels. Civ uses three (All regions › Chain
// › Civ — a fully-populated 3-level tree); war + art use one (their deeper levels
// only exist inside a specific war/era).

import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import { ThreadBar } from '@/components/thread-bar'

const SANS = 'var(--font-geist-sans)'
const STONE = '#8a7a66'
const MENU_W = 268
const MUTED = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 38%, transparent)'
const DIVIDER = 'color-mix(in srgb, var(--foreground) 16%, transparent)'
const CHIP = 'color-mix(in srgb, var(--foreground) 6%, transparent)'
const PILL_BORDER = 'color-mix(in srgb, var(--foreground) 14%, transparent)'
const OPEN_BG = 'color-mix(in srgb, var(--foreground) 12%, transparent)'
const MENU_BORDER = '1px solid color-mix(in srgb, var(--foreground) 14%, transparent)'

function alpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  return `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${a})`
}

export interface SectionItem { label: string; href?: string; dotColor?: string; soon?: boolean; current?: boolean }
export interface SectionGroup { heading?: string; items: SectionItem[] }
// `homeHref` present → the stone root split pill; absent → a gray picker dropdown.
export interface SectionPillProps { label: string; homeHref?: string; groups: SectionGroup[] }

// fixed-popover menu that escapes the bar's clip; closes on outside tap
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
const ell: React.CSSProperties = { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }

// A breadcrumb pill with a jump menu. The stone root (homeHref) is a split pill;
// a picker (no homeHref) is a gray whole-pill dropdown.
export function SectionPill({ label, homeHref, groups }: SectionPillProps) {
  const m = useMenu()
  const trigger = homeHref ? (
    <span style={{
      display: 'inline-flex', alignItems: 'stretch', borderRadius: 999, overflow: 'hidden',
      border: `1px solid ${alpha(STONE, 0.5)}`, background: alpha(STONE, m.open ? 0.22 : 0.14),
    }}>
      <a href={homeHref} style={{
        display: 'inline-flex', alignItems: 'center', padding: '3px 7px 3px 10px',
        fontFamily: SANS, fontSize: 11, fontWeight: 700, color: STONE, textDecoration: 'none', whiteSpace: 'nowrap',
      }}>{label}</a>
      <span aria-hidden style={{ width: 1, alignSelf: 'stretch', background: alpha(STONE, 0.4), flexShrink: 0 }} />
      <button ref={m.btnRef} onClick={() => m.setOpen(o => !o)} aria-expanded={m.open} aria-label={`Jump within ${label}`} style={{
        display: 'inline-flex', alignItems: 'center', padding: '3px 7px', appearance: 'none', border: 'none',
        background: 'transparent', color: STONE, cursor: 'pointer',
      }}>
        <Chevron open={m.open} />
      </button>
    </span>
  ) : (
    <button ref={m.btnRef} onClick={() => m.setOpen(o => !o)} aria-expanded={m.open} aria-label={`Pick a ${label}`} style={{
      display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px 3px 10px', minWidth: 0,
      borderRadius: 999, border: `1px solid ${PILL_BORDER}`, background: m.open ? OPEN_BG : CHIP,
      color: MUTED, fontFamily: SANS, fontSize: 11, fontWeight: 600, cursor: 'pointer',
    }}>
      <span style={ell}>{label}</span><Chevron open={m.open} />
    </button>
  )
  return (
    <span style={{ position: 'relative', flexShrink: 0, display: 'inline-flex', minWidth: 0 }}>
      {trigger}
      {m.open && (
        <div ref={m.menuRef} style={{
          position: 'fixed', top: m.pos.top, left: m.pos.left, zIndex: 9999, width: MENU_W, maxHeight: '70vh', overflowY: 'auto',
          background: 'var(--background)', border: MENU_BORDER, borderRadius: 10, boxShadow: '0 10px 28px rgba(0,0,0,0.20)', padding: 5,
        }}>
          {groups.map((g, gi) => (
            <div key={gi}>
              {g.heading && <div style={{ padding: '9px 10px 4px', marginTop: gi === 0 ? 0 : 4, borderTop: gi === 0 ? 'none' : `1px solid ${DIVIDER}`, fontFamily: SANS, fontSize: 9, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase', color: FAINT }}>{g.heading}</div>}
              {g.items.map((it, ii) => {
                const lead = it.dotColor ? <span style={{ flexShrink: 0, width: 7, height: 7, borderRadius: 999, background: it.dotColor }} /> : null
                const text = <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>{lead}<span style={ell}>{it.label}</span></span>
                if (!it.href) return (
                  <div key={ii} style={{ ...rowBase, cursor: 'default', color: FAINT }}>{text}<span style={{ flexShrink: 0, fontFamily: SANS, fontSize: 8, fontWeight: 700, letterSpacing: 0.7, textTransform: 'uppercase', color: FAINT, border: `1px solid ${FAINT}`, borderRadius: 999, padding: '1px 6px' }}>soon</span></div>
                )
                return (
                  <a key={ii} href={it.href} onClick={() => m.setOpen(false)} style={{ ...rowBase, fontWeight: it.current ? 700 : 500, background: it.current ? CHIP : 'transparent', textDecoration: 'none' }}>
                    {text}
                    {it.current ? <span style={{ flexShrink: 0, color: STONE, fontWeight: 700 }}>✓</span> : null}
                  </a>
                )
              })}
            </div>
          ))}
        </div>
      )}
    </span>
  )
}

// The sticky section-home bar — now just the ThreadBar. The drilldown pill row
// was dropped from the homes (the page's own content browses by region/era/etc.,
// so the breadcrumb pills were redundant there); SectionPill stays exported for
// the deep-page breadcrumbs. (To re-add a home pill row, map SectionPill here.)
export function SectionHomeBar() {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 8 }}>
      <ThreadBar />
    </div>
  )
}
