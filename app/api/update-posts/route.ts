import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync } from 'fs'
import { join } from 'path'

export async function POST(request: NextRequest) {
  try {
    const { code } = await request.json()
    
    if (!code) {
      return NextResponse.json({ error: 'No code provided' }, { status: 400 })
    }

    // 写入文件
    const filePath = join(process.cwd(), 'data', 'samplePosts.ts')
    writeFileSync(filePath, code, 'utf8')

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating posts:', error)
    return NextResponse.json({ error: 'Failed to update posts' }, { status: 500 })
  }
}