import { useState } from "react";
import { OCCASIONS_LIST } from "../data/occasions";
import { buildWhatsAppLink } from "../data/site";
import whatsappGlyph from "../assets/icons/whatsapp-white.svg";
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
          <WhatsAppIcon size={30} />
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

function WhatsAppIcon({ small, size }) {
  const px = size ?? (small ? 18 : 22);
  return <img src={whatsappGlyph} width={px} height={px} alt="" aria-hidden="true" />;
}
