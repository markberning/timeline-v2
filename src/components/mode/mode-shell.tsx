'use client'

import { useState, useEffect } from 'react'
import { TL_KIND_LIVE, type TlKind } from '@/lib/navigator-tls'
import { ChronologyPage } from '@/components/chronology/chronology-page'
import { ModeSwitcher } from './mode-switcher'
import { ComingSoonDoor } from './coming-soon-door'
import { WarFrontDoor } from './war-front-door'

const STORAGE_KEY = 'active-mode'

function getInitialMode(): TlKind {
  if (typeof window === 'undefined') return 'civ'
  const saved = localStorage.getItem(STORAGE_KEY) as TlKind | null
  // Only restore a vertical that is actually live — never strand a reload
  // on a coming-soon door.
  if (saved && TL_KIND_LIVE[saved]) return saved
  return 'civ'
}

/**
 * Phase-2 mode-switcher shell. Owns the active vertical and renders its
 * front door. Civ is the only live door today; the rest fall through to a
 * coming-soon placeholder. Persists live modes only.
 */
export function ModeShell() {
  const [mode, setMode] = useState<TlKind>('civ')

  // Restore after mount so SSR markup (always 'civ') and the client agree.
  useEffect(() => {
    setMode(getInitialMode())
  }, [])

  const handleChange = (next: TlKind) => {
    setMode(next)
    try {
      if (TL_KIND_LIVE[next]) localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* localStorage unavailable — non-fatal */
    }
  }

  return (
    <div className="flex flex-col h-dvh bg-background text-foreground">
      <ModeSwitcher mode={mode} onChange={handleChange} />
      {mode === 'civ' ? <ChronologyPage /> : mode === 'war' ? <WarFrontDoor /> : <ComingSoonDoor kind={mode} />}
    </div>
  )
}
