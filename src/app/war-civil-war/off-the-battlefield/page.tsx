'use client'

// The fifth "theatre" — Off the Battlefield. NOT a place and NOT a battle theatre:
// no army face-off, no geography map. The war beyond the firing line — causes →
// how it was fought → what it became → the reckoning. REDESIGN (feat/war-redesign):
// war-skin chrome (editorial header + masthead + hero) with the 17 themes grouped
// by phase, mirroring the home's Off-the-Field tab. Burnt-orange (--otbf) accent.
// Reads THEMES from the shared roster (src/lib/civil-war-roster.ts).

import '../war-skin.css'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { WarHeader } from '@/components/mode/war-header'
import { civilWarCrumbs } from '@/components/mode/theatre-page'
import { ACCENTS } from '@/components/mode/war-chrome'
import { THEMES } from '@/lib/civil-war-roster'

// chronological phase groups, same order + labels as the home Off-the-Field tab
const OTBF_PHASES: [string, string][] = [
  ['causes', 'Causes'], ['outbreak', 'Outbreak · 1861'], ['hard', 'The Hard Years · 1862'],
  ['turning', 'The Turning · 1863'], ['total', 'Total War · 1864–65'], ['after', 'Aftermath'],
]

export default function OffTheBattlefieldPage() {
  return (
    <div className="war-skin rd-land" style={{ ['--accent' as string]: 'var(--otbf)' } as React.CSSProperties}>
      <WarHeader backHref="/war-civil-war" />
      <WarBreadcrumb crumbs={civilWarCrumbs({ theatre: 'offfield' })} accent={ACCENTS.otbf} bare />

      <div className="p-mast">
        <div className="p-eyebrow">War · the war beyond the battles</div>
        <h1 className="p-mast-title p-serif">Off the Battlefield</h1>
        <p className="p-stand">Battles decide who holds the field. They don’t explain why four million people were enslaved, how a rifled musket changed everything, or what the war did to the people who never fired a shot. These are those threads.</p>
      </div>
      <div className="p-heroband">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/war-img/off-the-battlefield-hero.jpg" alt="" />
      </div>
      <div className="p-credit">Thomas Nast, “Emancipation” (Harper’s Weekly, 1863) · public domain</div>

      <div className="p-page">
        <p className="p-lead">The threads off the firing line, in the order they shaped the war — from the cotton economy that caused it to the reckoning that followed.</p>
        {OTBF_PHASES.map(([k, label]) => {
          const items = THEMES.filter(t => t.phase === k)
          if (!items.length) return null
          return (
            <div className="p-phasegrp" key={k}>
              <h3 className="p-phase p-serif">{label}</h3>
              {items.map(t => (
                t.href
                  ? <a className="p-chap" key={t.id} href={t.href}>
                      <span className="bd"><b className="p-serif">{t.short ?? t.name}</b><span>{t.hook}</span></span>
                      <span className="yr p-mono">{t.date}</span>
                    </a>
                  : <div className="p-chap" key={t.id} style={{ opacity: .55 }}>
                      <span className="bd"><b className="p-serif">{t.short ?? t.name}</b><span>{t.hook}</span></span>
                      <span className="yr p-mono">Soon</span>
                    </div>
              ))}
            </div>
          )
        })}
        <a className="rd-next end" href="/war-civil-war">
          <div style={{ minWidth: 0 }}>
            <div className="k">Back to the war</div>
            <div className="t">American Civil War</div>
          </div>
          <span className="arr" aria-hidden>↩</span>
        </a>
      </div>
    </div>
  )
}
