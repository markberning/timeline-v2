// French and Indian War — an off-the-battlefield THEME page (war #2). One dynamic
// route over the 8 themes in the config; static-exported via generateStaticParams (all
// 8 prerender, built ones as the gated chapter, unbuilt ones as a graceful placeholder).
// Server wrapper (so it can export generateStaticParams); the UI is the client
// ThemeLanding (it calls warCrumbs, a client-module function).

import { FRENCH_INDIAN as W } from '@/lib/wars/french-indian'
import { ThemeLanding } from './theme-landing'

const slugOf = (href?: string) => href?.split('/').pop() ?? ''

export function generateStaticParams() {
  return W.themes.map(t => ({ theme: slugOf(t.href) }))
}

export default async function ThemePage({ params }: { params: Promise<{ theme: string }> }) {
  const { theme } = await params
  return <ThemeLanding slug={theme} />
}
