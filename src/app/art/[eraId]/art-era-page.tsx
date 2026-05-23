'use client'

// Art Era page body — the interactive client component behind the era route.
//
// Two views behind the chrome's toggle (Timeline | Dossier):
//   Dossier (default) — hero, "At a glance" (stats + tensions face-off),
//     anchor-painters strip, the "where modern art happened" city-hub map, and
//     the cord/node timeline of the era's movements.
//   Timeline — hero, the long hook as a lead paragraph, then the same movements
//     cord/node timeline.
//
// Only the Modern era is authored (ART_ERA_CONTENT['mod']); every other era id
// still builds and shows a tasteful "coming soon" body under the same chrome.
//
// Ported from the mockup's MovementsTimeline + EraDossierMap (art-pages.jsx)
// and BattleCard (war-detail.jsx → local ArtCard) into the app's CSS-var
// theming, fonts, and accent palette. See audits/art-vertical.md.

import { useState } from 'react'
import Link from 'next/link'
import {
  ArtChrome,
  ArtPageShell,
  ArtHero,
  ArtAtAGlance,
  ArtistsStrip,
  Eyebrow,
  artEraCrumbs,
  type ArtView,
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
import { ART_ERAS } from '@/lib/art-data'
import {
  ART_ERA_CONTENT,
  ART_MOVEMENT_CONTENT,
  MODERN_MAP_HUBS,
  type EraMovement,
  type Palette,
} from '@/lib/art-content'

// ─────────────────────────────────────────────────────────────
// Cord/node timeline card (ported from war-detail.jsx → BattleCard).
// A cord runs down the left at x≈56; each card has a date tag, a node dot, a
// short connector, and an image tile + name + place + clamped blurb. Size
// variants s/m/l/xl drive the card height + body size.
// ─────────────────────────────────────────────────────────────
const CORD_X = 56
const CARD_LEFT = CORD_X + 16

const CARD_SIZES = {
  s: { content: 96, body: 12.5, imgW: 96 },
  m: { content: 124, body: 13, imgW: 116 },
  l: { content: 168, body: 13.5, imgW: 140 },
  xl: { content: 232, body: 14.5, imgW: 168 },
} as const

interface ArtCardData {
  mo: string
  year: string
  name: string
  place: string
  blurb: string
  size: 's' | 'm' | 'l' | 'xl'
  palette: Palette
  imgLabel?: string
  imageUrl?: string
  focus?: string // object-position for the cover crop (frame a deliberate detail)
  imageAspect?: string // w/h of the work, for the xl panel to fill edge-to-edge w/o crop
}

function ArtCardInner({ b, accent }: { b: ArtCardData; accent: string }) {
  const [imgFailed, setImgFailed] = useState(false)
  const sz = CARD_SIZES[b.size]
  const isXL = b.size === 'xl'
  const isLG = b.size === 'l'

  // xl (flagship) card: show the painting at its CORRECT aspect on the left —
  // never cropped — with the text to the right (design freedom, user 2026-05-23).
  if (isXL) {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', background: CARD_BG, borderRadius: 8, border: `1px solid ${BORDER}`, boxShadow: '0 6px 20px rgba(0,0,0,0.18)', overflow: 'hidden' }}>
        <div style={{ width: 172, flexShrink: 0, alignSelf: 'center', aspectRatio: b.imageAspect || '5 / 6', borderRight: `1px solid ${BORDER}`, background: b.palette[1], position: 'relative', overflow: 'hidden' }}>
          {b.imageUrl && !imgFailed && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={b.imageUrl} alt={b.imgLabel || b.name} loading="lazy" onError={() => setImgFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: b.focus || 'center', display: 'block', transform: 'scale(1.08)', transformOrigin: 'center', filter: 'sepia(0.12) saturate(0.9) contrast(1.03)' }} />
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0, padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: SERIF, fontSize: 22, lineHeight: 1.08, letterSpacing: -0.3, color: INK }}>{b.name}</div>
          <div style={{ fontFamily: SANS, fontSize: 10.5, color: MUTED, marginTop: 4, letterSpacing: 0.1 }}>{b.place}</div>
          <div style={{ marginTop: 9, fontFamily: SERIF, fontSize: sz.body, lineHeight: 1.45, color: INK, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>{b.blurb}</div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      background: CARD_BG,
      borderRadius: 8,
      border: `1px solid ${isXL ? artAlpha(accent, 0.55) : BORDER}`,
      boxShadow: isXL ? `0 0 0 4px ${artAlpha(accent, 0.1)}, 0 12px 28px rgba(0,0,0,0.32)` : 'none',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: isXL ? 'column' : 'row',
      height: sz.content,
    }}>
      <div style={{
        width: isXL ? '100%' : sz.imgW,
        height: isXL ? 124 : '100%',
        flexShrink: 0,
        [isXL ? 'borderBottom' : 'borderRight']: `1px solid ${BORDER}`,
        position: 'relative',
        background: `linear-gradient(135deg, ${b.palette[0]}, ${b.palette[1]} 55%, ${b.palette[2]})`,
      }}>
        {b.imageUrl && !imgFailed && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={b.imageUrl}
            alt={b.imgLabel || b.name}
            loading="lazy"
            onError={() => setImgFailed(true)}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: b.focus || 'center', display: 'block', filter: 'sepia(0.18) saturate(0.85) contrast(1.05)' }}
          />
        )}
        {b.imgLabel && (
          <div style={{
            position: 'absolute', left: 8, bottom: 7, right: 8,
            fontFamily: MONO, fontSize: 9, letterSpacing: 0.4,
            color: 'rgba(255,255,255,0.86)',
            textShadow: '0 1px 2px rgba(0,0,0,0.55)',
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
          }}>{b.imgLabel}</div>
        )}
      </div>
      <div style={{
        flex: 1, minWidth: 0,
        padding: isXL ? '10px 14px 12px' : (isLG ? '10px 12px' : '8px 11px'),
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ fontFamily: SERIF, fontSize: isXL ? 21 : (isLG ? 17 : 15), lineHeight: 1.1, letterSpacing: -0.2, color: INK }}>{b.name}</div>
        <div style={{ fontFamily: SANS, fontSize: 10, color: MUTED, marginTop: 3, letterSpacing: 0.1 }}>{b.place}</div>
        <div style={{
          marginTop: 'auto', paddingTop: 5,
          fontFamily: SERIF, fontSize: sz.body, lineHeight: 1.4,
          color: isXL ? INK : MUTED,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: isXL ? 3 : (isLG ? 3 : 2),
          WebkitBoxOrient: 'vertical',
        }}>{b.blurb}</div>
      </div>
    </div>
  )
}

function ArtCard({ b, accent, href }: { b: ArtCardData; accent: string; href?: string }) {
  const card = (
    <div style={{ position: 'relative', paddingLeft: CARD_LEFT, paddingRight: 16, marginBottom: 14 }}>
      {/* date tag on cord */}
      <div style={{ position: 'absolute', left: 4, top: 10, width: CORD_X - 12, textAlign: 'right', paddingRight: 6, fontFamily: SANS, fontSize: 10.5, letterSpacing: 0.3, fontWeight: 600 }}>
        <div style={{ color: accent, fontWeight: 700, fontSize: 11 }}>{b.mo}</div>
        <div style={{ color: FAINT, fontSize: 9.5, marginTop: 1 }}>{b.year}</div>
      </div>
      {/* node */}
      <div style={{ position: 'absolute', left: CORD_X - 5, top: 12, width: 10, height: 10, borderRadius: 999, background: accent, boxShadow: `0 0 0 3px ${artAlpha(accent, 0.18)}`, border: `1px solid ${accent}`, zIndex: 1 }} />
      {/* connector */}
      <div style={{ position: 'absolute', left: CORD_X + 5, top: 16, width: 11, height: 1, background: artAlpha(accent, 0.5) }} />
      <ArtCardInner b={b} accent={accent} />
    </div>
  )
  if (href) {
    return (
      <Link href={href} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
        {card}
      </Link>
    )
  }
  return card
}

// ─────────────────────────────────────────────────────────────
// Movements cord/node timeline (ported from MovementsTimeline). Opens with a
// "Lay of the land" intro card, then one card per movement. A movement card
// links to its movement page only when that movement is authored.
// ─────────────────────────────────────────────────────────────
function MovementsTimeline({ eraId, movements, accent }: { eraId: string; movements: EraMovement[]; accent: string }) {
  return (
    <div style={{ position: 'relative', paddingTop: 26, paddingBottom: 4 }}>
      <div style={{ position: 'absolute', left: CORD_X, top: 8, bottom: 8, width: 1, background: BORDER_STRONG }} />
      <div style={{ position: 'absolute', left: 70, top: 12, fontFamily: SANS, fontSize: 10, letterSpacing: 1.6, fontWeight: 700, color: accent, textTransform: 'uppercase', background: 'var(--background)', padding: '0 6px' }}>
        {movements.length} movements
      </div>
      <div style={{ paddingTop: 14 }}>
        <ArtCard accent={accent} b={{
          mo: '1848', year: '–60',
          name: 'Lay of the land',
          place: 'Paris, end of the salon',
          blurb: 'The 1855 Universal Exposition exiles Courbet to a tent across the street. Photography is twenty years old. The argument over what a painting is for is about to begin in earnest.',
          size: 'm',
          palette: ['#3a3a4a', '#1c1c2a', '#0a0a14'],
          imgLabel: 'Mid-19th century Paris',
        }} />
        {movements.map(m => {
          const authored = !!ART_MOVEMENT_CONTENT[m.id]
          return (
            <ArtCard
              key={m.id}
              accent={m.accent || accent}
              href={authored ? `/art/${eraId}/${m.id}` : undefined}
              b={{
                mo: m.range.split('–')[0].slice(0, 4),
                year: m.range.split('–')[1]?.slice(0, 4) ?? '',
                name: m.name,
                place: m.range,
                blurb: m.hook,
                size: m.size,
                palette: m.palette,
                imageUrl: m.imageUrl,
                focus: m.focus,
                imageAspect: m.imageAspect,
                imgLabel: m.name,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// "Where modern art happened" city-hub map (ported from EraDossierMap). A
// bordered card with a faint grid, an Atlantic dashed divider, AMERICAS /
// EUROPE mono labels, and the hub dots (Paris is bigger, accent-coloured, with
// a glow ring).
// ─────────────────────────────────────────────────────────────
function EraDossierMap({ accent }: { accent: string }) {
  const grid = artAlpha('#ffffff', 0.04)
  const divider = artAlpha('#ffffff', 0.08)
  const dividerDash = artAlpha('#ffffff', 0.18)
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <Eyebrow>Where modern art happened</Eyebrow>
        <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>Paris, mostly</div>
      </div>
      <div style={{
        position: 'relative',
        height: 200,
        background: CARD_BG,
        border: `1px solid ${BORDER}`,
        borderRadius: 6,
        overflow: 'hidden',
        backgroundImage: [
          `repeating-linear-gradient(0deg, ${grid} 0 1px, transparent 1px 18px)`,
          `repeating-linear-gradient(90deg, ${grid} 0 1px, transparent 1px 18px)`,
        ].join(','),
      }}>
        {/* Atlantic divider */}
        <div style={{
          position: 'absolute', left: '32%', top: 0, bottom: 0,
          width: 1, background: divider,
          backgroundImage: `repeating-linear-gradient(180deg, ${dividerDash} 0 3px, transparent 3px 6px)`,
        }} />
        <div style={{ position: 'absolute', left: '4%', bottom: 8, fontFamily: MONO, fontSize: 8.5, letterSpacing: 0.4, color: FAINT }}>AMERICAS</div>
        <div style={{ position: 'absolute', right: '6%', bottom: 8, fontFamily: MONO, fontSize: 8.5, letterSpacing: 0.4, color: FAINT }}>EUROPE</div>

        {MODERN_MAP_HUBS.map(h => (
          <div key={h.city} style={{ position: 'absolute', left: h.x, top: h.y, transform: 'translate(-50%, -50%)' }}>
            <div style={{
              width: h.hub ? 18 : 8,
              height: h.hub ? 18 : 8,
              borderRadius: 999,
              background: h.hub ? accent : CARD_BG,
              border: `1.5px solid ${h.hub ? accent : BORDER_STRONG}`,
              boxShadow: h.hub ? `0 0 0 4px ${artAlpha(accent, 0.18)}` : 'none',
            }} />
            <div style={{
              position: 'absolute',
              left: h.hub ? 22 : 12, top: -3,
              fontFamily: MONO, fontSize: 8.5, letterSpacing: 0.3,
              color: h.hub ? INK : MUTED, whiteSpace: 'nowrap',
              textShadow: '0 1px 2px rgba(0,0,0,0.4)',
              fontWeight: h.hub ? 700 : 500,
            }}>{h.city}{h.count > 1 ? ` · ${h.count}` : ''}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────
export function ArtEraPage({ eraId }: { eraId: string }) {
  const era = ART_ERA_CONTENT[eraId]
  const eraMeta = ART_ERAS.find(e => e.id === eraId)
  // Dossier is the default view (right); Timeline is left.
  const [view, setView] = useState<ArtView>('right')

  // ── Unauthored era: graceful "coming soon" under the same chrome. ──
  if (!era) {
    const name = eraMeta?.name ?? 'This era'
    const palette: Palette = eraMeta?.palette ?? ['#3a3a4a', '#1c1c2a', '#0a0a14']
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
        <ArtChrome crumbs={artEraCrumbs(eraId, name)} view={view} onView={setView} labels={['Timeline', 'Dossier']} accent={ART_ACCENT} />
        <ArtPageShell>
          <ArtHero
            eyebrow="ART · ERAS OF WESTERN ART"
            title={name}
            sub={eraMeta?.range}
            palette={palette}
            accent={ART_ACCENT}
          />
          <div style={{ padding: '56px 28px', textAlign: 'center' }}>
            <div style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 17, lineHeight: 1.5, color: MUTED, maxWidth: 320, margin: '0 auto', textWrap: 'pretty' }}>
              This era&rsquo;s chapters are coming soon.
            </div>
            <div style={{ marginTop: 14 }}>
              <Link href="/art/mod" style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: 0.3, color: ART_ACCENT, textDecoration: 'none' }}>
                Read the Modern era →
              </Link>
            </div>
          </div>
        </ArtPageShell>
      </div>
    )
  }

  // ── Modern era: full dossier + timeline. ──
  const accent = era.accent
  const palette: Palette = eraMeta?.palette ?? ['#3a3a4a', '#1c1c2a', '#0a0a14']

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <ArtChrome crumbs={artEraCrumbs('mod', era.name)} view={view} onView={setView} labels={['Timeline', 'Dossier']} accent={accent} />
      <ArtPageShell>
        {view === 'right' ? (
          <div key="dossier">
            <ArtHero
              eyebrow={`ART · ERAS OF WESTERN ART · ${era.chain.index} OF ${era.chain.total}`}
              title={era.name}
              sub={`${era.range} · ${era.span}`}
              palette={palette}
              imageUrl={era.heroImage}
              images={era.heroImages}
              fit={era.heroFit}
              focus={era.heroFocus}
              credit={era.heroCredit}
              accent={accent}
            />
            <ArtAtAGlance
              summary={era.stats.map(s => `${s.k} · ${s.v}`).join('  ')}
              stats={era.stats}
              faceoff={era.tensions}
            />
            <ArtistsStrip artists={era.anchorPainters} label="Painters who anchor the era" />
            <EraDossierMap accent={accent} />
            <MovementsTimeline eraId={era.id} movements={era.movements} accent={accent} />
          </div>
        ) : (
          <div key="timeline">
            <ArtHero
              eyebrow={`ART · ERAS OF WESTERN ART · ${era.chain.index} OF ${era.chain.total}`}
              title={era.name}
              sub={`${era.range} · ${era.span}`}
              palette={palette}
              imageUrl={era.heroImage}
              images={era.heroImages}
              fit={era.heroFit}
              focus={era.heroFocus}
              credit={era.heroCredit}
              accent={accent}
            />
            <div style={{ padding: '16px 18px 0' }}>
              <p style={{ margin: 0, fontFamily: SERIF, fontSize: 15, lineHeight: 1.5, color: MUTED, textWrap: 'pretty' }}>{era.hookLong}</p>
            </div>
            <MovementsTimeline eraId={era.id} movements={era.movements} accent={accent} />
          </div>
        )}
      </ArtPageShell>
    </div>
  )
}
