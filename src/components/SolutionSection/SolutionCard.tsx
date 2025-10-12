'use client'

import { useEffect } from 'react'
import styles from './SolutionSection.module.css'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

interface SolutionCardProps {
  iconPath: string
  title: string
  description: string
}

export default function SolutionCard({ iconPath, title, description }: SolutionCardProps) {
  const { elementRef, animationRef } = useScrollAnimation({
    triggerPoint: 0.8, // Inicia cuando el elemento está al 80% del viewport (más tarde)
    animationDistance: 1.2, // Completa la animación en 120% del viewport (mucho más lenta)
    delayStart: 0.15, // Delay adicional del 15% del viewport antes de iniciar
    throttleMs: 16 // 60fps
  })

  useEffect(() => {
    let animationInstance: any = null

    const loadAnimation = async () => {
      const lottie = (await import('lottie-web')).default
      const animationData = await fetch(iconPath).then(res => res.json())

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
  }, [iconPath, elementRef, animationRef])

  return (
    <div ref={elementRef} className={styles.solutionCard}>
      <div className={styles.iconContainer} />
      <div className={styles.cardText}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  )
}

