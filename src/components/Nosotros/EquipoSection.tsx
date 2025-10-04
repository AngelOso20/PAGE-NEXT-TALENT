import React from 'react';
import styles from './EquipoSection.module.css';
import Image from 'next/image';

const EquipoSection: React.FC = () => {
  return (
    <section className={styles.equipoSection}>
      <div className={styles.container}>
        {/* Cuadro blanco con texto */}
        <div className={styles.textBox}>
          <h2 className={styles.title}>Nuestro Equipo</h2>
          
          <p className={styles.introText}>
            Detrás de Next Talent Solutions hay un equipo de profesionales que combina experiencia, innovación y compromiso:
          </p>
          
          <div className={styles.teamList}>
            <div className={styles.teamMember}>
              <span className={styles.memberName}>Jose Bustamante & Andrea Gómez</span>
              <span className={styles.memberDescription}>Fundadores y consultores senior en talento humano, con más de 25 años de trayectoria.</span>
            </div>
            
            <div className={styles.teamMember}>
              <span className={styles.memberName}>Luz Dary Giraldo</span>
              <span className={styles.memberDescription}>Profesional en Seguridad y Salud en el Trabajo (SST).</span>
            </div>
            
            <div className={styles.teamMember}>
              <span className={styles.memberName}>Cristian Gómez & Ángel Guzmán</span>
              <span className={styles.memberDescription}>Consultores IT, especialistas en automatización y tecnología no-code.</span>
            </div>
            
            <div className={styles.teamMember}>
              <span className={styles.memberName}>María Helena Bermeo</span>
              <span className={styles.memberDescription}>Consultora en talento humano, enfocada en desarrollo y gestión de personas.</span>
            </div>
          </div>
          
          <p className={styles.conclusionText}>
            Un equipo diverso y complementario, unido por un mismo propósito: llevar soluciones de gestión humana al alcance de todas las empresas.
          </p>
        </div>
        
        {/* Imagen del equipo */}
        <div className={styles.imageBox}>
          <Image
            src="/images/Nosotros/Nosotros 3.webp"
            alt="Equipo de Next Talent Solutions"
            width={1055}
            height={728}
            className={styles.teamImage}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default EquipoSection;
