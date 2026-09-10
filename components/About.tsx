import { Users } from "lucide-react";

const PROVINCES = [
  "Mendoza y todo Cuyo",
  "Neuquén",
  "Río Negro",
  "Córdoba",
  "Corrientes",
  "Catamarca",
  "La Rioja",
];

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="text-sm font-bold uppercase tracking-wider text-accent-dark">
              Sobre nosotros
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
              Una empresa familiar, tres generaciones
            </h2>

            <div className="mt-8 flex gap-4 rounded-lg border border-navy-100 bg-navy-50/60 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-navy-900 text-accent-light">
                <Users className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <p className="text-sm leading-relaxed text-navy-700">
                Fundada por <strong>Egisto Fantasia</strong>,{" "}
                <strong>Giovanni Fantasia</strong> y{" "}
                <strong>Carlos Fantasia</strong>, hoy apoyada también por la
                tercera generación de la familia.
              </p>
            </div>

            <div className="mt-8 flex gap-6">
              <div>
                <p className="text-3xl font-extrabold text-navy-900">+50</p>
                <p className="text-sm font-medium text-navy-500">
                  años en el rubro industrial
                </p>
              </div>
              <div className="w-px bg-navy-100" />
              <div>
                <p className="text-3xl font-extrabold text-navy-900">3</p>
                <p className="text-sm font-medium text-navy-500">
                  generaciones Fantasia
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-navy-700">
              Desde hace más de 50 años nos caracterizamos por prestar una
              amplia gama de servicios para la Industria. La empresa mantiene
              su oferta de servicios en Mendoza y todo Cuyo, extendiéndose
              hacia otras provincias, por experiencia y trayectoria en
              reparación y mantenimiento de motores, construcción de tableros
              eléctricos, fabricación de extractores, instalación de
              electrobombas, y service oficial de Rowa y Czerweny.
            </p>

            <div className="mt-8">
              <p className="text-sm font-bold uppercase tracking-wider text-navy-500">
                Presencia en
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {PROVINCES.map((province) => (
                  <li
                    key={province}
                    className="rounded-full border border-navy-200 bg-white px-4 py-1.5 text-sm font-semibold text-navy-800"
                  >
                    {province}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
