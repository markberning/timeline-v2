'use client'

// War home — REDESIGN (feat/war-redesign). Tabbed hub per the design handoff:
// header + slide-in menu, editorial masthead + hero, two-row tab bar
// (Story · Battles · Off the Field / Theatres · Commanders · Facts), content
// swapped one tab at a time. Skin tokens live in ./war-skin.css under .war-skin,
// riding the app's global `.dark` class.
// INCREMENT 2: Story + Battles (timeline + "Find your battle" filter + theatre
// chips) live; Off the Field / Theatres / Commanders / Facts still placeholders.

import './war-skin.css'
import { useEffect, useMemo, useState } from 'react'
import { SearchOverlay } from '@/components/chronology/search-overlay'
import { CHAPTERS, MAJORS, THEMES } from '@/lib/civil-war-roster'
import { COMMANDERS } from '@/lib/civil-war-commanders'
import { TheatresTab } from './theatres-tab'
import { WarBreadcrumb } from '@/components/mode/war-chrome'
import { warCrumbs } from '@/components/mode/theatre-page'
import { CIVIL_WAR } from '@/lib/wars/civil-war'

// ---- inline icons (replace prototype's PI set) ----
const I = {
  back: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>,
  search: <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></svg>,
  menu: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 6h18M3 12h18M3 18h18" /></svg>,
  close: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>,
  arr: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>,
  sun: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>,
  moon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>,
}

const TAB_ROWS: { k: string; label: string }[][] = [
  [{ k: 'story', label: 'Story' }, { k: 'battles', label: 'Battles' }, { k: 'offfield', label: 'Off the Field' }],
  [{ k: 'theatres', label: 'Theatres' }, { k: 'commanders', label: 'Commanders' }, { k: 'facts', label: 'Facts' }],
]

const MENU = [
  { k: 'civ', n: 'Civ', s: 'Civilizations', href: '/' },
  { k: 'war', n: 'War', s: 'American Civil War', href: '/war' },
  { k: 'art', n: 'Art', s: 'Movements & works', href: '/art' },
  { k: 'music', n: 'Music', s: 'Eras & composers', href: '/music' },
]

const STANDFIRST = 'Four years, some ten thousand engagements, and three-quarters of a million dead settled whether the United States would survive, and whether it would survive half-slave.'

// theatre key → display label + accent (README theatre colors)
const THEATRE: Record<string, { label: string; color: string }> = {
  east: { label: 'Eastern', color: 'var(--th-east)' },
  west: { label: 'Western', color: 'var(--th-west)' },
  tmis: { label: 'Trans-Miss', color: 'var(--th-tmis)' },
  naval: { label: 'Naval', color: 'var(--th-naval)' },
}
const CHIPS: { k: string; label: string; color?: string }[] = [{ k: 'All', label: 'All' }, ...Object.entries(THEATRE).map(([k, v]) => ({ k, label: v.label, color: v.color }))]

// state abbreviation → full name, so "tennessee" matches a place ending ", TN"
const PSTATES: Record<string, string> = {
  SC: 'south carolina', VA: 'virginia', MO: 'missouri', TN: 'tennessee', AR: 'arkansas', LA: 'louisiana',
  MD: 'maryland', KY: 'kentucky', MS: 'mississippi', PA: 'pennsylvania', GA: 'georgia', AL: 'alabama',
  NC: 'north carolina', FL: 'florida', NM: 'new mexico', WV: 'west virginia', KS: 'kansas',
}
const hay = (b: typeof MAJORS[number]) => {
  const m = b.place.match(/,\s*([A-Z]{2})\.?$/)
  const full = m ? (PSTATES[m[1]] || '') : ''
  return `${b.name} ${b.place} ${THEATRE[b.theatre]?.label ?? ''} ${full}`.toLowerCase()
}

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

function hl(text: string, q: string) {
  if (!q) return text
  const i = text.toLowerCase().indexOf(q)
  if (i < 0) return text
  return <>{text.slice(0, i)}<mark>{text.slice(i, i + q.length)}</mark>{text.slice(i + q.length)}</>
}

function StoryTab() {
  return (
    <div className="p-page story-spine">
      <a className="p-storycard story" href="/war-civil-war/how-the-war-was-fought">
        <div className="row">
          <span className="chip"><span className="sq" /><span className="p-label">The Civil War story</span></span>
        </div>
        <h3 className="p-serif">How the War Happened</h3>
        <p>The whole war as one through-line, how it was planned, won, and lost, year by year from 1861 to 1865. The connective tissue between the causes and the battles.</p>
        <div className="sc-meta">5 chapters that lead to 63 battles and events and over 1,000 pages.</div>
        <span className="p-cta">Read the war&rsquo;s story {I.arr}</span>
      </a>
      {CHAPTERS.map((c, i) => {
        const yr = (c.date.match(/\d{4}/) || [''])[0]
        return (
          <a className="p-chap" key={c.id} href={c.href}>
            <span className="no p-mono">{String(i + 1).padStart(2, '0')}</span>
            <span className="bd"><b className="p-serif">{c.short ?? c.name}</b><span>{c.hook}</span></span>
            <span className="yr p-mono">{yr}</span>
          </a>
        )
      })}
    </div>
  )
}

function BattlesTab({ theatre, query }: { theatre: string; query: string }) {
  const q = query.trim().toLowerCase()
  const list = useMemo(() => {
    let l = [...MAJORS].sort((a, b) => (a.year * 100 + a.m) - (b.year * 100 + b.m))
    if (theatre !== 'All') l = l.filter(b => b.theatre === theatre)
    if (q) l = l.filter(b => hay(b).includes(q))
    return l
  }, [theatre, q])
  const years = [...new Set(list.map(b => b.year))]

  return (
    <div className="p-page">
      <div className="p-sechead">
        <h2 className="p-label">{q ? `Matching “${query}”` : (theatre === 'All' ? 'Every battle' : `${THEATRE[theatre]?.label} theatre`)}</h2>
        <span className="ct">{list.length} battle{list.length !== 1 ? 's' : ''}</span>
      </div>
      {list.length ? (
        <div className="p-tl">
          {years.map(yr => (
            <div key={yr}>
              <div className="p-yr"><span className="ylab">{yr}</span><span className="yline" /></div>
              {list.filter(b => b.year === yr).map(b => (
                <a className={'p-bt' + (b.size === 'l' || b.size === 'xl' ? ' key' : '')} key={b.id} href={b.href}
                  style={{ ['--dot' as string]: THEATRE[b.theatre]?.color }}>
                  <span className="bh"><b className="p-serif">{hl(b.name, q)}</b><span className="th" style={{ color: THEATRE[b.theatre]?.color }}>{THEATRE[b.theatre]?.label}</span></span>
                  <span className="place">{hl(b.place, q)}</span>
                  <span className="note">{b.hook}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="p-empty">No battles match “{query}”.<br />Try a name like “Gettysburg” or a place like “Tennessee”.</div>
      )}
    </div>
  )
}

// (all six tabs are wired below)
const OTBF_PHASES: [string, string][] = [
  ['causes', 'Causes'], ['outbreak', 'Outbreak · 1861'], ['hard', 'The Hard Years · 1862'],
  ['turning', 'The Turning · 1863'], ['total', 'Total War · 1864–65'], ['after', 'Aftermath'],
]

function OffFieldTab() {
  return (
    <div className="p-page">
      <a className="p-storycard otbf" href="/war-civil-war/off-the-battlefield">
        <div className="row">
          <span className="chip"><span className="sq" /><span className="p-label">Off the battlefield</span></span>
          <span className="p-label">17 chapters</span>
        </div>
        <h3 className="p-serif">Why we fought, and what it changed</h3>
        <p>The war beyond the battles: the causes, emancipation, the home front, the economy, technology, diplomacy, and the long reckoning after the guns went quiet.</p>
        <span className="p-cta">Start with the causes {I.arr}</span>
      </a>
      {OTBF_PHASES.map(([k, label]) => {
        const items = THEMES.filter(t => t.phase === k)
        if (!items.length) return null
        return (
          <div className="p-phasegrp" key={k}>
            <h3 className="p-phase p-serif">{label}</h3>
            {items.map(t => (
              <a className="p-chap" key={t.id} href={t.href}>
                <span className="bd"><b className="p-serif">{t.short ?? t.name}</b><span>{t.hook}</span></span>
                <span className="yr p-mono">{t.date}</span>
              </a>
            ))}
          </div>
        )
      })}
    </div>
  )
}

function CommandersTab() {
  const list = Object.values(COMMANDERS).sort((a, b) => b.appearances.length - a.appearances.length || a.name.localeCompare(b.name))
  return (
    <div className="p-page">
      <div className="p-sechead"><h2 className="p-label">The cast</h2><span className="ct">{list.length} commanders</span></div>
      <p style={{ fontFamily: 'var(--serif)', fontSize: 14, lineHeight: 1.5, color: 'var(--ink-soft)', margin: '0 0 18px' }}>
        Follow a commander battle to battle, from first command to surrender. The rail traces their war across the theatres.
      </p>
      <div className="p-cmdgrid">
        {list.map(c => (
          <a key={c.id} className={'p-cmdcard ' + (c.side === 'U' ? 'u' : 'c')} href={`/war-civil-war/cast/${c.id}/`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <span className="pic"><img src={c.portrait} alt="" /></span>
            <b>{c.name}</b>
            <span className="meta">{c.appearances.length} battles</span>
            <span className="ep">{c.epithet}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

// Verified trivia for the Facts tab — every item fact-checked (born-verified
// against NPS / LoC / Smithsonian / American Battlefield Trust) and run through
// the storytelling critic; myths and Lost Cause framing rejected. See the war
// content pipeline (audits/war-content-pipeline.md).
const FACTS: { group: string; items: { h: string; p: string; href?: string; label?: string }[] }[] = [
  {
    group: 'The toll',
    items: [
      { h: 'Disease did the killing', p: 'For every three men killed in battle, five died of dysentery, typhoid, or measles in camp. Two of every three Civil War deaths came from disease, not combat.' },
      { h: 'A nation’s worth of dead', p: 'The dead, by modern estimates as many as 750,000, were about 2 percent of the country. Scaled to today’s population, that is six or seven million Americans.' },
      { h: 'More than every other American war, combined', p: 'More Americans died in the Civil War than in all other U.S. wars through Korea combined. By the latest count, Vietnam doesn’t change that.' },
    ],
  },
  {
    group: 'The war’s firsts',
    items: [
      { h: 'Iron against iron', p: 'At Hampton Roads in March 1862, the USS Monitor and the CSS Virginia fought the first battle between ironclad warships. In one afternoon they made every wooden navy on earth obsolete.', href: '/war-civil-war/off-the-battlefield/ironclads', label: 'The ironclads' },
      { h: 'The submarine that kept sinking', p: 'The H.L. Hunley was the first submarine to sink an enemy warship. It also sank three times itself, drowning 21 men, among them its namesake Horace Hunley. The third time was the night of its one success.' },
      { h: 'The first income tax', p: 'To pay for the war, Washington levied the country’s first income tax in 1861 and created the bureau to collect it in 1862. That bureau is now the IRS.' },
      { h: 'Money backed by nothing', p: 'The war produced America’s first legal-tender paper money. The “greenbacks” were backed by nothing but the government’s word.' },
      { h: 'The first draft', p: 'Both sides ran out of volunteers: the Confederacy in 1862, the Union in 1863. Neither asked.', href: '/war-civil-war/off-the-battlefield/war-within-north', label: 'The draft riots' },
      { h: 'The Medal of Honor', p: 'The nation’s highest decoration for valor was created during the war. Its first recipients were the raiders of the Great Locomotive Chase, who hijacked a train deep in Georgia.' },
    ],
  },
  {
    group: 'Strange but true',
    items: [
      { h: 'It began in his yard and ended in his parlor', p: 'Wilmer McLean had the first battle of Bull Run fought across his farm; a shell came down his kitchen chimney. So he moved 120 miles to escape the war. Four years later, Lee surrendered to Grant in his front parlor.', href: '/war-civil-war/eastern/appomattox', label: 'Appomattox' },
      { h: 'Killed by his own men', p: 'Chancellorsville was Stonewall Jackson’s greatest victory. His own troops shot him in the dark that same night, and he died eight days later.', href: '/war-civil-war/eastern/chancellorsville', label: 'Chancellorsville' },
      { h: 'Arlington was Lee’s front yard', p: 'Arlington National Cemetery sits on Robert E. Lee’s seized estate. The Union quartermaster ordered the first graves dug right beside the mansion, on purpose, so the family could never live there again.' },
      { h: 'Why they’re called sideburns', p: 'Union general Ambrose Burnside wore such famous cheek-whiskers that we still wear his name on our faces. “Sideburns” is just his surname flipped around.' },
      { h: 'U.S. Grant was a typo', p: 'He was born Hiram Ulysses Grant. A clerk’s error at West Point logged him as “U. S. Grant,” and he kept the initials.' },
      { h: 'The first American eye in the sky', p: 'Lincoln sent a balloonist named Thaddeus Lowe up over the lines to count Confederate troops and call in artillery fire. Aerial reconnaissance had begun.' },
    ],
  },
]

function FactsTab() {
  const cas = [
    { lbl: 'Union', v: 390000, c: 'var(--union)' },
    { lbl: 'Confederacy', v: 310000, c: 'var(--confed)' },
    { lbl: 'Civilian', v: 50000, c: 'var(--muted)' },
  ]
  const total = cas.reduce((s, x) => s + x.v, 0)
  const num = (n: number) => n.toLocaleString('en-US')
  return (
    <div className="p-page">
      <div className="p-stats">
        <div className="st"><b className="p-serif">4 years</b><span>Span</span></div>
        <div className="st"><b className="p-serif">~10,500</b><span>Engagements</span></div>
        <div className="st"><b className="p-serif">~750k</b><span>Dead</span></div>
      </div>
      <div className="p-vs">
        <div className="side u">
          <div className="nm"><span className="sq" />Union</div>
          <h4 className="p-serif">United States</h4>
          <small>2.1M served</small><em>Lincoln, then Grant &amp; Sherman</em>
        </div>
        <div className="mid">vs</div>
        <div className="side c r">
          <div className="nm"><span className="sq" />Confederacy</div>
          <h4 className="p-serif">Confederate States</h4>
          <small>~900k served</small><em>Davis · Lee · Jackson</em>
        </div>
      </div>
      <div className="p-cas">
        <div className="p-label">Death toll (est.) · {num(total)} dead</div>
        <div className="bar">{cas.map(c => <i key={c.lbl} style={{ width: (c.v / total * 100) + '%', background: c.c }} />)}</div>
        <div className="legend">{cas.map(c => <span key={c.lbl}><i style={{ background: c.c }} />{c.lbl} {num(c.v)}</span>)}</div>
      </div>
      <div className="p-outcome"><b>Outcome.</b> Union victory. The Confederacy dissolved, and slavery was abolished by the Thirteenth Amendment.</div>

      <p className="p-factlead">The war ran on numbers, firsts, and sheer strangeness. A few that stick with you:</p>
      {FACTS.map(g => (
        <div className="p-factgrp" key={g.group}>
          <div className="gh">{g.group}</div>
          <div className="p-facts">
            {g.items.map(f => (
              <div className="p-fact" key={f.h}>
                <b className="p-serif">{f.h}</b>
                <p>{f.p}</p>
                {f.href && <a href={f.href}>{f.label}</a>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default function WarHome() {
  const [tab, setTab] = useState('story')
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)
  const [bq, setBq] = useState('')
  const [thFilter, setThFilter] = useState('All')

  // Deep link from the breadcrumb "Theatre" crumb: /war-civil-war?theatre=east
  // lands on the Theatres tab with that theatre's chip selected, scrolled to the
  // tab bar.
  useEffect(() => {
    const th = new URLSearchParams(window.location.search).get('theatre')
    if (th && THEATRE[th]) {
      setThFilter(th)
      setTab('theatres')
      requestAnimationFrame(() => document.querySelector('.p-subnav')?.scrollIntoView({ block: 'start' }))
    }
  }, [])

  return (
    <div className="war-skin">
      {/* sticky header */}
      <header className="p-hdr">
        <a className="back" href="/war" aria-label="All wars">{I.back}</a>
        <div className="wm"><b>American Civil War</b><span>Stuff Happened · War</span></div>
        <ThemeSwitch />
        <button className="p-iconbtn" onClick={() => setSearch(true)} aria-label="Search">{I.search}</button>
        <button className="p-iconbtn" onClick={() => setMenu(true)} aria-label="Menu">{I.menu}</button>
      </header>

      <WarBreadcrumb crumbs={warCrumbs(CIVIL_WAR, thFilter !== 'All' ? { lane: thFilter } : undefined)} bare />

      {/* editorial masthead */}
      <div className="p-mast">
        <div className="p-eyebrow">War · 1861&ndash;1865</div>
        <h1 className="p-mast-title p-serif">American<br />Civil War</h1>
        <p className="p-stand">{STANDFIRST}</p>
      </div>
      <div className="p-heroband">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/war-img/civil-war-hero.jpg" alt="" />
      </div>
      <div className="p-credit">Storming Fort Wagner · Kurz &amp; Allison · public domain</div>

      {/* sticky two-row tab bar (+ battle filter on the Battles tab) */}
      <div className="p-subnav below-crumb">
        {TAB_ROWS.map((row, ri) => (
          <div className="p-seg" key={ri}>
            {row.map(t => (
              <button key={t.k} className={tab === t.k ? 'on' : ''} onClick={() => setTab(t.k)}>{t.label}</button>
            ))}
          </div>
        ))}
        {tab === 'battles' && (
          <div className="p-bsearch">
            {I.search}
            <input value={bq} onChange={e => setBq(e.target.value)} placeholder="Find your battle" />
            {bq && <button className="clr" onClick={() => setBq('')} aria-label="Clear">{I.close}</button>}
          </div>
        )}
        {(tab === 'battles' || tab === 'theatres') && (
          <div className="p-filter">
            {CHIPS.map(c => (
              <button key={c.k} className={'f' + (thFilter === c.k ? ' on' : '')} onClick={() => setThFilter(c.k)}
                style={{ ['--chipc' as string]: c.color } as React.CSSProperties}>
                {c.color && <span className="dot" style={{ background: c.color }} />}{c.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* active tab */}
      {tab === 'story' && <StoryTab />}
      {tab === 'battles' && <BattlesTab theatre={thFilter} query={bq} />}
      {tab === 'offfield' && <OffFieldTab />}
      {tab === 'theatres' && <TheatresTab active={thFilter} goBattles={k => { setThFilter(k); setTab('battles') }} />}
      {tab === 'commanders' && <CommandersTab />}
      {tab === 'facts' && <FactsTab />}

      {/* slide-in menu */}
      {menu && (
        <>
          <div className="p-scrim" onClick={() => setMenu(false)} />
          <div className="p-menu">
            <div className="mh"><b>Stuff Happened</b><button className="p-iconbtn" onClick={() => setMenu(false)}>{I.close}</button></div>
            <nav>
              {MENU.map(it => (
                <a key={it.k} className={it.k === 'war' ? 'on' : ''} href={it.href}>{it.n}<span className="sub">{it.s}</span></a>
              ))}
            </nav>
            <div className="mf"><span>Long-form history,<br />one war at a time.</span></div>
          </div>
        </>
      )}

      {/* global search (reuses the app-wide overlay) */}
      {search && <SearchOverlay onClose={() => setSearch(false)} />}
    </div>
  )
}
