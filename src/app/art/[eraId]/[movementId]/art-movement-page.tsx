'use client'

// Art Movement page — Cubism is the only authored movement. Dossier (right) is
// the default view: hero → at-a-glance → cubist-artists strip → the INFLUENCE
// RIBBON (the movement-page signature visual, the equivalent of War's theatre
// map) → the works cord/node timeline → "Meanwhile, elsewhere" parallels.
// Timeline (left) view = hero + the long hook + the same works cord/node.
//
// Ported from the mockup's art-pages.jsx (InfluenceRibbon, WorksMicroList /
// WorksTimeline, ParallelsList). Mockup `t.*` theme tokens are translated to the
// app's CSS-var tokens from art-chrome (INK/MUTED/FAINT/BORDER/etc.), `shHexAlpha`
// → artAlpha, fonts → SANS/SERIF/MONO. See audits/art-vertical.md §4.

import { useState } from 'react'
import Link from 'next/link'
import {
  ArtChrome, ArtPageShell, ArtHero, ArtAccordion, ReadStoryButton, StatsRow, ArtFaceoff, ArtistsStrip, Eyebrow,
  artMovementCrumbs,
  SANS, SERIF, MONO, INK, MUTED, FAINT, BORDER, BORDER_STRONG, CARD_BG, artAlpha,
} from '@/components/mode/art-chrome'
import { ART_ACCENT } from '@/lib/art-data'
import {
  ART_MOVEMENT_CONTENT, ART_WORK_CONTENT, CUBISM_RIBBON,
  type MovementWork, type Palette,
} from '@/lib/art-content'

// Cord/node geometry (mirrors the mockup's ITL constants).
const CORD_X = 56
const CARD_LEFT = CORD_X + 16
const SIZES: Record<MovementWork['size'], { content: number; body: number; imgW: number; lines: number; title: number }> = {
  s: { content: 96, body: 12.5, imgW: 96, lines: 2, title: 14 },
  m: { content: 124, body: 13, imgW: 116, lines: 2, title: 15 },
  l: { content: 168, body: 13.5, imgW: 140, lines: 3, title: 17 },
  xl: { content: 232, body: 14.5, imgW: 168, lines: 3, title: 21 },
}

// Uniform shape for the ribbon (its source literal has heterogeneous dot
// objects — only some carry `terminal`/`workId` — so widen them here).
interface RibbonDot { year: number; canonical: boolean; label: string; workId?: string; terminal?: boolean }
interface RibbonTrack { artist: string; color: string; dots: RibbonDot[] }
interface RibbonThread { fromYear: number; fromTrack: number; toYear: number; toTrack: number }
interface RibbonShape { startYear: number; endYear: number; tracks: RibbonTrack[]; threads: RibbonThread[] }

// ─────────────────────────────────────────────────────────────
// Image tile that falls back to its 3-colour palette gradient on error.
// (A flat tile with optional label — the mockup's PaintingTile.)
// ─────────────────────────────────────────────────────────────
function CordTile({ palette, imageUrl, label }: { palette: Palette; imageUrl?: string; label?: string }) {
  const [failed, setFailed] = useState(false)
  const hasImg = !!imageUrl && !failed
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', background: `linear-gradient(135deg, ${palette[0]}, ${palette[1]} 55%, ${palette[2]})` }}>
      {hasImg && (
        <img src={imageUrl} alt={label || ''} loading="lazy" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'sepia(0.18) saturate(0.85) contrast(1.05)' }} />
      )}
      {/* No name overlaid on the artwork — redundant with the title beside it (pipeline
          rule, audits/art-vertical.md §5b). */}
    </div>
  )
}

// One cord/node card. Links to the work page only when the work is authored.
function WorkCard({ work, accent, href }: { work: MovementWork; accent: string; href?: string }) {
  const sz = SIZES[work.size]
  const isXL = work.size === 'xl'
  const isLG = work.size === 'l'
  const tappable = !!href

  const inner = (
    <>
      <div style={{ width: isXL ? '100%' : sz.imgW, height: isXL ? 124 : '100%', flexShrink: 0 }}>
        <CordTile palette={work.palette} imageUrl={work.imageUrl} label={work.name} />
      </div>
      <div style={{ flex: 1, minWidth: 0, padding: isXL ? '12px 18px 14px' : (isLG ? '14px 18px' : '11px 15px'), display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontFamily: SERIF, fontSize: sz.title, lineHeight: 1.1, letterSpacing: -0.2, color: INK, textWrap: 'balance' }}>{work.name}</div>
        <div style={{ fontFamily: SANS, fontSize: 10, color: MUTED, marginTop: 3, letterSpacing: 0.1 }}>{work.artist} · {work.place}</div>
        <div style={{ marginTop: 'auto', paddingTop: 5, fontFamily: SERIF, fontSize: sz.body, lineHeight: 1.4, color: isXL ? INK : MUTED, textWrap: 'pretty', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: sz.lines, WebkitBoxOrient: 'vertical' }}>{work.blurb}</div>
      </div>
    </>
  )

  const cardStyle: React.CSSProperties = {
    background: CARD_BG,
    borderRadius: 8,
    border: `1px solid ${isXL ? artAlpha(accent, 0.55) : BORDER}`,
    boxShadow: isXL ? `0 0 0 4px ${artAlpha(accent, 0.10)}, 0 12px 28px rgba(0,0,0,0.45)` : 'none',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: isXL ? 'column' : 'row',
    height: sz.content,
    textDecoration: 'none',
    color: INK,
    cursor: tappable ? 'pointer' : 'default',
  }

  return (
    <div style={{ position: 'relative', paddingLeft: CARD_LEFT, paddingRight: 16, marginBottom: 14 }}>
      {/* year + artist tag on cord */}
      <div style={{ position: 'absolute', left: 4, top: 10, width: CORD_X - 12, textAlign: 'right', paddingRight: 6, fontFamily: SANS, letterSpacing: 0.3 }}>
        <div style={{ color: accent, fontWeight: 700, fontSize: 11 }}>{work.year}</div>
        <div style={{ color: FAINT, fontSize: 9.5, marginTop: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{work.artist}</div>
      </div>
      {/* node + connector */}
      <div style={{ position: 'absolute', left: CORD_X - 5, top: 12, width: 10, height: 10, borderRadius: 999, background: accent, boxShadow: `0 0 0 3px ${artAlpha(accent, 0.18)}`, border: `1px solid ${accent}`, zIndex: 1 }} />
      <div style={{ position: 'absolute', left: CORD_X + 5, top: 16, width: 11, height: 1, background: artAlpha(accent, 0.5) }} />
      {tappable
        ? <Link href={href!} style={cardStyle}>{inner}</Link>
        : <div style={cardStyle}>{inner}</div>}
    </div>
  )
}

// The works cord/node timeline — the spine of works in this movement. A card
// links to its work page only when ART_WORK_CONTENT has that work authored.
function WorksCord({ works, accent, eraId, movementId }: { works: MovementWork[]; accent: string; eraId: string; movementId: string }) {
  return (
    <div style={{ position: 'relative', paddingTop: 26, paddingBottom: 4 }}>
      <div style={{ position: 'absolute', left: CORD_X, top: 8, bottom: 8, width: 1, background: BORDER_STRONG }} />
      <div style={{ position: 'absolute', left: 70, top: 12, fontFamily: SANS, fontSize: 10, letterSpacing: 1.6, fontWeight: 700, color: accent, textTransform: 'uppercase', background: 'var(--background)', padding: '0 6px' }}>
        {works.length} works
      </div>
      <div style={{ paddingTop: 14 }}>
        {works.map(w => (
          <WorkCard
            key={w.id}
            work={w}
            accent={accent}
            href={ART_WORK_CONTENT[w.id] ? `/art/${eraId}/${movementId}/${w.id}` : undefined}
          />
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// THE INFLUENCE RIBBON — the movement-page signature visual.
// Year grid + one horizontal track per artist + work dots positioned by year;
// big dot = canonical, small = ancillary, square = terminal (Braque mobilised);
// dashed accent threads show influence flowing between tracks. Built from
// CUBISM_RIBBON. A dot whose workId is authored links to its work page.
// ─────────────────────────────────────────────────────────────
function InfluenceRibbon({ accent, eraId, movementId }: { accent: string; eraId: string; movementId: string }) {
  const { startYear, endYear, tracks, threads } = CUBISM_RIBBON as RibbonShape
  // Pad the axis a touch on the left so 1907 isn't flush to the edge.
  const minY = startYear - 1
  const maxY = endYear
  const colFor = (y: number) => `${((y - minY) / (maxY - minY)) * 100}%`
  // Three evenly-spaced track baselines.
  const trackY = (i: number) => `${28 + i * 24}%`
  const trackYNum = (i: number) => 28 + i * 24

  // Year gridlines: only the years that actually carry a dot, plus the bookends.
  const dotYears = Array.from(new Set(tracks.flatMap(t => t.dots.map(d => d.year)))).sort((a, b) => a - b)
  const labelYears = [startYear, 1910, 1914, endYear]

  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <Eyebrow>How the influence flowed</Eyebrow>
      <div style={{ marginTop: 12, position: 'relative', height: 230, background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 6, overflow: 'hidden' }}>
        {/* year gridlines */}
        {dotYears.map(y => (
          <div key={`g-${y}`} style={{ position: 'absolute', left: colFor(y), top: 0, bottom: 0, width: 1, background: artAlpha('#ffffff', 0.05) }} />
        ))}
        {/* year labels along the top */}
        {labelYears.map(y => (
          <div key={`yt-${y}`} style={{ position: 'absolute', left: colFor(y), top: 6, transform: 'translateX(-50%)', fontFamily: MONO, fontSize: 8.5, letterSpacing: 0.3, color: FAINT }}>{y}</div>
        ))}
        {/* tracks: baseline + artist label */}
        {tracks.map((tk, i) => (
          <div key={tk.artist}>
            <div style={{ position: 'absolute', left: '4%', right: '4%', top: trackY(i), height: 1, background: artAlpha(tk.color, 0.35), transform: 'translateY(-50%)' }} />
            <div style={{ position: 'absolute', left: 6, top: trackY(i), transform: 'translateY(-50%)', fontFamily: SANS, fontSize: 10.5, fontWeight: 600, color: tk.color, letterSpacing: 0.2, padding: '2px 4px', background: CARD_BG }}>{tk.artist}</div>
          </div>
        ))}
        {/* dashed influence threads (drawn under the dots) */}
        <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} viewBox="0 0 100 100" preserveAspectRatio="none">
          {threads.map((th, i) => {
            const fx = ((th.fromYear - minY) / (maxY - minY)) * 100
            const tx = ((th.toYear - minY) / (maxY - minY)) * 100
            const fy = trackYNum(th.fromTrack)
            const ty = trackYNum(th.toTrack)
            return (
              <line key={`th-${i}`} x1={fx} y1={fy} x2={tx} y2={ty} stroke={accent} strokeWidth={0.5} strokeDasharray="1.2,1.2" opacity={0.55} vectorEffect="non-scaling-stroke" />
            )
          })}
        </svg>
        {/* work dots */}
        {tracks.map((tk, ti) =>
          tk.dots.map(d => {
            const big = d.canonical
            const terminal = d.terminal
            const authored = d.workId ? !!ART_WORK_CONTENT[d.workId] : false
            const dot = (
              <div style={{ width: big ? 12 : 8, height: big ? 12 : 8, borderRadius: terminal ? 2 : 999, background: tk.color, boxShadow: big ? `0 0 0 3px ${artAlpha(tk.color, 0.20)}` : 'none' }} />
            )
            const label = (
              <div style={{ position: 'absolute', left: 12, top: -3, fontFamily: MONO, fontSize: 8.5, letterSpacing: 0.3, color: INK, whiteSpace: 'nowrap', textShadow: '0 1px 2px rgba(0,0,0,0.4)', fontWeight: big ? 700 : 500 }}>{d.label}</div>
            )
            const node = (
              <>
                {dot}
                {label}
              </>
            )
            const wrap: React.CSSProperties = { position: 'absolute', left: colFor(d.year), top: trackY(ti), transform: 'translate(-50%, -50%)' }
            return authored && d.workId ? (
              <Link key={`${tk.artist}-${d.year}-${d.label}`} href={`/art/${eraId}/${movementId}/${d.workId}`} style={{ ...wrap, textDecoration: 'none' }} aria-label={d.label}>
                {node}
              </Link>
            ) : (
              <div key={`${tk.artist}-${d.year}-${d.label}`} style={wrap}>{node}</div>
            )
          }),
        )}
      </div>
      <div style={{ marginTop: 10, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.45, color: MUTED, textWrap: 'pretty' }}>
        Picasso and Braque worked so closely between 1909 and 1914 that even their dealers struggled to tell which canvas was whose. The dashes are the influences they passed across.
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// "Meanwhile, elsewhere" — other movements running alongside this one,
// rendered as a muted, grayed-out timeline of year · place · name · blurb.
// ─────────────────────────────────────────────────────────────
function ParallelsList({ parallels }: { parallels: { year: number; movement: string; place: string; blurb: string }[] }) {
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <Eyebrow>Meanwhile, elsewhere</Eyebrow>
        <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>Other movements in the same years</div>
      </div>
      <div style={{ position: 'relative', marginTop: 6 }}>
        <div style={{ position: 'absolute', left: 7, top: 6, bottom: 6, width: 1, background: BORDER_STRONG }} />
        {parallels.map(p => (
          <div key={p.movement} style={{ position: 'relative', padding: '6px 0 10px 26px', opacity: 0.6 }}>
            <span style={{ position: 'absolute', left: 3, top: 8, width: 8, height: 8, borderRadius: 999, background: CARD_BG, border: `1px solid ${BORDER_STRONG}` }} />
            <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 0.3, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>{p.year} · {p.place}</div>
            <div style={{ fontFamily: SERIF, fontSize: 14, lineHeight: 1.2, letterSpacing: -0.1, color: INK, marginTop: 1 }}>{p.movement}</div>
            <div style={{ marginTop: 3, fontFamily: SERIF, fontSize: 12.5, lineHeight: 1.4, color: MUTED, textWrap: 'pretty' }}>{p.blurb}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Coming-soon body for an unauthored movement that still resolves to a route.
// ─────────────────────────────────────────────────────────────
function ComingSoon({ eraId, movementId }: { eraId: string; movementId: string }) {
  const accent = ART_ACCENT
  const title = movementId.charAt(0).toUpperCase() + movementId.slice(1)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <ArtChrome
        crumbs={artMovementCrumbs(eraId, eraId, movementId, title)}
        accent={accent}
      />
      <ArtPageShell>
        <ArtHero
          eyebrow="ART · MOVEMENT"
          title={title}
          sub="Coming soon"
          palette={['#3a3a4a', '#1c1c2a', '#0a0a14']}
          accent={accent}
        />
        <div style={{ padding: '24px 18px', fontFamily: SERIF, fontSize: 15, lineHeight: 1.55, color: MUTED, textWrap: 'pretty' }}>
          This movement hasn&rsquo;t been written yet. Cubism is the first fully-built
          movement in the Art vertical — start there.
        </div>
      </ArtPageShell>
    </div>
  )
}

// ═════════════════════════════════════════════════════════════
export function ArtMovementPage({ eraId, movementId }: { eraId: string; movementId: string }) {
  const mv = ART_MOVEMENT_CONTENT[movementId]

  if (!mv) return <ComingSoon eraId={eraId} movementId={movementId} />

  const accent = mv.accent

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <ArtChrome
        crumbs={artMovementCrumbs(mv.eraId, mv.era, mv.id, mv.name)}
        accent={accent}
      />
      <ArtPageShell>
        <ArtHero
          eyebrow={`${mv.era.toUpperCase()} · MOVEMENT · ${mv.chain.index} OF ${mv.chain.total}`}
          title={mv.name}
          sub={`${mv.range} · ${mv.span}`}
          palette={mv.works[0].palette}
          imageUrl={mv.heroImage}
          images={mv.heroImages}
          fit={mv.heroFit}
          focus={mv.heroFocus}
          credit={mv.heroCredit}
          accent={accent}
        />
        <div style={{ padding: '16px 18px 4px' }}>
          <p style={{ margin: 0, fontFamily: SERIF, fontSize: 15, lineHeight: 1.5, color: MUTED, textWrap: 'pretty' }}>{mv.hookLong}</p>
        </div>
        {/* primary doorway into the movement's chaptered narrative */}
        {mv.sections.length > 0 && (
          <ReadStoryButton
            href={`/art/${mv.eraId}/${mv.id}/s/${mv.sections[0].id}`}
            accent={accent}
            label={`Read the ${mv.name} story`}
            sub={`${mv.sections.length} chapters · ${mv.range}`}
          />
        )}
        {/* signature visual — always visible */}
        <InfluenceRibbon accent={accent} eraId={mv.eraId} movementId={mv.id} />
        {/* secondary detail — collapsed by default */}
        <ArtAccordion label="The details" accent={accent}>
          <StatsRow stats={mv.stats} />
          <ArtFaceoff items={mv.factions} />
          <ArtistsStrip artists={mv.artists} label="Cubist artists" />
          <ParallelsList parallels={mv.parallels} />
        </ArtAccordion>
        <WorksCord works={mv.works} accent={accent} eraId={mv.eraId} movementId={mv.id} />
      </ArtPageShell>
    </div>
  )
}
