'use client'

import { useEffect, useRef } from 'react'

export default function LottieIcon24() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let animationInstance: any = null

    const loadAnimation = async () => {
      const lottie = (await import('lottie-web')).default
      const animationData = await fetch('/images/Iconos/JSON/Icon 24.json').then(res => res.json())

      if (containerRef.current) {
        // Limpiar el contenedor antes de cargar la animación
        containerRef.current.innerHTML = ''
        
        animationInstance = lottie.loadAnimation({
          container: containerRef.current,
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
  }, [])

  return <div ref={containerRef} className="lottie-icon" />
}

