import Image from 'next/image'
import styles from './ComingSoonHero.module.css'

export default function ComingSoonHero() {
  return (
    <section className={styles.comingSoonSection}>
      {/* Contenido principal centrado */}
      <div className={styles.mainContainer}>
        {/* Imagen de fondo abstracta */}
        <div className={styles.backgroundPattern}></div>
        
        {/* Icono de construcción */}
        <div className={styles.iconContainer}>
          <Image
            src="/images/Buttons/Button User.svg"
            alt="Módulo de Cliente"
            width={80}
            height={80}
            className={styles.iconImage}
          />
        </div>
        
        {/* Título principal */}
        <h1 className={styles.mainTitle}>
          Muy Pronto
        </h1>
        
        {/* Subtítulo */}
        <p className={styles.subtitle}>
          Estamos trabajando en nuestro módulo de cliente para brindarte una experiencia única.
        </p>
        
        {/* Botón para regresar al inicio */}
        <a href="/" className={styles.homeButton}>
          <span>Volver al inicio</span>
        </a>

        {/* Enlaces rápidos */}
        <div className={styles.quickLinks}>
          <a href="/nosotros" className={styles.quickLink}>Nosotros</a>
          <a href="/servicios" className={styles.quickLink}>Servicios</a>
          <a href="/planes" className={styles.quickLink}>Planes</a>
          <a href="/contacto" className={styles.quickLink}>Contacto</a>
        </div>
      </div>
    </section>
  )
}
