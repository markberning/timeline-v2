'use client'

// WarHome — the shared, config-driven war home page. Built from the French & Indian
// home (the clean, data-driven one) and generalized so any war with a `home` block on
// its WarConfig renders through it: the masthead, the four core tabs (Story · Battles ·
// Commanders · Off the Field), and — for a one-theatre war — the scroll-linked
// all-battles map. Everything is read from the config + its `home` block, so a new war
// gets the whole home as a thin wrapper (<WarHome cfg={MY_WAR} />). The Civil War keeps
// its own page for now, for its extra Theatres/Facts tabs (warranted by its content).

import '../../app/war-civil-war/war-skin.css'
import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
import { WarHeader, WAR_ICONS } from '@/components/mode/war-header'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { warCrumbs } from '@/components/mode/theatre-page'
import { DottedMap, type Dot } from '@/components/mode/dotted-map'
import type { WarConfig } from '@/lib/wars/types'

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

function StoryTab({ cfg }: { cfg: WarConfig }) {
  const sc = cfg.home!.storyCard
  return (
    <div className="p-page story-spine">
      <div className="p-storycard story fi-dim">
        <div className="row">
          <span className="chip"><span className="sq" /><span className="p-label">{sc.kicker}</span></span>
          {soonPill}
        </div>
        <h3 className="p-serif">{sc.heading}</h3>
        <p>{sc.body}</p>
        {sc.meta && <div className="sc-meta">{sc.meta}</div>}
      </div>
      {cfg.chapters.map((c, i) => (
        <SpineRow key={c.id} no={String(i + 1).padStart(2, '0')} title={c.short ?? c.name} sub={c.hook} right={(c.date.match(/\d{4}/) || [''])[0]} href={c.href} />
      ))}
    </div>
  )
}

function CastTab({ cfg }: { cfg: WarConfig }) {
  const cc = cfg.home!.castCard
  const list = Object.values(cfg.commanders).slice().sort((a, b) => b.appearances.length - a.appearances.length || a.name.localeCompare(b.name))
  return (
    <div className="p-page">
      {cc && (
        <div className="p-storycard story fi-dim" style={{ marginBottom: 14 }}>
          <div className="row">
            <span className="chip"><span className="sq" style={{ background: 'var(--fi-battles)' }} /><span className="p-label">{cc.kicker}</span></span>
          </div>
          <h3 className="p-serif">{cc.heading}</h3>
          <p>{cc.body}</p>
        </div>
      )}
      <div className="p-cmdgrid">
        {list.map(c => (
          <a key={c.id} className={'p-cmdcard fi ' + c.side} href={`${cfg.routeBase}/cast/${c.id}/`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="pic"><img src={c.portrait} alt="" /></span>
            <b>{c.name}</b>
            <span className="meta">{c.appearances.length} {c.appearances.length === 1 ? 'battle' : 'battles'}</span>
            <span className="ep">{c.epithet}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

// The Battles tab with the scroll-linked all-battles map (one-theatre wars). The map
// and list are scroll-linked — whichever battle is at the top of the list is "active":
// its dot lights up + shows its title, switching as you scroll. Only one label at a
// time, so dense clusters never collide.
function BattlesTab({ cfg }: { cfg: WarConfig }) {
  const map = cfg.home!.battleMap!
  const laneDot = (id: string) => cfg.lanes.find(l => l.id === id)?.color?.dot
  const list = useMemo(() => [...cfg.battles].sort((a, b) => (a.year * 100 + a.m) - (b.year * 100 + b.m)), [cfg])
  const years = [...new Set(list.map(b => b.year))]
  const [active, setActive] = useState<string | undefined>(list[0]?.id)
  const [mapTop, setMapTop] = useState(154)
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sub = document.querySelector('.p-subnav') as HTMLElement | null
    if (!sub) return
    const stuck = parseFloat(getComputedStyle(sub).top) || 102
    setMapTop(Math.round(stuck + sub.offsetHeight))
  }, [])

  useEffect(() => {
    const rows = Array.from(document.querySelectorAll<HTMLElement>('.p-bt[data-id]'))
    if (rows.length < 2) return
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const mapBottom = mapRef.current?.getBoundingClientRect().bottom ?? mapTop
        const line = mapBottom + 84
        let cur = rows[0].dataset.id
        for (const r of rows) {
          if (r.getBoundingClientRect().top <= line) cur = r.dataset.id
          else break
        }
        if (cur) setActive(cur)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(raf) }
  }, [mapTop])

  const activeB = list.find(b => b.id === active)
  const dots: Dot[] = list.map(b => {
    const ll = map.coords[b.id]; if (!ll) return null
    const isA = b.id === active
    return { lat: ll[0], lon: ll[1], active: isA, plain: !isA, color: isA ? '#e23bd6' : '#6b6170' }
  }).filter(Boolean) as Dot[]

  return (
    <div className="p-page">
      <div ref={mapRef} className="fi-stickymap" style={{ position: 'sticky', top: mapTop, zIndex: 10, background: 'var(--paper)' }}>
        <div className="fi-mapwrap">
          <DottedMap eyebrow={map.eyebrow} accent={map.accent} frame={map.frame} states={map.states} dots={dots} />
          {activeB && (
            <a className="fi-mapcap" href={activeB.href ?? undefined} style={{ pointerEvents: activeB.href ? 'auto' : 'none' }}>
              <b className="p-serif">{activeB.name}</b>
              <span>{activeB.place} · {activeB.year}{activeB.href ? '' : ' · soon'}</span>
            </a>
          )}
        </div>
      </div>
      <div className="p-sechead"><h2 className="p-label">Every battle</h2><span className="ct">{list.length} battles</span></div>
      <div className="p-tl">
        {years.map(yr => (
          <div key={yr}>
            <div className="p-yr"><span className="ylab">{yr}</span><span className="yline" /></div>
            {list.filter(b => b.year === yr).map(b => {
              const dot = laneDot(b.theatre)
              const row = (
                <>
                  <span className="bh"><b className="p-serif">{b.name}</b></span>
                  <span className="place">{b.place}</span>
                  <span className="note">{b.hook ?? soonPill}</span>
                </>
              )
              const cls = 'p-bt' + (b.size === 'l' || b.size === 'xl' ? ' key' : '') + (b.href ? '' : ' fi-dim') + (b.id === active ? ' fi-active' : '')
              return b.href
                ? <a className={cls} key={b.id} data-id={b.id} href={b.href} style={{ ['--dot' as string]: dot }}>{row}</a>
                : <div className={cls} key={b.id} data-id={b.id} style={{ ['--dot' as string]: dot }}>{row}</div>
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

function OffFieldTab({ cfg }: { cfg: WarConfig }) {
  const oc = cfg.home!.offfieldCard
  return (
    <div className="p-page">
      <div className="p-storycard otbf fi-dim">
        <div className="row">
          <span className="chip"><span className="sq" /><span className="p-label">{oc.kicker}</span></span>
          <span className="p-label">{oc.count}</span>
        </div>
        <h3 className="p-serif">{oc.heading}</h3>
        <p>{oc.body}</p>
      </div>
      {cfg.home!.offfieldPhases.map(([k, label]) => {
        const items = cfg.themes.filter(t => t.phase === k)
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

export function WarHome({ cfg }: { cfg: WarConfig }) {
  const home = cfg.home!
  const [tab, setTab] = useState('story')
  // The breadcrumb's jump rung reads the generic "Jump to" on load (its dropdown lists
  // every section), switching to the section's name only once the reader picks a tab.
  const [picked, setPicked] = useState(false)
  const pick = (k: string) => { setTab(k); setPicked(true) }

  // Tabs: the four core sections. Commanders only when the war has a cast.
  const tabs = [
    { k: 'story', label: 'Story' },
    { k: 'battles', label: 'Battles' },
    ...(cfg.castHref ? [{ k: 'cast', label: 'Commanders' }] : []),
    { k: 'offfield', label: 'Off the Field' },
  ]
  // Each tab maps to a config lane, so the breadcrumb's jump rung reflects the active tab.
  const theatreLaneId = cfg.lanes.find(l => l.kind === 'theatre')?.id
  const storyLaneId = cfg.lanes.find(l => l.kind === 'story')?.id
  const offfieldLaneId = cfg.lanes.find(l => l.kind === 'offfield')?.id
  const tabLane: Record<string, string | undefined> = { story: storyLaneId, battles: theatreLaneId, offfield: offfieldLaneId }

  // Deep link from the breadcrumb's theatre crumb: ?theatre=<theatreLaneId> lands on the
  // Battles tab, scrolled to it.
  useEffect(() => {
    const th = new URLSearchParams(window.location.search).get('theatre')
    if (th && th === theatreLaneId) {
      pick('battles')
      requestAnimationFrame(() => document.querySelector('.p-subnav')?.scrollIntoView({ block: 'start' }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="war-skin">
      <WarHeader backHref="/war" title={cfg.name} />

      <WarBreadcrumb crumbs={warCrumbs(cfg, picked && tabLane[tab] ? { lane: tabLane[tab] } : undefined)} accent={cfg.accent} bare />

      <div className="p-mast">
        <div className="p-eyebrow">{home.eyebrow}</div>
        <h1 className="p-mast-title p-serif">{home.title.map((line, i) => <Fragment key={i}>{i > 0 && <br />}{line}</Fragment>)}</h1>
        <p className="p-stand">{home.standfirst}</p>
      </div>
      <div className="p-heroband">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={home.heroImg} alt="" />
      </div>
      <div className="p-credit">{home.heroCredit}</div>

      <div className="p-subnav below-crumb">
        <div className="p-seg">
          {tabs.map(t => (
            <button key={t.k} className={tab === t.k ? 'on' : ''} onClick={() => pick(t.k)}>{t.label}</button>
          ))}
        </div>
      </div>

      {tab === 'story' && <StoryTab cfg={cfg} />}
      {tab === 'battles' && <BattlesTab cfg={cfg} />}
      {tab === 'cast' && <CastTab cfg={cfg} />}
      {tab === 'offfield' && <OffFieldTab cfg={cfg} />}

      {home.footer && (
        <div className="bp-foot">
          <a href="/war">
            <span>Part of <b className="p-serif">the American wars</b><span className="sub">Every war the country has fought</span></span>
            <span className="arr">{WAR_ICONS.arr}</span>
          </a>
        </div>
      )}
    </div>
  )
}
