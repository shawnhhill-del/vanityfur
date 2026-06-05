import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative bg-gradient-to-b from-background to-secondary/50 pt-20 pb-0 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
            Book Your Pet&apos;s Next
            <span className="block">S&apos;Paw Day</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to give your furry friend the pampering they deserve? Experience our noose-free dog grooming and no-sedation cat grooming.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-1"
            >
              <a href="tel:7706171374">
                <Phone className="mr-2 w-5 h-5" />
                Call to Book
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-8 h-14 text-base border-2 bg-card hover:bg-muted transition-all duration-300"
            >
              <Link href="/contact">
                Request Online
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">(770) 617-1374</span> — Press 2 for cat appointments
          </p>
        </div>
      </div>
    </section>
  )
}
