import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, ArrowRight, Tag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { list } from "@vercel/blob"

const staticPosts: Record<string, {
  title: string
  excerpt: string
  image: string
  tag: string
  date: string
  readTime: string
  content: string[]
}> = {
  "what-is-noose-free-grooming": {
    title: "What Is Noose-Free Grooming & Why It Matters",
    excerpt: "Traditional grooming loops can cause stress and injury. Learn why Vanity Fur uses a completely noose-free approach.",
    image: "/images/gallery/yorkie-flower.jpg",
    tag: "Safety",
    date: "January 15, 2026",
    readTime: "4 min read",
    content: [
      "Traditional pet grooming often relies on grooming loops, also known as nooses, to keep pets still on the grooming table. While these loops are standard in the industry, they can cause significant stress, anxiety, and even physical injury to your pet.",
      "At Vanity Fur Pet Parlor, we made the decision decades ago to eliminate grooming nooses entirely from our practice. Instead, we rely on patience, gentle handling techniques, and building trust with each animal that comes through our doors.",
      "Noose-free grooming means your pet is never restrained by the neck during their grooming session. This approach requires more skill and experience from the groomer, but the results speak for themselves: calmer pets, fewer injuries, and a grooming experience your pet won't dread.",
      "Our groomers use calm, reassuring voices and gentle physical support to keep pets positioned correctly. We take breaks when needed and never rush through a session. This approach has been central to our philosophy since we opened in 1985.",
      "The benefits of noose-free grooming extend beyond just physical safety. Pets who are groomed without restraints tend to be less anxious during future visits, making each session easier and more enjoyable for everyone involved.",
      "If your pet has ever come home from a grooming session stressed or with marks on their neck, it may be time to switch to a noose-free groomer. Your pet deserves a grooming experience that prioritizes their comfort and well-being.",
    ],
  },
  "full-view-grooming-explained": {
    title: "Full-View Grooming: See Your Pet the Entire Time",
    excerpt: "Wondering what happens behind closed doors at your groomer? At Vanity Fur, there are no closed doors — everything is out in the open.",
    image: "/images/gallery/schnauzer-blue.jpg",
    tag: "Transparency",
    date: "January 8, 2026",
    readTime: "4 min read",
    content: [
      "Have you ever dropped your pet off at a groomer and wondered what was happening behind closed doors? That icky feeling in your stomach when you wonder what's going on back there? You should know — there's often a reason for those closed doors. At Vanity Fur Pet Parlor, we believe transparency is key to building trust with pet parents.",
      "Our full-view grooming setup means you can see every stage of the grooming process. There are no hidden rooms or closed doors. Every bath, brush, and trim happens in plain sight. Vanity Fur has nothing to hide. We welcome curiosity and invite questions and interaction.",
      "Everything we do is out in the open, all day, every day. You're free to pop in any time! The only exception — don't arrive too early when your own dog is on the finishing table, because there will be premature celebratory activity that prohibits expedient completion of the process!",
      "Full-view grooming isn't just about transparency — it's about accountability. When groomers know their work is visible, it creates a natural incentive to maintain the highest standards of care and professionalism at all times.",
      "Many pet parents tell us that seeing our grooming process for the first time was a revelation. They could see firsthand the gentle techniques we use, the calm energy, and how comfortable their pets were throughout. No more wondering, no more worrying.",
      "If your current groomer takes your pet behind closed doors and you're left wondering what happens during the grooming process, consider visiting Vanity Fur. We're proud to show you exactly how we treat your beloved family members — because we have nothing to hide.",
    ],
  },
  "cat-grooming-without-sedation": {
    title: "Cat Grooming Without Sedation: Our Gentle Approach",
    excerpt: "Many groomers sedate cats, but at Vanity Fur we never do.",
    image: "/images/tracey-white-cat.jpg",
    tag: "Cat Care",
    date: "December 28, 2025",
    readTime: "5 min read",
    content: [
      "Cat grooming is a specialized skill that many groomers avoid altogether. Those who do offer it often rely on sedation to manage feline behavior. At Vanity Fur, we take a completely different approach.",
      "Our dedicated Cat Room is designed specifically for feline grooming. The environment is calm, quiet, and separate from the dog grooming area. This separation is crucial because cats are sensitive to the sounds and scents of dogs.",
      "With over 35 years of experience in cat grooming, our team has developed gentle handling techniques that keep cats calm without any sedation. We understand feline body language and know when to push forward and when to pause.",
      "Sedation carries real risks for cats, including adverse reactions, respiratory issues, and prolonged recovery times. By avoiding sedation entirely, we eliminate these risks while still achieving beautiful grooming results.",
      "Our cat grooming services include lion cuts, sanitary trims, full baths, nail trimming, and ear cleaning. Each service is performed with patience and care, ensuring your cat has the most comfortable experience possible.",
      "If you've been told your cat needs sedation for grooming, we encourage you to give Vanity Fur a try. You might be surprised at how well your cat responds to our gentle, sedation-free approach.",
    ],
  },
  "winter-coat-care-tips": {
    title: "Winter Coat Care: Keeping Your Pet Cozy & Clean",
    excerpt: "Cold weather brings unique grooming challenges for your pet.",
    image: "/images/gallery/shih-tzu-tie.jpg",
    tag: "Seasonal Tips",
    date: "December 15, 2025",
    readTime: "4 min read",
    content: [
      "As temperatures drop, many pet parents assume their dogs and cats need less grooming during winter. In reality, cold weather grooming is just as important as warm weather care, if not more so.",
      "Winter coats tend to be thicker and denser, which means they're more prone to matting. Matted fur doesn't insulate as well and can trap moisture against the skin, leading to irritation and even infection.",
      "Regular brushing is essential during winter months. Aim for at least every other day for long-haired breeds and twice a week for short-haired breeds. This keeps the coat healthy and free of tangles.",
      "Paw care is especially important in winter. Salt and chemical de-icers can irritate your pet's paw pads. Wipe your pet's paws after every outdoor walk and consider using a pet-safe paw balm for protection.",
      "Don't skip regular grooming appointments in winter. A professional groomer can properly maintain your pet's coat, trim overgrown fur around the paws (which can collect ice balls), and check for any skin issues hidden under thick winter fur.",
      "At Vanity Fur, we adjust our grooming approach seasonally to ensure your pet's coat is properly maintained year-round. Schedule a winter grooming session to keep your pet comfortable and healthy through the cold months.",
    ],
  },
  "how-often-should-you-groom": {
    title: "How Often Should You Groom Your Dog? A Breed Guide",
    excerpt: "Grooming frequency depends on your dog's breed, coat type, and lifestyle.",
    image: "/images/gallery/maltipoo-blue.jpg",
    tag: "Dog Care",
    date: "December 5, 2025",
    readTime: "6 min read",
    content: [
      "One of the most common questions we get at Vanity Fur is how often a dog should be professionally groomed. The answer depends on several factors, with breed and coat type being the most important.",
      "Short-haired breeds like Beagles and Labrador Retrievers typically need professional grooming every 8 to 12 weeks. While their coats are low-maintenance, regular baths, nail trims, and ear cleanings are still important for overall health.",
      "Medium-coated breeds like Golden Retrievers and Cocker Spaniels should visit the groomer every 6 to 8 weeks. Their coats can mat if neglected, and regular trimming helps manage shedding.",
      "Long-haired and curly-coated breeds like Poodles, Shih Tzus, and Maltipoos need the most frequent grooming, every 4 to 6 weeks. These coats grow continuously and can quickly become matted and uncomfortable without regular maintenance.",
      "Beyond breed considerations, your dog's lifestyle matters too. Dogs that spend a lot of time outdoors, swim frequently, or roll in the dirt may need more frequent grooming. Senior dogs may also benefit from more frequent visits as their coat texture changes with age.",
      "At Vanity Fur, we're happy to create a customized grooming schedule for your specific dog. Contact us to discuss the best grooming frequency for your furry family member.",
    ],
  },
  "choosing-the-right-groomer": {
    title: "5 Signs You've Found the Right Pet Groomer",
    excerpt: "Finding the right groomer is one of the most important decisions you'll make as a pet parent. Here are five signs you've found the right one.",
    image: "/images/gallery/bruce-charlie.jpg",
    tag: "Advice",
    date: "November 20, 2025",
    readTime: "5 min read",
    content: [
      "Finding the right groomer for your pet is one of the most important decisions you'll make as a pet parent. Here are five signs that indicate you've found a great groomer.",
      "First, transparency is key. A good groomer should welcome questions and be open about their process. If you can openly see every stage of grooming, even better. At Vanity Fur, our full-view grooming means you can always see what's happening — no closed doors, no wondering.",
      "Second, look for gentle handling techniques. Watch how the groomer interacts with pets. Here at Vanity Fur, we stand apart. We do not use grooming nooses. We have tables that are low and groomers are seated at eye level with the pets we are working with, fostering a more intimate, connected, compassionate exchange where your dog is able to feel the calm and compassionate energy, resulting in a great cooperative relationship between your pet and groomer!",
      "Third, experience matters! The grooming industry is unregulated in the state of Georgia. \"Certifications\" and various accreditations should be given realistic consideration, given that any person, qualified or not, can easily acquire official-looking certificates or documents on the internet to hang on their wall or post on their website. Look for actual history and organic reviews, testimonials, photos and videos. You'll find all of that at Vanity Fur — our long storied history in the industry, our generations of happy clients, and a gallery full of our artistry.",
      "Fourth, transparency matters! Wondering what is happening behind closed doors should cause that icky feeling in your stomach. You should know, there's a reason for those closed doors. I have witnessed those reasons firsthand in my formative years. Vanity Fur has nothing to hide. We welcome curiosity and invite questions and interaction. Everything we do is out in the open, all day, every day. You're free to pop in any time!",
      "Fifth, pay attention to what your pet is telling you. The ultimate test of a great groomer is how your pet reacts when returning home. Is there proud prancing and absence of post-traumatic behavior? Does your pet seem excited or at least relaxed when arriving for their next appointment? These are strong signs that you've found the right place for your pet!",
      "Many of our clients say they can't mention coming to see us until it's time to leave because they have to listen to the excitement! And so many dogs know when they turn down our road and begin happy hopping all over the car and drag their owners to the door! Of course there's always the ones with a flair for the dramatic and expertise at the guilt trip of their heartbreaking abandonment with vibrating and carrying on, but that's usually just for you. We can send you a video of how quickly they rebound after you are out of sight!",
    ],
  },
}

async function getCmsPost(slug: string) {
  try {
    const { blobs } = await list({ prefix: "blog/posts/" })
    for (const blob of blobs) {
      if (!blob.pathname.endsWith(".json")) continue
      try {
        const response = await fetch(blob.url, { next: { revalidate: 60 } })
        const data = await response.json()
        if (data.slug === slug) {
          return data
        }
      } catch {
        continue
      }
    }
    return null
  } catch {
    return null
  }
}

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const canonicalUrl = `https://vanityfur.us/blog/${slug}`

  // Check static first, then CMS
  const staticPost = staticPosts[slug]
  if (staticPost) {
    return {
      title: `${staticPost.title} | Vanity Fur Pet Parlor Blog`,
      description: staticPost.excerpt,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: `${staticPost.title} | Vanity Fur Pet Parlor`,
        description: staticPost.excerpt,
        url: canonicalUrl,
        type: 'article',
        images: staticPost.image ? [{ url: `https://vanityfur.us${staticPost.image}` }] : undefined,
      },
    }
  }

  const cmsPost = await getCmsPost(slug)
  if (cmsPost) {
    return {
      title: `${cmsPost.title} | Vanity Fur Pet Parlor Blog`,
      description: cmsPost.excerpt,
      alternates: {
        canonical: canonicalUrl,
      },
      openGraph: {
        title: `${cmsPost.title} | Vanity Fur Pet Parlor`,
        description: cmsPost.excerpt,
        url: canonicalUrl,
        type: 'article',
        images: cmsPost.image ? [{ url: cmsPost.image.startsWith('http') ? cmsPost.image : `https://vanityfur.us${cmsPost.image}` }] : undefined,
      },
    }
  }

  return { 
    title: "Post Not Found",
    robots: { index: false, follow: false }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  // Check static posts first
  const staticPost = staticPosts[slug]
  let post = staticPost
    ? {
        slug,
        title: staticPost.title,
        excerpt: staticPost.excerpt,
        image: staticPost.image,
        tag: staticPost.tag,
        date: staticPost.date,
        readTime: staticPost.readTime,
        content: staticPost.content,
      }
    : null

  // If not found in static, check CMS
  if (!post) {
    const cmsPost = await getCmsPost(slug)
    if (cmsPost) {
      post = cmsPost
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-40 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-serif text-3xl font-semibold text-foreground mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you are looking for does not exist.</p>
            <Button asChild className="rounded-full">
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Header */}
        <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  {post.tag}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 text-balance">
                {post.title}
              </h1>
              <p className="text-muted-foreground">{post.date}</p>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        {post.image && (
          <section className="pb-8">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <div className="relative rounded-2xl overflow-hidden bg-card flex items-center justify-center">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={800}
                    className="w-full h-auto max-h-[600px] object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Content */}
        <section className="py-12 md:py-16 pb-24">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <article className="space-y-6">
                {post.content.map((paragraph: string, index: number) => (
                  <p 
                    key={index} 
                    className="text-foreground/85 leading-[1.8] text-[17px] md:text-lg font-normal"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>

              {/* Divider */}
              <div className="my-12 flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-muted-foreground text-sm">Vanity Fur Pet Parlor</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* CTA */}
              <div className="p-8 md:p-10 bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl text-center">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Ready to Experience the Vanity Fur Difference?
                </h3>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Book a grooming appointment and see our full-view, noose-free approach in person.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-12"
                >
                  <Link href="/contact">
                    Book An Appointment
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
