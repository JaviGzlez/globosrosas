# Globos Rosas — Web pública

Web pública de Globos Rosas: Inicio, Bodas, Bautizos, Comuniones, Eventos, Galería, Sobre
Nosotras y Contacto. Construida con React + Vite. Sin precios visibles y sin correo de
contacto (según lo acordado); todo el contacto pasa por WhatsApp.

## Poner en marcha

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # genera la carpeta dist/ lista para desplegar
npm run preview   # sirve dist/ localmente para comprobarlo
```

## Desplegar

`npm run build` genera una carpeta `dist/` estática: se puede desplegar tal cual en Vercel,
Netlify o cualquier hosting estático. Al desplegar en Vercel, sube el contenido de `dist/`
(o conecta el repo y configura "Build Command: npm run build" / "Output Directory: dist").

## Qué tocar para ir personalizando la web

- **Número de WhatsApp, Instagram y Facebook**: `src/data/site.js`.
- **Textos, FAQs e imágenes de cada ocasión** (Bodas, Bautizos, Comuniones, Eventos):
  `src/data/occasions.js`.
- **Fotos de marca ya incluidas**: `src/assets/brand/` (cabecera, proceso artesanal y las 4
  imágenes de categoría, extraídas del documento de propuesta).
- **Fotos de producto/galería reales**: de momento hay huecos marcados como
  "Foto próximamente" (componente `PlaceholderPhoto`) en las páginas de cada ocasión y en
  Galería — sustitúyelos por fotos reales de encargos cuando las tengas.
- **Textos generales de cada página**: cada página vive en `src/pages/` (Home.jsx,
  CategoryPage.jsx —plantilla común de Bodas/Bautizos/Comuniones/Eventos—, Galeria.jsx,
  SobreNosotras.jsx, Contacto.jsx).

## Decisiones ya aplicadas

- Sin precios visibles en ninguna página.
- Sin correo de contacto por ahora.
- WhatsApp 654 12 36 56 como único canal de contacto: aparece en el botón flotante, en cada
  página de ocasión y en Contacto. Al pulsar cualquier botón de WhatsApp se abre un mini
  formulario (ocasión, nombre, idea) que prepara el mensaje antes de abrir WhatsApp.

## Pendiente para siguientes fases (ver propuesta completa)

- Blog SEO (categorías y calendario de artículos ya definidos en la propuesta).
- Panel privado de pedidos, artículos, clientes, calendario y facturación.
- Fotos reales de catálogo para sustituir los huecos de galería.
- Dominio definitivo, aviso legal, política de privacidad y cookies.
