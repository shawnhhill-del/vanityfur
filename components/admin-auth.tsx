"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock, LogOut, Loader2 } from "lucide-react"

export function AdminAuth({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    checkAuth()
  }, [])

  async function checkAuth() {
    try {
      const res = await fetch("/api/admin/auth")
      const data = await res.json()
      setAuthenticated(data.authenticated)
    } catch {
      setAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    setError("")

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      })

      if (res.ok) {
        setAuthenticated(true)
        setPassword("")
      } else {
        setError("Invalid password")
      }
    } catch {
      setError("Login failed")
    } finally {
      setSubmitting(false)
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" })
    setAuthenticated(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-xl">
            <div className="flex flex-col items-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl font-serif font-semibold text-foreground">Admin Login</h1>
              <p className="text-sm text-muted-foreground mt-1">Vanity Fur Pet Parlor</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-background border-border"
                autoFocus
              />
              {error && (
                <p className="text-sm text-red-500 text-center">{error}</p>
              )}
              <Button
                type="submit"
                className="w-full h-12 rounded-full"
                disabled={submitting || !password}
              >
                {submitting ? (
                  <Loader2 className="w-4 h-4 animate-spin mr-2" />
                ) : (
                  <Lock className="w-4 h-4 mr-2" />
                )}
                Sign In
              </Button>
            </form>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Admin toolbar */}
      <div className="sticky top-0 z-50 bg-card border-b border-border px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <span className="text-sm font-medium text-foreground">Admin Mode</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleLogout}
          className="text-muted-foreground hover:text-foreground"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </Button>
      </div>
      {children}
    </div>
  )
}
