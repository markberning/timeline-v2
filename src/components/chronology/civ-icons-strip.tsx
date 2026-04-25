'use client'

import { useCallback, useRef, useState } from 'react'

const ICONS = [
  '/icons/early-dynastic-egypt.png',
  '/icons/assyrian-empire.png',
  '/icons/persian-empire.png',
  '/icons/ancient-japan.png',
  '/icons/indus-valley.png',
  '/icons/early-andean-civilizations.png',
  '/icons/ancient-rome.png',
  '/icons/carthage.png',
  '/icons/maya-civilization.png',
  '/icons/viking-age.png',
  '/icons/mesopotamia.png',
  '/icons/celtic-cultures.png',
  '/icons/scythians.png',
  '/icons/ancient-israel.png',
  '/icons/aztec-empire.png',
  '/icons/olmec-civilization.png',
  '/icons/khmer-empire.png',
  '/icons/ancient-china.png',
  '/icons/islamic-golden-age.png',
  '/icons/phoenicia.png',
  '/icons/tang-song-china.png',
  '/icons/hittite-empire.png',
  '/icons/delhi-sultanate.png',
  '/icons/mughal-empire.png',
  '/icons/modern-india.png',
  '/icons/yuan-dynasty.png',
  '/icons/ming-dynasty.png',
  '/icons/qing-dynasty.png',
  '/icons/chinese-revolution.png',
  '/icons/ancient-korea.png',
  '/icons/srivijaya.png',
  '/icons/majapahit.png',
  '/icons/kievan-rus.png',
  '/icons/renaissance-italy.png',
  '/icons/scientific-revolution.png',
  '/icons/enlightenment.png',
  '/icons/russian-empire.png',
  '/icons/industrial-revolution.png',
  '/icons/zapotec-civilization.png',
  '/icons/teotihuacan.png',
  '/icons/ancestral-puebloans.png',
  '/icons/mississippian-culture.png',
  // Batch 3 — pending from master sheet
  '/icons/elamite-civilization.png',
  '/icons/ancient-greece.png',
  '/icons/inca-empire.png',
  '/icons/dai-viet.png',
  '/icons/medieval-europe.png',
  '/icons/polynesian-voyagers.png',
  '/icons/mali-empire.png',
  '/icons/ottoman-empire.png',
  // Batch 4
  '/icons/ancient-nubia.png',
  '/icons/kingdom-of-aksum.png',
  '/icons/meiji-japan.png',
  '/icons/early-american-republic.png',
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
  // Desktop: show all shuffled icons (no repeat needed at 51)
  const desktopIcons = repeatToFill(icons, 51)

  return (
    <div
      ref={containerRef}
      onClick={reshuffle}
      className="flex items-center justify-center gap-3 lg:gap-4 py-1.5 overflow-hidden shrink-0 cursor-pointer"
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
