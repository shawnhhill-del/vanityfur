import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Heart, CheckCircle, Star, Shield, ArrowRight, Phone, Eye, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us - Meet the Groomers | Vanity Fur Pet Parlor Cumming GA",
  description: "Meet Tracey and the team at Vanity Fur Pet Parlor in Cumming, GA. Family-owned since 1985, offering noose-free dog grooming and no-sedation cat grooming in Forsyth County.",
  keywords: ["noose-free dog grooming Cumming GA", "cat grooming Cumming GA", "pet grooming Forsyth County Georgia", "no sedation cat grooming", "pet groomers near me Cumming"],
  alternates: {
    canonical: 'https://vanityfur.us/about',
  },
  openGraph: {
    title: "About Vanity Fur Pet Parlor - Noose-Free Pet Grooming Cumming GA",
    description: "Family-owned since 1985. Compassionate, full-view, noose-free dog grooming and no-sedation cat grooming in Cumming, Georgia and Forsyth County.",
    url: 'https://vanityfur.us/about',
  },
}

const team = [
  {
    name: "Tracey",
    role: "Owner & Master Groomer",
    initials: "T",
    image: "/images/tracey-with-dog.png",
    bio: "I grew up in Powder Springs on a small farm and have been passionate about my love for animals all of my life! I always dreamed of becoming a Vet and began working at an animal hospital at 18 and later as a Vet Tech. I discovered that to be a Vet was much too sad of a profession, surrounded by tragedy and death every day. I decided to follow my other passion, technical drawing and art as an Architect. But I did not find what I wanted at Southern Tech. I finally found my perfect fit when I met my mentor, Donna Haas, of Puppy Toes Grooming. I left college and began my apprenticeship with her in 1985. I have never looked back! This is truly my calling and I am so blessed to have a profession that I truly still enjoy and love, even after almost 35 years!"
  },
  {
    name: "Sarah",
    role: "Master Stylist / Manager",
    initials: "S",
    image: "/images/sarah.png",
    bio: "Sarah is an incredibly talented artist and animal lover! I have known her since she was 14, when fate brought our families together. I recognized her talent and began her training in 1997. She was the best student I have ever had! She moved on with her life with her military husband, grooming dogs all over the country. Fate has now brought her back to this area, after an unfortunate divorce. I feel so blessed to have this fabulous woman join me to work by my side. I have searched for so long to find someone with her unique set of skills to be able to meet my very high standards!"
  },
  {
    name: "Shawn",
    role: "Video Production",
    initials: "S",
    image: "/images/shawn.png",
    bio: "Shawn is my highly trained husband, in charge of IT, photography, upcoming video and content production for our website. He is also producing our YouTube and instructional videos. Keep checking back, maybe your pet will, with your permission, be featured and become a Youtube sensation or star in one of our videos!"
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            About Vanity Fur Pet Parlor
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Premium Pet Grooming in Cumming, GA
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Vanity Fur offers an upscale personal experience for you and your dog or cat. Our grooming is compassionate, full view, and always <strong className="text-foreground">noose-free</strong>. We are animal lovers and artists, with over 30 years of grooming mastery, providing breed-standard cuts and creative custom preferences.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              What Sets Us Apart
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Our Core Principles
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We stand apart because we have over 30 years of practices developed around <strong className="text-foreground">kindness, respect, compassion, safety and common sense</strong>. Our techniques were developed to make pets feel secure, confident and proud, while their owners feel peace of mind and happy with the way their fur baby looks and feels at the end of the day, knowing that they were treated with love and excellence of care!
            </p>
          </div>

          {/* Why We Are Different */}
          <div className="max-w-4xl mx-auto mb-16">
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
              Why We Are Different
            </h3>
            <p className="text-center text-muted-foreground mb-10">
              We proudly diverge from industry norms:
            </p>
            <div className="grid gap-3 sm:gap-4">
              <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/50 flex items-start gap-3 sm:gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">&quot;Grooming Nooses&quot;</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Never have and never will use or need them!</p>
                </div>
              </div>
              <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/50 flex items-start gap-3 sm:gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                  <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">&quot;Full View&quot; Transparent Grooming</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">For all to see, all day, every day.</p>
                </div>
              </div>
              <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/50 flex items-start gap-3 sm:gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Nail &quot;Filing&quot; Instead of &quot;Grinding&quot;</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">Your dog will enjoy gentle nail filing and happy healthy paws.</p>
                </div>
              </div>
              <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/50 flex items-start gap-3 sm:gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Comprehensive Ear Care</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">You can rely that your dog&apos;s ear canals will be comprehensively and competently cared for and reported on.</p>
                </div>
              </div>
              <div className="bg-background rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border/50 flex items-start gap-3 sm:gap-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground mb-1 text-sm sm:text-base">Sedation-Free Interactive Cat Grooming</h4>
                  <p className="text-muted-foreground text-xs sm:text-sm">No one else offers sedation-free, interactive, low-stress cat grooming where you are involved with every step and take your cat home immediately, happy and beautifully groomed.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Artists & Animal Lovers */}
          <div className="max-w-3xl mx-auto text-center bg-background rounded-3xl p-8 md:p-12 border border-border/50">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Animal Lovers &amp; Artists
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are not just pet groomers. We are animal lovers and also artists. You get <strong className="text-foreground">BOTH</strong>! Each pet leaves us, our furry masterpiece, created with love!
            </p>
          </div>
        </div>
      </section>

      {/* Cat Grooming Section */}
      <section className="py-20 md:py-28 bg-background" id="cat-grooming">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                Specialized Cat Grooming in Cumming, GA
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
                A Unique Cat Grooming Experience
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I <strong className="text-foreground">LOVE</strong> cats! I have been grooming cats since 1985. Through decades of hands-on experience, I have developed specialized techniques that allow me to offer a unique and compassionate grooming experience unavailable anywhere else.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                This experience takes place in the <strong className="text-foreground">&quot;Cat Room&quot;</strong> at Vanity Fur Pet Parlor — a quiet space infused with cat pheromones and calming visuals. <strong className="text-foreground">You sit across the table, holding and comforting your cat</strong> while I groom. We decide everything together during the assessment — no surprises.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">No Sedation — Ever</h4>
                    <p className="text-muted-foreground text-sm">Gentle techniques mean your cat stays calm naturally</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">You&apos;re With Your Cat</h4>
                    <p className="text-muted-foreground text-sm">Sit across the table, hold and comfort your cat throughout</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">30-45 Minutes</h4>
                    <p className="text-muted-foreground text-sm">Quick, efficient grooming. Cats go home immediately after.</p>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Book Cat Grooming by Phone</h4>
                    <p className="text-muted-foreground text-sm">Personalized consultation ensures the best experience</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  We require phone booking for cat grooming appointments. This allows us to learn about your cat&apos;s unique needs, temperament, and schedule the perfect time slot for a calm, successful grooming session.
                </p>
                <Button 
                  asChild
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full"
                >
                  <a href="tel:7706171374">
                    Call (770) 617-1374
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-muted">
                <Image
                  src="/images/tracey-with-cat.png"
                  alt="Tracey holding a beautiful white Persian cat - Cat grooming expert at Vanity Fur Pet Parlor Cumming GA"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 border border-border/50">
                <p className="text-sm font-medium text-foreground">Cat Grooming Since</p>
                <p className="text-3xl font-serif font-semibold text-primary">1985</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-card" id="team">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
              Our Team
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
              Meet the Family
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              The passionate people behind Vanity Fur Pet Parlor
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="group bg-background rounded-3xl overflow-hidden border border-border/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
              >
                <div className="relative h-72 md:h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-xl font-semibold text-background">{member.name}</h3>
                    <p className="text-primary">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container relative mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-background mb-6">
            Book Your Pet&apos;s Next S&apos;Paw Day
          </h2>
          <p className="text-background/70 mb-10 max-w-xl mx-auto text-lg">
            Experience the Vanity Fur difference with compassionate, noose-free grooming for dogs and no-sedation grooming for cats.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
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
              className="rounded-full px-8 h-14 text-base border-2 border-background/30 text-background hover:bg-background/10 bg-transparent transition-all duration-300"
            >
              <Link href="/gallery">View Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
