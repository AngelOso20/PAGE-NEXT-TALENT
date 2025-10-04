import React from 'react';
import styles from './AliadosSection.module.css';
import Image from 'next/image';

const AliadosSection: React.FC = () => {
  return (
    <section className={styles.aliadosSection}>
      <div className={styles.container}>
        {/* Cuadro azul con texto */}
        <div className={styles.textBox}>
          <h2 className={styles.title}>Nuestros Aliados</h2>
          
          <p className={styles.introText}>
            Gracias a alianzas estratégicas con empresas especializadas, ofrecemos a nuestros clientes un ecosistema integral de servicios con tarifas preferenciales:
          </p>
          
          <div className={styles.servicesList}>
            <ul>
              <li>Fondo de empleados.</li>
              <li>Exámenes médicos ocupacionales.</li>
              <li>Dotaciones empresariales.</li>
              <li>Elementos de protección personal (EPP).</li>
              <li>Gestión contable.</li>
              <li>Seguros.</li>
              <li>Gestión jurídica civil, comercial y administrativa.</li>
            </ul>
          </div>
        </div>
        
        {/* Imágenes del lado derecho */}
        <div className={styles.imagesContainer}>
          {/* Imagen superior */}
          <div className={styles.topImageBox}>
            <Image
              src="/images/Blog/Articulo 4.webp"
              alt="Servicios de almacén y logística"
              width={528}
              height={304}
              className={styles.serviceImage}
              priority
            />
          </div>
          
          {/* Imagen inferior */}
          <div className={styles.bottomImageBox}>
            <Image
              src="/images/Nosotros/medicina.webp"
              alt="Servicios médicos ocupacionales"
              width={528}
              height={304}
              className={styles.serviceImage}
              priority
            />
          </div>
        </div>
        
        {/* Imagen grande del lado derecho */}
        <div className={styles.largeImageBox}>
          <Image
            src="/images/Nosotros/mujer.webp"
            alt="Servicios de gestión empresarial"
            width={510}
            height={630}
            className={styles.largeImage}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default AliadosSection;
