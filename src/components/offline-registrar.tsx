'use client'

import { useEffect } from 'react'
import { registerServiceWorker } from '@/lib/offline'

// Tiny mount-once wrapper that registers the service worker on the
// client. Rendered inside RootLayout so the SW is alive whenever the
// user has any page of the app open, not only the navigator.
export function OfflineRegistrar() {
  useEffect(() => {
    registerServiceWorker()
  }, [])
  return null
}
