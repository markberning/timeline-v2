'use client'

import { useEffect, useRef, useState } from 'react'
import { GLOBE_CIVS, type GlobeCiv } from '@/lib/globe-data'

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

// Great-circle angular distance in degrees (Haversine)
function angularDist(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const toRad = Math.PI / 180
  const dLat = (lat2 - lat1) * toRad
  const dLng = (lng2 - lng1) * toRad
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * toRad) * Math.cos(lat2 * toRad) * Math.sin(dLng / 2) ** 2
  return 2 * Math.asin(Math.sqrt(Math.min(1, a))) * (180 / Math.PI)
}

const FACE_THRESHOLD = 55
const ACTIVE_THRESHOLD = 30

// Globe palette — parchment land on muted ocean
const OCEAN_COLOR = '#8aadbe'
const LAND_COLOR = '#d4c8a8'
const BORDER_COLOR = 'rgba(90,80,60,0.4)'

interface CivPolygon extends GlobeCiv {
  type: 'civ'
  facing: boolean
  active: boolean
  hovered: boolean
}

interface CountryPolygon {
  type: 'country'
  geometry: any
}

type PolygonDatum = CivPolygon | CountryPolygon

export default function GlobeView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<any>(null)
  const hoveredIdRef = useRef<string | null>(null)
  const [activeCiv, setActiveCiv] = useState<GlobeCiv | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    let mounted = true
    let intervalId: ReturnType<typeof setInterval>
    let resizeHandler: (() => void) | null = null

    ;(async () => {
      // Load globe.gl, topojson converter, and world countries in parallel
      const [{ default: GlobeCtor }, { feature }, worldTopo] = await Promise.all([
        import('globe.gl'),
        import('topojson-client') as Promise<typeof import('topojson-client')>,
        fetch('//unpkg.com/world-atlas@2/countries-110m.json').then(r => r.json()),
      ])

      if (!mounted || !containerRef.current) return

      // Convert TopoJSON → GeoJSON country features
      const countriesGeo = feature(worldTopo, worldTopo.objects.countries) as any
      const countryPolygons: CountryPolygon[] = countriesGeo.features.map((f: any) => ({
        type: 'country' as const,
        geometry: f.geometry,
      }))

      // Civ polygons
      const civPolygons: CivPolygon[] = GLOBE_CIVS.map(civ => ({
        type: 'civ' as const,
        ...civ,
        facing: false,
        active: false,
        hovered: false,
      }))

      const allPolygons: PolygonDatum[] = [...countryPolygons, ...civPolygons]

      // eslint-disable-next-line new-cap
      const globe = new (GlobeCtor as any)(containerRef.current)
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#b0c8d8')
        .atmosphereAltitude(0.12)
        .polygonsData(allPolygons)
        .polygonGeoJsonGeometry((d: PolygonDatum) => d.geometry)
        .polygonCapColor((d: any) => {
          if (d.type === 'country') return LAND_COLOR
          if (d.hovered || d.active) return hexToRgba(d.color, 0.75)
          if (d.facing) return hexToRgba(d.color, 0.45)
          return hexToRgba(d.color, 0.2)
        })
        .polygonSideColor(() => 'rgba(0,0,0,0)') // no visible sides — flat look
        .polygonStrokeColor((d: any) => {
          if (d.type === 'country') return BORDER_COLOR
          if (d.hovered || d.active) return hexToRgba(d.color, 0.9)
          if (d.facing) return hexToRgba(d.color, 0.5)
          return hexToRgba(d.color, 0.15)
        })
        .polygonAltitude((d: any) => {
          if (d.type === 'country') return 0.006
          const off = d.altOffset ?? 0
          if (d.hovered || d.active) return 0.012 + off
          if (d.facing) return 0.01 + off
          return 0.008 + off
        })
        .polygonLabel(() => '')
        .polygonsTransitionDuration(300)
        .showPointerCursor((_type: string, d: any) => d?.type === 'civ' && d?.hasContent)
        .onPolygonClick((d: any) => {
          if (d.type === 'civ' && d.hasContent) window.location.href = `/${d.id}`
        })
        .onPolygonHover((d: any) => {
          for (const p of civPolygons) p.hovered = false
          if (d && d.type === 'civ') {
            d.hovered = true
            hoveredIdRef.current = d.id
          } else {
            hoveredIdRef.current = null
          }
          globe.polygonsData([...allPolygons])
        })
        .width(window.innerWidth)
        .height(window.innerHeight)

      globeRef.current = globe

      // Set globe material to ocean color (no texture image)
      const mat = globe.globeMaterial() as any
      mat.color.set(OCEAN_COLOR)
      mat.shininess = 5

      // Boost ambient lighting so the globe is clearly visible
      globe.lights().forEach((l: any) => { l.intensity = l.intensity * 2 })

      // Camera controls — user drives, no auto-rotate
      const controls = globe.controls()
      controls.autoRotate = false
      controls.enableZoom = true
      controls.minDistance = 150
      controls.maxDistance = 450

      // Face-camera detection loop
      let prevCardId: string | null = null

      intervalId = setInterval(() => {
        if (!mounted) return
        const pov = globe.pointOfView()
        let closest: CivPolygon | null = null
        let closestDist = Infinity
        let dirty = false

        for (const p of civPolygons) {
          const dist = angularDist(pov.lat, pov.lng, p.centroid[1], p.centroid[0])
          const wasFacing = p.facing
          const wasActive = p.active
          p.facing = dist < FACE_THRESHOLD
          p.active = false
          if (wasFacing !== p.facing || wasActive !== p.active) dirty = true

          if (dist < closestDist && p.hasContent) {
            closestDist = dist
            closest = p
          }
        }

        // Hover takes priority for the card; face-camera is fallback
        const hId = hoveredIdRef.current
        const facingId =
          closest && closestDist < ACTIVE_THRESHOLD ? closest.id : null
        const cardId = hId ?? facingId

        if (cardId && !hId) {
          const ap = civPolygons.find(p => p.id === cardId)
          if (ap && !ap.active) {
            ap.active = true
            dirty = true
          }
        }

        if (dirty) {
          globe.polygonsData([...allPolygons])
        }

        if (cardId !== prevCardId) {
          prevCardId = cardId ?? null
          setActiveCiv(
            cardId ? GLOBE_CIVS.find(c => c.id === cardId) ?? null : null,
          )
        }
      }, 150)

      // Handle window resize
      resizeHandler = () => {
        globe.width(window.innerWidth).height(window.innerHeight)
      }
      window.addEventListener('resize', resizeHandler)
    })()

    return () => {
      mounted = false
      clearInterval(intervalId)
      if (resizeHandler) window.removeEventListener('resize', resizeHandler)
      if (globeRef.current) globeRef.current._destructor()
    }
  }, [])

  return (
    <div className="fixed inset-0 bg-[#1a1917]">
      {/* Globe container */}
      <div ref={containerRef} className="w-full h-full" />

      {/* Back button */}
      <button
        onClick={() => (window.location.href = '/')}
        className="fixed top-5 left-5 z-10 text-white/60 hover:text-white/90 transition-colors text-sm font-medium flex items-center gap-1.5"
      >
        <span className="text-lg leading-none">←</span>
        Back
      </button>

      {/* Active civ card */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-10 transition-all duration-300 ease-out pointer-events-none ${
          activeCiv ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
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
