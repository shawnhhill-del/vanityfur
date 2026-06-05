import React from "react"
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter, Great_Vibes } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { LocalBusinessJsonLd, WebsiteJsonLd, FAQJsonLd } from '@/components/seo/json-ld'
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
  title: {
    default: 'Vanity Fur Pet Parlor | Dog & Cat Grooming Cumming GA',
    template: '%s | Vanity Fur Pet Parlor',
  },
  description: 'Dog & cat grooming — professional pet grooming in Cumming, GA. Family-owned 35+ years offering full-view, noose-free dog grooming and no-sedation cat grooming in Forsyth County.',
  keywords: ['dog grooming Cumming GA', 'cat grooming Cumming GA', 'pet grooming Forsyth County', 'pet grooming Cumming GA', 'noose-free dog grooming', 'no-sedation cat grooming', 'full-view grooming', 'pet grooming near me Cumming', 'Vanity Fur Pet Parlor', 'professional pet groomer Georgia'],
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
    title: 'Vanity Fur Pet Parlor | Noose-Free Dog & Cat Grooming Cumming GA',
    description: 'Premier pet grooming in Cumming, GA. Noose-free dog grooming and no-sedation cat grooming. Full-view grooming since 1985.',
    url: 'https://vanityfur.us',
    siteName: 'Vanity Fur Pet Parlor',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://vanityfur.us/images/home-20page-20lady-20image.png',
        width: 1200,
        height: 630,
        alt: 'Vanity Fur Pet Parlor - Professional Pet Grooming in Cumming GA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vanity Fur Pet Parlor | Noose-Free Pet Grooming Cumming GA',
    description: 'Noose-free dog grooming and no-sedation cat grooming in Cumming, GA. Family-owned since 1985.',
    images: ['https://vanityfur.us/images/home-20page-20lady-20image.png'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfair.variable} ${_inter.variable} ${_greatVibes.variable}`} suppressHydrationWarning>
      <head>
        <LocalBusinessJsonLd />
        <WebsiteJsonLd />
        <FAQJsonLd />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="vanity-fur-theme"
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
