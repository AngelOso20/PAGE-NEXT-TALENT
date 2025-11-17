import Link from 'next/link'
import Image from 'next/image'
import styles from './BlogDetailContent.module.css'

interface RelatedArticle {
  id: number
  title: string
  image: string
  href: string
}

interface EventCard {
  id: number
  title: string
  date: {
    month: string
    day: string
  }
  href: string
}

interface BlogDetailContentCustomProps {
  /**
   * Fecha de publicación del artículo
   */
  date: string
  /**
   * Contenido principal del artículo (JSX)
   */
  children: React.ReactNode
  /**
   * Artículos relacionados para mostrar en el sidebar
   */
  relatedArticles?: RelatedArticle[]
  /**
   * Eventos relacionados para mostrar en el sidebar
   */
  events?: EventCard[]
}

/**
 * Componente reutilizable para el contenido de detalle de blog.
 * Permite personalizar el contenido principal mientras mantiene
 * la estructura del sidebar (artículos relacionados, eventos, compartir).
 * 
 * @param date - Fecha de publicación
 * @param children - Contenido principal del artículo
 * @param relatedArticles - Lista de artículos relacionados (opcional)
 * @param events - Lista de eventos relacionados (opcional)
 */
export default function BlogDetailContentCustom({
  date,
  children,
  relatedArticles = [],
  events = []
}: BlogDetailContentCustomProps) {
  // Artículos relacionados por defecto si no se proporcionan
  const defaultRelatedArticles: RelatedArticle[] = [
    {
      id: 1,
      title: 'Cómo ajustar tus contratos de aprendizaje con la Ley 2466',
      image: '/images/Blog/Articulo 3.webp',
      href: '/blog/ley-2466-contratos-aprendizaje'
    },
    {
      id: 2,
      title: 'Checklist para implementar la reforma pensional en tu empresa',
      image: '/images/Blog/Articulo 5.webp',
      href: '/blog/checklist-reforma-pensional'
    },
    {
      id: 3,
      title: 'Resolución 1890: protocolo para incidentes industriales',
      image: '/images/Blog/Articulo 1.webp',
      href: '/blog/resolucion-1890-registro-incidentes'
    }
  ]

  // Eventos por defecto si no se proporcionan
  const defaultEvents: EventCard[] = [
    {
      id: 1,
      title: 'Webinar: Nuevas normativas y gestiones laborales 2026',
      date: { month: 'Sept', day: '29' },
      href: '/blog/webinar-normativas-2026'
    },
    {
      id: 2,
      title: 'Charla: Gestión de talento en la era digital',
      date: { month: 'Nov', day: '15' },
      href: '/blog/charla-gestion-talento-digital'
    }
  ]

  const finalRelatedArticles = relatedArticles.length > 0 ? relatedArticles : defaultRelatedArticles
  const finalEvents = events.length > 0 ? events : defaultEvents

  return (
    <section className={styles.detailSection}>
      <div className={styles.layout}>
        {/* Columna principal con contenido personalizado */}
        <article className={styles.article}>
          <div className={styles.meta}>
            <span className={styles.date}>{date}</span>
          </div>
          {children}
        </article>

        {/* Sidebar con artículos relacionados, eventos y compartir */}
        <aside className={styles.sidebar}>
          {/* Artículos relacionados */}
          <div className={styles.card}>
            <h3>Artículos relacionados</h3>
            <ul className={styles.relatedList}>
              {finalRelatedArticles.map((article) => (
                <li key={article.id}>
                  <Link href={article.href}>
                    <div className={styles.relatedItem}>
                      <div className={styles.thumb}>
                        <Image 
                          src={article.image} 
                          alt={article.title} 
                          fill 
                          sizes="(max-width: 768px) 20vw, (max-width: 1024px) 8vw, 5vw"
                          quality={90}
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                      <div>
                        <p>{article.title}</p>
                        <span>Leer más +</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Eventos */}
          <div className={styles.card}>
            <h3>Eventos</h3>
            <ul className={styles.eventsList}>
              {finalEvents.map((event) => (
                <li key={event.id}>
                  <Link href={event.href}>
                    <div className={styles.eventItem}>
                      <div className={styles.dateBadge}>
                        <span>{event.date.month}</span>
                        <strong>{event.date.day}</strong>
                      </div>
                      <div>
                        <p>{event.title}</p>
                        <span>Leer más +</span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compartir */}
          <div className={styles.shareCard}>
            <p>Compartir con:</p>
            <div className={styles.shareActions}>
              <Link href="https://www.twitter.com/share" aria-label="Compartir en Twitter">
                <span>tw</span>
              </Link>
              <Link href="https://www.linkedin.com/shareArticle" aria-label="Compartir en LinkedIn">
                <span>in</span>
              </Link>
              <Link href="https://www.facebook.com/sharer/sharer.php" aria-label="Compartir en Facebook">
                <span>f</span>
              </Link>
              <Link href="mailto:?subject=Te comparto este artículo" aria-label="Compartir por correo">
                <span>@</span>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

