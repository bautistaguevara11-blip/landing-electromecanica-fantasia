import {
  Building2,
  Fuel,
  MessageCircle,
  Pickaxe,
  Snowflake,
  type LucideIcon,
} from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

type Sector = {
  name: string;
  icon: LucideIcon;
};

const SECTORS: Sector[] = [
  { name: "Minería", icon: Pickaxe },
  { name: "Petróleo", icon: Fuel },
  { name: "Frigoríficos", icon: Snowflake },
  { name: "Desarrollos Inmobiliarios", icon: Building2 },
];

export default function Sectors() {
  return (
    <section id="rubros" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-dark">
            Dónde trabajamos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Rubros que atendemos
          </h2>
          <p className="mt-4 text-navy-600">
            Potencia y confiabilidad para tu industria, sea cual sea tu
            rubro.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex flex-col rounded-xl border border-navy-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy-900 text-accent-light">
                <Icon className="h-6 w-6" strokeWidth={2} />
              </span>
              <h3 className="mt-5 flex-1 text-lg font-bold leading-snug text-navy-900">
                {name}
              </h3>

              <a
                href={buildWhatsAppLink(
                  `Hola, quiero consultar por servicios para el rubro de ${name}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                Consultar por WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
