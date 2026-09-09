import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Electromecánica Fantasía S.R.L. | Mendoza, Argentina",
  description:
    "Más de 50 años de trayectoria industrial en Mendoza y Cuyo. Reparación de motores, tableros eléctricos, extractores, electrobombas, y venta y alquiler de grupos electrógenos y torres de iluminación. Service oficial Rowa y Czerweny.",
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
