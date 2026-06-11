import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['all-london-afloat', 'the-night-march', 'the-escape-in-the-fog']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
