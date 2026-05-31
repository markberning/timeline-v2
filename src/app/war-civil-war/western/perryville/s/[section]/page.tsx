import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-invasion', 'the-fight-for-water', 'the-acoustic-shadow', 'the-victory-and-the-retreat', 'the-reckoning']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
