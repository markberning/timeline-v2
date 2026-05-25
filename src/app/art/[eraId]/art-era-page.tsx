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
  ArtAccordion,
  ReadStoryButton,
  StatsRow,
  ArtFaceoff,
  ArtistsStrip,
  Eyebrow,
  artEraCrumbs,
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
  credit?: string // art credit (artist · current location) shown bold at the end of the card
}

// Art credit shown bold at the end of a cord card whose image is a real artwork
// (every image gets attributed with its current location — pipeline rule).
function CardCredit({ credit }: { credit?: string }) {
  if (!credit) return null
  return (
    <div style={{ marginTop: 8, fontFamily: SANS, fontSize: 9.5, fontWeight: 400, lineHeight: 1.35, letterSpacing: 0.2, color: MUTED }}>{credit}</div>
  )
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
        <div style={{ width: 172, flexShrink: 0, alignSelf: 'stretch', background: b.palette[1], position: 'relative', overflow: 'hidden' }}>
          {b.imageUrl && !imgFailed && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={b.imageUrl} alt={b.imgLabel || b.name} loading="lazy" onError={() => setImgFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: b.focus || 'center', display: 'block', transform: 'scale(1.08)', transformOrigin: 'center', filter: 'sepia(0.12) saturate(0.9) contrast(1.03)' }} />
          )}
        </div>
        <div style={{ flex: 1, minWidth: 0, padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ fontFamily: SERIF, fontSize: 22, lineHeight: 1.08, letterSpacing: -0.3, color: INK }}>{b.name}</div>
          <div style={{ fontFamily: SANS, fontSize: 10.5, color: MUTED, marginTop: 4, letterSpacing: 0.1 }}>{b.place}</div>
          <div style={{ marginTop: 9, fontFamily: SERIF, fontSize: sz.body, lineHeight: 1.45, color: INK, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>{b.blurb}</div>
          <CardCredit credit={b.credit} />
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
      minHeight: sz.content,
    }}>
      <div style={{
        width: isXL ? '100%' : sz.imgW,
        height: isXL ? 124 : 'auto',
        alignSelf: 'stretch',
        flexShrink: 0,
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
        {/* No name overlaid on the artwork — it's redundant with the title text beside it
            and obscures the painting (pipeline rule, audits/art-vertical.md §5b). */}
      </div>
      <div style={{
        flex: 1, minWidth: 0,
        padding: isXL ? '12px 18px 14px' : (isLG ? '14px 18px' : '11px 15px'),
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
        <CardCredit credit={b.credit} />
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
                credit: m.credit,
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
// "Where modern art happened" map (rebuilt 2026-05-24). A schematic North-
// Atlantic diagram (not true geography): a dashed Atlantic divider splitting
// AMERICAS / EUROPE, each city dot labelled with the movement(s) born there,
// and — the point of the card — the c.1940 migration arc carrying the centre of
// gravity from Paris across the ocean to New York. The two `hub` cities are the
// era's successive capitals; everything else is a one-movement satellite.
// ─────────────────────────────────────────────────────────────
const FG = (a: number) => `color-mix(in srgb, var(--foreground) ${a}%, transparent)`

function EraDossierMap({ accent }: { accent: string }) {
  const VB_W = 350, VB_H = 270, DIV_X = 120
  const paris = MODERN_MAP_HUBS.find(h => h.city === 'Paris')!
  const ny = MODERN_MAP_HUBS.find(h => h.city === 'New York')!
  // migration arc: leaves Paris up-and-left, bows over the Atlantic, and drops
  // straight down into New York from above (so it never crosses a city label).
  const arcD = `M ${paris.x} ${paris.y - 6} C ${paris.x - 30} 50, ${ny.x} 54, ${ny.x} ${ny.y - 8}`
  const arcLabelX = 108, arcLabelY = 42

  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12, gap: 8 }}>
        <Eyebrow>Where modern art happened</Eyebrow>
        <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3, textAlign: 'right' }}>Paris for ninety years — then New York</div>
      </div>
      <div style={{ borderRadius: 6, overflow: 'hidden', border: `1px solid ${BORDER}`, background: CARD_BG }}>
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} width="100%" style={{ display: 'block' }} role="img" aria-label="Schematic map: modern art's center of gravity moves from Paris to New York around 1940.">
          <defs>
            <marker id="arc-arrow" markerWidth="8" markerHeight="8" refX="5.5" refY="4" orient="auto">
              <path d="M0 0 L7 4 L0 8 Z" fill={accent} />
            </marker>
          </defs>

          {/* region tints + faint grid */}
          <rect x="0" y="0" width={DIV_X} height={VB_H} fill={FG(3.5)} />
          <rect x={DIV_X} y="0" width={VB_W - DIV_X} height={VB_H} fill={artAlpha(accent, 0.04)} />
          {Array.from({ length: Math.floor(VB_W / 24) }, (_, i) => (
            <line key={`v${i}`} x1={(i + 1) * 24} y1="0" x2={(i + 1) * 24} y2={VB_H} stroke={FG(3.5)} strokeWidth="1" />
          ))}
          {Array.from({ length: Math.floor(VB_H / 24) }, (_, i) => (
            <line key={`h${i}`} x1="0" y1={(i + 1) * 24} x2={VB_W} y2={(i + 1) * 24} stroke={FG(3.5)} strokeWidth="1" />
          ))}

          {/* Atlantic divider */}
          <line x1={DIV_X} y1="0" x2={DIV_X} y2={VB_H} stroke={FG(20)} strokeWidth="1" strokeDasharray="2 5" />
          <text x="10" y="15" fontFamily={MONO} fontSize="9" letterSpacing="0.6" fill={FG(40)}>AMERICAS</text>
          <text x={VB_W - 10} y="15" fontFamily={MONO} fontSize="9" letterSpacing="0.6" fill={FG(40)} textAnchor="end">EUROPE</text>

          {/* the migration arc — the point of the whole card */}
          <path d={arcD} fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeDasharray="5 4" markerEnd="url(#arc-arrow)" opacity="0.92" />
          <text x={arcLabelX} y={arcLabelY} fontFamily={SANS} fontSize="9" fontWeight={700} letterSpacing="0.3" fill={accent} textAnchor="middle">the center crosses · c. 1940</text>

          {/* city dots + movement labels */}
          {MODERN_MAP_HUBS.map(h => {
            const anchor = h.nameAnchor ?? 'middle'
            const movAnchor = h.movAnchor ?? anchor
            const lines = h.movLines ?? [h.movements.join(' · ')]
            return (
              <g key={h.city}>
                {h.hub && <circle cx={h.x} cy={h.y} r="9" fill={artAlpha(accent, 0.16)} />}
                <circle cx={h.x} cy={h.y} r={h.hub ? 4.5 : 3} fill={h.hub ? accent : CARD_BG} stroke={h.hub ? accent : BORDER_STRONG} strokeWidth="1.5" />
                <text x={h.x + (h.nameDx ?? 0)} y={h.y + (h.nameDy ?? -8)} fontFamily={MONO} fontSize={h.hub ? 9 : 8} fontWeight={h.hub ? 700 : 600} letterSpacing="0.4" fill={h.hub ? INK : MUTED} textAnchor={anchor} style={{ textTransform: 'uppercase' }}>{h.city}</text>
                {lines.map((ln, i) => (
                  <text key={i} x={h.x} y={h.y + (h.movDy ?? 11) + i * 11.5} fontFamily={SANS} fontSize="8.5" fontWeight={500} fontStyle="italic" fill={h.hub ? FG(80) : FG(62)} textAnchor={movAnchor}>{ln}</text>
                ))}
              </g>
            )
          })}
        </svg>
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
  // Single view (the Timeline/Dossier toggle was removed).

  // ── Unauthored era: graceful "coming soon" under the same chrome. ──
  if (!era) {
    const name = eraMeta?.name ?? 'This era'
    const palette: Palette = eraMeta?.palette ?? ['#3a3a4a', '#1c1c2a', '#0a0a14']
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
        <ArtChrome crumbs={artEraCrumbs(eraId, name)} accent={ART_ACCENT} />
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
      <ArtChrome crumbs={artEraCrumbs('mod', era.name)} accent={accent} />
      <ArtPageShell>
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
        <div style={{ padding: '16px 18px 4px' }}>
          <p style={{ margin: 0, fontFamily: SERIF, fontSize: 15, lineHeight: 1.5, color: MUTED, textWrap: 'pretty' }}>{era.hookLong}</p>
        </div>
        {/* primary doorway into the era's chaptered narrative */}
        {era.sections.length > 0 && (
          <ReadStoryButton
            href={`/art/${era.id}/s/${era.sections[0].id}`}
            accent={accent}
            label={`Read the ${era.name} era`}
            sub={`${era.sections.length} chapters · ${era.range}`}
          />
        )}
        {/* signature visual — always visible */}
        <EraDossierMap accent={accent} />
        {/* secondary detail — collapsed by default */}
        <ArtAccordion label="The details" accent={accent}>
          <StatsRow stats={era.stats} />
          <ArtFaceoff items={era.tensions} />
          <ArtistsStrip artists={era.anchorPainters} label="Painters who anchor the era" />
        </ArtAccordion>
        <MovementsTimeline eraId={era.id} movements={era.movements} accent={accent} />
      </ArtPageShell>
    </div>
  )
}
