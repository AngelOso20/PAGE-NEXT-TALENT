import Image from 'next/image'
import styles from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Cuadro izquierdo con trabajador y textos */}
      <div className={styles.leftBox}>
        {/* Imagen de fondo abstracta */}
        <div className={styles.backgroundPattern}></div>
        
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
          />
        </div>
      </div>

      {/* Cuadro naranja - Colombia 90% */}
      <div className={styles.orangeBox}>
        <div className={styles.orangeIcon}>
          <Image
            src="/images/Iconos/SVG/Icon-24.svg"
            alt="Estadísticas"
            width={98}
            height={94}
          />
        </div>
        <p className={styles.orangeText}>
          <span className={styles.highlightText}>
            En Colombia, más del 90% de las empresas son micro, pero pocas acceden a asesoría profesional en talento humano por los altos costos.
          </span>
        </p>
        <p className={styles.orangeSubtext}>
          En Next Talent Solutions cambiamos esa historia: hacemos que la gestión de tu gente sea accesible, clara y estratégica.
        </p>
      </div>

      {/* Cuadro azul - Agenda tu asesoría */}
      <div className={styles.blueBox}>
        <div className={styles.blueIcon}>
          <Image
            src="/images/Iconos/SVG/Icon-26.svg"
            alt="Asesoría"
            width={98}
            height={94}
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
          />
          <span>AGENDA TU ASESORÍA</span>
        </a>
      </div>
    </section>
  )
}

