"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X, PawPrint, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen
          ? "bg-card/95 backdrop-blur-xl shadow-lg shadow-foreground/5" 
          : "bg-card/50 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <PawPrint className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-2xl font-logo tracking-wide text-foreground" style={{ fontFamily: 'var(--font-logo)' }}>
              Vanity Fur
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/locations", label: "Locations" },
              { href: "/gallery", label: "Gallery" },
              { href: "/reviews", label: "Reviews" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4 group-hover:left-[12.5%]" />
              </Link>
            ))}
          </nav>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <Button 
              asChild
              variant="outline"
              className="rounded-full px-4 h-10"
            >
              <a href="tel:7706171374" title="Call (770) 617-1374 - Press 2 for cats">
                <Phone className="w-4 h-4" />
              </a>
            </Button>
            <Button 
              asChild
              className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-6 transition-all duration-300 hover:shadow-lg hover:shadow-foreground/20 hover:-translate-y-0.5"
            >
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-1">
            <Button 
              asChild
              variant="ghost"
              size="icon"
              className="rounded-full w-9 h-9"
            >
              <a href="tel:7706171374" title="Call (770) 617-1374">
                <Phone className="w-4 h-4" />
              </a>
            </Button>
            <ThemeToggle />
            <button
              type="button"
              className="p-2 text-foreground hover:bg-muted rounded-full transition-colors flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? "max-h-[600px] opacity-100 mt-4 pointer-events-auto" 
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col gap-1 pb-4 bg-card/95 rounded-xl p-3">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/locations", label: "Locations" },
              { href: "/gallery", label: "Gallery" },
              { href: "/reviews", label: "Reviews" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-all duration-200 active:scale-[0.98]"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button 
              asChild
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12"
            >
              <a href="tel:7706171374" onClick={() => setIsMenuOpen(false)}>
                <Phone className="mr-2 w-4 h-4" />
                Call (770) 617-1374
              </a>
            </Button>
            <p className="mt-2 text-xs text-center text-muted-foreground">Press 2 for cat appointments</p>
          </nav>
        </div>
      </div>
    </header>
  )
}
