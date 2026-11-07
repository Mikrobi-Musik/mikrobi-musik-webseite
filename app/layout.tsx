import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mikrobi-musik.de'),
  title: {
    default: 'Mikrobi-Musik | Personalisierte Auftragssongs & Herzensprojekte',
    template: '%s | Mikrobi-Musik',
  },
  description:
    'Individuelle Wunschlieder für private Anlässe ab 49 € Festpreis. Jedes Lied finanziert ehrenamtliche Musikprojekte für Hospize und schwerkranke Kinder.',
  icons: {
    icon: [
      {
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/icon.png',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    title: 'Mikrobi-Musik | Dein persönlicher Song',
    description:
      'Maßgeschneiderte Lieder mit Herz – das Zwei-Säulen-Modell für Auftragssongs und ehrenamtliche Trostmusik.',
    url: 'https://www.mikrobi-musik.de',
    siteName: 'Mikrobi-Musik',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Mikrobi-Musik | Personalisierte Auftragssongs & Herzensprojekte',
    description:
      'Individuelle Wunschlieder ab 49 € Festpreis zur Förderung ehrenamtlicher Herzensprojekte.',
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#05050A',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MusicGroup',
  name: 'Mikrobi-Musik',
  url: 'https://www.mikrobi-musik.de',
  logo: 'https://www.mikrobi-musik.de/icon.png',
  image: 'https://www.mikrobi-musik.de/icon.png',
  description:
    'Personalisierte Auftragssongs für private Anlässe und ehrenamtliche Herzensprojekte nach dem Robin-Hood-Prinzip.',
  founder: {
    '@type': 'Person',
    name: 'Mirko Neumann',
  },
  priceRange: '49 €',
  sameAs: [
    'https://www.youtube.com/channel/UCkNhzYx90Fix5KtVyUMd2TQ',
    'https://open.spotify.com/artist/MIKROBI',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${outfit.variable} dark`}>
      <head>
        <Script
          id="schema-org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}