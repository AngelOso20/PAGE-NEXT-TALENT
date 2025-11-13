'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './HeroCarousel.module.css'

interface CarouselCard {
  id: number
  icon: string
  iconAlt: string
  title: string
  description: string
  buttonText?: string
  buttonLink?: string
  buttonIcon?: string
  openInNewTab?: boolean
  isEvent?: boolean
  eventDate?: string
  eventLocation?: string
  eventTime?: string
}

const carouselData: CarouselCard[] = [
  {
    id: 1,
    icon: '/images/Iconos/SVG/Icon-24.svg',
    iconAlt: 'Icono estadísticas Colombia',
    title: 'En Colombia, más del 90% de las empresas son micro, pero pocas acceden a asesoría profesional en talento humano por los altos costos.',
    description: 'En Next Talent Solutions cambiamos esa historia: hacemos que la gestión de tu gente sea accesible, clara y estratégica.',
  },
  {
    id: 2,
    icon: '/images/Iconos/SVG/Icon-25.svg',
    iconAlt: 'Icono webinar',
    title: 'Webinar: Nuevas normativas y gestiones laborales 2026',
    description: 'Conoce los cambios clave en la legislación laboral y cómo adaptar tu empresa.',
    buttonText: 'INSCRIBIRME',
    buttonLink: 'https://scheduler.zoom.us/next-talent-solutions/asesoriaenlinea',
    openInNewTab: true,
    isEvent: true,
    eventDate: 'Sept 29',
    eventLocation: 'Virtual',
    eventTime: '10:00 am - 11:30 am',
  }
]

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length)
        setIsTransitioning(false)
      }, 300) // Duración de la transición
    }, 5000) // Cambio cada 5 segundos

    return () => clearInterval(interval)
  }, [])

  const currentCard = carouselData[currentIndex]

  return (
    <div className={styles.carouselContainer}>
      <div className={`${currentCard.isEvent ? styles.eventCarouselCard : styles.carouselCard} ${isTransitioning ? styles.transitioning : ''}`}>
        {/* Tarjeta de evento con fecha */}
        {currentCard.isEvent && (
          <div className={styles.eventDate}>
            <span className={styles.eventMonth}>{currentCard.eventDate?.split(' ')[0]}</span>
            <span className={styles.eventDay}>{currentCard.eventDate?.split(' ')[1]}</span>
          </div>
        )}

        {/* Icono */}
        <div className={styles.cardIcon}>
          <Image
            src={currentCard.icon}
            alt={currentCard.iconAlt}
            width={80}
            height={80}
            className={styles.staticIcon}
          />
        </div>

        {/* Contenido principal */}
        <div className={currentCard.isEvent ? styles.eventCardContent : styles.cardContent}>
          <h3 className={currentCard.isEvent ? styles.eventCardTitle : styles.cardTitle}>{currentCard.title}</h3>
          <p className={currentCard.isEvent ? styles.eventCardDescription : styles.cardDescription}>{currentCard.description}</p>

          {/* Detalles del evento */}
          {currentCard.isEvent && (
            <div className={styles.eventDetails}>
              <div className={styles.eventDetail}>
                <Image
                  src="/images/Iconos/SVG/Icon-26.svg"
                  alt="Ubicación"
                  width={16}
                  height={16}
                  className={styles.detailIcon}
                />
                <span>{currentCard.eventLocation}</span>
              </div>
              <div className={styles.eventDetail}>
                <Image
                  src="/images/Iconos/SVG/Icon-26.svg"
                  alt="Hora"
                  width={16}
                  height={16}
                  className={styles.detailIcon}
                />
                <span>{currentCard.eventTime}</span>
              </div>
            </div>
          )}

          {/* Botón de acción */}
          {currentCard.buttonText && (
            <a 
              href={currentCard.buttonLink} 
              target={currentCard.openInNewTab ? '_blank' : '_self'}
              rel={currentCard.openInNewTab ? 'noopener noreferrer' : undefined}
              className={styles.actionButton}
            >
              {currentCard.buttonIcon && (
                <Image
                  src={currentCard.buttonIcon}
                  alt="Icono botón"
                  width={18}
                  height={17}
                  className={styles.buttonIcon}
                />
              )}
              <span>{currentCard.buttonText}</span>
            </a>
          )}
        </div>
      </div>

      {/* Indicadores de paginación */}
      <div className={styles.paginationDots}>
        {carouselData.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
            onClick={() => {
              setIsTransitioning(true)
              setTimeout(() => {
                setCurrentIndex(index)
                setIsTransitioning(false)
              }, 300)
            }}
            aria-label={`Ir a la tarjeta ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
