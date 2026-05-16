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
 * [data-top-nav]. It has zero height at the top of the page and animates
 * open once the scrollaway hero (marked by [data-civ-hero-end]) passes
 * under the sticky nav — i.e. the full title block "collapses" into this.
 *
 * Because it grows the [data-top-nav] block, the chapter accordion's
 * ResizeObserver picks up the new height and keeps the chapter header
 * sticking flush below it. Two sticky layers, no offset math here.
 */
export function CollapsingCivBar({ label, prev, next }: CollapsingCivBarProps) {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const nav = document.querySelector('[data-top-nav]') as HTMLElement | null
    const sentinel = document.querySelector('[data-civ-hero-end]') as HTMLElement | null
    if (!nav || !sentinel) return

    // Measured at mount while this bar is still collapsed (height 0), so
    // it's the thin nav height — stable, immune to this bar's own growth.
    const thinNavH = Math.ceil(nav.getBoundingClientRect().height)

    const obs = new IntersectionObserver(
      ([entry]) => setCollapsed(!entry.isIntersecting),
      { rootMargin: `-${thinNavH}px 0px 0px 0px`, threshold: 0 }
    )
    obs.observe(sentinel)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      aria-hidden={!collapsed}
      style={{
        display: 'grid',
        gridTemplateRows: collapsed ? '1fr' : '0fr',
        transition: 'grid-template-rows 220ms ease',
      }}
    >
      <div style={{ overflow: 'hidden' }}>
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
