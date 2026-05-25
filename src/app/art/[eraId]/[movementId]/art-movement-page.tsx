'use client'

// Art Movement page — Cubism is the only authored movement. Dossier (right) is
// the default view: hero → at-a-glance → cubist-artists strip → the INFLUENCE
// FLOW (the movement-page signature visual, the equivalent of War's theater
// map) → the works cord/node timeline → "Meanwhile, elsewhere" parallels.
// Timeline (left) view = hero + the long hook + the same works cord/node.
//
// Ported from the mockup's art-pages.jsx (InfluenceFlow, WorksMicroList /
// WorksTimeline, ParallelsList). Mockup `t.*` theme tokens are translated to the
// app's CSS-var tokens from art-chrome (INK/MUTED/FAINT/BORDER/etc.), `shHexAlpha`
// → artAlpha, fonts → SANS/SERIF/MONO. See audits/art-vertical.md §4.

import { useRef, useState } from 'react'
import Link from 'next/link'
import { Lightbox } from '@/components/lightbox'
import { OrientationCard } from '@/components/mode/orientation-card'
import {
  ArtChrome, ArtPageShell, ArtHero, ReadStoryButton, StatsRow, ArtFaceoff, ArtistsStrip, Eyebrow, SectionNav,
  artMovementCrumbs,
  SANS, SERIF, MONO, INK, MUTED, FAINT, BORDER, BORDER_STRONG, CARD_BG, artAlpha,
} from '@/components/mode/art-chrome'
import { ART_ACCENT, ART_ACCENTS } from '@/lib/art-data'
import {
  ART_MOVEMENT_CONTENT, ART_WORK_CONTENT,
  type MovementWork, type Palette, type ArtLineage, type ArtLineageChip,
} from '@/lib/art-content'

// Cord/node geometry (mirrors the mockup's ITL constants).
const CORD_X = 56
const CARD_LEFT = CORD_X + 16
// One cord/node card → the shared OrientationCard (BEHAVIORS.md "Cards"). Links to
// the work page only when the work is authored.
function WorkCard({ work, accent, href }: { work: MovementWork; accent: string; href?: string }) {
  const card = (
    <OrientationCard
      size={work.size}
      accent={accent}
      imageUrl={work.imageUrl}
      alt={work.name}
      title={work.name}
      sub={`${work.artist} · ${work.place}`}
      body={work.blurb}
      credit={work.credit}
    />
  )
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
      {href
        ? <Link href={href} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>{card}</Link>
        : card}
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
        {works.length} featured works
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
// THE INFLUENCE FLOW — the movement-page signature visual. A top-to-bottom
// flow that reads literally: what fed INTO the movement → the movement → what
// it LED TO. Chips are colored by lineage mode (art / civ / war). Mirrors the
// front-door climb tree's "grew out of / led to" framing. Built from mv.lineage.
// ─────────────────────────────────────────────────────────────
const MODE_COLOR = (mode: ArtLineageChip['mode'], accent: string) =>
  mode === 'civ' ? ART_ACCENTS.blue : mode === 'war' ? '#8a8178' : accent

// A lineage node: a faceted (corner-cut) artwork thumbnail beside its label and
// the give/take note. Horizontal card so the text is readable; real painting
// where we have one, the mode/movement palette gradient otherwise.
const TILE_FACET = 'polygon(0 0, 100% 0, 100% 82%, 82% 100%, 0 100%)'
function NodeCard({ chip, accent }: { chip: ArtLineageChip; accent: string }) {
  const [failed, setFailed] = useState(false)
  const pal = chip.palette ?? (['#3a3a4a', '#1c1c2a', '#0a0a14'] as Palette)
  const mc = MODE_COLOR(chip.mode, accent)
  return (
    <div style={{ display: 'flex', gap: 9, alignItems: 'center', padding: '7px 9px', borderRadius: 9, background: CARD_BG, border: `1px solid ${BORDER}`, borderLeft: `2px solid ${artAlpha(mc, 0.6)}` }}>
      <div style={{ width: 48, height: 48, flexShrink: 0, clipPath: TILE_FACET, position: 'relative', overflow: 'hidden', background: `linear-gradient(135deg, ${pal[0]}, ${pal[1]} 55%, ${pal[2]})` }}>
        {chip.img && !failed && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={chip.img} alt="" aria-hidden loading="lazy" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.16) saturate(0.82) contrast(1.05)' }} />
        )}
      </div>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, lineHeight: 1.15, color: INK }}>{chip.label}</div>
        {chip.note && <div style={{ fontFamily: SANS, fontSize: 9.5, lineHeight: 1.25, color: MUTED, fontStyle: 'italic', marginTop: 2 }}>{chip.note}</div>}
      </div>
    </div>
  )
}

// Converging ('in') or fanning ('out') shard connectors — one per node, each
// tinted by its lineage mode, with an angular kink for a light cubist facet.
function Funnel({ chips, accent, dir }: { chips: ArtLineageChip[]; accent: string; dir: 'in' | 'out' }) {
  const W = 340, H = 54, hubX = W / 2
  const slotX = (i: number) => (W * (i + 0.5)) / chips.length
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height={H} preserveAspectRatio="none" style={{ display: 'block' }} aria-hidden>
      {chips.map((c, i) => {
        const ex = slotX(i)
        const topX = dir === 'in' ? ex : hubX
        const botX = dir === 'in' ? hubX : ex
        const midX = topX + (botX - topX) * 0.5
        const col = artAlpha(MODE_COLOR(c.mode, accent), 0.6)
        return <path key={i} d={`M ${topX} 2 L ${midX} 27 L ${botX} 52`} fill="none" stroke={col} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
      })}
    </svg>
  )
}

function BandLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontFamily: SANS, fontSize: 8.5, fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', color: FAINT, marginBottom: 10 }}>{children}</div>
}

// THE INFLUENCE FLOW — artwork-node lineage in a converge → hub → fan-out
// composition with a light cubist (faceted + shattered) treatment.
const HUB_FACET = 'polygon(10% 0, 100% 0, 100% 76%, 84% 100%, 0 100%, 0 24%)'
function InfluenceFlow({ accent, lineage, title, range, hubImage, hubPalette, summary }: { accent: string; lineage: ArtLineage; title: string; range: string; hubImage?: string; hubPalette: Palette; summary?: string }) {
  const grid: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <Eyebrow>How the influence flowed</Eyebrow>

      <div style={{ marginTop: 16 }}>
        <BandLabel>Grew out of</BandLabel>
        <div style={grid}>{lineage.parents.map(c => <NodeCard key={c.label} chip={c} accent={accent} />)}</div>

        <Funnel chips={lineage.parents} accent={accent} dir="in" />

        {/* the hub — the movement itself, faceted, with the work showing through */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: -2 }}>
          <div style={{ position: 'relative', width: 132, aspectRatio: '1 / 1' }}>
            <div style={{ position: 'absolute', inset: 0, clipPath: HUB_FACET, overflow: 'hidden', background: `linear-gradient(135deg, ${hubPalette[0]}, ${hubPalette[1]} 55%, ${hubPalette[2]})`, boxShadow: `0 0 0 3px ${artAlpha(accent, 0.5)}, 0 0 0 9px ${artAlpha(accent, 0.12)}` }}>
              {hubImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={hubImage} alt="" aria-hidden loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'sepia(0.14) saturate(0.85) contrast(1.05)' }} />
              )}
              {/* facet "cracks" — the shattered look */}
              <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }} aria-hidden>
                <path d="M0 40 L42 56 L30 100 M42 56 L100 44 M42 56 L62 0" fill="none" stroke="#ffffff" strokeOpacity="0.22" strokeWidth="1" vectorEffect="non-scaling-stroke" />
              </svg>
            </div>
          </div>
          <div style={{ marginTop: 9, display: 'inline-flex', alignItems: 'baseline', gap: 7, padding: '5px 13px', borderRadius: 999, background: artAlpha(accent, 0.16), border: `1px solid ${artAlpha(accent, 0.5)}` }}>
            <span style={{ fontFamily: SANS, fontSize: 12.5, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color: INK }}>{title}</span>
            <span style={{ fontFamily: MONO, fontSize: 9, letterSpacing: 0.4, color: accent }}>{range}</span>
          </div>
        </div>

        <Funnel chips={lineage.children} accent={accent} dir="out" />

        <BandLabel>Led to</BandLabel>
        <div style={grid}>{lineage.children.map(c => <NodeCard key={c.label} chip={c} accent={accent} />)}</div>
      </div>

      {summary && (
        <div style={{ marginTop: 16, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.45, color: MUTED, textWrap: 'pretty' }}>
          {summary}
        </div>
      )}
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
// The full canonical-works checklist (the count behind the "Canonical works"
// stat). A plain, scannable list — year · work · artist, no descriptions.
// ─────────────────────────────────────────────────────────────
type CanonEntry = { year: number; name: string; artist: string; wiki?: string; img?: string; nsfw?: boolean }
function NsfwTag() {
  return <span style={{ marginLeft: 7, fontFamily: SANS, fontSize: 8.5, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', color: FAINT, border: `1px solid ${BORDER_STRONG}`, borderRadius: 4, padding: '1px 4px', verticalAlign: 'middle', whiteSpace: 'nowrap' }}>explicit</span>
}
// Square canon thumbnail. Tapping opens the lightbox; a load failure (or no
// image at all) degrades to a subtle dashed placeholder rather than a broken icon.
function CanonThumb({ img, alt, accent, onZoom, cap }: { img?: string; alt: string; accent: string; onZoom: (src: string, cap: string) => void; cap: string }) {
  const [failed, setFailed] = useState(false)
  if (!img || failed) {
    return <div aria-hidden style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 6, border: `1px dashed ${BORDER}`, background: artAlpha(accent, 0.05) }} />
  }
  return (
    <button onClick={() => onZoom(img, cap)} aria-label={`View ${alt}`} style={{ flexShrink: 0, width: 46, height: 46, borderRadius: 6, overflow: 'hidden', border: `1px solid ${BORDER}`, background: '#1c1410', padding: 0, cursor: 'zoom-in' }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={img} alt="" loading="lazy" onError={() => setFailed(true)} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '50% 30%', filter: 'sepia(0.12) saturate(0.9) contrast(1.02)' }} />
    </button>
  )
}
function CanonList({ canon, accent, onZoom }: { canon: CanonEntry[]; accent: string; onZoom: (src: string, cap: string) => void }) {
  const sorted = [...canon].sort((a, b) => a.year - b.year || a.name.localeCompare(b.name))
  const wikiHref = (w: string) => `https://en.wikipedia.org/wiki/${encodeURIComponent(w.replace(/ /g, '_'))}`
  return (
    <div style={{ padding: '4px 12px 18px' }}>
      {sorted.map((w, i) => {
        const cap = `${w.name} — ${w.artist}, ${w.year}`
        return (
          <div key={`${w.year}-${w.name}`} style={{ display: 'flex', gap: 11, alignItems: 'center', padding: '7px 4px', borderTop: i === 0 ? 'none' : `1px solid ${BORDER}` }}>
            {/* thumbnail — tap to see the work full-size in the lightbox */}
            <CanonThumb img={w.img} alt={w.name} accent={accent} onZoom={onZoom} cap={cap} />
            <div style={{ flexShrink: 0, width: 34, fontFamily: MONO, fontSize: 11, fontWeight: 700, letterSpacing: 0.2, color: accent }}>{w.year}</div>
            <div style={{ flex: 1, minWidth: 0, fontFamily: SERIF, fontSize: 14, lineHeight: 1.25, textWrap: 'pretty' }}>
              {w.wiki
                ? <a href={wikiHref(w.wiki)} target="_blank" rel="noopener noreferrer" style={{ color: INK, textDecoration: 'none', borderBottom: `1px solid ${artAlpha(accent, 0.45)}` }}>{w.name}</a>
                : <span style={{ color: INK }}>{w.name}</span>}
              {w.nsfw && <NsfwTag />}
            </div>
            <div style={{ flexShrink: 0, fontFamily: SANS, fontSize: 11, letterSpacing: 0.2, color: FAINT }}>{w.artist}</div>
          </div>
        )
      })}
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

  const canonRef = useRef<HTMLDivElement>(null)
  const [lb, setLb] = useState<{ src: string; cap: string } | null>(null)

  if (!mv) return <ComingSoon eraId={eraId} movementId={movementId} />

  const accent = mv.accent
  const hasCanon = !!mv.canon && mv.canon.length > 0
  // The "Canonical works" stat jumps to the (always-visible) full-canon section.
  const goToCanon = () => canonRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // Sticky in-page jump-bar: the long dossier's table of contents.
  const navItems = [
    { id: 'sec-overview', label: 'Overview' },
    { id: 'sec-influence', label: 'Influence' },
    { id: 'sec-details', label: 'Details' },
    { id: 'sec-works', label: 'Works' },
    ...(hasCanon ? [{ id: 'sec-canon', label: 'Canon' }] : []),
  ]
  const secStyle: React.CSSProperties = { scrollMarginTop: 46 }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <ArtChrome
        crumbs={artMovementCrumbs(mv.eraId, mv.era, mv.id, mv.name)}
        accent={accent}
      />
      <ArtPageShell>
        <SectionNav accent={accent} items={navItems} />
        <div id="sec-overview" style={secStyle}>
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
        </div>
        {/* signature visual — always visible */}
        <div id="sec-influence" style={secStyle}>
          <InfluenceFlow accent={accent} lineage={mv.lineage} title={mv.name} range={mv.range} hubImage={mv.heroImage} hubPalette={mv.works[0].palette} summary={mv.influenceSummary} />
        </div>
        {/* secondary detail — always visible, reached via the jump-bar */}
        <div id="sec-details" style={secStyle}>
          <div style={{ padding: '16px 16px 2px' }}><Eyebrow color={accent}>The details</Eyebrow></div>
          <StatsRow stats={mv.stats} accent={accent} actions={hasCanon ? { 'Canonical works': goToCanon } : undefined} />
          <ArtFaceoff items={mv.factions} />
          <ArtistsStrip artists={mv.artists} label={`${mv.name} artists`} />
          <ParallelsList parallels={mv.parallels} />
        </div>
        <div id="sec-works" style={secStyle}>
          <WorksCord works={mv.works} accent={accent} eraId={mv.eraId} movementId={mv.id} />
        </div>
        {hasCanon && (
          <div id="sec-canon" ref={canonRef} style={secStyle}>
            <div style={{ padding: '16px 16px 2px', borderTop: `1px solid ${BORDER}` }}><Eyebrow color={accent}>{`The full canon · ${mv.canon!.length} works`}</Eyebrow></div>
            <CanonList canon={mv.canon!} accent={accent} onZoom={(src, cap) => setLb({ src, cap })} />
          </div>
        )}
      </ArtPageShell>
      {lb && <Lightbox src={lb.src} alt={lb.cap} caption={lb.cap} onClose={() => setLb(null)} />}
    </div>
  )
}
