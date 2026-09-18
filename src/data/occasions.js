import bodasImg from "../assets/brand/categoria-bodas.jpg";
import bautizosImg from "../assets/brand/categoria-bautizos.jpg";
import comunionesImg from "../assets/brand/categoria-comuniones.jpg";
import eventosImg from "../assets/brand/categoria-eventos.jpg";

export const PROCESS_STEPS = [
  {
    title: "Cuéntanos tu idea",
    text: "Escríbenos por WhatsApp con la ocasión, la fecha y una idea aproximada de cantidad y estilo.",
  },
  {
    title: "Diseñamos tu propuesta",
    text: "Te proponemos colores, materiales y acabados a juego con tu celebración, sin compromiso.",
  },
  {
    title: "Apruebas y preparamos",
    text: "Confirmas el diseño final y elaboramos cada detalle a mano, con cuidado y calma.",
  },
  {
    title: "Entrega cuidada",
    text: "Recibes tu pedido embalado con mimo, listo para el día que estáis celebrando.",
  },
];

export const OCCASIONS = {
  bodas: {
    slug: "bodas",
    name: "Bodas",
    tagline: "Detalles que enamoran",
    heroImage: bodasImg,
    intro:
      "Cada boda tiene su propia historia y su propia paleta de colores. Creamos detalles para invitados —recordatorios, packaging y pequeños regalos— personalizados con nombres, fechas y el estilo que elijáis, para que la pareja tenga algo verdaderamente suyo.",
    highlights: [
      "Paletas a juego con la decoración de tu boda",
      "Personalización con nombres y fecha del enlace",
      "Muestra disponible antes de confirmar el pedido completo",
      "Enviamos a toda España",
    ],
    faqs: [
      {
        q: "¿Con cuánta antelación debo encargar los detalles de mi boda?",
        a: "Recomendamos escribirnos al menos 6-8 semanas antes, sobre todo en temporada alta (primavera y verano), para tener tiempo de diseño, aprobación, producción y envío con calma.",
      },
      {
        q: "¿Puedo pedir una muestra antes de encargar la cantidad completa?",
        a: "Sí, puedes pedirnos una unidad de muestra para ver el acabado real antes de confirmar el pedido completo.",
      },
      {
        q: "¿Hacéis detalles a juego con la decoración de la mesa?",
        a: "Sí, adaptamos colores, cintas y materiales para que combinen con la paleta y el estilo de tu boda.",
      },
      {
        q: "¿Enviáis a toda España?",
        a: "Sí, preparamos y enviamos tu pedido a cualquier punto de España, esté donde esté tu boda.",
      },
      {
        q: "¿Cómo sé el precio de mi pedido?",
        a: "Al ser detalles personalizados, cada presupuesto depende de la cantidad, los materiales y la personalización elegida. Escríbenos por WhatsApp y te lo preparamos sin compromiso.",
      },
    ],
  },
  bautizos: {
    slug: "bautizos",
    name: "Bautizos",
    tagline: "Bienvenida a la vida",
    heroImage: bautizosImg,
    intro:
      "Recuerdos delicados para agradecer a quienes acompañan este día tan especial, personalizados con el nombre y la fecha del bautizo, en los tonos suaves que elijáis para la ocasión.",
    highlights: [
      "Personalización con nombre, fecha y frase especial",
      "Tonos suaves en rosa, verde menta o neutros",
      "Ideal para invitados, padrinos y madrinas",
      "Enviamos a toda España",
    ],
    faqs: [
      {
        q: "¿Qué suele regalarse a los invitados de un bautizo?",
        a: "Marcapáginas, llaveros, bolsitas de chuches o velas personalizadas suelen ser los detalles más habituales. Te ayudamos a elegir según el número de invitados y lo que buscas.",
      },
      {
        q: "¿Podéis personalizar con el nombre y la fecha del bebé?",
        a: "Sí, todos nuestros detalles se pueden personalizar con nombre, fecha y, si quieres, una frase especial para la ocasión.",
      },
      {
        q: "¿Cuánto tiempo necesitáis para prepararlo?",
        a: "Depende de la cantidad y el producto, pero recomendamos escribirnos con al menos 3-4 semanas de margen, para dar tiempo también al envío.",
      },
      {
        q: "¿Enviáis a toda España?",
        a: "Sí, hacemos envíos a cualquier punto de España.",
      },
    ],
  },
  comuniones: {
    slug: "comuniones",
    name: "Comuniones",
    tagline: "Un día inolvidable",
    heroImage: comunionesImg,
    intro:
      "Detalles pensados para el día de la comunión, con diseños delicados en rosa y verde menta para niñas y en tonos neutros para niños, personalizados con el nombre y la fecha de este día tan especial.",
    highlights: [
      "Diseños diferenciados para niño y para niña",
      "Motivos religiosos y frases personalizadas",
      "Combina varios productos en un mismo pedido",
      "Enviamos a toda España",
    ],
    faqs: [
      {
        q: "¿Tenéis opciones tanto para niño como para niña?",
        a: "Sí, trabajamos paletas y diseños distintos para adaptarnos al estilo que busca cada familia.",
      },
      {
        q: "¿Puedo combinar varios productos en el mismo pedido?",
        a: "Por supuesto. Muchas familias combinan marcapáginas con llaveros o pulseras a juego; cuéntanos tu idea y lo preparamos todo en conjunto.",
      },
      {
        q: "¿Hacéis recordatorios con motivos religiosos personalizados?",
        a: "Sí, podemos incluir motivos religiosos y frases especiales en el diseño de cada detalle.",
      },
      {
        q: "¿Enviáis la comunión a cualquier parte de España?",
        a: "Sí, preparamos tu pedido y lo enviamos a cualquier punto de España.",
      },
    ],
  },
  eventos: {
    slug: "eventos",
    name: "Eventos",
    tagline: "Celebra a tu manera",
    heroImage: eventosImg,
    intro:
      "Cumpleaños, baby showers, aniversarios o eventos de empresa: creamos detalles a medida para cualquier celebración, con la estética y el packaging que mejor represente tu evento.",
    highlights: [
      "Cumpleaños, baby showers y aniversarios",
      "Regalos corporativos con imagen de empresa",
      "Diseño y packaging totalmente a medida",
      "Enviamos a toda España",
    ],
    faqs: [
      {
        q: "¿Hacéis detalles para eventos de empresa?",
        a: "Sí, podemos adaptar diseño y packaging a la imagen de tu empresa para regalos corporativos o eventos especiales.",
      },
      {
        q: "¿Cuál es la cantidad mínima de pedido?",
        a: "Depende del producto. Escríbenos con el número aproximado de invitados y te confirmamos disponibilidad y plazos.",
      },
      {
        q: "¿Puedo pedir algo distinto a lo que veo en la web?",
        a: "Claro, las imágenes son ejemplos de nuestro estilo. Cuéntanos tu idea y buscamos la forma de hacerla realidad.",
      },
      {
        q: "¿Enviáis fuera de mi ciudad?",
        a: "Sí, hacemos envíos a toda España, así que podemos ayudarte estés donde estés.",
      },
    ],
  },
};

export const OCCASIONS_LIST = Object.values(OCCASIONS);
