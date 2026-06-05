import { put } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'
import { verifyAdmin } from '@/lib/admin-auth'

export async function POST(request: NextRequest) {
  try {
    const isAdmin = await verifyAdmin()
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const formData = await request.formData()
    const file = formData.get('file') as File
    const title = formData.get('title') as string
    const petType = formData.get('petType') as string // 'dog' or 'cat'
    const mediaType = formData.get('mediaType') as string // 'photo' or 'video'
    const youtubeUrl = formData.get('youtubeUrl') as string | null

    // For YouTube videos, we don't need a file upload
    if (mediaType === 'video' && youtubeUrl) {
      // Extract video ID from YouTube URL
      const videoId = extractYouTubeId(youtubeUrl)
      if (!videoId) {
        return NextResponse.json({ error: 'Invalid YouTube URL' }, { status: 400 })
      }

      // Store video metadata as a JSON file in blob
      const metadata = {
        id: `video-${Date.now()}`,
        title: title || 'Untitled Video',
        petType: petType || 'dog',
        mediaType: 'video',
        youtubeUrl,
        youtubeId: videoId,
        thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
        createdAt: new Date().toISOString(),
      }

      const blob = await put(
        `gallery/videos/${metadata.id}.json`,
        JSON.stringify(metadata),
        { access: 'public', contentType: 'application/json' }
      )

      return NextResponse.json({
        success: true,
        item: { ...metadata, metadataUrl: blob.url },
      })
    }

    // For photos, upload the file
    if (!file) {
      return NextResponse.json({ error: 'No file provided' }, { status: 400 })
    }

    const fileExtension = file.name.split('.').pop()?.toLowerCase()
    const timestamp = Date.now()
    const filename = `gallery/photos/${petType}/${timestamp}.${fileExtension}`

    const blob = await put(filename, file, {
      access: 'public',
    })

    // Store photo metadata
    const metadata = {
      id: `photo-${timestamp}`,
      title: title || file.name,
      petType: petType || 'dog',
      mediaType: 'photo',
      url: blob.url,
      filename: file.name,
      size: file.size,
      createdAt: new Date().toISOString(),
    }

    const metadataBlob = await put(
      `gallery/photos/${metadata.id}.json`,
      JSON.stringify(metadata),
      { access: 'public', contentType: 'application/json' }
    )

    return NextResponse.json({
      success: true,
      item: { ...metadata, metadataUrl: metadataBlob.url },
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}

function extractYouTubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\s?]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ]
  
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match?.[1]) return match[1]
  }
  return null
}
