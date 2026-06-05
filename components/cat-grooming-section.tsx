"use client"

import Image from "next/image"
import Link from "next/link"
import { Heart, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CatGroomingSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cat-2x5CAY6Puvhv30adeAyqNxPYaXuupb.png"
                alt="Tracey with white fluffy cat - Cat grooming expert at Vanity Fur Pet Parlor Cumming GA"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-xl p-4 border border-border/50 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Cat Grooming Since</p>
                  <p className="text-2xl font-serif font-semibold text-primary">1985</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Specialized Cat Grooming
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              No-Sedation Cat Grooming
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Specialized techniques developed over decades, enable me to offer a unique, compassionate and interactive grooming experience for both you and your cat that is unavailable anywhere else! You stay, help hold and comfort your kitty and return home with your beautifully groomed happy cat!
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Read our{" "}
              <Link href="/reviews#cats" className="text-primary hover:underline font-medium">
                testimonials and reviews
              </Link>
              !
            </p>

            {/* Phone Callout */}
            <div className="bg-card border border-border/50 rounded-2xl p-5 mb-8">
              <a href="tel:7706171374" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">(770) 617-1374</p>
                  <p className="text-sm text-muted-foreground">
                    Press <strong className="text-foreground">2</strong> for Cat Grooming appointments
                  </p>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-12 transition-all duration-300 hover:shadow-lg"
              >
                <Link href="/about#cat-grooming">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 border-2 border-border hover:border-primary/50 bg-transparent transition-all duration-300"
              >
                <a href="tel:7706171374">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
