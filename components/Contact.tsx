import { Factory, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ADDRESS, DISPLAY_PHONE, EMAIL, buildWhatsAppLink } from "@/lib/constants";

export default function Contact() {
  return (
    <footer id="contacto" className="bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <span className="text-sm font-bold uppercase tracking-wider text-accent">
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
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-base font-bold text-navy-950 transition-colors hover:bg-accent-light"
            >
              <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
              Consultar por WhatsApp
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=San+Juan+401+Mendoza+Argentina"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.08]"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-accent">
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
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-accent">
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
              className="flex gap-4 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:bg-white/[0.08] sm:col-span-2"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-white/10 text-accent">
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

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent text-navy-950">
              <Factory className="h-4 w-4" strokeWidth={2.5} />
            </span>
            <span className="text-sm font-bold">
              Electromecánica Fantasía S.R.L.
            </span>
          </div>
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Electromecánica Fantasía S.R.L. —
            Mendoza, Argentina.
          </p>
        </div>
      </div>
    </footer>
  );
}
