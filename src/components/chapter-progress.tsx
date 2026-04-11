'use client'

import { useEffect, useRef } from 'react'

export function ChapterProgress() {
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0
        if (barRef.current) {
          barRef.current.style.width = `${progress * 100}%`
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="h-[3px] w-full bg-foreground/10">
      <div
        ref={barRef}
        className="h-full"
        style={{
          width: '0%',
          backgroundColor: 'var(--accent)',
        }}
      />
    </div>
  )
}
