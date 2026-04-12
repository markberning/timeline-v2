'use client'

import { useState } from 'react'

interface Candidate {
  eventId: string
  label: string
  filename: string
  caption: string
  thumbnailUrl: string | null
}

interface Props {
  civilizationId: string
  candidates: Candidate[]
}

type Decision = 'pending' | 'approved' | 'rejected'

export function CandidateReview({ civilizationId, candidates }: Props) {
  const storageKey = `candidate-decisions-${civilizationId}`
  const [decisions, setDecisions] = useState<Record<string, Decision>>(() => {
    if (typeof window === 'undefined') return {}
    try {
      const raw = localStorage.getItem(storageKey)
      return raw ? JSON.parse(raw) : {}
    } catch { return {} }
  })
  const [captions, setCaptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {}
    for (const c of candidates) initial[c.eventId] = c.caption
    return initial
  })
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  function save(next: Record<string, Decision>) {
    setDecisions(next)
    try { localStorage.setItem(storageKey, JSON.stringify(next)) } catch {}
  }

  function setDecision(id: string, d: Decision) {
    save({ ...decisions, [id]: d })
  }

  async function submit() {
    setSubmitting(true)
    setResult(null)
    const approved = candidates
      .filter(c => decisions[c.eventId] === 'approved')
      .map(c => ({ eventId: c.eventId, filename: c.filename, caption: captions[c.eventId] }))
    try {
      const res = await fetch('/api/candidates', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ approved }),
      })
      const data = await res.json()
      if (res.ok) setResult(`Saved ${data.count} approvals. Run \`npm run parse\` to pick them up.`)
      else setResult(`Error: ${data.error}`)
    } catch (e) {
      setResult(`Error: ${e instanceof Error ? e.message : 'unknown'}`)
    } finally {
      setSubmitting(false)
    }
  }

  const approvedCount = Object.values(decisions).filter(d => d === 'approved').length
  const rejectedCount = Object.values(decisions).filter(d => d === 'rejected').length
  const pendingCount = candidates.length - approvedCount - rejectedCount

  return (
    <>
      <div className="sticky top-0 z-10 -mx-4 px-4 py-2 mb-4 bg-background border-b border-foreground/10 text-xs flex items-center gap-3">
        <span className="text-foreground/60">Pending <b className="text-foreground">{pendingCount}</b></span>
        <span className="text-green-600">Approved <b>{approvedCount}</b></span>
        <span className="text-red-600">Rejected <b>{rejectedCount}</b></span>
        <button
          onClick={submit}
          disabled={submitting || approvedCount === 0}
          className="ml-auto px-3 py-1 bg-foreground text-background rounded font-medium disabled:opacity-40"
        >
          {submitting ? 'Saving…' : `Save ${approvedCount}`}
        </button>
      </div>
      {result && <div className="mb-4 p-3 rounded bg-foreground/5 text-sm">{result}</div>}

      <div className="space-y-6">
        {candidates.map(c => {
          const d = decisions[c.eventId] ?? 'pending'
          return (
            <div
              key={c.eventId}
              className={`rounded-lg border p-3 ${d === 'approved' ? 'border-green-500 bg-green-500/5' : d === 'rejected' ? 'border-red-500 bg-red-500/5' : 'border-foreground/15'}`}
            >
              <h3 className="font-semibold">{c.label}</h3>
              <p className="text-xs text-foreground/50 mb-3 break-all">{c.filename}</p>

              {c.thumbnailUrl ? (
                <img
                  src={c.thumbnailUrl}
                  alt={c.label}
                  className="w-full rounded bg-foreground/5 mb-3 max-h-[400px] object-contain"
                />
              ) : (
                <div className="w-full py-10 text-center rounded bg-foreground/5 mb-3 text-sm text-foreground/50">
                  No thumbnail fetched
                </div>
              )}

              <textarea
                value={captions[c.eventId] ?? ''}
                onChange={(e) => setCaptions({ ...captions, [c.eventId]: e.target.value })}
                className="w-full text-sm p-2 rounded border border-foreground/15 bg-background leading-snug"
                rows={3}
              />

              <div className="flex gap-2 mt-3">
                <button
                  onClick={() => setDecision(c.eventId, 'approved')}
                  className={`flex-1 py-2 rounded font-medium border-2 ${d === 'approved' ? 'bg-green-600 text-white border-green-600' : 'border-green-600 text-green-700 dark:text-green-400'}`}
                >
                  ✓ Approve
                </button>
                <button
                  onClick={() => setDecision(c.eventId, 'rejected')}
                  className={`flex-1 py-2 rounded font-medium border-2 ${d === 'rejected' ? 'bg-red-600 text-white border-red-600' : 'border-red-600 text-red-700 dark:text-red-400'}`}
                >
                  ✗ Reject
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
