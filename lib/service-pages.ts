// Service page data for SEO-optimized service landing pages
// Each service page targets specific keywords and provides comprehensive content

export interface ServicePageData {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  heroTitle: string
  heroSubtitle: string
  introduction: string
  benefits: {
    title: string
    description: string
    icon: string
  }[]
  process: {
    step: number
    title: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  relatedServices: string[]
}

export const servicePages: ServicePageData[] = [
  {
    slug: "noose-free-dog-grooming",
    title: "Noose-Free Dog Grooming",
    metaTitle: "Noose-Free Dog Grooming Cumming GA | No Restraints Ever",
    metaDescription: "The only 100% noose-free dog grooming in North Georgia. We never use neck restraints. Gentle grooming in Cumming, GA using physical support and calm voices. Call (770) 617-1374.",
    keywords: [
      "noose-free dog grooming",
      "no restraint dog grooming",
      "gentle dog grooming",
      "stress-free dog grooming",
      "dog grooming without noose",
      "fear-free dog grooming Georgia",
      "humane dog grooming",
      "dog grooming Cumming GA"
    ],
    heroTitle: "100% Noose-Free Dog Grooming",
    heroSubtitle: "The only groomer in North Georgia that never uses neck restraints. Ever.",
    introduction: "At Vanity Fur Pet Parlor, we pioneered noose-free dog grooming long before it became a trend. Unlike every other grooming facility that relies on grooming nooses (restraints placed around dogs' necks to keep them positioned on the table), we use gentle physical support and calm, reassuring voices. Our low grooming tables allow us to sit at eye level with your dog, creating an intimate connection and direct exchange of energy that animals truly understand.",
    benefits: [
      {
        title: "No Neck Restraints",
        description: "We never place anything around your dog's neck. Traditional grooming nooses can cause fear, anxiety, and in some cases injury. We've eliminated them entirely.",
        icon: "shield"
      },
      {
        title: "Eye-Level Connection",
        description: "Our low tables allow groomers to sit at your dog's eye level, fostering a calming connection that reduces stress and builds trust.",
        icon: "eye"
      },
      {
        title: "Calm Environment",
        description: "No yelling, no rough handling. We use calm voices and gentle physical support to guide your dog through the grooming process.",
        icon: "heart"
      },
      {
        title: "Full Transparency",
        description: "Watch your dog's entire grooming session. Our full-view approach means you can see exactly how we treat your pet.",
        icon: "view"
      }
    ],
    process: [
      {
        step: 1,
        title: "Warm Welcome",
        description: "Your dog is greeted calmly and given time to acclimate to the environment before grooming begins."
      },
      {
        step: 2,
        title: "Gentle Positioning",
        description: "Using physical support and calm voices, we guide your dog into position without any restraints around their neck."
      },
      {
        step: 3,
        title: "Stress-Free Grooming",
        description: "Throughout the session, we maintain calm energy, taking breaks if needed to ensure your dog remains comfortable."
      },
      {
        step: 4,
        title: "Beautiful Results",
        description: "Your dog leaves looking beautiful and feeling relaxed - not traumatized from restraint or fear."
      }
    ],
    faqs: [
      {
        question: "What is a grooming noose and why don't you use one?",
        answer: "A grooming noose is a loop placed around a dog's neck attached to a grooming arm to keep them in position on the table. While industry-standard, nooses can cause anxiety, panic, and in worst cases, injury. We achieve the same positioning through gentle physical support and calm handling."
      },
      {
        question: "How do you keep dogs still without a noose?",
        answer: "Through years of experience, we've perfected techniques using gentle physical support, calm voices, and building trust with each dog. Our low tables allow eye-level interaction, creating a connection that naturally calms most dogs."
      },
      {
        question: "Is noose-free grooming safe?",
        answer: "Absolutely. In fact, we believe it's safer than traditional methods. Dogs are less likely to panic and thrash when not restrained by their neck, reducing the risk of injury to both the dog and groomer."
      },
      {
        question: "Do you charge more for noose-free grooming?",
        answer: "No. Noose-free grooming is our standard - it's how we groom every single dog. There's no upcharge because we don't offer the alternative."
      }
    ],
    relatedServices: ["full-view-grooming", "nail-filing", "ear-care"]
  },
  {
    slug: "no-sedation-cat-grooming",
    title: "No-Sedation Cat Grooming",
    metaTitle: "No-Sedation Cat Grooming Cumming GA | Interactive Cat Grooming",
    metaDescription: "Interactive cat grooming without sedation in Cumming, GA. You stay and hold your cat during grooming. Lion cuts, matt removal, sanitary trims. Never sedated. Call (770) 617-1374.",
    keywords: [
      "no sedation cat grooming",
      "cat grooming without sedation",
      "interactive cat grooming",
      "cat grooming near me",
      "lion cut cat grooming",
      "Persian cat grooming",
      "Maine Coon grooming",
      "stress-free cat grooming Georgia"
    ],
    heroTitle: "No-Sedation Cat Grooming",
    heroSubtitle: "Most groomers sedate cats or refuse them. We never sedate. You stay and comfort your kitty.",
    introduction: "Specialized techniques developed over decades enable us to offer a unique, compassionate, and interactive grooming experience for both you and your cat that is unavailable anywhere else. Most groomers sedate cats or refuse to groom them entirely. At Vanity Fur, we never sedate. Instead, you help hold and comfort your kitty through the 30-45 minute process, then take them home immediately — the most stress-free cat grooming experience possible.",
    benefits: [
      {
        title: "Never Sedated",
        description: "We never use sedation or tranquilizers. Your cat remains fully alert and aware, with you right there to provide comfort.",
        icon: "no-drugs"
      },
      {
        title: "Interactive Experience",
        description: "You stay with your cat the entire time, helping hold and comfort them. This dramatically reduces stress for your feline.",
        icon: "hands"
      },
      {
        title: "Take Them Home Immediately",
        description: "No waiting hours for sedation to wear off. Your cat goes home immediately after grooming, happy and beautifully groomed.",
        icon: "home"
      },
      {
        title: "30-45 Minutes",
        description: "Our efficient techniques keep sessions short, minimizing stress while achieving professional results.",
        icon: "clock"
      }
    ],
    process: [
      {
        step: 1,
        title: "Arrival & Consultation",
        description: "You arrive with your cat. We discuss what grooming is needed and explain exactly what will happen."
      },
      {
        step: 2,
        title: "You Position Your Cat",
        description: "You hold your cat in position while we work. Your presence keeps them calm and reassured."
      },
      {
        step: 3,
        title: "Gentle Grooming",
        description: "Using techniques perfected over 30+ years, we groom your cat quickly and efficiently while you provide comfort."
      },
      {
        step: 4,
        title: "Immediate Departure",
        description: "Grooming complete! You take your happy, beautifully groomed cat home immediately. No recovery time needed."
      }
    ],
    faqs: [
      {
        question: "Why do most groomers sedate cats?",
        answer: "Most groomers sedate cats because they haven't developed the specialized techniques needed for safe, stress-free cat grooming. Sedation makes cats easier to handle but carries risks and requires recovery time. Our decades of experience have allowed us to develop better methods."
      },
      {
        question: "What if my cat is very difficult or aggressive?",
        answer: "Our techniques work with nearly all cats. Your presence and comfort, combined with our gentle handling, calms even typically difficult cats. In rare cases where a cat is extremely stressed, we may recommend completing grooming in multiple short sessions."
      },
      {
        question: "What cat grooming services do you offer?",
        answer: "We offer lion cuts, sanitary trims, matt removal, maintenance combouts, summer cuts, tummy shaves, shedding elimination shaves, nail trims, nail caps, and baths upon special request. We serve all cat breeds including Maine Coons, Persians, Himalayans, and domestic short/long hair cats."
      },
      {
        question: "How long does cat grooming take?",
        answer: "Most cat grooming sessions take 30-45 minutes. Because you're there helping and your cat isn't sedated, we can work efficiently. Complex matting or full shave-downs may take slightly longer."
      }
    ],
    relatedServices: ["lion-cuts", "matt-removal", "shedding-elimination"]
  },
  {
    slug: "full-view-grooming",
    title: "Full-View Transparent Grooming",
    metaTitle: "Full-View Dog & Cat Grooming | Watch Your Pet's Grooming Session",
    metaDescription: "Transparent, full-view pet grooming in Cumming, GA. Watch your dog or cat's grooming anytime. Nothing to hide. See our gentle techniques in action. Call (770) 617-1374.",
    keywords: [
      "full view grooming",
      "transparent pet grooming",
      "watch pet grooming",
      "open pet grooming salon",
      "visible grooming",
      "honest pet groomer",
      "trustworthy dog groomer",
      "pet grooming you can watch"
    ],
    heroTitle: "Full-View Transparent Grooming",
    heroSubtitle: "Watch your pet's entire grooming session. We have nothing to hide.",
    introduction: "At Vanity Fur Pet Parlor, everything is full view, all day, every day. Unlike salons that whisk your pet to a back room where you can't see what's happening, we welcome your curiosity. Watch your pet's grooming from start to finish. Pop in anytime. Ask questions. We have nothing to hide because we're proud of how we treat every single pet.",
    benefits: [
      {
        title: "Complete Transparency",
        description: "No back rooms, no closed doors. Every grooming station is visible. Watch everything that happens to your pet.",
        icon: "eye"
      },
      {
        title: "Build Trust",
        description: "Seeing is believing. Watch our gentle techniques and know exactly how your pet is treated when you're not around.",
        icon: "trust"
      },
      {
        title: "Peace of Mind",
        description: "Never wonder what's happening to your pet. Our open salon design means complete visibility at all times.",
        icon: "peace"
      },
      {
        title: "Questions Welcome",
        description: "We love educating pet parents. Ask questions about techniques, products, or anything you see during grooming.",
        icon: "question"
      }
    ],
    process: [
      {
        step: 1,
        title: "Open Check-In",
        description: "Drop off your pet in our open salon. See exactly where they'll be groomed."
      },
      {
        step: 2,
        title: "Watch Anytime",
        description: "Stay and watch, leave and return, or peek in during errands. The choice is yours."
      },
      {
        step: 3,
        title: "Ask Questions",
        description: "Curious about a technique? Ask! We love sharing our knowledge with pet parents."
      },
      {
        step: 4,
        title: "Confident Pick-Up",
        description: "Pick up your pet knowing exactly what happened during their visit."
      }
    ],
    faqs: [
      {
        question: "Why do some groomers groom behind closed doors?",
        answer: "Some groomers prefer privacy to work without distraction, but this can also hide rough handling or stressful techniques. We believe transparency builds trust and ensures accountability."
      },
      {
        question: "Can I really watch the entire grooming session?",
        answer: "Absolutely! You're welcome to stay and watch from start to finish. Many pet parents, especially those with anxious pets, find this reassuring."
      },
      {
        question: "Will watching distract my pet?",
        answer: "Most pets actually calm down when their owner is nearby. If your presence seems to excite or distract your pet, our groomers will let you know, but this is rare."
      },
      {
        question: "Do you have cameras?",
        answer: "Our entire salon is open and visible - no cameras needed. You can see everything in person whenever you'd like."
      }
    ],
    relatedServices: ["noose-free-dog-grooming", "no-sedation-cat-grooming"]
  },
  {
    slug: "nail-filing",
    title: "Dog & Cat Nail Filing",
    metaTitle: "Pet Nail Filing Cumming GA | Gentle Nail Care, Not Grinding",
    metaDescription: "Gentle nail filing for dogs and cats in Cumming, GA. We file with a smooth diamond wheel - not rough grinding. No heat, no vibration, no fear. Call (770) 617-1374.",
    keywords: [
      "pet nail filing",
      "dog nail filing",
      "cat nail trimming",
      "gentle nail care",
      "nail grinding alternative",
      "stress-free nail trim",
      "pet nail care Cumming GA",
      "no dremel nail grinding"
    ],
    heroTitle: "Gentle Nail Filing, Not Grinding",
    heroSubtitle: "Smooth results without the heat, vibration, and fear of traditional grinding.",
    introduction: "We file with a smooth, high-speed rotary tool with a diamond wheel, as opposed to most other places that grind with rough low-grit sandpaper disks on a dremel that create loud vibration and heat that dogs hate, fear, and fight. Many pets have become nervous from this process at other places. Our gentle filing technique leaves nails smooth and short without the trauma.",
    benefits: [
      {
        title: "Diamond Wheel Filing",
        description: "Our smooth diamond wheel files nails gently, unlike rough sandpaper grinders that create friction and heat.",
        icon: "diamond"
      },
      {
        title: "No Heat or Vibration",
        description: "Traditional grinders get hot and vibrate intensely. Our filing technique is cool, quiet, and gentle.",
        icon: "temperature"
      },
      {
        title: "Less Fear",
        description: "Dogs who've had bad experiences with dremels often tolerate our filing beautifully because it's so different.",
        icon: "calm"
      },
      {
        title: "Smoother Results",
        description: "Diamond wheel filing leaves nails smoother than grinding, with no rough edges to snag.",
        icon: "smooth"
      }
    ],
    process: [
      {
        step: 1,
        title: "Gentle Positioning",
        description: "Your pet is positioned comfortably using our noose-free techniques."
      },
      {
        step: 2,
        title: "Nail Assessment",
        description: "We check each nail and identify the quick to ensure safe filing length."
      },
      {
        step: 3,
        title: "Diamond Wheel Filing",
        description: "Using our smooth diamond wheel, we file nails to the appropriate length without heat or rough grinding."
      },
      {
        step: 4,
        title: "Smooth Finish",
        description: "Each nail is left smooth and comfortable, with no sharp edges."
      }
    ],
    faqs: [
      {
        question: "What's wrong with traditional nail grinding?",
        answer: "Traditional dremels with sandpaper disks create heat through friction and loud vibration. Many dogs have learned to fear this sensation. The rough grinding can also leave nail edges jagged."
      },
      {
        question: "Is filing as effective as grinding?",
        answer: "Filing with a diamond wheel is actually more effective. It smoothly shortens nails without the heat and vibration, and leaves a smoother finish than rough sandpaper grinding."
      },
      {
        question: "My dog hates having nails done. Will filing be different?",
        answer: "Many dogs who fear traditional grinding tolerate our filing well because it's such a different experience - no heat, no harsh vibration, no loud noise. The calm approach often makes a huge difference."
      },
      {
        question: "Do you offer nail filing for cats?",
        answer: "Yes! We offer nail trimming and filing for cats as part of our no-sedation cat grooming services."
      }
    ],
    relatedServices: ["noose-free-dog-grooming", "ear-care"]
  }
]

export function getServicePageBySlug(slug: string): ServicePageData | undefined {
  return servicePages.find(page => page.slug === slug)
}

export function getAllServicePageSlugs(): string[] {
  return servicePages.map(page => page.slug)
}
