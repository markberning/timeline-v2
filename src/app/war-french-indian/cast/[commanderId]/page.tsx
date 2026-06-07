import { FICommanderPage } from '@/components/mode/fi-commander-page'
import { fiCommanderIds } from '@/lib/french-indian-commanders'

export function generateStaticParams() {
  return fiCommanderIds.map(commanderId => ({ commanderId }))
}

export default async function Page({ params }: { params: Promise<{ commanderId: string }> }) {
  const { commanderId } = await params
  return <FICommanderPage id={commanderId} />
}
