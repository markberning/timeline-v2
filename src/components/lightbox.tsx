'use client'

import { useState, useRef } from 'react'

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
}

const DOUBLE_TAP_SCALE = 2.5
const DOUBLE_TAP_MS = 300
const SWIPE_DOWN_THRESHOLD = 80

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  const [scale, setScale] = useState(1)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const lastDistance = useRef(0)
  const lastCenter = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const lastTapTime = useRef(0)
  const lastTapPoint = useRef({ x: 0, y: 0 })
  const touchStartPoint = useRef<{ x: number; y: number } | null>(null)
  const touchMoved = useRef(false)

  function getDistance(touches: React.TouchList) {
    const dx = touches[1].clientX - touches[0].clientX
    const dy = touches[1].clientY - touches[0].clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  function getCenter(touches: React.TouchList) {
    return {
      x: (touches[0].clientX + touches[1].clientX) / 2,
      y: (touches[0].clientY + touches[1].clientY) / 2,
    }
  }

  function zoomTo(targetScale: number, point: { x: number; y: number }) {
    // Zoom around the tap point: keep that point visually stable.
    const rect = { cx: window.innerWidth / 2, cy: window.innerHeight / 2 }
    const offsetX = point.x - rect.cx
    const offsetY = point.y - rect.cy
    if (targetScale === 1) {
      setScale(1)
      setTranslate({ x: 0, y: 0 })
    } else {
      setScale(targetScale)
      setTranslate({ x: -offsetX * (targetScale - 1) / targetScale, y: -offsetY * (targetScale - 1) / targetScale })
    }
  }

  function onTouchStart(e: React.TouchEvent) {
    if (e.touches.length === 2) {
      lastDistance.current = getDistance(e.touches)
      lastCenter.current = getCenter(e.touches)
      touchStartPoint.current = null
      return
    }
    if (e.touches.length === 1) {
      const t = e.touches[0]
      touchStartPoint.current = { x: t.clientX, y: t.clientY }
      touchMoved.current = false
      if (scale > 1) {
        isDragging.current = true
        lastCenter.current = { x: t.clientX, y: t.clientY }
      }
    }
  }

  function onTouchMove(e: React.TouchEvent) {
    if (e.touches.length === 2) {
      e.preventDefault()
      const dist = getDistance(e.touches)
      const newScale = Math.max(1, Math.min(5, scale * (dist / lastDistance.current)))
      setScale(newScale)
      lastDistance.current = dist
      const center = getCenter(e.touches)
      setTranslate(prev => ({
        x: prev.x + center.x - lastCenter.current.x,
        y: prev.y + center.y - lastCenter.current.y,
      }))
      lastCenter.current = center
      return
    }
    if (e.touches.length === 1) {
      const t = e.touches[0]
      if (touchStartPoint.current) {
        const dx = t.clientX - touchStartPoint.current.x
        const dy = t.clientY - touchStartPoint.current.y
        if (Math.abs(dx) > 8 || Math.abs(dy) > 8) touchMoved.current = true
      }
      if (isDragging.current && scale > 1) {
        const dx = t.clientX - lastCenter.current.x
        const dy = t.clientY - lastCenter.current.y
        setTranslate(prev => ({ x: prev.x + dx, y: prev.y + dy }))
        lastCenter.current = { x: t.clientX, y: t.clientY }
      }
    }
  }

  function onTouchEnd(e: React.TouchEvent) {
    isDragging.current = false
    const start = touchStartPoint.current
    touchStartPoint.current = null

    // Detect tap (no movement)
    if (start && !touchMoved.current && e.changedTouches.length === 1) {
      const t = e.changedTouches[0]
      const now = Date.now()
      const dt = now - lastTapTime.current
      const prev = lastTapPoint.current
      const near = Math.abs(t.clientX - prev.x) < 30 && Math.abs(t.clientY - prev.y) < 30
      if (dt < DOUBLE_TAP_MS && near) {
        // Double tap → toggle zoom
        if (scale > 1.05) {
          zoomTo(1, { x: t.clientX, y: t.clientY })
        } else {
          zoomTo(DOUBLE_TAP_SCALE, { x: t.clientX, y: t.clientY })
        }
        lastTapTime.current = 0
        return
      }
      lastTapTime.current = now
      lastTapPoint.current = { x: t.clientX, y: t.clientY }
      return
    }

    // Swipe down to dismiss (only at base scale)
    if (start && scale <= 1.05 && e.changedTouches.length === 1) {
      const t = e.changedTouches[0]
      const dx = t.clientX - start.x
      const dy = t.clientY - start.y
      if (dy > SWIPE_DOWN_THRESHOLD && Math.abs(dy) > Math.abs(dx) * 1.2) {
        onClose()
        return
      }
    }

    // Snap back to 1x if almost there
    if (scale <= 1.05) {
      setScale(1)
      setTranslate({ x: 0, y: 0 })
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
      onClick={(e) => { if (e.target === e.currentTarget && scale <= 1.05) onClose() }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: 'none' }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center text-white/70 text-2xl"
        aria-label="Close"
      >
        ×
      </button>
      <img
        src={src}
        alt={alt}
        className="max-w-full max-h-full object-contain"
        style={{ transform: `translate(${translate.x}px, ${translate.y}px) scale(${scale})` }}
        draggable={false}
      />
    </div>
  )
}
