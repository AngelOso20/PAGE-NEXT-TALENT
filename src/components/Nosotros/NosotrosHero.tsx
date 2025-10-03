import Image from 'next/image'
import styles from './NosotrosHero.module.css'

export default function NosotrosHero() {
  return (
    <section className={styles.nosotrosHero}>
      <div className={styles.container}>
        {/* Cuadro azul con texto */}
        <div className={styles.blueBox}>
          <h1 className={styles.title}>
            Somos aliados estratégicos para el talento humano de tu empresa
          </h1>
          
          <p className={styles.description}>
            En Next Talent Solutions creemos que ninguna microempresa debería quedarse sin acceso a asesoría profesional, tecnología y acompañamiento.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className={styles.imageBox}>
          <Image
            src="/images/Nosotros/Nosotros 1.webp"
            alt="Equipo de trabajo"
            width={902}
            height={933}
            priority
          />
        </div>
      </div>
    </section>
  )
}

