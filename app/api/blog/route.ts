import { list } from '@vercel/blob'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const { blobs } = await list({ prefix: 'blog/posts/' })

    const posts = await Promise.all(
      blobs
        .filter((blob) => blob.pathname.endsWith('.json'))
        .map(async (blob) => {
          try {
            const response = await fetch(blob.url)
            const data = await response.json()
            return { ...data, metadataUrl: blob.url }
          } catch {
            return null
          }
        })
    )

    const validPosts = posts
      .filter(Boolean)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return NextResponse.json({ posts: validPosts })
  } catch (error) {
    console.error('Error listing blog posts:', error)
    return NextResponse.json({ posts: [] })
  }
}
