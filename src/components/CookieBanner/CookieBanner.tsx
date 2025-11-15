'use client'

import React, { useState, useEffect, useRef } from 'react'
import styles from './CookieBanner.module.css'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)
  const scrollYRef = useRef<number>(0)
  const preventScrollRef = useRef<((e: Event) => void) | null>(null)
  const preventTouchMoveRef = useRef<((e: TouchEvent) => void) | null>(null)

  useEffect(() => {
    // Verificar si el usuario ya aceptó/rechazó las cookies
    const cookieConsent = localStorage.getItem('cookieConsent')
    if (!cookieConsent) {
      setShowBanner(true)
      
      // Guardar la posición actual del scroll
      scrollYRef.current = window.scrollY
      
      // Bloquear el scroll del body y html
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollYRef.current}px`
      document.body.style.width = '100%'
      document.documentElement.style.overflow = 'hidden'
      
      // Prevenir eventos de scroll
      const preventScroll = (e: Event) => {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      const preventTouchMove = (e: TouchEvent) => {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      // Guardar referencias para poder eliminarlas después
      preventScrollRef.current = preventScroll
      preventTouchMoveRef.current = preventTouchMove
      
      // Agregar listeners para prevenir scroll
      window.addEventListener('scroll', preventScroll, { passive: false })
      window.addEventListener('wheel', preventScroll, { passive: false })
      window.addEventListener('touchmove', preventTouchMove, { passive: false })
      
      // Cleanup: restaurar el scroll cuando el componente se desmonte
      return () => {
        if (preventScrollRef.current) {
          window.removeEventListener('scroll', preventScrollRef.current)
          window.removeEventListener('wheel', preventScrollRef.current)
        }
        if (preventTouchMoveRef.current) {
          window.removeEventListener('touchmove', preventTouchMoveRef.current)
        }
        document.body.style.overflow = 'unset'
        document.body.style.position = 'unset'
        document.body.style.top = 'unset'
        document.body.style.width = 'unset'
        document.documentElement.style.overflow = 'unset'
        window.scrollTo(0, scrollYRef.current)
      }
    }
  }, [])

  const restoreScroll = () => {
    // Eliminar event listeners
    if (preventScrollRef.current) {
      window.removeEventListener('scroll', preventScrollRef.current)
      window.removeEventListener('wheel', preventScrollRef.current)
    }
    if (preventTouchMoveRef.current) {
      window.removeEventListener('touchmove', preventTouchMoveRef.current)
    }
    
    // Restaurar estilos
    document.body.style.overflow = 'unset'
    document.body.style.position = 'unset'
    document.body.style.top = 'unset'
    document.body.style.width = 'unset'
    document.documentElement.style.overflow = 'unset'
    window.scrollTo(0, scrollYRef.current)
  }

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    restoreScroll()
    setShowBanner(false)
  }

  const handleReject = () => {
    // No guardar en localStorage cuando rechaza, para que vuelva a aparecer si regresa
    restoreScroll()
    // Redirigir a google.com
    window.location.href = 'https://google.com'
  }

  if (!showBanner) {
    return null
  }

  return (
    <>
      {/* Overlay que bloquea la navegación */}
      <div className={styles.overlay} />
      
      {/* Banner de cookies */}
      <div className={styles.cookieBanner}>
        <div className={styles.cookieContent}>
          <p className={styles.cookieText}>
            Utilizamos cookies para mejorar su experiencia de navegación. Al continuar navegando, acepta nuestro uso de cookies.{' '}
            <a href="/politicas/politica-de-cookies" className={styles.cookieLink} target="_blank" rel="noopener noreferrer">
              Más información
            </a>
          </p>
          <div className={styles.cookieButtons}>
            <button onClick={handleReject} className={styles.rejectButton}>
              Rechazar
            </button>
            <button onClick={handleAccept} className={styles.acceptButton}>
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

