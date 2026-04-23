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

const FACE_THRESHOLD = 55 // degrees from center to count as "facing"
const ACTIVE_THRESHOLD = 30 // degrees — closest to center gets the card

interface PolygonDatum extends GlobeCiv {
  facing: boolean
  active: boolean
}

export default function GlobeView() {
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<any>(null)
  const [activeCiv, setActiveCiv] = useState<GlobeCiv | null>(null)

  useEffect(() => {
    if (!containerRef.current) return
    let mounted = true
    let intervalId: ReturnType<typeof setInterval>
    let resizeHandler: (() => void) | null = null

    import('globe.gl').then(({ default: GlobeCtor }) => {
      if (!mounted || !containerRef.current) return

      const polygons: PolygonDatum[] = GLOBE_CIVS.map(civ => ({
        ...civ,
        facing: false,
        active: false,
      }))

      // eslint-disable-next-line new-cap
      const globe = new (GlobeCtor as any)(containerRef.current)
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#555550')
        .atmosphereAltitude(0.18)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .polygonsData(polygons)
        .polygonGeoJsonGeometry((d: any) => d.geometry)
        .polygonCapColor((d: any) => {
          if (d.active) return hexToRgba(d.color, 0.7)
          if (d.facing) return hexToRgba(d.color, 0.4)
          return hexToRgba(d.color, 0.12)
        })
        .polygonSideColor((d: any) => {
          if (d.active) return hexToRgba(d.color, 0.4)
          if (d.facing) return hexToRgba(d.color, 0.2)
          return hexToRgba(d.color, 0.04)
        })
        .polygonStrokeColor((d: any) => {
          if (d.active) return hexToRgba(d.color, 0.8)
          if (d.facing) return hexToRgba(d.color, 0.4)
          return hexToRgba(d.color, 0.08)
        })
        .polygonAltitude((d: any) => {
          if (d.active) return 0.03
          if (d.facing) return 0.015
          return 0.004
        })
        .polygonLabel(() => '')
        .polygonsTransitionDuration(300)
        .onPolygonClick((d: any) => {
          if (d.hasContent) window.location.href = `/${d.id}`
        })
        .width(window.innerWidth)
        .height(window.innerHeight)

      globeRef.current = globe

      // Camera controls — no auto-rotate, user drives
      const controls = globe.controls()
      controls.autoRotate = false
      controls.enableZoom = true
      controls.minDistance = 150
      controls.maxDistance = 450

      // Face-camera detection loop
      let prevActiveId: string | null = null

      intervalId = setInterval(() => {
        if (!mounted) return
        const pov = globe.pointOfView()
        let closest: PolygonDatum | null = null
        let closestDist = Infinity
        let dirty = false

        for (const p of polygons) {
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

        const newActiveId =
          closest && closestDist < ACTIVE_THRESHOLD ? closest.id : null

        if (newActiveId) {
          const ap = polygons.find(p => p.id === newActiveId)
          if (ap && !ap.active) {
            ap.active = true
            dirty = true
          }
        }

        if (dirty) {
          globe.polygonsData([...polygons])
        }

        if (newActiveId !== prevActiveId) {
          prevActiveId = newActiveId
          setActiveCiv(newActiveId ? (closest as GlobeCiv) : null)
        }
      }, 150)

      // Handle window resize
      resizeHandler = () => {
        globe.width(window.innerWidth).height(window.innerHeight)
      }
      window.addEventListener('resize', resizeHandler)
    })

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
