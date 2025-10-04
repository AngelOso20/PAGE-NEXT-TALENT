'use client'

import { useEffect, useRef } from 'react'
import styles from './HistoriaSection.module.css'

interface HistoriaCardProps {
  iconPath: string
  text: string
}

export default function HistoriaCard({ iconPath, text }: HistoriaCardProps) {
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

  return (
    <div className={styles.historiaCard}>
      <div ref={iconRef} className={styles.cardIconContainer} />
      <p className={styles.cardText}>{text}</p>
    </div>
  )
}

