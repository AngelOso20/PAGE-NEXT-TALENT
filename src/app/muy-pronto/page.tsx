import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import ComingSoonHero from '@/components/ComingSoon/ComingSoonHero'

export const metadata: Metadata = {
  title: 'Muy Pronto - Next Talent Solutions',
  description: 'Estamos trabajando en algo increíble para ti. Pronto tendrás acceso a nuestro módulo de cliente.',
}

export default function ComingSoonPage() {
  return (
    <main>
      <NavMenu />
      <ComingSoonHero />
    </main>
  )
}
