import { del } from '@vercel/blob'
import { type NextRequest, NextResponse } from 'next/server'
import { verifyAdmin } from '@/lib/admin-auth'

export async function DELETE(request: NextRequest) {
  try {
    const isAdmin = await verifyAdmin()
    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const { metadataUrl, imageUrl } = await request.json()

    if (!metadataUrl) {
      return NextResponse.json({ error: 'No metadata URL provided' }, { status: 400 })
    }

    // Delete the metadata JSON file
    await del(metadataUrl)

    // If there's an image URL (for photos), delete that too
    if (imageUrl) {
      try {
        await del(imageUrl)
      } catch {
        // Image might not exist, continue anyway
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Delete error:', error)
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 })
  }
}
