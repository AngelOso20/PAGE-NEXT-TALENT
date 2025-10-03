import Image from 'next/image'
import styles from './PlansSection.module.css'

interface Plan {
  title: string
  price: string
  employees: string
  description: string
  features: string[]
}

export default function PlansSection() {
  const plans: Plan[] = [
    {
      title: 'Plan Esencial',
      price: '$250.000 / mes',
      employees: 'Para empresas hasta 10 empleados',
      description: 'Tu primer paso hacia una gestión laboral segura y confiable',
      features: [
        'Cumplimiento de 7 estándares de SST.',
        'Acompañamiento virtual SST',
        'Asesoría legal laboral telefónica.',
        'Acceso al portal de SST.',
        'Capacitaciones en línea.',
        'Cumple con la ley, sin gastar de más.'
      ]
    },
    {
      title: 'Plan Crecimiento',
      price: '$711.750 / mes',
      employees: 'Para empresas hasta 30 empleados',
      description: 'Diseñado para negocios en expansión que buscan más respaldo legal y técnico. Incluye todo lo del Plan Esencial',
      features: [
        'Cumplimiento de 21 estándares SST.',
        'Asesoría legal virtual y técnica.',
        'Redacción y actualización de documentos laborales.',
        'Portal de gestión documental y disciplinaria.',
        'Capacitaciones virtuales en vivo.',
        'Más respaldo, menos riesgos en tu etapa de crecimiento.'
      ]
    },
    {
      title: 'Plan Integral',
      price: '$1.423.500 / mes',
      employees: 'Para empresas hasta 50 empleados',
      description: 'Lleva tu gestión de personas al nivel de una gran compañía. Incluye todo lo del Plan Crecimiento',
      features: [
        'Automatización de procesos (nómina, periodo de prueba entre otros).',
        'Asesoría integral de gestión humana telefónica.',
        'Acceso al portal de indicadores de gestión.',
        'Procesos digitales y gestión profesional para tu empresa.'
      ]
    }
  ]

  return (
    <section className={styles.plansSection}>
      {/* Título principal */}
      <h2 className={styles.mainTitle}>Nuestros planes</h2>
      
      {/* Subtítulo */}
      <p className={styles.subtitle}>
        Diseñamos soluciones flexibles y escalables que se adaptan al tamaño y etapa de tu negocio.
      </p>

      {/* Contenedor de planes */}
      <div className={styles.plansContainer}>
        {/* Cuadro azul con asesora */}
        <div className={styles.advisorBox}>
          <div className={styles.advisorImage}>
            <Image
              src="/images/Home/Advisor.webp"
              alt="Asesora profesional"
              width={384}
              height={564}
              priority
            />
          </div>
        </div>

        {/* Cards de planes */}
        {plans.map((plan, index) => (
          <div key={index} className={styles.planCard}>
            <h3 className={styles.planTitle}>{plan.title}</h3>
            <p className={styles.planFrom}>Desde</p>
            <p className={styles.planPrice}>{plan.price}</p>
            <p className={styles.planEmployees}>{plan.employees}</p>
            
            <div className={styles.planDescription}>
              <p>{plan.description}</p>
              <p className={styles.includesLabel}>Incluye:</p>
              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>

            <a href="#contacto" className={styles.planButton}>
              COMPRAR MI PLAN
            </a>
          </div>
        ))}
      </div>

      {/* Cuadro naranja inferior */}
      <div className={styles.orangeBanner}>
        <p className={styles.bannerText}>Planes desde $250.000 al mes.</p>
        <a href="#planes" className={styles.bannerButton}>
          VER PLANES
        </a>
      </div>
    </section>
  )
}

