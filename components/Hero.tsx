import { Factory, MessageCircle, PackageSearch } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-900 text-white"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <Factory
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-10 h-[26rem] w-[26rem] text-navy-700 opacity-40 sm:-right-10"
        strokeWidth={0.6}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-accent-dark via-accent to-accent-light"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-light">
          Más de 50 años de trayectoria industrial
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Fuerza y respaldo para la industria de{" "}
          <span className="text-accent">Mendoza y todo Cuyo</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
          Familia Fantasia, tres generaciones al servicio de la industria:
          reparación y mantenimiento de motores, tableros eléctricos,
          extractores, electrobombas y grupos electrógenos, con presencia en
          Mendoza y provincias de todo el país.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#catalogo"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-light"
          >
            <PackageSearch className="h-5 w-5" strokeWidth={2.5} />
            Ver productos
          </a>
          <a
            href={buildWhatsAppLink(
              "Hola, quiero consultar por sus productos y servicios."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
          >
            <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
