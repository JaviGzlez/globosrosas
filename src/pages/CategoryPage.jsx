import { OCCASIONS, PROCESS_STEPS } from "../data/occasions";
import WhatsAppCTA from "../components/WhatsAppCTA";
import FAQ from "../components/FAQ";
import PlaceholderPhoto from "../components/PlaceholderPhoto";
import "./CategoryPage.css";

export default function CategoryPage({ slug }) {
  const data = OCCASIONS[slug];

  return (
    <>
      <section className="cat-hero">
        <div className="container cat-hero-inner">
          <div>
            <span className="eyebrow">{data.tagline}</span>
            <h1>{data.name}</h1>
            <p className="hero-text">{data.intro}</p>
            <ul className="cat-highlights">
              {data.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <WhatsAppCTA label="Consultar por WhatsApp" defaultOccasion={slug} />
          </div>
          <div className="cat-hero-media">
            <img src={data.heroImage} alt={`Detalles personalizados para ${data.name.toLowerCase()}`} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Nuestro trabajo</span>
            <div className="divider-heart">♥</div>
            <h2>Ejemplos de {data.name.toLowerCase()}</h2>
            <p style={{ marginTop: 10 }}>
              Estamos preparando la galería con fotos reales de encargos de {data.name.toLowerCase()}.
              Mientras tanto, escríbenos por WhatsApp y te enseñamos ejemplos directamente.
            </p>
          </div>
          <div className="cat-gallery-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <PlaceholderPhoto key={i} label={`Foto de ${data.name.toLowerCase()} próximamente`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Cómo funciona</span>
            <div className="divider-heart">♥</div>
            <h2>Encargar tus detalles es fácil</h2>
          </div>
          <div className="process-grid">
            {PROCESS_STEPS.map((step, i) => (
              <div className="process-card" key={step.title}>
                <span className="process-number">{i + 1}</span>
                <h4>{step.title}</h4>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Preguntas frecuentes</span>
            <div className="divider-heart">♥</div>
            <h2>Dudas sobre {data.name.toLowerCase()}</h2>
          </div>
          <FAQ items={data.faqs} />
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta-inner">
          <h2>Cuéntanos tu idea para {data.name.toLowerCase()}</h2>
          <p className="hero-text">Sin compromiso: te respondemos por WhatsApp con opciones y plazos.</p>
          <WhatsAppCTA label="Escríbenos por WhatsApp" defaultOccasion={slug} />
        </div>
      </section>
    </>
  );
}
