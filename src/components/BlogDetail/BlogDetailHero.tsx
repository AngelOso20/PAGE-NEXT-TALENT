import Image from 'next/image'
import Link from 'next/link'
import styles from './BlogDetailHero.module.css'

/**
 * Hero reutilizable para páginas de detalle de blog.
 * Recibe el contenido por props para permitir diferentes artículos
 * sin duplicar estructura ni estilos.
 */
interface BlogDetailHeroProps {
  category: string
  title: string
  description: string
  image: {
    src: string
    alt: string
  }
  ctaLabel?: string
  ctaHref?: string
  onCtaClick?: () => void
}

export default function BlogDetailHero({
  category,
  title,
  description,
  image,
  ctaLabel,
  ctaHref,
  onCtaClick
}: BlogDetailHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        {/* Separamos en dos columnas para respetar el layout mostrado en el diseño */}
        <div className={styles.textColumn}>
          <span className={styles.category}>{category}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>

          {/* El CTA es opcional para reutilizar el componente en artículos sin botón */}
          {ctaLabel && (
            <>
              {ctaHref ? (
                <Link href={ctaHref} className={styles.ctaButton}>
                  {ctaLabel}
                </Link>
              ) : (
                <button type="button" className={styles.ctaButton} onClick={onCtaClick}>
                  {ctaLabel}
                </button>
              )}
            </>
          )}
        </div>

        {/* Columna de imagen para reforzar el contenido visual */}
        <div className={styles.imageColumn}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 43vw"
            className={styles.heroImage}
            priority
            quality={95}
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  )
}


