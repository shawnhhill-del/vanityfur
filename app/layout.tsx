import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#d4618a' },
    { media: '(prefers-color-scheme: dark)', color: '#d4618a' },
  ],
}

const _playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' });
const _inter = Inter({ subsets: ["latin"], variable: '--font-sans' });
const _greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], variable: '--font-logo' });

export const metadata: Metadata = {
  title: 'Vanity Fur Pet Parlor | Best Pet Grooming in Cumming, GA | Dog & Cat Grooming',
  description: 'Vanity Fur Pet Parlor - Cumming\'s premier pet grooming salon. Professional dog grooming & cat grooming services in Cumming, GA. Family-owned since 1985. Book your appointment today!',
  keywords: ['pet grooming Cumming GA', 'dog grooming Cumming', 'cat grooming Cumming', 'pet parlor Cumming Georgia', 'best pet groomer Cumming', 'Vanity Fur', 'dog grooming near me', 'cat grooming near me', 'pet spa Cumming', 'professional pet grooming'],
  authors: [{ name: 'Vanity Fur Pet Parlor' }],
  creator: 'Vanity Fur Pet Parlor',
  publisher: 'Vanity Fur Pet Parlor',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://vanityfur.us'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Vanity Fur Pet Parlor | Best Pet Grooming in Cumming, GA',
    description: 'Premium dog & cat grooming services in Cumming, Georgia. Family-owned since 1985. Where paws are pampered with love!',
    url: 'https://vanityfur.us',
    siteName: 'Vanity Fur Pet Parlor',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanity Fur Pet Parlor | Best Pet Grooming in Cumming, GA',
    description: 'Premium dog & cat grooming services in Cumming, Georgia. Family-owned since 1985.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.jpg',
        sizes: '32x32',
      },
    ],
    apple: '/apple-touch-icon.jpg',
    shortcut: '/favicon.jpg',
  },
  manifest: '/manifest.json',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'PetStore',
  name: 'Vanity Fur Pet Parlor',
  image: 'https://vanityfur.us/images/home-20page-20lady-20image.png',
  '@id': 'https://vanityfur.us',
  url: 'https://vanityfur.us',
  telephone: '(770) 617-1374',
  email: 'tracey@vanityfur.us',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '2539 Pinetree Rd',
    addressLocality: 'Cumming',
    addressRegion: 'GA',
    postalCode: '30041',
    addressCountry: 'US'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 34.2073,
    longitude: -84.1402
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:30',
      closes: '18:30'
    }
  ],
  sameAs: [
    'https://share.google/8LdmM0BiM7AMGIcL3',
    'https://www.facebook.com/tracey.moffittcuthbertson',
    'https://www.instagram.com/vanityfur.us/',
    'https://x.com/vanityfur',
    'https://www.yelp.com/biz/vanity-fur-pet-parlor-cumming',
    'https://www.youtube.com/@VanityFurPetParlor'
  ],
  priceRange: '$$',
  servesCuisine: 'Pet Grooming',
  description: 'Premium dog and cat grooming services in Cumming, GA. Family-owned since 1985.',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '100'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfair.variable} ${_inter.variable} ${_greatVibes.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const stored = localStorage.getItem('vanity-fur-theme');
                const theme = stored || 'dark';
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="vanity-fur-theme"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
