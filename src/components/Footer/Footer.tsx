import Image from 'next/image'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Sección Contacto */}
        <div className={styles.contactSection}>
          <h3 className={styles.sectionTitle}>Contacto</h3>
          <p className={styles.contactInfo}>
            +57 302 490 4740<br />
            info@nexttalentsolutions.com
          </p>
          <p className={styles.copyright}>
            ©Todos los derechos reservados Next Talent Solutions - 2025
          </p>
        </div>

        {/* Sección Dirección */}
        <div className={styles.addressSection}>
          <h3 className={styles.sectionTitle}>Dirección</h3>
          <p className={styles.addressInfo}>
          AV. Carrera 45 # 108a - 50 Edificio Bosch.<br />
            Bogotá, Colombia
          </p>
        </div>

        {/* Sección Síguenos */}
        <div className={styles.socialSection}>
          <h3 className={styles.sectionTitle}>Síguenos</h3>
          <div className={styles.socialIcons}>
            <a 
              href="https://co.linkedin.com/company/next-talent-solutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <Image
                src="/images/Buttons/Button LinkedIn.svg"
                alt="LinkedIn"
                width={23}
                height={23}
              />
            </a>
            <a 
              href="https://www.instagram.com/nexttalentsolutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <Image
                src="/images/Buttons/Button Instagram.svg"
                alt="Instagram"
                width={23}
                height={23}
              />
            </a>
            <a 
              href="https://www.facebook.com/NextTalentSolutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <Image
                src="/images/Buttons/Button Facebook.svg"
                alt="Facebook"
                width={23}
                height={23}
              />
            </a>
            <a 
              href="https://www.youtube.com/@NextTalentSolutions" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <Image
                src="/images/Buttons/Button Twitter.svg"
                alt="YouTube"
                width={23}
                height={23}
              />
            </a>
          </div>
        </div>

        {/* Sección Newsletter */}
        <div className={styles.newsletterSection}>
          <p className={styles.newsletterText}>
            Suscríbete a nuestro Blog y mantente informado de Tips útiles, cambios legales y tendencias estratégicas para un mundo laboral en evolución.
          </p>
          
          <div className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Email" 
              className={styles.emailInput}
            />
            <button className={styles.submitButton}>ENVIAR</button>
          </div>
          
          <a href="#privacidad" className={styles.privacyLink}>
            Políticas de privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}

