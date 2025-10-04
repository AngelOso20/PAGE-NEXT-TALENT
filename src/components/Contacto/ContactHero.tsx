import React from 'react';
import styles from './ContactHero.module.css';
import Image from 'next/image';

const ContactHero: React.FC = () => {
  return (
    <section className={styles.contactHero}>
      <div className={styles.container}>
        {/* Primera fila: Imagen y primera caja blanca */}
        <div className={styles.heroContent}>
          {/* Imagen de la izquierda */}
          <div className={styles.imageContainer}>
            <Image
              src="/images/Nosotros/nosotro4.webp"
              alt="Equipo de Next Talent Solutions"
              width={902}
              height={933}
              className={styles.heroImage}
              priority
            />
          </div>

          {/* Caja blanca de la derecha - primera caja */}
          <div className={styles.contentCard}>
            <div className={styles.contentWrapper}>
              {/* Título principal */}
              <h1 className={styles.title}>
                Estamos aquí para ayudarte a hacer crecer tu negocio
              </h1>

              {/* Descripción */}
              <p className={styles.description}>
                Completa el formulario y descubre cómo podemos optimizar la gestión de tu talento humano.
              </p>
            </div>
          </div>
        </div>

        {/* Segunda fila: Segunda caja blanca con formulario - alineada a la derecha */}
        <div className={styles.formRow}>
          <div className={styles.formCard}>
            <div className={styles.formWrapper}>
              {/* Formulario directamente en el componente */}
              <div className={styles.form}>
                <div className={styles.formGrid}>
                  {/* Nombre */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="nombre" className={styles.label}>Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      className={styles.input}
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  {/* Email */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={styles.input}
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Teléfono */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="telefono" className={styles.label}>Teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      className={styles.input}
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  {/* Ciudad */}
                  <div className={styles.inputGroup}>
                    <label htmlFor="ciudad" className={styles.label}>Ciudad</label>
                    <input
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      className={styles.input}
                      placeholder="Ciudad de residencia"
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div className={styles.inputGroup}>
                  <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    className={styles.textarea}
                    placeholder="Cuéntanos sobre tu proyecto..."
                    rows={4}
                  />
                </div>

                {/* Checkbox de políticas - posición exacta del mockup */}
                <div className={styles.checkboxGroup}>
                  <input
                    type="checkbox"
                    id="politicas"
                    name="politicas"
                    className={styles.checkbox}
                  />
                  <label htmlFor="politicas" className={styles.checkboxLabel}>
                    Acepto las políticas de privacidad | Ver política
                  </label>
                </div>

                {/* Botón de enviar - posición exacta del mockup */}
                <button type="submit" className={styles.submitButton}>
                  ENVIAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default ContactHero;
