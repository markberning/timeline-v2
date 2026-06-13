// Philosophy vertical landing — the front door. Uses the shared editorial WarHeader
// chrome (like civ/war) so it matches the rest of the app, with a house-scale body
// (Lora/Geist, global tokens) and philosophy's bronze accent (#a08423) for accents only.
// Browse-by-era cards + "famous stuff" chips, the art-front-door pattern. All 5 era reads
// are live; the lineage/influence view lands alongside the thinker-deep reads.

import type { Metadata } from 'next'
import Link from 'next/link'
import { WarHeader } from '@/components/mode/war-header'
import '../war-civil-war/war-skin.css'

export const metadata: Metadata = {
  title: 'Philosophy · Stuff Happened',
  description:
    'The history of Western philosophy in five eras, from Thales explaining the world without gods to Nietzsche announcing the death of God.',
}

const SANS = 'var(--font-geist-sans)'
const SERIF = 'var(--font-lora)'
const INK = 'var(--foreground)'
const MUTED = 'color-mix(in srgb, var(--foreground) 78%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 62%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 14%, transparent)'
const CARD = 'color-mix(in srgb, var(--foreground) 4%, transparent)'
const ACCENT = '#a08423'

type Era = {
  id: string
  numeral: string
  range: string
  title: string
  hook: string
  thinkers: string
  tint: string
}

const ERAS: Era[] = [
  {
    id: 'greeks',
    numeral: 'I',
    range: '585 BC – 529 AD',
    title: 'The Greeks',
    hook: 'The first people to explain the world without gods, and the long argument that started.',
    thinkers: 'Thales · Heraclitus · Socrates · Plato · Aristotle · the Stoics',
    tint: '#7c6a2e',
  },
  {
    id: 'faith-reason',
    numeral: 'II',
    range: '354 – 1347',
    title: 'Faith meets reason',
    hook: 'A thousand years of faith and reason needing each other and pulling apart, across three religions.',
    thinkers: 'Augustine · Avicenna · Averroes · Maimonides · Anselm · Aquinas · Ockham',
    tint: '#9a6a32',
  },
  {
    id: 'rationalists-empiricists',
    numeral: 'III',
    range: '1619 – 1776',
    title: 'The rationalists and the empiricists',
    hook: 'Six minds rebuild knowledge from scratch, and a Scotsman shows the foundation might not hold.',
    thinkers: 'Descartes · Spinoza · Leibniz · Hobbes · Locke · Berkeley · Hume',
    tint: '#5f6b3a',
  },
  {
    id: 'kant-germans',
    numeral: 'IV',
    range: '1781 – 1860',
    title: 'Kant and the Germans',
    hook: 'The mind builds the world it sees, Spirit moves through history, and the world is blind will.',
    thinkers: 'Kant · Hegel · Schopenhauer',
    tint: '#6b5d2e',
  },
  {
    id: 'nineteenth-century',
    numeral: 'V',
    range: '1843 – 1900',
    title: 'The nineteenth century',
    hook: 'Liberty, the leap, alienation, and the death of God that ends the arc.',
    thinkers: 'Mill · Harriet Taylor · Kierkegaard · Marx · Nietzsche',
    tint: '#8a4f3f',
  },
]

const CHIPS: { label: string; href: string }[] = [
  { label: "Socrates' trial", href: '/philosophy/greeks' },
  { label: 'The cave', href: '/philosophy/greeks' },
  { label: "Ockham's razor", href: '/philosophy/faith-reason' },
  { label: 'The cogito', href: '/philosophy/rationalists-empiricists' },
  { label: "Hume's billiard balls", href: '/philosophy/rationalists-empiricists' },
  { label: 'The categorical imperative', href: '/philosophy/kant-germans' },
  { label: 'God is dead', href: '/philosophy/nineteenth-century' },
]

export default function PhilosophyHome() {
  return (
    <div style={{ background: 'var(--background)', color: INK, minHeight: '100vh' }}>
      <div className="war-skin" style={{ position: 'sticky', top: 0, zIndex: 20, minHeight: 0, background: 'transparent' }}>
        <WarHeader active="philosophy" title="Philosophy" subtitle="Stuff Happened · Philosophy" backHref="/" />
      </div>

      <main>
        {/* App title + what-this-is */}
        <div style={{ padding: '14px 16px 4px' }}>
          <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: FAINT, marginBottom: 7 }}>
            Browse by era
          </div>
          <h1 style={{ fontFamily: SERIF, fontSize: 27, fontWeight: 600, color: INK, lineHeight: 1.08, margin: 0, letterSpacing: -0.2 }}>
            Twenty-six centuries of trying to think clearly.
          </h1>
          <p style={{ fontFamily: SANS, fontSize: 13, lineHeight: 1.5, color: MUTED, margin: '8px 0 0' }}>
            Read it straight through, or skip to the parts everyone already has opinions about.
          </p>
        </div>

        {/* Primary action */}
        <div style={{ padding: '14px 16px 6px' }}>
          <Link href="/philosophy/greeks" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
            background: ACCENT, color: '#1c1a14', textDecoration: 'none',
            padding: '13px 16px', borderRadius: 10, fontFamily: SERIF, fontSize: 15, fontWeight: 600, letterSpacing: -0.1,
          }}>
            <span>Start at the beginning</span>
            <span style={{ fontFamily: SANS, fontSize: 16 }}>→</span>
          </Link>
        </div>

        {/* Famous-stuff chips */}
        <div style={{ padding: '10px 0 6px' }}>
          <div style={{ padding: '0 16px 8px', fontFamily: SANS, fontSize: 11, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase', color: FAINT }}>
            Jump to the famous stuff
          </div>
          <div style={{ display: 'flex', gap: 8, padding: '0 16px 4px', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {CHIPS.map((c) => (
              <Link key={c.label} href={c.href} style={{
                flexShrink: 0, whiteSpace: 'nowrap', padding: '8px 12px', borderRadius: 999,
                border: `1px solid ${BORDER}`, background: CARD, color: INK, textDecoration: 'none',
                fontFamily: SANS, fontSize: 12.5, fontWeight: 500,
              }}>{c.label}</Link>
            ))}
          </div>
        </div>

        {/* Era cards */}
        <div style={{ padding: '8px 16px 28px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {ERAS.map((era) => (
            <Link key={era.id} href={`/philosophy/${era.id}`} style={{
              display: 'flex', alignItems: 'stretch', gap: 12, padding: 10, borderRadius: 10,
              border: `1px solid ${BORDER}`, background: CARD, textDecoration: 'none', color: INK,
            }}>
              <div style={{
                width: 60, flexShrink: 0, alignSelf: 'stretch', minHeight: 88, borderRadius: 8,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `linear-gradient(150deg, ${era.tint}, color-mix(in srgb, ${era.tint} 52%, #211f1b))`,
                fontFamily: SERIF, fontSize: 26, fontWeight: 600, color: 'rgba(255,255,255,.92)',
                textShadow: '0 1px 3px rgba(0,0,0,.35)',
              }} aria-hidden>{era.numeral}</div>
              <div style={{ flex: 1, minWidth: 0, padding: '2px 0' }}>
                <div style={{ fontFamily: SANS, fontSize: 11, color: MUTED, letterSpacing: 0.3 }}>{era.range}</div>
                <div style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 600, lineHeight: 1.16, color: INK, margin: '3px 0 0', letterSpacing: -0.1 }}>{era.title}</div>
                <div style={{ fontFamily: SERIF, fontSize: 13, lineHeight: 1.45, color: MUTED, margin: '6px 0 0' }}>{era.hook}</div>
                <div style={{ fontFamily: SANS, fontSize: 10.5, lineHeight: 1.4, color: FAINT, letterSpacing: 0.1, margin: '8px 0 0' }}>{era.thinkers}</div>
              </div>
            </Link>
          ))}
        </div>

        {/* Thinker deep reads */}
        <div style={{ padding: '2px 16px 32px' }}>
          <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: FAINT, margin: '0 0 10px' }}>
            Go deeper
          </div>
          <Link href="/philosophy/thinker/plato" style={{
            display: 'flex', alignItems: 'stretch', gap: 12, padding: 10, borderRadius: 10,
            border: `1px solid ${BORDER}`, background: CARD, textDecoration: 'none', color: INK,
          }}>
            <div style={{
              width: 60, flexShrink: 0, alignSelf: 'stretch', minHeight: 76, borderRadius: 8,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'linear-gradient(150deg, #7c6a2e, color-mix(in srgb, #7c6a2e 52%, #211f1b))',
              fontFamily: SERIF, fontSize: 24, fontWeight: 600, color: 'rgba(255,255,255,.92)',
              textShadow: '0 1px 3px rgba(0,0,0,.35)',
            }} aria-hidden>&Pi;</div>
            <div style={{ flex: 1, minWidth: 0, padding: '2px 0' }}>
              <div style={{ fontFamily: SANS, fontSize: 11, color: MUTED, letterSpacing: 0.3 }}>Thinker &middot; from The Greeks</div>
              <div style={{ fontFamily: SERIF, fontSize: 17, fontWeight: 600, lineHeight: 1.16, color: INK, margin: '3px 0 0', letterSpacing: -0.1 }}>Plato</div>
              <div style={{ fontFamily: SERIF, fontSize: 13, lineHeight: 1.45, color: MUTED, margin: '6px 0 0' }}>The whole system, walked: the Forms, the cave and the divided line, the just soul, the Ring of Gyges, Diotima&rsquo;s ladder.</div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  )
}
