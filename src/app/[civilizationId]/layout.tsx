import { getNarrative } from '@/lib/data'
import { getAccentColors } from '@/lib/accent-colors'

export default async function CivilizationLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ civilizationId: string }>
}) {
  const { civilizationId } = await params
  const narrative = getNarrative(civilizationId)
  const colors = getAccentColors(civilizationId)

  return (
    <div className="accent-scope" style={{
      '--accent': colors.base,
      '--accent-text': colors.text,
      '--accent-badge': colors.badge,
    } as React.CSSProperties}>
      {children}
    </div>
  )
}
