import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"
import { verifyAdmin } from "@/lib/admin-auth"

function extractYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /youtube\.com\/shorts\/([^&\n?#]+)/,
  ]
  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }
  return null
}

export async function POST(request: NextRequest) {
  try {
    const isAdmin = await verifyAdmin()
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const youtubeUrl = formData.get("youtubeUrl") as string

    if (!title || !youtubeUrl) {
      return NextResponse.json({ error: "Title and YouTube URL are required" }, { status: 400 })
    }

    const youtubeId = extractYoutubeId(youtubeUrl)
    if (!youtubeId) {
      return NextResponse.json({ error: "Invalid YouTube URL" }, { status: 400 })
    }

    const id = `tutorial-${Date.now()}`
    const thumbnail = `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`

    const metadata = {
      id,
      title,
      description: description || "",
      youtubeId,
      youtubeUrl,
      thumbnail,
      createdAt: new Date().toISOString(),
    }

    await put(`tutorials/${id}.json`, JSON.stringify(metadata), {
      access: "public",
      contentType: "application/json",
    })

    return NextResponse.json({ success: true, tutorial: metadata })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
