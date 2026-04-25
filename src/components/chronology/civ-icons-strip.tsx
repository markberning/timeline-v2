'use client'

import { useCallback, useRef, useState } from 'react'

const ICONS = [
  '/icons/early-dynastic-egypt.png',
  '/icons/assyrian-empire.png',
  '/icons/persian-empire.png',
  '/icons/ancient-japan.png',
  '/icons/indus-valley.png',
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

const MOBILE_COUNT = 5

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function labelFromPath(src: string): string {
  return src.replace('/icons/', '').replace('.png', '')
    .replace('early-dynastic-', 'E.')
    .replace('early-andean-civilizations', 'E.Andean')
    .replace('early-american-republic', 'E.US')
    .replace('-civilization', '')
    .replace('-empire', '')
    .replace('ancient-', 'A.')
    .replace('islamic-golden-age', 'Islam GA')
    .replace('chinese-revolution', 'China Rev')
    .replace('industrial-revolution', 'Indust Rev')
    .replace('scientific-revolution', 'Sci Rev')
    .replace('renaissance-italy', 'Ren Italy')
    .replace('kingdom-of-aksum', 'Aksum')
    .replace('polynesian-voyagers', 'Polynesia')
    .replace('mississippian-culture', 'Mississip')
    .replace('ancestral-puebloans', 'Puebloans')
    .replace('medieval-europe', 'Med Europe')
    .replace('modern-india', 'Mod India')
    .replace('kievan-rus', 'Kiev Rus')
    .replace('russian-', 'Russ ')
    .replace('tang-song-china', 'Tang-Song')
    .replace(/-/g, ' ')
}

// Per-icon width overrides (Tailwind w- classes). Default is w-12.
const ICON_SIZE: Record<string, string> = {
  '/icons/early-dynastic-egypt.png': 'w-20',
  '/icons/persian-empire.png': 'w-16',
  '/icons/viking-age.png': 'w-16',
  '/icons/mesopotamia.png': 'w-16',
  '/icons/scythians.png': 'w-14',
  '/icons/ancient-rome.png': 'w-14',
  '/icons/carthage.png': 'w-14',
  '/icons/aztec-empire.png': 'w-14',
  '/icons/islamic-golden-age.png': 'w-14',
  '/icons/phoenicia.png': 'w-14',
  '/icons/mughal-empire.png': 'w-14',
  '/icons/ming-dynasty.png': 'w-14',
  '/icons/qing-dynasty.png': 'w-14',
  '/icons/srivijaya.png': 'w-14',
  '/icons/khmer-empire.png': 'w-14',
  '/icons/teotihuacan.png': 'w-14',
  '/icons/ancestral-puebloans.png': 'w-16',
  '/icons/mississippian-culture.png': 'w-16',
  '/icons/inca-empire.png': 'w-16',
  '/icons/enlightenment.png': 'w-10',
  '/icons/russian-empire.png': 'w-10',
  '/icons/hittite-empire.png': 'w-14',
  '/icons/tang-song-china.png': 'w-14',
  '/icons/early-american-republic.png': 'w-14',
  '/icons/meiji-japan.png': 'w-14',
  '/icons/mali-empire.png': 'w-14',
  '/icons/polynesian-voyagers.png': 'w-14',
  '/icons/dai-viet.png': 'w-14',
  '/icons/ottoman-empire.png': 'w-14',
  '/icons/renaissance-italy.png': 'w-11',
}

function sizeFor(src: string): string {
  return ICON_SIZE[src] ?? 'w-12'
}

export function CivIconsStrip() {
  const [icons, setIcons] = useState(() => shuffle(ICONS))
  const containerRef = useRef<HTMLDivElement>(null)

  const reshuffle = useCallback(() => {
    setIcons(shuffle(ICONS))
  }, [])

  return (
    <div
      ref={containerRef}
      onClick={reshuffle}
      className="flex items-end justify-around px-5 py-1.5 overflow-hidden shrink-0 cursor-pointer lg:justify-center lg:gap-6"
    >
      {/* Mobile: show 7 */}
      {icons.slice(0, MOBILE_COUNT).map((src, i) => {
        const sz = sizeFor(src)
        return (
          <div key={`m-${i}-${src}`} className={`${sz} shrink-0 flex flex-col items-center lg:hidden`}>
            <img src={src} alt="" aria-hidden="true" className={`${sz} h-auto select-none`} draggable={false} />
            <span className="text-[8px] leading-tight text-foreground/50 text-center mt-0.5 truncate w-full">{labelFromPath(src)}</span>
          </div>
        )
      })}
      {/* Desktop: all icons */}
      {icons.map((src, i) => {
        const sz = sizeFor(src)
        return (
          <div key={`d-${i}-${src}`} className={`${sz} shrink-0 flex-col items-center hidden lg:flex`}>
            <img src={src} alt="" aria-hidden="true" className={`${sz} h-auto select-none`} draggable={false} />
            <span className="text-[8px] leading-tight text-foreground/50 text-center mt-0.5 truncate w-full">{labelFromPath(src)}</span>
          </div>
        )
      })}
    </div>
  )
}
