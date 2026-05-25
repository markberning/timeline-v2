'use client'

// Art mode front door — two screens behind one segmented toggle:
//   Eras — the "browse by era" hub (read straight through, or jump to the
//          famous stuff, or pick one of the 8 eras).
//   Tree — the influence "climb" (one hop at a time: what a movement grew out
//          of, above; what it led to, below). Re-centre by tapping a node.
// Ported from the original mockup (samples/Historica.zip → art.jsx) into the
// app's CSS-var theming, fonts, and accent palette. See audits/art-vertical.md.

import { useState } from 'react'
import Link from 'next/link'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { ART_ACCENT, ART_ERAS, ART_CHIPS, ART_CLIMB, artAlpha, type ClimbNode } from '@/lib/art-data'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'

const MUTED = 'color-mix(in srgb, var(--foreground) 70%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 40%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 12%, transparent)'
const BORDER_STRONG = 'color-mix(in srgb, var(--foreground) 22%, transparent)'
const CARD_BG = 'color-mix(in srgb, var(--foreground) 4%, transparent)'
const CHIP = 'color-mix(in srgb, var(--foreground) 6%, transparent)'

// A gradient placeholder tile (the mockup's PaintingTile). Real imagery swaps
// in here later; for now every era/node shows its three-colour palette.
function PaintingTile({ palette, label, ratio = '1/1' }: { palette: [string, string, string]; label?: string; ratio?: string }) {
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: ratio, borderRadius: 6, overflow: 'hidden', background: `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})` }}>
      {label && (
        <div style={{ position: 'absolute', left: 6, right: 6, bottom: 5, fontFamily: SANS, fontSize: 8, fontWeight: 700, letterSpacing: 0.6, color: 'rgba(255,255,255,0.78)', textTransform: 'uppercase', lineHeight: 1.2, textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>{label}</div>
      )}
    </div>
  )
}

// ── segmented Eras | Tree toggle ──
type View = 'eras' | 'tree'
function ViewToggle({ view, onView }: { view: View; onView: (v: View) => void }) {
  const chipActive = 'color-mix(in srgb, var(--foreground) 14%, var(--background))'
  return (
    <div style={{ display: 'flex', flex: 1, background: CHIP, border: `1px solid ${BORDER}`, borderRadius: 999, padding: 2, gap: 2, maxWidth: 240 }}>
      {(['eras', 'tree'] as View[]).map(v => {
        const active = v === view
        return (
          <button key={v} onClick={() => onView(v)} style={{
            flex: 1, appearance: 'none', border: 'none', borderRadius: 999, cursor: 'pointer',
            background: active ? chipActive : 'transparent', color: active ? 'var(--foreground)' : MUTED,
            fontFamily: SANS, fontWeight: active ? 600 : 500, fontSize: 11.5, letterSpacing: 0.2, padding: '4px 0',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, textTransform: 'capitalize',
          }}>
            {v === 'eras'
              ? <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><rect x="4" y="5" width="16" height="3.2" rx="1.2" fill="currentColor" /><rect x="4" y="10.4" width="16" height="3.2" rx="1.2" fill="currentColor" opacity="0.75" /><rect x="4" y="15.8" width="11" height="3.2" rx="1.2" fill="currentColor" opacity="0.5" /></svg>
              : <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="5" r="2.4" fill="currentColor" /><circle cx="5" cy="19" r="2.4" fill="currentColor" /><circle cx="19" cy="19" r="2.4" fill="currentColor" /><path d="M12 7.4v4.6M12 12l-5.6 4.8M12 12l5.6 4.8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>}
            {v}
          </button>
        )
      })}
    </div>
  )
}

// ═════════════════════════════════════════════════════════════
// A. Era Hub — browse by era. The intro (hero + primary action + chips) is shown
// above the Eras/Tree toggle; the era cards (ArtEraList) sit just below it.
// ═════════════════════════════════════════════════════════════
function ArtHubIntro() {
  return (
    <>
      {/* Hero */}
      <div style={{ padding: '18px 18px 8px' }}>
        <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.4 }}>Art · Browse by era</div>
        <h1 style={{ margin: '8px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 28, lineHeight: 1.12, letterSpacing: -0.4 }}>Forty thousand years of people making stuff.</h1>
        <p style={{ margin: '10px 0 0', fontFamily: SERIF, fontSize: 14.5, lineHeight: 1.55, color: MUTED, maxWidth: 520 }}>
          Read it straight through, or skip to the parts everyone already has opinions about.
        </p>
      </div>

      {/* Primary action */}
      <div style={{ padding: '16px 18px 6px' }}>
        <Link href="/art/pre" style={{
          width: '100%', boxSizing: 'border-box', textDecoration: 'none',
          background: 'var(--foreground)', color: 'var(--background)',
          padding: '14px 16px', borderRadius: 10,
          fontFamily: SERIF, fontSize: 15.5, fontWeight: 500, letterSpacing: -0.1,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span>Start from the beginning</span>
          <span style={{ fontFamily: SANS, fontSize: 16 }}>→</span>
        </Link>
      </div>

      {/* Famous-stuff chips */}
      <div style={{ padding: '12px 0 4px' }}>
        <div style={{ padding: '0 18px 8px', fontFamily: SANS, fontSize: 11, letterSpacing: 0.5, fontWeight: 600, color: FAINT, textTransform: 'uppercase' }}>Jump to the famous stuff</div>
        <div style={{ display: 'flex', gap: 8, padding: '0 18px 4px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {ART_CHIPS.map(c => (
            <Link key={c.label} href={`/art/${c.eraId}`} style={{
              padding: '8px 12px', borderRadius: 999, border: `1px solid ${BORDER_STRONG}`, background: CHIP,
              color: 'var(--foreground)', textDecoration: 'none', fontFamily: SANS, fontSize: 12.5, fontWeight: 500, whiteSpace: 'nowrap', flexShrink: 0,
            }}>{c.label}</Link>
          ))}
        </div>
      </div>
    </>
  )
}

function ArtEraList() {
  return (
    <div>
      {/* Era cards */}
      <div style={{ padding: '4px 18px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {ART_ERAS.map((era, i) => (
          <Link key={era.id} href={`/art/${era.id}`} style={{
            display: 'flex', alignItems: 'stretch', gap: 12, padding: 10, borderRadius: 10,
            border: `1px solid ${BORDER}`, background: CARD_BG, textAlign: 'left', color: 'var(--foreground)', textDecoration: 'none',
          }}>
            <div style={{ width: 78, flexShrink: 0 }}>
              <PaintingTile palette={era.palette} label={era.name} />
            </div>
            <div style={{ flex: 1, minWidth: 0, padding: '2px 0' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                <div style={{ fontFamily: SERIF, fontSize: 17, lineHeight: 1.15, color: 'var(--foreground)', letterSpacing: -0.1 }}>{era.name}</div>
                <div style={{ fontFamily: SANS, fontSize: 10.5, color: FAINT, letterSpacing: 0.3, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</div>
              </div>
              <div style={{ marginTop: 2, fontFamily: SANS, fontSize: 11, color: MUTED, letterSpacing: 0.2 }}>{era.range}</div>
              <div style={{ marginTop: 6, fontFamily: SERIF, fontSize: 13, lineHeight: 1.45, color: MUTED }}>{era.hook}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// ═════════════════════════════════════════════════════════════
// B. Climb tree — the influence lens
// ═════════════════════════════════════════════════════════════
function ClimbTile({ item }: { item: ClimbNode }) {
  return (
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div style={{ width: '100%' }}><PaintingTile palette={item.palette} /></div>
      <div style={{ fontFamily: SERIF, fontSize: 12.5, lineHeight: 1.15, color: 'var(--foreground)', textAlign: 'center', letterSpacing: -0.1 }}>{item.name}</div>
      <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 0.3, color: FAINT, textAlign: 'center', marginTop: -2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>{item.range}</div>
    </div>
  )
}

// The branch connector between a 3-node row and the centre card.
function Connector({ color, direction }: { color: string; direction: 'down' | 'up' }) {
  return (
    <div style={{ padding: '0 18px' }}>
      <div style={{ position: 'relative', height: 22 }}>
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: artAlpha(color, 0.55) }} />
        {[0.142, 0.5, 0.858].map((x, i) => (
          <div key={i} style={{ position: 'absolute', left: `calc(${x * 100}% - 0.5px)`, top: direction === 'down' ? 0 : 11, height: 11, width: 1, background: artAlpha(color, 0.55) }} />
        ))}
        <div style={{ position: 'absolute', left: '14.2%', right: '14.2%', top: 10.5, height: 1, background: artAlpha(color, 0.55) }} />
      </div>
    </div>
  )
}

function DirLabel({ text, accent, dir }: { text: string; accent: string; dir: 'up' | 'down' }) {
  return (
    <div style={{ padding: dir === 'up' ? '14px 18px 8px' : '4px 18px 8px', display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ fontFamily: SANS, fontSize: 10.5, letterSpacing: 1.4, fontWeight: 700, color: artAlpha(accent, 0.95), textTransform: 'uppercase', whiteSpace: 'nowrap' }}>{text}</div>
      <div style={{ flex: 1, height: 1, background: BORDER }} />
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ color: artAlpha(accent, 0.95) }}>
        {dir === 'up'
          ? <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          : <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />}
      </svg>
    </div>
  )
}

function ArtClimb() {
  const c = ART_CLIMB.current
  const accent = c.accent
  return (
    <div>
      {/* "grew out of ↑" */}
      <DirLabel text="Grew out of" accent={accent} dir="up" />
      <div style={{ padding: '0 18px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {ART_CLIMB.parents.map(p => <ClimbTile key={p.name} item={p} />)}
      </div>

      <Connector color={accent} direction="down" />

      {/* centre card */}
      <div style={{ padding: '0 18px' }}>
        <div style={{
          borderRadius: 12, overflow: 'hidden', border: `1px solid ${artAlpha(accent, 0.55)}`, background: CARD_BG,
          boxShadow: `0 0 0 4px ${artAlpha(accent, 0.1)}, 0 8px 24px rgba(0,0,0,0.28)`,
        }}>
          <div style={{ aspectRatio: '16/9' }}><PaintingTile palette={c.palette} label={c.label} ratio="16/9" /></div>
          <div style={{ padding: '12px 14px 14px' }}>
            <span style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.4, fontWeight: 700, color: accent, textTransform: 'uppercase' }}>{c.era} · Movement</span>
            <div style={{ marginTop: 4, fontFamily: SERIF, fontSize: 22, lineHeight: 1.1, letterSpacing: -0.3, color: 'var(--foreground)' }}>{c.name}</div>
            <div style={{ marginTop: 2, fontFamily: SERIF, fontStyle: 'italic', fontSize: 14, color: FAINT }}>{c.range}</div>
            <p style={{ margin: '8px 0 12px', fontFamily: SERIF, fontSize: 14, lineHeight: 1.5, color: MUTED }}>{c.hook}</p>
            <Link href={`/art/mod/${c.id}`} style={{
              padding: '11px 14px', borderRadius: 8, background: accent, color: '#fff', textDecoration: 'none',
              fontFamily: SANS, fontWeight: 600, fontSize: 13, letterSpacing: 0.5, textTransform: 'uppercase',
              display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              Read this
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>
        </div>
      </div>

      <Connector color={accent} direction="up" />

      {/* "led to ↓" */}
      <DirLabel text="Led to" accent={accent} dir="down" />
      <div style={{ padding: '0 18px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {ART_CLIMB.children.map(p => <ClimbTile key={p.name} item={p} />)}
      </div>

      <div style={{ margin: '24px 18px', padding: '10px 12px', borderRadius: 8, border: `1px dashed ${BORDER_STRONG}`, fontFamily: SANS, fontSize: 11, color: MUTED, textAlign: 'center', letterSpacing: 0.2 }}>
        The influence tree. Tapping a node to climb a step is coming next.
      </div>
    </div>
  )
}

// ═════════════════════════════════════════════════════════════
export function ArtFrontDoor({ showToggle = true }: { showToggle?: boolean } = {}) {
  const [view, setView] = useState<View>('eras')
  return (
    <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: 'var(--background)', color: 'var(--foreground)' }}>
      <ArtHubIntro />
      {/* Eras/Tree toggle — sits at the top of the era list (compact) */}
      <div style={{ padding: '8px 18px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <ViewToggle view={view} onView={setView} />
        {showToggle && <DarkModeToggle />}
      </div>
      {view === 'eras' ? <ArtEraList /> : <ArtClimb />}
    </div>
  )
}

export { ART_ACCENT }
