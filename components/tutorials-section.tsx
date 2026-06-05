"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Play, X } from "lucide-react"

interface Tutorial {
  id: string
  title: string
  description: string
  youtubeId: string
  thumbnail: string
}

export function TutorialsSection() {
  const [tutorials, setTutorials] = useState<Tutorial[]>([])
  const [activeVideo, setActiveVideo] = useState<Tutorial | null>(null)

  const fetchTutorials = useCallback(async () => {
    try {
      const response = await fetch("/api/tutorials")
      const data = await response.json()
      if (data.tutorials) {
        setTutorials(data.tutorials)
      }
    } catch (error) {
      console.error("Error fetching tutorials:", error)
    }
  }, [])

  useEffect(() => {
    fetchTutorials()
  }, [fetchTutorials])

  // Don't render if no tutorials
  if (tutorials.length === 0) {
    return null
  }

  return (
    <>
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Cat Grooming Videos
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              See Our Cat Grooming
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch our specialized cat grooming techniques in action. See the gentle, sedation-free methods we use to pamper your feline friends.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tutorials.map((tutorial) => (
              <button
                key={tutorial.id}
                onClick={() => setActiveVideo(tutorial)}
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
              src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
              title={activeVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </>
  )
}
