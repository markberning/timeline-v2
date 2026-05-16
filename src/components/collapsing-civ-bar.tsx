'use client'

import { useEffect, useState } from 'react'

interface Side {
  id: string
  label: string
  hasContent: boolean
}

interface CollapsingCivBarProps {
  label: string
  prev: Side | null
  next: Side | null
}

/**
 * A compact "← prev · Civ · next →" identity row that lives inside
 * [data-top-nav], beneath the home link / dark-mode row.
 *
 * It is ALWAYS rendered at a fixed height, so [data-top-nav] never changes
 * size. That's deliberate: the chapter header's sticky `top` reads
 * `--reader-nav-h` (set once here), so a constant nav height means the
 * chapter header just sticks smoothly and never jolts — the earlier
 * versions grew the nav on scroll, which shifted the line and the header.
 *
 * The "collapse" is purely the centered civ name fading in once the
 * scrollaway hero (marked by [data-civ-hero-end]) passes under the nav.
 * The chain arrows are always visible (they were removed from the hero),
 * the name's box is always reserved, so nothing about this animates layout
 * — only opacity, which never fights the scroll.
 */
export function CollapsingCivBar({ label, prev, next }: CollapsingCivBarProps) {
  const [showName, setShowName] = useState(false)

  // Reveal the civ name once the hero has scrolled under the nav.
  useEffect(() => {
    const nav = document.querySelector('[data-top-nav]') as HTMLElement | null
    const sentinel = document.querySelector('[data-civ-hero-end]') as HTMLElement | null
    if (!nav || !sentinel) return

    // Full (constant) nav height — the bottom of the sticky region.
    const navH = Math.ceil(nav.getBoundingClientRect().height)
    const HYST = 28 // dead zone so the name can't flicker at the boundary

    let ticking = false
    const evaluate = () => {
      ticking = false
      const top = sentinel.getBoundingClientRect().top
      setShowName(prev => {
        if (!prev && top <= navH) return true
        if (prev && top >= navH + HYST) return false
        return prev
      })
    }
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(evaluate)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    evaluate()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sole owner of --reader-nav-h. The nav height is constant now, so this
  // effectively writes once (and re-writes only if the text-size control
  // changes it). chapter-accordion reads it for its sticky offset.
  useEffect(() => {
    const nav = document.querySelector('[data-top-nav]') as HTMLElement | null
    if (!nav) return
    const root = document.documentElement
    const set = () =>
      root.style.setProperty('--reader-nav-h', `${Math.ceil(nav.getBoundingClientRect().height)}px`)
    set()
    const ro = new ResizeObserver(set)
    ro.observe(nav)
    return () => ro.disconnect()
  }, [])

  return (
    <div className="flex items-center justify-between gap-3 pt-1.5 text-[11px] leading-tight">
      <div className="flex-1 min-w-0">
        {prev && (prev.hasContent ? (
          <a
            href={`/${prev.id}`}
            className="flex items-center gap-1 min-w-0 hover:opacity-80 transition-opacity"
            style={{ color: 'var(--accent-text)' }}
          >
            <span className="shrink-0">←</span>
            <span className="truncate">{prev.label}</span>
          </a>
        ) : (
          <div className="flex items-center gap-1 min-w-0 text-foreground/35">
            <span className="shrink-0">←</span>
            <span className="truncate">{prev.label}</span>
          </div>
        ))}
      </div>

      <div
        className="shrink-0 max-w-[46%] text-center"
        style={{ opacity: showName ? 1 : 0, transition: 'opacity 160ms ease' }}
        aria-hidden={!showName}
      >
        <span className="block truncate font-semibold font-[family-name:var(--font-lora)] text-foreground/80">
          {label}
        </span>
      </div>

      <div className="flex-1 min-w-0">
        {next && (next.hasContent ? (
          <a
            href={`/${next.id}`}
            className="flex items-center justify-end gap-1 min-w-0 hover:opacity-80 transition-opacity"
            style={{ color: 'var(--accent-text)' }}
          >
            <span className="truncate">{next.label}</span>
            <span className="shrink-0">→</span>
          </a>
        ) : (
          <div className="flex items-center justify-end gap-1 min-w-0 text-foreground/35">
            <span className="truncate">{next.label}</span>
            <span className="shrink-0">→</span>
          </div>
        ))}
      </div>
    </div>
  )
}
