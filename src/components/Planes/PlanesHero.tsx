import React from 'react';
import styles from './PlanesHero.module.css';
import Image from 'next/image';
import PlanesFeatures from './PlanesFeatures';

const PlanesHero: React.FC = () => {
  return (
    <section className={styles.planesHero}>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          {/* Cuadro azul con fondo */}
          <div className={styles.heroBox}>
            {/* Fondo abstracto */}
            <div className={styles.backgroundPattern}>
              <Image
                src="/images/Forms/Abstract Isotipo-02.svg"
                alt="Patrón de fondo abstracto"
                width={1361}
                height={933}
                className={styles.backgroundImage}
                priority
                unoptimized
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                opacity: '1',
                filter: 'grayscale(0%) brightness(1.2) saturate(1.5)'
              }}
              />
            </div>
            
            {/* Contenido de texto */}
            <div className={styles.textContent}>
              <h1 className={styles.title}>
                Nuestros planes
              </h1>
              
              <p className={styles.description}>
                Diseñamos soluciones flexibles y escalables que se adaptan al tamaño y etapa de tu negocio.
              </p>
            </div>
            
            {/* Imagen de la mujer */}
            <div className={styles.imageContainer}>
              <Image
                src="/images/Planes/Woman shopkeeper.webp"
                alt="Mujer comerciante"
                width={612}
                height={886}
                className={styles.heroImage}
                priority
              />
            </div>
          </div>
          
          {/* Características de planes */}
          <PlanesFeatures />
        </div>
      </div>
    </section>
  );
};

export default PlanesHero;