import type { Metadata } from 'next'
import Footer from '@/components/Footer/Footer'
import CookieBanner from '@/components/CookieBanner/CookieBanner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next Talent Solutions',
  description: 'Soluciones en talento humano y tecnología al alcance de cualquier negocio',
  icons: {
    icon: '/images/Iconos/SVG/Isotipo.svg',
    shortcut: '/images/Iconos/SVG/Isotipo.svg',
    apple: '/images/Iconos/SVG/Isotipo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tmy8yey.css" />
        <link rel="icon" href="/images/Iconos/SVG/Isotipo.svg" type="image/svg+xml" />
      </head>
      <body>
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

