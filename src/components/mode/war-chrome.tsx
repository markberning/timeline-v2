'use client'

import { Fragment } from 'react'

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

export function alpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  return `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${a})`
}

export type View = 'timeline' | 'dossier'

export interface Crumb {
  label: string
  href?: string
}

export function WarChrome({ crumbs, view, onView }: { crumbs: Crumb[]; view: View; onView: (v: View) => void; accent?: string }) {
  const bar = 'color-mix(in srgb, var(--background) 92%, transparent)'
  const border = '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)'
  const muted = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
  const faint = 'color-mix(in srgb, var(--foreground) 38%, transparent)'
  const chip = 'color-mix(in srgb, var(--foreground) 6%, transparent)'
  const chipActive = 'color-mix(in srgb, var(--foreground) 14%, var(--background))'
  const iconBtn: React.CSSProperties = {
    width: 34, height: 34, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
    border, background: chip, borderRadius: 999, color: 'var(--foreground)', cursor: 'pointer', padding: 0,
  }
  return (
    <>
      {/* breadcrumb — its own line, sticky above the toggle */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 8, background: bar,
        backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)',
        borderBottom: border, padding: '6px 12px', display: 'flex', alignItems: 'center', gap: 4,
        overflowX: 'auto', whiteSpace: 'nowrap', minHeight: 30, boxSizing: 'border-box',
      }}>
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1
          return (
            <Fragment key={i}>
              {i > 0 && <span aria-hidden style={{ color: faint, fontFamily: SANS, fontSize: 11, flexShrink: 0, padding: '0 2px' }}>›</span>}
              {c.href && !last
                ? <a href={c.href} style={{ padding: '3px 9px', color: muted, fontFamily: SANS, fontSize: 11, fontWeight: 500, borderRadius: 999, textDecoration: 'none', flexShrink: 0 }}>{c.label}</a>
                : <span style={{ padding: '3px 9px', fontFamily: SANS, fontSize: 11, color: last ? 'var(--foreground)' : muted, fontWeight: last ? 600 : 500, background: last ? chip : 'transparent', borderRadius: 999, flexShrink: 0 }}>{c.label}</span>}
            </Fragment>
          )
        })}
      </nav>

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
