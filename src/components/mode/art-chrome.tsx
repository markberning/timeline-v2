'use client'

// Shared chrome + primitives for the Art drilldown pages (Era → Movement →
// Work → Artist). Mirrors war-chrome.tsx: a breadcrumb trail (reused from
// WarBreadcrumb, which is mode-agnostic) + a per-level view toggle, plus the
// "At a glance" block, the tensions/factions face-off, the artists strip, the
// hero, and the image tile. Theme is the app's CSS vars (no `t` object).
// See audits/art-vertical.md.

import { useState, Fragment } from 'react'
import Link from 'next/link'
import { WarBreadcrumb, type Crumb, type CrumbOption } from '@/components/mode/war-chrome'
import { ART_ACCENT, artAlpha } from '@/lib/art-data'
import { ART_ERAS } from '@/lib/art-data'
import { ART_MOVEMENT_CONTENT, ART_WORK_CONTENT, ART_ARTIST_CONTENT, type ArtStat, type ArtSide, type Palette, type HeroImage } from '@/lib/art-content'

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
// Breadcrumb trail builders (Crumb[] for WarBreadcrumb). The thread switch lives
// in the ThreadBar tier above, so these trails start at the Art level (era …).
// ─────────────────────────────────────────────────────────────

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
// Every authored work in an era (across its movements) — for the era page's
// "Works" picker crumb.
function eraWorkOptions(eraId: string): CrumbOption[] {
  return Object.values(ART_MOVEMENT_CONTENT)
    .filter(m => m.eraId === eraId)
    .flatMap(m => m.works.filter(w => ART_WORK_CONTENT[w.id]).map(w => ({ label: w.name, href: `/art/${eraId}/${m.id}/${w.id}` })))
}

// The art trail always shows the deeper levels as picker crumbs (so an era page
// reads Era › Movements › Works and you can drill straight from the breadcrumb),
// skipping a level only when it has no authored content yet.
export function artEraCrumbs(eraId: string, eraName: string): Crumb[] {
  const movements = movementOptions(eraId)
  const works = eraWorkOptions(eraId)
  const crumbs: Crumb[] = [{ label: eraName, options: eraOptions(), active: true, currentLabel: eraName }]
  if (movements.length) crumbs.push({ label: 'Movements', options: movements })
  if (works.length) crumbs.push({ label: 'Works', options: works })
  return crumbs
}
export function artMovementCrumbs(eraId: string, eraName: string, movementId: string, movementName: string): Crumb[] {
  const works = workOptions(eraId, movementId).filter(o => o.href)
  const crumbs: Crumb[] = [
    { label: eraName, href: `/art/${eraId}`, options: eraOptions(), currentLabel: eraName },
    { label: movementName, options: movementOptions(eraId), active: true, currentLabel: movementName },
  ]
  if (works.length) crumbs.push({ label: 'Works', options: works })
  return crumbs
}
export function artWorkCrumbs(eraId: string, eraName: string, movementId: string, movementName: string, workId: string, workName: string, workShort?: string): Crumb[] {
  return [
    { label: eraName, href: `/art/${eraId}`, options: eraOptions(), currentLabel: eraName },
    { label: movementName, href: `/art/${eraId}/${movementId}`, options: movementOptions(eraId), currentLabel: movementName },
    { label: workName, short: workShort, options: workOptions(eraId, movementId), active: true, currentLabel: workName },
  ]
}
export function artArtistCrumbs(artistName: string): Crumb[] {
  const opts: CrumbOption[] = Object.values(ART_ARTIST_CONTENT).map(a => ({ label: a.name, href: `/art/artist/${a.id}` }))
  return [{ label: artistName, options: opts, active: true, currentLabel: artistName }]
}

// ─────────────────────────────────────────────────────────────
// ArtChrome — breadcrumb + a two-option view toggle (labels vary by level:
// Timeline|Dossier, Story|Dossier, Lifeline|Dossier).
// ─────────────────────────────────────────────────────────────
export type ArtView = 'left' | 'right'

export function ArtChrome({ crumbs, accent = ART_ACCENT }: { crumbs: Crumb[]; accent?: string }) {
  // Single-view drilldown: just the breadcrumb. The Timeline/Dossier toggle was
  // removed — the page leads with its signature visual and tucks the secondary
  // detail blocks into a closed ArtAccordion (user direction 2026-05-23).
  return <WarBreadcrumb crumbs={crumbs} accent={accent} />
}

// Stats row (the "at a glance" numbers), standalone so it can sit inside an
// ArtAccordion instead of its own collapsible.
export function StatsRow({ stats }: { stats: ArtStat[] }) {
  return (
    <div style={{ display: 'flex', borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      {stats.map((s, i) => (
        <div key={s.k} style={{ flex: 1, padding: '14px 12px', borderLeft: i === 0 ? 'none' : `1px solid ${BORDER}`, textAlign: 'center' }}>
          <div style={{ fontFamily: SERIF, fontSize: 20, lineHeight: 1, letterSpacing: -0.4, color: INK, fontWeight: 500 }}>{s.v}</div>
          <div style={{ marginTop: 5, fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 600, color: FAINT, textTransform: 'uppercase' }}>{s.k}</div>
        </div>
      ))}
    </div>
  )
}

// Closed-by-default collapsible holding a level's secondary "dossier" detail
// blocks (stats, face-off, strips, parallels, provenance). The page's ONE
// signature visual stays OUTSIDE this, always visible.
export function ArtAccordion({ label = 'The details', children, accent = ART_ACCENT, defaultOpen = false }: { label?: string; children: React.ReactNode; accent?: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen)
  // Controls match the War "At a glance" accordion (theatre-page.tsx): accent
  // eyebrow + "Show/Hide" + an accent-tinted round ▾ chevron that rotates.
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 16px', color: 'inherit' }}>
        <Eyebrow color={accent}>{label}</Eyebrow>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: SANS, fontSize: 11, fontWeight: 600, color: accent }}>
          {open ? 'Hide' : 'Show'}
          <span style={{ width: 22, height: 22, borderRadius: 999, border: `1px solid ${artAlpha(accent, 0.55)}`, background: artAlpha(accent, 0.1), display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, lineHeight: 1, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}>▾</span>
        </span>
      </button>
      {open && <div>{children}</div>}
    </div>
  )
}

// "Read the full story" entry button — sits directly under the hookLong on a
// level that has its own chaptered narrative (era / movement / work). The
// primary doorway into the long-form read; the signature visual + lists below
// are for browsing (audits/art-vertical.md §2).
export function ReadStoryButton({ href, label = 'Read the full story', accent = ART_ACCENT, sub }: { href: string; label?: string; accent?: string; sub?: string }) {
  return (
    <div style={{ padding: '14px 18px 4px' }}>
      <Link href={href} style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        textDecoration: 'none', borderRadius: 12,
        border: `1px solid ${artAlpha(accent, 0.55)}`, background: artAlpha(accent, 0.1),
        padding: '13px 16px', color: INK,
      }}>
        <span style={{ minWidth: 0 }}>
          <span style={{ display: 'block', fontFamily: SANS, fontSize: 14, fontWeight: 600, letterSpacing: 0.1, color: INK }}>{label}</span>
          {sub && <span style={{ display: 'block', marginTop: 2, fontFamily: SANS, fontSize: 11.5, color: MUTED }}>{sub}</span>}
        </span>
        <span style={{ flexShrink: 0, width: 30, height: 30, borderRadius: 999, background: accent, color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700 }}>→</span>
      </Link>
    </div>
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

// Full-bleed hero. Composition adapts so a painting is NEVER awkwardly cut off
// (audits/art-vertical.md "Image orientation"):
//   • single landscape work / deliberate detail → fit="cover" (+ focus)  [default]
//   • single portrait/square WHOLE work          → fit="contain" (blurred backdrop)
//   • two+ portrait works as a genre diptych     → pass `images`
/* eslint-disable @next/next/no-img-element */
export function ArtHero({ eyebrow, title, sub, palette, imageUrl, images, credit, fit = 'cover', focus = 'center' }: { eyebrow: string; title: string; sub?: string; palette: Palette; imageUrl?: string; images?: HeroImage[]; credit?: string; accent?: string; fit?: 'cover' | 'contain'; focus?: string }) {
  const [failed, setFailed] = useState(false)
  const list: HeroImage[] = images && images.length ? images : (imageUrl ? [{ src: imageUrl, focus }] : [])
  const multi = list.length > 1
  const show = list.length > 0 && !failed
  return (
    <>
    <div style={{ position: 'relative', height: 240, overflow: 'hidden', background: `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})` }}>
      {/* blurred, dimmed backdrop fills the letterbox so a contained work never reads as "cut off" */}
      {show && fit === 'contain' && !multi && (
        <img src={list[0].src} alt="" aria-hidden style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(28px) brightness(0.45) saturate(1.1)', transform: 'scale(1.15)' }} />
      )}
      {show && (multi ? (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', gap: 2 }}>
          {list.map((im, i) => (
            <img key={i} src={im.src} alt="" onError={i === 0 ? () => setFailed(true) : undefined} style={{ flex: 1, minWidth: 0, height: '100%', objectFit: 'cover', objectPosition: im.focus || 'center' }} />
          ))}
        </div>
      ) : (
        <img src={list[0].src} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: fit, objectPosition: list[0].focus || focus }} />
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 30%, rgba(0,0,0,0.72) 100%)' }} />
      <div style={{ position: 'absolute', left: 18, right: 18, bottom: 14 }}>
        {/* eyebrow stays white for contrast over any painting (accent purple was unreadable on dark images) */}
        <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.5, fontWeight: 700, textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', textShadow: '0 1px 3px rgba(0,0,0,0.75)' }}>{eyebrow}</div>
        <h1 style={{ margin: '4px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 28, lineHeight: 1.05, letterSpacing: -0.4, color: '#fff', textShadow: '0 1px 4px rgba(0,0,0,0.55)' }}>{title}</h1>
        {sub && <div style={{ marginTop: 6, fontFamily: SANS, fontSize: 12.5, color: 'rgba(255,255,255,0.85)', textShadow: '0 1px 3px rgba(0,0,0,0.55)' }}>{sub}</div>}
      </div>
      </div>
      {/* credit goes UNDER the image, museum-label style, with the work's current location */}
      {credit && (
        <div style={{ padding: '8px 16px 2px', fontFamily: SANS, fontSize: 11, lineHeight: 1.45, color: MUTED, letterSpacing: 0.2 }}>{credit}</div>
      )}
    </>
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
