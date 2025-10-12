'use client'

import { useLottieAnimation } from '../../hooks/useLottieAnimation'
import styles from './DiferencialesSection.module.css'

interface DiferencialCardProps {
  iconPath: string
  text: string
}

export default function DiferencialCard({ iconPath, text }: DiferencialCardProps) {
  const { containerRef, isLoading, error } = useLottieAnimation({
    iconPath,
    loop: true,
    autoplay: true
  })

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
      <div ref={containerRef} className={styles.iconContainer}>
        {isLoading && (
          <div className={styles.loadingPlaceholder}>
            <div className={styles.loadingSpinner} />
          </div>
        )}
        {error && (
          <div className={styles.errorPlaceholder}>
            <span>⚠️</span>
          </div>
        )}
      </div>
      <p className={styles.cardText}>{renderText(text)}</p>
    </div>
  )
}

