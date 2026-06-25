'use client'

// The Artists index — /art/artists. Every featured artist, grouped by movement,
// in era → movement order. Each artist links to their own page (heavy for
// Picasso, light for the rest). Wears the shared WarHeader chrome like every
// other art page; no breadcrumb pill row (this is a hub, not a drilldown).

import Link from 'next/link'
import { WarHeader } from '@/components/mode/war-header'
import { ArtPageShell, ArtistAvatar, SANS, SERIF, INK, MUTED, FAINT, BORDER } from '@/components/mode/art-chrome'
import { ART_ERAS } from '@/lib/art-data'
import { ART_MOVEMENT_CONTENT } from '@/lib/art-content'
import '../../war-civil-war/war-skin.css'

export function ArtArtistsPage() {
  // Movements grouped by era (ART_ERAS order), each era's movements in chain order,
  // skipping any movement with no roster.
  const groups = ART_ERAS
    .map(era => ({
      era,
      movements: Object.values(ART_MOVEMENT_CONTENT)
        .filter(m => m.eraId === era.id && m.artists.length > 0)
        .sort((a, b) => a.chain.index - b.chain.index),
    }))
    .filter(g => g.movements.length > 0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <div className="war-skin" style={{ flexShrink: 0, minHeight: 0, background: 'transparent' }}>
        <WarHeader active="art" title="Art" subtitle="Stuff Happened · Art" backHref="/art" />
      </div>
      <ArtPageShell>
        {/* Title + intro */}
        <div style={{ padding: '18px 18px 6px' }}>
          <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.62 }}>Art · The makers</div>
          <h1 style={{ margin: '8px 0 0', fontFamily: SERIF, fontWeight: 500, fontSize: 28, lineHeight: 1.1, letterSpacing: -0.4, color: INK }}>The Artists</h1>
          <p style={{ margin: '10px 0 0', fontFamily: SERIF, fontSize: 14.5, lineHeight: 1.55, color: MUTED, maxWidth: 520 }}>
            Everyone who made the stuff, sorted by the movement they made it in.
          </p>
        </div>

        {groups.map(({ era, movements }) => (
          <div key={era.id} style={{ padding: '8px 0 4px' }}>
            <div style={{ padding: '14px 18px 6px', fontFamily: SANS, fontSize: 11, letterSpacing: 1.4, fontWeight: 700, color: FAINT, textTransform: 'uppercase' }}>{era.name}</div>
            {movements.map(mv => (
              <div key={mv.id} style={{ padding: '6px 0 16px', borderBottom: `1px solid ${BORDER}` }}>
                <Link href={`/art/${mv.eraId}/${mv.id}`} style={{ display: 'block', padding: '0 18px 10px', fontFamily: SERIF, fontSize: 17, lineHeight: 1.15, letterSpacing: -0.1, color: mv.accent, textDecoration: 'none' }}>{mv.name}</Link>
                <div style={{ display: 'flex', gap: 12, overflowX: 'auto', scrollbarWidth: 'none', padding: '0 18px' }}>
                  {mv.artists.map(a => (
                    <Link key={a.id || a.name} href={a.id ? `/art/artist/${a.id}` : `/art/${mv.eraId}/${mv.id}`} style={{ flexShrink: 0, width: 88, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, textDecoration: 'none', color: INK }}>
                      <ArtistAvatar photo={a.photo} id={a.id} palette={a.palette} />
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontFamily: SERIF, fontSize: 13.5, lineHeight: 1.18, letterSpacing: -0.1, color: INK }}>{a.name}</div>
                        <div style={{ marginTop: 2, fontFamily: SANS, fontSize: 11, letterSpacing: 0.2, color: FAINT }}>{a.role || a.years}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
        <div style={{ height: 24 }} />
      </ArtPageShell>
    </div>
  )
}
