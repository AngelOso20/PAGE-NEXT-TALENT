'use client'

import { useEffect, useRef, useCallback } from 'react'

interface UseScrollAnimationOptions {
  triggerPoint?: number // Porcentaje del viewport donde inicia la animación (0.7 = 70%)
  animationDistance?: number // Distancia de scroll para completar la animación (0.5 = 50% del viewport)
  throttleMs?: number // Throttle para el event listener (16ms = 60fps)
  delayStart?: number // Delay adicional antes de iniciar la animación (0.1 = 10% del viewport)
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const {
    triggerPoint = 0.7, // 70% del viewport
    animationDistance = 0.5, // 50% del viewport
    throttleMs = 16, // 60fps
    delayStart = 0.1 // 10% del viewport de delay adicional
  } = options

  const elementRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<any>(null)
  const lastScrollTime = useRef<number>(0)

  const updateAnimation = useCallback(() => {
    if (!elementRef.current || !animationRef.current) return

    const element = elementRef.current
    const rect = element.getBoundingClientRect()
    const windowHeight = window.innerHeight
    
    // Calcular el punto de trigger (cuando el elemento está al 70% del viewport)
    const triggerY = windowHeight * triggerPoint
    
    // Calcular la distancia de animación
    const animationRange = windowHeight * animationDistance
    
    // Calcular el progreso de la animación
    let progress = 0
    
    if (rect.top < triggerY) {
      // El elemento ha pasado el punto de trigger
      const scrolled = triggerY - rect.top
      
      // Aplicar delay adicional para hacer la animación más gradual
      const delayAmount = windowHeight * delayStart
      const adjustedScrolled = Math.max(0, scrolled - delayAmount)
      const adjustedRange = animationRange - delayAmount
      
      const rawProgress = adjustedScrolled / adjustedRange
      
      // Aplicar una curva suave (ease-out) para que la animación sea más gradual
      // Usando la función easeOutCubic: 1 - (1-t)^3
      const smoothProgress = 1 - Math.pow(1 - Math.min(rawProgress, 1), 3)
      progress = Math.max(0, Math.min(1, smoothProgress))
    }
    
    // Asegurar que el progreso esté entre 0 y 1
    progress = Math.max(0, Math.min(1, progress))
    
    // Calcular el frame objetivo
    const totalFrames = animationRef.current.totalFrames
    const targetFrame = Math.floor(progress * totalFrames)
    
    // Actualizar la animación
    animationRef.current.goToAndStop(targetFrame, true)
  }, [triggerPoint, animationDistance, delayStart])

  const throttledUpdateAnimation = useCallback(() => {
    const now = Date.now()
    if (now - lastScrollTime.current >= throttleMs) {
      updateAnimation()
      lastScrollTime.current = now
    }
  }, [updateAnimation, throttleMs])

  useEffect(() => {
    // Agregar el event listener
    window.addEventListener('scroll', throttledUpdateAnimation, { passive: true })
    
    // Ejecutar una vez al montar para establecer el estado inicial
    updateAnimation()
    
    return () => {
      window.removeEventListener('scroll', throttledUpdateAnimation)
    }
  }, [throttledUpdateAnimation, updateAnimation])

  return {
    elementRef,
    animationRef,
    updateAnimation
  }
}
