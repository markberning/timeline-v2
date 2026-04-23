'use client'
import dynamic from 'next/dynamic'

const Globe2 = dynamic(() => import('@/components/globe2'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-[var(--background)]" />,
})

export default function GlobePage() {
  return <Globe2 />
}
