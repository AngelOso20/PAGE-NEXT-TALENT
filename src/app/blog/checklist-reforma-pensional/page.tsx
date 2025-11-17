import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import BlogDetailHero from '@/components/BlogDetail/BlogDetailHero'
import BlogDetailContentCustom from '@/components/BlogDetail/BlogDetailContentCustom'
import styles from '@/components/BlogDetail/BlogDetailContent.module.css'

export const metadata: Metadata = {
  title: 'Checklist para implementar la reforma pensional en tu empresa | Next Talent Solutions',
  description:
    'Acciones inmediatas: capacitar a RR. HH., ajustar nómina y reportes, comunicar cambios a los colaboradores, registrar aportes previos y monitorear circulares del Ministerio del Trabajo.'
}

/**
 * Página de detalle del artículo con checklist práctico para implementar
 * la reforma pensional (Decreto 0514) en las empresas.
 */
export default function ChecklistReformaPensionalPage() {
  return (
    <main>
      <NavMenu />
      <BlogDetailHero
        category="Información legal"
        title="Checklist para implementar la reforma pensional en tu empresa"
        description="Guía práctica con acciones inmediatas para implementar el Decreto 0514 y la nueva reforma pensional en tu empresa, asegurando cumplimiento normativo y protección para tus colaboradores."
        image={{
          src: '/images/Blog/Articulo 5.webp',
          alt: 'Checklist y planificación para implementación de reforma pensional'
        }}
        ctaLabel="Volver al blog"
        ctaHref="/blog"
      />
      <BlogDetailContentCustom date="Mayo 15 · 2025">
        <p>
          La implementación del Decreto 0514 y la nueva reforma pensional requiere acciones inmediatas y coordinadas. Este checklist te ayudará a asegurar que tu empresa cumpla con todas las obligaciones y proteja adecuadamente a tus colaboradores.
        </p>

        <ol className={styles.steps}>
          <li>
            <strong>Capacitar al equipo de Recursos Humanos</strong>
            <p>
              Es fundamental que tu equipo de RR. HH. comprenda completamente la nueva normatividad y los cambios en el sistema pensional. Esto incluye entender los cuatro pilares, los nuevos topes de cotización y las responsabilidades empresariales.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Organizar sesiones de capacitación sobre el Decreto 0514, los nuevos pilares pensionales y los cambios en los procesos de nómina y reportes.
            </p>
          </li>
          <li>
            <strong>Ajustar sistemas de nómina y reportes</strong>
            <p>
              Los sistemas de nómina deben actualizarse para cumplir con los nuevos requisitos de reporte y cotización. Esto incluye configurar los nuevos topes (2.3 SMLMV para prima media) y asegurar el registro correcto de semanas cotizadas.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Revisar y actualizar los sistemas de nómina, configurar los nuevos parámetros de cotización y validar que los reportes a seguridad social sean correctos y oportunos.
            </p>
          </li>
          <li>
            <strong>Comunicar cambios a los colaboradores</strong>
            <p>
              Los empleados deben estar informados sobre los cambios en el sistema pensional y cómo estos afectan su protección pensional. La transparencia es clave para generar confianza.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Realizar comunicaciones claras y oportunas a todos los colaboradores sobre los cambios en el sistema pensional, su impacto y los beneficios del nuevo esquema.
            </p>
          </li>
          <li>
            <strong>Registrar y documentar aportes previos</strong>
            <p>
              Los aportes realizados antes de la vigencia de la ley serán reconocidos mediante bonos, títulos pensionales o devolución de aportes. Es importante tener un registro detallado de estos aportes.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Identificar trabajadores en transición, documentar todos los aportes previos y preparar la información necesaria para el reconocimiento de estos aportes.
            </p>
          </li>
          <li>
            <strong>Monitorear circulares del Ministerio del Trabajo</strong>
            <p>
              La reglamentación complementaria y las circulares del Ministerio del Trabajo pueden traer ajustes futuros. Es importante mantenerse actualizado.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Establecer un proceso de monitoreo continuo de las circulares y reglamentaciones complementarias del Ministerio del Trabajo para identificar ajustes y actualizaciones necesarias.
            </p>
          </li>
          <li>
            <strong>Implementar controles de calidad de información</strong>
            <p>
              Las empresas deben suministrar información veraz y oportuna sobre los aportes y semanas cotizadas. Los controles internos son esenciales para evitar sanciones.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Implementar controles internos para asegurar la calidad y oportunidad de la información enviada a los sistemas de seguridad social, incluyendo revisiones periódicas y validaciones.
            </p>
          </li>
          <li>
            <strong>Verificar cumplimiento de plazos y montos</strong>
            <p>
              El cumplimiento de los plazos legales y los valores correctos de cotización es fundamental para evitar sanciones por omisión, mora o inexactitud.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Establecer un calendario de pagos y validaciones para asegurar que todos los pagos se realicen dentro de los plazos legales y con los valores correctos.
            </p>
          </li>
        </ol>

        <div style={{ marginTop: '2vw', padding: '1.5vw', backgroundColor: '#f4fbfb', borderRadius: '0.63vw', borderLeft: '0.21vw solid #27a49f' }}>
          <p style={{ fontSize: '0.94vw', fontWeight: 700, color: '#27a49f', marginBottom: '1vw' }}>
            Resumen de acciones prioritarias
          </p>
          <ul style={{ marginLeft: '1.5vw', fontSize: '0.83vw', lineHeight: '1.5' }}>
            <li>✅ Capacitar al equipo de RR. HH. sobre la nueva normatividad</li>
            <li>✅ Actualizar sistemas de nómina con los nuevos parámetros</li>
            <li>✅ Comunicar cambios a todos los colaboradores</li>
            <li>✅ Documentar aportes previos de trabajadores en transición</li>
            <li>✅ Establecer monitoreo de circulares del MinTrabajo</li>
            <li>✅ Implementar controles de calidad de información</li>
            <li>✅ Verificar cumplimiento de plazos y montos de cotización</li>
          </ul>
        </div>

        <p className={styles.conclusion}>
          La implementación exitosa de la reforma pensional requiere planificación, capacitación y seguimiento continuo. Siguiendo este checklist, tu empresa estará mejor preparada para cumplir con las nuevas obligaciones y proteger adecuadamente a tus colaboradores, evitando sanciones y garantizando el acceso efectivo a los beneficios del sistema.
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

