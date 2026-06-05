import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { getLocationBySlug, getAllLocationSlugs, georgiaLocations } from '@/lib/locations'
import { LocalBusinessJsonLd, BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/json-ld'
import { Phone, MapPin, Clock, Check, Star, ArrowRight, Scissors, Cat } from 'lucide-react'

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({
    city: slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params
  const location = getLocationBySlug(city)
  
  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  const title = `Pet Grooming ${location.city}, ${location.state} | Dog & Cat Grooming Near ${location.city}`
  const description = `Professional pet grooming serving ${location.city}, GA. Noose-free dog grooming and no-sedation cat grooming. ${location.distance}. Call (770) 617-1374.`

  return {
    title,
    description,
    keywords: location.keywords,
    alternates: {
      canonical: `/locations/${location.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://vanityfur.us/locations/${location.slug}`,
      siteName: 'Vanity Fur Pet Parlor',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: 'https://vanityfur.us/images/home-20page-20lady-20image.png',
          width: 1200,
          height: 630,
          alt: `Pet Grooming serving ${location.city}, GA`,
        },
      ],
    },
  }
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params
  const location = getLocationBySlug(city)

  if (!location) {
    notFound()
  }

  const nearbyLocations = georgiaLocations
    .filter(loc => loc.slug !== location.slug)
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-background">
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://vanityfur.us' },
        { name: 'Locations', url: 'https://vanityfur.us/locations' },
        { name: location.city, url: `https://vanityfur.us/locations/${location.slug}` }
      ]} />
      <ServiceJsonLd 
        name={`Pet Grooming in ${location.city}`}
        description={location.description}
        areaServed={location.city}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-card py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                <MapPin className="w-4 h-4" />
                Serving {location.city}, {location.state}
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                Pet Grooming Near{' '}
                <span className="text-primary">{location.city}, GA</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {location.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-base">
                  <a href="tel:7706171374">
                    <Phone className="w-5 h-5 mr-2" />
                    Call (770) 617-1374
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-base">
                  <Link href="/contact">
                    Get Directions
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                  {location.city} Pet Owners Trust Vanity Fur
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {location.content.intro}
                </p>
                <div className="bg-background rounded-2xl p-6 border border-border/50 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="font-semibold text-foreground">{location.distance}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Serving {location.nearbyAreas.join(', ')}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="ml-2 text-foreground font-medium">1000&apos;s of Happy Pet Parents</span>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/images/tracey-with-dog.png"
                    alt={`Pet grooming serving ${location.city}, GA`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground text-center mb-12">
              Why {location.city} Pet Owners Choose Us
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {location.content.whyChooseUs.map((reason, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border/50 flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-4">
                Services for {location.city} Pets
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional grooming services available for {location.city} area pet owners
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
              {location.content.services.map((service, index) => (
                <div key={index} className="bg-background rounded-xl p-6 border border-border/50 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index % 2 === 0 ? (
                      <Scissors className="w-6 h-6 text-primary" />
                    ) : (
                      <Cat className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <h3 className="font-semibold text-foreground">{service}</h3>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button asChild size="lg">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-20 bg-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
                Ready to Book Your {location.city} Pet&apos;s Appointment?
              </h2>
              <p className="text-muted-foreground mb-8">
                Call us today to schedule your pet&apos;s grooming session. We look forward to meeting you and your furry family member!
              </p>
              <div className="bg-card rounded-2xl p-8 border border-border/50 max-w-md mx-auto">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                  <a href="tel:7706171374" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">
                    (770) 617-1374
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
                  <Clock className="w-4 h-4" />
                  <span>Mon-Fri 8am-5pm, Sat 9am-3pm</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>1735 Buford Hwy Suite 210, Cumming, GA 30041</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Locations */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground text-center mb-8">
              Also Serving Nearby Areas
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {nearbyLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="bg-card rounded-xl p-4 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all text-center group"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {loc.city}
                  </h3>
                  <p className="text-sm text-muted-foreground">{loc.distance}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/locations" className="text-primary hover:underline font-medium">
                View All Service Areas
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
