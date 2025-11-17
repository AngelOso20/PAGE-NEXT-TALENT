import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import BlogDetailHero from '@/components/BlogDetail/BlogDetailHero'
import BlogDetailContentCustom from '@/components/BlogDetail/BlogDetailContentCustom'
import styles from '@/components/BlogDetail/BlogDetailContent.module.css'

export const metadata: Metadata = {
  title: 'Resolución 1890 de 2025: Registro de incidentes y accidentes mayores | Next Talent Solutions',
  description:
    'Nuevas obligaciones para instalaciones con sustancias peligrosas: clasificar incidentes por niveles, reportar accidentes mayores en 24 horas y medir indicadores anuales para prevenir eventos críticos.'
}

/**
 * Página de detalle del artículo sobre la Resolución 1890 de 2025
 * que reglamenta el procedimiento para el registro de incidentes
 * y reporte de accidentes mayores.
 */
export default function Resolucion1890Page() {
  return (
    <main>
      <NavMenu />
      <BlogDetailHero
        category="Información legal"
        title="Resolución 1890 de 2025: registro de incidentes y accidentes mayores"
        description="Dirigido a empresarios con instalaciones que manejen sustancias químicas peligrosas o procesos industriales de alto riesgo, esta resolución impone nuevas obligaciones para prevenir y responder a incidentes y accidentes mayores."
        image={{
          src: '/images/Blog/Articulo 1.webp',
          alt: 'Instalación industrial con medidas de seguridad'
        }}
        ctaLabel="Volver al blog"
        ctaHref="/blog"
      />
      <BlogDetailContentCustom date="Enero 15 · 2025">
        <p>
          Dirigido a empresarios con instalaciones que manejen sustancias químicas peligrosas o procesos industriales de alto riesgo, esta resolución impone nuevas obligaciones para prevenir y responder a incidentes y accidentes mayores. A continuación, los puntos clave:
        </p>

        <ol className={styles.steps}>
          <li>
            <strong>¿A quién aplica esta norma?</strong>
            <p>
              Empresas públicas o privadas que operen instalaciones clasificadas según el Decreto 1347 de 2021 (por manejo de sustancias peligrosas o potencial de accidentes industriales mayores).
            </p>
          </li>
          <li>
            <strong>Obligaciones principales del empresario</strong>
            <p>
              <strong>a. Registro obligatorio de incidentes:</strong>
            </p>
            <p>
              Todo incidente debe clasificarse en niveles del 1 al 4 según su gravedad. Niveles 1 y 2 deben registrarse obligatoriamente. Nivel 1 se refiere a pérdidas significativas de contención (LOPC), daños graves, evacuaciones, hospitalizaciones o explosiones. Se debe registrar el incidente incluso si no genera accidente mayor, para análisis y seguimiento.
            </p>
            <p>
              <strong>b. Reporte obligatorio de accidentes mayores al Ministerio del Trabajo:</strong>
            </p>
            <p>
              Dentro de las primeras 24 horas de ocurrido el evento. El reporte debe ampliarse durante el proceso de atención y cierre del evento. El reporte se hará a través de una herramienta tecnológica que el Ministerio pondrá en funcionamiento.
            </p>
          </li>
          <li>
            <strong>¿Qué se considera accidente mayor?</strong>
            <ul style={{ marginLeft: '1.5vw', marginTop: '0.5vw' }}>
              <li>Muerte de al menos una persona.</li>
              <li>Lesiones que requieran hospitalización ≥ 24 horas.</li>
              <li>Daños ambientales (hábitats, ríos, lagos, acuíferos).</li>
              <li>Daños materiales superiores a 6.400 SMLMV dentro de la empresa o 1.600 SMLMV fuera.</li>
              <li>Interrupción de servicios básicos (agua, luz, gas, comunicaciones) por más de 2 horas afectando a gran número de personas.</li>
              <li>Impacto transfronterizo (efectos en otro país).</li>
            </ul>
          </li>
          <li>
            <strong>Alerta y seguimiento</strong>
            <p>
              Se exige alertar al Sistema Nacional de Gestión del Riesgo ante cualquier evento con potencial de convertirse en accidente mayor. Además, se deben calcular y reportar anualmente indicadores sobre número de incidentes y tasa por horas trabajadas en el mes de enero de cada año.
            </p>
          </li>
          <li>
            <strong>Recomendaciones para empresarios</strong>
            <ul style={{ marginLeft: '1.5vw', marginTop: '0.5vw' }}>
              <li>Identifique si su empresa opera una "instalación clasificada" (revisar matriz de riesgos, manejo de sustancias peligrosas).</li>
              <li>Implemente un protocolo interno de clasificación y registro de incidentes y accidentes mayores.</li>
              <li>Capacite al personal clave en el uso de la herramienta tecnológica que lanzará el Ministerio.</li>
              <li>Actualice el plan de emergencias y contingencias, incluyendo comunicación inmediata a las autoridades.</li>
              <li>Revise seguros y pólizas de responsabilidad civil frente a daños ambientales y accidentes industriales.</li>
            </ul>
          </li>
        </ol>

        <p className={styles.conclusion}>
          Esta Resolución es una herramienta preventiva y de control que exige a las empresas industriales estar preparadas, no solo para responder a emergencias, sino para anticiparse a ellas mediante una gestión rigurosa de incidentes y accidentes mayores. Su cumplimiento no solo evita sanciones, sino que protege la vida, el medio ambiente y la reputación empresarial.
        </p>

        <div style={{ marginTop: '2vw', paddingTop: '1.5vw', borderTop: '1px solid #e0e0e0' }}>
          <p style={{ fontSize: '0.83vw', color: '#464749', marginBottom: '0.5vw' }}>
            <strong>Equipo legal</strong>
          </p>
          <p style={{ fontSize: '0.83vw', color: '#464749', marginBottom: '0.2vw' }}>
            Next Talent Solutions S.A.S.
          </p>
          <p style={{ fontSize: '0.83vw', color: '#464749', marginBottom: '0.2vw' }}>
            www.nexttalentsolutions.com
          </p>
          <p style={{ fontSize: '0.83vw', color: '#464749' }}>
            +57 3024904740
          </p>
        </div>
      </BlogDetailContentCustom>
    </main>
  )
}


