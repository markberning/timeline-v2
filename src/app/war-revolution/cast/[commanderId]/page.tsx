import { RevCommanderPage } from '@/components/mode/rev-commander-page'
import { revCommanderIds } from '@/lib/revolution-commanders'

export function generateStaticParams() {
  return revCommanderIds.map(commanderId => ({ commanderId }))
}

export default async function Page({ params }: { params: Promise<{ commanderId: string }> }) {
  const { commanderId } = await params
  return <RevCommanderPage id={commanderId} />
}
