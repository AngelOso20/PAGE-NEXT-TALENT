import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import NosotrosHero from '@/components/Nosotros/NosotrosHero'
import DiferencialesSection from '@/components/Nosotros/DiferencialesSection'
import HistoriaSection from '@/components/Nosotros/HistoriaSection'

export const metadata: Metadata = {
  title: 'Nosotros - Next Talent Solutions',
  description: 'Somos aliados estratégicos para el talento humano de tu empresa',
}

export default function NosotrosPage() {
  return (
    <main>
      <NavMenu />
      <NosotrosHero />
      <DiferencialesSection />
      <HistoriaSection />
    </main>
  )
}

