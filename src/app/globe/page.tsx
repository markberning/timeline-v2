'use client'

import dynamic from 'next/dynamic'

const GlobeView = dynamic(() => import('@/components/globe-view'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[#1a1917]" />,
})

export default function GlobePage() {
  return <GlobeView />
}
