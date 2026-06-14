// The map of ideas — a newcomer's glossary of the -isms. Every reader-facing term
// that shows up across the philosophy reads gets a plain-language entry: what it IS,
// what it is NOT (the confusion it gets mistaken for), a concrete everyday example,
// and where it sits next to its nearest neighbor. Data lives in isms-data.ts; the
// in-narrative term popups read the same source, so this page is the canonical text.
// Static server component; each term carries an id anchor so a popup can deep-link in.

import type { Metadata } from 'next'
import { WarHeader } from '@/components/mode/war-header'
import { WarBreadcrumb, type Crumb } from '@/components/mode/war-chrome'
import { PHI_ACCENT } from '@/components/philosophy/phi-chrome'
import { schoolById, thinkerById } from '@/lib/philosophy-data'
import { ISM_GROUPS, type IsmEntry } from './isms-data'
import { ismSlug } from './slug'
import '../../war-civil-war/war-skin.css'

export const metadata: Metadata = {
  title: 'The map of ideas · Philosophy · Stuff Happened',
  description:
    "A plain-language glossary of philosophy's -isms for a reader with zero background. Each term explained by what it is, what it isn't, a concrete example, and its nearest neighbor.",
}

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const INK = 'var(--foreground)'
const MUTED = 'color-mix(in srgb, var(--foreground) 78%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 60%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 13%, transparent)'
const CARD = 'color-mix(in srgb, var(--foreground) 4%, transparent)'
const ACCENT = PHI_ACCENT

function groupSlug(title: string): string {
  return ismSlug(title)
}

// Resolve an entry's cross-link to a route + a human label ("Read the Stoics →").
function linkFor(e: IsmEntry): { href: string; label: string } | null {
  if (!e.link) return null
  if (e.link.kind === 'school') {
    const s = schoolById(e.link.id as never)
    return s ? { href: `/philosophy/school/${s.id}`, label: `Read the ${s.name} →` } : null
  }
  if (e.link.kind === 'thinker') {
    const t = thinkerById(e.link.id)
    return t ? { href: `/philosophy/thinker/${t.id}`, label: `Read ${t.name} →` } : null
  }
  return { href: `/philosophy/work/${e.link.id}`, label: 'Read it →' }
}

function Field({ label, children, tint }: { label: string; children: React.ReactNode; tint?: string }) {
  return (
    <div style={{ marginTop: 9 }}>
      <div style={{ fontFamily: SANS, fontSize: 9.5, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: tint ?? FAINT, marginBottom: 2 }}>{label}</div>
      <div style={{ fontFamily: SERIF, fontSize: 14.5, lineHeight: 1.5, color: MUTED, textWrap: 'pretty' }}>{children}</div>
    </div>
  )
}

export default function PhilosophyMap() {
  const crumbs: Crumb[] = [
    { label: 'Philosophy', href: '/philosophy' },
    { label: 'The map of ideas', active: true, currentLabel: 'The map of ideas' },
  ]

  return (
    <div className="war-skin" style={{ background: 'var(--background)', color: INK, minHeight: '100dvh', fontFamily: SANS }}>
      <WarHeader active="philosophy" title="Western Philosophy" subtitle="Stuff Happened · Philosophy" backHref="/philosophy" />
      <WarBreadcrumb crumbs={crumbs} accent={ACCENT} bare />

      <main style={{ maxWidth: 640, margin: '0 auto', width: '100%' }}>
        {/* intro */}
        <div style={{ padding: '18px 16px 4px' }}>
          <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: '.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: 8 }}>New here? Start here.</div>
          <h1 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 500, color: INK, lineHeight: 1.12, margin: 0, letterSpacing: -0.4 }}>The map of ideas</h1>
          <p style={{ fontFamily: SERIF, fontSize: 15, lineHeight: 1.55, color: MUTED, margin: '11px 0 0', textWrap: 'pretty' }}>
            Philosophy runs on words ending in <i>-ism</i>, and most of them get mixed up with their everyday meanings. Here is each one in plain language: what it actually means, what it is <i>not</i>, a concrete example, and the idea sitting right next to it. You will meet these terms throughout the reads; tap any of them there to see this same card without losing your place.
          </p>
        </div>

        {/* quick-jump to the groups */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, padding: '16px 16px 4px' }}>
          {ISM_GROUPS.map(g => (
            <a key={g.title} href={`#${groupSlug(g.title)}`} style={{
              fontFamily: SANS, fontSize: 12, fontWeight: 600, color: MUTED, textDecoration: 'none',
              border: `1px solid ${BORDER}`, borderRadius: 999, padding: '6px 11px', background: CARD,
            }}>{g.title}</a>
          ))}
        </div>

        {/* the groups */}
        {ISM_GROUPS.map(g => (
          <section key={g.title} id={groupSlug(g.title)} style={{ padding: '22px 16px 2px', scrollMarginTop: 70 }}>
            <h2 style={{ fontFamily: SERIF, fontSize: 21, fontWeight: 600, margin: 0, letterSpacing: -0.2 }}>{g.title}</h2>
            {g.intro && <p style={{ fontFamily: SERIF, fontStyle: 'italic', fontSize: 14, lineHeight: 1.5, color: FAINT, margin: '6px 0 0', textWrap: 'pretty' }}>{g.intro}</p>}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 14 }}>
              {g.entries.map(e => {
                const lk = linkFor(e)
                return (
                  <div key={e.term} id={ismSlug(e.term)} style={{ border: `1px solid ${BORDER}`, borderRadius: 13, background: CARD, padding: '14px 15px', scrollMarginTop: 70 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10 }}>
                      <h3 style={{ fontFamily: SERIF, fontSize: 19, fontWeight: 600, margin: 0, letterSpacing: -0.2 }}>{e.term}</h3>
                    </div>
                    <Field label="It is" tint={ACCENT}>{e.is}</Field>
                    <Field label="It is not">{e.isnt}</Field>
                    <Field label="For example">{e.example}</Field>
                    {e.related && <Field label="Sits next to">{e.related}</Field>}
                    {lk && (
                      <a href={lk.href} style={{ display: 'inline-block', marginTop: 11, fontFamily: SANS, fontSize: 12.5, fontWeight: 700, color: ACCENT, textDecoration: 'none' }}>{lk.label}</a>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        ))}

        <div style={{ padding: '24px 16px 44px' }}>
          <a href="/philosophy" style={{ fontFamily: SANS, fontSize: 13, fontWeight: 600, color: ACCENT, textDecoration: 'none' }}>← Back to philosophy</a>
        </div>
      </main>
    </div>
  )
}
