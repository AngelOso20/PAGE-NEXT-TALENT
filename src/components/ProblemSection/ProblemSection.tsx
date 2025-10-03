import Image from 'next/image'
import styles from './ProblemSection.module.css'

export default function ProblemSection() {
  const problems = [
    'Falta de claridad sobre las obligaciones laborales.',
    'Tecnología fuera de alcance para optimizar procesos administrativos.',
    'Consultorías costosas que hacen imposible acceder a soluciones profesionales.',
    'El resultado: Altas cargas administrativas, riesgos legales sin gestionar y equipos desmotivados.'
  ]

  return (
    <section className={styles.problemSection}>
      <div className={styles.container}>
        {/* Cuadro blanco con contenido */}
        <div className={styles.contentBox}>
          <h2 className={styles.title}>
            El problema que enfrentan las microempresas
          </h2>
          
          <p className={styles.description}>
            Ser microempresario en Colombia es levantarse todos los días a vender, producir y sacar adelante el negocio. Pero cuando llega la hora de gestionar personas, aparecen obstáculos que frenan el crecimiento:
          </p>
          
          <ul className={styles.problemList}>
            {problems.map((problem, index) => (
              <li key={index}>• {problem}</li>
            ))}
          </ul>
        </div>

        {/* Imagen del chef */}
        <div className={styles.imageBox}>
          <Image
            src="/images/Home/Chef.webp"
            alt="Chef profesional"
            width={749}
            height={545}
            priority
          />
        </div>
      </div>
    </section>
  )
}

