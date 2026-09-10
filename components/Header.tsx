"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/constants";

const NAV_LINKS = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#servicios", label: "Servicios" },
  { href: "#marcas", label: "Marcas" },
  { href: "#rubros", label: "Rubros" },
  { href: "#grupos-electrogenos", label: "Generadores" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#videos", label: "Videos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-navy-700 bg-navy-900 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white p-1">
            <Image
              src="/images/logo.jpeg"
              alt="Electromecánica Fantasía"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-bold tracking-wide sm:text-base">
              ELECTROMECÁNICA FANTASÍA
            </span>
            <span className="hidden text-[11px] font-medium text-navy-500 sm:block">
              Desde hace más de 50 años
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/85 transition-colors hover:text-accent-light"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-accent-light sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
            Contactar por WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Abrir menú"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white xl:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-navy-700 bg-navy-900 px-4 pb-4 xl:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-white/85 hover:bg-navy-800 hover:text-accent-light"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={buildWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-bold text-white hover:bg-accent-light"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.5} />
            Contactar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
