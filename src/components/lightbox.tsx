'use client'

import { useState, useRef } from 'react'

interface LightboxProps {
  src: string
  alt: string
  onClose: () => void
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  const [scale, setScale] = useState(1)
  const [translate, setTranslate] = useState({ x: 0, y: 0 })
  const lastDistance = useRef(0)
  const lastCenter = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)

  function getDistance(touches: TouchList) {
    const dx = touches[1].clientX - touches[0].clientX
    const dy = touches[1].clientY - touches[0].clientY
    return Math.sqrt(dx * dx + dy * dy)
  }

  function getCenter(touches: TouchList) {
    return {
      x: (touches[0].clientX + touches[1].clientX) / 2,
      y: (touches[0].clientY + touches[1].clientY) / 2,
    }
  }

  function onTouchStart(e: React.TouchEvent) {
    if (e.touches.length === 2) {
      lastDistance.current = getDistance(e.touches)
      lastCenter.current = getCenter(e.touches)
    } else if (e.touches.length === 1 && scale > 1) {
      isDragging.current = true
      lastCenter.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
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
    } else if (e.touches.length === 1 && isDragging.current && scale > 1) {
      const dx = e.touches[0].clientX - lastCenter.current.x
      const dy = e.touches[0].clientY - lastCenter.current.y
      setTranslate(prev => ({ x: prev.x + dx, y: prev.y + dy }))
      lastCenter.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
  }

  function onTouchEnd() {
    isDragging.current = false
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
        onClick={() => { if (scale <= 1.05) onClose() }}
      />
    </div>
  )
}
