import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Customer Reviews - 5-Star Pet Grooming | Vanity Fur Cumming GA",
  description: "Read verified 5-star reviews from thousands of dog and cat owners at Vanity Fur Pet Parlor in Cumming, GA. See why pet parents trust us for noose-free dog grooming and no-sedation cat grooming.",
  keywords: [
    "Vanity Fur reviews",
    "pet grooming reviews Cumming GA",
    "best pet groomer Forsyth County",
    "dog grooming reviews Georgia",
    "cat grooming reviews near me",
    "noose-free grooming testimonials",
    "no-sedation cat grooming reviews",
    "best dog groomer Alpharetta area",
    "cat groomer reviews Johns Creek",
    "pet grooming testimonials Milton GA"
  ],
  alternates: {
    canonical: 'https://vanityfur.us/reviews',
  },
  openGraph: {
    title: "Customer Reviews | Vanity Fur Pet Parlor Cumming GA",
    description: "Read what thousands of pet parents say about Vanity Fur. 5-star reviews for noose-free dog grooming and no-sedation cat grooming in North Georgia.",
    url: 'https://vanityfur.us/reviews',
  },
}

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
