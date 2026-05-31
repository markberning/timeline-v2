import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-army-under-the-mountain', 'into-the-fog', 'the-battle-above-the-clouds', 'the-flag-at-dawn']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
