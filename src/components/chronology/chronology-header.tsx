'use client'

import { DarkModeToggle } from '@/components/dark-mode-toggle'

interface ChronologyHeaderProps {
  isDesktop: boolean
}

export function ChronologyHeader({ isDesktop }: ChronologyHeaderProps) {
  return (
    <header className="px-5 pt-5 pb-3 lg:px-8 lg:pt-8 lg:pb-4 flex items-start justify-between shrink-0">
      <div>
        <div className="text-[10px] lg:text-xs font-semibold tracking-[0.15em] uppercase text-foreground/40">
          Stuff Happened
        </div>
        <h1 className="text-3xl lg:text-[44px] italic font-[family-name:var(--font-lora)] text-foreground mt-1 leading-tight">
          Historica
        </h1>
        <p className="text-sm lg:text-base text-foreground/50 mt-1">
          a library of civilizations
        </p>
      </div>
      <div className="shrink-0 mt-1 flex items-center gap-3">
        <a
          href="/globe"
          className="text-foreground/40 hover:text-foreground/70 text-xs font-semibold tracking-wider uppercase transition-colors"
        >
          Globe
        </a>
        <DarkModeToggle />
      </div>
    </header>
  )
}
