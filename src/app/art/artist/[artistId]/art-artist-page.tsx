'use client'

// Art Artist page body — the interactive client component behind the artist
// route.
//
// Two views behind the chrome's toggle (Lifeline | Dossier):
//   Dossier (default) — hero, "At a glance" (stats), the signature LIFELINE
//     visual, the key-works strip, and the vertical list of the 9 periods.
//   Lifeline — hero, the long hook as a lead paragraph, then a cord/node list
//     of the 9 periods (node dot in each period's colour).
//
// Only Picasso is authored (ART_ARTIST_CONTENT['picasso']); every other artist
// id still builds and shows a tasteful "coming soon" body under the same chrome.
//
// Ported from the mockup's Lifeline + KeyWorksStrip + PeriodsList
// (art-pages.jsx) into the app's CSS-var theming, fonts, and accent palette.
// See audits/art-vertical.md (§"Lifeline is the Artist-page anchor").

import Link from 'next/link'
import {
  ArtChrome,
  ArtPageShell,
  ArtHero,
  ArtAccordion,
  StatsRow,
  ArtTile,
  Eyebrow,
  artArtistCrumbs,
  SANS,
  SERIF,
  MONO,
  INK,
  MUTED,
  FAINT,
  BORDER,
  BORDER_STRONG,
  CARD_BG,
  ART_ACCENT,
  artAlpha,
} from '@/components/mode/art-chrome'
import {
  ART_ARTIST_CONTENT,
  ART_WORK_CONTENT,
  type ArtArtistContent,
  type Palette,
} from '@/lib/art-content'

const HERO_PALETTE: Palette = ['#3a2a1c', '#1c1410', '#0a0606']

// Parse a "1901–1904" range into [start, end] integers (en-dash separator).
function parseRange(range: string): [number, number] {
  const [a, b] = range.split('–')
  return [parseInt(a, 10), parseInt(b, 10)]
}

// ─────────────────────────────────────────────────────────────
// THE LIFELINE — the signature artist visualization (ported from the mockup's
// Lifeline). A ~168px-tall bordered card: a year grid spanning birth→death,
// the periods drawn as layered horizontal bars in their colour with mono-caps
// labels along the top of each band, a single horizontal life axis at 60%,
// key-work dots on the axis (coloured by their period), and birth/death
// markers at the two ends.
// ─────────────────────────────────────────────────────────────
function Lifeline({ a }: { a: ArtArtistContent }) {
  const minY = a.born.year
  const maxY = a.died.year
  const col = (y: number) => `${((y - minY) / (maxY - minY)) * 100}%`
  const birthMarker = a.born.place.split(',')[0].trim()
  const deathMarker = a.died.place.split(',')[0].trim()
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <Eyebrow>Lifeline</Eyebrow>
        <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>
          {minY}–{maxY} · {a.span}
        </div>
      </div>
      <div style={{ position: 'relative', height: 168, background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 6, overflow: 'hidden' }}>
        {/* period bands */}
        {a.periods.map((p, i) => {
          const [startYear, endYear] = parseRange(p.range)
          return (
            <div
              key={p.id}
              style={{
                position: 'absolute',
                left: col(startYear),
                width: `calc(${col(endYear)} - ${col(startYear)})`,
                top: '20%',
                bottom: '40%',
                background: artAlpha(p.color, 0.22),
                borderLeft: i > 0 ? `1px solid ${artAlpha('#ffffff', 0.06)}` : 'none',
              }}
            />
          )
        })}
        {/* period labels (first word, mono caps, centred over each band) */}
        {a.periods.map(p => {
          const [startYear, endYear] = parseRange(p.range)
          const center = (startYear + endYear) / 2
          return (
            <div
              key={`l-${p.id}`}
              style={{
                position: 'absolute',
                left: col(center),
                transform: 'translateX(-50%)',
                top: 8,
                fontFamily: MONO,
                fontSize: 8,
                letterSpacing: 0.3,
                color: p.color,
                textTransform: 'uppercase',
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }}
            >
              {p.label.split(' ')[0]}
            </div>
          )
        })}
        {/* main life axis */}
        <div style={{ position: 'absolute', left: '4%', right: '4%', top: '60%', height: 2, background: artAlpha('#ffffff', 0.25), transform: 'translateY(-50%)' }} />
        {/* key-work dots, coloured by their period */}
        {a.keyWorks.map(w => {
          const p = a.periods.find(pp => pp.id === w.period)
          const dotColor = p?.color ?? a.accent
          return (
            <div key={`${w.year}-${w.name}`} style={{ position: 'absolute', left: col(w.year), top: '60%', transform: 'translate(-50%, -50%)' }}>
              <div style={{ width: 9, height: 9, borderRadius: 999, background: dotColor, boxShadow: `0 0 0 3px ${artAlpha(dotColor, 0.2)}` }} />
              <div style={{ position: 'absolute', left: '50%', top: 14, transform: 'translateX(-50%)', fontFamily: MONO, fontSize: 8.5, letterSpacing: 0.3, color: INK, whiteSpace: 'nowrap', fontWeight: 600 }}>{w.year}</div>
            </div>
          )
        })}
        {/* birth / death markers at the two ends */}
        <div style={{ position: 'absolute', left: '4%', bottom: 8, fontFamily: MONO, fontSize: 9, letterSpacing: 0.3, color: FAINT }}>{minY} {birthMarker}</div>
        <div style={{ position: 'absolute', right: '4%', bottom: 8, fontFamily: MONO, fontSize: 9, letterSpacing: 0.3, color: FAINT }}>{maxY} {deathMarker}</div>
      </div>
      <div style={{ marginTop: 10, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.45, color: MUTED, textWrap: 'pretty' }}>
        Nine periods across ninety-two years. The Demoiselles is right at the seam between the African mask period and analytic Cubism.
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Key works — a horizontal strip of cards (year · name + hook). The card for
// 'Les Demoiselles d’Avignon' links to its Work page (the only authored work);
// the rest are non-clickable.
// ─────────────────────────────────────────────────────────────
function KeyWorksStrip({ a }: { a: ArtArtistContent }) {
  return (
    <div style={{ padding: '20px 0 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ padding: '0 16px', marginBottom: 12 }}><Eyebrow>Key works</Eyebrow></div>
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollbarWidth: 'none', padding: '0 16px' }}>
        {a.keyWorks.map(w => {
          const period = a.periods.find(p => p.id === w.period)
          const tilePalette: Palette = period
            ? [artAlpha(period.color, 0.85), '#2a221c', '#0a0606']
            : ['#c0a06c', '#3d3a2e', '#8a6b3a']
          const linkable = w.name.startsWith('Les Demoiselles') && !!ART_WORK_CONTENT['demoiselles']
          const inner = (
            <>
              <div style={{ width: '100%', aspectRatio: '4/5', background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 4, overflow: 'hidden' }}>
                <ArtTile palette={tilePalette} label={w.name} ratio="4/5" />
              </div>
              <div style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 0.3, color: artAlpha(a.accent, 0.95), fontWeight: 700, textTransform: 'uppercase', marginTop: 4 }}>{w.year}</div>
              <div style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.15, letterSpacing: -0.1, color: INK, fontWeight: 500 }}>{w.name}</div>
              <div style={{ fontFamily: SERIF, fontSize: 12, lineHeight: 1.4, color: MUTED, textWrap: 'pretty', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{w.hook}</div>
            </>
          )
          const cardStyle: React.CSSProperties = { flexShrink: 0, width: 168, display: 'flex', flexDirection: 'column', gap: 6, color: INK, textAlign: 'left', textDecoration: 'none' }
          if (linkable) {
            return (
              <Link key={`${w.year}-${w.name}`} href="/art/mod/cubism/demoiselles" style={{ ...cardStyle, cursor: 'pointer' }}>
                {inner}
              </Link>
            )
          }
          return (
            <div key={`${w.year}-${w.name}`} style={{ ...cardStyle, cursor: 'default' }}>
              {inner}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Periods — a vertical list of the artist's canonical periods. Each row: a
// small colour dot on a cord, the range eyebrow (in the period colour), the
// label, and the one-sentence summary.
// ─────────────────────────────────────────────────────────────
function PeriodsList({ a }: { a: ArtArtistContent }) {
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <Eyebrow>{a.periods.length} canonical periods</Eyebrow>
      <div style={{ position: 'relative', marginTop: 14 }}>
        <div style={{ position: 'absolute', left: 7, top: 6, bottom: 6, width: 1, background: BORDER_STRONG }} />
        {a.periods.map(p => (
          <div key={p.id} style={{ position: 'relative', padding: '6px 0 12px 26px' }}>
            <span style={{ position: 'absolute', left: 3, top: 8, width: 9, height: 9, borderRadius: 999, background: p.color, boxShadow: `0 0 0 3px ${artAlpha(p.color, 0.18)}`, border: `1px solid ${p.color}` }} />
            <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 0.3, fontWeight: 700, color: artAlpha(p.color, 0.95), textTransform: 'uppercase' }}>{p.range}</div>
            <div style={{ fontFamily: SERIF, fontSize: 15, lineHeight: 1.2, letterSpacing: -0.15, color: INK, marginTop: 1, fontWeight: 500 }}>{p.label}</div>
            <div style={{ marginTop: 3, fontFamily: SERIF, fontSize: 12.5, lineHeight: 1.45, color: MUTED, textWrap: 'pretty' }}>{p.summary}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export function ArtArtistPage({ artistId }: { artistId: string }) {
  const a = ART_ARTIST_CONTENT[artistId]
  // Single view (the Lifeline/Dossier toggle was removed).

  // ── Unauthored artist: graceful "coming soon" under the same chrome. ──
  if (!a) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
        <ArtChrome crumbs={artArtistCrumbs('This artist')} accent={ART_ACCENT} />
        <ArtPageShell>
          <ArtHero
            eyebrow="ART · ARTIST"
            title="This artist"
            palette={HERO_PALETTE}
            accent={ART_ACCENT}
          />
          <div style={{ padding: '56px 28px', textAlign: 'center' }}>
            <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 17, lineHeight: 1.5, color: MUTED, maxWidth: 320, margin: '0 auto', textWrap: 'pretty' }}>
              This artist&rsquo;s lifeline is coming soon.
            </div>
            <div style={{ marginTop: 14 }}>
              <Link href="/art/artist/picasso" style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: 0.3, color: ART_ACCENT, textDecoration: 'none' }}>
                Read Picasso&rsquo;s lifeline →
              </Link>
            </div>
          </div>
        </ArtPageShell>
      </div>
    )
  }

  const accent = a.accent

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <ArtChrome crumbs={artArtistCrumbs(a.name)} accent={accent} />
      <ArtPageShell>
        <ArtHero
          eyebrow="ART · ARTIST"
          title={a.name}
          sub={`${a.born.year}–${a.died.year} · ${a.nationality}`}
          palette={HERO_PALETTE}
          imageUrl={a.heroImage}
          images={a.heroImages}
          fit={a.heroFit}
          focus={a.heroFocus}
          credit={a.heroCredit}
          accent={accent}
        />
        <div style={{ padding: '16px 18px 4px' }}>
          <p style={{ margin: 0, fontFamily: SERIF, fontSize: 15, lineHeight: 1.5, color: MUTED, textWrap: 'pretty' }}>{a.hookLong}</p>
        </div>
        {/* signature visual — always visible */}
        <Lifeline a={a} />
        {/* secondary detail — collapsed by default */}
        <ArtAccordion label="The details" accent={accent}>
          <StatsRow stats={a.stats} />
          <KeyWorksStrip a={a} />
        </ArtAccordion>
        <PeriodsList a={a} />
      </ArtPageShell>
    </div>
  )
}
