'use client'

import { useEffect, useRef, useState } from 'react'

interface UseLottieAnimationProps {
  iconPath: string
  loop?: boolean
  autoplay?: boolean
}

interface UseLottieAnimationReturn {
  containerRef: React.RefObject<HTMLDivElement>
  isLoading: boolean
  error: string | null
}

export function useLottieAnimation({
  iconPath,
  loop = true,
  autoplay = true
}: UseLottieAnimationProps): UseLottieAnimationReturn {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const animationInstanceRef = useRef<any>(null)

  useEffect(() => {
    let isMounted = true

    const loadAnimation = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Importar Lottie dinámicamente
        const lottie = (await import('lottie-web')).default
        
        // Cargar datos de animación
        const response = await fetch(iconPath)
        if (!response.ok) {
          throw new Error(`Failed to load animation: ${response.statusText}`)
        }
        const animationData = await response.json()

        if (!isMounted || !containerRef.current) {
          return
        }

        // Limpiar contenedor
        containerRef.current.innerHTML = ''
        
        // Crear nueva animación
        animationInstanceRef.current = lottie.loadAnimation({
          container: containerRef.current,
          renderer: 'svg',
          loop,
          autoplay,
          animationData,
        })

        setIsLoading(false)
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Failed to load animation')
          setIsLoading(false)
        }
      }
    }

    loadAnimation()

    return () => {
      isMounted = false
      if (animationInstanceRef.current) {
        animationInstanceRef.current.destroy()
        animationInstanceRef.current = null
      }
    }
  }, [iconPath, loop, autoplay])

  return {
    containerRef,
    isLoading,
    error
  }
}
