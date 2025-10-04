import React from 'react';
import styles from './ServiciosHero.module.css';
import Image from 'next/image';

const ServiciosHero: React.FC = () => {
  return (
    <section className={styles.serviciosHero}>
      <div className={styles.container}>
        {/* Cuadro blanco con fondo */}
        <div className={styles.heroBox}>
          {/* Fondo abstracto */}
          <div className={styles.backgroundPattern}>
            <Image
              src="/images/Forms/Abstract Isotipo-01.svg"
              alt="Patrón de fondo abstracto"
              width={1820}
              height={933}
              className={styles.backgroundImage}
              priority
              unoptimized
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                objectPosition: 'center',
                opacity: '0.6'
              }}
            />
          </div>
          
          {/* Contenido de texto */}
          <div className={styles.textContent}>
            <h1 className={styles.title}>
              Innovación y estrategia para el futuro de tu negocio
            </h1>
            
            <p className={styles.description}>
              En Next Talent Solutions facilitamos soluciones de talento humano para que las microempresas cumplan la ley, optimicen su equipo y se enfoquen en crecer.
            </p>
          </div>
          
          {/* Imagen de las personas */}
          <div className={styles.imageContainer}>
            <Image
              src="/images/Servicios/Couple waiter.webp"
              alt="Equipo de Next Talent Solutions"
              width={992}
              height={913}
              className={styles.heroImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosHero;
