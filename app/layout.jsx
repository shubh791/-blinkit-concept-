import './globals.css'

export const viewport = {
  themeColor: '#07080a',
  width: 'device-width',
  initialScale: 1,
}

export const metadata = {
  metadataBase: new URL('https://blinkit-concept.vercel.app'),

  title: {
    default: "Blinkit — Don't just think it. Do Blinkit.",
    template: '%s | Blinkit',
  },
  description:
    'Blinkit delivers groceries, electronics, medicines, and more to your door in under 10 minutes. 25,000+ products across 1,200+ neighborhoods. Available 24/7.',

  keywords: [
    'blinkit', 'instant delivery', 'quick commerce', '10 minute delivery',
    'grocery delivery', 'online pharmacy', 'same day delivery', 'dark store',
  ],

  authors: [
    { name: 'Shubham Panghal', url: 'https://github.com/shubh791' },
  ],
  creator: 'Shubham Panghal',

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://blinkit-concept.vercel.app',
    siteName: 'Blinkit',
    title: "Blinkit — Instant Delivery in 10 Minutes",
    description:
      '25,000+ products. 1,200+ neighborhoods. Groceries, gadgets, medicines — packed in 90 seconds, at your door in 10 minutes.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Blinkit — Instant Delivery in 10 Minutes',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: "Blinkit — Instant Delivery in 10 Minutes",
    description:
      '25,000+ products. 1,200+ neighborhoods. Groceries, gadgets, medicines — packed in 90 seconds, at your door in 10 minutes.',
    images: ['/og-image.svg'],
    creator: '@shubhampanghal',
  },

  icons: {
    icon:     [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
    apple:    '/icon.svg',
  },

  manifest: '/site.webmanifest',

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
