import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import BlogDetailHero from '@/components/BlogDetail/BlogDetailHero'
import BlogDetailContentCustom from '@/components/BlogDetail/BlogDetailContentCustom'
import styles from '@/components/BlogDetail/BlogDetailContent.module.css'

export const metadata: Metadata = {
  title: 'Requisitos Legales para Gestionar el RRHH en Colombia | Next Talent Solutions',
  description:
    'Repasa las normas laborales vigentes, modalidades de contrato, pago de prestaciones, seguridad y salud, obligaciones fiscales y protección de datos que toda microempresa debe dominar para evitar sanciones.'
}

/**
 * Página de detalle del capítulo 2 sobre los requisitos legales
 * para gestionar recursos humanos en Colombia.
 */
export default function RequisitosLegalesRRHHPage() {
  return (
    <main>
      <NavMenu />
      <BlogDetailHero
        category="Información legal"
        title="Requisitos Legales para Gestionar el RRHH en Colombia"
        description="La gestión del talento humano en tu microempresa conlleva una serie de responsabilidades legales que debes cumplir para garantizar el bienestar de tus empleados y el cumplimiento de las normativas laborales en Colombia."
        image={{
          src: '/images/Blog/Articulo 6.webp',
          alt: 'Requisitos legales para gestión de RRHH en Colombia'
        }}
        ctaLabel="Volver al blog"
        ctaHref="/blog"
      />
      <BlogDetailContentCustom date="Enero 12 · 2025">
        <p>
          La gestión del talento humano en tu microempresa conlleva una serie de responsabilidades legales que debes cumplir para garantizar el bienestar de tus empleados y el cumplimiento de las normativas laborales en Colombia. A continuación, te presento los requisitos legales más importantes que debes tener en cuenta:
        </p>

        <ol className={styles.steps}>
          <li>
            <strong>Normativas Laborales Básicas</strong>
            <p>
              Familiarízate con el Código Sustantivo del Trabajo y otras leyes laborales colombianas que regulan aspectos como contratación, jornada laboral, salario mínimo, vacaciones, seguridad social, entre otros.
            </p>
            <p>
              Asegúrate de cumplir con los requisitos establecidos en estas leyes en cuanto a la relación laboral entre tu microempresa y tus empleados.
            </p>
          </li>
          <li>
            <strong>Contratación y Modalidades de Contrato</strong>
            <p>
              Conoce las diferentes modalidades de contrato de trabajo permitidas en Colombia, como contrato a término indefinido, contrato a término fijo, contrato por obra o labor, entre otros.
            </p>
            <p>
              Asegúrate de elaborar contratos de trabajo claros y completos que incluyan todos los detalles relevantes, como salario, horario laboral, duración del contrato, entre otros.
            </p>
          </li>
          <li>
            <strong>Pago de Salarios y Prestaciones Sociales</strong>
            <p>
              Cumple con el pago puntual de salarios de acuerdo con el salario mínimo establecido por el gobierno colombiano.
            </p>
            <p>
              Asegúrate de calcular y pagar las prestaciones sociales correspondientes, como prima de servicios, cesantías, intereses sobre cesantías y vacaciones, de acuerdo con lo establecido por la ley.
            </p>
          </li>
          <li>
            <strong>Seguridad y Salud Ocupacional</strong>
            <p>
              Implementa un programa de salud ocupacional en tu microempresa que cumpla con los requisitos establecidos en la normativa colombiana.
            </p>
            <p>
              Realiza evaluaciones de riesgos laborales y toma medidas para prevenir accidentes y enfermedades ocupacionales en el lugar de trabajo.
            </p>
            <p>
              Proporciona equipos de protección personal adecuados y capacita a tus empleados sobre su uso correcto.
            </p>
          </li>
          <li>
            <strong>Cumplimiento de Obligaciones Fiscales y Tributarias</strong>
            <p>
              Asegúrate de registrar adecuadamente a tus empleados ante las autoridades fiscales y de seguridad social correspondientes.
            </p>
            <p>
              Cumple con las obligaciones de retención en la fuente y pago de aportes a la seguridad social, como salud, pensión y riesgos laborales.
            </p>
            <p>
              Mantén registros precisos y actualizados de los pagos realizados y cumple con los plazos establecidos para evitar sanciones y multas.
            </p>
          </li>
          <li>
            <strong>Protección de Datos Personales</strong>
            <p>
              Cumple con la normativa colombiana en materia de protección de datos personales, especialmente la Ley 1581 de 2012 y sus decretos reglamentarios.
            </p>
            <p>
              Asegúrate de obtener el consentimiento de tus empleados para el tratamiento de sus datos personales y de implementar medidas de seguridad adecuadas para proteger su privacidad.
            </p>
          </li>
          <li>
            <strong>Normativas Específicas según la Actividad de la Empresa</strong>
            <p>
              Si tu microempresa opera en un sector específico, como el comercio, la industria o los servicios, asegúrate de cumplir con las normativas y regulaciones adicionales que puedan aplicarse a tu actividad.
            </p>
          </li>
        </ol>

        <p className={styles.conclusion}>
          El cumplimiento de los requisitos legales en la gestión del talento humano es fundamental para evitar problemas legales y proteger los derechos de tus empleados en Colombia. Al conocer y cumplir con las normativas laborales básicas, así como con las obligaciones fiscales, de seguridad y salud ocupacional, y de protección de datos personales, estarás asegurando el cumplimiento legal y el bienestar de tu equipo en tu microempresa.
        </p>
      </BlogDetailContentCustom>
    </main>
  )
}

