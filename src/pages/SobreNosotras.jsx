import procesoImg from "../assets/brand/proceso-artesanal.jpg";
import heroImg from "../assets/brand/header-hero.jpg";
import WhatsAppCTA from "../components/WhatsAppCTA";
import "./SobreNosotras.css";

const TRAITS = [
  {
    title: "Especialistas en detalles personalizados",
    text: "No somos una tienda genérica de regalos: cada encargo nace de una ocasión, una idea y unos nombres concretos.",
  },
  {
    title: "Estética reconocible",
    text: "Rosa empolvado, verde menta, marfil y pequeños acentos dorados en todo lo que creamos.",
  },
  {
    title: "Trato cercano",
    text: "Te acompañamos desde la primera idea hasta que el detalle llega a tus manos.",
  },
  {
    title: "Productos con historia",
    text: "Fotografiados en encargos reales y explicados con claridad, sin sorpresas de última hora.",
  },
];

export default function SobreNosotras() {
  return (
    <>
      <section className="section about-page-hero">
        <div className="container about-page-hero-inner">
          <div>
            <span className="eyebrow">Sobre nosotras</span>
            <h1>Hecho con amor, para celebrar la vida</h1>
            <p className="hero-text">
              Globos Rosas crea recuerdos personalizados para momentos importantes. Cada encargo
              parte de una ocasión, una idea y unos nombres o colores; transformamos esa
              información en detalles cuidados para bodas, bautizos, comuniones, cumpleaños y otros
              eventos.
            </p>
            <p className="hero-text">
              Nuestro valor no está únicamente en el producto final, sino en el acompañamiento, la
              personalización y la presentación artesanal de cada detalle.
            </p>
          </div>
          <div className="about-page-media">
            <img src={heroImg} alt="Detalle personalizado con lazo verde menta y flores secas" />
          </div>
        </div>
      </section>

      <section className="section about-page-process">
        <div className="container about-page-process-inner">
          <div className="about-page-media">
            <img src={procesoImg} alt="Preparando a mano un detalle personalizado" />
          </div>
          <div>
            <span className="eyebrow">Nuestro sello</span>
            <h2>Lo que nos hace Globos Rosas</h2>
            <div className="traits-list">
              {TRAITS.map((t) => (
                <div className="trait-item" key={t.title}>
                  <span className="value-dot" />
                  <div>
                    <h4>{t.title}</h4>
                    <p>{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section final-cta">
        <div className="container final-cta-inner">
          <h2>¿Hablamos de tu próxima celebración?</h2>
          <p className="hero-text">Cuéntanos qué estáis preparando y te ayudamos a darle forma.</p>
          <WhatsAppCTA label="Escríbenos por WhatsApp" />
        </div>
      </section>
    </>
  );
}
