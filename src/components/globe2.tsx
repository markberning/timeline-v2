'use client'

import {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
  type MouseEvent as ReactMouseEvent,
} from 'react'
import * as d3 from 'd3'
import * as topojson from 'topojson-client'
import type { Topology, GeometryCollection } from 'topojson-specification'
import {
  GLOBE2_CIVS,
  GLOBE2_GROUPS,
  TIME_MIN,
  TIME_MAX,
  ERAS,
  getCivColor,
  getReaderSlug,
  getCivChain,
  type GlobeCiv2,
} from '@/lib/globe2-data'
import styles from './globe2.module.css'

/* ── helpers ─────────────────────────────────────────────────── */

function formatYear(y: number): string {
  if (y < 0) return `${Math.abs(y)} BCE`
  if (y === 0) return '1 CE'
  return `${y} CE`
}

function yearSpan(s: number, e: number): string {
  return `${formatYear(s)} – ${formatYear(e)}`
}

/**
 * Angular distance between two lon/lat points in degrees.
 */
function angularDist(
  lon1: number,
  lat1: number,
  lon2: number,
  lat2: number,
): number {
  const toRad = Math.PI / 180
  const dLat = (lat2 - lat1) * toRad
  const dLon = (lon2 - lon1) * toRad
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * toRad) * Math.cos(lat2 * toRad) * Math.sin(dLon / 2) ** 2
  return 2 * Math.asin(Math.sqrt(Math.min(1, a))) * (180 / Math.PI)
}

/** Is a lon/lat point on the visible hemisphere? */
function isVisible(
  lon: number,
  lat: number,
  rotation: [number, number],
): boolean {
  return angularDist(-rotation[0], -rotation[1], lon, lat) < 90
}

/** Close a polygon ring for GeoJSON and fix winding via d3.geoArea. */
function asClosedRing(
  coords: [number, number][],
): [number, number][] {
  const ring = [...coords]
  const first = ring[0]
  const last = ring[ring.length - 1]
  if (first[0] !== last[0] || first[1] !== last[1]) {
    ring.push([first[0], first[1]])
  }
  // Fix winding: GeoJSON exterior rings must be counter-clockwise.
  // If d3.geoArea > 2*PI (> half the sphere), reverse the winding.
  const geojson: GeoJSON.Polygon = { type: 'Polygon', coordinates: [ring] }
  if (d3.geoArea(geojson) > 2 * Math.PI) {
    ring.reverse()
  }
  return ring
}

/** Density histogram for the timeline waveform. */
function computeDensity(
  civs: GlobeCiv2[],
  bins: number,
): number[] {
  const out = new Array(bins).fill(0) as number[]
  const range = TIME_MAX - TIME_MIN
  for (const c of civs) {
    const i0 = Math.max(0, Math.floor(((c.start - TIME_MIN) / range) * bins))
    const i1 = Math.min(bins - 1, Math.floor(((c.end - TIME_MIN) / range) * bins))
    for (let i = i0; i <= i1; i++) out[i]++
  }
  return out
}

/** Simple rect-rect overlap check for label collision. */
interface Rect {
  x: number
  y: number
  w: number
  h: number
}
function rectsOverlap(a: Rect, b: Rect): boolean {
  return a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
}

/* ── era strip colors ────────────────────────────────────────── */
const ERA_COLORS = ['#b45309', '#a16207', '#92400e', '#78350f', '#713f12']

/* ── WorldMap topology URL ───────────────────────────────────── */
const WORLD_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

/* ══════════════════════════════════════════════════════════════
   Globe2 Component
   ══════════════════════════════════════════════════════════════ */

export default function Globe2() {
  /* ── refs ──────────────────────────────────────────────────── */
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const worldRef = useRef<Topology | null>(null)

  /* ── state ────────────────────────────────────────────────── */
  const [year, setYear] = useState(-2000)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [hoverPos, setHoverPos] = useState<{ x: number; y: number } | null>(null)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [worldLoaded, setWorldLoaded] = useState(false)
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 })

  /* ── projection & path ────────────────────────────────────── */
  const projectionRef = useRef(
    d3
      .geoOrthographic()
      .rotate([-30, -20, 0])
      .clipAngle(90)
      .precision(0.5),
  )
  const scaleRef = useRef(1)
  const rotationRef = useRef<[number, number]>([-30, -20])
  const isDraggingRef = useRef(false)
  const rafRef = useRef(0)
  const baseScaleRef = useRef(0)

  /* ── derived data ─────────────────────────────────────────── */
  const activeCivs = useMemo(
    () => GLOBE2_CIVS.filter((c) => c.start <= year && c.end >= year),
    [year],
  )

  const selected = useMemo(
    () => (selectedId ? GLOBE2_CIVS.find((c) => c.id === selectedId) ?? null : null),
    [selectedId],
  )

  const density = useMemo(() => computeDensity(GLOBE2_CIVS, 120), [])
  const maxDensity = useMemo(() => Math.max(...density, 1), [density])

  /* ── search filtering for drawer ──────────────────────────── */
  const filteredGroups = useMemo(() => {
    const q = search.toLowerCase().trim()
    if (!q) return GLOBE2_GROUPS
    return GLOBE2_GROUPS.map((g) => ({
      ...g,
      ids: g.ids.filter((id) => {
        const c = GLOBE2_CIVS.find((cv) => cv.id === id)
        return (
          c &&
          (c.name.toLowerCase().includes(q) ||
            c.region.toLowerCase().includes(q) ||
            c.cities.some((ct) => ct.toLowerCase().includes(q)))
        )
      }),
    })).filter((g) => g.ids.length > 0)
  }, [search])

  /* ── load world topology ──────────────────────────────────── */
  useEffect(() => {
    fetch(WORLD_URL)
      .then((r) => r.json())
      .then((topo: Topology) => {
        worldRef.current = topo
        setWorldLoaded(true)
      })
      .catch(console.error)
  }, [])

  /* ── resize handling ──────────────────────────────────────── */
  useEffect(() => {
    let initialized = false
    function handleResize() {
      // Use visualViewport on iOS to avoid Safari chrome measurement issues
      const vv = window.visualViewport
      const w = vv ? vv.width : window.innerWidth
      const h = vv ? vv.height : window.innerHeight
      setDimensions({ w, h })
      // On portrait phones, use width so the globe spans the screen edge-to-edge.
      // On landscape/desktop, use the smaller dimension.
      const isMobile = w <= 720
      const base = isMobile ? w * 0.48 : Math.min(w, h) * 0.42
      baseScaleRef.current = base
      if (!initialized) {
        initialized = true
        if (isMobile) scaleRef.current = 1.0 // mobile globe already fills screen
      }
      projectionRef.current
        .translate([w / 2, h / 2 * 0.85])  // nudge up slightly so timeline doesn't cover globe
        .scale(base * scaleRef.current)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  /* ── keyboard shortcuts ───────────────────────────────────── */
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSelectedId(null)
        setDrawerOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  // Store selectedId in a ref so renderGlobe always reads the current value
  // (avoids stale closure during spin animation)
  const selectedIdRef = useRef<string | null>(null)
  useEffect(() => { selectedIdRef.current = selectedId }, [selectedId])

  /* ── select a civ: spin to it ─────────────────────────────── */
  const selectCiv = useCallback(
    (id: string | null) => {
      setSelectedId(id)
      selectedIdRef.current = id // update ref immediately for renderGlobe
      setDrawerOpen(false)
      if (!id) return
      const civ = GLOBE2_CIVS.find((c) => c.id === id)
      if (!civ) return

      // If outside the civ's time range, jump to midpoint
      const mid = Math.round((civ.start + civ.end) / 2)
      if (year < civ.start || year > civ.end) {
        setYear(Math.max(TIME_MIN, Math.min(TIME_MAX, mid)))
      }

      // Spin to the civ's capital + zoom to fit extent
      const [lon, lat] = civ.capital
      const targetRot: [number, number] = [-lon, -lat]
      const startRot = rotationRef.current
      const interpRot = d3.interpolate(startRot, targetRot)

      // Calculate zoom level from extent bounding box
      const isMob = window.innerWidth <= 720
      let targetK = 2.0
      if (civ.extent.length >= 3) {
        const lons = civ.extent.map(p => p[0])
        const lats = civ.extent.map(p => p[1])
        const span = Math.max(
          Math.max(...lons) - Math.min(...lons),
          Math.max(...lats) - Math.min(...lats),
        )
        if (span < 6) targetK = 3.2
        else if (span < 15) targetK = 2.4
        else if (span < 30) targetK = 1.8
        else if (span < 60) targetK = 1.4
        else targetK = 1.1
      }
      targetK = Math.min(isMob ? 4.5 : 4.5, targetK)

      const startK = scaleRef.current

      const duration = 800
      const t0 = performance.now()
      function animate(now: number) {
        const t = Math.min(1, (now - t0) / duration)
        const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
        const [rLon, rLat] = interpRot(ease)
        rotationRef.current = [rLon, rLat]
        projectionRef.current.rotate([rLon, rLat, 0])

        // Animate zoom
        const k = startK + (targetK - startK) * ease
        scaleRef.current = k
        projectionRef.current.scale(baseScaleRef.current * k)

        renderGlobe()
        if (t < 1) requestAnimationFrame(animate)
      }
      requestAnimationFrame(animate)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [year],
  )

  /* ── render the globe into the SVG ─────────────────────────── */
  const renderGlobe = useCallback(() => {
    const svg = svgRef.current
    const world = worldRef.current
    if (!svg || !world) return

    const projection = projectionRef.current
    const path = d3.geoPath(projection)
    const rotation = rotationRef.current
    const { w, h } = {
      w: window.innerWidth,
      h: window.innerHeight,
    }

    /* ── sphere + graticule ──────────────────────────────────── */
    const sphereEl = svg.querySelector(`.${styles.sphere}`) as SVGCircleElement | null
    if (sphereEl) {
      const [cx, cy] = projection.translate()
      const r = projection.scale()
      sphereEl.setAttribute('cx', String(cx))
      sphereEl.setAttribute('cy', String(cy))
      sphereEl.setAttribute('r', String(r))
    }

    const gratEl = svg.querySelector(`.${styles.graticule}`) as SVGPathElement | null
    if (gratEl) {
      const graticule = d3.geoGraticule10()
      gratEl.setAttribute('d', path(graticule) || '')
    }

    /* ── countries: two-path optimization ──────────────────── */
    const countries = (
      topojson.feature(
        world,
        world.objects.countries as GeometryCollection,
      ) as GeoJSON.FeatureCollection
    ).features

    // Combine all country geometries into a single MultiPolygon for fill
    const allCoords: GeoJSON.Position[][][] = []
    for (const f of countries) {
      const g = f.geometry
      if (g.type === 'Polygon') allCoords.push(g.coordinates)
      else if (g.type === 'MultiPolygon')
        for (const poly of g.coordinates) allCoords.push(poly)
    }
    const combinedFill: GeoJSON.MultiPolygon = {
      type: 'MultiPolygon',
      coordinates: allCoords,
    }

    const fillEl = svg.querySelector(`.${styles.countryFill}`) as SVGPathElement | null
    if (fillEl) fillEl.setAttribute('d', path(combinedFill) || '')

    const bordersMesh = topojson.mesh(
      world,
      world.objects.countries as GeometryCollection,
      (a, b) => a !== b,
    )
    const borderEl = svg.querySelector(
      `.${styles.countryBorders}`,
    ) as SVGPathElement | null
    if (borderEl) borderEl.setAttribute('d', path(bordersMesh) || '')

    /* ── civ region polygon (read from ref for fresh value during animation) */
    const regionEl = svg.querySelector(
      `.${styles.civRegion}`,
    ) as SVGPathElement | null
    if (regionEl) {
      const selId = selectedIdRef.current
      const selCiv = selId ? GLOBE2_CIVS.find(c => c.id === selId) : null
      if (selCiv && selCiv.extent.length >= 3) {
        const ring = asClosedRing(selCiv.extent as [number, number][])
        const geo: GeoJSON.Polygon = { type: 'Polygon', coordinates: [ring] }
        regionEl.setAttribute('d', path(geo) || '')
        const regionColor = getCivColor(selCiv.id)
        regionEl.style.fill = regionColor + '40'      // 25% opacity
        regionEl.style.stroke = regionColor
      } else {
        regionEl.setAttribute('d', '')
      }
    }

    /* ── pins (update g.civPin positions + visibility) ──────── */
    const pinsG = svg.querySelector('#pins-group')
    if (!pinsG) return

    // Remove stale pins
    const existingPins = pinsG.querySelectorAll(`.${styles.civPin}`)
    const activeIds = new Set(activeCivs.map((c) => c.id))
    existingPins.forEach((el) => {
      const pinId = el.getAttribute('data-civ-id')
      if (pinId && !activeIds.has(pinId)) el.remove()
    })

    for (const civ of activeCivs) {
      const [lon, lat] = civ.capital
      const vis = isVisible(lon, lat, rotation)
      const coords = projection([lon, lat])
      const civColor = getCivColor(civ.id)

      let g = pinsG.querySelector(`[data-civ-id="${civ.id}"]`) as SVGGElement | null
      if (!g) {
        g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
        g.setAttribute('data-civ-id', civ.id)
        g.classList.add(styles.civPin)
        const isMob = window.innerWidth <= 720
        const halo = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        halo.classList.add(styles.pinHalo)
        halo.setAttribute('r', isMob ? '14' : '7')
        const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
        dot.classList.add(styles.pinDot)
        dot.setAttribute('r', isMob ? '6' : '3.5')
        g.appendChild(halo)
        g.appendChild(dot)
        pinsG.appendChild(g)
      }

      if (!vis || !coords) {
        g.style.display = 'none'
        continue
      }
      g.style.display = ''
      g.setAttribute('transform', `translate(${coords[0]},${coords[1]})`)

      // Apply region color to pin
      const dot = g.querySelector(`.${styles.pinDot}`) as SVGCircleElement | null
      const halo = g.querySelector(`.${styles.pinHalo}`) as SVGCircleElement | null
      if (dot) dot.style.fill = civColor
      if (halo) halo.style.stroke = civColor

      // Focused / dimmed states
      const isFocused = civ.id === selectedId
      const isDimmed = selectedId != null && civ.id !== selectedId
      g.classList.toggle(styles.focused, isFocused)
      g.classList.toggle(styles.dimmed, isDimmed)
    }

    /* ── leader-line labels (skip during drag) ─────────────── */
    const labelsG = svg.querySelector('#labels-group')
    if (!labelsG) return

    if (isDraggingRef.current) {
      labelsG.innerHTML = ''
      return
    }

    labelsG.innerHTML = ''
    const placed: Rect[] = []
    const labelOffset = 20
    const charW = 5.5
    const labelH = 16
    const labelPadX = 6
    const labelPadY = 2

    // Seed the placed list with all visible pin positions so labels never
    // cover another civ's dot. Each pin is treated as a small rect.
    const pinPad = 10
    for (const civ of activeCivs) {
      const [lon, lat] = civ.capital
      if (!isVisible(lon, lat, rotation)) continue
      const pc = projection([lon, lat])
      if (pc) placed.push({ x: pc[0] - pinPad, y: pc[1] - pinPad, w: pinPad * 2, h: pinPad * 2 })
    }

    // Also avoid the selected civ's region polygon bounding box
    const selId = selectedIdRef.current
    const selCiv = selId ? GLOBE2_CIVS.find(c => c.id === selId) : null
    if (selCiv && selCiv.extent.length >= 3) {
      const screenPts = selCiv.extent
        .filter(([lo, la]) => isVisible(lo, la, rotation))
        .map(pt => projection(pt))
        .filter(Boolean) as [number, number][]
      if (screenPts.length >= 2) {
        const xs = screenPts.map(p => p[0])
        const ys = screenPts.map(p => p[1])
        const pad = 8
        placed.push({
          x: Math.min(...xs) - pad,
          y: Math.min(...ys) - pad,
          w: Math.max(...xs) - Math.min(...xs) + pad * 2,
          h: Math.max(...ys) - Math.min(...ys) + pad * 2,
        })
      }
    }

    // Sort: selected first, then by distance to center for priority
    const [cx, cy] = projection.translate()
    const sorted = [...activeCivs].sort((a, b) => {
      if (a.id === selectedId) return -1
      if (b.id === selectedId) return 1
      const pa = projection(a.capital)
      const pb = projection(b.capital)
      if (!pa || !pb) return 0
      const da = Math.hypot(pa[0] - cx, pa[1] - cy)
      const db = Math.hypot(pb[0] - cx, pb[1] - cy)
      return da - db
    })

    const maxLabels = w < 720 ? 6 : 14

    let count = 0
    for (const civ of sorted) {
      if (count >= maxLabels) break
      const [lon, lat] = civ.capital
      if (!isVisible(lon, lat, rotation)) continue
      const coords = projection([lon, lat])
      if (!coords) continue

      const px = coords[0]
      const py = coords[1]
      const textLen = civ.name.length * charW
      const boxW = textLen + labelPadX * 2
      const boxH = labelH + labelPadY * 2

      // Try 4 directions for label placement
      const dirs: [number, number][] = [
        [1, -1],
        [1, 1],
        [-1, -1],
        [-1, 1],
      ]
      let bestDir = dirs[0]
      let bestRect: Rect | null = null

      for (const [dx, dy] of dirs) {
        const lx = px + dx * labelOffset
        const ly = py + dy * labelOffset - boxH / 2
        const rect: Rect = { x: lx, y: ly, w: boxW, h: boxH }
        // Check bounds
        if (lx < 0 || lx + boxW > w || ly < 0 || ly + boxH > h) continue
        // Check collisions
        if (placed.some((r) => rectsOverlap(rect, r))) continue
        bestDir = [dx, dy]
        bestRect = rect
        break
      }

      if (!bestRect) continue
      placed.push(bestRect)
      count++

      const labelColor = getCivColor(civ.id)
      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g')
      g.classList.add(styles.civLabel)
      g.setAttribute('data-civ-id', civ.id)
      g.style.cursor = 'pointer'
      g.style.pointerEvents = 'auto'

      // Leader line
      const lx = bestRect.x
      const ly = bestRect.y + boxH / 2
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line')
      line.classList.add(styles.leader)
      line.setAttribute('x1', String(px))
      line.setAttribute('y1', String(py))
      line.setAttribute('x2', String(lx))
      line.setAttribute('y2', String(ly))
      line.style.stroke = labelColor + '66'
      g.appendChild(line)

      // Bubble background
      const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
      rect.classList.add(styles.bubble)
      rect.setAttribute('x', String(bestRect.x))
      rect.setAttribute('y', String(bestRect.y))
      rect.setAttribute('width', String(boxW))
      rect.setAttribute('height', String(boxH))
      rect.style.stroke = labelColor + '66'
      g.appendChild(rect)

      // Text
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
      text.classList.add(styles.labelText)
      text.setAttribute('x', String(bestRect.x + labelPadX))
      text.setAttribute('y', String(bestRect.y + boxH / 2))
      text.textContent = civ.name
      g.appendChild(text)

      labelsG.appendChild(g)
    }
  }, [activeCivs, selectedId])

  /* ── re-render when state changes ─────────────────────────── */
  useEffect(() => {
    if (worldLoaded) renderGlobe()
  }, [worldLoaded, renderGlobe, year, selectedId, dimensions])

  /* ── drag interaction + tap-hold-drag zoom ─────────────────── */
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    let dragStart: [number, number] | null = null
    let rotStart: [number, number] = [0, 0]

    // Tap-then-hold-drag zoom (Apple Maps style):
    // First tap (down+up quickly), then second tap held + drag up/down = zoom
    let lastTapTime = 0
    let lastTapPos: [number, number] = [0, 0]
    let isZoomDrag = false
    let zoomDragStartY = 0
    let zoomDragStartK = 1
    const TAP_WINDOW = 350  // ms between first tap release and second tap down
    const TAP_RADIUS = 30   // px proximity

    function onPointerDown(e: PointerEvent) {
      // Ignore if clicking a pin or label
      const target = e.target as Element
      if (target.closest(`.${styles.civPin}`) || target.closest(`.${styles.civLabel}`)) return

      // Check if this is the second tap in a tap-hold-drag gesture
      const now = performance.now()
      const dt = now - lastTapTime
      const dist = Math.hypot(e.clientX - lastTapPos[0], e.clientY - lastTapPos[1])

      if (dt < TAP_WINDOW && dist < TAP_RADIUS) {
        // Second tap — enter zoom-drag mode
        isZoomDrag = true
        zoomDragStartY = e.clientY
        zoomDragStartK = scaleRef.current
        isDraggingRef.current = true
        svg!.setPointerCapture(e.pointerId)
        return
      }

      dragStart = [e.clientX, e.clientY]
      rotStart = [...rotationRef.current]
      isDraggingRef.current = true
      svg!.setPointerCapture(e.pointerId)
    }

    function onPointerMove(e: PointerEvent) {
      if (isZoomDrag) {
        // Drag up = zoom in, drag down = zoom out
        const dy = zoomDragStartY - e.clientY  // positive = dragged up
        const factor = dy * 0.008
        scaleRef.current = Math.max(0.4, Math.min(6, zoomDragStartK + factor))
        projectionRef.current.scale(baseScaleRef.current * scaleRef.current)
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
        rafRef.current = requestAnimationFrame(renderGlobe)
        return
      }

      if (!dragStart) return
      const dx = e.clientX - dragStart[0]
      const dy = e.clientY - dragStart[1]
      const scale = projectionRef.current.scale()
      const sensitivity = 0.3

      const newRot: [number, number] = [
        rotStart[0] + (dx * sensitivity * 100) / scale,
        Math.max(-89, Math.min(89, rotStart[1] - (dy * sensitivity * 100) / scale)),
      ]

      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => {
        rotationRef.current = newRot
        projectionRef.current.rotate([newRot[0], newRot[1], 0])
        renderGlobe()
      })
    }

    function onPointerUp(e: PointerEvent) {
      if (isZoomDrag) {
        isZoomDrag = false
        isDraggingRef.current = false
        lastTapTime = 0  // reset so next tap is fresh
        requestAnimationFrame(renderGlobe)
        return
      }

      if (dragStart) {
        const dx = e.clientX - dragStart[0]
        const dy = e.clientY - dragStart[1]
        const moved = Math.hypot(dx, dy) > 4

        if (!moved) {
          // Record this as a tap for potential tap-hold-drag
          lastTapTime = performance.now()
          lastTapPos = [e.clientX, e.clientY]

          // Click on empty globe → deselect (but not if clicking a pin or label)
          const target = e.target as Element
          if (!target.closest(`.${styles.civPin}`) && !target.closest(`.${styles.civLabel}`)) {
            setSelectedId(null)
            selectedIdRef.current = null
          }
        } else {
          lastTapTime = 0  // dragged, not a tap
        }

        dragStart = null
        isDraggingRef.current = false

        // Re-render labels
        requestAnimationFrame(renderGlobe)
      }
    }

    function onDblClick(e: MouseEvent) {
      e.preventDefault()
      // Double-click/tap zooms in (quick double tap, no drag)
      const startK = scaleRef.current
      const targetK = Math.min(6, startK * 1.6)
      const duration = 300
      const t0 = performance.now()
      function animateZoom(now: number) {
        const t = Math.min(1, (now - t0) / duration)
        const ease = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
        scaleRef.current = startK + (targetK - startK) * ease
        projectionRef.current.scale(baseScaleRef.current * scaleRef.current)
        renderGlobe()
        if (t < 1) requestAnimationFrame(animateZoom)
      }
      requestAnimationFrame(animateZoom)
    }

    svg.addEventListener('pointerdown', onPointerDown)
    svg.addEventListener('pointermove', onPointerMove)
    svg.addEventListener('pointerup', onPointerUp)
    svg.addEventListener('pointercancel', onPointerUp)
    svg.addEventListener('dblclick', onDblClick)

    return () => {
      svg.removeEventListener('pointerdown', onPointerDown)
      svg.removeEventListener('pointermove', onPointerMove)
      svg.removeEventListener('pointerup', onPointerUp)
      svg.removeEventListener('pointercancel', onPointerUp)
      svg.removeEventListener('dblclick', onDblClick)
    }
  }, [renderGlobe])

  /* ── zoom (wheel + pinch) ─────────────────────────────────── */
  useEffect(() => {
    const svg = svgRef.current
    if (!svg) return

    function onWheel(e: WheelEvent) {
      e.preventDefault()

      // Horizontal swipe (deltaX) → rotate/pan the globe
      if (Math.abs(e.deltaX) > 0) {
        const scale = projectionRef.current.scale()
        const k = 50 / scale
        const [rLon, rLat] = rotationRef.current
        rotationRef.current = [rLon + e.deltaX * k, rLat]
        projectionRef.current.rotate([rotationRef.current[0], rotationRef.current[1], 0])
      }

      // Vertical swipe (deltaY) + pinch (ctrlKey) → zoom
      if (Math.abs(e.deltaY) > 0) {
        const factor = e.ctrlKey ? 0.01 : 0.001  // pinch is more sensitive
        const delta = -e.deltaY * factor
        scaleRef.current = Math.max(0.4, Math.min(6, scaleRef.current + delta))
        projectionRef.current.scale(baseScaleRef.current * scaleRef.current)
      }

      renderGlobe()
    }

    // Pinch-to-zoom for mobile
    let pinchDist0: number | null = null
    let pinchScale0 = 1
    function touchDist(t: TouchList) {
      return Math.hypot(
        t[0].clientX - t[1].clientX,
        t[0].clientY - t[1].clientY,
      )
    }
    function onTouchStart(e: TouchEvent) {
      if (e.touches.length === 2) {
        pinchDist0 = touchDist(e.touches)
        pinchScale0 = scaleRef.current
      }
    }
    function onTouchMove(e: TouchEvent) {
      if (e.touches.length === 2 && pinchDist0 !== null) {
        e.preventDefault()
        const d = touchDist(e.touches)
        const factor = d / pinchDist0
        scaleRef.current = Math.max(0.4, Math.min(9, pinchScale0 * factor))
        projectionRef.current.scale(baseScaleRef.current * scaleRef.current)
        renderGlobe()
      }
    }
    function onTouchEnd(e: TouchEvent) {
      if (e.touches.length < 2) pinchDist0 = null
    }

    svg.addEventListener('wheel', onWheel, { passive: false })
    svg.addEventListener('touchstart', onTouchStart, { passive: true })
    svg.addEventListener('touchmove', onTouchMove, { passive: false })
    svg.addEventListener('touchend', onTouchEnd)

    return () => {
      svg.removeEventListener('wheel', onWheel)
      svg.removeEventListener('touchstart', onTouchStart)
      svg.removeEventListener('touchmove', onTouchMove)
      svg.removeEventListener('touchend', onTouchEnd)
    }
  }, [renderGlobe])

  /* ── pin + label click / hover handlers ───────────────────── */
  const handlePinClick = useCallback(
    (e: ReactMouseEvent<SVGSVGElement>) => {
      // Check both pins and leader-line labels
      const target =
        (e.target as Element).closest(`.${styles.civPin}`) ??
        (e.target as Element).closest(`.${styles.civLabel}`)
      if (!target) return
      e.stopPropagation()
      const id = target.getAttribute('data-civ-id')
      if (id) selectCiv(id)
    },
    [selectCiv],
  )

  const handlePinHover = useCallback(
    (e: ReactMouseEvent<SVGSVGElement>) => {
      const target = (e.target as Element).closest(`.${styles.civPin}`)
      if (target) {
        const id = target.getAttribute('data-civ-id')
        setHoveredId(id)
        setHoverPos({ x: e.clientX, y: e.clientY })
      } else {
        setHoveredId(null)
        setHoverPos(null)
      }
    },
    [],
  )

  /* ── zoom button handlers ─────────────────────────────────── */
  const handleZoom = useCallback(
    (dir: number) => {
      scaleRef.current = Math.max(0.4, Math.min(6, scaleRef.current + dir * 0.3))
      projectionRef.current.scale(baseScaleRef.current * scaleRef.current)
      renderGlobe()
    },
    [renderGlobe],
  )

  /* ── hovered civ for tooltip ──────────────────────────────── */
  const hoveredCiv = useMemo(
    () => (hoveredId ? GLOBE2_CIVS.find((c) => c.id === hoveredId) ?? null : null),
    [hoveredId],
  )

  /* ── era strip for info card ──────────────────────────────── */
  const eraStripForCiv = useCallback((civ: GlobeCiv2) => {
    return ERAS.map((era, i) => {
      const nextY = ERAS[i + 1]?.y ?? TIME_MAX
      const active = civ.start <= nextY && civ.end >= era.y
      return { ...era, active, color: ERA_COLORS[i] }
    })
  }, [])

  /* ── render ────────────────────────────────────────────────── */
  return (
    <div ref={containerRef} className={styles.container}>
      {/* ── SVG Globe ─────────────────────────────────────── */}
      <svg
        ref={svgRef}
        width={dimensions.w}
        height={dimensions.h}
        viewBox={`0 0 ${dimensions.w} ${dimensions.h}`}
        style={{ display: 'block', position: 'absolute', inset: 0 }}
        onClick={handlePinClick}
        onMouseMove={handlePinHover}
        onMouseLeave={() => {
          setHoveredId(null)
          setHoverPos(null)
        }}
      >
        {/* Sphere background */}
        <circle className={styles.sphere} />

        {/* Graticule */}
        <path className={styles.graticule} />

        {/* Countries: two-path fill + borders */}
        <path className={styles.countryFill} />
        <path className={styles.countryBorders} />

        {/* Selected civ region */}
        <path className={styles.civRegion} />

        {/* Pins */}
        <g id="pins-group" />

        {/* Labels */}
        <g id="labels-group" />
      </svg>

      {/* ── Title block ───────────────────────────────────── */}
      <div className={styles.titleBlock}>
        <a
          href="/"
          className={`${styles.kicker} ${styles.homeLink} font-[family-name:var(--font-geist-sans)]`}
        >
          &larr; Stuff Happened
        </a>
        <div className={`${styles.title} font-[family-name:var(--font-lora)]`}>
          Historica
        </div>
        <div
          className={`${styles.subtitle} font-[family-name:var(--font-geist-sans)]`}
        >
          Drag to spin &middot; Click a pin to explore
        </div>
      </div>

      {/* ── Hover tooltip ─────────────────────────────────── */}
      {hoveredCiv && hoverPos && hoveredId !== selectedId && (
        <div
          className={`${styles.civTip} font-[family-name:var(--font-geist-sans)]`}
          style={{
            left: hoverPos.x + 14,
            top: hoverPos.y - 28,
            opacity: 1,
            borderColor: getCivColor(hoveredCiv.id) + '66',
          }}
        >
          <span
            className={styles.tipDot}
            style={{ background: getCivColor(hoveredCiv.id) }}
          />
          <strong>{hoveredCiv.name}</strong>
          <span
            className="font-[family-name:var(--font-geist-mono)]"
            style={{ marginLeft: 8, opacity: 0.6, fontSize: 11 }}
          >
            {yearSpan(hoveredCiv.start, hoveredCiv.end)}
          </span>
        </div>
      )}

      {/* ── Info card ─────────────────────────────────────── */}
      {selected && (() => {
        const cardColor = getCivColor(selected.id)
        const chain = getCivChain(selected.id)
        const readerSlug = getReaderSlug(selected.id)
        return (
          <div
            className={`${styles.infoCard} font-[family-name:var(--font-geist-sans)]`}
            style={{ borderColor: cardColor + '40' }}
          >
            <button
              className={styles.closeBtn}
              onClick={() => setSelectedId(null)}
              aria-label="Close"
            >
              &times;
            </button>

            {/* Era strip */}
            <div className={styles.eraStrip}>
              {eraStripForCiv(selected).map((era, i) => (
                <span
                  key={i}
                  className={era.active ? styles.active : undefined}
                  style={{ background: cardColor, opacity: era.active ? 1 : 0.15 }}
                />
              ))}
            </div>

            {chain ? (
              <div className={styles.groupLabel} style={{ color: cardColor }}>
                {chain.shortLabel} ({chain.pos}/{chain.total})
              </div>
            ) : (
              <div className={styles.groupLabel} style={{ color: cardColor }}>
                {selected.region}
              </div>
            )}
            <h2 className="font-[family-name:var(--font-lora)]">{selected.name}</h2>
            <div className={`${styles.dates} font-[family-name:var(--font-geist-mono)]`}>
              {yearSpan(selected.start, selected.end)}
            </div>
            <div className={styles.summary}>{selected.summary}</div>
            {selected.cities.length > 0 && (
              <div className={styles.cities}>
                Key cities:{' '}
                <span>{selected.cities.join(', ')}</span>
              </div>
            )}
            {readerSlug && (
              <a
                href={`/${readerSlug}`}
                className={styles.readBtn}
                style={{ background: cardColor }}
              >
                Read the full story &rarr;
              </a>
            )}
          </div>
        )
      })()}

      {/* ── Drawer toggle ─────────────────────────────────── */}
      <button
        className={`${styles.drawerToggle} font-[family-name:var(--font-geist-sans)]`}
        onClick={() => setDrawerOpen((v) => !v)}
      >
        {drawerOpen ? 'Close' : `${activeCivs.length} civilizations`}
      </button>

      {/* ── Drawer / sidebar ──────────────────────────────── */}
      <div className={`${styles.drawer} ${drawerOpen ? styles.open : ''}`}>
        <div className={styles.drawerSticky}>
          <div className={styles.drawerHeader}>
            <span className={`${styles.drawerTitle} font-[family-name:var(--font-geist-sans)]`}>
              All Civilizations
            </span>
            <button
              className={styles.drawerClose}
              onClick={() => setDrawerOpen(false)}
              aria-label="Close drawer"
            >
              &times;
            </button>
          </div>
          <input
            className={`${styles.drawerSearch} font-[family-name:var(--font-geist-sans)]`}
            type="text"
            placeholder="Search civilizations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus={drawerOpen}
          />
        </div>
        <div className={styles.drawerBody}>
          {filteredGroups.map((group) => (
            <div key={group.id} className={styles.drawerGroup}>
              <div
                className={`${styles.drawerGroupLabel} font-[family-name:var(--font-geist-sans)]`}
                style={{ color: group.color }}
              >
                {group.label} <span style={{ opacity: 0.6, fontWeight: 400 }}>({group.ids.length})</span>
              </div>
              {group.ids.map((id) => {
                const civ = GLOBE2_CIVS.find((c) => c.id === id)
                if (!civ) return null
                const isActive = civ.start <= year && civ.end >= year
                return (
                  <div
                    key={id}
                    className={`${styles.drawerItem} ${
                      selectedId === id ? styles.active : ''
                    }`}
                    style={{
                      opacity: isActive ? 1 : 0.4,
                      ...(selectedId === id ? { background: group.color } : {}),
                    }}
                    onClick={() => selectCiv(id)}
                  >
                    <span>{civ.name}</span>
                    <span
                      className={`${styles.itemDates} font-[family-name:var(--font-geist-mono)]`}
                    >
                      {formatYear(civ.start)}
                    </span>
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>

      {/* ── Zoom controls ─────────────────────────────────── */}
      <div className={styles.zoomCtrl}>
        <button onClick={() => handleZoom(1)} aria-label="Zoom in">
          +
        </button>
        <button onClick={() => handleZoom(-1)} aria-label="Zoom out">
          &minus;
        </button>
      </div>

      {/* ── Keyboard hints ────────────────────────────────── */}
      <div className={`${styles.hint} font-[family-name:var(--font-geist-sans)]`}>
        <kbd>Esc</kbd> close &nbsp;&nbsp; Scroll to zoom
      </div>

      {/* ── Timeline scrubber ─────────────────────────────── */}
      <div className={styles.timeline}>
        <div className={styles.timelineInner}>
          {/* Year display */}
          <div
            className={`${styles.timelineYear} font-[family-name:var(--font-geist-mono)]`}
          >
            {formatYear(year)}
          </div>

          {/* Active count */}
          <div
            className={`${styles.civCount} font-[family-name:var(--font-geist-mono)]`}
          >
            {activeCivs.length} active
          </div>

          {/* Density waveform */}
          <svg className={styles.densityChart} viewBox={`0 0 ${density.length} 24`} preserveAspectRatio="none">
            {density.map((v, i) => (
              <rect
                key={i}
                className={styles.densityBar}
                x={i}
                y={24 - (v / maxDensity) * 24}
                width={1}
                height={(v / maxDensity) * 24}
              />
            ))}
          </svg>

          {/* Era markers */}
          {ERAS.map((era) => {
            const pct = ((era.y - TIME_MIN) / (TIME_MAX - TIME_MIN)) * 100
            return (
              <span
                key={era.label}
                className={`${styles.eraMarker} font-[family-name:var(--font-geist-mono)]`}
                style={{ left: `${pct}%` }}
              >
                {era.label}
              </span>
            )
          })}

          {/* Slider */}
          <input
            className={styles.timelineSlider}
            type="range"
            min={TIME_MIN}
            max={TIME_MAX}
            step={10}
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  )
}
