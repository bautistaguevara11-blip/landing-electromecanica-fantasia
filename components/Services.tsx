import {
  BadgeCheck,
  Cable,
  Droplets,
  Fan,
  PanelsTopLeft,
  Wrench,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
};

const SERVICES: Service[] = [
  {
    icon: Wrench,
    title: "Reparación y mantenimiento de motores industriales",
  },
  {
    icon: PanelsTopLeft,
    title: "Construcción de tableros eléctricos",
  },
  {
    icon: Fan,
    title: "Fabricación de extractores industriales",
  },
  {
    icon: Droplets,
    title: "Instalación de electrobombas",
  },
  {
    icon: BadgeCheck,
    title: "Service oficial de las marcas Rowa y Czerweny",
  },
  {
    icon: Cable,
    title: "Bobinados en general",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-navy-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-dark">
            Servicios
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Todo lo que su industria necesita
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title }) => (
            <div
              key={title}
              className="group rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-accent-light transition-colors group-hover:bg-accent group-hover:text-white">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug text-navy-900">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
