import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pet Grooming Services - Dog & Cat Grooming | Vanity Fur Cumming GA",
  description: "Professional pet grooming services in Cumming, GA and Forsyth County. Noose-free dog grooming, no-sedation cat grooming, lion cuts, nail filing, ear care, breed cuts. Serving North Georgia since 1985.",
  keywords: [
    "dog grooming services Cumming GA",
    "cat grooming services Forsyth County",
    "noose-free dog grooming",
    "no-sedation cat grooming",
    "lion cut cat grooming Georgia",
    "pet nail trimming Cumming",
    "dog ear cleaning near me",
    "breed-specific dog cuts",
    "persian cat grooming Alpharetta",
    "maine coon grooming Johns Creek",
    "teddy bear cut dog grooming",
    "pet bathing services Cumming"
  ],
  alternates: {
    canonical: 'https://vanityfur.us/services',
  },
  openGraph: {
    title: "Pet Grooming Services | Vanity Fur Pet Parlor Cumming GA",
    description: "Professional noose-free dog grooming and no-sedation cat grooming services in Cumming, GA. Lion cuts, breed cuts, nail care, ear cleaning and more.",
    url: 'https://vanityfur.us/services',
    siteName: 'Vanity Fur Pet Parlor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pet Grooming Services | Vanity Fur Pet Parlor",
    description: "Noose-free dog grooming and no-sedation cat grooming in Cumming, GA.",
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
