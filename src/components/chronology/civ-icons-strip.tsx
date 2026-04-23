'use client'

import { useMemo } from 'react'

const ICONS = [
  '/icons/sphinx.png',
  '/icons/lamassu.png',
  '/icons/faravahar.png',
  '/icons/torii.png',
  '/icons/lotus.png',
  '/icons/mountains.png',
  '/icons/colosseum.png',
  '/icons/horse.png',
  '/icons/maya-temple.png',
  '/icons/viking-ship.png',
  '/icons/mesopotamia.png',
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function CivIconsStrip() {
  const shuffled = useMemo(() => shuffle(ICONS), [])

  return (
    <div className="flex items-center justify-center gap-3 lg:gap-5 py-1.5 overflow-hidden shrink-0 opacity-60">
      {shuffled.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className="h-10 lg:h-12 w-auto shrink-0 select-none"
          draggable={false}
        />
      ))}
    </div>
  )
}
