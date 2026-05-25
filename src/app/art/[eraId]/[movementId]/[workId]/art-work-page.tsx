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
import { ART_WORK_CONTENT, type ArtWorkContent, type CanvasAnnotation } from '@/lib/art-content'

export function ArtWorkPage({ workId }: { eraId: string; movementId: string; workId: string }) {
  const w = ART_WORK_CONTENT[workId]
  const accent = w.accent

  const base = `/art/${w.eraId}/${w.movementId}/${w.id}`
  const secStyle: React.CSSProperties = { scrollMarginTop: 46 }
  // Sticky jump-bar — same pattern as the movement page. Sections are always
  // visible (no accordions); the stats fold into Provenance ("not much under
  // details"). "Look closer" only when the work has annotation crops.
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
        {/* No hero on artwork pages — the canvas + "Look closer" crops are the
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
        {/* the Look-closer detail crops */}
        {w.annotations.length > 0 && (
          <div id="sec-look" style={secStyle}><LookCloser w={w} /></div>
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
// Canvas viewer — the whole painting (matte cropped so it fills the frame) and
// the museum caption. Close detail lives in the "Look closer" crops below.
// ─────────────────────────────────────────────────────────────
function CanvasViewer({ w }: { w: ArtWorkContent }) {
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase', marginBottom: 12 }}>The canvas</div>
      {/* slight zoom crops the thin white matte some source scans carry, so the work fills the frame */}
      <div style={{ background: '#8a6b3a', borderRadius: 6, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
        {!failed ? (
          <div style={{ transform: 'scale(1.04)', transformOrigin: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={w.heroImage} alt={w.name} style={{ width: '100%', height: 'auto', display: 'block' }} onError={() => setFailed(true)} />
          </div>
        ) : (
          <div style={{ aspectRatio: '243 / 234', background: 'linear-gradient(135deg, #c0a06c, #3d3a2e 55%, #8a6b3a)' }} />
        )}
      </div>
      <div style={{ marginTop: 10, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.45, color: MUTED }}>
        {w.artist}, <em>{w.name}</em>, {w.year}. {w.medium}. {w.dimensions}.<br />
        {w.location}{w.acquired ? `. ${w.acquired}` : ''}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Look closer — a grid of CSS-cropped close-ups, each captioned. The frame
// takes the region's true aspect (region w/h × source W/H) and the same source
// image is scaled + offset so the region fills it (no extra image files). The
// region is x/y (center %) + w/h (size %), authored & verified per work.
// ─────────────────────────────────────────────────────────────
function CropRegion({ src, srcAspect, a }: { src: string; srcAspect: number; a: CanvasAnnotation }) {
  const w = a.w ?? 34, h = a.h ?? 26
  const cx = parseFloat(a.x), cy = parseFloat(a.y)
  // background-size matches the container aspect (= region aspect), so the image
  // isn't distorted; background-position frames the region centered on (cx,cy).
  const posX = ((cx - w / 2) / (100 - w)) * 100
  const posY = ((cy - h / 2) / (100 - h)) * 100
  return (
    <div role="img" aria-label={a.label} style={{
      width: '100%', aspectRatio: `${(w / h) * srcAspect}`,
      borderRadius: 6, border: `1px solid ${BORDER}`, backgroundColor: '#8a6b3a',
      backgroundImage: `url("${src}")`, backgroundRepeat: 'no-repeat',
      backgroundSize: `${(10000 / w).toFixed(2)}% ${(10000 / h).toFixed(2)}%`,
      backgroundPosition: `${posX.toFixed(2)}% ${posY.toFixed(2)}%`,
      filter: 'sepia(0.14) saturate(0.85) contrast(1.05)',
    }} />
  )
}

function LookCloser({ w }: { w: ArtWorkContent }) {
  if (!w.annotations.length) return null
  const src = w.heroImage, sa = w.heroAspect ?? 1
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>Look closer</div>
        <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>Details worth finding</div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {w.annotations.map((a, i) => (
          <div key={i}>
            <CropRegion src={src} srcAspect={sa} a={a} />
            <div style={{ marginTop: 7, fontFamily: SANS, fontSize: 12, fontWeight: 700, color: INK, lineHeight: 1.2 }}>{a.label}</div>
            {a.detail && <div style={{ marginTop: 3, fontFamily: SERIF, fontSize: 12.5, lineHeight: 1.45, color: MUTED, textWrap: 'pretty' }}>{a.detail}</div>}
          </div>
        ))}
      </div>
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

