// Philosophy front door. The signature visual is the ARGUMENT MAP (the 2,600-year
// conversation, nodes colored by school, tap a node → that thinker). Beneath it,
// two ways to browse: by SCHOOL (the school › thinker › work drilldown) and the
// chronological "read it straight through" era list. Shared WarHeader chrome +
// house scale; bronze accent for accents only.

import type { Metadata } from 'next'
import { WarHeader } from '@/components/mode/war-header'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { HomeBrowse } from '@/components/philosophy/home-browse'
import { homeCrumbs, PHI_ACCENT } from '@/components/philosophy/phi-chrome'
import '../war-civil-war/war-skin.css'

export const metadata: Metadata = {
  title: 'Philosophy · Stuff Happened',
  description:
    'The history of Western philosophy as a 2,600-year argument, mapped. Trace who taught whom and who tore it down, browse by school, or read it straight through in five eras.',
}

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const INK = 'var(--foreground)'
const MUTED = 'color-mix(in srgb, var(--foreground) 78%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
const ACCENT = '#a08423'

export default function PhilosophyHome() {
  return (
    <div className="war-skin" style={{ background: 'var(--background)', color: INK, minHeight: '100dvh', fontFamily: SANS }}>
      <WarHeader active="philosophy" title="Western Philosophy" subtitle="Stuff Happened · Philosophy" backHref="/" />
      <WarBreadcrumb crumbs={homeCrumbs()} accent={PHI_ACCENT} bare />

      <main style={{ maxWidth: 640, margin: '0 auto', width: '100%' }}>
        {/* hero — Raphael's School of Athens; an <img> so the corpus-wide GlobalImageZoom lightboxes it */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/philosophy/school-of-athens.jpg"
          alt="Raphael's fresco The School of Athens (1509–11)"
          data-cap="Raphael · The School of Athens · 1509–11"
          style={{ display: 'block', width: '100%', height: 200, objectFit: 'cover', objectPosition: 'center 34%', cursor: 'zoom-in' }}
        />
        <div style={{ padding: '6px 16px 0', fontFamily: SANS, fontSize: 10.5, letterSpacing: '.02em', color: FAINT }}>
          Raphael · <span style={{ fontStyle: 'italic' }}>The School of Athens</span> · 1509–11
        </div>

        {/* intro — type scale matched to the art/war front doors */}
        <div style={{ padding: '16px 16px 4px' }}>
          <div style={{ fontFamily: SANS, fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: ACCENT, marginBottom: 8 }}>The argument</div>
          <h1 style={{ fontFamily: SERIF, fontSize: 28, fontWeight: 500, color: INK, lineHeight: 1.12, margin: 0, letterSpacing: -0.4 }}>
            2,600 years of people refusing to agree.
          </h1>
          <p style={{ fontFamily: SERIF, fontSize: 14.5, lineHeight: 1.55, color: MUTED, margin: '10px 0 0', maxWidth: 520 }}>
            Not a reading list but a conversation. The lines are who taught whom, and who showed up centuries later to tear it down. Tap anyone to read them.
          </p>
        </div>

        {/* newcomer on-ramp — the plain-language glossary of the -isms and the branches */}
        <a href="/philosophy/map" style={{
          display: 'flex', alignItems: 'center', gap: 13, margin: '16px 16px 0', padding: '13px 15px',
          border: `1px solid color-mix(in srgb, ${ACCENT} 40%, transparent)`, borderRadius: 12,
          background: `color-mix(in srgb, ${ACCENT} 9%, transparent)`, textDecoration: 'none', color: INK,
        }}>
          <span aria-hidden style={{ flexShrink: 0, width: 38, height: 38, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(150deg, ${ACCENT}, color-mix(in srgb, ${ACCENT} 45%, #211f1b))`, fontFamily: SERIF, fontSize: 20, color: 'rgba(255,255,255,.92)' }}>?</span>
          <span style={{ minWidth: 0 }}>
            <b style={{ display: 'block', fontFamily: SERIF, fontSize: 16, fontWeight: 600 }}>New here? Start with the map of ideas.</b>
            <span style={{ display: 'block', fontFamily: SANS, fontSize: 12.5, color: MUTED, marginTop: 2 }}>Every -ism in plain language: what it is, what it isn&rsquo;t, and an example.</span>
          </span>
          <span style={{ flexShrink: 0, color: ACCENT, fontSize: 18 }}>→</span>
        </a>

        {/* browse: eras · schools · thinkers · tree, toggled */}
        <HomeBrowse />

        <div style={{ height: 40 }} />
      </main>
    </div>
  )
}
