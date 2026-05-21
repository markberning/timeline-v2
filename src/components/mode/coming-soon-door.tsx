'use client'

import { TL_KIND_LABELS, type TlKind } from '@/lib/navigator-tls'
import { DarkModeToggle } from '@/components/dark-mode-toggle'

// One-line, house-voice teaser per vertical. Each embodies how that mode's
// real front door will eventually work (see project_phase2_plan).
const TEASERS: Record<TlKind, string> = {
  civ: '',
  war: 'The conflicts that redrew the map — read as an escalating spine, from spark to aftermath.',
  art: 'A time-stamped influence tree: tap any work to see what it borrowed from and what it set off.',
  music: 'Era by era, sampleable — hear what each age actually sounded like.',
}

/** Placeholder front door for a vertical that hasn't shipped yet. */
export function ComingSoonDoor({ kind }: { kind: TlKind }) {
  return (
    <div className="flex-1 min-h-0 flex flex-col">
      <div className="flex justify-end shrink-0" style={{ padding: '12px 20px' }}>
        <DarkModeToggle />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-8" style={{ gap: 14 }}>
        <div
          className="font-[family-name:var(--font-geist-sans)]"
          style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.4 }}
        >
          Coming soon
        </div>
        <h2
          className="font-[family-name:var(--font-lora)]"
          style={{ fontSize: 34, fontStyle: 'italic', fontWeight: 400, lineHeight: 1.1 }}
        >
          {TL_KIND_LABELS[kind]}
        </h2>
        <p
          className="font-[family-name:var(--font-lora)]"
          style={{ fontSize: 16, maxWidth: 380, opacity: 0.6, lineHeight: 1.55 }}
        >
          {TEASERS[kind]}
        </p>
      </div>
    </div>
  )
}
