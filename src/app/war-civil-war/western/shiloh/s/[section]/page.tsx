import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-surprise', 'the-hornets-nest', 'the-second-day', 'the-reckoning']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
