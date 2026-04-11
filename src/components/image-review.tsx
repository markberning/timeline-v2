'use client'

import { useState, useEffect } from 'react'

interface ReviewEvent {
  id: string
  label: string
  category: string
  thumbnailUrl: string
}

interface ImageReviewProps {
  civilizationId: string
  events: ReviewEvent[]
}

export function ImageReview({ civilizationId, events }: ImageReviewProps) {
  const storageKey = `image-rejections-${civilizationId}`
  const [rejected, setRejected] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) setRejected(new Set(JSON.parse(saved)))
    setMounted(true)
  }, [storageKey])

  function toggle(eventId: string) {
    setRejected(prev => {
      const next = new Set(prev)
      if (next.has(eventId)) next.delete(eventId)
      else next.add(eventId)
      localStorage.setItem(storageKey, JSON.stringify([...next]))
      return next
    })
  }

  function exportRejections() {
    const data = JSON.stringify([...rejected].sort(), null, 2)
    navigator.clipboard.writeText(data).then(() => {
      alert(`Copied ${rejected.size} rejected IDs to clipboard. Paste into content/.image-rejections.json`)
    })
  }

  if (!mounted) return null

  const approvedCount = events.length - rejected.size

  return (
    <>
      <div className="sticky top-0 z-10 bg-background py-2 mb-4 border-b border-foreground/10">
        <div className="flex items-center justify-between">
          <span className="text-sm">
            <span className="text-green-600 font-medium">{approvedCount} approved</span>
            {rejected.size > 0 && (
              <span className="text-red-500 font-medium ml-2">{rejected.size} rejected</span>
            )}
          </span>
          {rejected.size > 0 && (
            <button
              onClick={exportRejections}
              className="text-xs px-3 py-1.5 rounded-md bg-foreground/10 hover:bg-foreground/20 transition-colors"
            >
              Copy rejections
            </button>
          )}
        </div>
      </div>

      <div className="space-y-3">
        {events.map(evt => {
          const isRejected = rejected.has(evt.id)
          return (
            <button
              key={evt.id}
              onClick={() => toggle(evt.id)}
              className={`w-full flex gap-3 p-2 rounded-lg border transition-all text-left ${
                isRejected
                  ? 'border-red-500/30 bg-red-500/5 opacity-50'
                  : 'border-foreground/10'
              }`}
            >
              <img
                src={evt.thumbnailUrl}
                alt={evt.label}
                className="w-20 h-20 object-cover rounded-md shrink-0 bg-foreground/5"
              />
              <div className="min-w-0 py-1">
                <p className="font-medium text-sm">{evt.label}</p>
                <p className="text-xs text-foreground/50 mt-0.5">{evt.category}</p>
                {isRejected && (
                  <p className="text-xs text-red-500 mt-1">Rejected — tap to restore</p>
                )}
              </div>
            </button>
          )
        })}
      </div>
    </>
  )
}
