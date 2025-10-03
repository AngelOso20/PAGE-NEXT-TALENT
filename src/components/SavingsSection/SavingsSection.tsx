import styles from './SavingsSection.module.css'

export default function SavingsSection() {
  return (
    <section className={styles.savingsSection}>
      {/* Título principal */}
      <h2 className={styles.mainTitle}>Ahorra más de lo que imaginas</h2>

      <div className={styles.container}>
        {/* Cuadro izquierdo - Texto naranja */}
        <div className={styles.leftBox}>
          <p className={styles.leftTextOrange}>
            Gestionar talento humano y Seguridad y Salud en el Trabajo (SST) con un equipo interno puede costar millones cada mes.
          </p>
          
          <p className={styles.leftTextGray}>
            Con Next Talent Solutions obtienes todo lo que necesitas —asesoría experta, automatización y acompañamiento en línea— por una fracción de ese valor.
          </p>
          
          <p className={styles.leftResult}>
            <span className={styles.resultLabel}>El resultado:</span> más tranquilidad para ti y más recursos para invertir en el crecimiento de tu negocio.
          </p>
        </div>

        {/* Cuadro central - Tabla de comparación */}
        <div className={styles.centerBox}>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Equipo interno (TH + SST)</th>
                <th>Next Talent Solutions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Salarios y prestaciones</td>
                <td>$5.000.000</td>
                <td>Incluido</td>
              </tr>
              <tr>
                <td>Licencias de software</td>
                <td>$500.000</td>
                <td>Incluido</td>
              </tr>
              <tr>
                <td>Capacitación</td>
                <td>$400.000</td>
                <td>Incluido</td>
              </tr>
              <tr>
                <td>Costos administrativos</td>
                <td>$310.000</td>
                <td>Incluido</td>
              </tr>
              <tr className={styles.totalRow}>
                <td>Total mensual</td>
                <td>$6.210.000</td>
                <td>Desde $250.000*</td>
              </tr>
            </tbody>
          </table>

          <div className={styles.divider}></div>

          <h3 className={styles.centerTitle}>
            Haz que tu dinero trabaje para tu crecimiento
          </h3>
          
          <p className={styles.centerDescription}>
            En lugar de gastar millones en cargas administrativas, invierte en lo que realmente impulsa tu empresa: clientes, productos y expansión.
          </p>
        </div>

        {/* Cuadro naranja derecho - CTA */}
        <div className={styles.rightBox}>
          <h3 className={styles.ctaTitle}>Cotiza tu plan</h3>
          
          <p className={styles.ctaDescription}>
            Descubre cuánto tiempo podría ahorrar su empresa si utilizara nuestro software de gestión de proyectos.
          </p>
          
          <a href="#contacto" className={styles.ctaButton}>
            CALCULAR
          </a>
        </div>
      </div>
    </section>
  )
}

