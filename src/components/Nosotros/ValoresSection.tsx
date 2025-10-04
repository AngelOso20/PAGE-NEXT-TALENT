import ValoresCard from './ValoresCard'
import styles from './ValoresSection.module.css'

export default function ValoresSection() {
  const valores = [
    {
      iconPath: '/images/Iconos/JSON/Icon 11.json',
      title: 'Confianza:',
      description: 'construimos relaciones basadas en la transparencia.'
    },
    {
      iconPath: '/images/Iconos/JSON/Icon 4.json',
      title: 'Cercanía:',
      description: 'escuchamos y entendemos las necesidades de nuestros clientes y colaboradores.'
    },
    {
      iconPath: '/images/Iconos/JSON/Icon 12.json',
      title: 'Coherencia:',
      description: 'alineamos nuestras acciones con nuestra promesa de valor.'
    }
  ]

  return (
    <section className={styles.valoresSection}>
      {/* Cuadro azul largo centrado */}
      <div className={styles.blueBox}>
        <h2 className={styles.blueTitle}>
          Hoy seguimos con el mismo propósito:
        </h2>

        <p className={styles.blueText}>
          hacer posible que cualquier microempresa gestione su talento humano como una gran organización, pero sin los altos costos.
        </p>
      </div>

      {/* Contenedor con cuadro naranja y grid alineados */}
      <div className={styles.bottomContainer}>
        {/* Cuadro naranja */}
        <div className={styles.orangeBox}>
          <h2 className={styles.orangeTitle}>Nuestros valores</h2>
        </div>

        {/* Grid de 3 cards */}
        <div className={styles.valoresGrid}>
          {valores.map((valor, index) => (
            <ValoresCard
              key={index}
              iconPath={valor.iconPath}
              title={valor.title}
              description={valor.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

