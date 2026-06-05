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
    const title = formData.get('title') as string
    const excerpt = formData.get('excerpt') as string
    const content = formData.get('content') as string
    const tag = formData.get('tag') as string
    const image = formData.get('image') as File | null

    if (!title || !content) {
      return NextResponse.json({ error: 'Title and content are required' }, { status: 400 })
    }

    // Create slug from title
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')

    const timestamp = Date.now()
    let imageUrl = ''

    // Upload image if provided
    if (image && image.size > 0) {
      const ext = image.name.split('.').pop()?.toLowerCase()
      const imageBlob = await put(`blog/images/${slug}-${timestamp}.${ext}`, image, {
        access: 'public',
      })
      imageUrl = imageBlob.url
    }

    // Split content into paragraphs
    const paragraphs = content
      .split('\n')
      .map((p: string) => p.trim())
      .filter((p: string) => p.length > 0)

    const post = {
      id: `post-${timestamp}`,
      slug: `${slug}-${timestamp}`,
      title,
      excerpt: excerpt || paragraphs[0]?.slice(0, 160) + '...',
      content: paragraphs,
      tag: tag || 'General',
      image: imageUrl,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      readTime: `${Math.max(1, Math.ceil(content.split(' ').length / 200))} min read`,
      author: 'Vanity Fur Pet Parlor',
      createdAt: new Date().toISOString(),
    }

    const metadataBlob = await put(
      `blog/posts/${post.id}.json`,
      JSON.stringify(post),
      { access: 'public', contentType: 'application/json' }
    )

    return NextResponse.json({
      success: true,
      post: { ...post, metadataUrl: metadataBlob.url },
    })
  } catch (error) {
    console.error('Blog create error:', error)
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
}
