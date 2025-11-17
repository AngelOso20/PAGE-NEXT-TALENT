'use client';

import React, { useState, useEffect } from 'react';
import styles from './BlogCards.module.css';
import Image from 'next/image';

interface BlogCard {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  date?: string;
  filterCategory: string;
  href: string;
}

interface BlogCardsProps {
  currentFilter: string;
}

const BlogCards: React.FC<BlogCardsProps> = ({ currentFilter }) => {
  const [filteredCards, setFilteredCards] = useState<BlogCard[]>([]);

  const blogCards: BlogCard[] = [
    {
      id: 1,
      image: '/images/Blog/Articulo 1.webp',
      category: 'Información legal',
      title: 'Resolución 1890 de 2025: registro de incidentes y accidentes mayores',
      description:
        'Instalaciones con sustancias peligrosas deben clasificar incidentes por niveles, registrar los de nivel 1 y 2 y reportar accidentes mayores al Ministerio del Trabajo en 24 horas usando la nueva plataforma oficial.',
      filterCategory: 'Información legal',
      href: '/blog/resolucion-1890-registro-incidentes'
    },
    {
      id: 2,
      image: '/images/Blog/Articulo 3.webp',
      category: 'Información legal',
      title: 'Ley 2466: cómo ajustar tus contratos de aprendizaje',
      description:
        'Aprendices vigentes y nuevos acceden a derechos laborales desde el 25 de junio de 2025; actualiza otrosí, parámetros de PILA, prestaciones en etapa práctica y soporte documental para evitar sanciones.',
      filterCategory: 'Información legal',
      href: '/blog/ley-2466-contratos-aprendizaje'
    },
    {
      id: 3,
      image: '/images/Blog/Articulo 4.webp',
      category: 'Información legal',
      title: 'Decreto 0514: pilares y obligaciones de la reforma pensional',
      description:
        'Explica el sistema de cuatro pilares, topes de cotización hasta 2.3 SMMLV para prima media y responsabilidades empresariales de afiliación, reporte de semanas y control de información para evitar sanciones.',
      filterCategory: 'Información legal',
      href: '/blog/decreto-0514-reforma-pensional'
    },
    {
      id: 4,
      image: '/images/Blog/Articulo 5.webp',
      category: 'Información legal',
      title: 'Checklist para implementar la reforma pensional en tu empresa',
      description:
        'Acciones inmediatas: capacitar a RR. HH., ajustar nómina y reportes, comunicar cambios a los colaboradores, registrar aportes previos y monitorear circulares del Ministerio del Trabajo.',
      filterCategory: 'Información legal',
      href: '/blog/checklist-reforma-pensional'
    },
    {
      id: 5,
      image: '/images/Blog/Articulo 2.webp',
      category: 'Gestión de personas',
      title: 'Por dónde Debes Empezar la Gestión del RRHH en tu Microempresa',
      description:
        'Evalúa tus necesidades de personal, redacta perfiles claros, define procesos de selección ágiles e implementa herramientas básicas de gestión para cimentar cultura, capacitación y cumplimiento normativo desde el día uno.',
      filterCategory: 'Gestión de personas',
      href: '/blog/por-donde-empezar-rrhh-microempresa'
    },
    {
      id: 6,
      image: '/images/Blog/Articulo 6.webp',
      category: 'Información legal',
      title: 'Requisitos Legales para Gestionar el RRHH en Colombia',
      description:
        'Repasa las normas laborales vigentes, modalidades de contrato, pago de prestaciones, seguridad y salud, obligaciones fiscales y protección de datos que toda microempresa debe dominar para evitar sanciones.',
      filterCategory: 'Información legal',
      href: '/blog/requisitos-legales-rrhh-colombia'
    },
    {
      id: 7,
      image: '/images/Blog/Articulo 7.webp',
      category: 'Gestión de personas',
      title: 'Beneficios de Generar Empleo en Colombia como Microempresa',
      description:
        'Descubre incentivos tributarios, apoyos financieros y el impacto reputacional de crear empleo formal, así como el valor de fortalecer tu capital humano y aportar al desarrollo económico local.',
      filterCategory: 'Gestión de personas',
      href: '/blog/beneficios-generar-empleo-colombia'
    },
    {
      id: 8,
      image: '/images/Blog/Articulo 8.webp',
      category: 'Gestión de personas',
      title: 'Cómo Encontrar Talento Humano Cualificado para tu Microempresa',
      description:
        'Define perfiles precisos, diversifica canales de reclutamiento, construye una marca empleadora atractiva y selecciona con rigurosidad para sumar personas alineadas con tu cultura y desafíos.',
      filterCategory: 'Gestión de personas',
      href: '/blog/encontrar-talento-cualificado-microempresa'
    },
    {
      id: 9,
      image: '/images/Blog/Articulo 9.webp',
      category: 'Tecnología',
      title: 'Cómo Optimizar los Recursos con Sistemas No Code',
      description:
        'Aprovecha plataformas como SmartSheet, Power Automate o Zapier para automatizar tareas, centralizar proyectos, gestionar clientes y visualizar datos sin programar, elevando la eficiencia operativa.',
      filterCategory: 'Tecnología',
      href: '/blog/optimizar-recursos-sistemas-no-code'
    },
    {
      id: 10,
      image: '/images/Blog/Articulo 6.webp',
      category: 'Salud y seguridad',
      title: 'Aspectos Clave de la Gestión del Talento en una Microempresa',
      description:
        'Prioriza comunicación abierta, flexibilidad, equilibrio vida-trabajo, reconocimiento y planes de desarrollo para sostener equipos motivados y resilientes que cuiden el bienestar integral.',
      filterCategory: 'Salud y seguridad',
      href: '/blog/aspectos-clave-gestion-talento-microempresa'
    }
  ];

  useEffect(() => {
    if (currentFilter === 'Todos') {
      setFilteredCards(blogCards);
    } else {
      setFilteredCards(blogCards.filter(card => card.filterCategory === currentFilter));
    }
  }, [currentFilter, blogCards]);


  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Gestión de personas':
        return '#FB8C05'; // Naranja
      case 'Salud y seguridad':
        return '#27A49F'; // Verde
      case 'Eventos':
        return '#27A49F'; // Verde
      case 'Tecnología':
        return '#27A49F'; // Verde
      case 'Información legal':
        return '#27A49F'; // Verde
      default:
        return '#27A49F';
    }
  };

  return (
    <div className={styles.blogCardsContainer}>
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          {filteredCards.map((card) => (
            <div key={card.id} className={styles.blogCard}>
              {/* Imagen con etiquetas */}
              <div className={styles.imageContainer}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={443}
                  height={280}
                  className={styles.cardImage}
                  priority
                />
                
                {/* Etiqueta de categoría */}
                <div 
                  className={styles.categoryTag}
                  style={{ backgroundColor: getCategoryColor(card.category) }}
                >
                  {card.category}
                </div>
                
                {/* Etiqueta de fecha (si existe) */}
                {card.date && (
                  <div className={styles.dateTag}>
                    {card.date}
                  </div>
                )}
              </div>
              
              {/* Contenido de la tarjeta */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
                <a href={card.href} className={styles.readMoreBtn}>
                  Saber más +
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
