import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import PoliticaEtica from '@/components/Politicas/PoliticaEtica'

export const metadata: Metadata = {
  title: 'Política de Ética y Cumplimiento - Next Talent Solutions',
  description: 'Política de Ética y Cumplimiento de Next Talent Solutions S.A.S.',
}

export default function PoliticaEticaPage() {
  return (
    <main>
      <NavMenu />
      <PoliticaEtica />
    </main>
  )
}

