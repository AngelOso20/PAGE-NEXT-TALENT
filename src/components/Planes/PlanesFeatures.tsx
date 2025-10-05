'use client';

import React from 'react';
import styles from './PlanesFeatures.module.css';
import Image from 'next/image';

const PlanesFeatures: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: '/images/Iconos/SVG/Icon-02.svg',
      text: 'Acceso a capacitaciones virtuales (en vivo y E-learning)'
    },
    {
      id: 2,
      icon: '/images/Iconos/SVG/Icon-21.svg',
      text: 'Acompañamiento profesional en derecho laboral, seguridad social y Seguridad y salud en el trabajo.'
    },
    {
      id: 3,
      icon: '/images/Iconos/SVG/Icon-22.svg',
      text: 'Implementación del Sistema de Seguridad y salud en el trabajo.'
    },
    {
      id: 4,
      icon: '/images/Iconos/SVG/Icon-19.svg',
      text: 'Portal del cliente con indicadores en tiempo real.'
    },
    {
      id: 5,
      icon: '/images/Iconos/SVG/Icon-23.svg',
      text: 'Cursos virtuales para ti y tu equipo certificados.'
    },
    {
      id: 6,
      icon: '/images/Iconos/SVG/Icon-05.svg',
      text: 'Acompañamiento en línea desde el primer día.'
    }
  ];

  return (
    <div className={styles.planesFeaturesWrapper}>
      <div className={styles.featuresContainer}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            {/* Icono */}
            <div className={styles.iconContainer}>
              <Image
                src={feature.icon}
                alt={`Icono ${feature.text}`}
                width={79}
                height={77}
                className={styles.icon}
              />
            </div>
            
            {/* Texto */}
            <p className={styles.featureText}>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanesFeatures;