'use client'

import { useEffect, useRef } from 'react'
import styles from './ValoresSection.module.css'

interface ValoresCardProps {
  iconPath: string
  title: string
  description: string
}

export default function ValoresCard({ iconPath, title, description }: ValoresCardProps) {
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
    <div className={styles.valorCard}>
      <div ref={iconRef} className={styles.iconContainer} />
      <p className={styles.cardText}>
        <span className={styles.cardTitle}>{title}</span>
        {' '}
        <span className={styles.cardDescription}>{description}</span>
      </p>
    </div>
  )
}

