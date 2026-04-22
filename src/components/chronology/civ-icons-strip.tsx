'use client'

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

export function CivIconsStrip() {
  return (
    <div className="flex items-center justify-center gap-3 lg:gap-5 py-1.5 overflow-hidden shrink-0 opacity-60">
      {ICONS.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          aria-hidden="true"
          className="h-7 lg:h-9 w-auto shrink-0 select-none"
          draggable={false}
        />
      ))}
    </div>
  )
}
