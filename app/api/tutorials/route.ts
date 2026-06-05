import { list } from "@vercel/blob"
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const { blobs } = await list({ prefix: "tutorials/" })
    
    const tutorials = await Promise.all(
      blobs
        .filter((blob) => blob.pathname.endsWith(".json"))
        .map(async (blob) => {
          try {
            const response = await fetch(blob.url, { cache: "no-store" })
            const data = await response.json()
            return { ...data, metadataUrl: blob.url }
          } catch {
            return null
          }
        })
    )

    const validTutorials = tutorials.filter(Boolean).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )

    return NextResponse.json({ tutorials: validTutorials })
  } catch (error) {
    console.error("Error fetching tutorials:", error)
    return NextResponse.json({ tutorials: [] })
  }
}
