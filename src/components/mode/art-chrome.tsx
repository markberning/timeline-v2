'use client'

// Shared chrome + primitives for the Art drilldown pages (Era → Movement →
// Work → Artist). Mirrors war-chrome.tsx: a breadcrumb trail (reused from
// WarBreadcrumb, which is mode-agnostic) + a per-level view toggle, plus the
// "At a glance" block, the tensions/factions face-off, the artists strip, the
// hero, and the image tile. Theme is the app's CSS vars (no `t` object).
// See audits/art-vertical.md.

import { useState, Fragment } from 'react'
import { WarBreadcrumb, type Crumb, type CrumbOption } from '@/components/mode/war-chrome'
import { ART_ACCENT, artAlpha } from '@/lib/art-data'
import { ART_ERAS } from '@/lib/art-data'
import { ART_MOVEMENT_CONTENT, ART_WORK_CONTENT, ART_ARTIST_CONTENT, type ArtStat, type ArtSide, type Palette } from '@/lib/art-content'
import { TL_KIND_ORDER, type TlKind } from '@/lib/navigator-tls'

export const SANS = 'var(--font-geist-sans)'
export const SERIF = 'var(--font-lora)'
export const MONO = 'var(--font-geist-mono, ui-monospace, monospace)'

// CSS-var theme tokens (translations of the mockup's `t.*`).
export const INK = 'var(--foreground)'
export const MUTED = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
export const FAINT = 'color-mix(in srgb, var(--foreground) 38%, transparent)'
export const BORDER = 'color-mix(in srgb, var(--foreground) 11%, transparent)'
export const BORDER_STRONG = 'color-mix(in srgb, var(--foreground) 22%, transparent)'
export const CARD_BG = 'color-mix(in srgb, var(--foreground) 4%, transparent)'
export const CHIP = 'color-mix(in srgb, var(--foreground) 6%, transparent)'

export { ART_ACCENT, artAlpha }

// ─────────────────────────────────────────────────────────────
// Breadcrumb trail builders (Crumb[] for WarBreadcrumb)
// ─────────────────────────────────────────────────────────────
const MODE_SHORT: Record<TlKind, string> = { civ: 'Civ', war: 'War', art: 'Art', music: 'Music' }
const MODE_HREF: Record<TlKind, string | undefined> = { civ: '/', war: '/war', art: '/art', music: undefined }

function modeCrumb(): Crumb {
  const modeOptions: CrumbOption[] = TL_KIND_ORDER.map(k => ({ label: MODE_SHORT[k], href: MODE_HREF[k], disabled: !MODE_HREF[k] }))
  return { label: 'Art', options: modeOptions, currentLabel: 'Art' }
}

// All 8 eras as a switcher; every era resolves (unauthored ⇒ coming-soon page).
function eraOptions(): CrumbOption[] {
  return ART_ERAS.map(e => ({ label: e.name, href: `/art/${e.id}` }))
}
// Movements/works: only authored ids link; the rest are disabled.
function movementOptions(eraId: string): CrumbOption[] {
  return Object.values(ART_MOVEMENT_CONTENT)
    .filter(m => m.eraId === eraId)
    .map(m => ({ label: m.name, href: `/art/${eraId}/${m.id}`, color: m.accent }))
}
function workOptions(eraId: string, movementId: string): CrumbOption[] {
  const mv = ART_MOVEMENT_CONTENT[movementId]
  if (!mv) return []
  return mv.works.map(w => ({ label: w.name, href: ART_WORK_CONTENT[w.id] ? `/art/${eraId}/${movementId}/${w.id}` : undefined, disabled: !ART_WORK_CONTENT[w.id] }))
}

export function artEraCrumbs(eraId: string, eraName: string): Crumb[] {
  return [modeCrumb(), { label: eraName, options: eraOptions(), active: true, currentLabel: eraName }]
}
export function artMovementCrumbs(eraId: string, eraName: string, movementId: string, movementName: string): Crumb[] {
  return [
    modeCrumb(),
    { label: eraName, href: `/art/${eraId}`, options: eraOptions(), currentLabel: eraName },
    { label: movementName, options: movementOptions(eraId), active: true, currentLabel: movementName },
  ]
}
export function artWorkCrumbs(eraId: string, eraName: string, movementId: string, movementName: string, workId: string, workName: string, workShort?: string): Crumb[] {
  return [
    modeCrumb(),
    { label: eraName, href: `/art/${eraId}`, options: eraOptions(), currentLabel: eraName },
    { label: movementName, href: `/art/${eraId}/${movementId}`, options: movementOptions(eraId), currentLabel: movementName },
    { label: workName, short: workShort, options: workOptions(eraId, movementId), active: true, currentLabel: workName },
  ]
}
export function artArtistCrumbs(artistName: string): Crumb[] {
  const opts: CrumbOption[] = Object.values(ART_ARTIST_CONTENT).map(a => ({ label: a.name, href: `/art/artist/${a.id}` }))
  return [modeCrumb(), { label: artistName, options: opts, active: true, currentLabel: artistName }]
}

// ─────────────────────────────────────────────────────────────
// ArtChrome — breadcrumb + a two-option view toggle (labels vary by level:
// Timeline|Dossier, Story|Dossier, Lifeline|Dossier).
// ─────────────────────────────────────────────────────────────
export type ArtView = 'left' | 'right'

export function ArtChrome({ crumbs, view, onView, labels, accent = ART_ACCENT }: { crumbs: Crumb[]; view: ArtView; onView: (v: ArtView) => void; labels: [string, string]; accent?: string }) {
  const bar = 'color-mix(in srgb, var(--background) 92%, transparent)'
  const border = `1px solid ${BORDER}`
  const chipActive = 'color-mix(in srgb, var(--foreground) 14%, var(--background))'
  const iconBtn: React.CSSProperties = { width: 34, height: 34, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', border, background: CHIP, borderRadius: 999, color: INK, cursor: 'pointer', padding: 0 }
  return (
    <>
      <WarBreadcrumb crumbs={crumbs} accent={accent} />
      <div style={{ position: 'sticky', top: 36, zIndex: 6, background: bar, backdropFilter: 'blur(16px) saturate(140%)', WebkitBackdropFilter: 'blur(16px) saturate(140%)', borderBottom: border, padding: '10px 14px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <button aria-label="Back" onClick={() => history.back()} style={iconBtn}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </button>
        <div style={{ flex: 1, display: 'flex', background: CHIP, border, borderRadius: 999, padding: 3, gap: 2 }}>
          {(['left', 'right'] as ArtView[]).map((v, i) => {
            const active = v === view
            return (
              <button key={v} onClick={() => onView(v)} style={{ flex: 1, appearance: 'none', border: 'none', borderRadius: 999, cursor: 'pointer', background: active ? chipActive : 'transparent', color: active ? INK : MUTED, fontFamily: SANS, fontWeight: active ? 600 : 500, fontSize: 12.5, letterSpacing: 0.2, padding: '7px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                {labels[i]}
              </button>
            )
          })}
        </div>
        <div style={{ width: 34, height: 34, flexShrink: 0 }} />
      </div>
    </>
  )
}

// ─────────────────────────────────────────────────────────────
// Primitives
// ─────────────────────────────────────────────────────────────
export function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || FAINT }}>{children}</div>
}

// Image tile with a 3-colour gradient fallback (the mockup's PaintingTile).
export function ArtTile({ palette, imageUrl, label, ratio = '1/1', round = false }: { palette: Palette; imageUrl?: string; label?: string; ratio?: string; round?: boolean }) {
  const [failed, setFailed] = useState(false)
  const hasImg = !!imageUrl && !failed
  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: ratio, borderRadius: round ? 999 : 6, overflow: 'hidden', background: `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})` }}>
      {hasImg && <img src={imageUrl} alt={label || ''} loading="lazy" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
      {label && <div style={{ position: 'absolute', left: 6, right: 6, bottom: 5, fontFamily: SANS, fontSize: 8, fontWeight: 700, letterSpacing: 0.6, color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', lineHeight: 1.2, textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>{label}</div>}
    </div>
  )
}

// Full-bleed hero with title block overlay + credit chip.
export function ArtHero({ eyebrow, title, sub, palette, imageUrl, credit, accent }: { eyebrow: string; title: string; sub?: string; palette: Palette; imageUrl?: string; credit?: string; accent: string }) {
  const [failed, setFailed] = useState(false)
  const hasImg = !!imageUrl && !failed
  return (
    <div style={{ position: 'relative', height: 240, overflow: 'hidden', background: `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})` }}>
      {hasImg && <img src={imageUrl} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.72) 100%)' }} />
      {credit && <div style={{ position: 'absolute', top: 10, right: 10, fontFamily: SANS, fontSize: 8.5, letterSpacing: 0.3, color: 'rgba(255,255,255,0.7)', background: 'rgba(0,0,0,0.35)', borderRadius: 999, padding: '3px 8px', maxWidth: '60%', textAlign: 'right' }}>{credit}</div>}
      <div style={{ position: 'absolute', left: 18, right: 18, bottom: 14 }}>
        <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.5, fontWeight: 700, textTransform: 'uppercase', color: artAlpha(accent.startsWith('#') ? accent : '#ffffff', 1), filter: 'brightness(1.5)', textShadow: '0 1px 3px rgba(0,0,0,0.6)' }}>{eyebrow}</div>
        <h1 style={{ margin: '4px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 28, lineHeight: 1.05, letterSpacing: -0.4, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.55)' }}>{title}</h1>
        {sub && <div style={{ marginTop: 6, fontFamily: SANS, fontSize: 12.5, color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 3px rgba(0,0,0,0.55)' }}>{sub}</div>}
      </div>
    </div>
  )
}

// Tensions / factions two-column face-off with a centre "vs".
export function ArtFaceoff({ items, vsLabel = 'vs', topBorder = false }: { items: ArtSide[]; vsLabel?: string; topBorder?: boolean }) {
  return (
    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '20px 16px 22px', borderTop: topBorder ? `1px solid ${BORDER}` : 'none', borderBottom: topBorder ? 'none' : `1px solid ${BORDER}` }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1, width: 32, height: 32, borderRadius: 999, background: 'var(--background)', color: MUTED, border: `1px solid ${BORDER_STRONG}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SERIF, fontStyle: 'italic', fontSize: 13.5, fontWeight: 500 }}>{vsLabel}</div>
      {items.map((it, i) => (
        <div key={it.side || it.label} style={{ padding: i === 0 ? '0 18px 0 0' : '0 0 0 18px', textAlign: i === 0 ? 'left' : 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: i === 0 ? 'flex-start' : 'flex-end' }}>
            <div style={{ width: 22, height: 14, borderRadius: 2, background: it.color, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)', order: i === 0 ? 0 : 1 }} />
            <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: it.color, textTransform: 'uppercase' }}>{it.side || ''}</div>
          </div>
          <div style={{ marginTop: 6, fontFamily: SERIF, fontSize: 15, lineHeight: 1.2, letterSpacing: -0.15, color: INK, fontWeight: 500 }}>{it.label}</div>
          {it.members && <div style={{ marginTop: 6, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12, lineHeight: 1.45, color: MUTED }}>{it.members.join(' · ')}</div>}
          {it.motto && <div style={{ marginTop: 6, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.45, color: FAINT }}>&ldquo;{it.motto}&rdquo;</div>}
          {it.detail && <div style={{ marginTop: 8, fontFamily: SANS, fontSize: 11, color: MUTED, lineHeight: 1.5 }}>{it.detail}</div>}
        </div>
      ))}
    </div>
  )
}

// Collapsible "At a glance" — stats row + optional face-off + extras slot.
export function ArtAtAGlance({ summary, stats, faceoff, extras }: { summary: string; stats: ArtStat[]; faceoff?: ArtSide[]; extras?: React.ReactNode }) {
  const [open, setOpen] = useState(true)
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} style={{ width: '100%', appearance: 'none', border: 'none', background: 'transparent', cursor: 'pointer', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: INK, textAlign: 'left', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, minWidth: 0, flex: 1 }}>
          <span style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase', flexShrink: 0 }}>At a glance</span>
          {!open && <span style={{ fontFamily: SERIF, fontSize: 13, letterSpacing: -0.05, color: MUTED, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', minWidth: 0 }}>{summary}</span>}
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 22, borderRadius: 999, background: CHIP, color: MUTED, border: `1px solid ${BORDER}`, transition: 'transform 200ms ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </span>
      </button>
      {open && (
        <>
          <div style={{ display: 'flex', borderTop: `1px solid ${BORDER}` }}>
            {stats.map((s, i) => (
              <div key={s.k} style={{ flex: 1, padding: '14px 12px', borderLeft: i === 0 ? 'none' : `1px solid ${BORDER}`, textAlign: 'center' }}>
                <div style={{ fontFamily: SERIF, fontSize: 20, lineHeight: 1, letterSpacing: -0.4, color: INK, fontWeight: 500 }}>{s.v}</div>
                <div style={{ marginTop: 5, fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 600, color: FAINT, textTransform: 'uppercase' }}>{s.k}</div>
              </div>
            ))}
          </div>
          {faceoff && <ArtFaceoff items={faceoff} topBorder />}
          {extras}
        </>
      )}
    </div>
  )
}

// Horizontal scroll of portrait circles (painters / figures).
export function ArtistsStrip({ artists, label = 'Artists' }: { artists: { id?: string; name: string; role?: string; years?: string; palette: Palette }[]; label?: string }) {
  return (
    <div style={{ padding: '20px 0 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ padding: '0 16px', marginBottom: 12 }}><Eyebrow>{label}</Eyebrow></div>
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollbarWidth: 'none', padding: '0 16px' }}>
        {artists.map(a => {
          const inner = (
            <div style={{ flexShrink: 0, width: 84, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 64, height: 64, borderRadius: 999, overflow: 'hidden', boxShadow: `inset 0 0 0 2px ${artAlpha('#000000', 0.001)}, inset 0 0 0 2px color-mix(in srgb, var(--foreground) 15%, transparent)` }}>
                <ArtTile palette={a.palette} ratio="1/1" round />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: SERIF, fontSize: 12.5, lineHeight: 1.15, letterSpacing: -0.1, color: INK }}>{a.name}</div>
                <div style={{ marginTop: 2, fontFamily: SANS, fontSize: 9.5, letterSpacing: 0.2, color: FAINT }}>{a.role || a.years}</div>
              </div>
            </div>
          )
          return inner
        })}
      </div>
    </div>
  )
}

// Wrapper that gives a drilldown page the standard full-height scroll column.
export function ArtPageShell({ children }: { children: React.ReactNode }) {
  return <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: 'var(--background)', color: 'var(--foreground)' }}>{children}</div>
}

export type { Crumb, CrumbOption }
export { Fragment }
