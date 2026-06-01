import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-mine', 'pulled-from-the-lead', 'the-pit', 'the-massacre', 'what-it-meant']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
