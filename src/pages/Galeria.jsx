import { Link } from "react-router-dom";
import { OCCASIONS_LIST } from "../data/occasions";
import PlaceholderPhoto from "../components/PlaceholderPhoto";
import WhatsAppCTA from "../components/WhatsAppCTA";
import "./Galeria.css";

export default function Galeria() {
  return (
    <>
      <section className="section gallery-hero">
        <div className="container section-heading">
          <span className="eyebrow">Galería</span>
          <div className="divider-heart">♥</div>
          <h2>Encargos reales, contados con imágenes</h2>
          <p style={{ marginTop: 10 }}>
            Un vistazo a nuestro estilo por ocasión. Iremos añadiendo aquí fotografías reales de
            cada encargo a medida que las vayamos fotografiando.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container gallery-occasions-grid">
          {OCCASIONS_LIST.map((o) => (
            <Link to={`/${o.slug}`} className="gallery-occasion-card" key={o.slug}>
              <img src={o.heroImage} alt={`Detalles personalizados para ${o.name.toLowerCase()}`} />
              <span className="gallery-occasion-label">{o.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Muy pronto</span>
            <h2>Más fotos de encargos reales</h2>
          </div>
          <div className="gallery-placeholder-grid">
            {Array.from({ length: 8 }).map((_, i) => (
              <PlaceholderPhoto key={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta-inner">
          <h2>¿Quieres ver más ejemplos antes de decidirte?</h2>
          <p className="hero-text">Escríbenos por WhatsApp y te enseñamos fotos de encargos parecidos al tuyo.</p>
          <WhatsAppCTA label="Ver más ejemplos por WhatsApp" />
        </div>
      </section>
    </>
  );
}
