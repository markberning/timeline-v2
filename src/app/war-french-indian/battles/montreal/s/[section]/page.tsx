import { SectionNarrative } from './section-narrative'

const SECTION_IDS = ['three-armies', 'no-relief-coming', 'the-end-of-new-france']

export function generateStaticParams() {
  return SECTION_IDS.map(section => ({ section }))
}

export default async function Page({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  return <SectionNarrative id={section} />
}
