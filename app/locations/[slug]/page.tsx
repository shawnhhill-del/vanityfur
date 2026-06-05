import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { getLocationBySlug, getAllLocationSlugs, georgiaLocations } from '@/lib/locations'
import { BreadcrumbJsonLd, ServiceJsonLd } from '@/components/seo/json-ld'
import { 
  Phone, 
  MapPin, 
  ArrowRight, 
  Clock, 
  CheckCircle, 
  Star,
  Dog,
  Cat,
  Scissors,
  Heart
} from 'lucide-react'

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for all locations
export async function generateStaticParams() {
  const slugs = getAllLocationSlugs()
  return slugs.map((slug) => ({ slug }))
}

// Generate metadata for each location
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const location = getLocationBySlug(slug)
  
  if (!location) {
    return {
      title: 'Location Not Found',
    }
  }

  const title = `Pet Grooming ${location.city}, ${location.state} | Dog & Cat Grooming Near ${location.city}`
  const description = `Professional pet grooming for ${location.city}, ${location.state} residents. ${location.distance} from Vanity Fur Pet Parlor. Noose-free dog grooming & no-sedation cat grooming. Call (770) 617-1374.`

  return {
    title,
    description,
    keywords: [
      ...location.keywords,
      `noose-free dog grooming ${location.city}`,
      `cat grooming near ${location.city}`,
      `pet salon ${location.county}`,
      `best pet groomer near ${location.city}`
    ],
    alternates: {
      canonical: `/locations/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://vanityfur.us/locations/${slug}`,
      siteName: 'Vanity Fur Pet Parlor',
      type: 'website',
      images: [
        {
          url: 'https://vanityfur.us/images/home-20page-20lady-20image.png',
          width: 1200,
          height: 630,
          alt: `Pet Grooming for ${location.city}, Georgia - Vanity Fur Pet Parlor`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Pet Grooming ${location.city}, GA | Vanity Fur Pet Parlor`,
      description: `${location.distance}. Noose-free dog grooming & no-sedation cat grooming for ${location.city} pet owners.`,
    },
  }
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params
  const location = getLocationBySlug(slug)

  if (!location) {
    notFound()
  }

  // Get nearby locations for internal linking
  const nearbyLocations = georgiaLocations
    .filter(loc => loc.slug !== slug && loc.county === location.county)
    .slice(0, 3)

  const otherLocations = georgiaLocations
    .filter(loc => loc.slug !== slug && loc.county !== location.county)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: 'https://vanityfur.us' },
        { name: 'Locations', url: 'https://vanityfur.us/locations' },
        { name: location.city, url: `https://vanityfur.us/locations/${slug}` }
      ]} />
      <ServiceJsonLd 
        name={`Pet Grooming for ${location.city} Residents`}
        description={location.description}
        areaServed={`${location.city}, ${location.state}`}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/5 via-background to-card py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <Link href="/locations" className="hover:text-primary transition-colors">Locations</Link>
                <span>/</span>
                <span className="text-foreground">{location.city}</span>
              </nav>

              <div className="text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                  <MapPin className="w-4 h-4" />
                  {location.distance}
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
                  Pet Grooming for{' '}
                  <span className="text-primary">{location.city}, {location.state}</span>
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
          </div>
        </section>

        {/* Location-Specific Intro */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                    Trusted Pet Grooming for {location.city} Pet Owners
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {location.content.intro}
                  </p>
                  <div className="space-y-3">
                    {location.content.whyChooseUs.map((reason, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-foreground">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Our Cumming Location
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-foreground">Address</p>
                      <p className="text-muted-foreground">1735 Buford Hwy Suite 210</p>
                      <p className="text-muted-foreground">Cumming, GA 30041</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" />
                        Hours
                      </p>
                      <p className="text-muted-foreground">Mon-Fri: 8am - 5pm</p>
                      <p className="text-muted-foreground">Saturday: 9am - 3pm</p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground flex items-center gap-2">
                        <Phone className="w-4 h-4 text-primary" />
                        Phone
                      </p>
                      <a href="tel:7706171374" className="text-primary hover:underline">(770) 617-1374</a>
                    </div>
                  </div>
                  <Button asChild className="w-full mt-6">
                    <a href="https://maps.google.com/?q=1735+Buford+Hwy+Suite+210+Cumming+GA+30041" target="_blank" rel="noopener noreferrer">
                      Open in Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services for This Location */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Services Available for {location.city} Pets
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {location.city} pet owners have access to our full range of professional grooming services.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {location.content.services.map((service, index) => (
                  <div 
                    key={index}
                    className="bg-background rounded-xl p-5 border border-border/50 hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      {index % 4 === 0 && <Dog className="w-5 h-5 text-primary" />}
                      {index % 4 === 1 && <Cat className="w-5 h-5 text-primary" />}
                      {index % 4 === 2 && <Scissors className="w-5 h-5 text-primary" />}
                      {index % 4 === 3 && <Heart className="w-5 h-5 text-primary" />}
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{service}</h3>
                    <Link 
                      href="/services"
                      className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                    >
                      Learn more
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">
                    View All Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Why {location.city} Pet Owners Choose Vanity Fur
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber-500/10 to-amber-500/5 rounded-2xl p-6 border border-amber-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Dog className="w-8 h-8 text-amber-600 dark:text-amber-400" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">Noose-Free Dog Grooming</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    We never use grooming nooses or neck restraints. Our gentle approach uses physical support and calm voices, making grooming stress-free for your dog.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="w-4 h-4 text-amber-500" />
                      100% noose-free - always
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="w-4 h-4 text-amber-500" />
                      Full-view grooming
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="w-4 h-4 text-amber-500" />
                      Nail filing, not grinding
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Cat className="w-8 h-8 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">No-Sedation Cat Grooming</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Most groomers sedate cats or refuse them. We offer interactive grooming where you stay, hold, and comfort your kitty through the entire 30-45 minute process.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Never sedated
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      You stay with your cat
                    </li>
                    <li className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      Take them home immediately
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Teaser */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Trusted by Thousands of Pet Parents
              </h2>
              <p className="text-muted-foreground mb-8">
                Pet owners from {location.city} and across {location.county} have made Vanity Fur their trusted groomer.
              </p>
              <Button asChild variant="outline" size="lg">
                <Link href="/reviews">
                  Read Reviews
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Nearby Areas - Internal Linking */}
        {(nearbyLocations.length > 0 || otherLocations.length > 0) && (
          <section className="py-16 md:py-20">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center">
                  We Also Serve These Nearby Areas
                </h2>
                
                {nearbyLocations.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Other {location.county} Cities
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {nearbyLocations.map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/locations/${loc.slug}`}
                          className="group bg-card rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-all"
                        >
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {loc.city}
                          </span>
                          <span className="text-sm text-muted-foreground block">
                            {loc.distance}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {otherLocations.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Other Areas We Serve
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {otherLocations.map((loc) => (
                        <Link
                          key={loc.slug}
                          href={`/locations/${loc.slug}`}
                          className="group bg-card rounded-lg p-4 border border-border/50 hover:border-primary/50 transition-all"
                        >
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {loc.city}
                          </span>
                          <span className="text-sm text-muted-foreground block">
                            {loc.distance}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-center mt-8">
                  <Link href="/locations" className="text-primary hover:underline inline-flex items-center gap-1">
                    View all service areas
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Local SEO Content */}
        <section className="py-16 md:py-20 bg-card">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto prose prose-lg text-muted-foreground">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">
                About Pet Grooming Services for {location.city}, Georgia
              </h2>
              <p>
                For {location.city} pet owners seeking exceptional grooming services, Vanity Fur Pet Parlor offers a unique experience you simply won&apos;t find elsewhere. Our salon in Cumming, GA ({location.distance}) provides professional dog and cat grooming using gentle, stress-free techniques developed over more than 30 years.
              </p>
              <p>
                Whether you have a dog that needs breed-specific cuts, teddy bear styles, or de-shedding treatments, or a cat requiring lion cuts, matt removal, or sanitary trims, our experienced groomers deliver outstanding results with compassion and care.
              </p>
              <p>
                {location.city} residents particularly appreciate our transparent, full-view grooming philosophy. Unlike other groomers who work behind closed doors, we welcome you to watch your pet&apos;s grooming session at any time. For cat owners, our interactive grooming lets you stay with your feline companion throughout the entire process.
              </p>
              <h3 className="font-serif text-xl font-semibold text-foreground mt-8 mb-4">
                Getting to Vanity Fur from {location.city}
              </h3>
              <p>
                Our Cumming location is easily accessible from {location.city}. Located at 1735 Buford Hwy Suite 210, we&apos;re {location.distance.toLowerCase()}. Many of our loyal clients make the trip from {location.nearbyAreas.join(', ')} and throughout {location.county} for grooming they trust.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Schedule Your {location.city} Pet&apos;s Appointment
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Give your pet the gentle, stress-free grooming experience they deserve. Call us today to book your appointment.
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
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
