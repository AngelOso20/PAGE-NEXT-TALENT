import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import PoliticaEtica from '@/components/Politicas/PoliticaEtica'

export const metadata: Metadata = {
  title: 'Código de Ética y Cumplimiento - Next Talent Solutions',
  description: 'Código de Ética y Cumplimiento de Next Talent Solutions S.A.S.',
}

export default function CodigoEticaPage() {
  return (
    <main>
      <NavMenu />
      <PoliticaEtica />
    </main>
  )
}

