import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Star, Sparkles, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                <Sparkles className="w-4 h-4" />
                Premium Pet Grooming
              </span>
            </div>
            
            <h1 className="animate-fade-up animation-delay-100 font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Full-View Grooming
              <span className="block text-primary">Dogs & Cats</span>
            </h1>
            
            <p className="animate-fade-up animation-delay-200 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Cumming, GA&apos;s premier pet salon. <strong className="text-foreground">Noose-free</strong> for dogs. <strong className="text-foreground">No sedation</strong> for cats. We are animal lovers with 35+ years of grooming mastery.
            </p>
            
            <div className="animate-fade-up animation-delay-300 flex flex-wrap gap-4 mb-12">
              <Button 
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-14 text-base transition-all duration-300 hover:shadow-xl hover:shadow-foreground/20 hover:-translate-y-1"
              >
                <Link href="/contact">
                  Book An Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-8 h-14 text-base border-2 hover:bg-muted transition-all duration-300 bg-transparent"
              >
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="animate-fade-up animation-delay-400 flex flex-wrap items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">4.9 rating</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <span className="text-2xl font-semibold text-foreground">1,000's</span>
                <span className="text-sm text-muted-foreground ml-2">Happy Pets and Parents</span>
              </div>
              <div className="h-8 w-px bg-border hidden sm:block" />
              <div className="hidden sm:block">
                <span className="text-2xl font-semibold text-foreground">30+</span>
                <span className="text-sm text-muted-foreground ml-2">Years Experience</span>
              </div>
            </div>
          </div>
          
          {/* Images - Tracey on top left, Sarah below right */}
          <div className="relative animate-fade-up animation-delay-200">
            <div className="flex flex-col items-center gap-6 max-w-[450px] mx-auto">
              {/* Tracey - Equal size, positioned left */}
              <div className="text-center self-start ml-0 md:ml-4">
                <div className="relative w-44 h-44 md:w-52 md:h-52 mx-auto">
                  <div className="absolute inset-[-8px] rounded-full border-2 border-primary/20" />
                  <div className="absolute inset-[-16px] rounded-full border border-primary/10" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tracey%20%282%29-2GpKQlCM02iW6HXuKYcXiL4XDB55jt.png"
                      alt="Tracey, Owner and Operator of Vanity Fur Pet Parlor"
                      fill
                      className="object-cover object-[center_20%]"
                      priority
                      sizes="(max-width: 768px) 176px, 208px"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-base md:text-lg font-semibold text-foreground">Tracey</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Owner/Operator/Master Groomer</p>
                </div>
              </div>

              {/* Sarah - Equal size, positioned right */}
              <div className="text-center self-end mr-0 md:mr-4">
                <div className="relative w-44 h-44 md:w-52 md:h-52 mx-auto">
                  <div className="absolute inset-[-8px] rounded-full border-2 border-primary/20" />
                  <div className="absolute inset-[-16px] rounded-full border border-primary/10" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sarah%20%282%29-jSzfk5HH7sk67Wl7MNAhz3543m4C5b.png"
                      alt="Sarah, Manager and Master Groomer at Vanity Fur Pet Parlor"
                      fill
                      className="object-cover object-[center_25%]"
                      sizes="(max-width: 768px) 176px, 208px"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-base md:text-lg font-semibold text-foreground">Sarah</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Manager/Master Groomer</p>
                </div>
              </div>
              
              {/* Video buttons */}
              <div className="flex flex-wrap justify-center gap-3 mt-2">
                <Link
                  href="/gallery?tab=videos&pet=dogs"
                  className="inline-flex items-center gap-2 bg-card hover:bg-muted border border-border rounded-full px-4 py-2 transition-all duration-300 hover:shadow-md"
                >
                  <Play className="w-3.5 h-3.5 text-amber-600 fill-amber-600" />
                  <span className="text-xs font-medium text-foreground">Full-View Videos</span>
                </Link>
                <Link
                  href="/gallery?tab=videos&pet=dogs"
                  className="inline-flex items-center gap-2 bg-card hover:bg-muted border border-border rounded-full px-4 py-2 transition-all duration-300 hover:shadow-md"
                >
                  <Play className="w-3.5 h-3.5 text-primary fill-primary" />
                  <span className="text-xs font-medium text-foreground">Noose-Free Videos</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
