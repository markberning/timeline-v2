'use client'

import { useEffect, useState } from 'react'

export function ChapterProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        setProgress(docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0)
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
        className="h-full transition-[width] duration-150 ease-out"
        style={{
          width: `${progress * 100}%`,
          backgroundColor: 'var(--accent)',
        }}
      />
    </div>
  )
}
