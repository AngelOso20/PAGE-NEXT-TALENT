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
      category: 'Gestión de personas',
      title: 'Donec at tellus porttitor, auctor urna at, scelerisque nibh.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.',
      filterCategory: 'Gestión de personas'
    },
    {
      id: 2,
      image: '/images/Blog/Articulo 2.webp',
      category: 'Gestión de personas',
      title: 'Donec at tellus porttitor, auctor urna at, scelerisque nibh.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.',
      filterCategory: 'Gestión de personas'
    },
    {
      id: 3,
      image: '/images/Blog/Articulo 3.webp',
      category: 'Salud y seguridad',
      title: 'Donec at tellus porttitor, auctor urna at, scelerisque nibh.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.',
      filterCategory: 'Salud y seguridad'
    },
    {
      id: 4,
      image: '/images/Blog/Articulo 4.webp',
      category: 'Eventos',
      title: 'Webinar: Nuevas normativas y gestiones laborales 2026',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.',
      date: 'Sept 29',
      filterCategory: 'Eventos'
    },
    {
      id: 5,
      image: '/images/Blog/Articulo 6.webp',
      category: 'Eventos',
      title: 'Donec at tellus porttitor, auctor urna at, scelerisque nibh.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.',
      filterCategory: 'Eventos'
    },
    {
      id: 6,
      image: '/images/Blog/Articulo 7.webp',
      category: 'Tecnología',
      title: 'Donec at tellus porttitor, auctor urna at, scelerisque nibh.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.',
      filterCategory: 'Tecnología'
    },
    {
      id: 7,
      image: '/images/Blog/Articulo 8.webp',
      category: 'Eventos',
      title: 'Charla: Gestión de talento en la era digital y las Inteligencias artificiales',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.',
      date: 'Nov 15',
      filterCategory: 'Eventos'
    },
    {
      id: 8,
      image: '/images/Blog/Articulo 9.webp',
      category: 'Salud y seguridad',
      title: 'Donec at tellus porttitor, auctor urna at, scelerisque nibh.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam quam, sodales eu urna ut, aliquet porttitor quam.',
      filterCategory: 'Salud y seguridad'
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
                <button className={styles.readMoreBtn}>
                  Saber más +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCards;
