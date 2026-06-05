"use client"

import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { Play, X, Dog, Cat, Video, Camera, Clapperboard } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

// Gallery is now CMS-only - all content managed through /admin/gallery

interface GalleryItem {
  id: string
  title: string
  petType: 'dog' | 'cat'
  mediaType: 'photo' | 'video'
  url?: string
  youtubeUrl?: string
  youtubeId?: string
  thumbnail?: string
  createdAt?: string
}

interface Tutorial {
  id: string
  title: string
  description: string
  youtubeId: string
  thumbnail: string
}

type ActiveVideo = {
  youtubeId: string
  startTime: number
  title: string
} | null

type ActivePhoto = {
  image: string
  title: string
  subtitle: string
} | null

export default function GalleryPage() {
  const [cmsItems, setCmsItems] = useState<GalleryItem[]>([])
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [activeVideo, setActiveVideo] = useState<ActiveVideo>(null)
  const [activePhoto, setActivePhoto] = useState<ActivePhoto>(null)
  const [activeTab, setActiveTab] = useState<"videos" | "photos" | "tutorials">("videos")
  const [activeSubTab, setActiveSubTab] = useState<"dogs" | "cats">("dogs")

  const fetchCmsItems = useCallback(async () => {
    try {
      const response = await fetch('/api/gallery')
      const data = await response.json()
      if (data.items) {
        setCmsItems(data.items)
      }
    } catch (error) {
      console.error('Error fetching gallery:', error)
    }
  }, [])

  const fetchTutorials = useCallback(async () => {
    try {
      const response = await fetch('/api/tutorials')
      const data = await response.json()
      if (data.tutorials) {
        setTutorials(data.tutorials)
      }
    } catch (error) {
      console.error('Error fetching tutorials:', error)
    }
  }, [])

  useEffect(() => {
    fetchCmsItems()
    fetchTutorials()
  }, [fetchCmsItems, fetchTutorials])

  // CMS-only content
  const dogVideos = cmsItems
    .filter(i => i.petType === 'dog' && i.mediaType === 'video')
    .map(v => ({ id: v.id, title: v.title, subtitle: '', youtubeId: v.youtubeId || '', startTime: 0 }))
  const catVideos = cmsItems
    .filter(i => i.petType === 'cat' && i.mediaType === 'video')
    .map(v => ({ id: v.id, title: v.title, subtitle: '', youtubeId: v.youtubeId || '', startTime: 0 }))
  const dogPhotos = cmsItems
    .filter(i => i.petType === 'dog' && i.mediaType === 'photo')
    .map(p => ({ id: p.id, title: p.title, subtitle: '', image: p.url || '' }))
  const catPhotos = cmsItems
    .filter(i => i.petType === 'cat' && i.mediaType === 'photo')
    .map(p => ({ id: p.id, title: p.title, subtitle: '', image: p.url || '' }))

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Our Gallery
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Dogs & Cats Pampered
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Browse through our collection of beautifully groomed pets. Over 35 years of grooming mastery in Cumming, GA.
          </p>
        </div>
      </section>

      {/* Main Tabs - Videos / Photos */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-6">
          {/* Main Tab Buttons */}
          <div className="flex justify-center gap-3 mb-8 flex-wrap">
            <Button
              variant={activeTab === "videos" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("videos")}
              className="rounded-full px-6 gap-2"
            >
              <Video className="w-5 h-5" />
              Videos
            </Button>
            <Button
              variant={activeTab === "photos" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("photos")}
              className="rounded-full px-6 gap-2"
            >
              <Camera className="w-5 h-5" />
              Photos
            </Button>
            <Button
              variant={activeTab === "tutorials" ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveTab("tutorials")}
              className="rounded-full px-6 gap-2"
            >
              <Clapperboard className="w-5 h-5" />
              See What We Do
            </Button>
          </div>

          {/* Sub Tabs - Dogs / Cats (only for videos and photos) */}
          {activeTab !== "tutorials" && (
          <div className="flex justify-center gap-2 mb-10">
            <Button
              variant={activeSubTab === "dogs" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setActiveSubTab("dogs")}
              className="rounded-full px-6 gap-2"
            >
              <Dog className="w-4 h-4" />
              Dogs
            </Button>
            <Button
              variant={activeSubTab === "cats" ? "secondary" : "ghost"}
              size="sm"
              onClick={() => setActiveSubTab("cats")}
              className="rounded-full px-6 gap-2"
            >
              <Cat className="w-4 h-4" />
              Cats
            </Button>
          </div>
          )}

          {/* Videos Section */}
          {activeTab === "videos" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  {activeSubTab === "dogs" ? "Dog Grooming Videos" : "Cat Grooming Videos"}
                </h2>
                <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
                  {activeSubTab === "dogs" ? dogVideos.length : catVideos.length} Videos
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(activeSubTab === "dogs" ? dogVideos : catVideos).map((video) => (
                  <button
                    key={video.id}
                    onClick={() => setActiveVideo({ youtubeId: video.youtubeId, startTime: video.startTime, title: video.title })}
                    className="group relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                  >
                    {/* YouTube Thumbnail */}
                    <Image
                      src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                      alt={video.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-primary-foreground fill-primary-foreground ml-1" />
                      </div>
                    </div>
                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                      <h3 className="text-lg font-semibold text-background">{video.title}</h3>
                      {video.subtitle && <p className="text-background/70 text-sm">{video.subtitle}</p>}
                    </div>
                  </button>
                ))}
              </div>

              {(activeSubTab === "dogs" ? dogVideos : catVideos).length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No videos available yet.</p>
                </div>
              )}
            </div>
          )}

          {/* Photos Section */}
          {activeTab === "photos" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                  {activeSubTab === "dogs" ? "Dog Grooming Photos" : "Cat Grooming Photos"}
                </h2>
                <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
                  {activeSubTab === "dogs" ? dogPhotos.length : catPhotos.length} Photos
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {(activeSubTab === "dogs" ? dogPhotos : catPhotos).map((photo) => (
                  <button
                    key={photo.id}
                    onClick={() => setActivePhoto({ image: photo.image, title: photo.title, subtitle: photo.subtitle })}
                    className="group relative aspect-square rounded-2xl overflow-hidden bg-muted border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                  >
                    <Image
                      src={photo.image}
                      alt={photo.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-sm font-semibold text-background">{photo.title}</h3>
                        {photo.subtitle && <p className="text-background/70 text-xs">{photo.subtitle}</p>}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Tutorials Section - See What We Do */}
          {activeTab === "tutorials" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
                    See What We Do
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Watch our grooming techniques in action — from bathing to nail care.
                  </p>
                </div>
                <span className="text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
                  {tutorials.length} Tutorials
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tutorials.map((tutorial) => (
                  <button
                    key={tutorial.id}
                    onClick={() => setActiveVideo({ youtubeId: tutorial.youtubeId, startTime: 0, title: tutorial.title })}
                    className="group relative aspect-video rounded-2xl overflow-hidden bg-muted border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl text-left"
                  >
                    {/* Thumbnail */}
                    <Image
                      src={tutorial.thumbnail}
                      alt={tutorial.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-foreground/30 group-hover:bg-foreground/40 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 text-primary-foreground fill-primary-foreground ml-1" />
                      </div>
                    </div>
                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent">
                      <h3 className="text-lg font-semibold text-background">{tutorial.title}</h3>
                      {tutorial.description && (
                        <p className="text-background/70 text-sm line-clamp-1">{tutorial.description}</p>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {tutorials.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">No tutorial videos available yet.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {activeVideo && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-background rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 w-10 h-10 bg-card rounded-full flex items-center justify-center text-foreground hover:bg-muted transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?start=${activeVideo.startTime}&autoplay=1`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Photo Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[85vh] bg-background rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-muted transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative">
              <Image
                src={activePhoto.image}
                alt={activePhoto.title}
                width={800}
                height={800}
                className="object-contain max-h-[75vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent">
                <h3 className="text-xl font-semibold text-background">{activePhoto.title}</h3>
                {activePhoto.subtitle && <p className="text-background/70">{activePhoto.subtitle}</p>}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
