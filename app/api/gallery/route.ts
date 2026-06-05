import { list } from '@vercel/blob'
import { NextResponse } from 'next/server'

export interface GalleryItem {
  id: string
  title: string
  petType: 'dog' | 'cat'
  mediaType: 'photo' | 'video'
  url?: string
  youtubeUrl?: string
  youtubeId?: string
  thumbnail?: string
  filename?: string
  size?: number
  createdAt: string
  metadataUrl?: string
}

export async function GET() {
  try {
    // List all metadata files from gallery folder
    const { blobs: photoBlobs } = await list({ prefix: 'gallery/photos/' })
    const { blobs: videoBlobs } = await list({ prefix: 'gallery/videos/' })
    
    const allMetadataBlobs = [...photoBlobs, ...videoBlobs].filter(
      blob => blob.pathname.endsWith('.json')
    )

    // Fetch metadata for each item
    const items: GalleryItem[] = await Promise.all(
      allMetadataBlobs.map(async (blob) => {
        try {
          const response = await fetch(blob.url)
          const metadata = await response.json()
          return { ...metadata, metadataUrl: blob.url }
        } catch {
          return null
        }
      })
    )

    // Filter out null values and sort by createdAt (newest first)
    const validItems = items
      .filter((item): item is GalleryItem => item !== null)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

    return NextResponse.json({ items: validItems })
  } catch (error) {
    console.error('Error listing gallery:', error)
    return NextResponse.json({ error: 'Failed to list gallery' }, { status: 500 })
  }
}
