import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import BlogHero from '@/components/Blog/BlogHero'
import BlogSection from '@/components/Blog/BlogSection'


export const metadata: Metadata = {
  title: 'Blog y Eventos - Next Talent Solutions',
  description: 'Descubre artículos y eventos sobre gestión de talento humano y tecnología.',
}

export default function BlogPage() {
  return (
    <main>
      <NavMenu />
      <BlogHero />
      <BlogSection />
    </main>
  )
}
