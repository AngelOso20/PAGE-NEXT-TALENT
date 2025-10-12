import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import NotFoundHero from '@/components/NotFound/NotFoundHero'

export const metadata: Metadata = {
  title: 'Página no encontrada - Next Talent Solutions',
  description: 'La página que buscas no existe. Regresa al inicio para encontrar lo que necesitas.',
}

export default function NotFound() {
  return (
    <main>
      <NavMenu />
      <NotFoundHero />
    </main>
  )
}
