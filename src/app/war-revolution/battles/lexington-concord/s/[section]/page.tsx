import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-regulars-are-coming-out', 'the-green-the-bridge-and-the-road', 'a-siege-by-morning']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
