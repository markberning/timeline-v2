'use client'

// THEATRE level (Eastern Theatre). Dossier view = At a glance · lay of the
// theatre · commanders · battle list. Timeline view = the theatre's battles as
// a sized spine. Battles link down to the battle page. Preview, sample content.

import { useState } from 'react'
import { WarChrome, DossierSection, GlanceGrid, SANS, SERIF, WAR_OXBLOOD, alpha, type View } from '@/components/mode/war-chrome'
import { BattleCard, CordTimeline } from '@/components/mode/war-battle-card'

const CRUMBS = [
  { label: 'War', href: '/' },
  { label: 'American Civil War', href: '/war-civil-war' },
  { label: 'Eastern Theatre' },
]

type Size = 's' | 'm' | 'l' | 'xl'
const SIZE_H: Record<Size, number> = { s: 60, m: 84, l: 118, xl: 168 }

interface Battle { id: string; size: Size; name: string; date: string; hook: string; href?: string }
const BATTLES: Battle[] = [
  { id: 'bull', size: 'm', name: 'First Bull Run', date: 'Jul 1861', hook: 'The first big clash — and the end of the short-war fantasy.' },
  { id: 'antietam', size: 'l', name: 'Antietam', date: 'Sep 1862', hook: 'The bloodiest single day in American history; Lee’s first invasion turned back.' },
  { id: 'fred', size: 'm', name: 'Fredericksburg', date: 'Dec 1862', hook: 'Wave after wave thrown at a stone wall. A Union disaster.' },
  { id: 'chanc', size: 'm', name: 'Chancellorsville', date: 'May 1863', hook: 'Lee’s masterpiece — and the night Stonewall Jackson was shot by his own men.' },
  { id: 'gburg', size: 'xl', name: 'Gettysburg', date: 'Jul 1863', hook: 'Three days, fifty thousand casualties, the high-water mark of the Confederacy.', href: '/war-civil-war/eastern/gettysburg' },
  { id: 'overland', size: 'l', name: 'The Overland Campaign', date: '1864', hook: 'Grant arrives and refuses to retreat. Six weeks of relentless grinding.' },
  { id: 'peters', size: 'm', name: 'Siege of Petersburg', date: '1864–65', hook: 'Ten months of trenches that prefigured the Western Front.' },
  { id: 'appom', size: 'm', name: 'Appomattox', date: 'Apr 1865', hook: 'Lee, cornered at last, surrenders to Grant.' },
]

const PEOPLE = ['Robert E. Lee', 'Ulysses S. Grant', 'George McClellan', '“Stonewall” Jackson']
const CORD_X = 56, CARD_LEFT = CORD_X + 16

function PersonChip({ name }: { name: string }) {
  return <span style={{ fontFamily: SERIF, fontSize: 15, color: WAR_OXBLOOD, borderBottom: `1px solid ${alpha(WAR_OXBLOOD, 0.4)}`, cursor: 'pointer', paddingBottom: 1 }}>{name} <span style={{ fontSize: 10 }}>↗</span></span>
}

function BattleRow({ b }: { b: Battle }) {
  const isXL = b.size === 'xl', isLG = b.size === 'l'
  const card = (
    <div style={{ background: 'color-mix(in srgb, var(--foreground) 4%, transparent)', borderRadius: 8, border: `1px solid ${isXL ? alpha(WAR_OXBLOOD, 0.55) : 'color-mix(in srgb, var(--foreground) 15%, transparent)'}`, boxShadow: isXL ? `0 0 0 4px ${alpha(WAR_OXBLOOD, 0.1)}` : 'none', height: SIZE_H[b.size], padding: isXL ? '12px 16px' : (isLG ? '11px 14px' : '8px 12px'), display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ fontFamily: SANS, fontSize: 10, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>{b.date}</div>
      <div style={{ fontFamily: SERIF, fontSize: isXL ? 24 : (isLG ? 18 : 15), lineHeight: 1.1, marginTop: 2 }}>{b.name}</div>
      <div style={{ marginTop: 'auto', paddingTop: 4, fontFamily: SERIF, fontSize: isXL ? 14.5 : 13, lineHeight: 1.4, color: isXL ? 'var(--foreground)' : 'color-mix(in srgb, var(--foreground) 70%, transparent)', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{b.hook}</div>
      {b.href && <div style={{ marginTop: 6, fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color: WAR_OXBLOOD }}>Open →</div>}
    </div>
  )
  return (
    <div style={{ position: 'relative', paddingLeft: CARD_LEFT, paddingRight: 0, marginBottom: 12 }}>
      <div style={{ position: 'absolute', left: CORD_X - 5, top: 12, width: 10, height: 10, borderRadius: 999, background: WAR_OXBLOOD, boxShadow: `0 0 0 3px ${alpha(WAR_OXBLOOD, 0.18)}`, border: `1px solid ${WAR_OXBLOOD}`, zIndex: 1 }} />
      <div style={{ position: 'absolute', left: CORD_X + 5, top: 16, width: 11, height: 1, background: alpha(WAR_OXBLOOD, 0.5) }} />
      {b.href ? <a href={b.href} style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{card}</a> : card}
    </div>
  )
}

export default function EasternTheatrePage() {
  const [view, setView] = useState<View>('dossier')
  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarChrome crumbs={CRUMBS} view={view} onView={setView} />
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 18px 56px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, paddingTop: 18 }}>
          <div>
            <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.8, color: WAR_OXBLOOD, textTransform: 'uppercase', marginBottom: 6 }}>Theatre</div>
            <h1 style={{ margin: 0, fontFamily: SERIF, fontWeight: 500, fontSize: 30, lineHeight: 1.1, letterSpacing: -0.4 }}>Eastern Theatre</h1>
            <div style={{ fontFamily: SERIF, fontSize: 14, color: 'color-mix(in srgb, var(--foreground) 60%, transparent)', marginTop: 4 }}>Virginia & Maryland · 1861–1865</div>
          </div>
        </div>

        {view === 'dossier' ? (
          <div style={{ paddingTop: 24 }}>
            <DossierSection label="At a glance">
              <GlanceGrid rows={[['Ground', 'Between the two capitals — Washington & Richmond, ~100 mi'], ['Span', '1861–1865'], ['Union command', 'A parade of generals → Grant, 1864'], ['Confederate command', 'Lee, from June 1862'], ['Decided at', 'Appomattox, April 1865'], ['Outcome', 'Union victory']]} />
            </DossierSection>
            <DossierSection label="The lay of the theatre">
              <p style={{ fontFamily: SERIF, fontSize: 16, lineHeight: 1.62, margin: 0 }}>
                The Eastern Theatre is the hundred miles of Virginia between the two capitals — and for three years it was a revolving door of Union commanders, each beaten in turn by Robert E. Lee, until Ulysses S. Grant arrived in 1864 and simply refused to go away. It is the theatre of the war’s most famous battles, but, paradoxically, not the one where the war was actually won. That happened out West.
              </p>
            </DossierSection>
            <DossierSection label="Commanders">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 18px' }}>{PEOPLE.map(p => <PersonChip key={p} name={p} />)}</div>
            </DossierSection>
            <DossierSection label="The battles">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {BATTLES.map(b => {
                  const row = (
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 10, padding: '11px 14px', border: '1px solid color-mix(in srgb, var(--foreground) 13%, transparent)', borderRadius: 10, background: 'color-mix(in srgb, var(--foreground) 3%, transparent)' }}>
                      <div style={{ minWidth: 0 }}>
                        <div style={{ fontFamily: SERIF, fontSize: 17 }}>{b.name}</div>
                        <div style={{ fontFamily: SERIF, fontSize: 13.5, color: 'color-mix(in srgb, var(--foreground) 70%, transparent)', marginTop: 2 }}>{b.hook}</div>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <div style={{ fontFamily: SANS, fontSize: 10.5, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)' }}>{b.date}</div>
                        {b.href && <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, textTransform: 'uppercase', color: WAR_OXBLOOD, marginTop: 4 }}>Open →</div>}
                      </div>
                    </div>
                  )
                  return b.href ? <a key={b.id} href={b.href} style={{ textDecoration: 'none', color: 'inherit' }}>{row}</a> : <div key={b.id} style={{ opacity: 0.7 }}>{row}</div>
                })}
              </div>
            </DossierSection>
          </div>
        ) : (
          <>
            <p style={{ fontFamily: SERIF, fontSize: 14.5, color: 'color-mix(in srgb, var(--foreground) 65%, transparent)', padding: '20px 18px 4px', margin: 0 }}>The theatre’s battles, sized by significance. Tap to drop into one.</p>
            <CordTimeline>
              {BATTLES.map(b => <BattleCard key={b.id} size={b.size} accent={WAR_OXBLOOD} dateTop={(b.date.match(/\d{4}/) || [''])[0]} title={b.name} sub={b.date} hook={b.hook} href={b.href} />)}
            </CordTimeline>
          </>
        )}
      </div>
    </div>
  )
}
