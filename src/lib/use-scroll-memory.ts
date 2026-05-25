'use client'

// Scroll restoration for INNER scroll containers (the art/war pages scroll a
// `overflow-y:auto` div inside a 100dvh layout, not the document — so the browser's
// native back/forward scroll restoration, which only touches the window, snaps them
// to the top). This hook saves the container's scrollTop per pathname in
// sessionStorage and restores it ONLY when you return to that path by going back
// (swipe-back / back button), never when you click a link forward into it.
//
// Why the direction check: restoring on *every* arrival meant clicking a link to a
// page you'd visited before yanked you down to your old scroll position instead of
// starting at the top. The native swipe-back gesture and the back button both fire
// `popstate`; a <Link> click (pushState) does not — so we only restore after a pop.
//
// Usage:  const ref = useScrollMemory<HTMLDivElement>()
//         <div ref={ref} style={{ overflowY: 'auto', ... }}>…</div>

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

// Module-level: was the most recent navigation a back/forward (POP) rather than a
// forward link click (PUSH)? Set true on popstate; consumed (and reset) by the next
// mount's restore check.
let arrivedViaPop = false
if (typeof window !== 'undefined') {
  window.addEventListener('popstate', () => { arrivedViaPop = true })
}

export function useScrollMemory<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const pathname = usePathname()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const key = `scrollmem:${pathname}`

    // Restore only when we got here by swipe-back / back button (a POP). A forward
    // link click lands at the top, even on a page that was scrolled earlier.
    const wasPop = arrivedViaPop
    arrivedViaPop = false
    if (wasPop) {
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
    }

    // Always save on scroll (coalesced to a frame) and once more on unmount/navigate,
    // so the position is there to restore the next time you swipe back to this page.
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
