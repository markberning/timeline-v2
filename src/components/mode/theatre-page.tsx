'use client'

// Shared THEATRE-level page — the layer between War and Battle. Extracted from
// the near-identical eastern/page.tsx + western/page.tsx (the pilot's copy-now /
// DRY-later pair) so the four geographic theatres are one component driven by
// per-theatre data. Dossier view: GenericHero · collapsible At-a-glance (stat
// strip + armies face-off w/ commander trail + casualties bar + commanders
// strip) · the theatre's geography map (passed in) · interleaved-campaigns
// timeline (all theatres on one spine, this one highlighted). Timeline view: the
// theatre's Major battles as a sized spine. Casualty splits are mockup ESTIMATES
// (labeled "(est.)") pending the accuracy fact-check pass — see
// audits/war-pilot-civil-war.md.

import { useState } from 'react'
import { WarChrome, SANS, SERIF, ACCENTS, WAR_OXBLOOD, alpha, useWarView, type Crumb, type CrumbOption } from './war-chrome'
import { BattleCard, CordTimeline } from './war-battle-card'
import { theatreEv, theatreSpine, majorCount, MAJORS, THEMES, THEATRE_NAV, type Theatre } from '@/lib/civil-war-roster'
import { WAR_EVENTS, WAR_BANDS } from './war-front-door'
import { TL_KIND_ORDER, type TlKind } from '@/lib/navigator-tls'

const MONO = 'var(--font-geist-mono)'
const MUTED = 'color-mix(in srgb, var(--foreground) 70%, transparent)'
const FAINT = 'color-mix(in srgb, var(--foreground) 45%, transparent)'
const BORDER = 'color-mix(in srgb, var(--foreground) 12%, transparent)'
const BORDER_STRONG = 'color-mix(in srgb, var(--foreground) 22%, transparent)'

const num = (n: number) => n.toLocaleString('en-US')

// Theatre colors for the interleaved timeline (all theatres on one spine).
const THEATRE_COLOR: Record<string, { name: string; color: string }> = {
  east: { name: 'Eastern', color: ACCENTS.violet },
  west: { name: 'Western', color: ACCENTS.blue },
  tmis: { name: 'Trans-Miss', color: ACCENTS.amber },
  naval: { name: 'Naval', color: ACCENTS.rust },
}

export interface TheatreArmy { side: string; label: string; peak: string; commanders: string[]; color: string }
export interface TheatreCommander { name: string; role: string; side: 'U' | 'C'; img?: string }
export interface TheatreData {
  id: Theatre
  accent: string
  name: string
  span: string
  region: string
  heroImage: string
  heroPalette: [string, string, string]
  heroCredit: string
  heroEyebrowColor: string       // bright tint for the eyebrow over the dark hero
  heroObjectPosition?: string    // default 'center 42%'
  durationLabel: string
  armies: TheatreArmy[]
  commanders: TheatreCommander[]
  casualties: { union: number; csa: number; civilian: number }
  chain: { name: string; index: number; total: number }
  timelineIntro: string
}

// Theatre-coded dot colours for the breadcrumb dropdowns.
const THEATRE_DOT: Record<string, string> = {
  east: ACCENTS.violet, west: ACCENTS.blue, tmis: ACCENTS.amber, naval: ACCENTS.rust, offfield: ACCENTS.green,
}

// Compact ancestor labels for the breadcrumb trail (keep it narrow on a phone);
// the lane keeps its full evocative name on its own landing page.
const THEATRE_TRAIL_SHORT: Record<string, string> = {
  east: 'Eastern', west: 'Western', tmis: 'Trans-Miss', naval: 'Naval', offfield: 'Off-Field',
}

// Mode (vertical) + war switch data for the top two breadcrumb dropdowns.
const MODE_SHORT: Record<TlKind, string> = { civ: 'Civ', war: 'War', art: 'Art', music: 'Music' }
const MODE_HREF: Record<TlKind, string | undefined> = { civ: '/', war: '/war-civil-war', art: undefined, music: undefined }
const BAND_COLOR: Record<string, string> = Object.fromEntries(WAR_BANDS.map(b => [b.id, b.color]))

// The unified ACW breadcrumb: War › ACW › Theatre › Battle/Event, on EVERY ACW
// page — all four crumbs are interactive dropdowns. Mode switches vertical
// (Civ/War/Art/Music); War switches war (all US wars, color-coded by era, built
// ones link); Theatre switches theatre; Battle/Event jumps to any of the 46
// Major battles + 14 themes (chronological, color-coded by theatre; built ones
// link with a date). Pass the active `theatre` and/or `battleId`; omit both on
// the war home (Theatre / Battle/Event become generic pickers and the WAR crumb
// lights up). The current page's leaf crumb gets accent emphasis.
export function civilWarCrumbs({ theatre, battleId }: { theatre?: Theatre | 'offfield'; battleId?: string } = {}): Crumb[] {
  const modeOptions: CrumbOption[] = TL_KIND_ORDER.map(k => ({ label: MODE_SHORT[k], href: MODE_HREF[k], disabled: !MODE_HREF[k] }))
  const warOptions: CrumbOption[] = WAR_EVENTS.map(w => ({ label: w.name, href: w.href, disabled: !w.href, color: BAND_COLOR[w.band] }))

  const theatreOptions: CrumbOption[] = THEATRE_NAV.map(t => ({ label: t.label, href: t.ready ? t.href : undefined, disabled: !t.ready, color: THEATRE_DOT[t.id] }))
  const activeTheatre = theatre ? THEATRE_NAV.find(t => t.id === theatre) : undefined

  // All 46 majors + 14 themes in one chronological list; the dot keeps the
  // theatre colour code (built battles link, the rest are "soon").
  const jump: CrumbOption[] = [
    ...MAJORS.map(b => ({ _k: b.year * 100 + b.m, label: b.name, href: b.href, disabled: !b.href, color: THEATRE_DOT[b.theatre], date: b.href ? `${b.mo} ${b.year}` : undefined })),
    ...THEMES.map(t => ({ _k: t.year * 100 + t.m, label: t.name, href: t.href, disabled: !t.href, color: THEATRE_DOT.offfield, date: t.href ? t.date : undefined })),
  ].sort((a, b) => a._k - b._k).map(({ _k, ...o }) => o)

  const activeMajor = battleId ? MAJORS.find(b => b.id === battleId) : undefined
  const activeTheme = battleId && !activeMajor ? THEMES.find(t => t.id === battleId) : undefined
  const active = activeMajor ?? activeTheme
  const battleFull = active?.name ?? 'Battle / Event'
  // the bc shows a SHORT label for long names; the jump menu still marks the
  // full name current (via currentLabel)
  const battleLabel = active?.short ?? battleFull

  // The ACW pill only lights up (oxblood) on the war home page; as an ancestor
  // crumb on theatre/battle pages it stays a muted gray pill.
  const onWarHome = !theatre && !battleId

  return [
    { label: 'War', options: modeOptions, currentLabel: 'War' },
    { label: 'ACW', short: 'ACW', color: onWarHome ? WAR_OXBLOOD : undefined, options: warOptions, currentLabel: 'American Civil War', active: onWarHome },
    { label: activeTheatre?.label ?? 'Theatre', short: activeTheatre ? THEATRE_TRAIL_SHORT[activeTheatre.id] : undefined, options: theatreOptions, active: !!theatre && !battleId },
    { label: battleLabel, currentLabel: battleFull, options: jump, active: !!battleId },
  ]
}

function Eyebrow({ children, color }: { children: React.ReactNode; color?: string }) {
  return <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, textTransform: 'uppercase', color: color || FAINT }}>{children}</div>
}

function GenericHero({ d }: { d: TheatreData }) {
  const [failed, setFailed] = useState(false)
  return (
    <>
      <div style={{ position: 'relative', height: 240, overflow: 'hidden', background: d.heroPalette[2] }}>
        {failed
          ? <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${d.heroPalette[0]}, ${d.heroPalette[1]} 55%, ${d.heroPalette[2]})` }} />
          : <img src={d.heroImage} alt="" onError={() => setFailed(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: d.heroObjectPosition || 'center 42%', transform: 'scale(1.22)', transformOrigin: 'center', filter: 'sepia(0.18) saturate(0.85) contrast(1.05)' }} />}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 30%, rgba(8,8,8,0.86) 100%)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '16px 18px', color: '#fff' }}>
          <div style={{ fontFamily: SANS, fontSize: 10, letterSpacing: 1.6, fontWeight: 700, color: d.heroEyebrowColor, textTransform: 'uppercase', textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}>{`War · ${d.chain.name} · ${d.chain.index} of ${d.chain.total}`}</div>
          <h1 style={{ margin: '6px 0 0', fontFamily: SERIF, fontSize: 28, lineHeight: 1.05, letterSpacing: -0.5, fontWeight: 500, textShadow: '0 2px 12px rgba(0,0,0,0.55)' }}>{d.name}</h1>
          <div style={{ marginTop: 4, fontFamily: SANS, fontSize: 12.5, letterSpacing: 0.3, color: 'rgba(255,255,255,0.78)' }}>{`${d.span} · ${d.region}`}</div>
        </div>
      </div>
      <div style={{ padding: '7px 16px 0', fontFamily: MONO, fontSize: 10, letterSpacing: 0.2, color: FAINT }}>{d.heroCredit}</div>
    </>
  )
}

function ArmiesFaceoff({ d }: { d: TheatreData }) {
  return (
    <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', padding: '20px 16px 22px', borderTop: `1px solid ${BORDER}` }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', zIndex: 1, width: 32, height: 32, borderRadius: 999, background: 'var(--background)', color: MUTED, border: `1px solid ${BORDER_STRONG}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: SERIF, fontStyle: 'italic', fontSize: 13.5, fontWeight: 500 }}>vs</div>
      {d.armies.map((a, i) => (
        <div key={a.side} style={{ padding: i === 0 ? '0 18px 0 0' : '0 0 0 18px', textAlign: i === 0 ? 'left' : 'right' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: i === 0 ? 'flex-start' : 'flex-end' }}>
            <div style={{ width: 22, height: 14, borderRadius: 2, background: a.color, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.25)', order: i === 0 ? 0 : 1 }} />
            <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 700, color: a.color, textTransform: 'uppercase' }}>{a.side}</div>
          </div>
          <div style={{ marginTop: 6, fontFamily: SERIF, fontSize: 15, lineHeight: 1.18, letterSpacing: -0.2, fontWeight: 500 }}>{a.label}</div>
          <div style={{ marginTop: 4, fontFamily: SANS, fontSize: 11, color: MUTED }}>peak: <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>{a.peak}</span></div>
          <div style={{ marginTop: 6, fontFamily: SERIF, fontStyle: 'italic', fontSize: 12, lineHeight: 1.45, color: MUTED }}>
            {a.commanders.map((c, idx) => <span key={c}>{c}{idx < a.commanders.length - 1 ? ' → ' : ''}</span>)}
          </div>
        </div>
      ))}
    </div>
  )
}

function CasualtiesBlock({ d }: { d: TheatreData }) {
  const c = d.casualties
  const total = c.union + c.csa + c.civilian
  const segs = [
    { v: c.union, color: ACCENTS.blue, label: 'Union', n: num(c.union) },
    { v: c.csa, color: ACCENTS.rust, label: 'Confederacy', n: num(c.csa) },
    { v: c.civilian, color: FAINT, label: 'Civilian', n: num(c.civilian) },
  ]
  return (
    <div style={{ padding: '20px 16px 22px', borderTop: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <Eyebrow>Casualties (est.)</Eyebrow>
        <div style={{ fontFamily: SERIF, fontSize: 14, letterSpacing: -0.2 }}><span style={{ fontWeight: 500 }}>{num(total)}</span><span style={{ color: MUTED }}> total</span></div>
      </div>
      <div style={{ display: 'flex', height: 26, borderRadius: 4, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
        {segs.map(s => <div key={s.label} style={{ flex: s.v, background: s.color, opacity: s.label === 'Civilian' ? 0.45 : 1, borderRight: s.label !== 'Civilian' ? '1px solid var(--background)' : 'none' }} />)}
      </div>
      <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap', gap: '6px 14px' }}>
        {segs.map(s => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontFamily: SANS, fontSize: 10.5, color: MUTED, letterSpacing: 0.2 }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: s.color, opacity: s.label === 'Civilian' ? 0.45 : 1 }} />
            <span><span style={{ color: 'var(--foreground)', fontWeight: 600 }}>{s.n}</span> {s.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Round commander headshot with a side-colored ring; gradient-disc fallback.
function Headshot({ img, ring }: { img?: string; ring: string }) {
  const [failed, setFailed] = useState(false)
  const base: React.CSSProperties = { width: 64, height: 64, borderRadius: 999, boxShadow: `inset 0 0 0 2px ${ring}`, flexShrink: 0 }
  return (!img || failed)
    ? <div style={{ ...base, background: 'linear-gradient(135deg, #3a2e21, #1c1814)' }} />
    : <img src={img} alt="" onError={() => setFailed(true)} style={{ ...base, objectFit: 'cover', objectPosition: 'center 25%' }} />
}

function CommandersStrip({ d }: { d: TheatreData }) {
  return (
    <div style={{ padding: '20px 0 22px', borderTop: `1px solid ${BORDER}` }}>
      <div style={{ padding: '0 16px' }}><Eyebrow color={d.accent}>Commanders</Eyebrow></div>
      <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '12px 16px 0' }}>
        {d.commanders.map(f => {
          const ring = f.side === 'U' ? ACCENTS.blue : ACCENTS.rust
          return (
            <div key={f.name} style={{ flexShrink: 0, width: 84, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
              <Headshot img={f.img} ring={ring} />
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: SERIF, fontSize: 12, lineHeight: 1.15, letterSpacing: -0.1 }}>{f.name}</div>
                <div style={{ marginTop: 2, fontFamily: SANS, fontSize: 9.5, letterSpacing: 0.2, color: FAINT }}>{f.role}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function AtAGlance({ d }: { d: TheatreData }) {
  const [open, setOpen] = useState(true)
  const stats = [
    { v: d.durationLabel, k: 'Span' },
    { v: String(majorCount(d.id)), k: 'Battles' },
    { v: num((d.casualties.union + d.casualties.csa) / 1000) + 'k', k: 'Dead' },
  ]
  return (
    <div style={{ borderBottom: `1px solid ${BORDER}` }}>
      <button onClick={() => setOpen(o => !o)} aria-expanded={open} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 16px', color: 'inherit' }}>
        <Eyebrow color={d.accent}>At a glance</Eyebrow>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: SANS, fontSize: 11, fontWeight: 600, color: d.accent }}>
          {open ? 'Hide' : 'Show'}
          <span style={{ width: 22, height: 22, borderRadius: 999, border: `1px solid ${alpha(d.accent, 0.55)}`, background: alpha(d.accent, 0.1), display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, lineHeight: 1, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 200ms ease' }}>▾</span>
        </span>
      </button>
      {open && (
        <>
          <div style={{ display: 'flex', borderTop: `1px solid ${BORDER}` }}>
            {stats.map((s, i) => (
              <div key={s.k} style={{ flex: 1, padding: '14px 12px', borderLeft: i === 0 ? 'none' : `1px solid ${BORDER}`, textAlign: 'center' }}>
                <div style={{ fontFamily: SERIF, fontSize: 20, lineHeight: 1, letterSpacing: -0.4, fontWeight: 500 }}>{s.v}</div>
                <div style={{ marginTop: 5, fontFamily: SANS, fontSize: 9.5, letterSpacing: 1.4, fontWeight: 600, color: FAINT, textTransform: 'uppercase' }}>{s.k}</div>
              </div>
            ))}
          </div>
          <ArmiesFaceoff d={d} />
          <CasualtiesBlock d={d} />
          <CommandersStrip d={d} />
        </>
      )}
    </div>
  )
}

// All theatres on one timeline; the active theatre in colour, the others grayed
// for context. Reads every theatre's Major battles from the shared roster.
function InterleavedCampaigns({ d }: { d: TheatreData }) {
  type Row = ReturnType<typeof theatreEv>[number]
  const events: (Row & { theatreId: string; theatreName: string; theatreColor: string; key: string })[] = []
  ;(['east', 'west', 'tmis', 'naval'] as Theatre[]).forEach(tid => {
    const th = THEATRE_COLOR[tid]
    theatreEv(tid).forEach((e, i) => events.push({ ...e, theatreId: tid, theatreName: th.name, theatreColor: th.color, key: tid + '-' + i }))
  })
  events.sort((a, b) => (a.year !== b.year ? a.year - b.year : a.m - b.m))
  const hereCount = events.filter(e => e.theatreId === d.id).length
  return (
    <div style={{ padding: '20px 16px 22px', borderBottom: `1px solid ${BORDER}` }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 12 }}>
        <Eyebrow color={d.accent}>Campaigns across the war</Eyebrow>
        <div style={{ fontFamily: SANS, fontSize: 10, color: FAINT, letterSpacing: 0.3 }}>{hereCount} here · others for context</div>
      </div>
      <div style={{ position: 'relative', marginTop: 6 }}>
        <div style={{ position: 'absolute', left: 7, top: 6, bottom: 6, width: 1, background: BORDER_STRONG }} />
        {events.map(e => {
          const isActive = e.theatreId === d.id
          const dotColor = isActive ? e.theatreColor : FAINT
          const heavy = e.size === 'l' || e.size === 'xl'
          const tappable = isActive && !!e.href
          const inner = (
            <>
              <span style={{ position: 'absolute', left: 3, top: 8, width: 9, height: 9, borderRadius: 999, background: isActive ? dotColor : 'transparent', border: `1px solid ${dotColor}`, boxShadow: isActive ? `0 0 0 3px ${alpha(e.theatreColor, 0.16)}` : 'none' }} />
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
                <div style={{ fontFamily: SANS, fontSize: 9.5, letterSpacing: 0.3, fontWeight: 700, color: isActive ? alpha(dotColor, 0.95) : FAINT, textTransform: 'uppercase' }}>{e.mo} {e.year}</div>
                {!isActive && <div style={{ fontFamily: MONO, fontSize: 9, letterSpacing: 0.3, color: FAINT }}>· {e.theatreName} theatre</div>}
              </div>
              <div style={{ fontFamily: SERIF, fontSize: heavy ? 15.5 : 14, lineHeight: 1.2, letterSpacing: -0.1, fontWeight: heavy ? 500 : 400, marginTop: 1 }}>{e.name} <span style={{ color: FAINT, fontWeight: 400, fontSize: 12 }}>· {e.place}</span></div>
              {isActive && <span style={{ position: 'absolute', right: 0, top: 8, fontFamily: SANS, fontSize: 8, fontWeight: 700, letterSpacing: 0.6, textTransform: 'uppercase', padding: '2px 6px', borderRadius: 999, color: e.href ? '#fff' : FAINT, background: e.href ? e.theatreColor : 'transparent', border: e.href ? 'none' : `1px solid ${BORDER}` }}>{e.href ? 'Read →' : 'Soon'}</span>}
            </>
          )
          const style: React.CSSProperties = { position: 'relative', display: 'block', width: '100%', textAlign: 'left', color: 'var(--foreground)', padding: '6px 0 10px 26px', opacity: isActive ? 1 : 0.42, filter: isActive ? 'none' : 'saturate(0.4)', textDecoration: 'none' }
          return tappable
            ? <a key={e.key} href={e.href} style={style}>{inner}</a>
            : <div key={e.key} style={style}>{inner}</div>
        })}
      </div>
    </div>
  )
}

// The full theatre page. `map` is the theatre's geography panel (a <DottedMap>
// configured per theatre) — passed in because each theatre's geography differs.
export function TheatrePage({ data, map }: { data: TheatreData; map: React.ReactNode }) {
  const [view, setView] = useWarView()
  const spine = theatreSpine(data.id)
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarChrome crumbs={civilWarCrumbs({ theatre: data.id })} view={view} onView={setView} accent={data.accent} />
      <div style={{ maxWidth: 480, margin: '0 auto' }}>
        <GenericHero d={data} />
        {view === 'dossier' ? (
          <>
            <AtAGlance d={data} />
            {map}
            <InterleavedCampaigns d={data} />
          </>
        ) : (
          <div style={{ padding: '8px 0 20px' }}>
            <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.6, margin: '8px 16px 4px', color: 'color-mix(in srgb, var(--foreground) 78%, transparent)' }}>
              {data.timelineIntro}
            </p>
            <CordTimeline>
              {spine.map(b => <BattleCard key={b.id} size={b.size} accent={data.accent} dateTop={(b.date.match(/\d{4}/) || [''])[0]} title={b.name} sub={`${b.date} · ${b.place}`} href={b.href} imageUrl={b.img} soon={!b.ready} />)}
            </CordTimeline>
          </div>
        )}
      </div>
    </div>
  )
}
