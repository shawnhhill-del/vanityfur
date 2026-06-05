"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Plus, Trash2, FileText, Loader2, Upload, X, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { AdminAuth } from "@/components/admin-auth"

interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string[]
  tag: string
  image: string
  date: string
  readTime: string
  author: string
  createdAt: string
  metadataUrl?: string
}

export default function AdminBlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)

  // Form state
  const [title, setTitle] = useState("")
  const [excerpt, setExcerpt] = useState("")
  const [content, setContent] = useState("")
  const [tag, setTag] = useState("Dog Grooming")
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)

  const fetchPosts = useCallback(async () => {
    try {
      const response = await fetch("/api/blog")
      const data = await response.json()
      if (data.posts) {
        setPosts(data.posts)
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const resetForm = () => {
    setTitle("")
    setExcerpt("")
    setContent("")
    setTag("Dog Grooming")
    setSelectedImage(null)
    setImagePreview(null)
  }

  const handleCreate = async () => {
    if (!title.trim() || !content.trim()) {
      alert("Title and content are required")
      return
    }

    setCreating(true)
    try {
      const formData = new FormData()
      formData.append("title", title)
      formData.append("excerpt", excerpt)
      formData.append("content", content)
      formData.append("tag", tag)
      if (selectedImage) {
        formData.append("image", selectedImage)
      }

      const response = await fetch("/api/blog/create", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        await fetchPosts()
        resetForm()
        setDialogOpen(false)
      } else {
        alert(data.error || "Failed to create post")
      }
    } catch (error) {
      console.error("Create error:", error)
      alert("Failed to create post")
    } finally {
      setCreating(false)
    }
  }

  const handleDelete = async (post: BlogPost) => {
    try {
      const response = await fetch("/api/blog/delete", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          metadataUrl: post.metadataUrl,
          imageUrl: post.image,
        }),
      })

      if (response.ok) {
        setPosts(posts.filter((p) => p.id !== post.id))
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
              <Link href="/blog">
                <Button variant="outline" size="icon">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Blog Manager</h1>
                <p className="text-muted-foreground">
                  {posts.length} post{posts.length !== 1 ? "s" : ""} published
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Link href="/admin/gallery">
                <Button variant="outline" className="gap-2">
                  Gallery
                </Button>
              </Link>
              <Link href="/admin/tutorials">
                <Button variant="outline" className="gap-2">
                  Tutorials
                </Button>
              </Link>
              <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="gap-2">
                    <Plus className="w-4 h-4" />
                    New Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Create New Blog Post</DialogTitle>
                    <DialogDescription>
                      Write a new blog post for Vanity Fur Pet Parlor.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-5 pt-4">
                    {/* Title */}
                    <div className="space-y-2">
                      <Label htmlFor="post-title">Title *</Label>
                      <Input
                        id="post-title"
                        placeholder="e.g. 5 Tips for Keeping Your Dog's Coat Healthy"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>

                    {/* Tag */}
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select value={tag} onValueChange={setTag}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Dog Grooming">Dog Grooming</SelectItem>
                          <SelectItem value="Cat Grooming">Cat Grooming</SelectItem>
                          <SelectItem value="Pet Health">Pet Health</SelectItem>
                          <SelectItem value="Tips & Advice">Tips & Advice</SelectItem>
                          <SelectItem value="News">News</SelectItem>
                          <SelectItem value="Behind the Scenes">Behind the Scenes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Display Image */}
                    <div className="space-y-2">
                      <Label>Display Image</Label>
                      <div className="border-2 border-dashed border-border rounded-lg p-4 text-center">
                        {imagePreview ? (
                          <div className="relative">
                            <Image
                              src={imagePreview}
                              alt="Preview"
                              width={400}
                              height={200}
                              className="mx-auto rounded-lg object-cover max-h-48"
                            />
                            <Button
                              type="button"
                              variant="destructive"
                              size="icon"
                              className="absolute top-2 right-2 w-6 h-6"
                              onClick={() => {
                                setSelectedImage(null)
                                setImagePreview(null)
                              }}
                            >
                              <X className="w-3 h-3" />
                            </Button>
                          </div>
                        ) : (
                          <label className="cursor-pointer block py-6">
                            <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
                            <p className="text-sm text-muted-foreground">
                              Click to upload a display image
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              JPG, PNG, WebP supported
                            </p>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={handleImageSelect}
                            />
                          </label>
                        )}
                      </div>
                    </div>

                    {/* Excerpt */}
                    <div className="space-y-2">
                      <Label htmlFor="post-excerpt">
                        Excerpt{" "}
                        <span className="text-muted-foreground font-normal">
                          (short preview text, auto-generated if empty)
                        </span>
                      </Label>
                      <Textarea
                        id="post-excerpt"
                        placeholder="A brief summary of the post..."
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        rows={2}
                      />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <Label htmlFor="post-content">
                        Content *{" "}
                        <span className="text-muted-foreground font-normal">
                          (separate paragraphs with blank lines)
                        </span>
                      </Label>
                      <Textarea
                        id="post-content"
                        placeholder={"Write your blog post here...\n\nEach paragraph should be separated by a blank line.\n\nThis will become the third paragraph."}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={12}
                        className="font-mono text-sm"
                      />
                    </div>

                    {/* Submit */}
                    <Button
                      className="w-full gap-2"
                      onClick={handleCreate}
                      disabled={creating || !title.trim() || !content.trim()}
                    >
                      {creating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Publishing...
                        </>
                      ) : (
                        <>
                          <FileText className="w-4 h-4" />
                          Publish Post
                        </>
                      )}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Posts List */}
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-16 border-2 border-dashed border-border rounded-lg">
              <FileText className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
              <p className="text-lg font-medium text-foreground mb-1">No blog posts yet</p>
              <p className="text-muted-foreground mb-4">
                Click &quot;New Post&quot; to write your first blog post.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Image */}
                      {post.image && (
                        <div className="relative w-full md:w-48 shrink-0 overflow-hidden bg-muted flex items-center justify-center p-2">
                          <Image
                            src={post.image}
                            alt={post.title}
                            width={200}
                            height={200}
                            className="w-full h-auto max-h-40 object-contain"
                          />
                        </div>
                      )}
                      {/* Content */}
                      <div className="flex-1 p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                {post.tag}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {post.date}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {post.readTime}
                              </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-1">
                              {post.title}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="flex items-center gap-2 shrink-0">
                            <Link href={`/blog/${post.slug}`}>
                              <Button variant="outline" size="icon" className="w-8 h-8">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </Link>
                            <Button
                              variant="destructive"
                              size="icon"
                              className="w-8 h-8"
                              onClick={() => setDeleteConfirm(post.id)}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Delete Confirmation */}
          <Dialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Blog Post</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this blog post? This action cannot be
                  undone.
                </DialogDescription>
              </DialogHeader>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" onClick={() => setDeleteConfirm(null)}>
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    const post = posts.find((p) => p.id === deleteConfirm)
                    if (post) handleDelete(post)
                  }}
                >
                  Delete Post
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </AdminAuth>
  )
}
