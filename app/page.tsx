import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { DogGroomingSection } from "@/components/dog-grooming-section"
import { FeaturesSection } from "@/components/features-section"
import { CatGroomingSection } from "@/components/cat-grooming-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <DogGroomingSection />
        <FeaturesSection />
        <CatGroomingSection />
        <TestimonialsSection />
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
