'use client'

// The app's primary navigation: a persistent top row — a Home icon, then the
// four threads (Civ · War · Art · Music), then the search + dark-mode controls.
// Each thread carries its accent colour as a tinted icon; the current section
// lights up. This is tier 1; a contextual breadcrumb tucks in beneath it.
//
// Self-determining via usePathname, so one instance works on every surface. It
// owns the global search itself (button + overlay), so search is available on
// every page — the overlay is portalled to <body> to escape the bar's
// backdrop-filter (which would otherwise clip a position:fixed child).

import { useState } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { SearchOverlay } from '@/components/chronology/search-overlay'
import { TL_KIND_ORDER, TL_KIND_ACCENT, type TlKind } from '@/lib/navigator-tls'

const SANS = 'var(--font-geist-sans)'
const STONE = '#8a7a66' // Home / neutral, matches the war level's calm parent hue
const BAR_BG = 'color-mix(in srgb, var(--background) 92%, transparent)'
const BORDER = '1px solid color-mix(in srgb, var(--foreground) 10%, transparent)'
const MUTED = 'color-mix(in srgb, var(--foreground) 60%, transparent)'

const SHORT: Record<TlKind, string> = { civ: 'Civ', war: 'War', art: 'Art', music: 'Music' }
const HREF: Record<TlKind, string> = { civ: '/civ', war: '/war', art: '/art', music: '/music' }

// Tint a thread emblem via CSS mask. The colour is grayscale (muted) unless the
// thread is selected, in which case it reads in its accent hue.
function Emblem({ kind, color, size }: { kind: TlKind; color: string; size: number }) {
  return (
    <span aria-hidden style={{
      display: 'block', width: size, height: size, backgroundColor: color,
      WebkitMaskImage: `url("/thread-icons/${kind}.webp")`, maskImage: `url("/thread-icons/${kind}.webp")`,
      WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center', maskPosition: 'center',
      WebkitMaskSize: 'contain', maskSize: 'contain',
    }} />
  )
}
function HouseIcon({ color, size }: { color: string; size: number }) {
  // Filled house silhouette (with a doorway), matching the solid thread emblems.
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  )
}

interface Slot { key: string; label: string; href: string; color: string; active: boolean; isHome?: boolean; kind?: TlKind }

export function ThreadBar() {
  const [searchOpen, setSearchOpen] = useState(false)
  const path = usePathname() || '/'
  const seg =
    path === '/' ? 'home'
    : path.startsWith('/war') ? 'war'
    : path.startsWith('/art') ? 'art'
    : path.startsWith('/music') ? 'music'
    : (path.startsWith('/civ') || path.startsWith('/globe') || path.startsWith('/navigator') || path.startsWith('/classic')) ? 'civ'
    : 'home'

  const slots: Slot[] = [
    { key: 'home', label: 'Home', href: '/', color: STONE, active: seg === 'home', isHome: true },
    ...TL_KIND_ORDER.map(k => ({
      key: k, label: SHORT[k], href: HREF[k], color: TL_KIND_ACCENT[k], active: seg === k, kind: k,
    })),
  ]

  return (
    <>
    <div style={{
      background: BAR_BG, backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)',
      borderBottom: BORDER, height: 54, boxSizing: 'border-box',
    }}>
      <div style={{ maxWidth: 460, margin: '0 auto', height: '100%', display: 'flex', alignItems: 'stretch', gap: 1, padding: '0 4px' }}>
        {slots.map(s => {
          // grayscale unless selected; the selected thread comes back in colour
          // with a matching underline (no tinted background).
          const tint = s.active ? s.color : MUTED
          return (
            <a key={s.key} href={s.href} aria-current={s.active ? 'page' : undefined} aria-label={s.isHome ? s.label : undefined} style={{
              position: 'relative', flex: s.isHome ? '0 0 auto' : 1, minWidth: 0, display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3,
              padding: s.isHome ? '0 10px' : '0 4px', textDecoration: 'none', color: 'inherit',
            }}>
              <span style={{ flexShrink: 0, display: 'flex' }}>
                {s.isHome ? <HouseIcon color={tint} size={30} /> : <Emblem kind={s.kind!} color={tint} size={20} />}
              </span>
              {!s.isHome && <span style={{
                fontFamily: SANS, fontSize: 11, fontWeight: s.active ? 700 : 500, color: tint, lineHeight: 1,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%',
              }}>{s.label}</span>}
              {/* centred colour underline (a short indicator, not full width) */}
              {s.active && <span aria-hidden style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: 26, height: 3, borderRadius: '3px 3px 0 0', background: s.color }} />}
            </a>
          )
        })}
        <button onClick={() => setSearchOpen(true)} aria-label="Search" style={{ flexShrink: 0, appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer', color: MUTED, padding: '0 5px', display: 'flex', alignItems: 'center' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        </button>
        <span style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}><DarkModeToggle /></span>
      </div>
    </div>
    {searchOpen && createPortal(<SearchOverlay onClose={() => setSearchOpen(false)} />, document.body)}
    </>
  )
}
