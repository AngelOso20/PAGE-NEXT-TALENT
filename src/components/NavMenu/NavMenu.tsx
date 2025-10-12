'use client'

import { useState } from 'react'
import Image from 'next/image'
import styles from './NavMenu.module.css'

export default function NavMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Planes', href: '/planes' },
    { label: 'Blog y Eventos', href: '/blog' },
    { label: 'Contacto', href: '/contacto' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <header className={styles.navMenu}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <a href="/" className={styles.logo}>
            <Image
              src="/images/Iconos/SVG/Isologotipo.svg"
              alt="Next Talent Solutions"
              width={205}
              height={56}
              priority
            />
          </a>

          {/* Navegación - Escritorio */}
          <nav className={styles.nav}>
            <ul className={styles.menuList}>
              {menuItems.map((item) => (
                <li key={item.label} className={styles.menuItem}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botones de acción */}
          <div className={styles.actions}>
            {/* Botón Hablemos */}
            <a href="https://api.whatsapp.com/send/?phone=573024904740&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={styles.buttonHablemos}>
              <Image
                src="/images/Buttons/Button Phone.svg"
                alt="Teléfono"
                width={18}
                height={17}
                className={styles.phoneIcon}
              />
              <span>HABLEMOS</span>
            </a>

            {/* Botón Usuario */}
            <a href="/muy-pronto" className={styles.buttonUser}>
              <Image
                src="/images/Buttons/Button User.svg"
                alt="Usuario"
                width={40}
                height={40}
              />
            </a>

            {/* Botón menú hamburguesa - solo en móvil */}
            <button className={styles.hamburgerButton} onClick={toggleMobileMenu}>
              <Image
                src={isMobileMenuOpen ? "/images/Buttons/Button Close.svg" : "/images/Buttons/Button Menu.svg"}
                alt={isMobileMenuOpen ? "Cerrar menú" : "Menú"}
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil desplegable */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
        <div className={styles.mobileMenuContent}>
          {/* Header del menú móvil - Espacio para mantener el diseño */}
          <div style={{ marginBottom: '30px' }}>
            {/* El botón de cierre ahora está integrado en el botón hamburguesa */}
          </div>

          {/* Navegación móvil */}
          <nav className={styles.mobileMenuNav}>
            <ul className={styles.mobileMenuList}>
              {menuItems.map((item) => (
                <li key={item.label} className={styles.mobileMenuItem}>
                  <a href={item.href} onClick={closeMobileMenu}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botones de acción móvil */}
          <div className={styles.mobileMenuActions}>
            <div className={styles.mobileMenuActionsLeft}>
              <a href="https://api.whatsapp.com/send/?phone=573024904740&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className={styles.buttonHablemos} onClick={closeMobileMenu}>
                <Image
                  src="/images/Buttons/Button Phone.svg"
                  alt="Teléfono"
                  width={18}
                  height={17}
                  className={styles.phoneIcon}
                />
                <span>HABLEMOS</span>
              </a>
            </div>

            <div className={styles.mobileMenuActionsRight}>
              <a href="/muy-pronto" className={styles.buttonUser} onClick={closeMobileMenu}>
                <Image
                  src="/images/Buttons/Button User.svg"
                  alt="Usuario"
                  width={50}
                  height={50}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay para cerrar menú al hacer clic fuera */}
      {isMobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 998,
          }}
          onClick={closeMobileMenu}
        />
      )}
    </>
  )
}

