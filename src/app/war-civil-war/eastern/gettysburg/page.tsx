'use client'

// BATTLE level (Gettysburg), ported to match the Historica War Drilldown
// mockup: Dossier view = At a glance · Lay of the land (captioned PD images) ·
// Order of battle, then the narratives (day-by-day chapters) and cross-reads.
// Timeline view strips the dossier, leaving just the facts + the chapter list.
// Preview, sample content; narrative chapters link to the full-story reader.

import { useState } from 'react'
import { DarkModeToggle } from '@/components/dark-mode-toggle'
import { WarChrome, DossierSection, GlanceGrid, SANS, SERIF, WAR_OXBLOOD, alpha, type View } from '@/components/mode/war-chrome'

const CRUMBS = [
  { label: 'War', href: '/' },
  { label: 'American Civil War', href: '/war-civil-war' },
  { label: 'Eastern Theatre', href: '/war-civil-war/eastern' },
  { label: 'Gettysburg' },
]

// day-by-day narrative chapters (bottom of the page). Each opens a full read.
const CHAPTERS = [
  { day: 'Day One · July 1', title: 'First contact', blurb: 'Confederate infantry and Union cavalry collide northwest of town; Reynolds is killed; the bluecoats fall back onto the high ground.', href: '/war-pilot-preview' },
  { day: 'Day Two · July 2', title: 'The hooks — Longstreet at the seams', blurb: 'Devil’s Den, the Wheatfield, the Peach Orchard, and Chamberlain’s stand on Little Round Top.', href: '/war-pilot-preview' },
  { day: 'Day Three · July 3', title: 'The cannonade & the charge', blurb: 'The largest barrage on the continent, then twelve thousand men across open ground. The line held.', href: '/war-pilot-preview' },
  { day: 'Aftermath', title: 'The retreat & the Address', blurb: 'Lee limps back to Virginia; that November, Lincoln spends two minutes at the cemetery.', href: '/war-pilot-preview' },
]

const PEOPLE = ['Robert E. Lee', 'George Meade', 'James Longstreet', 'Joshua Chamberlain', 'George Pickett']

function ImagePlate({ from, to, caption, credit }: { from: string; to: string; caption: string; credit: string }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ height: 150, borderRadius: 8, background: `linear-gradient(135deg, ${from}, ${to})` }} />
      <figcaption style={{ fontFamily: SANS, fontSize: 11, marginTop: 6 }}>
        <span style={{ color: 'var(--foreground)' }}>{caption}</span>
        <span style={{ color: 'color-mix(in srgb, var(--foreground) 45%, transparent)' }}> · {credit}</span>
      </figcaption>
    </figure>
  )
}

function PersonChip({ name }: { name: string }) {
  // person narratives — linked from the dossier (targets built next).
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontFamily: SERIF, fontSize: 15, color: WAR_OXBLOOD, borderBottom: `1px solid ${alpha(WAR_OXBLOOD, 0.4)}`, cursor: 'pointer', paddingBottom: 1 }}>
      {name} <span style={{ fontSize: 10 }}>↗</span>
    </span>
  )
}

const prose = { fontFamily: SERIF, fontSize: 16, lineHeight: 1.62, margin: 0 } as React.CSSProperties

export default function GettysburgPage() {
  const [view, setView] = useState<View>('dossier')

  return (
    <div style={{ minHeight: '100dvh', background: 'var(--background)', color: 'var(--foreground)' }}>
      <WarChrome crumbs={CRUMBS} view={view} onView={setView} />
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 18px 56px' }}>
        {/* header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, paddingTop: 18 }}>
          <div>
            <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
              <span style={{ background: WAR_OXBLOOD, color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: 0.8, padding: '3px 7px', borderRadius: 4, fontFamily: SANS }}>BATTLE</span>
              <span style={{ border: `1px solid ${WAR_OXBLOOD}`, color: WAR_OXBLOOD, fontSize: 9, fontWeight: 700, letterSpacing: 0.8, padding: '3px 7px', borderRadius: 4, fontFamily: SANS }}>⚑ DECISIVE</span>
            </div>
            <h1 style={{ margin: 0, fontFamily: SERIF, fontWeight: 500, fontSize: 32, lineHeight: 1.08, letterSpacing: -0.4 }}>Battle of Gettysburg</h1>
            <div style={{ fontFamily: SERIF, fontSize: 14, color: 'color-mix(in srgb, var(--foreground) 60%, transparent)', marginTop: 4 }}>July 1–3, 1863 · Adams County, Pennsylvania</div>
          </div>
          <DarkModeToggle />
        </div>

        {view === 'dossier' && (
          <div style={{ paddingTop: 24 }}>
            <DossierSection label="At a glance">
              <GlanceGrid rows={[['Dates', 'July 1–3, 1863'], ['Belligerents', 'United States vs. Confederate States'], ['Commanders', 'Meade vs. Lee'], ['Forces', '~94,000 vs. ~71,000'], ['Casualties', '~23,000 vs. ~28,000'], ['Outcome', 'Union victory']]} />
            </DossierSection>

            <DossierSection label="Lay of the land">
              <p style={{ ...prose, marginBottom: 14 }}>
                Gettysburg was nobody’s plan — it was a town where ten roads met, which is exactly why two armies groping for each other in southern Pennsylvania ended up here. On the first day the Union troops were pushed back, but they were pushed back onto a ridge of high ground curved like a giant fishhook. Hold that fishhook and you could shift men quickly along the inside of the curve; attack it and you had to climb. The whole three-day battle is the story of Lee trying to break that fishhook — at the barb (Culp’s Hill), the seams (the Peach Orchard, the Wheatfield), and finally the center.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <ImagePlate from="#3a4a2a" to="#1c2410" caption="Little Round Top, looking south-west" credit="Library of Congress · public domain" />
                <ImagePlate from="#4a3a2a" to="#241810" caption="Devil’s Den, postwar stereograph" credit="National Archives · public domain" />
              </div>
            </DossierSection>

            <DossierSection label="Order of battle">
              <div style={{ display: 'flex', gap: 24 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: 0.8, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)', marginBottom: 8 }}>UNION · ARMY OF THE POTOMAC</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><PersonChip name="George Meade" /><PersonChip name="Joshua Chamberlain" /></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: SANS, fontSize: 11, fontWeight: 700, letterSpacing: 0.8, color: 'color-mix(in srgb, var(--foreground) 55%, transparent)', marginBottom: 8 }}>CONFEDERATE · ARMY OF N. VIRGINIA</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}><PersonChip name="Robert E. Lee" /><PersonChip name="James Longstreet" /><PersonChip name="George Pickett" /></div>
                </div>
              </div>
            </DossierSection>
          </div>
        )}

        {view === 'timeline' && (
          <p style={{ ...prose, fontSize: 14.5, color: 'color-mix(in srgb, var(--foreground) 65%, transparent)', paddingTop: 20 }}>
            Timeline view — dossier hidden. July 1–3, 1863 · Meade vs. Lee · Union victory · ~51,000 casualties. The chapters:
          </p>
        )}

        {/* narratives (always shown; the heart of the battle page) */}
        <DossierSection label="The narrative">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {CHAPTERS.map(c => (
              <a key={c.title} href={c.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ border: '1px solid color-mix(in srgb, var(--foreground) 15%, transparent)', borderRadius: 10, padding: 14, background: 'color-mix(in srgb, var(--foreground) 3%, transparent)' }}>
                  <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.6, color: WAR_OXBLOOD, textTransform: 'uppercase' }}>{c.day}</div>
                  <div style={{ fontFamily: SERIF, fontSize: 18, marginTop: 3 }}>{c.title}</div>
                  <div style={{ fontFamily: SERIF, fontSize: 14, lineHeight: 1.5, color: 'color-mix(in srgb, var(--foreground) 72%, transparent)', marginTop: 3 }}>{c.blurb}</div>
                </div>
              </a>
            ))}
          </div>
        </DossierSection>

        {view === 'dossier' && (
          <>
            <DossierSection label="The people">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px 18px' }}>{PEOPLE.map(p => <PersonChip key={p} name={p} />)}</div>
            </DossierSection>

            <DossierSection label="Meanwhile">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {[['Read “Vicksburg”', 'Grant takes the Mississippi tomorrow.'], ['Read “the cotton famine”', 'In Lancashire, the cotton ministers are watching.']].map(([t, h]) => (
                  <div key={t} style={{ border: `1px solid ${alpha(WAR_OXBLOOD, 0.3)}`, borderRadius: 10, padding: '12px 14px' }}>
                    <div style={{ fontFamily: SANS, fontSize: 10, fontWeight: 700, letterSpacing: 0.5, color: WAR_OXBLOOD, textTransform: 'uppercase' }}>{t}</div>
                    <div style={{ fontFamily: SERIF, fontSize: 14.5, marginTop: 3, color: 'color-mix(in srgb, var(--foreground) 75%, transparent)' }}>{h}</div>
                  </div>
                ))}
              </div>
            </DossierSection>
          </>
        )}
      </div>
    </div>
  )
}
