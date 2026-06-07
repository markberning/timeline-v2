import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-winter-garrison', 'murray-marches-out', 'the-ships-in-the-river']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
