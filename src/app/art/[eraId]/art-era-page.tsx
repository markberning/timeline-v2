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
import { OrientationCard } from '@/components/mode/orientation-card'
import { Lightbox } from '@/components/lightbox'
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
  WhatChangedBlock,
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
  ART_IMG,
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
  portrait?: boolean // tall work → image-left / text-right (else image-on-top)
  credit?: string // art credit (artist · current location) shown bold at the end of the card
}

function ArtCardInner({ b, accent }: { b: ArtCardData; accent: string }) {
  // The locked card now lives in the shared OrientationCard (BEHAVIORS.md "Cards").
  return (
    <OrientationCard
      size={b.size}
      accent={accent}
      imageUrl={b.imageUrl}
      portrait={b.portrait}
      alt={b.imgLabel || b.name}
      title={b.name}
      sub={b.place}
      body={b.blurb}
      credit={b.credit}
    />
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
        <ArtCard accent={accent} href={`/art/${eraId}/s/land`} b={{
          mo: '1848', year: '–60',
          name: 'Lay of the land',
          place: 'Paris · the world before the revolt',
          blurb: 'One ladder, owned by the State: the Académie trained the painters, the Salon showed them, a medal made a career. Then photography, paint in tubes and a rebuilt Paris quietly load the gun.',
          size: 'm',
          palette: ['#6b5a3a', '#3a2e1c', '#14100a'],
          imageUrl: ART_IMG.salonHang,
          focus: '50% 42%',
          credit: 'Martini after Ramberg, Salon of 1787 (engraving) · The Met',
          imgLabel: 'The Salon hung floor-to-ceiling',
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
                portrait: m.portrait,
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
// and — the point of the card — the c.1940 migration arc carrying the center of
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
  const [lb, setLb] = useState<{ src: string; cap: string } | null>(null)
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
        {/* why this is genuinely a new era — the before/after contrast */}
        {era.whatChanged && (
          <WhatChangedBlock wc={era.whatChanged} accent={accent} onZoom={(src, cap) => setLb({ src, cap })} />
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
      {lb && <Lightbox src={lb.src} alt={lb.cap} caption={lb.cap} onClose={() => setLb(null)} />}
    </div>
  )
}
