import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, PawPrint, Heart, Facebook, Instagram, Youtube, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-foreground text-background pt-20 pb-0 overflow-visible">
      {/* Kitten peeking over the top - positioned in the CTA/Footer gap */}
      <div className="absolute -top-20 right-8 md:right-20 lg:right-32 w-24 h-28 md:w-28 md:h-32 z-50 pointer-events-none">
        <Image
          src="/images/kitten-20hanging.png"
          alt="Adorable kitten peeking over footer - Vanity Fur Pet Parlor cat grooming Cumming GA"
          fill
          className="object-contain"
          style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
        />
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <PawPrint className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-logo text-background" style={{ fontFamily: 'var(--font-logo)' }}>
                Vanity Fur
              </span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              Premium pet grooming with genuine care and compassion. Family-owned and operated since 1985.
            </p>
            <div className="space-y-3 mb-6">
              <a href="tel:7706171374" className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                <span>(770) 617-1374<br /><span className="text-xs text-background/50">Press 2 for cats</span></span>
              </a>
              <a href="mailto:tracey@vanityfur.us" className="flex items-center gap-3 text-sm text-background/70 hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                tracey@vanityfur.us
              </a>
              <div className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>2539 Pinetree Rd,<br />Cumming, GA 30041</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://www.facebook.com/tracey.moffittcuthbertson" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/vanityfur.us/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://x.com/vanityfur" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a 
                href="https://www.yelp.com/biz/vanity-fur-pet-parlor-cumming" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Yelp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.595 5.867l-3.75-3.463c-.72-.666-1.92.02-1.812.97l.54 4.86c.06.54.42.975.96 1.08a9.292 9.292 0 0 0 3.93-.27c.54-.15.84-.72.72-1.26l-.588-1.917zm-6.552-.396l-.54 4.86c-.06.54-.42.975-.96 1.08a9.32 9.32 0 0 1-3.93-.27c-.54-.15-.84-.72-.72-1.26l.588-1.917 3.75-3.463c.72-.666 1.92.02 1.812.97zM6.24 11.43l-4.995-1.433a1.072 1.072 0 0 1-.693-1.459 9.194 9.194 0 0 1 2.363-3.252 1.072 1.072 0 0 1 1.597.206l2.904 4.308c.564.83-.216 1.906-1.176 1.63zm5.352-5.685V.99c0-.54.36-1.02.9-1.08 1.38-.15 2.79 0 4.14.39.54.15.84.69.72 1.23l-1.86 4.5c-.36.87-1.62.87-1.98 0l-1.02-2.475c-.36-.87-.72-.87-.9.19z" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@VanityFurPetParlor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-background mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/reviews", label: "Reviews" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Book an Appointment" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-background/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-background mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                { href: "/services#dog-services", label: "Dog Grooming" },
                { href: "/services#cat-services", label: "Cat Grooming" },
                { href: "/services", label: "All Services" },
              ].map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href} 
                    className="flex items-center gap-2 text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    <PawPrint className="w-3 h-3 text-primary" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold text-background mb-6">Hours</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-background">Monday - Friday</span>
                <span className="block text-background/70">9:30 AM - 6:30 PM</span>
              </li>
              <li>
                <span className="text-primary">Saturday</span>
                <span className="block text-background/70">9:30 AM - 6:30 PM</span>
              </li>
              <li>
                <span className="text-primary">Sunday</span>
                <span className="block text-background/70">Closed</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 pb-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Vanity Fur Pet Parlor. All rights reserved.
          </p>
          <p className="text-sm text-background/50 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for pets and their families.
          </p>
        </div>
      </div>
      
      {/* Dogs at the very bottom - flush right */}
      <div className="relative w-full flex justify-end">
        <div className="relative w-[350px] md:w-[450px] lg:w-[550px] h-24 md:h-32 lg:h-40">
          <Image
            src="/images/doggies-20on-20buttom.png"
            alt="Happy groomed dogs and cats - Professional pet grooming at Vanity Fur Pet Parlor Forsyth County"
            fill
            className="object-contain object-right-bottom"
          />
        </div>
      </div>
    </footer>
  )
}
