import Image from 'next/image'
import styles from './HeroSection.module.css'
import HeroCarousel from './HeroCarousel'

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Cuadro izquierdo con trabajador y textos */}
      <div className={styles.leftBox}>
        {/* Imagen de fondo abstracta */}
        <div className={styles.backgroundPattern}>
          <Image
            src="/images/Forms/Abstract Isotipo-01.svg"
            alt="Patrón de fondo abstracto"
            width={1820}
            height={933}
            className={styles.backgroundImage}
            priority
            unoptimized
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'bottom center',
              opacity: '1'
            }}
          />
        </div>
        
        {/* Título principal */}
        <h1 className={styles.mainTitle}>
          Ninguna empresa<br />debe quedarse atrás
        </h1>
        
        {/* Subtítulo */}
        <p className={styles.subtitle}>
          Soluciones en talento humano y tecnología al alcance de cualquier negocio.
        </p>
        
        {/* Imagen del trabajador */}
        <div className={styles.workerImage}>
          <Image
            src="/images/Home/Worker.webp"
            alt="Trabajador profesional"
            width={538}
            height={909}
            priority
            sizes="(max-width: 768px) 70vw, 28vw"
          />
        </div>
      </div>

      {/* Carrusel de tarjetas */}
      <HeroCarousel />

      {/* Cuadro azul - Agenda tu asesoría */}
      <div className={styles.blueBox}>
        <div className={styles.blueIcon}>
          <Image
            src="/images/Iconos/SVG/Icon-26.svg"
            alt="Icono Agenda asesoría"
            width={80}
            height={80}
            className={styles.staticIcon}
          />
        </div>
        
        <p className={styles.blueText}>
          Agenda tu asesoría sin costo y descubre en 30 minutos cómo cumplir tus obligaciones laborales y la gestión de tu gente.
        </p>
        
        <a href="#contacto" className={styles.orangeButton}>
          <Image
            src="/images/Buttons/Button Phone.svg"
            alt="Teléfono"
            width={18}
            height={17}
            className={styles.phoneIcon}
            sizes="(max-width: 768px) 4vw, 0.94vw"
          />
          <span>AGENDA TU ASESORÍA</span>
        </a>
      </div>
    </section>
  )
}

