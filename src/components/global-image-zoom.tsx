'use client'

// Corpus-wide image zoom: one delegated click handler so EVERY content image in
// the app opens the shared pinch/zoom/pan Lightbox, without wiring each of the 60+
// <img> sites by hand. Mounted once in the root layout.
//
// It deliberately does NOT hijack:
//   • images inside a link or button (cards, nav, the inset battle-card thumbs) —
//     a click there should navigate, not zoom;
//   • small images (< 80px rendered) — icons, emblems, commander avatars, mask glyphs;
//   • anything under [data-no-zoom] — the opt-out, used on images that already open
//     their OWN bespoke lightbox (battle/art readers, sheets) so we don't double-fire.

import { useEffect, useState } from 'react'
import { Lightbox } from '@/components/lightbox'

export function GlobalImageZoom() {
  const [lb, setLb] = useState<{ src: string; alt: string; caption?: string } | null>(null)
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0) return
      const start = e.target as HTMLElement | null
      const img = start?.closest('img') as HTMLImageElement | null
      if (!img) return
      if (img.closest('a, button, [role="button"], [data-no-zoom]')) return
      if (img.getBoundingClientRect().width < 80) return
      const src = img.currentSrc || img.src
      if (!src || src.startsWith('data:')) return
      e.preventDefault()
      setLb({ src, alt: img.alt || '', caption: img.getAttribute('data-cap') || undefined })
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
  if (!lb) return null
  return <Lightbox src={lb.src} alt={lb.alt} caption={lb.caption} onClose={() => setLb(null)} />
}
