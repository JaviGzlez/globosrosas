import { useState } from "react";
import { OCCASIONS_LIST } from "../data/occasions";
import { buildWhatsAppLink } from "../data/site";
import "./WhatsAppCTA.css";

/**
 * Botón que abre un pequeño formulario antes de saltar a WhatsApp.
 * Mantiene el mismo patrón de conversión en toda la web: recoger la
 * ocasión y la idea del cliente para que el primer mensaje ya venga
 * con contexto útil para Javi y Pilu.
 */
export default function WhatsAppCTA({
  label = "Escríbenos por WhatsApp",
  defaultOccasion = "",
  variant = "button", // "button" | "floating"
  className = "",
}) {
  const [open, setOpen] = useState(false);
  const [occasion, setOccasion] = useState(defaultOccasion);
  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const occasionLabel =
      OCCASIONS_LIST.find((o) => o.slug === occasion)?.name || occasion || "mi celebración";
    const lines = [
      `¡Hola! Soy ${name || "—"} y me gustaría pedir información sobre detalles para ${occasionLabel}.`,
      idea ? `Mi idea: ${idea}` : null,
    ].filter(Boolean);
    window.open(buildWhatsAppLink(lines.join(" ")), "_blank", "noopener");
    setOpen(false);
    setIdea("");
    setName("");
  }

  return (
    <>
      {variant === "floating" ? (
        <button
          type="button"
          className="whatsapp-floating"
          onClick={() => setOpen(true)}
          aria-label="Escríbenos por WhatsApp"
        >
          <WhatsAppIcon />
          <span>¿Te ayudamos?</span>
        </button>
      ) : (
        <button type="button" className={`btn btn-whatsapp ${className}`} onClick={() => setOpen(true)}>
          <WhatsAppIcon small />
          {label}
        </button>
      )}

      {open && (
        <div className="wa-modal-overlay" onClick={() => setOpen(false)}>
          <div className="wa-modal" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="wa-modal-close" onClick={() => setOpen(false)} aria-label="Cerrar">
              ×
            </button>
            <h3>Cuéntanos tu idea</h3>
            <p className="wa-modal-sub">
              Rellena estos datos y te abrimos WhatsApp con el mensaje ya preparado.
            </p>
            <form onSubmit={handleSubmit}>
              <label className="wa-field">
                <span>Ocasión</span>
                <select value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                  <option value="" disabled>
                    Elige una ocasión
                  </option>
                  {OCCASIONS_LIST.map((o) => (
                    <option key={o.slug} value={o.slug}>
                      {o.name}
                    </option>
                  ))}
                  <option value="otro">Otro evento</option>
                </select>
              </label>
              <label className="wa-field">
                <span>Tu nombre</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="¿Cómo te llamas?"
                />
              </label>
              <label className="wa-field">
                <span>Tu idea (opcional)</span>
                <textarea
                  value={idea}
                  onChange={(e) => setIdea(e.target.value)}
                  placeholder="Fecha aproximada, cantidad, colores, estilo..."
                  rows={3}
                />
              </label>
              <button type="submit" className="btn btn-whatsapp wa-submit">
                <WhatsAppIcon small />
                Continuar en WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function WhatsAppIcon({ small }) {
  const size = small ? 18 : 22;
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16.02 3C9.4 3 4 8.38 4 15c0 2.23.6 4.32 1.66 6.12L4 29l8.06-1.63A11.9 11.9 0 0 0 16.02 27C22.63 27 28 21.62 28 15S22.63 3 16.02 3Z"
        fill="currentColor"
      />
      <path
        d="M21.6 18.2c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.9-.8-1.5-1.78-1.68-2.08-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.5-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.5.71.3 1.27.48 1.7.62.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z"
        fill="var(--cream, #fff)"
      />
    </svg>
  );
}
