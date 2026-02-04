import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Términos de Servicio | Grail",
  description: "Condiciones de uso y aspectos legales de Grail App.",
};

export default function TermsPage() {
  const currentDate = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-white">
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Términos de Servicio
          </h1>
          <p className="text-slate-500 text-lg">
            Última actualización: {currentDate}
          </p>
        </div>
      </div>

      {/* Contenido Legal */}
      <article className="max-w-3xl mx-auto px-6 py-12 md:py-16 space-y-12">
        <section>
          <p className="text-lg text-slate-600 leading-relaxed">
            Bienvenido a <strong>Grail</strong>. Al descargar, acceder o utilizar nuestra aplicación móvil y sitio web (conjuntamente, el &quot;Servicio&quot;),
            aceptas estar vinculado por estos Términos. Si no estás de acuerdo
            con alguna parte de los términos, no podrás acceder al Servicio.
          </p>
        </section>

        <Section title="1. Descripción del Servicio">
          <p>
            Grail es una herramienta de productividad personal que permite a los
            usuarios guardar, organizar y monitorear productos de diversas
            tiendas en línea.
          </p>
          <p className="mt-3">
            Grail actúa como un <strong>agente de usuario automatizado</strong>.
            Cuando guardas un enlace, instruyes a nuestra tecnología para visitar
            la página pública de ese producto periódicamente y reportar cambios
            en el precio o disponibilidad.
          </p>
        </Section>

        <Section title="2. Cuentas y Seguridad">
          <p>
            Para utilizar ciertas funciones, debes registrarte utilizando un
            correo electrónico válido. Eres responsable de mantener la
            confidencialidad de tu acceso (gestionado mediante códigos OTP) y de
            toda actividad que ocurra bajo tu cuenta.
          </p>
          <p className="mt-3">
            Nos reservamos el derecho de suspender cuentas que demuestren un
            comportamiento abusivo, como intentos de ingeniería inversa o
            sobrecarga intencional de nuestros servidores.
          </p>
        </Section>

        <Section title="3. Exactitud de los Datos (Cláusula de Scraping)">
          <p>
            Dado que Grail obtiene información de terceros en tiempo real:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
            <li>
              <strong>No garantizamos la precisión:</strong> Los precios y el
              stock en las tiendas de origen pueden cambiar más rápido de lo que
              nuestro sistema puede actualizarse. El precio final siempre será
              el que muestre el vendedor en su sitio web al momento de la compra.
            </li>
            <li>
              <strong>Disponibilidad del Servicio:</strong> Si un comercio
              tercero (ej. Amazon, MercadoLibre) bloquea técnicamente el acceso
              a nuestros rastreadores o cambia la estructura de su sitio web,
              ciertas funciones de actualización de precios podrían interrumpirse
              temporalmente sin previo aviso. Esto no constituye un
              incumplimiento de servicio por nuestra parte.
            </li>
          </ul>
        </Section>

        <Section title="4. Propiedad Intelectual">
          <p>
            El Servicio y su contenido original (código fuente, diseño de interfaz,
            algoritmos de scraping) son propiedad exclusiva de Grail App.
          </p>
          <p className="mt-3">
            Las imágenes de productos, títulos y marcas comerciales de terceros
            que aparecen en tus listas pertenecen a sus respectivos propietarios.
            Grail hace uso de este contenido bajo la doctrina de <em>Fair Use</em>{" "}
            (Uso Justo) exclusivamente para fines informativos privados del usuario.
          </p>
        </Section>

        <Section title="5. Enlaces a Sitios de Terceros">
          <p>
            Nuestro Servicio contiene enlaces a sitios web de terceros que no son
            propiedad ni están controlados por Grail. No tenemos control sobre,
            y no asumimos responsabilidad por, el contenido, políticas de
            privacidad o prácticas de sitios web de terceros.
          </p>
          <p className="mt-3">
            Reconoces y aceptas que Grail no será responsable, directa o
            indirectamente, por cualquier daño o pérdida causada por el uso de
            dichos contenidos o servicios.
          </p>
        </Section>

        <Section title="6. Limitación de Responsabilidad">
          <p>
            En ningún caso Grail, ni sus directores, empleados o afiliados, serán
            responsables por daños indirectos, incidentales o punitivos,
            incluyendo la pérdida de beneficios o datos, resultantes de tu uso
            o incapacidad para usar el Servicio.
          </p>
          <p className="mt-3">
            El servicio se proporciona &quot;tal cual&quot; y &quot;según disponibilidad&quot;, sin
            garantías de ningún tipo, explícitas o implícitas.
          </p>
        </Section>

        <Section title="7. Cambios en los Términos">
          <p>
            Nos reservamos el derecho de modificar o reemplazar estos Términos en
            cualquier momento. Si una revisión es material, intentaremos
            proporcionar un aviso de al menos 30 días antes de que entren en
            vigor los nuevos términos.
          </p>
        </Section>

        <Section title="8. Contacto Legal">
          <p>
            Si tienes dudas sobre estos Términos, por favor contáctanos:
          </p>
          <div className="mt-6">
            <a
              href="mailto:legal@grailapp.dev"
              className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
            >
              support@grailapp.dev
            </a>
          </div>
        </Section>
      </article>

      {/* Footer Simple */}
      <footer className="py-12 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Grail App.
        </p>
        <div className="mt-4 space-x-4 text-sm font-medium">
          <Link href="/legal/privacy" className="text-slate-500 hover:text-indigo-600 transition-colors">
            Política de Privacidad
          </Link>
          <span className="text-slate-300">|</span>
          <Link href="/" className="text-slate-500 hover:text-indigo-600 transition-colors">
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
      <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
        {title}
      </h2>
      <div className="text-slate-600 leading-7 text-justify md:text-left">
        {children}
      </div>
    </section>
  );
}