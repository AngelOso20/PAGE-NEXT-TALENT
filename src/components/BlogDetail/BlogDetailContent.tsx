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

/**
 * Sección principal del detalle de blog.
 * Divide el contenido en dos columnas:
 *  - Artículo (izquierda)
 *  - Sidebar con relaciones, eventos y botones de compartir (derecha)
 * Los datos se definen aquí para el prototipo, pero el componente
 * acepta children para la columna principal si se desea extender.
 */
export default function BlogDetailContent() {
  const relatedArticles: RelatedArticle[] = [
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

  const events: EventCard[] = [
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

  return (
    <section className={styles.detailSection}>
      <div className={styles.layout}>
        {/* Columna principal */}
        <article className={styles.article}>
          <div className={styles.meta}>
            <span className={styles.date}>Septiembre 29 · 2025</span>
          </div>

          <p>
            Gestionar una microempresa es un desafío constante. El tiempo, los recursos y la
            energía suelen ser limitados, y pequeños descuidos pueden convertirse en grandes
            obstáculos para crecer.
          </p>
          <p>
            Estos son algunos de los errores más comunes que debes evitar si quieres llevar tu
            negocio al siguiente nivel:
          </p>

          <ol className={styles.steps}>
            <li>
              <strong>No cumplir con la ley laboral</strong>
              <p>
                Muchos emprendedores desconocen las obligaciones legales relacionadas con la
                contratación y gestión de personal. Esto puede derivar en multas, sanciones y
                problemas que afectan tu flujo de caja.
              </p>
              <p className={styles.solution}>
                <span>Solución:</span> asesórate y mantén tus procesos actualizados para estar siempre
                en regla.
              </p>
            </li>
            <li>
              <strong>Falta de procesos claros</strong>
              <p>
                Cuando no existen procedimientos bien definidos, tu equipo pierde tiempo, se cometen
                errores y aumenta la frustración.
              </p>
              <p className={styles.solution}>
                <span>Solución:</span> documenta tus procesos y utiliza herramientas simples que
                faciliten la comunicación y organización.
              </p>
            </li>
            <li>
              <strong>Contrataciones improvisadas</strong>
              <p>
                Elegir a la persona equivocada para tu equipo puede salir costoso: baja
                productividad, conflictos internos y hasta pérdida de clientes.
              </p>
              <p className={styles.solution}>
                <span>Solución:</span> implementa un proceso de selección estructurado que te ayude a
                identificar el talento adecuado desde el inicio.
              </p>
            </li>
            <li>
              <strong>No capacitar al personal</strong>
              <p>
                Un equipo desactualizado limita la innovación y la capacidad de competir en el
                mercado.
              </p>
              <p className={styles.solution}>
                <span>Solución:</span> invierte en capacitaciones prácticas y enfocadas en el
                desarrollo de habilidades clave para tu negocio.
              </p>
            </li>
            <li>
              <strong>Hacerlo todo tú mismo</strong>
              <p>
                Tratar de abarcar todas las tareas solo te desgasta y frena el crecimiento. Delegar es
                clave para liberar tiempo y enfocarte en lo estratégico.
              </p>
              <p className={styles.solution}>
                <span>Solución:</span> apóyate en expertos y herramientas que simplifiquen la gestión
                de tu talento humano.
              </p>
            </li>
          </ol>

          <p className={styles.conclusion}>
            Pon en marcha estas soluciones y construye procesos de RR. HH. sólidos: así reducirás
            riesgos legales, mejorarás la productividad de tu equipo y tendrás claridad para escalar tu
            microempresa.
          </p>
        </article>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.card}>
            <h3>Artículos relacionados</h3>
            <ul className={styles.relatedList}>
              {relatedArticles.map((article) => (
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

          <div className={styles.card}>
            <h3>Eventos</h3>
            <ul className={styles.eventsList}>
              {events.map((event) => (
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


