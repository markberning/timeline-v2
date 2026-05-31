import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-race', 'laurel-hill', 'the-mule-shoe', 'the-bloody-angle', 'the-23rd']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
