import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import ContactHero from '@/components/Contacto/ContactHero'

export const metadata: Metadata = {
  title: 'Contacto - Next Talent Solutions',
  description: 'Contáctanos para descubrir cómo podemos optimizar la gestión de tu talento humano.',
}

export default function ContactoPage() {
  return (
    <main>
      <NavMenu />
      <ContactHero />
    </main>
  )
}
