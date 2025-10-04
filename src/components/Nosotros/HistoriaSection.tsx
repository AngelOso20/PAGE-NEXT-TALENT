import Image from 'next/image'
import HistoriaCard from './HistoriaCard'
import styles from './HistoriaSection.module.css'

export default function HistoriaSection() {
  const cards = [
    {
      iconPath: '/images/Iconos/JSON/Icon 1.json',
      text: 'Automatización de procesos con herramientas no-code.'
    },
    {
      iconPath: '/images/Iconos/JSON/Icon 2.json',
      text: 'Formación masiva y accesible para empresarios y equipos.'
    },
    {
      iconPath: '/images/Iconos/JSON/Icon 10.json',
      text: 'Asesoría en línea de bajo costo, sin sacrificar calidad.'
    }
  ]

  return (
    <section className={styles.historiaSection}>
      <div className={styles.container}>
        {/* Imagen izquierda */}
        <div className={styles.imageBox}>
          <Image
            src="/images/Nosotros/Nosotros 2.webp"
            alt="Equipo fundador"
            width={902}
            height={728}
            priority
          />
        </div>

        {/* Columna derecha */}
        <div className={styles.rightColumn}>
          {/* Cuadro blanco con historia */}
          <div className={styles.historiaBox}>
            <h2 className={styles.title}>Nuestra historia</h2>
            
            <p className={styles.orangeText}>
              Next Talent Solutions nació cuando Andrea y Jose dos psicólogos, después de más de 25 años liderando áreas de talento humano, identificaron un problema común en Colombia:
            </p>
            
            <p className={styles.grayText}>
              Los microempresarios no acceden a servicios profesionales de gestión humana por sus altos costos, falta de conocimiento y ausencia de tecnología accesible.
            </p>
            
            <p className={styles.grayText}>
              Decidimos pensar diferente y crear un modelo innovador, basado en:
            </p>
          </div>

          {/* Grid de 3 cards */}
          <div className={styles.cardsGrid}>
            {cards.map((card, index) => (
              <HistoriaCard
                key={index}
                iconPath={card.iconPath}
                text={card.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

