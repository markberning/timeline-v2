'use client'

// The War vertical's front door (the all-wars escalating spine). REDESIGN
// (feat/war-redesign): the new war skin — editorial header (with the all-wars
// wordmark) over the escalating war-cards spine. Back-arrow returns to the app
// home; the slide-in menu handles cross-vertical nav.

import '../war-civil-war/war-skin.css'
import { WarHeader } from '@/components/mode/war-header'
import { WarFrontDoor } from '@/components/mode/war-front-door'

export default function WarHome() {
  return (
    <div className="war-skin">
      <WarHeader backHref="/" title="American Wars" subtitle="Stuff Happened · War" />
      <WarFrontDoor />
    </div>
  )
}
