'use client'

// Battle dossier — REDESIGN (feat/war-redesign). The shared, data-driven battle
// page in the new war skin: editorial masthead + full hero, then a tabbed dossier
// (At a glance / Commanders / Outcome / Narrative) swapped one tab at a time.
// Decorative accents read from --accent (set per-battle to the theatre color);
// the two SIDES keep the union/confed palette. Skin tokens live in ./war-skin.css.
// Every battle page is a thin wrapper that hands one BattleData object to this.

import './war-skin.css'
import { useEffect, useRef, useState } from 'react'
import { SearchOverlay } from '@/components/chronology/search-overlay'
import { WarBreadcrumb, type Crumb } from '@/components/mode/war-chrome'
import { castIdForName } from '@/lib/civil-war-commanders'
import { warForRoute } from '@/lib/wars/registry'
import { CIVIL_WAR } from '@/lib/wars/civil-war'

// ---- inline icons (shared with the war home) ----
const I = {
  back: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>,
  search: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>,
  menu: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>,
  close: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>,
  arr: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>,
  chev: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>,
  check: <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 6.2l2.4 2.4L9.5 3.5" /></svg>,
  sun: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>,
  moon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>,
}

const MENU = [
  { k: 'civ', n: 'Civ', s: 'Civilizations', href: '/' },
  { k: 'war', n: 'War', s: 'American Civil War', href: '/war' },
  { k: 'art', n: 'Art', s: 'Movements & works', href: '/art' },
  { k: 'music', n: 'Music', s: 'Eras & composers', href: '/music' },
]

// ---- data shape (every battle page hands one of these in) ----
export type Theatre = 'east' | 'west' | 'tmis' | 'naval'
export type Side = 'u' | 'c'

export type BattleData = {
  theatre: string            // lane id — a theatre for the CW, a phase for the F&I war
  crumbs: Crumb[]            // from warCrumbs() — carries the jump dropdown
  backHref?: string          // back-arrow target (defaults to the war home)
  // Side identity is generic: 'u' = side one, 'c' = side two. The Civil War keeps the
  // defaults (Union / Confederate, blue / red). Other wars override the tag text and
  // re-tint the two side colours by passing sideNames + sideColors (e.g. F&I:
  // British / French). Backward-compatible: omit both and CW behaviour is unchanged.
  sideNames?: { u: string; c: string }   // role-tag text (default UNION / CSA)
  sideColors?: { u: string; c: string }  // CSS colour values; override --union / --confed at the dossier root
  eyebrow: string            // "Battle · Naval & Coastal"
  title: string
  date: string
  place: string
  hero: { img: string; pal: [string, string, string]; credit?: string } // credit omitted when no verified provenance (never invented)
  stats: { label: string; value: string; win?: Side }[]   // 3 stats; mark winner
  sides: [BattleSide, BattleSide]
  note?: React.ReactNode      // glance callout (e.g. the bloodless note)
  // casualties bar; *Label override the legend text (ranges / "mostly captured"),
  // footnote = the small caveat line under the bar (disclaimers, surrender counts)
  casualties?: { union: number; csa: number; civ?: number; unionLabel?: string; csaLabel?: string; footnote?: React.ReactNode }
  extra?: React.ReactNode     // bespoke per-battle block (e.g. Gettysburg's Fishhook diagram)
  commanders: Commander[]
  outcome: { verdict: string; text: React.ReactNode }
  sections: Section[]
  sectionHref: (id: string) => string
  footer: { title: string; sub: string; href: string }
}
export type BattleSide = { side: Side; tag: string; force: string; str: string; cmd: string; note: string }
export type Commander = { name: string; role: string; side: Side; img: string; bio: React.ReactNode }
export type Section = { id: string; eyebrow: string; title: string; blurb: string; img?: string }

const TABS = [
  { id: 'narrative', label: 'Narrative' },
  { id: 'commanders', label: 'Commanders' },
  { id: 'glance', label: 'At a glance' },
  { id: 'outcome', label: 'Outcome' },
]
const num = (n: number) => n.toLocaleString('en-US')

function ThemeSwitch() {
  const [dark, setDark] = useState(true)
  useEffect(() => { setDark(document.documentElement.classList.contains('dark')) }, [])
  const set = (d: boolean) => {
    setDark(d)
    document.documentElement.classList.toggle('dark', d)
    try { localStorage.setItem('theme', d ? 'dark' : 'light') } catch { /* ignore */ }
    const m = document.querySelector('meta[name="theme-color"]')
    if (m) m.setAttribute('content', d ? '#22201e' : '#f5f0e8')
  }
  return (
    <div className="p-themeswitch">
      <button className={!dark ? 'on' : ''} onClick={() => set(false)} aria-label="Light mode">{I.sun}</button>
      <button className={dark ? 'on' : ''} onClick={() => set(true)} aria-label="Dark mode">{I.moon}</button>
    </div>
  )
}

function Hero({ hero }: { hero: BattleData['hero'] }) {
  const [failed, setFailed] = useState(false)
  const bg = `linear-gradient(160deg, ${hero.pal[0]}, ${hero.pal[1]} 55%, ${hero.pal[2]})`
  return (
    <div className="p-heroband" style={{ background: bg }}>
      {failed
        ? <div style={{ width: '100%', paddingTop: '58%' }} />
        // eslint-disable-next-line @next/next/no-img-element
        : <img src={hero.img} alt="" onError={() => setFailed(true)} />}
    </div>
  )
}

export function BattleDossier({ data }: { data: BattleData }) {
  const [tab, setTab] = useState('narrative')
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)
  const subnavRef = useRef<HTMLDivElement>(null)
  // Resolve the war from the footer's war-home href (no hook → SSG-safe), then the
  // lane accent from the config: skinVar (light/dark-adaptive var) or its mapHex. For
  // the CW this resolves to var(--th-east/west/tmis/naval), byte-identical to before.
  const war = warForRoute(data.footer?.href ?? '') ?? CIVIL_WAR
  const lane = war.lanes.find(l => l.id === data.theatre)
  const accent = lane?.skinVar ? `var(${lane.skinVar})` : (lane?.mapHex ?? war.accent)

  const changeTab = (id: string) => {
    setTab(id)
    // keep the tab bar pinned under the header when switching tabs
    setTimeout(() => {
      const el = subnavRef.current
      if (el && el.getBoundingClientRect().top < 56) el.scrollIntoView({ block: 'start' })
    }, 50)
  }

  const cas = data.casualties
  const casTotal = cas ? cas.union + cas.csa + (cas.civ ?? 0) : 0

  // Re-tint the two sides for non-CW wars (F&I: British red / French blue). The whole
  // side UI (face-off blocks, casualty bar, commander rings) reads var(--union)/--confed,
  // so overriding those two vars at the root recolours everything without touching CSS.
  const sideVars = data.sideColors
    ? { ['--union' as string]: data.sideColors.u, ['--confed' as string]: data.sideColors.c }
    : {}

  return (
    <div className="war-skin" style={{ ['--accent' as string]: accent, ...sideVars } as React.CSSProperties}>
      {/* sticky header */}
      <header className="p-hdr">
        <a className="back" href={data.backHref ?? war.routeBase} aria-label={`Back to the ${war.name}`}>{I.back}</a>
        <div className="wm"><b>{war.name}</b><span>Stuff Happened · War</span></div>
        <ThemeSwitch />
        <button className="p-iconbtn" onClick={() => setSearch(true)} aria-label="Search">{I.search}</button>
        <button className="p-iconbtn" onClick={() => setMenu(true)} aria-label="Menu">{I.menu}</button>
      </header>

      {/* where-am-I trail — kept as the existing dual-action breadcrumb
          (each crumb links, and tapping opens the theatre/battle jump dropdown) */}
      <WarBreadcrumb crumbs={data.crumbs} accent={accent} bare />

      {/* editorial masthead */}
      <div className="bp-mast">
        <div className="p-eyebrow">{data.eyebrow}</div>
        <h1 className="bp-title p-serif">{data.title}</h1>
        <div className="bp-meta">{data.date} · {data.place}</div>
      </div>
      <div style={{ marginTop: 16 }} />
      <Hero hero={data.hero} />
      {data.hero.credit && <div className="p-credit">{data.hero.credit}</div>}

      {/* sticky tab bar */}
      <div className="p-subnav below-crumb" ref={subnavRef}>
        <div className="p-seg">
          {TABS.map(t => (
            <button key={t.id} className={tab === t.id ? 'on' : ''} onClick={() => changeTab(t.id)}>{t.label}</button>
          ))}
        </div>
      </div>

      {/* active tab */}
      <div className="p-page bp-body" key={tab}>
        {tab === 'glance' && (
          <>
            <div className="bp-stats">
              {data.stats.map(s => (
                <div className={'st' + (s.win ? ' win ' + s.win : '')} key={s.label}>
                  <b className="p-serif">{s.value}</b><span>{s.label}</span>
                </div>
              ))}
            </div>
            <div className="bp-vs">
              <div className={'bp-side ' + data.sides[0].side}>
                <div className="tag"><span className="sq" />{data.sides[0].tag}</div>
                <div className="force p-serif">{data.sides[0].force}</div>
                <div className="str p-mono">{data.sides[0].str}</div>
                <div className="cmd">{data.sides[0].cmd}</div>
                <div className="sidenote">{data.sides[0].note}</div>
              </div>
              <div className="bp-vsbadge">vs</div>
              <div className={'bp-side ' + data.sides[1].side}>
                <div className="tag"><span className="sq" />{data.sides[1].tag}</div>
                <div className="force p-serif">{data.sides[1].force}</div>
                <div className="str p-mono">{data.sides[1].str}</div>
                <div className="cmd">{data.sides[1].cmd}</div>
                <div className="sidenote">{data.sides[1].note}</div>
              </div>
            </div>
            {cas && (
              <div className="bp-cas">
                <div className="bar">
                  <i style={{ width: (cas.union / casTotal * 100) + '%', background: 'var(--union)' }} />
                  <i style={{ width: (cas.csa / casTotal * 100) + '%', background: 'var(--confed)' }} />
                  {cas.civ ? <i style={{ width: (cas.civ / casTotal * 100) + '%', background: 'var(--muted)' }} /> : null}
                </div>
                <div className="legend">
                  <span><i style={{ background: 'var(--union)' }} />{cas.unionLabel ?? `Union ${num(cas.union)}`}</span>
                  <span><i style={{ background: 'var(--confed)' }} />{cas.csaLabel ?? `Confederacy ${num(cas.csa)}`}</span>
                  {cas.civ ? <span><i style={{ background: 'var(--muted)' }} />Civilian {num(cas.civ)}</span> : null}
                </div>
                {cas.footnote && <div className="bp-casnote">{cas.footnote}</div>}
              </div>
            )}
            {data.note && <div className="bp-note">{data.note}</div>}
            {data.extra}
          </>
        )}

        {tab === 'commanders' && data.commanders.map(c => {
          // cast arcs exist only for the CW today; other wars get no arc link until
          // their cast roster is authored.
          const arc = war === CIVIL_WAR ? castIdForName(c.name) : undefined
          return (
            <div className={'bp-cmd ' + c.side} key={c.name}>
              <span className="pic">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt="" />
              </span>
              <div className="bd">
                <div className="nm p-serif">{c.name}</div>
                <div className="role"><span className="sd">{c.side === 'u' ? (data.sideNames?.u ?? 'UNION') : (data.sideNames?.c ?? 'CSA')}</span><span className="rl">{c.role}</span></div>
                <div className="bio">{c.bio}</div>
                {arc && <a className="arc" href={`${war.routeBase}/cast/${arc}`}>Follow the full arc</a>}
              </div>
            </div>
          )
        })}

        {tab === 'outcome' && (
          <div className="bp-outcome">
            <div className="vt p-serif"><span className="ck">{I.check}</span>{data.outcome.verdict}</div>
            <p>{data.outcome.text}</p>
          </div>
        )}

        {tab === 'narrative' && (
          <div className="bp-narr">
            {data.sections.map((s, i) => (
              <a className="bp-nsec" key={s.id} href={data.sectionHref(s.id)}>
                <span className="no p-mono">{i + 1}</span>
                <div className="bd">
                  <div className="ey">{s.eyebrow}</div>
                  <div className="t p-serif">{s.title}</div>
                  <div className="d">{s.blurb}</div>
                </div>
                {s.img && <span className="thumb">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={s.img} alt="" /></span>}
                <span className="chev">{I.chev}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="bp-foot">
        <a href={data.footer.href}>
          <span>Part of <b className="p-serif">{data.footer.title}</b><span className="sub">{data.footer.sub}</span></span>
          <span className="arr">{I.arr}</span>
        </a>
      </div>

      {/* slide-in menu */}
      {menu && (
        <>
          <div className="p-scrim" onClick={() => setMenu(false)} />
          <div className="p-menu">
            <div className="mh"><b>Stuff Happened</b><button className="p-iconbtn" onClick={() => setMenu(false)}>{I.close}</button></div>
            <nav>
              {MENU.map(it => (
                <a key={it.k} className={it.k === 'war' ? 'on' : ''} href={it.href}>{it.n}<span className="sub">{it.k === 'war' ? war.name : it.s}</span></a>
              ))}
            </nav>
            <div className="mf"><span>Long-form history,<br />one war at a time.</span></div>
          </div>
        </>
      )}

      {search && <SearchOverlay onClose={() => setSearch(false)} />}
    </div>
  )
}
