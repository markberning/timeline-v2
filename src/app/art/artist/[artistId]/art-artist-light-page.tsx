'use client'

// Art Artist page — the LIGHT body (the common case). Picasso gets the heavy
// Lifeline page (art-artist-page.tsx); every other featured artist gets this:
// a small framed portrait, the vitals, a house-voice "why we feature them"
// blurb, a strip of their work-reads, and a link out to the full life on
// Wikipedia. Intentionally NOT a long-form narrative.
//
// Same chrome/fonts/accent treatment as art-work-page.tsx. The portrait may be
// fair-use / in-copyright, so it's shown SMALL (a framed headshot, credited
// beneath) — never full-bleed.

import { useState } from 'react'
import Link from 'next/link'
import {
  ArtChrome, ArtPageShell, Eyebrow,
  artArtistCrumbs, artAlpha,
  SANS, SERIF, INK, MUTED, FAINT, BORDER, BORDER_STRONG, CARD_BG,
} from '@/components/mode/art-chrome'
import { ART_ARTIST_LIGHT, ART_WORK_CONTENT, type ArtArtistLight } from '@/lib/art-content'

export function ArtArtistLightPage({ artistId }: { artistId: string }) {
  const a = ART_ARTIST_LIGHT[artistId]
  const accent = a.accent
  const works = a.workIds.map(id => ART_WORK_CONTENT[id]).filter(Boolean)
  const movementHref = `/art/${a.eraId}/${a.movementId}`
  const showFullName = !!a.fullName && a.fullName !== a.name

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <ArtChrome crumbs={artArtistCrumbs(a.name, a.eraId, a.movementId)} accent={accent} />
      <ArtPageShell>
        {/* Header block — name, vitals, role tag */}
        <div style={{ padding: '18px 18px 4px' }}>
          <Eyebrow color={accent}>{`${a.movement.toUpperCase()} · ARTIST`}</Eyebrow>
          <h1 style={{ margin: '8px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 28, lineHeight: 1.06, letterSpacing: -0.4, color: INK }}>{a.name}</h1>
          {showFullName && (
            <div style={{ marginTop: 4, fontFamily: SERIF, fontStyle: 'italic', fontSize: 14.5, color: FAINT }}>{a.fullName}</div>
          )}
          <div style={{ marginTop: 7, fontFamily: SANS, fontSize: 13, color: MUTED, letterSpacing: 0.1 }}>
            {a.years} · {a.nationality} ·{' '}
            <Link href={movementHref} style={{ color: accent, textDecoration: 'none', borderBottom: `1px solid ${artAlpha(accent, 0.45)}` }}>{a.movement}</Link>
          </div>
          <div style={{ marginTop: 8, fontFamily: SANS, fontSize: 11, letterSpacing: 1.4, fontWeight: 700, color: accent, textTransform: 'uppercase' }}>{a.role}</div>
        </div>

        {/* Small framed portrait (fair-use safe) + the "why" blurb */}
        <div style={{ padding: '16px 16px 22px', borderBottom: `1px solid ${BORDER}`, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
          <Portrait photo={a.photo} accent={accent} name={a.name} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontFamily: SERIF, fontSize: 16, lineHeight: 1.55, color: MUTED, textWrap: 'pretty' }}>{a.why}</p>
            {a.photo && a.photoCredit && (
              <div style={{ marginTop: 10, fontFamily: SANS, fontSize: 11, lineHeight: 1.45, color: FAINT, letterSpacing: 0.2 }}>{a.photoCredit}</div>
            )}
          </div>
        </div>

        {/* Featured works — small cards linking to each work-read */}
        <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
          <div style={{ marginBottom: 14 }}><Eyebrow>Featured works</Eyebrow></div>
          {works.length > 0 ? (
            <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollbarWidth: 'none' }}>
              {works.map(w => (
                <Link key={w.id} href={`/art/${w.eraId}/${w.movementId}/${w.id}`} style={{ flexShrink: 0, width: 116, textDecoration: 'none', color: INK }}>
                  <WorkThumb image={w.heroImage} name={w.shortName} accent={accent} />
                  <div style={{ marginTop: 7, fontFamily: SERIF, fontSize: 13, lineHeight: 1.2, letterSpacing: -0.1, color: INK }}>{w.shortName}</div>
                  <div style={{ marginTop: 2, fontFamily: SANS, fontSize: 11, color: FAINT, letterSpacing: 0.2 }}>{w.year}</div>
                </Link>
              ))}
            </div>
          ) : (
            <div style={{ fontFamily: SERIF, fontSize: 15, lineHeight: 1.5, color: MUTED }}>
              Featured in{' '}
              <Link href={movementHref} style={{ color: accent, textDecoration: 'none', borderBottom: `1px solid ${artAlpha(accent, 0.45)}` }}>{a.movement}</Link>.
            </div>
          )}
        </div>

        {/* Footer — the full life lives on Wikipedia */}
        <div style={{ padding: '20px 18px 32px' }}>
          <a href={`https://en.wikipedia.org/wiki/${a.wiki}`} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: SANS, fontSize: 13, fontWeight: 600, color: accent, textDecoration: 'none', borderBottom: `1px solid ${artAlpha(accent, 0.45)}`, paddingBottom: 1 }}>
            Read the full life on Wikipedia <span aria-hidden>→</span>
          </a>
        </div>
      </ArtPageShell>
    </div>
  )
}

// A modest framed portrait — fair-use safe (shown small, credited beneath the
// blurb), with a gradient fallback from the accent when there's no photo.
function Portrait({ photo, accent, name }: { photo?: string; accent: string; name: string }) {
  const [failed, setFailed] = useState(false)
  const showImg = !!photo && !failed
  return (
    <div style={{ flexShrink: 0, width: 104, height: 128, borderRadius: 6, overflow: 'hidden', position: 'relative', border: `1px solid ${BORDER_STRONG}`, background: `linear-gradient(135deg, ${artAlpha(accent, 0.4)}, ${CARD_BG} 60%, ${artAlpha(accent, 0.18)})` }}>
      {showImg && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={photo} alt={name} loading="lazy" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 22%', filter: 'sepia(0.12) saturate(0.9) contrast(1.02)' }} />
      )}
    </div>
  )
}

// A small work thumbnail with a gradient fallback.
function WorkThumb({ image, name, accent }: { image?: string; name: string; accent: string }) {
  const [failed, setFailed] = useState(false)
  const showImg = !!image && !failed
  return (
    <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: 6, overflow: 'hidden', position: 'relative', border: `1px solid ${BORDER}`, background: `linear-gradient(135deg, ${artAlpha(accent, 0.35)}, ${CARD_BG} 60%, ${artAlpha(accent, 0.15)})` }}>
      {showImg && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt={name} loading="lazy" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.08) saturate(0.92) contrast(1.04)' }} />
      )}
    </div>
  )
}

export type { ArtArtistLight }
