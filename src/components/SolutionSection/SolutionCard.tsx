'use client'

import { useEffect, useRef } from 'react'
import styles from './SolutionSection.module.css'

interface SolutionCardProps {
  iconPath: string
  title: string
  description: string
}

export default function SolutionCard({ iconPath, title, description }: SolutionCardProps) {
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
    <div className={styles.solutionCard}>
      <div ref={iconRef} className={styles.iconContainer} />
      <div className={styles.cardText}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDescription}>{description}</p>
      </div>
    </div>
  )
}

