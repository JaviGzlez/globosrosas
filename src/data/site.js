export const SITE_NAME = "Globos Rosas";

// Número de WhatsApp de contacto (sin espacios, con prefijo de país 34)
export const WHATSAPP_NUMBER = "34654123656";
export const WHATSAPP_DISPLAY = "654 12 36 56";

export const INSTAGRAM_URL = "https://www.instagram.com/globos_rosas/";
export const FACEBOOK_URL = "https://www.facebook.com/Mis.Globos.Rosas";

export function buildWhatsAppLink(message) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

// Datos fiscales del titular, usados únicamente en las páginas legales
// (Aviso Legal y Privacidad). No se muestran en el resto de la web.
export const LEGAL_NAME = "M.ª del Pilar Bermejo de Pedro";
export const LEGAL_NIF = "50731980Y";
export const LEGAL_ADDRESS = "Calle Platino, Torrejón de Ardoz, Madrid";
export const LEGAL_EMAIL = "hola@globosrosas.com";
