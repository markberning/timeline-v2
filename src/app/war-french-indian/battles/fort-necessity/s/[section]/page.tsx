import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['a-fort-named-necessity', 'the-day-it-rained', 'the-signature-in-the-rain']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
