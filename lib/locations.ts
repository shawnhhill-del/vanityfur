// Georgia location data for local SEO
// Each location targets specific cities/areas near Cumming, GA

export interface LocationData {
  slug: string
  city: string
  county: string
  state: string
  description: string
  distance: string
  nearbyAreas: string[]
  keywords: string[]
  content: {
    intro: string
    whyChooseUs: string[]
    services: string[]
  }
}

export const georgiaLocations: LocationData[] = [
  {
    slug: "cumming",
    city: "Cumming",
    county: "Forsyth County",
    state: "Georgia",
    description: "Premier pet grooming in Cumming, GA. Noose-free dog grooming and no-sedation cat grooming since 1985.",
    distance: "Located in Cumming",
    nearbyAreas: ["South Forsyth", "North Forsyth", "Lanier Technical College area", "The Collection at Forsyth"],
    keywords: ["pet grooming Cumming GA", "dog groomer Cumming", "cat grooming Cumming GA", "Forsyth County pet grooming"],
    content: {
      intro: "Vanity Fur Pet Parlor is proudly located in Cumming, Georgia, serving the Forsyth County community with exceptional pet grooming services since 1985. As your local neighborhood groomer, we've built lasting relationships with thousands of pet families in Cumming and surrounding areas.",
      whyChooseUs: [
        "Conveniently located on Buford Highway in Cumming",
        "Over 30 years serving Forsyth County pets",
        "Full-view grooming so you can watch anytime",
        "The only noose-free dog grooming in the area",
        "Specialized no-sedation cat grooming"
      ],
      services: ["Noose-Free Dog Grooming", "No-Sedation Cat Grooming", "Nail Filing", "Ear Care", "De-shedding Treatments"]
    }
  },
  {
    slug: "alpharetta",
    city: "Alpharetta",
    county: "Fulton County",
    state: "Georgia",
    description: "Professional pet grooming for Alpharetta, GA residents. Just minutes away on GA-400. Noose-free and stress-free grooming.",
    distance: "15 minutes from Alpharetta",
    nearbyAreas: ["Downtown Alpharetta", "Avalon", "North Point Mall area", "Windward"],
    keywords: ["pet grooming Alpharetta GA", "dog groomer Alpharetta", "cat grooming near Alpharetta", "Alpharetta pet salon"],
    content: {
      intro: "Alpharetta pet owners trust Vanity Fur Pet Parlor for gentle, professional grooming. Located just 15 minutes north on GA-400, we offer Alpharetta residents the area's only noose-free dog grooming and interactive no-sedation cat grooming experience.",
      whyChooseUs: [
        "Easy 15-minute drive from Alpharetta via GA-400",
        "Worth the short trip for stress-free grooming",
        "No nooses, no cages, no fear",
        "Thousands of happy Alpharetta clients",
        "Interactive cat grooming you won't find elsewhere"
      ],
      services: ["Breed-Specific Dog Cuts", "Lion Cuts for Cats", "Teddy Bear Cuts", "Show Trims", "De-shedding"]
    }
  },
  {
    slug: "johns-creek",
    city: "Johns Creek",
    county: "Fulton County",
    state: "Georgia",
    description: "Johns Creek's choice for gentle pet grooming. Noose-free dog grooming and sedation-free cat grooming near you.",
    distance: "20 minutes from Johns Creek",
    nearbyAreas: ["Medlock Bridge", "State Bridge", "Jones Bridge", "Newtown"],
    keywords: ["pet grooming Johns Creek GA", "dog groomer Johns Creek", "cat grooming Johns Creek", "Johns Creek pet services"],
    content: {
      intro: "Johns Creek families choose Vanity Fur Pet Parlor for our unique, compassionate approach to pet grooming. Our noose-free techniques and interactive cat grooming are unavailable anywhere closer, making the short drive to Cumming well worth it.",
      whyChooseUs: [
        "20-minute drive from Johns Creek",
        "Unique noose-free grooming techniques",
        "Interactive cat grooming experience",
        "Full-view grooming - watch anytime",
        "Over 30 years of experience"
      ],
      services: ["Noose-Free Dog Grooming", "Persian Cat Grooming", "Maine Coon Grooming", "Summer Cuts", "Matt Removal"]
    }
  },
  {
    slug: "milton",
    city: "Milton",
    county: "Fulton County",
    state: "Georgia",
    description: "Milton, GA pet owners love our stress-free grooming approach. Noose-free for dogs, sedation-free for cats.",
    distance: "15 minutes from Milton",
    nearbyAreas: ["Crabapple", "Birmingham", "Deerfield", "Cogburn Road area"],
    keywords: ["pet grooming Milton GA", "dog groomer Milton", "cat grooming Milton GA", "Milton pet salon"],
    content: {
      intro: "Milton residents appreciate quality and care - that's why they bring their beloved pets to Vanity Fur Pet Parlor. Our gentle, noose-free approach and decades of experience make us the preferred choice for Milton's most pampered pets.",
      whyChooseUs: [
        "Close proximity to Milton via Highway 9",
        "Peaceful, stress-free environment",
        "Gentle handling techniques",
        "Family-owned since 1985",
        "Transparent, full-view grooming"
      ],
      services: ["Custom Dog Styling", "Cat Sanitary Trims", "Nail Filing", "Ear Cleaning", "Hand Scissoring"]
    }
  },
  {
    slug: "suwanee",
    city: "Suwanee",
    county: "Gwinnett County",
    state: "Georgia",
    description: "Suwanee pet grooming alternative offering noose-free dog grooming and no-sedation cat grooming in nearby Cumming.",
    distance: "20 minutes from Suwanee",
    nearbyAreas: ["Suwanee Town Center", "Peachtree Industrial area", "George Pierce Park area"],
    keywords: ["pet grooming near Suwanee GA", "dog groomer Suwanee", "cat grooming Suwanee area", "Suwanee pet services"],
    content: {
      intro: "Suwanee pet parents seeking a gentler grooming experience find exactly what they're looking for at Vanity Fur Pet Parlor. Our unique noose-free and sedation-free approaches aren't available in Suwanee, making us worth the short trip.",
      whyChooseUs: [
        "Easy drive from Suwanee via I-85/GA-20",
        "Techniques unavailable in Gwinnett County",
        "Stress-free environment for anxious pets",
        "You can stay with your cat during grooming",
        "Thousands of happy pet families"
      ],
      services: ["Anxious Dog Grooming", "First-Time Cat Grooming", "De-shedding Treatments", "Tummy Shaves", "Nail Caps"]
    }
  },
  {
    slug: "duluth",
    city: "Duluth",
    county: "Gwinnett County",
    state: "Georgia",
    description: "Duluth, GA pet owners choose Vanity Fur for gentle, noose-free grooming. Just 25 minutes from downtown Duluth.",
    distance: "25 minutes from Duluth",
    nearbyAreas: ["Downtown Duluth", "Gwinnett Place area", "Pleasant Hill area"],
    keywords: ["pet grooming near Duluth GA", "dog groomer Duluth area", "cat grooming Duluth GA", "Duluth pet salon"],
    content: {
      intro: "Duluth pet owners make the trip to Vanity Fur Pet Parlor for grooming they simply can't find locally. Our noose-free dog grooming and interactive cat grooming have earned us loyal clients throughout Gwinnett County.",
      whyChooseUs: [
        "Worth the 25-minute drive from Duluth",
        "Unique grooming not available in Gwinnett",
        "No restraints around your dog's neck",
        "Stay with your cat the entire time",
        "Full transparency - watch everything"
      ],
      services: ["Noose-Free Dog Grooming", "No-Sedation Cat Grooming", "Breed Cuts", "Senior Pet Grooming", "Sensitive Skin Care"]
    }
  },
  {
    slug: "buford",
    city: "Buford",
    county: "Gwinnett County",
    state: "Georgia",
    description: "Buford pet grooming alternative with noose-free techniques. Professional dog and cat grooming near Mall of Georgia.",
    distance: "20 minutes from Buford",
    nearbyAreas: ["Mall of Georgia area", "Downtown Buford", "Lake Lanier area"],
    keywords: ["pet grooming near Buford GA", "dog groomer Buford", "cat grooming Buford area", "Buford pet services"],
    content: {
      intro: "Buford and Lake Lanier area residents trust Vanity Fur Pet Parlor for exceptional pet grooming. Our gentle techniques and decades of experience make us the go-to groomer for discerning Buford pet parents.",
      whyChooseUs: [
        "20 minutes from Buford via I-985",
        "Perfect stop when visiting Lake Lanier",
        "Gentle, fear-free grooming",
        "Experienced with all breeds",
        "Interactive cat grooming experience"
      ],
      services: ["All Breed Dog Grooming", "Cat Lion Cuts", "Summer Shave-Downs", "De-matting Services", "Nail Care"]
    }
  },
  {
    slug: "sugar-hill",
    city: "Sugar Hill",
    county: "Gwinnett County",
    state: "Georgia",
    description: "Sugar Hill pet owners choose Vanity Fur for stress-free grooming. Noose-free dog grooming near you.",
    distance: "18 minutes from Sugar Hill",
    nearbyAreas: ["Downtown Sugar Hill", "The Bowl at Sugar Hill", "Peachtree Industrial area"],
    keywords: ["pet grooming Sugar Hill GA", "dog groomer Sugar Hill", "cat grooming near Sugar Hill", "Sugar Hill pet salon"],
    content: {
      intro: "Sugar Hill families love the gentle, compassionate care their pets receive at Vanity Fur Pet Parlor. Our unique approach to grooming keeps pets calm and comfortable - something Sugar Hill pet parents appreciate.",
      whyChooseUs: [
        "Quick 18-minute drive from Sugar Hill",
        "Calm, peaceful grooming environment",
        "No nooses or harsh restraints",
        "Cat grooming without sedation",
        "Experienced, caring groomers"
      ],
      services: ["Puppy First Grooming", "Senior Dog Care", "Cat Combouts", "Nail Trimming", "Ear Care"]
    }
  },
  {
    slug: "dawsonville",
    city: "Dawsonville",
    county: "Dawson County",
    state: "Georgia",
    description: "Dawsonville pet grooming destination. Professional noose-free dog grooming and cat grooming services.",
    distance: "15 minutes from Dawsonville",
    nearbyAreas: ["Downtown Dawsonville", "North Georgia Premium Outlets", "Amicalola Falls area"],
    keywords: ["pet grooming Dawsonville GA", "dog groomer Dawsonville", "cat grooming Dawson County", "Dawsonville pet services"],
    content: {
      intro: "Dawsonville and Dawson County pet owners have discovered the difference at Vanity Fur Pet Parlor. Our convenient location makes us the perfect choice for Dawsonville residents seeking quality, compassionate pet grooming.",
      whyChooseUs: [
        "Just 15 minutes south of Dawsonville",
        "Convenient after outlet shopping",
        "Mountain area pets welcome",
        "Gentle handling for all temperaments",
        "Over 30 years experience"
      ],
      services: ["Large Breed Grooming", "Double-Coat Care", "Seasonal De-shedding", "Hand Stripping", "Medicated Baths"]
    }
  },
  {
    slug: "gainesville",
    city: "Gainesville",
    county: "Hall County",
    state: "Georgia",
    description: "Gainesville, GA pet grooming alternative. Worth the drive for noose-free dog and sedation-free cat grooming.",
    distance: "25 minutes from Gainesville",
    nearbyAreas: ["Downtown Gainesville", "Lake Lanier", "Gainesville State College area"],
    keywords: ["pet grooming near Gainesville GA", "dog groomer Hall County", "cat grooming Gainesville area", "Gainesville pet services"],
    content: {
      intro: "Gainesville pet owners seeking exceptional grooming make the trip to Vanity Fur Pet Parlor. Our specialized techniques for anxious pets and unique cat grooming approach have earned us loyal clients throughout Hall County.",
      whyChooseUs: [
        "25-minute drive from Gainesville",
        "Specialized anxious pet handling",
        "Techniques not found in Hall County",
        "Interactive cat grooming experience",
        "Transparent, watchable grooming"
      ],
      services: ["Anxious Pet Specialists", "Cat Grooming Experts", "Show Quality Cuts", "Therapy Dog Grooming", "Competition Prep"]
    }
  },
  {
    slug: "roswell",
    city: "Roswell",
    county: "Fulton County",
    state: "Georgia",
    description: "Roswell pet grooming choice for gentle care. Noose-free dog grooming and stress-free cat grooming.",
    distance: "20 minutes from Roswell",
    nearbyAreas: ["Historic Roswell", "Holcomb Bridge area", "East Roswell"],
    keywords: ["pet grooming near Roswell GA", "dog groomer Roswell area", "cat grooming Roswell", "Roswell pet salon"],
    content: {
      intro: "Roswell's discerning pet owners choose Vanity Fur Pet Parlor for our exceptional standards and gentle approach. Our noose-free techniques and interactive cat grooming represent the gold standard in pet care.",
      whyChooseUs: [
        "20 minutes from Roswell via GA-400",
        "Premium grooming experience",
        "Fear-free certified techniques",
        "Full-view salon transparency",
        "Family-owned quality"
      ],
      services: ["Premium Dog Grooming", "Luxury Cat Spa", "Asian Fusion Cuts", "Creative Grooming", "Spa Treatments"]
    }
  },
  {
    slug: "canton",
    city: "Canton",
    county: "Cherokee County",
    state: "Georgia",
    description: "Canton, GA pet grooming destination. Professional noose-free grooming worth the drive from Cherokee County.",
    distance: "20 minutes from Canton",
    nearbyAreas: ["Downtown Canton", "Reinhardt University area", "Cherokee County"],
    keywords: ["pet grooming Canton GA", "dog groomer Cherokee County", "cat grooming Canton", "Canton pet services"],
    content: {
      intro: "Canton and Cherokee County pet families have discovered the Vanity Fur difference. Our unique grooming philosophy and decades of experience make us the preferred choice for Canton's beloved pets.",
      whyChooseUs: [
        "20 minutes east of Canton",
        "Unique techniques worth the drive",
        "Cherokee County's best-kept secret",
        "Gentle handling for all pets",
        "Interactive cat grooming"
      ],
      services: ["All Breed Expertise", "Mountain Dog Grooming", "Long-Haired Cat Care", "Outdoor Dog Cleaning", "Tick Checks"]
    }
  },
  {
    slug: "woodstock",
    city: "Woodstock",
    county: "Cherokee County",
    state: "Georgia",
    description: "Woodstock pet grooming alternative with noose-free techniques. Quality dog and cat grooming near Towne Lake.",
    distance: "25 minutes from Woodstock",
    nearbyAreas: ["Downtown Woodstock", "Towne Lake area", "Outlet Shoppes at Atlanta"],
    keywords: ["pet grooming near Woodstock GA", "dog groomer Woodstock", "cat grooming Woodstock area", "Woodstock pet salon"],
    content: {
      intro: "Woodstock pet owners seeking stress-free grooming find their perfect match at Vanity Fur Pet Parlor. Our gentle, noose-free approach and cat grooming expertise have made us popular with Woodstock families.",
      whyChooseUs: [
        "25 minutes from Woodstock",
        "Stress-free grooming environment",
        "No nooses, ever",
        "Cat specialists on staff",
        "Watch your pet's grooming anytime"
      ],
      services: ["Stress-Free Grooming", "Cat Spa Services", "Puppy Programs", "Senior Pet Care", "Breed Standards"]
    }
  },
  {
    slug: "ball-ground",
    city: "Ball Ground",
    county: "Cherokee County",
    state: "Georgia",
    description: "Ball Ground pet grooming services nearby. Professional noose-free grooming for Cherokee County pets.",
    distance: "20 minutes from Ball Ground",
    nearbyAreas: ["Downtown Ball Ground", "Gibbs Gardens area", "Free Home"],
    keywords: ["pet grooming Ball Ground GA", "dog groomer near Ball Ground", "cat grooming Cherokee County", "Ball Ground pet services"],
    content: {
      intro: "Ball Ground and northern Cherokee County residents have found their trusted groomer at Vanity Fur Pet Parlor. Our rural-friendly approach and experience with outdoor pets make us the ideal choice.",
      whyChooseUs: [
        "20 minutes from Ball Ground",
        "Experience with farm and outdoor pets",
        "Gentle techniques for all dogs",
        "Cat grooming specialists",
        "Reasonable pricing"
      ],
      services: ["Farm Dog Grooming", "Outdoor Cat Care", "Heavy Coat Management", "Burr Removal", "Country Dog Cuts"]
    }
  },
  {
    slug: "dahlonega",
    city: "Dahlonega",
    county: "Lumpkin County",
    state: "Georgia",
    description: "Dahlonega area pet grooming destination. Worth the scenic drive for gentle, professional grooming.",
    distance: "30 minutes from Dahlonega",
    nearbyAreas: ["Downtown Dahlonega", "North Georgia College area", "Wine Country"],
    keywords: ["pet grooming near Dahlonega GA", "dog groomer Lumpkin County", "cat grooming Dahlonega", "mountain pet grooming"],
    content: {
      intro: "Dahlonega pet owners make the scenic drive to Vanity Fur Pet Parlor for grooming they trust. Our experience with mountain-lifestyle pets and gentle techniques have earned us loyal clients from Lumpkin County.",
      whyChooseUs: [
        "30-minute scenic drive from Dahlonega",
        "Mountain pet specialists",
        "Worth the trip for quality",
        "Unique techniques unavailable locally",
        "Decades of trusted experience"
      ],
      services: ["Mountain Dog Care", "Hiking Dog Grooming", "Matted Coat Rescue", "Heavy Undercoat Removal", "Rustic Cuts"]
    }
  }
]

export function getLocationBySlug(slug: string): LocationData | undefined {
  return georgiaLocations.find(loc => loc.slug === slug)
}

export function getAllLocationSlugs(): string[] {
  return georgiaLocations.map(loc => loc.slug)
}
