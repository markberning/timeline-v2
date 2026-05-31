import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['spring-hill', 'the-open-ground', 'the-cotton-gin', 'what-it-cost']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
