import ValoresCard from './ValoresCard'
import styles from './ValoresSection.module.css'

export default function ValoresSection() {
  const valores = [
    {
      iconPath: '/images/Iconos/JSON/Icon 11.json',
      text: '<b>Confianza:</b> construimos relaciones basadas en la transparencia.'
    },
    {
      iconPath: '/images/Iconos/JSON/Icon 4.json',
      text: '<b>Cercanía:</b> escuchamos y entendemos las necesidades de nuestros clientes y colaboradores.'
    },
    {
      iconPath: '/images/Iconos/JSON/Icon 12.json',
      text: '<b>Coherencia:</b> alineamos nuestras acciones con nuestra promesa de valor.'
    }
  ]

  return (
    <section className={styles.valoresSection}>
      <div className={styles.container}>
        {/* Cuadro azul largo */}
        <div className={styles.blueBox}>
          <h2 className={styles.blueTitle}>
            Hoy seguimos con el mismo propósito:
          </h2>

          <p className={styles.blueSubtitle}>
            hacer posible que cualquier microempresa gestione su talento humano como una gran organización, pero sin los altos costos.
          </p>
        </div>

        {/* Cuadro naranja + 3 cards */}
        <div className={styles.rightSection}>
          {/* Cuadro naranja "Nuestros valores" */}
          <div className={styles.orangeBox}>
            <h2 className={styles.orangeTitle}>Nuestros valores</h2>
          </div>

          {/* Grid de 3 cards */}
          <div className={styles.valoresGrid}>
            {valores.map((valor, index) => (
              <ValoresCard
                key={index}
                iconPath={valor.iconPath}
                text={valor.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
