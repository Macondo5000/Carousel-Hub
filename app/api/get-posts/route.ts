import { NextResponse } from 'next/server'
import { sampleLinkedInPosts } from '@/data/samplePosts'

export async function GET() {
  try {
    const posts = sampleLinkedInPosts.map(post => ({
      id: post.id,
      embedCode: post.embedCode,
      linkedinUrl: post.linkedinUrl
    }))

    return NextResponse.json({ posts })
  } catch (error) {
    console.error('Error getting posts:', error)
    return NextResponse.json({ error: 'Failed to get posts' }, { status: 500 })
  }
}