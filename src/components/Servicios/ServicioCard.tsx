'use client'

import { useEffect } from 'react'
import styles from './ServiciosCards.module.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

interface ServicioCardProps {
  animationPath: string
  title: string
  description: string
  benefit: string
}

export default function ServicioCard({ 
  animationPath, 
  title, 
  description, 
  benefit 
}: ServicioCardProps) {
  const { elementRef, animationRef } = useScrollAnimation({
    triggerPoint: 0.8, // Inicia cuando el elemento está al 80% del viewport
    animationDistance: 1.2, // Completa la animación en 120% del viewport
    delayStart: 0.15, // Delay adicional del 15% del viewport antes de iniciar
    throttleMs: 16 // 60fps
  })

  useEffect(() => {
    let animationInstance: any = null

    const loadAnimation = async () => {
      const lottie = (await import('lottie-web')).default
      const animationData = await fetch(animationPath).then(res => res.json())

      if (elementRef.current) {
        // Buscar el contenedor del icono dentro del card
        const iconContainer = elementRef.current.querySelector(`.${styles.iconContainer}`) as HTMLDivElement
        
        if (iconContainer) {
          iconContainer.innerHTML = ''
          
          animationInstance = lottie.loadAnimation({
            container: iconContainer,
            renderer: 'svg',
            loop: false, // NO repetir automáticamente
            autoplay: false, // NO reproducir automáticamente
            animationData: animationData,
          })

          // Guardar la referencia de la animación
          animationRef.current = animationInstance

          // Inicializar en el frame 0 (invisible)
          animationInstance.goToAndStop(0, true)
        }
      }
    }

    loadAnimation()

    return () => {
      if (animationInstance) {
        animationInstance.destroy()
        animationRef.current = null
      }
    }
  }, [animationPath, elementRef, animationRef])

  return (
    <div ref={elementRef} className={styles.card}>
      {/* Contenedor del icono - aquí se renderizará la animación Lottie */}
      <div className={styles.iconContainer} />
      
      {/* Título */}
      <h3 className={styles.title}>{title}</h3>
      
      {/* Descripción */}
      <p className={styles.description}>{description}</p>
      
      {/* Beneficio */}
      <p className={styles.benefit}>
        <span className={styles.benefitLabel}>Beneficio:</span> {benefit}
      </p>
    </div>
  )
}

