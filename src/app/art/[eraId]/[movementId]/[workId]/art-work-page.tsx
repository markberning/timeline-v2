'use client'

// Art Work page — Les Demoiselles d'Avignon. Story | Dossier toggle.
//   Dossier: hero · at-a-glance · canvas viewer (annotation toggle) · figures
//            strip · the story (5 chapters) · provenance trail.
//   Story:   cord/node list of the 5 section chapters, each a reader link.
// Ported from the mockup's CanvasViewer / WorkSectionsList / ProvenanceBlock
// into the app's CSS-var theming. Museum provenance pages are deferred for v1,
// so museum entries render as plain text (not links). See audits/art-vertical.md.

import { useState } from 'react'
import Link from 'next/link'
import {
  ArtChrome, ArtPageShell, ArtHero, ArtAtAGlance, ArtistsStrip,
  artWorkCrumbs, artAlpha,
  SANS, SERIF, MONO, INK, MUTED, FAINT, BORDER, BORDER_STRONG, CARD_BG, CHIP,
  type ArtView,
} from '@/components/mode/art-chrome'
import { ART_WORK_CONTENT } from '@/lib/art-content'

export function ArtWorkPage({ workId }: { eraId: string; movementId: string; workId: string }) {
  const w = ART_WORK_CONTENT[workId]
  const accent = w.accent
  const [view, setView] = useState<ArtView>('right')

  const base = `/art/${w.eraId}/${w.movementId}/${w.id}`

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <ArtChrome
        crumbs={artWorkCrumbs(w.eraId, w.era, w.movementId, w.movement, w.id, w.name, w.shortName)}
        view={view}
        onView={setView}
        labels={['Story', 'Dossier']}
        accent={accent}
      />
      <ArtPageShell>
        {view === 'right' ? (
          <>
            <ArtHero
              eyebrow={`${w.movement.toUpperCase()} · WORK`}
              title={w.name}
              sub={`${w.artist} · ${w.year}`}
              palette={['#c0a06c', '#3d3a2e', '#8a6b3a']}
              imageUrl={w.heroImage}
              credit={w.heroCredit}
              accent={accent}
            />
            <ArtAtAGlance summary={w.stats.map(s => `${s.k} · ${s.v}`).join('  ')} stats={w.stats} />
            <CanvasViewer accent={accent} />
            <ArtistsStrip artists={w.figures} label="Figures around the work" />
            <WorkSectionsList base={base} accent={accent} />
            <ProvenanceBlock accent={accent} />
          </>
        ) : (
          <StoryView base={base} accent={accent} />
        )}
      </ArtPageShell>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Canvas viewer — the painting full-bleed with an annotation toggle.
// ─────────────────────────────────────────────────────────────
function CanvasViewer({ accent }: { accent: string }) {
  const w = ART_WORK_CONTENT['demoiselles']
  const [annotated, setAnnotated] = useState(true)
  const [failed, setFailed] = useState(false)
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>The canvas</div>
        <button
          onClick={() => setAnnotated(a => !a)}
          style={{
            appearance: 'none', border: 'none',
            background: annotated ? 'color-mix(in srgb, var(--foreground) 14%, var(--background))' : CHIP,
            color: INK, padding: '4px 10px', borderRadius: 999,
            fontFamily: SANS, fontSize: 10.5, fontWeight: 600, letterSpacing: 0.2, cursor: 'pointer',
          }}
        >{annotated ? 'Annotations on' : 'Annotations off'}</button>
      </div>
      <div style={{ position: 'relative', aspectRatio: '5/6', background: '#8a6b3a', borderRadius: 6, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
        {!failed && (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={w.heroImage}
            alt="Les Demoiselles d'Avignon"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={() => setFailed(true)}
          />
        )}
        {annotated && w.annotations.map(a => (
          <div key={a.label} style={{ position: 'absolute', left: a.x, top: a.y, transform: 'translate(-50%, -50%)' }}>
            <div style={{ width: 18, height: 18, borderRadius: 999, background: 'rgba(0,0,0,0.55)', border: `1.5px solid ${accent}`, boxShadow: `0 0 0 3px ${artAlpha(accent, 0.2)}` }} />
            <div style={{
              position: 'absolute', left: 22, top: -6, padding: '4px 8px',
              background: 'rgba(0,0,0,0.62)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.18)', borderRadius: 4,
              fontFamily: MONO, fontSize: 9, letterSpacing: 0.3, color: 'rgba(255,255,255,0.96)', whiteSpace: 'nowrap',
            }}>{a.label}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 10, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.45, color: MUTED }}>
        Picasso, <em>Les Demoiselles d&rsquo;Avignon</em>, 1907. Oil on canvas. {w.dimensions}.<br />
        Museum of Modern Art, New York. Bequest of Lillie P. Bliss.
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// The story · 5 chapters — numbered list, each row a reader link.
// ─────────────────────────────────────────────────────────────
function WorkSectionsList({ base, accent }: { base: string; accent: string }) {
  const w = ART_WORK_CONTENT['demoiselles']
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
                  marginTop: 4, fontFamily: SERIF, fontSize: 13, lineHeight: 1.45, color: MUTED,
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
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
// Provenance — the ownership trail. Museum entries get a violet MUSEUM tag but
// render as PLAIN TEXT (museum pages deferred for v1), with a square dot on the
// cord.
// ─────────────────────────────────────────────────────────────
function ProvenanceBlock({ accent }: { accent: string }) {
  const w = ART_WORK_CONTENT['demoiselles']
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
        <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>Provenance</div>
        <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>Every hand it passed through</div>
      </div>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', left: 7, top: 6, bottom: 6, width: 1, background: BORDER_STRONG }} />
        {w.provenance.map((p, i) => {
          const isLast = i === w.provenance.length - 1
          const isMuseum = !!p.museum
          const marked = isLast || isMuseum
          return (
            <div key={p.year} style={{ position: 'relative', paddingLeft: 26, paddingBottom: isLast ? 0 : 16 }}>
              <span style={{
                position: 'absolute', left: 3, top: 6, width: 9, height: 9,
                borderRadius: marked ? 2 : 999,
                background: marked ? accent : CARD_BG,
                border: `1px solid ${marked ? accent : BORDER_STRONG}`,
                boxShadow: marked ? `0 0 0 3px ${artAlpha(accent, 0.18)}` : 'none',
              }} />
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <span style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 0.3, fontWeight: 700, color: artAlpha(accent, 0.95), textTransform: 'uppercase' }}>{p.year}</span>
                {p.price && (
                  <span style={{ fontFamily: MONO, fontSize: 9.5, letterSpacing: 0.3, color: FAINT }}>· {p.price}</span>
                )}
                {isMuseum && (
                  <span style={{ fontFamily: SANS, fontSize: 8.5, letterSpacing: 0.5, fontWeight: 700, color: '#fff', background: accent, padding: '2px 6px', borderRadius: 2, textTransform: 'uppercase' }}>Museum</span>
                )}
              </div>
              <div style={{ fontFamily: SERIF, fontSize: 15, lineHeight: 1.2, letterSpacing: -0.15, color: INK, marginTop: 2, fontWeight: 500 }}>{p.who}</div>
              <div style={{ marginTop: 2, fontFamily: SANS, fontSize: 10.5, letterSpacing: 0.1, color: MUTED }}>{p.place}</div>
              <div style={{ marginTop: 6, fontFamily: SERIF, fontSize: 13, lineHeight: 1.45, color: MUTED }}>{p.note}</div>
              {isMuseum && (
                <div style={{ marginTop: 4, fontFamily: SANS, fontSize: 10, letterSpacing: 0.2, color: FAINT, fontStyle: 'italic' }}>Museum pages are coming in a later release.</div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────
// Story view — cord/node of the 5 section chapters, each a reader link.
// ─────────────────────────────────────────────────────────────
const SECTION_PALETTES: Record<string, [string, string, string]> = {
  setting: ['#3a3a4a', '#1c1c2a', '#0a0a14'],
  making: ['#c0a06c', '#3d3a2e', '#8a6b3a'],
  reception: ['#bf2f25', '#3a1c14', '#0a0606'],
  hidden: ['#3a2a1c', '#1c1410', '#0a0606'],
  legacy: ['#3a4a8b', '#7a6a3a', '#0e1224'],
}
const SECTION_SIZES: Record<string, 'm' | 'l'> = { setting: 'm', making: 'l', reception: 'm', hidden: 'm', legacy: 'l' }

function StoryView({ base, accent }: { base: string; accent: string }) {
  const w = ART_WORK_CONTENT['demoiselles']
  return (
    <div style={{ background: 'var(--background)', color: 'var(--foreground)' }}>
      <ArtHero
        eyebrow={`${w.movement.toUpperCase()} · WORK`}
        title={w.name}
        sub={`${w.artist} · ${w.year}`}
        palette={['#c0a06c', '#3d3a2e', '#8a6b3a']}
        imageUrl={w.heroImage}
        credit={w.heroCredit}
        accent={accent}
      />
      <div style={{ padding: '16px 18px 0' }}>
        <p style={{ margin: 0, fontFamily: SERIF, fontSize: 15, lineHeight: 1.5, color: MUTED }}>{w.hook}</p>
      </div>
      <div style={{ position: 'relative', paddingTop: 26, paddingBottom: 4 }}>
        <div style={{ position: 'absolute', left: 56, top: 8, bottom: 8, width: 1, background: BORDER_STRONG }} />
        <div style={{ position: 'absolute', left: 70, top: 12, fontFamily: SANS, fontSize: 10, letterSpacing: 1.6, fontWeight: 700, color: accent, textTransform: 'uppercase', background: 'var(--background)', padding: '0 6px' }}>{w.sections.length} chapters</div>
        <div style={{ paddingTop: 14, padding: '14px 16px 0' }}>
          {w.sections.map((s, i) => {
            const palette = SECTION_PALETTES[s.id] || ['#3a3a4a', '#1c1c2a', '#0a0a14']
            const heavy = (SECTION_SIZES[s.id] || 'm') === 'l'
            const [c0, c1, c2] = palette
            return (
              <Link
                key={s.id}
                href={`${base}/${s.id}`}
                style={{
                  display: 'flex', gap: 14, alignItems: 'stretch', textDecoration: 'none',
                  marginBottom: 14, position: 'relative',
                }}
              >
                <span style={{
                  flexShrink: 0, alignSelf: 'center', width: 13, height: 13, borderRadius: 999,
                  background: heavy ? accent : CARD_BG,
                  border: `2px solid ${heavy ? accent : BORDER_STRONG}`,
                  boxShadow: heavy ? `0 0 0 4px ${artAlpha(accent, 0.18)}` : 'none',
                  marginLeft: 33,
                }} />
                <div style={{
                  flex: 1, minWidth: 0, display: 'flex', gap: 12, alignItems: 'stretch',
                  background: CARD_BG, border: `1px solid ${BORDER}`, borderRadius: 8, overflow: 'hidden',
                  padding: 12,
                }}>
                  <div style={{ flexShrink: 0, width: 54, borderRadius: 5, background: `linear-gradient(135deg, ${c0}, ${c1} 55%, ${c2})` }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 0.4, fontWeight: 700, color: artAlpha(accent, 0.95), textTransform: 'uppercase' }}>{s.eyebrow} · {s.dateLabel}</div>
                    <div style={{ fontFamily: SERIF, fontSize: heavy ? 17 : 15.5, lineHeight: 1.2, letterSpacing: -0.15, color: INK, marginTop: 3, fontWeight: 500 }}>{i + 1}. {s.title}</div>
                    <div style={{ marginTop: 5, fontFamily: SERIF, fontSize: 13, lineHeight: 1.45, color: MUTED, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{s.blurb}</div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
