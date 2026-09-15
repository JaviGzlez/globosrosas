import { INSTAGRAM_URL, FACEBOOK_URL, WHATSAPP_DISPLAY } from "../data/site";
import WhatsAppCTA from "../components/WhatsAppCTA";
import "./Contacto.css";

export default function Contacto() {
  return (
    <section className="section contact-section">
      <div className="container contact-inner">
        <span className="eyebrow">Contacto</span>
        <div className="divider-heart">♥</div>
        <h1>Hablemos de tu celebración</h1>
        <p className="hero-text contact-text">
          La forma más rápida de contactar con nosotras es WhatsApp. Cuéntanos la ocasión, la
          fecha aproximada y tu idea, y te respondemos con opciones y plazos sin compromiso.
        </p>

        <div className="contact-card">
          <span className="contact-card-icon">💬</span>
          <h3>{WHATSAPP_DISPLAY}</h3>
          <p>Respondemos lo antes posible, normalmente el mismo día.</p>
          <WhatsAppCTA label="Escribir por WhatsApp" />
        </div>

        <div className="contact-social">
          <span>También puedes encontrarnos en:</span>
          <div className="contact-social-links">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
