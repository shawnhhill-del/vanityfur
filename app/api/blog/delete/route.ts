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

    await del(metadataUrl)

    if (imageUrl) {
      try {
        await del(imageUrl)
      } catch {
        // Image might not exist
      }
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Blog delete error:', error)
    return NextResponse.json({ error: 'Delete failed' }, { status: 500 })
  }
}
