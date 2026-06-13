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
    'The history of Western philosophy as a 2,600-year argument — mapped. Trace who taught whom and who tore it down, browse by school, or read it straight through in five eras.',
}

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const INK = 'var(--foreground)'
const MUTED = 'color-mix(in srgb, var(--foreground) 78%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
const ACCENT = '#a08423'

export default function PhilosophyHome() {
  return (
    <div style={{ background: 'var(--background)', color: INK, height: '100dvh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div className="war-skin" style={{ flexShrink: 0, minHeight: 0, background: 'transparent' }}>
        <WarHeader active="philosophy" title="Western Philosophy" subtitle="Stuff Happened · Philosophy" backHref="/" />
      </div>
      <WarBreadcrumb crumbs={homeCrumbs()} accent={PHI_ACCENT} bare />

      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', overflowX: 'hidden' }}>
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
            Not a reading list — a conversation. The lines are who taught whom, and who showed up centuries later to tear it down. Tap anyone to read them.
          </p>
        </div>

        {/* browse: eras · schools · thinkers · tree, toggled */}
        <HomeBrowse />

        <div style={{ padding: '18px 16px 44px' }}>
          <p style={{ fontFamily: SANS, fontSize: 14, color: FAINT, lineHeight: 1.55, margin: 0 }}>
            The deep reads — each thinker’s whole system, each work walked chapter by chapter — are filling in school by school.
          </p>
        </div>
      </main>
      </div>
    </div>
  )
}
