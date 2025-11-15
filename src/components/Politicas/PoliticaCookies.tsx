import styles from './PoliticaCookies.module.css'

export default function PoliticaCookies() {
  return (
    <section className={styles.politicaSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>POLÍTICA DE COOKIES</h1>
        
        <p className={styles.companyName}>Next Talent Solutions S.A.S.</p>
        
        <p className={styles.updateDate}>Fecha de última actualización: 04/11/2025</p>

        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>1. Introducción</h2>
          <p className={styles.paragraph}>
            En Next Talent Solutions S.A.S. (en adelante "Next Talent Solutions", "nosotros" o "la empresa") utilizamos cookies y tecnologías similares en nuestro sitio web para ofrecer una mejor experiencia de navegación, optimizar nuestros servicios, y personalizar el contenido que usted visualiza.
          </p>
          <p className={styles.paragraph}>
            Esta Política de Cookies explica qué son las cookies, qué tipos utilizamos, con qué finalidad tratamos la información que recopilan y cómo puede administrar sus preferencias o revocar su consentimiento, conforme a la Ley 1581 de 2012, el Decreto 1377 de 2013, y las directrices de la Superintendencia de Industria y Comercio (SIC).
          </p>

          <h2 className={styles.sectionTitle}>2. ¿Qué son las cookies?</h2>
          <p className={styles.paragraph}>
            Las cookies son pequeños archivos de texto que se almacenan en su dispositivo (computador, tableta o teléfono móvil) al acceder a nuestro sitio web. Permiten que el sitio recuerde información sobre su visita, como idioma, preferencias, tiempo de sesión o páginas visitadas.
          </p>
          <p className={styles.paragraph}>
            El uso de cookies puede implicar tratamiento de datos personales cuando permiten identificar o asociar la información recolectada con una persona natural específica.
          </p>

          <h2 className={styles.sectionTitle}>3. Responsable y contacto</h2>
          <p className={styles.paragraph}>
            <strong>Responsable del tratamiento de datos personales:</strong>
          </p>
          <p className={styles.paragraph}>
            Next Talent Solutions S.A.S.<br />
            NIT: 901.735.303-1<br />
            Domicilio: Bogotá D.C., Colombia<br />
            Correo electrónico: info@nexttalentsolutions.com<br />
            Teléfono: +57 3024904740
          </p>

          <h2 className={styles.sectionTitle}>4. Tipos de cookies que utilizamos</h2>
          <p className={styles.paragraph}>
            En nuestro sitio web empleamos los siguientes tipos de cookies:
          </p>
          
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Tipo de cookie</th>
                  <th>Descripción</th>
                  <th>Necesidad</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cookies esenciales o técnicas</td>
                  <td>Permiten el funcionamiento básico del sitio web, como el inicio de sesión seguro, carga de formularios y navegación.</td>
                  <td>Siempre activas (no requieren consentimiento).</td>
                </tr>
                <tr>
                  <td>Cookies de rendimiento o analíticas</td>
                  <td>Recopilan información sobre cómo los visitantes usan el sitio (páginas más visitadas, errores, tiempos de carga). Nos ayudan a mejorar el rendimiento del portal.</td>
                  <td>Requieren consentimiento.</td>
                </tr>
                <tr>
                  <td>Cookies de funcionalidad o personalización</td>
                  <td>Permiten recordar sus preferencias, como idioma, ubicación o sesión activa.</td>
                  <td>Requieren consentimiento.</td>
                </tr>
                <tr>
                  <td>Cookies de publicidad o marketing</td>
                  <td>Permiten mostrar anuncios personalizados basados en su comportamiento de navegación. Pueden provenir de terceros (por ejemplo, Google Ads, Meta Ads).</td>
                  <td>Requieren consentimiento previo e informado.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className={styles.sectionTitle}>5. Cookies de terceros</h2>
          <p className={styles.paragraph}>
            Podemos permitir que terceros instalen cookies en su dispositivo con fines analíticos o publicitarios. Estos terceros pueden incluir, entre otros:
          </p>
          <ul className={styles.list}>
            <li>Google LLC (Google Analytics y Google Ads)</li>
            <li>Meta Platforms Inc. (Facebook/Instagram Ads)</li>
            <li>LinkedIn Corporation (LinkedIn Ads)</li>
          </ul>
          <p className={styles.paragraph}>
            Cada uno actúa como responsable independiente del tratamiento y maneja la información conforme a sus propias políticas de privacidad, accesibles en sus sitios web oficiales.
          </p>

          <h2 className={styles.sectionTitle}>6. Consentimiento para el uso de cookies</h2>
          <p className={styles.paragraph}>
            Al ingresar por primera vez a nuestro sitio web, se mostrará un banner o aviso de cookies que le informará sobre su uso y le permitirá:
          </p>
          <ul className={styles.list}>
            <li>Aceptar todas las cookies,</li>
            <li>Rechazar las no esenciales, o</li>
            <li>Configurar sus preferencias.</li>
          </ul>
          <p className={styles.paragraph}>
            Solo se instalarán cookies no esenciales (analíticas, funcionales o de publicidad) una vez usted haya otorgado su consentimiento previo, expreso e informado.
          </p>
          <p className={styles.paragraph}>
            Usted puede modificar o revocar su consentimiento en cualquier momento mediante el enlace "Configuración de cookies" disponible en el sitio web o escribiendo al correo info@nexttalentsolutions.com.
          </p>

          <h2 className={styles.sectionTitle}>7. Conservación y eliminación de cookies</h2>
          <p className={styles.paragraph}>
            Las cookies permanecerán activas en su dispositivo durante el tiempo necesario para cumplir su finalidad:
          </p>
          <ul className={styles.list}>
            <li><strong>Cookies de sesión:</strong> se eliminan automáticamente al cerrar el navegador.</li>
            <li><strong>Cookies persistentes:</strong> se almacenan por un periodo máximo de 24 meses, salvo que usted las elimine manualmente antes.</li>
          </ul>
          <p className={styles.paragraph}>
            Usted puede eliminar o bloquear las cookies desde la configuración de su navegador (Chrome, Edge, Safari, Firefox, etc.), lo que puede afectar algunas funcionalidades del sitio.
          </p>

          <h2 className={styles.sectionTitle}>8. Derechos del titular</h2>
          <p className={styles.paragraph}>
            Usted, como titular de la información, puede ejercer los derechos previstos en la Ley 1581 de 2012: conocer, actualizar, rectificar y suprimir sus datos personales, así como revocar la autorización otorgada para su tratamiento.
          </p>
          <p className={styles.paragraph}>
            Para ejercerlos, puede contactarnos al correo info@nexttalentsolutions.com indicando en el asunto "Derechos de Titular - Cookies".
          </p>

          <h2 className={styles.sectionTitle}>9. Actualizaciones de esta política</h2>
          <p className={styles.paragraph}>
            Next Talent Solutions S.A.S. podrá modificar esta Política de Cookies en cualquier momento para adaptarla a cambios legales, técnicos o de operación. La versión vigente estará siempre disponible en www.nexttalentsolutions.com/politica-de-cookies indicando su fecha de última actualización.
          </p>

          <h2 className={styles.sectionTitle}>10. Relación con la Política de Tratamiento de Datos Personales</h2>
          <p className={styles.paragraph}>
            Esta Política de Cookies hace parte integral de la Política de Tratamiento de Datos Personales de Next Talent Solutions S.A.S., disponible en www.nexttalentsolutions.com/politica-de-datos.
          </p>
        </div>
      </div>
    </section>
  )
}

