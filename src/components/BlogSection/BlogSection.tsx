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
      category: 'Actualización laboral',
      title: 'Resolución 1890 de 2025: registro de incidentes y accidentes mayores',
      description:
        'Nuevas obligaciones para instalaciones con sustancias peligrosas: clasificar incidentes por niveles, reportar accidentes mayores en 24 horas y medir indicadores anuales para prevenir eventos críticos.'
    },
    {
      image: '/images/Blog/Articulo 3.webp',
      category: 'Actualización laboral',
      title: 'Ley 2466: cómo ajustar tus contratos de aprendizaje',
      description:
        'Guía para aplicar la Ley 2466 a contratos vigentes y nuevos: derechos inmediatos para aprendices, valores en PILA, prestaciones en etapa práctica y soporte documental actualizado para evitar sanciones.'
    },
    {
      image: '/images/Blog/Articulo 4.webp',
      category: 'Actualización laboral',
      title: 'Decreto 0514: pilares y obligaciones de la reforma pensional',
      description:
        'Resumen ejecutivo del nuevo Sistema Integral: cuatro pilares, topes de cotización (2.3 SMMLV), control sobre semanas reportadas y responsabilidades empresariales para asegurar afiliación y evitar sanciones.'
    },
    {
      image: '/images/Blog/Articulo 5.webp',
      category: 'Actualización laboral',
      title: 'Checklist para implementar la reforma pensional en tu empresa',
      description:
        'Acciones inmediatas: capacitar talento humano, ajustar nómina y reportes, informar a colaboradores, documentar aportes previos y mantener vigilancia sobre circulares del Ministerio del Trabajo.'
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

