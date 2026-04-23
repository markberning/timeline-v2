'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import { GLOBE_CIVS, type GlobeCiv } from '@/lib/globe-data'
import { REGION_ORDER, REGION_LABELS, REGION_COLORS } from '@/lib/navigator-tls'

function formatYear(y: number): string {
  if (y < 0) return `${Math.abs(y)} BCE`
  return `${y} CE`
}

function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r},${g},${b},${alpha})`
}

function angularDist(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = Math.PI / 180
  const dLat = (lat2 - lat1) * toRad
  const dLng = (lng2 - lng1) * toRad
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * toRad) * Math.cos(lat2 * toRad) * Math.sin(dLng / 2) ** 2
  return 2 * Math.asin(Math.sqrt(Math.min(1, a))) * (180 / Math.PI)
}

const ACTIVE_THRESHOLD = 30

// Globe palette
const OCEAN_COLOR = '#8aadbe'
const LAND_COLOR = '#d4c8a8'
const BORDER_COLOR = 'rgba(90,80,60,0.35)'

export default function GlobeView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<any>(null)
  const setHoveredRef = useRef<(id: string | null) => void>(() => {})
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [activeCiv, setActiveCiv] = useState<GlobeCiv | null>(null)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const civsByRegion = useMemo(
    () =>
      REGION_ORDER.map(rk => ({
        key: rk,
        label: REGION_LABELS[rk],
        color: REGION_COLORS[rk],
        civs: GLOBE_CIVS.filter(c => c.region === rk),
      })).filter(g => g.civs.length > 0),
    [],
  )

  useEffect(() => {
    if (!containerRef.current) return
    let mounted = true
    let intervalId: ReturnType<typeof setInterval>
    let resizeHandler: (() => void) | null = null
    let pageshowHandler: ((e: PageTransitionEvent) => void) | null = null
    let hoverClearTimer: ReturnType<typeof setTimeout> | null = null
    const hoveredIdRef: { current: string | null } = { current: null }

    ;(async () => {
      const [{ default: GlobeCtor }, { feature }, worldTopo] = await Promise.all([
        import('globe.gl'),
        import('topojson-client') as Promise<typeof import('topojson-client')>,
        fetch('//unpkg.com/world-atlas@2/countries-110m.json').then(r => r.json()),
      ])

      if (!mounted || !containerRef.current) return

      // ── Data ──

      const countriesGeo = feature(worldTopo, worldTopo.objects.countries) as any
      const countryPolygons = countriesGeo.features.map((f: any) => ({
        type: 'country' as const,
        geometry: f.geometry,
      }))

      // Memoized polygon builder — only creates a new array when the active
      // civ changes. Prevents redundant globe.gl re-renders that cause flicker.
      let currentCivId: string | null = null
      let currentPolygons: any[] = countryPolygons

      function updatePolygons(civId: string | null) {
        if (civId === currentCivId) return // no change — skip re-render
        currentCivId = civId
        if (!civId) {
          currentPolygons = countryPolygons // stable reference
        } else {
          const civ = GLOBE_CIVS.find(c => c.id === civId)
          currentPolygons = civ
            ? [...countryPolygons, { type: 'civ' as const, ...civ }]
            : countryPolygons
        }
        globe.polygonsData(currentPolygons)
      }

      // Debounced hover — shared by dots, sidebar, and territory polygon
      function setHovered(civId: string | null) {
        if (hoverClearTimer) {
          clearTimeout(hoverClearTimer)
          hoverClearTimer = null
        }
        if (civId) {
          if (hoveredIdRef.current === civId) return // already active
          hoveredIdRef.current = civId
          updatePolygons(civId)
          setHoveredId(civId)
          setActiveCiv(GLOBE_CIVS.find(c => c.id === civId) ?? null)
        } else {
          if (!hoveredIdRef.current) return // already cleared
          hoverClearTimer = setTimeout(() => {
            if (!mounted) return
            hoveredIdRef.current = null
            updatePolygons(null)
            setHoveredId(null)
          }, 300)
        }
      }

      setHoveredRef.current = setHovered

      // ── Globe ──

      // eslint-disable-next-line new-cap
      const globe = new (GlobeCtor as any)(containerRef.current)
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#b0c8d8')
        .atmosphereAltitude(0.12)

        // Polygons: country outlines + hovered territory
        .polygonsData(countryPolygons)
        .polygonGeoJsonGeometry((d: any) => d.geometry)
        .polygonCapColor((d: any) =>
          d.type === 'country' ? LAND_COLOR : hexToRgba(d.color, 0.5),
        )
        .polygonSideColor(() => 'rgba(0,0,0,0)')
        .polygonStrokeColor((d: any) =>
          d.type === 'country' ? BORDER_COLOR : hexToRgba(d.color, 0.8),
        )
        .polygonAltitude((d: any) => {
          if (d.type === 'country') return 0.01
          return 0.02 + (d.altOffset ?? 0)
        })
        .polygonLabel(() => '')
        .polygonsTransitionDuration(200)
        .onPolygonClick((d: any) => {
          if (d.type === 'civ' && d.hasContent) window.location.href = `/${d.id}`
        })
        .onPolygonHover((d: any) => {
          if (d?.type === 'civ') setHovered(d.id)
          else setHovered(null)
        })

        // Points: colored dots at each cultural center
        .pointsData(GLOBE_CIVS)
        .pointLat((d: any) => d.centroid[1])
        .pointLng((d: any) => d.centroid[0])
        .pointColor((d: any) => d.color)
        .pointRadius(0.4)
        .pointAltitude(0.008)
        .onPointHover((point: any) => {
          setHovered(point?.id ?? null)
        })
        .onPointClick((point: any) => {
          if (point?.hasContent) window.location.href = `/${point.id}`
        })

        .width(window.innerWidth)
        .height(window.innerHeight)

      globeRef.current = globe

      // Solid ocean globe
      const mat = globe.globeMaterial() as any
      mat.color.set(OCEAN_COLOR)
      mat.shininess = 5

      globe.lights().forEach((l: any) => {
        l.intensity = l.intensity * 2
      })

      // Camera controls
      const controls = globe.controls()
      controls.autoRotate = false
      controls.enableZoom = true
      controls.minDistance = 150
      controls.maxDistance = 450

      // Face-camera passive card (when nothing hovered)
      let prevNearestId: string | null = null

      intervalId = setInterval(() => {
        if (!mounted || hoveredIdRef.current) return

        const pov = globe.pointOfView()
        let nearest: GlobeCiv | null = null
        let nearestDist = Infinity

        for (const c of GLOBE_CIVS) {
          const dist = angularDist(pov.lat, pov.lng, c.centroid[1], c.centroid[0])
          if (dist < nearestDist && c.hasContent) {
            nearestDist = dist
            nearest = c
          }
        }

        const newId =
          nearest && nearestDist < ACTIVE_THRESHOLD ? nearest.id : null
        if (newId !== prevNearestId) {
          prevNearestId = newId
          setActiveCiv(newId ? nearest : null)
        }
      }, 500)

      // Resize
      resizeHandler = () => {
        globe.width(window.innerWidth).height(window.innerHeight)
      }
      window.addEventListener('resize', resizeHandler)

      // Handle browser back button — bfcache kills WebGL context
      pageshowHandler = (e: PageTransitionEvent) => {
        if (e.persisted) window.location.reload()
      }
      window.addEventListener('pageshow', pageshowHandler)
    })()

    return () => {
      mounted = false
      clearInterval(intervalId)
      if (hoverClearTimer) clearTimeout(hoverClearTimer)
      if (resizeHandler) window.removeEventListener('resize', resizeHandler)
      if (pageshowHandler) window.removeEventListener('pageshow', pageshowHandler)
      if (globeRef.current) globeRef.current._destructor()
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-[#1a1917]">
      <div ref={containerRef} className="w-full h-full" />

      {/* Back button */}
      <button
        onClick={() => (window.location.href = '/')}
        className="fixed top-5 left-5 z-10 text-white/60 hover:text-white/90 transition-colors text-sm font-medium flex items-center gap-1.5"
      >
        <span className="text-lg leading-none">←</span>
        Back
      </button>

      {/* Sidebar toggle (collapsed) */}
      {!sidebarOpen && (
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed top-5 right-5 z-20 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-3 py-2 text-white/60 hover:text-white/90 text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          Civs
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full z-20 transition-transform duration-300 ease-out ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full w-52 bg-black/70 backdrop-blur-md border-l border-white/10 flex flex-col">
          <div className="px-4 py-3 flex items-center justify-between border-b border-white/10 shrink-0">
            <span className="text-[10px] font-semibold text-white/50 uppercase tracking-[0.15em]">
              Civilizations
            </span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-white/30 hover:text-white/60 text-lg leading-none transition-colors"
            >
              ×
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-1">
            {civsByRegion.map(group => (
              <div key={group.key}>
                <div
                  className="px-4 pt-3 pb-1 text-[9px] font-bold uppercase tracking-[0.2em]"
                  style={{ color: group.color }}
                >
                  {group.label}
                </div>
                {group.civs.map(civ => (
                  <button
                    key={civ.id}
                    onMouseEnter={() => setHoveredRef.current(civ.id)}
                    onMouseLeave={() => setHoveredRef.current(null)}
                    onClick={() => {
                      if (civ.hasContent) window.location.href = `/${civ.id}`
                    }}
                    className={`w-full text-left px-4 py-1.5 flex items-center gap-2.5 transition-colors ${
                      hoveredId === civ.id ? 'bg-white/10' : 'hover:bg-white/5'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: civ.color }}
                    />
                    <span
                      className={`text-[12px] leading-tight transition-colors ${
                        hoveredId === civ.id ? 'text-white' : 'text-white/60'
                      }`}
                    >
                      {civ.label}
                    </span>
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Active civ card */}
      <div
        className={`fixed bottom-0 left-0 z-10 transition-all duration-300 ease-out pointer-events-none ${
          activeCiv ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        style={{ right: sidebarOpen ? '13rem' : '0' }}
      >
        {activeCiv && (
          <div className="mx-4 mb-6 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/10 pointer-events-auto">
            <button
              onClick={() => {
                if (activeCiv.hasContent)
                  window.location.href = `/${activeCiv.id}`
              }}
              className="w-full text-left p-5"
              style={{ borderLeft: `4px solid ${activeCiv.color}` }}
            >
              <div className="text-xl font-[family-name:var(--font-lora)] text-white">
                {activeCiv.label}
              </div>
              <div className="text-sm text-white/50 mt-1">
                {formatYear(activeCiv.startYear)} –{' '}
                {formatYear(activeCiv.endYear)}
              </div>
              {activeCiv.subtitle && (
                <div className="text-sm text-white/40 italic mt-0.5">
                  {activeCiv.subtitle}
                </div>
              )}
              {activeCiv.hasContent && (
                <div
                  className="mt-3 text-sm font-semibold"
                  style={{ color: activeCiv.color }}
                >
                  Read →
                </div>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
