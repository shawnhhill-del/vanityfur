"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Phone, Cat, Dog, Shield, Heart, Eye, Check, Ear, Scissors, ChevronDown } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const dogServices = [
  {
    title: "Bath, Brush & Blowout",
    description: "Premium bath with quality shampoo, thorough brushing, and professional blow dry.",
    features: ["Premium shampoo bath", "Blow dry & fluff", "Thorough brushing", "Nail trim included"],
  },
  {
    title: "Deep Ear Canal Cleaning",
    description: "Thorough, above-and-beyond ear care. Many dogs grow hair deep in the ear canal, trapping moisture and bacteria. We safely remove it — completely painless as there are no nerve endings.",
    features: ["Hair removal from ear canal", "pH-balanced ear flush", "Prevents infection & odor", "Painless process"],
  },
  {
    title: "Breed & Custom Styling",
    description: "Expert breed-standard cuts or personalized styles. Show-quality hand scissoring tailored to your dog's coat and lifestyle.",
    features: ["Breed-specific styling", "Custom creative cuts", "Shedding elimination cuts", "Fresh start cuts"],
  },
  {
    title: "Nail Care & At-Home Tips",
    description: "Professional nail filing using specialized diamond-plated files. Plus, we teach you at-home trimming tips, tools, and techniques.",
    features: ["Diamond-plated filing", "Paw pad cleanup", "At-home counseling", "Tools & technique tips"],
  },
  {
    title: "Special Needs & Seniors",
    description: "Extra patience and accommodations for older dogs or those with special needs.",
    features: ["Gentle handling", "Extra breaks as needed", "Modified techniques", "Comfort-focused approach"],
  },
]

const catServices = [
  {
    title: "Lion, Summer & Specialty Cuts",
    description: "Classic lion cut or summer trim with your choice of tail styling — tail tuft, squirrel tail, or natural.",
    features: ["Full body shave", "Mane styling options", "Tail tuft, squirrel, or natural", "Sanitary trim included"],
  },
  {
    title: "Matt Removal & Maintenance",
    description: "Gentle de-matting and regular comb-outs to prevent tangles. We'll show you how to manage mats at home too.",
    features: ["Careful de-matting", "Prevention tips", "At-home mat care tips", "Nail trim included"],
  },
  {
    title: "Shedding Elimination",
    description: "Reduce shedding dramatically for both long-haired and short-haired cats.",
    features: ["Long-haired cats", "Short-haired cats", "Less fur everywhere", "Cats love short hair! Healthier, happier cat!"],
  },
  {
    title: "Sanitary & Tummy Trims",
    description: "Hygiene trims for comfort and cleanliness. Quick service with less stress.",
    features: ["Sanitary area trim", "Tummy shave", "Quick service", "Nail trim included"],
  },
]

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const { ref, isInView } = useInView()
  
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

function ServiceCard({ service, index, variant = "light" }: { service: typeof dogServices[0], index: number, variant?: "light" | "dark" }) {
  const { ref, isInView } = useInView()
  const bgClass = variant === "light" ? "bg-card" : "bg-background"
  
  return (
    <div
      ref={ref}
      className={`${bgClass} rounded-2xl p-6 border border-border/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transitionDelay: `${index * 150}ms`,
        transitionProperty: 'opacity, transform, box-shadow',
        transitionDuration: '600ms',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <h3 className="text-xl font-semibold text-foreground mb-2">{service.title}</h3>
      <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li 
            key={i} 
            className="flex items-center gap-2 text-sm"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateX(0)' : 'translateX(-10px)',
              transitionDelay: `${index * 150 + i * 50 + 200}ms`,
              transitionProperty: 'opacity, transform',
              transitionDuration: '400ms'
            }}
          >
            <Check className="w-4 h-4 text-primary shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServicesPage() {
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [showDogNote, setShowDogNote] = useState(false)

  useEffect(() => {
    setHeroLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div 
          className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            opacity: heroLoaded ? 1 : 0,
            transform: heroLoaded ? 'scale(1)' : 'scale(0.8)'
          }}
        />
        
        <div className="container relative mx-auto px-6 text-center">
          <span 
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 transition-all duration-500"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'translateY(0)' : 'translateY(-20px)'
            }}
          >
            Our Services
          </span>
          <h1 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 max-w-4xl mx-auto leading-tight transition-all duration-700"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '100ms'
            }}
          >
            Professional Pet Grooming in Cumming, GA
          </h1>
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-700"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transform: heroLoaded ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '200ms'
            }}
          >
            Noose-free dog grooming and no-sedation cat grooming. Full-view, compassionate care since 1985.
          </p>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-12 bg-card border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <AnimatedSection delay={0}>
              <div className="flex items-center gap-4 p-5 bg-background rounded-2xl group hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-7 h-7 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Noose-Free for Dogs</h3>
                  <p className="text-sm text-muted-foreground">We never restrain dogs by the neck.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className="flex items-center gap-4 p-5 bg-background rounded-2xl group hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">No Sedation for Cats</h3>
                  <p className="text-sm text-muted-foreground">You stay with your cat the entire time.</p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <div className="flex items-center gap-4 p-5 bg-background rounded-2xl group hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Full-View Grooming</h3>
                  <p className="text-sm text-muted-foreground">Open, transparent grooming areas.</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Dog Services */}
      <section className="py-20 md:py-28 bg-background" id="dog-services">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center">
                <Dog className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">Dog Grooming</h2>
                <p className="text-muted-foreground">Always noose-free, always full-view</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100} className="mb-8">
            <button
              onClick={() => setShowDogNote(!showDogNote)}
              className="inline-flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 dark:bg-muted/50 dark:hover:bg-muted/70 rounded-full border border-border/50 text-left transition-all duration-300"
            >
              <Eye className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-sm text-muted-foreground">A quick note about transparency</span>
              <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${showDogNote ? 'rotate-180' : ''}`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showDogNote ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
              <div className="bg-card dark:bg-card/50 rounded-2xl border border-border/50 p-6 max-w-2xl space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  It’s actually best if you’re not present during your dog’s grooming. Dogs tend to get very excited when their owner is nearby, which can make grooming difficult. For the best experience, we recommend letting us work our magic while you relax.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Transparency matters!</strong> Wondering what is happening behind closed doors should cause that icky feeling in your stomach. You should know — there&apos;s a reason for those closed doors. I have witnessed those reasons firsthand in my formative years.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Vanity Fur has nothing to hide.</strong> We welcome curiosity and invite questions and interaction. Everything we do is out in the open, all day, every day. You&apos;re free to pop in any time!
                </p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed italic">
                  (Just don&apos;t arrive too early when your own pet is on the finishing table — there will be premature celebratory activity that prohibits expedient completion of the process!)
                </p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dogServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} variant="light" />
            ))}
          </div>
        </div>
      </section>

      {/* Cat Services */}
      <section className="py-20 md:py-28 bg-card" id="cat-services">
        <div className="container mx-auto px-6">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row md:items-start gap-8 mb-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Cat className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">Cat Grooming</h2>
                    <p className="text-muted-foreground">No sedation — you&apos;re with your cat the whole time</p>
                  </div>
                </div>
                
                <div className="p-5 bg-primary/5 rounded-xl border border-primary/20 mb-6">
                  <p className="text-foreground font-medium mb-3">Serving all cats! Especially Maine Coons, Persians, Himalayans and any other long or short haired breeds:</p>
                  <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Expert matt removal</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Maintenance combouts</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Lion Cuts</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Summer Cuts</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Tummy Shaves</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Sanitary trims</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Shedding ELIMINATION shaves</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Nail trims</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Nail caps</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-primary shrink-0" /> Baths upon special request</li>
                  </ul>
                </div>

                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex items-center gap-2 p-3 bg-background rounded-lg">
                    <Heart className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">You comfort your cat</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded-lg">
                    <Eye className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">Sit across the table</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-background rounded-lg">
                    <Shield className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm text-muted-foreground">No sedation ever</span>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-72 lg:w-80 shrink-0">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cat-1NSIBZGY40T4T13a91IEnUR8NXVMZ2.png"
                    alt="Owner holding and comforting their cat during no-sedation grooming at Vanity Fur Pet Parlor"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center mt-2">You sit with and comfort your cat throughout</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {catServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} variant="dark" />
            ))}
          </div>

          <AnimatedSection delay={500} className="mt-8">
            <div className="p-5 bg-background rounded-2xl border border-border/50 max-w-2xl">
              <p className="text-muted-foreground text-sm">
                Check our <Link href="/reviews" className="text-primary hover:underline">reviews</Link> to see how we make cats&apos; lives better — and their humans&apos; lives easier!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-card border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to Book?
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Call to schedule your appointment or request online.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button 
                asChild
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-11"
              >
                <a href="tel:7706171374">
                  <Phone className="mr-2 w-4 h-4" />
                  (770) 617-1374
                </a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto rounded-full px-8 h-11"
              >
                <Link href="/contact">
                  Request Online
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  )
}
