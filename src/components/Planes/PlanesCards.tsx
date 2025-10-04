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
    }
  ];

  return (
    <section className={styles.planesCards}>
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          {/* Planes principales */}
          {plans.map((plan) => (
            <div key={plan.id} className={styles.planCard}>
              <h3 className={styles.planTitle}>{plan.title}</h3>
              <p className={styles.desde}>Desde</p>
              <p className={styles.price}>{plan.price}</p>
              <p className={styles.target}>{plan.target}</p>
              <p className={styles.description}>{plan.description}</p>
              <p className={styles.includesTitle}>Incluye:</p>
              <ul className={styles.featuresList}>
                {plan.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>{feature}</li>
                ))}
              </ul>
              <button className={styles.buyButton}>COMPRAR MI PLAN</button>
            </div>
          ))}
          
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
        </div>
        
        {/* Imágenes adicionales */}
        <div className={styles.imagesGrid}>
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
      </div>
    </section>
  );
};

export default PlanesCards;
