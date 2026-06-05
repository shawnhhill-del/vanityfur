import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { georgiaLocations } from '@/lib/locations'
import { LocalBusinessJsonLd, BreadcrumbJsonLd } from '@/components/seo/json-ld'
import { Phone, MapPin, ArrowRight, Navigation } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pet Grooming Locations | Areas We Serve in Georgia',
  description: 'Vanity Fur Pet Parlor serves Cumming, GA and surrounding North Georgia areas including Alpharetta, Johns Creek, Milton, Suwanee, Duluth, and more. Find pet grooming near you.',
  keywords: [
    'pet grooming near me',
    'dog grooming Georgia',
    'cat grooming North Georgia',
    'pet grooming Forsyth County',
    'pet grooming Fulton County',
    'pet grooming Gwinnett County',
    'pet grooming Cherokee County'
  ],
  alternates: {
    canonical: '/locations',
  },
  openGraph: {
    title: 'Pet Grooming Locations | Areas We Serve in Georgia',
    description: 'Find professional pet grooming near you. We serve Cumming, Alpharetta, Johns Creek, Milton, Suwanee, and all of North Georgia.',
    url: 'https://vanityfur.us/locations',
    siteName: 'Vanity Fur Pet Parlor',
  },
}

// Group locations by county
const locationsByCounty = georgiaLocations.reduce((acc, location) => {
  const county = location.county
  if (!acc[county]) {
    acc[county] = []
  }
  acc[county].push(location)
  return acc
}, {} as Record<string, typeof georgiaLocations>)

const countyOrder = [
  'Forsyth County',
  'Fulton County', 
  'Gwinnett County',
  'Cherokee County',
  'Dawson County',
  'Hall County',
  'Lumpkin County'
]

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <LocalBusinessJsonLd />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://vanityfur.us' },
        { name: 'Locations', url: 'https://vanityfur.us/locations' }
      ]} />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-card py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                <Navigation className="w-4 h-4" />
                North Georgia Service Areas
              </span>
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                Pet Grooming Locations in{' '}
                <span className="text-primary">Georgia</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Serving Cumming, GA and all of North Georgia with professional noose-free dog grooming and no-sedation cat grooming since 1985.
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

        {/* Main Location */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Visit Our Salon in Cumming, GA
              </h2>
              <div className="bg-background rounded-2xl p-8 border border-border/50">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="text-lg font-semibold text-foreground">1735 Buford Hwy Suite 210</span>
                </div>
                <p className="text-muted-foreground mb-6">Cumming, GA 30041</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild>
                    <a href="https://maps.google.com/?q=1735+Buford+Hwy+Suite+210+Cumming+GA+30041" target="_blank" rel="noopener noreferrer">
                      Open in Google Maps
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="tel:7706171374">
                      <Phone className="w-4 h-4 mr-2" />
                      (770) 617-1374
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Locations by County */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground text-center mb-4">
              Areas We Serve
            </h2>
            <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
              We proudly serve pet owners throughout North Georgia. Click on your city to learn more about our services in your area.
            </p>
            
            <div className="space-y-12">
              {countyOrder.map((county) => {
                const locations = locationsByCounty[county]
                if (!locations) return null
                
                return (
                  <div key={county}>
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {county}
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                      {locations.map((location) => (
                        <Link
                          key={location.slug}
                          href={`/locations/${location.slug}`}
                          className="group bg-card rounded-xl p-5 border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                {location.city}
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {location.distance}
                              </p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                Professional Pet Grooming Serving All of North Georgia
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p className="mb-4">
                  Vanity Fur Pet Parlor has been serving pets and their families throughout North Georgia since 1985. Located in Cumming, GA, we are conveniently accessible to pet owners in Forsyth County, Fulton County, Gwinnett County, Cherokee County, and beyond.
                </p>
                <p className="mb-4">
                  Our unique approach to pet grooming sets us apart from every other grooming facility in the region. We are the only groomer offering 100% noose-free dog grooming and interactive no-sedation cat grooming. Pet owners from Alpharetta, Johns Creek, Milton, Suwanee, and surrounding areas make the trip specifically for our gentle, stress-free techniques.
                </p>
                <p className="mb-4">
                  Whether you&apos;re in Cumming, Alpharetta, Johns Creek, Milton, Suwanee, Duluth, Buford, Sugar Hill, Dawsonville, Gainesville, Roswell, Canton, Woodstock, Ball Ground, or Dahlonega, we invite you to experience the Vanity Fur difference. Our decades of experience, combined with our compassionate approach, make us the trusted choice for thousands of North Georgia pet families.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Ready to Schedule Your Pet&apos;s Appointment?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Call us today to book your pet&apos;s grooming session. We look forward to welcoming you to the Vanity Fur family!
            </p>
            <Button asChild size="lg" className="text-base">
              <a href="tel:7706171374">
                <Phone className="w-5 h-5 mr-2" />
                Call (770) 617-1374
              </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
