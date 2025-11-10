import Image from 'next/image'
import styles from './BlogSection.module.css'

interface BlogCard {
  image: string
  category: string
  title: string
  description: string
  date?: { month: string; day: string }
}

export default function BlogSection() {
  const blogPosts: BlogCard[] = [
    {
      image: '/images/Blog/Articulo 1.webp',
      category: 'Gestión de personas',
      title: 'Donec at tellus porttitor, auctor urna at, scelerisque nibh.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.'
    },
    {
      image: '/images/Blog/Articulo 3.webp',
      category: 'Tecnología',
      title: 'Donec at tellus porttitor, auctor urna at, scelerisque nibh.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.'
    },
    {
      image: '/images/Blog/Articulo 4.webp',
      category: 'Información legal',
      title: 'Donec at tellus porttitor, auctor urna at, scelerisque nibh.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.'
    },
    {
      image: '/images/Blog/Articulo 5.webp',
      category: 'Eventos',
      title: 'Webinar: Nuevas normativas y gestiones laborales 2026',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.',
      date: { month: 'Sept', day: '29' }
    }
  ]

  return (
    <section className={styles.blogSection}>
      {/* Título principal */}
      <h2 className={styles.mainTitle}>
        Impulsa tu Potencial, transforma tu futuro
      </h2>
      
      {/* Subtítulo */}
      <p className={styles.subtitle}>
        Consejos prácticos, actualizaciones clave y estrategias para potenciar el crecimiento empresarial
      </p>

      {/* Grid de artículos */}
      <div className={styles.blogGrid}>
        {blogPosts.map((post, index) => (
          <article key={index} className={styles.blogCard}>
            <div className={styles.imageContainer}>
              <Image
                src={post.image}
                alt={post.title}
                width={443}
                height={294}
                className={styles.cardImage}
              />
              
              {/* Badge de categoría */}
              <span className={styles.categoryBadge}>
                {post.category}
              </span>
              
              {/* Badge de fecha (solo en el último) */}
              {post.date && (
                <div className={styles.dateBadge}>
                  <span className={styles.dateMonth}>{post.date.month}</span>
                  <span className={styles.dateDay}>{post.date.day}</span>
                </div>
              )}
            </div>
            
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{post.title}</h3>
              <p className={styles.cardDescription}>{post.description}</p>
              <a href="#blog" className={styles.readMore}>Saber más +</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

