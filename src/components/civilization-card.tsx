import Link from 'next/link'

interface CivilizationCardProps {
  id: string
  label: string
  accentColor: string
  chapterCount: number
}

export function CivilizationCard({ id, label, accentColor, chapterCount }: CivilizationCardProps) {
  return (
    <Link
      href={`/${id}`}
      className="block rounded-lg border border-foreground/10 p-5 transition-colors hover:border-foreground/20"
      style={{ borderLeftColor: accentColor, borderLeftWidth: 4 }}
    >
      <h2 className="text-lg font-semibold">{label}</h2>
      <p className="text-sm text-foreground/50 mt-1">{chapterCount} chapters</p>
    </Link>
  )
}
