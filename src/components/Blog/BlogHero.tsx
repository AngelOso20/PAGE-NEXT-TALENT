'use client';

import React from 'react'
import Image from 'next/image'
import styles from './BlogHero.module.css'

const BlogHero: React.FC = () => {
  return (
    <section className={styles.blogHero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Imagen de la izquierda */}
          <div className={styles.imageContainer}>
            <Image
              src="/images/Blog/Articulo 1.webp"
              alt="Mujer con tablet en microempresa"
              width={910}
              height={528}
              className={styles.heroImage}
              priority
            />
          </div>
          
          {/* Cuadro blanco de la derecha */}
          <div className={styles.contentCard}>
            <div className={styles.contentWrapper}>
              {/* Categoría */}
              <span className={styles.category}>Gestión de personas</span>
              
              {/* Título */}
              <h1 className={styles.title}>
                5 errores que frenan el crecimiento de tu microempresa (y cómo evitarlos)
              </h1>
              
              {/* Descripción */}
              <p className={styles.description}>
                Gestionar una microempresa es un desafío constante. El tiempo, los recursos y la energía suelen ser limitados, y pequeños descuidos pueden convertirse en grandes obstáculos para crecer.
              </p>
              
              {/* Botón */}
              <a href="/blog/errores-microempresa" className={styles.readMoreBtn}>
                Saber más +
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
