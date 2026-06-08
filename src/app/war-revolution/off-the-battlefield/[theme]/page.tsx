// American Revolution — an off-the-battlefield THEME page (war #3). One dynamic route
// over the 13 themes in the config; static-exported via generateStaticParams (all 13
// prerender, built ones as the gated chapter, unbuilt ones as a graceful placeholder).
// Server wrapper (so it can export generateStaticParams); the UI is the client
// ThemeLanding (it calls warCrumbs, a client-module function). Mirrors the F&I route.

import { REVOLUTION as W } from '@/lib/wars/revolution'
import { ThemeLanding } from './theme-landing'

const slugOf = (href?: string) => href?.split('/').pop() ?? ''

export function generateStaticParams() {
  return W.themes.map(t => ({ theme: slugOf(t.href) })).filter(p => p.theme)
}

export default async function ThemePage({ params }: { params: Promise<{ theme: string }> }) {
  const { theme } = await params
  return <ThemeLanding slug={theme} />
}
