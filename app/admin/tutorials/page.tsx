"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Plus, Trash2, Video, Loader2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { AdminAuth } from "@/components/admin-auth"

interface Tutorial {
  id: string
  title: string
  description: string
  youtubeId: string
  youtubeUrl: string
  thumbnail: string
  createdAt: string
  metadataUrl?: string
}

export default function AdminTutorialsPage() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  // Form state
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [youtubeUrl, setYoutubeUrl] = useState("")

  const fetchTutorials = useCallback(async () => {
    try {
      const response = await fetch("/api/tutorials")
      const data = await response.json()
      if (data.tutorials) {
        setTutorials(data.tutorials)
      }
    } catch (error) {
      console.error("Error fetching tutorials:", error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTutorials()
  }, [fetchTutorials])

  const resetForm = () => {
    setTitle("")
    setDescription("")
    setYoutubeUrl("")
  }

  const handleCreate = async () => {
    if (!title.trim() || !youtubeUrl.trim()) {
      alert("Title and YouTube URL are required")
      return
    }

    setCreating(true)
    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("description", description)
      formData.append("youtubeUrl", youtubeUrl)

      const response = await fetch("/api/tutorials/upload", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        await fetchTutorials()
        resetForm()
        setDialogOpen(false)
      } else {
        alert(data.error || "Failed to add tutorial")
      }
    } catch (error) {
      console.error("Create error:", error)
      alert("Failed to add tutorial")
    } finally {
      setCreating(false)
    }
  }

  const handleDelete = async (tutorial: Tutorial) => {
    try {
      const response = await fetch("/api/tutorials/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ metadataUrl: tutorial.metadataUrl }),
      })

      if (response.ok) {
        setTutorials(tutorials.filter((t) => t.id !== tutorial.id))
        setDeleteConfirm(null)
      }
    } catch (error) {
      console.error("Delete error:", error)
    }
  }

  return (
    <AdminAuth>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Link href="/gallery">
                <Button variant="outline" size="icon">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Tutorial Videos</h1>
                <p className="text-muted-foreground">
                  Manage &quot;See What We Do&quot; videos — {tutorials.length} video{tutorials.length !== 1 ? "s" : ""}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link href="/admin/gallery">
                <Button variant="outline">Gallery</Button>
              </Link>
              <Link href="/admin/blog">
                <Button variant="outline">Blog</Button>
              </Link>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    Add Video
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Add Tutorial Video</DialogTitle>
                    <DialogDescription>
                      Add a YouTube video showing how you do things (bathing, nail filing, etc.)
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-5 pt-4">
                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor="tutorial-title">Title *</Label>
                      <Input
                        id="tutorial-title"
                        placeholder="e.g. How We Bathe a Dog"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    {/* Description */}
                    <div className="space-y-2">
                      <Label htmlFor="tutorial-description">
                        Description <span className="text-muted-foreground">(optional)</span>
                      </Label>
                      <Textarea
                        id="tutorial-description"
                        placeholder="Brief description of what's shown in the video..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={2}
                      />
                    </div>

                    {/* YouTube URL */}
                    <div className="space-y-2">
                      <Label htmlFor="youtube-url">YouTube URL *</Label>
                      <Input
                        id="youtube-url"
                        placeholder="https://youtube.com/watch?v=..."
                        value={youtubeUrl}
                        onChange={(e) => setYoutubeUrl(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground">Paste any YouTube video link</p>
                    </div>

                    {/* Submit */}
                    <Button
                      className="w-full gap-2"
                      onClick={handleCreate}
                      disabled={creating || !title.trim() || !youtubeUrl.trim()}
                    >
                      {creating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Adding...
                        </>
                      ) : (
                        <>
                          <Video className="w-4 h-4" />
                          Add Tutorial
                        </>
                      )}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Tutorials Grid */}
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : tutorials.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-border rounded-lg">
              <Video className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium text-foreground mb-1">No tutorial videos yet</p>
              <p className="text-muted-foreground mb-4">
                Add videos showing how you bathe dogs, file nails, fluff dry poodles, etc.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tutorials.map((tutorial) => (
                <Card key={tutorial.id} className="overflow-hidden group">
                  <div className="relative aspect-video">
                    <Image
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Video className="w-6 h-6 text-foreground" />
                      </div>
                    </div>
                    <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <a
                        href={`https://youtube.com/watch?v=${tutorial.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="secondary" size="icon" className="w-8 h-8">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </a>
                      <Button
                        variant="destructive"
                        size="icon"
                        className="w-8 h-8"
                        onClick={() => setDeleteConfirm(tutorial.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
                      {tutorial.title}
                    </h3>
                    {tutorial.description && (
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {tutorial.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Delete Confirmation */}
          <Dialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Tutorial Video</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this tutorial video? This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setDeleteConfirm(null)}>
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    const tutorial = tutorials.find((t) => t.id === deleteConfirm)
                    if (tutorial) handleDelete(tutorial)
                  }}
                >
                  Delete
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </AdminAuth>
  )
}
