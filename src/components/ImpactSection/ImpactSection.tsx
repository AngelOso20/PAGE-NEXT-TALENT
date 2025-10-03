import Image from 'next/image'
import styles from './ImpactSection.module.css'

export default function ImpactSection() {
  return (
    <section className={styles.impactSection}>
      <div className={styles.container}>
        {/* Imagen de Couple Workers */}
        <div className={styles.imageBox}>
          <Image
            src="/images/Home/Couple Workers.webp"
            alt="Pareja de trabajadores"
            width={902}
            height={571}
            priority
          />
        </div>

        {/* Cuadro blanco con información */}
        <div className={styles.contentBox}>
          <h2 className={styles.title}>Impacto en números</h2>
          
          <p className={styles.description}>
            Invertir en un equipo interno de talento humano y SST puede costar más de $6.200.000 al mes. Con Next Talent Solutions lo obtienes desde $950.000 al mes.
          </p>

          {/* Columnas de ahorro */}
          <div className={styles.savingsContainer}>
            <div className={styles.savingColumn}>
              <p className={styles.savingLabel}>Ahorro mensual estimado:</p>
              <p className={styles.savingAmount}>$5.260.000</p>
            </div>
            
            <div className={styles.savingColumn}>
              <p className={styles.savingLabel}>Ahorro anual estimado:</p>
              <p className={styles.savingAmount}>$63.120.000</p>
            </div>
          </div>

          {/* Texto final */}
          <p className={styles.finalText}>
            El resultado es simple: <span className={styles.boldText}>más valor, menos carga y más tranquilidad.</span>
          </p>
        </div>
      </div>
    </section>
  )
}

