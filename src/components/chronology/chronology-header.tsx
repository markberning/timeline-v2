'use client'

import { DarkModeToggle } from '@/components/dark-mode-toggle'

interface ChronologyHeaderProps {
  isDesktop: boolean
  ribbonMode: 'timeline' | 'chains'
  onRibbonModeChange: (mode: 'timeline' | 'chains') => void
}

export function ChronologyHeader({ isDesktop, ribbonMode, onRibbonModeChange }: ChronologyHeaderProps) {
  return (
    <header
      className="flex items-start justify-between shrink-0"
      style={{ padding: '20px 20px 12px' }}
    >
      <div>
        <div
          className="font-[family-name:var(--font-geist-sans)]"
          style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase' as const, color: 'var(--foreground)', opacity: 0.4, marginBottom: 4 }}
        >
          Stuff Happened
        </div>
        <h1
          className="font-[family-name:var(--font-lora)]"
          style={{ fontSize: 28, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.15, color: 'var(--foreground)' }}
        >
          Historica
        </h1>
        <nav
          className="font-[family-name:var(--font-lora)]"
          style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 8, fontSize: 15, fontStyle: 'italic' }}
        >
          <span style={{ color: 'var(--foreground)', paddingBottom: 2, borderBottom: '2px solid var(--foreground)' }}>
            List View
          </span>
          <a
            href="/globe"
            className="transition-all duration-200"
            style={{ color: 'color-mix(in srgb, var(--foreground) 35%, transparent)', paddingBottom: 2, borderBottom: '2px solid transparent', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'color-mix(in srgb, var(--foreground) 60%, transparent)'; e.currentTarget.style.borderBottomColor = 'color-mix(in srgb, var(--foreground) 30%, transparent)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'color-mix(in srgb, var(--foreground) 35%, transparent)'; e.currentTarget.style.borderBottomColor = 'transparent' }}
          >
            Globe View
          </a>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Timeline / Chains slider toggle */}
          <div
            className="font-[family-name:var(--font-geist-sans)] relative flex items-center"
            style={{ borderRadius: 6, backgroundColor: 'color-mix(in srgb, var(--foreground) 8%, transparent)', padding: 2 }}
          >
            <div
              className="absolute transition-transform duration-200 ease-in-out"
              style={{
                width: 'calc(50% - 2px)',
                height: 'calc(100% - 4px)',
                top: 2,
                left: 2,
                borderRadius: 4,
                backgroundColor: 'var(--foreground)',
                opacity: 0.12,
                transform: ribbonMode === 'chains' ? 'translateX(100%)' : 'translateX(0)',
              }}
            />
            <button
              className="relative z-[1] text-center cursor-pointer py-0.5 px-2"
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.05em',
                fontStyle: 'normal',
                color: ribbonMode === 'timeline' ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 40%, transparent)',
              }}
              onClick={() => onRibbonModeChange('timeline')}
            >
              Timelines
            </button>
            <button
              className="relative z-[1] text-center cursor-pointer py-0.5 px-2"
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: '0.05em',
                fontStyle: 'normal',
                color: ribbonMode === 'chains' ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 40%, transparent)',
              }}
              onClick={() => onRibbonModeChange('chains')}
            >
              Chains
            </button>
          </div>
        </nav>
      </div>
      <DarkModeToggle />
    </header>
  )
}
