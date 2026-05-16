'use client'

import { useEffect, useRef } from 'react'

interface Side {
  id: string
  label: string
  hasContent: boolean
}

interface MinCivHeaderProps {
  label: string
  prev: Side | null
  next: Side | null
}

/**
 * The second sticky tier. A compact "← prev · Civ · next →" header that
 * lives in normal flow right after the hero and pins (real position:
 * sticky) just BELOW the unchanging nav line once the hero scrolls past.
 *
 * No scroll JS, no fade, no collapse animation: it's a plain sticky
 * element with a constant height. The big hero scrolls away above it;
 * this rises and sticks. The chapter header stacks below it at
 * calc(--reader-nav-h + --reader-minhdr-h) — both constant, so the
 * chapter header never jolts and just sticks smoothly as it always did.
 *
 * Owns those two CSS vars via a ResizeObserver. Crucially that observer
 * only fires when the nav or this bar actually change *size* (e.g. the
 * text-size control) — never on scroll — so it can't cause jank.
 */
export function MinCivHeader({ label, prev, next }: MinCivHeaderProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const nav = document.querySelector('[data-top-nav]') as HTMLElement | null
    const self = ref.current
    if (!nav || !self) return
    const root = document.documentElement
    const set = () => {
      root.style.setProperty('--reader-nav-h', `${Math.ceil(nav.getBoundingClientRect().height)}px`)
      root.style.setProperty('--reader-minhdr-h', `${Math.ceil(self.getBoundingClientRect().height)}px`)
    }
    set()
    const ro = new ResizeObserver(set)
    ro.observe(nav)
    ro.observe(self)
    return () => ro.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="sticky z-[11] -mx-5 mt-2 px-5 py-2 bg-background/95 backdrop-blur-sm border-b border-foreground/10 flex items-center justify-between gap-3 text-[11px] leading-tight"
      style={{ top: 'var(--reader-nav-h, 48px)' }}
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
  )
}
