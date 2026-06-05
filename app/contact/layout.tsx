import React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Book Pet Grooming Appointment | Vanity Fur Cumming GA",
  description: "Book a pet grooming appointment at Vanity Fur Pet Parlor in Cumming, GA. Call (770) 617-1374. Located at 1735 Buford Hwy Suite 210. Noose-free dog grooming and no-sedation cat grooming.",
  keywords: [
    "book pet grooming Cumming GA",
    "pet grooming appointment Forsyth County",
    "contact Vanity Fur",
    "dog grooming near me Cumming",
    "cat grooming appointment Georgia",
    "pet groomer phone number Cumming",
    "Vanity Fur Pet Parlor address",
    "pet grooming directions Forsyth County",
    "schedule dog grooming Alpharetta area",
    "book cat grooming Johns Creek area"
  ],
  alternates: {
    canonical: 'https://vanityfur.us/contact',
  },
  openGraph: {
    title: "Contact Vanity Fur Pet Parlor - Book Grooming in Cumming GA",
    description: "Book a pet grooming appointment at Vanity Fur in Cumming, GA. Located at 1735 Buford Hwy Suite 210. Call (770) 617-1374. Noose-free and no-sedation grooming.",
    url: 'https://vanityfur.us/contact',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
