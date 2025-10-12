import Image from 'next/image'
import styles from './NotFoundHero.module.css'

export default function NotFoundHero() {
  return (
    <section className={styles.notFoundSection}>
      {/* Contenido principal centrado */}
      <div className={styles.mainContainer}>
        {/* Imagen de fondo abstracta */}
        <div className={styles.backgroundPattern}></div>
        
        {/* Número 404 grande y elegante */}
        <div className={styles.errorNumber}>
          <span className={styles.number404}>404</span>
        </div>
        
        {/* Título principal */}
        <h1 className={styles.mainTitle}>
          Página no encontrada
        </h1>
        
        {/* Subtítulo */}
        <p className={styles.subtitle}>
          La página que buscas no existe o ha sido movida.
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
