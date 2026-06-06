'use client'

// French and Indian War — home (war #2). Built on the shared war-skin chrome and
// driven entirely by the FRENCH_INDIAN config (src/lib/wars/french-indian.ts). The
// war's shape differs from the Civil War's: battles group by chronological PHASE, the
// phases double as the story spine, and there's no geographic-theatre tab. Most rows
// render "Soon" until each section is authored through the gated pipeline; a built
// section lights up automatically once its config entry gets an href. No hero image
// yet (born-verified rule — a missing image beats a wrong one), so it opens on the
// masthead. Not linked from the /war front door until there's real content.

import '../war-civil-war/war-skin.css'
import { useMemo, useState } from 'react'
import { WarHeader, WAR_ICONS } from '@/components/mode/war-header'
import { FRENCH_INDIAN as W } from '@/lib/wars/french-indian'

const STANDFIRST = 'Nine years in the North American woods decided who would rule the continent — Britain or France — and the contest turned, more than anything, on the Native nations whose land it was. The British victory ejected France, and its costs and broken promises lit the fuse to the Revolution.'

const TABS = [
  { k: 'story', label: 'Story' },
  { k: 'battles', label: 'Battles' },
  { k: 'offfield', label: 'Off the Field' },
]

// Off-the-battlefield phase groupings (the heart of this war).
const OTBF_PHASES: [string, string][] = [
  ['causes', 'Why they fought'],
  ['hard', 'The war years'],
  ['after', 'The peace & the reckoning'],
]

const laneDot = (id: string) => W.lanes.find(l => l.id === id)?.color?.dot
const soonPill = <span className="fi-soon">Soon</span>

// A chapter/theme row: a link when built, a muted "Soon" row otherwise.
function SpineRow({ no, title, sub, right, href, dot }: { no?: string; title: string; sub?: string; right?: string; href?: string; dot?: string }) {
  const inner = (
    <>
      {no && <span className="no p-mono">{no}</span>}
      <span className="bd"><b className="p-serif">{title}</b>{sub && <span>{sub}</span>}</span>
      <span className="yr p-mono">{href ? right : soonPill}</span>
    </>
  )
  return href
    ? <a className="p-chap" href={href} style={dot ? { ['--dot' as string]: dot } : undefined}>{inner}</a>
    : <div className="p-chap fi-dim" style={dot ? { ['--dot' as string]: dot } : undefined}>{inner}</div>
}

function StoryTab() {
  return (
    <div className="p-page">
      <div className="p-storycard fi-dim">
        <div className="row">
          <span className="chip"><span className="sq" /><span className="p-label">The war story</span></span>
          {soonPill}
        </div>
        <h3 className="p-serif">Five phases, 1754 to 1763</h3>
        <p>The whole war as one through-line: the spark in the Ohio woods, the years Britain reeled, the turn under Pitt, the conquest of Canada, and the peace that set up the Revolution. The connective tissue between the causes and the battles.</p>
        <div className="sc-meta">5 phases that lead to 14 battles and 8 chapters off the battlefield.</div>
      </div>
      {W.chapters.map((c, i) => (
        <SpineRow key={c.id} no={String(i + 1).padStart(2, '0')} title={c.short ?? c.name} sub={c.hook} right={(c.date.match(/\d{4}/) || [''])[0]} href={c.href} dot={laneDot(c.id)} />
      ))}
    </div>
  )
}

function BattlesTab() {
  const list = useMemo(() => [...W.battles].sort((a, b) => (a.year * 100 + a.m) - (b.year * 100 + b.m)), [])
  const years = [...new Set(list.map(b => b.year))]
  const laneLabel = (id: string) => W.lanes.find(l => l.id === id)?.short ?? id
  return (
    <div className="p-page">
      <div className="p-sechead"><h2 className="p-label">Every battle</h2><span className="ct">{list.length} battles</span></div>
      <div className="p-tl">
        {years.map(yr => (
          <div key={yr}>
            <div className="p-yr"><span className="ylab">{yr}</span><span className="yline" /></div>
            {list.filter(b => b.year === yr).map(b => {
              const dot = laneDot(b.theatre)
              const row = (
                <>
                  <span className="bh"><b className="p-serif">{b.name}</b><span className="th" style={{ color: dot }}>{laneLabel(b.theatre)}</span></span>
                  <span className="place">{b.place}</span>
                  <span className="note">{b.hook ?? soonPill}</span>
                </>
              )
              const cls = 'p-bt' + (b.size === 'l' || b.size === 'xl' ? ' key' : '') + (b.href ? '' : ' fi-dim')
              return b.href
                ? <a className={cls} key={b.id} href={b.href} style={{ ['--dot' as string]: dot }}>{row}</a>
                : <div className={cls} key={b.id} style={{ ['--dot' as string]: dot }}>{row}</div>
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

function OffFieldTab() {
  return (
    <div className="p-page">
      <div className="p-storycard otbf fi-dim">
        <div className="row">
          <span className="chip"><span className="sq" /><span className="p-label">Off the battlefield</span></span>
          <span className="p-label">8 chapters</span>
        </div>
        <h3 className="p-serif">Why we fought, and who paid for it</h3>
        <p>The war beyond the battles: the scramble for the Ohio country, the contest for Native alliances, the Acadian expulsion, the first stirrings of colonial union, and the debts and broken promises that pointed straight at the Revolution.</p>
      </div>
      {OTBF_PHASES.map(([k, label]) => {
        const items = W.themes.filter(t => t.phase === k)
        if (!items.length) return null
        return (
          <div className="p-phasegrp" key={k}>
            <h3 className="p-phase p-serif">{label}</h3>
            {items.map(t => (
              <SpineRow key={t.id} title={t.short ?? t.name} sub={t.hook} right={t.date} href={t.href} />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default function FrenchIndianHome() {
  const [tab, setTab] = useState('story')
  return (
    <div className="war-skin">
      <WarHeader backHref="/war" title={W.name} />

      <div className="p-mast">
        <div className="p-eyebrow">War · 1754&ndash;1763</div>
        <h1 className="p-mast-title p-serif">The French &amp;<br />Indian War</h1>
        <p className="p-stand">{STANDFIRST}</p>
      </div>
      <div className="p-heroband">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/war-img/fi-war-hero.jpg" alt="" />
      </div>
      <div className="p-credit">The Death of General Wolfe · Benjamin West, 1770 · public domain</div>

      <div className="p-subnav">
        <div className="p-seg">
          {TABS.map(t => (
            <button key={t.k} className={tab === t.k ? 'on' : ''} onClick={() => setTab(t.k)}>{t.label}</button>
          ))}
        </div>
      </div>

      {tab === 'story' && <StoryTab />}
      {tab === 'battles' && <BattlesTab />}
      {tab === 'offfield' && <OffFieldTab />}

      <div className="bp-foot">
        <a href="/war">
          <span>Part of <b className="p-serif">the American wars</b><span className="sub">Every war the country has fought</span></span>
          <span className="arr">{WAR_ICONS.arr}</span>
        </a>
      </div>
    </div>
  )
}
