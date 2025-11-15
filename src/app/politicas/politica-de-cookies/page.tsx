import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import PoliticaCookies from '@/components/Politicas/PoliticaCookies'

export const metadata: Metadata = {
  title: 'Política de Cookies - Next Talent Solutions',
  description: 'Política de Cookies de Next Talent Solutions S.A.S.',
}

export default function PoliticaCookiesPage() {
  return (
    <main>
      <NavMenu />
      <PoliticaCookies />
    </main>
  )
}

