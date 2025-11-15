import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import PoliticaProteccionDatos from '@/components/Politicas/PoliticaProteccionDatos'

export const metadata: Metadata = {
  title: 'Política de Protección de Datos Personales - Next Talent Solutions',
  description: 'Política de Protección de Datos Personales de Next Talent Solutions S.A.S.',
}

export default function PoliticaProteccionDatosPage() {
  return (
    <main>
      <NavMenu />
      <PoliticaProteccionDatos />
    </main>
  )
}

