'use client'

import { useEffect, useRef } from 'react'
import styles from './DiferencialesSection.module.css'

interface DiferencialCardProps {
  iconPath: string
  text: string
}

export default function DiferencialCard({ iconPath, text }: DiferencialCardProps) {
  const iconRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationInstance: any = null

    const loadAnimation = async () => {
      const lottie = (await import('lottie-web')).default
      const animationData = await fetch(iconPath).then(res => res.json())

      if (iconRef.current) {
        iconRef.current.innerHTML = ''
        
        animationInstance = lottie.loadAnimation({
          container: iconRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: animationData,
        })
      }
    }

    loadAnimation()

    return () => {
      if (animationInstance) {
        animationInstance.destroy()
      }
    }
  }, [iconPath])

  // Procesar el texto para renderizar negritas
  const renderText = (htmlText: string) => {
    const parts = htmlText.split(/(<b>|<\/b>)/)
    let isBold = false
    
    return parts.map((part, index) => {
      if (part === '<b>') {
        isBold = true
        return null
      } else if (part === '</b>') {
        isBold = false
        return null
      } else if (part) {
        return (
          <span key={index} className={isBold ? styles.boldText : ''}>
            {part}
          </span>
        )
      }
      return null
    })
  }

  return (
    <div className={styles.diferencialCard}>
      <div ref={iconRef} className={styles.iconContainer} />
      <p className={styles.cardText}>{renderText(text)}</p>
    </div>
  )
}

