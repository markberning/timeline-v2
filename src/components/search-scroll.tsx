'use client'

// Global search-result scroller. War and art readers aren't on the civ pipeline,
// so they can't use the civ reader's built-in chapter/highlight/snippet scroll.
// Instead, the search overlay appends `?shl=<snippet>` to a war/art result link;
// on load this finds the first block-level element whose text contains that
// snippet, scrolls it into view, and flashes it. Generic + reader-agnostic, so it
// works on any page (civ keeps its own param-based highlight and never sets shl).

import { useEffect } from 'react'

const norm = (s: string) => s.toLowerCase().replace(/\s+/g, ' ').trim()
const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'NAV', 'BUTTON', 'INPUT'])

export function SearchScroll() {
  useEffect(() => {
    const url = new URL(window.location.href)
    const shl = url.searchParams.get('shl')
    if (!shl) return
    const needle = norm(shl)
    if (needle.length < 4) return

    let tries = 0
    const find = (): boolean => {
      // tag-agnostic: war prose is <p>, art prose is styled <div> — so pick the
      // SMALLEST element whose text contains the snippet (the leaf-most block).
      const els = document.body.querySelectorAll<HTMLElement>('p, div, h1, h2, h3, h4, li, figcaption, blockquote, span')
      let target: HTMLElement | null = null
      let bestLen = Infinity
      for (const el of els) {
        if (SKIP.has(el.tagName)) continue
        const t = norm(el.textContent || '')
        if (t.length < bestLen && t.includes(needle)) { target = el; bestLen = t.length }
      }
      if (!target) return false

      target.scrollIntoView({ block: 'center', behavior: 'smooth' })
      // transient flash — warm amber, fades after a beat
      target.style.transition = 'background-color 0.45s ease'
      target.style.borderRadius = '4px'
      target.style.backgroundColor = 'color-mix(in srgb, #eab308 26%, transparent)'
      target.style.boxShadow = '0 0 0 6px color-mix(in srgb, #eab308 26%, transparent)'
      window.setTimeout(() => {
        target!.style.backgroundColor = 'transparent'
        target!.style.boxShadow = 'none'
      }, 2400)

      // drop the param so a refresh / back doesn't re-trigger
      url.searchParams.delete('shl')
      window.history.replaceState({}, '', url.toString())
      return true
    }

    // content can render after mount (client readers) — retry briefly
    const iv = window.setInterval(() => { if (find() || ++tries > 24) window.clearInterval(iv) }, 140)
    return () => window.clearInterval(iv)
  }, [])

  return null
}
