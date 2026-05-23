'use client'

import { TL_KIND_ORDER, TL_KIND_LABELS, TL_KIND_LIVE, type TlKind } from '@/lib/navigator-tls'

interface ModeSwitcherProps {
  mode: TlKind
  onChange: (mode: TlKind) => void
}

// Verticals with a real front-door URL navigate there (so the address bar
// always matches the mode); the rest (coming-soon doors) swap in place.
const MODE_ROUTE: Partial<Record<TlKind, string>> = { civ: '/', war: '/war' }

/**
 * Phase-2 product-level navigation: the four content verticals.
 * Constant-height strip (no scroll-jolt), shared by every front door.
 * Non-live verticals are still tappable — they open a coming-soon door —
 * but carry a "SOON" marker so the state is honest.
 */
export function ModeSwitcher({ mode, onChange }: ModeSwitcherProps) {
  return (
    <nav
      className="shrink-0 flex items-center justify-center gap-5 border-b border-foreground/10 font-[family-name:var(--font-geist-sans)]"
      style={{ height: 44, fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}
      aria-label="Content mode"
    >
      {TL_KIND_ORDER.map(kind => {
        const live = TL_KIND_LIVE[kind]
        const active = kind === mode
        const route = MODE_ROUTE[kind]
        const style: React.CSSProperties = {
          color: active
            ? 'var(--foreground)'
            : live
              ? 'color-mix(in srgb, var(--foreground) 45%, transparent)'
              : 'color-mix(in srgb, var(--foreground) 25%, transparent)',
          paddingBottom: 3,
          borderBottom: active ? '2px solid var(--foreground)' : '2px solid transparent',
        }
        const inner = (
          <>
            {TL_KIND_LABELS[kind]}
            {!live && (
              <sup style={{ fontSize: 7, marginLeft: 3, letterSpacing: '0.05em', opacity: 0.85 }}>SOON</sup>
            )}
          </>
        )
        const cls = 'relative cursor-pointer transition-colors duration-200 no-underline'
        // A vertical with a front-door URL navigates there; the rest swap in place.
        return route
          ? <a key={kind} href={route} aria-current={active ? 'page' : undefined} className={cls} style={style}>{inner}</a>
          : <button key={kind} type="button" aria-current={active ? 'page' : undefined} onClick={() => onChange(kind)} className={cls} style={style}>{inner}</button>
      })}
    </nav>
  )
}
