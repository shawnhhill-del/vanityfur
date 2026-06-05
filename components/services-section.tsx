"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Scissors, Sparkles, PawPrint, Stethoscope } from "lucide-react"
import type { ReactNode } from "react"

const services: { icon: typeof Scissors; title: string; description: ReactNode }[] = [
  {
    icon: Scissors,
    title: "Noose-Free Dog Grooming",
    description: "Grooming at Vanity Fur is 100% noose free! While it is the industry standard to restrain dogs by the neck with a \"Grooming Noose\", this is just another one of the many ways we stand apart! Our methods revolve around compassion, respect, common sense and safety. We connect with the heart and mind, not brute force and awkward struggle, with your pet dangling, suspended and strung up on a noose! I have always found the practice to be barbaric and unproductive."
  },
  {
    icon: Sparkles,
    title: "No-Sedation Cat Grooming",
    description: (
      <>
        Most groomers sedate cats or refuse them entirely. We never sedate! You help hold and comfort your kitty through the 30-45 minute process, then take them home — the most stress free experience possible. Lion Cuts, Sanitary Trims, Expert matt removal, Nail Trims. Read our{" "}
        <Link href="/reviews#cats" className="text-primary hover:underline font-medium">
          reviews and testimonials
        </Link>
        !
      </>
    )
  },
  {
    icon: PawPrint,
    title: "Nail Care",
    description: "Grooming at Vanity Fur always comes with a nail trim. We also recommend a nail \"filing\" afterwards to further shorten, smooth and round the fresh cut edge on each nail. Notice the difference here too, where we stand apart! We file with a smooth high speed rotary tool with a diamond wheel, as opposed to most other places, \"grinding\" with rough low grit sandpaper disks on a dremel that create loud vibration and heat that dogs hate, fear and fight. Many pets have become nervous from this process at other places. We take our time, using gentle techniques to make the experience become stress free as possible and keep your dog's paws healthy and comfortable."
  },
  {
    icon: Stethoscope,
    title: "Ear Care",
    description: "We understand the importance of ear health and proper maintenance! We know the delicate anatomy of the ear and breed specific requirements. Breeds that grow hair inside the canal will have that hair properly, painlessly and thoroughly removed before the bath. All dogs receive an ear lavage during the bath, flushing out all wax and debris or buildup, sending your pet home with PH balanced, clean, fresh, dry ears! You will also be made aware of any potential issues we observe like infections, yeast or allergy symptoms that might need further attention from your vet."
  }
]

export function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-card" id="services">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            What We Offer
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Premium care for your beloved companions
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`border-b border-border last:border-0 transition-all duration-300 ${
                openIndex === index ? "bg-background" : ""
              }`}
            >
              <button
                type="button"
                className="w-full py-6 md:py-8 flex items-center justify-between gap-4 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                  }`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 ${
                  openIndex === index 
                    ? "bg-primary border-primary rotate-180" 
                    : "group-hover:border-primary/50"
                }`}>
                  <ChevronDown className={`w-5 h-5 transition-colors ${
                    openIndex === index ? "text-primary-foreground" : "text-muted-foreground"
                  }`} />
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-[500px] pb-6 md:pb-8" : "max-h-0"
              }`}>
                <p className="text-muted-foreground leading-relaxed pl-4 sm:pl-16 md:pl-20 pr-4 sm:pr-14 text-sm sm:text-base">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
