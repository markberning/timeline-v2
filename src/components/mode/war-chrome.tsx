'use client'

import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { ThreadBar } from '@/components/thread-bar'

// Combined height of the two pinned top tiers (ThreadBar 54 + breadcrumb row 50).
// Anything that sticks BELOW the breadcrumb (the view toggle, a reader's own
// sub-header) pins at this offset.
export const CHROME_TOP = 104

// Shared chrome for the War drilldown pages (War → Theatre → Battle):
// a consistent breadcrumb + a Timeline/Dossier view toggle at the top of
// every level. "Timeline" = the stripped escalating-spine; "Dossier" = the
// rich structured view. Ported to match the Historica War Drilldown mockup.

export const SANS = 'var(--font-geist-sans)'
export const SERIF = 'var(--font-lora)'
export const WAR_OXBLOOD = '#b91c1c'

// Mockup palette (supersedes oxblood on the war-detail pages).
export const ACCENTS = {
  blue: '#1d4ed8',   // Union, Western theatre
  amber: '#d97706',  // Colonial wars, Day 1
  rust: '#b44d3b',   // Confederate, Day 3, Naval
  violet: '#7c3aed', // Industrial Wars / Civil War, Day 2, Eastern
  green: '#047857',  // Cold War & after
}
export const CIVIL_WAR_ACCENT = ACCENTS.violet

// The War vertical's identity colour for the war-level breadcrumb pills (the
// all-wars home + the current war). Deliberately a neutral stone OUTSIDE the
// five theatre/era-band hues (violet/blue/amber/rust/green) so the war level
// never collides with a theatre colour. Theatres stay vivid; the war level is
// the calm parent above them.
export const WAR_ACCENT = '#8a7a66'

export function alpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  return `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${a})`
}

export type View = 'timeline' | 'dossier'

// Timeline/Dossier choice persists across all War pages (localStorage). Starts
// from a default to avoid an SSR/hydration mismatch, then syncs on mount.
export function useWarView(initial: View = 'dossier'): [View, (v: View) => void] {
  const [view, setViewState] = useState<View>(initial)
  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem('war-view') : null
    if (stored === 'timeline' || stored === 'dossier') setViewState(stored)
  }, [])
  const setView = (v: View) => {
    setViewState(v)
    try { window.localStorage.setItem('war-view', v) } catch { /* ignore */ }
  }
  return [view, setView]
}

export interface CrumbOption {
  label: string
  href?: string
  disabled?: boolean
  color?: string   // colored dot (e.g. theatre-coded jump list)
  heading?: boolean // render as a non-interactive section label, not a row
  date?: string    // shown on the right of a built/linkable row (when it happened)
  accentBar?: string // thread accent: a square row with a colored left bar
  icon?: string    // small leading emblem (e.g. /thread-icons/{kind}.webp)
}
export interface Crumb {
  label: string
  short?: string // compact label used in the trail when this crumb is an ancestor (e.g. "Eastern" not "Eastern Theatre")
  href?: string
  options?: CrumbOption[] // when present, the crumb is an interactive dropdown (theatre switch / battle jump)
  active?: boolean // dropdown crumb that is the current page's leaf — gets accent emphasis (else gray)
  currentLabel?: string // option label to check (✓) when the button shows a SHORT label (e.g. button "ACW", current option "American Civil War")
  color?: string // fixed pill colour overriding the page accent (e.g. the ACW war crumb's oxblood signature)
  accentBar?: string // thread accent: render as a square rectangle with a colored left bar (the mode crumb)
  icon?: string // small leading emblem (e.g. /thread-icons/{kind}.webp)
}

// Just the breadcrumb bar (sticky, top:0) — shared by the war/art pages and the
// narrative/reader pages that don't want the Timeline/Dossier toggle. Shows the
// full trail; it never scrolls horizontally — link crumbs shrink with an
// ellipsis if a screen is very narrow.
// Crumbs render as plain text + a ▾ chevron (no pill chrome); tapping a crumb
// opens its jump dropdown, and the menu items navigate. Earlier this was a split
// pill (label navigates · chevron opens); flattened to text for a lighter bar.
// applies across War (ACW/theatre rungs) and Art (era/movement/work).
export function WarBreadcrumb({ crumbs, accent = CIVIL_WAR_ACCENT }: { crumbs: Crumb[]; accent?: string }) {
  const bar = 'color-mix(in srgb, var(--background) 92%, transparent)'
  const border = '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)'
  const muted = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
  const faint = 'color-mix(in srgb, var(--foreground) 38%, transparent)'
  const chip = 'color-mix(in srgb, var(--foreground) 6%, transparent)'
  const ell: React.CSSProperties = { minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 8 }}>
      {/* tier 1: the persistent thread switcher (Home · Civ · War · Art · Music) */}
      <ThreadBar />
      {/* tier 2: where-am-I within this thread (war/art drilldown trail) */}
    <div style={{
      background: bar,
      backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)',
      borderBottom: border, padding: '5px 8px 5px 12px', display: 'flex', alignItems: 'center', gap: 8,
      height: 50, boxSizing: 'border-box',
    }}>
      <nav style={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 4, overflowX: 'auto', overflowY: 'hidden', whiteSpace: 'nowrap', scrollbarWidth: 'none' }}>
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1
          const text = !last && c.short ? c.short : c.label
          return (
            <Fragment key={i}>
              {i > 0 && <span aria-hidden style={{ color: faint, fontFamily: SANS, fontSize: 11, flexShrink: 0, padding: '0 2px' }}>›</span>}
              {c.options
                // any crumb with options is an interactive dropdown — the theatre
                // switcher and the battle/event jump list, on every page. Accent
                // when it's the current page's leaf (c.active), gray otherwise.
                // only the crumb that IS the current page lights up — not the
                // trailing generic picker just because it's last
                ? <CrumbDropdown crumb={c} emphasized={!!c.active} chip={chip} faint={faint} muted={muted} accent={accent} maxLabel={last ? 124 : 164} />
                : c.href && !last
                  ? <a href={c.href} style={{ padding: '2px 1px', color: muted, fontFamily: SANS, fontSize: 11.5, fontWeight: 500, textDecoration: 'none', flex: '0 1 auto', ...ell }}>{text}</a>
                  : <span style={{ padding: '2px 1px', fontFamily: SANS, fontSize: 11.5, color: last ? accent : muted, fontWeight: last ? 700 : 500, flex: '0 1 auto', ...ell }}>{text}</span>}
            </Fragment>
          )
        })}
      </nav>
    </div>
    </div>
  )
}

// The Timeline/Dossier view toggle — now rendered by each page just BELOW its
// hero image (no longer a sticky tier above it, and the old back button is gone;
// the ThreadBar + breadcrumb handle navigation). Sticks under the breadcrumb on
// scroll so it stays reachable.
export function WarViewToggle({ view, onView }: { view: View; onView: (v: View) => void }) {
  const bar = 'color-mix(in srgb, var(--background) 92%, transparent)'
  const border = '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)'
  const muted = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
  const chip = 'color-mix(in srgb, var(--foreground) 6%, transparent)'
  const chipActive = 'color-mix(in srgb, var(--foreground) 14%, var(--background))'
  return (
    <div style={{
      position: 'sticky', top: CHROME_TOP, zIndex: 6, background: bar,
      backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)',
      borderBottom: border, padding: '7px 14px 8px',
    }}>
      <div style={{ display: 'flex', background: chip, border, borderRadius: 999, padding: 2, gap: 2, maxWidth: 240 }}>
        {(['timeline', 'dossier'] as View[]).map(v => {
          const active = v === view
          return (
            <button key={v} onClick={() => onView(v)} style={{
              flex: 1, appearance: 'none', border: 'none', borderRadius: 999, cursor: 'pointer',
              background: active ? chipActive : 'transparent', color: active ? 'var(--foreground)' : muted,
              fontFamily: SANS, fontWeight: active ? 600 : 500, fontSize: 11.5, letterSpacing: 0.2, padding: '4px 0',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, textTransform: 'capitalize',
            }}>
              {v === 'timeline'
                ? <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.4" fill="currentColor" /><circle cx="6" cy="18" r="2.4" fill="currentColor" /><path d="M6 8.4v7.2" stroke="currentColor" strokeWidth="1.4" /><path d="M10 6h8M10 18h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                : <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>}
              {v}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// A breadcrumb crumb that opens a dropdown — the theatre switcher and the
// battle/event jump list. `emphasized` = this crumb is the current page's leaf
// (accent pill); otherwise a gray pill that still opens. Options may carry a
// `color` dot (theatre-coded) and `heading` rows that group the list. The menu
// scrolls (the jump list is long) and is clamped to the viewport so the
// rightmost crumb's menu doesn't run off-screen.
const MENU_W = 252
function CrumbDropdown({ crumb, chip, faint, muted, accent, emphasized, maxLabel = 168 }: { crumb: Crumb; chip: string; faint: string; muted: string; accent: string; emphasized: boolean; maxLabel?: number }) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 })
  const wrapRef = useRef<HTMLSpanElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const border = '1px solid color-mix(in srgb, var(--foreground) 14%, transparent)'
  // A crumb with a `short` always shows it in the bar (keeps the trail narrow
  // even when it's the current page) — the full name still lives in the page's
  // hero title. The dropdown options + ✓ matching still use the full `label`.
  // `pill` = a fixed crumb colour (the ACW band colour) overriding the accent.
  const label = crumb.short ?? crumb.label
  const pill = crumb.color
  // The breadcrumb <nav> scrolls horizontally (overflow-x: auto), which clips an
  // absolutely-positioned menu hanging below it. Anchor the menu with
  // position: fixed off the crumb's viewport rect so it escapes the clip; clamp
  // left so a right-edge crumb's menu stays on-screen.
  useLayoutEffect(() => {
    if (!open || !wrapRef.current) return
    const r = wrapRef.current.getBoundingClientRect()
    const left = Math.max(8, Math.min(r.left, window.innerWidth - MENU_W - 8))
    setPos({ left, top: r.bottom + 6 })
  }, [open])
  // Close on any outside tap. (A fixed-position overlay can't be used here: the
  // breadcrumb bar's backdrop-filter makes it the containing block for fixed
  // descendants, so an inset:0 overlay would only cover the bar, not the page.)
  useEffect(() => {
    if (!open) return
    const onDown = (e: Event) => {
      const t = e.target as Node
      if (wrapRef.current?.contains(t) || menuRef.current?.contains(t)) return
      setOpen(false)
    }
    document.addEventListener('pointerdown', onDown, true)
    return () => document.removeEventListener('pointerdown', onDown, true)
  }, [open])
  // Plain-text crumb: just the label + a ▾ chevron, no pill chrome. Colour: a
  // fixed crumb colour if set, accent for the current page's leaf, else muted.
  const color = pill ?? (emphasized ? accent : muted)
  const weight = pill || emphasized ? 700 : 500
  // DUAL-ACTION crumb: the LABEL navigates straight to this crumb's own page,
  // the ▾ chevron opens the jump menu beside it. Split only when there's a real
  // elsewhere to go — a target href AND this crumb isn't the current page's leaf
  // (navigating a leaf to itself is pointless, so the leaf's label just opens the
  // menu like before). This is what lets you tap "ACW" to reach the ACW home
  // without first opening the dropdown.
  const canSplit = !!crumb.href && !emphasized
  const labelStyle: React.CSSProperties = {
    overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
    maxWidth: maxLabel, minWidth: 0, fontFamily: SANS, fontSize: 11.5, fontWeight: weight, color,
    textDecoration: 'none', padding: '2px 1px', appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer',
  }
  const chevron = (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms ease' }}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
  return (
    <span ref={wrapRef} style={{ position: 'relative', flexShrink: 0, minWidth: 0, display: 'inline-flex', alignItems: 'center' }}>
      {canSplit
        ? <a href={crumb.href} style={labelStyle}>{label}</a>
        : <button onClick={() => setOpen(o => !o)} aria-expanded={open} style={{ ...labelStyle, display: 'inline-flex', alignItems: 'center' }}>{label}</button>}
      {/* when the label is its own link, set the ▾ apart as a clearly separate
          tap target: extra gap + a faint hairline divider before it. */}
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label={`${label} menu`} style={{
        display: 'inline-flex', alignItems: 'center', flexShrink: 0, appearance: 'none', background: 'transparent', cursor: 'pointer', color,
        marginLeft: canSplit ? 5 : 0,
        paddingLeft: canSplit ? 6 : 1, paddingRight: 3, paddingTop: 2, paddingBottom: 2,
        border: 'none', borderLeft: canSplit ? `1px solid ${alpha('#888', 0.32)}` : 'none', borderRadius: 0,
      }}>
        {chevron}
      </button>
      {open && (
        <>
          <div ref={menuRef} style={{
            position: 'fixed', top: pos.top, left: pos.left, zIndex: 9999, width: MENU_W, maxHeight: '70vh', overflowY: 'auto',
            background: 'var(--background)', border, borderRadius: 10,
            boxShadow: '0 10px 28px rgba(0,0,0,0.20)', padding: 5,
          }}>
            {crumb.options!.map((o, oi) => {
              const dot = o.color ? <span style={{ flexShrink: 0, width: 7, height: 7, borderRadius: 999, background: o.color }} /> : null
              if (o.heading) return (
                <div key={`h${oi}`} style={{ display: 'flex', alignItems: 'center', gap: 7, padding: '9px 10px 4px', marginTop: oi === 0 ? 0 : 4, borderTop: oi === 0 ? 'none' : border, fontFamily: SANS, fontSize: 9, fontWeight: 700, letterSpacing: 0.8, textTransform: 'uppercase', color: o.color || faint }}>
                  {dot}<span>{o.label}</span>
                </div>
              )
              const current = o.label === (crumb.currentLabel ?? crumb.label)
              // eslint-disable-next-line @next/next/no-img-element
              const lead = o.icon ? <img src={o.icon} alt="" style={{ width: 16, height: 16, objectFit: 'contain', flexShrink: 0 }} /> : dot
              const barStyle: React.CSSProperties = o.accentBar ? { borderRadius: 0, borderLeft: `3px solid ${o.accentBar}`, marginBottom: 4 } : {}
              if (o.disabled || !o.href) return (
                <div key={`o${oi}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '7px 10px', fontFamily: SANS, fontSize: 12, color: faint, borderRadius: 7, cursor: 'default', ...barStyle }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>{lead}<span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o.label}</span></span>
                  <span style={{ flexShrink: 0, fontFamily: SANS, fontSize: 8, fontWeight: 700, letterSpacing: 0.7, textTransform: 'uppercase', color: faint, border: `1px solid ${faint}`, borderRadius: 999, padding: '1px 6px' }}>soon</span>
                </div>
              )
              return (
                <a key={`o${oi}`} href={o.href} onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '7px 10px', fontFamily: SANS, fontSize: 12, fontWeight: current ? 700 : 500, color: 'var(--foreground)', textDecoration: 'none', borderRadius: 7, background: current ? chip : 'transparent', ...barStyle }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>{lead}<span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{o.label}</span></span>
                  {current
                    ? <span style={{ flexShrink: 0, color: accent, fontWeight: 700 }}>✓</span>
                    : o.date
                      ? <span style={{ flexShrink: 0, fontFamily: SANS, fontSize: 9.5, fontWeight: 600, letterSpacing: 0.2, color: faint }}>{o.date}</span>
                      : null}
                </a>
              )
            })}
          </div>
        </>
      )}
    </span>
  )
}

// A labeled dossier section (prose-first), reused across dossier views.
export function DossierSection({ label, children, accent = CIVIL_WAR_ACCENT }: { label: string; children: React.ReactNode; accent?: string }) {
  return (
    <section style={{ marginBottom: 26 }}>
      <h2 style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: accent, marginBottom: 10 }}>{label}</h2>
      {children}
    </section>
  )
}

// "At a glance" key/value grid — the dossier's stat header.
export function GlanceGrid({ rows }: { rows: [string, string][] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px' }}>
      {rows.map(([k, v]) => (
        <div key={k}>
          <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5 }}>{k}</div>
          <div style={{ fontFamily: SERIF, fontSize: 15, marginTop: 2 }}>{v}</div>
        </div>
      ))}
    </div>
  )
}
