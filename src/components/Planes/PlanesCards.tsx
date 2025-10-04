import React from 'react';
import styles from './PlanesCards.module.css';
import Image from 'next/image';

const PlanesCards: React.FC = () => {
  const plans = [
    {
      id: 1,
      title: 'Plan Esencial',
      price: '$250.000 / mes',
      target: 'Para empresas hasta 10 empleados',
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
      id: 2,
      title: 'Plan Crecimiento',
      price: '$711.750 / mes',
      target: 'Para empresas hasta 30 empleados',
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
      id: 3,
      title: 'Plan Integral',
      price: '$1.423.500 / mes',
      target: 'Para empresas hasta 50 empleados',
      description: 'Lleva tu gestión de personas al nivel de una gran compañía. Incluye todo lo del Plan Crecimiento',
      features: [
        'Automatización de procesos (nómina, periodo de prueba entre otros).',
        'Asesoría integral de gestión humana telefónica.',
        'Acceso al portal de indicadores de gestión.',
        'Procesos digitales y gestión profesional para tu empresa.'
      ]
    },
    {
      id: 4,
      title: 'Plan Protección Total',
      price: '$1.423.500 / mes',
      target: 'Para empresas de riesgo IV y V',
      description: 'Creado para empresas con riesgo laboral alto que necesitan máxima protección. Incluye todo lo del Plan Integral',
      features: [
        'Cumplimiento de 60 estándares SST.',
        'Acompañamiento virtual SST especializado.',
        'Acceso a portal de gestión de cargos e indicadores.',
        'Seguridad total para proteger a tu gente y tu negocio.'
      ]
    },
    {
      id: 5,
      title: 'Plan Premium Plus',
      price: '$3.558.750 / mes',
      target: 'Para empresas hasta 100 empleados',
      description: 'Nuestra solución más completa: asesoría estratégica, formación y automatización en un solo ecosistema.',
      features: [
        'Cumplimiento de 60 estándares SST.',
        'Acompañamiento SST extendido.',
        'Acceso a todas las plataformas de gestión en línea.',
        'Asesoría estratégica personalizada.',
        'Todo el respaldo de un departamento interno, sin los altos costos.'
      ]
    }
  ];

  return (
    <section className={styles.planesCards}>
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          {/* Primera fila: 3 planes + cuadro naranja */}
          {/* Plan Esencial */}
          <div className={styles.planCard}>
            <h3 className={styles.planTitle}>{plans[0].title}</h3>
            <p className={styles.desde}>Desde</p>
            <p className={styles.price}>{plans[0].price}</p>
            <p className={styles.target}>{plans[0].target}</p>
            <p className={styles.description}>{plans[0].description}</p>
            <p className={styles.includesTitle}>Incluye:</p>
            <ul className={styles.featuresList}>
              {plans[0].features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
            <button className={styles.buyButton}>COMPRAR MI PLAN</button>
          </div>

          {/* Plan Crecimiento */}
          <div className={styles.planCard}>
            <h3 className={styles.planTitle}>{plans[1].title}</h3>
            <p className={styles.desde}>Desde</p>
            <p className={styles.price}>{plans[1].price}</p>
            <p className={styles.target}>{plans[1].target}</p>
            <p className={styles.description}>{plans[1].description}</p>
            <p className={styles.includesTitle}>Incluye:</p>
            <ul className={styles.featuresList}>
              {plans[1].features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
            <button className={styles.buyButton}>COMPRAR MI PLAN</button>
          </div>

          {/* Plan Integral */}
          <div className={styles.planCard}>
            <h3 className={styles.planTitle}>{plans[2].title}</h3>
            <p className={styles.desde}>Desde</p>
            <p className={styles.price}>{plans[2].price}</p>
            <p className={styles.target}>{plans[2].target}</p>
            <p className={styles.description}>{plans[2].description}</p>
            <p className={styles.includesTitle}>Incluye:</p>
            <ul className={styles.featuresList}>
              {plans[2].features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
            <button className={styles.buyButton}>COMPRAR MI PLAN</button>
          </div>

          {/* Cuadro naranja de Cotiza tu plan */}
          <div className={styles.quoteCard}>
            <div className={styles.quoteImage}>
              <Image
                src="/images/Planes/Couple Restaurant.webp"
                alt="Pareja en restaurante"
                width={443}
                height={460}
                className={styles.image}
                priority
              />
            </div>
            <div className={styles.quoteContent}>
              <h3 className={styles.quoteTitle}>Cotiza tu plan</h3>
              <p className={styles.quoteDescription}>
                Descubre cuánto tiempo podría ahorrar su empresa si utilizara nuestro software de gestión de proyectos.
              </p>
              <button className={styles.calculateButton}>CALCULAR</button>
            </div>
          </div>

          {/* Segunda fila: 2 imágenes apiladas + 2 planes */}
          {/* Columna de imágenes apiladas */}
          <div className={styles.imagesColumn}>
            {/* Imagen 1 - Couple laundry */}
            <div className={styles.imageCard}>
              <Image
                src="/images/Planes/Couple laundry.webp"
                alt="Pareja en lavandería"
                width={443}
                height={380}
                className={styles.image}
                priority
              />
            </div>

            {/* Imagen 2 - Couple warehouse */}
            <div className={styles.imageCard}>
              <Image
                src="/images/Planes/Couple warehouse.webp"
                alt="Pareja en almacén"
                width={443}
                height={380}
                className={styles.image}
                priority
              />
            </div>
          </div>

          {/* Plan Protección Total */}
          <div className={styles.planCard}>
            <h3 className={styles.planTitle}>{plans[3].title}</h3>
            <p className={styles.desde}>Desde</p>
            <p className={styles.price}>{plans[3].price}</p>
            <p className={styles.target}>{plans[3].target}</p>
            <p className={styles.description}>{plans[3].description}</p>
            <p className={styles.includesTitle}>Incluye:</p>
            <ul className={styles.featuresList}>
              {plans[3].features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
            <button className={styles.buyButton}>COMPRAR MI PLAN</button>
          </div>

          {/* Plan Premium Plus */}
          <div className={styles.planCard}>
            <h3 className={styles.planTitle}>{plans[4].title}</h3>
            <p className={styles.desde}>Desde</p>
            <p className={styles.price}>{plans[4].price}</p>
            <p className={styles.target}>{plans[4].target}</p>
            <p className={styles.description}>{plans[4].description}</p>
            <p className={styles.includesTitle}>Incluye:</p>
            <ul className={styles.featuresList}>
              {plans[4].features.map((feature, index) => (
                <li key={index} className={styles.featureItem}>{feature}</li>
              ))}
            </ul>
            <button className={styles.buyButton}>COMPRAR MI PLAN</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanesCards;
