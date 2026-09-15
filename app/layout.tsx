import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_TITLE =
  "Electromecánica Fantasía | Grupos Electrógenos, Bombas y Service en Mendoza";
const SITE_DESCRIPTION =
  "Más de 50 años de trayectoria en Mendoza y Cuyo. Venta, alquiler y service de grupos electrógenos, bombas presurizadoras, extractores industriales y reparación de motores. Service oficial Rowa y Czerweny. Contactanos por WhatsApp.";
const OG_IMAGE = {
  url: "/images/generador-campo.jpeg",
  width: 1206,
  height: 1487,
  alt: "Grupo electrógeno Electromecánica Fantasía operando en el campo",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: "Electromecánica Fantasía",
    images: [OG_IMAGE],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
  verification: {
    google: "kJ2ww9Qw7R9qCSi97eflCA2eSJJXLjg8WAa8fApP8bs",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth scroll-pt-16 antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans text-navy-900">
        {children}
      </body>
    </html>
  );
}
