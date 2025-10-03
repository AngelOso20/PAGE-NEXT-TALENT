import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Next Talent Solutions',
  description: 'Soluciones en talento humano y tecnología al alcance de cualquier negocio',
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
      </head>
      <body>{children}</body>
    </html>
  )
}

