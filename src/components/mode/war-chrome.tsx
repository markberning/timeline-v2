'use client'

import { Fragment, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'

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

// Just the breadcrumb bar (sticky, top:0) — shared by WarChrome and by the
// narrative/reader pages that don't want the Timeline/Dossier toggle. Shows the
// full trail; it never scrolls horizontally — link crumbs shrink with an
// ellipsis if a screen is very narrow.
// `splitNav` (on by default): an ancestor crumb that has BOTH an href and a
// dropdown renders as a split pill — tap the label to navigate straight to that
// page, tap the ▾ to open the jump dropdown. Only ancestors-with-an-href split;
// the mode picker (no href) and the active leaf stay dropdown-only, so this
// safely applies across War (ACW/theatre rungs) and Art (era/movement/work).
export function WarBreadcrumb({ crumbs, accent = CIVIL_WAR_ACCENT, splitNav = true }: { crumbs: Crumb[]; accent?: string; splitNav?: boolean }) {
  const bar = 'color-mix(in srgb, var(--background) 92%, transparent)'
  const border = '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)'
  const muted = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
  const faint = 'color-mix(in srgb, var(--foreground) 38%, transparent)'
  const chip = 'color-mix(in srgb, var(--foreground) 6%, transparent)'
  const ell: React.CSSProperties = { minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 8, background: bar,
      backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)',
      borderBottom: border, padding: '5px 8px 5px 12px', display: 'flex', alignItems: 'center', gap: 8,
      minHeight: 34, boxSizing: 'border-box',
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
                ? <CrumbDropdown crumb={c} emphasized={!!c.active} chip={chip} faint={faint} muted={muted} accent={accent} maxLabel={last ? 124 : 164} split={splitNav && !!c.href && !c.active} />
                : c.href && !last
                  ? <a href={c.href} style={{ padding: '3px 9px', color: muted, fontFamily: SANS, fontSize: 11, fontWeight: 500, borderRadius: 999, textDecoration: 'none', flex: '0 1 auto', ...ell }}>{text}</a>
                  : <span style={{ padding: '3px 9px', fontFamily: SANS, fontSize: 11, color: last ? accent : muted, fontWeight: last ? 700 : 500, background: last ? alpha(accent, 0.14) : 'transparent', border: last ? `1px solid ${alpha(accent, 0.5)}` : undefined, borderRadius: 999, flex: '0 1 auto', ...ell }}>{text}</span>}
            </Fragment>
          )
        })}
      </nav>
      <div style={{ flexShrink: 0, display: 'flex' }}><DarkModeToggle /></div>
    </div>
  )
}

export function WarChrome({ crumbs, view, onView, accent = CIVIL_WAR_ACCENT }: { crumbs: Crumb[]; view: View; onView: (v: View) => void; accent?: string }) {
  const bar = 'color-mix(in srgb, var(--background) 92%, transparent)'
  const border = '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)'
  const muted = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
  const chip = 'color-mix(in srgb, var(--foreground) 6%, transparent)'
  const chipActive = 'color-mix(in srgb, var(--foreground) 14%, var(--background))'
  const iconBtn: React.CSSProperties = {
    width: 34, height: 34, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
    border, background: chip, borderRadius: 999, color: 'var(--foreground)', cursor: 'pointer', padding: 0,
  }
  return (
    <>
      <WarBreadcrumb crumbs={crumbs} accent={accent} />

      {/* toggle bar — back + Timeline/Dossier segmented + spacer */}
      <div style={{
        position: 'sticky', top: 36, zIndex: 6, background: bar,
        backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)',
        borderBottom: border, padding: '10px 14px 12px', display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <button aria-label="Back" onClick={() => history.back()} style={iconBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div style={{ flex: 1, display: 'flex', background: chip, border, borderRadius: 999, padding: 3, gap: 2 }}>
          {(['timeline', 'dossier'] as View[]).map(v => {
            const active = v === view
            return (
              <button key={v} onClick={() => onView(v)} style={{
                flex: 1, appearance: 'none', border: 'none', borderRadius: 999, cursor: 'pointer',
                background: active ? chipActive : 'transparent', color: active ? 'var(--foreground)' : muted,
                fontFamily: SANS, fontWeight: active ? 600 : 500, fontSize: 12.5, letterSpacing: 0.2, padding: '7px 0',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, textTransform: 'capitalize',
              }}>
                {v === 'timeline'
                  ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2.4" fill="currentColor" /><circle cx="6" cy="18" r="2.4" fill="currentColor" /><path d="M6 8.4v7.2" stroke="currentColor" strokeWidth="1.4" /><path d="M10 6h8M10 18h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
                  : <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" /><path d="M8 9h8M8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>}
                {v}
              </button>
            )
          })}
        </div>
        <div style={{ width: 34, height: 34, flexShrink: 0 }} />
      </div>
    </>
  )
}

// A breadcrumb crumb that opens a dropdown — the theatre switcher and the
// battle/event jump list. `emphasized` = this crumb is the current page's leaf
// (accent pill); otherwise a gray pill that still opens. Options may carry a
// `color` dot (theatre-coded) and `heading` rows that group the list. The menu
// scrolls (the jump list is long) and is clamped to the viewport so the
// rightmost crumb's menu doesn't run off-screen.
const MENU_W = 252
function CrumbDropdown({ crumb, chip, faint, muted, accent, emphasized, maxLabel = 168, split = false }: { crumb: Crumb; chip: string; faint: string; muted: string; accent: string; emphasized: boolean; maxLabel?: number; split?: boolean }) {
  const [open, setOpen] = useState(false)
  const [pos, setPos] = useState<{ left: number; top: number }>({ left: 0, top: 0 })
  const btnRef = useRef<HTMLButtonElement>(null)
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
  // position: fixed off the button's viewport rect so it escapes the clip; clamp
  // left so a right-edge crumb's menu stays on-screen.
  useLayoutEffect(() => {
    if (!open || !btnRef.current) return
    const r = btnRef.current.getBoundingClientRect()
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
      if (btnRef.current?.contains(t) || menuRef.current?.contains(t)) return
      setOpen(false)
    }
    document.addEventListener('pointerdown', onDown, true)
    return () => document.removeEventListener('pointerdown', onDown, true)
  }, [open])
  // Shared pill chrome so the single-button and split variants look identical.
  const pillColor = pill ?? (emphasized ? 'var(--foreground)' : muted)
  const pillBg = pill ? alpha(pill, open ? 0.22 : 0.13) : (emphasized ? alpha(accent, open ? 0.22 : 0.14) : (open ? 'color-mix(in srgb, var(--foreground) 12%, transparent)' : chip))
  const pillBorder = `1px solid ${pill ? alpha(pill, 0.5) : (emphasized ? alpha(accent, 0.5) : 'color-mix(in srgb, var(--foreground) 14%, transparent)')}`
  const pillWeight = pill || emphasized ? 700 : 600
  const chevron = (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 150ms ease' }}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
  return (
    <span style={{ position: 'relative', flexShrink: 0 }}>
      {split && crumb.href ? (
        // Split pill: label navigates, the ▾ half opens the dropdown. One pill
        // look (shared chrome); a faint divider separates the two tap zones.
        <span style={{
          display: 'inline-flex', alignItems: 'stretch', fontFamily: SANS, fontSize: 11, fontWeight: pillWeight,
          color: pillColor, background: pillBg, borderRadius: crumb.accentBar ? 0 : 999, border: pillBorder,
          borderLeft: crumb.accentBar ? `3px solid ${crumb.accentBar}` : pillBorder, overflow: 'hidden',
          maxWidth: maxLabel, minWidth: 0,
        }}>
          <a href={crumb.href} style={{ display: 'inline-flex', alignItems: 'center', gap: crumb.icon ? 6 : 0, padding: crumb.accentBar ? '3px 7px 3px 8px' : '3px 7px 3px 10px', color: 'inherit', textDecoration: 'none', minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {crumb.icon && <img src={crumb.icon} alt="" style={{ width: 15, height: 15, objectFit: 'contain', flexShrink: 0 }} />}
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
          </a>
          <button ref={btnRef} onClick={() => setOpen(o => !o)} aria-expanded={open} aria-label={`Jump to another ${label}`} style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 24, flexShrink: 0,
            background: open ? 'color-mix(in srgb, var(--foreground) 9%, transparent)' : 'transparent',
            border: 'none', borderLeft: `1px solid ${pill ? alpha(pill, 0.4) : 'color-mix(in srgb, var(--foreground) 16%, transparent)'}`,
            color: 'inherit', cursor: 'pointer', padding: 0,
          }}>
            {chevron}
          </button>
        </span>
      ) : (
      <button ref={btnRef} onClick={() => setOpen(o => !o)} aria-expanded={open} style={{
        display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 8px 3px 9px',
        fontFamily: SANS, fontSize: 11, fontWeight: pillWeight,
        color: pillColor, background: pillBg,
        borderRadius: 999, border: pillBorder, cursor: 'pointer',
        maxWidth: maxLabel, minWidth: 0,
      }}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
        {chevron}
      </button>
      )}
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
