// App root — the home for the whole app: brand + the four threads
// (Civilizations / Wars / Art / Music) + an "On This Day" feed. The Civ home
// (timeline/chains) now lives at /civ; the legacy ModeShell home is at /classic.
import { AppHome } from '@/components/app-home/app-home'

export default function Home() {
  return <AppHome />
}
