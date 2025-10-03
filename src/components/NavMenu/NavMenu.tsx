import Image from 'next/image'
import styles from './NavMenu.module.css'

export default function NavMenu() {
  const menuItems = [
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Planes', href: '#planes' },
    { label: 'Blog y Eventos', href: '#blog' },
    { label: 'Contacto', href: '#contacto' },
  ]

  return (
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

        {/* Navegación */}
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
          <a href="#contacto" className={styles.buttonHablemos}>
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
          <a href="#usuario" className={styles.buttonUser}>
            <Image
              src="/images/Buttons/Button User.svg"
              alt="Usuario"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </header>
  )
}

