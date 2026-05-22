'use client'

// PREVIEW — the WAR INTERIOR spine (level 2 of 3). The mode front door is a
// spine of wars; this is one war's spine: its sections + battles, node TYPE =
// war category (color), node SIZE = significance (Gettysburg xl, a skirmish s).
// Clicking a node → the narrative reader (level 3). Civil War sample content.

import { DarkModeToggle } from '@/components/dark-mode-toggle'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'

function alpha(hex: string, a: number): string {
  const h = hex.replace('#', '')
  return `rgba(${parseInt(h.slice(0, 2), 16)}, ${parseInt(h.slice(2, 4), 16)}, ${parseInt(h.slice(4, 6), 16)}, ${a})`
}

// node type → war category color
const TYPE_COLOR: Record<string, string> = {
  CAUSE: '#8a6d3b',
  BATTLE: '#b91c1c',
  POLITICS: '#1d4ed8',
  SOCIETY: '#b45309',
  AFTERMATH: '#7c3aed',
}

type Size = 's' | 'm' | 'l' | 'xl'
const SIZE_H: Record<Size, number> = { s: 60, m: 86, l: 124, xl: 180 }

interface Node {
  id: string
  phase: string
  type: keyof typeof TYPE_COLOR
  size: Size
  name: string
  date: string
  hook: string
  href?: string
}

const PHASES = [
  { id: 'causes', label: 'Causes' },
  { id: 'outbreak', label: 'Outbreak · 1861' },
  { id: 'hard', label: 'The Hard Years · 1862–63' },
  { id: 'turning', label: 'The Turning · 1863' },
  { id: 'total', label: 'Total War · 1864–65' },
  { id: 'after', label: 'Aftermath' },
]

const NODES: Node[] = [
  { id: 'road', phase: 'causes', type: 'CAUSE', size: 'l', name: 'The Road to War', date: '1850–1861', hook: 'Compromise, Bleeding Kansas, Dred Scott, John Brown — the country arguing its way to the cliff edge.' },
  { id: 'sumter', phase: 'outbreak', type: 'BATTLE', size: 'm', name: 'Fort Sumter', date: 'Apr 1861', hook: 'Thirty-four hours of bombardment, nobody killed — and a nation at war.' },
  { id: 'bull', phase: 'outbreak', type: 'BATTLE', size: 'm', name: 'First Bull Run', date: 'Jul 1861', hook: 'Picnickers came to watch. Both sides went home knowing it would not be quick.' },
  { id: 'phil', phase: 'outbreak', type: 'BATTLE', size: 's', name: 'Philippi', date: 'Jun 1861', hook: 'The “Philippi Races” — barely a battle, but the first land action.' },
  { id: 'shiloh', phase: 'hard', type: 'BATTLE', size: 'm', name: 'Shiloh', date: 'Apr 1862', hook: 'Two days that killed the idea of a bloodless war.' },
  { id: 'antietam', phase: 'hard', type: 'BATTLE', size: 'l', name: 'Antietam', date: 'Sep 1862', hook: 'The bloodiest single day in American history.' },
  { id: 'emanc', phase: 'hard', type: 'POLITICS', size: 'l', name: 'The Emancipation Proclamation', date: 'Jan 1863', hook: 'Lincoln changes what the entire war is for.' },
  { id: 'home', phase: 'hard', type: 'SOCIETY', size: 'm', name: 'The Home Front', date: '1861–1865', hook: 'Draft riots, war economies, women running the farms and the hospitals.' },
  { id: 'gburg', phase: 'turning', type: 'BATTLE', size: 'xl', name: 'Gettysburg', date: 'Jul 1863', hook: 'Three days, some fifty thousand casualties, the high-water mark of the Confederacy.', href: '/war-pilot-preview' },
  { id: 'vicks', phase: 'turning', type: 'BATTLE', size: 'l', name: 'Vicksburg', date: 'May–Jul 1863', hook: 'Grant takes the Mississippi and cuts the South in two.' },
  { id: 'sherman', phase: 'total', type: 'BATTLE', size: 'l', name: 'Sherman’s March', date: '1864', hook: 'Total war — making Georgia howl, all the way to the sea.' },
  { id: 'appom', phase: 'total', type: 'BATTLE', size: 'm', name: 'Appomattox', date: 'Apr 1865', hook: 'Lee surrenders; Lincoln is murdered five days later.' },
  { id: 'reck', phase: 'after', type: 'AFTERMATH', size: 'l', name: 'The Reckoning', date: '1865 →', hook: 'Three-quarters of a million dead, and the unfinished work that becomes Reconstruction.' },
]

const WAR_OXBLOOD = '#b91c1c'
const CORD_X = 56
const CARD_LEFT = CORD_X + 16

function NodeCard({ n }: { n: Node }) {
  const color = TYPE_COLOR[n.type]
  const isXL = n.size === 'xl'
  const isLG = n.size === 'l'
  const card = (
    <div style={{
      background: 'color-mix(in srgb, var(--foreground) 4%, transparent)',
      borderRadius: 8,
      border: `1px solid ${isXL ? alpha(color, 0.55) : 'color-mix(in srgb, var(--foreground) 15%, transparent)'}`,
      boxShadow: isXL ? `0 0 0 4px ${alpha(color, 0.1)}, 0 12px 28px rgba(0,0,0,0.28)` : 'none',
      height: SIZE_H[n.size],
      padding: isXL ? '12px 16px' : (isLG ? '11px 14px' : '8px 12px'),
      display: 'flex', flexDirection: 'column',
      overflow: 'hidden',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
        <span style={{ fontFamily: SANS, fontSize: 8.5, fontWeight: 700, letterSpacing: 0.8, color: '#fff', background: color, padding: '2px 6px', borderRadius: 3 }}>{n.type}</span>
        <span style={{ fontFamily: SANS, fontSize: 10, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>{n.date}</span>
      </div>
      <div style={{ fontFamily: SERIF, fontSize: isXL ? 24 : (isLG ? 18 : 15), lineHeight: 1.1, letterSpacing: -0.2, color: 'var(--foreground)' }}>{n.name}</div>
      <div style={{ marginTop: 'auto', paddingTop: 4, fontFamily: SERIF, fontSize: isXL ? 14.5 : 13, lineHeight: 1.4, color: isXL ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 70%, transparent)', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: isXL ? 3 : 2, WebkitBoxOrient: 'vertical' }}>{n.hook}</div>
      {n.href && <div style={{ marginTop: 6, fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color }}>Read the full story →</div>}
    </div>
  )
  return (
    <div style={{ position: 'relative', paddingLeft: CARD_LEFT, paddingRight: 16, marginBottom: 12 }}>
      <div style={{ position: 'absolute', left: CORD_X - 5, top: 12, width: 10, height: 10, borderRadius: 999, background: color, boxShadow: `0 0 0 3px ${alpha(color, 0.18)}`, border: `1px solid ${color}`, zIndex: 1 }} />
      <div style={{ position: 'absolute', left: CORD_X + 5, top: 16, width: 11, height: 1, background: alpha(color, 0.5) }} />
      {n.href ? <a href={n.href} style={{ textDecoration: 'none', display: 'block' }}>{card}</a> : card}
    </div>
  )
}

export default function CivilWarInterior() {
  const byPhase = PHASES.map(p => ({ ...p, nodes: NODES.filter(n => n.phase === p.id) })).filter(p => p.nodes.length > 0)

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <div style={{ maxWidth: 680, margin: '0 auto' }}>
        {/* hero */}
        <div style={{ padding: '18px 18px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
          <div>
            <a href="/" style={{ fontFamily: SANS, fontSize: 10, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: WAR_OXBLOOD, textDecoration: 'none' }}>← War · United States</a>
            <h1 style={{ margin: '10px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.1, letterSpacing: -0.4 }}>American Civil War</h1>
            <div style={{ fontFamily: SERIF, fontSize: 14, color: 'color-mix(in srgb, var(--foreground) 60%, transparent)', marginTop: 4 }}>1861–1865 · Union vs. Confederacy</div>
            <p style={{ margin: '12px 0 0', fontFamily: SERIF, fontSize: 14.5, lineHeight: 1.55, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)', maxWidth: 540 }}>
              The whole war on one spine — its sections and battles, sized by how much each one shaped it. Tap any node to read; some are a paragraph, Gettysburg is a chapter.
            </p>
          </div>
          <DarkModeToggle />
        </div>

        {/* spine */}
        <div style={{ position: 'relative', paddingTop: 8, paddingBottom: 40 }}>
          <div style={{ position: 'absolute', left: CORD_X, top: 0, bottom: 0, width: 1, background: 'color-mix(in srgb, var(--foreground) 22%, transparent)' }} />
          {byPhase.map(phase => (
            <div key={phase.id} style={{ position: 'relative' }}>
              <div style={{ position: 'relative', padding: '16px 18px 6px' }}>
                <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 34, fontWeight: 400, letterSpacing: -0.5, color: alpha(WAR_OXBLOOD, 0.13), lineHeight: 1, whiteSpace: 'nowrap', pointerEvents: 'none', userSelect: 'none', overflow: 'hidden' }}>{phase.label}</div>
                <div style={{ position: 'absolute', left: CORD_X + 14, top: 24, fontFamily: SANS, fontSize: 10, letterSpacing: 1.4, fontWeight: 700, color: WAR_OXBLOOD, textTransform: 'uppercase', background: 'var(--background)', padding: '0 6px' }}>{phase.label}</div>
              </div>
              {phase.nodes.map(n => <NodeCard key={n.id} n={n} />)}
            </div>
          ))}
        </div>

        {/* legend */}
        <div style={{ padding: '0 18px 40px', display: 'flex', flexWrap: 'wrap', gap: 12, fontFamily: SANS, fontSize: 10.5, color: 'color-mix(in srgb, var(--foreground) 60%, transparent)' }}>
          {Object.entries(TYPE_COLOR).map(([k, c]) => (
            <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <span style={{ width: 9, height: 9, borderRadius: 2, background: c }} /> {k}
            </span>
          ))}
          <span style={{ opacity: 0.7 }}>· card size = significance</span>
        </div>
      </div>
    </div>
  )
}
