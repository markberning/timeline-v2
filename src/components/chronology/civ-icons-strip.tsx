'use client'

import { useCallback, useRef, useState } from 'react'

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
  '/icons/triskelion.png',
  '/icons/horseman.png',
  '/icons/menorah.png',
  '/icons/quetzalcoatl.png',
  '/icons/olmec-head.png',
  '/icons/angkor.png',
  '/icons/junk.png',
  '/icons/mosque.png',
  '/icons/dhow.png',
  '/icons/pagoda.png',
]

const MOBILE_COUNT = 7

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** Repeat the array enough times to fill `count` slots */
function repeatToFill<T>(arr: T[], count: number): T[] {
  const result: T[] = []
  while (result.length < count) {
    for (const item of arr) {
      result.push(item)
      if (result.length >= count) break
    }
  }
  return result
}

export function CivIconsStrip() {
  const [icons, setIcons] = useState(() => shuffle(ICONS))
  const containerRef = useRef<HTMLDivElement>(null)

  const reshuffle = useCallback(() => {
    setIcons(shuffle(ICONS))
  }, [])

  // Mobile: first 7 from the shuffled array
  // Desktop: repeat all 21 shuffled icons to fill the row
  const desktopIcons = repeatToFill(icons, 42)

  return (
    <div
      ref={containerRef}
      onClick={reshuffle}
      className="flex items-center justify-center gap-3 lg:gap-4 py-1.5 overflow-hidden shrink-0 opacity-60 cursor-pointer"
    >
      {/* Mobile: show 7 */}
      {icons.slice(0, MOBILE_COUNT).map((src, i) => (
        <img
          key={`m-${i}-${src}`}
          src={src}
          alt=""
          aria-hidden="true"
          className="h-10 w-auto shrink-0 select-none lg:hidden"
          draggable={false}
        />
      ))}
      {/* Desktop: repeat to fill */}
      {desktopIcons.map((src, i) => (
        <img
          key={`d-${i}-${src}`}
          src={src}
          alt=""
          aria-hidden="true"
          className="h-12 w-auto shrink-0 select-none hidden lg:block"
          draggable={false}
        />
      ))}
    </div>
  )
}
