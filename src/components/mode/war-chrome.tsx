'use client'

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

export function WarChrome({ crumbs, view, onView, accent = CIVIL_WAR_ACCENT }: { crumbs: Crumb[]; view: View; onView: (v: View) => void; accent?: string }) {
  return (
    <div style={{
      position: 'sticky', top: 0, zIndex: 5,
      background: 'color-mix(in srgb, var(--background) 92%, transparent)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid color-mix(in srgb, var(--foreground) 12%, transparent)',
      padding: '10px 16px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
    }}>
      {/* breadcrumb */}
      <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 6, fontFamily: SANS, fontSize: 11.5, minWidth: 0 }}>
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1
          const node = c.href && !last
            ? <a href={c.href} style={{ color: 'color-mix(in srgb, var(--foreground) 55%, transparent)', textDecoration: 'none' }}>{c.label}</a>
            : <span style={{ color: last ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 55%, transparent)', fontWeight: last ? 600 : 400 }}>{c.label}</span>
          return (
            <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' }}>
              {node}
              {!last && <span style={{ opacity: 0.3 }}>›</span>}
            </span>
          )
        })}
      </nav>

      {/* timeline / dossier toggle */}
      <div style={{ display: 'inline-flex', flexShrink: 0, border: '1px solid color-mix(in srgb, var(--foreground) 20%, transparent)', borderRadius: 7, overflow: 'hidden' }}>
        {(['timeline', 'dossier'] as View[]).map(v => {
          const active = v === view
          return (
            <button key={v} onClick={() => onView(v)} style={{
              cursor: 'pointer', padding: '5px 12px', fontSize: 11, fontWeight: 600, textTransform: 'capitalize',
              fontFamily: SANS, border: 'none',
              background: active ? accent : 'transparent',
              color: active ? '#fff' : 'color-mix(in srgb, var(--foreground) 65%, transparent)',
            }}>{v}</button>
          )
        })}
      </div>
    </div>
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
