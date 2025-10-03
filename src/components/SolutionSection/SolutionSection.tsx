import SolutionCard from './SolutionCard'
import styles from './SolutionSection.module.css'

export default function SolutionSection() {
  const solutions = [
    {
      iconPath: '/images/Iconos/JSON/Icon 1.json',
      title: 'Automatización inteligente (no-code):',
      description: 'procesos más simples y menos carga operativa.'
    },
    {
      iconPath: '/images/Iconos/JSON/Icon 2.json',
      title: 'Formación en línea y masiva:',
      description: 'conocimiento práctico y accesible para empresarios y sus equipos.'
    },
    {
      iconPath: '/images/Iconos/JSON/Icon 3.json',
      title: 'Gestión de SST a bajo costo:',
      description: 'cumplimiento legal y acompañamiento virtual en tiempo real.'
    },
    {
      iconPath: '/images/Iconos/JSON/Icon 4.json',
      title: 'Acompañamiento especializado:',
      description: 'consultores con más de dos décadas liderando áreas de talento humano.'
    }
  ]

  return (
    <section className={styles.solutionSection}>
      {/* Título principal */}
      <h2 className={styles.mainTitle}>Nuestra solución</h2>
      
      {/* Subtítulo */}
      <p className={styles.subtitle}>
        En Next Talent Solutions vimos esta realidad y decidimos pensar diferente. Creamos un modelo que pone a tu alcance la gestión del talento humano con:
      </p>

      {/* Grid de soluciones */}
      <div className={styles.solutionsGrid}>
        {solutions.map((solution, index) => (
          <SolutionCard
            key={index}
            iconPath={solution.iconPath}
            title={solution.title}
            description={solution.description}
          />
        ))}
      </div>

      {/* Texto final */}
      <p className={styles.finalText}>
        Todo en un solo lugar, con precios ajustados a la realidad de tu negocio
      </p>
    </section>
  )
}

