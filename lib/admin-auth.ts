import { cookies } from "next/headers"
import crypto from "crypto"

export async function verifyAdmin(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin_token")?.value
    const tokenHash = cookieStore.get("admin_token_hash")?.value

    if (!token || !tokenHash) return false

    const expectedHash = crypto.createHash("sha256").update(token).digest("hex")
    return expectedHash === tokenHash
  } catch {
    return false
  }
}
