import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | Grail',
  description: 'Cómo gestionamos y protegemos tus datos en Grail.',
};

export default function PrivacyPage() {
  const currentDate = new Date().toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Política de Privacidad
          </h1>
          <p className="text-slate-500 text-lg">
            Última actualización: {currentDate}
          </p>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16 space-y-12">
        <section>
          <p className="text-lg text-slate-600 leading-relaxed">
            En <strong>Grail App</strong> (en adelante, &quot;la Aplicación&quot;),
            valoramos tu privacidad tanto como valoramos la experiencia de
            usuario. Esta política describe cómo recopilamos, usamos y
            protegemos la información personal que nos proporcionas al utilizar
            nuestra aplicación móvil y nuestros servicios web.
          </p>
        </section>

        <Section title="1. Información que Recopilamos">
          <p>
            Para proporcionar la funcionalidad principal de Grail, recopilamos
            la mínima información necesaria:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
            <li>
              <strong>Información de Cuenta:</strong> Tu dirección de correo
              electrónico utilizada para la autenticación y gestión de sesiones
              (gestionado vía Supabase Auth).
            </li>
            <li>
              <strong>Contenido de Usuario:</strong> Las URLs de productos,
              imágenes, precios y metadatos asociados que guardas
              voluntariamente en tus listas de deseos.
            </li>
            <li>
              <strong>Datos del Dispositivo:</strong> Información técnica básica
              (modelo del dispositivo, versión del sistema operativo) para
              garantizar la compatibilidad de la aplicación.
            </li>
          </ul>
        </Section>

        <Section title="2. Cómo Usamos tu Información">
          <p>Utilizamos tus datos exclusivamente para:</p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
            <li>Sincronizar tus listas de deseos entre tus dispositivos.</li>
            <li>
              Ejecutar nuestro <strong>Motor de Rastreo de Precios</strong>, el
              cual verifica periódicamente las URLs que has guardado para
              detectar cambios en el valor de los productos.
            </li>
            <li>
              Enviarte notificaciones push o correos electrónicos
              transaccionales (vía Resend) cuando un producto de tu lista baja
              de precio o para temas de seguridad (ej. códigos OTP).
            </li>
          </ul>
        </Section>

        <Section title="3. Tecnología de Scraping y Terceros">
          <p>
            Grail actúa como un navegador automatizado en tu nombre. Al agregar
            un enlace, nos autorizas a acceder a la página pública del comercio
            electrónico para extraer información del producto (precio, imagen,
            título).
          </p>
          <p className="mt-4">
            No compartimos tu información personal con estos comercios ni
            vendemos tus datos de navegación a agencias de publicidad.
          </p>
        </Section>

        <Section title="4. Almacenamiento y Proveedores">
          <p>
            Para garantizar la seguridad y escalabilidad, utilizamos proveedores
            de infraestructura de confianza:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
            <li>
              <strong>Supabase:</strong> Para base de datos, autenticación y
              almacenamiento seguro.
            </li>
            <li>
              <strong>Resend:</strong> Para el envío de correos electrónicos de
              verificación y notificaciones.
            </li>
            <li>
              <strong>Vercel:</strong> Para el alojamiento de nuestros servicios
              web.
            </li>
          </ul>
        </Section>

        <Section title="5. Eliminación de Datos (Derecho al Olvido)">
          <p>
            Cumpliendo con las directrices de la App Store y regulaciones
            internacionales, tienes el control total sobre tus datos.
          </p>
          <p className="mt-4">
            Puedes solicitar la eliminación completa de tu cuenta y todos los
            datos asociados (listas, historial de precios) directamente desde la
            sección{' '}
            <em>
              Ajustes {'>'} Cuenta {'>'} Eliminar Cuenta
            </em>{' '}
            dentro de la aplicación, o contactándonos en el correo inferior.
          </p>
        </Section>

        <Section title="6. Contacto">
          <p>
            Si tienes preguntas sobre esta política o el manejo de tus datos,
            nuestro equipo de ingeniería está disponible para ayudarte.
          </p>
          <div className="mt-6 p-6 bg-slate-50 rounded-lg border border-slate-100">
            <p className="font-semibold text-slate-900">Grail Support Team</p>
            <a
              href="mailto:support@grailapp.dev"
              className="text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              support@grailapp.dev
            </a>
          </div>
        </Section>
      </article>

      {/* Footer Simple */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Grail App. Todos los derechos
          reservados.
        </p>
        <div className="mt-4 space-x-4 text-sm font-medium">
          <Link
            href="/terms"
            className="text-slate-500 hover:text-indigo-600 transition-colors"
          >
            Términos de Servicio
          </Link>
          <span className="text-slate-300">|</span>
          <Link
            href="/"
            className="text-slate-500 hover:text-indigo-600 transition-colors"
          >
            Inicio
          </Link>
        </div>
      </footer>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="group">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
        {title}
      </h2>
      <div className="text-slate-600 leading-7 text-justify md:text-left">
        {children}
      </div>
    </section>
  );
}
