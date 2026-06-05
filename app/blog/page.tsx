import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight, Tag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { list } from "@vercel/blob"

export const metadata: Metadata = {
  title: "Pet Grooming Blog - Tips & Advice | Vanity Fur Cumming GA",
  description: "Expert dog and cat grooming tips from Vanity Fur Pet Parlor in Cumming, GA. Learn about noose-free grooming, no-sedation cat care, coat maintenance, and pet wellness in Forsyth County.",
  keywords: ["pet grooming tips", "dog grooming advice Cumming GA", "cat grooming tips", "noose-free grooming blog", "pet care Forsyth County"],
  alternates: {
    canonical: 'https://vanityfur.us/blog',
  },
  openGraph: {
    title: "Pet Grooming Blog | Vanity Fur Pet Parlor Cumming GA",
    description: "Expert pet grooming tips, advice, and news from Vanity Fur Pet Parlor in Cumming, GA.",
    url: 'https://vanityfur.us/blog',
  },
}

const staticPosts = [
  {
    id: "what-is-noose-free-grooming",
    slug: "what-is-noose-free-grooming",
    title: "What Is Noose-Free Grooming & Why It Matters",
    excerpt: "Traditional grooming loops can cause stress and injury. Learn why Vanity Fur uses a completely noose-free approach to keep your pet safe and comfortable during every grooming session.",
    image: "/images/gallery/yorkie-flower.jpg",
    tag: "Safety",
    date: "January 15, 2026",
    readTime: "4 min read",
  },
  {
    id: "full-view-grooming-explained",
    slug: "full-view-grooming-explained",
    title: "Full-View Grooming: See Your Pet the Entire Time",
    excerpt: "At Vanity Fur, our open grooming area means you can watch your pet being pampered from start to finish. Discover the benefits of full-view grooming and why pet parents love it.",
    image: "/images/gallery/schnauzer-blue.jpg",
    tag: "Transparency",
    date: "January 8, 2026",
    readTime: "3 min read",
  },
  {
    id: "cat-grooming-without-sedation",
    slug: "cat-grooming-without-sedation",
    title: "Cat Grooming Without Sedation: Our Gentle Approach",
    excerpt: "Many groomers sedate cats, but at Vanity Fur we never do. Learn about our dedicated Cat Room and the gentle techniques we use to keep feline friends calm and happy.",
    image: "/images/tracey-white-cat.jpg",
    tag: "Cat Care",
    date: "December 28, 2025",
    readTime: "5 min read",
  },
  {
    id: "winter-coat-care-tips",
    slug: "winter-coat-care-tips",
    title: "Winter Coat Care: Keeping Your Pet Cozy & Clean",
    excerpt: "Cold weather brings unique grooming challenges. From matting prevention to paw care, here are our top tips for maintaining your pet's coat through the winter months.",
    image: "/images/gallery/shih-tzu-tie.jpg",
    tag: "Seasonal Tips",
    date: "December 15, 2025",
    readTime: "4 min read",
  },
  {
    id: "how-often-should-you-groom",
    slug: "how-often-should-you-groom",
    title: "How Often Should You Groom Your Dog? A Breed Guide",
    excerpt: "Grooming frequency depends on your dog's breed, coat type, and lifestyle. We break down the recommended schedules for common breeds to help you keep your pup looking their best.",
    image: "/images/gallery/maltipoo-blue.jpg",
    tag: "Dog Care",
    date: "December 5, 2025",
    readTime: "6 min read",
  },
  {
    id: "choosing-the-right-groomer",
    slug: "choosing-the-right-groomer",
    title: "5 Signs You've Found the Right Pet Groomer",
    excerpt: "Finding the right groomer is one of the most important decisions you'll make as a pet parent. From transparency to gentle handling, here's what to look for.",
    image: "/images/gallery/bruce-charlie.jpg",
    tag: "Advice",
    date: "November 20, 2025",
    readTime: "5 min read",
  },
]

async function getCmsPosts() {
  try {
    const { blobs } = await list({ prefix: "blog/posts/" })
    const posts = await Promise.all(
      blobs
        .filter((blob) => blob.pathname.endsWith(".json"))
        .map(async (blob) => {
          try {
            const response = await fetch(blob.url, { next: { revalidate: 60 } })
            return await response.json()
          } catch {
            return null
          }
        })
    )
    return posts.filter(Boolean).sort(
      (a: { createdAt: string }, b: { createdAt: string }) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const cmsPosts = await getCmsPosts()

  // CMS posts first, then static
  const allPosts = [...cmsPosts, ...staticPosts]
  const featured = allPosts[0]
  const rest = allPosts.slice(1)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-secondary/50 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                <Tag className="w-4 h-4" />
                Grooming Tips & News
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 text-balance">
                The Vanity Fur Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Expert advice on pet grooming, coat care, and keeping your furry friends healthy and happy.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featured && (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-6">
              <div className="max-w-6xl mx-auto">
                <Link
                  href={`/blog/${featured.slug || featured.id}`}
                  className="group block bg-card rounded-3xl overflow-hidden border border-border/50 hover:shadow-xl transition-all duration-500"
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden bg-card min-h-[200px] md:min-h-[300px] flex items-center justify-center">
                      {featured.image ? (
                        <Image
                          src={featured.image}
                          alt={featured.title}
                          width={600}
                          height={600}
                          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-64 bg-primary/10 flex items-center justify-center">
                          <Tag className="w-12 h-12 text-primary/30" />
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                          {featured.tag}
                        </span>
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                          <Clock className="w-3.5 h-3.5" />
                          {featured.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {featured.title}
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {featured.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{featured.date}</span>
                        <span className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                          Read More <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Blog Grid */}
        <section className="py-12 md:py-16 pb-20 md:pb-28">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-10">
                All Articles
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rest.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug || post.id}`}
                    className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-500"
                  >
                    <div className="relative overflow-hidden bg-card min-h-[180px] flex items-center justify-center">
                      {post.image ? (
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={400}
                          height={400}
                          className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-48 bg-primary/10 flex items-center justify-center">
                          <Tag className="w-8 h-8 text-primary/30" />
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 bg-card/90 backdrop-blur-sm text-foreground text-xs font-medium rounded-full">
                          {post.tag}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                        <span className="w-1 h-1 bg-muted-foreground rounded-full" />
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 pt-4 border-t border-border/50">
                        <span className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                          Read Article <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-card border-t border-border/50">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                Ready to Pamper Your Pet?
              </h2>
              <p className="text-muted-foreground mb-8">
                Book a grooming appointment and see our full-view, noose-free approach in person.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8 h-14 text-base transition-all duration-300 hover:shadow-xl"
              >
                <Link href="/contact">
                  Book An Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
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
