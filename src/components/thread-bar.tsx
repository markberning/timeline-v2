'use client'

// The app's primary navigation: a persistent top row of the five destinations —
// Home · Civ · War · Art · Music. Each carries its thread colour as a left bar +
// a tinted icon; the current section lights up. This is tier 1; a contextual
// breadcrumb (where-am-I within the thread) tucks in beneath it on inner pages.
//
// Self-determining via usePathname, so a single instance works on every surface.
// The parent decides stickiness — this just paints the bar (own bg + blur +
// bottom border) and centres its row to the phone column.

import { usePathname } from 'next/navigation'
import { TL_KIND_ORDER, TL_KIND_ACCENT, TL_KIND_LIVE, type TlKind } from '@/lib/navigator-tls'

const SANS = 'var(--font-geist-sans)'
const STONE = '#8a7a66' // Home / neutral, matches the war level's calm parent hue
const BAR_BG = 'color-mix(in srgb, var(--background) 92%, transparent)'
const BORDER = '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)'
const MUTED = 'color-mix(in srgb, var(--foreground) 60%, transparent)'

function alpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  return `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${a})`
}

const SHORT: Record<TlKind, string> = { civ: 'Civ', war: 'War', art: 'Art', music: 'Music' }
const HREF: Record<TlKind, string> = { civ: '/civ', war: '/war', art: '/art', music: '/music' }

// Tint a thread emblem to its accent colour via CSS mask (so the source artwork's
// own colour is irrelevant — every icon reads in its thread hue).
function Emblem({ kind, color }: { kind: TlKind; color: string }) {
  return (
    <span aria-hidden style={{
      display: 'block', width: 16, height: 16, backgroundColor: color,
      WebkitMaskImage: `url("/thread-icons/${kind}.webp")`, maskImage: `url("/thread-icons/${kind}.webp")`,
      WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center', maskPosition: 'center',
      WebkitMaskSize: 'contain', maskSize: 'contain',
    }} />
  )
}
function HouseIcon({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M3 11l9-8 9 8" /><path d="M5 10v10h14V10" />
    </svg>
  )
}

interface Slot { key: string; label: string; href: string; color: string; active: boolean; icon: React.ReactNode }

export function ThreadBar() {
  const path = usePathname() || '/'
  const seg =
    path === '/' ? 'home'
    : path.startsWith('/war') ? 'war'
    : path.startsWith('/art') ? 'art'
    : path.startsWith('/music') ? 'music'
    : (path.startsWith('/civ') || path.startsWith('/globe') || path.startsWith('/navigator') || path.startsWith('/classic')) ? 'civ'
    : 'home'

  const slots: Slot[] = [
    { key: 'home', label: 'Home', href: '/', color: STONE, active: seg === 'home', icon: <HouseIcon color={STONE} /> },
    ...TL_KIND_ORDER.map(k => ({
      key: k, label: SHORT[k], href: HREF[k], color: TL_KIND_ACCENT[k],
      active: seg === k, icon: <Emblem kind={k} color={TL_KIND_ACCENT[k]} />,
    })),
  ]

  return (
    <div style={{
      background: BAR_BG, backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)',
      borderBottom: BORDER, height: 36, boxSizing: 'border-box',
    }}>
      <div style={{ maxWidth: 440, margin: '0 auto', height: '100%', display: 'flex', alignItems: 'stretch', gap: 2, padding: '0 6px' }}>
        {slots.map(s => (
          <a key={s.key} href={s.href} aria-current={s.active ? 'page' : undefined} style={{
            flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', gap: 5,
            padding: '7px 4px 7px 6px', borderLeft: `3px solid ${s.color}`,
            background: s.active ? alpha(s.color, 0.14) : 'transparent',
            textDecoration: 'none', color: 'inherit',
          }}>
            <span style={{ flexShrink: 0, display: 'flex' }}>{s.icon}</span>
            <span style={{
              fontFamily: SANS, fontSize: 11.5, fontWeight: s.active ? 700 : 500,
              color: s.active ? 'var(--foreground)' : MUTED,
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>{s.label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
