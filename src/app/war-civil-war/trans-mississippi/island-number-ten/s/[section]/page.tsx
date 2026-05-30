import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-gibraltar', 'the-canal', 'the-trap']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
