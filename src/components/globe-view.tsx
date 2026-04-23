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

      // ── Data ──

      const countriesGeo = feature(worldTopo, worldTopo.objects.countries) as any
      const countryPolygons = countriesGeo.features.map((f: any) => ({
        type: 'country' as const,
        geometry: f.geometry,
      }))

      function buildPolygons(civId: string | null) {
        if (!civId) return [...countryPolygons]
        const civ = GLOBE_CIVS.find(c => c.id === civId)
        if (!civ) return [...countryPolygons]
        return [...countryPolygons, { type: 'civ' as const, ...civ }]
      }

      // Debounced hover — handles label-box → territory mouse transitions
      function setHovered(civId: string | null) {
        if (hoverClearTimer) { clearTimeout(hoverClearTimer); hoverClearTimer = null }
        if (civId) {
          hoveredIdRef.current = civId
          globe.polygonsData(buildPolygons(civId))
          setActiveCiv(GLOBE_CIVS.find(c => c.id === civId) ?? null)
        } else {
          hoverClearTimer = setTimeout(() => {
            if (!mounted) return
            hoveredIdRef.current = null
            globe.polygonsData(buildPolygons(null))
          }, 300)
        }
      }

      // ── Globe ──

      // eslint-disable-next-line new-cap
      const globe = new (GlobeCtor as any)(containerRef.current)
        .backgroundColor('rgba(0,0,0,0)')
        .showAtmosphere(true)
        .atmosphereColor('#b0c8d8')
        .atmosphereAltitude(0.12)

        // Polygons: country outlines + hovered civ territory
        .polygonsData(buildPolygons(null))
        .polygonGeoJsonGeometry((d: any) => d.geometry)
        .polygonCapColor((d: any) =>
          d.type === 'country' ? LAND_COLOR : hexToRgba(d.color, 0.5),
        )
        .polygonSideColor(() => 'rgba(0,0,0,0)')
        .polygonStrokeColor((d: any) =>
          d.type === 'country' ? BORDER_COLOR : hexToRgba(d.color, 0.8),
        )
        .polygonAltitude((d: any) => (d.type === 'country' ? 0.006 : 0.01))
        .polygonLabel(() => '')
        .polygonsTransitionDuration(200)
        .onPolygonClick((d: any) => {
          if (d.type === 'civ' && d.hasContent) window.location.href = `/${d.id}`
        })
        .onPolygonHover((d: any) => {
          if (d?.type === 'civ') setHovered(d.id)
          else setHovered(null)
        })

        // Points: colored dots at each civ centroid
        .pointsData(GLOBE_CIVS)
        .pointLat((d: any) => d.centroid[1])
        .pointLng((d: any) => d.centroid[0])
        .pointColor((d: any) => d.color)
        .pointRadius(0.35)
        .pointAltitude(0.008)

        // HTML elements: styled label boxes at offset positions
        .htmlElementsData(GLOBE_CIVS)
        .htmlLat((d: any) => d.labelPos[1])
        .htmlLng((d: any) => d.labelPos[0])
        .htmlAltitude(0.025)
        .htmlElement((d: any) => {
          const box = document.createElement('div')
          box.textContent = d.label
          box.style.cssText = [
            'background: rgba(30, 28, 25, 0.85)',
            `border: 1px solid ${hexToRgba(d.color, 0.3)}`,
            `border-left: 3px solid ${d.color}`,
            'border-radius: 6px',
            'padding: 3px 8px',
            'color: #e8e0d4',
            'font-size: 11px',
            'font-weight: 500',
            'font-family: system-ui, sans-serif',
            'cursor: pointer',
            'white-space: nowrap',
            'transition: all 0.2s ease',
            'pointer-events: auto',
            'user-select: none',
          ].join(';')

          box.addEventListener('mouseenter', () => {
            box.style.background = 'rgba(30, 28, 25, 0.95)'
            box.style.borderColor = d.color
            box.style.color = '#fff'
            box.style.transform = 'scale(1.08)'
            box.style.boxShadow = `0 0 12px ${hexToRgba(d.color, 0.3)}`
            setHovered(d.id)
          })
          box.addEventListener('mouseleave', () => {
            box.style.background = 'rgba(30, 28, 25, 0.85)'
            box.style.borderColor = hexToRgba(d.color, 0.3)
            box.style.color = '#e8e0d4'
            box.style.transform = 'scale(1)'
            box.style.boxShadow = 'none'
            setHovered(null)
          })
          box.addEventListener('click', () => {
            if (d.hasContent) window.location.href = `/${d.id}`
          })
          return box
        })

        .width(window.innerWidth)
        .height(window.innerHeight)

      globeRef.current = globe

      // Set globe to solid ocean color
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

      // Face-camera detection — passive card only (no label visual change)
      let prevNearestId: string | null = null

      intervalId = setInterval(() => {
        if (!mounted) return
        if (hoveredIdRef.current) return // hover overrides face-camera

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

        const newId = nearest && nearestDist < ACTIVE_THRESHOLD ? nearest.id : null
        if (newId !== prevNearestId) {
          prevNearestId = newId
          setActiveCiv(newId ? nearest : null)
        }
      }, 200)

      // Resize
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

      <button
        onClick={() => (window.location.href = '/')}
        className="fixed top-5 left-5 z-10 text-white/60 hover:text-white/90 transition-colors text-sm font-medium flex items-center gap-1.5"
      >
        <span className="text-lg leading-none">←</span>
        Back
      </button>

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
