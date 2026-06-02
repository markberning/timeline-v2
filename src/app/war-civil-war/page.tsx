'use client'

// War home — REDESIGN (feat/war-redesign). Tabbed hub per the design handoff:
// header + slide-in menu, editorial masthead + hero, two-row tab bar
// (Story · Battles · Off the Field / Theatres · Commanders · Facts), content
// swapped one tab at a time. Skin tokens live in ./war-skin.css under .war-skin,
// riding the app's global `.dark` class. INCREMENT 1: shell + Story tab live;
// the other five tabs are placeholders pending their own passes.

import './war-skin.css'
import { useEffect, useState } from 'react'
import { SearchOverlay } from '@/components/chronology/search-overlay'
import { CHAPTERS } from '@/lib/civil-war-roster'

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

function StoryTab() {
  return (
    <div className="p-page">
      <a className="p-storycard" href="/war-civil-war/how-the-war-was-fought">
        <div className="row">
          <span className="chip"><span className="sq" /><span className="p-label">The military story</span></span>
          <span className="p-label">5 chapters</span>
        </div>
        <h3 className="p-serif">How the War Was Fought</h3>
        <p>The whole war as one through-line, how it was planned, won, and lost, year by year from 1861 to 1865. The connective tissue between the causes and the battles.</p>
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

function Placeholder({ label }: { label: string }) {
  return (
    <div className="p-page">
      <div className="p-empty">{label} is coming in the next pass of the redesign.</div>
    </div>
  )
}

export default function WarHome() {
  const [tab, setTab] = useState('story')
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)

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

      {/* sticky two-row tab bar */}
      <div className="p-subnav">
        {TAB_ROWS.map((row, ri) => (
          <div className="p-seg" key={ri}>
            {row.map(t => (
              <button key={t.k} className={tab === t.k ? 'on' : ''} onClick={() => setTab(t.k)}>{t.label}</button>
            ))}
          </div>
        ))}
      </div>

      {/* active tab */}
      {tab === 'story' && <StoryTab />}
      {tab === 'battles' && <Placeholder label="Battles" />}
      {tab === 'offfield' && <Placeholder label="Off the Field" />}
      {tab === 'theatres' && <Placeholder label="Theatres" />}
      {tab === 'commanders' && <Placeholder label="Commanders" />}
      {tab === 'facts' && <Placeholder label="Facts" />}

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
