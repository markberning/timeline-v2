'use client'

// Shared war-skin chrome: the sticky editorial header (back · wordmark · theme
// switch · search · menu) plus the slide-in menu and search overlay. Used by the
// battle dossier and the narrative reader so both stay in sync. Lives inside a
// `.war-skin` wrapper (the caller supplies it); styles come from ./war-skin.css.

import { useEffect, useState } from 'react'
import { SearchOverlay } from '@/components/chronology/search-overlay'

export const WAR_ICONS = {
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
      <button className={!dark ? 'on' : ''} onClick={() => set(false)} aria-label="Light mode">{WAR_ICONS.sun}</button>
      <button className={dark ? 'on' : ''} onClick={() => set(true)} aria-label="Dark mode">{WAR_ICONS.moon}</button>
    </div>
  )
}

// The editorial header used across the war redesign. `backHref` is the round
// back button's destination (defaults to the war home). `active` highlights the
// current vertical in the slide-in menu. `title`/`subtitle` set the wordmark —
// the ACW pages keep the default; the all-wars front door overrides it.
export function WarHeader({
  backHref = '/war-civil-war',
  active = 'war',
  title = 'American Civil War',
  subtitle = 'Stuff Happened · War',
}: { backHref?: string; active?: string; title?: string; subtitle?: string }) {
  const [menu, setMenu] = useState(false)
  const [search, setSearch] = useState(false)
  return (
    <>
      <header className="p-hdr">
        <a className="back" href={backHref} aria-label="Back">{WAR_ICONS.back}</a>
        <div className="wm"><b>{title}</b><span>{subtitle}</span></div>
        <ThemeSwitch />
        <button className="p-iconbtn" onClick={() => setSearch(true)} aria-label="Search">{WAR_ICONS.search}</button>
        <button className="p-iconbtn" onClick={() => setMenu(true)} aria-label="Menu">{WAR_ICONS.menu}</button>
      </header>

      {menu && (
        <>
          <div className="p-scrim" onClick={() => setMenu(false)} />
          <div className="p-menu">
            <div className="mh"><b>Stuff Happened</b><button className="p-iconbtn" onClick={() => setMenu(false)}>{WAR_ICONS.close}</button></div>
            <nav>
              {MENU.map(it => (
                <a key={it.k} className={it.k === active ? 'on' : ''} href={it.href}>{it.n}<span className="sub">{it.s}</span></a>
              ))}
            </nav>
            <div className="mf"><span>Long-form history,<br />one war at a time.</span></div>
          </div>
        </>
      )}

      {search && <SearchOverlay onClose={() => setSearch(false)} />}
    </>
  )
}
