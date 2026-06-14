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

// Representative year per school for ordering the jump-dropdown (range start, so the
// curated chronological order is preserved exactly).
const SCHOOL_SORT_YEAR: Record<string, number> = {
  pre: -585, plat: -380, arist: -350, stoa: -300, schol: 1078,
  rat: 1637, emp: 1689, ideal: 1781, util: 1789, exist: 1843,
}

// The School jump-dropdown: every school in chronological order, BUT the Independents
// (who founded no school and joined none — there are only four) are broken out as
// themselves and slotted by birth year, so the list reads pre-socratics → Socrates →
// Platonism → … → German Idealists → Schopenhauer → Utilitarians → Marx →
// Existentialists → Nietzsche, instead of hiding them in one "Independent" bucket.
export function schoolDropdownOptions(): CrumbOption[] {
  const items: { year: number; opt: CrumbOption }[] = []
  for (const s of SCHOOLS) {
    if (s.id === 'indep') {
      for (const t of thinkersOfSchool('indep')) items.push({ year: t.born, opt: { label: t.name, href: `/philosophy/thinker/${t.id}` } })
    } else {
      items.push({ year: SCHOOL_SORT_YEAR[s.id] ?? 0, opt: { label: s.name, href: `/philosophy/school/${s.id}` } })
    }
  }
  items.sort((a, b) => a.year - b.year)
  return items.map(i => i.opt)
}

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
    { label: 'School', options: schoolDropdownOptions() },
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
      options: schoolDropdownOptions() },
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
      options: schoolDropdownOptions() },
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
      options: schoolDropdownOptions() },
    { label: t.name, href: `/philosophy/thinker/${t.id}`,
      options: thinkersOfSchool(t.school).map(x => ({ label: x.name, href: `/philosophy/thinker/${x.id}` })) },
    { label: w.title, active: true, currentLabel: w.title,
      options: works.map(x => ({ label: x.title, href: `/philosophy/work/${x.id}` })) },
  ]
}

// ── row + hub layout ──────────────────────────────────────────────────────────
export interface HubRow {
  glyph: string
  iconId?: string    // when set, render /philosophy/icons/{iconId}.png instead of the letter
  tint: string
  title: string
  sub?: string
  hook?: ReactNode
  href: string
  badge?: 'read' | 'soon'
  square?: boolean
}

export function PhiHub({
  crumbs, accent, eyebrow, title, meta, blurb, glyph, iconId, stats, readButton, diagram, spine, cast, passages, rowsLabel, rows, note, footerEra,
}: {
  crumbs: Crumb[]
  accent: string
  eyebrow: string
  title: string
  meta?: string
  blurb?: ReactNode
  glyph?: string
  iconId?: string
  stats?: { value: string; label: string }[]
  readButton?: { href: string; title: string; sub: string; soon?: boolean }
  diagram?:
    | { kind: 'pairs'; title: string; leftLabel: string; rightLabel: string; rows: { left: string; right: string }[]; caption: string }
    | { kind: 'ladder'; title: string; rungs: string[]; caption: string }
    | { kind: 'triad'; title: string; leftLabel: string; midLabel: string; rightLabel: string; rows: { left: string; mid: string; right: string }[]; caption: string }
  spine?: { where: string; what: string }[]
  cast?: { name: string; role: string }[]
  passages?: { title: string; where: string; teaser: string }[]
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
          {(glyph || iconId) && (
            <div aria-hidden style={{
              width: 64, height: 64, flexShrink: 0, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: `linear-gradient(150deg, ${accent}, color-mix(in srgb, ${accent} 45%, #211f1b))`,
              fontFamily: SERIF, fontSize: 30, fontWeight: 600, color: 'rgba(255,255,255,.92)', textShadow: '0 1px 3px rgba(0,0,0,.35)',
            }}>
              {iconId
                /* eslint-disable-next-line @next/next/no-img-element */
                ? <img src={`/philosophy/icons/${iconId}.png`} alt="" data-no-zoom style={{ width: 38, height: 38, opacity: 0.95 }} />
                : glyph}
            </div>
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

        {note && <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 14, color: MUTED, lineHeight: 1.55, padding: '14px 16px 0' }}>{note}</div>}

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

        {/* the signature diagram — a 'pairs' correspondence (city ↔ soul) or a 'ladder' ascent (the ladder of love) */}
        {diagram && (
          <div style={{ padding: '18px 16px 2px' }}>
            <div style={{ fontFamily: SANS, fontSize: 12.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: FAINT, marginBottom: 11 }}>{diagram.title}</div>
            {diagram.kind === 'pairs' && (
              <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, background: CARD, overflow: 'hidden' }}>
                <div style={{ display: 'flex', borderBottom: `1px solid ${BORDER}` }}>
                  <div style={{ flex: 1, textAlign: 'center', padding: '8px 6px', fontFamily: SANS, fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: accent }}>{diagram.leftLabel}</div>
                  <div style={{ width: 1, background: BORDER }} />
                  <div style={{ flex: 1, textAlign: 'center', padding: '8px 6px', fontFamily: SANS, fontSize: 10.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: accent }}>{diagram.rightLabel}</div>
                </div>
                {diagram.rows.map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'stretch', borderTop: i === 0 ? 'none' : `1px solid ${BORDER}` }}>
                    <div style={{ flex: 1, textAlign: 'center', padding: '11px 8px', fontFamily: SERIF, fontSize: 15, fontWeight: 600 }}>{r.left}</div>
                    <div aria-hidden style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: 26, color: FAINT, fontSize: 13 }}>=</div>
                    <div style={{ flex: 1, textAlign: 'center', padding: '11px 8px', fontFamily: SERIF, fontSize: 15, fontWeight: 600 }}>{r.right}</div>
                  </div>
                ))}
              </div>
            )}
            {diagram.kind === 'triad' && (
              <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, background: CARD, overflow: 'hidden' }}>
                <div style={{ display: 'flex', borderBottom: `1px solid ${BORDER}` }}>
                  <div style={{ flex: 1, textAlign: 'center', padding: '8px 5px', fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: FAINT }}>{diagram.leftLabel}</div>
                  <div style={{ width: 1, background: BORDER }} />
                  <div style={{ flex: 1, textAlign: 'center', padding: '8px 5px', fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: accent, background: `color-mix(in srgb, ${accent} 12%, transparent)` }}>{diagram.midLabel}</div>
                  <div style={{ width: 1, background: BORDER }} />
                  <div style={{ flex: 1, textAlign: 'center', padding: '8px 5px', fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: FAINT }}>{diagram.rightLabel}</div>
                </div>
                {diagram.rows.map((r, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'stretch', borderTop: i === 0 ? 'none' : `1px solid ${BORDER}` }}>
                    <div style={{ flex: 1, textAlign: 'center', padding: '10px 5px', fontFamily: SANS, fontSize: 12.5, color: MUTED }}>{r.left}</div>
                    <div style={{ flex: 1, textAlign: 'center', padding: '10px 5px', fontFamily: SERIF, fontSize: 14.5, fontWeight: 600, color: INK, background: `color-mix(in srgb, ${accent} 9%, transparent)` }}>{r.mid}</div>
                    <div style={{ flex: 1, textAlign: 'center', padding: '10px 5px', fontFamily: SANS, fontSize: 12.5, color: MUTED }}>{r.right}</div>
                  </div>
                ))}
              </div>
            )}
            {diagram.kind === 'ladder' && (
              <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, background: CARD, overflow: 'hidden' }}>
                {/* highest rung on top; the climb reads upward — step numbers count up from the bottom */}
                {diagram.rungs.map((rung, i, arr) => {
                  const step = arr.length - i           // top row = highest step number
                  const top = i === 0
                  return (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '11px 13px', borderTop: top ? 'none' : `1px solid ${BORDER}` }}>
                      <span aria-hidden style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 999, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SANS, fontSize: 11, fontWeight: 700, color: top ? '#1c1a14' : accent, background: top ? accent : `color-mix(in srgb, ${accent} 16%, transparent)` }}>{step}</span>
                      <span style={{ fontFamily: SERIF, fontSize: 15, fontWeight: top ? 700 : 600, color: INK }}>{rung}</span>
                      {top && <span style={{ marginLeft: 'auto', fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: accent }}>the top</span>}
                    </div>
                  )
                })}
                <div style={{ padding: '6px 13px 9px', fontFamily: SANS, fontSize: 10.5, color: FAINT, letterSpacing: '.04em', borderTop: `1px solid ${BORDER}` }}>↑ the climb, bottom to top</div>
              </div>
            )}
            <div style={{ fontFamily: SERIF, fontSize: 13, lineHeight: 1.5, color: MUTED, marginTop: 9, textWrap: 'pretty' }}>{diagram.caption}</div>
          </div>
        )}

        {/* the dialogue map — the shape of the argument, beat by beat */}
        {spine && spine.length > 0 && (
          <div style={{ padding: '18px 16px 2px' }}>
            <div style={{ fontFamily: SANS, fontSize: 12.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: FAINT, marginBottom: 11 }}>The shape of the argument</div>
            <div style={{ position: 'relative', paddingLeft: 18 }}>
              <div aria-hidden style={{ position: 'absolute', left: 3, top: 6, bottom: 6, width: 2, background: `color-mix(in srgb, ${accent} 38%, transparent)` }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {spine.map((b, i) => (
                  <div key={i} style={{ position: 'relative' }}>
                    <span aria-hidden style={{ position: 'absolute', left: -18, top: 5, width: 8, height: 8, borderRadius: 999, background: accent, boxShadow: `0 0 0 3px var(--background)` }} />
                    <div style={{ fontFamily: SANS, fontSize: 10.5, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: accent }}>{b.where}</div>
                    <div style={{ fontFamily: SERIF, fontSize: 14, lineHeight: 1.45, color: INK, marginTop: 2, textWrap: 'pretty' }}>{b.what}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* the cast — who's in the room arguing */}
        {cast && cast.length > 0 && (
          <div style={{ padding: '18px 16px 2px' }}>
            <div style={{ fontFamily: SANS, fontSize: 12.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: FAINT, marginBottom: 11 }}>The cast</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              {cast.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'baseline', padding: '9px 12px', border: `1px solid ${BORDER}`, borderRadius: 10, background: CARD }}>
                  <span aria-hidden style={{ width: 7, height: 7, borderRadius: 999, background: accent, flexShrink: 0, transform: 'translateY(-1px)' }} />
                  <span style={{ minWidth: 0 }}>
                    <b style={{ fontFamily: SERIF, fontSize: 15, fontWeight: 600 }}>{c.name}</b>
                    <span style={{ fontFamily: SANS, fontSize: 12.5, color: MUTED }}> — {c.role}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* the famous bits — the set-pieces that tease the read */}
        {passages && passages.length > 0 && (
          <div style={{ padding: '18px 16px 2px' }}>
            <div style={{ fontFamily: SANS, fontSize: 12.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: FAINT, marginBottom: 11 }}>The famous bits</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
              {passages.map((p, i) => (
                <div key={i} style={{ padding: 12, border: `1px solid ${BORDER}`, borderRadius: 11, background: CARD }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                    <b style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, lineHeight: 1.2 }}>{p.title}</b>
                    <span style={{ flexShrink: 0, fontFamily: SANS, fontSize: 10.5, fontWeight: 700, letterSpacing: '.04em', textTransform: 'uppercase', color: accent }}>{p.where}</span>
                  </div>
                  <div style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.45, color: MUTED, marginTop: 5, textWrap: 'pretty' }}>{p.teaser}</div>
                </div>
              ))}
            </div>
          </div>
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
                }}>
                  {r.iconId
                    /* eslint-disable-next-line @next/next/no-img-element */
                    ? <img src={`/philosophy/icons/${r.iconId}.png`} alt="" data-no-zoom style={{ width: 28, height: 28, opacity: 0.95 }} />
                    : r.glyph}
                </div>
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
