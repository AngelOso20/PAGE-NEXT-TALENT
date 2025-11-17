import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import BlogDetailHero from '@/components/BlogDetail/BlogDetailHero'
import BlogDetailContent from '@/components/BlogDetail/BlogDetailContent'

export const metadata: Metadata = {
  title: '5 errores que frenan el crecimiento de tu microempresa | Next Talent Solutions',
  description:
    'Identifica los errores más comunes en la gestión de RR. HH. de una microempresa y aplícalos con buenas prácticas legales, operativas y de talento humano.'
}

export default function BlogErroresMicroempresaPage() {
  return (
    <main>
      <NavMenu />
      <BlogDetailHero
        category="Gestión de personas"
        title="5 errores que frenan el crecimiento de tu microempresa (y cómo evitarlos)"
        description="Gestionar una microempresa es un desafío constante. El tiempo, los recursos y la energía suelen ser limitados, y pequeños descuidos pueden convertirse en grandes obstáculos para crecer."
        image={{
          src: '/images/Blog/Articulo 1.webp',
          alt: 'Emprendedora en su microempresa organizando inventario'
        }}
        ctaLabel="Volver al blog"
        ctaHref="/blog"
      />
      <BlogDetailContent />
    </main>
  )
}


