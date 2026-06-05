"use client"

import React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, CheckCircle, Heart, Clock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

// Note: For client components, metadata should be in a parent layout or page.tsx
// SEO title: "Contact Us | Vanity Fur Pet Parlor - Book Pet Grooming in Cumming, GA"
// SEO description: "Book your pet grooming appointment at Vanity Fur Pet Parlor in Cumming, GA. Call us or fill out our contact form. Open Mon-Sat 9:30 AM - 6:30 PM."
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    description: "Give us a call during business hours",
    value: "(770) 617-1374",
    href: "tel:+17706171374"
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a message anytime",
    value: "tracey@vanityfur.us",
    href: "mailto:tracey@vanityfur.us"
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Visit us at our parlor",
    value: "2539 Pinetree Rd, Cumming, GA 30041",
    href: "https://maps.google.com"
  }
]

const businessHours = [
  { day: "Monday - Friday", hours: "9:30 AM - 6:30 PM" },
  { day: "Saturday", hours: "9:30 AM - 6:30 PM" },
  { day: "Sunday", hours: "Closed" }
]

const whyChooseUs = [
  {
    icon: CheckCircle,
    title: "Expert Groomers",
    description: "Certified professionals with years of experience"
  },
  {
    icon: Heart,
    title: "Gentle Care",
    description: "We treat every pet with love and patience"
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Convenient appointment times to fit your schedule"
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petType: "",
    breed: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: data.message || 'Message sent successfully!' })
        setFormData({
          name: "",
          email: "",
          phone: "",
          petName: "",
          petType: "",
          breed: "",
          service: "",
          preferredDate: "",
          preferredTime: "",
          message: ""
        })
      } else {
        setSubmitStatus({ type: 'error', message: data.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please call us instead.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            Book Your Pet&apos;s S&apos;Paw Day
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            We&apos;d love to hear from you. Call to schedule an appointment or fill out our contact form.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14"
            >
              <a href="tel:7706171374">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">(770) 617-1374</span> — Press 2 for cat appointments
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-card rounded-3xl border border-border/50 p-6 md:p-8 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{info.description}</p>
                <a 
                  href={info.href}
                  className="text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                >
                  {info.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-3xl border border-border/50 p-8 md:p-10">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">Send us a message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="Sarah Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(770) 617-1374"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="petName" className="text-foreground">Pet&apos;s Name</Label>
                    <Input
                      id="petName"
                      placeholder="Fluffy"
                      value={formData.petName}
                      onChange={(e) => setFormData({ ...formData, petName: e.target.value })}
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="petType" className="text-foreground">Pet Type</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, petType: value })}>
                      <SelectTrigger className="h-12 bg-background border-border">
                        <SelectValue placeholder="Select pet type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="breed" className="text-foreground">Breed</Label>
                    <Input
                      id="breed"
                      placeholder="e.g. Golden Retriever, Persian"
                      value={formData.breed}
                      onChange={(e) => setFormData({ ...formData, breed: e.target.value })}
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-foreground">Service Interested In</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, service: value })}>
                    <SelectTrigger className="h-12 bg-background border-border">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-grooming">Full Grooming</SelectItem>
                      <SelectItem value="bath-brush">Bath, Brush & Blowout</SelectItem>
                      <SelectItem value="nail-care">Nail, Paw & Ear Care</SelectItem>
                      <SelectItem value="specialty">Specialty Grooming</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="preferredDate" className="text-foreground">Preferred Date</Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="h-12 bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredTime" className="text-foreground">Preferred Time</Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
                      <SelectTrigger className="h-12 bg-background border-border">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (9AM - 12PM)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12PM - 3PM)</SelectItem>
                        <SelectItem value="evening">Evening (3PM - 6PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your pet and any special requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-background border-border focus:border-primary resize-none"
                  />
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-xl text-center ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                      : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full h-14 text-base transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {/* Business Hours */}
              <div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-6">Business Hours</h2>
                <div className="space-y-4">
                  {businessHours.map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between py-4 border-b border-border last:border-0"
                    >
                      <span className="font-medium text-foreground">{item.day}</span>
                      <span className={`${item.hours === "Closed" ? "text-primary" : "text-muted-foreground"}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-card rounded-3xl border border-border/50 p-8 md:p-10">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">Why Choose Us?</h2>
                <div className="space-y-6">
                  {whyChooseUs.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
