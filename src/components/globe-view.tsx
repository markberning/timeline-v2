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
const BORDER_COLOR = 'rgba(90,80,60,0.4)'

// Label data extends GlobeCiv with a mutable "nearest to camera" flag
interface LabelDatum extends GlobeCiv {
  _nearest: boolean
}

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
    let hoverClearTimer: ReturnType<typeof setTimeout> | null = null

    ;(async () => {
      const [{ default: GlobeCtor }, { feature }, worldTopo] = await Promise.all([
        import('globe.gl'),
        import('topojson-client') as Promise<typeof import('topojson-client')>,
        fetch('//unpkg.com/world-atlas@2/countries-110m.json').then(r => r.json()),
      ])

      if (!mounted || !containerRef.current) return

      // ── Data layers ──

      // Country outlines (always visible)
      const countriesGeo = feature(worldTopo, worldTopo.objects.countries) as any
      const countryPolygons = countriesGeo.features.map((f: any) => ({
        type: 'country' as const,
        geometry: f.geometry,
      }))

      // Civ labels (dots + names, always visible)
      const labelData: LabelDatum[] = GLOBE_CIVS.map(civ => ({
        ...civ,
        _nearest: false,
      }))

      // Helper: rebuild polygonsData with optional active territory
      function buildPolygons(civId: string | null) {
        if (!civId) return [...countryPolygons]
        const civ = GLOBE_CIVS.find(c => c.id === civId)
        if (!civ) return [...countryPolygons]
        return [...countryPolygons, { type: 'civ' as const, ...civ }]
      }

      // Debounced hover manager — handles label→polygon mouse transitions
      function setHovered(civId: string | null) {
        if (hoverClearTimer) { clearTimeout(hoverClearTimer); hoverClearTimer = null }
        if (civId) {
          hoveredIdRef.current = civId
          globe.polygonsData(buildPolygons(civId))
          setActiveCiv(GLOBE_CIVS.find(c => c.id === civId) ?? null)
        } else {
          hoverClearTimer = setTimeout(() => {
            hoveredIdRef.current = null
            globe.polygonsData(buildPolygons(null))
          }, 150)
        }
      }

      // ── Globe init ──

      // eslint-disable-next-line new-cap
      const globe = new (GlobeCtor as any)(containerRef.current)
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#b0c8d8')
        .atmosphereAltitude(0.12)

        // Polygons: countries + hovered civ territory
        .polygonsData(buildPolygons(null))
        .polygonGeoJsonGeometry((d: any) => d.geometry)
        .polygonCapColor((d: any) => {
          if (d.type === 'country') return LAND_COLOR
          return hexToRgba(d.color, 0.5)
        })
        .polygonSideColor(() => 'rgba(0,0,0,0)')
        .polygonStrokeColor((d: any) => {
          if (d.type === 'country') return BORDER_COLOR
          return hexToRgba(d.color, 0.8)
        })
        .polygonAltitude((d: any) => d.type === 'country' ? 0.006 : 0.01)
        .polygonLabel(() => '')
        .polygonsTransitionDuration(200)
        .onPolygonClick((d: any) => {
          if (d.type === 'civ' && d.hasContent) window.location.href = `/${d.id}`
        })
        .onPolygonHover((d: any) => {
          if (d?.type === 'civ') setHovered(d.id)
          else setHovered(null)
        })

        // Labels: civ dots + names
        .labelsData(labelData)
        .labelLat((d: any) => d.centroid[1])
        .labelLng((d: any) => d.centroid[0])
        .labelText((d: any) => d.label)
        .labelSize((d: any) => d._nearest ? 1.8 : 1.2)
        .labelDotRadius((d: any) => d._nearest ? 0.5 : 0.3)
        .labelColor((d: any) => d.color)
        .labelResolution(2)
        .labelAltitude(0.015)
        .labelsTransitionDuration(300)
        .onLabelHover((label: any) => setHovered(label?.id ?? null))
        .onLabelClick((label: any) => {
          if (label?.hasContent) window.location.href = `/${label.id}`
        })

        .width(window.innerWidth)
        .height(window.innerHeight)

      globeRef.current = globe

      // Set globe material to ocean color (no photo texture)
      const mat = globe.globeMaterial() as any
      mat.color.set(OCEAN_COLOR)
      mat.shininess = 5

      // Boost lighting
      globe.lights().forEach((l: any) => { l.intensity = l.intensity * 2 })

      // Camera controls
      const controls = globe.controls()
      controls.autoRotate = false
      controls.enableZoom = true
      controls.minDistance = 150
      controls.maxDistance = 450

      // Face-camera detection — highlights nearest civ label + shows card
      let prevNearestId: string | null = null

      intervalId = setInterval(() => {
        if (!mounted) return
        // If user is hovering, don't override with face-camera
        if (hoveredIdRef.current) return

        const pov = globe.pointOfView()
        let nearest: LabelDatum | null = null
        let nearestDist = Infinity

        for (const l of labelData) {
          const dist = angularDist(pov.lat, pov.lng, l.centroid[1], l.centroid[0])
          if (dist < nearestDist && l.hasContent) {
            nearestDist = dist
            nearest = l
          }
        }

        const newNearestId =
          nearest && nearestDist < ACTIVE_THRESHOLD ? nearest.id : null

        if (newNearestId !== prevNearestId) {
          prevNearestId = newNearestId
          for (const l of labelData) l._nearest = l.id === newNearestId
          globe.labelsData([...labelData])
          setActiveCiv(
            newNearestId ? GLOBE_CIVS.find(c => c.id === newNearestId) ?? null : null,
          )
        }
      }, 200)

      // Window resize
      resizeHandler = () => {
        globe.width(window.innerWidth).height(window.innerHeight)
      }
      window.addEventListener('resize', resizeHandler)
    })()

    return () => {
      mounted = false
      clearInterval(intervalId)
      if (hoverClearTimer) clearTimeout(hoverClearTimer)
      if (resizeHandler) window.removeEventListener('resize', resizeHandler)
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
