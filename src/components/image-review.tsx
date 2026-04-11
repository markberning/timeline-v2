'use client'

import { useState, useEffect, useRef } from 'react'

interface ReviewEvent {
  id: string
  label: string
  year: number
  description: string
  category: string
  thumbnailUrl: string
  imageCaption: string | null
}

interface Rejection {
  reason: string
}

interface ImageReviewProps {
  civilizationId: string
  events: ReviewEvent[]
}

function formatYear(year: number): string {
  return year < 0 ? `${Math.abs(year)} BCE` : `${year} CE`
}

function getLargeUrl(thumbUrl: string): string {
  return thumbUrl.replace(/\/\d+px-/, '/800px-')
}

function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
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
      />
    </div>
  )
}

export function ImageReview({ civilizationId, events }: ImageReviewProps) {
  const storageKey = `image-rejections-${civilizationId}`
  const [rejections, setRejections] = useState<Record<string, Rejection>>({})
  const [mounted, setMounted] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const [noteInput, setNoteInput] = useState<{ eventId: string; value: string } | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) {
      const parsed = JSON.parse(saved)
      // Handle old format (array of IDs) → convert to new format
      if (Array.isArray(parsed)) {
        const converted: Record<string, Rejection> = {}
        for (const id of parsed) converted[id] = { reason: '' }
        setRejections(converted)
      } else {
        setRejections(parsed)
      }
    }
    setMounted(true)
  }, [storageKey])

  function save(next: Record<string, Rejection>) {
    setRejections(next)
    localStorage.setItem(storageKey, JSON.stringify(next))
  }

  function reject(eventId: string) {
    // Open note input
    setNoteInput({ eventId, value: '' })
  }

  function confirmReject() {
    if (!noteInput) return
    const next = { ...rejections, [noteInput.eventId]: { reason: noteInput.value } }
    save(next)
    setNoteInput(null)
  }

  function restore(eventId: string) {
    const next = { ...rejections }
    delete next[eventId]
    save(next)
  }

  function exportRejections() {
    const data = JSON.stringify(rejections, null, 2)
    navigator.clipboard.writeText(data).then(() => {
      alert(`Copied ${Object.keys(rejections).length} rejections to clipboard`)
    })
  }

  if (!mounted) return null

  const rejectedCount = Object.keys(rejections).length
  const approvedCount = events.length - rejectedCount

  return (
    <>
      <div className="sticky top-0 z-10 bg-background py-2 mb-4 border-b border-foreground/10">
        <div className="flex items-center justify-between">
          <span className="text-sm">
            <span className="text-green-600 font-medium">{approvedCount} approved</span>
            {rejectedCount > 0 && (
              <span className="text-red-500 font-medium ml-2">{rejectedCount} rejected</span>
            )}
          </span>
          {rejectedCount > 0 && (
            <button
              onClick={exportRejections}
              className="text-xs px-3 py-1.5 rounded-md bg-foreground/10 hover:bg-foreground/20 transition-colors"
            >
              Copy rejections
            </button>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {events.map(evt => {
          const rejection = rejections[evt.id]
          const isRejected = !!rejection
          return (
            <div
              key={evt.id}
              className={`rounded-lg border overflow-hidden transition-all ${
                isRejected
                  ? 'border-red-500/30 bg-red-500/5 opacity-40'
                  : 'border-foreground/10'
              }`}
            >
              {/* Image — tap to open lightbox */}
              <div
                onClick={() => setLightbox({ src: getLargeUrl(evt.thumbnailUrl), alt: evt.label })}
                className="w-full cursor-pointer"
              >
                <img
                  src={evt.thumbnailUrl}
                  alt={evt.label}
                  loading="lazy"
                  className="w-full bg-foreground/5"
                />
              </div>

              {/* Caption preview — what the reader will see */}
              <div className="px-3 py-2 bg-foreground/[0.03] border-b border-foreground/5">
                <p className="text-xs text-foreground/40 uppercase tracking-wide mb-0.5">Caption shown to reader</p>
                <p className="text-sm italic text-foreground/70">
                  {evt.imageCaption || <span className="text-red-400">No caption — will show event label only</span>}
                </p>
              </div>

              {/* Event details */}
              <div className="px-3 py-3">
                <p className="font-semibold text-sm">{evt.label}</p>
                <p className="text-xs text-foreground/50 mt-0.5">
                  {formatYear(evt.year)} · {evt.category}
                </p>
                <p className="text-sm text-foreground/70 mt-1.5 leading-relaxed">
                  {evt.description}
                </p>

                {/* Rejection note */}
                {isRejected && rejection.reason && (
                  <p className="text-xs text-red-500 mt-2 italic">
                    Note: {rejection.reason}
                  </p>
                )}

                {/* Reject/restore button */}
                {isRejected ? (
                  <button
                    onClick={() => restore(evt.id)}
                    className="mt-3 text-xs px-3 py-1.5 rounded-md bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-colors"
                  >
                    Restore image
                  </button>
                ) : (
                  <button
                    onClick={() => reject(evt.id)}
                    className="mt-3 text-xs px-3 py-1.5 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                  >
                    Reject image
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Note input modal */}
      {noteInput && (
        <>
          <div className="fixed inset-0 z-40 bg-black/30" onClick={() => setNoteInput(null)} />
          <div className="fixed bottom-0 inset-x-0 z-50 bg-background rounded-t-2xl shadow-lg animate-slide-up" style={{ width: '100%', maxWidth: '100%' }}>
            <div className="px-4 py-5" style={{ maxWidth: '100%', boxSizing: 'border-box' }}>
              <h3 className="font-semibold mb-2 truncate">
                Reject: {events.find(e => e.id === noteInput.eventId)?.label}
              </h3>
              <textarea
                autoFocus
                value={noteInput.value}
                onChange={e => setNoteInput({ ...noteInput, value: e.target.value })}
                placeholder="Why? (optional)"
                className="block w-full p-3 rounded-lg border border-foreground/20 bg-background resize-none h-20 focus:outline-none focus:border-foreground/40"
                style={{ fontSize: '16px', maxWidth: '100%', boxSizing: 'border-box' }}
              />
              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => setNoteInput(null)}
                  className="flex-1 py-2 rounded-lg text-sm border border-foreground/20"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmReject}
                  className="flex-1 py-2 rounded-lg text-sm bg-red-500 text-white font-medium"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {lightbox && (
        <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  )
}
