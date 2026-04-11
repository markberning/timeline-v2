import { getNarrative } from '@/lib/data'

export default async function CivilizationLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ civilizationId: string }>
}) {
  const { civilizationId } = await params
  const narrative = getNarrative(civilizationId)

  return (
    <div style={{ '--accent': narrative.accentColor } as React.CSSProperties}>
      {children}
    </div>
  )
}
