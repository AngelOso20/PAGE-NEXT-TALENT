import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import PlanesHero from '@/components/Planes/PlanesHero'
import PlanesCards from '@/components/Planes/PlanesCards'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
  title: 'Planes - Next Talent Solutions',
  description: 'Diseñamos soluciones flexibles y escalables que se adaptan al tamaño y etapa de tu negocio',
}

export default function PlanesPage() {
  return (
    <main>
      <NavMenu />
      <PlanesHero />
      <PlanesCards />
      <Footer />
    </main>
  )
}
