import {
  Clock,
  Fuel,
  Gauge,
  MessageCircle,
  Mountain,
  Snowflake,
  Wine,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

type Highlight = {
  icon: LucideIcon;
  label: string;
};

const HIGHLIGHTS: Highlight[] = [
  { icon: Zap, label: "Más de 50 equipos generadores para alquiler" },
  { icon: Gauge, label: "Potencias de 3000W a 1000KVA" },
  { icon: Fuel, label: "Modelos nafteros y diesel" },
  { icon: Clock, label: "Funcionamiento continuo las 24 hs" },
  { icon: Mountain, label: "Autónomos, preparados para operar en altura" },
  { icon: Snowflake, label: "Aptos para temperaturas bajo cero" },
];

export default function Generators() {
  return (
    <section
      id="grupos-electrogenos"
      className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div
        aria-hidden
        className="absolute -left-24 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-light">
              El fuerte de nuestro negocio
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Grupos Electrógenos y Torres de Iluminación
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              La venta, alquiler y reparación de grupos electrógenos y torres
              de iluminación se ha fortalecido en este último tiempo.
              Contamos con más de 50 equipos generadores, que se adaptan a la
              necesidad del cliente para su alquiler. Los modelos para la
              venta son variados y van desde 3000W a 1000KVA, nafteros o
              diesel. Pueden funcionar en forma continua las 24hs, son
              autónomos y están provistos para operar en altura y con
              temperaturas bajo cero.
            </p>

            <div className="mt-8 flex gap-4 rounded-lg border border-white/10 bg-white/5 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent text-navy-950">
                <Wine className="h-5 w-5" strokeWidth={2.5} />
              </span>
              <p className="text-sm leading-relaxed text-white/80">
                Se utilizan en eventos de{" "}
                <strong className="text-white">Vendimia</strong>, ferias
                internacionales, fiestas departamentales, shows musicales, y
                abastecen a las{" "}
                <strong className="text-white">
                  bodegas más importantes de Mendoza
                </strong>
                .
              </p>
            </div>

            <a
              href={buildWhatsAppLink(
                "Hola, quiero consultar por grupos electrógenos y torres de iluminación."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-navy-950 transition-colors hover:bg-accent-light"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Consultar disponibilidad
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white/10 text-accent-light">
                  <Icon className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <p className="mt-4 text-sm font-semibold leading-snug text-white/90">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
