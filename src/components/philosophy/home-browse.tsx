'use client'

// The ways to browse the corpus, behind a segmented toggle so the home stops
// stacking everything at once. "Schools" = browse by lineage; "Thinkers" = every
// mind, chronologically; "Tree" = the argument map (the 2,600-year who-taught-whom
// graph). The chronological era list stays pinned below this, in page.tsx.

import { useState } from 'react'
import Link from 'next/link'
import { ArgumentMap } from '@/components/philosophy/argument-map'
import { SCHOOLS, THINKERS, thinkersOfSchool, schoolById, schoolColor } from '@/lib/philosophy-data'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const INK = 'var(--foreground)'
const MUTED = 'color-mix(in srgb, var(--foreground) 78%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 14%, transparent)'
const CARD = 'color-mix(in srgb, var(--foreground) 4%, transparent)'
const ACCENT = '#a08423'

type View = 'schools' | 'thinkers' | 'eras' | 'tree'

const ALL_THINKERS = Object.values(THINKERS).slice().sort((a, b) => a.born - b.born)

type Era = { id: string; numeral: string; range: string; title: string; hook: string; tint: string }
const ERAS: Era[] = [
  { id: 'greeks', numeral: 'I', range: '585 BC – 529 AD', title: 'The Greeks', hook: 'The first people to explain the world without gods, and the long argument that started.', tint: '#7c6a2e' },
  { id: 'faith-reason', numeral: 'II', range: '354 – 1347', title: 'Faith meets reason', hook: 'A thousand years of faith and reason needing each other and pulling apart, across three religions.', tint: '#9a6a32' },
  { id: 'rationalists-empiricists', numeral: 'III', range: '1619 – 1776', title: 'The rationalists and the empiricists', hook: 'Six minds rebuild knowledge from scratch, and a Scotsman shows the foundation might not hold.', tint: '#5f6b3a' },
  { id: 'kant-germans', numeral: 'IV', range: '1781 – 1860', title: 'Kant and the Germans', hook: 'The mind builds the world it sees, Spirit moves through history, and the world is blind will.', tint: '#6b5d2e' },
  { id: 'nineteenth-century', numeral: 'V', range: '1843 – 1900', title: 'The nineteenth century', hook: 'Liberty, the leap, alienation, and the death of God that ends the arc.', tint: '#8a4f3f' },
]

export function HomeBrowse() {
  const [view, setView] = useState<View>('eras')

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
          <Seg label="Eras" hint="read in order" active={view === 'eras'} onClick={() => setView('eras')} />
          <Seg label="Schools" hint="by lineage" active={view === 'schools'} onClick={() => setView('schools')} />
          <Seg label="Thinkers" hint="every mind" active={view === 'thinkers'} onClick={() => setView('thinkers')} />
          <Seg label="Tree" hint="the map" active={view === 'tree'} onClick={() => setView('tree')} />
        </div>
      </div>

      {view === 'tree' && (
        <div style={{ padding: '10px 0 8px' }}>
          <ArgumentMap />
        </div>
      )}

      {view === 'schools' && (
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

      {view === 'thinkers' && (
        <div style={{ padding: '14px 16px 6px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {ALL_THINKERS.map(t => {
              const c = schoolColor(t.school)
              return (
                <Link key={t.id} href={`/philosophy/thinker/${t.id}`} style={{
                  display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 10,
                  border: `1px solid ${BORDER}`, background: CARD, textDecoration: 'none', color: INK,
                }}>
                  <span aria-hidden style={{
                    width: 38, height: 38, flexShrink: 0, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: `linear-gradient(150deg, ${c}, color-mix(in srgb, ${c} 45%, #211f1b))`,
                    fontFamily: SERIF, fontSize: 18, fontWeight: 600, color: 'rgba(255,255,255,.92)', textShadow: '0 1px 2px rgba(0,0,0,.35)',
                  }}>{t.glyph}</span>
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                      <b style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{t.name}</b>
                      <span style={{ fontFamily: SANS, fontSize: 10.5, color: FAINT, flexShrink: 0 }}>{t.dates}</span>
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                      <span style={{ width: 7, height: 7, borderRadius: 2, background: c, flexShrink: 0 }} />
                      <span style={{ fontFamily: SANS, fontSize: 11, color: FAINT, whiteSpace: 'nowrap' }}>{schoolById(t.school)?.name}</span>
                    </span>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      )}

      {view === 'eras' && (
        <div style={{ padding: '14px 16px 6px' }}>
          <p style={{ fontFamily: SANS, fontSize: 14, color: FAINT, margin: '0 0 12px' }}>The five eras, in order: the whole story as one narrative.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            {ERAS.map(era => (
              <Link key={era.id} href={`/philosophy/${era.id}`} style={{
                display: 'flex', alignItems: 'stretch', gap: 12, padding: 10, borderRadius: 10,
                border: `1px solid ${BORDER}`, background: CARD, textDecoration: 'none', color: INK,
              }}>
                <div aria-hidden style={{
                  width: 52, flexShrink: 0, alignSelf: 'stretch', minHeight: 72, borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `linear-gradient(150deg, ${era.tint}, color-mix(in srgb, ${era.tint} 52%, #211f1b))`,
                  fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: 'rgba(255,255,255,.92)', textShadow: '0 1px 3px rgba(0,0,0,.35)',
                }}>{era.numeral}</div>
                <div style={{ flex: 1, minWidth: 0, padding: '2px 0' }}>
                  <div style={{ fontFamily: SANS, fontSize: 11, color: FAINT, letterSpacing: '.3px' }}>{era.range}</div>
                  <div style={{ fontFamily: SERIF, fontSize: 16.5, fontWeight: 600, lineHeight: 1.16, margin: '3px 0 0', letterSpacing: -0.1 }}>{era.title}</div>
                  <div style={{ fontFamily: SERIF, fontSize: 13, lineHeight: 1.45, color: MUTED, margin: '6px 0 0' }}>{era.hook}</div>
                </div>
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
        flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1,
        padding: '7px 8px', borderRadius: 8, border: 'none', cursor: 'pointer',
        background: active ? `color-mix(in srgb, ${ACCENT} 18%, transparent)` : 'transparent',
        boxShadow: active ? `inset 0 0 0 1px color-mix(in srgb, ${ACCENT} 55%, transparent)` : 'none',
        transition: 'background .15s ease',
      }}
    >
      <span style={{ fontFamily: SANS, fontSize: 13, fontWeight: 700, letterSpacing: '.2px', color: active ? INK : MUTED }}>{label}</span>
      <span style={{ fontFamily: SANS, fontSize: 11, lineHeight: 1.25, color: active ? MUTED : FAINT }}>{hint}</span>
    </button>
  )
}
