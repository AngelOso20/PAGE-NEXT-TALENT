import type { Metadata } from 'next'
import NavMenu from '@/components/NavMenu/NavMenu'
import BlogDetailHero from '@/components/BlogDetail/BlogDetailHero'
import BlogDetailContentCustom from '@/components/BlogDetail/BlogDetailContentCustom'
import styles from '@/components/BlogDetail/BlogDetailContent.module.css'

export const metadata: Metadata = {
  title: 'Ley 2466 de 2025: Cómo ajustar tus contratos de aprendizaje | Next Talent Solutions',
  description:
    'Aprendices vigentes y nuevos acceden a derechos laborales desde el 25 de junio de 2025; actualiza otrosí, parámetros de PILA, prestaciones en etapa práctica y soporte documental para evitar sanciones.'
}

/**
 * Página de detalle del artículo sobre la aplicación de la Ley 2466 de 2025
 * a contratos de aprendizaje según circular externa 0083 del 18 de julio de 2025.
 */
export default function Ley2466Page() {
  return (
    <main>
      <NavMenu />
      <BlogDetailHero
        category="Información legal"
        title="Ley 2466: cómo ajustar tus contratos de aprendizaje"
        description="Esta guía práctica te ayudará a entender qué debes hacer con los contratos vigentes y futuros, cómo calcular los aportes y cómo evitar sanciones."
        image={{
          src: '/images/Blog/Articulo 3.webp',
          alt: 'Contratos de aprendizaje y normativa laboral'
        }}
        ctaLabel="Volver al blog"
        ctaHref="/blog"
      />
      <BlogDetailContentCustom date="Julio 18 · 2025">
        <p>
          Esta guía práctica te ayudará a entender qué debes hacer con los contratos vigentes y futuros, cómo calcular los aportes y cómo evitar sanciones.
        </p>

        <ol className={styles.steps}>
          <li>
            <strong>Aplicación a contratos de aprendizaje vigentes</strong>
            <p>
              <strong>Contratos vigentes al 25 de junio de 2025:</strong>
            </p>
            <p>
              Se rigen por la Ley 2466 desde esa fecha en adelante, por consiguiente, todo lo que suceda después del 25 de junio de 2025 (prestaciones, pagos, seguridad social, etc.) debe aplicarse conforme a la nueva ley.
            </p>
            <p>
              Se aplica el principio de favorabilidad (Art. 53 Constitución). Por lo tanto, los aprendices vigentes se benefician desde el 25 de junio de 2025 con los derechos establecidos en la Ley 2466, sin que se requiera firmar un nuevo contrato.
            </p>
            <p>
              No se requiere nuevo contrato, pero sí se debe actualizar el soporte documental (otrosí o nota de actualización). No es retroactivo: no deben pagarse retroactivamente prestaciones sociales por meses anteriores.
            </p>
            <p className={styles.solution}>
              <span>Recomendaciones:</span> Revisar todos los contratos de aprendizaje vigentes al 25 de junio. Verificar en qué etapa está cada aprendiz y desde qué fecha aplica la nueva obligación. Emitir documento de actualización o instructivo interno para RH y contabilidad. Modificar los valores en la planilla PILA según el tipo cotizante correspondiente. Incluir en la nómina a los aprendices en etapa práctica, con sus respectivos aportes y prestaciones.
            </p>
          </li>
          <li>
            <strong>Contratos firmados a partir del 25 de junio de 2025</strong>
            <p>
              Se rigen completamente por la Ley 2466 de 2025. Adquieren naturaleza de contrato laboral especial a término fijo.
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> Redactar la nueva minuta de contrato.
            </p>
          </li>
          <li>
            <strong>Diferencias clave antes y después del 25 de junio de 2025</strong>
            <div style={{ marginTop: '1vw', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78vw' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f4fbfb', borderBottom: '2px solid #27a49f' }}>
                    <th style={{ padding: '0.8vw', textAlign: 'left', fontWeight: 700, color: '#27a49f' }}>Elemento</th>
                    <th style={{ padding: '0.8vw', textAlign: 'left', fontWeight: 700, color: '#27a49f' }}>Antes (Ley 789/2002)</th>
                    <th style={{ padding: '0.8vw', textAlign: 'left', fontWeight: 700, color: '#27a49f' }}>Desde Ley 2466 /2025</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.8vw', fontWeight: 600 }}>Naturaleza del contrato</td>
                    <td style={{ padding: '0.8vw' }}>Especial formativo, no laboral</td>
                    <td style={{ padding: '0.8vw' }}>Contrato laboral especial a término fijo</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.8vw', fontWeight: 600 }}>Etapa lectiva</td>
                    <td style={{ padding: '0.8vw' }}>50 % SMMLV (solo salud)</td>
                    <td style={{ padding: '0.8vw' }}>75 % SMMLV – salud y ARL pagadas por empresa</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.8vw', fontWeight: 600 }}>Etapa práctica</td>
                    <td style={{ padding: '0.8vw' }}>75-100% SMMLV (solo salud y ARL)</td>
                    <td style={{ padding: '0.8vw' }}>100 % SMMLV – salud, pensión, ARL, prestaciones sociales</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.8vw', fontWeight: 600 }}>Prestaciones sociales</td>
                    <td style={{ padding: '0.8vw' }}>No aplicaban</td>
                    <td style={{ padding: '0.8vw' }}>Sí aplican en etapa práctica</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.8vw', fontWeight: 600 }}>Caja de compensación</td>
                    <td style={{ padding: '0.8vw' }}>No exigida</td>
                    <td style={{ padding: '0.8vw' }}>Afiliación obligatoria en etapa práctica</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <strong>Aportes y parafiscales</strong>
            <p>
              <strong>Seguridad social:</strong>
            </p>
            <div style={{ marginTop: '1vw', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78vw', marginBottom: '1vw' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f4fbfb', borderBottom: '2px solid #27a49f' }}>
                    <th style={{ padding: '0.8vw', textAlign: 'left', fontWeight: 700, color: '#27a49f' }}>Concepto</th>
                    <th style={{ padding: '0.8vw', textAlign: 'left', fontWeight: 700, color: '#27a49f' }}>Etapa lectiva</th>
                    <th style={{ padding: '0.8vw', textAlign: 'left', fontWeight: 700, color: '#27a49f' }}>Etapa práctica / dual</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.8vw', fontWeight: 600 }}>Salud</td>
                    <td style={{ padding: '0.8vw' }}>100% empresa</td>
                    <td style={{ padding: '0.8vw' }}>8.5% empresa* / 4% aprendiz</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.8vw', fontWeight: 600 }}>Pensión</td>
                    <td style={{ padding: '0.8vw' }}>No aplica</td>
                    <td style={{ padding: '0.8vw' }}>12% empresa / 4% aprendiz</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.8vw', fontWeight: 600 }}>ARL</td>
                    <td style={{ padding: '0.8vw' }}>100% empresa</td>
                    <td style={{ padding: '0.8vw' }}>100% empresa (según clase de riesgo)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontSize: '0.78vw', fontStyle: 'italic', marginTop: '0.5vw' }}>
              *Artículo 114-1 del Estatuto Tributario exonera del pago de aportes en salud a los empleadores de trabajadores que devenguen ≤ 10 SMMLV, solo sobre la parte del empleador (8.5 %).
            </p>
            <p className={styles.solution}>
              <span>Acción:</span> El empleador debe verificar el archivo del "Reporte de Aprendices" enviado por el SENA para validar el uso correcto del cotizante 19.
            </p>
          </li>
          <li>
            <strong>Obligaciones prácticas en PILA y administración</strong>
            <p>
              Desde agosto de 2025, se deben usar los siguientes parámetros en PILA:
            </p>
            <div style={{ marginTop: '1vw', overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78vw' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f4fbfb', borderBottom: '2px solid #27a49f' }}>
                    <th style={{ padding: '0.8vw', textAlign: 'left', fontWeight: 700, color: '#27a49f' }}>Tipo de contrato</th>
                    <th style={{ padding: '0.8vw', textAlign: 'left', fontWeight: 700, color: '#27a49f' }}>Tipo cotizante</th>
                    <th style={{ padding: '0.8vw', textAlign: 'left', fontWeight: 700, color: '#27a49f' }}>Tipo aportante</th>
                    <th style={{ padding: '0.8vw', textAlign: 'left', fontWeight: 700, color: '#27a49f' }}>Planilla</th>
                    <th style={{ padding: '0.8vw', textAlign: 'left', fontWeight: 700, color: '#27a49f' }}>Comentario</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.8vw', fontWeight: 600 }}>Etapa lectiva</td>
                    <td style={{ padding: '0.8vw' }}>19</td>
                    <td style={{ padding: '0.8vw' }}>1</td>
                    <td style={{ padding: '0.8vw' }}>E</td>
                    <td style={{ padding: '0.8vw' }}>Solo salud y ARL, pagados por la empresa</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e0e0e0' }}>
                    <td style={{ padding: '0.8vw', fontWeight: 600 }}>Etapa práctica / dual</td>
                    <td style={{ padding: '0.8vw' }}>1</td>
                    <td style={{ padding: '0.8vw' }}>1</td>
                    <td style={{ padding: '0.8vw' }}>E</td>
                    <td style={{ padding: '0.8vw' }}>Salud, pensión en porcentajes establecidos por norma</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </li>
          <li>
            <strong>Documentos que debes tener al día</strong>
            <ul style={{ marginLeft: '1.5vw', marginTop: '0.5vw' }}>
              <li>Contrato de aprendizaje actualizado (o su anexo/otrosí).</li>
              <li>Afiliaciones a salud, pensión y ARL según la etapa.</li>
              <li>Planilla PILA con el tipo de cotizante correcto.</li>
              <li>Prueba de afiliación a Caja de Compensación (etapa práctica).</li>
              <li>Registro de pagos y liquidaciones prestacionales.</li>
              <li>Copia de participación del aprendiz en procesos de SST (Comité, capacitaciones, etc.).</li>
            </ul>
            <p className={styles.solution}>
              <span>Recomendación:</span> Contáctanos para revisar y validar que tienes al día tus procesos internos y documentación actualizada.
            </p>
          </li>
          <li>
            <strong>Cómo te podemos ayudar</strong>
            <ul style={{ marginLeft: '1.5vw', marginTop: '0.5vw' }}>
              <li>Modelos actualizados de contrato y otrosí.</li>
              <li>Simulador de costos y aportes para cada etapa.</li>
              <li>Capacitación virtual para tu equipo de RRHH.</li>
              <li>Revisión de tu situación actual sin costo.</li>
              <li>Acompañamiento ante MinTrabajo o SENA.</li>
            </ul>
          </li>
        </ol>

        <p className={styles.conclusion}>
          Esperamos que esta guía práctica sobre la aplicabilidad de la nueva norma respecto a los contratos de aprendizaje vigentes y futuros, haya sido de gran utilidad para tu gestión y la de tu compañía.
        </p>

        <div style={{ marginTop: '2vw', paddingTop: '1.5vw', borderTop: '1px solid #e0e0e0' }}>
          <p style={{ fontSize: '0.83vw', color: '#464749', marginBottom: '0.5vw' }}>
            <strong>Next Talent Solutions S.A.S.</strong>
          </p>
          <p style={{ fontSize: '0.83vw', color: '#464749', marginBottom: '0.2vw' }}>
            www.nexttalentsolutions.com
          </p>
          <p style={{ fontSize: '0.83vw', color: '#464749', marginBottom: '0.2vw' }}>
            jose@nexttalentsolutions.com
          </p>
          <p style={{ fontSize: '0.83vw', color: '#464749' }}>
            +57 3024904740
          </p>
        </div>
      </BlogDetailContentCustom>
    </main>
  )
}

