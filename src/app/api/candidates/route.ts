import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

const CONTENT_DIR = join(process.cwd(), 'content')
const IMAGE_OVERRIDES = join(CONTENT_DIR, '.image-overrides.json')
const CAPTION_OVERRIDES = join(CONTENT_DIR, '.caption-overrides.json')

interface Approval {
  eventId: string
  filename: string
  caption: string
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const approved = body.approved as Approval[] | undefined
  if (!Array.isArray(approved)) {
    return NextResponse.json({ error: 'approved must be an array' }, { status: 400 })
  }

  const images: Record<string, string> = existsSync(IMAGE_OVERRIDES)
    ? JSON.parse(readFileSync(IMAGE_OVERRIDES, 'utf-8'))
    : {}
  const captions: Record<string, string> = existsSync(CAPTION_OVERRIDES)
    ? JSON.parse(readFileSync(CAPTION_OVERRIDES, 'utf-8'))
    : {}

  for (const a of approved) {
    if (!a.eventId || !a.filename) continue
    images[a.eventId] = a.filename
    if (a.caption) captions[a.eventId] = a.caption
  }

  writeFileSync(IMAGE_OVERRIDES, JSON.stringify(images, null, 2))
  writeFileSync(CAPTION_OVERRIDES, JSON.stringify(captions, null, 2))

  return NextResponse.json({ count: approved.length })
}
