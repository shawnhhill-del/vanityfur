"use client"

import Image from "next/image"
import Link from "next/link"
import { Scissors, ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function DogGroomingSection() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium rounded-full mb-6">
              Professional Dog Grooming
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Noose-Free Dog Grooming
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              We offer a wide range of dog haircuts to suit every breed and style preference. From breed-standard cuts to custom styles, teddy bear cuts to puppy cuts, show trims to summer shave-downs — we do it all with precision and care.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every dog is unique, and we tailor each grooming session to your pet&apos;s individual coat type, temperament, and your personal preferences. Whether you want a practical maintenance cut or a head-turning show style, we&apos;ve got you covered.
            </p>
            
            {/* Services List */}
            <div className="bg-background border border-border/50 rounded-2xl p-5 mb-8">
              <p className="font-medium text-foreground mb-3">Our dog grooming services include:</p>
              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Breed-specific cuts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Teddy bear cuts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Show trims
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Summer shave-downs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Custom styles
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  De-shedding treatments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Hand scissoring
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Nail trims
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span>
                  Ear care
                </li>
              </ul>
            </div>

            {/* Phone Callout */}
            <div className="bg-background border border-border/50 rounded-2xl p-5 mb-8">
              <a href="tel:7706171374" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">(770) 617-1374</p>
                  <p className="text-sm text-muted-foreground">
                    Call to schedule your appointment
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
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-12 border-2 border-border hover:border-amber-500/50 bg-transparent transition-all duration-300"
              >
                <a href="tel:7706171374">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted shadow-2xl">
              <Image
                src="/images/shihtzu-blue-bones.jpg"
                alt="Beautifully groomed Shih Tzu - Professional dog grooming at Vanity Fur Pet Parlor Cumming GA"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 border border-border/50 hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">All Breeds Welcome</p>
                  <p className="text-2xl font-serif font-semibold text-amber-600 dark:text-amber-400">100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
