import './globals.css'
import { Playfair_Display, Lato } from 'next/font/google'
import ApolloProvider from './components/providers/ApolloProvider'
import { DemoModeBanner } from './components/DemoModeBanner'
import { Viewport, type Metadata } from 'next'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
})

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1 }

function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL
  if (explicit) return explicit.replace(/\/$/, '')
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  const port = process.env.PORT || '3000'
  const host = process.env.HOST || 'localhost'
  return `http://${host}:${port}`
}

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: 'The Obsidian Hall', template: '%s | The Obsidian Hall' },
  description: 'The Obsidian Hall is a premier event venue offering grand spaces for weddings, galas, corporate events, and celebrations of every kind.',
  formatDetection: { email: false, address: false, telephone: false },
  icons: { icon: [{ url: '/icon', sizes: '32x32', type: 'image/png' }, { url: '/favicon.ico', sizes: 'any' }], apple: [{ url: '/apple-icon', sizes: '180x180', type: 'image/png' }] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans bg-primary-950 text-gray-100 antialiased">
        <DemoModeBanner />
        <ApolloProvider>{children}</ApolloProvider>
      </body>
    </html>
  )
}
