import "./PlaceholderPhoto.css";

/**
 * Hueco de foto pendiente de sustituir por una imagen real del catálogo.
 * Se usa en las galerías mientras no tengamos las fotos definitivas de cada
 * artículo — se reconoce fácilmente en el código como "PlaceholderPhoto".
 */
export default function PlaceholderPhoto({ label = "Foto próximamente" }) {
  return (
    <div className="placeholder-photo">
      <span className="placeholder-icon" aria-hidden="true">
        🖼️
      </span>
      <span>{label}</span>
    </div>
  );
}
