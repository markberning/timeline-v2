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

          <span className="text-foreground/15" style={{ fontSize: 18, fontStyle: 'normal' }}>|</span>

          <button
            className="cursor-pointer transition-all duration-200"
            style={{
              paddingBottom: 2,
              borderBottom: ribbonMode === 'timeline' ? '2px solid var(--foreground)' : '2px solid transparent',
              color: ribbonMode === 'timeline' ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 35%, transparent)',
            }}
            onClick={() => onRibbonModeChange('timeline')}
          >
            Timelines
          </button>
          <button
            className="cursor-pointer transition-all duration-200"
            style={{
              paddingBottom: 2,
              borderBottom: ribbonMode === 'chains' ? '2px solid var(--foreground)' : '2px solid transparent',
              color: ribbonMode === 'chains' ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 35%, transparent)',
            }}
            onClick={() => onRibbonModeChange('chains')}
          >
            Chains
          </button>
        </nav>
      </div>
      <DarkModeToggle />
    </header>
  )
}
