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
 * A compact "← prev · Civ · next →" identity bar that lives inside
 * [data-top-nav]. It has zero height at the top of the page and snaps
 * open once the scrollaway hero (marked by [data-civ-hero-end]) passes
 * under the sticky nav — i.e. the full title block "collapses" into this.
 *
 * Smoothness notes (this stuttered when it animated layout mid-scroll):
 * - The height SNAPS (no grid-rows transition); only opacity animates,
 *   which is compositor-friendly and doesn't fight scroll.
 * - This component is the sole owner of the `--reader-nav-h` CSS var.
 *   chapter-accordion reads it for its sticky `top`/`scroll-margin`, so
 *   one ResizeObserver write here repositions every sticky chapter header
 *   via the browser — no per-accordion React re-render (the old stutter).
 * - The collapse trigger is a rAF-throttled scroll check with hysteresis
 *   so it can't flap open/closed when you hover at the threshold.
 */
export function CollapsingCivBar({ label, prev, next }: CollapsingCivBarProps) {
  const [collapsed, setCollapsed] = useState(false)

  // Collapse trigger.
  useEffect(() => {
    const nav = document.querySelector('[data-top-nav]') as HTMLElement | null
    const sentinel = document.querySelector('[data-civ-hero-end]') as HTMLElement | null
    if (!nav || !sentinel) return

    // Measured while still collapsed (bar height 0) → the thin nav height,
    // immune to this bar's own growth.
    const thinNavH = Math.ceil(nav.getBoundingClientRect().height)
    const HYST = 28 // dead zone so the snap can't flap at the boundary

    let ticking = false
    const evaluate = () => {
      ticking = false
      const top = sentinel.getBoundingClientRect().top
      setCollapsed(prev => {
        if (!prev && top <= thinNavH) return true
        if (prev && top >= thinNavH + HYST) return false
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

  // Sole owner of --reader-nav-h. Fires once per snap; the browser then
  // moves every sticky chapter header itself. No accordion re-renders.
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
    <div
      aria-hidden={!collapsed}
      style={{ display: 'grid', gridTemplateRows: collapsed ? '1fr' : '0fr' }}
    >
      <div style={{ overflow: 'hidden' }}>
        <div
          className="flex items-center justify-between gap-3 pt-1.5 text-[11px] leading-tight"
          style={{ opacity: collapsed ? 1 : 0, transition: 'opacity 160ms ease' }}
        >
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

          <div className="shrink-0 max-w-[46%] text-center">
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
      </div>
    </div>
  )
}
