'use client'

// Art Work page. NO hero — the annotated Canvas viewer IS the signature visual
// for every artwork (compact text header gives name/artist·year/lead instead).
//   compact header · canvas viewer (annotation toggle) · at-a-glance · figures
//   strip · the story (chapters) · provenance trail.
//   Story:   cord/node list of the section chapters, each a reader link.
// Ported from the mockup's CanvasViewer / WorkSectionsList / ProvenanceBlock
// into the app's CSS-var theming. Museum provenance pages are deferred for v1,
// so museum entries render as plain text (not links). See audits/art-vertical.md.

import { useState } from 'react'
import Link from 'next/link'
import {
  ArtChrome, ArtPageShell, SectionNav, StatsRow, Eyebrow,
  artWorkCrumbs, artAlpha,
  SANS, SERIF, MONO, INK, MUTED, FAINT, BORDER, BORDER_STRONG, CARD_BG,
} from '@/components/mode/art-chrome'
import { Lightbox } from '@/components/lightbox'
import { ART_WORK_CONTENT, type ArtWorkContent } from '@/lib/art-content'

export function ArtWorkPage({ workId }: { eraId: string; movementId: string; workId: string }) {
  const w = ART_WORK_CONTENT[workId]
  const accent = w.accent

  const base = `/art/${w.eraId}/${w.movementId}/${w.id}`
  const secStyle: React.CSSProperties = { scrollMarginTop: 46 }
  // Sticky jump-bar — same pattern as the movement page. Sections are always
  // visible (no accordions); the stats fold into Provenance ("not much under
  // details"). "Look closer" only when the work has prose pointers.
  const navItems = [
    { id: 'sec-canvas', label: 'Canvas' },
    ...(w.annotations.length ? [{ id: 'sec-look', label: 'Look closer' }] : []),
    { id: 'sec-story', label: 'Story' },
    { id: 'sec-provenance', label: 'Provenance' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <ArtChrome
        crumbs={artWorkCrumbs(w.eraId, w.era, w.movementId, w.movement, w.id, w.name, w.shortName)}
        accent={accent}
      />
      <ArtPageShell>
        <SectionNav accent={accent} items={navItems} />
        {/* No hero on artwork pages — the canvas + "Look closer" pointers are the
            signature visual (audits/art-vertical.md §5b). A compact text header
            gives the work its name, artist·year and one-line lead. */}
        <div id="sec-canvas" style={secStyle}>
          <div style={{ padding: '14px 18px 4px' }}>
            <Eyebrow>{`${w.movement.toUpperCase()} · WORK`}</Eyebrow>
            <h1 style={{ margin: '8px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 27, lineHeight: 1.08, letterSpacing: -0.4, color: INK }}>{w.name}</h1>
            <div style={{ marginTop: 5, fontFamily: SANS, fontSize: 12.5, color: MUTED, letterSpacing: 0.1 }}>{w.artist} · {w.year}</div>
            {w.hook && <p style={{ margin: '10px 0 0', fontFamily: SERIF, fontSize: 15, lineHeight: 1.5, color: MUTED, textWrap: 'pretty' }}>{w.hook}</p>}
          </div>
          {/* signature visual — the whole canvas */}
          <CanvasViewer w={w} />
        </div>
        {/* Look closer — full canvas + prose pointers (no crops) */}
        {w.annotations.length > 0 && (
          <div id="sec-look" style={secStyle}><LookCloser w={w} accent={accent} /></div>
        )}
        {/* the chapters — the primary read entry */}
        <div id="sec-story" style={secStyle}><WorkSectionsList w={w} base={base} accent={accent} /></div>
        {/* at-a-glance stats folded into the provenance ledger (always visible) */}
        <div id="sec-provenance" style={secStyle}>
          <StatsRow stats={w.stats} accent={accent} />
          <ProvenanceBlock w={w} accent={accent} />
        </div>
      </ArtPageShell>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Canvas viewer — the whole painting (matte cropped so it fills the frame), tap
// to pinch-zoom in the lightbox, and the museum caption. This is the ONE copy of
// the work; "Look closer" below points back to it in prose (no second image).
// ─────────────────────────────────────────────────────────────
function CanvasViewer({ w }: { w: ArtWorkContent }) {
  const [failed, setFailed] = useState(false)
  const [zoom, setZoom] = useState(false)
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>The canvas</div>
        {!failed && <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>Tap to zoom</div>}
      </div>
      {/* slight zoom crops the thin white matte some source scans carry, so the work fills the frame */}
      {!failed ? (
        <button onClick={() => setZoom(true)} aria-label={`Zoom into ${w.name}`} style={{ display: 'block', width: '100%', padding: 0, margin: 0, background: '#8a6b3a', borderRadius: 6, overflow: 'hidden', border: `1px solid ${BORDER}`, cursor: 'zoom-in' }}>
          <div style={{ transform: 'scale(1.04)', transformOrigin: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={w.heroImage} alt={w.name} style={{ width: '100%', height: 'auto', display: 'block' }} onError={() => setFailed(true)} />
          </div>
        </button>
      ) : (
        <div style={{ background: '#8a6b3a', borderRadius: 6, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
          <div style={{ aspectRatio: '243 / 234', background: 'linear-gradient(135deg, #c0a06c, #3d3a2e 55%, #8a6b3a)' }} />
        </div>
      )}
      <div style={{ marginTop: 10, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.45, color: MUTED }}>
        {w.artist}, <em>{w.name}</em>, {w.year}. {w.medium}. {w.dimensions}.<br />
        {w.location}{w.acquired ? `. ${w.acquired}` : ''}
      </div>
      {zoom && <Lightbox src={w.heroImage} alt={w.name} caption={w.name} onClose={() => setZoom(false)} />}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Look closer — a numbered list of prose pointers (what to find, where it sits,
// why it matters) that send the reader back up to the Canvas (zoom it there). NO
// second copy of the painting, and no crop/pin: any coordinate would be authored
// blind (we can't see where it lands), so words are the one reliable pointer.
// Each pointer is {label, where, detail}.
// ─────────────────────────────────────────────────────────────
function LookCloser({ w, accent }: { w: ArtWorkContent; accent: string }) {
  if (!w.annotations.length) return null
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>Look closer</div>
        <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>Find these on the canvas above</div>
      </div>
      {/* numbered prose pointers — zoom the Canvas above to find each one */}
      <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 15 }}>
        {w.annotations.map((a, i) => (
          <li key={i} style={{ display: 'flex', gap: 11 }}>
            <span aria-hidden style={{ flexShrink: 0, width: 22, height: 22, borderRadius: 999, background: artAlpha(accent, 0.16), border: `1px solid ${artAlpha(accent, 0.5)}`, color: INK, fontFamily: SANS, fontSize: 11.5, fontWeight: 700, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{i + 1}</span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: SANS, fontSize: 12.5, fontWeight: 700, color: INK, lineHeight: 1.25 }}>{a.label}</div>
              {a.where && <div style={{ marginTop: 2, fontFamily: SANS, fontSize: 11, fontWeight: 600, color: accent, lineHeight: 1.3 }}>{a.where}</div>}
              {a.detail && <div style={{ marginTop: 4, fontFamily: SERIF, fontSize: 13, lineHeight: 1.5, color: MUTED, textWrap: 'pretty' }}>{a.detail}</div>}
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// The story · 5 chapters — numbered list, each row a reader link.
// ─────────────────────────────────────────────────────────────
function WorkSectionsList({ w, base, accent }: { w: ArtWorkContent; base: string; accent: string }) {
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>The story · {w.sections.length} chapters</div>
        <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>~18 min total</div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 9, top: 4, bottom: 4, width: 1, background: BORDER_STRONG }} />
        {w.sections.map((s, i) => {
          const isFirst = i === 0
          return (
            <Link
              key={s.id}
              href={`${base}/${s.id}`}
              style={{
                position: 'relative', display: 'flex', gap: 12, alignItems: 'flex-start',
                padding: '8px 0 12px 30px', color: INK, textAlign: 'left', textDecoration: 'none',
              }}
            >
              <span style={{
                position: 'absolute', left: 0, top: 6, width: 19, height: 19, borderRadius: 999,
                background: isFirst ? artAlpha(accent, 0.18) : CARD_BG,
                border: `1px solid ${isFirst ? accent : BORDER_STRONG}`,
                color: isFirst ? accent : MUTED,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: SANS, fontSize: 10.5, fontWeight: 700, letterSpacing: 0.1,
              }}>{i + 1}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <span style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 0.4, fontWeight: 700, color: artAlpha(accent, 0.95), textTransform: 'uppercase' }}>{s.eyebrow}</span>
                <div style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.2, letterSpacing: -0.15, color: INK, marginTop: 2, fontWeight: 500 }}>{s.title}</div>
                <div style={{
                  marginTop: 4, fontFamily: SERIF, fontSize: 13, lineHeight: 1.45, color: MUTED, textWrap: 'pretty',
                }}>{s.blurb}</div>
              </div>
              <span style={{ flexShrink: 0, color: artAlpha(accent, 0.7), fontFamily: SANS, fontSize: 13, fontWeight: 600, paddingTop: 14 }} aria-hidden>→</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Provenance — the ownership trail, styled as a year-led LEDGER (deliberately
// unlike the Story's numbered chapter cord): each row leads with a mono year +
// price, rule-separated, owner in small caps-ish text. Museum entries get a tag.
// ─────────────────────────────────────────────────────────────
function ProvenanceBlock({ w, accent }: { w: ArtWorkContent; accent: string }) {
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 8 }}>
        <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>Provenance</div>
        <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>Every hand it passed through</div>
      </div>
      <div>
        {w.provenance.map((p, i) => {
          const isMuseum = !!p.museum
          return (
            <div key={p.year} style={{ display: 'flex', gap: 13, padding: '11px 0 12px', borderTop: i === 0 ? 'none' : `1px solid ${BORDER}` }}>
              {/* year + price ledger column */}
              <div style={{ width: 56, flexShrink: 0, textAlign: 'right' }}>
                <div style={{ fontFamily: MONO, fontSize: 12.5, fontWeight: 700, color: accent, letterSpacing: 0.2 }}>{p.year}</div>
                {p.price && <div style={{ fontFamily: MONO, fontSize: 9.5, color: FAINT, marginTop: 3 }}>{p.price}</div>}
              </div>
              {/* owner + note */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 7, flexWrap: 'wrap' }}>
                  <span style={{ fontFamily: SANS, fontSize: 13.5, fontWeight: 600, letterSpacing: -0.1, color: INK }}>{p.who}</span>
                  {isMuseum && <span style={{ fontFamily: SANS, fontSize: 8.5, letterSpacing: 0.5, fontWeight: 700, color: '#fff', background: accent, padding: '2px 6px', borderRadius: 2, textTransform: 'uppercase' }}>Museum</span>}
                </div>
                <div style={{ marginTop: 1, fontFamily: SANS, fontSize: 10.5, letterSpacing: 0.1, color: FAINT }}>{p.place}</div>
                <div style={{ marginTop: 5, fontFamily: SERIF, fontSize: 12.5, lineHeight: 1.4, color: MUTED, textWrap: 'pretty' }}>{p.note}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

