'use client'

import { useEffect, useState, useSyncExternalStore } from 'react'

export type OfflineStatus = 'none' | 'downloading' | 'downloaded' | 'error'

export interface OfflineProgress {
  status: OfflineStatus
  done: number
  total: number
  failed: number
}

interface OfflineManifest {
  tlId: string
  label: string
  pageUrl: string
  maps: string[]
  thumbnails: string[]
  urls: string[]
}

const LS_PREFIX = 'offline:'

// Module-level store so every consumer of the hook sees the same state
// without prop-drilling. The store itself is a simple pub/sub.
type State = Record<string, OfflineProgress>
let state: State = {}
const listeners = new Set<() => void>()

function emit() {
  for (const l of listeners) l()
}

function setProgress(tlId: string, next: Partial<OfflineProgress>) {
  const prev = state[tlId] ?? { status: 'none', done: 0, total: 0, failed: 0 }
  state = { ...state, [tlId]: { ...prev, ...next } }
  // Mirror terminal states into localStorage so the UI can render
  // immediately on a cold start before the SW has replied.
  try {
    if (next.status === 'downloaded' || next.status === 'none' || next.status === 'error') {
      if (next.status === 'none') localStorage.removeItem(LS_PREFIX + tlId)
      else localStorage.setItem(LS_PREFIX + tlId, next.status)
    }
  } catch {}
  emit()
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function getSnapshot(): State {
  return state
}

function getServerSnapshot(): State {
  return {}
}

function readLocalStorageInitial() {
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (!k || !k.startsWith(LS_PREFIX)) continue
      const tlId = k.slice(LS_PREFIX.length)
      const val = localStorage.getItem(k) as OfflineStatus | null
      if (val === 'downloaded' || val === 'error') {
        state[tlId] = { status: val, done: 0, total: 0, failed: 0 }
      }
    }
  } catch {}
}

let initialized = false
let swReg: ServiceWorkerRegistration | null = null

async function getActiveWorker(): Promise<ServiceWorker | null> {
  if (!('serviceWorker' in navigator)) return null
  if (!swReg) {
    swReg = (await navigator.serviceWorker.getRegistration()) ?? null
  }
  if (!swReg) return null
  return swReg.active ?? swReg.waiting ?? swReg.installing ?? null
}

async function postToSW(message: unknown) {
  const worker = await getActiveWorker()
  if (!worker) {
    await navigator.serviceWorker?.ready.catch(() => {})
    const retry = await getActiveWorker()
    retry?.postMessage(message)
    return
  }
  worker.postMessage(message)
}

export async function registerServiceWorker() {
  if (typeof window === 'undefined') return
  if (!('serviceWorker' in navigator)) return
  if (initialized) return
  initialized = true
  readLocalStorageInitial()
  emit()
  // Register the SW in both dev and prod. In dev the SW's fetch
  // handler sees localhost and bails out (no runtime caching, no
  // interception), so HMR is untouched. The message handler still
  // runs, which is what makes per-TL downloads work on localhost.
  try {
    swReg = await navigator.serviceWorker.register('/sw.js', { scope: '/' })
  } catch (err) {
    console.warn('[offline] SW registration failed:', err)
    return
  }
  navigator.serviceWorker.addEventListener('message', (event) => {
    const data = event.data
    if (!data || typeof data !== 'object' || !data.type) return
    if (data.type === 'download-progress') {
      setProgress(data.tlId, {
        status: 'downloading',
        done: data.done,
        total: data.total,
        failed: data.failed ?? 0,
      })
    } else if (data.type === 'download-complete') {
      setProgress(data.tlId, {
        status: 'downloaded',
        done: data.total,
        total: data.total,
        failed: data.failed ?? 0,
      })
    } else if (data.type === 'delete-complete') {
      setProgress(data.tlId, { status: 'none', done: 0, total: 0, failed: 0 })
    } else if (data.type === 'check-result') {
      setProgress(data.tlId, {
        status: data.downloaded ? 'downloaded' : 'none',
      })
    } else if (data.type === 'downloaded-list') {
      const ids: string[] = data.tlIds ?? []
      const known = new Set(Object.keys(state))
      // Mark listed TLs as downloaded, clear any that were stored as
      // downloaded but are no longer in the SW's cache list (drift recovery).
      for (const id of ids) {
        setProgress(id, { status: 'downloaded' })
        known.delete(id)
      }
      for (const id of known) {
        if (state[id]?.status === 'downloaded') {
          setProgress(id, { status: 'none', done: 0, total: 0, failed: 0 })
        }
      }
    }
  })
  // Sync canonical state from the SW.
  await navigator.serviceWorker.ready.catch(() => {})
  postToSW({ type: 'list-downloaded' })
}

export async function downloadTl(tlId: string) {
  setProgress(tlId, { status: 'downloading', done: 0, total: 0, failed: 0 })
  let manifest: OfflineManifest
  try {
    const res = await fetch(`/offline/${tlId}.manifest.json`, { cache: 'no-cache' })
    if (!res.ok) throw new Error(`manifest ${res.status}`)
    manifest = await res.json()
  } catch (err) {
    console.warn('[offline] manifest fetch failed:', err)
    setProgress(tlId, { status: 'error' })
    return
  }
  setProgress(tlId, {
    status: 'downloading',
    done: 0,
    total: manifest.urls.length,
    failed: 0,
  })
  postToSW({ type: 'download-tl', tlId, manifest })
}

export async function deleteTl(tlId: string) {
  postToSW({ type: 'delete-tl', tlId })
}

export function useOfflineStatus(tlId: string): OfflineProgress {
  const snap = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
  return snap[tlId] ?? { status: 'none', done: 0, total: 0, failed: 0 }
}

// Full-state hook for components that render many rows and need to read
// per-row status without violating rules-of-hooks inside a map callback.
export function useAllOfflineStatus(): State {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

// Hook that registers the SW once on first mount of any consumer.
export function useRegisterOffline() {
  const [registered, setRegistered] = useState(false)
  useEffect(() => {
    registerServiceWorker().then(() => setRegistered(true))
  }, [])
  return registered
}
