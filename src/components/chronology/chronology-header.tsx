'use client'

import { DarkModeToggle } from '@/components/dark-mode-toggle'

interface ChronologyHeaderProps {
  isDesktop: boolean
}

export function ChronologyHeader({ isDesktop }: ChronologyHeaderProps) {
  return (
    <header className="px-5 pt-5 pb-3 lg:px-8 lg:pt-8 lg:pb-4 flex items-start justify-between shrink-0">
      <div>
        <div className="text-[10px] lg:text-xs font-semibold tracking-[0.15em] uppercase text-foreground/40 mb-1">
          Stuff Happened
        </div>
        <h1 className="text-[28px] lg:text-[40px] italic font-[family-name:var(--font-lora)] text-foreground leading-tight">
          Historica
        </h1>
        <nav className="flex items-center gap-5 mt-2 font-[family-name:var(--font-lora)] italic text-[15px] lg:text-[17px]">
          <span className="text-foreground border-b-2 border-foreground pb-0.5">
            List View
          </span>
          <a
            href="/globe"
            className="text-foreground/35 hover:text-foreground/60 border-b-2 border-transparent hover:border-foreground/30 pb-0.5 transition-all duration-200"
          >
            Globe View
          </a>
        </nav>
      </div>
      <div className="shrink-0 mt-2">
        <DarkModeToggle />
      </div>
    </header>
  )
}
