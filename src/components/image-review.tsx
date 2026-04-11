'use client'

import { useState, useEffect } from 'react'
import { Lightbox } from './lightbox'

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

type Filter = 'pending' | 'approved' | 'rejected' | 'all'

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

export function ImageReview({ civilizationId, events }: ImageReviewProps) {
  const rejectKey = `image-rejections-${civilizationId}`
  const approveKey = `image-approved-${civilizationId}`
  const [rejections, setRejections] = useState<Record<string, Rejection>>({})
  const [approved, setApproved] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)
  const [noteInput, setNoteInput] = useState<{ eventId: string; value: string } | null>(null)
  const [filter, setFilter] = useState<Filter>('pending')

  useEffect(() => {
    const savedR = localStorage.getItem(rejectKey)
    if (savedR) {
      const parsed = JSON.parse(savedR)
      if (Array.isArray(parsed)) {
        const converted: Record<string, Rejection> = {}
        for (const id of parsed) converted[id] = { reason: '' }
        setRejections(converted)
      } else {
        setRejections(parsed)
      }
    }
    const savedA = localStorage.getItem(approveKey)
    if (savedA) setApproved(new Set(JSON.parse(savedA)))
    setMounted(true)
  }, [rejectKey, approveKey])

  function saveRejections(next: Record<string, Rejection>) {
    setRejections(next)
    localStorage.setItem(rejectKey, JSON.stringify(next))
  }

  function saveApproved(next: Set<string>) {
    setApproved(next)
    localStorage.setItem(approveKey, JSON.stringify([...next]))
  }

  function approve(eventId: string) {
    const nextA = new Set(approved)
    nextA.add(eventId)
    saveApproved(nextA)
    // Remove from rejections if it was there
    if (rejections[eventId]) {
      const nextR = { ...rejections }
      delete nextR[eventId]
      saveRejections(nextR)
    }
  }

  function reject(eventId: string) {
    setNoteInput({ eventId, value: '' })
  }

  function confirmReject() {
    if (!noteInput) return
    const nextR = { ...rejections, [noteInput.eventId]: { reason: noteInput.value } }
    saveRejections(nextR)
    // Remove from approved if it was there
    if (approved.has(noteInput.eventId)) {
      const nextA = new Set(approved)
      nextA.delete(noteInput.eventId)
      saveApproved(nextA)
    }
    setNoteInput(null)
  }

  function restore(eventId: string) {
    const nextR = { ...rejections }
    delete nextR[eventId]
    saveRejections(nextR)
    const nextA = new Set(approved)
    nextA.delete(eventId)
    saveApproved(nextA)
  }

  function exportRejections() {
    const data = JSON.stringify(rejections, null, 2)
    navigator.clipboard.writeText(data).then(() => {
      alert(`Copied ${Object.keys(rejections).length} rejections to clipboard`)
    })
  }

  async function submitReview() {
    const res = await fetch('/api/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ civilizationId, rejections }),
    })
    const data = await res.json()
    if (res.ok) {
      alert(`Saved ${data.count} rejections to ${data.saved}`)
    } else {
      alert('Error saving: ' + data.error)
    }
  }

  if (!mounted) return null

  const rejectedCount = Object.keys(rejections).length
  const approvedCount = approved.size
  const pendingCount = events.length - rejectedCount - approvedCount

  const filtered = events.filter(evt => {
    const isRejected = !!rejections[evt.id]
    const isApproved = approved.has(evt.id)
    switch (filter) {
      case 'pending': return !isRejected && !isApproved
      case 'approved': return isApproved
      case 'rejected': return isRejected
      case 'all': return true
    }
  })

  return (
    <>
      {/* Filter tabs + stats */}
      <div className="sticky top-0 z-10 bg-background py-2 mb-4 border-b border-foreground/10">
        <div className="flex gap-2 mb-2 flex-wrap">
          {([
            ['pending', `Pending (${pendingCount})`],
            ['approved', `Approved (${approvedCount})`],
            ['rejected', `Rejected (${rejectedCount})`],
            ['all', `All (${events.length})`],
          ] as [Filter, string][]).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`text-xs px-3 py-1.5 rounded-full transition-colors ${
                filter === key
                  ? 'bg-foreground text-background font-medium'
                  : 'bg-foreground/10'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          {pendingCount === 0 && (
            <button
              onClick={submitReview}
              className="text-xs px-3 py-1.5 rounded-md bg-green-600 text-white font-medium hover:bg-green-700 transition-colors"
            >
              Submit review
            </button>
          )}
          {rejectedCount > 0 && (
            <button
              onClick={exportRejections}
              className="text-xs text-foreground/50 hover:text-foreground/80 transition-colors"
            >
              Copy rejections
            </button>
          )}
        </div>
      </div>

      <div className="space-y-6">
        {filtered.length === 0 && (
          <p className="text-sm text-foreground/50 py-8 text-center">No events in this category</p>
        )}
        {filtered.map(evt => {
          const isRejected = !!rejections[evt.id]
          const isApproved = approved.has(evt.id)
          return (
            <div
              key={evt.id}
              className={`rounded-lg border overflow-hidden transition-all ${
                isRejected
                  ? 'border-red-500/30 bg-red-500/5 opacity-40'
                  : isApproved
                  ? 'border-green-500/30'
                  : 'border-foreground/10'
              }`}
            >
              {/* Image */}
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

              {/* Event title */}
              <div className="px-3 pt-3 pb-1 border-b border-foreground/5 bg-foreground/[0.02]">
                <p className="text-xs text-foreground/40 uppercase tracking-wide mb-0.5">This image should represent</p>
                <p className="font-bold text-base">{evt.label}</p>
                <p className="text-xs text-foreground/50 mt-0.5 mb-2">
                  {formatYear(evt.year)} · {evt.category}
                </p>
              </div>

              {/* Caption */}
              <div className="px-3 py-2 border-b border-foreground/5">
                <p className="text-xs text-foreground/40 uppercase tracking-wide mb-0.5">Caption shown to reader</p>
                <p className="text-sm italic text-foreground/70">
                  {evt.imageCaption || <span className="text-red-400">No caption</span>}
                </p>
              </div>

              {/* Description */}
              <div className="px-3 py-3">
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {evt.description}
                </p>

                {/* Rejection note */}
                {isRejected && rejections[evt.id].reason && (
                  <p className="text-xs text-red-500 mt-2 italic">
                    Note: {rejections[evt.id].reason}
                  </p>
                )}

                {/* Action buttons */}
                <div className="flex gap-2 mt-3">
                  {isRejected ? (
                    <button
                      onClick={() => restore(evt.id)}
                      className="text-xs px-3 py-1.5 rounded-md bg-foreground/10 hover:bg-foreground/20 transition-colors"
                    >
                      Undo reject
                    </button>
                  ) : isApproved ? (
                    <button
                      onClick={() => restore(evt.id)}
                      className="text-xs px-3 py-1.5 rounded-md bg-foreground/10 hover:bg-foreground/20 transition-colors"
                    >
                      Undo approve
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => approve(evt.id)}
                        className="text-xs px-3 py-1.5 rounded-md bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => reject(evt.id)}
                        className="text-xs px-3 py-1.5 rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
                      >
                        Reject
                      </button>
                    </>
                  )}
                </div>
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
