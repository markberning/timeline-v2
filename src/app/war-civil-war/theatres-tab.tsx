'use client'

// Theatres tab (redesign) — Option B: the theatre chips drive a per-theatre zoom
// of our real dotted map. "All" = national overview with every theatre tinted and
// its key battles dotted; pick a theatre and the map zooms to that theatre's frame
// with its full labeled battle callouts. The four cards below jump to the Battles
// tab filtered to that theatre.

import { DottedMap, type StateSpec, type Dot } from '@/components/mode/dotted-map'
import { alpha } from '@/components/mode/war-chrome'
import { US_RIVERS } from '@/lib/us-rivers'
import { majorCount, type Theatre } from '@/lib/civil-war-roster'
import { THEATRE_DATA, TH_HEX, CONTEXT_STATES, NATIONAL_FRAME } from './theatre-map-data'

const num = (n: number) => n.toLocaleString('en-US')

export function TheatresTab({ active, goBattles }: { active: string; goBattles: (k: string) => void }) {
  const at = THEATRE_DATA.find(t => t.id === active)
  const isAll = active === 'All'

  const states: StateSpec[] = [
    ...CONTEXT_STATES.map(n => ({ name: n, tone: 'faint' as const })),
    ...THEATRE_DATA.flatMap(t => t.states.map(n => {
      const on = isAll || active === t.id
      return { name: n, color: TH_HEX[t.id], tone: (on ? 'focus' : 'faint') as 'focus' | 'faint', fill: on }
    })),
  ]
  const dots: Dot[] = isAll
    ? THEATRE_DATA.flatMap(t => t.dots.map(d => ({ ...d, color: TH_HEX[t.id] })))
    : THEATRE_DATA.filter(t => t.id !== active).flatMap(t => t.dots.map(d => ({ lat: d.lat, lon: d.lon, color: alpha(TH_HEX[t.id], 0.16) })))
  const callouts = isAll ? [] : (at?.callouts ?? [])
  const frame = at?.frame ?? NATIONAL_FRAME
  const mapAccent = isAll ? '#8e8473' : (TH_HEX[active] ?? '#8e8473')
  const rivers = US_RIVERS.Mississippi.map(pts => ({ pts }))

  return (
    <div className="p-page">
      <div style={{ border: '1px solid var(--line)', borderRadius: 9, overflow: 'hidden', marginBottom: 16, background: 'var(--paper-2)' }}>
        <DottedMap inset={false} accent={mapAccent} frame={frame} states={states} dots={dots} callouts={callouts} rivers={rivers} vbWidth={760} vbHeight={590} />
      </div>
      <div className="p-theatres">
        {THEATRE_DATA.map(t => {
          const c = `var(--th-${t.id})`
          const on = active === t.id
          return (
            <button className="p-th" key={t.id} onClick={() => goBattles(t.id)} style={{ borderColor: on ? c : undefined, textAlign: 'left', width: '100%' }}>
              <div className="top">
                <b className="p-serif"><span style={{ width: 11, height: 11, borderRadius: 2, background: c, display: 'inline-block' }} />{t.longName}</b>
                <span>{t.region}</span>
              </div>
              <p>{t.summary}</p>
              <div className="mt"><b>{majorCount(t.id as Theatre)}</b><span>battles</span><span>·</span><span>~{num(t.casualties)} dead</span></div>
            </button>
          )
        })}
      </div>
    </div>
  )
}
