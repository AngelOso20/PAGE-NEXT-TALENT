import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import BlogDetailHero from '@/components/BlogDetail/BlogDetailHero'
import BlogDetailContentCustom from '@/components/BlogDetail/BlogDetailContentCustom'
import styles from '@/components/BlogDetail/BlogDetailContent.module.css'

export const metadata: Metadata = {
  title: 'Decreto 0514: Pilares y obligaciones de la reforma pensional | Next Talent Solutions',
  description:
    'Explica el sistema de cuatro pilares, topes de cotización hasta 2.3 SMMLV para prima media y responsabilidades empresariales de afiliación, reporte de semanas y control de información para evitar sanciones.'
}

/**
 * Página de detalle del artículo sobre el Decreto Reglamentario 0514
 * que reglamenta la Ley 2381 de 2024 y pone en marcha el nuevo
 * Sistema de Protección Social Integral para la Vejez, Invalidez y Muerte.
 */
export default function Decreto0514Page() {
  return (
    <main>
      <NavMenu />
      <BlogDetailHero
        category="Información legal"
        title="Decreto 0514: pilares y obligaciones de la reforma pensional"
        description="Este decreto reglamenta la Ley 2381 de 2024 y pone en marcha el nuevo Sistema de Protección Social Integral para la Vejez, Invalidez y Muerte de origen común, basado en cuatro pilares que reemplazan el esquema pensional anterior."
        image={{
          src: '/images/Blog/Articulo 4.webp',
          alt: 'Sistema de protección social y reforma pensional'
        }}
        ctaLabel="Volver al blog"
        ctaHref="/blog"
      />
      <BlogDetailContentCustom date="Mayo 9 · 2025">
        <p>
          Este decreto reglamenta la Ley 2381 de 2024 y pone en marcha el nuevo Sistema de Protección Social Integral para la Vejez, Invalidez y Muerte de origen común, basado en cuatro pilares que reemplazan el esquema pensional anterior.
        </p>

        <ol className={styles.steps}>
          <li>
            <strong>Puntos Clave para Empresarios</strong>
            <p>
              <strong>Nuevos Pilares del Sistema Pensional:</strong>
            </p>
            <ul style={{ marginLeft: '1.5vw', marginTop: '0.5vw' }}>
              <li><strong>Pilar Solidario:</strong> Apoya a adultos mayores en pobreza extrema o vulnerabilidad.</li>
              <li><strong>Pilar Semicontributivo:</strong> Para quienes cotizaron entre 300 y menos de 1.000 (o 1.300 a partir de 2036) semanas.</li>
              <li><strong>Pilar Contributivo:</strong> Para trabajadores dependientes, independientes y personas con capacidad de pago.</li>
              <li><strong>Pilar de Ahorro Voluntario:</strong> Ahorro adicional voluntario.</li>
            </ul>
            <p className={styles.solution}>
              <span>Relevancia:</span> La mayoría de trabajadores de empresas estarán en el Pilar Contributivo.
            </p>
          </li>
          <li>
            <strong>Obligatoriedad de la Afiliación y Cotización</strong>
            <p>
              Afiliación obligatoria para todos los trabajadores dependientes, independientes y rentistas de capital, salvo excepciones legales.
            </p>
            <p>
              Las cotizaciones se dividen en:
            </p>
            <ul style={{ marginLeft: '1.5vw', marginTop: '0.5vw' }}>
              <li><strong>Componente de Prima Media:</strong> Para ingresos hasta 2.3 SMLMV.</li>
              <li><strong>Componente Complementario de Ahorro Individual:</strong> Para ingresos superiores a 2.3 SMLMV hasta 25 SMLMV.</li>
            </ul>
            <p className={styles.solution}>
              <span>Acción:</span> Asegurarse de que todos los empleados estén correctamente afiliados y se realicen las cotizaciones conforme a los nuevos topes y componentes.
            </p>
          </li>
          <li>
            <strong>Cálculo y Registro de Semanas Cotizadas</strong>
            <p>
              Se mantiene el conteo de semanas conforme a la regla de salario mensual, considerando 7 días por semana, 30 días por mes y 360 días por año.
            </p>
            <p>
              Es fundamental el registro correcto y oportuno de semanas cotizadas y salarios.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Revisar y actualizar procesos internos de nómina y reportes a seguridad social, garantizando exactitud en la información reportada.
            </p>
          </li>
          <li>
            <strong>Responsabilidad en la Información</strong>
            <p>
              Las empresas deben suministrar información veraz y oportuna sobre los aportes y semanas cotizadas. Las administradoras (Colpensiones) están obligadas a consolidar y poner a disposición la información de los afiliados.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Implementar controles para asegurar la calidad y oportunidad de la información enviada a los sistemas de seguridad social.
            </p>
          </li>
          <li>
            <strong>Sanciones por Incumplimiento</strong>
            <p>
              El decreto enfatiza la importancia de cumplir con los plazos y montos de cotización. Se mantienen sanciones por omisión, mora o inexactitud en los aportes.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Verificar que los pagos se realicen dentro de los plazos legales y con los valores correctos para evitar sanciones.
            </p>
          </li>
          <li>
            <strong>Transición y Aplicación</strong>
            <p>
              El nuevo sistema no aplica a regímenes especiales ni a personas ya pensionadas. Los aportes realizados antes de la vigencia de la ley serán reconocidos mediante bonos, títulos pensionales o devolución de aportes.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Identificar trabajadores en transición y asesorarlos sobre el reconocimiento de sus aportes previos.
            </p>
          </li>
        </ol>

        <div style={{ marginTop: '2vw', padding: '1.5vw', backgroundColor: '#f4fbfb', borderRadius: '0.63vw', borderLeft: '0.21vw solid #27a49f' }}>
          <p style={{ fontSize: '0.94vw', fontWeight: 700, color: '#27a49f', marginBottom: '1vw' }}>
            Recomendaciones para Empresarios
          </p>
          <ul style={{ marginLeft: '1.5vw', fontSize: '0.83vw', lineHeight: '1.5' }}>
            <li>Capacitar al equipo de recursos humanos sobre la nueva normatividad y los cambios en el sistema pensional.</li>
            <li>Actualizar sistemas de nómina para cumplir con los nuevos requisitos de reporte y cotización.</li>
            <li>Informar a los empleados sobre los cambios y su impacto en su protección pensional.</li>
            <li>Consultar para resolver casos particulares y garantizar el cumplimiento normativo.</li>
            <li>Monitorear la reglamentación complementaria y las circulares del Ministerio del Trabajo para ajustes futuros.</li>
          </ul>
        </div>

        <p className={styles.conclusion}>
          Este decreto representa un cambio estructural en el sistema pensional colombiano. Los empresarios deben prestar especial atención a la correcta afiliación, cotización y reporte de la información de sus trabajadores, así como a la actualización de sus procesos internos para evitar sanciones y garantizar el acceso efectivo de sus empleados a los beneficios del sistema.
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


