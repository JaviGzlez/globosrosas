// Post-build step: generates a static index.html per route with its own
// <title>, meta description and canonical URL, so search engines and social
// previews see page-specific metadata instead of the single shared one from
// the SPA's index.html. Vercel serves these static files directly for their
// exact path; any other path still falls back to the root index.html and
// client-side routing takes over as usual.
//
// Same pattern used in the "Me Gusta Mi Seguro" project. Keep this manifest
// in sync with src/data/blog.js whenever a blog post is added or renamed.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, "..", "dist");
const BASE_URL = "https://www.globosrosas.com";

const ROUTES = [
  {
    path: "/",
    title: "Globos Rosas — Regalos y Detalles Personalizados",
    description:
      "Globos Rosas — regalos y detalles personalizados para bodas, bautizos, comuniones y eventos. Enviamos a toda España. Escríbenos por WhatsApp.",
  },
  {
    path: "/bodas",
    title: "Detalles personalizados para bodas | Globos Rosas",
    description:
      "Detalles para invitados de boda personalizados con nombres, fecha y el estilo de tu celebración. Envíos a toda España. Pide presupuesto por WhatsApp.",
  },
  {
    path: "/bautizos",
    title: "Detalles personalizados para bautizos | Globos Rosas",
    description:
      "Recuerdos de bautizo personalizados con nombre y fecha, en tonos suaves a tu elección. Envíos a toda España. Consulta por WhatsApp sin compromiso.",
  },
  {
    path: "/comuniones",
    title: "Detalles personalizados para comuniones | Globos Rosas",
    description:
      "Detalles de comunión para niño y niña, personalizados con nombre, fecha y motivos religiosos. Envíos a toda España. Escríbenos por WhatsApp.",
  },
  {
    path: "/eventos",
    title: "Detalles personalizados para eventos | Globos Rosas",
    description:
      "Detalles a medida para cumpleaños, baby showers, aniversarios y eventos de empresa. Envíos a toda España. Cuéntanos tu idea por WhatsApp.",
  },
  {
    path: "/galeria",
    title: "Galería de detalles personalizados | Globos Rosas",
    description:
      "Descubre ejemplos de nuestros detalles personalizados para bodas, bautizos, comuniones y eventos.",
  },
  {
    path: "/blog",
    title: "Blog — Ideas y consejos para tu celebración | Globos Rosas",
    description:
      "Guías prácticas para preparar bodas, bautizos, comuniones y eventos: plazos, cantidades e ideas de detalles personalizados.",
  },
  {
    path: "/blog/cuando-encargar-detalles-boda",
    title: "¿Cuándo encargar los detalles de boda? Plazos recomendados | Globos Rosas",
    description:
      "Guía práctica sobre cuánto tiempo antes de la boda encargar los detalles personalizados para invitados: diseño, producción y envío a toda España.",
  },
  {
    path: "/blog/cuantos-detalles-necesitas-evento",
    title: "Cómo calcular cuántos detalles necesitas para tu evento | Globos Rosas",
    description:
      "Consejos prácticos para calcular la cantidad de detalles personalizados que necesitas en una boda, bautizo, comunión o evento.",
  },
  {
    path: "/blog/que-regalar-bautizo-invitados",
    title: "Qué regalar en un bautizo a los invitados: ideas personalizadas | Globos Rosas",
    description:
      "Ideas de detalles personalizados para invitados de bautizo: marcapáginas, llaveros, velas y bolsitas, con nombre y fecha del bebé.",
  },
  {
    path: "/sobre-pilar",
    title: "Sobre Pilar — Globos Rosas",
    description:
      "Conoce a Pilar, la persona detrás de Globos Rosas: años dedicándose a preparar celebraciones para familia y amigos, ahora al alcance de todos.",
  },
  {
    path: "/contacto",
    title: "Contacto — Globos Rosas",
    description:
      "Escríbenos por WhatsApp y cuéntanos tu ocasión, fecha e idea. Te respondemos con opciones y plazos sin compromiso. Envíos a toda España.",
  },
  {
    path: "/aviso-legal",
    title: "Aviso Legal — Globos Rosas",
    description: "Información legal del sitio web de Globos Rosas.",
  },
  {
    path: "/privacidad",
    title: "Política de Privacidad — Globos Rosas",
    description: "Política de privacidad y protección de datos de Globos Rosas.",
  },
  {
    path: "/cookies",
    title: "Política de Cookies — Globos Rosas",
    description: "Información sobre el uso de cookies en el sitio web de Globos Rosas.",
  },
];

function withMeta(html, { path: routePath, title, description }) {
  let out = html;

  out = out.replace(/<title>.*?<\/title>/s, `<title>${title}</title>`);

  out = out.replace(
    /<meta name="description" content=".*?"\s*\/>/s,
    `<meta name="description" content="${description}" />`
  );

  const canonicalTag = `<link rel="canonical" href="${BASE_URL}${routePath}" />`;
  if (out.includes('rel="canonical"')) {
    out = out.replace(/<link rel="canonical" href=".*?" \/>/s, canonicalTag);
  } else {
    out = out.replace("</head>", `    ${canonicalTag}\n  </head>`);
  }

  return out;
}

function run() {
  const templatePath = path.join(DIST_DIR, "index.html");
  if (!existsSync(templatePath)) {
    console.error("[prerender-meta] dist/index.html not found — run `vite build` first.");
    process.exit(1);
  }
  const template = readFileSync(templatePath, "utf-8");

  for (const route of ROUTES) {
    const html = withMeta(template, route);

    if (route.path === "/") {
      writeFileSync(templatePath, html);
      continue;
    }

    const outDir = path.join(DIST_DIR, route.path);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, "index.html"), html);
  }

  console.log(`[prerender-meta] Generated per-page metadata for ${ROUTES.length} routes.`);
}

run();
