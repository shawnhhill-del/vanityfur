"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Upload, Trash2, Plus, Image as ImageIcon, Video, Dog, Cat, Loader2, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { AdminAuth } from "@/components/admin-auth"

interface GalleryItem {
  id: string
  title: string
  petType: 'dog' | 'cat'
  mediaType: 'photo' | 'video'
  url?: string
  youtubeUrl?: string
  youtubeId?: string
  thumbnail?: string
  createdAt: string
  metadataUrl?: string
}

export default function AdminGalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null)
  
  // Form state
  const [mediaType, setMediaType] = useState<'photo' | 'video'>('photo')
  const [petType, setPetType] = useState<'dog' | 'cat'>('dog')
  const [title, setTitle] = useState('')
  const [youtubeUrl, setYoutubeUrl] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const fetchItems = useCallback(async () => {
    try {
      const response = await fetch('/api/gallery')
      const data = await response.json()
      if (data.items) {
        setItems(data.items)
      }
    } catch (error) {
      console.error('Error fetching gallery:', error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchItems()
  }, [fetchItems])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      setPreviewUrl(URL.createObjectURL(file))
    }
  }

  const resetForm = () => {
    setMediaType('photo')
    setPetType('dog')
    setTitle('')
    setYoutubeUrl('')
    setSelectedFile(null)
    setPreviewUrl(null)
  }

  const handleUpload = async () => {
    setUploading(true)
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('petType', petType)
      formData.append('mediaType', mediaType)
      
      if (mediaType === 'video') {
        formData.append('youtubeUrl', youtubeUrl)
      } else if (selectedFile) {
        formData.append('file', selectedFile)
      } else {
        alert('Please select a file')
        setUploading(false)
        return
      }

      const response = await fetch('/api/gallery/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()
      
      if (data.success) {
        await fetchItems()
        resetForm()
        setDialogOpen(false)
      } else {
        alert(data.error || 'Upload failed')
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Upload failed')
    } finally {
      setUploading(false)
    }
  }

  const handleDelete = async (item: GalleryItem) => {
    try {
      const response = await fetch('/api/gallery/delete', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          metadataUrl: item.metadataUrl,
          imageUrl: item.url,
        }),
      })

      if (response.ok) {
        setItems(items.filter(i => i.id !== item.id))
        setDeleteConfirm(null)
      }
    } catch (error) {
      console.error('Delete error:', error)
    }
  }

  const dogPhotos = items.filter(i => i.petType === 'dog' && i.mediaType === 'photo')
  const catPhotos = items.filter(i => i.petType === 'cat' && i.mediaType === 'photo')
  const dogVideos = items.filter(i => i.petType === 'dog' && i.mediaType === 'video')
  const catVideos = items.filter(i => i.petType === 'cat' && i.mediaType === 'video')

  return (
    <AdminAuth>
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link href="/gallery">
              <Button variant="outline" size="icon">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Gallery Manager</h1>
              <p className="text-muted-foreground">Add and manage photos and videos</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Link href="/admin/blog">
              <Button variant="outline" className="gap-2">
                Blog
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
                Add New
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-xl">Add to Gallery</DialogTitle>
                <DialogDescription>Upload a photo or add a YouTube video.</DialogDescription>
              </DialogHeader>
              
              <div className="space-y-5 pt-2">
                {/* Type Selectors Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Media Type */}
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground uppercase tracking-wide">Type</Label>
                    <div className="flex gap-1 p-1 bg-muted rounded-lg">
                      <button
                        type="button"
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                          mediaType === 'photo' 
                            ? 'bg-background text-foreground shadow-sm' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => setMediaType('photo')}
                      >
                        <ImageIcon className="w-4 h-4" />
                        Photo
                      </button>
                      <button
                        type="button"
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                          mediaType === 'video' 
                            ? 'bg-background text-foreground shadow-sm' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => setMediaType('video')}
                      >
                        <Video className="w-4 h-4" />
                        Video
                      </button>
                    </div>
                  </div>

                  {/* Pet Type */}
                  <div className="space-y-2">
                    <Label className="text-xs text-muted-foreground uppercase tracking-wide">Pet</Label>
                    <div className="flex gap-1 p-1 bg-muted rounded-lg">
                      <button
                        type="button"
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                          petType === 'dog' 
                            ? 'bg-background text-foreground shadow-sm' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => setPetType('dog')}
                      >
                        <Dog className="w-4 h-4" />
                        Dog
                      </button>
                      <button
                        type="button"
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                          petType === 'cat' 
                            ? 'bg-background text-foreground shadow-sm' 
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                        onClick={() => setPetType('cat')}
                      >
                        <Cat className="w-4 h-4" />
                        Cat
                      </button>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm">Title <span className="text-muted-foreground">(optional)</span></Label>
                  <Input
                    id="title"
                    placeholder="e.g. Fluffy's makeover"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="h-11"
                  />
                </div>

                {/* Photo Upload or YouTube URL */}
                {mediaType === 'photo' ? (
                  <div className="space-y-2">
                    <Label className="text-sm">Photo</Label>
                    <div className={`border-2 border-dashed rounded-xl transition-colors ${previewUrl ? 'border-primary/50 bg-primary/5' : 'border-border hover:border-primary/30'}`}>
                      {previewUrl ? (
                        <div className="relative p-4">
                          <Image
                            src={previewUrl}
                            alt="Preview"
                            width={300}
                            height={200}
                            className="mx-auto rounded-lg object-cover max-h-48"
                          />
                          <button
                            type="button"
                            className="absolute top-6 right-6 w-8 h-8 bg-destructive text-destructive-foreground rounded-full flex items-center justify-center hover:bg-destructive/90 transition-colors"
                            onClick={() => {
                              setSelectedFile(null)
                              setPreviewUrl(null)
                            }}
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <label className="cursor-pointer block p-8">
                          <div className="flex flex-col items-center">
                            <div className="w-14 h-14 bg-muted rounded-full flex items-center justify-center mb-3">
                              <Upload className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <p className="text-sm font-medium text-foreground">Click to upload</p>
                            <p className="text-xs text-muted-foreground mt-1">JPG, PNG, WebP up to 10MB</p>
                          </div>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleFileSelect}
                          />
                        </label>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="youtubeUrl" className="text-sm">YouTube URL</Label>
                    <Input
                      id="youtubeUrl"
                      placeholder="https://youtube.com/watch?v=..."
                      value={youtubeUrl}
                      onChange={(e) => setYoutubeUrl(e.target.value)}
                      className="h-11"
                    />
                    <p className="text-xs text-muted-foreground">Paste any YouTube video link</p>
                  </div>
                )}

                {/* Submit */}
                <Button 
                  className="w-full h-11 gap-2 mt-2" 
                  onClick={handleUpload}
                  disabled={uploading || (mediaType === 'photo' && !selectedFile) || (mediaType === 'video' && !youtubeUrl)}
                >
                  {uploading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4" />
                      Add to Gallery
                    </>
                  )}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                  <Dog className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{dogPhotos.length}</p>
                  <p className="text-sm text-muted-foreground">Dog Photos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Cat className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{catPhotos.length}</p>
                  <p className="text-sm text-muted-foreground">Cat Photos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center">
                  <Video className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{dogVideos.length}</p>
                  <p className="text-sm text-muted-foreground">Dog Videos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Video className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{catVideos.length}</p>
                  <p className="text-sm text-muted-foreground">Cat Videos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Content Tabs */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <Tabs defaultValue="dog-photos" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-6">
              <TabsTrigger value="dog-photos" className="gap-2">
                <Dog className="w-4 h-4" />
                Dog Photos
              </TabsTrigger>
              <TabsTrigger value="cat-photos" className="gap-2">
                <Cat className="w-4 h-4" />
                Cat Photos
              </TabsTrigger>
              <TabsTrigger value="dog-videos" className="gap-2">
                <Video className="w-4 h-4" />
                Dog Videos
              </TabsTrigger>
              <TabsTrigger value="cat-videos" className="gap-2">
                <Video className="w-4 h-4" />
                Cat Videos
              </TabsTrigger>
            </TabsList>

            <TabsContent value="dog-photos">
              <GalleryGrid items={dogPhotos} onDelete={(item) => setDeleteConfirm(item.id)} />
            </TabsContent>
            <TabsContent value="cat-photos">
              <GalleryGrid items={catPhotos} onDelete={(item) => setDeleteConfirm(item.id)} />
            </TabsContent>
            <TabsContent value="dog-videos">
              <GalleryGrid items={dogVideos} onDelete={(item) => setDeleteConfirm(item.id)} />
            </TabsContent>
            <TabsContent value="cat-videos">
              <GalleryGrid items={catVideos} onDelete={(item) => setDeleteConfirm(item.id)} />
            </TabsContent>
          </Tabs>
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog open={!!deleteConfirm} onOpenChange={() => setDeleteConfirm(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Item</DialogTitle>
              <DialogDescription>Are you sure you want to delete this item? This action cannot be undone.</DialogDescription>
            </DialogHeader>
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setDeleteConfirm(null)}>
                Cancel
              </Button>
              <Button 
                variant="destructive" 
                onClick={() => {
                  const item = items.find(i => i.id === deleteConfirm)
                  if (item) handleDelete(item)
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

function GalleryGrid({ items, onDelete }: { items: GalleryItem[], onDelete: (item: GalleryItem) => void }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 border-2 border-dashed border-border rounded-lg">
        <ImageIcon className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
        <p className="text-muted-foreground">No items yet</p>
        <p className="text-sm text-muted-foreground">Click &quot;Add New&quot; to get started</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <Card key={item.id} className="overflow-hidden group">
          <div className="relative aspect-square">
            <Image
              src={item.mediaType === 'video' ? item.thumbnail || '' : item.url || ''}
              alt={item.title}
              fill
              className="object-cover"
            />
            {item.mediaType === 'video' && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-foreground" />
                </div>
              </div>
            )}
            <Button
              variant="destructive"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity w-8 h-8"
              onClick={() => onDelete(item)}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          </div>
          <CardContent className="p-3">
            <p className="text-sm font-medium truncate">{item.title}</p>
            <p className="text-xs text-muted-foreground">
              {new Date(item.createdAt).toLocaleDateString()}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
