'use client'

// The two ways to browse the corpus, behind a segmented toggle so the home
// stops stacking everything at once. "Tree" = the argument map (the 2,600-year
// who-taught-whom graph); "Schools" = the flat school › thinker › work list.
// The chronological era list stays pinned below this, in page.tsx.

import { useState } from 'react'
import Link from 'next/link'
import { ArgumentMap } from '@/components/philosophy/argument-map'
import { SCHOOLS, thinkersOfSchool } from '@/lib/philosophy-data'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const INK = 'var(--foreground)'
const MUTED = 'color-mix(in srgb, var(--foreground) 78%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 14%, transparent)'
const CARD = 'color-mix(in srgb, var(--foreground) 4%, transparent)'
const ACCENT = '#a08423'

type View = 'tree' | 'schools'

export function HomeBrowse() {
  const [view, setView] = useState<View>('tree')

  return (
    <div>
      {/* segmented toggle */}
      <div style={{ padding: '6px 16px 0' }}>
        <div
          role="tablist"
          aria-label="Browse the argument"
          style={{
            display: 'flex', gap: 4, padding: 4, borderRadius: 11,
            border: `1px solid ${BORDER}`, background: CARD,
          }}
        >
          <Seg label="Tree" hint="the conversation, mapped" active={view === 'tree'} onClick={() => setView('tree')} />
          <Seg label="Schools" hint="by lineage" active={view === 'schools'} onClick={() => setView('schools')} />
        </div>
      </div>

      {view === 'tree' ? (
        <div style={{ padding: '10px 0 8px' }}>
          <ArgumentMap />
        </div>
      ) : (
        <div style={{ padding: '14px 16px 6px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {SCHOOLS.map(s => (
              <Link key={s.id} href={`/philosophy/school/${s.id}`} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '11px 12px', borderRadius: 10,
                border: `1px solid ${BORDER}`, background: CARD, textDecoration: 'none', color: INK,
              }}>
                <span aria-hidden style={{ width: 14, height: 36, flexShrink: 0, borderRadius: 4, background: `linear-gradient(${s.color}, color-mix(in srgb, ${s.color} 55%, #211f1b))` }} />
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                    <b style={{ fontFamily: SERIF, fontSize: 16.5, fontWeight: 600 }}>{s.name}</b>
                    <span style={{ fontFamily: SANS, fontSize: 10.5, color: FAINT, flexShrink: 0 }}>{thinkersOfSchool(s.id).length} · {s.range}</span>
                  </span>
                  <span style={{ display: 'block', fontFamily: SERIF, fontSize: 13, color: MUTED, marginTop: 3, lineHeight: 1.4 }}>{s.oneLine}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function Seg({ label, hint, active, onClick }: { label: string; hint: string; active: boolean; onClick: () => void }) {
  return (
    <button
      role="tab"
      aria-selected={active}
      onClick={onClick}
      style={{
        flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
        padding: '7px 8px', borderRadius: 8, border: 'none', cursor: 'pointer',
        background: active ? `color-mix(in srgb, ${ACCENT} 18%, transparent)` : 'transparent',
        boxShadow: active ? `inset 0 0 0 1px color-mix(in srgb, ${ACCENT} 55%, transparent)` : 'none',
        transition: 'background .15s ease',
      }}
    >
      <span style={{ fontFamily: SANS, fontSize: 12.5, fontWeight: 700, letterSpacing: '.3px', color: active ? ACCENT : MUTED }}>{label}</span>
      <span style={{ fontFamily: SANS, fontSize: 10, color: FAINT }}>{hint}</span>
    </button>
  )
}
