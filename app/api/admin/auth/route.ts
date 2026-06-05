import { NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import crypto from "crypto"

function generateToken() {
  return crypto.randomBytes(32).toString("hex")
}

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json()
    const adminPassword = process.env.ADMIN_PASSWORD

    if (!adminPassword) {
      return NextResponse.json({ error: "Admin password not configured" }, { status: 500 })
    }

    if (password !== adminPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 })
    }

    const token = generateToken()
    const cookieStore = await cookies()

    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    })

    // Store token hash server-side in a cookie for verification
    const tokenHash = crypto.createHash("sha256").update(token).digest("hex")
    cookieStore.set("admin_token_hash", tokenHash, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24,
      path: "/",
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin_token")?.value
    const tokenHash = cookieStore.get("admin_token_hash")?.value

    if (!token || !tokenHash) {
      return NextResponse.json({ authenticated: false })
    }

    const expectedHash = crypto.createHash("sha256").update(token).digest("hex")
    const isValid = expectedHash === tokenHash

    return NextResponse.json({ authenticated: isValid })
  } catch {
    return NextResponse.json({ authenticated: false })
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies()
    cookieStore.delete("admin_token")
    cookieStore.delete("admin_token_hash")
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 })
  }
}
