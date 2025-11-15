'use client';

import React from 'react';
import styles from './ServiciosCards.module.css';
import ServicioCard from './ServicioCard';

const ServiciosCards: React.FC = () => {
  const servicios = [
    {
      id: 1,
      icon: '/images/Iconos/SVG/Icon-13.svg',
      animation: '/images/Iconos/JSON/Icon 13.json',
      title: 'Gestión SST',
      description: 'Implementamos los estándares mínimos, aplicamos la batería de riesgo psicosocial, acompañamos en visitas oficiales y diseñamos protocolos de prevención.',
      benefit: 'Cumples la normativa, proteges a tu equipo y evitas sanciones.'
    },
    {
      id: 2,
      icon: '/images/Iconos/SVG/Icon-14.svg',
      animation: '/images/Iconos/JSON/Icon 14.json',
      title: 'Asesoría legal laboral',
      description: 'Actualización legal, elaboración y revisión de contratos, resolución de conflictos y cumplimiento normativo adaptado a tu empresa y sector.',
      benefit: 'Tomas decisiones seguras y reduces riesgos legales.'
    },
    {
      id: 3,
      icon: '/images/Iconos/SVG/Icon-15.svg',
      animation: '/images/Iconos/JSON/Icon 15.json',
      title: 'Consultoría en talento humano',
      description: 'Diseño de estructuras salariales, planes de carrera y desarrollo de competencias.',
      benefit: 'Motivas a tu gente, reduces la rotación y fortaleces tu cultura.'
    },
    {
      id: 4,
      icon: '/images/Iconos/SVG/Icon-16.svg',
      animation: '/images/Iconos/JSON/Icon 16.json',
      title: 'Automatización de procesos',
      description: 'Digitalización de nómina, contratos, procesos administrativos y mucho más.',
      benefit: 'Ahorras tiempo, eliminas errores y te concentras en crecer.'
    },
    {
      id: 5,
      icon: '/images/Iconos/SVG/Icon-17.svg',
      animation: '/images/Iconos/JSON/Icon 17.json',
      title: 'Selección de talento',
      description: 'Evaluaciones inteligentes y diferentes de candidatos alineados a tu cultura.',
      benefit: 'Contratas mejor desde el inicio y evitas errores costosos.'
    },
    {
      id: 6,
      icon: '/images/Iconos/SVG/Icon-18.svg',
      animation: '/images/Iconos/JSON/Icon 18.json',
      title: 'Tercerización de procesos',
      description: 'Delegar con total confianza tareas administrativas, legales y operativas como nómina, contratación, novedades, gestión documental entre otros.',
      benefit: 'Te liberas de cargas administrativas y ahorras en personal especializado.'
    },
    {
      id: 7,
      icon: '/images/Iconos/SVG/Icon-19.svg',
      animation: '/images/Iconos/JSON/Icon 19.json',
      title: 'Capacitación virtual certificada',
      description: 'Cursos especializados, certificados y disponibles 24/7.',
      benefit: 'Tu equipo aprende sin interrumpir la operación y con resultados aplicables.'
    },
    {
      id: 8,
      icon: '/images/Iconos/SVG/Icon-20.svg',
      animation: '/images/Iconos/JSON/Icon 20.json',
      title: 'Soluciones personalizadas',
      description: 'Diagnóstico de tu situación y plan ajustado a tu realidad.',
      benefit: 'Pagas solo por lo que necesitas y obtienes flexibilidad total.'
    }
  ];

  return (
    <section className={styles.serviciosCards}>
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          {servicios.map((servicio) => (
            <ServicioCard
              key={servicio.id}
              animationPath={servicio.animation}
              title={servicio.title}
              description={servicio.description}
              benefit={servicio.benefit}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiciosCards;
