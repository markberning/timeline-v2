import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['the-breadbasket-burning', 'the-dawn-surprise', 'sheridans-ride', 'the-counterattack', 'what-it-won']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
