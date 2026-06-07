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
import { useEffect, useMemo, useState } from 'react'
import { WarHeader, WAR_ICONS } from '@/components/mode/war-header'
import { FRENCH_INDIAN as W } from '@/lib/wars/french-indian'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { warCrumbs } from '@/components/mode/theatre-page'
import { DottedMap } from '@/components/mode/dotted-map'

const STANDFIRST = 'Nine years in the North American woods decided who would rule the continent — Britain or France — and the contest turned, more than anything, on the Native nations whose land it was. The British victory ejected France, and its costs and broken promises lit the fuse to the Revolution.'

const TABS = [
  { k: 'story', label: 'Story' },
  { k: 'battles', label: 'Battles' },
  { k: 'offfield', label: 'Off the Field' },
]

// Each home tab maps to a config lane, so the breadcrumb's jump rung reflects the
// active tab (War › Battles, not the generic "Jump to") and its dropdown switches tabs.
const TAB_LANE: Record<string, string> = { story: 'fi-story', battles: 'fi-battles', offfield: 'offfield' }

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
    <div className="p-page story-spine">
      <div className="p-storycard story fi-dim">
        <div className="row">
          <span className="chip"><span className="sq" /><span className="p-label">The war story</span></span>
          {soonPill}
        </div>
        <h3 className="p-serif">Five phases, 1754 to 1763</h3>
        <p>The whole war as one through-line: the spark in the Ohio woods, the years Britain reeled, the turn under Pitt, the conquest of Canada, and the peace that set up the Revolution. The connective tissue between the causes and the battles.</p>
        <div className="sc-meta">5 phases that lead to 14 battles and 8 chapters off the battlefield.</div>
      </div>
      {W.chapters.map((c, i) => (
        <SpineRow key={c.id} no={String(i + 1).padStart(2, '0')} title={c.short ?? c.name} sub={c.hook} right={(c.date.match(/\d{4}/) || [''])[0]} href={c.href} />
      ))}
    </div>
  )
}

// Battle coordinates for the all-battles overview map (lat, lon). Kept here, not in
// the config, since only this map needs them.
const FI_BATTLE_LL: Record<string, [number, number]> = {
  'fi-jumonville': [39.85, -79.62], 'fi-fort-necessity': [39.81, -79.59], 'fi-monongahela': [40.40, -79.86],
  'fi-lake-george': [43.43, -73.64], 'fi-oswego': [43.46, -76.51], 'fi-fort-william-henry': [43.42, -73.71],
  'fi-carillon': [43.84, -73.39], 'fi-louisbourg': [45.92, -59.97], 'fi-frontenac': [44.23, -76.48],
  'fi-fort-duquesne': [40.44, -80.01], 'fi-niagara': [43.26, -79.06], 'fi-quebec': [46.81, -71.21],
  'fi-sainte-foy': [46.78, -71.28], 'fi-montreal': [45.50, -73.57],
}
// The major battles get a name label on the map (the rest are dots); anchors point each
// label at open space, away from its neighbours.
const FI_MAP_LABELS: Record<string, { anchor: 'start' | 'end' | 'middle'; dateBelow?: boolean }> = {
  'fi-monongahela': { anchor: 'start' }, 'fi-fort-william-henry': { anchor: 'start' },
  'fi-louisbourg': { anchor: 'end' }, 'fi-quebec': { anchor: 'start' }, 'fi-montreal': { anchor: 'end' },
}

function AllBattlesMap() {
  const dots = W.battles.map(b => {
    const ll = FI_BATTLE_LL[b.id]; if (!ll) return null
    const lab = FI_MAP_LABELS[b.id]
    return {
      name: lab ? b.name : undefined, date: lab ? String(b.year) : undefined,
      lat: ll[0], lon: ll[1], heavy: !!lab, anchor: lab?.anchor, dateBelow: lab?.dateBelow,
    }
  }).filter(Boolean) as { name?: string; date?: string; lat: number; lon: number; heavy?: boolean; anchor?: 'start' | 'end' | 'middle'; dateBelow?: boolean }[]
  return (
    <DottedMap
      eyebrow="The theatre · 1754–1763"
      caption="Fourteen battles, from the Forks of the Ohio to the St. Lawrence and Cape Breton. The fighting climbed north from the Pennsylvania frontier, up the Lake George and Lake Champlain corridor, and along the river road to the conquest of Canada."
      accent="#c79cd0"
      frame={{ lonMin: -82.4, lonMax: -58.3, latMin: 38.7, latMax: 47.7 }}
      states={[
        { name: 'New York', label: 'NEW YORK', labelLon: -75.4, labelLat: 42.7, labelSize: 13 },
        { name: 'Pennsylvania' },
        { name: 'Quebec', label: 'QUÉBEC', labelLon: -72.5, labelLat: 47.2, labelSize: 13 },
        { name: 'Nova Scotia', label: 'NOVA SCOTIA', labelLon: -62.6, labelLat: 45.0, labelSize: 11 },
        { name: 'Ontario' }, { name: 'New Brunswick' }, { name: 'Prince Edward Island' },
        { name: 'Maryland' }, { name: 'Virginia' }, { name: 'Ohio' }, { name: 'West Virginia' },
        { name: 'New Jersey' }, { name: 'Connecticut' }, { name: 'Massachusetts' }, { name: 'Vermont' },
        { name: 'New Hampshire' }, { name: 'Maine' }, { name: 'Delaware' }, { name: 'Rhode Island' },
      ]}
      dots={dots}
    />
  )
}

function BattlesTab() {
  const list = useMemo(() => [...W.battles].sort((a, b) => (a.year * 100 + a.m) - (b.year * 100 + b.m)), [])
  const years = [...new Set(list.map(b => b.year))]
  return (
    <div className="p-page">
      <AllBattlesMap />
      <div className="p-sechead"><h2 className="p-label">Every battle</h2><span className="ct">{list.length} battles</span></div>
      <div className="p-tl">
        {years.map(yr => (
          <div key={yr}>
            <div className="p-yr"><span className="ylab">{yr}</span><span className="yline" /></div>
            {list.filter(b => b.year === yr).map(b => {
              const dot = laneDot(b.theatre)
              // One theatre, so no per-battle theatre tag — just the plum timeline dot.
              const row = (
                <>
                  <span className="bh"><b className="p-serif">{b.name}</b></span>
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
  // Like the ACW home: the breadcrumb's jump rung reads the generic "Jump to" on load
  // (its dropdown lists all three sections), and switches to the section's name only
  // once the reader picks one. `picked` tracks whether a selection has been made.
  const [picked, setPicked] = useState(false)
  const pick = (k: string) => { setTab(k); setPicked(true) }
  // Deep link from the breadcrumb "The Battles" theatre crumb:
  // /war-french-indian?theatre=fi-battles lands on the Battles tab, scrolled to it.
  useEffect(() => {
    const th = new URLSearchParams(window.location.search).get('theatre')
    if (th === 'fi-battles') {
      pick('battles')
      requestAnimationFrame(() => document.querySelector('.p-subnav')?.scrollIntoView({ block: 'start' }))
    }
  }, [])
  return (
    <div className="war-skin">
      <WarHeader backHref="/war" title={W.name} />

      <WarBreadcrumb crumbs={warCrumbs(W, picked ? { lane: TAB_LANE[tab] } : undefined)} accent={W.accent} bare />

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

      <div className="p-subnav below-crumb">
        <div className="p-seg">
          {TABS.map(t => (
            <button key={t.k} className={tab === t.k ? 'on' : ''} onClick={() => pick(t.k)}>{t.label}</button>
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
