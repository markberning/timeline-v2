// Philosophy front door. The signature visual is the ARGUMENT MAP (the 2,600-year
// conversation, nodes colored by school, tap a node → that thinker). Beneath it,
// two ways to browse: by SCHOOL (the school › thinker › work drilldown) and the
// chronological "read it straight through" era list. Shared WarHeader chrome +
// house scale; bronze accent for accents only.

import type { Metadata } from 'next'
import Link from 'next/link'
import { WarHeader } from '@/components/mode/war-header'
import { ArgumentMap } from '@/components/philosophy/argument-map'
import { SCHOOLS, thinkersOfSchool } from '@/lib/philosophy-data'
import '../war-civil-war/war-skin.css'

export const metadata: Metadata = {
  title: 'Philosophy · Stuff Happened',
  description:
    'The history of Western philosophy as a 2,600-year argument — mapped. Trace who taught whom and who tore it down, browse by school, or read it straight through in five eras.',
}

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const INK = 'var(--foreground)'
const MUTED = 'color-mix(in srgb, var(--foreground) 78%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 14%, transparent)'
const CARD = 'color-mix(in srgb, var(--foreground) 4%, transparent)'
const ACCENT = '#a08423'

type Era = { id: string; numeral: string; range: string; title: string; hook: string; tint: string }
const ERAS: Era[] = [
  { id: 'greeks', numeral: 'I', range: '585 BC – 529 AD', title: 'The Greeks', hook: 'The first people to explain the world without gods, and the long argument that started.', tint: '#7c6a2e' },
  { id: 'faith-reason', numeral: 'II', range: '354 – 1347', title: 'Faith meets reason', hook: 'A thousand years of faith and reason needing each other and pulling apart, across three religions.', tint: '#9a6a32' },
  { id: 'rationalists-empiricists', numeral: 'III', range: '1619 – 1776', title: 'The rationalists and the empiricists', hook: 'Six minds rebuild knowledge from scratch, and a Scotsman shows the foundation might not hold.', tint: '#5f6b3a' },
  { id: 'kant-germans', numeral: 'IV', range: '1781 – 1860', title: 'Kant and the Germans', hook: 'The mind builds the world it sees, Spirit moves through history, and the world is blind will.', tint: '#6b5d2e' },
  { id: 'nineteenth-century', numeral: 'V', range: '1843 – 1900', title: 'The nineteenth century', hook: 'Liberty, the leap, alienation, and the death of God that ends the arc.', tint: '#8a4f3f' },
]

const lbl = { fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' as const, color: FAINT }

export default function PhilosophyHome() {
  return (
    <div style={{ background: 'var(--background)', color: INK, minHeight: '100vh' }}>
      <div className="war-skin" style={{ position: 'sticky', top: 0, zIndex: 20, minHeight: 0, background: 'transparent' }}>
        <WarHeader active="philosophy" title="Philosophy" subtitle="Stuff Happened · Philosophy" backHref="/" />
      </div>

      <main style={{ maxWidth: 640, margin: '0 auto' }}>
        {/* intro */}
        <div style={{ padding: '16px 16px 4px' }}>
          <div style={{ ...lbl, color: ACCENT, marginBottom: 7 }}>The argument</div>
          <h1 style={{ fontFamily: SERIF, fontSize: 27, fontWeight: 600, color: INK, lineHeight: 1.08, margin: 0, letterSpacing: -0.2 }}>
            2,600 years of people refusing to agree.
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 14, lineHeight: 1.5, color: MUTED, margin: '9px 0 0' }}>
            Not a reading list — a conversation. The lines are who taught whom, and who showed up centuries later to tear it down. Tap anyone to read them.
          </p>
        </div>

        {/* the argument map */}
        <div style={{ padding: '12px 0 8px' }}>
          <ArgumentMap />
        </div>

        {/* browse by school */}
        <div style={{ padding: '14px 16px 6px' }}>
          <div style={{ ...lbl, marginBottom: 11 }}>Browse by school</div>
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

        {/* read it straight through */}
        <div style={{ padding: '20px 16px 6px' }}>
          <div style={{ ...lbl, marginBottom: 4 }}>Or read it straight through</div>
          <p style={{ fontFamily: SANS, fontSize: 12.5, color: FAINT, margin: '0 0 12px' }}>The five eras, in order — the whole story as one narrative.</p>
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

        <div style={{ padding: '18px 16px 44px' }}>
          <p style={{ fontFamily: SANS, fontSize: 12.5, color: FAINT, lineHeight: 1.55, margin: 0 }}>
            The deep reads — each thinker’s whole system, each work walked chapter by chapter — are filling in school by school. Plato is the first complete one.
          </p>
        </div>
      </main>
    </div>
  )
}
