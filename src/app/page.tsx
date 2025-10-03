import NavMenu from '@/components/NavMenu/NavMenu'

export default function Home() {
  return (
    <main>
      <NavMenu />
      <div style={{ height: '200vh', padding: '150px 20px 20px' }}>
        {/* Contenido temporal para testing del scroll */}
        <h1>Next Talent Solutions</h1>
        <p>Ninguna empresa debe quedarse atrás</p>
      </div>
    </main>
  )
}

