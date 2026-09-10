import Image from "next/image";
import {
  Gauge,
  Lightbulb,
  MessageCircle,
  PanelsTopLeft,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

type Product = {
  name: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
};

const PRODUCTS: Product[] = [
  {
    name: "Grupo Electrógeno 3000W",
    description: "Ideal para uso doméstico y equipos portátiles de baja potencia.",
    icon: Zap,
  },
  {
    name: "Grupo Electrógeno 10KVA",
    description: "Solución robusta para obras, comercios y eventos medianos.",
    icon: Gauge,
  },
  {
    name: "Torre de Iluminación",
    description: "Iluminación autónoma para eventos, obras y operativos nocturnos.",
    icon: Lightbulb,
  },
  {
    name: "Tablero Eléctrico a medida",
    description: "Diseño y construcción de tableros según las necesidades de su instalación.",
    icon: PanelsTopLeft,
  },
  {
    name: "Bombas de calefacción",
    description: "Bombas Rowa para sistemas de calefacción residencial e industrial.",
    image: "/images/bombas-calefaccion.png",
  },
  {
    name: "Bombas presurizadoras",
    description: "Bombas presurizadoras Rowa para mejorar la presión de agua.",
    image: "/images/bombas-presurizadoras.png",
  },
  {
    name: "Extractores industriales",
    description: "Fabricación de extractores industriales a medida.",
    image: "/images/extractores.png",
  },
];

export default function Catalog() {
  return (
    <section id="catalogo" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-wider text-accent-dark">
            Catálogo de productos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            Consulte por nuestros equipos
          </h2>
          <p className="mt-4 text-navy-600">
            Escríbanos por WhatsApp indicando el producto de su interés y le
            responderemos con precio y disponibilidad.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map(({ name, description, icon: Icon, image }) => (
            <div
              key={name}
              className="flex flex-col overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              {image ? (
                <div className="relative aspect-square w-full bg-white">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-40 items-center justify-center bg-gradient-to-br from-navy-800 to-navy-600">
                  {Icon && (
                    <Icon
                      className="h-14 w-14 text-accent-light"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
              )}

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-navy-900">{name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                  {description}
                </p>

                <a
                  href={buildWhatsAppLink(`Hola, quiero consultar por: ${name}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-navy-900 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent"
                >
                  <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
