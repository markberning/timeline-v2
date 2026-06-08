'use client'

// American Revolution — Off the Battlefield (war #3). The war beyond the firing line, and
// for THIS war the heart of it (project_war_causes_first): the long quarrel over taxes and
// rights that began with the last war's debts, the idea of independence, the civil war
// between Patriots and Loyalists, an army built from nothing, slavery and the Revolution,
// the French alliance, and the peace that made a country. Mirrors the F&I OTBF index,
// driven by the Revolution WarConfig + warCrumbs. Hero deferred to the image pass.

import '../../war-civil-war/war-skin.css'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { WarHeader, WAR_ICONS } from '@/components/mode/war-header'
import { warCrumbs } from '@/components/mode/theatre-page'
import { REVOLUTION as W } from '@/lib/wars/revolution'
import { THEME_NARR } from './theme-narratives'

const slugOf = (href?: string) => href?.split('/').pop() ?? ''
const isBuilt = (href?: string) => !!THEME_NARR[slugOf(href)]
const offfield = W.lanes.find(l => l.kind === 'offfield')
const ACCENT = offfield?.color?.dark ?? 'var(--otbf)'

// theme groups, in the order they shaped the war
const OTBF_PHASES: [string, string][] = [
  ['causes', 'Why we fought'], ['war', 'The war years'], ['reckoning', 'The peace & the reckoning'],
]

export default function RevOffTheBattlefieldPage() {
  return (
    <div className="war-skin rd-land" style={{ ['--accent' as string]: ACCENT } as React.CSSProperties}>
      <WarHeader backHref={W.routeBase} title={W.name} />
      <WarBreadcrumb crumbs={warCrumbs(W, { lane: 'offfield' })} accent={ACCENT} bare />

      <div className="p-mast">
        <div className="p-eyebrow">War · the war beyond the battles</div>
        <h1 className="p-mast-title p-serif">Off the Battlefield</h1>
        <p className="p-stand">Battles decided who held a town. They don&rsquo;t explain why a quarrel over a tax on molasses became a war for independence, how a fight for liberty was waged by a society that held people as property, or why a fifth of the country fought on the other side. These are those threads, and for this war they carry as much weight as the battles.</p>
      </div>

      <div className="p-page" style={{ paddingBottom: 12 }}>
        <p className="p-lead">The threads off the firing line, from the long road to revolution through the peace that made a country.</p>
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
