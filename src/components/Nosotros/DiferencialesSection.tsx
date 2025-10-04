import Image from 'next/image'
import DiferencialCard from './DiferencialCard'
import styles from './DiferencialesSection.module.css'

export default function DiferencialesSection() {
  const diferenciales = [
    {
      type: 'title',
      title: 'Nuestros diferenciales'
    },
    {
      type: 'card',
      iconPath: '/images/Iconos/JSON/Icon 6.json',
      text: '<b>Cumplimiento sin complicaciones:</b> normativa traducida en soluciones prácticas.'
    },
    {
      type: 'card',
      iconPath: '/images/Iconos/JSON/Icon 7.json',
      text: '<b>Innovación al alcance de todos:</b> tecnología, automatización y formación online.'
    },
    {
      type: 'card',
      iconPath: '/images/Iconos/JSON/Icon 8.json',
      text: '<b>Experiencia comprobada:</b> más de 25 años liderando áreas de talento humano.'
    },
    {
      type: 'card',
      iconPath: '/images/Iconos/JSON/Icon 4.json',
      text: '<b>Cercanía real:</b> hablamos tu idioma y caminamos contigo en cada decisión.'
    },
    {
      type: 'card',
      iconPath: '/images/Iconos/JSON/Icon 9.json',
      text: '<b>Integralidad:</b> asesoría, procesos, formación y tecnología en un solo ecosistema.'
    }
  ]

  return (
    <section className={styles.diferencialesSection}>
      <div className={styles.container}>
        {/* Cuadro naranja con imagen Andrea */}
        <div className={styles.orangeBox}>
          <p className={styles.orangeText}>
            Nuestro propósito es poner al alcance la gestión del talento humano para cualquier negocio, sin importar su tamaño, y que pueda crecer con seguridad, confianza y visión de futuro.
          </p>
          
          <div className={styles.andreaImage}>
            <Image
              src="/images/Nosotros/Andrea.webp"
              alt="Andrea - Fundadora"
              width={405}
              height={368}
              priority
            />
          </div>
        </div>

        {/* Grid de diferenciales */}
        <div className={styles.diferencialesGrid}>
          {diferenciales.map((item, index) => (
            item.type === 'title' ? (
              <div key={index} className={styles.titleCard}>
                <h2 className={styles.diferencialesTitle}>{item.title}</h2>
              </div>
            ) : (
              <DiferencialCard
                key={index}
                iconPath={item.iconPath!}
                text={item.text!}
              />
            )
          ))}
        </div>
      </div>
    </section>
  )
}

