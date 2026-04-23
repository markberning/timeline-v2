'use client'

import { useEffect, useState } from 'react'

const SIZES = [
  { label: '14', value: '0.875rem' },
  { label: '16', value: '1rem' },
  { label: '18', value: '1.125rem' },
  { label: '20', value: '1.25rem' },
  { label: '22', value: '1.375rem' },
]

const DEFAULT_INDEX = 0 // 14px

export function TextSizeControl() {
  const [sizeIndex, setSizeIndex] = useState(DEFAULT_INDEX)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('textSize')
    if (saved) {
      const idx = parseInt(saved, 10)
      if (idx >= 0 && idx < SIZES.length) {
        setSizeIndex(idx)
        applySize(idx)
      }
    }
    setMounted(true)
  }, [])

  function applySize(idx: number) {
    document.documentElement.style.setProperty('--prose-size', SIZES[idx].value)
  }

  function decrease() {
    if (sizeIndex <= 0) return
    const next = sizeIndex - 1
    setSizeIndex(next)
    applySize(next)
    localStorage.setItem('textSize', String(next))
  }

  function increase() {
    if (sizeIndex >= SIZES.length - 1) return
    const next = sizeIndex + 1
    setSizeIndex(next)
    applySize(next)
    localStorage.setItem('textSize', String(next))
  }

  if (!mounted) return <div className="w-16 h-8" />

  return (
    <div className="flex items-center gap-0.5">
      <button
        onClick={decrease}
        disabled={sizeIndex <= 0}
        aria-label="Decrease text size"
        className="w-8 h-8 flex items-center justify-center rounded-md text-foreground/60 hover:text-foreground disabled:text-foreground/50 transition-colors text-xs font-bold"
      >
        A
      </button>
      <button
        onClick={increase}
        disabled={sizeIndex >= SIZES.length - 1}
        aria-label="Increase text size"
        className="w-8 h-8 flex items-center justify-center rounded-md text-foreground/60 hover:text-foreground disabled:text-foreground/50 transition-colors text-lg font-bold"
      >
        A
      </button>
    </div>
  )
}
