import { del } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"
import { verifyAdmin } from "@/lib/admin-auth"

export async function DELETE(request: NextRequest) {
  try {
    const isAdmin = await verifyAdmin()
    if (!isAdmin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { metadataUrl } = await request.json()

    if (metadataUrl) {
      await del(metadataUrl)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Delete error:", error)
    return NextResponse.json({ error: "Delete failed" }, { status: 500 })
  }
}
