import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import ServiciosHero from '@/components/Servicios/ServiciosHero'
import ServiciosCards from '@/components/Servicios/ServiciosCards'
import BlogSection from '@/components/BlogSection/BlogSection'

export const metadata: Metadata = {
  title: 'Servicios - Next Talent Solutions',
  description: 'Innovación y estrategia para el futuro de tu negocio',
}

export default function ServiciosPage() {
  return (
    <main>
      <NavMenu />
      image.png
      <ServiciosCards />
      <BlogSection />
    </main>
  )
}
