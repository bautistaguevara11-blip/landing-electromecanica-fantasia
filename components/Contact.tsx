import Image from "next/image";
import { Factory, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import InstagramIcon from "@/components/icons/InstagramIcon";
import { ADDRESS, DISPLAY_PHONE, EMAIL, buildWhatsAppLink } from "@/lib/constants";

export default function Contact() {
  return (
    <footer id="contacto" className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-accent-light">
              Contacto
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Hablemos de su proyecto
            </h2>
            <p className="mt-4 text-white/70">
              Escríbanos por WhatsApp o visítenos en nuestro local en la
              ciudad de Mendoza.
            </p>

            <a
              href={buildWhatsAppLink(
                "Hola, quiero hacer una consulta a Electromecánica Fantasía."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-accent-light"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Consultar por WhatsApp
            </a>

            <div className="mt-10 grid gap-4">
              <a
                href="https://www.google.com/maps/search/?api=1&query=San+Juan+401+Mendoza+Argentina"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.08]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-accent-light">
                  <MapPin className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-white/60">
                    Dirección
                  </p>
                  <p className="mt-1 text-white/90">{ADDRESS}</p>
                </div>
              </a>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.08]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-accent-light">
                  <Phone className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-white/60">
                    Teléfono / WhatsApp
                  </p>
                  <p className="mt-1 text-white/90">{DISPLAY_PHONE}</p>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.08]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-accent-light">
                  <Mail className="h-5 w-5" strokeWidth={2.25} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-white/60">
                    Email
                  </p>
                  <p className="mt-1 text-white/90">{EMAIL}</p>
                </div>
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-xl">
              <Image
                src="/images/horarios.jpeg"
                alt="Nuestros horarios: lunes a viernes de 8.30 a 17.30, sábados de 9 a 13"
                width={1206}
                height={1192}
                sizes="(min-width: 1024px) 460px, 90vw"
                className="h-auto w-full rounded-lg"
              />
            </div>
            <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-xl">
              <Image
                src="/images/mapa.jpeg"
                alt="Mapa de ubicación: San Juan 401 esquina Moron, Mendoza"
                width={1206}
                height={1181}
                sizes="(min-width: 1024px) 460px, 90vw"
                className="h-auto w-full rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-white">
              <Factory className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-sm font-bold">
              Electromecánica Fantasía S.R.L.
            </span>
          </div>

          <a
            href="https://instagram.com/electromecanicafantasia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Seguinos en Instagram"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent"
          >
            <InstagramIcon className="h-4 w-4" strokeWidth={2.25} />
          </a>

          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Electromecánica Fantasía S.R.L. —
            Mendoza, Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
}
