import { Link } from "react-router-dom";
import heroImg from "../assets/brand/header-hero.jpg";
import procesoImg from "../assets/brand/proceso-artesanal.jpg";
import { OCCASIONS_LIST, PROCESS_STEPS } from "../data/occasions";
import WhatsAppCTA from "../components/WhatsAppCTA";
import "./Home.css";

const FEATURES = [
  {
    icon: "💗",
    title: "Personalización a tu medida",
    text: "Creamos detalles únicos pensados para ti.",
  },
  {
    icon: "🎁",
    title: "Calidad y cuidado en cada detalle",
    text: "Seleccionamos los mejores materiales para cada ocasión.",
  },
  {
    icon: "🎈",
    title: "Para cada celebración",
    text: "Bodas, bautizos, comuniones y eventos especiales.",
  },
  {
    icon: "✉️",
    title: "Atención personalizada",
    text: "Te asesoramos por WhatsApp para que todo salga perfecto.",
  },
];

const VALUES = [
  { title: "Diseños exclusivos", text: "Creamos cada detalle con un estilo propio y original." },
  { title: "Hecho a mano", text: "Cuidamos cada paso del proceso con dedicación y mimo." },
  { title: "Envío cuidado", text: "Preparamos tu pedido con todo el cariño para que llegue perfecto." },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Detalles que cuentan historias</span>
            <h1>
              Regalos personalizados
              <br />
              <span className="script">para momentos únicos</span>
            </h1>
            <p className="hero-text">
              Bodas, bautizos, comuniones y eventos que merecen ser recordados. Cuéntanos tu idea
              y la convertimos en un detalle hecho a mano, con tu estilo y tus colores.
            </p>
            <div className="hero-actions">
              <a href="#ocasiones" className="btn btn-primary">
                Descubrir colecciones
              </a>
              <WhatsAppCTA label="Escríbenos por WhatsApp" />
            </div>
            <p className="hero-shipping">📦 Enviamos a toda España</p>
          </div>
          <div className="hero-media">
            <img src={heroImg} alt="Detalle personalizado envuelto con lazo verde menta y flores secas" />
          </div>
        </div>
      </section>

      <section className="features-bar">
        <div className="container features-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <span className="feature-icon">{f.icon}</span>
              <div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="ocasiones">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Nuestras colecciones</span>
            <div className="divider-heart">♥</div>
            <h2>¿Qué estáis celebrando?</h2>
          </div>
          <div className="occasions-grid">
            {OCCASIONS_LIST.map((o) => (
              <Link to={`/${o.slug}`} className="occasion-card" key={o.slug}>
                <div className="occasion-image">
                  <img src={o.heroImage} alt={`Detalles personalizados para ${o.name.toLowerCase()}`} />
                </div>
                <h3>{o.name}</h3>
                <span className="occasion-tagline">{o.tagline}</span>
                <span className="occasion-link">Ver colección →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Cómo trabajamos</span>
            <div className="divider-heart">♥</div>
            <h2>De tu idea a tu detalle, en cuatro pasos</h2>
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

      <section className="section about-teaser">
        <div className="container about-grid">
          <div className="about-media">
            <img src={procesoImg} alt="Preparando a mano un detalle personalizado con cintas y flores secas" />
          </div>
          <div>
            <span className="eyebrow">Sobre Globos Rosas</span>
            <h2>
              Hecho con amor,
              <br />
              para celebrar la vida
            </h2>
            <p className="hero-text">
              En Globos Rosas creamos detalles personalizados para que cada celebración sea
              especial e inolvidable. Nos encanta formar parte de tus momentos más importantes.
            </p>
            <div className="values-list">
              {VALUES.map((v) => (
                <div className="value-item" key={v.title}>
                  <span className="value-dot" />
                  <div>
                    <h4>{v.title}</h4>
                    <p>{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/sobre-pilar" className="btn btn-primary">
              Conoce a Pilar
            </Link>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta-inner">
          <h2>¿Tienes una celebración en mente?</h2>
          <p className="hero-text">
            Cuéntanos la ocasión, la fecha y tu idea, y te ayudamos a crear el detalle perfecto.
          </p>
          <WhatsAppCTA label="Empezar por WhatsApp" />
        </div>
      </section>
    </>
  );
}
