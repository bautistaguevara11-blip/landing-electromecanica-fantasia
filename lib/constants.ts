export const SITE_URL = "https://landing-electromecanica-fantasia.vercel.app";
export const WHATSAPP_NUMBER = "542612517986";
export const DISPLAY_PHONE = "2612517986";
export const EMAIL = "info@electrofantasiasrl.com.ar";
export const ADDRESS = "San Juan 401, (5500) Mendoza, Argentina";

export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
