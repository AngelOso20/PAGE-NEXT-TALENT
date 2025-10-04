import React from 'react';
import styles from './PlanesFeatures.module.css';
import AnimatedIcon from '../Servicios/AnimatedIcon';

const PlanesFeatures: React.FC = () => {
  const features = [
    {
      id: 1,
      icon: '/images/Iconos/SVG/Icon-02.svg',
      animation: '/images/Iconos/JSON/Icon 2.json',
      text: 'Acceso a capacitaciones virtuales (en vivo y E-learning)'
    },
    {
      id: 2,
      icon: '/images/Iconos/SVG/Icon-21.svg',
      animation: '/images/Iconos/JSON/Icon 21.json',
      text: 'Acompañamiento profesional en derecho laboral, seguridad social y Seguridad y salud en el trabajo.'
    },
    {
      id: 3,
      icon: '/images/Iconos/SVG/Icon-22.svg',
      animation: '/images/Iconos/JSON/Icon 22.json',
      text: 'Implementación del Sistema de Seguridad y salud en el trabajo.'
    },
    {
      id: 4,
      icon: '/images/Iconos/SVG/Icon-19.svg',
      animation: '/images/Iconos/JSON/Icon 19.json',
      text: 'Portal del cliente con indicadores en tiempo real.'
    },
    {
      id: 5,
      icon: '/images/Iconos/SVG/Icon-23.svg',
      animation: '/images/Iconos/JSON/Icon 23.json',
      text: 'Cursos virtuales para ti y tu equipo certificados.'
    },
    {
      id: 6,
      icon: '/images/Iconos/SVG/Icon-05.svg',
      animation: '/images/Iconos/JSON/Icon 5.json',
      text: 'Acompañamiento en línea desde el primer día.'
    }
  ];

  return (
    <div className={styles.planesFeaturesWrapper}>
      <div className={styles.featuresContainer}>
        {features.map((feature) => (
          <div key={feature.id} className={styles.featureCard}>
            {/* Icono con animación */}
            <div className={styles.iconContainer}>
              <AnimatedIcon
                iconPath={feature.icon}
                animationPath={feature.animation}
                alt={`Icono ${feature.text}`}
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