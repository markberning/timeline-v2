'use client'

// French and Indian War — Off the Battlefield. The war beyond the firing line: the
// land grab that caused it, the contest for Native alliances, the Acadian expulsion,
// the war debt that lit the fuse to the Revolution, and the catastrophe the peace
// brought Native nations. For THIS war these threads are the heart, weighted at least
// as heavily as the battles (project_war_causes_first). Mirrors the Civil War OTBF
// index, driven by the F&I WarConfig + warCrumbs. Hero deferred to the image pass.

import '../../war-civil-war/war-skin.css'
import { WarBreadcrumb, ACCENTS } from '@/components/mode/war-chrome'
import { WarHeader, WAR_ICONS } from '@/components/mode/war-header'
import { warCrumbs } from '@/components/mode/theatre-page'
import { FRENCH_INDIAN as W } from '@/lib/wars/french-indian'
import { THEME_NARR } from './theme-narratives'

const slugOf = (href?: string) => href?.split('/').pop() ?? ''
const isBuilt = (href?: string) => !!THEME_NARR[slugOf(href)]
const offfield = W.lanes.find(l => l.kind === 'offfield')
const ACCENT = offfield?.color?.dark ?? 'var(--otbf)'

// chronological theme groups, in the order they shaped the war
const OTBF_PHASES: [string, string][] = [
  ['causes', 'Causes'], ['hard', 'During the War'], ['after', 'Aftermath & the Fuse'],
]

export default function FIOffTheBattlefieldPage() {
  return (
    <div className="war-skin rd-land" style={{ ['--accent' as string]: ACCENT } as React.CSSProperties}>
      <WarHeader backHref={W.routeBase} title={W.name} />
      <WarBreadcrumb crumbs={warCrumbs(W, { lane: 'offfield' })} accent={ACCENT} bare />

      <div className="p-mast">
        <div className="p-eyebrow">War · the war beyond the battles</div>
        <h1 className="p-mast-title p-serif">Off the Battlefield</h1>
        <p className="p-stand">Battles decided who held a fort. They don’t explain why a land company in Virginia could light a war that spanned the globe, what the fighting did to the Native nations whose ground it was, or how a British victory ended up pushing thirteen colonies toward revolt. These are those threads.</p>
      </div>

      <div className="p-page" style={{ paddingBottom: 12 }}>
        <p className="p-lead">The threads off the firing line, in the order they shaped the war — from the contest for the Ohio Country to the fuse it left burning.</p>
        {OTBF_PHASES.map(([k, label]) => {
          const items = W.themes.filter(t => t.phase === k)
          if (!items.length) return null
          return (
            <div className="p-phasegrp" key={k}>
              <h3 className="p-phase p-serif">{label}</h3>
              {items.map(t => (
                isBuilt(t.href)
                  ? <a className="p-chap" key={t.id} href={t.href}>
                      <span className="bd"><b className="p-serif">{t.short ?? t.name}</b>{t.hook ? <span>{t.hook}</span> : null}</span>
                      <span className="yr p-mono">{t.date}</span>
                    </a>
                  : <div className="p-chap" key={t.id} style={{ opacity: .55 }}>
                      <span className="bd"><b className="p-serif">{t.short ?? t.name}</b>{t.hook ? <span>{t.hook}</span> : null}</span>
                      <span className="yr p-mono">Soon</span>
                    </div>
              ))}
            </div>
          )
        })}
      </div>
      <div className="bp-foot">
        <a href={W.routeBase}>
          <span>Part of <b className="p-serif">{W.name}</b><span className="sub">All phases &amp; battles</span></span>
          <span className="arr">{WAR_ICONS.arr}</span>
        </a>
      </div>
    </div>
  )
}
