"use client"

import Image from "next/image"
import { CheckCircle, Heart, Shield } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Always Noose-Free Dog Grooming",
    description: "We never use grooming nooses like every other grooming facility! We use gentle physical support and calm reassuring voices to keep pets positioned correctly. Our tables are low, allowing us to sit at eye level, fostering a more intimate connection and direct exchange of energy that animals truly understand.",
    image: "/images/yorkie-black-bg.jpg",
    imageAlt: "Beautifully groomed Yorkie with flower bow - noose-free dog grooming at Vanity Fur Pet Parlor Cumming GA",
  },
  {
    icon: Heart,
    title: "No Sedation Cat Grooming",
    description: "Most groomers sedate cats or refuse them entirely. We never sedate! You help hold and comfort your kitty through the 30-45 minute process, then take them home — the most stress free experience possible. Lion Cuts, Sanitary Trims, Expert matt removal, Nail Trims. Read our reviews and testimonials!",
    image: "/images/persian-cat-teal.jpg",
    imageAlt: "Stunning white Persian cat with fluffy coat - no sedation cat grooming at Vanity Fur",
  },
  {
    icon: CheckCircle,
    title: "Full-View, Transparent Grooming",
    description: "Wondering what happens behind closed doors? At Vanity Fur, everything is full view all day every day! We welcome curiosity and invite questions or pop-ins anytime! (Except for just a little early from your pick up time, when your own pet is likely to be on the finishing table. This is because there will be premature celebratory activity, prohibiting expedient completion of the process! LOL!)",
    image: "/images/shihtzu-blue-bones.jpg",
    imageAlt: "Adorable Shih Tzu with perfect grooming - full-view transparent pet grooming in Cumming GA",
  }
]

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden">
      {/* Background decorations using site theme */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />
      
      <div className="container relative mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            <Heart className="w-4 h-4" />
            Why Vanity Fur
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            The pet grooming experience
            <span className="block text-primary">they&apos;ve been waiting for.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Premium care that makes tails wag and purrs rumble
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-background rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image - face focused with red velvet vignette */}
              <div className="relative h-80 overflow-hidden bg-[#3A0808]">
                <div className="absolute top-4 left-4 z-10">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.imageAlt}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Red velvet vignette to blend photo backdrop into card */}
                <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(60,8,8,0.4)]" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                {/* Subtle warm accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8B1A1A]/40 to-transparent" />
              </div>
              
              {/* Content */}
              <div className="p-5 sm:p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 leading-snug">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm line-clamp-6 sm:line-clamp-none">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
