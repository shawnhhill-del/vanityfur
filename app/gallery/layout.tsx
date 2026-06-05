import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pet Grooming Gallery - Dog & Cat Photos | Vanity Fur Cumming GA",
  description: "View our gallery of beautifully groomed dogs and cats at Vanity Fur Pet Parlor in Cumming, GA. See examples of noose-free dog grooming and no-sedation cat grooming in Forsyth County.",
  keywords: ["pet grooming photos Cumming GA", "dog grooming gallery Forsyth County", "cat grooming before after", "Vanity Fur gallery", "pet grooming near me"],
  alternates: {
    canonical: 'https://vanityfur.us/gallery',
  },
  openGraph: {
    title: "Pet Grooming Gallery | Vanity Fur Pet Parlor Cumming GA",
    description: "Browse photos and videos of beautifully groomed pets at Vanity Fur. Over 35 years of grooming mastery in Cumming, Georgia.",
    url: 'https://vanityfur.us/gallery',
  },
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
