"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Users, Award, Heart, Quote, ArrowRight, MapPin, Navigation, Dog, Cat, Shield, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

const stats = [
  {
    icon: Users,
    value: "1000's",
    label: "Happy Pet Parents"
  },
  {
    icon: Star,
    value: "4.9",
    label: "Average Rating"
  },
  {
    icon: Heart,
    value: "100%",
    label: "Satisfaction Rate"
  }
]

const dogReviews = [
  {
    id: 1,
    name: "Dorothy",
    role: "Google Review - Nov 2024",
    initials: "D",
    rating: 5,
    content: "I have a small troubled grumpy little man and Sarah is amazing with him! He loves her! I'm so grateful to have found her and the team at Vanity Fur!"
  },
  {
    id: 2,
    name: "Bruce Longmore",
    role: "Google Review - Nov 2024",
    initials: "BL",
    rating: 5,
    content: "Tracy and Sarah are amazing! They love dogs and cats and are true professionals!"
  },
  {
    id: 6,
    name: "Coach Story",
    role: "Google Review - Feb 2024",
    initials: "CS",
    rating: 5,
    content: "Great care and grooming for our cocker spaniel. I recommend their services, they also groom cats."
  },
  {
    id: 12,
    name: "Amy Chiasson",
    role: "Google Review - Apr 2023",
    initials: "AC",
    rating: 5,
    content: "Cooper, my Goldendoodle - typically goes to Tracey, the owner; her consistency in his handsome looks and genuine care sets Vanity Fur apart from others! I recently moved to the city, and it is still worth my drive to have their service!"
  },
  {
    id: 14,
    name: "Jeff Wylie",
    role: "Google Review - Feb 2023",
    initials: "JW",
    rating: 5,
    content: "Sarah did an EXCELLENT job on my foot shy 6lb shih tzu. WAY better than Petco!!! She's very skilled at what she does. Very precise, even around my baby's face. A+"
  },
  {
    id: 15,
    name: "Haleigh Michelle",
    role: "Google Review - Feb 2023",
    initials: "HM",
    rating: 5,
    content: "There is no other place I will take my dog! I absolutely love Vanity Fur. Sarah usually grooms and bathes our baby and does such a great job. They are all friendly, experienced, laid back but professional. I highly recommend Vanity Fur."
  },
  {
    id: 16,
    name: "Debbie Garrison",
    role: "Google Review - Dec 2022",
    initials: "DG",
    rating: 5,
    content: "I love this place. The groomers are wonderful and my little pom is always happy and looking great when I pick her up. Thank you Vanity Fur."
  },
  {
    id: 17,
    name: "Suzanne R.",
    role: "Yelp Review - Jul 2022",
    initials: "SR",
    rating: 5,
    content: "Today was my first ever visit to the Vanity Fur Pet Parlor and my babies have never looked so good! I'm so pleased with their cuts, absolutely perfect! From check-in to check-out the process was seamless and my babies were happy!"
  },
  {
    id: 18,
    name: "Cody Davis",
    role: "Google Review - Apr 2022",
    initials: "CD",
    rating: 5,
    content: "Best experience we've ever had at a groomers."
  }
]

const catReviews = [
  {
    id: 3,
    name: "Pam Landreth",
    role: "Google Review - Jun 2024",
    initials: "PL",
    rating: 5,
    content: "Tracey was amazing with Pumpkin. He's a very large cat and his coat had multiple problem areas. She put me at ease as soon as I called her to discuss my concerns. The grooming process went beautifully. I appreciate the great outcome and professional service we received."
  },
  {
    id: 4,
    name: "Jaimee Gatto",
    role: "Google Review - May 2024",
    initials: "JG",
    rating: 5,
    content: "I took my cat to Tracy after years of getting my cat groomed at the vet with sedative. I wish I could have found her years ago!!! She was beyond amazing, patient and did an amazing job. Tracy is truly a saint with crazy cats! We will definitely be returning."
  },
  {
    id: 5,
    name: "Ms. Georgia Peach",
    role: "Google Review - Apr 2024",
    initials: "GP",
    rating: 5,
    content: "I couldn't thank Ms. Tracey enough, for helping me get through this just as much as patiently guiding me through what I needed to do and keep Pepper calm. After all was done, my baby was just purring and rolling and rubbing her body along the carpet. She looks like a completely different cat."
  },
  {
    id: 7,
    name: "Jennifer Tyo",
    role: "Google Review - Dec 2023",
    initials: "JT",
    rating: 5,
    content: "I've taken both of my cats to Tracey and can't say enough about how wonderful she is! Not only is Tracey's work top-notch, she is kind and comforting during a very unpleasant time for the kitties. Highly recommend Tracey and Vanity Fur Pet Parlor."
  },
  {
    id: 8,
    name: "Mrs Starr",
    role: "Google Review - Aug 2023",
    initials: "MS",
    rating: 5,
    content: "Amazing experience for our kitty is an understatement. Just Wow! Our boy is a Maine Coon. When we arrived, Bruno came right out of his kennel to explore. Not one meow or let me out of here! He was completely calm through the whole thing. Thanks for a fantastic job!"
  },
  {
    id: 9,
    name: "Laura Mcgray",
    role: "Google Review - Jul 2023",
    initials: "LM",
    rating: 5,
    content: "It was wonderful having a groomer who is good with dogs and cats. She did a wonderful job with my cat and was so gentle and soothing. It was a great experience."
  },
  {
    id: 10,
    name: "Susan Sandlin",
    role: "Google Review - Jun 2023",
    initials: "SS",
    rating: 5,
    content: "When you get your cat groomed here you hold the cat and work with Tracey to keep it calm. It was really interesting to see her work. She's been a groomer since 1985 and she definitely knows what she is doing. It's not just a business, it's a calling for all that work there."
  },
  {
    id: 11,
    name: "Glenn Crotts",
    role: "Google Review - Jun 2023",
    initials: "GC",
    rating: 5,
    content: "Our buddy Yeti cat is a groomer's nightmare but Tracey handled him like a champ. Way overdue on fur and nail trim but he's looking sharp again. Thanks Tracey, great job! A+ service & professionalism!"
  },
  {
    id: 13,
    name: "Wendy Atkinson",
    role: "Google Review - Feb 2023",
    initials: "WA",
    rating: 5,
    content: "Tracey was wonderful with my kitty. He had some terrible matts that I was sure he would need to be shaved, but she was able to get them all out quickly and calmly with little objection from my impatient cat. Highly recommend!"
  },
  {
    id: 19,
    name: "Taylor",
    role: "Google Review - Dec 2021",
    initials: "T",
    rating: 5,
    content: "Cannot recommend Tracey enough! My new cat, Jack, is 18 years old and needed a grooming. Tracey took such good care of him and was so gentle. I was able to stay with Jack the entire grooming too which made me feel good. If you're looking for someone who cares about your animal like you do then look no further."
  },
  {
    id: 20,
    name: "Olivia Hill",
    role: "Google Review - May 2021",
    initials: "OH",
    rating: 5,
    content: "Best cat grooming in Georgia. Tracy is so quick and careful. My kitty, Misiu, was so calm the entire time and looked so fabulous after!! Thank you Tracy!!"
  }
]

export default function ReviewsPage() {
  const [activeTab, setActiveTab] = useState<'dogs' | 'cats'>('dogs')
  const [currentReview, setCurrentReview] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const reviews = activeTab === 'dogs' ? dogReviews : catReviews

  useEffect(() => {
    setCurrentReview(0)
  }, [activeTab])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, reviews.length])

  const goToPrev = () => {
    setIsAutoPlaying(false)
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
            Client Testimonials
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
            What Our Clients Say
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Real experiences from pet parents who trust us with their beloved companions
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-4xl font-semibold text-foreground mb-1">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Selector with Emphasis */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex justify-center gap-2 sm:gap-4 mb-8">
              <button
                onClick={() => { setActiveTab('dogs'); setIsAutoPlaying(true); }}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
                  activeTab === 'dogs' 
                    ? 'bg-amber-500/10 border-amber-500 text-amber-600 dark:text-amber-400' 
                    : 'bg-card border-border hover:border-amber-500/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <Dog className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="text-left">
                  <p className="font-semibold text-sm sm:text-base">Dogs</p>
                  <p className="text-xs opacity-80 hidden sm:block">{dogReviews.length} reviews</p>
                </div>
              </button>
              <button
                onClick={() => { setActiveTab('cats'); setIsAutoPlaying(true); }}
                className={`flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 ${
                  activeTab === 'cats' 
                    ? 'bg-primary/10 border-primary text-primary' 
                    : 'bg-card border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                }`}
              >
                <Cat className="w-5 h-5 sm:w-6 sm:h-6" />
                <div className="text-left">
                  <p className="font-semibold text-sm sm:text-base">Cats</p>
                  <p className="text-xs opacity-80 hidden sm:block">{catReviews.length} reviews</p>
                </div>
              </button>
            </div>

            {/* Feature Highlight based on active tab */}
            <div className={`rounded-2xl p-6 mb-8 border ${
              activeTab === 'dogs' 
                ? 'bg-amber-500/5 border-amber-500/20' 
                : 'bg-primary/5 border-primary/20'
            }`}>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {activeTab === 'dogs' ? (
                  <>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                      <span className="font-semibold text-amber-700 dark:text-amber-300">Always Noose-Free</span>
                    </div>
                    <span className="text-muted-foreground hidden sm:inline">|</span>
                    <p className="text-sm text-muted-foreground text-center">
                      Every dog is groomed without restraining nooses for a stress-free, safe experience
                    </p>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-primary">No Sedation Required</span>
                    </div>
                    <span className="text-muted-foreground hidden sm:inline">|</span>
                    <p className="text-sm text-muted-foreground text-center">
                      An interactive grooming experience for both you and your cat, unavailable anywhere else!
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Carousel */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="relative max-w-4xl mx-auto">
            {/* Quote Icon */}
            <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10 ${
              activeTab === 'dogs' ? 'bg-amber-500' : 'bg-primary'
            }`}>
              <Quote className="w-6 h-6 text-white" />
            </div>
            
            {/* Card */}
            <div className="bg-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16 shadow-xl border border-border/50 relative mx-2 sm:mx-0">
              {/* Navigation Arrows */}
              <button 
                onClick={goToPrev}
                className="absolute -left-2 sm:left-0 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:border-primary/50 transition-all"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </button>
              <button 
                onClick={goToNext}
                className="absolute -right-2 sm:right-0 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 bg-card border border-border rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:border-primary/50 transition-all"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </button>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4 sm:mb-8">
                {[...Array(reviews[currentReview]?.rating || 5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-center text-foreground text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed mb-6 sm:mb-10 font-light px-2 sm:px-4">
                &ldquo;{reviews[currentReview]?.content}&rdquo;
              </blockquote>
              
              {/* Author */}
              <div className="flex flex-col items-center">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white font-semibold text-base sm:text-xl mb-3 sm:mb-4 shadow-lg ${
                  activeTab === 'dogs' ? 'bg-gradient-to-br from-amber-500 to-amber-600' : 'bg-gradient-to-br from-primary to-primary/70'
                }`}>
                  {reviews[currentReview]?.initials}
                </div>
                <p className="font-semibold text-foreground text-base sm:text-lg">{reviews[currentReview]?.name}</p>
                <p className="text-muted-foreground text-sm sm:text-base">{reviews[currentReview]?.role}</p>
              </div>
            </div>

            {/* Dots */}
            <div className="flex flex-col items-center gap-3 mt-8">
              <div className="flex justify-center gap-2">
                {(() => {
                  const maxDots = 7
                  const totalReviews = reviews.length
                  let startIdx = Math.max(0, currentReview - Math.floor(maxDots / 2))
                  const endIdx = Math.min(totalReviews, startIdx + maxDots)
                  if (endIdx - startIdx < maxDots) {
                    startIdx = Math.max(0, endIdx - maxDots)
                  }
                  
                  return reviews.slice(startIdx, endIdx).map((_, i) => {
                    const actualIndex = startIdx + i
                    return (
                      <button
                        key={actualIndex}
                        onClick={() => {
                          setIsAutoPlaying(false)
                          setCurrentReview(actualIndex)
                        }}
                        className={`h-2 rounded-full transition-all duration-500 ${
                          actualIndex === currentReview 
                            ? `w-6 ${activeTab === 'dogs' ? 'bg-amber-500' : 'bg-primary'}` 
                            : "w-2 bg-border hover:bg-muted-foreground"
                        }`}
                        aria-label={`Go to review ${actualIndex + 1}`}
                      />
                    )
                  })
                })()}
              </div>
              <p className="text-sm text-muted-foreground">
                {currentReview + 1} of {reviews.length} {activeTab === 'dogs' ? 'dog' : 'cat'} reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 md:py-20 bg-card border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-6">
              <svg viewBox="0 0 24 24" className="w-10 h-10" aria-label="Google">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              See All Our Google Reviews
            </h2>
            <p className="text-muted-foreground mb-8">
              Read more reviews from our happy customers on Google
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 h-14 text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/30"
            >
              <a href="https://share.google/8LdmM0BiM7AMGIcL3" target="_blank" rel="noopener noreferrer">
                View on Google
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Yelp Reviews Section */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF1A1A] rounded-2xl shadow-lg mb-6">
              <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24" aria-label="Yelp">
                <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 9.194 9.194 0 0 1 2.364 3.252 1.073 1.073 0 0 1-.694 1.459zm-3.595 5.867a1.073 1.073 0 0 1-.72 1.26 9.292 9.292 0 0 1-3.93.27c-.54-.105-.9-.54-.96-1.08l-.54-4.86c-.108-.95 1.092-1.636 1.812-.97l3.75 3.463.588 1.917zm-6.012 1.53c-.06.54-.42.975-.96 1.08a9.32 9.32 0 0 1-3.93-.27c-.54-.15-.84-.72-.72-1.26l.588-1.917 3.75-3.463c.72-.666 1.92.02 1.812.97l-.54 4.86zM3.84 12.594a1.072 1.072 0 0 1-.693-1.459 9.194 9.194 0 0 1 2.363-3.252 1.072 1.072 0 0 1 1.597.206l2.904 4.308c.564.83-.216 1.906-1.176 1.63l-4.995-1.433zm7.752-6.849V1.17c0-.54.36-1.02.9-1.08 1.38-.15 2.79 0 4.14.39.54.15.84.69.72 1.23l-1.86 4.5c-.36.87-1.62.87-1.98 0l-1.02-2.475c-.36-.87-.9-.99-.9 0v1.02z" />
              </svg>
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              See Our Yelp Reviews
            </h2>
            <p className="text-muted-foreground mb-4">
              22 Photos & 11 Reviews on Yelp
            </p>
            <div className="flex items-center justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FF1A1A] text-[#FF1A1A]" />
              ))}
              <span className="ml-2 text-muted-foreground">5.0 stars</span>
            </div>
            <Button 
              asChild
              size="lg"
              className="bg-[#FF1A1A] hover:bg-[#D32323] text-white rounded-full px-8 h-14 text-base transition-all duration-300 hover:shadow-xl hover:shadow-[#FF1A1A]/30"
            >
              <a href="https://www.yelp.com/biz/vanity-fur-pet-parlor-cumming" target="_blank" rel="noopener noreferrer">
                View on Yelp
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 md:py-24 bg-card border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              <MapPin className="w-4 h-4" />
              Find Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Visit Our Location
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Conveniently located in Cumming, GA. Come see us for premium pet grooming services.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl overflow-hidden shadow-xl border border-border/50">
              {/* Map Embed */}
              <div className="aspect-video md:aspect-[21/9] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3299.8766723456!2d-84.1402!3d34.2073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59f0b1b3b7b7b%3A0x1234567890!2s2539+Pinetree+Rd%2C+Cumming%2C+GA+30041!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vanity Fur Pet Parlor Location"
                  className="grayscale-[30%] contrast-[1.1]"
                />
              </div>
              
              {/* Address Bar */}
              <div className="p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 bg-background/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Vanity Fur Pet Parlor</h3>
                    <p className="text-muted-foreground">2539 Pinetree Rd, Cumming, GA 30041</p>
                  </div>
                </div>
                <Button 
                  asChild
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full"
                >
                  <a 
                    href="https://www.google.com/maps/dir//2539+Pinetree+Rd,+Cumming,+GA+30041" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Navigation className="mr-2 w-4 h-4" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Join our family of happy pet parents. Book your appointment today and see why we&apos;re Cumming&apos;s most trusted pet grooming salon.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-10 h-14 text-base transition-all duration-300 hover:shadow-xl"
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
                className="rounded-full px-10 h-14 text-base border-2 bg-transparent hover:bg-muted"
              >
                <a href="tel:7706171374">
                  Call (770) 617-1374
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
