import { writeFileSync } from 'fs'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

const CONTENT_DIR = join(process.cwd(), 'content')

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { civilizationId, rejections } = body

  if (!civilizationId || typeof rejections !== 'object') {
    return NextResponse.json({ error: 'Invalid data' }, { status: 400 })
  }

  const filename = `.review-results-${civilizationId}.json`
  const path = join(CONTENT_DIR, filename)
  writeFileSync(path, JSON.stringify(rejections, null, 2))

  return NextResponse.json({ saved: filename, count: Object.keys(rejections).length })
}
