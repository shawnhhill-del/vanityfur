// Comprehensive JSON-LD Structured Data for SEO
// Implements LocalBusiness, Service, FAQ, Review, and BreadcrumbList schemas

export function LocalBusinessJsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "PetGrooming",
    "@id": "https://vanityfur.us/#organization",
    "name": "Vanity Fur Pet Parlor",
    "alternateName": "Vanity Fur",
    "description": "Premier pet grooming salon in Cumming, GA offering noose-free dog grooming and no-sedation cat grooming. Family-owned and operated since 1985 with over 30 years of experience.",
    "url": "https://vanityfur.us",
    "telephone": "+1-770-617-1374",
    "email": "vanityfurpetparlor@gmail.com",
    "foundingDate": "1985",
    "priceRange": "$$",
    "image": [
      "https://vanityfur.us/images/home-20page-20lady-20image.png",
      "https://vanityfur.us/images/tracey-with-dog.png",
      "https://vanityfur.us/images/tracey-with-cat.png"
    ],
    "logo": "https://vanityfur.us/icon.svg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1735 Buford Hwy Suite 210",
      "addressLocality": "Cumming",
      "addressRegion": "GA",
      "postalCode": "30041",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.1929,
      "longitude": -84.0954
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Cumming",
        "containedInPlace": {
          "@type": "State",
          "name": "Georgia"
        }
      },
      {
        "@type": "County",
        "name": "Forsyth County",
        "containedInPlace": {
          "@type": "State",
          "name": "Georgia"
        }
      },
      { "@type": "City", "name": "Alpharetta", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Johns Creek", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Milton", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Suwanee", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Duluth", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Buford", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Sugar Hill", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Dawsonville", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Gainesville", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Roswell", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Canton", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Woodstock", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Ball Ground", "containedInPlace": { "@type": "State", "name": "Georgia" } },
      { "@type": "City", "name": "Dahlonega", "containedInPlace": { "@type": "State", "name": "Georgia" } }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/vanityfurpetparlor",
      "https://www.instagram.com/vanityfurpetparlor",
      "https://www.yelp.com/biz/vanity-fur-pet-parlor-cumming"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Pet Grooming Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Dog Grooming Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Noose-Free Dog Grooming",
                "description": "100% noose-free dog grooming using gentle physical support and calm reassuring voices. Our low tables allow eye-level connection with pets."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Breed-Specific Cuts",
                "description": "Professional breed-standard cuts for all dog breeds including show trims, teddy bear cuts, and custom styles."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dog Nail Filing",
                "description": "Gentle nail filing with smooth high-speed rotary tool with diamond wheel, not rough grinding."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Dog Ear Care",
                "description": "Comprehensive ear cleaning including hair removal and ear lavage for healthy, clean ears."
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Cat Grooming Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "No-Sedation Cat Grooming",
                "description": "Interactive cat grooming where owners help hold and comfort their cat. Never sedated. 30-45 minute sessions."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Lion Cuts",
                "description": "Professional lion cuts for long-haired cats including Maine Coons, Persians, and Himalayans."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Cat Matt Removal",
                "description": "Expert matt removal for cats with gentle, stress-free techniques."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Shedding Elimination Shaves",
                "description": "Reduce shedding dramatically for both long and short-haired cats."
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "1000",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "reviewBody": "The ONLY groomer my anxious dog will tolerate. Tracey and Sarah are miracle workers with their noose-free approach."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Jennifer K."
        },
        "reviewBody": "Found the only place that grooms cats without sedation! I get to stay and hold my Persian the whole time."
      }
    ],
    "knowsAbout": [
      "Dog Grooming",
      "Cat Grooming",
      "Noose-Free Grooming",
      "No-Sedation Cat Grooming",
      "Pet Grooming",
      "Lion Cuts",
      "Breed-Specific Dog Cuts",
      "Pet Nail Trimming",
      "Pet Ear Care"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export function FAQJsonLd() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is noose-free dog grooming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Noose-free dog grooming means we never use grooming nooses (restraints around the neck) like every other grooming facility. Instead, we use gentle physical support and calm reassuring voices to keep pets positioned correctly. Our tables are low, allowing us to sit at eye level, fostering a more intimate connection and direct exchange of energy that animals truly understand."
        }
      },
      {
        "@type": "Question",
        "name": "Do you sedate cats for grooming?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, we NEVER sedate cats. Most groomers sedate cats or refuse them entirely. At Vanity Fur, you help hold and comfort your kitty through the 30-45 minute process, then take them home immediately. This interactive approach, developed over decades, offers the most stress-free cat grooming experience available anywhere."
        }
      },
      {
        "@type": "Question",
        "name": "What areas do you serve near Cumming, GA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve Cumming, GA and all of Forsyth County, as well as nearby cities including Alpharetta, Johns Creek, Milton, Suwanee, Duluth, Buford, Sugar Hill, Dawsonville, Gainesville, Roswell, Canton, Woodstock, Ball Ground, and Dahlonega."
        }
      },
      {
        "@type": "Question",
        "name": "What cat breeds do you groom?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We serve ALL cats! Especially Maine Coons, Persians, Himalayans and any other long or short haired breeds. Services include expert matt removal, maintenance combouts, lion cuts, summer cuts, tummy shaves, sanitary trims, shedding elimination shaves, nail trims, nail caps, and baths upon special request."
        }
      },
      {
        "@type": "Question",
        "name": "What makes your nail care different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We file with a smooth high-speed rotary tool with a diamond wheel, as opposed to most other places that grind with rough low-grit sandpaper disks on a dremel that create loud vibration and heat that dogs hate, fear and fight. Many pets have become nervous from this process at other places."
        }
      },
      {
        "@type": "Question",
        "name": "Can I watch my pet being groomed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! At Vanity Fur, everything is full view all day every day! We welcome curiosity and invite questions or pop-ins anytime. We have nothing to hide and believe in complete transparency."
        }
      },
      {
        "@type": "Question",
        "name": "How long has Vanity Fur been in business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vanity Fur Pet Parlor has been serving pets and their families since 1985, with over 30 years of professional grooming experience developed around kindness, respect, compassion, safety and common sense."
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  )
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
    />
  )
}

export function ServiceJsonLd({ 
  name, 
  description, 
  provider = "Vanity Fur Pet Parlor",
  areaServed = "Cumming, GA"
}: { 
  name: string
  description: string
  provider?: string
  areaServed?: string
}) {
  const serviceData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": provider,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Cumming",
        "addressRegion": "GA",
        "postalCode": "30041",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": areaServed
    },
    "serviceType": "Pet Grooming"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
    />
  )
}

export function WebsiteJsonLd() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Vanity Fur Pet Parlor",
    "url": "https://vanityfur.us",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://vanityfur.us/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
    />
  )
}

export function ArticleJsonLd({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = "Tracey"
}: {
  title: string
  description: string
  url: string
  image?: string
  datePublished: string
  dateModified?: string
  authorName?: string
}) {
  const articleData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "image": image || "https://vanityfur.us/images/home-20page-20lady-20image.png",
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Person",
      "name": authorName,
      "url": "https://vanityfur.us/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vanity Fur Pet Parlor",
      "logo": {
        "@type": "ImageObject",
        "url": "https://vanityfur.us/icon.svg"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
    />
  )
}
