// Shared Philosophy drilldown chrome — the hub layout (app header + dropdown
// breadcrumb + hero + optional stat row + a list of rows) behind the
// school › thinker › work pages, plus the crumb builders that wire the
// tap-a-crumb jump dropdowns (reused from WarBreadcrumb, the mode-agnostic trail).
// Bronze identity, dark/light aware via the app's --background/--foreground vars.

import type { ReactNode } from 'react'
import { WarHeader } from '@/components/mode/war-header'
import { WarBreadcrumb, type Crumb, type CrumbOption } from '@/components/mode/war-chrome'
import {
  SCHOOLS, schoolById, thinkerById, thinkersOfSchool, worksOfThinker, type SchoolId,
} from '@/lib/philosophy-data'
import '../../app/war-civil-war/war-skin.css'

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const INK = 'var(--foreground)'
const MUTED = 'color-mix(in srgb, var(--foreground) 76%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 56%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 13%, transparent)'
const CARD = 'color-mix(in srgb, var(--foreground) 4%, transparent)'
export const PHI_ACCENT = '#a08423'

// ── crumb builders (each active crumb carries its siblings as a jump dropdown) ──

// The five chronological era reads, as crumb-dropdown options (the "read it straight
// through" track — parallel to the school taxonomy, not inside it).
export const ERA_CRUMB_OPTIONS: CrumbOption[] = [
  { label: 'The Greeks', href: '/philosophy/greeks' },
  { label: 'Faith meets reason', href: '/philosophy/faith-reason' },
  { label: 'Rationalists & empiricists', href: '/philosophy/rationalists-empiricists' },
  { label: 'Kant & the Germans', href: '/philosophy/kant-germans' },
  { label: 'The nineteenth century', href: '/philosophy/nineteenth-century' },
]

// Home crumb — like the war home (War › Theatre › Battle), the root is active and the
// deeper levels show as jump-dropdowns so the whole drill path is reachable from here:
// Philosophy › School[all schools] › Thinker[all thinkers, grouped by school].
export function homeCrumbs(): Crumb[] {
  const thinkerOpts: CrumbOption[] = SCHOOLS.flatMap(s => [
    { label: s.name, heading: true },
    ...thinkersOfSchool(s.id).map(t => ({ label: t.name, href: `/philosophy/thinker/${t.id}` })),
  ])
  return [
    { label: 'Philosophy', active: true, currentLabel: 'Philosophy' },
    { label: 'School', options: SCHOOLS.map(s => ({ label: s.name, href: `/philosophy/school/${s.id}` })) },
    { label: 'Thinker', options: thinkerOpts },
  ]
}

// Era-read crumb: Philosophy › <era>, the era crumb a jump-dropdown across all five.
export function eraCrumbs(eraId: string): Crumb[] {
  const cur = ERA_CRUMB_OPTIONS.find(e => e.href === `/philosophy/${eraId}`)
  return [
    { label: 'Philosophy', href: '/philosophy' },
    { label: cur?.label ?? 'Era', active: true, currentLabel: cur?.label, options: ERA_CRUMB_OPTIONS },
  ]
}

// The full School › Thinker › Work trail always shows, war-style: deeper levels
// not yet chosen render as a noun-placeholder jump-dropdown ("Thinker", "Works")
// so the reader can drill straight in, exactly like war's Theatre › Battle bar.
export function schoolCrumbs(id: SchoolId): Crumb[] {
  const s = schoolById(id)!
  return [
    { label: 'Philosophy', href: '/philosophy' },
    { label: s.name, active: true, currentLabel: s.name,
      options: SCHOOLS.map(x => ({ label: x.name, href: `/philosophy/school/${x.id}` })) },
    { label: 'Thinker',
      options: thinkersOfSchool(id).map(x => ({ label: x.name, href: `/philosophy/thinker/${x.id}` })) },
  ]
}
export function thinkerCrumbs(thinkerId: string): Crumb[] {
  const t = thinkerById(thinkerId)!
  const s = schoolById(t.school)!
  const sibs = thinkersOfSchool(t.school)
  const works = worksOfThinker(thinkerId)
  const crumbs: Crumb[] = [
    { label: 'Philosophy', href: '/philosophy' },
    { label: s.name, href: `/philosophy/school/${s.id}`,
      options: SCHOOLS.map(x => ({ label: x.name, href: `/philosophy/school/${x.id}` })) },
    { label: t.name, active: true, currentLabel: t.name,
      options: sibs.map(x => ({ label: x.name, href: `/philosophy/thinker/${x.id}` })) },
  ]
  if (works.length) crumbs.push({ label: 'Works',
    options: works.map(w => ({ label: w.title, href: `/philosophy/work/${w.id}` })) })
  return crumbs
}
export function workCrumbs(workId: string, thinkerId: string): Crumb[] {
  const t = thinkerById(thinkerId)!
  const s = schoolById(t.school)!
  const works = worksOfThinker(thinkerId)
  const w = works.find(x => x.id === workId)!
  return [
    { label: 'Philosophy', href: '/philosophy' },
    { label: s.name, href: `/philosophy/school/${s.id}`,
      options: SCHOOLS.map(x => ({ label: x.name, href: `/philosophy/school/${x.id}` })) },
    { label: t.name, href: `/philosophy/thinker/${t.id}`,
      options: thinkersOfSchool(t.school).map(x => ({ label: x.name, href: `/philosophy/thinker/${x.id}` })) },
    { label: w.title, active: true, currentLabel: w.title,
      options: works.map(x => ({ label: x.title, href: `/philosophy/work/${x.id}` })) },
  ]
}

// ── row + hub layout ──────────────────────────────────────────────────────────
export interface HubRow {
  glyph: string
  tint: string
  title: string
  sub?: string
  hook?: ReactNode
  href: string
  badge?: 'read' | 'soon'
  square?: boolean
}

export function PhiHub({
  crumbs, accent, eyebrow, title, meta, blurb, glyph, stats, readButton, rowsLabel, rows, note, footerEra,
}: {
  crumbs: Crumb[]
  accent: string
  eyebrow: string
  title: string
  meta?: string
  blurb?: ReactNode
  glyph?: string
  stats?: { value: string; label: string }[]
  readButton?: { href: string; title: string; sub: string; soon?: boolean }
  rowsLabel?: string
  rows?: HubRow[]
  note?: ReactNode
  footerEra?: { href: string; label: string }
}) {
  return (
    <div className="war-skin" style={{ background: 'var(--background)', color: INK, minHeight: '100dvh', fontFamily: SANS }}>
      <WarHeader active="philosophy" title="Western Philosophy" subtitle="Stuff Happened · Philosophy" backHref="/philosophy" />
      <WarBreadcrumb crumbs={crumbs} accent={accent} bare />

      <main style={{ maxWidth: 640, margin: '0 auto', width: '100%' }}>
        {/* hero */}
        <div style={{ padding: '18px 16px 16px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          {glyph && (
            <div aria-hidden style={{
              width: 64, height: 64, flexShrink: 0, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `linear-gradient(150deg, ${accent}, color-mix(in srgb, ${accent} 45%, #211f1b))`,
              fontFamily: SERIF, fontSize: 30, fontWeight: 600, color: 'rgba(255,255,255,.92)', textShadow: '0 1px 3px rgba(0,0,0,.35)',
            }}>{glyph}</div>
          )}
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: '.16em', textTransform: 'uppercase', color: accent }}>{eyebrow}</div>
            <h1 style={{ fontFamily: SERIF, fontSize: 27, fontWeight: 600, lineHeight: 1.08, margin: '7px 0 0', letterSpacing: -0.2 }}>{title}</h1>
            {meta && <div style={{ fontFamily: SANS, fontSize: 12.5, color: FAINT, marginTop: 6, letterSpacing: '.02em' }}>{meta}</div>}
          </div>
        </div>
        {blurb && (
          <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.55, color: MUTED, margin: 0, padding: '0 16px 4px', textWrap: 'pretty' }}>{blurb}</p>
        )}

        {/* stats */}
        {stats && stats.length > 0 && (
          <div style={{ display: 'flex', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, margin: '16px 0 0' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center', padding: '13px 8px', borderLeft: i === 0 ? 'none' : `1px solid ${BORDER}` }}>
                <div style={{ fontFamily: SERIF, fontSize: 21, fontWeight: 600 }}>{s.value}</div>
                <div style={{ fontFamily: SANS, fontSize: 11, letterSpacing: '.1em', textTransform: 'uppercase', color: FAINT, marginTop: 5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}

        {note && <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 13.5, color: FAINT, lineHeight: 1.5, padding: '14px 16px 0' }}>{note}</div>}

        {/* read button */}
        {readButton && (
          <a href={readButton.soon ? undefined : readButton.href} style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
            margin: '16px 16px 4px', padding: '14px 16px', borderRadius: 12,
            border: `1px solid ${readButton.soon ? BORDER : `color-mix(in srgb, ${accent} 55%, transparent)`}`,
            background: readButton.soon ? CARD : `color-mix(in srgb, ${accent} 12%, transparent)`,
            textDecoration: 'none', color: INK, cursor: readButton.soon ? 'default' : 'pointer', opacity: readButton.soon ? 0.72 : 1,
          }}>
            <span style={{ minWidth: 0 }}>
              <b style={{ display: 'block', fontFamily: SERIF, fontSize: 15.5, fontWeight: 600 }}>{readButton.title}</b>
              <span style={{ display: 'block', fontFamily: SANS, fontSize: 12, color: MUTED, marginTop: 2 }}>{readButton.sub}</span>
            </span>
            <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 999, background: readButton.soon ? 'transparent' : accent, color: readButton.soon ? FAINT : '#1c1a14', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, border: readButton.soon ? `1px solid ${BORDER}` : 'none' }}>{readButton.soon ? '·' : '→'}</span>
          </a>
        )}

        {/* list */}
        {rows && rows.length > 0 && (
          <div style={{ padding: '16px 16px 8px' }}>
            {rowsLabel && <div style={{ fontFamily: SANS, fontSize: 12.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: FAINT, marginBottom: 11 }}>{rowsLabel}</div>}
            {rows.map((r, i) => (
              <a key={i} href={r.href} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 12, border: `1px solid ${BORDER}`, borderRadius: 11, background: CARD, textDecoration: 'none', color: INK, marginBottom: 9 }}>
                <div aria-hidden style={{
                  width: 46, height: 46, flexShrink: 0, borderRadius: r.square ? 8 : 10, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: `linear-gradient(150deg, ${r.tint}, color-mix(in srgb, ${r.tint} 45%, #211f1b))`,
                  fontFamily: SERIF, fontSize: r.square ? 15 : 20, fontWeight: 600, color: 'rgba(255,255,255,.92)',
                }}>{r.glyph}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <b style={{ display: 'block', fontFamily: SERIF, fontSize: 16, fontWeight: 600, lineHeight: 1.2 }}>{r.title}</b>
                  {r.sub && <div style={{ fontFamily: SANS, fontSize: 11, color: FAINT, marginTop: 3, letterSpacing: '.02em' }}>{r.sub}</div>}
                  {r.hook && <div style={{ fontFamily: SERIF, fontSize: 13, color: MUTED, marginTop: 5, lineHeight: 1.4 }}>{r.hook}</div>}
                </div>
                {r.badge && (
                  <span style={{ flexShrink: 0, fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: r.badge === 'read' ? accent : FAINT, border: `1px solid ${r.badge === 'read' ? `color-mix(in srgb, ${accent} 50%, transparent)` : BORDER}`, borderRadius: 5, padding: '3px 6px' }}>{r.badge === 'read' ? 'Read' : 'Soon'}</span>
                )}
                <span style={{ flexShrink: 0, color: FAINT, fontSize: 18 }}>›</span>
              </a>
            ))}
          </div>
        )}

        {footerEra && (
          <div style={{ padding: '8px 16px 40px' }}>
            <a href={footerEra.href} style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: accent, textDecoration: 'none' }}>{footerEra.label} →</a>
          </div>
        )}
      </main>
    </div>
  )
}
