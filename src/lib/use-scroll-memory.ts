'use client'

// Scroll restoration for INNER scroll containers (the art/war pages scroll a
// `overflow-y:auto` div inside a 100dvh layout, not the document — so the browser's
// native back/forward scroll restoration, which only touches the window, snaps them
// to the top). This hook saves the container's scrollTop per pathname in
// sessionStorage and restores it when you return to that path (e.g. swipe-back).
//
// Usage:  const ref = useScrollMemory<HTMLDivElement>()
//         <div ref={ref} style={{ overflowY: 'auto', ... }}>…</div>

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

export function useScrollMemory<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const pathname = usePathname()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const key = `scrollmem:${pathname}`

    // Restore — after layout, and once more on the next frame for late content.
    const saved = sessionStorage.getItem(key)
    if (saved) {
      const y = parseInt(saved, 10)
      if (y > 0) {
        requestAnimationFrame(() => {
          el.scrollTop = y
          requestAnimationFrame(() => { el.scrollTop = y })
        })
      }
    }

    // Save on scroll (coalesced to a frame), and once more on unmount/navigate.
    let raf = 0
    const save = () => sessionStorage.setItem(key, String(el.scrollTop))
    const onScroll = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(save) }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      el.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
      save()
    }
  }, [pathname])

  return ref
}
