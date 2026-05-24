'use client'

// Shared Art narrative reader — the chapter shell + prose primitives used by
// EVERY long-form Art read, at any altitude of the drilldown:
//   • Work  level — the five Demoiselles chapters (art-section-reader.tsx)
//   • Movement level — the Cubism chapters (.../s/[sectionId] + cubism-narratives)
//   • Era   level — the Modern chapters   (.../s/[sectionId] + modern-narratives)
//
// Each read is the same furniture: a breadcrumb, a ChapterHeader (eyebrow + h1 +
// progress bar), the authored prose (a NARRATIVES component keyed by section id),
// prev/next chapter nav, a back link, and a tap-to-zoom lightbox. The prose
// primitives (DropCap, SectionHeader, figures with the rights subsystem, the
// "Meanwhile in…" sheet) live here so all three levels stay identical.
//
// Prose ported from / authored in the house voice; inline figures honour the
// copyright tiers in art-content.ts (pre-1931 → inline with a Rights line;
// post-1930 / in-copyright → the degraded RestrictedFigure reference).

import { useState } from 'react'
import Link from 'next/link'
import { WarBreadcrumb, type Crumb } from '@/components/mode/war-chrome'
import { artAlpha, SANS, SERIF, INK, MUTED, FAINT, BORDER, CARD_BG } from '@/components/mode/art-chrome'
import type { WorkSection } from '@/lib/art-content'

// ─────────────────────────────────────────────────────────────
// Prose primitives
// ─────────────────────────────────────────────────────────────
export const proseStyle: React.CSSProperties = { margin: '0 0 14px', fontFamily: SERIF, fontSize: 16, lineHeight: 1.62, color: INK, letterSpacing: -0.01 }
export const proseMutedStyle: React.CSSProperties = { ...proseStyle, color: MUTED }
export const italicStyle: React.CSSProperties = { ...proseStyle, fontStyle: 'italic', color: MUTED }

export const PD_RIGHTS = 'Public domain in the United States (first published before 1931).'
export const AMBER = '#d97706'
export const BLUE = '#1d4ed8'

export type NarrativeProps = { accent: string; onZoom: (src: string, cap: string) => void }
export type Narrative = (props: NarrativeProps) => React.ReactElement

export function DropCap({ children, accent }: { children: React.ReactNode; accent: string }) {
  return <span style={{ float: 'left', fontFamily: SERIF, fontWeight: 500, fontSize: 50, lineHeight: 0.85, paddingRight: 8, paddingTop: 6, color: accent }}>{children}</span>
}

export function SectionHeader({ accent, label, title, first }: { accent: string; label: string; title: string; first?: boolean }) {
  return (
    <div style={{ margin: first ? '4px 0 18px' : '36px 0 18px', paddingTop: first ? 0 : 18, borderTop: first ? 'none' : `1px solid ${BORDER}` }}>
      <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.6, fontWeight: 700, color: accent, textTransform: 'uppercase' }}>{label}</div>
      <h2 style={{ margin: '6px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 22, lineHeight: 1.15, letterSpacing: -0.3, color: INK }}>{title}</h2>
    </div>
  )
}

function ChapterHeader({ accent, eyebrow, title, progress }: { accent: string; eyebrow: string; title: string; progress: number }) {
  return (
    <div style={{ padding: '16px 18px 0' }}>
      <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.5, fontWeight: 700, color: accent, textTransform: 'uppercase' }}>{eyebrow}</div>
      <h1 style={{ margin: '4px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 26, lineHeight: 1.1, letterSpacing: -0.4, color: INK }}>{title}</h1>
      <div style={{ height: 3, background: BORDER, borderRadius: 2, marginTop: 12 }}>
        <div style={{ height: '100%', width: `${Math.round(progress * 100)}%`, background: accent, borderRadius: 2 }} />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Lineage strip — ↑From / ↓To pill chips (cross-modal aware)
// ─────────────────────────────────────────────────────────────
type Chip = { label: string; mode?: 'art' | 'civ' | 'war' }

export function LineageStrip({ accent, parents, descendants }: { accent: string; parents: Chip[]; descendants: Chip[] }) {
  const row = (label: string, items: Chip[]) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', margin: '5px 0' }}>
      <span style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1, fontWeight: 700, color: accent, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 4 }}>{label}</span>
      {items.map(c => {
        const isCiv = c.mode === 'civ' || c.mode === 'war'
        return (
          <span
            key={c.label}
            style={{
              fontFamily: SANS, fontSize: 12.5, fontWeight: 500, color: INK,
              border: `1px solid ${isCiv ? artAlpha(accent, 0.45) : BORDER}`,
              background: isCiv ? artAlpha(accent, 0.1) : CARD_BG,
              padding: '7px 12px', borderRadius: 999, whiteSpace: 'nowrap',
              borderStyle: isCiv ? 'dashed' : 'solid',
            }}
          >{c.label}</span>
        )
      })}
    </div>
  )
  return (
    <div style={{ padding: '14px 18px 16px', borderBottom: `1px solid ${BORDER}` }}>
      {row('↑ From', parents)}
      {row('↓ To', descendants)}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Inline figure — full treatment (pre-1931 / PD-US) with a Rights line + zoom.
// ─────────────────────────────────────────────────────────────
export function PaintingFigure({ imageUrl, palette, alt, caption, rights, ratio = '4/5', onZoom }: { imageUrl: string; palette: [string, string, string]; alt: string; caption: React.ReactNode; rights?: React.ReactNode; ratio?: string; onZoom?: (src: string, cap: string) => void }) {
  const [failed, setFailed] = useState(false)
  const captionText = typeof caption === 'string' ? caption : alt
  return (
    <figure style={{ margin: '20px 0 18px', padding: 0 }}>
      <div
        onClick={onZoom && !failed ? () => onZoom(imageUrl, captionText) : undefined}
        style={{ position: 'relative', borderRadius: 8, overflow: 'hidden', background: failed ? `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})` : palette[2], aspectRatio: failed ? ratio : undefined, cursor: onZoom && !failed ? 'zoom-in' : 'default' }}
      >
        {!failed && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={imageUrl} alt={alt} loading="lazy" onError={() => setFailed(true)} style={{ width: '100%', height: 'auto', display: 'block' }} />
        )}
        {!failed && onZoom && (
          <span style={{ position: 'absolute', top: 10, right: 10, width: 34, height: 34, borderRadius: 999, background: 'rgba(20,18,15,0.62)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, backdropFilter: 'blur(3px)', WebkitBackdropFilter: 'blur(3px)' }} aria-hidden>⤢</span>
        )}
      </div>
      <figcaption style={{ marginTop: 11, fontFamily: SERIF, fontSize: 12.5, fontStyle: 'italic', color: MUTED, lineHeight: 1.45 }}>{caption}</figcaption>
      {rights && (
        <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start', fontFamily: SANS, fontSize: 11.5, lineHeight: 1.5, color: FAINT, padding: '7px 0 0', borderTop: `1px dashed ${BORDER}`, marginTop: 9 }}>
          <b style={{ color: MUTED, fontWeight: 600 }}>Rights</b><span>{rights}</span>
        </div>
      )}
    </figure>
  )
}

// Degraded reference card for post-1930 / in-copyright works (Guernica, Pollock,
// Warhol, …). The prose carries the picture the rights regime won't let us show.
export function RestrictedFigure({ imageUrl, title, year, note, linkLabel, href }: { imageUrl?: string; title: React.ReactNode; year: string; note: string; linkLabel: string; href: string }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ display: 'flex', gap: 14, alignItems: 'stretch', border: `1px solid ${BORDER}`, background: CARD_BG, borderRadius: 14, padding: 13, margin: '20px 0 18px' }}>
      <div style={{ flexShrink: 0, width: 104, borderRadius: 9, overflow: 'hidden', position: 'relative', background: '#1c1410' }}>
        {imageUrl && !failed && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img src={imageUrl} alt="" loading="lazy" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(0.92)' }} />
        )}
        <span style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(34,32,30,0.08), rgba(34,32,30,0.30))' }} />
      </div>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: SANS, fontSize: 10, letterSpacing: 1, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>⊘ Under copyright</div>
        <div style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, margin: '6px 0 2px', lineHeight: 1.25, color: INK }}>{title}</div>
        <div style={{ fontFamily: SANS, fontSize: 12.5, lineHeight: 1.4, color: MUTED }}>{year}</div>
        <div style={{ fontFamily: SANS, fontSize: 12, lineHeight: 1.45, color: FAINT, marginTop: 7 }}>{note}</div>
        <a href={href} target="_blank" rel="noopener noreferrer" style={{ marginTop: 'auto', fontFamily: SANS, fontSize: 13, fontWeight: 600, color: 'var(--accent, #7c3aed)', textDecoration: 'none', paddingTop: 9, display: 'inline-flex', gap: 5 }}>{linkLabel} →</a>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// "Meanwhile in…" sheet — accent top border cross-link into the corpus
// ─────────────────────────────────────────────────────────────
export function MeanwhileSheet({ accent, region, when, title, body, palette, ctaLabel }: { accent: string; region: string; when: string; title: string; body: string; palette: [string, string, string]; ctaLabel: string }) {
  return (
    <div style={{ margin: '20px 14px 0', border: `1px solid ${BORDER}`, borderTopWidth: 3, borderTopColor: accent, borderRadius: '16px 16px 0 0', background: CARD_BG, padding: '15px 16px 18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <span style={{ fontFamily: SANS, fontSize: 11, letterSpacing: 1, fontWeight: 700, color: accent, textTransform: 'uppercase' }}>Meanwhile in… {region}</span>
        <span style={{ fontFamily: SANS, fontSize: 11, color: FAINT }}>{when}</span>
      </div>
      <div style={{ display: 'flex', gap: 12, marginTop: 11 }}>
        <div style={{ flexShrink: 0, width: 62, height: 62, borderRadius: 9, background: `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})` }} />
        <div>
          <h4 style={{ fontFamily: SERIF, fontSize: 16, fontWeight: 600, lineHeight: 1.3, color: INK }}>{title}</h4>
          <p style={{ fontFamily: SANS, fontSize: 13, lineHeight: 1.5, color: MUTED, marginTop: 3 }}>{body}</p>
        </div>
      </div>
      <button style={{ marginTop: 13, fontFamily: SANS, fontSize: 13, fontWeight: 600, color: accent, border: `1px solid ${BORDER}`, background: 'transparent', borderRadius: 20, padding: '9px 15px', cursor: 'pointer' }}>{ctaLabel} →</button>
    </div>
  )
}

// ═════════════════════════════════════════════════════════════
// Generic chapter reader shell — the same for every Art narrative level.
// ═════════════════════════════════════════════════════════════
export function ArtNarrativeReader({
  crumbs, accent, eyebrowPrefix, sections, currentId, narratives, baseHref, backHref, backLabel,
}: {
  crumbs: Crumb[]
  accent: string
  eyebrowPrefix: string
  sections: WorkSection[]
  currentId: string
  narratives: Record<string, Narrative>
  baseHref: string   // prev/next link to `${baseHref}/${id}`
  backHref: string
  backLabel: string
}) {
  const idx = sections.findIndex(s => s.id === currentId)
  const section = sections[idx]
  const prev = idx > 0 ? sections[idx - 1] : null
  const next = idx < sections.length - 1 ? sections[idx + 1] : null

  const [lb, setLb] = useState<{ src: string; cap: string } | null>(null)
  const onZoom = (src: string, cap: string) => setLb({ src, cap })

  const Narrative = narratives[section.id] || Object.values(narratives)[0]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)', ['--accent' as string]: accent }}>
      <WarBreadcrumb crumbs={crumbs} accent={accent} />
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: 'var(--background)', color: 'var(--foreground)' }}>
        <ChapterHeader accent={accent} eyebrow={`${eyebrowPrefix} · ${section.eyebrow}`} title={section.title} progress={section.progress} />
        <Narrative accent={accent} onZoom={onZoom} />

        {/* prev / next chapter nav + back to the parent */}
        <div style={{ padding: '28px 18px 8px', display: 'flex', gap: 10 }}>
          {prev ? (
            <Link href={`${baseHref}/${prev.id}`} style={{ flex: 1, minWidth: 0, display: 'block', textDecoration: 'none', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 14px', color: INK, background: CARD_BG }}>
              <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.2, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>← Previous</div>
              <div style={{ fontFamily: SERIF, fontSize: 14, fontWeight: 500, marginTop: 3, color: INK, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{prev.title}</div>
            </Link>
          ) : <div style={{ flex: 1 }} />}
          {next ? (
            <Link href={`${baseHref}/${next.id}`} style={{ flex: 1, minWidth: 0, display: 'block', textDecoration: 'none', border: `1px solid ${BORDER}`, borderRadius: 10, padding: '12px 14px', color: INK, background: CARD_BG, textAlign: 'right' }}>
              <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.2, fontWeight: 700, color: artAlpha(accent, 0.95), textTransform: 'uppercase' }}>Next →</div>
              <div style={{ fontFamily: SERIF, fontSize: 14, fontWeight: 500, marginTop: 3, color: INK, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{next.title}</div>
            </Link>
          ) : <div style={{ flex: 1 }} />}
        </div>
        <div style={{ padding: '6px 18px 60px' }}>
          <Link href={backHref} style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: accent, textDecoration: 'none', display: 'inline-flex', gap: 5 }}>← {backLabel}</Link>
        </div>
      </div>

      {/* lightbox */}
      {lb && (
        <div
          onClick={() => setLb(null)}
          style={{ position: 'fixed', inset: 0, background: 'rgba(10,9,7,0.95)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 18, cursor: 'zoom-out' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lb.src} alt={lb.cap} style={{ maxWidth: '100%', maxHeight: '88vh', borderRadius: 6 }} />
          <div style={{ position: 'absolute', bottom: 22, left: 0, right: 0, textAlign: 'center', fontFamily: SANS, fontSize: 12, lineHeight: 1.4, color: '#cfc6b4', padding: '0 24px' }}>{lb.cap}</div>
        </div>
      )}
    </div>
  )
}
