import { ModeShell } from '@/components/mode/mode-shell'

// The War vertical's front door (the all-wars escalating spine) at a stable
// URL. The breadcrumb's "War" mode crumb points here; the ModeSwitcher at the
// top still lets you hop to Civ/Art/Music. (Civ's front door is `/`.)
export default function WarHome() {
  return <ModeShell initialMode="war" />
}
